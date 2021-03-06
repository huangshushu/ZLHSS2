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
package scripting;

import static server.MapleCarnivalChallenge.getJobNameById;

import java.awt.Point;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Collection;
import java.util.EnumMap;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.script.Invocable;

import client.ISkill;
import client.MapleCharacter;
import client.MapleClient;
import client.MapleJob;
import client.MapleStat;
import client.SkillEntry;
import client.SkillFactory;
import client.inventory.Equip;
import client.inventory.IItem;
import client.inventory.Item;
import client.inventory.ItemFlag;
import client.inventory.MapleInventory;
import client.inventory.MapleInventoryType;
import constants.GameConstants;
import constants.ServerConfig;
import database.DBConPool;
import handling.channel.ChannelServer;
import handling.channel.MapleGuildRanking;
import handling.channel.handler.InterServerHandler;
import handling.world.MapleParty;
import handling.world.MaplePartyCharacter;
import handling.world.World;
import handling.world.guild.MapleGuild;
import handling.world.guild.MapleGuildAlliance;
import server.MapleCarnivalChallenge;
import server.MapleCarnivalParty;
import server.MapleInventoryManipulator;
import server.MapleItemInformationProvider;
import server.MapleShopFactory;
import server.MapleSquad;
import server.MapleStatEffect;
import server.Randomizer;
import server.SpeedRunner;
import server.StructPotentialItem;
import server.Timer;
import server.Timer.CloneTimer;
import server.gashapon.Gashapon;
import server.gashapon.GashaponFactory;
import server.life.MapleMonster;
import server.life.MapleMonsterInformationProvider;
import server.life.MonsterDropEntry;
import server.maps.AramiaFireWorks;
import server.maps.Event_DojoAgent;
import server.maps.Event_PyramidSubway;
import server.maps.MapleMap;
import server.maps.MapleMapObject;
import server.maps.MapleMapObjectType;
import server.maps.SpeedRunType;
import server.quest.MapleQuest;
import server.shops.HiredMerchant;
import tools.FilePrinter;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;
import tools.Pair;
import tools.SearchGenerator;
import tools.StringUtil;
import tools.packet.PlayerShopPacket;
import tools.packet.UIPacket;

public class NPCConversationManager extends AbstractPlayerInteraction {

    protected MapleClient c;
    private final int npc, questid, mode;
    protected String script;
    private String getText;
    private final byte type; // -1 = NPC, 0 = start quest, 1 = end quest
    private byte lastMsg = -1;
    public boolean pendingDisposal = false;
    private final Invocable iv;

    public NPCConversationManager(MapleClient c, int npc, int questid, int mode, String npcscript, byte type,
            Invocable iv) {
        super(c);
        this.c = c;
        this.npc = npc;
        this.questid = questid;
        this.mode = mode;
        this.type = type;
        this.iv = iv;
        this.script = npcscript;
    }

    public Invocable getIv() {
        return iv;
    }

    public int getMode() {
        return mode;
    }

    public int getNpc() {
        return npc;
    }

    public int getQuest() {
        return questid;
    }

    public String getScript() {
        return script;
    }

    public byte getType() {
        return type;
    }

    public void safeDispose() {
        pendingDisposal = true;
    }

    public void dispose() {
        NPCScriptManager.getInstance().dispose(c);
    }

    public void askMapSelection(final String sel) {
        if (lastMsg > -1) {
            return;
        }
        c.sendPacket(MaplePacketCreator.getMapSelection(npc, sel));
        lastMsg = 0xD;
    }

    public void sendNext(String text) {
        if (lastMsg > -1) {
            return;
        }
        if (text.contains("#L")) { // sendNext will dc otherwise!
            sendSimple(text);
            return;
        }
        c.sendPacket(MaplePacketCreator.getNPCTalk(npc, (byte) 0, text, "00 01", (byte) 0));
        lastMsg = 0;
    }

    public void sendNextS(String text, byte type) {
        if (lastMsg > -1) {
            return;
        }
        if (text.contains("#L")) { // will dc otherwise!
            sendSimpleS(text, type);
            return;
        }
        c.sendPacket(MaplePacketCreator.getNPCTalk(npc, (byte) 0, text, "00 01", type));
        lastMsg = 0;
    }

    public void sendPrev(String text) {
        if (lastMsg > -1) {
            return;
        }
        if (text.contains("#L")) { // will dc otherwise!
            sendSimple(text);
            return;
        }
        c.sendPacket(MaplePacketCreator.getNPCTalk(npc, (byte) 0, text, "01 00", (byte) 0));
        lastMsg = 0;
    }

    public void sendPrevS(String text, byte type) {
        if (lastMsg > -1) {
            return;
        }
        if (text.contains("#L")) { // will dc otherwise!
            sendSimpleS(text, type);
            return;
        }
        c.sendPacket(MaplePacketCreator.getNPCTalk(npc, (byte) 0, text, "01 00", type));
        lastMsg = 0;
    }

    public void sendNextPrev(String text) {
        if (lastMsg > -1) {
            return;
        }
        if (text.contains("#L")) { // will dc otherwise!
            sendSimple(text);
            return;
        }
        c.sendPacket(MaplePacketCreator.getNPCTalk(npc, (byte) 0, text, "01 01", (byte) 0));
        lastMsg = 0;
    }

    public void PlayerToNpc(String text) {
        sendNextPrevS(text, (byte) 3);
    }

    public void sendNextPrevS(String text) {
        sendNextPrevS(text, (byte) 3);
    }

    public void sendNextPrevS(String text, byte type) {
        if (lastMsg > -1) {
            return;
        }
        if (text.contains("#L")) { // will dc otherwise!
            sendSimpleS(text, type);
            return;
        }
        c.sendPacket(MaplePacketCreator.getNPCTalk(npc, (byte) 0, text, "01 01", type));
        lastMsg = 0;

    }

    public void sendOk(String text) {
        if (lastMsg > -1) {
            return;
        }
        if (text.contains("#L")) { // will dc otherwise!
            sendSimple(text);
            return;
        }
        c.sendPacket(MaplePacketCreator.getNPCTalk(npc, (byte) 0, text, "00 00", (byte) 0));
        lastMsg = 0;
    }

    public void sendOkS(String text, byte type) {
        if (lastMsg > -1) {
            return;
        }
        if (text.contains("#L")) { // will dc otherwise!
            sendSimpleS(text, type);
            return;
        }
        c.sendPacket(MaplePacketCreator.getNPCTalk(npc, (byte) 0, text, "00 00", type));
        lastMsg = 0;
    }

    public void sendYesNo(String text) {
        if (lastMsg > -1) {
            return;
        }
        if (text.contains("#L")) { // will dc otherwise!
            sendSimple(text);
            return;
        }
        c.sendPacket(MaplePacketCreator.getNPCTalk(npc, (byte) 1, text, "", (byte) 0));
        lastMsg = 1;
    }

    public void sendYesNoS(String text, byte type) {
        if (lastMsg > -1) {
            return;
        }
        if (text.contains("#L")) { // will dc otherwise!
            sendSimpleS(text, type);
            return;
        }
        c.sendPacket(MaplePacketCreator.getNPCTalk(npc, (byte) 1, text, "", type));
        lastMsg = 1;
    }

    public void sendAcceptDecline(String text) {
        askAcceptDecline(text);
    }

    public void sendAcceptDeclineNoESC(String text) {
        askAcceptDeclineNoESC(text);
    }

    public void askAcceptDecline(String text) {
        if (lastMsg > -1) {
            return;
        }
        if (text.contains("#L")) { // will dc otherwise!
            sendSimple(text);
            return;
        }
        c.sendPacket(MaplePacketCreator.getNPCTalk(npc, (byte) 0x0B, text, "", (byte) 0));
        lastMsg = 0xB;
    }

    public void askAcceptDeclineNoESC(String text) {
        if (lastMsg > -1) {
            return;
        }
        if (text.contains("#L")) { // will dc otherwise!
            sendSimple(text);
            return;
        }
        c.sendPacket(MaplePacketCreator.getNPCTalk(npc, (byte) 0x0C, text, "", (byte) 0));
        lastMsg = 0xC;
    }

    public void askAvatar(String text, int... args) {
        if (lastMsg > -1) {
            return;
        }
        c.sendPacket(MaplePacketCreator.getNPCTalkStyle(npc, text, args));
        lastMsg = 7;
    }

    public void sendSimple(String text) {
        if (lastMsg > -1) {
            return;
        }
        if (!text.contains("#L")) { // sendSimple will dc otherwise!
            sendNext(text);
            return;
        }
        c.sendPacket(MaplePacketCreator.getNPCTalk(npc, (byte) 4, text, "", (byte) 0));
        lastMsg = 4;
    }

    public void sendSimpleS(String text, byte type) {
        if (lastMsg > -1) {
            return;
        }
        if (!text.contains("#L")) { // sendSimple will dc otherwise!
            sendNextS(text, type);
            return;
        }
        c.sendPacket(MaplePacketCreator.getNPCTalk(npc, (byte) 4, text, "", (byte) type));
        lastMsg = 4;
    }

    public void sendStyle(String text, int styles[]) {
        if (lastMsg > -1) {
            return;
        }
        c.sendPacket(MaplePacketCreator.getNPCTalkStyle(npc, text, styles));
        lastMsg = 7;
    }

    public void sendStyle(String text, int caid, int styles[]) {
        if (lastMsg > -1) {
            return;
        }
        c.sendPacket(MaplePacketCreator.getNPCTalkStyle(npc, text, caid, styles));
        lastMsg = 7;
    }

    public void sendGetNumber(String text, int def, int min, int max) {
        if (lastMsg > -1) {
            return;
        }
        if (text.contains("#L")) { // will dc otherwise!
            sendSimple(text);
            return;
        }
        c.sendPacket(MaplePacketCreator.getNPCTalkNum(npc, text, def, min, max));
        lastMsg = 3;
    }

    public void sendGetText(String text) {
        if (lastMsg > -1) {
            return;
        }
        if (text.contains("#L")) { // will dc otherwise!
            sendSimple(text);
            return;
        }
        c.sendPacket(MaplePacketCreator.getNPCTalkText(npc, text));
        lastMsg = 2;
    }

    public void setGetText(String text) {
        this.getText = text;
    }

    public String getText() {
        return getText;
    }

    public void setHair(int hair) {
        getPlayer().setHair(hair);
        getPlayer().updateSingleStat(MapleStat.HAIR, hair);
        getPlayer().equipChanged();
    }

    public void setFace(int face) {
        getPlayer().setFace(face);
        getPlayer().updateSingleStat(MapleStat.FACE, face);
        getPlayer().equipChanged();
    }

    public void setSkin(int color) {
        getPlayer().setSkinColor((byte) color);
        getPlayer().updateSingleStat(MapleStat.SKIN, color);
        getPlayer().equipChanged();
    }

    public int setRandomAvatar(int ticket, int... args_all) {
        if (!haveItem(ticket)) {
            return -1;
        }
        gainItem(ticket, (short) -1);

        int args = args_all[Randomizer.nextInt(args_all.length)];
        if (args < 100) {
            c.getPlayer().setSkinColor((byte) args);
            c.getPlayer().updateSingleStat(MapleStat.SKIN, args);
        } else if (args < 30000) {
            c.getPlayer().setFace(args);
            c.getPlayer().updateSingleStat(MapleStat.FACE, args);
        } else {
            c.getPlayer().setHair(args);
            c.getPlayer().updateSingleStat(MapleStat.HAIR, args);
        }
        c.getPlayer().equipChanged();

        return 1;
    }

    public int setAvatar(int ticket, int args) {
        if (!haveItem(ticket)) {
            return -1;
        }
        gainItem(ticket, (short) -1);

        if (args < 100) {
            c.getPlayer().setSkinColor((byte) args);
            c.getPlayer().updateSingleStat(MapleStat.SKIN, args);
        } else if (args < 30000) {
            c.getPlayer().setFace(args);
            c.getPlayer().updateSingleStat(MapleStat.FACE, args);
        } else {
            c.getPlayer().setHair(args);
            c.getPlayer().updateSingleStat(MapleStat.HAIR, args);
        }
        c.getPlayer().equipChanged();

        return 1;
    }

