package server;

import client.MapleCharacter;
import client.MapleClient;
import client.inventory.IItem;
import client.inventory.ItemFlag;
import client.inventory.MapleInventoryType;
import client.messages.CommandProcessor;
import constants.GameConstants;
import constants.ServerConfig;
import constants.ServerConstants.CommandType;
import handling.channel.ChannelServer;
import handling.world.World;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;
import tools.packet.PlayerShopPacket;

import java.lang.ref.WeakReference;
import java.util.LinkedList;
import java.util.List;

public class MapleTrade {

    private MapleTrade partner = null;
    private final List<IItem> items = new LinkedList<>();
    private List<IItem> exchangeItems;
    private int meso = 0, exchangeMeso = 0;
    private boolean locked = false;
    private final WeakReference<MapleCharacter> chr;
    private final byte tradingslot;

    public MapleTrade(final byte tradingslot, final MapleCharacter chr) {
        this.tradingslot = tradingslot;
        this.chr = new WeakReference<>(chr);
    }

    public final void CompleteTrade() {
        final MapleTrade local = chr.get().getTrade();
        final MapleTrade partner = local.getPartner();
        if (exchangeItems != null) { // just to be on the safe side...
            for (final IItem item : exchangeItems) {
                byte flag = item.getFlag();

                if (ItemFlag.KARMA_EQ.check(flag)) {
                    item.setFlag((byte) (flag - ItemFlag.KARMA_EQ.getValue()));
                } else if (ItemFlag.KARMA_USE.check(flag)) {
                    item.setFlag((byte) (flag - ItemFlag.KARMA_USE.getValue()));
                }
                MapleInventoryManipulator.addFromDrop(chr.get().getClient(), item, false);
            }
            String output = "";
            for (IItem item : exchangeItems) {
                output += item.getItemId() + "(" + item.getQuantity() + "), ";
            }

            if ((exchangeMeso - GameConstants.getTaxAmount(exchangeMeso)) >= 50000000) {
                FileoutputUtil.logToFile("logs/Data/大额金币交易.txt", FileoutputUtil.NowTime() + "角色名字:" + chr.get().getName() + " 和 " + partner.chr.get().getName() + " 交易获得 金币" + (exchangeMeso - GameConstants.getTaxAmount(exchangeMeso)) + "\r\n");
                World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM密语] " + "大额金币交易 疑似卖游戏币 角色名字:" + chr.get().getName() + " 和 " + partner.chr.get().getName() + " 交易获得 金币" + (exchangeMeso - GameConstants.getTaxAmount(exchangeMeso))));
            }

            FileoutputUtil.logToFile("logs/Data/交易记录.txt", FileoutputUtil.NowTime() + " 帐号角色名字:" + chr.get().getClient().getAccountName() + " " + chr.get().getName() + " 和 " + partner.chr.get().getClient().getAccountName() + " " + partner.chr.get().getName() + " 交易获得 金币" + (exchangeMeso - GameConstants.getTaxAmount(exchangeMeso)) + " 和 " + exchangeItems.size() + "件物品[" + output + "]\r\n");
            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM密语] " + "角色名字:" + chr.get().getName() + " 和 " + partner.chr.get().getName() + " 交易获得 金币" + (exchangeMeso - GameConstants.getTaxAmount(exchangeMeso)) + " 和 " + exchangeItems.size() + "件物品[" + output + "]"));
            exchangeItems.clear();
        }
        if (exchangeMeso > 0) {
            chr.get().gainMeso(exchangeMeso - GameConstants.getTaxAmount(exchangeMeso), false, true, false);
        }
        exchangeMeso = 0;
        chr.get().getClient().sendPacket(MaplePacketCreator.TradeMessage(tradingslot, (byte) 0x08));
        try {
            chr.get().saveToDB(false, false);
        } catch (Exception ex) {
            FileoutputUtil.logToFile("logs/交易存档保存数据异常.txt", "\r\n " + FileoutputUtil.NowTime() + " IP: " + chr.get().getClient().getSession().remoteAddress().toString().split(":")[0] + " 帐号 " + chr.get().getClient().getAccountName() + " 帐号ID " + chr.get().getClient().getAccID() + " 角色名 " + chr.get().getName() + " 角色ID " + chr.get().getId());
            FileoutputUtil.outError("logs/交易存档保存数据异常.txt", ex);
            System.err.println("封锁出现错误 " + ex);
            FileoutputUtil.outError("logs/交易异常.txt", ex);
        }
    }

    public final void cancel(final MapleClient c) {
        cancel(c, 0, false);
    }

    public final void cancel(final MapleClient c, final int unsuccessful, boolean check) {
        final MapleTrade local = c.getPlayer().getTrade();
        final MapleTrade partners = local.getPartner();
        if (local.isLocked() && partners.isLocked()) {
            if (!check) {
                meso = 0;
                items.clear();
            }
        }
        if (items != null) { // just to be on the safe side...
            for (final IItem item : items) {
                MapleInventoryManipulator.addFromDrop(c, item, false);
            }
            items.clear();
        }
        if (meso > 0) {
            c.getPlayer().gainMeso(meso, false, true, false);
        }
        meso = 0;
        c.sendPacket(MaplePacketCreator.getTradeCancel(tradingslot, unsuccessful));
    }

    public final boolean isLocked() {
        return locked;
    }

    public final void setMeso(final int meso) {
        if (locked || partner == null || meso <= 0 || this.meso + meso <= 0) {
            return;
        }
        if (chr.get().getMeso() >= meso) {
            chr.get().gainMeso(-meso, false, true, false);
            this.meso += meso;
            chr.get().getClient().sendPacket(MaplePacketCreator.getTradeMesoSet((byte) 0, this.meso));
            if (partner != null) {
                partner.getChr().getClient().sendPacket(MaplePacketCreator.getTradeMesoSet((byte) 1, this.meso));
            }
        }
    }

    public final void addItem(final IItem item) {
        if (locked || partner == null) {
            return;
        }
        items.add(item);
        chr.get().getClient().sendPacket(MaplePacketCreator.getTradeItemAdd((byte) 0, item));
        if (partner != null) {
            partner.getChr().getClient().sendPacket(MaplePacketCreator.getTradeItemAdd((byte) 1, item));
        }
    }

    public final void chat(final String message) {
        if (partner == null) {
            return;
        }
        if (!CommandProcessor.processCommand(chr.get().getClient(), message, CommandType.TRADE)) {
            if (chr.get().getCanTalk()) {
                chr.get().dropMessage(-2, chr.get().getName() + " : " + message);
            }
            if (ServerConfig.LOG_CHAT) {
                FileoutputUtil.logToFile("logs/聊天/交易聊天.txt", " " + FileoutputUtil.NowTime() + " IP: " + chr.get().getClient().getSession().remoteAddress().toString().split(":")[0] + " 『" + chr.get().getName() + "』对『" + partner.getChr().getName() + "』的交易聊天：  " + message + "\r\n");
            }
            final StringBuilder sb = new StringBuilder("[GM 密语] 『" + chr.get().getName() + "』对『" + partner.getChr().getName() + "』的交易聊天：  " + message);
            for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                for (MapleCharacter chr_ : cserv.getPlayerStorage().getAllCharactersThreadSafe()) {
                    if (chr_.get_control_玩家私聊()) {
                        chr_.dropMessage(sb.toString());
                    }
                }
            }
            if (partner != null) {
                if (chr.get().getCanTalk()) {
                    partner.getChr().getClient().sendPacket(PlayerShopPacket.shopChat(chr.get().getName() + " : " + message, 1));
                }
            }
        }
    }

    public final MapleTrade getPartner() {
        return partner;
    }

    public final void setPartner(final MapleTrade partner) {
        if (locked) {
            return;
        }
        this.partner = partner;
    }

    public final MapleCharacter getChr() {
        return chr.get();
    }

    public final int getNextTargetSlot() {
        if (items.size() >= 9) {
            return -1;
        }
        int ret = 1; //first slot
        for (IItem item : items) {
            if (item.getPosition() == ret) {
                ret++;
            }
        }
        return ret;
    }

    public final boolean setItems(final MapleClient c, final IItem item, byte targetSlot, final int quantity) {
        int target = getNextTargetSlot();
        final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        if (target == -1 || GameConstants.isPet(item.getItemId()) || isLocked() || (GameConstants.getInventoryType(item.getItemId()) == MapleInventoryType.CASH && quantity != 1) || (GameConstants.getInventoryType(item.getItemId()) == MapleInventoryType.EQUIP && quantity != 1)) {
            return false;
        }

        if (ii.isCash(item.getItemId())) {
            c.sendPacket(MaplePacketCreator.enableActions());
            return false;
        }

        final byte flag = item.getFlag();
        if (ItemFlag.UNTRADEABLE.check(flag) || ItemFlag.LOCK.check(flag)) {
            c.sendPacket(MaplePacketCreator.enableActions());
            return false;
        }
        if (ii.isDropRestricted(item.getItemId()) || ii.isAccountShared(item.getItemId())) {
            if (!(ItemFlag.KARMA_EQ.check(flag) || ItemFlag.KARMA_USE.check(flag))) {
                c.sendPacket(MaplePacketCreator.enableActions());
                return false;
            }
        }
        IItem tradeItem = item.copy();
        if (GameConstants.isThrowingStar(item.getItemId()) || GameConstants.isBullet(item.getItemId())) {
            tradeItem.setQuantity(item.getQuantity());
            MapleInventoryManipulator.removeFromSlot(c, GameConstants.getInventoryType(item.getItemId()), item.getPosition(), item.getQuantity(), true);
        } else {
            tradeItem.setQuantity((short) quantity);
            MapleInventoryManipulator.removeFromSlot(c, GameConstants.getInventoryType(item.getItemId()), item.getPosition(), (short) quantity, true);
        }
        if (targetSlot < 0) {
            targetSlot = (byte) target;
        } else {
            for (IItem itemz : items) {
                if (itemz.getPosition() == targetSlot) {
                    targetSlot = (byte) target;
                    break;
                }
            }
        }
        tradeItem.setPosition(targetSlot);
        addItem(tradeItem);
        return true;
    }

    private int check() { //0 = fine, 1 = invent space not, 2 = pickupRestricted
        if (chr.get().getMeso() + exchangeMeso < 0) {
            return 1;
        }
        final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        byte eq = 0, use = 0, setup = 0, etc = 0, cash = 0;
        for (final IItem item : exchangeItems) {
            switch (GameConstants.getInventoryType(item.getItemId())) {
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
                case CASH: // Not allowed, probably hacking
                    cash++;
                    break;
            }
            if (ii.isPickupRestricted(item.getItemId()) && chr.get().getInventory(GameConstants.getInventoryType(item.getItemId())).findById(item.getItemId()) != null) {
                return 2;
            } else if (ii.isPickupRestricted(item.getItemId()) && chr.get().haveItem(item.getItemId(), 1, true, true)) {
                return 2;
            }
        }
        if (chr.get().getInventory(MapleInventoryType.EQUIP).getNumFreeSlot() < eq || chr.get().getInventory(MapleInventoryType.USE).getNumFreeSlot() < use || chr.get().getInventory(MapleInventoryType.SETUP).getNumFreeSlot() < setup || chr.get().getInventory(MapleInventoryType.ETC).getNumFreeSlot() < etc || chr.get().getInventory(MapleInventoryType.CASH).getNumFreeSlot() < cash) {
            return 1;
        }
        return 0;
    }

    public final static void completeTrade(final MapleCharacter c) {
        final MapleTrade local = c.getTrade();
        final MapleTrade partner = local.getPartner();

        if (partner == null || local.locked) {
            return;
        }
        local.locked = true; // Locking the trade
        partner.getChr().getClient().sendPacket(MaplePacketCreator.getTradeConfirmation());

        partner.exchangeItems = local.items; // Copy this to partner's trade since it's alreadt accepted
        partner.exchangeMeso = local.meso; // Copy this to partner's trade since it's alreadt accepted

        if (partner.isLocked()) { // Both locked
            int lz = local.check(), lz2 = partner.check();
            if (lz == 0 && lz2 == 0) {
                local.CompleteTrade();
                partner.CompleteTrade();
            } else {
                // NOTE : IF accepted = other party but inventory is full, the item is lost.
                partner.cancel(partner.getChr().getClient(), lz == 0 ? lz2 : lz, true);
                local.cancel(c.getClient(), lz == 0 ? lz2 : lz, true);
            }
            partner.getChr().setTrade(null);
            c.setTrade(null);
            if (local.getChr().getClient().getAccID() == partner.getChr().getClient().getAccID()) {
                local.getChr().ban("修改数据包 - 同帐号角色交易", true, true, false);
                partner.getChr().ban("修改数据包 - 同帐号角色交易", true, true, false);
                FileoutputUtil.logToFile("logs/Hack/ban/交易异常.txt", "时间: " + FileoutputUtil.NowTime() + " IP: " + local.getChr().getClient().getSessionIPAddress() + " MAC: " + local.getChr().getNowMacs() + " " + local.getChr().getName() + " 和 " + partner.getChr().getName() + " 为同个帐号的角色且进行交易\r\n");
                local.getChr().getClient().getSession().close();
                partner.getChr().getClient().getSession().close();
            }
        }
    }

    public static final void cancelTrade(final MapleTrade Localtrade, final MapleClient c) {
        Localtrade.cancel(c);
        final MapleTrade partner = Localtrade.getPartner();
        if (partner != null && partner.getChr() != null) {
            if (partner.getChr().getClient() != null) {
                partner.cancel(partner.getChr().getClient());
            }
            partner.getChr().setTrade(null);
        }
        if (Localtrade.chr.get() != null) {
            Localtrade.chr.get().setTrade(null);
        }
    }

    public static final void startTrade(final MapleCharacter c) {
        if (c.getTrade() == null) {
            c.setTrade(new MapleTrade((byte) 0, c));
            c.getClient().sendPacket(MaplePacketCreator.getTradeStart(c.getClient(), c.getTrade(), (byte) 0));
        } else {
            c.getClient().sendPacket(MaplePacketCreator.serverNotice(5, "您目前已经在交易了"));
        }
    }

    public static final void inviteTrade(final MapleCharacter c1, final MapleCharacter c2) {
        if (World.isShutDown) {
            c1.getTrade().cancel(c1.getClient(), 1, false);
            c1.setTrade(null);
            c1.getClient().sendPacket(MaplePacketCreator.serverNotice(5, "目前无法交易。"));
            return;
        }
        if (c1 == null || c1.getTrade() == null || c2 == null) {
            return;
        }

        if (c2.getPlayerShop() != null) {
            c1.getTrade().cancel(c1.getClient(), 1, false);
            c1.setTrade(null);
            c1.getClient().sendPacket(MaplePacketCreator.serverNotice(5, "对方正在忙碌中。"));
            return;
        }

        if (c1.getTrade().getPartner() != null) {
            c1.getClient().sendPacket(MaplePacketCreator.serverNotice(5, "对方正在忙碌中。"));
            c1.getClient().sendPacket(MaplePacketCreator.enableActions());
            return;
        }

        if (c2.getTrade() == null && c1.getTrade().getPartner() == null) {
            c2.setTrade(new MapleTrade((byte) 1, c2));
            c2.getTrade().setPartner(c1.getTrade());
            c1.getTrade().setPartner(c2.getTrade());
            c2.getClient().sendPacket(MaplePacketCreator.getTradeInvite(c1));
        } else {
            c1.getClient().sendPacket(MaplePacketCreator.serverNotice(5, "另一位玩家正在交易中"));
        }
    }

    public static final void visitTrade(final MapleCharacter c1, final MapleCharacter c2) {
        if (c1.getTrade() != null && c1.getTrade().getPartner() == c2.getTrade() && c2.getTrade() != null && c2.getTrade().getPartner() == c1.getTrade()) {
            // We don't need to check for map here as the user is found via MapleMap.getCharacterById()
            c2.getClient().sendPacket(MaplePacketCreator.getTradePartnerAdd(c1));
            c1.getClient().sendPacket(MaplePacketCreator.getTradeStart(c1.getClient(), c1.getTrade(), (byte) 1));
//            c1.dropMessage(-2, "System : Use @tradehelp to see the list of trading commands");
//            c2.dropMessage(-2, "System : Use @tradehelp to see the list of trading commands");
        } else {
            c1.getClient().sendPacket(MaplePacketCreator.serverNotice(5, "交易已经被关闭."));
        }
    }

    public static final void declineTrade(final MapleCharacter c) {
        final MapleTrade trade = c.getTrade();
        if (trade != null) {
            if (trade.getPartner() != null) {
                MapleCharacter other = trade.getPartner().getChr();
                if (other != null) {
                    other.getTrade().cancel(other.getClient());
                    other.setTrade(null);
                    other.dropMessage(5, c.getName() + " 拒绝了你的邀请.");
                }
            }
            trade.cancel(c.getClient());
            c.setTrade(null);
        }
    }
}
