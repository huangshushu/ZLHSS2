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
package client.inventory;

public interface IEquip extends IItem {

    enum ScrollResult {

        SUCCESS, FAIL, CURSE
    }
    int ARMOR_RATIO = 350000;
    int WEAPON_RATIO = 700000;

    byte getUpgradeSlots();

    byte getLevel();

    byte getViciousHammer();

    int getItemEXP();

    int getExpPercentage();

    int getEquipLevel();

    int getEquipExp();

    int getEquipExpForLevel();

    int getBaseLevel();

    short getStr();

    short getDex();

    short getInt();

    short getLuk();

    short getHp();

    short getMp();

    short getWatk();

    short getMatk();

    short getWdef();

    short getMdef();

    short getAcc();

    short getAvoid();

    short getHands();

    short getSpeed();

    short getJump();

    int getDurability();

    byte getEnhance();

    byte getState();

    short getPotential1();

    short getPotential2();

    short getPotential3();

    short getHpR();

    short getMpR();

    int getGrade();
    
    int getLimitBreak();
}
