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
package server.maps;

public enum SavedLocationType {

    FREE_MARKET(0),
    MULUNG_TC(1),
    WORLDTOUR(2),
    FLORINA(3),
    FISHING(4),
    RICHIE(5),
    DONGDONGCHIANG(6),
    EVENT(7),
    AMORIA(8),
    CHRISTMAS(9),
    ARDENTMILL(10),
    PINK_ZAKUM(11),
    MONSTER_PARK(12),
    TUTORIAL(13),
    ENGLISH(14),
    SLEEP(15),
    ARIANT(16),
    ARIANT_PQ(17),
    WEDDING(18),
    MONSTER_CARNIVAL(19),
    DUTY_JOIN(20),//进入副本
    DUTY_LEAVE(21);//离开副本
    private final int index;

    SavedLocationType(int index) {
        this.index = index;
    }

    public int getValue() {
        return index;
    }

    public static SavedLocationType fromString(String Str) {
        return valueOf(Str);
    }
}
