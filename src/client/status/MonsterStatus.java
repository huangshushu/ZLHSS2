package client.status;

import client.MapleDisease;

public enum MonsterStatus {

    // 物攻
    WATK(0),
    // 物防
    WDEF(1),
    // 魔攻
    MATK(2),
    // 魔防
    MDEF(3),
    // 命中
    ACC(4),
    // 回避
    AVOID(5),
    // 速度
    SPEED(6),
    // 晕眩
    STUN(7),
    // 结冰
    FREEZE(8),
    // 中毒
    POISON(9),
    // 封印、沉默
    SEAL(10),
    // 挑衅
    SHOWDOWN(11),
    // 物理攻击提升
    WEAPON_ATTACK_UP(12),
    // 物理防御提升
    WEAPON_DEFENSE_UP(13),
    // 魔法攻击提升
    MAGIC_ATTACK_UP(14),
    // 魔法防御提升
    MAGIC_DEFENSE_UP(15),
    // 死亡
    DOOM(16, 18),
    // 影网
    SHADOW_WEB(17, 19),
    // 物攻免疫
    WEAPON_IMMUNITY(18, 16),
    // 魔攻免疫
    MAGIC_IMMUNITY(19, 17),
    // 20
    // 免疫伤害
    DAMAGE_IMMUNITY(21, 20),
    // 忍者伏击
    NINJA_AMBUSH(22, 21),
    //
    DANAGED_ELEM_ATTR(23),
    // 武器荼毒
    VENOMOUS_WEAPON(24, 22),
    // 黑暗
    DARKNESS(25, 23),
    // 致盲
    BLIND(25, 23),
    // 技能封印
    SEAL_SKILL(26, 24),
    //
    EMPTY(27, true, 33),
    // 心灵控制
    HYPNOTIZE(28, 25),
    // 反胜物攻
    WEAPON_DAMAGE_REFLECT(29, 26),
    // 反射魔攻
    MAGIC_DAMAGE_REFLECT(32, 27),
    //
    SUMMON(33, 34),
    MBS_32(32, 28),
    NEUTRALISE(33, 29),
    IMPRINT(34, 30),
    MONSTER_BOMB(35, 31),
    MAGIC_CRASH(36);

    private final int i;
    private final int pos;
    private final boolean isDefault;
    private final int order; // 解包的顺序

    MonsterStatus(int i) {
        this.i = 1 << (i % 32);
        this.pos = 3 - (int) Math.floor(i / 32);
        this.order = pos;
        this.isDefault = false;
    }

    MonsterStatus(int i, int order) {
        this.i = 1 << (i % 32);
        this.pos = 3 - (int) Math.floor(i / 32);
        this.order = order;
        this.isDefault = false;
    }

    MonsterStatus(int i, boolean isDefault) {
        this.i = 1 << (i % 32);
        this.pos = 3 - (int) Math.floor(i / 32);
        this.isDefault = isDefault;
        this.order = i;
    }

    MonsterStatus(int i, boolean isDefault, int order) {
        this.i = 1 << (i % 32);
        this.pos = 3 - (int) Math.floor(i / 32);
        this.isDefault = isDefault;
        this.order = order;
    }

    public int getPosition() {
        return pos;
    }

    public boolean isDefault() {
        return isDefault;
    }

    public int getValue() {
        return i;
    }

    public int getOrder() {
        return order;
    }

    public static final MapleDisease getLinkedDisease(final MonsterStatus skill) {
        switch (skill) {
            case STUN:
            case SHADOW_WEB:
                return MapleDisease.STUN;
            case POISON:
            case VENOMOUS_WEAPON:
                // case BURN:
                return MapleDisease.POISON;
            case SEAL:
            case MAGIC_CRASH:
                return MapleDisease.SEAL;
            case FREEZE:
                return MapleDisease.FREEZE;
            case DARKNESS:
                return MapleDisease.DARKNESS;
            case SPEED:
                return MapleDisease.SLOW;
        }
        return null;
    }
}
