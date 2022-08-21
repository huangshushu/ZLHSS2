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

public enum MapleWeaponType {

    没有武器(0.0f, 0),
    闪亮克鲁(1.2f, 25),
    灵魂射手(1.7f, 15),
    魔剑(1.3f, 20),
    能量剑(1.3125f, 20),
    幻兽棍棒(1.34f, 20),
    单手剑(1.2f, 20),
    单手斧(1.2f, 20),
    单手棍(1.2f, 20),
    短剑(1.3f, 20),
    双刀(1.3f, 20),
    手杖(1.3f, 20),
    短杖(1.0f, 25),//RED改版后冒险家法师系数为1.2
    长杖(1.0f, 25),//RED改版后冒险家法师系数为1.2
    双手剑(1.34f, 20),
    双手斧(1.34f, 20),
    双手棍(1.34f, 20),
    枪(1.49f, 20),
    矛(1.49f, 20),
    弓(1.3f, 15),
    弩(1.35f, 15),
    拳套(1.75f, 15),
    指虎(1.7f, 20),
    火枪(1.5f, 15),
    双弩枪(1.3f, 15), //beyond op
    加农炮(1.5f, 15),
    太刀(1.25f, 20),
    扇子(1.35f, 25),
    琉(1.49f, 20),
    璃(1.34f, 20),
    ESP限制器(1.0f, 20),
    未知(0.0f, 0),;
    private final float damageMultiplier; // 武器系数
    private final int baseMastery; // 初始武器熟练度

    MapleWeaponType(final float maxDamageMultiplier, int baseMastery) {
        this.damageMultiplier = maxDamageMultiplier;
        this.baseMastery = baseMastery;
    }

    public final float getMaxDamageMultiplier() {
        return damageMultiplier;
    }

    public final int getBaseMastery() {
        return baseMastery;
    }
}
