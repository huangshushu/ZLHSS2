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
package client.anticheat;

public enum CheatingOffense {

    FAST_SUMMON_ATTACK((byte) 5, 6000, 50, (byte) 3),
    FASTATTACK((byte) 5, 6000, 50, (byte) 2),
    FASTATTACK2((byte) 5, 10000, 20, (byte) 1),
    MOVE_MONSTERS((byte) 1, 30000),
    FAST_HP_MP_REGEN((byte) 5, 20000, 10, (byte) 2),
    SAME_DAMAGE((byte) 2, 180000, 150),
    ATTACK_WITHOUT_GETTING_HIT((byte) 1, 30000, 1200, (byte) 0),
    HIGH_DAMAGE_MAGIC((byte) 5, 30000, -1, (byte) 0),
    HIGH_DAMAGE_MAGIC_2((byte) 10, 180000, -1, (byte) 0),
    HIGH_DAMAGE((byte) 5, 30000, -1, (byte) 0),
    HIGH_DAMAGE_2((byte) 10, 180000, -1, (byte) 0),
    EXCEED_DAMAGE_CAP((byte) 5, 60000, 800, (byte) 0),
    ATTACK_FARAWAY_MONSTER((byte) 5, 180000, 5000),
    ATTACK_FARAWAY_MONSTER_BAN((byte) 3, 180000, 5, (byte) 3),
    ATTACK_FARAWAY_MONSTER_SUMMON((byte) 5, 180000, 200),
    REGEN_HIGH_HP((byte) 1, 30000, 1000, (byte) 2),
    REGEN_HIGH_MP((byte) 1, 30000, 1000, (byte) 2),
    MOB_VAC((byte) 3, 7000, 5, (byte) 3),
    ITEMVAC_CLIENT((byte) 5, 5000, 10),
    ITEMVAC_SERVER((byte) 1, 10000, 10, (byte) 2),
    PET_ITEMVAC_CLIENT((byte) 5, 20000, 20, (byte) 2),
    PET_ITEMVAC_SERVER((byte) 3, 30000, 20, (byte) 2),
    USING_FARAWAY_PORTAL((byte) 1, 60000, 100, (byte) 0),
    AST_TAKE_DAMAG((byte) 1, 60000, 100),
    HIGH_AVOID((byte) 20, 180000, 100),
    HIGH_JUMP((byte) 1, 60000),
    MISMATCHING_BULLETCOUNT((byte) 1, 300000),
    ETC_EXPLOSION((byte) 1, 300000),
    ATTACKING_WHILE_DEAD((byte) 1, 300000, -1, (byte) 0),
    USING_UNAVAILABLE_ITEM((byte) 1, 300000),
    EXPLODING_NONEXISTANT((byte) 1, 300000),
    SUMMON_HACK((byte) 1, 300000),
    SUMMON_HACK_MOBS((byte) 1, 300000),
    ARAN_COMBO_HACK((byte) 1, 600000, 50),
    快速攻击((byte) 5, 6000, 200, (byte) 2), // 6秒內触发兩百次即封号
    快速攻击2((byte) 5, 6000, 500, (byte) 2), // 6秒內触发五百次即封号
    HEAL_ATTACKING_UNDEAD((byte) 20, 30000, 2);

    private final byte points;
    private final long validityDuration;
    private final int autobancount;
    private byte bantype = 0; // 0 = Disabled, 1 = Enabled, 2 = DC, 3 = custom Ban

    public final byte getPoints() {
        return points;
    }

    public final long getValidityDuration() {
        return validityDuration;
    }

    public final boolean shouldAutoban(final int count) {
        if (autobancount == -1) {
            return false;
        }
        return count >= autobancount;
    }

    public final byte getBanType() {
        return bantype;
    }

    public final void setEnabled(final boolean enabled) {
        bantype = (byte) (enabled ? 1 : 0);
    }

    public final boolean isEnabled() {
        return bantype >= 1;
    }

    CheatingOffense(final byte points, final long validityDuration) {
        this(points, validityDuration, -1, (byte) 1);
    }

    CheatingOffense(final byte points, final long validityDuration, final int autobancount) {
        this(points, validityDuration, autobancount, (byte) 1);
    }

    CheatingOffense(final byte points, final long validityDuration, final int autobancount,
            final byte bantype) {
        this.points = points;
        this.validityDuration = validityDuration;
        this.autobancount = autobancount;
        this.bantype = bantype;
    }
}
