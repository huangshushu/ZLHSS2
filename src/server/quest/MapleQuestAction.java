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
package server.quest;

import java.util.HashMap;
import java.util.Map;
import java.io.Serializable;

import client.ISkill;
import constants.GameConstants;
import client.inventory.InventoryException;
import client.MapleCharacter;
import client.inventory.MapleInventoryType;
import client.MapleQuestStatus;
import client.MapleStat;
import client.SkillFactory;
import handling.world.World;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import provider.MapleData;
import provider.MapleDataTool;
import server.MapleInventoryManipulator;
import server.MapleItemInformationProvider;
import server.Randomizer;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;
import tools.Pair;
import tools.Triple;

public class MapleQuestAction implements Serializable {

    private static final long serialVersionUID = 9179541993413738569L;
    private MapleQuestActionType type;
    private MapleQuest quest;
    private int intStore = 0;
    private List<Integer> applicableJobs = new ArrayList<Integer>();
    private List<QuestItem> items = null;
    private List<Triple<Integer, Integer, Integer>> skill = null;
    private List<Pair<Integer, Integer>> state = null;

    /**
     * Creates a new instance of MapleQuestAction
     */
    public MapleQuestAction(MapleQuestActionType type, ResultSet rse, MapleQuest quest, PreparedStatement pss, PreparedStatement psq, PreparedStatement psi) throws SQLException {
        this.type = type;
        this.quest = quest;

        this.intStore = rse.getInt("intStore");
        String[] jobs = rse.getString("applicableJobs").split(", ");
        if (jobs.length <= 0 && rse.getString("applicableJobs").length() > 0) {
            applicableJobs.add(Integer.parseInt(rse.getString("applicableJobs")));
        }
        for (String j : jobs) {
            if (j.length() > 0) {
                applicableJobs.add(Integer.parseInt(j));
            }
        }
        ResultSet rs;
        switch (type) {
            case item:
                items = new ArrayList<QuestItem>();
                psi.setInt(1, rse.getInt("uniqueid"));
                rs = psi.executeQuery();
                while (rs.next()) {
                    items.add(new QuestItem(rs.getInt("itemid"), rs.getInt("count"), rs.getInt("period"), rs.getInt("gender"), rs.getInt("job"), rs.getInt("jobEx"), rs.getInt("prop")));
                }
                rs.close();
                break;
            case quest:
                state = new ArrayList<Pair<Integer, Integer>>();
                psq.setInt(1, rse.getInt("uniqueid"));
                rs = psq.executeQuery();
                while (rs.next()) {
                    state.add(new Pair<Integer, Integer>(rs.getInt("quest"), rs.getInt("state")));
                }
                rs.close();
                break;
            case skill:
                skill = new ArrayList<Triple<Integer, Integer, Integer>>();
                pss.setInt(1, rse.getInt("uniqueid"));
                rs = pss.executeQuery();
                while (rs.next()) {
                    skill.add(new Triple<Integer, Integer, Integer>(rs.getInt("skillid"), rs.getInt("skillLevel"), rs.getInt("masterLevel")));
                }
                rs.close();
                break;
        }
    }

    private static boolean canGetItem(QuestItem item, MapleCharacter c) {
        if (item.gender != 2 && item.gender >= 0 && item.gender != c.getGender()) {
            return false;
        }
        if (item.job > 0) {
            final List<Integer> code = getJobBy5ByteEncoding(item.job);
            boolean jobFound = false;
            for (int codec : code) {
                if (codec / 100 == c.getJob() / 100) {
                    jobFound = true;
                    break;
                }
            }
            if (!jobFound && item.jobEx > 0) {
                final List<Integer> codeEx = getJobBySimpleEncoding(item.jobEx);
                for (int codec : codeEx) {
                    if ((codec / 100 % 10) == (c.getJob() / 100 % 10)) {
                        jobFound = true;
                        break;
                    }
                }
            }
            return jobFound;
        }
        return true;
    }

    public final boolean RestoreLostItem(final MapleCharacter c, final int itemid) {
        if (type == MapleQuestActionType.item) {

            for (QuestItem item : items) {
                if (item.itemid == itemid) {
                    if (!c.haveItem(item.itemid, item.count, true, false)) {
                        MapleInventoryManipulator.addById(c.getClient(), item.itemid, (short) item.count);
                    }
                    return true;
                }
            }
        }
        return false;
    }

