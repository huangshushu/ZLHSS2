package server;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import client.MapleCharacter;
import client.SkillFactory;
import client.inventory.OnlyID;
import constants.ServerConfig;
import constants.WorldConstants;
import database.DBConPool;
import handling.cashshop.CashShopServer;
import handling.channel.ChannelServer;
import handling.channel.MapleGuildRanking;
import handling.login.LoginInformationProvider;
import handling.login.LoginServer;
import handling.world.World;
import handling.world.family.MapleFamilyBuff;
import server.Timer.BuffTimer;
import server.Timer.CheatTimer;
import server.Timer.CloneTimer;
import server.Timer.EtcTimer;
import server.Timer.EventTimer;
import server.Timer.MapTimer;
import server.Timer.MobTimer;
import server.Timer.PingTimer;
import server.Timer.WorldTimer;
import server.events.MapleOxQuizFactory;
import server.life.MapleLifeFactory;
import server.life.PlayerNPC;
import server.maps.MapleMapFactory;
import server.quest.MapleQuest;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;

public class Start {

    private static void resetAllLoginState() {
        String name = null;
        int id = 0, vip = 0, size = 0;

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection();
                PreparedStatement ps = con.prepareStatement("UPDATE accounts SET loggedin = 0")) {
            ps.executeUpdate();
        } catch (SQLException ex) {
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
            throw new RuntimeException("【错误】 请确认资料库是否正确连接");
        }
        /*
         * try (Connection con =
         * DBConPool.getInstance().getDataSource().getConnection(); PreparedStatement ps
         * = con.prepareStatement("SELECT count(*) FROM characters WHERE gm = 100");
         * ResultSet rs = ps.executeQuery()) {
         * rs.beforeFirst();
         * while (rs.next()) {
         * size = rs.getInt(1);
         * }
         * } catch (SQLException ex) {
         * FileoutputUtil.outError("logs/资料库异常.txt", ex);
         * throw new RuntimeException("【错误】 请确认资料库是否正确连接");
         * }
         * if (size > 1) {
         * System.out.println("警告：资料表内ＧＭ权限异常 ");
         * }
         */

        /*
         * try (Connection con =
         * DBConPool.getInstance().getDataSource().getConnection()) {
         * try (PreparedStatement ps =
         * con.prepareStatement("select id, name, vip FROM accounts where vip > 12");
         * ResultSet rs = ps.executeQuery()) {
         * rs.beforeFirst();
         * while (rs.next()) {
         * name = rs.getString("name");
         * vip = rs.getInt("vip");
         * id = rs.getInt("id");
         * System.err.println("VIP权限异常: 帐号[" + name + "], 编号[" + id + "], VIP[" + vip +
         * "]");
         * }
         * }
         * } catch (SQLException ex) {
         * FileoutputUtil.outError("logs/资料库异常.txt", ex);
         * throw new RuntimeException("【错误】 请确认资料库是否正确连接");
         * }
         */

