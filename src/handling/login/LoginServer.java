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
package handling.login;

import client.MapleClient;
import constants.ServerConfig;
import handling.MapleServerHandler;
import handling.mina.ServerConnection;
import server.ServerProperties;
import tools.FileoutputUtil;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.WeakHashMap;

public class LoginServer {

    public static short port = 18484;
    private static ServerConnection acceptor;
    private static Map<Integer, Integer> load = new HashMap<>();
    private static int usersOn = 0;
    private static boolean finishedShutdown = true;
    //private static AccountStorage clients;
    private static final Map<Integer, String> LoginMacs = new WeakHashMap<>();
    private static final Map<Integer, String> LoginKey = new HashMap<>();
    private static final Map<Integer, String> ClientKey = new HashMap<>();
    private static final Map<Integer, String> ServerKey = new HashMap<>();
    private static AccountStorage clients;
    private static final Map<Integer, Long> ChangeChannelTime = new HashMap<>();
    private static final Map<Integer, Long> EnterGameTime = new HashMap<>();

    public static final void addChannel(final int channel) {
        load.put(channel, 0);
    }

    public static final void removeChannel(final int channel) {
        load.remove(channel);
    }

    public static final void setup() {
        port = Short.parseShort(ServerProperties.getProperty("server.settings.login.port"));
        ServerConfig.IP = ServerProperties.getProperty("server.settings.ip");
        String[] split = ServerConfig.IP.split("\\.");
        byte[] bytes = new byte[split.length];
        for (int i = 0; i < split.length; i++) {
            bytes[i] = (byte) Integer.parseInt(split[i]);
        }
        ServerConfig.Gateway_IP = bytes;
        ServerConfig.Gateway_IP2 = bytes;
        acceptor = new ServerConnection(port, 0, MapleServerHandler.LOGIN_SERVER);
        acceptor.run();
        System.out.println("\n【登入服务器】  - 监听端口: " + port + " \n");
    }

    public static final void shutdown() {
        if (finishedShutdown) {
            System.out.println("【登入服务器】 已经关闭了...无法执行此动作");
            return;
        }
        System.out.println("【登入服务器】 关闭中...");
        acceptor.close();
        System.out.println("【登入服务器】 关闭完毕...");
        finishedShutdown = true; //nothing. lol
    }

    public static final String getServerName() {
        return ServerConfig.SERVER_NAME;
    }

    public static final Map<Integer, Integer> getLoad() {
        return load;
    }

    public static void setLoad(final Map<Integer, Integer> load_, final int usersOn_) {
        load = load_;
        usersOn = usersOn_;
    }

    public static final int getUsersOn() {
        return usersOn;
    }

    public static final boolean isShutdown() {
        return finishedShutdown;
    }

    public static final void setOn() {
        finishedShutdown = false;
    }

    public static boolean getAutoReg() {
        return ServerConfig.AUTO_REGISTER;
    }

    public static void setAutoReg(boolean x) {
        ServerConfig.AUTO_REGISTER = x;
    }

    public static String getTouDing() {
        return ServerConfig.TOUDING;
    }

    public static void setTouDing(String x) {
        ServerConfig.TOUDING = x;
    }

    public static boolean getNMGB() {
        return ServerConfig.NMGB;
    }

    public static void setNMGB(boolean x) {
        ServerConfig.NMGB = x;
    }

    public static boolean getPDCS() {
        return ServerConfig.PDCS;
    }

    public static void setPDCS(boolean x) {
        ServerConfig.PDCS = x;
    }

    public static AccountStorage getClientStorage() {
        if (clients == null) {
            clients = new AccountStorage();
        }
        return clients;
    }

    //public static final void addClient(final MapleClient c) {
    //    getClientStorage().registerAccount(c);
    //}
    public static final void removeClient(final MapleClient c) {
        getClientStorage().deregisterAccount(c);
    }

    public static final String getLoginMac(final MapleClient c) {
        String macs = null;
        if (LoginMacs.containsKey(c.getAccID())) {
            macs = LoginMacs.get(c.getAccID());
        }
        return macs;
    }

    public static final String removeLoginMac(final MapleClient c) {
        String macs = null;
        LoginMacs.remove(c.getAccID());
        return macs;
    }

    public static boolean CanLoginKey(String key, int AccID) {
        if (LoginKey.get(AccID) == null) {
            return true;
        }
        if (LoginKey.containsValue(key)) {
            return LoginKey.get(AccID).equals(key);
        }
        return false;
    }

