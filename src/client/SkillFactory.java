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

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import provider.MapleData;
import provider.MapleDataProvider;
import provider.MapleDataFileEntry;
import provider.MapleDataProviderFactory;
import provider.MapleDataDirectoryEntry;
import provider.MapleDataTool;
import tools.StringUtil;

/**
 * 技能工厂
 *
 * @author user
 */
public class SkillFactory {

    /**
     * 技能资料
     */
    private static final Map<Integer, ISkill> skills = new HashMap<>();
    /**
     * 召唤兽技能资料
     */
    private static final Map<Integer, List<Integer>> summonSkills = new HashMap<>();
    /**
     * 召唤兽技能资讯
     */
    private static final Map<Integer, SummonSkillEntry> summonSkillsInfo = new HashMap<>();

    private final static MapleData stringSkills = MapleDataProviderFactory.getDataProvider("String.wz").getData("Skill.img");

    public static void LoadSkillInformaion() {
        System.out.println("【读取中】 SkillFactory :::");

        final MapleDataProvider skillWZ = MapleDataProviderFactory.getDataProvider("Skill.wz");
        final MapleDataDirectoryEntry root = skillWZ.getRoot();

        int skillId;
        MapleData summon_data;
        SummonSkillEntry sse;

        for (MapleDataFileEntry topDir : root.getFiles()) { // Loop thru jobs
            if (topDir.getName().length() <= 8) {
                for (MapleData data : skillWZ.getData(topDir.getName())) { // Loop thru each jobs
                    if (data.getName().equals("skill")) {
                        for (MapleData subData : data) { // Loop thru each jobs
                            if (subData != null) {
                                skillId = Integer.parseInt(subData.getName());
                                Skill skil = Skill.loadFromData(skillId, subData);
                                List<Integer> job = summonSkills.get(skillId / 10000);
                                if (job == null) {
                                    job = new ArrayList<>();
                                    summonSkills.put(skillId / 10000, job);
                                }
                                job.add(skillId);
                                skil.setName(getName(skillId));
                                skills.put(skillId, skil);
                                summon_data = subData.getChildByPath("summon/attack1/info");
                                if (summon_data != null) {
                                    sse = new SummonSkillEntry();
                                    sse.attackAfter = (short) MapleDataTool.getInt("attackAfter", summon_data, 999999);
                                    sse.type = (byte) MapleDataTool.getInt("type", summon_data, 0);
                                    sse.mobCount = (byte) MapleDataTool.getInt("mobCount", summon_data, 1);
                                    summonSkillsInfo.put(skillId, sse);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    public static final ISkill getSkill(final int id) {
        if (!skills.isEmpty()) {
            return skills.get(id);
        }
        return null;
    }

    public static long getDefaultSExpiry(final ISkill skill) {
        if (skill == null) {
            return -1;
        }
        return (skill.isTimeLimited() ? (System.currentTimeMillis() + (long) (30L * 24L * 60L * 60L * 1000L)) : -1);
    }

    public static final List<Integer> getSkillsByJob(final int jobId) {
        return summonSkills.get(jobId);
    }

    public static final String getSkillName(final int id) {
        ISkill skil = getSkill(id);
        if (skil != null) {
            return skil.getName();
        }
        return "";
    }

    public static final String getName(final int id) {
        String strId = Integer.toString(id);
        strId = StringUtil.getLeftPaddedStr(strId, '0', 7);
        MapleData skillroot = stringSkills.getChildByPath(strId);
        if (skillroot != null) {
            return MapleDataTool.getString(skillroot.getChildByPath("name"), "");
        } else {
            return "";
        }
    }

    public static final SummonSkillEntry getSummonData(final int skillid) {
        return summonSkillsInfo.get(skillid);
    }

    public static final Collection<ISkill> getAllSkills() {
        return skills.values();
    }
}
