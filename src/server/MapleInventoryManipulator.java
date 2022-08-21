package server;

import client.MapleBuffStat;
import client.MapleCharacter;
import client.MapleClient;
import client.MapleEquipOnlyId;
import client.inventory.*;
import constants.GameConstants;
import constants.WorldConstants;
import handling.world.World;
import server.maps.AramiaFireWorks;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;
import tools.packet.MTSCSPacket;

import java.awt.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

public class MapleInventoryManipulator {

    public static void addRing(MapleCharacter chr, int itemId, int ringId, int sn) {
        CashItemInfo csi = CashItemFactory.getInstance().getItem(sn);
        if (csi == null) {
            return;
        }
        IItem ring = chr.getCashInventory().toItem(csi, ringId);
        if (ring == null || ring.getUniqueId() != ringId || ring.getUniqueId() <= 0 || ring.getItemId() != itemId) {
            return;
        }
        chr.getCashInventory().addToInventory(ring);
        //chr.getClient().sendPacket(MTSCSPacket.confirmToCSInventory(ring, chr.getClient().getAccID(), csi.getSN()));
        chr.getClient().sendPacket(MTSCSPacket.showBoughtCashItem(ring, sn, chr.getClient().getAccID()));
    }

    public static boolean addbyItem(final MapleClient c, final IItem item) {
        return addbyItem(c, item, false) >= 0;
    }

    public static short addbyItem(final MapleClient c, final IItem item, final boolean fromcs) {
        final MapleInventoryType type = GameConstants.getInventoryType(item.getItemId());
        final short newSlot = c.getPlayer().getInventory(type).addItem(item);
        if (newSlot == -1) {
            if (!fromcs) {
                c.sendPacket(MaplePacketCreator.getInventoryFull());
                c.sendPacket(MaplePacketCreator.getShowInventoryFull());
            }
            return newSlot;
        }
        if (item.hasSetOnlyId()) {
            item.setEquipOnlyId(MapleEquipOnlyId.getInstance().getNextEquipOnlyId());
        }
        if (!fromcs) {
            c.sendPacket(MaplePacketCreator.modifyInventory(true, new ModifyInventory(ModifyInventory.Types.ADD, item)));
            //c.sendPacket(MaplePacketCreator.addInventorySlot(type, item));
        }
        c.getPlayer().havePartyQuest(item.getItemId());
        return newSlot;
    }

    public static int getUniqueId(int itemId, MaplePet pet) {
        int uniqueid = -1;
        if (GameConstants.isPet(itemId)) {
            if (pet != null) {
                uniqueid = pet.getUniqueId();
            } else {
                uniqueid = MapleInventoryIdentifier.getInstance();
            }
        } else if (GameConstants.getInventoryType(itemId) == MapleInventoryType.CASH || MapleItemInformationProvider.getInstance().isCash(itemId)) { //less work to do
            uniqueid = MapleInventoryIdentifier.getInstance(); //shouldnt be generated yet, so put it here
        }
        return uniqueid;
    }
        
    public static boolean addById(MapleClient c, int itemId, short quantity) {
        return addById(c, itemId, quantity, null, null, 0);
    }

    public static boolean addById(MapleClient c, int itemId, short quantity, String owner) {
        return addById(c, itemId, quantity, owner, null, 0);
    }

    public static byte addId(MapleClient c, int itemId, short quantity, String owner) {
        return addId(c, itemId, quantity, owner, null, 0);
    }

    public static boolean addById(MapleClient c, int itemId, short quantity, String owner, MaplePet pet) {
        return addById(c, itemId, quantity, owner, pet, 0);
    }

    public static boolean addById(MapleClient c, int itemId, short quantity, String owner, MaplePet pet, long period) {
        return addId(c, itemId, quantity, owner, pet, period) >= 0;
    }

    public static byte addId(MapleClient c, int itemId, short quantity, String owner, MaplePet pet, long period) {
        final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        if (ii.isPickupRestricted(itemId) && c.getPlayer().haveItem(itemId, 1, true, false)) {
            c.sendPacket(MaplePacketCreator.getInventoryFull());
            c.sendPacket(MaplePacketCreator.showItemUnavailable());
            return -1;
        }
        final MapleInventoryType type = GameConstants.getInventoryType(itemId);
        int uniqueid = getUniqueId(itemId, pet);
        short newSlot = -1;
        if (!type.equals(MapleInventoryType.EQUIP)) {
            final short slotMax = ii.getSlotMax(c, itemId);
            final List<IItem> existing = c.getPlayer().getInventory(type).listById(itemId);
            if (!GameConstants.isRechargable(itemId)) {
                if (existing.size() > 0) { // first update all existing slots to slotMax
                    Iterator<IItem> i = existing.iterator();
                    while (quantity > 0) {
                        if (i.hasNext()) {
                            Item eItem = (Item) i.next();
                            short oldQ = eItem.getQuantity();
                            if (oldQ < slotMax && (eItem.getOwner().equals(owner) || owner == null) && eItem.getExpiration() == -1) {
                                short newQ = (short) Math.min(oldQ + quantity, slotMax);
                                quantity -= (newQ - oldQ);
                                eItem.setQuantity(newQ);
                                c.sendPacket(MaplePacketCreator.modifyInventory(false, new ModifyInventory(ModifyInventory.Types.UPDATE, eItem)));
                                //c.sendPacket.updateInventorySlot(type, eItem, false));
                            }
                        } else {
                            break;
                        }
                    }
                }
                Item nItem;
                // add new slots if there is still something left
                while (quantity > 0) {
                    short newQ = (short) Math.min(quantity, slotMax);
                    if (newQ != 0) {
                        quantity -= newQ;
                        nItem = new Item(itemId, (byte) 0, newQ, (byte) 0, uniqueid);

                        newSlot = c.getPlayer().getInventory(type).addItem(nItem);
                        if (newSlot == -1) {
                            c.sendPacket(MaplePacketCreator.getInventoryFull());
                            c.sendPacket(MaplePacketCreator.getShowInventoryFull());
                            return -1;
                        }
                        if (owner != null) {
                            nItem.setOwner(owner);
                        }
                        if (period > 0) {
                            nItem.setExpiration(System.currentTimeMillis() + (period * 24 * 60 * 60 * 1000));
                        }
                        if (pet != null) {
                            nItem.setPet(pet);
                            pet.setInventoryPosition(newSlot);
                            c.getPlayer().addPet(pet);
                        }
                        c.sendPacket(MaplePacketCreator.modifyInventory(false, new ModifyInventory(ModifyInventory.Types.ADD, nItem)));
                        //c.sendPacket(MaplePacketCreator.addInventorySlot(type, nItem));
                        if (GameConstants.isRechargable(itemId) && quantity == 0) {
                            break;
                        }
                    } else {
                        c.getPlayer().havePartyQuest(itemId);
                        c.sendPacket(MaplePacketCreator.enableActions());
                        return (byte) newSlot;
                    }
                }
            } else {
                // Throwing Stars and Bullets - Add all into one slot regardless of quantity.
                final Item nItem = new Item(itemId, (byte) 0, quantity, (byte) 0, uniqueid);
                newSlot = c.getPlayer().getInventory(type).addItem(nItem);

                if (newSlot == -1) {
                    c.sendPacket(MaplePacketCreator.getInventoryFull());
                    c.sendPacket(MaplePacketCreator.getShowInventoryFull());
                    return -1;
                }
                if (period > 0) {
                    nItem.setExpiration(System.currentTimeMillis() + (period * 24 * 60 * 60 * 1000));
                }
                c.sendPacket(MaplePacketCreator.modifyInventory(false, new ModifyInventory(ModifyInventory.Types.ADD, nItem)));
                //c.sendPacket(MaplePacketCreator.addInventorySlot(type, nItem));
                c.sendPacket(MaplePacketCreator.enableActions());
            }
        } else if (quantity == 1) {
            final IItem nEquip = ii.getEquipById(itemId);
            if (owner != null) {
                nEquip.setOwner(owner);
            }
            nEquip.setUniqueId(uniqueid);
            if (period > 0) {
                nEquip.setExpiration(System.currentTimeMillis() + (period * 24 * 60 * 60 * 1000));
            }
            if (nEquip.hasSetOnlyId()) {
                nEquip.setEquipOnlyId(MapleEquipOnlyId.getInstance().getNextEquipOnlyId());
            }
            newSlot = c.getPlayer().getInventory(type).addItem(nEquip);
            if (newSlot == -1) {
                c.sendPacket(MaplePacketCreator.getInventoryFull());
                c.sendPacket(MaplePacketCreator.getShowInventoryFull());
                return -1;
            }
            c.sendPacket(MaplePacketCreator.modifyInventory(false, new ModifyInventory(ModifyInventory.Types.ADD, nEquip)));
            //c.sendPacket(MaplePacketCreator.addInventorySlot(type, nEquip));
        } else {
            throw new InventoryException("Trying to create equip with non-one quantity");
        }
        c.getPlayer().havePartyQuest(itemId);
        return (byte) newSlot;
    }

