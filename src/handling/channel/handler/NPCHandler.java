package handling.channel.handler;

import client.inventory.Equip;
import client.inventory.IItem;
import client.inventory.MapleInventoryType;
import client.MapleClient;
import client.MapleCharacter;
import constants.GameConstants;
import client.MapleQuestStatus;
import client.RockPaperScissors;
import client.inventory.ItemFlag;
import constants.WorldConstants;
import handling.SendPacketOpcode;
import handling.world.World;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import server.AutobanManager;
import server.MapleShop;
import server.MapleInventoryManipulator;
import server.MapleStorage;
import server.life.MapleNPC;
import server.quest.MapleQuest;
import scripting.NPCScriptManager;
import scripting.NPCConversationManager;
import server.MapleItemInformationProvider;
import server.maps.MapleMap;
import tools.ArrayMap;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;
import tools.Pair;
import tools.data.LittleEndianAccessor;
import tools.data.MaplePacketLittleEndianWriter;

public class NPCHandler {

    public static final void handleNPCAnimation(final LittleEndianAccessor slea, final MapleClient c) {
        final int length = (int) slea.available();
        if (c == null || c.getPlayer() == null || length < 4) {
            return;
        }

        MapleMap map = c.getPlayer().getMap();
        if (map == null) {
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }

        int oid = slea.readInt();
        MapleNPC npc = map.getNPCByOid(oid);
        if (npc == null) {

            if (c.getPlayer().isShowErr()) {
                c.getPlayer().showInfo("NPC动作", true, "地图上不存在NPC, OID=" + oid);
            }
            return;
        }
        if (!c.getPlayer().isMapObjectVisible(npc)) {
            return;
        }

        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();
        mplew.writeShort(SendPacketOpcode.NPC_ACTION.getValue());

        mplew.writeInt(oid);
        if (length == 6) { // NPC Talk
            mplew.writeShort(slea.readShort());
        } else if (length > 9) { // NPC Move
            mplew.write(slea.read(length - 13));
        } else {
            if (c.getPlayer().isShowErr()) {
                c.getPlayer().showInfo("NPC动作", true, "未知NPC动作, Packet:" + slea.toString());
            }
            return;
        }

        //c.sendPacket(mplew.getPacket());
    }

    public static final void handleNPCShop(final LittleEndianAccessor slea, final MapleClient c) {
        MapleCharacter player = c.getPlayer();
        final byte bmode = slea.readByte();
        if (player == null) {
            return;
        }
        switch (bmode) {
            case 0: {
                final MapleShop shop = player.getShop();
                if (shop == null) {
                    return;
                }
                slea.skip(2);
                final int itemId = slea.readInt();
                final short quantity = slea.readShort();
                shop.buy(c, itemId, quantity);
                break;
            }
            case 1: {
                final MapleShop shop = player.getShop();
                if (shop == null) {
                    return;
                }
                final byte slot = (byte) slea.readShort();
                final int itemId = slea.readInt();
                final short quantity = slea.readShort();
                shop.sell(c, GameConstants.getInventoryType(itemId), slot, quantity);
                break;
            }
            case 2: {
                final MapleShop shop = player.getShop();
                if (shop == null) {
                    return;
                }
                final byte slot = (byte) slea.readShort();
                shop.recharge(c, slot);
                break;
            }
            default:
                player.setConversation(0);
                break;
        }
    }

    public static final void handleNPCTalk(final LittleEndianAccessor slea, final MapleClient c, final MapleCharacter chr) {
        if (c == null || chr == null || chr.getMap() == null) {
            return;
        }
        final MapleNPC npc = chr.getMap().getNPCByOid(slea.readInt());

        if (npc == null) {
            return;
        }
        if (chr.getConversation() != 0) {
            chr.dropMessage(5, "你现在不能攻击或不能跟npc对话,请在对话框打 @解卡/@ea 来解除异常状态");
            return;
        }

        if (chr.getAntiMacro().inProgress()) {
            chr.dropMessage(5, "被使用测谎仪时无法操作。");
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }

        if (npc.hasShop()) {
            chr.setConversation(1);
            npc.sendShop(c);
        } else {
            NPCScriptManager.getInstance().start(c, npc.getId());
        }
    }

