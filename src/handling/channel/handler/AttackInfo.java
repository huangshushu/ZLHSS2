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
package handling.channel.handler;

import java.util.List;
import java.awt.Point;

import client.ISkill;
import constants.GameConstants;
import client.MapleCharacter;
import client.SkillFactory;
import server.MapleStatEffect;
import server.AutobanManager;
import tools.AttackPair;
import tools.FileoutputUtil;

public class AttackInfo {

    public int skill, charge, lastAttackTickCount;
    public List<AttackPair> allDamage;
    public Point position;
    public Point positionxy;
    public byte hits, targets, tbyte, display, animation, speed, csstar, AOE, slot, unk;
    public boolean real = true;

    public final MapleStatEffect getAttackEffect(final MapleCharacter chr, int skillLevel, final ISkill skill_) {
        if (GameConstants.isMulungSkill(skill) || GameConstants.isPyramidSkill(skill)) {
            skillLevel = 1;
        } else if (skillLevel <= 0) {
            return null;
        }
        if (GameConstants.isLinkedSkill(skill)) {
            final ISkill skillLink = SkillFactory.getSkill(skill);
            if (display > 80) {
                if (!skillLink.hasAction()) {
                    AutobanManager.getInstance().autoban(chr.getClient(), "攻击无延迟，技能ID： : " + skill); // 2 of the same autobans? wtf...
                    return null;
                }
            }
            return skillLink.getEffect(skillLevel);
        } else {
            if (skill != skill_.getId()) {
                FileoutputUtil.logToFile("logs/Data/AttackEffect.txt", "" + FileoutputUtil.NowTime() + " 连结技能[" + skill + "](" + skill_.getId() + "传承) 连结技能等级:" + skillLevel + " 不在getLinkedkill清单内却被触发, 触发者: " + chr.getName() + " 职业: " + chr.getJob() + " 等级: " + chr.getLevel() + "\r\n");
            }
        }
        if (display > 80) {
            if (!skill_.hasAction()) {
                AutobanManager.getInstance().autoban(chr.getClient(), "攻击无延迟，技能ID： " + skill);
                return null;
            }
        }
        return skill_.getEffect(skillLevel);
    }
}