    public static IItem addbyId_Gachapon(final MapleClient c, final int itemId, short quantity) {
        if (c.getPlayer().getInventory(MapleInventoryType.EQUIP).getNextFreeSlot() == -1 || c.getPlayer().getInventory(MapleInventoryType.USE).getNextFreeSlot() == -1 || c.getPlayer().getInventory(MapleInventoryType.ETC).getNextFreeSlot() == -1 || c.getPlayer().getInventory(MapleInventoryType.SETUP).getNextFreeSlot() == -1) {
            return null;
        }
        final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        if (ii.isPickupRestricted(itemId) && c.getPlayer().haveItem(itemId, 1, true, false)) {
            c.sendPacket(MaplePacketCreator.getInventoryFull());
            c.sendPacket(MaplePacketCreator.showItemUnavailable());
            return null;
        }
        final MapleInventoryType type = GameConstants.getInventoryType(itemId);

        if (!type.equals(MapleInventoryType.EQUIP)) {
            short slotMax = ii.getSlotMax(c, itemId);
            final List<IItem> existing = c.getPlayer().getInventory(type).listById(itemId);

            if (!GameConstants.isRechargable(itemId)) {
                IItem nItem = null;
                boolean recieved = false;

                if (existing.size() > 0) { // first update all existing slots to slotMax
                    Iterator<IItem> i = existing.iterator();
                    while (quantity > 0) {
                        if (i.hasNext()) {
                            nItem = i.next();
                            short oldQ = nItem.getQuantity();

                            if (oldQ < slotMax) {
                                recieved = true;

                                short newQ = (short) Math.min(oldQ + quantity, slotMax);
                                quantity -= (newQ - oldQ);
                                nItem.setQuantity(newQ);
                                c.sendPacket(MaplePacketCreator.modifyInventory(false, new ModifyInventory(ModifyInventory.Types.UPDATE, nItem)));
                                //c.sendPacket(MaplePacketCreator.updateInventorySlot(type, nItem, false));
                            }
                        } else {
                            break;
                        }
                    }
                }
                // add new slots if there is still something left
                while (quantity > 0) {
                    short newQ = (short) Math.min(quantity, slotMax);
                    if (newQ != 0) {
                        quantity -= newQ;
                        nItem = new Item(itemId, (byte) 0, newQ, (byte) 0);
                        final short newSlot = c.getPlayer().getInventory(type).addItem(nItem);
                        if (newSlot == -1 && recieved) {
                            return nItem;
                        } else if (newSlot == -1) {
                            return null;
                        }
                        recieved = true;
                        c.sendPacket(MaplePacketCreator.modifyInventory(false, new ModifyInventory(ModifyInventory.Types.ADD, nItem)));
                        //c.sendPacket(MaplePacketCreator.addInventorySlot(type, nItem));
                        if (GameConstants.isRechargable(itemId) && quantity == 0) {
                            break;
                        }
                    } else {
                        break;
                    }
                }
                if (recieved) {
                    c.getPlayer().havePartyQuest(nItem.getItemId());
                    return nItem;
                }
            } else {
                // Throwing Stars and Bullets - Add all into one slot regardless of quantity.
                final Item nItem = new Item(itemId, (byte) 0, quantity, (byte) 0);
                final short newSlot = c.getPlayer().getInventory(type).addItem(nItem);

                if (newSlot == -1) {
                    return null;
                }
                c.sendPacket(MaplePacketCreator.modifyInventory(false, new ModifyInventory(ModifyInventory.Types.ADD, nItem)));
                //c.sendPacket(MaplePacketCreator.addInventorySlot(type, nItem));
                c.getPlayer().havePartyQuest(nItem.getItemId());
                return nItem;
            }
        } else if (quantity == 1) {
            final IItem item;
            switch (itemId) {
                case 1112413:
                    item = ii.randomizeStats((Equip) ii.getEquipById(itemId), itemId);
                    break;
                case 1112414:
                    item = ii.randomizeStats((Equip) ii.getEquipById(itemId), itemId);
                    break;
                case 1112405:
                    item = ii.randomizeStats((Equip) ii.getEquipById(itemId), itemId);
                    break;
                default:
                    item = ii.randomizeStats((Equip) ii.getEquipById(itemId));
                    break;
            }

            final short newSlot = c.getPlayer().getInventory(type).addItem(item);

            if (newSlot == -1) {
                return null;
            }
            if (item.hasSetOnlyId()) {
                item.setEquipOnlyId(MapleEquipOnlyId.getInstance().getNextEquipOnlyId());
            }
            c.sendPacket(MaplePacketCreator.modifyInventory(true, new ModifyInventory(ModifyInventory.Types.ADD, item)));
            //c.sendPacket(MaplePacketCreator.addInventorySlot(type, item, true));
            c.getPlayer().havePartyQuest(item.getItemId());
            return item;
        } else {
            throw new InventoryException("Trying to create equip with non-one quantity");
        }
        return null;
    }

