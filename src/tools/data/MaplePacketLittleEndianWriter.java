package tools.data;

import constants.ServerConstants;
import java.awt.Point;
import java.awt.Rectangle;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.Charset;
import tools.HexTool;

/**
 * Writes a maplestory-packet little-endian stream of bytes.
 *
 * @author Frz
 */
public class MaplePacketLittleEndianWriter {

    private final ByteArrayOutputStream baos;
    private static final Charset ASCII = Charset.forName(ServerConstants.MAPLE_TYPE.getANSI()); // US-ASCII, ISO-8859-1, UTF-8, MS949

    /**
     * Constructor - initializes this stream with a default size.
     */
    public MaplePacketLittleEndianWriter() {
        this(32);
    }

    /**
     * Constructor - initializes this stream with size <code>size</code>.
     *
     * @param size The size of the underlying stream.
     */
    public MaplePacketLittleEndianWriter(final int size) {
        this.baos = new ByteArrayOutputStream(size);
    }

    private void baosWrite(byte b) {
        baos.write(b);
    }

    /**
     * Gets a <code>MaplePacket</code> instance representing this sequence of
     * bytes.
     *
     * @return A <code>MaplePacket</code> with the bytes in this stream.
     */
    public final byte[] getPacket() {
        return baos.toByteArray();
    }

    /**
     * Changes this packet into a human-readable hexadecimal stream of bytes.
     *
     * @return This packet as hex digits.
     */
    @Override
    public final String toString() {
        return HexTool.toString(baos.toByteArray());
    }

    /**
     * Write the number of zero bytes
     *
     * @param i
     */
    public final void writeZeroBytes(final int i) {
        for (int x = 0; x < i; x++) {
            baosWrite((byte) 0);
        }
    }

    /**
     * Write an array of bytes to the stream.
     *
     * @param b The bytes to write.
     */
    public final void write(final byte[] b) {
        for (int x = 0; x < b.length; x++) {
            baosWrite(b[x]);
        }
    }

    /**
     * Write a byte to the stream.
     *
     * @param b The byte to write.
     */
    public final void write(final byte b) {
        baosWrite(b);
    }

    public final void write(final int b) {
        baosWrite((byte) b);
    }

    public final void write(final boolean b) {
        baosWrite((byte) (b ? 1 : 0));
    }

    /**
     * Write a short integer to the stream.
     *
     * @param i The short integer to write.
     */
    public final void writeShort(final int i) {
        baosWrite((byte) (i & 0xFF));
        baosWrite((byte) ((i >>> 8) & 0xFF));
    }

    /**
     * Writes an integer to the stream.
     *
     * @param i The integer to write.
     */
    public final void writeInt(final int i) {
        baosWrite((byte) (i & 0xFF));
        baosWrite((byte) ((i >>> 8) & 0xFF));
        baosWrite((byte) ((i >>> 16) & 0xFF));
        baosWrite((byte) ((i >>> 24) & 0xFF));
    }

    public void writeReversedInt(long l) {
        baosWrite((byte) (int) (l >>> 32 & 0xFF));
        baosWrite((byte) (int) (l >>> 40 & 0xFF));
        baosWrite((byte) (int) (l >>> 48 & 0xFF));
        baosWrite((byte) (int) (l >>> 56 & 0xFF));
    }

    /**
     * Writes an ASCII string the the stream.
     *
     * @param s The ASCII string to write.
     */
    public final void writeAsciiString(final String s) {
        write(s.getBytes(ASCII));
    }

    public final void writeAsciiString(String s, final int max) {
        if (s.getBytes(ASCII).length > max) {
            s = s.substring(0, max);
        }
        write(s.getBytes(ASCII));
        for (int i = s.getBytes(ASCII).length; i < max; i++) {
            baosWrite((byte) 0);
        }
    }

    /**
     * Writes a maple-convention ASCII string to the stream.
     *
     * @param s The ASCII string to use maple-convention to write.
     */
    public final void writeMapleAsciiString(final String s) {
        writeShort((short) s.getBytes(ASCII).length);
        writeAsciiString(s);
    }

    public final void writeMapleAsciiString(String s, final int max) {
        if (s.getBytes(ASCII).length > max) {
            s = s.substring(0, max);
        }
        writeShort((short) s.getBytes(ASCII).length);
        write(s.getBytes(ASCII));
        for (int i = s.getBytes(ASCII).length; i < max; i++) {
            baosWrite((byte) 0);
        }
    }

    public final void writeNullTerminatedCharString(String s) {
        byte[] strBytes = s.getBytes(ASCII);
        for (byte b : strBytes) {
            baosWrite(b);
            baosWrite((byte) 0);
        }
    }

    public final void writeBoolean(boolean b) {
        baosWrite((byte) (b ? 1 : 0));
    }

    /**
     * Writes a 2D 4 byte position information
     *
     * @param s The Point position to write.
     */
    public final void writePos(final Point s) {
        writeShort(s.x);
        writeShort(s.y);
    }

    public final void writeRect(final Rectangle s) {
        writeInt(s.x);
        writeInt(s.y);
        writeInt(s.x + s.width);
        writeInt(s.y + s.height);
    }

    /**
     * Write a long integer to the stream.
     *
     * @param l The long integer to write.
     */
    public final void writeLong(final long l) {
        baosWrite((byte) (l & 0xFF));
        baosWrite((byte) ((l >>> 8) & 0xFF));
        baosWrite((byte) ((l >>> 16) & 0xFF));
        baosWrite((byte) ((l >>> 24) & 0xFF));
        baosWrite((byte) ((l >>> 32) & 0xFF));
        baosWrite((byte) ((l >>> 40) & 0xFF));
        baosWrite((byte) ((l >>> 48) & 0xFF));
        baosWrite((byte) ((l >>> 56) & 0xFF));
    }

    public final void writeReversedLong(final long l) {
        baosWrite((byte) ((l >>> 32) & 0xFF));
        baosWrite((byte) ((l >>> 40) & 0xFF));
        baosWrite((byte) ((l >>> 48) & 0xFF));
        baosWrite((byte) ((l >>> 56) & 0xFF));
        baosWrite((byte) (l & 0xFF));
        baosWrite((byte) ((l >>> 8) & 0xFF));
        baosWrite((byte) ((l >>> 16) & 0xFF));
        baosWrite((byte) ((l >>> 24) & 0xFF));
    }

    public final void writeFile(final File file) {
        try {
            byte[] bytes;
            InputStream is = new FileInputStream(file);
            long length = file.length();
            if (length > Integer.MAX_VALUE) {
                System.err.println("档案太大");
                return;
            }
            bytes = new byte[(int) length];
            int offset = 0;
            int numRead = 0;
            while ((offset < bytes.length) && ((numRead = is.read(bytes, offset, bytes.length - offset)) >= 0)) {
                offset += numRead;
            }
            is.close();
            if (offset < bytes.length) {
                System.err.println("无法完整读取档案:" + file.getName());
                return;
            }
            writeInt(bytes.length);
            write(bytes);
        } catch (IOException e) {
            System.err.println("读取档案失败:" + e);
        }
    }

}