    public void sendStorage() {
        if (getPlayer().hasBlockedInventory2(true)) { // hack
            c.getPlayer().dropMessage(1, "????????????????????????????????????");
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }

        if (!World.isShutDown) {
            if (!World.isShopShutDown) {
                c.getPlayer().setConversation(4);
                c.getPlayer().getStorage().sendStorage(c, npc);
            } else {
                c.getPlayer().dropMessage(1, "???????????????????????????");
                c.sendPacket(MaplePacketCreator.enableActions());
            }
        } else {
            c.getPlayer().dropMessage(1, "???????????????????????????");
            c.sendPacket(MaplePacketCreator.enableActions());
        }
    }

    public void openShop(int id) {
        MapleShopFactory.getInstance().getShop(id).sendShop(c);
    }

    public int gainGachaponItem(int id, int quantity) {
        return gainGachaponItem(id, quantity,
                c.getPlayer().getMap().getStreetName() + " - " + c.getPlayer().getMap().getMapName());
    }

    public int gainGachaponItem(int id, int quantity, final String msg) {
        try {
            if (!MapleItemInformationProvider.getInstance().itemExists(id)) {
                return -1;
            }
            final IItem item = MapleInventoryManipulator.addbyId_Gachapon(c, id, (short) quantity);

            if (item == null) {
                return -1;
            }
            final byte rareness = GameConstants.gachaponRareItem(item.getItemId());
            if (rareness == 1) {
                if (c.getPlayer().getMapId() == 910000000) {
                    World.Broadcast.broadcastMessage(MaplePacketCreator.getGachaponMega("[????????????]",
                            " : ???????????? " + c.getPlayer().getName() + " ???" + msg + "?????????", item, rareness));
                } else {
                    World.Broadcast.broadcastMessage(MaplePacketCreator.getGachaponMega("[????????????-?????????]",
                            " : ???????????? " + c.getPlayer().getName() + " ???" + msg + "?????????", item, rareness));
                }
                // World.Broadcast.broadcastMessage(MaplePacketCreator.getGachaponMega("[" + msg
                // + "] " + c.getPlayer().getName(), " : ???????????????????????????????????????", item, rareness));
            } else if (rareness == 2) {
                World.Broadcast.broadcastMessage(MaplePacketCreator.getGachaponMega(
                        "[" + msg + "] " + c.getPlayer().getName(), " : ?????????????????????????????????????????????", item, rareness));
            } else if (rareness > 2) {
                World.Broadcast.broadcastMessage(MaplePacketCreator.getGachaponMega(
                        "[" + msg + "] " + c.getPlayer().getName(), " : ?????????????????????????????????????????????????????????", item, rareness));
            }
            return item.getItemId();
        } catch (Exception e) {
        }
        return -1;
    }

    public int gainGachaponItemTime(int id, int quantity, long period) {
        return gainGachaponItemTime(id, quantity,
                c.getPlayer().getMap().getStreetName() + " - " + c.getPlayer().getMap().getMapName(), period);
    }

    public int gainGachaponItemTime(int id, int quantity, final String msg, long period) {
        try {
            final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
            if (!ii.itemExists(id)) {
                return -1;
            }
            final IItem item = ii.isCash(id)
                    ? MapleInventoryManipulator.addbyId_GachaponTime(c, id, (short) quantity, period)
                    : MapleInventoryManipulator.addbyId_Gachapon(c, id, (short) quantity);

            if (item == null) {
                return -1;
            }
            final byte rareness = GameConstants.gachaponRareItem(item.getItemId());
            if (rareness == 1) {
                if (c.getPlayer().getMapId() == 910000000) {
                    World.Broadcast.broadcastMessage(MaplePacketCreator.getGachaponMega("[????????????]",
                            " : ???????????? " + c.getPlayer().getName() + " ???" + msg + "?????????", item, rareness));
                } else {
                    World.Broadcast.broadcastMessage(MaplePacketCreator.getGachaponMega("[????????????-?????????]",
                            " : ???????????? " + c.getPlayer().getName() + " ???" + msg + "?????????", item, rareness));
                }
                // World.Broadcast.broadcastMessage(MaplePacketCreator.getGachaponMega("[" + msg
                // + "] " + c.getPlayer().getName(), " : ???????????????????????????????????????", item, rareness));
            } else if (rareness == 2) {
                World.Broadcast.broadcastMessage(MaplePacketCreator.getGachaponMega(
                        "[" + msg + "] " + c.getPlayer().getName(), " : ?????????????????????????????????????????????", item, rareness));
            } else if (rareness > 2) {
                World.Broadcast.broadcastMessage(MaplePacketCreator.getGachaponMega(
                        "[" + msg + "] " + c.getPlayer().getName(), " : ?????????????????????????????????????????????????????????", item, rareness));
            }
            return item.getItemId();
        } catch (Exception e) {
        }
        return -1;
    }

    public void changeJob(int job) {
        c.getPlayer().changeJob(job);
    }

    public void startQuest(int id) {
        MapleQuest.getInstance(id).start(getPlayer(), npc);
    }

    public void completeQuest(int id) {
        MapleQuest.getInstance(id).complete(getPlayer(), npc);
    }

    public void forfeitQuest(int id) {
        MapleQuest.getInstance(id).forfeit(getPlayer());
    }

    public void forceStartQuest() {
        MapleQuest.getInstance(questid).forceStart(getPlayer(), getNpc(), null);
    }

    @Override
    public void forceStartQuest(int id) {
        MapleQuest.getInstance(id).forceStart(getPlayer(), getNpc(), null);
    }

    public void forceStartQuest(String customData) {
        MapleQuest.getInstance(questid).forceStart(getPlayer(), getNpc(), customData);
    }

    public void completeQuest() {
        forceCompleteQuest();
    }

    public void forceCompleteQuest() {
        MapleQuest.getInstance(questid).forceComplete(getPlayer(), getNpc());
    }

    @Override
    public void forceCompleteQuest(int id) {
        MapleQuest.getInstance(id).forceComplete(getPlayer(), getNpc());
    }

    public String getQuestCustomData() {
        return c.getPlayer().getQuestNAdd(MapleQuest.getInstance(questid)).getCustomData();
    }

    public void setQuestCustomData(String customData) {
        getPlayer().getQuestNAdd(MapleQuest.getInstance(questid)).setCustomData(customData);
    }

    public int getMeso() {
        return getPlayer().getMeso();
    }

    public void gainAp(final int amount) {
        c.getPlayer().gainAp((short) amount);
    }

    public void expandInventory(byte type, int amt) {
        c.getPlayer().expandInventory(type, amt);
    }

    public void unequipEverything() {
        MapleInventory equipped = getPlayer().getInventory(MapleInventoryType.EQUIPPED);
        MapleInventory equip = getPlayer().getInventory(MapleInventoryType.EQUIP);
        List<Short> ids = new LinkedList<>();
        for (IItem item : equipped.list()) {
            ids.add(item.getPosition());
        }
        for (short id : ids) {
            MapleInventoryManipulator.unequip(getC(), id, equip.getNextFreeSlot());
        }
    }

    public final void clearSkills() {
        Map<ISkill, SkillEntry> skills = getPlayer().getSkills();
        for (Entry<ISkill, SkillEntry> skill : skills.entrySet()) {
            getPlayer().changeSkillLevel(skill.getKey(), (byte) 0, (byte) 0);
        }
    }

    public boolean hasSkill(int skillid) {
        ISkill theSkill = SkillFactory.getSkill(skillid);
        if (theSkill != null) {
            return c.getPlayer().getSkillLevel(theSkill) > 0;
        }
        return false;
    }