    public void runStart(MapleCharacter c, Integer extSelection) {
        MapleQuestStatus status;
        switch (type) {
            case exp:
                status = c.getQuest(quest);
                if (status.getForfeited() > 0) {
                    break;
                }
                //c.gainExp(intStore * GameConstants.getExpRate_Quest(c.getLevel()) * (c.getStat().questBonus) * ((c.getTrait(MapleTraitType.sense).getLevel() * 3 / 10) + 100) / 100, true, true, true);
                c.gainExp(intStore * GameConstants.getExpRate_Quest(c.getLevel()), true, true, true);
                break;
            case item:
                // first check for randomness in item selection
                Map<Integer, Integer> props = new HashMap<Integer, Integer>();
                for (QuestItem item : items) {
                    if (item.prop > 0 && canGetItem(item, c)) {
                        for (int i = 0; i < item.prop; i++) {
                            props.put(props.size(), item.itemid);
                        }
                    }
                }
                int selection = 0;
                int extNum = 0;
                if (props.size() > 0) {
                    selection = props.get(Randomizer.nextInt(props.size()));
                }
                for (QuestItem item : items) {
                    if (!canGetItem(item, c)) {
                        continue;
                    }
                    final int id = item.itemid;
                    if (item.prop != -2) {
                        if (item.prop == -1) {
                            if (extSelection != null && extSelection != extNum++) {
                                continue;
                            }
                        } else if (id != selection) {
                            continue;
                        }
                    }
                    final short count = (short) item.count;
                    if (count < 0) { // remove items
                        try {
                            MapleInventoryManipulator.removeById(c.getClient(), GameConstants.getInventoryType(id), id, (count * -1), true, false);
                        } catch (InventoryException ie) {
                            // it's better to catch this here so we'll atleast try to remove the other items
                            System.err.println("[h4x] Completing a quest without meeting the requirements" + ie);
                        }
                        c.getClient().getSession().writeAndFlush(MaplePacketCreator.getShowItemGain(id, count, true));
                    } else { // add items
                        final int period = item.period / 1440; //im guessing.
                        final String name = MapleItemInformationProvider.getInstance().getName(id);
                        if (id / 10000 == 114 && name != null && name.length() > 0) { //medal
                            final String msg = "你已获得称号 <" + name + ">";
                            c.dropMessage(-1, msg);
                            c.dropMessage(5, msg);
                        }
                        MapleInventoryManipulator.addById(c.getClient(), id, count, "", null, period);
                        c.getClient().getSession().writeAndFlush(MaplePacketCreator.getShowItemGain(id, count, true));
                    }
                }
                break;
            case nextQuest:
                status = c.getQuest(quest);
                if (status.getForfeited() > 0) {
                    break;
                }
                c.getClient().getSession().writeAndFlush(MaplePacketCreator.updateQuestFinish(quest.getId(), status.getNpc(), intStore));
                break;
            case money:
                status = c.getQuest(quest);
                if (status.getForfeited() > 0) {
                    break;
                }
                c.gainMeso(intStore, true, true);
                break;
            case quest:
                for (Pair<Integer, Integer> q : state) {
                    c.updateQuest(new MapleQuestStatus(MapleQuest.getInstance(q.left), q.right));
                }
                break;
            case skill:
                for (Triple<Integer, Integer, Integer> skills : skill) {
                    final int skillid = skills.left;
                    int skillLevel = skills.mid;
                    int masterLevel = skills.right;
                    final ISkill skillObject = SkillFactory.getSkill(skillid);
                    boolean found = false;
                    for (int applicableJob : applicableJobs) {
                        if (c.getJob() == applicableJob) {
                            found = true;
                            break;
                        }
                    }
                    if (skillObject.isBeginnerSkill() || found) {
                        c.changeSkillLevel(skillObject, (byte) Math.max(skillLevel, c.getSkillLevel(skillObject)), (byte) Math.max(masterLevel, c.getMasterLevel(skillObject)));
                    }
                }
                break;
            case pop:
                status = c.getQuest(quest);
                if (status.getForfeited() > 0) {
                    break;
                }
                final int fameGain = intStore;
                c.addFame(fameGain);
                c.updateSingleStat(MapleStat.FAME, c.getFame());
                c.getClient().getSession().writeAndFlush(MaplePacketCreator.getShowFameGain(fameGain));
                break;
            case buffItemID:
                status = c.getQuest(quest);
                if (status.getForfeited() > 0) {
                    break;
                }
                final int tobuff = intStore;
                if (tobuff <= 0) {
                    break;
                }
                MapleItemInformationProvider.getInstance().getItemEffect(tobuff).applyTo(c);
                break;
            case infoNumber: {
//		System.out.println("quest : "+intStore+"");
//		MapleQuest.getInstance(intStore).forceComplete(c, 0);
                break;
            }
            case sp: {
                status = c.getQuest(quest);
                if (status.getForfeited() > 0) {
                    break;
                }
                final int sp_val = intStore;
                if (applicableJobs.size() > 0) {
                    int finalJob = 0;
                    for (int job_val : applicableJobs) {
                        if (c.getJob() >= job_val && job_val > finalJob) {
                            finalJob = job_val;
                        }
                    }
                    if (finalJob == 0) {
                        c.gainSP(sp_val);
                    } else {
                        c.gainSP(sp_val, GameConstants.getSkillBook(finalJob));
                    }
                } else {
                    c.gainSP(sp_val);
                }
                break;
            }
            /*case charmEXP:
            case charismaEXP:
            case craftEXP:
            case insightEXP:
            case senseEXP:
            case willEXP: {
                status = c.getQuest(quest);
                if (status.getForfeited() > 0) {
                    break;
                }
                c.getTrait(MapleTraitType.getByQuestName(type.name())).addExp(intStore, c);
                break;
            }*/
            default:
                break;
        }
    }

