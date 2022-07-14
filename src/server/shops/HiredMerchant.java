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
package server.shops;

import java.util.concurrent.ScheduledFuture;
import client.inventory.IItem;
import client.inventory.ItemFlag;
import constants.GameConstants;
import client.MapleCharacter;
import client.MapleClient;
import constants.ServerConfig;
import handling.channel.ChannelServer;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;
import server.MapleInventoryManipulator;
import server.MapleItemInformationProvider;
import server.Timer.EtcTimer;
import server.maps.MapleMapObjectType;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;
import tools.packet.PlayerShopPacket;

public class HiredMerchant extends AbstractPlayerStore {

    public ScheduledFuture<?> schedule;
    private final List<String> blacklist;
    private int storeid;
    private final long start;

    public HiredMerchant(MapleCharacter owner, int itemId, String desc) {
        super(owner, itemId, desc, "", 3);
        start = System.currentTimeMillis();
        blacklist = new LinkedList<>();
        this.schedule = EtcTimer.getInstance().schedule(new Runnable() {
            @Override
            public void run() {
                HiredMerchant.this.removeAllVisitors(-1, -1);
                closeShop(true, true);
            }
        }, 1000 * 60 * 60 * 72);
    }

    /**
     *
     * @return
     */
    @Override
    public byte getShopType() {
        return IMaplePlayerShop.HIRED_MERCHANT;
    }

    public final void setStoreId(final int storeid) {
        this.storeid = storeid;
    }

    public List<MaplePlayerShopItem> searchItem(final int itemSearch) {
        final List<MaplePlayerShopItem> itemz = new LinkedList<>();
        for (MaplePlayerShopItem item : items) {
            if (item.item.getItemId() == itemSearch && item.bundles > 0) {
                itemz.add(item);
            }
        }
        return itemz;
    }

    @Override
    public void buy(MapleClient c, int item, short quantity) {
        final MaplePlayerShopItem pItem = items.get(item);
        final IItem shopItem = pItem.item;
        final IItem newItem = shopItem.copy();
        final short perbundle = newItem.getQuantity();
        final int theQuantity = (pItem.price * quantity);
        newItem.setQuantity((short) (quantity * perbundle));
        if (pItem.bundles <= 0 || pItem.bundles >= 60000) {
            c.getPlayer().dropMessage(1, "系统繁忙，请稍后再试！");
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }

        byte flag = newItem.getFlag();

        if (ItemFlag.KARMA_EQ.check(flag)) {
            newItem.setFlag((byte) (flag - ItemFlag.KARMA_EQ.getValue()));
        } else if (ItemFlag.KARMA_USE.check(flag)) {
            newItem.setFlag((byte) (flag - ItemFlag.KARMA_USE.getValue()));
        }

        if (!c.getPlayer().canHold(newItem.getItemId())) {
            c.getPlayer().dropMessage(1, "您的背包满了");
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }

        if (pItem.bundles <= 0 || pItem.bundles >= 60000) {
            c.getPlayer().dropMessage(1, "系统繁忙，请稍后再试！");
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }
        if (MapleInventoryManipulator.addFromDrop(c, newItem, false)) {
            pItem.bundles -= quantity; // Number remaining in the store
            final int gainmeso = getMeso() + (pItem.price * quantity) - GameConstants.EntrustedStoreTax(pItem.price * quantity);
            setMeso(gainmeso);
            //final int gainmeso = getMeso() + (pItem.price * quantity);
            //setMeso(gainmeso - GameConstants.EntrustedStoreTax(gainmeso));
            c.getPlayer().gainMeso(-pItem.price * quantity, false);
            MapleCharacter Owner = getMCOwnerWorld();
            if (Owner != null) {
                Owner.dropMessage(5, "道具 " + MapleItemInformationProvider.getInstance().getName(newItem.getItemId()) + " (" + perbundle + ") × " + quantity + " 已被其他玩家购买，还剩下：" + pItem.bundles + " 个");
            }
            newItem.setGMLog(c.getPlayer().getName() + " Buy from  " + getOwnerName() + "'s Merchant " + newItem.getItemId() + "x" + quantity + " Prize : " + pItem.price);
            if (ServerConfig.LOG_MRECHANT) {
                FileoutputUtil.logToFile("logs/Data/精灵商人.txt", "\r\n 时间　[" + FileoutputUtil.NowTime() + "] IP: " + c.getSession().remoteAddress().toString().split(":")[0] + " 玩家 " + c.getAccountName() + " " + c.getPlayer().getName() + " 从  " + getOwnerName() + " 的精灵商人购买了" + MapleItemInformationProvider.getInstance().getName(newItem.getItemId()) + " (" + newItem.getItemId() + ") x" + quantity + " 单个价钱为 : " + pItem.price);
            }
            final StringBuilder sb = new StringBuilder("[GM 密语] 玩家 " + c.getPlayer().getName() + " 从  " + getOwnerName() + " 的精灵商人购买了 " + MapleItemInformationProvider.getInstance().getName(newItem.getItemId()) + "(" + newItem.getItemId() + ") x" + quantity + " 单个价钱为 : " + pItem.price);
            for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                for (MapleCharacter chr : cserv.getPlayerStorage().getAllCharactersThreadSafe()) {
                    if (chr.get_control_精灵商人()) {
                        chr.dropMessage(sb.toString());
                    }
                }
            }
        } else {
            c.getPlayer().dropMessage(1, "您的背包满了，请检查您的背包！");
            c.sendPacket(MaplePacketCreator.enableActions());
        }
    }

    @Override
    public void closeShop(boolean saveItems, boolean remove) {
        try {
            if (schedule != null) {
                schedule.cancel(false);
            }
            if (saveItems) {
                saveItems();
                items.clear();
            }
            if (remove) {
                ChannelServer.getInstance(channel).removeMerchant(this);
                getMap().broadcastMessage(PlayerShopPacket.destroyHiredMerchant(getOwnerId()));
            }
            setCanShop(false);
            getMap().removeMapObject(this);
            schedule = null;
        } catch (Exception se) {
            FileoutputUtil.outError("logs/精灵商人关闭异常.txt", se);
        }
    }

    public int getTimeLeft() {
        return (int) ((System.currentTimeMillis() - start) / 1000);
    }

    public final int getStoreId() {
        return storeid;
    }

    @Override
    public MapleMapObjectType getType() {
        return MapleMapObjectType.HIRED_MERCHANT;
    }

    @Override
    public void sendDestroyData(MapleClient client) {
        if (isAvailable()) {
            client.sendPacket(PlayerShopPacket.destroyHiredMerchant(getOwnerId()));
        }
    }

    @Override
    public void sendSpawnData(MapleClient client) {
        if (isAvailable()) {
            client.sendPacket(PlayerShopPacket.spawnHiredMerchant(this));
        }
    }

    public final boolean isInBlackList(final String bl) {
        return blacklist.contains(bl);
    }

    public final void addBlackList(final String bl) {
        blacklist.add(bl);
    }

    public final void removeBlackList(final String bl) {
        blacklist.remove(bl);
    }

    public final void sendBlackList(final MapleClient c) {
        c.sendPacket(PlayerShopPacket.MerchantBlackListView(blacklist));
    }

    public final void sendVisitor(final MapleClient c) {
        c.sendPacket(PlayerShopPacket.MerchantVisitorView(visitors));
    }
}