    public static IItem addbyId_GachaponGM(final MapleClient c, final int itemId, short quantity) {
        if (c.getPlayer().getInventory(MapleInventoryType.EQUIP).getNextFreeSlot() == -1 || c.getPlayer().getInventory(MapleInventoryType.USE).getNextFreeSlot() == -1 || c.getPlayer().getInventory(MapleInventoryType.ETC).getNextFreeSlot() == -1 || c.getPlayer().getInventory(MapleInventoryType.SETUP).getNextFreeSlot() == -1) {
            return null;
        }
        final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        if (ii.isPickupRestricted(itemId) && c.getPlayer().haveItem(itemId, 1, true, false)) {
            c.sendPacket(MaplePacketCreator.getInventoryFull());
            c.sendPacket(MaplePacketCreator.showItemUnavailable());
            return null;
        }
        final MapleInventoryType type = GameConstants.getInventoryType(itemId);

        if (!type.equals(MapleInventoryType.EQUIP)) {
            short slotMax = ii.getSlotMax(c, itemId);
            //final List<IItem> existing = c.getPlayer().getInventory(type).listById(itemId);

            if (!GameConstants.isRechargable(itemId)) {
                IItem nItem = null;
                boolean recieved = false;

                /*if (existing.size() > 0) { // first update all existing slots to slotMax
                    Iterator<IItem> i = existing.iterator();
                    while (quantity > 0) {
                        if (i.hasNext()) {
                            nItem = (Item) i.next();
                            short oldQ = nItem.getQuantity();

                            if (oldQ < slotMax) {
                                recieved = true;

                                //short newQ = (short) Math.min(oldQ + quantity, slotMax);
                                //quantity -= (newQ - oldQ);
                                //nItem.setQuantity(newQ);
                                //c.sendPacket(MaplePacketCreator.modifyInventory(false, new ModifyInventory(ModifyInventory.Types.UPDATE, nItem)));
                                //c.sendPacket(MaplePacketCreator.updateInventorySlot(type, nItem, false));
                            }
                        } else {
                            break;
                        }
                    }
                }*/
                // add new slots if there is still something left
                while (quantity > 0) {
                    short newQ = (short) Math.min(quantity, slotMax);
                    if (newQ != 0) {
                        quantity -= newQ;
                        nItem = new Item(itemId, (byte) 0, newQ, (byte) 0);
                        //final short newSlot = c.getPlayer().getInventory(type).addItem(nItem);
                        //if (newSlot == -1 && recieved) {
                        //    return nItem;
                        //} else if (newSlot == -1) {
                        //     return null;
                        // }
                        recieved = true;
                        //c.sendPacket(MaplePacketCreator.modifyInventory(false, new ModifyInventory(ModifyInventory.Types.ADD, nItem)));
                        //c.sendPacket(MaplePacketCreator.addInventorySlot(type, nItem));
                        if (GameConstants.isRechargable(itemId) && quantity == 0) {
                            break;
                        }
                    } else {
                        break;
                    }
                }
                if (recieved) {
                    //c.getPlayer().havePartyQuest(nItem.getItemId());
                    return nItem;
                }
            } else {
                // Throwing Stars and Bullets - Add all into one slot regardless of quantity.
                final Item nItem = new Item(itemId, (byte) 0, quantity, (byte) 0);
                //final short newSlot = c.getPlayer().getInventory(type).addItem(nItem);

                //if (newSlot == -1) {
                //    return null;
                //}
                //c.sendPacket(MaplePacketCreator.modifyInventory(false, new ModifyInventory(ModifyInventory.Types.ADD, nItem)));
                //c.sendPacket(MaplePacketCreator.addInventorySlot(type, nItem));
                //c.getPlayer().havePartyQuest(nItem.getItemId());
                return nItem;
            }
        } else if (quantity == 1) {
            final IItem item = ii.randomizeStats((Equip) ii.getEquipById(itemId));
            //final short newSlot = c.getPlayer().getInventory(type).addItem(item);

            //if (newSlot == -1) {
            //    return null;
            //}
            //if (item.hasSetOnlyId()) {
            //     item.setEquipOnlyId(MapleEquipOnlyId.getInstance().getNextEquipOnlyId());
            // }
            //c.sendPacket(MaplePacketCreator.modifyInventory(true, new ModifyInventory(ModifyInventory.Types.ADD, item)));
            //c.sendPacket(MaplePacketCreator.addInventorySlot(type, item, true));
            // c.getPlayer().havePartyQuest(item.getItemId());
            return item;
        } else {
            throw new InventoryException("Trying to create equip with non-one quantity");
        }
        return null;
    }

    public static IItem addbyId_GachaponTime(final MapleClient c, final int itemId, short quantity, long period) {
        if (c.getPlayer().getInventory(MapleInventoryType.EQUIP).getNextFreeSlot() == -1 || c.getPlayer().getInventory(MapleInventoryType.USE).getNextFreeSlot() == -1 || c.getPlayer().getInventory(MapleInventoryType.ETC).getNextFreeSlot() == -1 || c.getPlayer().getInventory(MapleInventoryType.SETUP).getNextFreeSlot() == -1) {
            return null;
        }
        final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        if (ii.isPickupRestricted(itemId) && c.getPlayer().haveItem(itemId, 1, true, false)) {
            c.sendPacket(MaplePacketCreator.getInventoryFull());
            c.sendPacket(MaplePacketCreator.showItemUnavailable());
            return null;
        }
        final MapleInventoryType type = GameConstants.getInventoryType(itemId);

        if (!type.equals(MapleInventoryType.EQUIP)) {
            short slotMax = ii.getSlotMax(c, itemId);
            final List<IItem> existing = c.getPlayer().getInventory(type).listById(itemId);

            if (!GameConstants.isRechargable(itemId)) {
                IItem nItem = null;
                boolean recieved = false;

                if (existing.size() > 0) { // first update all existing slots to slotMax
                    Iterator<IItem> i = existing.iterator();
                    while (quantity > 0) {
                        if (i.hasNext()) {
                            nItem = i.next();
                            short oldQ = nItem.getQuantity();

                            if (oldQ < slotMax) {
                                recieved = true;

                                short newQ = (short) Math.min(oldQ + quantity, slotMax);
                                quantity -= (newQ - oldQ);
                                nItem.setQuantity(newQ);
                                c.sendPacket(MaplePacketCreator.modifyInventory(false, new ModifyInventory(ModifyInventory.Types.UPDATE, nItem)));
                                //c.sendPacket(MaplePacketCreator.updateInventorySlot(type, nItem, false));
                            }
                        } else {
                            break;
                        }
                    }
                }
                // add new slots if there is still something left
                while (quantity > 0) {
                    short newQ = (short) Math.min(quantity, slotMax);
                    if (newQ != 0) {
                        quantity -= newQ;
                        nItem = new Item(itemId, (byte) 0, newQ, (byte) 0);
                        final short newSlot = c.getPlayer().getInventory(type).addItem(nItem);
                        if (newSlot == -1 && recieved) {
                            return nItem;
                        } else if (newSlot == -1) {
                            return null;
                        }
                        if (period > 0) {
                            nItem.setExpiration(System.currentTimeMillis() + (period * 24 * 60 * 60 * 1000));
                        }
                        recieved = true;
                        c.sendPacket(MaplePacketCreator.modifyInventory(false, new ModifyInventory(ModifyInventory.Types.ADD, nItem)));
                        //c.sendPacket(MaplePacketCreator.addInventorySlot(type, nItem));
                        if (GameConstants.isRechargable(itemId) && quantity == 0) {
                            break;
                        }
                    } else {
                        break;
                    }
                }
                if (recieved) {
                    c.getPlayer().havePartyQuest(nItem.getItemId());
                    return nItem;
                }
            } else {
                // Throwing Stars and Bullets - Add all into one slot regardless of quantity.
                final Item nItem = new Item(itemId, (byte) 0, quantity, (byte) 0);
                final short newSlot = c.getPlayer().getInventory(type).addItem(nItem);

                if (newSlot == -1) {
                    return null;
                }

                if (period > 0) {
                    nItem.setExpiration(System.currentTimeMillis() + (period * 24 * 60 * 60 * 1000));
                }

                c.sendPacket(MaplePacketCreator.modifyInventory(false, new ModifyInventory(ModifyInventory.Types.ADD, nItem)));
                //c.sendPacket(MaplePacketCreator.addInventorySlot(type, nItem));
                c.getPlayer().havePartyQuest(nItem.getItemId());
                return nItem;
            }
        } else if (quantity == 1) {
            final IItem item = ii.randomizeStats((Equip) ii.getEquipById(itemId));
            final short newSlot = c.getPlayer().getInventory(type).addItem(item);

            if (newSlot == -1) {
                return null;
            }
            if (period > 0) {
                item.setExpiration(System.currentTimeMillis() + (period * 24 * 60 * 60 * 1000));
            }
            if (item.hasSetOnlyId()) {
                item.setEquipOnlyId(MapleEquipOnlyId.getInstance().getNextEquipOnlyId());
            }
            c.sendPacket(MaplePacketCreator.modifyInventory(true, new ModifyInventory(ModifyInventory.Types.ADD, item)));
            //c.sendPacket(MaplePacketCreator.addInventorySlot(type, item, true));
            c.getPlayer().havePartyQuest(item.getItemId());
            return item;
        } else {
            throw new InventoryException("Trying to create equip with non-one quantity");
        }
        return null;
    }

