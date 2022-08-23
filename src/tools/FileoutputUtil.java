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
package tools;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.TimeZone;

public class FileoutputUtil {

    // Logging output file
    private static final SimpleDateFormat sdfT = new SimpleDateFormat("yyyy年MM月dd日HH时mm分ss秒");
    public static final String Acc_Stuck = "logs/Except/Log_AccountStuck.txt",
            Login_Error = "logs\\Log_Login_Error.txt",
            IP_Log = "logs\\Log_AccountIP.txt",
            GMCommand_Log = "logs\\Log_GMCommand.txt",
    // Zakum_Log = "Log_Zakum.rtf",
    // Horntail_Log = "Log_Horntail.rtf",
    UnknownPacket_Log = "logs\\数据包_未知.txt",
            Packet_Log = "logs\\数据包收发\\Log.txt",
            Pinkbean_Log = "logs\\Log_Pinkbean.rtf",
            ScriptEx_Log = "logs\\Log_Script_Except.txt",
            PacketEx_Log = "logs/Except/Log_Packet_Except.txt", // I cba looking for every error, adding this back in.
            CodeEx_Log = "logs/Except/Log_Code_Except.txt",
            Donator_Log = "logs\\Shadier_Merchant.txt",
            Hacker_Log = "logs\\Log_Hacker.txt",
            Movement_Log = "logs\\Log_Movement.txt",
            Client_Error_2 = "logs/Client/用户端_报错_非38.txt",
            Client_Error = "logs/Client/用户端_报错.txt",
            CommandEx_Log = "logs/Except/Log_Command_Except.txt" // PQ_Log = "Log_PQ.rtf"
                    ;
    // End
    private static final SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    private static final SimpleDateFormat sdfGMT = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    private static final SimpleDateFormat sdf_ = new SimpleDateFormat("yyyy-MM-dd");
    private static final String FILE_PATH = "logs/";// + sdf.format(Calendar.getInstance().getTime()) + "/"
    private static final String ERROR = "error/";

    static {
        sdfGMT.setTimeZone(TimeZone.getTimeZone("GMT"));
    }

