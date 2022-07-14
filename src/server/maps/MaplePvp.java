/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package server.maps;

import client.MapleBuffStat;
import client.MapleCharacter;
import client.MapleStat;
import handling.channel.handler.AttackInfo;
import server.life.MapleLifeFactory;
import server.life.MapleMonster;
import tools.MaplePacketCreator;

/**
 *
 * @author wubin
 */
public class MaplePvp {

    private static int pvpDamage;
    private static int maxDis;
    private static int maxHeight;
    private static boolean isAoe = false;
    public static boolean isLeft = false;
    public static boolean isRight = false;

    private static boolean isMeleeAttack(AttackInfo attack) {
        switch (attack.skill) {
            case 1001004:    //Power Strike
            case 1001005:    //Slash Blast
            case 4001334:    //Double Stab
            case 4201005:    //Savage Blow
            case 1111004:    //Panic: Axe
            case 1111003:    //Panic: Sword
            case 1311004:    //Dragon Fury: Pole Arm
            case 1311003:    //Dragon Fury: Spear
            case 1311002:    //Pole Arm Crusher
            case 1311005:    //Sacrifice
            case 1311001:    //Spear Crusher
            case 1121008:    //Brandish
            case 1221009:    //Blast
            case 1121006:    //Rush
            case 1221007:    //Rush
            case 1321003:    //Rush
            case 4221001:    //Assassinate
                return true;
        }
        return false;
    }

    private static boolean isRangeAttack(AttackInfo attack) {
        switch (attack.skill) {
            case 2001004:    //Energy Bolt
            case 2001005:    //Magic Claw
            case 3001004:    //Arrow Blow
            case 3001005:    //Double Shot
            case 4001344:    //Lucky Seven
            case 2101004:    //Fire Arrow
            case 2101005:    //Poison Brace
            case 2201004:    //Cold Beam
            case 2301005:    //Holy Arrow
            case 4101005:    //Drain
            case 2211002:    //Ice Strike
            case 2211003:    //Thunder Spear
            case 3111006:    //Strafe
            case 3211006:    //Strafe
            case 4111005:    //Avenger
            case 4211002:    //Assaulter
            case 2121003:    //Fire Demon
            case 2221006:    //Chain Lightning
            case 2221003:    //Ice Demon
            case 2111006:	 //Element Composition F/P
            case 2211006:	 //Element Composition I/L
            case 2321007:    //Angel's Ray
            case 3121003:    //Dragon Pulse
            case 3121004:    //Hurricane
            case 3221003:    //Dragon Pulse
            case 3221001:    //Piercing
            case 3221007:    //Sniping
            case 4121003:    //Showdown taunt
            case 4121007:    //Triple Throw
            case 4221007:    //Boomerang Step
            case 4221003:    //Showdown taunt
            case 4111004:    //Shadow Meso
                return true;
        }
        return false;
    }

    private static boolean isAoeAttack(AttackInfo attack) {
        switch (attack.skill) {
            case 2201005:    //Thunderbolt
            case 3101005:    //Arrow Bomb : Bow
            case 3201005:    //Iron Arrow : Crossbow
            case 1111006:    //Coma: Axe
            case 1111005:    //Coma: Sword
            case 1211002:    //Charged Blow
            case 1311006:    //Dragon Roar
            case 2111002:    //Explosion
            case 2111003:    //Poison Mist
            case 2311004:    //Shining Ray
            case 3111004:    //Arrow Rain
            case 3111003:    //Inferno
            case 3211004:    //Arrow Eruption
            case 3211003:    //Blizzard (Sniper)
            case 4211004:    //Band of Thieves
            case 1221011:    //Sanctuary Skill
            case 2121001:    //Big Bang
            case 2121007:    //Meteo
            case 2121006:    //Paralyze
            case 2221001:    //Big Bang
            case 2221007:    //Blizzard
            case 2321008:    //Genesis
            case 2321001:    //Big Bang
            case 4121004:    //Ninja Ambush
            case 4121008:    //Ninja Storm knockback
            case 4221004:    //Ninja Ambush
                return true;
        }
        return false;
    }

    private static void getDirection(AttackInfo attack) {

        isRight = true;
        isLeft = true;

    }