    public static boolean RemoveLoginKey(int AccID) {
        try {
            LoginKey.remove(AccID);
        } catch (Exception ex) {
            FileoutputUtil.outError("logs/移除Key异常.txt", ex);
        }
        return true;
    }

    public static boolean addLoginKey(String key, int AccID) {
        try {
            if (LoginKey.get(AccID) == null) {
                LoginKey.put(AccID, key);
                return true;
            }
            LoginKey.remove(AccID);
            LoginKey.put(AccID, key);
        } catch (Exception ex) {
            FileoutputUtil.outError("logs/添加Key异常.txt", ex);
        }
        return true;
    }

    public static String getLoginKey(int AccID) {
        return LoginKey.get(AccID);
    }

    public static boolean CanServerKey(String key, int AccID) {
        if (ServerKey.get(AccID) == null) {
            return true;
        }
        if (ServerKey.containsValue(key)) {
            return ServerKey.get(AccID).equals(key);
        }
        return false;
    }

    public static boolean RemoveServerKey(int AccID) {
        try {
            ServerKey.remove(AccID);
        } catch (Exception ex) {
            FileoutputUtil.outError("logs/移除Key异常.txt", ex);
        }
        return true;
    }

    public static boolean addServerKey(String key, int AccID) {
        try {
            if (ServerKey.get(AccID) == null) {
                ServerKey.put(AccID, key);
                return true;
            }
            ServerKey.remove(AccID);
            ServerKey.put(AccID, key);
        } catch (Exception ex) {
            FileoutputUtil.outError("logs/添加Key异常.txt", ex);
        }
        return true;
    }

    public static String getServerKey(int AccID) {
        return ServerKey.get(AccID);
    }

    public static boolean CanClientKey(String key, int AccID) {
        if (ClientKey.get(AccID) == null) {
            return true;
        }
        if (ClientKey.containsValue(key)) {
            return ClientKey.get(AccID).equals(key);
        }
        return false;
    }

    public static boolean RemoveClientKey(int AccID) {
        try {
            ClientKey.remove(AccID);
        } catch (Exception ex) {
            FileoutputUtil.outError("logs/移除Key异常.txt", ex);
        }
        return true;
    }

    public static boolean addClientKey(String key, int AccID) {
        try {
            if (ClientKey.get(AccID) == null) {
                ClientKey.put(AccID, key);
                return true;
            }
            ClientKey.remove(AccID);
            ClientKey.put(AccID, key);
        } catch (Exception ex) {
            FileoutputUtil.outError("logs/添加Key异常.txt", ex);
        }
        return true;
    }

    public static String getClientKey(int AccID) {
        return ClientKey.get(AccID);
    }

    public static boolean getDiscounied() {
        return ServerConfig.DISCOUNTED;
    }

    public static void setDiscounied(boolean x) {
        ServerConfig.DISCOUNTED = x;
    }

    public static int getRSGS() {
        return ServerConfig.RSGS;
    }

    public static void setRSGS(int x) {
        ServerConfig.RSGS = x;
    }

    public static void forceRemoveClient(MapleClient client) {
        forceRemoveClient(client, true);
    }

    public static void forceRemoveClient(MapleClient client, boolean remove) {
        Collection<MapleClient> cls = getClientStorage().getAllClientsThreadSafe();
        for (MapleClient c : cls) {
            if (c == null) {
                continue;
            }
            if (c.getAccID() == client.getAccID() || c == client) {
                if (c != client) {
                    c.unLockDisconnect();
                }
                if (remove) {
                    removeClient(c);
                }
            }
        }
    }

    public static long getLoginAgainTime(int accid) {
        return ChangeChannelTime.get(accid);
    }

    public static void addLoginAgainTime(int accid) {
        ChangeChannelTime.put(accid, System.currentTimeMillis());
    }

    public static boolean canLoginAgain(int accid) {
        long lastTime = System.currentTimeMillis();
        if (ChangeChannelTime.containsKey(accid)) {
            long lastSelectCharTime = ChangeChannelTime.get(accid);
            return lastSelectCharTime + 40 * 1000 <= lastTime;
        }
        return true;
    }

    public static long getEnterGameAgainTime(int accid) {
        return EnterGameTime.get(accid);
    }

    public static void addEnterGameAgainTime(int accid) {
        EnterGameTime.put(accid, System.currentTimeMillis());
    }

    public static boolean canEnterGameAgain(int accid) {
        long lastTime = System.currentTimeMillis();
        if (EnterGameTime.containsKey(accid)) {
            long lastSelectCharTime = EnterGameTime.get(accid);
            return lastSelectCharTime + 60 * 1000 <= lastTime;
        }
        return true;
    }
}
