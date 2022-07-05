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
package client;

import java.io.Serializable;
import server.Randomizer;

public enum MapleDisease implements Serializable {

    POTION(0x80000000000L, true),
    SHADOW(0x100000000000L, true), //receiving damage/moving
    BLIND(0x200000000000L, true),
    FREEZE(0x8000000000000L, true),//0x8000000000000L, true
    SLOW(0x1),
    MORPH(0x2),
    SEDUCE(0x80),
    ZOMBIFY(0x4000),
    REVERSE_DIRECTION(0x80000),
    WEIRD_FLAME(0x8000000),
    STUN(0x2000000000000L),
    POISON(0x4000000000000L),
    SEAL(0x8000000000000L),
    DARKNESS(0x10000000000000L),
    WEAKEN(0x4000000000000000L),
    CURSE(0x8000000000000000L),;
    // 0x100 is disable skill except buff
    private static final long serialVersionUID = 0L;
    private final long i;
    private final boolean first;

    private MapleDisease(long i) {
        this.i = i;
        first = false;
    }

    private MapleDisease(long i, boolean first) {
        this.i = i;
        this.first = first;
    }

    public boolean isFirst() {
        return first;
    }

    public long getValue() {
        return i;
    }

    public static final MapleDisease getRandom() {
        while (true) {
            for (MapleDisease dis : MapleDisease.values()) {
                if (Randomizer.nextInt(MapleDisease.values().length) == 0) {
                    return dis;
                }
            }
        }
    }

    public static final MapleDisease getByMobSkill(final int skill) {
        switch (skill) {
            case 120:
                return SEAL;
            case 121:
                return DARKNESS;
            case 122:
                return WEAKEN;
            case 123:
                return STUN;
            case 124:
                return CURSE;
            case 125:
                return POISON;
            case 126:
                return SLOW;
            case 128:
                return SEDUCE;
            case 132:
                return REVERSE_DIRECTION;
            case 133:
                return ZOMBIFY;
            case 134:
                return POTION;
            case 135:
                return SHADOW;
            case 136:
                return BLIND;
            case 137:
                return FREEZE;
        }
        return null;
    }

    public static final int getByDisease(final MapleDisease skill) {
        switch (skill) {
            case SEAL:
                return 120;
            case DARKNESS:
                return 121;
            case WEAKEN:
                return 122;
            case STUN:
                return 123;
            case CURSE:
                return 124;
            case POISON:
                return 125;
            case SLOW:
                return 126;
            case SEDUCE:
                return 128;
            case REVERSE_DIRECTION:
                return 132;
            case ZOMBIFY:
                return 133;
            case POTION:
                return 134;
            case SHADOW:
                return 135;
            case BLIND:
                return 136;
            case FREEZE:
                return 137;
        }
        return 0;
    }
}