    public static final void QuestAction(final LittleEndianAccessor slea, final MapleClient c, final MapleCharacter chr) {
        final byte action = slea.readByte();
        //short quest = slea.readShort();
        int quest = slea.readUShort();
        //if (quest < 0) { //questid 50000 and above, WILL cast to negative, this was tested.
        //   quest += 65536; //probably not the best fix, but whatever
        //}

        if (chr == null) {
            return;
        }
        if (chr.getAntiMacro().inProgress()) {
            chr.dropMessage(5, "被使用测谎仪时无法操作。");
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }

        final MapleQuest q = MapleQuest.getInstance(quest);
        switch (action) {
            case 0: { // Restore lost item
                chr.updateTick(slea.readInt());
                final int itemid = slea.readInt();
                MapleQuest.getInstance(quest).RestoreLostItem(chr, itemid);
                break;
            }
            case 1: { // Start Quest
                final int npc = slea.readInt();
                if (quest == 8663) {
                    if (chr.canHold()) {
                        if (chr.getAcLogS("Q8663") < 1) {
                            chr.setAcLog("Q8663");
                            chr.modifyCSPoints(2, 520, true);
                            chr.gainItem(1112004);
                        } else {
                            chr.dropMessage(5, "您已领取过该任务的奖励。");
                        }
                    } else {
                        chr.dropMessage(5, "您的背包空格不足。");
                        return;

                    }
                }
                if (npc == 0 && quest > 0) {
                    q.forceStart(chr, npc, null);
                } else if (quest == 2001 || quest == 8511 || quest == 21301 || quest == 21302 || quest == 3083) {
                    q.forceStart(chr, npc, null);
                } else if (quest == 8512) {
                    q.start(chr, npc);
                } else if (!q.hasStartScript()) {
                    q.start(chr, npc);
                }
                if (c.getPlayer().isAdmin()) {
                    chr.dropMessage(6, "开始系统任务 NPC: " + npc + " Quest：" + quest);
                }
                break;
            }
            case 2: { // Complete Quest
                final int npc = slea.readInt();
                chr.updateTick(slea.readInt());

                if (slea.available() >= 4) {
                    q.complete(chr, npc, slea.readInt());
                } else {
                    q.complete(chr, npc);
                }
                if (c.getPlayer().isAdmin()) {
                    chr.dropMessage(6, "完成系统任务 NPC: " + npc + " Quest: " + quest);
                }
                // c.sendPacket(MaplePacketCreator.completeQuest(c.getPlayer(), quest));
                //c.sendPacket(MaplePacketCreator.updateQuestInfo(c.getPlayer(), quest, npc, (byte)14));
                // 6 = start quest
                // 7 = unknown error
                // 8 = equip is full
                // 9 = not enough mesos
                // 11 = due to the equipment currently being worn wtf o.o
                // 12 = you may not posess more than one of this item
                break;
            }
            case 3: { // Forefit Quest
                if (GameConstants.canForfeit(q.getId())) {
                    q.forfeit(chr);
                    if (c.getPlayer().isAdmin()) {
                        chr.dropMessage(6, "放弃系统任务 Quest: " + quest);
                    }
                } else {
                    chr.dropMessage(1, "你不能放弃这个任务。");
                }
                break;
            }
            case 4: { // Scripted Start Quest
                final int npc = slea.readInt();
                if (c.getPlayer().isAdmin()) {
                    chr.dropMessage(6, "执行脚本任务 NPC：" + npc + " Quest: " + quest);
                }
                NPCScriptManager.getInstance().startQuest(c, npc, quest);

                break;
            }
            case 5: { // Scripted End Quest
                final int npc = slea.readInt();
                NPCScriptManager.getInstance().endQuest(c, npc, quest, false);
                c.sendPacket(MaplePacketCreator.showSpecialEffect(0xA)); // Quest completion
                chr.getMap().broadcastMessage(chr, MaplePacketCreator.showSpecialEffect(chr.getId(), 0xA), false);
                if (c.getPlayer().isAdmin()) {
                    chr.dropMessage(6, "完成脚本任务 NPC：" + npc + " Quest: " + quest);
                }
                break;
            }
        }
    }