    private static void DamageBalancer(AttackInfo attack) {
        if (attack.skill == 0) {
            pvpDamage = 100;
            maxDis = 130;
            maxHeight = 35;
        } else if (isMeleeAttack(attack)) {
            maxDis = 130;
            maxHeight = 45;
            isAoe = false;
            if (attack.skill == 4201005) {
                pvpDamage = (int) (Math.floor(Math.random() * (75 - 5) + 5));
            } else if (attack.skill == 1121008) {
                pvpDamage = (int) (Math.floor(Math.random() * (320 - 180) + 180));
                maxHeight = 50;
            } else if (attack.skill == 4221001) {
                pvpDamage = (int) (Math.floor(Math.random() * (200 - 150) + 150));
            } else if (attack.skill == 1121006 || attack.skill == 1221007 || attack.skill == 1321003) {
                pvpDamage = (int) (Math.floor(Math.random() * (200 - 80) + 80));
            } else {
                pvpDamage = (int) (Math.floor(Math.random() * (600 - 250) + 250));
            }
        } else if (isRangeAttack(attack)) {
            maxDis = 300;
            maxHeight = 40;
            isAoe = false;
            if (attack.skill == 4201005) {
                pvpDamage = (int) (Math.floor(Math.random() * (75 - 5) + 5));
            } else if (attack.skill == 4121007) {
                pvpDamage = (int) (Math.floor(Math.random() * (60 - 15) + 15));
            } else if (attack.skill == 4001344 || attack.skill == 2001005) {
                pvpDamage = (int) (Math.floor(Math.random() * (195 - 90) + 90));
            } else if (attack.skill == 4221007) {
                pvpDamage = (int) (Math.floor(Math.random() * (350 - 180) + 180));
            } else if (attack.skill == 3121004 || attack.skill == 3111006 || attack.skill == 3211006) {
                maxDis = 450;
                pvpDamage = (int) (Math.floor(Math.random() * (50 - 20) + 20));
            } else if (attack.skill == 2121003 || attack.skill == 2221003) {
                pvpDamage = (int) (Math.floor(Math.random() * (600 - 300) + 300));
            } else {
                pvpDamage = (int) (Math.floor(Math.random() * (400 - 250) + 250));
            }
        } else if (isAoeAttack(attack)) {
            maxDis = 350;
            maxHeight = 350;
            isAoe = true;
            if (attack.skill == 2121001 || attack.skill == 2221001 || attack.skill == 2321001 || attack.skill == 2121006) {
                maxDis = 175;
                maxHeight = 175;
                pvpDamage = (int) (Math.floor(Math.random() * (350 - 180) + 180));
            } else {
                pvpDamage = (int) (Math.floor(Math.random() * (700 - 300) + 300));
            }
        }
    }

