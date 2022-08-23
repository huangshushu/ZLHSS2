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
package handling.mina;

import client.MapleClient;
import constants.ServerConfig;
import handling.SendPacketOpcode;
import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.MessageToByteEncoder;
import tools.*;

import java.util.concurrent.locks.Lock;

public class MaplePacketEncoder extends MessageToByteEncoder<Object> {

    // private static final boolean crypt = true;//true;//false;

    @Override
    protected void encode(ChannelHandlerContext chc, Object message, ByteBuf buffer) throws Exception {
        final MapleClient client = chc.channel().attr(MapleClient.CLIENT_KEY).get();

        if (client != null) {
            final MapleAESOFB send_crypto = client.getSendCrypto();

            // 封包输出
            byte[] input = ((byte[]) message);
            int pHeader = ((input[0]) & 0xFF) + (((input[1]) & 0xFF) << 8);
            String op = SendPacketOpcode.nameOf(pHeader);
            // boolean dangerousIp =
            // client.dangerousIp(client.getSession().remoteAddress().toString());
            if ((ServerConfig.LOG_PACKETS || ServerConfig.CHRLOG_PACKETS /* || dangerousIp */)
                    && !SendPacketOpcode.isSpamHeader(SendPacketOpcode.valueOf(op))) {
                int packetLen = input.length;
                String pHeaderStr = Integer.toHexString(pHeader).toUpperCase();
                pHeaderStr = "0x" + StringUtil.getLeftPaddedStr(pHeaderStr, '0', 4);
                String tab = "";
                for (int i = 4; i > op.length() / 8; i--) {
                    tab += "\t";
                }
                String t = packetLen >= 10 ? packetLen >= 100 ? packetLen >= 1000 ? "" : " " : "  " : "   ";
                final StringBuilder sb = new StringBuilder("[发送]\t" + op + tab + "\t包头:" + pHeaderStr + t + "["
                        + packetLen/* + "\r\nCaller: " + Thread.currentThread().getStackTrace()[2] */ + "字元]");
                if (ServerConfig.LOG_PACKETS) {
                    System.out.println(sb);
                }
                sb.append("\r\n\r\n").append(HexTool.toString((byte[]) message)).append("\r\n")
                        .append(HexTool.toStringFromAscii((byte[]) message));
                if (ServerConfig.LOG_PACKETS) {
                    FileoutputUtil.log(FileoutputUtil.Packet_Log, "\r\n\r\n" + sb + "\r\n\r\n");
                } else if (ServerConfig.CHRLOG_PACKETS) {
                    if (client.getPlayer() != null) {
                        FilePrinter.print("封包记录/" + client.getPlayer().getName() + ".txt",
                                "\r\n\r\n" + sb + "\r\n\r\n");
                    }
                }
            }

            final byte[] unencrypted = new byte[input.length];
            System.arraycopy(input, 0, unencrypted, 0, input.length);
            final byte[] ret = new byte[unencrypted.length + 4];

            final Lock mutex = client.getLock();
            mutex.lock();
            try {
                final byte[] header = send_crypto.getPacketHeader(unencrypted.length);
                MapleCustomEncryption.encryptData(unencrypted); // Encrypting Data
                send_crypto.crypt(unencrypted);
                System.arraycopy(header, 0, ret, 0, 4);
                System.arraycopy(unencrypted, 0, ret, 4, unencrypted.length);
                /*
                 * if (ServerConfig.Encoder) {
                 *
                 * for (int i = 0; i < ret.length; i++) {
                 * ret[i] ^= 0xD;
                 * }
                 * }
                 */
                buffer.writeBytes(ret);
            } finally {
                mutex.unlock();
            }
            // System.arraycopy(unencrypted, 0, ret, 4, unencrypted.length);
            // out.write(ByteBuffer.wrap(ret));
        } else {
            byte[] input = (byte[]) message;
            /*
             * if (ServerConfig.Encoder) {
             * for (int i = 0; i < input.length; i++) {
             * input[i] ^= 0xD;
             * }
             * }
             */
            buffer.writeBytes(input);
        }
    }
}