    public static final void Storage(final LittleEndianAccessor slea, final MapleClient c, final MapleCharacter chr) {
        final byte mode = slea.readByte();
        if (chr == null) {
            return;
        }
        if (chr.getAntiMacro().inProgress()) {
            chr.dropMessage(5, "被使用测谎仪时无法操作。");
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }

        if (chr.hasBlockedInventory2(true)) { //hack
            c.getPlayer().dropMessage(1, "系统错误，请联系管理员。");
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }
        final MapleStorage storage = chr.getStorage();

        switch (mode) {
            case 4: { // 拿出道具
                final byte type = slea.readByte();
                final byte slot = storage.getSlot(MapleInventoryType.getByType(type), slea.readByte());
                final IItem item = storage.takeOut(slot);
                if (c.getPlayer().CanStorage()) {
                    if (item != null) {
                        if (!MapleInventoryManipulator.checkSpace(c, item.getItemId(), item.getQuantity(), item.getOwner())) {
                            storage.store(item);
                            chr.saveToDB(false, false);
                            chr.dropMessage(1, "你的物品拦已经满了..");
                        } else if (chr.getMapId() == 910000000 && chr.getMeso() < 1000) {
                            storage.store(item);
                            chr.saveToDB(false, false);
                            chr.dropMessage(1, "你没有足够的枫币放仓库道具。");
                        } else {
                            if (item.getQuantity() < 1) {
                                return;
                            }
                            if (chr.getMapId() == 910000000) {
                                chr.gainMeso(-1000, false, true, false);
                            }
                            MapleInventoryManipulator.addFromDrop(c, item, false);
                            storage.saveToDB();
                            storage.sendTakenOut(c, GameConstants.getInventoryType(item.getItemId()));
                            FileoutputUtil.logToFile("logs/Data/仓库操作.txt", "\r\n " + FileoutputUtil.NowTime() + " IP: " + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号: " + c.getAccountName() + " 玩家: " + c.getPlayer().getName() + " 使用了仓库操作拿出物品:" + WorldConstants.getNameById(item.getItemId())+ "("+item.getItemId() + ") 数量：" + item.getQuantity());
                            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM密语] " + " 帐号: " + c.getAccountName() + " 玩家: " + c.getPlayer().getName() + " 使用了仓库操作拿出物品:" + WorldConstants.getNameById(item.getItemId())+ "("+item.getItemId() + ") 数量：" + item.getQuantity()));
                        }
                    } else {
                        c.sendPacket(MaplePacketCreator.enableActions());
                        //AutobanManager.getInstance().autoban(c, "Trying to take out item from storage which does not exist.");
                    }
                } else {
                    c.getPlayer().dropMessage(1, "操作过快请稍后在尝试。");
                    storage.store(item);
                }
                break;
            }
            case 5: { // 仓库处理
                final byte slot = (byte) slea.readShort();
                final int itemId = slea.readInt();
                short quantity = slea.readShort();
                MapleInventoryType type = GameConstants.getInventoryType(itemId);
                final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
                if (itemId == 4110010) {
                    c.getPlayer().dropMessage(1, "无法存入该物品。");
                    c.sendPacket(MaplePacketCreator.enableActions());
                    return;
                }

                if (c.getPlayer().CanStorage()) {
                    if (quantity < 1) {
                        return;
                    }
                    if (storage.isFull()) {
                        c.sendPacket(MaplePacketCreator.getStorageFull());
                        return;
                    }

                    if (ii.isCash(itemId)) {
                        c.sendPacket(MaplePacketCreator.enableActions());
                        return;
                    }

                    if (chr.getInventory(type).getItem(slot) == null) {
                        c.sendPacket(MaplePacketCreator.enableActions());
                        return;
                    }
                    if (chr.getMeso() < 100 || chr.getMapId() == 910000000 && chr.getMeso() < 500) {
                        chr.dropMessage(1, "你没有足够的枫币放仓库道具。");
                        break;
                    } else {
                        IItem item = chr.getInventory(type).getItem(slot).copy();

                        if (GameConstants.isPet(item.getItemId())) {
                            c.sendPacket(MaplePacketCreator.enableActions());
                            return;
                        }
                        final byte flag = item.getFlag();
                        if (ii.isPickupRestricted(item.getItemId()) && storage.findById(item.getItemId()) != null) {
                            c.sendPacket(MaplePacketCreator.enableActions());
                            return;
                        }
                        if (item.getItemId() == itemId && (item.getQuantity() >= quantity || GameConstants.isThrowingStar(itemId) || GameConstants.isBullet(itemId))) {
                            if (ii.isDropRestricted(item.getItemId())) {
                                if (ItemFlag.KARMA_EQ.check(flag)) {
                                    item.setFlag((byte) (flag - ItemFlag.KARMA_EQ.getValue()));
                                } else if (ItemFlag.KARMA_USE.check(flag)) {
                                    item.setFlag((byte) (flag - ItemFlag.KARMA_USE.getValue()));
                                } else {
                                    c.sendPacket(MaplePacketCreator.enableActions());
                                    return;
                                }
                            }

                            if (GameConstants.isThrowingStar(itemId) || GameConstants.isBullet(itemId)) {
                                if (item.getQuantity() < 1) {
                                    c.sendPacket(MaplePacketCreator.enableActions());
                                    return;
                                }
                            }
                            if (GameConstants.isThrowingStar(itemId) || GameConstants.isBullet(itemId)) {
                                quantity = item.getQuantity();
                            }
                            int cost = (chr.getMapId() == 910000000) ? 500 : 100;
                            chr.gainMeso(-cost, false, true, false);
                            MapleInventoryManipulator.removeFromSlot(c, type, slot, quantity, false);
                            item.setQuantity(quantity);
                            storage.store(item);
                            storage.sendStored(c, GameConstants.getInventoryType(itemId));
                            //chr.saveToDB(false, false);
                            FileoutputUtil.logToFile("logs/Data/仓库操作.txt", "\r\n " + FileoutputUtil.NowTime() + " IP: " + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号: " + c.getAccountName() + " 玩家: " + c.getPlayer().getName() + " 使用了仓库操作存入物品:" + WorldConstants.getNameById(item.getItemId())+ "("+item.getItemId() + ") 数量：" + item.getQuantity());
                            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM密语] " + " 帐号: " + c.getAccountName() + " 玩家: " + c.getPlayer().getName() + " 使用了仓库操作存入物品:" + WorldConstants.getNameById(item.getItemId())+ "("+ item.getItemId() + ") 数量：" + item.getQuantity()));
                        } else {
                            AutobanManager.getInstance().addPoints(c, 1000, 0, "Trying to store non-matching itemid (" + itemId + "/" + item.getItemId() + ") or quantity not in posession (" + quantity + "/" + item.getQuantity() + ")");
                            return;
                        }
                    }

                } else {
                    c.getPlayer().dropMessage(1, "操作过快请稍后在尝试。");
                    storage.sendStored(c, GameConstants.getInventoryType(itemId));
                }
                break;
            }
            case 6: {
                storage.arrange();
                storage.update(c);
                break;
            }
            case 7: {
                int meso = slea.readInt();
                final int storageMesos = storage.getMeso();
                final int playerMesos = chr.getMeso();
                if (c.getPlayer().CanStorage()) {
                    if ((meso > 0 && storageMesos >= meso) || (meso < 0 && playerMesos >= -meso)) {
                        if (meso < 0 && (storageMesos - meso) < 0) { // storing with overflow
                            meso = -(Integer.MAX_VALUE - storageMesos);
                            if ((-meso) > playerMesos) { // should never happen just a failsafe
                                return;
                            }
                        } else if (meso > 0 && (playerMesos + meso) < 0) { // taking out with overflow
                            meso = (Integer.MAX_VALUE - playerMesos);
                            if ((meso) > storageMesos) { // should never happen just a failsafe
                                return;
                            }
                        }
                        storage.setMeso(storageMesos - meso);
                        storage.saveToDB();
                        chr.gainMeso(meso, false, true, false);
                        FileoutputUtil.logToFile("logs/Data/仓库操作.txt", "\r\n " + FileoutputUtil.NowTime() + " IP: " + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号: " + c.getAccountName() + " 玩家: " + c.getPlayer().getName() + " 使用了仓库操作金币数量:" + meso);
                        World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM密语] " + " 帐号: " + c.getAccountName() + " 玩家: " + c.getPlayer().getName() + " 使用了仓库操作金币数量:" + meso));

                        if (meso >= 50000000 || meso <= -50000000) {
                            FileoutputUtil.logToFile("logs/Data/仓库大额金币操作.txt", "\r\n " + FileoutputUtil.NowTime() + " IP: " + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号: " + c.getAccountName() + " 玩家: " + c.getPlayer().getName() + " 使用了仓库大额金币操作数量:" + meso);
                            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM密语] " + " 帐号: " + c.getAccountName() + " 玩家: " + c.getPlayer().getName() + " 使用了仓库大额金币操作数量:" + meso));
                        }

                    } else {
                        AutobanManager.getInstance().addPoints(c, 1000, 0, "Trying to store or take out unavailable amount of mesos (" + meso + "/" + storage.getMeso() + "/" + c.getPlayer().getMeso() + ")");
                        return;
                    }
                    storage.sendMeso(c);
                } else {
                    c.getPlayer().dropMessage(1, "操作过快请稍后在尝试。");
                    storage.sendMeso(c);
                }
                //chr.saveToDB(false, false);
                break;
            }
            case 8: {
                storage.close();
                chr.setConversation(0);
                break;
            }
            default:
                System.err.println("Unhandled Storage mode : " + mode);
                break;
        }
    }

