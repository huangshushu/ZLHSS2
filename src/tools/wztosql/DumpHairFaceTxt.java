/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tools.wztosql;

import java.io.File;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import provider.MapleData;
import provider.MapleDataProvider;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;
import tools.FileoutputUtil;
import tools.StringUtil;

/**
 *
 * @author TEST
 */
public class DumpHairFaceTxt {

    // private static final Map<String, Integer> chrNames = new HashMap<>();
    public static void main(String[] args) {
        DumpHairFaceTxt dump = new DumpHairFaceTxt();
        System.out.println("HairMySQL......");
        dump.dumpHairFaceData("Hair");
        System.out.println("FaceMySQL......");
        dump.dumpHairFaceData("Face");
        System.out.println("结束。");
    }

    public void dumpHairFaceData(String type) {
        File dataFile = new File(
                (System.getProperty("path") != null ? System.getProperty("path") : "") + "wz/Character.wz/" + type);
        File strDataFile = new File(
                (System.getProperty("path") != null ? System.getProperty("path") : "") + "wz/String.wz");
        MapleDataProvider chrData = MapleDataProviderFactory.getDataProvider(dataFile);
        MapleDataProvider stringDataWZ = MapleDataProviderFactory.getDataProvider(strDataFile);
        MapleData chrStringData = stringDataWZ.getData("Eqp.img").getChildByPath("Eqp/" + type);
        List<Integer> list = new ArrayList<Integer>();

        for (MapleData c : chrStringData) {
            int chrid = Integer.parseInt(c.getName());
            String n = StringUtil.getLeftPaddedStr(chrid + ".img", '0', 12);
            // try {
            // if (chrData.getData(n) != null) {
            String name = MapleDataTool.getString("name", c, "无");
            list.add(chrid);
            // }
            // } catch (NullPointerException e) {
            // System.out.println(e);
            // FileoutputUtil.outError("logs/资料库异常1.txt", e);
            // } catch (RuntimeException e) {
            // System.out.println(e);
            // FileoutputUtil.outError("logs/资料库异常2.txt", e);
            // }
        }

        Collections.sort(list);
        for (int i = 0; i < list.size(); i++) {

            if (type.contains("Hair")) {
                if (Integer.parseInt(list.get(i).toString().substring(4, 5)) == 0) {
                    FileoutputUtil.logToFile("logs/Hair.txt", list.get(i).toString() + ",");
                    // System.out.println(mapping.getValue());
                }
            }
            if (type.contains("Face")) {
                if (Integer.parseInt(list.get(i).toString().substring(2, 3)) == 0) {
                    FileoutputUtil.logToFile("logs/Face.txt", list.get(i).toString() + ",");
                    // System.out.println(mapping.getValue());
                }
            }
        }

        // chrNames.clear();
    }

}
