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

import server.MapleStatEffect;
import server.life.Element;

/**
 * 广泛型技能的介面
 */
public interface ISkill {

    /**
     * 取得技能ID
     *
     * @return
     */
    int getId();

    /**
     * 取得技能特效
     *
     * @param skillLevel 技能等级
     * @return 技能特效资料
     */
    MapleStatEffect getEffect(int skillLevel);

    /**
     * 取得技能最大等级
     *
     * @return 技能最大等级
     */
    byte getMaxLevel();

    /**
     * 回传技能动画时间
     *
     * @return 技能动画时间
     */
    int getAnimationTime();

    /**
     * 技能书使用的，用于学习技能书时，确认职业是否能学
     *
     * @param job 角色职业
     * @return 是否能学习
     */
    boolean canBeLearnedBy(int job);

    /**
     * 用于确认四转职业的技能
     *
     * @return 是否为四转技能
     */
    boolean isFourthJob();

    /**
     * 回传技能是否含有action值
     *
     * @return 是否含有action值
     */
    boolean hasAction();

    /**
     * @return
     */
    boolean isTimeLimited();

    int getMasterLevel();

    Element getElement();

    boolean isBeginnerSkill();

    boolean hasRequiredSkill();

    boolean isInvisible();

    boolean isChargeSkill();

    int getRequiredSkillLevel();

    int getRequiredSkillId();

    String getName();
}