    public boolean checkEnd(MapleCharacter c, Integer extSelection) {
        switch (type) {
            case item: {
                // first check for randomness in item selection
                final Map<Integer, Integer> props = new HashMap<Integer, Integer>();

                for (QuestItem item : items) {
                    if (item.prop > 0 && canGetItem(item, c)) {
                        for (int i = 0; i < item.prop; i++) {
                            props.put(props.size(), item.itemid);
                        }
                    }
                }
                int selection = 0;
                int extNum = 0;
                if (props.size() > 0) {
                    selection = props.get(Randomizer.nextInt(props.size()));
                }
                byte eq = 0, use = 0, setup = 0, etc = 0, cash = 0;

                for (QuestItem item : items) {
                    if (!canGetItem(item, c)) {
                        continue;
                    }
                    final int id = item.itemid;
                    if (item.prop != -2) {
                        if (item.prop == -1) {
                            if (extSelection != null && extSelection != extNum++) {
                                continue;
                            }
                        } else if (id != selection) {
                            continue;
                        }
                    }
                    final short count = (short) item.count;
                    if (count < 0) { // remove items
                        if (!c.haveItem(id, count, false, true)) {
                            c.dropMessage(1, "你的任务道具不够，还不能完成任务。");
                            return false;
                        }
                    } else { // add items
                        if (MapleItemInformationProvider.getInstance().isPickupRestricted(id) && c.haveItem(id, 1, true, false)) {
                            c.dropMessage(1, "You have this item already: " + MapleItemInformationProvider.getInstance().getName(id));
                            return false;
                        }
                        switch (GameConstants.getInventoryType(id)) {
                            case EQUIP:
                                eq++;
                                break;
                            case USE:
                                use++;
                                break;
                            case SETUP:
                                setup++;
                                break;
                            case ETC:
                                etc++;
                                break;
                            case CASH:
                                cash++;
                                break;
                        }
                    }
                }
                if (c.getInventory(MapleInventoryType.EQUIP).getNumFreeSlot() < eq) {
                    c.dropMessage(1, "请确认装备栏是否满了。");
                    return false;
                } else if (c.getInventory(MapleInventoryType.USE).getNumFreeSlot() < use) {
                    c.dropMessage(1, "请确认消耗栏是否满了。");
                    return false;
                } else if (c.getInventory(MapleInventoryType.SETUP).getNumFreeSlot() < setup) {
                    c.dropMessage(1, "请确认装饰栏是否满了。");
                    return false;
                } else if (c.getInventory(MapleInventoryType.ETC).getNumFreeSlot() < etc) {
                    c.dropMessage(1, "请确认其他栏是否满了。");
                    return false;
                } else if (c.getInventory(MapleInventoryType.CASH).getNumFreeSlot() < cash) {
                    c.dropMessage(1, "请确认特殊栏是否满了。");
                    return false;
                }
                return true;
            }
            case money: {
                final int meso = intStore;
                if (c.getMeso() + meso < 0) { // Giving, overflow
                    c.dropMessage(1, "枫币不足。");
                    return false;
                } else if (meso < 0 && c.getMeso() < Math.abs(meso)) { //remove meso
                    c.dropMessage(1, "枫币不足。");
                    return false;
                }
                return true;
            }
        }
        return true;
    }

