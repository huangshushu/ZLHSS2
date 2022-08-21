/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package client.messages.commands;

import client.MapleCharacter;
import client.MapleClient;
import client.MapleStat;
import client.SkillFactory;
import constants.PiPiConfig;
import constants.ServerConstants.PlayerGMRank;

/**
 *
 * @author benq
 */
public class GodCommand {

    public static PlayerGMRank getPlayerLevelRequired() {
        return PlayerGMRank.神;
    }

    public static class MinStats extends CommandExecute {

        public boolean execute(MapleClient c, String[] splitted) {
            MapleCharacter player = c.getPlayer();
            player.getStat().setHp(50);
            player.getStat().setMp(50);
            player.getStat().setMaxHp((short) 50);
            player.getStat().setMaxMp((short) 50);
            player.getStat().setStr((short) 4);
            player.getStat().setDex((short) 4);
            player.getStat().setInt((short) 4);
            player.getStat().setLuk((short) 4);
            player.setLevel((short) 10);
            player.updateSingleStat(MapleStat.HP, 50);
            player.updateSingleStat(MapleStat.MP, 50);
            player.updateSingleStat(MapleStat.MAXHP, 50);
            player.updateSingleStat(MapleStat.MAXMP, 50);
            player.updateSingleStat(MapleStat.STR, 4);
            player.updateSingleStat(MapleStat.DEX, 4);
            player.updateSingleStat(MapleStat.INT, 4);
            player.updateSingleStat(MapleStat.LUK, 4);
            player.updateSingleStat(MapleStat.LEVEL, 10);
            return true;
        }

        @Override
        public String getMessage() {
            return "!MinStats - 预设属性";
        }
    }

