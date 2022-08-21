package handling;

import tools.StringUtil;

import java.io.*;
import java.util.Properties;

public enum RecvPacketOpcode implements WritableIntValueHolder {

    LOGIN_PASSWORD(0x01),
    SERVERLIST_REQUEST(0x03),
    CHARLIST_REQUEST(0x04),
    CHAR_SELECT(0x06),
    PLAYER_LOGGEDIN(0x07),
    CHECK_CHAR_NAME(0x08),
    CREATE_CHAR(0x0B),
    CLIENT_FEEDBACK(0x0C),
    DELETE_CHAR(0x0D),
    PONG(0x0E),
    STRANGE_DATA(0x7FFF),
    CLIENT_ERROR(0x0F),
    HELLO_LOGIN(0x17),
    SERVERSTATUS_REQUEST(0x18),
    HELLO_CHANNEL(0xDA),
    SET_GENDER(0x19),
    CLIENT_LOGOUT(0x1A),
    // CHANNEL

    CHANGE_MAP(0x1E),
    CHANGE_CHANNEL(0x1F),
    ENTER_CASH_SHOP(0x20),
    MOVE_PLAYER(0x21),
    CANCEL_CHAIR(0x22),
    USE_CHAIR(0x23),
    SHOW_EXP_CHAIR(0x24),
    CLOSE_RANGE_ATTACK(0x25),
    RANGED_ATTACK(0x26),
    MAGIC_ATTACK(0x27),
    PASSIVE_ENERGY(0x28),
    TAKE_DAMAGE(0x29),
    GENERAL_CHAT(0x2A),
    CLOSE_CHALKBOARD(0x2B),
    FACE_EXPRESSION(0x2C),
    USE_ITEMEFFECT(0x2D),
    WHEEL_OF_FORTUNE(0x2E),
    MONSTER_BOOK_COVER(0x32),
    NPC_TALK(0x33),
    NPC_TALK_MORE(0x35),
    NPC_SHOP(0x36),
    STORAGE(0x37),
    USE_HIRED_MERCHANT(0x38),
    MERCH_ITEM_STORE(0x3A),
    DUEY_ACTION,
    ITEM_SORT,
    ITEM_GATHER,
    ITEM_MOVE,
    USE_ITEM,
    CANCEL_ITEM_EFFECT,
    // USE_FISHING, // Some unknown value sent by client after fishing for 30 sec,
    // ignored
    USE_SUMMON_BAG,
    PET_FOOD,
    USE_MOUNT_FOOD,
    USE_SCRIPTED_NPC_ITEM,
    USE_CASH_ITEM,
    ITEM_UNLOCK,
    SOLOMON,
    GACH_EXP,
    USE_CATCH_ITEM,
    USE_SKILL_BOOK,
    USE_RETURN_SCROLL,
    USE_UPGRADE_SCROLL,
    DISTRIBUTE_AP,
    AUTO_ASSIGN_AP,
    HEAL_OVER_TIME,
    DISTRIBUTE_SP,
    SPECIAL_MOVE,
    CANCEL_BUFF,
    SKILL_EFFECT,
    MESO_DROP,
    GIVE_FAME,
    CHAR_INFO_REQUEST,
    SPAWN_PET,
    CANCEL_DEBUFF,
    CHANGE_MAP_SPECIAL,
    USE_INNER_PORTAL,
    TROCK_ADD_MAP,
    LIE_DETECTOR,
    LIE_DETECTOR_SKILL,
    LIE_DETECTOR_RESPONSE,
    LIE_DETECTOR_REFRESH,
    QUEST_ACTION,
    SKILL_MACRO,
    ITEM_BAOWU,
    ITEM_SUNZI,
    REWARD_ITEM,
    ITEM_MAKER,
    USE_TREASUER_CHEST,
    PARTYCHAT,
    WHISPER,
    MESSENGER,
    PLAYER_INTERACTION,
    PARTY_OPERATION,
    DENY_PARTY_REQUEST,
    GUILD_OPERATION,
    DENY_GUILD_REQUEST,
    BUDDYLIST_MODIFY,
    NOTE_ACTION,
    USE_DOOR,
    CHANGE_KEYMAP,
    UPDATE_CHAR_INFO,
    ENTER_MTS,
    ALLIANCE_OPERATION,
    DENY_ALLIANCE_REQUEST,
    REQUEST_FAMILY,
    OPEN_FAMILY,
    FAMILY_OPERATION,
    DELETE_JUNIOR,
    DELETE_SENIOR,
    ACCEPT_FAMILY,
    USE_FAMILY,
    FAMILY_PRECEPT,
    FAMILY_SUMMON,
    CYGNUS_SUMMON,
    ARAN_COMBO,
    BBS_OPERATION,
    TRANSFORM_PLAYER,
    MOVE_PET,
    PET_CHAT,
    PET_COMMAND,
    PET_LOOT,
    PET_AUTO_POT,
    MOVE_SUMMON,
    SUMMON_ATTACK,
    DAMAGE_SUMMON,
    MOVE_LIFE,
    AUTO_AGGRO,
    FRIENDLY_DAMAGE,
    MONSTER_BOMB,
    HYPNOTIZE_DMG,
    NPC_ACTION,
    ITEM_PICKUP,
    DAMAGE_REACTOR,
    SNOWBALL,
    LEFT_KNOCK_BACK,
    COCONUT,
    MONSTER_CARNIVAL,
    CS_UPDATE(0xE5),
    CASHSHOP_OPERATION(0xE6),
    COUPON_CODE(0xE7),
    MAPLETV,
    REPAIR,
    REPAIR_ALL,
    TOUCHING_MTS,
    USE_MAGNIFY_GLASS,
    USE_POTENTIAL_SCROLL,
    USE_EQUIP_SCROLL,
    GAME_POLL,
    OWL,
    OWL_WARP,
    // XMAS_SURPRISE, //header -> uniqueid(long) is entire structure
    USE_OWL_MINERVA,
    RPS_GAME,
    UPDATE_QUEST,
    // QUEST_ITEM, //header -> questid(int) -> 1/0(byte, open or close)
    USE_ITEM_QUEST,
    FOLLOW_REQUEST,
    FOLLOW_REPLY,
    MOB_NODE,
    DISPLAY_NODE,
    TOUCH_REACTOR,
    RING_ACTION,
    MTS_TAB,
    SPECIAL_ATTACK,
    PET_IGNORE,
    BEANS_OPERATION,
    LICENSE_REQUEST,
    BEANS_UPDATE;