    public static boolean addFromDrop(final MapleClient c, final IItem item, final boolean show) {
        return addFromDrop(c, item, show, false, false);
    }

    public static boolean addFromDrop(final MapleClient c, IItem item, final boolean show, final boolean enhance, final boolean isPetPickup) {
        final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();

        if (ii.isPickupRestricted(item.getItemId()) && c.getPlayer().haveItem(item.getItemId(), 1, true, false)) {
            c.sendPacket(MaplePacketCreator.getInventoryFull());
            c.sendPacket(MaplePacketCreator.showItemUnavailable());
            return false;
        }
        final int before = c.getPlayer().itemQuantity(item.getItemId());
        short quantity = item.getQuantity();
        final MapleInventoryType type = GameConstants.getInventoryType(item.getItemId());

        if (!type.equals(MapleInventoryType.EQUIP)) {
            final short slotMax = ii.getSlotMax(c, item.getItemId());
            final List<IItem> existing = c.getPlayer().getInventory(type).listById(item.getItemId());
            if (!GameConstants.isRechargable(item.getItemId())) {
                if (quantity <= 0) { //wth
                    c.sendPacket(MaplePacketCreator.getInventoryFull());
                    c.sendPacket(MaplePacketCreator.showItemUnavailable());
                    return false;
                }
                if (existing.size() > 0) { // first update all existing slots to slotMax
                    Iterator<IItem> i = existing.iterator();
                    while (quantity > 0) {
                        if (i.hasNext()) {
                            final Item eItem = (Item) i.next();
                            final short oldQ = eItem.getQuantity();
                            if (oldQ < slotMax && item.getRate() == eItem.getRate() && item.getOwner().equals(eItem.getOwner()) && item.getExpiration() == eItem.getExpiration()) {
                                final short newQ = (short) Math.min(oldQ + quantity, slotMax);
                                quantity -= (newQ - oldQ);
                                eItem.setQuantity(newQ);
                                c.sendPacket(MaplePacketCreator.modifyInventory(!isPetPickup, new ModifyInventory(ModifyInventory.Types.UPDATE, eItem)));
                                //if (isPetPickup) {
                                // c.sendPacket(MaplePacketCreator.modifyInventory(false, new ModifyInventory(ModifyInventory.Types.UPDATE, eItem)));
                                // } else {
                                //   c.sendPacket(MaplePacketCreator.modifyInventory(true, new ModifyInventory(ModifyInventory.Types.UPDATE, eItem)));
                                //c.sendPacket(MaplePacketCreator.updateInventorySlot(type, eItem, true));
                                // }
                            }
                        } else {
                            break;
                        }
                    }
                }
                // add new slots if there is still something left
                while (quantity > 0) {
                    final short newQ = (short) Math.min(quantity, slotMax);
                    quantity -= newQ;
                    final Item nItem = new Item(item.getItemId(), (byte) 0, newQ, item.getFlag());
                    nItem.setExpiration(item.getExpiration());
                    nItem.setOwner(item.getOwner());
                    nItem.setPet(item.getPet());
                    nItem.setRate(item.getRate());
                    short newSlot = c.getPlayer().getInventory(type).addItem(nItem);
                    if (newSlot == -1) {
                        c.sendPacket(MaplePacketCreator.getInventoryFull());
                        c.sendPacket(MaplePacketCreator.getShowInventoryFull());
                        item.setQuantity((short) (quantity + newQ));
                        return false;
                    }
                    c.sendPacket(MaplePacketCreator.modifyInventory(!isPetPickup, new ModifyInventory(ModifyInventory.Types.ADD, nItem)));
                    //if (isPetPickup) {
                    //    c.sendPacket(MaplePacketCreator.modifyInventory(false, new ModifyInventory(ModifyInventory.Types.ADD, nItem)));
                    // } else {
                    //    c.sendPacket(MaplePacketCreator.modifyInventory(true, new ModifyInventory(ModifyInventory.Types.ADD, nItem)));
                    // }
                    //c.sendPacket(MaplePacketCreator.addInventorySlot(type, nItem, true));
                }
            } else {
                // Throwing Stars and Bullets - Add all into one slot regardless of quantity.
                final Item nItem = new Item(item.getItemId(), (byte) 0, quantity, item.getFlag());
                nItem.setExpiration(item.getExpiration());
                nItem.setOwner(item.getOwner());
                nItem.setPet(item.getPet());
                nItem.setRate(item.getRate());
                final short newSlot = c.getPlayer().getInventory(type).addItem(nItem);
                if (newSlot == -1) {
                    c.sendPacket(MaplePacketCreator.getInventoryFull());
                    c.sendPacket(MaplePacketCreator.getShowInventoryFull());
                    return false;
                }
                c.sendPacket(MaplePacketCreator.modifyInventory(false, new ModifyInventory(ModifyInventory.Types.ADD, nItem)));
                //c.sendPacket(MaplePacketCreator.addInventorySlot(type, nItem));
                c.sendPacket(MaplePacketCreator.enableActions());
            }
        } else if (quantity == 1) {
            if (item.hasSetOnlyId()) {
                item.setEquipOnlyId(MapleEquipOnlyId.getInstance().getNextEquipOnlyId());
            }
            if (enhance) {
                item = checkEnhanced(item, c.getPlayer());
            }
            final short newSlot = c.getPlayer().getInventory(type).addItem(item);

            if (newSlot == -1) {
                c.sendPacket(MaplePacketCreator.getInventoryFull());
                c.sendPacket(MaplePacketCreator.getShowInventoryFull());
                return false;
            }
            c.sendPacket(MaplePacketCreator.modifyInventory(!isPetPickup, new ModifyInventory(ModifyInventory.Types.ADD, item)));
            //if (isPetPickup) {
            //    c.sendPacket(MaplePacketCreator.modifyInventory(false, new ModifyInventory(ModifyInventory.Types.ADD, item)));
            //} else {
            //    c.sendPacket(MaplePacketCreator.modifyInventory(true, new ModifyInventory(ModifyInventory.Types.ADD, item)));
            //c.sendPacket(MaplePacketCreator.addInventorySlot(type, item, true));
            //}
        } else {
            throw new RuntimeException("Trying to create equip with non-one quantity");
        }
        if (item.getQuantity() >= 50 && GameConstants.isUpgradeScroll(item.getItemId())) {

//            c.setMonitored(true);
        }
        if (before == 0) {
            switch (item.getItemId()) {
                case AramiaFireWorks.XIANG_ID:
                    c.getPlayer().dropMessage(5, "你已经获得了一个 香炉， 可以到不夜城寻找龙山寺师父对话。");
                    break;
                case AramiaFireWorks.KEG_ID:
                    c.getPlayer().dropMessage(5, "You have gained a Powder Keg, you can give this in to Aramia of Henesys.");
                    break;
                case AramiaFireWorks.SUN_ID:
                    c.getPlayer().dropMessage(5, "You have gained a Warm Sun, you can give this in to Maple Tree Hill through @joyce.");
                    break;
                case AramiaFireWorks.DEC_ID:
                    c.getPlayer().dropMessage(5, "You have gained a Tree Decoration, you can give this in to White Christmas Hill through @joyce.");
                    break;
            }
        }
        c.getPlayer().havePartyQuest(item.getItemId());
        if (show) {
            c.sendPacket(MaplePacketCreator.getShowItemGain(item.getItemId(), item.getQuantity()));
        }
        return true;
    }