    public static boolean readtxt(String txt, String existMsg) {
        /*
         * String filePath = test.class.getResource("").getPath().replace("file:", "")
         * + "/test.txt"; // 文件和该类在同个目录下
         */
        File file = new File(txt);
        if (!file.exists()) {
            try {
                file.createNewFile(); // 创建新文件
            } catch (IOException ex) {
                ex.printStackTrace();
                // Logger.getLogger(FileoutputUtil.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        String filePath = txt;
        BufferedReader reader = null;
        try {
            reader = new BufferedReader(
                    new InputStreamReader(new FileInputStream(filePath), StringUtil.codeString(filePath))); // 指定读取文件的编码格式，以免出现中文乱码
            String str;
            while ((str = reader.readLine()) != null) {
                // System.out.println(str);
                return str.contains(existMsg);
            }

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (reader != null) {
                    reader.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return false;
    }

    public static void print(final String name, final String s) {
        print(name, s, true);
    }

    public static void print(final String name, final String s, boolean line) {
        logToFile(FILE_PATH + name, s + (line ? "\r\n---------------------------------\r\n" : null));
    }

    public static void printError(final String name, final Throwable t, final String info) {
        printError(name, info + "\r\n" + getString(t));
    }

    public static void printError(final String name, final String s) {
        logToFile(FILE_PATH + ERROR + sdf_.format(Calendar.getInstance().getTime()) + "/" + name,
                s + "\r\n---------------------------------\r\n");
    }

    public static void outputFileError(final String file, final Throwable t, boolean size) {
        log(file, getString(t), size);
    }

    public static void outputFileError(final String file, final Throwable t) {
        log(file, getString(t));
    }

    public static void log(final String file, final String msg, boolean size) {
        logToFile(file,
                "\r\n------------------------ " + CurrentReadable_Time() + " ------------------------\r\n" + msg, false,
                size);
    }

    public static void log(final String file, final String msg) {
        logToFile(file,
                "\r\n------------------------ " + CurrentReadable_Time() + " ------------------------\r\n" + msg);
    }

    public static void logToFile(final String file, final String[] msgs) {
        for (int i = 0; i < msgs.length; i++) {
            logToFile(file, msgs[i], false);
            if (i < msgs.length - 1) {
                logToFile(file, "\r\n", false);
            }
        }
    }

    public static void logToFile(final String file, final String msg) {
        logToFile(file, msg, false);
    }

    public static void logToFileIfNotExists(final String file, final String msg) {
        logToFile(file, msg, true);
    }

    public static void logToFile(final String file, final String msg, boolean notExists) {
        logToFile(file, msg, notExists, true);
    }

    /**
     * @param file      - 档案名称(包含目录)
     * @param msg       - 要记录的讯息
     * @param notExists - 档案是否存在
     * @param size      - 是否单文件限制大小
     */
    public static void logToFile(final String file, final String msg, boolean notExists, boolean size) {
        FileOutputStream out = null;
        try {
            File outputFile = new File(file);
            if (outputFile.exists() && outputFile.isFile() && outputFile.length() >= 1024000 && size) {
                outputFile.renameTo(new File(
                        file.substring(0, file.length() - 4) + "_" + sdfT.format(Calendar.getInstance().getTime())
                                + file.substring(file.length() - 4)));
                outputFile = new File(file);
            }
            if (outputFile.getParentFile() != null) {
                outputFile.getParentFile().mkdirs();
            }
            out = new FileOutputStream(file, true);
            if (!out.toString().contains(msg) || !notExists) {
                try (OutputStreamWriter osw = new OutputStreamWriter(out, StandardCharsets.UTF_8)) {
                    osw.write(msg);
                    osw.flush();
                }
            }
        } catch (IOException ess) {
        } finally {
            try {
                if (out != null) {
                    out.close();
                }
            } catch (IOException ignore) {
            }
        }
    }

    public static String CurrentReadable_Date() {
        return sdf_.format(Calendar.getInstance().getTime());
    }

    public static String CurrentReadable_Time() {
        return sdf.format(Calendar.getInstance().getTime());
    }

    public static String NowTime() {
        Date now = new Date();
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");// 可以方便地修改日期格式
        String hehe = dateFormat.format(now);
        return hehe;
    }

    public static String CurrentReadable_TimeGMT() {
        return sdfGMT.format(new Date());
    }

    public static String getString(final Throwable e) {
        String retValue = null;
        StringWriter sw = null;
        PrintWriter pw = null;
        try {
            sw = new StringWriter();
            pw = new PrintWriter(sw);
            e.printStackTrace(pw);
            retValue = sw.toString();
        } finally {
            try {
                if (pw != null) {
                    pw.close();
                }
                if (sw != null) {
                    sw.close();
                }
            } catch (IOException ignore) {
            }
        }
        return retValue;
    }

    public static void outError(final String file, final Throwable t) {
        FileOutputStream out = null;
        try {
            out = new FileOutputStream(file, true);
            out.write(("\n------------------------ " + CurrentReadable_Time() + " ------------------------\n")
                    .getBytes());
            out.write(getString(t).getBytes());
        } catch (IOException ess) {
        } finally {
            try {
                if (out != null) {
                    out.close();
                }
            } catch (IOException ignore) {
            }
        }
    }

    public static void packetLog(String file, String msg) {
        FileOutputStream out = null;
        try {
            File outputFile = new File(file);
            if (outputFile.getParentFile() != null) {
                outputFile.getParentFile().mkdirs();
            }
            out = new FileOutputStream(file, true);
            out.write(msg.getBytes());
            out.write("\r\n\r\n".getBytes());
        } catch (IOException ignore) {
        } finally {
            try {
                if (out != null) {
                    out.close();
                }
            } catch (IOException ignore) {
            }
        }
    }
}