    public static final void NPCMoreTalk(final LittleEndianAccessor slea, final MapleClient c) {
        final byte lastMsg = slea.readByte(); // 00 (last msg type I think)
        final byte action = slea.readByte(); // 00 = end chat, 01 == follow

        final NPCConversationManager cm = NPCScriptManager.getInstance().getCM(c);

        if (c == null || c.getPlayer() == null || cm == null || c.getPlayer().getConversation() == 0 || cm.getLastMsg() != lastMsg) {
            return;
        }
        cm.setLastMsg((byte) -1);
        if (lastMsg == 2) {
            if (action != 0) {
                cm.setGetText(slea.readMapleAsciiString());
                if (cm.getType() == 0) {
                    NPCScriptManager.getInstance().startQuest(c, action, lastMsg, -1);
                } else if (cm.getType() == 1) {
                    NPCScriptManager.getInstance().endQuest(c, action, lastMsg, -1);
                } else {
                    NPCScriptManager.getInstance().action(c, action, lastMsg, -1);
                }
            } else {
                cm.dispose();
            }
        } else {
            int selection = -1;
            if (slea.available() >= 4) {
                selection = slea.readInt();
            } else if (slea.available() > 0) {
                selection = slea.readByte();
            }
            if (lastMsg == 4 && selection == -1) {
                cm.dispose();
                return;//h4x
            }
            if (selection >= -1 && action != -1) {
                switch (cm.getType()) {
                    case 0:
                        NPCScriptManager.getInstance().startQuest(c, action, lastMsg, selection);
                        break;
                    case 1:
                        NPCScriptManager.getInstance().endQuest(c, action, lastMsg, selection);
                        break;
                    default:
                        NPCScriptManager.getInstance().action(c, action, lastMsg, selection);
                        break;
                }
            } else {
                cm.dispose();
            }
        }
    }

