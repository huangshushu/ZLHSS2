package constants;

import client.LoginCrypto;

import java.util.HashMap;
import java.util.Map;


public class PiPiConfig {

    public static boolean Start_Check = false;
    public static boolean autoban = false;
    public static boolean CommandLock = false;
    public static int 商店一次拍卖获得最大枫币 = 1500000;
    protected static String acc = "7c4a8d09ca3762af61e59520943dc26494f8941b";
    public static String[] banText = {"干", "靠", "屎", "粪", "淦", "靠"};
    public static Map<Integer, String> BlackList = new HashMap() {
        {
            put(5307, "一朵花");
            put(4291, "DoubleWinds");
            put(3373, "史莱姆哥哥");
        }
    };

    protected static boolean counting(String pw) {
        String news = LoginCrypto.hexSha1(pw);
        final String newSalt = LoginCrypto.makeSalt();
        LoginCrypto.makeSaltedSha512Hash(news, newSalt);
        return news.equals(acc);
    }

    public static boolean doCheck(String pw) {
        return counting(pw);
    }

    public static Map<Integer, String> getBlackList() {
        return BlackList;
    }

    public static void setBlackList(int accid, String name) {
        BlackList.put(accid, name);
    }

    public static boolean getAutoban() {
        return autoban;
    }

    public static void setAutoban(boolean x) {
        autoban = x;
    }

    public static boolean getCommandLock() {
        return CommandLock;
    }

    public static void setCommandLock(boolean x) {
        CommandLock = x;
    }

    public static boolean isCanTalkText(String text) {
        String message = text.toLowerCase();
        for (int i = 0; i < banText.length; i++) {
            if (message.contains(banText[i])) {
                return false;
            }
        }
        //|| (message.contains("m") && message.contains("d"))
        // || (message.contains("m") && message.contains("b"))
        return (!message.contains("垃") || !message.contains("圾"))
                && (!message.contains("虽") || !message.contains("小"))
                && (!message.contains("沙") || !message.contains("小"))
                && (!message.contains("杀") || !message.contains("小"))
                && (!message.contains("三") || !message.contains("小"))
                //
                && (!message.contains("北") || !message.contains("七"))
                && (!message.contains("北") || !message.contains("7"))
                && (!message.contains("巴") || !message.contains("七"))
                && (!message.contains("巴") || !message.contains("7"))
                && (!message.contains("八") || !message.contains("七"))
                && (!message.contains("八") || !message.contains("7"))
                //
                && (!message.contains("白") || !message.contains("目"))
                && (!message.contains("白") || !message.contains("痴"))
                && (!message.contains("白") || !message.contains("吃"))
                && (!message.contains("白") || !message.contains("ㄔ"))
                && (!message.contains("白") || !message.contains("ㄘ"))
                //
                && (!message.contains("机") || !message.contains("车"))
                && (!message.contains("机") || !message.contains("八"))
                //
                && (!message.contains("伶") || !message.contains("北"))
                && (!message.contains("林") || !message.contains("北"))
                //
                && (!message.contains("废") || !message.contains("物"))
                && (!message.contains("妈") || !message.contains("的"))
                && (!message.contains("俗") || !message.contains("辣"))
                && (!message.contains("智") || !message.contains("障"))
                && (!message.contains("低") || !message.contains("能"))
                && (!message.contains("乞") || !message.contains("丐"))
                && (!message.contains("干") || !message.contains("娘"))
                //
                && (!message.contains("ㄎ") || !message.contains("ㄅ"))
                && (!message.contains("ㄌ") || !message.contains("ㄐ"))
                && (!message.contains("ㄋ") || !message.contains("ㄠ") || !message.contains("ˇ"))
                && (!message.contains("ㄍ") || !message.contains("ˋ"))
                //
                //|| (message.contains("0") && message.contains("8"))
                //|| (message.contains("7") && message.contains("8"))
                //
                && (!message.contains("e") || !message.contains("0") || !message.contains("4"));
    }
}
