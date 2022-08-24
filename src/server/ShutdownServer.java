package server;

import handling.cashshop.CashShopServer;
import handling.channel.ChannelServer;
import handling.login.LoginServer;
import handling.world.World;
import server.Timer.*;

import java.util.Set;

public class ShutdownServer implements Runnable, ShutdownServerMBean {

    private static ShutdownServer instance = new ShutdownServer();
    public static boolean running = false;

    public static ShutdownServer getInstance() {
        return instance;
    }

    @Override
    public void run() {
        synchronized (this) {
            if (running) { //Run once!
                return;
            }
            running = true;
        }
        World.isShutDown = true;
        int ret = 0;
        for (handling.channel.ChannelServer cserv : handling.channel.ChannelServer.getAllInstances()) {
            ret += cserv.closeAllMerchant();
        }
        System.out.println("共储存了 " + ret + " 个精灵商人");
        ret = 0;
        for (handling.channel.ChannelServer cserv : handling.channel.ChannelServer.getAllInstances()) {
            ret += cserv.closeAllPlayerShop();
        }
        System.out.println("共储存了 " + ret + " 个个人执照商店");
        World.Guild.save();
        System.out.println("公会资料储存完毕");
        World.Alliance.save();
        System.out.println("联盟资料储存完毕");
        World.Family.save();
        System.out.println("家族资料储存完毕");
        EventTimer.getInstance().stop();
        WorldTimer.getInstance().stop();
        MapTimer.getInstance().stop();
        MobTimer.getInstance().stop();
        BuffTimer.getInstance().stop();
        CloneTimer.getInstance().stop();
        EtcTimer.getInstance().stop();
        PingTimer.getInstance().stop();
        System.out.println("Timer 关闭完成");


        final Set<Integer> channels = ChannelServer.getAllChannels();
        for (final Integer channel : channels) {
            try {
                final ChannelServer cs = ChannelServer.getInstance((int) channel);
                cs.saveAll();
                cs.setPrepareShutdown();
                cs.shutdown();
            } catch (Exception e) {
                System.out.println("频道" + String.valueOf((Object) channel) + " 关闭失败");
            }
        }
        try {
            LoginServer.shutdown();
            System.out.println("[登陆本地服务器关闭完成]");
        } catch (Exception e2) {
            System.out.println("[登陆本地服务器关闭失败]");
        }
        try {
            CashShopServer.shutdown();
            System.out.println("[购物商城关闭完成]");
        } catch (Exception e2) {
            System.out.println("[购物商城关闭失败]");
        }
        System.exit(0);
}
    @Override
    public void shutdown() {
        this.run();
    }  
    static {
        instance = new ShutdownServer();
        ShutdownServer.running = false;
    }
}
