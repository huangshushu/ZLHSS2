/*
 This file is part of the ZeroFusion MapleStory Server
 Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
 Matthias Butz <matze@odinms.de>
 Jan Christian Meyer <vimes@odinms.de>
 ZeroFusion organized by "RMZero213" <RMZero213@hotmail.com>

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
package server;

import client.MapleCharacter;
import java.io.Serializable;
import client.inventory.Equip;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import client.inventory.IItem;
import constants.GameConstants;
import client.inventory.MaplePet;
import client.inventory.Item;
import client.inventory.ItemLoader;
import client.MapleClient;
import client.inventory.MapleRing;
import client.inventory.MapleInventoryIdentifier;
import client.inventory.MapleInventoryType;
import database.DBConPool;
import tools.FileoutputUtil;
import tools.packet.MTSCSPacket;
import tools.Pair;

public class CashShop implements Serializable {

    private static final long serialVersionUID = 231541893513373579L;
    private int accountId, characterId;
    private ItemLoader factory;
    private List<IItem> inventory = new ArrayList<>();
    private List<Integer> uniqueids = new ArrayList<>();

    public CashShop(int accountId, int characterId, int jobType) throws SQLException {
        this.accountId = accountId;
        this.characterId = characterId;

        //if (jobType / 1000 == 1) {
        //    factory = ItemLoader.CASHSHOP_CYGNUS;
        //} else if ((jobType / 100 == 21 || jobType / 100 == 20) && jobType != 2001) {
        //    factory = ItemLoader.CASHSHOP_ARAN;
        //} else if (jobType == 2001 || jobType / 100 == 22) {
        //    factory = ItemLoader.CASHSHOP_EVAN;
        //} else if (jobType >= 3000) {
        //    factory = ItemLoader.CASHSHOP_RESIST;
        //} else if (jobType / 10 == 43) {
        //    factory = ItemLoader.CASHSHOP_DB;
        //} else {
            factory = ItemLoader.CASHSHOP_EXPLORER;
        //}

        for (Pair<IItem, MapleInventoryType> item : factory.loadItems(false, accountId).values()) {
            inventory.add(item.getLeft());
        }
    }

    public int getItemsSize() {
        return inventory.size();
    }

    public List<IItem> getInventory() {
        return inventory;
    }

    public IItem findByCashId(int cashId) {
        for (IItem item : inventory) {
            if (item.getUniqueId() == cashId) {
                return item;
            }
        }

        return null;
    }

    public void checkExpire(MapleClient c) {
        List<IItem> toberemove = new ArrayList<>();
        for (IItem item : inventory) {
            if (item != null && !GameConstants.isPet(item.getItemId()) && item.getExpiration() > 0 && item.getExpiration() < System.currentTimeMillis()) {
                toberemove.add(item);
            }
        }
        if (toberemove.size() > 0) {
            for (IItem item : toberemove) {
                removeFromInventory(item);
                c.sendPacket(MTSCSPacket.cashItemExpired(item.getUniqueId()));
            }
            toberemove.clear();
        }
    }

    public IItem toItem(CashItemInfo cItem, MapleCharacter chr) {
        return toItem(cItem, MapleInventoryManipulator.getUniqueId(cItem.getId(), null), "", chr);
    }

    public IItem toItem(CashItemInfo cItem) {
        return toItem(cItem, MapleInventoryManipulator.getUniqueId(cItem.getId(), null), "");
    }

    public IItem toItem(CashItemInfo cItem, String gift) {
        return toItem(cItem, MapleInventoryManipulator.getUniqueId(cItem.getId(), null), gift);
    }

    public IItem toItem(CashItemInfo cItem, int uniqueid) {
        return toItem(cItem, uniqueid, "");
    }

    public IItem toItem(CashItemInfo cItem, int uniqueid, String gift) {
        return toItem(cItem, null, uniqueid, gift);
    }

    public IItem toItem(CashItemInfo cItem, int uniqueid, String gift, MapleCharacter chr) {
        return toItem(cItem, chr, uniqueid, gift);
    }

    public IItem toItem(CashItemInfo cItem, MapleCharacter chr, int uniqueid, String gift) {
        if (uniqueid <= 0) {
            uniqueid = MapleInventoryIdentifier.getInstance();
        }
        long period = cItem.getPeriod();
        if (period <= 0) {
            period = 45;
        }
        boolean 加倍卡 = false;
        if ((cItem.getId() >= 5210000 && cItem.getId() <= 5210011) || (cItem.getId() >= 5360000 && cItem.getId() <= 5360015)) {
            加倍卡 = true;
        }
        // if (chr != null) {
        //if (chr.isVip()) {
        // if (chr.isVip(chr.getClient().getAccID())) {
        //  if (!加倍卡) {
        // switch (/*chr.getVip()*/chr.getVip(chr.getClient().getAccID())) {
        /*  case 1:
                            period += 30;
                            break;
                        case 2:
                            period += 60;
                            break;
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                            period = 36500;
                            break;
                    }
                }
            }*/
        // }

        //if (chr != null) {
            if (!加倍卡) {
                period = 36500;
            }
       // }
        if (cItem.getId() == 1112015 || cItem.getId() == 1112810 || cItem.getId() == 1112811 || cItem.getId() == 1112001 || cItem.getId() == 1112007 || cItem.getId() == 1112012 || cItem.getId() == 1112003) {
            period = 36500;
        }
        // 护身符
        if (cItem.getId() == 5320000) {
            period = 90;
        }
        if (GameConstants.isPet(cItem.getId())) {
            period = 90;
        }

        //if (cItem.getId() == 1112015 || cItem.getId() == 1112006 || cItem.getId() == 1112811 || cItem.getId() == 1112810 || cItem.getId() == 1112812 || cItem.getId() == 1112001 || cItem.getId() == 1112005 || cItem.getId() == 1112007 || cItem.getId() == 1112003 || cItem.getId() == 1112012 || cItem.getId() == 1112801 || cItem.getId() == 1112002 || cItem.getId() == 1112823 || cItem.getId() == 1112013 || cItem.getId() == 1112816 || cItem.getId() == 1112802 || cItem.getId() == 1112800) {
        //    period = 36500;
        //}
        IItem ret = null;
        if (GameConstants.getInventoryType(cItem.getId()) == MapleInventoryType.EQUIP) {
            Equip eq = (Equip) MapleItemInformationProvider.getInstance().getEquipById(cItem.getId());
            eq.setUniqueId(uniqueid);
            eq.setExpiration((long) (System.currentTimeMillis() + (long) (period * 24 * 60 * 60 * 1000)));
            eq.setGiftFrom(gift);
            if (GameConstants.isEffectRing(cItem.getId()) && uniqueid > 0) {
                MapleRing ring = MapleRing.loadFromDb(uniqueid);
                if (ring != null) {
                    eq.setRing(ring);
                }
            }
            ret = eq.copy();
        } else {
            Item item = new Item(cItem.getId(), (byte) 0, (short) cItem.getCount(), (byte) 0, uniqueid);
            item.setExpiration((long) (System.currentTimeMillis() + (long) (period * 24 * 60 * 60 * 1000)));
            item.setGiftFrom(gift);
            if (GameConstants.isPet(cItem.getId())) {
                final MaplePet pet = MaplePet.createPet(cItem.getId(), uniqueid);
                if (pet != null) {
                    item.setPet(pet);
                }
            }
            ret = item.copy();
        }
        return ret;
    }

    public void addToInventory(IItem item) {
        inventory.add(item);
    }

    public void removeFromInventory(IItem item) {
        inventory.remove(item);
    }

    public void gift(int recipient, String from, String message, int sn) {
        gift(recipient, from, message, sn, 0);
    }

    public void gift(int recipient, String from, String message, int sn, int uniqueid) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("INSERT INTO `gifts` VALUES (DEFAULT, ?, ?, ?, ?, ?)");
            ps.setInt(1, recipient);
            ps.setString(2, from);
            ps.setString(3, message);
            ps.setInt(4, sn);
            ps.setInt(5, uniqueid);
            ps.executeUpdate();
            ps.close();
        } catch (SQLException sqle) {
            sqle.printStackTrace();
            FileoutputUtil.outError("logs/资料库异常.txt", sqle);
        }
    }

    public List<Pair<IItem, String>> loadGifts() {
        List<Pair<IItem, String>> gifts = new ArrayList<>();
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT * FROM `gifts` WHERE `recipient` = ?");
            ps.setInt(1, characterId);
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                CashItemInfo cItem = CashItemFactory.getInstance().getItem(rs.getInt("sn"));
                if (cItem == null) {
                    continue;
                }
                IItem item = toItem(cItem, rs.getInt("uniqueid"), rs.getString("from"));
                gifts.add(new Pair<>(item, rs.getString("message")));
                uniqueids.add(item.getUniqueId());
                List<CashItemInfo> packages = CashItemFactory.getInstance().getPackageItems(cItem.getId());
                if (packages != null && packages.size() > 0) {
                    for (CashItemInfo packageItem : packages) {
                        addToInventory(toItem(packageItem, rs.getString("from")));
                    }
                } else {
                    addToInventory(item);
                }
            }

            rs.close();
            ps.close();
            ps = con.prepareStatement("DELETE FROM `gifts` WHERE `recipient` = ?");
            ps.setInt(1, characterId);
            ps.executeUpdate();
            ps.close();
            save(null);
        } catch (SQLException sqle) {
            FileoutputUtil.outError("logs/资料库异常.txt", sqle);
            sqle.printStackTrace();
        }
        return gifts;
    }

    public boolean canSendNote(int uniqueid) {
        return uniqueids.contains(uniqueid);
    }

    public void sendedNote(int uniqueid) {
        for (int i = 0; i < uniqueids.size(); i++) {
            if (uniqueids.get(i).intValue() == uniqueid) {
                uniqueids.remove(i);
            }
        }
    }

    public void save(Connection con) throws SQLException {
        List<Pair<IItem, MapleInventoryType>> itemsWithType = new ArrayList<>();

        for (IItem item : inventory) {
            itemsWithType.add(new Pair<>(item, GameConstants.getInventoryType(item.getItemId())));
        }

        if (con != null) {
            factory.saveItems(itemsWithType, con, accountId);
        } else {
            factory.saveItems(itemsWithType, accountId);
        }
    }
}
