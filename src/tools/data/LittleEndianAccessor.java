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
package tools.data;

import constants.ServerConstants;

import java.awt.*;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;

/**
 * Provides a interface to a Little Endian stream of bytes.
 *
 * @author Frz
 * @version 1.0
 * @since Revision 323
 */
public class LittleEndianAccessor {

    private final ByteArrayByteStream bs;

    /**
     * Class constructor - Wraps the accessor around a stream of bytes.
     *
     * @param bs The byte stream to wrap the accessor around.
     */
    public LittleEndianAccessor(final ByteArrayByteStream bs) {
        this.bs = bs;
    }

    public ByteArrayByteStream getBs() {
        return this.bs;
    }

    public int readByteAsInt() {
        return bs.readByte();
    }

    /**
     * Read a single byte from the stream.
     *
     * @return The byte read.
     * @see ByteInputStream#readByte
     */
    public final byte readByte() {
        return (byte) bs.readByte();
    }

    /**
     * Reads an integer from the stream.
     *
     * @return The integer read.
     */
    public final int readInt() {
        final int byte1 = bs.readByte();
        final int byte2 = bs.readByte();
        final int byte3 = bs.readByte();
        final int byte4 = bs.readByte();
        return (byte4 << 24) + (byte3 << 16) + (byte2 << 8) + byte1;
    }

    /**
     * Reads a short integer from the stream.
     *
     * @return The short read.
     */
    public final short readShort() {
        final int byte1 = bs.readByte();
        final int byte2 = bs.readByte();
        return (short) ((byte2 << 8) + byte1);
    }

    public final int readUShort() {
        int quest = readShort();
        if (quest < 0) { //questid 50000 and above, WILL cast to negative, this was tested.
            quest += 65536; //probably not the best fix, but whatever
        }
        return quest;
    }

    /**
     * Reads a single character from the stream.
     *
     * @return The character read.
     */
    public final char readChar() {
        return (char) readShort();
    }

    /**
     * Reads a long integer from the stream.
     *
     * @return The long integer read.
     */
    public final long readLong() {
        final long byte1 = bs.readByte();
        final long byte2 = bs.readByte();
        final long byte3 = bs.readByte();
        final long byte4 = bs.readByte();
        final long byte5 = bs.readByte();
        final long byte6 = bs.readByte();
        final long byte7 = bs.readByte();
        final long byte8 = bs.readByte();

        return (byte8 << 56) + (byte7 << 48) + (byte6 << 40) + (byte5 << 32) + (byte4 << 24) + (byte3 << 16)
                + (byte2 << 8) + byte1;
    }

    /**
     * Reads a floating point integer from the stream.
     *
     * @return The float-type integer read.
     */
    public final float readFloat() {
        return Float.intBitsToFloat(readInt());
    }

    /**
     * Reads a double-precision integer from the stream.
     *
     * @return The double-type integer read.
     */
    public final double readDouble() {
        return Double.longBitsToDouble(readLong());
    }

    /**
     * Reads an ASCII string from the stream with length <code>n</code>.
     *
     * @param n Number of characters to read.
     * @return The string read.
     */
    public final String readAsciiString(final int n) {
        try {
            final byte[] ret = new byte[n];
            for (int x = 0; x < n; x++) {
                ret[x] = readByte();
            }
            return new String(ret, ServerConstants.MAPLE_TYPE.getANSI());
        } catch (UnsupportedEncodingException ex) {
            System.err.println(ex);
        }
        return "";
    }

    /**
     * Gets the number of bytes read from the stream so far.
     *
     * @return A long integer representing the number of bytes read.
     * @see ByteInputStream#getBytesRead()
     */
    public final long getBytesRead() {
        return bs.getBytesRead();
    }

    /**
     * Reads a MapleStory convention lengthed ASCII string. This consists of a
     * short integer telling the length of the string, then the string itself.
     *
     * @return The string read.
     */
    public final String readMapleAsciiString() {
        return readAsciiString(readShort());
    }

    /**
     * Reads a MapleStory Position information. This consists of 2 short
     * integer.
     *
     * @return The Position read.
     */
    public final Point readPos() {
        final int x = readShort();
        final int y = readShort();
        return new Point(x, y);
    }

    /**
     * Reads <code>num</code> bytes off the stream.
     *
     * @param num The number of bytes to read.
     * @return An array of bytes with the length of <code>num</code>
     */
    public final byte[] read(final int num) {
        byte[] ret = new byte[num];
        for (int x = 0; x < num; x++) {
            ret[x] = readByte();
        }
        return ret;
    }

    public final void unReadByte() {
        bs.unReadByte();
    }

    public final void unReadInt() {
        for (int byte_ = 0; byte_ < 4; byte_++) {
            bs.unReadByte();
        }
    }

