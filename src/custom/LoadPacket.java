/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package custom;

import tools.HexTool;
import tools.data.MaplePacketLittleEndianWriter;

public class LoadPacket {

    public static byte[] getPacket() {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();
        mplew.write(HexTool.getByteArrayFromHexString("B7 00 00 70 13 54 00 01 00 00 00 00 00 00 00 00 00"));
        return mplew.getPacket();
    }
    /*
     * public static byte[] getPacket() {
     * Properties packetProps = new Properties();
     * InputStreamReader is;
     * try {
     * is = new FileReader("文件封包.txt");//内容：packet=B7 00 00 70 13 54 00 01 00 00 00
     * 00 00 00 00 00 00
     * packetProps.load(is);
     * is.close();
     * } catch (IOException ex) {
     * System.out.println("读取 文件封包.txt 失败" + ex);
     * }
     * MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();
     * mplew.write(HexTool.getByteArrayFromHexString(packetProps.getProperty(
     * "packet")));
     * return mplew.getPacket();
     * }
     */
}
