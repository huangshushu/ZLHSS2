package handling;

import tools.StringUtil;

import java.io.*;
import java.util.Properties;

public enum SendPacketOpcode implements WritableIntValueHolder {
    // # 地图风筝封包包头

    SPAWN_KITE_ERROR(0x109),
    SPAWN_KITE(0x10A),
    DESTROY_KITE(0x10B),
    LOGIN_STATUS(0x00),
    SERVERLIST(0x02),
    CHARLIST(0x03),
    SERVER_IP(0x04),
    CHAR_NAME_RESPONSE(0x05),
    LICENSE_RESULT,
    ADD_NEW_CHAR_ENTRY(0x06),
    DELETE_CHAR_RESPONSE(0x07),
    CHANGE_CHANNEL(0x08),
    PING(0x09),
    CS_USE(0x0A),
    CHANNEL_SELECTED(0x0D),
    RELOG_RESPONSE(0x0F),
    SECONDPW_ERROR(0x10),
    CHOOSE_GENDER(0x14),
    GENDER_SET(0x15), // maybe this is RELOG_RESPONSE, can't care less
    SERVERSTATUS(0x16), // CHECK_USER_LIMIT_RESULT

    MODIFY_INVENTORY_ITEM(0x1B),
    UPDATE_INVENTORY_SLOT(0x1C),
    UPDATE_STATS(0x1D),
    GIVE_BUFF(0x1E),
    CANCEL_BUFF(0x1F),
    TEMP_STATS(0x20),
    TEMP_STATS_RESET(0x21),
    UPDATE_SKILLS(0x22),
    SKILL_USE_RESULT(0x23),
    FAME_RESPONSE(0x24),
    SHOW_STATUS_INFO(0x25),
    SHOW_NOTES(0x26),
    MAP_TRANSFER_RESULT(0x27),
    LIE_DETECTOR(0x28),
    CLAIM_RESULT(0x2A),
    CLAIM_STATUS_CHANGED(0x2E),
    SET_TAMING_MOB_INFO(0x2D),
    SHOW_QUEST_COMPLETION(0x2E),
    ENTRUSTED_SHOP_CHECK_RESULT(0x2F),
    USE_SKILL_BOOK(0x31),
    GATHER_ITEM_RESULT(0x32),
    SORT_ITEM_RESULT(0x33),
    CHAR_INFO(0x36),
    PARTY_OPERATION(0x37),
    BUDDYLIST(0x38),
    GUILD_OPERATION(0x3A),
    ALLIANCE_OPERATION(0x3B),
    SPAWN_PORTAL(0x3C),
    SERVERMESSAGE(0x3D),
    INCUBATOR_RESULT(0x3E), // incubatorResult
    PIGMI_REWARD(0xFFFE), // >?????
    SHOP_SCANNER_RESULT(0x3F),
    SHOP_LINK_RESULT(0x40), //
    MARRIAGE_REQUEST(0x41),
    MARRIAGE_RESULT(0x42),
    WEDDING_GIFT_RESULT(0x43), //
    NOTIFY_MARRIED_PARTNER_MAP_TRANSFER(0x44), //
    CASH_PET_FOOD_RESULT(0x45), //
    SET_WEEK_EVENT_MESSAGE(0x46),
    SET_POTION_DISCOUNT_RATE(0x47), //
    BRIDE_MOB_CATCH_FAIL(0x48), //
    IMITATED_NPC_RESULT(0x4A),
    IMITATED_NPC_DATA(0x4B), //
    LIMITED_NPC_DISABLE_INFO(0x4C), //
    MONSTERBOOK_ADD(0x4D),
    MONSTERBOOK_CHANGE_COVER(0x4E),
    HOUR_CHANGED(0x4F), //
    MINIMAP_ON_OFF(0x50), //
    CONSULT_AUTHKEY_UPDATE(0x51), // [1]][4]?
    CLASS_COMPETITION_AUTHKEY_UPDATE(0x52), // [1]][4]?
    WEB_BOARD_AUTHKEY_UPDATE(0x53), // [1]][4]?
    SESSION_VALUE(0x54), //
    BONUS_EXP_CHANGED(0x55), //

