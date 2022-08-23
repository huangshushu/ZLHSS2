/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package tools.wztosql;

import database.DBConPool;
import provider.MapleData;
import provider.MapleDataProvider;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;
import tools.FileoutputUtil;
import tools.StringUtil;

import java.io.File;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

/**
 * @author Itzik
 */
public class DumpHairFace {

    private static final Map<Integer, String> chrNames = new HashMap<>();

    public static void main(String[] args) throws SQLException {
        DumpHairFace dump = new DumpHairFace();
        System.out.println("HairMySQL......");
        dump.dumpHairFaceData("Hair");
        System.out.println("FaceMySQL......");
        dump.dumpHairFaceData("Face");
        System.out.println("结束。");
    }

    public void dumpHairFaceData(String type) throws SQLException {
        File dataFile = new File((System.getProperty("path") != null ? System.getProperty("path") : "") + "wz/Character.wz/" + type);
        File strDataFile = new File((System.getProperty("path") != null ? System.getProperty("path") : "") + "wz/String.wz");
        MapleDataProvider chrData = MapleDataProviderFactory.getDataProvider(dataFile);
        MapleDataProvider stringDataWZ = MapleDataProviderFactory.getDataProvider(strDataFile);
        MapleData chrStringData = stringDataWZ.getData("Eqp.img").getChildByPath("Eqp/" + type);
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            try (PreparedStatement ps = con.prepareStatement("DELETE FROM `wz_" + type.toLowerCase() + "data`")) {
                ps.execute();
            }
            for (MapleData c : chrStringData) {
                int chrid = Integer.parseInt(c.getName());
                String n = StringUtil.getLeftPaddedStr(chrid + ".img", '0', 12);
                try {
                    if (chrData.getData(n) != null) {
                        String name = MapleDataTool.getString("name", c, "无");
                        chrNames.put(chrid, name);
                    }
                } catch (NullPointerException e) {
                    FileoutputUtil.outError("logs/资料库异常.txt", e);
                } catch (RuntimeException e) {
                    FileoutputUtil.outError("logs/资料库异常.txt", e);
                }
            }
            for (int key : chrNames.keySet()) {
                try {
                    try (PreparedStatement ps = con.prepareStatement(
                            "INSERT INTO `wz_" + type.toLowerCase() + "data` (`" + type.toLowerCase() + "id`, `name`) VALUES (?, ?)")) {
                        ps.setInt(1, key);
                        ps.setString(2, chrNames.get(key));
                        ps.execute();
                    }
                    System.out.println("键值: " + key + " 名称: " + chrNames.get(key));
                } catch (SQLException ex) {
                    FileoutputUtil.outError("logs/资料库异常.txt", ex);
                    System.out.println("保存键值错误：" + key);
                }
            }
            chrNames.clear();

        } catch (SQLException es) {
            //   e.printStackTrace();
            FileoutputUtil.outError("logs/资料库异常.txt", es);
        }
    }
}