    private static final IItem checkEnhanced(final IItem before, final MapleCharacter chr) {
        if (before instanceof Equip) {
            final Equip eq = (Equip) before;
            if (eq.getState() == 0 && (eq.getUpgradeSlots() >= 1 || eq.getLevel() >= 1) && Randomizer.nextInt(100) > 80) { //20% chance of pot?
                eq.resetPotential();
                //chr.dropMessage(5, "You have obtained an item with hidden Potential.");
            }
        }
        return before;
    }

    private static int rand(int min, int max) {
        return Math.abs(Randomizer.rand(min, max));
    }

    public static boolean checkSpace(final MapleClient c, final int itemid, int quantity, final String owner) {
        final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        if (c.getPlayer() == null || (ii.isPickupRestricted(itemid) && c.getPlayer().haveItem(itemid, 1, true, false)) || (!ii.itemExists(itemid))) {
            c.getSession().writeAndFlush(MaplePacketCreator.enableActions());
            return false;
        }
        if (quantity <= 0 && !GameConstants.isRechargable(itemid)) {
            return false;
        }
        final MapleInventoryType type = GameConstants.getInventoryType(itemid);
        if (c == null || c.getPlayer() == null || c.getPlayer().getInventory(type) == null) { //wtf is causing this?
            return false;
        }
        if (!type.equals(MapleInventoryType.EQUIP)) {
            final short slotMax = ii.getSlotMax(c, itemid);
            final List<IItem> existing = c.getPlayer().getInventory(type).listById(itemid);
            if (!GameConstants.isRechargable(itemid)) {
                if (existing.size() > 0) { // first update all existing slots to slotMax
                    for (IItem eItem : existing) {
                        final short oldQ = eItem.getQuantity();
                        if (oldQ < slotMax && owner != null && owner.equals(eItem.getOwner())) {
                            final short newQ = (short) Math.min(oldQ + quantity, slotMax);
                            quantity -= (newQ - oldQ);
                        }
                        if (quantity <= 0) {
                            break;
                        }
                    }
                }
            }
            // add new slots if there is still something left
            final int numSlotsNeeded;
            if (slotMax > 0 && !GameConstants.isRechargable(itemid)) {
                numSlotsNeeded = (int) (Math.ceil(((double) quantity) / slotMax));
            } else {
                numSlotsNeeded = 1;
            }
            return !c.getPlayer().getInventory(type).isFull(numSlotsNeeded - 1);
        } else {
            return !c.getPlayer().getInventory(type).isFull();
        }
    }

    public static void removeFromSlot(final MapleClient c, final MapleInventoryType type, final short slot, final short quantity, final boolean fromDrop) {
        removeFromSlot(c, type, slot, quantity, fromDrop, false);
    }

    public static void removeFromSlot(final MapleClient c, final MapleInventoryType type, final short slot, short quantity, final boolean fromDrop, final boolean consume) {
        if (c.getPlayer() == null || c.getPlayer().getInventory(type) == null) {
            return;
        }
        final IItem item = c.getPlayer().getInventory(type).getItem(slot);
        if (item != null) {
            final boolean allowZero = consume && GameConstants.isRechargable(item.getItemId());
            c.getPlayer().getInventory(type).removeItem(slot, quantity, allowZero);
            if (item.getQuantity() == 0 && !allowZero) {
                c.sendPacket(MaplePacketCreator.modifyInventory(fromDrop, new ModifyInventory(ModifyInventory.Types.REMOVE, item)));
                //c.sendPacket(MaplePacketCreator.clearInventoryItem(type, item.getPosition(), fromDrop));
            } else {
                c.sendPacket(MaplePacketCreator.modifyInventory(fromDrop, new ModifyInventory(ModifyInventory.Types.UPDATE, item)));
                //c.sendPacket(MaplePacketCreator.updateInventorySlot(type, (Item) item, fromDrop));
            }
        }
    }
    
        public static boolean removeFromSlot(MapleClient c, MapleInventoryType type, short slot, short quantity, boolean fromDrop, int a) {
        return removeFromSlot(c, type, slot, quantity, fromDrop, false, a);
    }

    public static boolean removeFromSlot(MapleClient c, MapleInventoryType type, short slot, short quantity, boolean fromDrop, boolean consume, int a) {
        if ((c.getPlayer() == null) || (c.getPlayer().getInventory(type) == null)) {
            return false;
        }
        IItem item = c.getPlayer().getInventory(type).getItem(slot);
        if (item != null) {
            final boolean allowZero = consume && GameConstants.isRechargable(item.getItemId());
            c.getPlayer().getInventory(type).removeItem(slot, quantity, allowZero);
            if ((item.getQuantity() == 0) && (!allowZero)) {
                c.sendPacket(MaplePacketCreator.modifyInventory(fromDrop, new ModifyInventory(ModifyInventory.Types.REMOVE, item)));
            } else {
                c.sendPacket(MaplePacketCreator.modifyInventory(fromDrop, new ModifyInventory(ModifyInventory.Types.UPDATE, item)));
            }
            return true;
        }
        return false;
    }

    public static boolean removeById(final MapleClient c, final MapleInventoryType type, final int itemId, final int quantity, final boolean fromDrop, final boolean consume) {
        int remremove = quantity;
        for (IItem item : c.getPlayer().getInventory(type).listById(itemId)) {
            if (remremove <= item.getQuantity()) {
                removeFromSlot(c, type, item.getPosition(), (short) remremove, fromDrop, consume);
                remremove = 0;
                break;
            } else {
                remremove -= item.getQuantity();
                removeFromSlot(c, type, item.getPosition(), item.getQuantity(), fromDrop, consume);
            }
        }
        return remremove <= 0;
    }

