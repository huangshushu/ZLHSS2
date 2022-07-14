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
package server.life;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.HashMap;
import java.util.Map;

import provider.MapleData;
import provider.MapleDataDirectoryEntry;
import provider.MapleDataFileEntry;
import provider.MapleDataProvider;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;
import provider.WzXML.MapleDataType;
import tools.Pair;
import tools.StringUtil;

public class MapleLifeFactory {

    private static final MapleDataProvider data = MapleDataProviderFactory.getDataProvider("Mob.wz");
    private static final MapleDataProvider stringDataWZ = MapleDataProviderFactory.getDataProvider("String.wz");
    private static final MapleDataProvider etcDataWZ = MapleDataProviderFactory.getDataProvider("Etc.wz");
    private static final MapleData mobStringData = stringDataWZ.getData("Mob.img");
    private static final MapleData npcStringData = stringDataWZ.getData("Npc.img");
    private static final MapleData npclocData = etcDataWZ.getData("NpcLocation.img");
    private static final Map<Integer, String> npcNames = new HashMap<>();
    private static final Map<Integer, MapleMonsterStats> monsterStats = new HashMap<>();
    private static final Map<Integer, Integer> NPCLoc = new HashMap<>();
    private static final Map<Integer, List<Integer>> questCount = new HashMap<>();

    public static AbstractLoadedMapleLife getLife(int id, String type) {
        if (type.equalsIgnoreCase("n")) {
            return getNPC(id);
        } else if (type.equalsIgnoreCase("m")) {
            return getMonster(id);
        } else {
            System.err.println("Unknown Life type: " + type + "");
            return null;
        }
    }

    public static int getNPCLocation(int npcid) {
        if (NPCLoc.containsKey(npcid)) {
            return NPCLoc.get(npcid);
        }
        final int map = MapleDataTool.getIntConvert(Integer.toString(npcid) + "/0", npclocData, -1);
        NPCLoc.put(npcid, map);
        return map;
    }

    public static final void loadQuestCounts() {
        if (questCount.size() > 0) {
            return;
        }
        for (MapleDataDirectoryEntry mapz : data.getRoot().getSubdirectories()) {
            if (mapz.getName().equals("QuestCountGroup")) {
                for (MapleDataFileEntry entry : mapz.getFiles()) {
                    final int id = Integer.parseInt(entry.getName().substring(0, entry.getName().length() - 4));
                    MapleData dat = data.getData("QuestCountGroup/" + entry.getName());
                    if (dat != null && dat.getChildByPath("info") != null) {
                        List<Integer> z = new ArrayList<>();
                        for (MapleData da : dat.getChildByPath("info")) {
                            z.add(MapleDataTool.getInt(da, 0));
                        }
                        questCount.put(id, z);
                    } else {
                        System.out.println("null questcountgroup");
                    }
                }
            }
        }
    }

    public static final List<Integer> getQuestCount(final int id) {
        return questCount.get(id);
    }

