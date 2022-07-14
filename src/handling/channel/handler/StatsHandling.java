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

import constants.GameConstants;
import java.util.ArrayList;
import java.util.List;

import client.ISkill;
import client.MapleClient;
import client.MapleCharacter;
import client.MapleStat;
import client.PlayerStats;
import client.SkillFactory;
import java.util.EnumMap;
import java.util.Map;
import server.Randomizer;
import tools.FilePrinter;
import tools.MaplePacketCreator;
import tools.Pair;
import tools.data.LittleEndianAccessor;

public class StatsHandling {

    public static final void DistributeAP(final LittleEndianAccessor slea, final MapleClient c, final MapleCharacter chr) {
          Map<MapleStat, Integer> statupdate = new EnumMap<>(MapleStat.class);
        if (chr != null) {
            c.sendPacket(MaplePacketCreator.updatePlayerStats(statupdate, true, chr));
            chr.updateTick(slea.readInt());

            final PlayerStats stat = chr.getStat();
            final int job = chr.getJob();
            final int statValue = slea.readInt();

            final MapleStat state = MapleStat.getByValue(statValue);

            if (chr.getRemainingAp() > 0) {
                switch (state) {
                    case STR: // Str
                        if (stat.getStr() >= 30000) {
                            return;
                        }
                        stat.setStr((short) (stat.getStr() + 1));
                        statupdate.put(MapleStat.STR, (int) stat.getStr());
                        break;
                    case DEX: // Dex
                        if (stat.getDex() >= 30000) {
                            return;
                        }
                        stat.setDex((short) (stat.getDex() + 1));
                        statupdate.put(MapleStat.DEX, (int) stat.getDex());
                        break;
                    case INT: // Int
                        if (stat.getInt() >= 30000) {
                            return;
                        }
                        stat.setInt((short) (stat.getInt() + 1));
                       statupdate.put(MapleStat.INT, (int) stat.getInt());
                        break;
                    case LUK: // Luk
                        if (stat.getLuk() >= 30000) {
                            return;
                        }
                        stat.setLuk((short) (stat.getLuk() + 1));
                        statupdate.put(MapleStat.LUK, (int) stat.getLuk());
                        break;
                    case MAXHP: // HP
                        short maxhp = stat.getMaxHp();
                        if (chr.getHpMpApUsed() >= 10000 || maxhp >= 30000) {
                            return;
                        }
                        if (job == 0) { // Beginner
                            maxhp += Randomizer.rand(8, 12);
                        } else if ((job >= 100 && job <= 132) || (job >= 3200 && job <= 3212)) { // Warrior
                            ISkill improvingMaxHP = SkillFactory.getSkill(1000001);
                            int improvingMaxHPLevel = c.getPlayer().getSkillLevel(improvingMaxHP);
                            maxhp += Randomizer.rand(20, 25);
                            if (improvingMaxHPLevel >= 1) {
                                maxhp += improvingMaxHP.getEffect(improvingMaxHPLevel).getX();
                            }
                        } else if ((job >= 200 && job <= 232)) { // Magician
                            maxhp += Randomizer.rand(10, 20);
                        } else if ((job >= 300 && job <= 322) || (job >= 400 && job <= 434) || (job >= 1300 && job <= 1312) || (job >= 1400 && job <= 1412) || (job >= 3300 && job <= 3312)) { // Bowman
                            maxhp += Randomizer.rand(16, 20);
                        } else if ((job >= 500 && job <= 522) || (job >= 3500 && job <= 3512)) { // Pirate
                            ISkill improvingMaxHP = SkillFactory.getSkill(5100000);
                            int improvingMaxHPLevel = c.getPlayer().getSkillLevel(improvingMaxHP);
                            maxhp += Randomizer.rand(18, 22);
                            if (improvingMaxHPLevel >= 1) {
                                maxhp += improvingMaxHP.getEffect(improvingMaxHPLevel).getY();
                            }
                        } else if (job >= 1500 && job <= 1512) { // Pirate
                            ISkill improvingMaxHP = SkillFactory.getSkill(15100000);
                            int improvingMaxHPLevel = c.getPlayer().getSkillLevel(improvingMaxHP);
                            maxhp += Randomizer.rand(18, 22);
                            if (improvingMaxHPLevel >= 1) {
                                maxhp += improvingMaxHP.getEffect(improvingMaxHPLevel).getY();
                            }
                        } else if (job >= 1100 && job <= 1112) { // Soul Master
                            ISkill improvingMaxHP = SkillFactory.getSkill(11000000);
                            int improvingMaxHPLevel = c.getPlayer().getSkillLevel(improvingMaxHP);
                            maxhp += Randomizer.rand(36, 42);
                            if (improvingMaxHPLevel >= 1) {
                                maxhp += improvingMaxHP.getEffect(improvingMaxHPLevel).getY();
                            }
                        } else if (job >= 1200 && job <= 1212) { // Flame Wizard
                            maxhp += Randomizer.rand(15, 21);
                        } else if (job >= 2000 && job <= 2112) { // Aran
                            maxhp += Randomizer.rand(40, 50);
                        } else { // GameMaster
                            maxhp += Randomizer.rand(50, 100);
                        }
                        maxhp = (short) Math.min(30000, Math.abs(maxhp));
                        chr.setHpMpApUsed((short) (chr.getHpMpApUsed() + 1));
                        stat.setMaxHp(maxhp);
                       statupdate.put(MapleStat.MAXHP, (int) maxhp);
                        break;
                    case MAXMP: // MP
                        short maxmp = stat.getMaxMp();
                        if (chr.getHpMpApUsed() >= 10000 || stat.getMaxMp() >= 30000) {
                            return;
                        }
                        if (job == 0) { // Beginner
                            maxmp += Randomizer.rand(6, 8);
                            maxmp += stat.getTotalInt() / 20;
                        } else if (job >= 100 && job <= 132) { // Warrior
                            maxmp += Randomizer.rand(2, 4);
                            maxmp += stat.getTotalInt() / 20;
                        } else if ((job >= 200 && job <= 232) || (job >= 3200 && job <= 3212)) { // Magician
                            ISkill improvingMaxMP = SkillFactory.getSkill(2000001);
                            int improvingMaxMPLevel = c.getPlayer().getSkillLevel(improvingMaxMP);
                            maxmp += Randomizer.rand(18, 20);
                            if (improvingMaxMPLevel >= 1) {
                                maxmp += improvingMaxMP.getEffect(improvingMaxMPLevel).getY() * 2;
                            }
                        } else if ((job >= 300 && job <= 322) || (job >= 400 && job <= 434) || (job >= 500 && job <= 522) || (job >= 3200 && job <= 3212) || (job >= 3500 && job <= 3512) || (job >= 1300 && job <= 1312) || (job >= 1400 && job <= 1412) || (job >= 1500 && job <= 1512)) { // Bowman
                            maxmp += Randomizer.rand(10, 12);
                            maxmp += stat.getTotalInt() / 20;
                        } else if (job >= 1100 && job <= 1112) { // Soul Master
                            maxmp += Randomizer.rand(6, 9);
                            maxmp += stat.getTotalInt() / 20;
                        } else if (job >= 1200 && job <= 1212) { // Flame Wizard
                            ISkill improvingMaxMP = SkillFactory.getSkill(12000000);
                            int improvingMaxMPLevel = c.getPlayer().getSkillLevel(improvingMaxMP);
                            maxmp += Randomizer.rand(18, 20);
                            if (improvingMaxMPLevel >= 1) {
                                maxmp += improvingMaxMP.getEffect(improvingMaxMPLevel).getY() * 2;
                            }
                        } else if (job >= 2000 && job <= 2112) { // Aran
                            maxmp += Randomizer.rand(6, 9);
                            maxmp += stat.getTotalInt() / 20;
                        } else { // GameMaster
                            maxmp += Randomizer.rand(50, 100);
                        }
                        maxmp = (short) Math.min(30000, Math.abs(maxmp));
                        chr.setHpMpApUsed((short) (chr.getHpMpApUsed() + 1));
                        stat.setMaxMp(maxmp);
                       statupdate.put(MapleStat.MAXMP, (int) maxmp);
                        break;
                    default:
                        c.sendPacket(MaplePacketCreator.enableActions());
                        return;
                }
                chr.setRemainingAp((short) (chr.getRemainingAp() - 1));
                statupdate.put(MapleStat.AVAILABLEAP, (int) chr.getRemainingAp());
                c.sendPacket(MaplePacketCreator.updatePlayerStats(statupdate, true, chr));
            }
        }
    }

