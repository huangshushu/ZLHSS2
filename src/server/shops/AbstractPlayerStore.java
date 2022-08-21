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

import client.MapleCharacter;
import client.MapleClient;
import client.inventory.IItem;
import client.inventory.ItemLoader;
import client.inventory.MapleInventoryType;
import constants.GameConstants;
import database.DBConPool;
import handling.channel.ChannelServer;
import handling.world.World;
import server.maps.AbstractMapleMapObject;
import server.maps.MapleMap;
import server.maps.MapleMapObjectType;
import tools.FilePrinter;
import tools.FileoutputUtil;
import tools.Pair;
import tools.packet.PlayerShopPacket;

import java.lang.ref.WeakReference;
import java.sql.*;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

public abstract class AbstractPlayerStore extends AbstractMapleMapObject implements IMaplePlayerShop {

    /**
     * 商店开启状态
     */
    protected boolean isOpened = false;
    protected boolean available = false;
    protected boolean canShop = false;
    protected String ownerName, des, pass;
    protected int ownerId, ownerAccount, itemId, channel, map;
    protected AtomicInteger meso = new AtomicInteger(0);
    protected WeakReference<MapleCharacter>[] chrs;
    protected List<String> visitors = new LinkedList<>();
    protected List<BoughtItem> bought = new LinkedList<>();
    protected List<MaplePlayerShopItem> items = new LinkedList<>();
    protected List<Pair<String, Byte>> messages = new LinkedList<Pair<String, Byte>>();

    public AbstractPlayerStore(MapleCharacter owner, int itemId, String desc, String pass, int slots) {
        this.setPosition(owner.getPosition());
        this.ownerName = owner.getName();
        this.ownerId = owner.getId();
        this.ownerAccount = owner.getAccountID();
        this.itemId = itemId;
        this.des = desc;
        this.pass = pass;
        this.map = owner.getMapId();
        this.channel = owner.getClient().getChannel();
        chrs = new WeakReference[slots];
        for (int i = 0; i < chrs.length; i++) {
            chrs[i] = new WeakReference<>(null);
        }
    }

    @Override
    public int getMaxSize() {
        return chrs.length + 1;
    }

    @Override
    public int getSize() {
        return getFreeSlot() == -1 ? getMaxSize() : getFreeSlot();
    }

    @Override
    public void broadcastToVisitors(byte[] packet) {
        broadcastToVisitors(packet, true);
    }

    public void broadcastToVisitors(byte[] packet, boolean owner) {
        for (WeakReference<MapleCharacter> chr : chrs) {
            if (chr != null && chr.get() != null) {
                chr.get().getClient().sendPacket(packet);
            }
        }
        if (getShopType() != IMaplePlayerShop.HIRED_MERCHANT && owner && getMCOwner() != null) {
            getMCOwner().getClient().sendPacket(packet);
        }
    }

    public void broadcastToVisitors(byte[] packet, int exception) {
        for (WeakReference<MapleCharacter> chr : chrs) {
            if (chr != null && chr.get() != null && getVisitorSlot(chr.get()) != exception) {
                chr.get().getClient().sendPacket(packet);
            }
        }
        if (getShopType() != IMaplePlayerShop.HIRED_MERCHANT && getShopType() != IMaplePlayerShop.PLAYER_SHOP
                && getMCOwner() != null) {
            getMCOwner().getClient().sendPacket(packet);
        } else if (getShopType() == IMaplePlayerShop.PLAYER_SHOP && getMCOwner() != null) {
            getMCOwner().getClient().sendPacket(packet);
        }
    }

    @Override
    public int getMeso() {
        return meso.get();
    }

    @Override
    public void setMeso(int meso) {
        this.meso.set(meso);
    }

    /**
     * 设定商店是否开启
     *
     * @param open 商店开是不是开启的
     */
    @Override
    public void setOpen(boolean open) {
        this.isOpened = open;
    }

    /**
     * 取得商店是不是开启的
     *
     * @return 商店是否开著
     */
    @Override
    public boolean isOpen() {
        return isOpened;
    }