    public static MapleMonster getMonster(int mid) {
        MapleMonsterStats stats = monsterStats.get(Integer.valueOf(mid));

        if (stats == null) {
            MapleData monsterData = data.getData(StringUtil.getLeftPaddedStr(Integer.toString(mid) + ".img", '0', 11));
            if (monsterData == null) {
                return null;
            }
            MapleData monsterInfoData = monsterData.getChildByPath("info");
            stats = new MapleMonsterStats();
            if (mid == 9400296) {
                stats.setHp((long) Math.ceil(MapleDataTool.getIntConvert("maxHP", monsterInfoData) * 1.5));
            } else {
                stats.setHp(MapleDataTool.getIntConvert("maxHP", monsterInfoData));
            }
            stats.setMp(MapleDataTool.getIntConvert("maxMP", monsterInfoData, 0));
            stats.setExp(MapleDataTool.getIntConvert("exp", monsterInfoData, 0));
            stats.setLevel((short) MapleDataTool.getIntConvert("level", monsterInfoData));
            stats.setRemoveAfter(MapleDataTool.getIntConvert("removeAfter", monsterInfoData, 0));
            stats.setrareItemDropLevel((byte) MapleDataTool.getIntConvert("rareItemDropLevel", monsterInfoData, 0));
            stats.setFixedDamage(MapleDataTool.getIntConvert("fixedDamage", monsterInfoData, -1));
            stats.setOnlyNormalAttack(MapleDataTool.getIntConvert("onlyNormalAttack", monsterInfoData, 0) > 0);
            stats.setBoss(MapleDataTool.getIntConvert("boss", monsterInfoData, 0) > 0 || mid == 8810018 || mid == 9410066 || (mid >= 8810118 && mid <= 8810122));
            stats.setExplosiveReward(MapleDataTool.getIntConvert("explosiveReward", monsterInfoData, 0) > 0);
            stats.setFfaLoot(MapleDataTool.getIntConvert("publicReward", monsterInfoData, 0) > 0);
            stats.setUndead(MapleDataTool.getIntConvert("undead", monsterInfoData, 0) > 0 || mid == 9700004 || mid == 9700009 || mid == 9700010);
            stats.setName(MapleDataTool.getString(mid + "/name", mobStringData, "MISSINGNO"));
            stats.setBuffToGive(MapleDataTool.getIntConvert("buff", monsterInfoData, -1));
            stats.setFriendly(MapleDataTool.getIntConvert("damagedByMob", monsterInfoData, 0) > 0);
            stats.setExplosiveReward(MapleDataTool.getIntConvert("explosiveReward", monsterInfoData, 0) > 0);
            stats.setNoDoom(MapleDataTool.getIntConvert("noDoom", monsterInfoData, 0) > 0);
            stats.setFfaLoot(MapleDataTool.getIntConvert("publicReward", monsterInfoData, 0) > 0);
            stats.setCP((byte) MapleDataTool.getIntConvert("getCP", monsterInfoData, 0));
            stats.setPoint(MapleDataTool.getIntConvert("point", monsterInfoData, 0));
            stats.setDropItemPeriod(MapleDataTool.getIntConvert("dropItemPeriod", monsterInfoData, 0));
            stats.setPhysicalDefense((short) MapleDataTool.getIntConvert("PDDamage", monsterInfoData, 0));
            stats.setMagicDefense((short) MapleDataTool.getIntConvert("MDDamage", monsterInfoData, 0));
            stats.setEva((short) MapleDataTool.getIntConvert("eva", monsterInfoData, 0));
            final boolean hideHP = MapleDataTool.getIntConvert("HPgaugeHide", monsterInfoData, 0) > 0 || MapleDataTool.getIntConvert("hideHP", monsterInfoData, 0) > 0;
            final MapleData selfd = monsterInfoData.getChildByPath("selfDestruction");
            if (selfd != null) {
                stats.setSelfDHP(MapleDataTool.getIntConvert("hp", selfd, 0));
                stats.setSelfD((byte) MapleDataTool.getIntConvert("action", selfd, -1));
            } else {
                stats.setSelfD((byte) -1);
            }
            final MapleData firstAttackData = monsterInfoData.getChildByPath("firstAttack");
            if (firstAttackData != null) {
                if (firstAttackData.getType() == MapleDataType.FLOAT) {
                    stats.setFirstAttack(Math.round(MapleDataTool.getFloat(firstAttackData)) > 0);
                } else {
                    stats.setFirstAttack(MapleDataTool.getInt(firstAttackData) > 0);
                }
            }
            if (stats.isBoss() || isDmgSponge(mid)) {
                if (hideHP || monsterInfoData.getChildByPath("hpTagColor") == null || monsterInfoData.getChildByPath("hpTagBgcolor") == null) {
                    stats.setTagColor(0);
                    stats.setTagBgColor(0);
                } else {
                    stats.setTagColor(MapleDataTool.getIntConvert("hpTagColor", monsterInfoData));
                    stats.setTagBgColor(MapleDataTool.getIntConvert("hpTagBgcolor", monsterInfoData));
                }
            }

            final MapleData banishData = monsterInfoData.getChildByPath("ban");
            if (banishData != null) {
                stats.setBanishInfo(new BanishInfo(
                        MapleDataTool.getString("banMsg", banishData),
                        MapleDataTool.getInt("banMap/0/field", banishData, -1),
                        MapleDataTool.getString("banMap/0/portal", banishData, "sp")));
            }

            final MapleData reviveInfo = monsterInfoData.getChildByPath("revive");
            if (reviveInfo != null) {
                List<Integer> revives = new LinkedList<>();
                for (MapleData bdata : reviveInfo) {
                    revives.add(MapleDataTool.getInt(bdata));
                }
                stats.setRevives(revives);
            }

            final MapleData monsterSkillData = monsterInfoData.getChildByPath("skill");
            if (monsterSkillData != null) {
                int i = 0;
                List<Pair<Integer, Integer>> skills = new ArrayList<>();
                while (monsterSkillData.getChildByPath(Integer.toString(i)) != null) {
                    boolean add = skills.add(new Pair<>(MapleDataTool.getInt(i + "/skill", monsterSkillData, 0), MapleDataTool.getInt(i + "/level", monsterSkillData, 0)));
                    i++;
                }
                stats.setSkills(skills);
            }

            decodeElementalString(stats, MapleDataTool.getString("elemAttr", monsterInfoData, ""));

            // Other data which isn;t in the mob, but might in the linked data
            final int link = MapleDataTool.getIntConvert("link", monsterInfoData, 0);
            if (link != 0) { // Store another copy, for faster processing.
                monsterData = data.getData(StringUtil.getLeftPaddedStr(link + ".img", '0', 11));
            }

            OUTER:
            for (MapleData idata : monsterData) {
                switch (idata.getName()) {
                    case "fly":
                        stats.setFly(true);
                        stats.setMobile(true);
                        break OUTER;
                    case "move":
                        stats.setMobile(true);
                        break;
                }
            }

            byte hpdisplaytype = -1;
            if (stats.getTagColor() > 0) {
                hpdisplaytype = 0;
            } else if (stats.isFriendly()) {
                hpdisplaytype = 1;
            } else if (mid >= 9300184 && mid <= 9300215) { // Mulung TC mobs
                hpdisplaytype = 2;
            } else if (!stats.isBoss() || mid == 9410066) { // Not boss and dong dong chiang
                hpdisplaytype = 3;
            }
            stats.setHPDisplayType(hpdisplaytype);

            monsterStats.put(mid, stats);
        }
        return new MapleMonster(mid, stats);
    }

    public static final void decodeElementalString(MapleMonsterStats stats, String elemAttr) {
        for (int i = 0; i < elemAttr.length(); i += 2) {
            stats.setEffectiveness(
                    Element.getFromChar(elemAttr.charAt(i)),
                    ElementalEffectiveness.getByNumber(Integer.valueOf(String.valueOf(elemAttr.charAt(i + 1)))));
        }
    }

    private static boolean isDmgSponge(final int mid) {
        switch (mid) {
            case 8810018:
            case 8810118:
            case 8810119:
            case 8810120:
            case 8810121:
            case 8810122:
            case 8820009:
            case 8820010:
            case 8820011:
            case 8820012:
            case 8820013:
            case 8820014:
                return true;
        }
        return false;
    }

    public static MapleNPC getNPC(final int nid) {
        String name = npcNames.get(nid);
        if (name == null) {
            name = MapleDataTool.getString(nid + "/name", npcStringData, "MISSINGNO");
            npcNames.put(nid, name);
        }
        if (name.contains("Maple TV")) {
            return null;
        }
        return new MapleNPC(nid, name);
    }

    public static Map<Integer, String> getNPCNames() {
        return npcNames;
    }
}