    public static final void repairAll(final MapleClient c) {
        if (c.getPlayer().getMapId() != 240000000) {
            return;
        }
        Equip eq;
        double rPercentage;
        int price = 0;
        Map<String, Integer> eqStats;
        final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        final Map<Equip, Integer> eqs = new ArrayMap<>();
        final MapleInventoryType[] types = {MapleInventoryType.EQUIP, MapleInventoryType.EQUIPPED};
        for (MapleInventoryType type : types) {
            for (IItem item : c.getPlayer().getInventory(type)) {
                if (item instanceof Equip) { //redundant
                    eq = (Equip) item;
                    if (eq.getDurability() >= 0) {
                        eqStats = ii.getEquipStats(eq.getItemId());
                        if (eqStats.get("durability") > 0 && eq.getDurability() < eqStats.get("durability")) {
                            rPercentage = (100.0 - Math.ceil((eq.getDurability() * 1000.0) / (eqStats.get("durability") * 10.0)));
                            eqs.put(eq, eqStats.get("durability"));
                            price += (int) Math.ceil(rPercentage * ii.getPrice(eq.getItemId()) / (ii.getReqLevel(eq.getItemId()) < 70 ? 100.0 : 1.0));
                        }
                    }
                }
            }
        }
        if (eqs.size() <= 0 || c.getPlayer().getMeso() < price) {
            return;
        }
        c.getPlayer().gainMeso(-price, true);
        Equip ez;
        for (Entry<Equip, Integer> eqqz : eqs.entrySet()) {
            ez = eqqz.getKey();
            ez.setDurability(eqqz.getValue());
            c.getPlayer().forceReAddItem(ez.copy(), ez.getPosition() < 0 ? MapleInventoryType.EQUIPPED : MapleInventoryType.EQUIP);
        }
    }