    public static void move(final MapleClient c, final MapleInventoryType type, final short src, final short dst) {
        if (src < 0 || dst < 0) {
            return;
        }
        MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        IItem source = c.getPlayer().getInventory(type).getItem(src);
        IItem initialTarget = c.getPlayer().getInventory(type).getItem(dst);
        if (source == null) {
            return;
        }
        short olddstQ = -1;
        if (initialTarget != null) {
            olddstQ = initialTarget.getQuantity();
        }
        short oldsrcQ = source.getQuantity();
        short slotMax = ii.getSlotMax(c, source.getItemId());
        c.getPlayer().getInventory(type).move(src, dst, slotMax);
        final List<ModifyInventory> mods = new ArrayList<>();
        if (!type.equals(MapleInventoryType.EQUIP) && !type.equals(MapleInventoryType.CASH) && initialTarget != null && initialTarget.getItemId() == source.getItemId() && !GameConstants.isRechargable(source.getItemId())) {
            if ((olddstQ + oldsrcQ) > slotMax) {
                mods.add(new ModifyInventory(ModifyInventory.Types.UPDATE, source));
                mods.add(new ModifyInventory(ModifyInventory.Types.UPDATE, initialTarget));
            } else {
                mods.add(new ModifyInventory(ModifyInventory.Types.REMOVE, source));
                mods.add(new ModifyInventory(ModifyInventory.Types.UPDATE, initialTarget));
            }
        } else {
            mods.add(new ModifyInventory(ModifyInventory.Types.MOVE, source, src));
        }
        c.sendPacket(MaplePacketCreator.modifyInventory(true, mods));
    }

    public static void equip(final MapleClient c, final short src, short dst) {
        Equip source = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(src);
        if (source == null) {
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }
        boolean itemChanged = false;
        if (MapleItemInformationProvider.getInstance().isUntradeableOnEquip(source.getItemId())) {
            if (!ItemFlag.UNTRADEABLE.check(source.getFlag())) {
                source.setFlag((byte) (source.getFlag() + ItemFlag.UNTRADEABLE.getValue()));
            }
            itemChanged = true;
        }

        if (GameConstants.isGMEquip(source.getItemId()) && !c.getPlayer().isGM() && !c.getChannelServer().CanGMItem()) {
            c.getPlayer().dropMessage(1, "只有管理员能装备这件道具。");
            c.getPlayer().removeAll(source.getItemId(), true);
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }
        if (c.getPlayer().isGM()) {
            c.getPlayer().dropMessage("穿装备: src : " + src + " dst : " + dst + " 代码：" + source.getItemId());
        }

        //换装备时更新战斗力
        if (c.getPlayer().getGuildId() > 0) {
            c.sendPacket(MaplePacketCreator.showGuildInfo(c.getPlayer()));
        }else{
            c.sendPacket(MaplePacketCreator.勋章(c.getPlayer()));
        }

        if (dst == -6) { // unequip the overall
            IItem top = c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((byte) -5);
            if (top != null && isOverall(top.getItemId())) {
                if (c.getPlayer().getInventory(MapleInventoryType.EQUIP).isFull()) {
                    c.sendPacket(MaplePacketCreator.getInventoryFull());
                    c.sendPacket(MaplePacketCreator.getShowInventoryFull());
                    return;
                }
                unequip(c, (byte) -5, c.getPlayer().getInventory(MapleInventoryType.EQUIP).getNextFreeSlot());
            }
        } else if (dst == -5) {
            final IItem bottom = c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((byte) -6);
            if (bottom != null && isOverall(source.getItemId())) {
                if (c.getPlayer().getInventory(MapleInventoryType.EQUIP).isFull()) {
                    c.sendPacket(MaplePacketCreator.getInventoryFull());
                    c.sendPacket(MaplePacketCreator.getShowInventoryFull());
                    return;
                }
                unequip(c, (byte) -6, c.getPlayer().getInventory(MapleInventoryType.EQUIP).getNextFreeSlot());
            }
        } else if (dst == -10) {// check if weapon is two-handed
            Equip weapon = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((byte) -11);
            if (weapon != null && MapleItemInformationProvider.getInstance().isTwoHanded(weapon.getItemId())) {
                if (c.getPlayer().getInventory(MapleInventoryType.EQUIP).isFull()) {
                    c.sendPacket(MaplePacketCreator.getInventoryFull());
                    c.sendPacket(MaplePacketCreator.getShowInventoryFull());
                    return;
                }
                unequip(c, (byte) -11, c.getPlayer().getInventory(MapleInventoryType.EQUIP).getNextFreeSlot());
            }
        } else if (dst == -11) {
            IItem shield = c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((byte) -10);
            if (shield != null && MapleItemInformationProvider.getInstance().isTwoHanded(source.getItemId())) {
                if (c.getPlayer().getInventory(MapleInventoryType.EQUIP).isFull()) {
                    c.sendPacket(MaplePacketCreator.getInventoryFull());
                    c.sendPacket(MaplePacketCreator.getShowInventoryFull());
                    return;
                }
                unequip(c, (byte) -10, c.getPlayer().getInventory(MapleInventoryType.EQUIP).getNextFreeSlot());
            }
        }
        if (dst == -18) {
            if (c.getPlayer().getMount() != null) {
                c.getPlayer().getMount().setItemId(source.getItemId());
            }
        }
        if (source.getItemId() == 1122017 || source.getItemId() == 1122086 || source.getItemId() == 1122207 || source.getItemId() == 1122215) {
            c.getPlayer().startFairySchedule(true, true);
        }
        //1112413, 1112414, 1112405 (Lilin's Ring)
        source = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(src);
        Equip target = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(dst);
        c.getPlayer().getInventory(MapleInventoryType.EQUIP).removeSlot(src);
        if (target != null) {
            c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).removeSlot(dst);
        }

        final List<ModifyInventory> mods = new ArrayList<>();
        if (itemChanged) {
            mods.add(new ModifyInventory(3, source));
            mods.add(new ModifyInventory(0, source.copy()));//to prevent crashes
        }