    public static final void DistributeSP(final int skillid, final MapleClient c, final MapleCharacter chr) {
        boolean isBeginnerSkill = false;
        final int remainingSp;

        switch (skillid) {
            case 1000:
            case 1001:
            case 1002: {
                final int snailsLevel = chr.getSkillLevel(SkillFactory.getSkill(1000));
                final int recoveryLevel = chr.getSkillLevel(SkillFactory.getSkill(1001));
                final int nimbleFeetLevel = chr.getSkillLevel(SkillFactory.getSkill(1002));
                remainingSp = Math.min((chr.getLevel() - 1), 6) - snailsLevel - recoveryLevel - nimbleFeetLevel;
                isBeginnerSkill = true;
                break;
            }
            case 10001000:
            case 10001001:
            case 10001002: {
                final int snailsLevel = chr.getSkillLevel(SkillFactory.getSkill(10001000));
                final int recoveryLevel = chr.getSkillLevel(SkillFactory.getSkill(10001001));
                final int nimbleFeetLevel = chr.getSkillLevel(SkillFactory.getSkill(10001002));
                remainingSp = Math.min((chr.getLevel() - 1), 6) - snailsLevel - recoveryLevel - nimbleFeetLevel;
                isBeginnerSkill = true;
                break;
            }
            case 20001000:
            case 20001001:
            case 20001002: {
                final int snailsLevel = chr.getSkillLevel(SkillFactory.getSkill(20001000));
                final int recoveryLevel = chr.getSkillLevel(SkillFactory.getSkill(20001001));
                final int nimbleFeetLevel = chr.getSkillLevel(SkillFactory.getSkill(20001002));
                remainingSp = Math.min((chr.getLevel() - 1), 6) - snailsLevel - recoveryLevel - nimbleFeetLevel;
                isBeginnerSkill = true;
                break;
            }
            case 20011000:
            case 20011001:
            case 20011002: {
                final int snailsLevel = chr.getSkillLevel(SkillFactory.getSkill(20011000));
                final int recoveryLevel = chr.getSkillLevel(SkillFactory.getSkill(20011001));
                final int nimbleFeetLevel = chr.getSkillLevel(SkillFactory.getSkill(20011002));
                remainingSp = Math.min((chr.getLevel() - 1), 6) - snailsLevel - recoveryLevel - nimbleFeetLevel;
                isBeginnerSkill = true;
                break;
            }
            case 30001000:
            case 30001001:
            case 30000002: {
                final int snailsLevel = chr.getSkillLevel(SkillFactory.getSkill(30001000));
                final int recoveryLevel = chr.getSkillLevel(SkillFactory.getSkill(30001001));
                final int nimbleFeetLevel = chr.getSkillLevel(SkillFactory.getSkill(30000002));
                remainingSp = Math.min((chr.getLevel() - 1), 9) - snailsLevel - recoveryLevel - nimbleFeetLevel;
                isBeginnerSkill = true; //resist can max ALL THREE
                break;
            }
            default: {
                remainingSp = chr.getRemainingSp(GameConstants.getSkillBookForSkill(skillid));
                break;
            }
        }
        final ISkill skill = SkillFactory.getSkill(skillid);
        if (skill != null) {
            if (skill.hasRequiredSkill()) {
                if (chr.getSkillLevel(SkillFactory.getSkill(skill.getRequiredSkillId())) < skill.getRequiredSkillLevel()) {
//                AutobanManager.getInstance().addPoints(c, 1000, 0, "Trying to learn a skill without the required skill (" + skillid + ")");
                    return;
                }
            }
            final int maxlevel = skill.isFourthJob() ? chr.getMasterLevel(skill) : skill.getMaxLevel();
            final int curLevel = chr.getSkillLevel(skill);

            if (skill.isInvisible() && chr.getSkillLevel(skill) == 0) {
                if ((skill.isFourthJob() && chr.getMasterLevel(skill) == 0) || (!skill.isFourthJob() && maxlevel < 10 && !isBeginnerSkill)) {
                    //AutobanManager.getInstance().addPoints(c, 1000, 0, "Illegal distribution of SP to invisible skills (" + skillid + ")");
                    return;
                }
            }

            for (int i : GameConstants.blockedSkills) {
                if (skill.getId() == i) {
                    chr.dropMessage(1, "You may not add this skill.");
                    return;
                }
            }

            if ((remainingSp > 0 && curLevel + 1 <= maxlevel) && (skill.canBeLearnedBy(chr.getJob()) || isBeginnerSkill)) {
                if (!isBeginnerSkill) {
                    final int skillbook = GameConstants.getSkillBookForSkill(skillid);
                    chr.setRemainingSp(chr.getRemainingSp(skillbook) - 1, skillbook);
                }
                c.sendPacket(MaplePacketCreator.updateSp(chr, false));
                chr.changeSkillLevel(skill, (byte) (curLevel + 1), chr.getMasterLevel(skill));
            } else if (!skill.canBeLearnedBy(chr.getJob())) {
//            AutobanManager.getInstance().addPoints(c, 1000, 0, "Trying to learn a skill for a different job (" + skillid + ")");

            }
        }
    }