        /*
         * try (Connection con =
         * DBConPool.getInstance().getDataSource().getConnection()) {
         * try (PreparedStatement ps = con.
         * prepareStatement("SELECT inventoryequipmentid FROM inventoryequipment WHERE inventoryequipmentid >= 9000000000 ORDER BY inventoryequipmentid DESC LIMIT 1"
         * ); ResultSet rs = ps.executeQuery()) {
         * rs.beforeFirst();
         * while (rs.next()) {
         * throw new
         * RuntimeException("资料表[inventoryequipment] 栏位[inventoryequipmentid] 流水号已达 : "
         * + rs.getLong("inventoryequipmentid"));
         * }
         * }
         * } catch (SQLException ex) {
         * FileoutputUtil.outError("logs/资料库异常.txt", ex);
         * throw new RuntimeException("【错误】 请确认资料库是否正确连接");
         * }
         * 
         * try (Connection con =
         * DBConPool.getInstance().getDataSource().getConnection()) {
         * try (PreparedStatement ps = con.
         * prepareStatement("SELECT queststatusid FROM queststatus WHERE queststatusid >= 9000000000 ORDER BY queststatusid DESC LIMIT 1"
         * ); ResultSet rs = ps.executeQuery()) {
         * rs.beforeFirst();
         * while (rs.next()) {
         * throw new RuntimeException("资料表[queststatus] 栏位[queststatusid] 流水号已达 : " +
         * rs.getLong("queststatusid"));
         * }
         * }
         * } catch (SQLException ex) {
         * FileoutputUtil.outError("logs/资料库异常.txt", ex);
         * throw new RuntimeException("【错误】 请确认资料库是否正确连接");
         * }
         */
    }

    public final static void main(final String args[]) {
        System.setProperty("java.util.Arrays.useLegacyMergeSort", "true");
        System.setProperty("file.encoding", "utf-8");
        System.setProperty("path", "");
        System.out.println("【冒险岛模拟器】");
        System.out.println("【版本】 v079");
        resetAllLoginState();

        if (WorldConstants.ADMIN_ONLY) {
            System.out.println("【管理员模式】开启");
        } else {
            System.out.println("【管理员模式】关闭");
        }

        if (ServerConfig.AUTO_REGISTER) {
            System.out.println("【自动注册】开启");
        } else {
            System.out.println("【自动注册】关闭");
        }

        if (!WorldConstants.GMITEMS) {
            System.out.println("【允许玩家使用管理员物品】开启");
        } else {
            System.out.println("【允许玩家使用管理员物品】关闭");
        }

        /* 载入设定 */
        ServerConfig.loadSetting();
        World.init();
        /* 载入计时器 */
        WorldTimer.getInstance().start();
        EtcTimer.getInstance().start();
        MapTimer.getInstance().start();
        MobTimer.getInstance().start();
        CloneTimer.getInstance().start();
        EventTimer.getInstance().start();
        BuffTimer.getInstance().start();
        PingTimer.getInstance().start();
        /* 读取WZ内禁止使用的名称 */
        LoginInformationProvider.getInstance();
        /* 读取钓鱼 */
        FishingRewardFactory.getInstance();
        /* 载入任务 */
        MapleQuest.initQuests();
        MapleLifeFactory.loadQuestCounts();
        MapleOxQuizFactory.getInstance().initialize();
        /* 载入物品资讯 */
        MapleItemInformationProvider.getInstance().load();
        // MapleItemInformationProvider.loadFaceHair(); //载入脸型发型信息
        PredictCardFactory.getInstance().initialize();
        MTSStorage.load();
        CashItemFactory.getInstance().initialize();
        /* 载入随机奖励 */
        RandomRewards.getInstance();
        /* 载入技能资讯 */
        SkillFactory.LoadSkillInformaion();
        /* 载入怪物技能 */
        MapleCarnivalFactory.getInstance();
        /* 载入排行 */
        MapleGuildRanking.getInstance().getGuildRank();
        MapleGuildRanking.getInstance().getJobRank(1);
        MapleGuildRanking.getInstance().getJobRank(2);
        MapleGuildRanking.getInstance().getJobRank(3);
        MapleGuildRanking.getInstance().getJobRank(4);
        MapleGuildRanking.getInstance().getJobRank(5);
        MapleGuildRanking.getInstance().getJobRank(6);
        /* 载入家族Buff */
        MapleFamilyBuff.getBuffEntry();
        /* 载入登入服务器 */
        LoginServer.setup();
        /* 载入频道服务器 */
        ChannelServer.startAllChannels();
        /* 载入商城服务器 */
        CashShopServer.setup();
        /* 载入自动封锁系统 */
        CheatTimer.getInstance().register(AutobanManager.getInstance(), 60000);
        /* 载入关闭服务器线程 */
        Runtime.getRuntime().addShutdownHook(new Thread(ShutdownServer.getInstance()));
        /* 载入速度排行 */
        SpeedRunner.getInstance().loadSpeedRuns();
        /* 处理怪物重生、CD、宠物、坐骑 */
        World.registerRespawn();
        /* 加载玩家NPC */
        PlayerNPC.loadAll();// touch - so we see database problems early...
        /* 设定finishedShutdown为false */
        LoginServer.setOn();
        /* 载入自订义NPC、怪物 */
        MapleMapFactory.loadCustomLife();
        /* 载入自订义功能 */
        // World.GainNX(60);// 每六十分钟自动给点数
        // World.GainGash(60);
        // World.AutoSave(5);// 每五分钟自动存档
        // World.ClearMemory(5 * 60);// 每小时清理记忆体
        // WorldTimer.getInstance().register(CloseSQLConnections, 60 * 60 * 1000);//
        // 定时清理MySql连接数
        World.isShutDown = false;
        OnlyID.getInstance();
        // 自动泡点
        AutoNx(1);
        // 开启酷Q消息推送
        // KQClient.runClient();
        // System.out.println("【禁止玩家使用:启动 如果要开放请GM上线打:!禁止玩家使用】");
        System.out.println("【服务器开启完毕】");
    }

    public static void AutoNx(int time) {
        Timer.WorldTimer.getInstance().register(new Runnable() {

            @Override
            public void run() {
                try {
                    for (ChannelServer chan : ChannelServer.getAllInstances()) {
                        for (MapleCharacter chr : chan.getPlayerStorage().getAllCharacters()) {
                            if (chr == null) {
                                continue;
                            }
                            // 怪物回蓝
                            chr.getMap().monsterHealMp();
                            if (chr.getMapId() >= 910000000 && chr.getMapId() <= 910000022) {
                                int cashdy = Randomizer.rand(1, 3);
                                chr.modifyCSPoints(2, cashdy);
                                chr.getClient().sendPacket(
                                        MaplePacketCreator.serverNotice(5, "[系统奖励] 随机获得[" + cashdy + "] 抵用卷奖励!"));
                            }
                        }
                    }
                } catch (Exception e) {
                }
            }
        }, 60000 * time);
    }
}
