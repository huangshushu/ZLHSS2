/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package custom;

import tools.data.MaplePacketLittleEndianWriter;

public class RedirectorPacket {

    public static byte[] redirectorCommand(String command) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        // mplew.writeShort(SendPacketOpcode.REDIRECTOR_COMMAND.getValue());
        mplew.writeMapleAsciiString(command);

        return mplew.getPacket();
    }
}