    public final void unReadShort() {
        for (int byte_ = 0; byte_ < 2; byte_++) {
            bs.unReadByte();
        }
    }

    public final void unReadLong() {
        for (int byte_ = 0; byte_ < 8; byte_++) {
            bs.unReadByte();
        }
    }

    public final void unReadAsciiString(final int n) {
        for (int byte_ = 0; byte_ < n; byte_++) {
            bs.unReadByte();
        }
    }

    public final void unReadPos() {
        for (int byte_ = 0; byte_ < 4; byte_++) {
            bs.unReadByte();
        }
    }

    public final void unRead(final int num) {
        for (int byte_ = 0; byte_ < num; byte_++) {
            bs.unReadByte();
        }
    }

    public final byte readLastByte() {
        return (byte) bs.readLastByte();
    }

    public final int readLastInt() {
        unReadInt();
        final int byte1 = bs.readByte();
        final int byte2 = bs.readByte();
        final int byte3 = bs.readByte();
        final int byte4 = bs.readByte();
        return (byte4 << 24) + (byte3 << 16) + (byte2 << 8) + byte1;
    }

    public final short readLastShort() {
        unReadShort();
        final int byte1 = bs.readByte();
        final int byte2 = bs.readByte();
        return (short) ((byte2 << 8) + byte1);
    }

    public final long readLastLong() {
        unReadLong();
        final int byte1 = bs.readByte();
        final int byte2 = bs.readByte();
        final int byte3 = bs.readByte();
        final int byte4 = bs.readByte();
        final long byte5 = bs.readByte();
        final long byte6 = bs.readByte();
        final long byte7 = bs.readByte();
        final long byte8 = bs.readByte();

        return (byte8 << 56)
                + (byte7 << 48)
                + (byte6 << 40)
                + (byte5 << 32)
                + ((long) byte4 << 24)
                + ((long) byte3 << 16)
                + ((long) byte2 << 8)
                + byte1;
    }

    public final String readLastAsciiString(final int n) {
        try {
            for (int y = 0; y < n; y++) {
                unReadByte();
            }
            final byte[] ret = new byte[n];
            for (int x = 0; x < n; x++) {
                ret[x] = readByte();
            }
            return new String(ret, ServerConstants.MAPLE_TYPE.getANSI());
        } catch (UnsupportedEncodingException ex) {
            System.err.println(ex);
        }
        return "";
    }

    public final Point readLastPos() {
        unReadInt();
        short x = readShort();
        short y = readShort();
        return new Point(x, y);
    }

    public final byte[] readLastBytes(final int num) {
        for (int byte_ = 0; byte_ < num; byte_++) {
            bs.unReadByte();
        }
        byte[] ret = new byte[num];
        for (int x = 0; x < num; x++) {
            ret[x] = readByte();
        }
        return ret;
    }

    /**
     * Skips the current position of the stream <code>num</code> bytes ahead.
     *
     * @param num Number of bytes to skip.
     */
    //public void skip(final int num) {
    //    for (int x = 0; x < num; x++) {
    //        readByte();
    //    }
    //}

    /**
     * @return @see ByteInputStream#available
     */
    public final long available() {
        return bs.available();
    }

    /**
     * @return @see java.lang.Object#toString
     */
    @Override
    public final String toString() {
        return bs.toString();
    }

    public final String toString(final boolean b) {
        return bs.toString(b);
    }

    /**
     * Seek the pointer to <code>offset</code>
     *
     * @param offset The offset to seek to.
     * @see SeekableInputStreamBytestream#seek
     */
    public final void seek(final long offset) {
        try {
            bs.seek(offset);
        } catch (IOException e) {
            System.err.println("Seek failed" + e);
        }
    }

    /**
     * Get the current position of the pointer.
     *
     * @return The current position of the pointer as a long integer.
     * @see SeekableInputStreamBytestream#getPosition
     */
    public final long getPosition() {
        return bs.getPosition();
    }

    /**
     * Skip <code>num</code> number of bytes in the stream.
     *
     * @param num The number of bytes to skip.
     */
    public final void skip(final int num) {
        seek(getPosition() + num);
    }

    /**
     * Reads a null-terminated string from the stream.
     *
     * @return The string read.
     */
    public final String readNullTerminatedAsciiString() {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        byte b;
        while (true) {
            b = readByte();
            if (b == 0) {
                break;
            }
            baos.write(b);
        }
        byte[] buf = baos.toByteArray();
        char[] chrBuf = new char[buf.length];
        for (int x = 0; x < buf.length; x++) {
            chrBuf[x] = (char) buf[x];
        }
        return String.valueOf(chrBuf);
    }
}