        source.setPosition(dst);
        c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).addFromDB(source);
        if (target != null) {
            target.setPosition(src);
            c.getPlayer().getInventory(MapleInventoryType.EQUIP).addFromDB(target);
        }
        if (c.getPlayer().getBuffedValue(MapleBuffStat.BOOSTER) != null && isWeapon(source.getItemId())) {
            c.getPlayer().cancelBuffStats(MapleBuffStat.BOOSTER);
        }

        mods.add(new ModifyInventory(2, source, src));
        c.sendPacket(MaplePacketCreator.modifyInventory(true, mods));
        int reqlv = MapleItemInformationProvider.getInstance().getReqLevel(source.getItemId());
        if (reqlv > c.getPlayer().getLevel() + c.getPlayer().getStat().levelBonus && !c.getPlayer().isGM()) {
            FileoutputUtil.logToFile("logs/Hack/Ban/修改封包.txt", "\r\n " + FileoutputUtil.NowTime() + " 玩家：" + c.getPlayer().getName() + "(" + c.getPlayer().getId() + ") <等级: " + c.getPlayer().getLevel() + " > 修改装备(" + source.getItemId() + ")封包，穿上装备时封锁。 该装备需求等级: " + reqlv);
            World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(6, "[封锁系统] " + c.getPlayer().getName() + " 因为修改封包而被管理员永久停权。"));
            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM密语]  " + c.getPlayer().getName() + "(" + c.getPlayer().getId() + ") <等级: " + c.getPlayer().getLevel() + " > 修改装备(" + source.getItemId() + ")封包，穿上装备时封锁。 该装备需求等级: " + reqlv));
            c.getPlayer().ban("修改封包", true, true, false);
            c.getSession().close();
            return;
        }
        c.getPlayer().equipChanged();
    }

    private static boolean isOverall(int itemId) {
        return itemId / 10000 == 105;
    }

    private static boolean isWeapon(int itemId) {
        return itemId >= 1302000 && itemId < 1492024;
    }

    public static void unequip(final MapleClient c, final short src, final short dst) {
        Equip source = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(src);
        Equip target = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(dst);
        if (dst < 0) {
            return;
        }
        if (source == null) {
            return;
        }
        if (target != null && src <= 0) {
            c.sendPacket(MaplePacketCreator.getInventoryFull());
            return;
        }
        if (c.getPlayer().getDebugMessage()) {
            c.getPlayer().dropMessage("脱装备: src : " + src + " dst : " + dst + " 代码：" + source.getItemId());
        }
        if (source.getItemId() == 1122017 || source.getItemId() == 1122086 || source.getItemId() == 1122207 || source.getItemId() == 1122215) {
            c.getPlayer().cancelFairySchedule(true);
        }

        c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).removeSlot(src);
        if (target != null) {
            c.getPlayer().getInventory(MapleInventoryType.EQUIP).removeSlot(dst);
        }
        source.setPosition(dst);
        c.getPlayer().getInventory(MapleInventoryType.EQUIP).addFromDB(source);
        if (target != null) {
            target.setPosition(src);
            c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).addFromDB(target);
        }
        c.sendPacket(MaplePacketCreator.modifyInventory(true, Collections.singletonList(new ModifyInventory(2, source, src))));
        int reqlv = MapleItemInformationProvider.getInstance().getReqLevel(source.getItemId());
        if (reqlv > c.getPlayer().getLevel() + c.getPlayer().getStat().levelBonus && !c.getPlayer().isGM()) {
            FileoutputUtil.logToFile("logs/Hack/Ban/修改封包.txt", "\r\n " + FileoutputUtil.NowTime() + " 玩家：" + c.getPlayer().getName() + "(" + c.getPlayer().getId() + ") <等级: " + c.getPlayer().getLevel() + " > 修改装备(" + source.getItemId() + ")封包，脱除装备时封锁。 该装备需求等级: " + reqlv);
            World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(6, "[封锁系统] " + c.getPlayer().getName() + " 因为修改封包而被管理员永久停权。"));
            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM密语]  " + c.getPlayer().getName() + "(" + c.getPlayer().getId() + ") <等级: " + c.getPlayer().getLevel() + " > 修改装备(" + source.getItemId() + ")封包，脱除装备时封锁。 该装备需求等级: " + reqlv));
            c.getPlayer().ban("修改封包", true, true, false);
            c.getSession().close();
            return;
        }
        c.getPlayer().equipChanged();
    }

    public static boolean dropCs(final MapleClient c, MapleInventoryType type, final short src, final short quantity) {
        return drop(c, type, src, quantity, false, true);
    }

    public static boolean drop(final MapleClient c, MapleInventoryType type, final short src, final short quantity) {
        return drop(c, type, src, quantity, false);
    }

    public static boolean drop(final MapleClient c, MapleInventoryType type, final short src, short quantity, final boolean npcInduced) {
        return drop(c, type, src, quantity, npcInduced, false);
    }