    FAMILY_CHART_RESULT(0x56),
    // 信息
    FAMILY_INFO_RESULT(0x57),
    // 显示结果
    FAMILY_RESULT(0x58),
    // 邀请窗口
    FAMILY_JOIN_REQUEST(0x59),
    // 接受拒绝回传
    FAMILY_JOIN_REQUEST_RESULT(0x5A),
    // 成为导师
    FAMILY_JOIN_ACCEPTED(0x5B),
    // 学院权限
    FAMILY_PRIVILEGE_LIST(0x5C),
    // 名声度
    FAMILY_FAMOUS_POINT_INC_RESULT(0x5D),
    // 登入登出提醒
    FAMILY_NOTIFY_LOGIN_OR_LOGOUT(0x5E), // ? is logged in. LOLWUT
    FAMILY_SET_PRIVILEGE(0x5F),
    FAMILY_SUMMON_REQUEST(0x60),
    LEVEL_UPDATE(0x61),
    MARRIAGE_UPDATE(0x62),
    JOB_UPDATE(0x63),
    SET_BUY_EQUIP_EXT(0x64), //
    SCRIPT_PROGRESS_MESSAGE(0x65),
    DATA_CRC_CHECK_FAILED(0x66), //
    BBS_OPERATION(0x68),
    FISHING_BOARD_UPDATE(0x69),
    AVATAR_MEGA(0x6D),
    SKILL_MACRO(0x7A),
    SET_FIELD(0x7B),
    SET_ITC(0x7C), // MTS
    SET_CASH_SHOP(0x7D),
    SET_MAP_OBJECT_VISIBLE(0x7F),
    CLEAR_BACK_EFFECT(0x80),
    MAP_BLOCKED(0x81), //
    SERVER_BLOCKED(0x82),
    SHOW_EQUIP_EFFECT(0x83),
    MULTICHAT(0x84),
    WHISPER(0x85),
    SPOUSE_CHAT(0x86), //
    BOSS_ENV(0x87),
    MOVE_ENV(0x88),
    CASH_SONG(0x89),
    GM_EFFECT(0x8A),
    OX_QUIZ(0x8B),
    GMEVENT_INSTRUCTIONS(0x8C),
    CLOCK(0x8D),
    BOAT_EFFECT(0x8E),
    BOAT_PACKET(0x8F),
    STOP_CLOCK(0x93),
    PYRAMID_UPDATE(0x94),
    PYRAMID_RESULT(0x95),
    MOVE_PLATFORM(0x96),
    SPAWN_PLAYER(0x99),
    REMOVE_PLAYER_FROM_MAP(0x9A),
    CHATTEXT(0x9B),
    CHALKBOARD(0x9C),
    UPDATE_CHAR_BOX(0x9D),
    SHOW_CONSUME_EFFECT(0x9E), //
    SHOW_SCROLL_EFFECT(0x9F),
    FISHING_CAUGHT(0xA0),
    HIT_BY_USER(0xA1), // [4][4]
    SPAWN_PET(0xA2),
    MOVE_PET(0xA5),
    PET_CHAT(0xA6),
    PET_NAMECHANGE(0xA7),
    PET_EXCEPTION_LIST(0xA8), //
    PET_COMMAND(0xA9),
    SPAWN_SUMMON(0xAA),
    REMOVE_SUMMON(0xAB),
    SUMMON_ATTACK(0xAD),
    MOVE_SUMMON(0xAE),
    DAMAGE_SUMMON(0xAF),
    MOVE_PLAYER(0xB1),
    CLOSE_RANGE_ATTACK(0xB2),
    RANGED_ATTACK(0xB3),
    MAGIC_ATTACK(0xB4),
    ENERGY_ATTACK(0xB5),
    SKILL_EFFECT(0xB6),
    CANCEL_SKILL_EFFECT(0xB7),
    DAMAGE_PLAYER(0xB8),
    FACIAL_EXPRESSION(0xB9),
    SHOW_ITEM_EFFECT(0xBA),
    SHOW_CHAIR(0xBD),
    UPDATE_CHAR_LOOK(0xBE),
    ACTIVE_PORTABLE_CHAIR(0xBD), //
    // 0xBC ?? sub_9A4751((void *)v3, Format);
    AVARTAR_MODFIED(0xBE), //
    SHOW_FOREIGN_EFFECT(0xBF),
    GIVE_FOREIGN_BUFF(0xC0),
    CANCEL_FOREIGN_BUFF(0xC1),
    UPDATE_PARTYMEMBER_HP(0xC2),
    GUILD_NAME_CHANGED(0xC3),
    GUILD_MARK_CHANGED(0xC4),
    THROW_GRENADE(0xC5), // [4][4][4][4]
    CANCEL_CHAIR(0xC6),
    SHOW_ITEM_GAIN_INCHAT(0xC7),
    CURRENT_MAP_WARP(0xC8),
    MESOBAG_SUCCESS(0xCA),
    MESOBAG_FAILURE(0xCB),
    UPDATE_QUEST_INFO(0xCC),
    PET_FLAG_CHANGE(0xCE),
    PLAYER_HINT(0xCF),
    REPAIR_WINDOW(0xD5),
    CYGNUS_INTRO_LOCK(0xD6),
    CYGNUS_INTRO_DISABLE_UI(0xD7),
    CS_UPDATE,
    CS_OPERATION,
    SPAWN_NPC(0xF9),
    REMOVE_NPC(0xFA),
    SPAWN_NPC_REQUEST_CONTROLLER(0xFB),
    SPAWN_MONSTER,
    SPAWN_MONSTER_CONTROL,
    MOVE_MONSTER_RESPONSE,
    SHOW_MESO_GAIN,
    ANNOUNCE_PLAYER_SHOP,
    KILL_MONSTER,
    DROP_ITEM_FROM_MAPOBJECT,
    MOVE_MONSTER,
    OPEN_NPC_SHOP,
    CONFIRM_SHOP_TRANSACTION,
    OPEN_STORAGE,
    REMOVE_ITEM_FROM_MAP,
    PLAYER_INTERACTION,
    NPC_TALK,
    KEYMAP,
    SHOW_MONSTER_HP,
    APPLY_MONSTER_STATUS,
    CANCEL_MONSTER_STATUS,
    SPAWN_DOOR,
    REMOVE_DOOR,
    SPAWN_MIST,
    REMOVE_MIST,
    DAMAGE_MONSTER,
    REACTOR_SPAWN,
    REACTOR_HIT,
    REACTOR_DESTROY,
    EARN_TITLE_MSG,
    SHOW_MAGNET,
    MERCH_ITEM_MSG,
    MERCH_ITEM_STORE,
    MESSENGER,
    NPC_ACTION,
    COOLDOWN,
    SUMMON_HINT,
    SUMMON_HINT_MSG,
    SUMMON_SKILL,
    ARIANT_PQ_START,
    CATCH_MONSTER,
    ARIANT_SCOREBOARD,
    ZAKUM_SHRINE,
    DUEY,
    MONSTER_CARNIVAL_START,
    MONSTER_CARNIVAL_OBTAINED_CP,
    MONSTER_CARNIVAL_PARTY_CP,
    MONSTER_CARNIVAL_SUMMON,
    MONSTER_CARNIVAL_DIED,
    SPAWN_HIRED_MERCHANT,
    UPDATE_HIRED_MERCHANT,
    DESTROY_HIRED_MERCHANT,
    FAIRY_PEND_MSG,
    VICIOUS_HAMMER,
    ROLL_SNOWBALL,
    HIT_SNOWBALL,
    SNOWBALL_MESSAGE,
    LEFT_KNOCK_BACK,
    HIT_COCONUT,
    COCONUT_SCORE,
    HORNTAIL_SHRINE,
    DRAGON_MOVE,
    DRAGON_REMOVE,
    DRAGON_SPAWN,
    ARAN_COMBO,
    GET_MTS_TOKENS,
    MTS_OPERATION,
    SHOW_POTENTIAL_EFFECT,
    SHOW_POTENTIAL_RESET,
    CHAOS_ZAKUM_SHRINE,
    CHAOS_HORNTAIL_SHRINE,
    GAME_POLL_QUESTION,
    GAME_POLL_REPLY,
    XMAS_SURPRISE,
    FOLLOW_REQUEST,
    FOLLOW_EFFECT,
    FOLLOW_MOVE,
    FOLLOW_MSG,
    FOLLOW_MESSAGE,
    TALK_MONSTER,
    REMOVE_TALK_MONSTER,
    MONSTER_PROPERTIES,
    GHOST_POINT,
    GHOST_STATUS,
    ENGLISH_QUIZ,
    RPS_GAME,
    UPDATE_BEANS,
    TIP_BEANS,
    OPEN_BEANS,
    SHOOT_BEANS,
    SHOW_SPECIAL_ATTACK,
    PET_AUTO_HP,
    PET_AUTO_MP,
    TOP_MSG,
    CHAR_CASH,
    INVENTORY_OPERATION((short)32),
    CS_WEB;