    private short code = -2;

    @Override
    public void setValue(short code) {
        this.code = code;
    }

    @Override
    public final short getValue() {
        return code;
    }

    private final boolean CheckState;

    RecvPacketOpcode() {
        this.CheckState = true;
    }

    RecvPacketOpcode(int code) {
        this.code = (short) code;
        this.CheckState = false;
    }

    RecvPacketOpcode(short code, final boolean CheckState) {
        this.code = code;
        this.CheckState = CheckState;
    }

    RecvPacketOpcode(final boolean CheckState) {
        this.CheckState = CheckState;
    }

    public final boolean NeedsChecking() {
        return CheckState;
    }

    public static String nameOf(short value) {
        for (RecvPacketOpcode header : RecvPacketOpcode.values()) {
            if (header.getValue() == value) {
                return header.name();
            }
        }
        return "UNKNOWN";
    }

    public static boolean isSpamHeader(RecvPacketOpcode header) {
        switch (header.name()) {
            case "PONG":
            case "NPC_ACTION":
                // case "ENTER"":
                // case "CRASH_INFO":
                // case "AUTH_REQUEST":
                // case "SPECIAL_MOVE":
                // case "MOVE_LIFE":
                // case "MOVE_PLAYER":
                // case "MOVE_ANDROID":
                // case "MOVE_DRAGON":
                // case "MOVE_SUMMON":
                // case "MOVE_FAMILIAR":
                // case "MOVE_PET":
                // case "AUTO_AGGRO":
                // case "CLOSE_RANGE_ATTACK":
                // case "QUEST_ACTION":
                // case "HEAL_OVER_TIME":
                // case "CHANGE_KEYMAP":
                // case "USE_INNER_PORTAL":
                // case "MOVE_HAKU":
                // case "FRIENDLY_DAMAGE":
                // case "CLOSE_RANGE_ATTACK":
                // case "RANGED_ATTACK":
                // case "ARAN_COMBO":
                // case "SPECIAL_STAT":
                // case "UPDATE_HYPER":
                // case "RESET_HYPER":
                // case "ANGELIC_CHANGE":
                // case "DRESSUP_TIME":
                // case "BUTTON_PRESSED":
                // case "STRANGE_DATA":
                // case "SYSTEM_PROCESS_LIST":
                // case "PINKBEAN_YOYO_REQUEST":
                return true;
            default:
                return false;
        }
    }

    public static final void reloadValues() {
        String fileName = "recv.ini";
        Properties props = new Properties();
        try (FileInputStream fileInputStream = new FileInputStream(fileName);
                BufferedReader br = new BufferedReader(
                        new InputStreamReader(fileInputStream, StringUtil.codeString(fileName)))) {
            props.load(br);
        } catch (IOException ex) {
            InputStream in = RecvPacketOpcode.class.getClassLoader().getResourceAsStream("properties/" + fileName);
            if (in == null) {
                System.err.println("错误: 未加载 " + fileName + " 档案");
                return;
            }
            try {
                props.load(in);
                in.close();
            } catch (IOException e) {
                throw new RuntimeException("加载 " + fileName + " 档案出错", e);
            }
        }
        ExternalCodeTableGetter.populateValues(props, values());
    }

    static {
        reloadValues();
    }
}