    public void runEnd(MapleCharacter c, Integer extSelection, int qusetid) {
        switch (type) {
            case exp: {
                //c.gainExp(intStore * GameConstants.getExpRate_Quest(c.getLevel()) * (c.getStat().questBonus) * ((c.getTrait(MapleTraitType.sense).getLevel() * 3 / 10) + 100) / 100, true, true, true);
                c.gainExp(intStore * GameConstants.getExpRate_Quest(c.getLevel()), true, true, true);
                break;
            }
            case item: {
                // first check for randomness in item selection
                Map<Integer, Integer> props = new HashMap<Integer, Integer>();
                for (QuestItem item : items) {
                    if (item.prop > 0 && canGetItem(item, c)) {
                        for (int i = 0; i < item.prop; i++) {
                            props.put(props.size(), item.itemid);
                        }
                    }
                }
                int selection = 0;
                int extNum = 0;
                if (props.size() > 0) {
                    selection = props.get(Randomizer.nextInt(props.size()));
                }
                for (QuestItem item : items) {
                    if (!canGetItem(item, c)) {
                        continue;
                    }
                    final int id = item.itemid;
                    if (item.prop != -2) {
                        if (item.prop == -1) {
                            if (extSelection != null && extSelection != extNum++) {
                                continue;
                            }
                        } else if (id != selection) {
                            continue;
                        }
                    }
                    final short count = (short) item.count;
                    if (count < 0) { // remove items
                        MapleInventoryManipulator.removeById(c.getClient(), GameConstants.getInventoryType(id), id, (count * -1), true, false);
                        c.getClient().getSession().writeAndFlush(MaplePacketCreator.getShowItemGain(id, count, true));
                    } else { // add items
                        final int period = item.period / 1440; //im guessing.
                        final String name = MapleItemInformationProvider.getInstance().getName(id);
                        if (id / 10000 == 114 && name != null && name.length() > 0) { //medal
                            final String msg = "你已获得称号 <" + name + ">";
                            c.dropMessage(-1, msg);
                            c.dropMessage(5, msg);
                        }
                        if (qusetid == 8630) {
                            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM密语] 任务ID:" + qusetid + " 玩家:" + c.getName() + " 使用10张枫彩票兑换物品:" + name + "ID:" + id));
                            FileoutputUtil.logToFile("logs/Data/枫彩票兑换.txt", "\r\n 时间　[" + FileoutputUtil.NowTime() + "] IP: " + c.getClient().getSession().remoteAddress().toString().split(":")[0] + " 任务ID:" + qusetid + " 玩家:" + c.getName() + " 使用10张枫彩票兑换物品:" + name + "ID:" + id);
                        }
                        if (qusetid == 8631) {
                            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM密语] 任务ID:" + qusetid + " 玩家:" + c.getName() + " 使用50张枫彩票兑换物品:" + name + "ID:" + id));
                            FileoutputUtil.logToFile("logs/Data/枫彩票兑换.txt", "\r\n 时间　[" + FileoutputUtil.NowTime() + "] IP: " + c.getClient().getSession().remoteAddress().toString().split(":")[0] + " 任务ID:" + qusetid + " 玩家:" + c.getName() + " 使用50张枫彩票兑换物品:" + name + "ID:" + id);
                        }
                        if (qusetid == 8632) {
                            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM密语] 任务ID:" + qusetid + " 玩家:" + c.getName() + " 使用100张枫彩票兑换物品:" + name + "ID:" + id));
                            FileoutputUtil.logToFile("logs/Data/枫彩票兑换.txt", "\r\n 时间　[" + FileoutputUtil.NowTime() + "] IP: " + c.getClient().getSession().remoteAddress().toString().split(":")[0] + " 任务ID:" + qusetid + " 玩家:" + c.getName() + " 使用100张枫彩票兑换物品:" + name + "ID:" + id);
                        }
                        if (qusetid == 8633) {
                            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM密语] 任务ID:" + qusetid + " 玩家:" + c.getName() + " 使用200张枫彩票兑换物品:" + name + "ID:" + id));
                            FileoutputUtil.logToFile("logs/Data/枫彩票兑换.txt", "\r\n 时间　[" + FileoutputUtil.NowTime() + "] IP: " + c.getClient().getSession().remoteAddress().toString().split(":")[0] + " 任务ID:" + qusetid + " 玩家:" + c.getName() + " 使用200张枫彩票兑换物品:" + name + "ID:" + id);
                        }
                        if (qusetid == 8634) {
                            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM密语] 任务ID:" + qusetid + " 玩家:" + c.getName() + " 使用500张枫彩票兑换物品:" + name + "ID:" + id));
                            FileoutputUtil.logToFile("logs/Data/枫彩票兑换.txt", "\r\n 时间　[" + FileoutputUtil.NowTime() + "] IP: " + c.getClient().getSession().remoteAddress().toString().split(":")[0] + " 任务ID:" + qusetid + " 玩家:" + c.getName() + " 使用500张枫彩票兑换物品:" + name + "ID:" + id);
                        }
                        if (qusetid == 8635) {
                            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM密语] 任务ID:" + qusetid + " 玩家:" + c.getName() + " 使用1000张枫彩票兑换物品:" + name + "ID:" + id));
                            FileoutputUtil.logToFile("logs/Data/枫彩票兑换.txt", "\r\n 时间　[" + FileoutputUtil.NowTime() + "] IP: " + c.getClient().getSession().remoteAddress().toString().split(":")[0] + " 任务ID:" + qusetid + " 玩家:" + c.getName() + " 使用1000张枫彩票兑换物品:" + name + "ID:" + id);
                        }
                        if (qusetid == 8636) {
                            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM密语] 任务ID:" + qusetid + " 玩家:" + c.getName() + " 使用3000张枫彩票兑换物品:" + name + "ID:" + id));
                            FileoutputUtil.logToFile("logs/Data/枫彩票兑换.txt", "\r\n 时间　[" + FileoutputUtil.NowTime() + "] IP: " + c.getClient().getSession().remoteAddress().toString().split(":")[0] + " 任务ID:" + qusetid + " 玩家:" + c.getName() + " 使用3000张枫彩票兑换物品:" + name + "ID:" + id);
                        }
                        MapleInventoryManipulator.addById(c.getClient(), id, count, "", null, period);
                        c.getClient().getSession().writeAndFlush(MaplePacketCreator.getShowItemGain(id, count, true));
                    }
                }
                break;
            }
            case nextQuest: {
                c.getClient().getSession().writeAndFlush(MaplePacketCreator.updateQuestFinish(quest.getId(), c.getQuest(quest).getNpc(), intStore));
                break;
            }
            case money: {
                c.gainMeso(intStore, true, true);
                break;
            }
            case quest: {
                for (Pair<Integer, Integer> q : state) {
                    c.updateQuest(new MapleQuestStatus(MapleQuest.getInstance(q.left), q.right));
                }
                break;
            }
            case skill:
                for (Triple<Integer, Integer, Integer> skills : skill) {
                    final int skillid = skills.left;
                    int skillLevel = skills.mid;
                    int masterLevel = skills.right;
                    final ISkill skillObject = SkillFactory.getSkill(skillid);
                    boolean found = false;
                    for (int applicableJob : applicableJobs) {
                        if (c.getJob() == applicableJob) {
                            found = true;
                            break;
                        }
                    }
                    if (skillObject.isBeginnerSkill() || found) {
                        c.changeSkillLevel(skillObject, (byte) Math.max(skillLevel, c.getSkillLevel(skillObject)), (byte) Math.max(masterLevel, c.getMasterLevel(skillObject)));
                    }
                }
                break;
            case pop: {
                final int fameGain = intStore;
                c.addFame(fameGain);
                c.updateSingleStat(MapleStat.FAME, c.getFame());
                c.getClient().getSession().writeAndFlush(MaplePacketCreator.getShowFameGain(fameGain));
                break;
            }
            case buffItemID: {
                final int tobuff = intStore;
                if (tobuff <= 0) {
                    break;
                }
                MapleItemInformationProvider.getInstance().getItemEffect(tobuff).applyTo(c);
                break;
            }
            case infoNumber: {
//		System.out.println("quest : "+intStore+"");
//		MapleQuest.getInstance(intStore).forceComplete(c, 0);
                break;
            }
            case sp: {
                final int sp_val = intStore;
                if (applicableJobs.size() > 0) {
                    int finalJob = 0;
                    for (int job_val : applicableJobs) {
                        if (c.getJob() >= job_val && job_val > finalJob) {
                            finalJob = job_val;
                        }
                    }
                    if (finalJob == 0) {
                        c.gainSP(sp_val);
                    } else {
                        c.gainSP(sp_val, GameConstants.getSkillBook(finalJob));
                    }
                } else {
                    c.gainSP(sp_val);
                }
                break;
            }
            /*case charmEXP:
            case charismaEXP:
            case craftEXP:
            case insightEXP:
            case senseEXP:
            case willEXP: {
                c.getTrait(MapleTraitType.getByQuestName(type.name())).addExp(intStore, c);
                break;
            }*/
            default:
                break;
        }
    }

    private static List<Integer> getJobBy5ByteEncoding(int encoded) {
        List<Integer> ret = new ArrayList<Integer>();
        if ((encoded & 0x1) != 0) {
            ret.add(0);
        }
        if ((encoded & 0x2) != 0) {
            ret.add(100);
        }
        if ((encoded & 0x4) != 0) {
            ret.add(200);
        }
        if ((encoded & 0x8) != 0) {
            ret.add(300);
        }
        if ((encoded & 0x10) != 0) {
            ret.add(400);
        }
        if ((encoded & 0x20) != 0) {
            ret.add(500);
        }
        if ((encoded & 0x400) != 0) {
            ret.add(1000);
        }
        if ((encoded & 0x800) != 0) {
            ret.add(1100);
        }
        if ((encoded & 0x1000) != 0) {
            ret.add(1200);
        }
        if ((encoded & 0x2000) != 0) {
            ret.add(1300);
        }
        if ((encoded & 0x4000) != 0) {
            ret.add(1400);
        }
        if ((encoded & 0x8000) != 0) {
            ret.add(1500);
        }
        if ((encoded & 0x20000) != 0) {
            ret.add(2001); //im not sure of this one
            ret.add(2200);
        }
        if ((encoded & 0x100000) != 0) {
            ret.add(2000);
            ret.add(2001); //?
        }
        if ((encoded & 0x200000) != 0) {
            ret.add(2100);
        }
        if ((encoded & 0x400000) != 0) {
            ret.add(2001); //?
            ret.add(2200);
        }

        if ((encoded & 0x40000000) != 0) { //i haven't seen any higher than this o.o
            ret.add(3000);
            ret.add(3200);
            ret.add(3300);
            ret.add(3500);
        }
        return ret;
    }

    private static List<Integer> getJobBySimpleEncoding(int encoded) {
        List<Integer> ret = new ArrayList<Integer>();
        if ((encoded & 0x1) != 0) {
            ret.add(200);
        }
        if ((encoded & 0x2) != 0) {
            ret.add(300);
        }
        if ((encoded & 0x4) != 0) {
            ret.add(400);
        }
        if ((encoded & 0x8) != 0) {
            ret.add(500);
        }
        return ret;
    }

    public MapleQuestActionType getType() {
        return type;
    }

    @Override
    public String toString() {
        return type.toString();
    }

    public List<Triple<Integer, Integer, Integer>> getSkills() {
        return skill;
    }

    public List<QuestItem> getItems() {
        return items;
    }

    public static class QuestItem {

        public int itemid, count, period, gender, job, jobEx, prop;

        public QuestItem(int itemid, int count, int period, int gender, int job, int jobEx, int prop) {
            this.itemid = itemid;
            this.count = count;
            this.period = period;
            this.gender = gender;
            this.job = job;
            this.jobEx = jobEx;
            this.prop = prop;
        }
    }
}