    public static class Buff extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            MapleCharacter player = c.getPlayer();
            SkillFactory.getSkill(9001002).getEffect(1).applyTo(player);
            SkillFactory.getSkill(9001003).getEffect(1).applyTo(player);
            SkillFactory.getSkill(9001008).getEffect(1).applyTo(player);
            SkillFactory.getSkill(9001001).getEffect(1).applyTo(player);
            return true;
        }

        @Override
        public String getMessage() {
            return "!Buff - 施放管理BUFF";
        }
    }

    public static class Maxstats extends CommandExecute {

        public boolean execute(MapleClient c, String[] splitted) {

            MapleCharacter player = c.getPlayer();
            player.getStat().setHp(30000);
            player.getStat().setMp(30000);
            player.getStat().setMaxHp((short) 30000);
            player.getStat().setMaxMp((short) 30000);
            player.getStat().setStr(Short.MAX_VALUE);
            player.getStat().setDex(Short.MAX_VALUE);
            player.getStat().setInt(Short.MAX_VALUE);
            player.getStat().setLuk(Short.MAX_VALUE);
            player.setLevel((short) 199);
            player.updateSingleStat(MapleStat.HP, 30000);
            player.updateSingleStat(MapleStat.MP, 30000);
            player.updateSingleStat(MapleStat.MAXHP, 30000);
            player.updateSingleStat(MapleStat.MAXMP, 30000);
            player.updateSingleStat(MapleStat.STR, Short.MAX_VALUE);
            player.updateSingleStat(MapleStat.DEX, Short.MAX_VALUE);
            player.updateSingleStat(MapleStat.INT, Short.MAX_VALUE);
            player.updateSingleStat(MapleStat.LUK, Short.MAX_VALUE);
            player.updateSingleStat(MapleStat.LEVEL, 199);
            return true;
        }

        @Override
        public String getMessage() {
            return "!Maxstats - 满属性";
        }
    }

    public static class BanCommand extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            PiPiConfig.setCommandLock(!PiPiConfig.getCommandLock());
            c.getPlayer().dropMessage("指令封锁: " + PiPiConfig.getCommandLock());
            return true;
        }

        @Override
        public String getMessage() {
            return "!BanCommand - 封锁指令";
        }
    }

    public static class hair extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            MapleCharacter player = c.getPlayer();
            int id = 0;
            if (splitted.length < 2) {
                return false;
            }
            id = Integer.parseInt(splitted[1]);
            player.setHair(id);
            player.updateSingleStat(MapleStat.HAIR, id);
            player.dropMessage(5, "您当前发型的ＩＤ已被改为: " + id);
            return true;
        }

        @Override
        public String getMessage() {
            return "!Hair <发型代码> - 修改发型";
        }
    }
    
    public static class face extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            MapleCharacter player = c.getPlayer();
            int id = 0;
            if (splitted.length < 2) {
                return false;
            }
            id = Integer.parseInt(splitted[1]);
            player.setFace(id);
            player.updateSingleStat(MapleStat.FACE, id);
            player.dropMessage(5, "您当前脸型的ＩＤ已被改为: " + id);
            return true;
        }

        @Override
        public String getMessage() {
            return "!Face <脸型代码> - 修改脸型";
        }
    }

    public static class Str extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            MapleCharacter player = c.getPlayer();
            int id = 0;
            if (splitted.length < 2) {
                return false;
            }
            id = Integer.parseInt(splitted[1]);
            player.setStr(id);
            player.updateSingleStat(MapleStat.STR, id);
            player.dropMessage(5, "您当前力量已被改为: " + id);
            return true;
        }

        @Override
        public String getMessage() {
            return "!Str <能力值> - 修改能力值";
        }
    }

    public static class Int extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            MapleCharacter player = c.getPlayer();
            int id = 0;
            if (splitted.length < 2) {
                return false;
            }
            id = Integer.parseInt(splitted[1]);
            player.setInt(id);
            player.updateSingleStat(MapleStat.INT, id);
            player.dropMessage(5, "您当前智力已被改为: " + id);
            return true;
        }

        @Override
        public String getMessage() {
            return "!Int <能力值> - 修改能力值";
        }
    }

    public static class Luk extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            MapleCharacter player = c.getPlayer();
            int id = 0;
            if (splitted.length < 2) {
                return false;
            }
            id = Integer.parseInt(splitted[1]);
            player.setLuk(id);
            player.updateSingleStat(MapleStat.LUK, id);
            player.dropMessage(5, "您当前幸运已被改为: " + id);
            return true;
        }

        @Override
        public String getMessage() {
            return "!Luk <能力值> - 修改能力值";
        }
    }

    public static class Dex extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            MapleCharacter player = c.getPlayer();
            int id = 0;
            if (splitted.length < 2) {
                return false;
            }
            id = Integer.parseInt(splitted[1]);
            player.setDex(id);
            player.updateSingleStat(MapleStat.DEX, id);
            player.dropMessage(5, "您当前敏捷已被改为: " + id);
            return true;
        }

        @Override
        public String getMessage() {
            return "!Luk <能力值> - 修改能力值";
        }
    }

    public static class HP extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            MapleCharacter player = c.getPlayer();
            int id = 0;
            if (splitted.length < 2) {
                return false;
            }
            id = Integer.parseInt(splitted[1]);
            player.setHp(id);
            player.setMaxHp(id);
            player.updateSingleStat(MapleStat.HP, id);
            player.updateSingleStat(MapleStat.MAXHP, id);
            player.dropMessage(5, "您当前HP已被改为: " + id);
            return true;
        }

        @Override
        public String getMessage() {
            return "!HP <能力值> - 修改能力值";
        }
    }

    public static class MP extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            MapleCharacter player = c.getPlayer();
            int id = 0;
            if (splitted.length < 2) {
                return false;
            }
            id = Integer.parseInt(splitted[1]);
            player.setMp(id);
            player.setMaxMp(id);
            player.updateSingleStat(MapleStat.MP, id);
            player.updateSingleStat(MapleStat.MAXMP, id);
            player.dropMessage(5, "您当前MP已被改为: " + id);
            return true;
        }

        @Override
        public String getMessage() {
            return "!MP <能力值> - 修改能力值";
        }
    }
}
