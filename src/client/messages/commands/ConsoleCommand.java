/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package client.messages.commands;

/**
 * @author Flower
 */
public class ConsoleCommand {

    /*
     * public static class Info extends ConsoleCommandExecute {
     *
     * @Override
     * public int execute(String[] paramArrayOfString) {
     * Set<Thread> threadSet = Thread.getAllStackTraces().keySet();
     * Runtime runtime = Runtime.getRuntime();
     *
     * NumberFormat format = NumberFormat.getInstance();
     *
     * StringBuilder sb = new StringBuilder();
     * Long maxMemory = runtime.maxMemory();
     * Long allocatedMemory = runtime.totalMemory();
     * Long freeMemory = runtime.freeMemory();
     * System.out.println("------------------ 系统资讯 ------------------");
     * System.out.println("线程数 :" + ((Integer) threadSet.size()).toString());
     * //System.out.println("SQL连接数 :" + ((Integer)
     * DatabaseConnection.getConnectionsCount()).toString());
     * System.out.println("记忆体最大限制 :" + Math.round(maxMemory / 1024 / 1024) + "Gb");
     * System.out.println("已申请记忆体 :" + allocatedMemory.toString());
     * System.out.println("尚未使用记忆体 :" + freeMemory.toString());
     *
     * return 1;
     * }
     *
     * }
     */

    /*
     * public static class Shutdown extends ConsoleCommandExecute {
     *
     * private static Thread t = null;
     *
     * @Override
     * public int execute(String[] splitted) {
     * System.out.println("执行关闭作业");
     * // for (handling.channel.ChannelServer cserv :
     * handling.channel.ChannelServer.getAllInstances()) {
     * // cserv.closeAllMerchant();
     * // }
     * // System.out.println("精灵商人储存完毕.");
     * System.out.println("服务器关闭中...");
     * if (t == null || t.isAlive()) {
     * try {
     * t = new Thread(server.ShutdownServer.getInstance());
     * t.start();
     *
     * } catch (Exception ex) {
     * Logger.getLogger(ConsoleCommand.class.getName()).log(Level.SEVERE, null, ex);
     * }
     * } else {
     * System.out.println("已在执行中...");
     * }
     * return 1;
     *
     * }
     * }
     */

    /*
     * public static class ShutdownTime extends ConsoleCommandExecute {
     *
     * private int minutesLeft = 0;
     * private static Thread t = null;
     * private static ScheduledFuture<?> ts = null;
     *
     * @Override
     * public int execute(String[] splitted) {
     * if (splitted.length > 1) {
     * minutesLeft = Integer.parseInt(splitted[1]);
     * if (ts == null && (t == null || !t.isAlive())) {
     * t = new Thread(server.ShutdownServer.getInstance());
     * ts = Timer.EventTimer.getInstance().register(new Runnable() {
     *
     * @Override
     * public void run() {
     * if (minutesLeft == 1) {
     * for (handling.channel.ChannelServer cserv :
     * handling.channel.ChannelServer.getAllInstances()) {
     * // cserv.closeAllMerchant();
     * }
     * System.out.println("精灵商人储存完毕.");
     * } else if (minutesLeft == 0) {
     * ShutdownServer.getInstance().run();
     * t.start();
     * ts.cancel(false);
     * return;
     * }
     * World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(6,
     * "[枫之谷公告] 服务器将在 " + minutesLeft + " 分钟后关闭，请勿关闭精灵商人并存档并下线。."));
     * System.out.println("服务器将在 " + minutesLeft + "分钟后关闭.");
     * minutesLeft--;
     * }
     * }, 60000);
     * } else {
     * System.out.println("好吧真拿你没办法..服务器关闭时间修改...请等待关闭完毕..请勿强制关闭服务器..否则后果自负!");
     * }
     * } else {
     * System.out.println("使用规则: shutdowntime <关闭时间>");
     * return 0;
     * }
     * return 1;
     * }
     * }
     */
    /*
     * public static class Dodown extends ConsoleCommandExecute {
     *
     * @Override
     * public int execute(String[] splitted) {
     * try (Connection con =
     * DBConPool.getInstance().getDataSource().getConnection()) {
     * try (PreparedStatement ps =
     * con.prepareStatement("UPDATE accounts SET loggedin = 0 WHERE loggedin = 1"))
     * {
     * ps.executeUpdate();
     * }
     * System.out.println("所有帐号解卡完毕");
     * } catch (SQLException ex) {
     * FileoutputUtil.outError("logs/资料库异常.txt", ex);
     * System.err.println("解卡异常请查看MYSQL");
     * }
     * return 1;
     * }
     * }
     */