public static boolean drop(final MapleClient c, MapleInventoryType type, final short src, short quantity, final boolean npcInduced, final boolean cs) {
        final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        if (World.isShutDown) {
            c.getPlayer().dropMessage(1, "目前無法丟落物品。");
            c.sendPacket(MaplePacketCreator.enableActions());
            return false;
        }

        /*boolean ChrdangerousIp = c.getPlayer().chrdangerousIp(c.getSession().remoteAddress().toString());
        if (ChrdangerousIp) {
            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM 密語系統] 危險IP丟棄物品 帳號 " + c.getAccountName() + " 帳號ID " + c.getAccID() + " 角色名 " + c.getPlayer().getName() + " 角色ID " + c.getPlayer().getId() + " 類型 " + type + " src " + src + " 數量 " + quantity));
            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM 密語系統] 危險IP丟棄物品 帳號 " + c.getAccountName() + " 帳號ID " + c.getAccID() + " 角色名 " + c.getPlayer().getName() + " 角色ID " + c.getPlayer().getId() + " 類型 " + type + " src " + src + " 數量 " + quantity));
            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM 密語系統] 危險IP丟棄物品 帳號 " + c.getAccountName() + " 帳號ID " + c.getAccID() + " 角色名 " + c.getPlayer().getName() + " 角色ID " + c.getPlayer().getId() + " 類型 " + type + " src " + src + " 數量 " + quantity));
            FileoutputUtil.logToFile("logs/Data/危險IP丟棄物品.txt", "\r\n " + FileoutputUtil.NowTime() + " IP: " + c.getSession().remoteAddress().toString().split(":")[0] + " 帳號 " + c.getAccountName() + " 帳號ID " + c.getAccID() + " 角色名 " + c.getPlayer().getName() + " 角色ID " + c.getPlayer().getId() + " 類型 " + type + " src " + src + " 數量 " + quantity);
        }*/
        //if (c.getPlayer().getMapId() == 130030000) {
        //    c.sendPacket(MaplePacketCreator.enableActions());
        //    return false;
        //}
        try {
            if (src < 0) {
                type = MapleInventoryType.EQUIPPED;
            }
            if (c.getPlayer() == null) {
                return false;
            }

            final IItem source = c.getPlayer().getInventory(type).getItem(src);
            if (c.getPlayer().getDebugMessage() || c.getPlayer().isGM()) {
                c.getPlayer().dropMessage("丢弃道具: src : " + src + " 代碼：" + source.getItemId());
            }
            if (c.getPlayer().getLevel() < 10) {
                c.getPlayer().dropMessage(1, "等级过低，无法丢出物品");
                c.sendPacket(MaplePacketCreator.enableActions());
            return false;
        }
            
            if (!cs) {
                if (ii.isCash(source.getItemId())) {
                    c.sendPacket(MaplePacketCreator.enableActions());
                    return false;
                }
            }
            if (source.getItemId() == 4110010) {
                c.getPlayer().dropMessage(1, "無法丟落該物品。");
                c.sendPacket(MaplePacketCreator.enableActions());
                return false;
            }

            if ((source.getItemId() == 2340000) || (source.getItemId() == 2049100)) {
                if (WorldConstants.DropItem) {
                    World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM 密語系統] 危險貴重物品 帳號 " + c.getAccountName() + " 帳號ID " + c.getAccID() + " 角色名 " + c.getPlayer().getName() + " 角色ID " + c.getPlayer().getId() + " 類型 " + type + " src " + src + quantity + " 物品 " + ii.getName(source.getItemId()) + " (" + source.getItemId() + ") x" + quantity));
                }
                FileoutputUtil.logToFile("logs/Data/丟棄貴重物品.txt", "\r\n " + FileoutputUtil.NowTime() + " IP: " + c.getSession().remoteAddress().toString().split(":")[0] + " 帳號 " + c.getAccountName() + " 帳號ID " + c.getAccID() + " 角色名 " + c.getPlayer().getName() + " 角色ID " + c.getPlayer().getId() + " 類型 " + type + " src " + src + quantity + " 物品 " + ii.getName(source.getItemId()) + " (" + source.getItemId() + ") x" + quantity);
            }
            
            if (quantity < 0 || source == null || (!npcInduced && GameConstants.isPet(source.getItemId())) || (quantity == 0 && !GameConstants.isRechargable(source.getItemId()))) {
                c.sendPacket(MaplePacketCreator.enableActions());
                return false;
            }
            
            if (!cs) {
                if (ii.isCash(source.getItemId())) {
                    c.sendPacket(MaplePacketCreator.enableActions());
                    return false;
                }
            }
            
            final short flag = source.getFlag();
            if (quantity > source.getQuantity()) {
                c.sendPacket(MaplePacketCreator.enableActions());
                return false;
            }
            
            if (ItemFlag.LOCK.check(flag) || (quantity != 1 && type == MapleInventoryType.EQUIP)) { // hack
                c.sendPacket(MaplePacketCreator.enableActions());
                return false;
            }
            
            final Point dropPos = new Point(c.getPlayer().getPosition());
            c.getPlayer().getCheatTracker().checkDrop();
            if (quantity < source.getQuantity() && !GameConstants.isRechargable(source.getItemId())) {
                final IItem target = source.copy();
                target.setQuantity(quantity);
                source.setQuantity((short) (source.getQuantity() - quantity));
                c.sendPacket(MaplePacketCreator.dropInventoryItemUpdate(type, source));

                if (ii.isDropRestricted(target.getItemId()) || ii.isAccountShared(target.getItemId())) {
                    if (ItemFlag.KARMA_EQ.check(flag)) {
                        target.setFlag((byte) (flag - ItemFlag.KARMA_EQ.getValue()));
                        c.getPlayer().getMap().spawnItemDrop(c.getPlayer(), c.getPlayer(), target, dropPos, true, true);
                    } else if (ItemFlag.KARMA_USE.check(flag)) {
                        target.setFlag((byte) (flag - ItemFlag.KARMA_USE.getValue()));
                        c.getPlayer().getMap().spawnItemDrop(c.getPlayer(), c.getPlayer(), target, dropPos, true, true);
                    } else {
                        c.getPlayer().getMap().disappearingItemDrop(c.getPlayer(), c.getPlayer(), target, dropPos);
                    }
                } else if (GameConstants.isPet(source.getItemId()) || ItemFlag.UNTRADEABLE.check(flag)) {
                    c.getPlayer().getMap().disappearingItemDrop(c.getPlayer(), c.getPlayer(), target, dropPos);
                } else {
                    c.getPlayer().getMap().spawnItemDrop(c.getPlayer(), c.getPlayer(), target, dropPos, true, true);
                }
            } else {
                c.getPlayer().getInventory(type).removeSlot(src);
                c.sendPacket(MaplePacketCreator.dropInventoryItem((src < 0 ? MapleInventoryType.EQUIP : type), src));
                if (src < 0) {
                    c.getPlayer().equipChanged();
                }
                if (ii.isDropRestricted(source.getItemId()) || ii.isAccountShared(source.getItemId())) {
                    if (ItemFlag.KARMA_EQ.check(flag)) {
                        source.setFlag((byte) (flag - ItemFlag.KARMA_EQ.getValue()));
                        c.getPlayer().getMap().spawnItemDrop(c.getPlayer(), c.getPlayer(), source, dropPos, true, true);
                    } else if (ItemFlag.KARMA_USE.check(flag)) {
                        source.setFlag((byte) (flag - ItemFlag.KARMA_USE.getValue()));
                        c.getPlayer().getMap().spawnItemDrop(c.getPlayer(), c.getPlayer(), source, dropPos, true, true);
                    } else {
                        c.getPlayer().getMap().disappearingItemDrop(c.getPlayer(), c.getPlayer(), source, dropPos);
                    }
                } else if (GameConstants.isPet(source.getItemId()) || ItemFlag.UNTRADEABLE.check(flag)) {
                    c.getPlayer().getMap().disappearingItemDrop(c.getPlayer(), c.getPlayer(), source, dropPos);
                } else {
                    c.getPlayer().getMap().spawnItemDrop(c.getPlayer(), c.getPlayer(), source, dropPos, true, true);
                }
            }
        } catch (Exception ex) {
            FileoutputUtil.outError("logs/丟棄道具異常.txt", ex);
        }

        return true;
    }

    public static void removeAllByEquipOnlyId(MapleClient c, long inventoryitemid) {
        if (c.getPlayer() == null) {
            return;
        }
        MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        IItem copyEquipItems = c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItemByInventoryItemId(inventoryitemid);
        if (copyEquipItems != null) {
            removeFromSlot(c, MapleInventoryType.EQUIP, copyEquipItems.getPosition(), copyEquipItems.getQuantity(), true, false);
            String msgtext = "玩家" + c.getPlayer().getName() + " ID: " + c.getPlayer().getId() + " (等级" + c.getPlayer().getLevel() + ") 地图: " + c.getPlayer().getMapId() + " 在玩家背包中发现复制装备[" + ii.getName(copyEquipItems.getItemId()) + "]已经将其删除。";
            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM密语] " + msgtext));
            FileoutputUtil.log("Hack/复制装备_已删除.txt", msgtext + " 道具唯一ID: " + copyEquipItems.getEquipOnlyId());
        }

        IItem copyEquipedItems = c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItemByInventoryItemId(inventoryitemid);
        if (copyEquipedItems != null) {
            removeFromSlot(c, MapleInventoryType.EQUIPPED, copyEquipedItems.getPosition(), copyEquipedItems.getQuantity(), true, false);
            String msgtext = "玩家" + c.getPlayer().getName() + " ID: " + c.getPlayer().getId() + " (等级" + c.getPlayer().getLevel() + ") 地图: " + c.getPlayer().getMapId() + " 在玩家穿戴中发现复制装备[" + ii.getName(copyEquipedItems.getItemId()) + "]已经将其删除。";
            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM密语] " + msgtext));
            FileoutputUtil.logToFile("Hack/复制装备_已删除.txt", msgtext + " 道具唯一ID: " + copyEquipedItems.getEquipOnlyId());
        }

        for (IItem copyStorageItem : c.getPlayer().getStorage().getItems()) {
            if (copyStorageItem != null) {
                if (c.getPlayer().getStorage().removeItemByInventoryItemId(inventoryitemid)) {
                    String msgtext = "玩家" + c.getPlayer().getName() + " ID: " + c.getPlayer().getId() + " (等级" + c.getPlayer().getLevel() + ") 地图: " + c.getPlayer().getMapId() + " 在玩家穿戴中发现复制装备[" + ii.getName(copyEquipedItems.getItemId()) + "]已经将其删除。";
                    World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM密语] " + msgtext));
                    FileoutputUtil.logToFile("Hack/复制装备_已删除.txt", msgtext + " 道具唯一ID: " + copyStorageItem.getEquipOnlyId() + "\r\n");
                }
            }
        }
    }
    
    public static void removeAllById(MapleClient c, int itemId, boolean checkEquipped) {
        MapleInventoryType type = GameConstants.getInventoryType(itemId);
        for (IItem item : c.getPlayer().getInventory(type).listById(itemId)) {
            if (item != null) {
                removeFromSlot(c, type, item.getPosition(), item.getQuantity(), true, false);
            }
        }
        if (checkEquipped) {
            Item ii = (Item) c.getPlayer().getInventory(type).findById(itemId);
            if (ii != null) {
                c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).removeItem(ii.getPosition());
                c.getPlayer().equipChanged();
            }
        }
    }
    
}
