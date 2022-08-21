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

import client.MapleCharacter;
import client.MapleClient;
import client.inventory.IItem;
import client.inventory.ItemLoader;
import client.inventory.MapleInventoryType;
import constants.GameConstants;
import constants.ServerConfig;
import constants.WorldConstants;
import database.DBConPool;
import handling.world.World;
import server.MapleInventoryManipulator;
import server.MerchItemPackage;
import server.maps.MapleMap;
import tools.FileoutputUtil;
import tools.Pair;
import tools.data.LittleEndianAccessor;
import tools.packet.PlayerShopPacket;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class HiredMerchantHandler {

    public static final void UseHiredMerchant(final LittleEndianAccessor slea, final MapleClient c) {
        if (c == null || c.getPlayer() == null || c.getPlayer().getMap() == null) {
            if (c != null && c.getPlayer() != null) {
                c.getPlayer().dropMessage("发生未知的错误，请稍后再试。");
            }
            return;
        }
        if (c.getPlayer().getMap().allowPersonalShop()) {
            final byte state = checkExistance(c.getPlayer().getAccountID(), c.getPlayer().getId());
            final int HMCH = MapleMap.getMerchantChannel(c.getPlayer());

            switch (state) {
                case 1:
                    c.getPlayer().dropMessage(1, "请先去找富兰德里领取你之前摆的东西");
                    // "(第二组密码随便打)");
                    break;
                case 0:
                    boolean merch = World.hasMerchant(c.getPlayer().getAccountID());
                    if (!merch) {
                        if (slea.available() > 0) {
                            if (!WorldConstants.JZSD) {
                                c.sendPacket(PlayerShopPacket.sendTitleBox());
                            } else {
                                c.getPlayer().dropMessage(1, "当前服务器无法使用精灵商人。");
                            }
                        }
                    } else {
                        c.getPlayer().dropMessage(1, "请先关闭在" + HMCH + "频的精灵商人。");
                    }
                    break;
                default:
                    c.getPlayer().dropMessage(1, "发生了未知的错误.");
                    break;
            }
        } else {
            c.getSession().close();
        }
    }

    private static byte checkExistance(final int accid, final int charid) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection(); PreparedStatement ps = con.prepareStatement("SELECT * from hiredmerch where accountid = ? OR characterid = ?")) {
            ps.setInt(1, accid);
            ps.setInt(2, charid);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    ps.close();
                    rs.close();
                    return 1;
                }
            }
            return 0;
        } catch (SQLException se) {
            FileoutputUtil.outError("logs/资料库异常.txt", se);
            return -1;
        }
    }

    public static final void MerchantItemStore(final LittleEndianAccessor slea, final MapleClient c) {
        if (c.getPlayer() == null) {
            return;
        }
        final byte operation = slea.readByte();

        switch (operation) {
            case 20: {
                String _2ndpw;
                _2ndpw = slea.readMapleAsciiString();
                /*if (c.getSecondPassword() != null) {
                    if (_2ndpw == null) { // 确认是否封包挂
                        c.getPlayer().dropMessage(1, "请输入密码。");
                        return;
                    }
                    if (!c.getCheckSecondPassword(_2ndpw)) { // 错误密码
                        c.getPlayer().dropMessage(1, "密码错误。");
                        c.getPlayer().setConversation(0);
                        return;
                    }
                }*/
                final int conv = c.getPlayer().getConversation();
                final int HMMap = MapleMap.getMerchantMap(c.getPlayer());
                final int HMChannel = MapleMap.getMerchantChannel(c.getPlayer());
                boolean merch = World.hasMerchant(c.getPlayer().getAccountID());
                if (merch) {
                    //c.getPlayer().dropMessage(1, "请关闭商店后在试一次.");
                    c.sendPacket(PlayerShopPacket.ShowMerchItemStore(9030000, HMMap, HMChannel));
                    c.getPlayer().setConversation(0);
                } else if (conv == 3) { // Hired Merch
                    final MerchItemPackage pack = loadItemFromDatabase(c.getPlayer().getId(), c.getPlayer().getAccountID());

                    if (pack == null) {
                        //c.getPlayer().dropMessage(1, "你没有在这边置放道具!");
                        c.sendPacket(PlayerShopPacket.merchItemStore((byte) 0x25));
                        c.getPlayer().setConversation(0);
                    } else if (c.getPlayer().getMeso() + pack.getMesos() >= 2147483647) {
                        c.getPlayer().dropMessage(1, "您的钱领取过后将会过多，请先将多余的钱放置仓库!");
                        c.getPlayer().setConversation(0);
                    } else if (pack.getItems().size() <= 0) { //error fix for complainers.
                        if (!check(c.getPlayer(), pack)) {
                            c.sendPacket(PlayerShopPacket.merchItem_Message((byte) 0x21));
                            return;
                        }
                        for (IItem item : pack.getItems()) {
                            MapleInventoryManipulator.addFromDrop(c, item, true);
                        }
                        if (deletePackage(c.getPlayer().getId(), c.getPlayer().getAccountID(), pack.getPackageid())) {
                            c.getPlayer().gainMeso(pack.getMesos(), true);
                            c.getPlayer().dropMessage(1, "你已经从精灵商人领取了" + pack.getMesos() + "枫币");
                            //c.sendPacket(PlayerShopPacket.merchItem_Message((byte) 0x1d));
                            c.getPlayer().setConversation(0);
                        } else {
                            c.getPlayer().dropMessage(1, "发生未知的错误.");
                        }
                        String output = "";
                        for (IItem item : pack.getItems()) {
                            output += item.getItemId() + "(" + item.getQuantity() + "), ";
                        }
                        if (ServerConfig.LOG_MRECHANT) {
                            FileoutputUtil.logToFile("logs/Data/精灵商人领回.txt", FileoutputUtil.NowTime() + "帐号角色名字:" + c.getAccountName() + " " + c.getPlayer().getName() + " 从精灵商人取回枫币: " + pack.getMesos() + " 和" + pack.getItems().size() + "件物品[" + output + "]\r\n");
                        }
                        c.getPlayer().setConversation(0);
                    } else {
                        c.sendPacket(PlayerShopPacket.merchItemStore_ItemData(pack));
                    }
                }
                break;
            }
            case 25: { // Request take out iteme
                if (c.getPlayer().getConversation() != 3) {
                    return;
                }
                c.sendPacket(PlayerShopPacket.merchItemStore((byte) 0x24));
                break;
            }
            case 26: { // Take out item
                if (c.getPlayer().getConversation() != 3) {
                    return;
                }
                final MerchItemPackage pack = loadItemFromDatabase(c.getPlayer().getId(), c.getPlayer().getAccountID());

                if (pack == null) {
                    c.getPlayer().dropMessage(1, "未知的错误.");
                    return;
                }
                if (!check(c.getPlayer(), pack)) {
                    c.sendPacket(PlayerShopPacket.merchItem_Message((byte) 0x21));
                    return;
                }

                if (deletePackage(c.getPlayer().getId(), c.getPlayer().getAccountID(), pack.getPackageid())) {
                    String output = "";
                    c.getPlayer().gainMeso(pack.getMesos(), true);
                    for (IItem item : pack.getItems()) {
                        MapleInventoryManipulator.addFromDrop(c, item, true);
                        output += item.getItemId() + "(" + item.getQuantity() + "), ";
                    }
                    c.sendPacket(PlayerShopPacket.merchItem_Message((byte) 0x1d));
                    if (ServerConfig.LOG_MRECHANT) {
                        FileoutputUtil.logToFile("logs/Data/精灵商人领回.txt", FileoutputUtil.NowTime() + "帐号角色名字:" + c.getAccountName() + " " + c.getPlayer().getName() + " 从精灵商人取回枫币: " + pack.getMesos() + " 和" + pack.getItems().size() + "件物品[" + output + "]\r\n");
                    }
                    c.getPlayer().setConversation(0);
                } else {
                    c.getPlayer().dropMessage(1, "发生未知的错误.");
                }
                break;
            }
            case 27: { // Exit
                c.getPlayer().setConversation(0);
                break;
            }
        }
    }

    private static final boolean check(final MapleCharacter chr, final MerchItemPackage pack) {
        if (chr.getMeso() + pack.getMesos() < 0) {
            return false;
        }
        byte eq = 0, use = 0, setup = 0, etc = 0, cash = 0;
        for (IItem item : pack.getItems()) {
            final MapleInventoryType invtype = GameConstants.getInventoryType(item.getItemId());
            if (invtype == MapleInventoryType.EQUIP) {
                eq++;
            } else if (invtype == MapleInventoryType.USE) {
                use++;
            } else if (invtype == MapleInventoryType.SETUP) {
                setup++;
            } else if (invtype == MapleInventoryType.ETC) {
                etc++;
            } else if (invtype == MapleInventoryType.CASH) {
                cash++;
            }
            /* if (MapleItemInformationProvider.getInstance().isPickupRestricted(item.getItemId()) && chr.haveItem(item.getItemId(), 1)) {
             return false;
             }*/
        }

        boolean slot = chr.getInventory(MapleInventoryType.EQUIP).getNumFreeSlot() > eq || eq == 0;
        if (chr.getInventory(MapleInventoryType.USE).getNumFreeSlot() <= use && use != 0) {
            slot = false;
        }
        if (chr.getInventory(MapleInventoryType.SETUP).getNumFreeSlot() <= setup && setup != 0) {
            slot = false;
        }
        if (chr.getInventory(MapleInventoryType.ETC).getNumFreeSlot() <= etc && etc != 0) {
            slot = false;
        }
        if (chr.getInventory(MapleInventoryType.CASH).getNumFreeSlot() <= cash && cash != 0) {
            slot = false;

        }
        return slot;
    }

    private static boolean deletePackage(final int charid, final int accid, final int packageid) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection(); PreparedStatement ps = con.prepareStatement("DELETE from hiredmerch where characterid = ? OR accountid = ? OR packageid = ?")) {
            ps.setInt(1, charid);
            ps.setInt(2, accid);
            ps.setInt(3, packageid);
            ps.execute();
            ItemLoader.HIRED_MERCHANT.saveItems(null, packageid);
            //   ItemLoader.HIRED_MERCHANT.saveItems(null, packageid, accid, charid);
            return true;
        } catch (SQLException e) {
            FileoutputUtil.outError("logs/资料库异常.txt", e);
            return false;
        }
    }

    private static MerchItemPackage loadItemFromDatabase(final int charid, final int accountid) {
        ResultSet rs;
        final int packageid;
        final MerchItemPackage pack;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection(); PreparedStatement ps = con.prepareStatement("SELECT * from hiredmerch where characterid = ? OR accountid = ?")) {
            ps.setInt(1, charid);
            ps.setInt(2, accountid);
            rs = ps.executeQuery();
            if (!rs.next()) {
                ps.close();
                rs.close();
                return null;
            }
            packageid = rs.getInt("PackageId");
            pack = new MerchItemPackage();
            pack.setPackageid(packageid);
            pack.setMesos(rs.getInt("Mesos"));
            pack.setSentTime(rs.getLong("time"));
            rs.close();

            Map<Long, Pair<IItem, MapleInventoryType>> items = ItemLoader.HIRED_MERCHANT.loadItems(false, packageid, accountid);
            if (items != null) {
                List<IItem> iters = new ArrayList<>();
                for (Pair<IItem, MapleInventoryType> z : items.values()) {
                    iters.add(z.left);
                }
                pack.setItems(iters);
            }

            return pack;
        } catch (SQLException e) {
            e.printStackTrace();
            FileoutputUtil.outError("logs/资料库异常.txt", e);
            return null;
        }
    }

    public static void displayMerch(MapleClient c) {

    }

}
