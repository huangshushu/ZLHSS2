package client.messages.commands;

import client.MapleCharacter;
import client.MapleClient;
import client.MapleStat;
import constants.PiPiConfig;
import constants.ServerConstants;
import handling.channel.ChannelServer;
import handling.world.World;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;

/**
 *
 * @author Windyboy
 */
public class SkilledCommand {

    public static ServerConstants.PlayerGMRank getPlayerLevelRequired() {
        return ServerConstants.PlayerGMRank.老实习生;
    }

    public static class Level extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                return false;
            }
            int level = c.getPlayer().getLevel();
            try {
                level = Short.parseShort(splitted[1]);
            } catch (Exception ex) {

            }
            c.getPlayer().setLevel((short) level);
            c.getPlayer().updateSingleStat(MapleStat.LEVEL, level);
            c.getPlayer().setExp(0);
            return true;
        }

        @Override
        public String getMessage() {
            return "!Level <等级> - 改变等级";
        }
    }

    public static class 黑单 extends FakeReport {

        @Override
        public String getMessage() {
            return "!黑单 <玩家名称> - 将玩家设定为无法回报的黑名单";
        }
    }

    public static class FakeReport extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                return false;
            }
            String input = splitted[1];
            int ch = World.Find.findChannel(input);
            if (ch <= 0) {
                c.getPlayer().dropMessage("玩家[" + input + "]不在线上");
                return true;
            }
            MapleCharacter target = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterByName(input);
            if (target.isGM()) {
                c.getPlayer().dropMessage(1, "无法黑单GM唷");
                return true;
            }
            int accID = target.getAccountID();
            PiPiConfig.setBlackList(accID, input);
            String msg = "[GM 密语] GM " + c.getPlayer().getName() + " 在回报系统黑单了 " + input;
            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, msg));
            FileoutputUtil.logToFile("Logs/Data/玩家回报黑单.txt",
                    "\r\n  " + FileoutputUtil.NowTime() + " GM " + c.getPlayer().getName() + " 在回报系统黑单了 " + input);
            return true;
        }

        @Override
        public String getMessage() {
            return "!FakeReport <玩家名称> - 将玩家设定为无法回报的黑名单";
        }
    }

    public static class Heal extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            c.getPlayer().getStat().setHp(c.getPlayer().getStat().getCurrentMaxHp());
            c.getPlayer().getStat().setMp(c.getPlayer().getStat().getCurrentMaxMp());
            c.getPlayer().updateSingleStat(MapleStat.HP, c.getPlayer().getStat().getCurrentMaxHp());
            c.getPlayer().updateSingleStat(MapleStat.MP, c.getPlayer().getStat().getCurrentMaxMp());
            c.getPlayer().dispelDebuffs();
            return true;
        }

        @Override
        public String getMessage() {
            return "!heal - 补满血魔";
        }
    }

    public static class HealMap extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            MapleCharacter player = c.getPlayer();
            for (MapleCharacter mch : player.getMap().getCharacters()) {
                if (mch != null) {
                    mch.getStat().setHp(mch.getStat().getMaxHp());
                    mch.updateSingleStat(MapleStat.HP, mch.getStat().getMaxHp());
                    mch.getStat().setMp(mch.getStat().getMaxMp());
                    mch.updateSingleStat(MapleStat.MP, mch.getStat().getMaxMp());
                    mch.dispelDebuffs();
                }
            }
            return true;

        }

        @Override
        public String getMessage() {
            return "!healmap  - 治愈地图上所有的人";
        }
    }
}
