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
package client.messages;

import client.MapleCharacter;
import client.MapleClient;
import client.messages.commands.*;
import constants.PiPiConfig;
import constants.ServerConstants.CommandType;
import constants.ServerConstants.PlayerGMRank;
import database.DBConPool;
import handling.world.World;
import tools.FilePrinter;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Modifier;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.*;

public class CommandProcessor {

    private final static HashMap<String, CommandObject> commands = new HashMap<>();
    private final static HashMap<Integer, ArrayList<String>> NormalCommandList = new HashMap<>();
    private final static HashMap<Integer, ArrayList<String>> VipCommandList = new HashMap<>();
    private final static List<String> showcommands = new LinkedList<>();

    static {
        DoNormalCommand();
        // DoVipCommand();
    }

    /**
     *
     * @param c    MapleClient
     * @param type 0 = NormalCommand 1 = VipCommand
     */
    public static void dropHelp(MapleClient c, int type) {
        final StringBuilder sb = new StringBuilder("指令列表:\r\n ");
        HashMap<Integer, ArrayList<String>> commandList = new HashMap<>();
        int check = 0;
        if (type == 0) {
            commandList = NormalCommandList;
            check = c.getPlayer().getGMLevel();
        } // else if (type == 1) {
          // commandList = VipCommandList;
          // check = /*c.getPlayer().getVip()*/ c.getPlayer().getVip(c.getAccID());
          // }
        for (int i = 0; i <= check; i++) {
            if (commandList.containsKey(i)) {
                sb.append(type == 1 ? "VIP" : "").append("权限等级： ").append(i).append("\r\n");
                for (String s : commandList.get(i)) {
                    CommandObject co = commands.get(s);
                    // sb.append(s);
                    // sb.append(" - ");
                    sb.append(co.getMessage());
                    sb.append(" \r\n");
                }
            }
        }
        c.getPlayer().dropNPC(sb.toString());
    }

    private static void sendDisplayMessage(MapleClient c, String msg, CommandType type) {
        if (c.getPlayer() == null) {
            return;
        }
        switch (type) {
            case NORMAL:
                c.getPlayer().dropMessage(6, msg);
                break;
            case TRADE:
                c.getPlayer().dropMessage(-2, "错误 : " + msg);
                break;
        }

    }