    public static final void AutoAssignAP(final LittleEndianAccessor slea, final MapleClient c, final MapleCharacter chr) {
        chr.updateTick(slea.readInt());
        slea.skip(4);

        if (chr.getRemainingAp() < 1) {
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }

        if (slea.available() < 16) {
            System.err.println("AutoAssignAP UnHandled : \n" + slea.toString(true));
            FilePrinter.printError(FilePrinter.PacketLogsExcpt, "slea.toString(true)");
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }
        short total = 0;
        short extras = 0;
        for (int i = 0; i < 2; i++) {
            int type = slea.readInt();
            int tempVal = slea.readInt();
            if (tempVal < 0 || tempVal > c.getPlayer().getRemainingAp()) {
                return;
            }
            total += tempVal;
            extras += gainStatByType(chr, MapleStat.getByValue(type), tempVal);
        }
        short remainingAp = (short) ((chr.getRemainingAp() - total) + extras);
        chr.setRemainingAp((short) remainingAp);
        chr.updateSingleStat(MapleStat.AVAILABLEAP, remainingAp);
        c.sendPacket(MaplePacketCreator.enableActions());
    }

    static int gainStatByType(MapleCharacter chr, MapleStat type, int gain) {
        if (chr != null) {
            short newVal = 0;
            if (type.equals(MapleStat.STR)) {
                newVal = (short) (chr.getStat().getStr() + gain);
                if (newVal > 999) {
                    chr.getStat().setStr((short) 999);
                } else {
                    chr.getStat().setStr((short) newVal);
                }
            } else if (type.equals(MapleStat.INT)) {
                newVal = (short) (chr.getStat().getInt() + gain);
                if (newVal > 999) {
                    chr.getStat().setInt((short) 999);
                } else {
                    chr.getStat().setInt(newVal);
                }
            } else if (type.equals(MapleStat.LUK)) {
                newVal = (short) (chr.getStat().getLuk() + gain);
                if (newVal > 999) {
                    chr.getStat().setLuk((short) 999);
                } else {
                    chr.getStat().setLuk(newVal);
                }
            } else if (type.equals(MapleStat.DEX)) {
                newVal = (short) (chr.getStat().getDex() + gain);
                if (newVal > 999) {
                    chr.getStat().setDex((short) 999);
                } else {
                    chr.getStat().setDex(newVal);
                }
            }
            if (newVal > 999) {
                chr.updateSingleStat(type, 999);
                return newVal - 999;
            }
            chr.updateSingleStat(type, newVal);
        }
        return 0;
    }

}
