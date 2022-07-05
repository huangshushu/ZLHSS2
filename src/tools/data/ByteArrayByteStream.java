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

import java.io.IOException;
import tools.HexTool;

/**
 * Provides for an abstraction layer for an array of bytes.
 *
 * @author Frz
 * @version 1.0
 * @since Revision 326
 */
public class ByteArrayByteStream {

    private int pos = 0;
    private long bytesRead = 0;
    private final byte[] arr;

    public byte[] getArr() {
        return arr;
    }

    /**
     * Class constructor.
     *
     * @param arr Array of bytes to wrap the stream around.
     */
    public ByteArrayByteStream(final byte[] arr) {
        this.arr = arr;
    }

    /**
     * Gets the current position of the stream.
     *
     * @return The current position of the stream.
     * @see SeekableInputStreamBytestream#getPosition()
     */
    public long getPosition() {
        return pos;
    }

    /**
     * Seeks the pointer the the specified position.
     *
     * @param offset The position you wish to seek to.
     * @throws java.io.IOException
     * @see SeekableInputStreamBytestream#seek(long)
     */
    public void seek(final long offset) throws IOException {
        pos = (int) offset;
    }

    /**
     * Returns the numbers of bytes read from the stream.
     *
     * @return The number of bytes read.
     * @see ByteInputStream#getBytesRead()
     */
    public long getBytesRead() {
        return bytesRead;
    }

    /**
     * Reads a byte from the current position.
     *
     * @return The byte as an integer.
     * @see ByteInputStream#readByte()
     */
    public int readByte() {
        bytesRead++;
        return (arr[pos++]) & 0xFF;
    }

    /**
     * @action: Lowers position
     */
    public void unReadByte() {
        bytesRead--;
    }

    /**
     * Reads a byte from the previous position.
     *
     * @return The byte as an integer.
     */
    public int readLastByte() {
        return (arr[pos]) & 0xFF;
    }

    /**
     * Reads a byte from the very previous position.
     *
     * @param bytes
     * @return The byte as an integer.
     */
    public int[] readLastBytes(int bytes) {
        while (pos - bytes < 1) {
            bytes--; //Causing less errors
        }
        int[] a = null;
        int b = 0;
        while (bytes > 0) {
            a[b] += (arr[pos - bytes]);
            bytes--;
            b++;
        }
        return a;
    }

    /**
     * Returns the current stream as a hexadecimal string of values. Shows the
     * entire stream, and the remaining data at the current position.
     *
     * @return The current stream as a string.
     * @see java.lang.Object#toString()
     */
    @Override
    public String toString() {
        return toString(false);
    }

    public String toString(final boolean b) {
        String nows = "";
        if (arr.length - pos > 0) {
            byte[] now = new byte[arr.length - pos];
            System.arraycopy(arr, pos, now, 0, arr.length - pos);
            nows = HexTool.toString(now);
        }
        if (b) {
            return "全部: " + HexTool.toString(arr) + " 现在: " + nows;
        } else {
            return "数据: " + nows;
        }
    }

    /**
     * Returns the number of bytes available from the stream.
     *
     * @return Number of bytes available as a long integer.
     * @see ByteInputStream#available()
     */
    public long available() {
        return arr.length - pos;
    }
}