    public static boolean processCommand(MapleClient c, String line, CommandType type) {
        if (c != null) {
            char commandPrefix = line.charAt(0);
            for (PlayerGMRank prefix : PlayerGMRank.values()) {
                if (line.startsWith(String.valueOf(prefix.getCommandPrefix() + prefix.getCommandPrefix()))) {
                    return false;
                }
            }
            // 侦测玩家指令
            if (commandPrefix == PlayerGMRank.普通玩家.getCommandPrefix()) {
                String[] splitted = line.split(" ");
                splitted[0] = splitted[0].toLowerCase();

                CommandObject co = commands.get(splitted[0]);
                if (co == null || co.getType() != type) {
                    sendDisplayMessage(c, "没有这个指令,可以使用 @帮助/@help 来查看指令.", type);
                    return true;
                }
                try {
                    boolean ret = co.execute(c, splitted);
                    if (!ret) {
                        c.getPlayer().dropMessage("指令错误，用法： " + co.getMessage());

                    }
                    // return ret;
                } catch (Exception e) {
                    sendDisplayMessage(c, "有错误.", type);
                    if (c.getPlayer().isGM()) {
                        sendDisplayMessage(c, "错误: " + e, type);
                    }
                    FileoutputUtil.outputFileError(FileoutputUtil.CommandEx_Log, e);
                    FileoutputUtil.logToFile(FileoutputUtil.CommandEx_Log,
                            FileoutputUtil.NowTime() + c.getPlayer().getName() + "(" + c.getPlayer().getId() + ")使用了指令 "
                                    + line + " ---在地图「" + c.getPlayer().getMapId() + "」频道：" + c.getChannel() + " \r\n");

                }
                return true;
            } else if (c.getPlayer().getGMLevel() > PlayerGMRank.普通玩家.getLevel()) {

                String[] splitted = line.split(" ");
                splitted[0] = splitted[0].toLowerCase();

                List<String> show = new LinkedList<>();
                for (String com : showcommands) {
                    if (com.contains(splitted[0])) {
                        show.add(com);
                    }
                }
                if (show.isEmpty()) {
                    StringBuilder sb = new StringBuilder();
                    int iplength = splitted[0].length();
                    for (String com : showcommands) {// 循环出所有指令
                        int sclength = com.length();

                        String[] next = new String[sclength];// true值数量 必须=指令长度名称
                        for (int i = 0; i < next.length; i++) {
                            next[i] = "false";
                        }

                        if (iplength == sclength) {// 第一步先以长度当判断
                            for (int i = 0; i < sclength; i++) {
                                String st = com.substring(i, i + 1);
                                for (int r = 0; r < iplength; r++) {
                                    String it = splitted[0].substring(r, r + 1);
                                    if (st.equals(it)) {
                                        next[i] = "true";
                                    }
                                }
                            }
                            boolean last = true;
                            for (int i = 0; i < next.length; i++) {// 阵列内所有值皆为true即正确
                                if ("false".equals(next[i])) {
                                    last = false;
                                }
                            }
                            if (last) {
                                if (show.isEmpty()) {
                                    show.add(com);
                                }
                            }
                        }
                    }

                }
                if (show.size() == 1) {
                    if (!splitted[0].equals(show.get(0))) {
                        sendDisplayMessage(c, "自动识别关联指令[" + show.get(0) + "].", type);
                        splitted[0] = show.get(0);
                    }
                }

                if (line.charAt(0) == '!') { // GM Commands
                    CommandObject co = commands.get(splitted[0]);
                    if (co == null || co.getType() != type) {
                        if (splitted[0].equals(line.charAt(0) + "help")) {
                            dropHelp(c, 0);
                            return true;
                        } // else if (splitted[0].equals(line.charAt(0) + "viphelp")) {
                          // dropHelp(c, 1);
                          // return true;
                          // }
                        sendDisplayMessage(c, "没有这个指令.", type);
                        return true;
                    }

                    boolean CanUseCommand = false;
                    if (c.getPlayer().getGMLevel() >= co.getReqGMLevel()) {
                        CanUseCommand = true;
                    }
                    if (!CanUseCommand) {
                        sendDisplayMessage(c, "你没有权限可以使用指令.", type);
                        return true;
                    }
                    if (PiPiConfig.getCommandLock() && !c.getPlayer().isGod()) {
                        sendDisplayMessage(c, "目前无法使用指令.", type);
                        return true;
                    }

                    // 开始处理指令(GM区)
                    if (c.getPlayer() != null) {
                        boolean ret = false;
                        try {
                            // 执行指令
                            ret = co.execute(c, splitted);
                            // return ret;

                            if (ret) {
                                // 指令log到DB
                                logGMCommandToDB(c.getPlayer(), line);
                                FileoutputUtil.logToFile("logs/Data/管理员命令.txt", "\r\n " + FileoutputUtil.NowTime()
                                        + " IP: " + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号: "
                                        + c.getAccountName() + " 玩家: " + c.getPlayer().getName() + " 使用管理员命令:" + line);
                                // 讯息处理
                                ShowMsg(c, line, type);
                            } else {
                                c.getPlayer().dropMessage("指令错误，用法： " + co.getMessage());
                            }
                        } catch (Exception e) {
                            FileoutputUtil.outputFileError(FileoutputUtil.CommandEx_Log, e);
                            String output = FileoutputUtil.NowTime();
                            if (c != null && c.getPlayer() != null) {
                                output += c.getPlayer().getName() + "(" + c.getPlayer().getId() + ")使用了指令 " + line
                                        + " ---在地图「" + c.getPlayer().getMapId() + "」频道：" + c.getChannel();
                            }
                            FileoutputUtil.logToFile(FileoutputUtil.CommandEx_Log, output + " \r\n");
                        }
                        return true;
                    }
                }
            }
        }
        return false;
    }

