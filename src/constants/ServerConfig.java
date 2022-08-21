package constants;

import server.ServerProperties;

import java.io.File;

public class ServerConfig {

    public static boolean pvp = false;
    public static int pvpch = 1;
    public static boolean LOG_MRECHANT = true;
    public static boolean LOG_CSBUY = true;
    public static boolean LOG_DAMAGE = false;
    public static boolean LOG_CHAT = true;
    public static boolean LOG_MEGA = true;
    public static boolean LOG_PACKETS = false;
    public static boolean CHRLOG_PACKETS = false;
    public static boolean AUTO_REGISTER = true;
    public static boolean LOCALHOST = false;
    public static boolean Encoder = false;
    public static boolean TESPIA = false;
    public static boolean DISCOUNTED = false;
    public static String SERVER_NAME = "大王ZLHSS冒险岛";
    public static String TOUDING = "大王ZLHS 欢迎您 记得点拍卖签到.领取宠物";
    public static String IP = "47.95.13.193";
    private static String EVENTS = null;
    public static boolean DEBUG_MODE = false;
    public static boolean NMGB = true;
    public static boolean PDCS = false;
    public static int RSGS = 0;
    public static int maxlevel = 250;
    public static int kocmaxlevel = 200;

    public static boolean isPvPChannel(int ch) {
        return pvp && ch == pvpch;
    }

    public static byte[] Gateway_IP = new byte[] { (byte) 127, (byte) 0, (byte) 0, (byte) 1 };
    public static byte[] Gateway_IP2 = new byte[] { (byte) 127, (byte) 0, (byte) 0, (byte) 1 };

    public static String[] getEvents(boolean reLoad) {
        return getEventList(reLoad).split(",");
    }

    public static String getEventList(boolean reLoad) {
        if (EVENTS == null || reLoad) {
            File root = new File("scripts/event");
            File[] files = root.listFiles();
            EVENTS = "";
            for (File file : files) {
                if (!file.isDirectory()) {
                    String[] fileName = file.getName().split("\\.");
                    if (fileName.length > 1 && "js".equals(fileName[fileName.length - 1])) {
                        for (int i = 0; i < fileName.length - 1; i++) {
                            EVENTS += fileName[i];
                        }
                        EVENTS += ",";
                    }
                }
            }
        }
        return EVENTS;
    }

    public static boolean isAutoRegister() {
        return AUTO_REGISTER;
    }

    public static String getVipMedalName(int lv) {
        String medal = "";
        if (SERVER_NAME.equals("枫之谷")) {
            switch (lv) {
                case 1:
                    medal = " <普通VIP>";
                    break;
                case 2:
                    medal = " <进阶VIP>";
                    break;
                case 3:
                    medal = " <高级VIP>";
                    break;
                case 4:
                    medal = " <尊贵VIP>";
                    break;
                case 5:
                    medal = " <至尊VIP>";
                    break;
                default:
                    medal = " <VIP" + medal + ">";
                    break;
            }
        } else if (SERVER_NAME.equals("枫之谷")) {
            switch (lv) {
                case 1:
                    medal = "☆";
                    break;
                case 2:
                    medal = "☆★";
                    break;
                case 3:
                    medal = "☆★☆";
                    break;
                case 4:
                    medal = "☆★☆★";
                    break;
                case 5:
                    medal = "☆★☆★☆";
                    break;
                case 6:
                    medal = "☆★☆★☆★";
                    break;
                case 7:
                    medal = "☆★☆★☆★☆";
                    break;
                case 8:
                    medal = "☆★☆★☆★☆★";
                    break;
                case 9:
                    medal = "☆★☆★☆★☆★☆";
                    break;
                case 10:
                    medal = "☆★☆★☆★☆★☆★";
                    break;
                case 11:
                    medal = "枫之谷第一土豪";
                    break;
                default:
                    medal = "<VIP" + medal + ">";
                    break;
            }
        }
        return medal;
    }

    public static void loadSetting() {
        LOG_MRECHANT = ServerProperties.getProperty("server.settings.merchantLog", LOG_MRECHANT);
        LOG_MEGA = ServerProperties.getProperty("server.settings.megaLog", LOG_MEGA);
        LOG_CSBUY = ServerProperties.getProperty("server.settings.csLog", LOG_CSBUY);
        LOG_DAMAGE = ServerProperties.getProperty("server.settings.damLog", LOG_DAMAGE);
        LOG_CHAT = ServerProperties.getProperty("server.settings.chatLog", LOG_CHAT);
        LOG_PACKETS = ServerProperties.getProperty("server.settings.packetLog", LOG_PACKETS);
        AUTO_REGISTER = ServerProperties.getProperty("server.settings.autoRegister", AUTO_REGISTER);
        SERVER_NAME = ServerProperties.getProperty("server.settings.serverName", SERVER_NAME);
        DEBUG_MODE = ServerProperties.getProperty("server.settings.debug", DEBUG_MODE);
    }

    static {
        loadSetting();
    }

    // v113.cizaojdk.top 自己用
    /*
     * public static String getIP() {
     * InetAddress ip = null;
     * try {
     * ip = InetAddress.getByName("rose1234.ddns.net");
     * //ip = InetAddress.getByName("v113.cizaojdk.top");
     * } catch (UnknownHostException e) {
     * e.printStackTrace();
     * System.out.println("getIP_null_null");
     * }
     * System.out.println(ip.getHostAddress());
     * return ip.getHostAddress();
     * }
     */
    // taiwangf.ddns.net
    /*
     * public static String getIP2() {
     * InetAddress ip = null;
     * try {
     * //ip = InetAddress.getByName(TESPIA ? "yuchan0516.no-ip.org" :
     * "paopaoms.win");
     * //ip = InetAddress.getByName(TESPIA ? "77520.ddns.net" : "www.paopaoms.win");
     * ip = InetAddress.getByName(TESPIA ? "77520.ddns.net" :
     * "paopaoms.cizaojdk.top");
     * //ip = InetAddress.getByName("taiwangf.ddns.net");
     * } catch (UnknownHostException e) {
     * e.printStackTrace();
     * System.out.println("getIP2_null_null");
     * }
     * return ip.getHostAddress().toString();
     * }
     */
    /*
     * public static byte[] getIP3() {
     * InetAddress ip = null;
     * try {
     * ip = InetAddress.getByName("rose1234.ddns.net");
     * } catch (UnknownHostException e) {
     * e.printStackTrace();
     * System.out.println("获取失败");
     * }
     * System.out.println(ip.getAddress());
     * return ip.getAddress();
     * }
     */
}