    private short code = -2;

    SendPacketOpcode() {
        this.code = -2;
    }

    SendPacketOpcode(int code) {
        this.code = (short) code;
    }

    public static String nameOf(int value) {
        for (SendPacketOpcode opcode : SendPacketOpcode.values()) {
            if (opcode.getValue() == value) {
                return opcode.name();
            }
        }
        return "UNKNOWN";
    }

    @Override
    public void setValue(short code) {
        this.code = code;
    }

    @Override
    public short getValue() {
        return code;
    }

    public static boolean isSpamHeader(SendPacketOpcode opcode) {
        switch (opcode.name()) {
            case "WARP_TO_MAP":
            case "PING":
            case "NPC_ACTION":
                // case "AUTH_RESPONSE":
                // case "SERVERLIST":
                // case "UPDATE_STATS":
                // case "MOVE_PLAYER":
                // case "SPAWN_NPC":
                // case "SPAWN_NPC_REQUEST_CONTROLLER":
                // case "REMOVE_NPC":
                // case "MOVE_MONSTER":
                // case "MOVE_MONSTER_RESPONSE":
                // case "SPAWN_MONSTER":
                // case "SPAWN_MONSTER_CONTROL":
                // case "HAKU_MOVE":
                // case "MOVE_SUMMON":
                // case "MOVE_FAMILIAR":
                // case "ANDROID_MOVE":
                // case "INVENTORY_OPERATION":
                // case "MOVE_PET":
                // case "SHOW_SPECIAL_EFFECT":
                // case "DROP_ITEM_FROM_MAPOBJECT":
                // case "REMOVE_ITEM_FROM_MAP":
                // case "UPDATE_PARTYMEMBER_HP":
                // case "DAMAGE_PLAYER":
                // case "SHOW_MONSTER_HP":
                // case "CLOSE_RANGE_ATTACK":
                // case "RANGED_ATTACK":
                // case "ARAN_COMBO":
                // case "REMOVE_BG_LAYER":
                // case "SPECIAL_STAT":
                // case "TOP_MSG":
                // case "ANGELIC_CHANGE":
                // case "UPDATE_CHAR_LOOK":
                // case "KILL_MONSTER":
                return true;
            default:
                return false;
        }
    }

    public static final void reloadValues() {
        String fileName = "send.ini";
        Properties props = new Properties();
        try (FileInputStream fileInputStream = new FileInputStream(fileName);
             BufferedReader br = new BufferedReader(
                     new InputStreamReader(fileInputStream, StringUtil.codeString(fileName)))) {
            props.load(br);
        } catch (IOException ex) {
            InputStream in = SendPacketOpcode.class.getClassLoader().getResourceAsStream("properties/" + fileName);
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