    public void showEffect(boolean broadcast, String effect) {
        if (broadcast) {
            c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.showEffect(effect));
        } else {
            c.sendPacket(MaplePacketCreator.showEffect(effect));
        }
    }

    public void playSound(boolean broadcast, String sound) {
        if (broadcast) {
            c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.playSound(sound));
        } else {
            c.sendPacket(MaplePacketCreator.playSound(sound));
        }
    }

    public void environmentChange(boolean broadcast, String env) {
        if (broadcast) {
            c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.environmentChange(env, 2));
        } else {
            c.sendPacket(MaplePacketCreator.environmentChange(env, 2));
        }
    }

    public void updateBuddyCapacity(int capacity) {
        c.getPlayer().setBuddyCapacity((byte) capacity);
    }

    public int getBuddyCapacity() {
        return c.getPlayer().getBuddyCapacity();
    }

    public int partyMembersInMap() {
        int inMap = 0;
        for (MapleCharacter char2 : getPlayer().getMap().getCharactersThreadsafe()) {
            if (char2.getParty() == getPlayer().getParty()) {
                inMap++;
            }
        }
        return inMap;
    }

    public List<MapleCharacter> getPartyMembers() {
        if (getPlayer().getParty() == null) {
            return null;
        }
        List<MapleCharacter> chars = new LinkedList<>(); // creates an empty array full of shit..
        for (MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            for (ChannelServer channel : ChannelServer.getAllInstances()) {
                MapleCharacter ch = channel.getPlayerStorage().getCharacterById(chr.getId());
                if (ch != null) { // double check <3
                    chars.add(ch);
                }
            }
        }
        return chars;
    }

    public void warpPartyWithExp(int mapId, int exp) {
        MapleMap target = getMap(mapId);
        for (MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            MapleCharacter curChar = c.getChannelServer().getPlayerStorage().getCharacterByName(chr.getName());
            if ((curChar.getEventInstance() == null && getPlayer().getEventInstance() == null)
                    || curChar.getEventInstance() == getPlayer().getEventInstance()) {
                curChar.changeMap(target, target.getPortal(0));
                curChar.gainExp(exp, true, false, true);
            }
        }
    }

    public void warpPartyWithExpMeso(int mapId, int exp, int meso) {
        MapleMap target = getMap(mapId);
        for (MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            MapleCharacter curChar = c.getChannelServer().getPlayerStorage().getCharacterByName(chr.getName());
            if ((curChar.getEventInstance() == null && getPlayer().getEventInstance() == null)
                    || curChar.getEventInstance() == getPlayer().getEventInstance()) {
                curChar.changeMap(target, target.getPortal(0));
                curChar.gainExp(exp, true, false, true);
                curChar.gainMeso(meso, true);
            }
        }
    }

    public MapleSquad getSquad(String type) {
        return c.getChannelServer().getMapleSquad(type);
    }

    public int getSquadAvailability(String type) {
        final MapleSquad squad = c.getChannelServer().getMapleSquad(type);
        if (squad == null) {
            return -1;
        }
        return squad.getStatus();
    }

    public boolean registerSquad(String type, int minutes, String startText) {
        if (c.getChannelServer().getMapleSquad(type) == null) {
            final MapleSquad squad = new MapleSquad(c.getChannel(), type, c.getPlayer(), minutes * 60 * 1000,
                    startText);
            final boolean ret = c.getChannelServer().addMapleSquad(squad, type);
            if (ret) {
                final MapleMap map = c.getPlayer().getMap();

                map.broadcastMessage(MaplePacketCreator.getClock(minutes * 60));
                map.broadcastMessage(MaplePacketCreator.serverNotice(6, c.getPlayer().getName() + startText));
            } else {
                squad.clear();
            }
            return ret;
        }
        return false;
    }

    public boolean getSquadList(String type, byte type_) {
        final MapleSquad squad = c.getChannelServer().getMapleSquad(type);
        if (squad == null) {
            return false;
        }
        if (type_ == 0 || type_ == 3) { // Normal viewing
            sendNext(squad.getSquadMemberString(type_));
        } else if (type_ == 1) { // Squad Leader banning, Check out banned participant
            sendSimple(squad.getSquadMemberString(type_));
        } else if (type_ == 2) {
            if (squad.getBannedMemberSize() > 0) {
                sendSimple(squad.getSquadMemberString(type_));
            } else {
                sendNext(squad.getSquadMemberString(type_));
            }
        }
        return true;

    }

    public byte isSquadLeader(String type) {
        final MapleSquad squad = c.getChannelServer().getMapleSquad(type);
        if (squad == null) {
            return -1;
        } else if (squad.getLeader() != null && squad.getLeader().getId() == c.getPlayer().getId()) {
            return 1;
        } else {
            return 0;
        }
    }

    public boolean reAdd(String eim, String squad) {
        EventInstanceManager eimz = getDisconnected(eim);
        MapleSquad squadz = getSquad(squad);
        if (eimz != null && squadz != null) {
            squadz.reAddMember(getPlayer());
            eimz.registerPlayer(getPlayer());
            return true;
        }
        return false;
    }

    public void banMember(String type, int pos) {
        final MapleSquad squad = c.getChannelServer().getMapleSquad(type);
        if (squad != null) {
            squad.banMember(pos);
        }
    }

    public void acceptMember(String type, int pos) {
        final MapleSquad squad = c.getChannelServer().getMapleSquad(type);
        if (squad != null) {
            squad.acceptMember(pos);
        }
    }

    public String getReadableMillis(long startMillis, long endMillis) {
        return StringUtil.getReadableMillis(startMillis, endMillis);
    }

    public int addMember(String type, boolean join) {
        final MapleSquad squad = c.getChannelServer().getMapleSquad(type);
        if (squad != null) {
            return squad.addMember(c.getPlayer(), join);
        }
        return -1;
    }

    public byte isSquadMember(String type) {
        final MapleSquad squad = c.getChannelServer().getMapleSquad(type);
        if (squad == null) {
            return -1;
        } else if (squad.getMembers().contains(c.getPlayer().getName())) {
            return 1;
        } else if (squad.isBanned(c.getPlayer())) {
            return 2;
        } else {
            return 0;
        }
    }

    public void resetReactors() {
        getPlayer().getMap().resetReactors();
    }

    public void genericGuildMessage(int code) {
        c.sendPacket(MaplePacketCreator.genericGuildMessage((byte) code));
    }

    public void disbandGuild() {
        final int gid = c.getPlayer().getGuildId();
        if (gid <= 0 || c.getPlayer().getGuildRank() != 1) {
            return;
        }
        World.Guild.disbandGuild(gid);
    }

    public void increaseGuildCapacity() {
        if (c.getPlayer().getMeso() < 250000) {
            c.sendPacket(MaplePacketCreator.serverNotice(1, "You do not have enough mesos."));
            return;
        }
        final int gid = c.getPlayer().getGuildId();
        if (gid <= 0) {
            return;
        }
        World.Guild.increaseGuildCapacity(gid);
        c.getPlayer().gainMeso(-250000, true, false, true);
    }

    public void displayGuildRanks() {
        c.sendPacket(MaplePacketCreator.showGuildRanks(npc, MapleGuildRanking.getInstance().getGuildRank()));
    }

    public void showlvl() {
        c.sendPacket(MaplePacketCreator.showlevelRanks(npc, MapleGuildRanking.getInstance().getLevelRank()));
    }

    public void showmeso() {
        c.sendPacket(MaplePacketCreator.showmesoRanks(npc, MapleGuildRanking.getInstance().getMesoRank()));
    }

    public boolean removePlayerFromInstance() {
        if (c.getPlayer().getEventInstance() != null) {
            c.getPlayer().getEventInstance().removePlayer(c.getPlayer());
            return true;
        }
        return false;
    }

    public boolean isPlayerInstance() {
        return c.getPlayer().getEventInstance() != null;
    }

    public void changeStat(byte slot, int type, short amount) {
        Equip sel = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(slot);
        switch (type) {
            case 0:
                sel.setStr(amount);
                break;
            case 1:
                sel.setDex(amount);
                break;
            case 2:
                sel.setInt(amount);
                break;
            case 3:
                sel.setLuk(amount);
                break;
            case 4:
                sel.setHp(amount);
                break;
            case 5:
                sel.setMp(amount);
                break;
            case 6:
                sel.setWatk(amount);
                break;
            case 7:
                sel.setMatk(amount);
                break;
            case 8:
                sel.setWdef(amount);
                break;
            case 9:
                sel.setMdef(amount);
                break;
            case 10:
                sel.setAcc(amount);
                break;
            case 11:
                sel.setAvoid(amount);
                break;
            case 12:
                sel.setHands(amount);
                break;
            case 13:
                sel.setSpeed(amount);
                break;
            case 14:
                sel.setJump(amount);
                break;
            case 15:
                sel.setUpgradeSlots((byte) amount);
                break;
            case 16:
                sel.setViciousHammer((byte) amount);
                break;
            case 17:
                sel.setLevel((byte) amount);
                break;
            case 18:
                sel.setEnhance((byte) amount);
                break;
            case 19:
                sel.setPotential1(amount);
                break;
            case 20:
                sel.setPotential2(amount);
                break;
            case 21:
                sel.setPotential3(amount);
                break;
            case 22:
                sel.setOwner(getText());
                break;
            default:
                break;
        }
        c.getPlayer().equipChanged();
    }

    public void cleardrops() {
        MapleMonsterInformationProvider.getInstance().clearDrops();
    }

    public void killAllMonsters() {
        MapleMap map = c.getPlayer().getMap();
        double range = Double.POSITIVE_INFINITY;
        MapleMonster mob;
        for (MapleMapObject monstermo : map.getMapObjectsInRange(c.getPlayer().getPosition(), range,
                Arrays.asList(MapleMapObjectType.MONSTER))) {
            mob = (MapleMonster) monstermo;
            if (mob.getStats().isBoss()) {
                map.killMonster(mob, c.getPlayer(), false, false, (byte) 1);
            }
        }
        /*
         * int mapid = c.getPlayer().getMapId();
         * MapleMap map = c.getChannelServer().getMapFactory().getMap(mapid);
         * map.killAllMonsters(true); // No drop.
         */
    }

    public void giveMerchantMesos() {
        long mesos = 0;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = (PreparedStatement) con
                    .prepareStatement("SELECT mesos FROM hiredmerchants WHERE merchantid = ?");
            ps.setInt(1, getPlayer().getId());
            ResultSet rs = ps.executeQuery();
            if (!rs.next()) {
                rs.close();
                ps.close();
            } else {
                mesos = rs.getLong("mesos");
            }
            rs.close();
            ps.close();

            ps = (PreparedStatement) con.prepareStatement("UPDATE hiredmerchants SET mesos = 0 WHERE merchantid = ?");
            ps.setInt(1, getPlayer().getId());
            ps.executeUpdate();
            ps.close();

        } catch (SQLException ex) {
            System.err.println("Error gaining mesos in hired merchant" + ex);
            FileoutputUtil.outError("logs/???????????????.txt", ex);
        }
        c.getPlayer().gainMeso((int) mesos, true);
    }

    public void dc() {
        MapleCharacter victim = getChannelServer().getPlayerStorage().getCharacterByName(getPlayer().getName());
        victim.getClient().getSession().close();
        victim.getClient().disconnect(true, false);
    }

    public long getMerchantMesos() {
        long mesos = 0;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection();
                PreparedStatement ps = (PreparedStatement) con
                        .prepareStatement("SELECT mesos FROM hiredmerchants WHERE merchantid = ?")) {
            ps.setInt(1, getPlayer().getId());
            try (ResultSet rs = ps.executeQuery()) {
                if (!rs.next()) {
                    rs.close();
                    ps.close();
                } else {
                    mesos = rs.getLong("mesos");
                }
            }
        } catch (SQLException ex) {
            System.err.println("Error gaining mesos in hired merchant" + ex);
            FileoutputUtil.outError("logs/???????????????.txt", ex);
        }
        return mesos;
    }

    public void openDuey() {
        c.getPlayer().setConversation(2);
        c.sendPacket(MaplePacketCreator.sendDuey((byte) 9, null));
    }

    public void openMerchantItemStore() {
        if (!World.isShutDown) {
            c.getPlayer().setConversation(3);
            c.sendPacket(PlayerShopPacket.merchItemStore((byte) 0x22));
        } else {
            c.getPlayer().dropMessage(1, "???????????????????????????????????????");
            c.sendPacket(MaplePacketCreator.enableActions());
        }
    }

    public void sendRepairWindow() {
        c.sendPacket(MaplePacketCreator.sendRepairWindow(npc));
    }

    public final int getDojoPoints() {
        return c.getPlayer().getDojo();
    }

    public void setDojoPoints(int point) {
        c.getPlayer().setDojo(c.getPlayer().getDojo() + point);
    }

    public final int getDojoRecord() {
        return c.getPlayer().getDojoRecord();
    }

    public void setDojoRecord(final boolean reset) {
        c.getPlayer().setDojoRecord(reset);
    }

    public boolean start_DojoAgent(final boolean dojo, final boolean party) {
        if (dojo) {
            return Event_DojoAgent.warpStartDojo(c.getPlayer(), party);
        }
        return Event_DojoAgent.warpStartAgent(c.getPlayer(), party);
    }

    public boolean start_PyramidSubway(final int pyramid) {
        if (pyramid >= 0) {
            return Event_PyramidSubway.warpStartPyramid(c.getPlayer(), pyramid);
        }
        return Event_PyramidSubway.warpStartSubway(c.getPlayer());
    }

    public boolean bonus_PyramidSubway(final int pyramid) {
        Calendar cal = Calendar.getInstance();
        cal.get(Calendar.HOUR_OF_DAY);
        cal.get(Calendar.MINUTE);
        if (pyramid >= 0) {
            return Event_PyramidSubway.warpBonusPyramid(c.getPlayer(), pyramid);
        }
        return Event_PyramidSubway.warpBonusSubway(c.getPlayer());
    }

    public final short getKegs() {
        return AramiaFireWorks.getInstance().getKegsPercentage();
    }

    public void giveKegs(final int kegs) {
        AramiaFireWorks.getInstance().giveKegs(c.getPlayer(), kegs);
    }

    public final short getSunshines() {
        return AramiaFireWorks.getInstance().getSunsPercentage();
    }

    public void addSunshines(final int kegs) {
        AramiaFireWorks.getInstance().giveSuns(c.getPlayer(), kegs);
    }

    public final short getDecorations() {
        return AramiaFireWorks.getInstance().getDecsPercentage();
    }

    public void addDecorations(final int kegs) {
        try {
            AramiaFireWorks.getInstance().giveDecs(c.getPlayer(), kegs);
        } catch (Exception e) {
        }
    }

    public final MapleInventory getInventory(int type) {
        return c.getPlayer().getInventory(MapleInventoryType.getByType((byte) type));
    }

    public final MapleCarnivalParty getCarnivalParty() {
        return c.getPlayer().getCarnivalParty();
    }

    public final MapleCarnivalChallenge getNextCarnivalRequest() {
        return c.getPlayer().getNextCarnivalRequest();
    }

    public final MapleCarnivalChallenge getCarnivalChallenge(MapleCharacter chr) {
        return new MapleCarnivalChallenge(chr);
    }

    public void maxStats() {
        Map<MapleStat, Integer> statup = new EnumMap<>(MapleStat.class);
        c.getPlayer().getStat().setStr((short) 32767);
        c.getPlayer().getStat().setDex((short) 32767);
        c.getPlayer().getStat().setInt((short) 32767);
        c.getPlayer().getStat().setLuk((short) 32767);

        c.getPlayer().getStat().setMaxHp((short) 30000);
        c.getPlayer().getStat().setMaxMp((short) 30000);
        c.getPlayer().getStat().setHp((short) 30000);
        c.getPlayer().getStat().setMp((short) 30000);

        statup.put(MapleStat.STR, 32767);
        statup.put(MapleStat.DEX, 32767);
        statup.put(MapleStat.LUK, 32767);
        statup.put(MapleStat.INT, 32767);
        statup.put(MapleStat.HP, 30000);
        statup.put(MapleStat.MAXHP, 30000);
        statup.put(MapleStat.MP, 30000);
        statup.put(MapleStat.MAXMP, 30000);

        c.sendPacket(MaplePacketCreator.updatePlayerStats(statup, c.getPlayer()));
    }

    public Pair<String, Map<Integer, String>> getSpeedRun(String typ) {
        final SpeedRunType stype = SpeedRunType.valueOf(typ);
        if (SpeedRunner.getInstance().getSpeedRunData(stype) != null) {
            return SpeedRunner.getInstance().getSpeedRunData(stype);
        }
        return new Pair<>("", new HashMap<>());
    }

    public boolean getSR(Pair<String, Map<Integer, String>> ma, int sel) {
        if (ma.getRight().get(sel) == null || ma.getRight().get(sel).length() <= 0) {
            dispose();
            return false;
        }
        sendOk(ma.getRight().get(sel));
        return true;
    }

    public Equip getEquip(int itemid) {
        return (Equip) MapleItemInformationProvider.getInstance().getEquipById(itemid);
    }

    public void setExpiration(Object statsSel, long expire) {
        if (statsSel instanceof Equip) {
            ((Equip) statsSel).setExpiration(System.currentTimeMillis() + (expire * 24 * 60 * 60 * 1000));
        }
    }

    public void setLock(Object statsSel) {
        if (statsSel instanceof Equip) {
            Equip eq = (Equip) statsSel;
            if (eq.getExpiration() == -1) {
                eq.setFlag((byte) (eq.getFlag() | ItemFlag.LOCK.getValue()));
            } else {
                eq.setFlag((byte) (eq.getFlag() | ItemFlag.UNTRADEABLE.getValue()));
            }
        }
    }

    public boolean addFromDrop(Object statsSel) {
        if (statsSel instanceof IItem) {
            final IItem it = (IItem) statsSel;
            return MapleInventoryManipulator.checkSpace(getClient(), it.getItemId(), it.getQuantity(), it.getOwner())
                    && MapleInventoryManipulator.addFromDrop(getClient(), it, false);
        }
        return false;
    }

    public boolean replaceItem(int slot, int invType, Object statsSel, int offset, String type) {
        return replaceItem(slot, invType, statsSel, offset, type, false);
    }

    public boolean replaceItem(int slot, int invType, Object statsSel, int offset, String type, boolean takeSlot) {
        MapleInventoryType inv = MapleInventoryType.getByType((byte) invType);
        if (inv == null) {
            return false;
        }
        IItem item = getPlayer().getInventory(inv).getItem((byte) slot);
        if (item == null || statsSel instanceof IItem) {
            item = (IItem) statsSel;
        }
        if (offset > 0) {
            if (inv != MapleInventoryType.EQUIP) {
                return false;
            }
            Equip eq = (Equip) item;
            if (takeSlot) {
                if (eq.getUpgradeSlots() < 1) {
                    return false;
                } else {
                    eq.setUpgradeSlots((byte) (eq.getUpgradeSlots() - 1));
                }
            }
            if (type.equalsIgnoreCase("Slots")) {
                eq.setUpgradeSlots((byte) (eq.getUpgradeSlots() + offset));
            } else if (type.equalsIgnoreCase("Level")) {
                eq.setLevel((byte) (eq.getLevel() + offset));
            } else if (type.equalsIgnoreCase("Hammer")) {
                eq.setViciousHammer((byte) (eq.getViciousHammer() + offset));
            } else if (type.equalsIgnoreCase("STR")) {
                eq.setStr((short) (eq.getStr() + offset));
            } else if (type.equalsIgnoreCase("DEX")) {
                eq.setDex((short) (eq.getDex() + offset));
            } else if (type.equalsIgnoreCase("INT")) {
                eq.setInt((short) (eq.getInt() + offset));
            } else if (type.equalsIgnoreCase("LUK")) {
                eq.setLuk((short) (eq.getLuk() + offset));
            } else if (type.equalsIgnoreCase("HP")) {
                eq.setHp((short) (eq.getHp() + offset));
            } else if (type.equalsIgnoreCase("MP")) {
                eq.setMp((short) (eq.getMp() + offset));
            } else if (type.equalsIgnoreCase("WATK")) {
                eq.setWatk((short) (eq.getWatk() + offset));
            } else if (type.equalsIgnoreCase("MATK")) {
                eq.setMatk((short) (eq.getMatk() + offset));
            } else if (type.equalsIgnoreCase("WDEF")) {
                eq.setWdef((short) (eq.getWdef() + offset));
            } else if (type.equalsIgnoreCase("MDEF")) {
                eq.setMdef((short) (eq.getMdef() + offset));
            } else if (type.equalsIgnoreCase("ACC")) {
                eq.setAcc((short) (eq.getAcc() + offset));
            } else if (type.equalsIgnoreCase("Avoid")) {
                eq.setAvoid((short) (eq.getAvoid() + offset));
            } else if (type.equalsIgnoreCase("Hands")) {
                eq.setHands((short) (eq.getHands() + offset));
            } else if (type.equalsIgnoreCase("Speed")) {
                eq.setSpeed((short) (eq.getSpeed() + offset));
            } else if (type.equalsIgnoreCase("Jump")) {
                eq.setJump((short) (eq.getJump() + offset));
            } else if (type.equalsIgnoreCase("ItemEXP")) {
                eq.setItemEXP(eq.getItemEXP() + offset);
            } else if (type.equalsIgnoreCase("Expiration")) {
                eq.setExpiration((long) (eq.getExpiration() + offset));
            } else if (type.equalsIgnoreCase("Flag")) {
                eq.setFlag((byte) (eq.getFlag() + offset));
            }
            if (eq.getExpiration() == -1) {
                eq.setFlag((byte) (eq.getFlag() | ItemFlag.LOCK.getValue()));
            } else {
                eq.setFlag((byte) (eq.getFlag() | ItemFlag.UNTRADEABLE.getValue()));
            }
            item = eq.copy();
        }
        MapleInventoryManipulator.removeFromSlot(getClient(), inv, (short) slot, item.getQuantity(), false);
        return MapleInventoryManipulator.addFromDrop(getClient(), item, false);
    }

    public boolean replaceItem(int slot, int invType, Object statsSel, int upgradeSlots) {
        return replaceItem(slot, invType, statsSel, upgradeSlots, "Slots");
    }

    public boolean isCash(final int itemId) {
        return MapleItemInformationProvider.getInstance().isCash(itemId);
    }

    public void buffGuild(final int buff, final int duration, final String msg) {
        MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        if (ii.getItemEffect(buff) != null && getPlayer().getGuildId() > 0) {
            final MapleStatEffect mse = ii.getItemEffect(buff);
            for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                for (MapleCharacter chr : cserv.getPlayerStorage().getAllCharactersThreadSafe()) {
                    if (chr.getGuildId() == getPlayer().getGuildId()) {
                        mse.applyTo(chr, chr, true, null, duration);
                        chr.dropMessage(5, "Your guild has gotten a " + msg + " buff.");
                    }
                }
            }
        }
    }

    public boolean createAlliance(String alliancename) {
        MapleParty pt = c.getPlayer().getParty();
        MapleCharacter otherChar = c.getChannelServer().getPlayerStorage()
                .getCharacterById(pt.getMemberByIndex(1).getId());
        if (otherChar == null || otherChar.getId() == c.getPlayer().getId()) {
            return false;
        }
        try {
            return World.Alliance.createAlliance(alliancename, c.getPlayer().getId(), otherChar.getId(),
                    c.getPlayer().getGuildId(), otherChar.getGuildId());
        } catch (Exception re) {
            return false;
        }
    }

    public boolean addCapacityToAlliance() {
        try {
            final MapleGuild gs = World.Guild.getGuild(c.getPlayer().getGuildId());
            if (gs != null && c.getPlayer().getGuildRank() == 1 && c.getPlayer().getAllianceRank() == 1) {
                if (World.Alliance.getAllianceLeader(gs.getAllianceId()) == c.getPlayer().getId()
                        && World.Alliance.changeAllianceCapacity(gs.getAllianceId())) {
                    gainMeso(-MapleGuildAlliance.CHANGE_CAPACITY_COST);
                    return true;
                }
            }
        } catch (Exception re) {
        }
        return false;
    }

    public boolean disbandAlliance() {
        try {
            final MapleGuild gs = World.Guild.getGuild(c.getPlayer().getGuildId());
            if (gs != null && c.getPlayer().getGuildRank() == 1 && c.getPlayer().getAllianceRank() == 1) {
                if (World.Alliance.getAllianceLeader(gs.getAllianceId()) == c.getPlayer().getId()
                        && World.Alliance.disbandAlliance(gs.getAllianceId())) {
                    return true;
                }
            }
        } catch (Exception re) {
        }
        return false;
    }

    public byte getLastMsg() {
        return lastMsg;
    }

    public final void setLastMsg(final byte last) {
        this.lastMsg = last;
    }

    public void setPartyBossLog(String bossid) {
        MapleParty party = getPlayer().getParty();
        for (MaplePartyCharacter pc : party.getMembers()) {
            MapleCharacter chr = World.getStorage(this.getChannelNumber()).getCharacterById(pc.getId());
            if (chr != null) {
                chr.setBossLog(bossid);
            }
        }
    }

    /*
     * ?????????BOSSLOG
     */
    public final void givePartyBossLogCopy(String bossid) {
        if (getPlayer().getParty() == null || getPlayer().getParty().getMembers().size() == 1) {
            setBossLog(bossid);
            return;
        }
        Collection<MaplePartyCharacter> members = getPlayer().getParty().getMembers();

        for (final MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            final MapleCharacter curChar = getMap().getCharacterById(chr.getId());
            if (curChar != null) {
                getBosslogManager().setBossLog(bossid, curChar);
            }
        }
    }

    /*
     * ????????????BOSSLOG
     */
    public int checkPartyBossLogCopy(String bossid, int b) {
        int a = 0;
        for (final MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            final MapleCharacter curChar = getMap().getCharacterById(chr.getId());
            if (curChar != null) {
                if (getBosslogManager().getBossLog(bossid, curChar) >= b) {
                    a = 1;
                    break;
                }
            }
        }
        return a;
    }

    /*
     * ??????????????????
     */
    public List<String> checkPartyItems(final int id, final short quantity) {
        List<String> list = new ArrayList<>();
        for (final MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            final MapleCharacter curChar = getMap().getCharacterById(chr.getId());
            if (curChar != null) {
                if (!curChar.haveItem(id, quantity)) {
                    list.add(curChar.getName());
                }
            }
        }
        if (list.isEmpty()) {
            return null;
        } else {
            return list;
        }

    }

    /*
     * ????????????????????????????????????BOSS??????
     * bossid ??????BOSS???????????????
     * type 0 = 0????????? ??????0?????????
     * count ???????????????
     * checkMap ???????????????????????????
     */
    public void setPartyBossLogCopy(String bossid) {
        setPartyBossLogCopy(bossid, 0);
    }

    public void setPartyBossLogCopy(String bossid, int type) {
        setPartyBossLogCopy(bossid, type, 1);
    }

    public void setPartyBossLogCopy(String bossid, int type, int count) {
        if (getPlayer().getParty() == null || getPlayer().getParty().getMembers().size() == 1) {
            getBosslogManager().setBossLog(bossid, type, count, getPlayer());
            return;
        }
        int cMap = getPlayer().getMapId();
        for (MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
            MapleCharacter curChar = getPlayer().getMap().getCharacterById(chr.getId());
            if (curChar != null && curChar.getMapId() == cMap) {
                getBosslogManager().setBossLog(bossid, type, count, curChar);
            }
        }
    }

    public final void maxAllSkills() {
        for (ISkill skil : SkillFactory.getAllSkills()) {
            if (GameConstants.isApplicableSkill(skil.getId())) { // no db/additionals/resistance skills
                teachSkill(skil.getId(), skil.getMaxLevel(), skil.getMaxLevel());
            }
        }
    }

    public final void resetStats(int str, int dex, int z, int luk) {
        c.getPlayer().resetStats(str, dex, z, luk);
    }

    public final boolean dropItem(int slot, int invType, int quantity) {
        MapleInventoryType inv = MapleInventoryType.getByType((byte) invType);
        if (inv == null) {
            return false;
        }
        return MapleInventoryManipulator.drop(c, inv, (short) slot, (short) quantity, true);
    }

    public final List<Integer> getAllPotentialInfo() {
        return new ArrayList<>(MapleItemInformationProvider.getInstance().getAllPotentialInfo().keySet());
    }

    public final String getPotentialInfo(final int id) {
        final List<StructPotentialItem> potInfo = MapleItemInformationProvider.getInstance().getPotentialInfo(id);
        final StringBuilder builder = new StringBuilder("#b#ePOTENTIAL INFO FOR ID: ");
        builder.append(id);
        builder.append("#n#k\r\n\r\n");
        int minLevel = 1, maxLevel = 10;
        for (StructPotentialItem item : potInfo) {
            builder.append("#eLevels ");
            builder.append(minLevel);
            builder.append("~");
            builder.append(maxLevel);
            builder.append(": #n");
            builder.append(item.toString());
            minLevel += 10;
            maxLevel += 10;
            builder.append("\r\n");
        }
        return builder.toString();
    }

    public final void sendRPS() {
        c.sendPacket(MaplePacketCreator.getRPSMode((byte) 8, -1, -1, -1));
    }

    public final void setQuestRecord(Object ch, final int questid, final String data) {
        ((MapleCharacter) ch).getQuestNAdd(MapleQuest.getInstance(questid)).setCustomData(data);
    }

    public final void doWeddingEffect(final Object ch) {
        final MapleCharacter chr = (MapleCharacter) ch;
        getMap().broadcastMessage(MaplePacketCreator.yellowChat(chr.getName() + ", ??????????????? " + getPlayer().getName()
                + " ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"));
        CloneTimer.getInstance().schedule(new Runnable() {

            @Override
            public void run() {
                if (chr == null || getPlayer() == null) {
                    warpMap(680000500, 0);
                } else {
                    getMap().broadcastMessage(MaplePacketCreator.yellowChat(getPlayer().getName() + ", ????????????????????? "
                            + chr.getName() + " ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"));
                }
            }
        }, 10000);
        CloneTimer.getInstance().schedule(new Runnable() {

            @Override
            public void run() {
                if (chr == null || getPlayer() == null) {
                    if (getPlayer() != null) {
                        setQuestRecord(getPlayer(), 160001, "3");
                        setQuestRecord(getPlayer(), 160002, "0");
                    } else if (chr != null) {
                        setQuestRecord(chr, 160001, "3");
                        setQuestRecord(chr, 160002, "0");
                    }
                    warpMap(680000500, 0);
                } else {
                    setQuestRecord(getPlayer(), 160001, "2");
                    setQuestRecord(chr, 160001, "2");
                    sendNPCText(getPlayer().getName() + " ??? " + chr.getName() + "??? ????????????????????????????????????????????????????????????", 9201002);
                    getMap().startExtendedMapEffect("??????????????????????????? " + getPlayer().getName() + "???", 5120006);
                    if (chr.getGuildId() > 0) {
                        World.Guild.guildPacket(chr.getGuildId(),
                                MaplePacketCreator.sendMarriage(false, chr.getName()));
                    }
                    if (chr.getFamilyId() > 0) {
                        World.Family.familyPacket(chr.getFamilyId(),
                                MaplePacketCreator.sendMarriage(true, chr.getName()), chr.getId());
                    }
                    if (getPlayer().getGuildId() > 0) {
                        World.Guild.guildPacket(getPlayer().getGuildId(),
                                MaplePacketCreator.sendMarriage(false, getPlayer().getName()));
                    }
                    if (getPlayer().getFamilyId() > 0) {
                        World.Family.familyPacket(getPlayer().getFamilyId(),
                                MaplePacketCreator.sendMarriage(true, chr.getName()), getPlayer().getId());
                    }
                }
            }
        }, 20000); // 10 sec 10 sec
    }

    public void ???????????????(int type) {
        c.sendPacket(MaplePacketCreator.openBeans(getPlayer().getBeans(), type));
    }

    public void worldMessage(String text) {
        World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(6, text));
    }

    public int getBeans() {
        return getClient().getPlayer().getBeans();
    }

    public void warpBack(int mid, final int retmap, final int time) { // ????????????

        MapleMap warpMap = c.getChannelServer().getMapFactory().getMap(mid);
        c.getPlayer().changeMap(warpMap, warpMap.getPortal(0));
        c.sendPacket(MaplePacketCreator.getClock(time));
        Timer.EventTimer.getInstance().schedule(new Runnable() {
            @Override
            public void run() {
                MapleMap warpMap = c.getChannelServer().getMapFactory().getMap(retmap);
                if (c.getPlayer() != null) {
                    c.sendPacket(MaplePacketCreator.stopClock());
                    c.getPlayer().changeMap(warpMap, warpMap.getPortal(0));
                    c.getPlayer().dropMessage(6, "????????????????????????!");
                }
            }
        }, 1000 * time); // ????????????, (1 ??? = 1000)
    }

    public void ChangeName(String name) {
        getPlayer().setName(name);
        save();
        getPlayer().fakeRelog();
    }

    public String searchData(int type, String search) {
        return SearchGenerator.searchData(type, search);
    }

    public int[] getSearchData(int type, String search) {
        Map<Integer, String> data = SearchGenerator.getSearchData(type, search);
        if (data.isEmpty()) {
            return null;
        }
        int[] searches = new int[data.size()];
        int i = 0;
        for (int key : data.keySet()) {
            searches[i] = key;
            i++;
        }
        return searches;
    }

    public boolean foundData(int type, String search) {
        return SearchGenerator.foundData(type, search);
    }

    public boolean ReceiveMedal() {
        int acid = getPlayer().getAccountID();
        int id = getPlayer().getId();
        String name = getPlayer().getName();
        MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        int item = 1142475;
        if (!getPlayer().canHold(item)) {
            return false;
        } else if (getPlayer().haveItem(item)) {
            return false;
        }

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT id FROM RCmedals WHERE name = ?");
            ps.setString(1, name);
            ResultSet rs = ps.executeQuery();
            if (!rs.first()) {// ??????????????????????????????
                return false;
            }
            ps.close();
            rs.close();
            ps = con.prepareStatement("Update RCmedals set amount = ? Where id = ?");
            ps.setInt(1, 0);
            ps.setInt(2, id);
            ps.execute();
            ps.close();
        } catch (Exception ex) {
            FilePrinter.printError("NPCConversationManager.txt", ex, "ReceiveMedal(" + name + ")");
            FileoutputUtil.outError("logs/???????????????.txt", ex);
        }
        IItem toDrop = ii.randomizeStats((Equip) ii.getEquipById(item));
        toDrop.setGMLog(getPlayer().getName() + " ????????????");
        MapleInventoryManipulator.addbyItem(c, toDrop);
        FileoutputUtil.logToFile("logs/Data/NPC????????????.txt",
                "\r\n " + FileoutputUtil.NowTime() + " IP: " + c.getSession().remoteAddress().toString().split(":")[0]
                        + " ??????: " + c.getAccountName() + " ??????: " + c.getPlayer().getName() + " ?????????RC??????");
        return true;
    }

    public String ShowJobRank(int type) {
        StringBuilder sb = new StringBuilder();
        List<MapleGuildRanking.JobRankingInfo> Ranking = MapleGuildRanking.getInstance().getJobRank(type);
        if (Ranking != null) {
            int num = 0;
            for (MapleGuildRanking.JobRankingInfo info : Ranking) {
                num++;
                sb.append("#n#e#k??????:#r ");
                sb.append(num);
                sb.append("\r\n#n#e#k????????????:#d ");
                sb.append(StringUtil.getRightPaddedStr(info.getName(), ' ', 13));
                sb.append("\r\n#n#e#k??????:#e#r ");
                sb.append(StringUtil.getRightPaddedStr(String.valueOf(info.getLevel()), ' ', 3));
                sb.append("\r\n#n#e#k??????:#e#b ");
                sb.append(MapleJob.getName(MapleJob.getById(info.getJob())));
                sb.append("\r\n#n#e#k??????:#e#d ");
                sb.append(StringUtil.getRightPaddedStr(String.valueOf(info.getStr()), ' ', 4));
                sb.append("\r\n#n#e#k??????:#e#d ");
                sb.append(StringUtil.getRightPaddedStr(String.valueOf(info.getDex()), ' ', 4));
                sb.append("\r\n#n#e#k??????:#e#d ");
                sb.append(StringUtil.getRightPaddedStr(String.valueOf(info.getInt()), ' ', 4));
                sb.append("\r\n#n#e#k??????:#e#d ");
                sb.append(StringUtil.getRightPaddedStr(String.valueOf(info.getLuk()), ' ', 4));
                sb.append("\r\n");
                sb.append("#n#k======================================================\r\n");
            }
        } else {
            sb.append("#r????????????????????????");
        }
        return sb.toString();
    }

    public static boolean hairExists(int hair) {
        return MapleItemInformationProvider.hairList.containsKey(hair);
    }

    public int[] getCanHair(int[] hairs) {
        List<Integer> canHair = new ArrayList();
        List<Integer> cantHair = new ArrayList();
        for (int hair : hairs) {
            if (hairExists(hair)) {
                canHair.add(hair);
            } else {
                cantHair.add(hair);
            }
        }
        if (cantHair.size() > 0 && c.getPlayer().isAdmin()) {
            StringBuilder sb = new StringBuilder("???????????????????????????");
            sb.append(cantHair.size()).append("??????????????????????????????????????????????????????");
            for (int i = 0; i < cantHair.size(); i++) {
                sb.append(cantHair.get(i));
                if (i < cantHair.size() - 1) {
                    sb.append(",");
                }
            }
            playerMessage(sb.toString());
        }
        int[] getHair = new int[canHair.size()];
        for (int i = 0; i < canHair.size(); i++) {
            getHair[i] = canHair.get(i);
        }
        return getHair;
    }

    public static boolean faceExists(int face) {
        return MapleItemInformationProvider.faceLists.containsKey(face);
    }

    public int[] getCanFace(int[] faces) {
        List<Integer> canFace = new ArrayList();
        List<Integer> cantFace = new ArrayList();
        for (int face : faces) {
            if (faceExists(face)) {
                canFace.add(face);
            } else {
                cantFace.add(face);
            }
        }
        if (cantFace.size() > 0 && c.getPlayer().isAdmin()) {
            StringBuilder sb = new StringBuilder("???????????????????????????");
            sb.append(cantFace.size()).append("??????????????????????????????????????????????????????");
            for (int i = 0; i < cantFace.size(); i++) {
                sb.append(cantFace.get(i));
                if (i < cantFace.size() - 1) {
                    sb.append(",");
                }
            }
            playerMessage(sb.toString());
        }
        int[] getFace = new int[canFace.size()];
        for (int i = 0; i < canFace.size(); i++) {
            getFace[i] = canFace.get(i);
        }
        return getFace;
    }

    public String checkDrop(int mobId) {
        final List<MonsterDropEntry> ranks = MapleMonsterInformationProvider.getInstance().retrieveDrop(mobId);
        if (ranks != null && ranks.size() > 0) {
            int num = 0, itemId = 0, ch = 0;
            MonsterDropEntry de;
            StringBuilder name = new StringBuilder();
            for (int i = 0; i < ranks.size(); i++) {
                de = ranks.get(i);
                if (de.chance > 0 && (de.questid <= 0
                        || (de.questid > 0 && MapleQuest.getInstance(de.questid).getName().length() > 0))) {
                    itemId = de.itemId;
                    if (num == 0) {
                        name.append("???????????? #o" + mobId + "# ????????????:\r\n");
                        name.append("--------------------------------------\r\n");
                    }
                    String namez = "#z" + itemId + "#";
                    if (itemId == 0) { // meso
                        itemId = 4031041; // display sack of cash
                        namez = (de.Minimum * getClient().getChannelServer().getMesoRate()) + " ??? "
                                + (de.Maximum * getClient().getChannelServer().getMesoRate()) + " ??????";
                    }
                    ch = de.chance * getClient().getChannelServer().getDropRate();
                    name.append((num + 1) + ") #v" + itemId + "#"
                            + namez /*
                                     * + " - " + (Integer.valueOf(ch >= 999999 ? 1000000 : ch).doubleValue() /
                                     * 10000.0) + "% ????????? "
                                     */
                            + (de.questid > 0 && MapleQuest.getInstance(de.questid).getName().length() > 0
                                    ? ("?????????????????? " + MapleQuest.getInstance(de.questid).getName() + "")
                                    : "")
                            + "\r\n");
                    num++;
                }
            }
            if (name.length() > 0) {
                return name.toString();
            }

        }
        return "????????????????????????????????????";
    }

    public String checkDrop(MapleCharacter chr, int mobId, boolean GM) {
        MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        final List<MonsterDropEntry> ranks = MapleMonsterInformationProvider.getInstance().retrieveDrop(mobId);
        if (ranks != null && ranks.size() > 0) {
            int num = 0, itemId = 0, ch = 0;
            MonsterDropEntry de;
            StringBuilder name = new StringBuilder();
            StringBuilder error = new StringBuilder();
            name.append("???#r#o" + mobId + "##k???????????????????????????:#b" + "\r\n");
            for (int i = 0; i < ranks.size(); i++) {
                de = ranks.get(i);
                if (de.chance > 0 && (de.questid <= 0
                        || (de.questid > 0 && MapleQuest.getInstance(de.questid).getName().length() > 0))) {
                    itemId = de.itemId;
                    /*
                     * if (num == 0) {
                     * name.append("???#r#o"+ mobId + "##k?????????????????????:#b" +"\r\n");
                     * }
                     */
                    String namez = "#z" + itemId + "#";
                    if (itemId == 0) { // meso
                        itemId = 4031041; // display sack of cash
                        namez = (de.Minimum * getClient().getChannelServer().getMesoRate()) + " to "
                                + (de.Maximum * getClient().getChannelServer().getMesoRate()) + " #b??????#l#k";
                    } else if (itemId != 0 && ii.itemExists(itemId)) {
                        ch = de.chance * getClient().getChannelServer().getDropRate();
                        if (GM == false) {
                            name.append("#k" + (num + 1) + ": #v" + itemId + "# " + namez
                                    + ((chr.isGM()) ? "#d  ???????????????"
                                            + (Integer.valueOf(ch >= 999999 ? 1000000 : ch).doubleValue() / 10000.0)
                                            + "%\r\n" : "\r\n")
                                    + "#b(????????????:"
                                    + (de.questid > 0 && MapleQuest.getInstance(de.questid).getName().length() > 0
                                            ? ("??????????????????#r " + MapleQuest.getInstance(de.questid).getName() + " #b)\r\n")
                                            : "#r???#b)")
                                    + "\r\n");
                        } else {
                            name.append("#L" + itemId + "##k" + (num + 1) + ": #v" + itemId + "# " + namez
                                    + ((chr.isGM()) ? "#d  ???????????????"
                                            + (Integer.valueOf(ch >= 999999 ? 1000000 : ch).doubleValue() / 10000.0)
                                            + "%(????????????)\r\n" : "\r\n")
                                    + "#b(????????????:"
                                    + (de.questid > 0 && MapleQuest.getInstance(de.questid).getName().length() > 0
                                            ? ("??????????????????#r " + MapleQuest.getInstance(de.questid).getName() + " #b)\r\n")
                                            : "#r???#b)")
                                    + "\r\n");
                        }
                        // name.append("#k" + (num + 1) + ": #v" + itemId + "# " + namez + " #d"
                        // +"%\r\n#b(????????????:" + (de.questid > 0 &&
                        // MapleQuest.getInstance(de.questid).getName().length() > 0 ? ("??????????????????#r " +
                        // MapleQuest.getInstance(de.questid).getName() + " #b)\r\n") : "#r???#b)") +
                        // ((chr.isGM())?"???????????????" + (Integer.valueOf(ch >= 999999 ? 1000000 :
                        // ch).doubleValue() / 10000.0) +"\r\n":"\r\n"));

                        num++;
                    } else {
                        error.append(itemId + "\r\n");
                    }
                }
            }
            if (GM == true) {
                name.append("\r\n#L" + 10000 + "##k" + (num + 1) + ": #b??????????????????????????????!");
            }
            if (error.length() > 0) {
                chr.dropMessage(1, "???????????????ID:\r\n" + error.toString());
            }
            if (name.length() > 0) {
                return name.toString();
            }

        }
        return "????????????????????????????????????";
    }

    public void gainBeans(int s) {
        getPlayer().gainBeans(s);
        c.getSession().write(MaplePacketCreator.updateBeans(this.c.getPlayer()));
    }

    public void openBeans() {// ?????????????????????
        c.getSession().write(MaplePacketCreator.openBeans(getPlayer().getBeans(), 0));
        c.getPlayer().dropMessage(5, "?????????????????????????????????,?????????????????????????????????,????????????????????????????????????????????????????????????");
    }

    public void setMonsterRiding(int itemid) {// ?????????????????????????????????
        short src = getClient().getPlayer().haveItemPos(itemid);
        if (src == 100) {
            c.getPlayer().dropMessage(5, "????????????????????????");
        } else {
            MapleInventoryManipulator.equip(c, src, (short) -18);
            c.getPlayer().dropMessage(5, "?????????????????????");
        }
    }

    public int getRandom(int... args_all) {
        int args = args_all[Randomizer.nextInt(args_all.length)];
        return args;
    }

    public void OwlAdv(int point, int itemid) {
        owlse(this.c, point, itemid);
    }

    public static void owlse(MapleClient c, int point, int itemid) {
        int itemSearch = itemid;

        List<HiredMerchant> hms = new ArrayList<HiredMerchant>();
        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
            if (!cserv.searchMerchant(itemSearch).isEmpty()) {
                hms.addAll(cserv.searchMerchant(itemSearch));
            }
        }
        if (hms.size() > 0) {
            if (c.getPlayer().haveItem(5230000, 1)) {
                MapleInventoryManipulator.removeById(c, MapleInventoryType.CASH, 5230000, 1, true, false);
            } else if (c.getPlayer().getCSPoints(point) >= 5) {
                c.getPlayer().modifyCSPoints(point, -5, true);
            } else {
                c.getPlayer().dropMessage(1, "??????????????????????????????");
                if (NPCScriptManager.getInstance().getCM(c) != null) {
                    NPCScriptManager.getInstance().dispose(c);
                    c.sendPacket(MaplePacketCreator.enableActions());
                }
            }

            if (NPCScriptManager.getInstance().getCM(c) != null) {
                NPCScriptManager.getInstance().dispose(c);
            }
            c.sendPacket(MaplePacketCreator.getOwlSearched(itemSearch, hms));
        } else {
            if (NPCScriptManager.getInstance().getCM(c) != null) {
                NPCScriptManager.getInstance().dispose(c);
                c.sendPacket(MaplePacketCreator.enableActions());
            }
            c.getPlayer().dropMessage(1, "???????????????");
        }
    }

    public void checkMobs(MapleCharacter chr) {
        if (this.getMap().getAllMonstersThreadsafe().size() <= 0) {
            sendOk("#????????????????????????!!???");
            dispose();
        }
        String msg = "?????? #b" + chr.getName() + "#k ???????????????????????????:\r\n#r(????????????????????????,????????????BUG??????????????????????????????)\r\n#d";
        Iterator monster = getMap().getAllUniqueMonsters().iterator();
        while (monster.hasNext()) {
            Object monsterid = monster.next();
            // msg += "#L" + monsterid + "##o" + monsterid + "#" + ((chr.isGM()) ? " ??????:" +
            // monsterid + "#l\r\n" : "(??????)#l\r\n");
            msg += "#L" + monsterid + "##o" + monsterid + "#" + " ??????:" + monsterid + " (??????)#l\r\n";
        }
        sendOk(msg);
    }

    public void getMobs(int itemid) {
        MapleMonsterInformationProvider mi = MapleMonsterInformationProvider.getInstance();
        final List<Integer> mobs = MapleMonsterInformationProvider.getInstance().getMobByItem(itemid);
        String text = "#d???????????????????????????????????????#k: \r\n\r\n";

        for (int i = 0; i < mobs.size(); i++) {
            int quest = 0;
            if (mi.getDropQuest(mobs.get(i)) > 0) {
                quest = mi.getDropQuest(mobs.get(i));
            }
            int chance = mi.getDropChance(mobs.get(i)) * getClient().getChannelServer().getDropRate();

            text += "#r#o" + mobs.get(i) + "##k " /*
                                                   * + (Integer.valueOf(chance >= 999999 ? 1000000 :
                                                   * chance).doubleValue() / 10000.0) + "%"
                                                   */
                    + (quest > 0 && MapleQuest.getInstance(quest).getName().length() > 0
                            ? ("#b???????????? " + MapleQuest.getInstance(quest).getName() + " ???????????????#k")
                            : "")
                    + "\r\n";

        }
        sendNext(text);
    }

    public Gashapon getGashapon() {
        return GashaponFactory.getInstance().getGashaponByNpcId(this.getNpc());
    }

    public void getGachaponMega(String msg, Item item, int quantity) {
        World.Broadcast.broadcastGashponmega(MaplePacketCreator.getGachaponMega(c.getPlayer().getName(),
                " : x" + quantity + "???????????? " + c.getPlayer().getName() + " ???" + msg + "?????????", item, (byte) 1,
                c.getPlayer().getClient().getChannel()));
    }

    public void EnterCS(int mod) {
        c.getPlayer().setCsMod(mod);
        InterServerHandler.EnterCashShop(c, c.getPlayer(), false);
    }

    public int[] getSavedFaces() {
        return getPlayer().getSavedFaces();
    }

    public int getSavedFace(int sel) {
        return getPlayer().getSavedFace(sel);
    }

    public void setSavedFace(int sel, int id) {
        getPlayer().setSavedFace(sel, id);
    }

    public int[] getSavedHairs() {
        return getPlayer().getSavedHairs();
    }

    public int getSavedHair(int sel) {
        return getPlayer().getSavedHair(sel);
    }

    public void setSavedHair(int sel, int id) {
        getPlayer().setSavedHair(sel, id);
    }

    public void UpdateDropChance(int chance, int dropperid, int itemid) {
        MapleMonsterInformationProvider.getInstance().UpdateDropChance(chance, dropperid, itemid);
    }

    public void AddDropData(int chance, int dropperid, int itemid, int questid) {
        MapleMonsterInformationProvider.getInstance().AddDropData(chance, dropperid, itemid, questid);
    }

    public void DeleteDropData(int dropperid, int itemid) {
        MapleMonsterInformationProvider.getInstance().DeleteDropData(dropperid, itemid);
    }

    public List<Integer> ?????????(String name) {
        List<Integer> moblist = new ArrayList<>();
        Map<Integer, String> nameCache = MapleItemInformationProvider.getInstance().getNameCache();
        for (Integer key : nameCache.keySet()) {
            if (nameCache.get(key).contains(name)) {
                moblist.add(key);
            }
        }
        return moblist;
    }

    public void gainEquiPproperty(int upgr, int watk, int matk, int str, int dex, int Int, int luk, int hp, int mp,
            int acc, int avoid) {
        Equip item = (Equip) this.c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem((short) 1).copy();
        item.setUpgradeSlots((byte) (item.getUpgradeSlots() + upgr));
        item.setWatk((short) (item.getWatk() + watk));
        item.setMatk((short) (item.getMatk() + matk));
        item.setStr((short) (item.getStr() + str));
        item.setDex((short) (item.getDex() + dex));
        item.setInt((short) (item.getInt() + Int));
        item.setLuk((short) (item.getLuk() + luk));
        item.setHp((short) (item.getHp() + hp));
        item.setMp((short) (item.getMp() + mp));
        item.setAcc((short) (byte) (item.getAcc() + acc));
        item.setAvoid((short) (byte) (item.getAvoid() + avoid));
        MapleInventoryManipulator.removeFromSlot(getC(), MapleInventoryType.EQUIP, (short) 1, (short) 1, true);
        MapleInventoryManipulator.addFromDrop(getChar().getClient(), item, false);
    }

    // ??????????????????(???????????????)
    // ?????????????????????????????????
    public final boolean CheckMembersLevel(int lvl) {
        // ??????????????????????????????false
        if (getParty() == null) {
            return false;
        }
        // ??????????????????
        for (MaplePartyCharacter player : getParty().getMembers()) {
            // ??????:????????????????????????????????????
            if (player.getLevel() <= lvl) {
                continue;// ??????????????????,????????????,???????????????????????????
            }
            // ????????????????????????????????????false??????
            if (!isLeader()) {
                return false;
            }
        }
        return true;
    }

    public String getItemName(int id) {
        MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        return ii.getName(id);
    }

    /*
     * ?????????????????????????????????
     * ??????????????????????????????????????????????????????????????????
     */
    public boolean checkLevelAndItem(int minLevel, int maxLevel, int itemId) {
        return checkLevelAndItem(minLevel, maxLevel, itemId, 2);
    }

    public boolean checkLevelAndItem(int minLevel, int maxLevel, int itemId, int minSize) {
        MapleParty party = getPlayer().getParty();
        if (party == null || party.getLeader().getId() != getPlayer().getId()) {
            getPlayer().dropMessage(5, "??????????????? ?????? ????????????..");
            return false;
        }
        int partySize = party.getMembers().size();
        if (partySize < minSize) {
            getPlayer().dropMessage(5, "??????????????????????????? ?????? " + minSize + " ???????????????????????????????????????????????????: " + partySize);
            return false;
        }
        int chrSize = 0;
        for (MaplePartyCharacter partyPlayer : party.getMembers()) {
            MapleCharacter player = getPlayer().getMap().getCharacterById(partyPlayer.getId());
            if (player == null) {
                getPlayer().dropMessage(5, "?????????????????? " + partyPlayer.getName() + " ????????? ?????? ??????????????????.");
            } else if (player.getLevel() < minLevel || player.getLevel() > maxLevel) {
                getPlayer().dropMessage(5,
                        "?????????????????? " + partyPlayer.getName() + " ?????????????????????.????????????: Lv." + minLevel + "???" + maxLevel);
            } else if (!player.haveItem(itemId)) {
                getPlayer().dropMessage(5, "?????????????????? " + partyPlayer.getName() + " ???????????????????????????????????????.");
            } else {
                chrSize++;
            }
        }
        return partySize == chrSize;
    }

    /*
     * ????????????????????????ID?????????
     */
    public void deleteAll(int itemId) {
        MapleInventoryManipulator.removeAllById(getClient(), itemId, true);
    }

    public void ????????????() {
        c.getPlayer().saveToDB(true, true);
    }

    public short getSpace(byte type) {
        return getPlayer().getSpace(type);
    }

    public boolean haveSpace(int type) {
        return getPlayer().haveSpace(type);
    }

    public boolean haveSpaceForId(int itemid) {
        return getPlayer().haveSpaceForId(itemid);
    }

    public String getServerName() {
        return ServerConfig.SERVER_NAME;
    }

    public String serverName() {// ??????????????????
        return c.getChannelServer().getServerName();
    }

    public String ????????????() {// ??????????????????
        return c.getChannelServer().getServerName();
    }

    public void ??????????????????(String message) {
        for (ChannelServer cserv1 : ChannelServer.getAllInstances()) {
            for (MapleCharacter mch : cserv1.getPlayerStorage().getAllCharacters()) {
                c.sendPacket(UIPacket.getTopMsg(message));
            }
        }
    }

    public void ??????????????????(String message) {
        c.sendPacket(UIPacket.getTopMsg(message));
    }

    public int ????????????() {
        int data = 0;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement psu = con.prepareStatement("SELECT todayOnlineTime FROM characters WHERE id = ?");
            psu.setInt(1, c.getPlayer().getId());
            ResultSet rs = psu.executeQuery();
            if (rs.next()) {
                data = rs.getInt("todayOnlineTime");
            }
            rs.close();
            psu.close();

        } catch (SQLException ex) {
            System.err.println("?????????????????????????????????" + ex.getMessage());
        }

        return data;
    }

    public int ?????????() {
        int data = 0;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement psu = con.prepareStatement("SELECT totalOnlineTime FROM characters WHERE id = ?");
            psu.setInt(1, c.getPlayer().getId());
            ResultSet rs = psu.executeQuery();
            if (rs.next()) {
                data = rs.getInt("totalOnlineTime");
            }
            rs.close();
            psu.close();
        } catch (SQLException ex) {
            System.err.println("??????????????????????????????" + ex.getMessage());
        }

        return data;
    }

    public int ????????????() {
        int count = 0;
        for (ChannelServer chl : ChannelServer.getAllInstances()) {
            count += chl.getPlayerStorage().getAllCharacters().size();
        }
        return count;
    }

    private Point position = new Point();

    public void ??????() {
        MapleMap map = c.getPlayer().getMap();
        double range = Double.POSITIVE_INFINITY;
        MapleMonster mob;
        for (MapleMapObject monstermo : map.getMapObjectsInRange(c.getPlayer().getPosition(), range,
                Arrays.asList(MapleMapObjectType.MONSTER))) {
            mob = (MapleMonster) monstermo;
            map.killMonster(mob, c.getPlayer(), true, false, (byte) 1);
        }
    }

    public void ????????????() {
        c.getPlayer().saveToDB(false, false);
    }

    public void ??????ID() {
        c.getPlayer().getId();
    }

    public void ????????????() {
        try {
            for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                for (MapleCharacter chr : cserv.getPlayerStorage().getAllCharacters()) {
                    if (chr == null) {
                        continue;
                    }
                    chr.saveToDB(false, false);
                }
            }
        } catch (Exception e) {
        }
    }

    public void ?????????(final int action, final byte level, final byte masterlevel) {
        c.getPlayer().changeSkillLevel(SkillFactory.getSkill(action), level, masterlevel);
    }

    public void ???????????????(final int id, final int key, final int type, final int action, final byte level,
            final byte masterlevel) throws SQLException {
        // ???????????????
        c.getPlayer().changeSkillLevel(SkillFactory.getSkill(action), level, masterlevel);
        c.getPlayer().dropMessage(1, "<??????>\r\n5??????????????????????????????1????????????????????????");
        // ??????
        c.getPlayer().saveToDB(false, false);
        new Thread() {
            @Override
            public void run() {
                try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                    // 5????????????????????????
                    Thread.sleep(1000 * 5);
                    c.getPlayer().getClient().getSession().close();
                    // 10?????????????????????????????????
                    Thread.sleep(1000 * 10);
                    PreparedStatement ps = null;
                    ps = con.prepareStatement(
                            "INSERT INTO keymap (characterid, `key`, `type`, `action`) VALUES (?, ?, ?, ?)");
                    // ???ID
                    ps.setInt(1, id);
                    // ?????????
                    ps.setInt(2, key);
                    // ?????????
                    ps.setInt(3, type);
                    // ?????????
                    ps.setInt(4, action);
                    ps.execute();
                } catch (InterruptedException e) {
                } catch (SQLException ex) {
                    Logger.getLogger(NPCConversationManager.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
        }.start();
    }

    public void ????????????() {
        NPCScriptManager.getInstance().dispose(c);
    }

    public void ????????????(String text) {
        if (lastMsg > -1) {
            return;
        }
        if (text.contains("#L")) { // will dc otherwise!
            sendSimple(text);
            return;
        }
        c.sendPacket(MaplePacketCreator.getNPCTalk(npc, (byte) 0, text, "00 00", (byte) 0));
        lastMsg = 0;
    }

    public void ??????????????????(String text) {
        if (lastMsg > -1) {
            return;
        }
        if (text.contains("#L")) { // will dc otherwise!
            sendSimple(text);
            return;
        }
        c.sendPacket(MaplePacketCreator.getNPCTalk(npc, (byte) 1, text, "", (byte) 0));
        lastMsg = 1;
    }

    public final MapleInventory ?????????????????????() {// ????????????
        return c.getPlayer().getInventory(MapleInventoryType.getByType((byte) 1));
    }

    public final MapleInventory ?????????????????????() {// ????????????
        return c.getPlayer().getInventory(MapleInventoryType.getByType((byte) 2));
    }

    public final MapleInventory ?????????????????????() {// ????????????
        return c.getPlayer().getInventory(MapleInventoryType.getByType((byte) 3));
    }

    public final MapleInventory ?????????????????????() {// ????????????
        return c.getPlayer().getInventory(MapleInventoryType.getByType((byte) 4));
    }

    public final MapleInventory ?????????????????????() {// ????????????
        return c.getPlayer().getInventory(MapleInventoryType.getByType((byte) 5));
    }

    public void ????????????(int id) {
        MapleQuest.getInstance(id).complete(getPlayer(), npc);
    }

    public void ????????????(int id) {
        MapleQuest.getInstance(id).forfeit(getPlayer());
    }

    public void ????????????() {
        MapleQuest.getInstance(questid).forceStart(getPlayer(), getNpc(), null);
    }

    public void ????????????(int id) {
        MapleQuest.getInstance(id).forceStart(getPlayer(), getNpc(), null);
    }

    public void ????????????(int id) {
        MapleQuest.getInstance(id).forceStart(getPlayer(), getNpc(), null);
    }

    public void ????????????(String customData) {
        MapleQuest.getInstance(questid).forceStart(getPlayer(), getNpc(), customData);
    }

    public void ????????????() {
        MapleQuest.getInstance(questid).forceComplete(getPlayer(), getNpc());
    }

    public void ????????????(final int id) {
        MapleQuest.getInstance(id).forceComplete(getPlayer(), getNpc());
    }

    public void ????????????(int id) {
        MapleQuest.getInstance(id).forfeit(getPlayer());
    }

    public void ????????????(int s) {// ????????????
        c.getPlayer().setLevel((short) s);
    }

    public int ????????????() {// ????????????
        return getPlayer().getLevel();
    }

    public void ??????() {// ??????
        MapleCharacter player = c.getPlayer();
        c.sendPacket(MaplePacketCreator.getCharInfo(player));
        player.getMap().removePlayer(player);
        player.getMap().addPlayer(player);
    }

    public int ????????????() {// ????????????
        return getPlayer().getMeso();
    }

    public int ????????????ID() {// ????????????
        return c.getPlayer().getId();
    }

    public int ????????????() {
        return c.getPlayer().getCSPoints(1);
    }

    public int ???????????????() {
        return c.getPlayer().getCSPoints(2);
    }

    public int ????????????() {
        return getPlayer().getCurrentRep();
    }

    public int ????????????() {
        return getPlayer().getFamilyId();
    }

    public int ????????????() {
        return getPlayer().getSeniorId();
    }

    public void ?????????(int s) {
        c.getPlayer().setCurrentRep(s);
    }

    public void ????????????() {
        if (getParty() != null) {
            c.getPlayer().getParty().getMembers().size();
        }
    }

    public int ????????????() {
        return c.getPlayer().getExp();
    }

    public int ??????????????????????????????() {
        return c.getPlayer().getMap().getAllMonstersThreadsafe().size();
    }

    public int ??????????????????????????????(int a) {
        return getMap(a).getAllMonstersThreadsafe().size();
    }

    public int ??????????????????????????????() {
        return c.getPlayer().getMap().getCharactersSize();
    }

    public int ?????????(int a) {
        return (int) Math.ceil(Math.random() * a);
    }

    public boolean ?????????(int q) {
        int a = (int) Math.ceil(Math.random() * 100);
        if (a <= q) {
            return true;
        } else {
            return false;
        }
    }

    public void ??????????????????(int a) {
        getMap(a).resetFully();
    }

    public void ??????????????????(int a, int b) {
        MapleMonster mob;
        double range = Double.POSITIVE_INFINITY;
        MapleMap map = getMap(a);
        boolean drop = false;
        if (b == 0) {
            drop = true;
        } else {
            drop = false;
        }
        for (MapleMapObject monstermo : map.getMapObjectsInRange(c.getPlayer().getPosition(), range,
                Arrays.asList(MapleMapObjectType.MONSTER))) {
            mob = (MapleMonster) monstermo;
            map.killMonster(mob, c.getPlayer(), drop, false, (byte) 1);
        }
    }

    public void ??????????????????(int a) {
        getMap(a).removeDrops();
    }

    public String ??????(int a) {
        return getJobNameById(a);
    }

    public void ????????????(final int amount) {// ???AP
        c.getPlayer().gainAp((short) amount);
    }

    public void ????????????(final int amount) {// ???AP
        c.getPlayer().gainAp((short) -amount);
    }

    public void ????????????(final int amount) {// ???AP
        c.getPlayer().gainSP((short) amount);
    }

    public void ????????????(final int amount) {// ???AP
        c.getPlayer().gainSP2((short) amount);
    }

    public void ????????????() {// ??????????????????
        MapleInventory equipped = getPlayer().getInventory(MapleInventoryType.EQUIPPED);
        MapleInventory equip = getPlayer().getInventory(MapleInventoryType.EQUIP);
        List<Short> ids = new LinkedList<Short>();
        for (IItem item : equipped.list()) {
            ids.add(item.getPosition());
        }
        for (short id : ids) {
            MapleInventoryManipulator.unequip(getC(), id, equip.getNextFreeSlot());
        }
    }

    public void ????????????????????????(int x) {// ??????????????????
        MapleInventory equipped = getPlayer().getInventory(MapleInventoryType.EQUIPPED);
        MapleInventory equip = getPlayer().getInventory(MapleInventoryType.EQUIP);
        List<Short> ids = new LinkedList<Short>();
        for (IItem item : equipped.list()) {
            ids.add(item.getPosition());
        }
        for (short id : ids) {
            if (id == x) {
                MapleInventoryManipulator.unequip(getC(), id, equip.getNextFreeSlot());
            }
        }
        MapleInventoryManipulator.removeFromSlot(getC(), MapleInventoryType.EQUIP, (short) 1, (short) 1, true);
    }

    public void ????????????(boolean broadcast, String sound) {// ????????????
        for (ChannelServer cserv1 : ChannelServer.getAllInstances()) {
            for (MapleCharacter mch : cserv1.getPlayerStorage().getAllCharacters()) {
                World.Broadcast.broadcastMessage(MaplePacketCreator.playSound(sound));
            }
        }
    }

    public void ????????????(String text) {// ????????????
        World.Broadcast.broadcastMessage(MaplePacketCreator.????????????(text));
    }

    public int ???????????????x(int id, int cid) {
        int ret = -1;
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT * FROM awarp WHERE id = ? and cid = ?");
            ps.setInt(1, id);
            ps.setInt(2, cid);
            ResultSet rs = ps.executeQuery();
            rs.next();
            ret = rs.getInt("x");
            rs.close();
            ps.close();
        } catch (SQLException ex) {
        }
        return ret;
    }

    public int ???????????????y(int id, int cid) {
        int ret = -1;
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT * FROM awarp WHERE id = ? and cid = ?");
            ps.setInt(1, id);
            ps.setInt(2, cid);
            ResultSet rs = ps.executeQuery();
            rs.next();
            ret = rs.getInt("y");
            rs.close();
            ps.close();
        } catch (SQLException ex) {
        }
        return ret;
    }

    public void ???????????????x(int id, int cid, int x) {
        try {
            int ret = ???????????????x(id, cid);
            if (ret == -1) {
                ret = 0;
                PreparedStatement ps = null;
                try {
                    ps = DBConPool.getInstance().getDataSource().getConnection()
                            .prepareStatement("INSERT INTO awarp (id, cid,x) VALUES (?, ?, ?)");
                    ps.setInt(1, id);
                    ps.setInt(2, cid);
                    ps.setInt(3, x);
                    ps.execute();
                } catch (SQLException e) {
                    System.out.println("???????????????x1:" + e);
                } finally {
                    try {
                        if (ps != null) {
                            ps.close();
                        }
                    } catch (SQLException e) {
                        System.out.println("???????????????x2:" + e);
                    }
                }
            } else {
                Connection con = DBConPool.getInstance().getDataSource().getConnection();
                PreparedStatement ps = con.prepareStatement("UPDATE awarp SET `x` = ? WHERE id = ? and cid = ?");
                ps.setInt(1, x);
                ps.setInt(2, id);
                ps.setInt(3, cid);
                ps.execute();
                ps.close();
            }
        } catch (SQLException sql) {
            System.err.println("???????????????x3" + sql);
        }
    }

    public void ???????????????y(int id, int cid, int y) {
        try {
            int ret = ???????????????x(id, cid);
            if (ret == -1) {
                ret = 0;
                PreparedStatement ps = null;
                try {
                    ps = DBConPool.getInstance().getDataSource().getConnection()
                            .prepareStatement("INSERT INTO awarp (id, cid,x) VALUES (?, ?, ?)");
                    ps.setInt(1, id);
                    ps.setInt(2, cid);
                    ps.setInt(3, y);

                    ps.execute();
                } catch (SQLException e) {
                    System.out.println("???????????????y1:" + e);
                } finally {
                    try {
                        if (ps != null) {
                            ps.close();
                        }
                    } catch (SQLException e) {
                        System.out.println("???????????????y2:" + e);
                    }
                }
            } else {
                Connection con = DBConPool.getInstance().getDataSource().getConnection();
                PreparedStatement ps = con.prepareStatement("UPDATE awarp SET `y` = ? WHERE id = ? and cid = ?");
                ps.setInt(1, y);
                ps.setInt(2, id);
                ps.setInt(3, cid);
                ps.execute();
                ps.close();
            }
        } catch (SQLException sql) {
            System.err.println("???????????????y3" + sql);
        }
    }

    public String ?????????????????????() {
        int ?????? = 1;
        StringBuilder name = new StringBuilder();
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT * FROM monsterbook   order by level desc");
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                if (rs.getInt("level") == 255) {
                    String ???????????? = rs.getString("name");
                    String ?????? = ??????(rs.getInt("job"));
                    int ???????????? = rs.getInt("guildid");
                    name.append("    ");
                    name.append("#b").append(????????????).append("#k");
                    for (int j = 13 - ????????????.getBytes().length; j > 0; j--) {
                        name.append(" ");
                    }
                    name.append("  ").append(??????).append("");
                    for (int j = 15 - ??????.getBytes().length; j > 0; j--) {
                        name.append(" ");
                    }
                    name.append("??????.#d").append(??????????????????(????????????)).append("#k\r\n");
                }
            }
        } catch (SQLException ex) {
        }
        name.append("\r\n\r\n");
        return name.toString();
    }

    public static String ????????????????????????() {
        String name = "";
        String level = "";
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT `name`, `GP` FROM guilds  ORDER BY `GP` DESC LIMIT 1");
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    name = rs.getString("name");
                    level = rs.getString("GP");
                }
            }
            ps.close();
        } catch (SQLException Ex) {
            System.err.println("???????????????????????? - ????????????????????????" + Ex);
        }

        return String.format("%s", name);
    }

    public static String ??????????????????(int guildId) {
        String data = "";
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT name as DATA FROM guilds WHERE guildid = ?");
            ps.setInt(1, guildId);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    data = rs.getString("DATA");
                }
            }
            ps.close();
        } catch (SQLException Ex) {
            System.err.println("???????????????????????? - ????????????????????????" + Ex);
        }
        return data;
    }

    public static String ????????????????????????(int guildId) {
        String data = "";
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT rank1title as DATA FROM guilds WHERE guildid = ?");
            ps.setInt(1, guildId);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    data = rs.getString("DATA");
                }
            }
            ps.close();
        } catch (SQLException Ex) {
            System.err.println("???????????????????????? - ????????????????????????" + Ex);
        }
        return data;
    }

    public static String ???????????????????????????(int guildId) {
        String data = "";
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT rank2title as DATA FROM guilds WHERE guildid = ?");
            ps.setInt(1, guildId);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    data = rs.getString("DATA");
                }
            }
            ps.close();
        } catch (SQLException Ex) {
            System.err.println("???????????????????????? - ????????????????????????" + Ex);
        }
        return data;
    }

    public static String ??????????????????????????????(int guildId) {
        String data = "";
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT rank3title as DATA FROM guilds WHERE guildid = ?");
            ps.setInt(1, guildId);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    data = rs.getString("DATA");
                }
            }
            ps.close();
        } catch (SQLException Ex) {
            System.err.println("???????????????????????? - ????????????????????????" + Ex);
        }
        return data;
    }

    public static String ??????????????????????????????(int guildId) {
        String data = "";
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT rank4title as DATA FROM guilds WHERE guildid = ?");
            ps.setInt(1, guildId);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    data = rs.getString("DATA");
                }
            }
            ps.close();
        } catch (SQLException Ex) {
            System.err.println("???????????????????????? - ????????????????????????" + Ex);
        }
        return data;
    }

    public static String ??????????????????????????????(int guildId) {
        String data = "";
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT rank5title as DATA FROM guilds WHERE guildid = ?");
            ps.setInt(1, guildId);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    data = rs.getString("DATA");
                }
            }
            ps.close();
        } catch (SQLException Ex) {
            System.err.println("???????????????????????? - ????????????????????????" + Ex);
        }
        return data;
    }

    public static String ??????????????????ID(int guildId) {
        String data = "";
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT leader as DATA FROM guilds WHERE guildid = ?");
            ps.setInt(1, guildId);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    data = rs.getString("DATA");
                }
            }
            ps.close();
        } catch (SQLException Ex) {
            System.err.println("???????????????????????? - ????????????????????????" + Ex);
        }
        return data;
    }

    public static int ???????????????(int a) {
        int data = 0;
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT * FROM characters ");
            try (ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    if (rs.getInt("guildid") == a) {
                        data += 1;
                    }
                }
            }
            ps.close();
        } catch (SQLException Ex) {
            System.err.println("????????????????????????????????????" + Ex);
        }
        return data;
    }

    public String ????????????(int a) {
        String data = "";
        data = "#v" + a + "# #b#z" + a + "##k";
        return data;
    }

    public void gainNX(int type, int amount) {
        if (type <= 0 || type > 2) {
            type = 2;
        }
        c.getPlayer().modifyCSPoints(type, amount, true);
    }

    public void ???????????????????????????(short hp) {// ?????????????????????
        Map<MapleStat, Integer> statup = new EnumMap<>(MapleStat.class);
        c.getPlayer().getStat().setMaxHp((short) (c.getPlayer().getStat().getMaxHp() + hp));
        statup.put(MapleStat.MAXHP, (int) c.getPlayer().getStat().getMaxHp());
        c.sendPacket(MaplePacketCreator.updatePlayerStats(statup, c.getPlayer()));
    }

    public void ???????????????????????????(short MP) {// ?????????????????????
        Map<MapleStat, Integer> statup = new EnumMap<>(MapleStat.class);
        c.getPlayer().getStat().setMaxMp((short) (c.getPlayer().getStat().getMaxMp() + MP));
        statup.put(MapleStat.MAXMP, (int) c.getPlayer().getStat().getMaxMp());
        c.sendPacket(MaplePacketCreator.updatePlayerStats(statup, c.getPlayer()));
    }

    public void addMaxHp(short hp) {
        Map<MapleStat, Integer> statup = new EnumMap<>(MapleStat.class);
        c.getPlayer().getStat().setMaxHp((short) (c.getPlayer().getStat().getMaxHp() + hp));
        statup.put(MapleStat.MAXHP, (int) c.getPlayer().getStat().getMaxHp());
        c.sendPacket(MaplePacketCreator.updatePlayerStats(statup, c.getPlayer()));
    }

    public void addMaxMp(short MP) {
        Map<MapleStat, Integer> statup = new EnumMap<>(MapleStat.class);
        c.getPlayer().getStat().setMaxMp((short) (c.getPlayer().getStat().getMaxMp() + MP));
        statup.put(MapleStat.MAXMP, (int) c.getPlayer().getStat().getMaxMp());
        c.sendPacket(MaplePacketCreator.updatePlayerStats(statup, c.getPlayer()));
    }

    public void ????????????(String text) {// ????????????
        World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(6, text));
    }

}