    /*
     * public static class ExpRate extends ConsoleCommandExecute {
     *
     * @Override
     * public int execute(String[] splitted) {
     * if (splitted.length > 2) {
     * int rate = 1;
     * try {
     * rate = Integer.parseInt(splitted[1]);
     * } catch (Exception ex) {
     *
     * }
     * if (splitted[2].equalsIgnoreCase("all")) {
     * for (ChannelServer cserv : ChannelServer.getAllInstances()) {
     * cserv.setExpRate(rate);
     * }
     * } else {
     * int channel = Integer.parseInt(splitted[2]);
     * ChannelServer.getInstance(channel).setExpRate(rate);
     * }
     * System.out.println("经验倍率已改为 " + rate + "x");
     * } else {
     * System.out.println("Syntax: exprate <number> [<channel>/all]");
     * }
     * return 1;
     * }
     * }
     *
     * public static class DropRate extends ConsoleCommandExecute {
     *
     * @Override
     * public int execute(String[] splitted) {
     * if (splitted.length > 2) {
     * int rate = 1;
     * try {
     * rate = Integer.parseInt(splitted[1]);
     * } catch (Exception ex) {
     *
     * }
     * if (splitted.length > 2 && splitted[2].equalsIgnoreCase("all")) {
     * for (ChannelServer cserv : ChannelServer.getAllInstances()) {
     * cserv.setDropRate(rate);
     * }
     * } else {
     * int channel = Integer.parseInt(splitted[2]);
     * ChannelServer.getInstance(channel).setDropRate(rate);
     * }
     * System.out.println("掉落倍率已改为 " + rate + "x");
     * } else {
     * System.out.println("Syntax: droprate <number> [<channel>/all]");
     * }
     * return 1;
     * }
     * }
     *
     * public static class MesoRate extends ConsoleCommandExecute {
     *
     * @Override
     * public int execute(String[] splitted) {
     * if (splitted.length > 2) {
     * int rate = 1;
     * try {
     * rate = Integer.parseInt(splitted[1]);
     * } catch (Exception ex) {
     *
     * }
     * if (splitted[2].equalsIgnoreCase("all")) {
     * for (ChannelServer cserv : ChannelServer.getAllInstances()) {
     * cserv.setMesoRate(rate);
     * }
     * } else {
     * int channel = Integer.parseInt(splitted[2]);
     * ChannelServer.getInstance(channel).setMesoRate(rate);
     * }
     * System.out.println("金钱倍率已改为 " + rate + "x");
     * } else {
     * System.out.println("Syntax: mesorate <number> [<channel>/all]");
     * }
     * return 1;
     * }
     * }
     *
     * public static class Saveall extends ConsoleCommandExecute {
     *
     * @Override
     * public int execute(String[] splitted) {
     * int p = 0;
     * for (ChannelServer cserv : ChannelServer.getAllInstances()) {
     * List<MapleCharacter> chrs =
     * cserv.getPlayerStorage().getAllCharactersThreadSafe();
     * for (MapleCharacter chr : chrs) {
     * p++;
     * chr.saveToDB(false, true);
     * }
     * }
     * System.out.println("[保存] " + p + "个玩家数据保存到数据中.");
     * return 1;
     * }
     * }
     *
     * public static class AutoReg extends ConsoleCommandExecute {
     *
     * @Override
     * public int execute(String[] splitted) {
     * LoginServer.setAutoReg(!LoginServer.getAutoReg());
     * System.out.println("自动注册状态: " + (LoginServer.getAutoReg() ? "开启" : "关闭"));
     * return 1;
     * }
     * }
     *
     * public static class serverMsg extends ConsoleCommandExecute {
     *
     * @Override
     * public int execute(String[] splitted) {
     * if (splitted.length > 1) {
     * StringBuilder sb = new StringBuilder();
     * sb.append(StringUtil.joinStringFrom(splitted, 1));
     * for (ChannelServer ch : ChannelServer.getAllInstances()) {
     * ch.setServerMessage(sb.toString());
     * }
     * World.Broadcast.broadcastMessage(MaplePacketCreator.serverMessage(sb.toString
     * ()));
     * } else {
     * System.out.println("指令规则: !serverMsg <message>");
     * return 0;
     * }
     * return 1;
     * }
     * }
     *
     * public static class CrucialTime extends ConsoleCommandExecute {
     *
     * protected static ScheduledFuture<?> ts = null;
     *
     * public int execute(String[] splitted) {
     * if (splitted.length < 1) {
     * return 0;
     * }
     * if (ts != null) {
     * ts.cancel(false);
     * System.out.println("原定的关键时刻已取消");
     * }
     * int minutesLeft = 0;
     * try {
     * minutesLeft = Integer.parseInt(splitted[1]);
     * } catch (NumberFormatException ex) {
     * return 0;
     * }
     * if (minutesLeft > 0) {
     * ts = Timer.EventTimer.getInstance().schedule(new Runnable() {
     *
     * @Override
     * public void run() {
     * for (ChannelServer cserv : ChannelServer.getAllInstances()) {
     * for (MapleCharacter mch :
     * cserv.getPlayerStorage().getAllCharactersThreadSafe()) {
     * if (mch.getLevel() >= 29) {
     * NPCScriptManager.getInstance().start(mch.getClient(), 9010010);
     * }
     * }
     * }
     * World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(6,
     * "关键时刻开放囉，没有30等以上的玩家是得不到的。"));
     * ts.cancel(false);
     * ts = null;
     * }
     * }, minutesLeft * 60000);
     * System.out.println("关键时刻预定已完成");
     * } else {
     * System.out.println("设定的时间必须 > 0");
     * }
     * return 1;
     * }
     * }
     *
     * public static class ReloadChannel extends ConsoleCommandExecute {
     *
     * @Override
     * public int execute(String[] splitted) {
     *
     * if (splitted[1].equalsIgnoreCase("all")) {
     * for (ChannelServer csrv : ChannelServer.getAllInstances()) {
     * csrv.closeAllMerchant();
     * csrv.shutdown();
     * }
     * ChannelServer.startAllChannels();
     * System.out.println("所有频道重新读取成功");
     * } else {
     * try {
     * final int channel = Integer.parseInt(splitted[1]);
     * ChannelServer csrv = ChannelServer.getInstance(channel);
     * csrv.closeAllMerchant();
     * ChannelServer.startChannel(channel);
     * } catch (Exception e) {
     * System.out.println("[指令用法] reloadChannle <频道/all>");
     * }
     * }
     * return 1;
     * }
     * }
     *
     * public static class ReloadMap extends ConsoleCommandExecute {
     *
     * @Override
     * public int execute(String[] splitted) {
     * try {
     * final int mapId = Integer.parseInt(splitted[1]);
     *
     * for (ChannelServer cserv : ChannelServer.getAllInstances()) {
     * if (cserv.getMapFactory().isMapLoaded(mapId) &&
     * cserv.getMapFactory().getMap(mapId).getCharactersSize() > 0) {
     * System.out.println("该地图还有人唷");
     * return 0;
     * }
     * }
     * for (ChannelServer cserv : ChannelServer.getAllInstances()) {
     * if (cserv.getMapFactory().isMapLoaded(mapId)) {
     * cserv.getMapFactory().removeMap(mapId);
     * }
     * }
     * } catch (Exception e) {
     * System.out.println("[指令用法] reloadMap <地图ID>");
     * }
     * return 1;
     * }
     * }
     *
     * public static class help extends ConsoleCommandExecute {
     *
     * @Override
     * public int execute(String[] splitted) {
     * System.out.println("╭〝☆指令列表〞★╮");
     * System.out.println("-------------------------");
     * System.out.println("exprate  经验倍率");
     * System.out.println("droprate 掉宝倍率");
     * System.out.println("mesorate 金钱倍率");
     * System.out.println("-------------------------");
     * System.out.println("shutdown 关闭服务器");
     * System.out.println("shotdowntime <时间> 倒数关闭服务器");
     * System.out.println("CrucialTime <时间> 关键时刻");
     * System.out.println("reloadchannel 重新载入频道");
     * System.out.println("reloadmap 重新载入地图");
     * System.out.println("Info 查看服务器状况");
     * System.out.println("AutoReg 自动注册开关");
     * System.out.println("-------------------------");
     * System.out.println("online 线上玩家");
     * System.out.println("say 服务器说话");
     * System.out.println("dodown 解除所有卡帐");
     * System.out.println("saveall 全服存档");
     * System.out.println("GMmessage 后台GM广播");
     * System.out.println("-------------------------");
     * System.out.println("╰〝★指令列表〞╯");
     * return 1;
     * }
     * }
     *
     * public static class Online extends ConsoleCommandExecute {
     *
     * @Override
     * public int execute(String[] splitted) {
     * int total = 0;
     * for (ChannelServer ch : ChannelServer.getAllInstances()) {
     * System.out.println(
     * "----------------------------------------------------------");
     * System.out.println(new
     * StringBuilder().append("频道: ").append(ch.getChannel()).append(" 线上人数: ").
     * append(ch.getConnectedClients()).toString());
     * total += ch.getConnectedClients();
     * for (MapleCharacter chr : ch.getPlayerStorage().getAllCharactersThreadSafe())
     * {
     *
     * if (chr != null) {
     * StringBuilder ret = new StringBuilder();
     * ret.append(" 角色暱称 ");
     * ret.append(StringUtil.getRightPaddedStr(chr.getName(), ' ', 13));
     * ret.append(" ID: ");
     * ret.append(StringUtil.getRightPaddedStr(chr.getId() + "", ' ', 4));
     * ret.append(" 等级: ");
     * ret.append(StringUtil.getRightPaddedStr(String.valueOf(chr.getLevel()), ' ',
     * 3));
     * ret.append(" 职业: ");
     * ret.append(StringUtil.getRightPaddedStr(String.valueOf(chr.getJob()), ' ',
     * 4));
     * if (chr.getMap() != null) {
     * ret.append(" 地图: ");
     * ret.append(chr.getMapId()).append(" - ").append(chr.getMap().getMapName());
     * System.out.println(ret.toString());
     * }
     * }
     * }
     * System.out.println(new
     * StringBuilder().append("当前频道总计线上人数: ").append(total).toString());
     * System.out.println(
     * "-------------------------------------------------------------------------------------"
     * );
     * }
     *
     * System.out.println(new
     * StringBuilder().append("当前服务器总计线上人数: ").append(total).append("个").toString())
     * ;
     * System.out.println(
     * "-------------------------------------------------------------------------------------"
     * );
     *
     * return 1;
     * }
     * }
     *
     * public static class Say extends ConsoleCommandExecute {
     *
     * @Override
     * public int execute(String[] splitted) {
     * if (splitted.length > 1) {
     * StringBuilder sb = new StringBuilder();
     * sb.append("[服务器公告] ");
     * sb.append(StringUtil.joinStringFrom(splitted, 1));
     * World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(6,
     * sb.toString()));
     * } else {
     * System.out.println("指令规则: say <message>");
     * return 0;
     * }
     * return 1;
     * }
     * }
     *
     * public static class ReloadOps extends ConsoleCommandExecute {
     *
     * @Override
     * public int execute(String splitted[]) {
     * SendPacketOpcode.reloadValues();
     * RecvPacketOpcode.reloadValues();
     * return 1;
     * }
     *
     * }
     *
     * public static class ReloadDrops extends ConsoleCommandExecute {
     *
     * @Override
     * public int execute(String splitted[]) {
     * MapleMonsterInformationProvider.getInstance().clearDrops();
     * ReactorScriptManager.getInstance().clearDrops();
     * return 1;
     * }
     *
     * }
     *
     * public static class ReloadPortals extends ConsoleCommandExecute {
     *
     * @Override
     * public int execute(String splitted[]) {
     * PortalScriptManager.getInstance().clearScripts();
     * return 1;
     * }
     * }
     *
     * public static class ReloadShops extends ConsoleCommandExecute {
     *
     * @Override
     * public int execute(String splitted[]) {
     * MapleShopFactory.getInstance().clear();
     * return 1;
     * }
     *
     * }
     *
     * public static class ReloadCS extends ConsoleCommandExecute {
     *
     * @Override
     * public int execute(String splitted[]) {
     * CashItemFactory.getInstance().clearItems();
     * return 1;
     * }
     *
     * }
     *
     * public static class ReloadFishing extends ConsoleCommandExecute {
     *
     * @Override
     * public int execute(String splitted[]) {
     * FishingRewardFactory.getInstance().reloadItems();
     * return 1;
     * }
     *
     * }
     *
     * public static class ReloadEvents extends ConsoleCommandExecute {
     *
     * @Override
     * public int execute(String splitted[]) {
     * for (ChannelServer instance : ChannelServer.getAllInstances()) {
     * instance.reloadEvents();
     * }
     * return 1;
     * }
     *
     * }
     *
     * public static class GMmessage extends ConsoleCommandExecute {
     *
     * @Override
     * public int execute(String splitted[]) {
     * String outputMessage = StringUtil.joinStringFrom(splitted, 1);
     * World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6,
     * "[后台GM广播] " + outputMessage));
     * return 1;
     * }
     *
     * }
     */
}
