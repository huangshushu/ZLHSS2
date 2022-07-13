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
}
