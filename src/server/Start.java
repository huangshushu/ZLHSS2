package server;

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
import handling.world.MapleParty;
import handling.world.World;
import handling.world.family.MapleFamilyBuff;
import server.Timer.*;
import server.events.MapleOxQuizFactory;
import server.life.MapleLifeFactory;
import server.life.PlayerNPC;
import server.maps.MapleMapFactory;
import server.quest.MapleQuest;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Calendar;
import java.util.logging.Level;
import java.util.logging.Logger;
import static javafx.scene.input.KeyCode.Z;

public class Start {
    public static boolean 是否控制台启动 = true;
    private static int 回收内存;
     private static int 记录在线时间;
     private static Boolean isClearBossLog = false;

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
    }

    public final static void main(final String[] args) {
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
        // 载入脸型发型信息
        // MapleItemInformationProvider.loadFaceHair();
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
        //在线时间管理
        OnlinetimeManagement(1);
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
        }, 60000L * time);
    }
    
        public static void OnlinetimeManagement(final int time) {
        WorldTimer.getInstance().register((Runnable)new Runnable() {
            @Override
            public void run() {
                if (记录在线时间 > 0) {
                    final Calendar calendar = Calendar.getInstance();
                    final int 时 = Calendar.getInstance().get(11);
                    final int 分 = Calendar.getInstance().get(12);
                    final int 星期 = Calendar.getInstance().get(7);
                    if (时 == 0 && !isClearBossLog) {
                        System.err.println("[服务端]" + FileoutputUtil.CurrentReadable_Time() + " : ------------------------------");
                        System.err.println("[服务端]" + FileoutputUtil.CurrentReadable_Time() + " : 服务端开始清理每日信息 √");
                        try {
                            try (final PreparedStatement ps = DBConPool.getInstance().getDataSource().getConnection().prepareStatement("UPDATE characters SET todayOnlineTime = 0")) {
                                ps.executeUpdate();
                                System.err.println("[服务端]" + FileoutputUtil.CurrentReadable_Time() + " : 清理今日在线时间完成 √");
                            }
                            System.err.println("[服务端]" + FileoutputUtil.CurrentReadable_Time() + " : 服务端清理每日信息完成 √");
                            System.err.println("[服务端]" + FileoutputUtil.CurrentReadable_Time() + " : ------------------------------");
                        }
                        catch (SQLException ex) {
                            System.err.println("[服务端]" + FileoutputUtil.CurrentReadable_Time() + " : 服务端处理每日数据出错 × " + ex.getMessage());
                            System.err.println("[服务端]" + FileoutputUtil.CurrentReadable_Time() + " : ------------------------------");
                        }
                        isClearBossLog = true;
                    }else if (时 == 23 && 分 == 0) {
                        isClearBossLog = false;
                    }
                       
                    for (final ChannelServer cserv : ChannelServer.getAllInstances()) {
                        for (final MapleCharacter chr : cserv.getPlayerStorage().getAllCharacters()) {
                            if (chr == null) {
                                continue;
                            }
                            try(final Connection con = DBConPool.getInstance().getDataSource().getConnection().getConnection()) {
                                try (final PreparedStatement psu = con.prepareStatement("UPDATE characters SET todayOnlineTime = todayOnlineTime + ?, totalOnlineTime = totalOnlineTime + ? WHERE id = ?")) {
                                    psu.setInt(1, time);
                                    psu.setInt(2, time);
                                    psu.setInt(3, chr.getId());
                                    psu.executeUpdate();
                                    psu.close();
                                }
                                chr.getClient().sendPacket(MaplePacketCreator.enableActions());
                            }
                            catch (SQLException ex2) {
                                try {
                                    Start.BackupOnlinetime(chr.getId());
                                } catch (SQLException ex) {
                                    Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
                                }
                            }
                        }
                    }
                }
                else {
                    记录在线时间++;
                }
            }
        }, (long)(60000 * time));
    }
        
            public static void BackupOnlinetime(final int a) throws SQLException {
                final Connection con = DBConPool.getInstance().getDataSource().getConnection().getConnection();
        try (final PreparedStatement psu = con.prepareStatement("UPDATE characters SET todayOnlineTime = todayOnlineTime + ?, totalOnlineTime = totalOnlineTime + ? WHERE id = ?")) {
            psu.setInt(1, 1);
            psu.setInt(2, 1);
            psu.setInt(3, a);
            psu.executeUpdate();
            psu.close();
        }
        catch (SQLException ex) {
            BackupOnlinetime2(a);
        }
    }
            
                public static void BackupOnlinetime2(final int a) throws SQLException {
        final Connection con = DBConPool.getInstance().getDataSource().getConnection().getConnection();
        try (final PreparedStatement psu = con.prepareStatement("UPDATE characters SET todayOnlineTime = todayOnlineTime + ?, totalOnlineTime = totalOnlineTime + ? WHERE id = ?")) {
            psu.setInt(1, 1);
            psu.setInt(2, 1);
            psu.setInt(3, a);
            psu.executeUpdate();
            psu.close();
        }
        catch (SQLException ex) {
            BackupOnlinetime3(a);
        }
    }
    
    public static void BackupOnlinetime3(final int a) throws SQLException {
        final Connection con = DBConPool.getInstance().getDataSource().getConnection().getConnection();
        try (final PreparedStatement psu = con.prepareStatement("UPDATE characters SET todayOnlineTime = todayOnlineTime + ?, totalOnlineTime = totalOnlineTime + ? WHERE id = ?")) {
            psu.setInt(1, 1);
            psu.setInt(2, 1);
            psu.setInt(3, a);
            psu.executeUpdate();
            psu.close();
        }
        catch (SQLException ex) {}
    }
}
