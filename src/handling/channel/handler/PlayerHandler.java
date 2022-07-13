/*
 This file is part of the OdinMS Maple Story Server
 Copyright (C) 2008 ~ 2010 Patrick Huy <patrick.huy@frz.cc> 
 Matthias Butz <matze@odinms.de>
 Jan Christian Meyer <vimes@odinms.de>

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License version 3
 as published by the Free Software Foundation. You may not use, modify
 or distribute this program under any other version of the
 GNU Affero General Public License.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package handling.channel.handler;

import java.awt.Point;
import java.lang.ref.WeakReference;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import client.ISkill;
import client.MapleBuffStat;
import client.MapleCharacter;
import client.MapleClient;
import client.PlayerStats;
import client.SkillFactory;
import client.SkillMacro;
import client.anticheat.CheatingOffense;
import client.inventory.IItem;
import client.inventory.MapleInventoryType;
import constants.GameConstants;
import constants.MapConstants;
import constants.SkillType.刺客;
import constants.SkillType.圣骑士;
import constants.SkillType.夜使者;
import constants.SkillType.弓箭手;
import constants.SkillType.弩弓手;
import constants.SkillType.暗夜行者1;
import constants.SkillType.暗夜行者2;
import constants.SkillType.暗夜行者3;
import constants.SkillType.暗影神偷;
import constants.SkillType.暗杀者;
import constants.SkillType.枪手;
import constants.SkillType.枪神;
import constants.SkillType.海盗;
import constants.SkillType.游侠;
import constants.SkillType.狂狼勇士3;
import constants.SkillType.狂狼勇士4;
import constants.SkillType.狙击手;
import constants.SkillType.猎人;
import constants.SkillType.盗贼;
import constants.SkillType.破风使者1;
import constants.SkillType.破风使者2;
import constants.SkillType.破风使者3;
import constants.SkillType.神射手;
import constants.SkillType.神枪手;
import constants.SkillType.箭神;
import constants.SkillType.英雄;
import constants.SkillType.黑骑士;
import database.DBConPool;
import handling.channel.ChannelServer;
import handling.world.World;
import server.AutobanManager;
import server.MapleInventoryManipulator;
import server.MapleItemInformationProvider;
import server.MaplePortal;
import server.MapleStatEffect;
import server.Randomizer;
import server.Timer.CloneTimer;
import server.events.MapleSnowball.MapleSnowballs;
import server.life.MapleMonster;
import server.life.MobAttackInfo;
import server.life.MobAttackInfoFactory;
import server.life.MobSkill;
import server.life.MobSkillFactory;
import server.maps.FieldLimitType;
import server.maps.MapleMap;
import server.movement.LifeMovementFragment;
import server.quest.MapleQuest;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;
import tools.data.LittleEndianAccessor;
import tools.packet.MTSCSPacket;
import tools.packet.MobPacket;
import tools.packet.UIPacket;

public class PlayerHandler {

    private static boolean isFinisher(final int skillid) {
        switch (skillid) {
            case 1111003:
            case 1111004:
            case 1111005:
            case 1111006:
            case 11111002:
            case 11111003:
                return true;
        }
        return false;
    }

    public static void ChangeMonsterBookCover(final int bookid, final MapleClient c, final MapleCharacter chr) {
        if (bookid == 0 || GameConstants.isMonsterCard(bookid)) {
            chr.setMonsterBookCover(bookid);
            chr.getMonsterBook().updateCard(c, bookid);
        }
    }

    public static void ChangeSkillMacro(final LittleEndianAccessor slea, final MapleCharacter chr) {
        final int num = slea.readByte();
        String name;
        int shout, skill1, skill2, skill3;
        SkillMacro macro;

        for (int i = 0; i < num; i++) {
            name = slea.readMapleAsciiString();
            shout = slea.readByte();
            skill1 = slea.readInt();
            skill2 = slea.readInt();
            skill3 = slea.readInt();

            macro = new SkillMacro(skill1, skill2, skill3, name, shout, i);
            chr.updateMacros(i, macro);
        }
    }

    public static final void ChangeKeymap(final LittleEndianAccessor slea, final MapleCharacter chr) {
        if (slea.available() > 8 && chr != null) { // else = pet auto pot
            chr.updateTick(slea.readInt());
            final int numChanges = slea.readInt();

            for (int i = 0; i < numChanges; i++) {
                chr.changeKeybinding(slea.readInt(), slea.readByte(), slea.readInt());
            }
        } else if (chr != null) {
            final int type = slea.readInt(), data = slea.readInt();
            switch (type) {
                case 1:
                    if (data <= 0) {
                        chr.getQuestRemove(MapleQuest.getInstance(GameConstants.HP_ITEM));
                    } else {
                        chr.getQuestNAdd(MapleQuest.getInstance(GameConstants.HP_ITEM))
                                .setCustomData(String.valueOf(data));
                    }
                    break;
                case 2:
                    if (data <= 0) {
                        chr.getQuestRemove(MapleQuest.getInstance(GameConstants.MP_ITEM));
                    } else {
                        chr.getQuestNAdd(MapleQuest.getInstance(GameConstants.MP_ITEM))
                                .setCustomData(String.valueOf(data));
                    }
                    break;
            }
        }
    }

    public static final void UseChair(final int itemId, final MapleClient c, final MapleCharacter chr) {
        if (chr == null) {
            return;
        }

        if (itemId == 3012024) {
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }

        final MapleInventoryType type = GameConstants.getInventoryType(itemId);
        IItem toUse = chr.getInventory(type).findById(itemId);
        if (toUse == null && itemId >= 3010000 && itemId < 9999999) {
            FileoutputUtil.logToFile("logs/Hack/Ban/修改封包.txt",
                    "\r\n " + FileoutputUtil.NowTime() + " 玩家：" + c.getPlayer().getName() + "(" + c.getPlayer().getId()
                            + ") 修改椅子(" + itemId + ")封包，坐上椅子时封锁。 身上并没有该物品");
            World.Broadcast.broadcastMessage(
                    MaplePacketCreator.serverNotice(6, "[封锁系统] " + c.getPlayer().getName() + " 因为修改封包而被管理员永久停权。"));
            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM密语]  " + c.getPlayer().getName()
                    + "(" + c.getPlayer().getId() + ") 修改椅子(" + itemId + ")封包，坐上椅子时封锁。 身上并没有该物品"));
            c.getPlayer().ban("修改封包", true, true, false);
            c.getSession().close();
            return;
        }
        // if (toUse == null) {
        // chr.getCheatTracker().registerOffense(CheatingOffense.USING_UNAVAILABLE_ITEM,
        // Integer.toString(itemId));
        // return;
        // }
        if (/* itemId == 3010001 */itemId / 10000 == 301 && GameConstants.isFishingMap(chr.getMapId())) {
            boolean haz = false;
            for (IItem item : c.getPlayer().getInventory(MapleInventoryType.CASH).list()) {
                if (item.getItemId() == 5340000) {
                    haz = true;
                } else if (item.getItemId() == 5340001) {
                    haz = false;
                    chr.startFishingTask(true);
                    break;
                }
            }
            if (haz) {
                chr.startFishingTask(false);
            }
        }
        chr.setChair(itemId);
        // int tamingMob =
        // MapleItemInformationProvider.getInstance().getChairMountId(itemId) - 50000;
        // if (tamingMob <= 0) {
        // tamingMob = 0;
        // }
        chr.getMap().broadcastMessage(chr, MaplePacketCreator.showChair(chr.getId(), itemId), false);
        // List<Pair<MapleBuffStat, Integer>> stat = Collections.singletonList(new
        // Pair(MapleBuffStat.MONSTER_RIDING, 0));
        // chr.getClient().getSession().write(MaplePacketCreator.giveMount(tamingMob,
        // itemId, stat));
        // chr.getMap().broadcastMessage(chr, MaplePacketCreator.showChair(chr.getId(),
        // itemId), false);
        // chr.getMap().broadcastMessage(chr,
        // MaplePacketCreator.showMonsterRiding(chr.getId(), stat, tamingMob, itemId),
        // false);
        c.sendPacket(MaplePacketCreator.enableActions());
    }

    public static final void CancelChair(final short id, final MapleClient c, final MapleCharacter chr) {
        if (chr == null || c == null) {
            return;
        }
        if (id == -1) { // Cancel Chair
            if (/* chr.getChair() == 3010001 */chr.getChair() / 10000 == 301
                    && GameConstants.isFishingMap(chr.getMapId())) {
                chr.cancelFishingTask();
            }
            chr.setChair(0);
            c.sendPacket(MaplePacketCreator.cancelChair(-1));
            chr.getMap().broadcastMessage(chr, MaplePacketCreator.showChair(chr.getId(), 0), false);
        } else { // Use In-Map Chair
            chr.setChair(id);
            c.sendPacket(MaplePacketCreator.cancelChair(id));
        }
        chr.cancelBuffStats(new MapleBuffStat[] { MapleBuffStat.MONSTER_RIDING });
    }

    public static final void TrockAddMap(final LittleEndianAccessor slea, final MapleClient c,
            final MapleCharacter chr) {
        final byte addrem = slea.readByte();
        final byte vip = slea.readByte();

        if (vip == 1) {
            if (addrem == 0) {
                chr.deleteFromRocks(slea.readInt());
            } else if (addrem == 1) {
                if (!FieldLimitType.VipRock.check(chr.getMap().getFieldLimit())) {
                    if (c.getPlayer().getMapId() != 180000000) {
                        chr.addRockMap();
                    } else {
                        chr.dropMessage(1, "你不能储存这张地图");
                    }
                }
            }
        } else if (addrem == 0) {
            chr.deleteFromRegRocks(slea.readInt());
        } else if (addrem == 1) {
            if (!FieldLimitType.VipRock.check(chr.getMap().getFieldLimit())) {
                if (c.getPlayer().getMapId() <= 197010000 && c.getPlayer().getMapId() != 180000000) {
                    chr.addRegRockMap();
                } else {
                    chr.dropMessage(1, "你不能储存这张地图");
                }
            }
        }
        c.sendPacket(MTSCSPacket.getTrockRefresh(chr, vip, addrem == 0));
    }

    public static final void CharInfoRequest(final int objectid, final MapleClient c, final MapleCharacter chr) {
        if (c.getPlayer() == null || c.getPlayer().getMap() == null) {
            return;
        }
        final MapleCharacter player = c.getPlayer().getMap().getCharacterById(objectid);
        c.sendPacket(MaplePacketCreator.enableActions());
        if (player != null && !player.isClone()) {
            if (!player.isGM() || c.getPlayer().isGM()) {
                c.sendPacket(MaplePacketCreator.charInfo(player, c.getPlayer().getId() == objectid));
            }
        }
    }

    public static final void TakeDamage(final LittleEndianAccessor slea, final MapleClient c,
            final MapleCharacter chr) {
        // System.out.println(slea.toString());
        if (slea.available() < 5) {
            return;
        }
        // 29 00
        // D6 AF 40 05
        // FF 00 01 00 00 00 F4 76 12 00 10 9D 01 00 00 00 00 00 ?

        // chr.updateTick(slea.readInt());
        slea.skip(4);
        final byte type = slea.readByte(); // -4 is mist, -3 and -2 are map damage.
        slea.skip(1); // Element - 0x00 = elementless, 0x01 = ice, 0x02 = fire, 0x03 = lightning
        int damage = slea.readInt();
        int oid = 0;
        int monsteridfrom = 0;
        int reflect = 0;
        byte direction = 0;
        int pos_x = 0;
        int pos_y = 0;
        int fake = 0;
        int mpattack = 0;
        boolean is_pg = false;
        boolean isDeadlyAttack = false;
        MapleMonster attacker = null;
        if (chr == null || chr.isHidden() || chr.getMap() == null) {
            return;
        }

        if (chr.isGM() && chr.isInvincible()) {
            return;
        }
        final PlayerStats stats = chr.getStat();
        if (type != -2 && type != -3 && type != -4) { // Not map damage
            monsteridfrom = slea.readInt();
            oid = slea.readInt();
            attacker = chr.getMap().getMonsterByOid(oid);
            direction = slea.readByte();

            if (attacker == null) {
                return;
            }
            if (type != -1) { // Bump damage
                final MobAttackInfo attackInfo = MobAttackInfoFactory.getInstance().getMobAttackInfo(attacker, type);
                if (attackInfo != null) {
                    if (attackInfo.isDeadlyAttack()) {
                        isDeadlyAttack = true;
                        mpattack = stats.getMp() - 1;
                    } else {
                        mpattack += attackInfo.getMpBurn();
                    }
                    final MobSkill skill = MobSkillFactory.getMobSkill(attackInfo.getDiseaseSkill(),
                            attackInfo.getDiseaseLevel());
                    // if (skill == null) {
                    // FileoutputUtil.logToFile("logs/怪物技能错误/怪物技能错误.txt", "\r\n " + "TakeDamage1
                    // mobSkill ==null");
                    // }
                    if (skill != null && (damage == -1 || damage > 0)) {
                        skill.applyEffect(chr, attacker, false);
                    }
                    attacker.setMp(attacker.getMp() - attackInfo.getMpCon());
                }
            }
        }

        if (damage == -1) {
            fake = 4020002 + ((chr.getJob() / 10 - 40) * 100000);
        } else if (damage < -1 || damage > 60000) {
            AutobanManager.getInstance().addPoints(c, 1000, 60000,
                    "Taking abnormal amounts of damge from " + monsteridfrom + " : " + damage);
            return;
        }
        if (!chr.inBossMap()) {
            chr.getCheatTracker().checkTakeDamage(damage);
        }
        if (damage > 0) {
            chr.getCheatTracker().setAttacksWithoutHit(false);

            if (chr.getBuffedValue(MapleBuffStat.MORPH) != null) {
                chr.cancelMorphs();
            }
            /*
             * if (slea.available() == 3) {
             * byte level = slea.readByte();
             * if (level > 0) {
             * final MobSkill skill = MobSkillFactory.getMobSkill(slea.readShort(), level);
             * //if (skill == null) {
             * // FileoutputUtil.logToFile("logs/怪物技能错误/怪物技能错误.txt", "\r\n " +
             * "TakeDamage2 mobSkill ==null");
             * //}
             * if (skill != null) {
             * skill.applyEffect(chr, attacker, false);
             * }
             * }
             * }
             */
            if (type != -2 && type != -3 && type != -4) {
                final int bouncedam_ = (Randomizer.nextInt(100) < chr.getStat().DAMreflect_rate
                        ? chr.getStat().DAMreflect
                        : 0)
                        + (type == -1 && chr.getBuffedValue(MapleBuffStat.POWERGUARD) != null
                                ? chr.getBuffedValue(MapleBuffStat.POWERGUARD)
                                : 0);
                if (bouncedam_ > 0 && attacker != null) {
                    long bouncedamage = (long) (damage * bouncedam_ / 100);
                    chr.getMap().broadcastMessage(chr, MobPacket.damageMonster(oid, bouncedamage), chr.getPosition());
                    bouncedamage = Math.min(bouncedamage, attacker.getMobMaxHp() / 10);
                    attacker.damage(chr, bouncedamage, true);
                    damage -= bouncedamage;
                    is_pg = true;
                }
            }
            if (type != -2 && type != -3 && type != -4) {
                switch (chr.getJob()) {
                    case 112: {
                        final ISkill skill = SkillFactory.getSkill(英雄.武神防御);
                        if (chr.getSkillLevel(skill) > 0) {
                            damage = (int) ((skill.getEffect(chr.getSkillLevel(skill)).getX() / 1000.0) * damage);
                        }
                        break;
                    }
                    case 122: {
                        final ISkill skill = SkillFactory.getSkill(圣骑士.武神防御);
                        if (chr.getSkillLevel(skill) > 0) {
                            damage = (int) ((skill.getEffect(chr.getSkillLevel(skill)).getX() / 1000.0) * damage);
                        }
                        break;
                    }
                    case 132: {
                        final ISkill skill = SkillFactory.getSkill(黑骑士.武神防御);
                        if (chr.getSkillLevel(skill) > 0) {
                            damage = (int) ((skill.getEffect(chr.getSkillLevel(skill)).getX() / 1000.0) * damage);
                        }
                        break;
                    }
                    case 2112: {
                        final ISkill skill = SkillFactory.getSkill(狂狼勇士4.防御战术);
                        if (chr.getSkillLevel(skill) > 0) {
                            damage = (int) ((skill.getEffect(chr.getSkillLevel(skill)).getX() / 1000.0) * damage);
                        }
                        break;
                    }
                }
                if (chr.getBuffedValue(MapleBuffStat.COMBO_BARRIER) != null) {
                    damage = (int) ((chr.getBuffedSkill_X(MapleBuffStat.COMBO_BARRIER) / 1000.0) * damage);
                }
            }

            if (chr.getBuffedValue(MapleBuffStat.MAGIC_GUARD) != null) {
                int hploss = 0, mploss = 0;
                if (isDeadlyAttack) {
                    if (stats.getHp() > 1) {
                        hploss = stats.getHp() - 1;
                    }
                    if (stats.getMp() > 1) {
                        mploss = stats.getMp() - 1;
                    }
                    if (chr.getBuffedValue(MapleBuffStat.INFINITY) != null) {
                        mploss = 0;
                    }
                    chr.addMPHP(-hploss, -mploss);
                    // } else if (mpattack > 0) {
                    // chr.addMPHP(-damage, -mpattack);
                } else {
                    mploss = (int) (damage * (chr.getBuffedValue(MapleBuffStat.MAGIC_GUARD).doubleValue() / 100.0))
                            + mpattack;
                    hploss = damage - mploss;
                    if (chr.getBuffedValue(MapleBuffStat.INFINITY) != null) {
                        mploss = 0;
                    } else if (mploss > stats.getMp()) {
                        mploss = stats.getMp();
                        hploss = damage - mploss + mpattack;
                    }
                    chr.addMPHP(-hploss, -mploss);
                }

            } else if (chr.getBuffedValue(MapleBuffStat.MESOGUARD) != null) {
                damage = (damage % 2 == 0) ? damage / 2 : (damage / 2 + 1);

                final int mesoloss = (int) (damage
                        * (chr.getBuffedValue(MapleBuffStat.MESOGUARD).doubleValue() / 100.0));
                if (chr.getMeso() < mesoloss) {
                    chr.gainMeso(-chr.getMeso(), false);
                    chr.cancelBuffStats(MapleBuffStat.MESOGUARD);
                } else {
                    chr.gainMeso(-mesoloss, false);
                }
                if (isDeadlyAttack && stats.getMp() > 1) {
                    mpattack = stats.getMp() - 1;
                }
                chr.addMPHP(-damage, -mpattack);
            } else if (isDeadlyAttack) {
                chr.addMPHP(stats.getHp() > 1 ? -(stats.getHp() - 1) : 0, stats.getMp() > 1 ? -(stats.getMp() - 1) : 0);
            } else {
                chr.addMPHP(-damage, -mpattack);
            }
            chr.handleBattleshipHP(-damage);
        }
        if (!chr.isHidden()) {
            chr.getMap().broadcastMessage(chr, MaplePacketCreator.damagePlayer(type, monsteridfrom, chr.getId(), damage,
                    fake, direction, reflect, is_pg, oid, pos_x, pos_y), false);
        }
    }

    public static final void UseItemEffect(final int itemId, final MapleClient c, final MapleCharacter chr) {
        final IItem toUse = chr.getInventory(MapleInventoryType.CASH).findById(itemId);
        if (toUse == null || toUse.getItemId() != itemId || toUse.getQuantity() < 1) {
            chr.getMap().broadcastMessage(chr, MaplePacketCreator.itemEffect(chr.getId(), itemId), false);
            chr.setItemEffect(itemId);
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }
        if (itemId != 5510000) {
            chr.setItemEffect(itemId);
        }
        chr.getMap().broadcastMessage(chr, MaplePacketCreator.itemEffect(chr.getId(), itemId), false);
    }

    public static final void CancelItemEffect(final int id, final MapleCharacter chr) {

        if (chr != null) {
            // chr.cancelBuffTime(-1, -id);
            chr.cancelEffect(MapleItemInformationProvider.getInstance().getItemEffect(-id), false, -1);
        }
    }

    public static final void CancelBuffHandler(final int sourceid, final MapleCharacter chr) {
        if (chr == null) {
            return;
        }
        final ISkill skill = SkillFactory.getSkill(sourceid);
        if (skill != null) {
            if (skill.isChargeSkill()) {
                chr.setKeyDownSkill_Time(0);
                chr.getMap().broadcastMessage(chr, MaplePacketCreator.skillCancel(chr, sourceid), false);
            } else {
                // chr.cancelBuffTime(0, sourceid);
                chr.cancelEffect(skill.getEffect(1), false, -1);
            }
        }
    }

    public static final void SkillEffect(final LittleEndianAccessor slea, final MapleCharacter chr) {
        final int skillId = slea.readInt();
        final byte level = slea.readByte();
        final byte flags = slea.readByte();
        final byte speed = slea.readByte();
        final byte unk = slea.readByte(); // Added on v.82

        final ISkill skill = SkillFactory.getSkill(skillId);
        if (chr == null) {
            return;
        }
        final int skilllevel_serv = chr.getSkillLevel(skill);

        if (skilllevel_serv > 0 && skilllevel_serv == level && skill.isChargeSkill()) {
            chr.setKeyDownSkill_Time(System.currentTimeMillis());
            chr.getMap().broadcastMessage(chr, MaplePacketCreator.skillEffect(chr, skillId, level, flags, speed, unk),
                    false);
        }
    }

    public static final void SpecialMove(final LittleEndianAccessor slea, final MapleClient c,
            final MapleCharacter chr) {
        if (chr == null || !chr.isAlive() || chr.getMap() == null) {
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }
        slea.skip(4); // Old X and Y
        final int skillid = slea.readInt();
        final int skillLevel = slea.readByte();
        final ISkill skill = SkillFactory.getSkill(skillid);

        if (chr.getSkillLevel(skill) <= 0 || (chr.getSkillLevel(skill) != skillLevel && skillid != 12101000)) {
            if (!GameConstants.isMulungSkill(skillid) && !GameConstants.isPyramidSkill(skillid)) {
                // c.getSession().close();
                return;
            }
            if (GameConstants.isMulungSkill(skillid)) {
                if (chr.getMapId() / 10000 != 92502) {
                    // AutobanManager.getInstance().autoban(c, "Using Mu Lung dojo skill out of dojo
                    // maps.");
                    return;
                } else {
                    chr.mulungEnergyModify(false);
                }
            } else if (GameConstants.isPyramidSkill(skillid)) {
                if (chr.getMapId() / 10000 != 92602) {
                    // AutobanManager.getInstance().autoban(c, "Using Pyramid skill out of pyramid
                    // maps.");
                    return;
                }
            }
        }
        final MapleStatEffect effect = skill.getEffect(chr.getSkillLevel(GameConstants.getLinkedSkill(skillid)));

        if (effect.getCooldown() > 0 && !chr.isGM()) {
            if (chr.skillisCooling(skillid)) {
                c.sendPacket(MaplePacketCreator.enableActions());
                return;
            }
            if (skillid != 5221006) { // Battleship
                c.sendPacket(MaplePacketCreator.skillCooldown(skillid, effect.getCooldown()));
                chr.addCooldown(skillid, System.currentTimeMillis(), effect.getCooldown() * 1000);
            }
        }
        // chr.checkFollow(); //not msea-like but ALEX'S WISHES
        switch (skillid) {
            case 英雄.绝对引力:
            case 圣骑士.绝对引力:
            case 黑骑士.绝对引力:
            case 9001020: // GM magnet
                final byte number_of_mobs = slea.readByte();
                slea.skip(3);
                for (int i = 0; i < number_of_mobs; i++) {
                    int mobId = slea.readInt();
                    final MapleMonster mob = chr.getMap().getMonsterByOid(mobId);
                    if (mob != null) {
                        // chr.getMap().broadcastMessage(chr, MaplePacketCreator.showMagnet(mobId,
                        // slea.readByte()), chr.getPosition());
                        mob.switchController(chr, mob.isControllerHasAggro());
                    }
                }
                chr.getMap().broadcastMessage(chr,
                        MaplePacketCreator.showBuffeffect(chr.getId(), skillid, 1, slea.readByte()), chr.getPosition());
                c.sendPacket(MaplePacketCreator.enableActions());
                break;
            default:
                Point pos = null;
                if ((slea.available() == 5L) || (slea.available() == 7L)) {
                    pos = slea.readPos();
                    boolean faceLeft = slea.readByte() == 0;
                    int stance = chr.getStance();
                    if (faceLeft) {
                        stance &= 0xFE;
                    } else {
                        stance |= 1;
                    }
                    chr.setStance(stance);
                }
                if (effect.isMagicDoor()) { // Mystic Door

                    if (!FieldLimitType.MysticDoor.check(chr.getMap().getFieldLimit())) {
                        if (chr.skillisCooling(2311002)) {
                            c.sendPacket(MaplePacketCreator.enableActions());
                            return;
                        }
                        c.sendPacket(MaplePacketCreator.skillCooldown(2311002, 2));
                        chr.addCooldown(2311002, System.currentTimeMillis(), 2 * 1000);
                        effect.applyTo(c.getPlayer(), pos);
                    } else {
                        c.sendPacket(MaplePacketCreator.enableActions());
                    }

                } else {
                    final int mountid = MapleStatEffect.parseMountInfo(c.getPlayer(), skill.getId());
                    if (mountid != 0 && mountid != GameConstants.getMountItem(skill.getId()) && !c.getPlayer().isGM()
                            && c.getPlayer().getBuffedValue(MapleBuffStat.MONSTER_RIDING) == null
                            && c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((byte) -118) == null) {
                        if (!GameConstants.isMountItemAvailable(mountid, c.getPlayer().getJob())) {
                            c.sendPacket(MaplePacketCreator.enableActions());
                            return;
                        }
                    }
                    effect.applyTo(c.getPlayer(), pos);
                }
                break;
        }
    }

    public static final void closeRangeAttack(final LittleEndianAccessor slea, final MapleClient c,
            final MapleCharacter chr, final boolean energy) {
        if (chr == null || (energy && chr.getBuffedValue(MapleBuffStat.ENERGY_CHARGE) == null
                && chr.getBuffedValue(MapleBuffStat.BODY_PRESSURE) == null && !GameConstants.isKOC(chr.getJob()))) {
            return;
        }
        final boolean mirror = chr.getBuffedValue(MapleBuffStat.MIRROR_IMAGE) != null;
        if (!chr.isAlive() || chr.getMap() == null) {
            chr.getCheatTracker().registerOffense(CheatingOffense.ATTACKING_WHILE_DEAD);
            return;
        }
        final AttackInfo attack = DamageParse.Modify_AttackCrit(DamageParse.parseDmgM(slea), chr, 1);

        double maxdamage = chr.getStat().getCurrentMaxBaseDamage();
        int attackCount = 1, skillLevel = 0;
        MapleStatEffect effect = null;
        ISkill skill = null;

        if (attack.skill != 0) {
            if (attack.skill == 海盗.双子星攻击 || attack.skill == 枪手.散射 || attack.skill == 枪手.脱离战场 || attack.skill == 神枪手.三连发
                    || attack.skill == 神枪手.寒霜喷射 || attack.skill == 神枪手.火焰喷射 || attack.skill == 神枪手.指定攻击
                    || attack.skill == 枪神.瞬迅雷 || attack.skill == 枪神.心灵控制 || attack.skill == 盗贼.双飞斩
                    || attack.skill == 刺客.吸血术 || attack.skill == 暗杀者.风魔手里剑 || attack.skill == 暗杀者.枫币攻击
                    || attack.skill == 夜使者.挑衅 || attack.skill == 暗影神偷.挑衅 || attack.skill == 夜使者.三飞闪
                    || attack.skill == 暗夜行者1.双飞斩 || attack.skill == 暗夜行者3.风魔手里剑 || attack.skill == 暗夜行者3.三飞闪
                    || attack.skill == 破风使者1.二连箭 || attack.skill == 破风使者3.箭雨 || attack.skill == 破风使者3.四连箭
                    || attack.skill == 破风使者3.疾风扫射 || attack.skill == 破风使者3.疾风光速神弩 || attack.skill == 破风使者3.暴风神射
                    || attack.skill == 弓箭手.二连箭 || attack.skill == 弓箭手.断魂箭 || attack.skill == 猎人.炸弹箭
                    || attack.skill == 游侠.四连箭 || attack.skill == 游侠.烈火箭 || attack.skill == 游侠.箭雨
                    || attack.skill == 箭神.龙魂之箭 || attack.skill == 箭神.暴风神射 || attack.skill == 弩弓手.穿透之箭
                    || attack.skill == 狙击手.四连箭 || attack.skill == 狙击手.升龙弩 || attack.skill == 狙击手.寒冰箭
                    || attack.skill == 神射手.龙魂之箭 || attack.skill == 神射手.必杀狙击 || attack.skill == 神射手.光速神弩) {
                c.getSession().close();
                return;
            }
            if (chr.getMapId() == 109010000 || chr.getMapId() == 109030001 || chr.getMapId() == 109060000
                    || chr.getMapId() == 109040000) {
                chr.dropMessage(5, "该地图无法使用技能");
                c.sendPacket(MaplePacketCreator.enableActions());
                return;
            }

            if (attack.skill == 1221011 && (chr.getMapId() >= 211060000 && chr.getMapId() <= 211070200)) {
                chr.dropMessage(5, "该地图无法该使用技能");
                c.sendPacket(MaplePacketCreator.enableActions());
                return;
            }

            if (attack.skill == 21120006 && (chr.getMapId() == 211060100 || chr.getMapId() == 211060300
                    || chr.getMapId() == 211060500 || chr.getMapId() == 211060700 || chr.getMapId() == 211060900)) {
                chr.dropMessage(5, "该地图无法该使用技能");
                c.sendPacket(MaplePacketCreator.enableActions());
                return;
            }

            skill = SkillFactory.getSkill(GameConstants.getLinkedSkill(attack.skill));
            skillLevel = chr.getSkillLevel(skill);
            effect = attack.getAttackEffect(chr, skillLevel, skill);
            if (effect == null) {
                return;
            }
            maxdamage *= effect.getDamage() / 100.0;
            attackCount = effect.getAttackCount() > effect.getBulletCount() ? effect.getAttackCount()
                    : effect.getBulletCount();

            if (effect.getCooldown() > 0 && !chr.isGM()) {
                if (chr.skillisCooling(attack.skill)) {
                    c.sendPacket(MaplePacketCreator.enableActions());
                    return;
                }
                c.sendPacket(MaplePacketCreator.skillCooldown(attack.skill, effect.getCooldown()));
                chr.addCooldown(attack.skill, System.currentTimeMillis(), effect.getCooldown() * 1000);
            }
        }
        attackCount *= (mirror ? 2 : 1);
        if (!energy) {
            if ((chr.getMapId() == 109060000 || chr.getMapId() == 109060002 || chr.getMapId() == 109060004)
                    && attack.skill == 0) {
                MapleSnowballs.hitSnowball(chr);
            }
            // handle combo orbconsume
            int numFinisherOrbs = 0;
            final Integer comboBuff = chr.getBuffedValue(MapleBuffStat.COMBO);

            if (isFinisher(attack.skill)) { // finisher
                if (comboBuff != null) {
                    numFinisherOrbs = comboBuff - 1;
                }
                chr.handleOrbconsume();

            } else if (attack.targets > 0 && comboBuff != null) {
                // handle combo orbgain
                switch (chr.getJob()) {
                    case 111:
                    case 112:
                    case 1110:
                    case 1111:
                    case 1112:
                        if (attack.skill != 1111008) { // shout should not give orbs
                            chr.handleOrbgain();
                        }
                        break;
                }
            }
            /*
             * final MapleStatEffect ds = chr.getStatForBuff(MapleBuffStat.DARKSIGHT);
             * if (ds != null) {
             * if (chr.getJob() >= 1400 && chr.getJob() <= 1412) {
             * chr.cancelEffectFromBuffStat(MapleBuffStat.DARKSIGHT);
             * }
             * }
             */
            switch (chr.getJob()) {
                case 511:
                case 512: {
                    chr.handleEnergyCharge(5110001, attack.targets * attack.hits);
                    break;
                }
                case 1510:
                case 1511:
                case 1512: {
                    chr.handleEnergyCharge(15100004, attack.targets * attack.hits);
                    break;
                }
            }
            // handle sacrifice hp loss
            // after BIG BANG, TEMP
            if (attack.targets > 0 && attack.skill == 1211002) { // handle charged blow
                final int advcharge_level = chr.getSkillLevel(SkillFactory.getSkill(1220010));
                if (advcharge_level > 0) {
                    if (!SkillFactory.getSkill(1220010).getEffect(advcharge_level).makeChanceResult()) {
                        chr.cancelEffectFromBuffStat(MapleBuffStat.WK_CHARGE);
                        chr.cancelEffectFromBuffStat(MapleBuffStat.LIGHTNING_CHARGE);
                    }
                } else {
                    chr.cancelEffectFromBuffStat(MapleBuffStat.WK_CHARGE);
                    chr.cancelEffectFromBuffStat(MapleBuffStat.LIGHTNING_CHARGE);
                }
            }
            if (attack.skill == 1009) {
                chr.getMap().broadcastMessage(chr, MaplePacketCreator.showBuffeffect(chr.getId(), attack.skill, 1),
                        false);
            }

            if (numFinisherOrbs > 0) {
                maxdamage *= numFinisherOrbs;
            } else if (comboBuff != null) {
                ISkill combo;
                if (c.getPlayer().getJob() == 1110 || c.getPlayer().getJob() == 1111
                        || c.getPlayer().getJob() == 1112) {
                    combo = SkillFactory.getSkill(11111001);
                } else {
                    combo = SkillFactory.getSkill(1111002);
                }
                if (c.getPlayer().getSkillLevel(combo) > 0) {
                    maxdamage *= 1.0 + (combo.getEffect(c.getPlayer().getSkillLevel(combo)).getDamage() / 100.0 - 1.0)
                            * (comboBuff - 1);
                }
            }

            if (isFinisher(attack.skill)) {
                if (numFinisherOrbs == 0) {
                    return;
                }
                maxdamage = 500000; // FIXME reenable damage calculation for finishers
            }
        }

        chr.checkFollow();

        chr.getMap().broadcastMessage(chr,
                MaplePacketCreator.closeRangeAttack(chr.getId(), attack.tbyte, attack.skill, skillLevel, attack.display,
                        attack.animation, attack.speed, attack.allDamage, energy, chr.getLevel(),
                        chr.getStat().passive_mastery(), attack.unk, attack.charge),
                chr.getPosition());
        DamageParse.applyAttack(attack, skill, c.getPlayer(), attackCount, maxdamage, effect,
                mirror ? AttackType.NON_RANGED_WITH_MIRROR : AttackType.NON_RANGED);
        WeakReference<MapleCharacter>[] clones = chr.getClones();
        for (int i = 0; i < clones.length; i++) {
            if (clones[i].get() != null) {
                final MapleCharacter clone = clones[i].get();
                final ISkill skil2 = skill;
                final int skillLevel2 = skillLevel;
                final int attackCount2 = attackCount;
                final double maxdamage2 = maxdamage;
                final MapleStatEffect eff2 = effect;
                final AttackInfo attack2 = DamageParse.DivideAttack(attack, chr.isGM() ? 1 : 4);
                CloneTimer.getInstance().schedule(new Runnable() {

                    @Override
                    public void run() {
                        clone.getMap()
                                .broadcastMessage(MaplePacketCreator.closeRangeAttack(clone.getId(), attack2.tbyte,
                                        attack2.skill, skillLevel2, attack2.display, attack2.animation, attack2.speed,
                                        attack2.allDamage, energy, clone.getLevel(), clone.getStat().passive_mastery(),
                                        attack2.unk, attack2.charge));
                        DamageParse.applyAttack(attack2, skil2, chr, attackCount2, maxdamage2, eff2,
                                mirror ? AttackType.NON_RANGED_WITH_MIRROR : AttackType.NON_RANGED);
                    }
                }, 500 * i + 500);
            }
        }
    }

    public static final void rangedAttack(final LittleEndianAccessor slea, final MapleClient c,
            final MapleCharacter chr) {
        if (chr == null) {
            return;
        }
        if (!chr.isAlive() || chr.getMap() == null) {
            chr.getCheatTracker().registerOffense(CheatingOffense.ATTACKING_WHILE_DEAD);
            return;
        }
        final AttackInfo attack = DamageParse.Modify_AttackCrit(DamageParse.parseDmgR(slea), chr, 2);

        int bulletCount = 1;
        int skillLevel = 0;
        MapleStatEffect effect = null;
        ISkill skill = null;

        if (attack.skill != 0) {
            if (chr.getMapId() == 109010000 || chr.getMapId() == 109030001 || chr.getMapId() == 109060000
                    || chr.getMapId() == 109040000) {
                chr.dropMessage(5, "该地图无法使用技能");
                c.sendPacket(MaplePacketCreator.enableActions());
                return;
            }
            skill = SkillFactory.getSkill(GameConstants.getLinkedSkill(attack.skill));
            skillLevel = chr.getSkillLevel(skill);
            effect = attack.getAttackEffect(chr, skillLevel, skill);
            if (effect == null) {
                return;
            }

            if (attack.skill == 1221011 && (chr.getMapId() >= 211060000 && chr.getMapId() <= 211070200)) {
                chr.dropMessage(5, "该地图无法该使用技能");
                c.sendPacket(MaplePacketCreator.enableActions());
                return;
            }

            if (attack.skill == 21120006 && (chr.getMapId() == 211060100 || chr.getMapId() == 211060300
                    || chr.getMapId() == 211060500 || chr.getMapId() == 211060700 || chr.getMapId() == 211060900)) {
                chr.dropMessage(5, "该地图无法该使用技能");
                c.sendPacket(MaplePacketCreator.enableActions());
                return;
            }
            switch (attack.skill) {
                case 破风使者3.疾风扫射:
                case 狂狼勇士3.狼魂冲击: // Ranged but uses attackcount instead
                case 狂狼勇士4.极冰暴风:
                case 暗夜行者2.吸血: // Vampure
                case 枪手.散射:
                case 猎人.炸弹箭:
                case 弩弓手.穿透之箭:
                case 狙击手.升龙弩:
                    bulletCount = effect.getAttackCount();
                    break;
                default:
                    bulletCount = effect.getBulletCount();
                    break;
            }
            if (effect.getCooldown() > 0 && !chr.isGM()) {
                if (chr.skillisCooling(attack.skill)) {
                    c.sendPacket(MaplePacketCreator.enableActions());
                    return;
                }
                c.sendPacket(MaplePacketCreator.skillCooldown(attack.skill, effect.getCooldown()));
                chr.addCooldown(attack.skill, System.currentTimeMillis(), effect.getCooldown() * 1000);
            }
        }
        final Integer ShadowPartner = chr.getBuffedValue(MapleBuffStat.SHADOWPARTNER);
        if (ShadowPartner != null) {
            bulletCount *= 2;
        }

        int projectile = 0, visProjectile = 0;

        if (attack.AOE != 0 && chr.getBuffedValue(MapleBuffStat.SOULARROW) == null && attack.skill != 4111004) {
            if (chr.getInventory(MapleInventoryType.USE).getItem(attack.slot) == null) {
                return;
            }
            projectile = chr.getInventory(MapleInventoryType.USE).getItem(attack.slot).getItemId();

            if (attack.csstar > 0) {
                if (chr.getInventory(MapleInventoryType.CASH).getItem(attack.csstar) == null) {
                    return;
                }
                visProjectile = chr.getInventory(MapleInventoryType.CASH).getItem(attack.csstar).getItemId();
            } else {
                visProjectile = projectile;
            }
            // 处理 bulletcount
            if (chr.getBuffedValue(MapleBuffStat.SPIRIT_CLAW) == null) {
                int bulletConsume = bulletCount;
                if (effect != null && effect.getBulletConsume() != 0) {
                    bulletConsume = effect.getBulletConsume() * (ShadowPartner != null ? 2 : 1);
                }

                if (!MapleInventoryManipulator.removeById(c, MapleInventoryType.USE, projectile, bulletConsume, false,
                        true)) {
                    return;
                }
            }
        }
        if (attack.skill == 神枪手.寒霜喷射) {
            if (!MapleInventoryManipulator.removeById(c, MapleInventoryType.USE, 2332000, 1, false, true)) {
                c.getPlayer().dropMessage(5, "您身上的寒冰胶囊不足");
                c.sendPacket(MaplePacketCreator.enableActions());
                return;
            }
        } else if (attack.skill == 神枪手.火焰喷射) {
            if (!MapleInventoryManipulator.removeById(c, MapleInventoryType.USE, 2331000, 1, false, true)) {
                c.getPlayer().dropMessage(5, "您身上的火炎胶囊不足");
                c.sendPacket(MaplePacketCreator.enableActions());
                return;
            }
        }
        final Integer comboBuff = chr.getBuffedValue(MapleBuffStat.COMBO);

        if (attack.targets > 0 && comboBuff != null) {
            // handle combo orbgain
            switch (chr.getJob()) {
                case 111:
                case 112:
                case 1110:
                case 1111:
                case 1112:
                    if (attack.skill != 1111008) { // shout should not give orbs
                        chr.handleOrbgain();
                    }
                    break;
            }
        }
        switch (chr.getJob()) {
            case 511:
            case 512: {
                chr.handleEnergyCharge(5110001, attack.targets * attack.hits);
                break;
            }
            case 1510:
            case 1511:
            case 1512: {
                chr.handleEnergyCharge(15100004, attack.targets * attack.hits);
                break;
            }
        }
        double basedamage;
        int projectileWatk = 0;
        if (projectile != 0) {
            projectileWatk = MapleItemInformationProvider.getInstance().getWatkForProjectile(projectile);
        }
        final PlayerStats statst = chr.getStat();

        switch (attack.skill) {
            case 盗贼.双飞斩: // Lucky Seven
            case 夜使者.三飞闪: // Triple Throw
            case 暗夜行者1.双飞斩: // Lucky seven
            case 暗夜行者3.三飞闪: // Triple Throw
                basedamage = (float) ((float) ((statst.getTotalLuk() * 5.0f) * (statst.getTotalWatk() + projectileWatk))
                        / 100);
                break;
            case 暗杀者.枫币攻击: // Shadow Meso
                basedamage = 13000;
                break;
            default:
                if (projectileWatk != 0) {
                    basedamage = statst.calculateMaxBaseDamage(statst.getTotalMagic(),
                            statst.getTotalWatk() + projectileWatk);
                } else {
                    basedamage = statst.getCurrentMaxBaseDamage();
                }
                switch (attack.skill) {
                    case 破风使者2.暴风射击: // arrowbomb is hardcore like that
                        if (effect != null) {
                            basedamage *= effect.getX() / 100.0;
                        }
                        break;
                }
                break;
        }
        if (effect != null) {
            basedamage *= effect.getDamage() / 100.0;
            int money = effect.getMoneyCon();
            if (money != 0) {
                if (money > chr.getMeso()) {
                    money = chr.getMeso();
                }
                chr.gainMeso(-money, false);
            }
        }
        chr.checkFollow();
        chr.getMap().broadcastMessage(chr,
                MaplePacketCreator.rangedAttack(chr.getId(), attack.tbyte, attack.skill, skillLevel, attack.display,
                        attack.animation, attack.speed, visProjectile, attack.allDamage, attack.position,
                        chr.getLevel(), chr.getStat().passive_mastery(), attack.unk),
                chr.getPosition());
        DamageParse.applyAttack(attack, skill, chr, bulletCount, basedamage, effect,
                ShadowPartner != null ? AttackType.RANGED_WITH_SHADOWPARTNER : AttackType.RANGED);

        WeakReference<MapleCharacter>[] clones = chr.getClones();
        for (int i = 0; i < clones.length; i++) {
            if (clones[i].get() != null) {
                final MapleCharacter clone = clones[i].get();
                final ISkill skil2 = skill;
                final MapleStatEffect eff2 = effect;
                final double basedamage2 = basedamage;
                final int bulletCount2 = bulletCount;
                final int visProjectile2 = visProjectile;
                final int skillLevel2 = skillLevel;
                final AttackInfo attack2 = DamageParse.DivideAttack(attack, chr.isGM() ? 1 : 4);
                CloneTimer.getInstance().schedule(new Runnable() {

                    @Override
                    public void run() {
                        clone.getMap()
                                .broadcastMessage(MaplePacketCreator.rangedAttack(clone.getId(), attack2.tbyte,
                                        attack2.skill, skillLevel2, attack2.display, attack2.animation, attack2.speed,
                                        visProjectile2, attack2.allDamage, attack2.position, clone.getLevel(),
                                        clone.getStat().passive_mastery(), attack2.unk));
                        DamageParse.applyAttack(attack2, skil2, chr, bulletCount2, basedamage2, eff2,
                                AttackType.RANGED);
                    }
                }, 500 * i + 500);
            }
        }
    }

    public static final void MagicDamage(final LittleEndianAccessor slea, final MapleClient c,
            final MapleCharacter chr) {
        if (chr == null) {
            return;
        }
        if (!chr.isAlive() || chr.getMap() == null) {
            chr.getCheatTracker().registerOffense(CheatingOffense.ATTACKING_WHILE_DEAD);
            return;
        }
        final AttackInfo attack = DamageParse.Modify_AttackCrit(DamageParse.parseDmgMa(slea), chr, 3);
        final ISkill skill = SkillFactory.getSkill(GameConstants.getLinkedSkill(attack.skill));
        final int skillLevel = chr.getSkillLevel(skill);
        final MapleStatEffect effect = attack.getAttackEffect(chr, skillLevel, skill);
        if (effect == null) {
            return;
        }
        if (chr.getMapId() == 109010000 || chr.getMapId() == 109030001 || chr.getMapId() == 109060000
                || chr.getMapId() == 109040000) {
            chr.dropMessage(5, "该地图无法使用技能");
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }
        if (attack.skill == 1221011 && (chr.getMapId() >= 211060000 && chr.getMapId() <= 211070200)) {
            chr.dropMessage(5, "该地图无法该使用技能");
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }

        if (attack.skill == 21120006 && (chr.getMapId() == 211060100 || chr.getMapId() == 211060300
                || chr.getMapId() == 211060500 || chr.getMapId() == 211060700 || chr.getMapId() == 211060900)) {
            chr.dropMessage(5, "该地图无法该使用技能");
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }
        if (effect.getCooldown() > 0 && !chr.isGM()) {
            if (chr.skillisCooling(attack.skill)) {
                c.sendPacket(MaplePacketCreator.enableActions());
                return;
            }
            c.sendPacket(MaplePacketCreator.skillCooldown(attack.skill, effect.getCooldown()));
            chr.addCooldown(attack.skill, System.currentTimeMillis(), effect.getCooldown() * 1000);
        }
        chr.checkFollow();
        chr.getMap().broadcastMessage(chr,
                MaplePacketCreator.magicAttack(chr.getId(), attack.tbyte, attack.skill, skillLevel, attack.display,
                        attack.animation, attack.speed, attack.allDamage, attack.charge, chr.getLevel(), attack.unk),
                chr.getPosition());
        DamageParse.applyAttackMagic(attack, skill, c.getPlayer(), effect);
        WeakReference<MapleCharacter>[] clones = chr.getClones();
        for (int i = 0; i < clones.length; i++) {
            if (clones[i].get() != null) {
                final MapleCharacter clone = clones[i].get();
                final ISkill skil2 = skill;
                final MapleStatEffect eff2 = effect;
                final int skillLevel2 = skillLevel;
                final AttackInfo attack2 = DamageParse.DivideAttack(attack, chr.isGM() ? 1 : 4);
                CloneTimer.getInstance().schedule(new Runnable() {

                    @Override
                    public void run() {
                        clone.getMap()
                                .broadcastMessage(MaplePacketCreator.magicAttack(clone.getId(), attack2.tbyte,
                                        attack2.skill, skillLevel2, attack2.display, attack2.animation, attack2.speed,
                                        attack2.allDamage, attack2.charge, clone.getLevel(), attack2.unk));
                        DamageParse.applyAttackMagic(attack2, skil2, chr, eff2);
                    }
                }, 500 * i + 500);
            }
        }
    }

    public static final void DropMeso(final int meso, final MapleCharacter chr) {
        if (!chr.isAlive() || meso < 10 || meso > 50000 || meso > chr.getMeso()) {
            chr.getClient().sendPacket(MaplePacketCreator.enableActions());
            return;
        }
        chr.gainMeso(-meso, false, true);
        chr.getMap().spawnMesoDrop(meso, chr.getPosition(), chr, chr, true, (byte) 0);
        chr.getCheatTracker().checkDrop(true);
    }

    public static final void ChangeEmotion(final int emote, final MapleCharacter chr) {
        if (emote > 7) {
            final int emoteid = 5159992 + emote;
            final MapleInventoryType type = GameConstants.getInventoryType(emoteid);
            if (chr.getInventory(type).findById(emoteid) == null) {
                return;
            }
        }
        if (emote > 0 && chr != null && chr.getMap() != null) { // O_o
            chr.getMap().broadcastMessage(chr, MaplePacketCreator.facialExpression(chr, emote), false);
            WeakReference<MapleCharacter>[] clones = chr.getClones();
            for (int i = 0; i < clones.length; i++) {
                if (clones[i].get() != null) {
                    final MapleCharacter clone = clones[i].get();
                    CloneTimer.getInstance().schedule(new Runnable() {

                        @Override
                        public void run() {
                            clone.getMap().broadcastMessage(MaplePacketCreator.facialExpression(clone, emote));
                        }
                    }, 500 * i + 500);
                }
            }
        }
    }

    public static final void Heal(final LittleEndianAccessor slea, final MapleCharacter chr) {
        if (chr == null) {
            return;
        }
        slea.readInt();
        int healHP = slea.readShort();
        int healMP = slea.readShort();
        slea.readByte();
        slea.readInt();

        final PlayerStats stats = chr.getStat();

        if (stats.getHp() <= 0) {
            return;
        }

        if ((healHP != 0) && (chr.canHP())) {
            int check = (int) stats.getHealHP();
            if (chr.getChair() != 0) {
                check += 150;
            }
            if (healHP > check * 5) {
                chr.getCheatTracker().registerOffense(CheatingOffense.REGEN_HIGH_HP,
                        String.valueOf(healHP) + "服务端:" + stats.getHealHP());
                healHP = (int) stats.getHealHP();
            }
            chr.addHP(healHP);
        }
        if (healMP != 0 && chr.canMP()) {
            int check = (int) stats.getHealMP();
            if (chr.getChair() != 0) {
                check += 150;
            }
            if (healMP > check * 5) {
                // chr.getCheatTracker().registerOffense(CheatingOffense.REGEN_HIGH_MP,
                // String.valueOf(healMP) + " 服务端:" + stats.getHealMP());
                healMP = (int) stats.getHealMP();
            }
            chr.addMP(healMP);
        }
    }

    public static final void MovePlayer(final LittleEndianAccessor slea, final MapleClient c,
            final MapleCharacter chr) {
        // slea.skip(5); // unknown
        if (chr == null) {
            return;
        }
        final Point Original_Pos = chr.getPosition(); // 4 bytes Added on v.80 MSEA
        slea.skip(33);

        /**
         *
         * FF FF 01 FF FF FF FF FF FF FF FF 2A 8E 66 CB 8E 7D 17 FC 4A BF D5 CE
         * B4 FE D7 00 0B 00 B4 FE D7 00 00 00 00 00 71 00 04 96 00 00 B7 FE D7
         * 00 54 00 00 00 71 00 02 3C 00 00 BB FE D7 00 0C 00 00 00 71 00 04 5A
         * 00 14 0C 00 00 00 04 00 00 00 BB FE D6 00 0C 00 00 00 71 00 04 00 00
         * 02 8A 02 00 00 06 00 00 00 CE FE D7 00 44 01 00 00 00 00 06 1E 00 00
         * EA FE D7 00 84 00 00 00 71 00 04 78 00 00 EA FE D6 00 84 00 00 00 71
         * 00 08 00 00 02 77 FF F2 FE 06 00 00 00 E1 FE C9 00 77 FF 6A FF 00 00
         * 06 3C 00 11 00 00 40 04 00 00 00 00 00 B4 FE C9 00 EA FE D7 00 Now:
         * D7 00 44 01 00 00 00 00 06 1E 00 00 EA FE D7 00 84 00 00 00 71 00 04
         * 78 00 00 EA FE D6 00 84 00 00 00 71 00 08 00 00 02 77 FF F2 FE 06 00
         * 00 00 E1 FE C9 00 77 FF 6A FF 00 00 06 3C 00 11 00 00 40 04 00 00 00
         * 00 00 B4 FE C9 00 EA FE D7 00
         */
        // log.trace("Movement command received: unk1 {} unk2 {}", new Object[] { unk1,
        // unk2 });
        List<LifeMovementFragment> res;
        try {
            res = MovementParse.parseMovement(slea, 1);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.err.println("AIOBE Type1:\n" + slea.toString(true));
            return;
        }

        if (res != null && c.getPlayer().getMap() != null) { // TODO more validation of input data
            if (slea.available() != 8) {
                System.err.println("slea.available != 8 (movement parsing error)\n" + slea.toString(true));
                return;
            }
            final List<LifeMovementFragment> res2 = new ArrayList<>(res);
            final MapleMap map = c.getPlayer().getMap();
            if (chr.isHidden()) {
                chr.setLastRes(res2);
                c.getPlayer().getMap().broadcastGMMessage(chr,
                        MaplePacketCreator.movePlayer(chr.getId(), res, Original_Pos), false);
            } else {
                c.getPlayer().getMap().broadcastMessage(c.getPlayer(),
                        MaplePacketCreator.movePlayer(chr.getId(), res, Original_Pos), false);
            }

            // if (chr.isHidden()) {
            // chr.setLastRes(res2);
            // } else { //original POS? or end POS?
            // map.broadcastMessage(chr, MaplePacketCreator.movePlayer(chr.getId(), res,
            // Original_Pos), false);
            // }
            MovementParse.updatePosition(res, chr, 0);
            final Point pos = chr.getPosition();
            map.movePlayer(chr, pos);
            if (chr.getFollowId() > 0 && chr.isFollowOn() && chr.isFollowInitiator()) {
                final MapleCharacter fol = map.getCharacterById(chr.getFollowId());
                if (fol != null) {
                    final Point original_pos = fol.getPosition();
                    fol.getClient().sendPacket(MaplePacketCreator.moveFollow(Original_Pos, original_pos, pos, res));
                    MovementParse.updatePosition(res, fol, 0);
                    map.broadcastMessage(fol, MaplePacketCreator.movePlayer(fol.getId(), res, original_pos), false);
                } else {
                    chr.checkFollow();
                }
            }
            WeakReference<MapleCharacter>[] clones = chr.getClones();
            for (int i = 0; i < clones.length; i++) {
                if (clones[i].get() != null) {
                    final MapleCharacter clone = clones[i].get();
                    final List<LifeMovementFragment> res3 = new ArrayList<>(res2);
                    CloneTimer.getInstance().schedule(new Runnable() {

                        @Override
                        public void run() {
                            try {
                                if (clone.getMap() == map) {
                                    if (clone.isHidden()) {
                                        clone.setLastRes(res3);
                                    } else {
                                        map.broadcastMessage(clone,
                                                MaplePacketCreator.movePlayer(clone.getId(), res3, Original_Pos),
                                                false);
                                    }
                                    MovementParse.updatePosition(res3, clone, 0);
                                    map.movePlayer(clone, pos);
                                }
                            } catch (Exception e) {
                                // very rarely swallowed
                            }
                        }
                    }, 500 * i + 500);
                }
            }
            int count = c.getPlayer().getFallCounter();
            if (map.getFootholds().findBelow(c.getPlayer().getPosition()) == null
                    && c.getPlayer().getPosition().y > c.getPlayer().getOldPosition().y
                    && c.getPlayer().getPosition().x == c.getPlayer().getOldPosition().x) {
                if (count > 10) {
                    if (map.getId() == 926010010 || map.getId() == 926010030 || map.getId() == 926010050
                            || map.getId() == 926010070) {
                        c.getPlayer().changeMap(926010000);
                    } else {
                        c.getPlayer().changeMap(map, map.getPortal(0));
                        c.getPlayer().setFallCounter(0);
                    }
                } else {
                    c.getPlayer().setFallCounter(++count);
                }
            } else if (count > 0) {
                c.getPlayer().setFallCounter(0);
            }
            c.getPlayer().setOldPosition(new Point(c.getPlayer().getPosition()));
        }
    }

    public static final void ChangeMapSpecial(final String portal_name, final MapleClient c, final MapleCharacter chr) {
        final MaplePortal portal = chr.getMap().getPortal(portal_name);
        // slea.skip(2);

        if (portal != null) {
            portal.enterPortal(c);
        }
    }

    public static final void ChangeMap(final LittleEndianAccessor slea, final MapleClient c, final MapleCharacter chr) {
        // try {
        if (chr == null) {
            return;
        }
        if (slea.available() != 0) {
            // slea.skip(6); //D3 75 00 00 00 00
            slea.readByte(); // 1 = from dying 2 = regular portals
            final int targetid = slea.readInt(); // FF FF FF FF
            MaplePortal portal = null;
            try {
                portal = chr.getMap().getPortal(slea.readMapleAsciiString());
            } catch (Exception ex) {

            }
            if (slea.available() >= 6) {
                slea.readInt();
            }
            slea.skip(1);
            final boolean wheel = slea.readByte() > 0 && !MapConstants.isEventMap(chr.getMapId())
                    && chr.haveItem(5510000, 1, false, true);
            if (chr.getMapId() == 109020001) {
                if (portal != null) {
                    if (portal.getName().equals("join00")) {
                        c.sendPacket(MaplePacketCreator.enableActions());
                        return;
                    }
                }
            }

            if (targetid != -1 && !chr.isAlive()) {
                chr.setStance(0);
                if (chr.getEventInstance() != null && chr.getEventInstance().revivePlayer(chr) && chr.isAlive()) {
                    return;
                }
                if (chr.getPyramidSubway() != null) {
                    chr.getStat().setHp((short) 50);
                    chr.getPyramidSubway().fail(chr);
                    return;
                }

                if (!wheel) {
                    c.sendPacket(MaplePacketCreator.enableActions());
                    chr.isSquadPlayerID();
                    chr.getStat().setHp((short) 50);
                    final MapleMap to = chr.getMap().getReturnMap();
                    chr.changeMap(to, to.getPortal(0));
                    c.sendPacket(MaplePacketCreator.enableActions());
                } else {
                    // c.sendPacket(MTSCSPacket.useWheel((byte)
                    // (chr.getInventory(MapleInventoryType.CASH).countById(5510000) - 1)));
                    chr.getStat().setHp((chr.getStat().getMaxHp() / 100) * 40);
                    MapleInventoryManipulator.removeById(c, MapleInventoryType.CASH, 5510000, 1, true, false);
                    chr.isSquadPlayerID();
                    final MapleMap to = chr.getMap();
                    chr.changeMap(to, to.getPortal(0));
                }
            } else if (targetid != -1 && chr.isGM()) {
                final MapleMap to = ChannelServer.getInstance(c.getChannel()).getMapFactory().getMap(targetid);
                chr.changeMap(to, to.getPortal(0));

            } else if (targetid != -1 && !chr.isGM()) {
                final int divi = chr.getMapId() / 100;
                if (divi == 9130401) { // Only allow warp if player is already in Intro map, or else = hack

                    if (targetid == 130000000 || targetid / 100 == 9130401) { // Cygnus introduction
                        final MapleMap to = ChannelServer.getInstance(c.getChannel()).getMapFactory().getMap(targetid);
                        chr.changeMap(to, to.getPortal(0));
                    }
                } else if (divi == 9140900) { // Aran Introduction
                    if (targetid == 914090011 || targetid == 914090012 || targetid == 914090013
                            || targetid == 140090000) {
                        final MapleMap to = ChannelServer.getInstance(c.getChannel()).getMapFactory().getMap(targetid);
                        chr.changeMap(to, to.getPortal(0));
                    }
                } else if (divi == 9140901 && targetid == 140000000) {
                    c.sendPacket(UIPacket.IntroDisableUI(false));
                    c.sendPacket(UIPacket.IntroLock(false));
                    c.sendPacket(MaplePacketCreator.enableActions());
                    final MapleMap to = ChannelServer.getInstance(c.getChannel()).getMapFactory().getMap(targetid);
                    chr.changeMap(to, to.getPortal(0));
                } else if (divi == 9140902 && (targetid == 140030000 || targetid == 140000000)) { // thing is. dont
                                                                                                  // really know which
                                                                                                  // one!
                    c.sendPacket(UIPacket.IntroDisableUI(false));
                    c.sendPacket(UIPacket.IntroLock(false));
                    c.sendPacket(MaplePacketCreator.enableActions());
                    final MapleMap to = ChannelServer.getInstance(c.getChannel()).getMapFactory().getMap(targetid);
                    chr.changeMap(to, to.getPortal(0));
                } else if (divi == 9000900 && targetid / 100 == 9000900 && targetid > chr.getMapId()) {
                    final MapleMap to = ChannelServer.getInstance(c.getChannel()).getMapFactory().getMap(targetid);
                    chr.changeMap(to, to.getPortal(0));
                } else if (divi / 1000 == 9000 && targetid / 100000 == 9000) {
                    if (targetid < 900090000 || targetid > 900090004) { // 1 movie
                        c.sendPacket(UIPacket.IntroDisableUI(false));
                        c.sendPacket(UIPacket.IntroLock(false));
                        c.sendPacket(MaplePacketCreator.enableActions());
                    }
                    final MapleMap to = ChannelServer.getInstance(c.getChannel()).getMapFactory().getMap(targetid);
                    chr.changeMap(to, to.getPortal(0));
                } else if (divi / 10 == 1020 && targetid == 1020000) { // Adventurer movie clip Intro
                    c.sendPacket(UIPacket.IntroDisableUI(false));
                    c.sendPacket(UIPacket.IntroLock(false));
                    c.sendPacket(MaplePacketCreator.enableActions());
                    final MapleMap to = ChannelServer.getInstance(c.getChannel()).getMapFactory().getMap(targetid);
                    chr.changeMap(to, to.getPortal(0));

                } else if (chr.getMapId() == 900090101 && targetid == 100030100) {
                    c.sendPacket(UIPacket.IntroDisableUI(false));
                    c.sendPacket(UIPacket.IntroLock(false));
                    c.sendPacket(MaplePacketCreator.enableActions());
                    final MapleMap to = ChannelServer.getInstance(c.getChannel()).getMapFactory().getMap(targetid);
                    chr.changeMap(to, to.getPortal(0));
                } else if (chr.getMapId() == 2010000 && targetid == 104000000) {
                    c.sendPacket(UIPacket.IntroDisableUI(false));
                    c.sendPacket(UIPacket.IntroLock(false));
                    c.sendPacket(MaplePacketCreator.enableActions());
                    final MapleMap to = ChannelServer.getInstance(c.getChannel()).getMapFactory().getMap(targetid);
                    chr.changeMap(to, to.getPortal(0));
                } else if (chr.getMapId() == 106020001 || chr.getMapId() == 106020502) {
                    if (targetid == (chr.getMapId() - 1)) {
                        c.sendPacket(UIPacket.IntroDisableUI(false));
                        c.sendPacket(UIPacket.IntroLock(false));
                        c.sendPacket(MaplePacketCreator.enableActions());
                        final MapleMap to = ChannelServer.getInstance(c.getChannel()).getMapFactory().getMap(targetid);
                        chr.changeMap(to, to.getPortal(0));
                    }
                } else if (chr.getMapId() == 0 && targetid == 10000) {
                    c.sendPacket(UIPacket.IntroDisableUI(false));
                    c.sendPacket(UIPacket.IntroLock(false));
                    c.sendPacket(MaplePacketCreator.enableActions());
                    final MapleMap to = ChannelServer.getInstance(c.getChannel()).getMapFactory().getMap(targetid);
                    chr.changeMap(to, to.getPortal(0));
                }
            } else if (portal != null) {
                if (chr.getMapId() == 211060000 && portal.getTargetMapId() == 211040600) {
                    c.sendPacket(MaplePacketCreator.enableActions());
                    return;
                }
                portal.enterPortal(c);
            } else {
                c.sendPacket(MaplePacketCreator.enableActions());
            }
        }
        // } catch (Exception ex) {
        // System.err.println("切换地图异常" + ex);
        // FileoutputUtil.outError("logs/切换地图异常.txt", ex);
        // }
    }

    public static final void InnerPortal(final LittleEndianAccessor slea, final MapleClient c,
            final MapleCharacter chr) {
        if (chr == null) {
            return;
        }
        final MaplePortal portal = chr.getMap().getPortal(slea.readMapleAsciiString());
        final Point Original_Pos = chr.getPosition();
        final int toX = slea.readShort();
        final int toY = slea.readShort();
        // slea.readShort(); // Original X pos
        // slea.readShort(); // Original Y pos

        if (portal == null) {
            return;
        } else if (portal.getPosition().distanceSq(chr.getPosition()) > 22500) {
            chr.getCheatTracker().registerOffense(CheatingOffense.USING_FARAWAY_PORTAL);
        }
        chr.getMap().movePlayer(chr, new Point(toX, toY));
        chr.checkFollow();
    }

    public static final void snowBall(LittleEndianAccessor slea, MapleClient c) {
        // B2 00
        // 01 [team]
        // 00 00 [unknown]
        // 89 [position]
        // 01 [stage]
        c.sendPacket(MaplePacketCreator.enableActions());
        // empty, we do this in closerange
    }

    public static final void leftKnockBack(LittleEndianAccessor slea, final MapleClient c) {
        if (c.getPlayer().getMapId() / 10000 == 10906) { // must be in snowball map or else its like infinite FJ
            c.sendPacket(MaplePacketCreator.leftKnockBack());
            c.sendPacket(MaplePacketCreator.enableActions());
        }
    }

    /*
     * public static final void UpdateFkCharMessages(final LittleEndianAccessor
     * slea, final MapleClient c, final MapleCharacter chr) {
     * int type = slea.readByte();
     * //chr.UpdateCharMessageZone();
     * //c.getPlayer().setcharmessage(s);
     * // if (type == 0) { // 角色讯息
     * /*String
     */// int charmessage = slea.readMapleAsciiString();
    // c.getPlayer().setcharmessage(charmessage);
    // MapleCharacter.UpdateCharMessageZone();
    // chr.UpdateCharMessageZone();
    // System.err.println("SetCharMessage");
    /*
     * } else if (type == 1) { // 表情
     * int expression = slea.readByte();
     * c.getPlayer().setexpression(expression);
     * System.err.println("Expression");
     * } else if (type == 2) { // 生日及星座
     * int blood = slea.readByte();
     * int month = slea.readByte();
     * int day = slea.readByte();
     * int constellation = slea.readByte();
     * c.getPlayer().setblood(blood);
     * c.getPlayer().setmonth(month);
     * c.getPlayer().setday(day);
     * c.getPlayer().setconstellation(constellation);
     * System.err.println("Constellation");
     * }
     */
    // }
    /*
     * public String getcharmessage(final MapleClient c) {
     * 
     * return c.getPlayer().getcharmessage();
     * 
     * }
     * public void setcharmessage(final MapleClient c, String s) {
     * c.getPlayer().setcharmessage(s);
     * c.sendPacket(MaplePacketCreator.updateBeans(c.getPlayer().getId(), s));
     * }
     */
    public static void ShowExpChair(LittleEndianAccessor slea, MapleClient client) {

        // E0 14 2E 00
        // 00 00 00 00 00 00 00 00
        int chairid = slea.readInt();

        client.sendPacket(MaplePacketCreator.enableActions());

    }

    public static final void AranCombo(MapleClient c, MapleCharacter chr, int toAdd) {
        if ((chr != null) && (chr.getJob() >= 2000) && (chr.getJob() <= 2112)) {
            if (chr.hasGmLevel(5)) {
                toAdd += 9;
            }
            int combo = chr.getCombo();
            long curr = System.currentTimeMillis();

            if ((combo > 0) && (curr - chr.getLastCombo() > 10000L)) {
                combo = 0;
            }
            combo = (short) Math.min(30000, combo + toAdd);
            chr.setLastCombo(curr);
            chr.setCombo(combo);

            switch (combo) {
                case 10:
                case 20:
                case 30:
                case 40:
                case 50:
                case 60:
                case 70:
                case 80:
                case 90:
                case 100:
                    if (chr.getSkillLevel(21000000) < combo / 10) {
                        break;
                    }
                    SkillFactory.getSkill(21000000).getEffect(combo / 10).applyComboBuff(chr, combo);
            }
        }
    }

    public static final void handleLogout(final LittleEndianAccessor slea, MapleClient c) {
        String ACname = null;
        try {
            ACname = slea.readMapleAsciiString();
        } catch (NegativeArraySizeException ex) {

        }
        if (ACname != null) {
            int LoginState = 0;
            int id = 0;
            String ip = "";
            StringBuilder sb = new StringBuilder();
            sb.append("select id, loggedin from accounts where name = ?");
            if (c != null) {
                ip = c.getSessionIPAddress();
                sb.append(" and SessionIP = ?");
            }
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection();
                    PreparedStatement ps = con.prepareStatement(sb.toString())) {
                ps.setString(1, ACname);
                if (c != null) {
                    ps.setString(2, ip);
                }
                try (ResultSet rs = ps.executeQuery()) {
                    if (rs.next()) {
                        LoginState = rs.getInt("loggedin");
                        id = rs.getInt("id");
                    }
                }
            } catch (Exception ex) {
                System.err.println("[handleLogout] 处理登出出错" + ex);
                FileoutputUtil.outError("logs/资料库异常.txt", ex);
            }
            if (c != null) {
                c.setAccID(id);
                if (LoginState > 0) {
                    c.updateLoginState(MapleClient.LOGIN_NOTLOGGEDIN, c.getSessionIPAddress());
                }
            }
        }
    }

    public static void SpecialAttack(LittleEndianAccessor slea, MapleClient c, MapleCharacter chr) {
        if ((chr == null) || (chr.getMap() == null)) {
            c.getSession().writeAndFlush(MaplePacketCreator.enableActions());
            return;
        }
        int pos_x = slea.readInt();
        int pos_y = slea.readInt();
        // int pos_unk = slea.readInt();
        int display = slea.readInt();
        int skillId = slea.readInt();
        // int speed = slea.readInt();
        ISkill skill = SkillFactory.getSkill(skillId);
        int skilllevel = chr.getSkillLevel(skillId);
        if ((skill == null) || (skilllevel <= 0)) {
            c.getSession().writeAndFlush(MaplePacketCreator.enableActions());
            return;
        }
        chr.getMap().broadcastMessage(chr,
                MaplePacketCreator.showBuffeffect(chr.getId(), skillId, 1, chr.getLevel(), skilllevel), false);
        chr.getMap().broadcastMessage(chr,
                MaplePacketCreator.showSpecialAttack(chr.getId(), pos_x, pos_y, display, skillId),
                chr.getTruePosition());
    }
}