    public static final void repair(final LittleEndianAccessor slea, final MapleClient c) {
        if (c.getPlayer().getMapId() != 240000000 || slea.available() < 4) { //leafre for now
            return;
        }
        final int position = slea.readInt(); //who knows why this is a int
        final MapleInventoryType type = position < 0 ? MapleInventoryType.EQUIPPED : MapleInventoryType.EQUIP;
        final IItem item = c.getPlayer().getInventory(type).getItem((byte) position);
        if (item == null) {
            return;
        }
        final Equip eq = (Equip) item;
        final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        final Map<String, Integer> eqStats = ii.getEquipStats(item.getItemId());
        if (eq.getDurability() < 0 || eqStats.get("durability") <= 0 || eq.getDurability() >= eqStats.get("durability")) {
            return;
        }
        final double rPercentage = (100.0 - Math.ceil((eq.getDurability() * 1000.0) / (eqStats.get("durability") * 10.0)));
        //drpq level 105 weapons - ~420k per %; 2k per durability point
        //explorer level 30 weapons - ~10 mesos per %
        final int price = (int) Math.ceil(rPercentage * ii.getPrice(eq.getItemId()) / (ii.getReqLevel(eq.getItemId()) < 70 ? 100.0 : 1.0)); // / 100 for level 30?
        //TODO: need more data on calculating off client
        if (c.getPlayer().getMeso() < price) {
            return;
        }
        c.getPlayer().gainMeso(-price, false);
        eq.setDurability(eqStats.get("durability"));
        c.getPlayer().forceReAddItem(eq.copy(), type);
    }

    public static final void UpdateQuest(final LittleEndianAccessor slea, final MapleClient c) {
        final MapleQuest quest = MapleQuest.getInstance(slea.readShort());
        if (quest != null) {
            c.getPlayer().updateQuest(c.getPlayer().getQuest(quest), true);
        }
    }

    public static final void UseItemQuest(final LittleEndianAccessor slea, final MapleClient c) {
        final short slot = slea.readShort();
        final int itemId = slea.readInt();
        final IItem item = c.getPlayer().getInventory(MapleInventoryType.ETC).getItem(slot);
        final short qid = slea.readShort();
        slea.readShort();
        final MapleQuest quest = MapleQuest.getInstance(qid);
        final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        Pair<Integer, List<Integer>> questItemInfo;
        boolean found = false;
        for (IItem i : c.getPlayer().getInventory(MapleInventoryType.ETC)) {
            if (i.getItemId() / 10000 == 422) {
                questItemInfo = ii.questItemInfo(i.getItemId());
                if (questItemInfo != null && questItemInfo.getLeft() == qid && questItemInfo.getRight().contains(itemId)) {
                    found = true;
                    break; //i believe it's any order
                }
            }
        }
        if (quest != null && found && item != null && item.getQuantity() > 0 && item.getItemId() == itemId) {
            final int newData = slea.readInt();
            final MapleQuestStatus stats = c.getPlayer().getQuestNoAdd(quest);
            if (stats != null && stats.getStatus() == 1) {
                stats.setCustomData(String.valueOf(newData));
                c.getPlayer().updateQuest(stats, true);
                MapleInventoryManipulator.removeFromSlot(c, MapleInventoryType.ETC, slot, (short) 1, false);
            }
        }
    }

    /*public static final void RPSGame(final LittleEndianAccessor slea, final MapleClient c) {
        if (slea.available() == 0 || !c.getPlayer().getMap().containsNPC(9209002)) {
            if (c.getPlayer().getRPS() != null) {
                c.getPlayer().getRPS().dispose(c);
            }
            return;
        }
        final byte mode = slea.readByte();
        switch (mode) {
            case 0: //start game
            case 5: //retry
                if (c.getPlayer().getRPS() != null) {
                    c.getPlayer().getRPS().reward(c);
                }
                if (c.getPlayer().getMeso() >= 1000) {
                    c.getPlayer().setRPS(new RockPaperScissors(c, mode));
                } else {
                    c.sendPacket(MaplePacketCreator.getRPSMode((byte) 0x08, -1, -1, -1));
                }
                break;
            case 1: //answer
                if (c.getPlayer().getRPS() == null || !c.getPlayer().getRPS().answer(c, slea.readByte())) {
                    c.sendPacket(MaplePacketCreator.getRPSMode((byte) 0x0D, -1, -1, -1));
                }
                break;
            case 2: //time over
                if (c.getPlayer().getRPS() == null || !c.getPlayer().getRPS().timeOut(c)) {
                    c.sendPacket(MaplePacketCreator.getRPSMode((byte) 0x0D, -1, -1, -1));
                }
                break;
            case 3: //continue
                if (c.getPlayer().getRPS() == null || !c.getPlayer().getRPS().nextRound(c)) {
                    c.sendPacket(MaplePacketCreator.getRPSMode((byte) 0x0D, -1, -1, -1));
                }
                break;
            case 4: //leave
                if (c.getPlayer().getRPS() != null) {
                    c.getPlayer().getRPS().dispose(c);
                } else {
                    c.sendPacket(MaplePacketCreator.getRPSMode((byte) 0x0D, -1, -1, -1));
                }
                break;
        }
    }*/
}
