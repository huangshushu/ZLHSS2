package server;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import constants.WorldConstants;
import tools.FileoutputUtil;
import tools.StringUtil;

/**
 *
 * @author Emilyx3
 */
public class ServerProperties {

    private static final Properties props = new Properties();

    public static String getPath() {
        return System.getProperty("path", "") + "settings.ini";
    }

    public static void loadProperties() {
        try {
            InputStream in = new FileInputStream(getPath());
            BufferedReader bf = new BufferedReader(new InputStreamReader(in, StringUtil.codeString(getPath())));
            props.load(bf);
            bf.close();
        } catch (IOException ex) {
            System.err.println("读取\"" + getPath() + "\"档案失败 " + ex);
        }
    }

    public static void saveProperties() {
        File outputFile = new File(getPath());
        if (outputFile.exists()) {
            outputFile.delete();
        }
        ArrayList<String> setting = new ArrayList();
        ArrayList<String> job = new ArrayList();
        Map<String, ArrayList<String>> world = new HashMap();
        Map<String, ArrayList<String>> tespia = new HashMap();
        for (WorldConstants.WorldOption e : WorldConstants.WorldOption.values()) {
            world.put(e.name(), new ArrayList());
        }
        for (WorldConstants.TespiaWorldOption e : WorldConstants.TespiaWorldOption.values()) {
            tespia.put(e.name(), new ArrayList());
        }

        for (Map.Entry i : props.entrySet()) {
            String info = i.getKey() + " = " + i.getValue().toString().replace("\\", "\\\\") + "\r\n";
            if (((String) i.getKey()).contains("World")) {
                int worldId = Integer
                        .parseInt(((String) i.getKey()).substring(((String) i.getKey()).lastIndexOf('d') + 1));
                world.get(WorldConstants.getNameById(worldId)).add(info);
            } else if (((String) i.getKey()).contains("Worldt")) {
                int worldId = Integer
                        .parseInt(((String) i.getKey()).substring(((String) i.getKey()).lastIndexOf('t') + 1));
                tespia.get(WorldConstants.getNameById(worldId)).add(info);
            } else if (((String) i.getKey()).contains("Job")) {
                job.add(info);
            } else {
                setting.add(info);
            }
        }

        FileoutputUtil.logToFile(getPath(), "# [配置]\r\n");
        for (String s : setting) {
            FileoutputUtil.logToFile(getPath(), s);
        }

        FileoutputUtil.logToFile(getPath(), "\r\n# [服务器]\r\n");
        for (Map.Entry<String, ArrayList<String>> i : world.entrySet()) {
            if (i.getValue().isEmpty()) {
                continue;
            }
            FileoutputUtil.logToFile(getPath(), "# " + i.getKey() + "\r\n");
            for (String s : i.getValue()) {
                FileoutputUtil.logToFile(getPath(), s);
            }
        }

        FileoutputUtil.logToFile(getPath(), "\r\n# [测试机]\r\n");
        for (Map.Entry<String, ArrayList<String>> i : tespia.entrySet()) {
            if (i.getValue().isEmpty()) {
                continue;
            }
            FileoutputUtil.logToFile(getPath(), "# " + i.getKey() + "\r\n");
            for (String s : i.getValue()) {
                FileoutputUtil.logToFile(getPath(), s);
            }
        }

        FileoutputUtil.logToFile(getPath(), "\r\n# [职业创建开关]\r\n");
        for (String s : job) {
            FileoutputUtil.logToFile(getPath(), s);
        }
    }

    public static void setProperty(String prop, String newInf) {
        props.setProperty(prop, newInf);
    }

    public static void setProperty(String prop, boolean newInf) {
        props.setProperty(prop, String.valueOf(newInf));
    }

    public static void setProperty(String prop, byte newInf) {
        props.setProperty(prop, String.valueOf(newInf));
    }

    public static void setProperty(String prop, short newInf) {
        props.setProperty(prop, String.valueOf(newInf));
    }

    public static void setProperty(String prop, int newInf) {
        props.setProperty(prop, String.valueOf(newInf));
    }

    public static void setProperty(String prop, long newInf) {
        props.setProperty(prop, String.valueOf(newInf));
    }

    public static void removeProperty(String prop) {
        props.remove(prop);
    }

    public static String getProperty(String s) {
        return props.getProperty(s);
    }

    public static String getProperty(String s, String def) {
        return props.getProperty(s, def);
    }

    public static boolean getProperty(String s, boolean def) {
        return getProperty(s, def ? "true" : "false").equalsIgnoreCase("true");
    }

    public static byte getProperty(String s, byte def) {
        String property = props.getProperty(s);
        if (property != null) {
            return Byte.parseByte(property);
        }
        return def;
    }

    public static short getProperty(String s, short def) {
        String property = props.getProperty(s);
        if (property != null) {
            return Short.parseShort(property);
        }
        return def;
    }

    public static int getProperty(String s, int def) {
        String property = props.getProperty(s);
        if (property != null) {
            return Integer.parseInt(property);
        }
        return def;
    }

    public static long getProperty(String s, long def) {
        String property = props.getProperty(s);
        if (property != null) {
            return Long.parseLong(property);
        }
        return def;
    }

    static {
        loadProperties();
        /*
         * try (Connection con =
         * DBConPool.getInstance().getDataSource().getConnection()) {
         * PreparedStatement ps =
         * con.prepareStatement("SELECT * FROM auth_server_channel_ip");
         * ResultSet rs = ps.executeQuery();
         * while (rs.next()) {
         * props.put(rs.getString("name") + rs.getInt("channelid"),
         * rs.getString("value"));
         * }
         * rs.close();
         * ps.close();
         * } catch (SQLException ex) {
         * FileoutputUtil.outError("logs/资料库异常.txt", ex);
         * ex.printStackTrace();
         * System.exit(0); //Big ass error.
         * }
         */

    }
}