    private static void monsterBomb(MapleCharacter player, MapleCharacter attackedPlayers, MapleMap map, AttackInfo attack) {
        //level balances
        if (attackedPlayers.getLevel() > player.getLevel() + 25) {
            pvpDamage *= 1.35;
        } else if (attackedPlayers.getLevel() < player.getLevel() - 25) {
            pvpDamage /= 1.35;
        } else if (attackedPlayers.getLevel() > player.getLevel() + 100) {
            pvpDamage *= 1.50;
        } else if (attackedPlayers.getLevel() < player.getLevel() - 100) {
            pvpDamage /= 1.50;
        }

        //buff modifiers
        Integer mguard = attackedPlayers.getBuffedValue(MapleBuffStat.MAGIC_GUARD);
        Integer mesoguard = attackedPlayers.getBuffedValue(MapleBuffStat.MESOGUARD);

        int magicattack = (player.getDex() + player.getInt() + player.getLuk() + player.getStr()) / 300; //4项属性值最后除以3=magicattack K攻击力+magicattack值
        pvpDamage += magicattack;

        int magicat = (player.getStat().getTotalMagic() + player.getStat().getTotalWatk()) / 100; //魔法+物理攻击除以100=magicat值 PK攻击力+magicat值
        pvpDamage += magicat;

        if (pvpDamage > 99999) {
            pvpDamage = 99999;
        }
        if (mguard != null) {
            int mploss = (int) (pvpDamage / .5);
            pvpDamage *= .70;
            if (mploss > attackedPlayers.getStat().getMp()) {
                pvpDamage /= .70;
                attackedPlayers.cancelEffectFromBuffStat(MapleBuffStat.MAGIC_GUARD);
            } else {
                attackedPlayers.setMp(attackedPlayers.getStat().getMp() - mploss);
                attackedPlayers.updateSingleStat(MapleStat.MP, attackedPlayers.getStat().getMp());
            }
        } else if (mesoguard != null) {
            int mesoloss = (int) (pvpDamage * .75);
            pvpDamage *= .75;
            if (mesoloss > attackedPlayers.getMeso()) {
                pvpDamage /= .75;
                attackedPlayers.cancelEffectFromBuffStat(MapleBuffStat.MESOGUARD);
            } else {
                attackedPlayers.gainMeso(-mesoloss, false);
            }
        }

        //set up us teh bonmb
        //training thingy = 9409000
        MapleMonster pvpMob = MapleLifeFactory.getMonster(9400711);
        map.spawnMonsterOnGroundBelow(pvpMob, attackedPlayers.getPosition());
        for (int attacks = 0; attacks < attack.hits; attacks++) {
            if (attack.skill == 0) {
                map.broadcastMessage(MaplePacketCreator.damagePlayer(1, pvpMob.getId(), attackedPlayers.getId(), pvpDamage, 0, (byte) 0, 0, false, pvpMob.getObjectId(), (int) pvpMob.getPosition().getX(), (int) pvpMob.getPosition().getY()));
                attackedPlayers.addHP(-pvpDamage);
            } else {
                map.broadcastMessage(MaplePacketCreator.damagePlayer(1, pvpMob.getId(), attackedPlayers.getId(), pvpDamage * attackedPlayers.getLevel(), 0, (byte) 0, 0, false, pvpMob.getObjectId(), (int) pvpMob.getPosition().getX(), (int) pvpMob.getPosition().getY()));
                attackedPlayers.addHP(-pvpDamage * attackedPlayers.getLevel());
            }
        }
        int attackedDamage = 0;
        if (attack.skill == 0) {
            attackedDamage = pvpDamage * attack.hits * attackedPlayers.getLevel();
        } else {
            attackedDamage = pvpDamage * attack.hits * attackedPlayers.getLevel();
        }

        attackedPlayers.getClient().sendPacket(MaplePacketCreator.getErrorNotice(player.getName() + " 打了 " + attackedDamage + " 点的伤害!"));
        map.killMonster(pvpMob, player, false, false, (byte) -1);

        //rewards
        if (attackedPlayers.getStat().getHp() <= 0 && !attackedPlayers.isAlive()) {
            int expReward = attackedPlayers.getLevel() * 100;
            int gpReward = (int) (Math.floor(Math.random() * (200 - 50) + 50));
            if (player.getLevel() * .25 >= player.getLevel()) {
                expReward *= 20;
            }
            //   player.gainExp(expReward, true, true, true);

//            player.gainPvpKill();
            player.getClient().sendPacket(MaplePacketCreator.getErrorNotice("你杀了 " + attackedPlayers.getName() + "!! !"));
//            player.setPvpKills(player.getPvpKills() + 1);
            attackedPlayers.getClient().sendPacket(MaplePacketCreator.getErrorNotice("无情的" + player.getName() + "杀了你"));
//            attackedPlayers.gainPvpDeath();
//            attackedPlayers.setPvpDeaths(player.getPvpDeaths() + 1);

            int random = (int) Math.floor(Math.random() * 3000.0D);
            if (attackedPlayers.getMeso() >= random) {
                attackedPlayers.getMap().spawnMesoDrop(random, attackedPlayers.getPosition(), attackedPlayers, attackedPlayers, false, (byte) 0);
                attackedPlayers.gainMeso(-random, true);
                attackedPlayers.getClient().sendPacket(MaplePacketCreator.getErrorNotice("无情的" + player.getName() + "杀了你 你损失了" + random + "元!"));

            } else {
                attackedPlayers.dropMessage("[系统警告] 您的枫币已经不足，请马上离开。");
                player.dropMessage("[系统警告] 请不要再残害他，对方枫币已耗尽。");
            }
        }
    }

    public static void doPvP(MapleCharacter player, MapleMap map, AttackInfo attack) {
        DamageBalancer(attack);
        getDirection(attack);
        for (MapleCharacter attackedPlayers : player.getMap().getNearestPvpChar(player.getPosition(), maxDis, maxHeight, player.getMap().getCharacters())) {
            if (attackedPlayers.getLevel() >= 70) {
                if (attackedPlayers.isAlive() && (player.getParty() == null || player.getParty() != attackedPlayers.getParty())) {
                    monsterBomb(player, attackedPlayers, map, attack);
                }
            }
        }
    }
}