    private static void ShowMsg(MapleClient c, String line, CommandType type) {
        // God不显示
        if (c.getPlayer() != null) {
            if (!c.getPlayer().isGod()) {
                if (!line.toLowerCase().startsWith("!cngm")) {
                    World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6,
                            "[GM密语] " + c.getPlayer().getName() + "(" + c.getPlayer().getId() + ")使用了指令 " + line
                                    + " ---在地图「" + c.getPlayer().getMapId() + "」频道：" + c.getChannel()));
                }
            }
            if (c.getPlayer().getGMLevel() == 5) {
                System.out.println("＜超级管理员＞ " + c.getPlayer().getName() + " 使用了指令: " + line);
            } else if (c.getPlayer().getGMLevel() == 4) {
                System.out.println("＜领导者＞ " + c.getPlayer().getName() + " 使用了指令: " + line);
            } else if (c.getPlayer().getGMLevel() == 3) {
                System.out.println("＜巡逻者＞ " + c.getPlayer().getName() + " 使用了指令: " + line);
            } else if (c.getPlayer().getGMLevel() == 2) {
                System.out.println("＜老实习生＞ " + c.getPlayer().getName() + " 使用了指令: " + line);
            } else if (c.getPlayer().getGMLevel() == 1) {
                System.out.println("＜新实习生＞ " + c.getPlayer().getName() + " 使用了指令: " + line);
            } else if (c.getPlayer().getGMLevel() == 100) {
            } else {
                sendDisplayMessage(c, "你没有权限可以使用指令.", type);
            }
        }

    }

    private static void logGMCommandToDB(MapleCharacter player, String command) {
        if (player == null) {
            return;
        }
        PreparedStatement ps = null;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            ps = con.prepareStatement("INSERT INTO gmlog (cid, command, mapid) VALUES (?, ?, ?)");
            ps.setInt(1, player.getId());
            ps.setString(2, command);
            ps.setInt(3, player.getMap().getId());
            ps.executeUpdate();
        } catch (SQLException ex) {
            FilePrinter.printError(FilePrinter.CommandProccessor, ex, "logGMCommandToDB");
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        } finally {
            try {
                if (ps != null) {
                    ps.close();
                }
            } catch (SQLException e) {
                FileoutputUtil.outError("logs/资料库异常.txt", e);
            }
        }
    }

    /*
     * private static void DoVipCommand() {
     * Class<?>[] CommandFiles = {
     * Vip1Command.class, Vip2Command.class, Vip3Command.class, Vip4Command.class,
     * Vip5Command.class
     * };
     * for (Class<?> clasz : CommandFiles) {
     * try {
     * VIPRank rankNeeded = (VIPRank) clasz.getMethod("getPlayerLevelRequired", new
     * Class<?>[]{}).invoke(null, (Object[]) null);
     * Class<?>[] commandClasses = clasz.getDeclaredClasses();
     * ArrayList<String> cL = new ArrayList<>();
     * for (Class<?> c : commandClasses) {
     * try {
     * if (!Modifier.isAbstract(c.getModifiers()) && !c.isSynthetic()) {
     * Object o = c.newInstance();
     * boolean enabled;
     * try {
     * enabled =
     * c.getDeclaredField("enabled").getBoolean(c.getDeclaredField("enabled"));
     * } catch (NoSuchFieldException ex) {
     * enabled = true; //Enable all coded commands by default.
     * }
     * if (o instanceof CommandExecute && enabled) {
     * cL.add(rankNeeded.getCommandPrefix() + c.getSimpleName().toLowerCase());
     * commands.put(rankNeeded.getCommandPrefix() + c.getSimpleName().toLowerCase(),
     * new CommandObject(rankNeeded.getCommandPrefix() +
     * c.getSimpleName().toLowerCase(), (CommandExecute) o, rankNeeded.getLevel()));
     * }
     * }
     * } catch (InstantiationException | IllegalAccessException | SecurityException
     * | IllegalArgumentException ex) {
     * FilePrinter.printError(FilePrinter.CommandProccessor, ex);
     * }
     * }
     * Collections.sort(cL);
     * VipCommandList.put(rankNeeded.getLevel(), cL);
     * } catch (NoSuchMethodException | SecurityException | IllegalAccessException |
     * IllegalArgumentException | InvocationTargetException ex) {
     * FilePrinter.printError(FilePrinter.CommandProccessor, ex);
     * }
     * }
     * }
     */
    private static void DoNormalCommand() {
        Class<?>[] CommandFiles = {
                PlayerCommand.class, PracticerCommand.class, SkilledCommand.class, InternCommand.class, GMCommand.class,
                AdminCommand.class, GodCommand.class
        };
        for (Class<?> clasz : CommandFiles) {
            try {
                PlayerGMRank rankNeeded = (PlayerGMRank) clasz.getMethod("getPlayerLevelRequired", new Class<?>[] {})
                        .invoke(null, (Object[]) null);
                Class<?>[] commandClasses = clasz.getDeclaredClasses();
                ArrayList<String> cL = new ArrayList<>();
                for (Class<?> c : commandClasses) {
                    try {
                        if (!Modifier.isAbstract(c.getModifiers()) && !c.isSynthetic()) {
                            Object o = c.newInstance();
                            boolean enabled;
                            try {
                                enabled = c.getDeclaredField("enabled").getBoolean(c.getDeclaredField("enabled"));
                            } catch (NoSuchFieldException ex) {
                                enabled = true; // Enable all coded commands by default.
                            }
                            if (o instanceof CommandExecute && enabled) {
                                cL.add(rankNeeded.getCommandPrefix() + c.getSimpleName().toLowerCase());
                                commands.put(rankNeeded.getCommandPrefix() + c.getSimpleName().toLowerCase(),
                                        new CommandObject(
                                                rankNeeded.getCommandPrefix() + c.getSimpleName().toLowerCase(),
                                                (CommandExecute) o, rankNeeded.getLevel()));
                                showcommands.add(rankNeeded.getCommandPrefix() + c.getSimpleName().toLowerCase());
                            }
                        }
                    } catch (InstantiationException | IllegalAccessException | SecurityException
                            | IllegalArgumentException ex) {
                        FilePrinter.printError(FilePrinter.CommandProccessor, ex);
                    }
                }
                Collections.sort(cL);
                NormalCommandList.put(rankNeeded.getLevel(), cL);
            } catch (NoSuchMethodException | SecurityException | IllegalAccessException | IllegalArgumentException
                    | InvocationTargetException ex) {
                FilePrinter.printError(FilePrinter.CommandProccessor, ex);
            }
        }
    }
}