    /**
     * 储存商店的物品到资料库中
     *
     * @return 储存失败与否
     */
    public boolean saveItems() {

        if (getShopType() != IMaplePlayerShop.HIRED_MERCHANT) { // hired merch only
            return false;
        }

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {

            PreparedStatement ps = con
                    .prepareStatement("DELETE FROM hiredmerch WHERE accountid = ? OR characterid = ?");
            ps.setInt(1, ownerAccount);
            ps.setInt(2, ownerId);
            ps.execute();
            ps.close();
            ps = con.prepareStatement(
                    "INSERT INTO hiredmerch (characterid, accountid, Mesos, time) VALUES (?, ?, ?, ?)",
                    Statement.RETURN_GENERATED_KEYS);
            ps.setInt(1, ownerId);
            ps.setInt(2, ownerAccount);
            ps.setInt(3, meso.get());
            ps.setLong(4, System.currentTimeMillis());

            ps.executeUpdate();

            ResultSet rs = ps.getGeneratedKeys();
            if (!rs.next()) {
                rs.close();
                ps.close();
                System.out.println("[SaveItems] 保存精灵商店出错 - 1");
                throw new RuntimeException("Error, adding merchant to DB");
            }
            final int packageid = rs.getInt(1);
            rs.close();
            ps.close();
            List<Pair<IItem, MapleInventoryType>> iters = new ArrayList<>();
            IItem item;
            for (MaplePlayerShopItem pItems : items) {
                if (pItems.item == null || pItems.bundles <= 0) {
                    continue;
                }
                if (pItems.item.getQuantity() <= 0 && !GameConstants.isRechargable(pItems.item.getItemId())) {
                    continue;
                }
                item = pItems.item.copy();
                item.setQuantity((short) (item.getQuantity() * pItems.bundles));
                iters.add(new Pair<>(item, GameConstants.getInventoryType(item.getItemId())));
            }
            ItemLoader.HIRED_MERCHANT.saveItems(iters, packageid, ownerAccount);
            return true;
        } catch (SQLException se) {
            System.out.println("[SaveItems] 保存精灵商店出错 - 2");
            FilePrinter.printError("AbstractPlayerStore.txt", se, "saveItems");
            FileoutputUtil.outError("logs/资料库异常.txt", se);
        }
        return false;
    }

    /**
     * 取得商店目前第 num 的顾客
     *
     * @param num 第几个顾客
     * @return
     */
    public MapleCharacter getVisitor(int num) {
        return chrs[num].get();
    }

    /**
     * 传送更新商店的封包
     */
    @Override
    public void update() {
        if (isAvailable()) {
            if (getShopType() == IMaplePlayerShop.HIRED_MERCHANT) {
                getMap().broadcastMessage(PlayerShopPacket.updateHiredMerchant((HiredMerchant) this));
            } else if (getMCOwner() != null) {
                getMap().broadcastMessage(PlayerShopPacket.sendPlayerShopBox(getMCOwner()));
            }
        }
    }

    /**
     * 新增一个顾客
     *
     * @param visitor 来购物的角色
     */
    @Override
    public void addVisitor(MapleCharacter visitor) {
        int i = getFreeSlot();
        if (i > 0) {
            if (getShopType() >= 3) {
                broadcastToVisitors(PlayerShopPacket.getMiniGameNewVisitor(visitor, i, (MapleMiniGame) this));
            } else {
                broadcastToVisitors(PlayerShopPacket.shopVisitorAdd(visitor, i));
            }
            chrs[i - 1] = new WeakReference<>(visitor);
            if (!isOwner(visitor)) {
                visitors.add(visitor.getName());
            }
            if (i == 3) {
                update();
            }
        }
    }

    /**
     * 移除顾客
     *
     * @param visitor
     */
    @Override
    public void removeVisitor(MapleCharacter visitor) {
        final byte slot = getVisitorSlot(visitor);
        boolean shouldUpdate = getFreeSlot() == -1;
        if (slot > 0) {
            broadcastToVisitors(PlayerShopPacket.shopVisitorLeave(slot), slot);
            chrs[slot - 1] = new WeakReference<>(null);
            if (shouldUpdate) {
                update();
            }
        }
    }

    @Override
    public byte getVisitorSlot(MapleCharacter visitor) {
        for (byte i = 0; i < chrs.length; i++) {
            if (chrs[i] != null && chrs[i].get() != null && chrs[i].get().getId() == visitor.getId()) {
                return (byte) (i + 1);
            }
        }
        if (visitor.getId() == ownerId) { // can visit own store in merch, otherwise not.
            return 0;
        }
        return -1;
    }

