/*
 *
 */
package gui.tools;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.DESKeySpec;
import java.security.SecureRandom;
import java.util.Random;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class StringTools {

    public static int rand(int lbound, int ubound) {
        return (int) ((Math.random() * (ubound - lbound + 1)) + lbound);
    }
    private static final String PASSWORD_CRYPT_KEY = "bbs.13mxd.com";
    private final static String DES = "DES";

    public final static String encrypt(String password) {
        try {
            return byte2hex(encrypt(password.getBytes(), PASSWORD_CRYPT_KEY.getBytes()));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public static byte[] encrypt(byte[] src, byte[] key) throws Exception {
        SecureRandom sr = new SecureRandom();
        DESKeySpec dks = new DESKeySpec(key);
        SecretKeyFactory keyFactory = SecretKeyFactory.getInstance(DES);
        SecretKey securekey = keyFactory.generateSecret(dks);
        Cipher cipher = Cipher.getInstance(DES);
        cipher.init(Cipher.ENCRYPT_MODE, securekey, sr);
        return cipher.doFinal(src);
    }

    public static byte[] decrypt(byte[] src, byte[] key) throws Exception {
        SecureRandom sr = new SecureRandom();
        DESKeySpec dks = new DESKeySpec(key);
        SecretKeyFactory keyFactory = SecretKeyFactory.getInstance(DES);
        SecretKey securekey = keyFactory.generateSecret(dks);
        Cipher cipher = Cipher.getInstance(DES);
        cipher.init(Cipher.DECRYPT_MODE, securekey, sr);
        return cipher.doFinal(src);
    }

    public final static String decrypt(String data) {
        try {
            return new String(decrypt(hex2byte(data.getBytes()), PASSWORD_CRYPT_KEY.getBytes()));
        } catch (Exception e) {
            System.out.println(e);
        }
        return null;
    }

    public static String byte2hex(byte[] b) {
        String hs = "";
        String stmp = "";
        for (int n = 0; n < b.length; n++) {
            stmp = (java.lang.Integer.toHexString(b[n] & 0XFF));
            if (stmp.length() == 1) {
                hs = hs + "0" + stmp;
            } else {
                hs = hs + stmp;
            }
        }
        return hs.toUpperCase();
    }

    public static byte[] hex2byte(byte[] b) {
        if ((b.length % 2) != 0) {
            throw new IllegalArgumentException("is not long number.");
        }
        byte[] b2 = new byte[b.length / 2];
        for (int n = 0; n < b.length; n += 2) {
            String item = new String(b, n, 2);
            b2[n / 2] = (byte) Integer.parseInt(item, 16);
        }
        return b2;
    }

    public static boolean checkEmail(String p_Email) {// 检测E-MAIL
        boolean isEmail = false;
        Pattern d_Pattern = Pattern.compile("[-_.a-zA-Z0-9]+@[-_a-zA-Z0-9]+.[a-zA-Z]+");
        Matcher d_Matcher = d_Pattern.matcher(p_Email);
        isEmail = d_Matcher.find();

        return isEmail;
    }

    public static boolean checkStr(String v) {// 检测是否是字符串,数字,下划线
        boolean isStr = false;
        Pattern d_Pattern = Pattern.compile("^[a-zA-Z][a-zA-Z0-9_]{5,15}$");
        Matcher d_Matcher = d_Pattern.matcher(v);
        isStr = d_Matcher.find();

        return isStr;
    }

    public static boolean checkNum(String v) {// 检测是否是数字
        boolean isNum = false;
        Pattern d_Pattern = Pattern.compile("[0-9]");
        Matcher d_Matcher = d_Pattern.matcher(v);
        isNum = d_Matcher.lookingAt();

        return isNum;
    }

    public static String getRandomString(int size) {// 随机字符串
        char[] c = {'1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'};
        Random random = new Random(); // 初始化随机数产生器
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < size; i++) {
            sb.append(c[Math.abs(random.nextInt()) % c.length]);
        }
        return sb.toString();
    }

    public static boolean isNumeric(String str) {
        Pattern pattern = Pattern.compile("[0-9]*");
        Matcher isNum = pattern.matcher(str);
        return isNum.matches();
    }

    public static boolean isChinese(String s) {
        boolean ret = false;
        int j = 0;
        for (int i = 0; i < s.length(); i++) {
            if ((s.charAt(i) >= '0' && s.charAt(i) <= '9') || (s.charAt(i) >= 'a' && s.charAt(i) <= 'z') || (s.charAt(i) >= 'A' && s.charAt(i) <= 'Z')) {
                j = j + 1;
            }
        }
        if (j != s.length()) {
            ret = true;
        }
        return ret;
    }
}