    @Override
    public void removeAllVisitors(int error, int type) {
        for (int i = 0; i < chrs.length; i++) {
            MapleCharacter visitor = getVisitor(i);
            if (visitor != null) {
                if (type != -1) {
                    visitor.getClient().sendPacket(PlayerShopPacket.shopErrorMessage(error, type));
                }
                broadcastToVisitors(PlayerShopPacket.shopVisitorLeave(getVisitorSlot(visitor)),
                        getVisitorSlot(visitor));
                visitor.setPlayerShop(null);
                chrs[i] = new WeakReference<>(null);
                type++;
            }
        }
        update();
    }

    @Override
    public String getOwnerName() {
        return ownerName;
    }

    @Override
    public int getOwnerId() {
        return ownerId;
    }

    @Override
    public int getOwnerAccId() {
        return ownerAccount;
    }

    @Override
    public String getDescription() {
        if (des == null) {
            return "";
        }
        return des;
    }

    @Override
    public List<Pair<Byte, MapleCharacter>> getVisitors() {
        List<Pair<Byte, MapleCharacter>> chrz = new LinkedList<>();
        for (byte i = 0; i < chrs.length; i++) { // include owner or no
            if (chrs[i] != null && chrs[i].get() != null) {
                chrz.add(new Pair<>((byte) (i + 1), chrs[i].get()));
            }
        }
        return chrz;
    }

    @Override
    public List<MaplePlayerShopItem> getItems() {
        return items;
    }

    @Override
    public void addItem(MaplePlayerShopItem item) {
        // System.out.println("Adding item ... 2");
        items.add(item);
    }

    @Override
    public boolean removeItem(int item) {
        return false;
    }

    @Override
    public void removeFromSlot(int slot) {
        items.remove(slot);
    }

    @Override
    public byte getFreeSlot() {
        for (byte i = 0; i < chrs.length; i++) {
            if (chrs[i] == null || chrs[i].get() == null) {
                return (byte) (i + 1);
            }
        }
        return -1;
    }

    @Override
    public int getItemId() {
        return itemId;
    }

    @Override
    public boolean isOwner(MapleCharacter chr) {
        return chr.getId() == ownerId && chr.getName().equals(ownerName);
    }

    @Override
    public String getPassword() {
        if (pass == null) {
            return "";
        }
        return pass;
    }

    @Override
    public void sendDestroyData(MapleClient client) {
    }

    @Override
    public void sendSpawnData(MapleClient client) {
    }

    @Override
    public MapleMapObjectType getType() {
        return MapleMapObjectType.SHOP;
    }

    public MapleCharacter getMCOwner() {
        return getMap().getCharacterById(ownerId);
    }

    public MapleCharacter getMCOwnerWorld() {
        int ourChannel = World.Find.findChannel(ownerId);
        if (ourChannel <= 0) {
            return null;
        }
        return ChannelServer.getInstance(ourChannel).getPlayerStorage().getCharacterById(ownerId);
    }

    public MapleMap getMap() {
        return ChannelServer.getInstance(channel).getMapFactory().getMap(map);
    }

    @Override
    public int getGameType() {
        if (getShopType() == IMaplePlayerShop.HIRED_MERCHANT) { // hiredmerch
            return 5;
        } else if (getShopType() == IMaplePlayerShop.PLAYER_SHOP) { // shop lol
            return 4;
        } else if (getShopType() == IMaplePlayerShop.OMOK) { // omok
            return 1;
        } else if (getShopType() == IMaplePlayerShop.MATCH_CARD) { // matchcard
            return 2;
        }
        return 0;
    }

    @Override
    public boolean isAvailable() {
        return available;
    }

    @Override
    public void setAvailable(boolean b) {
        this.available = b;
    }

    @Override
    public List<BoughtItem> getBoughtItems() {
        return bought;
    }

    @Override
    public boolean getCanShop() {
        return canShop;
    }

    @Override
    public void setCanShop(boolean CanShop) {
        canShop = CanShop;
    }

    public final List<Pair<String, Byte>> getMessages() {
        return messages;
    }

    public static final class BoughtItem {

        public int id;
        public int quantity;
        public int totalPrice;
        public String buyer;

        public BoughtItem(final int id, final int quantity, final int totalPrice, final String buyer) {
            this.id = id;
            this.quantity = quantity;
            this.totalPrice = totalPrice;
            this.buyer = buyer;
        }
    }
}
