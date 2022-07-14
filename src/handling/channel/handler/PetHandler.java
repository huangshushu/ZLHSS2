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

import java.util.List;

import client.inventory.IItem;
import client.MapleClient;
import client.MapleCharacter;
import client.MapleDisease;
import client.inventory.MapleInventoryType;
import client.inventory.MaplePet;
import constants.GameConstants;
import client.inventory.PetCommand;
import client.inventory.PetDataFactory;
import handling.world.MaplePartyCharacter;
import java.util.LinkedList;
import java.util.concurrent.locks.Lock;
import server.Randomizer;
import server.MapleInventoryManipulator;
import server.MapleItemInformationProvider;
import server.life.MapleMonster;
import server.movement.LifeMovementFragment;
import server.maps.FieldLimitType;
import server.maps.MapleMapItem;
import tools.MaplePacketCreator;
import tools.data.LittleEndianAccessor;
import tools.packet.PetPacket;

public class PetHandler {

    public static final void SpawnPet(final LittleEndianAccessor slea, final MapleClient c, final MapleCharacter chr) {
        chr.updateTick(slea.readInt());
        chr.spawnPet((byte) slea.readShort(), slea.readByte() > 0);

    }

    public static final void Pet_AutoPotion(final LittleEndianAccessor slea, final MapleClient c, final MapleCharacter chr) {
        slea.skip(13);
        final byte slot = slea.readByte();
        if (chr == null || !chr.isAlive() || chr.getMapId() == 749040100 || chr.getMap() == null || chr.hasDisease(MapleDisease.POTION)) {
            return;
        }
        final IItem toUse = chr.getInventory(MapleInventoryType.USE).getItem(slot);

        if (toUse == null || toUse.getQuantity() < 1) {
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }
        final long time = System.currentTimeMillis();
        if (chr.getNextConsume() > time) {
            chr.dropMessage(5, "You may not use this item yet.");
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }
        if (!FieldLimitType.PotionUse.check(chr.getMap().getFieldLimit()) || chr.getMapId() == 610030600) { //cwk quick hack
            if (MapleItemInformationProvider.getInstance().getItemEffect(toUse.getItemId()).applyTo(chr)) {
                MapleInventoryManipulator.removeFromSlot(c, MapleInventoryType.USE, slot, (short) 1, false);
                if (chr.getMap().getConsumeItemCoolTime() > 0) {
                    chr.setNextConsume(time + (chr.getMap().getConsumeItemCoolTime() * 1000));
                }
            }
        } else {
            c.sendPacket(MaplePacketCreator.enableActions());
        }
    }

    public static final void PetChat(final int petid, final short command, final String text, MapleCharacter chr) {
        if (chr == null || chr.getMap() == null || chr.getPetIndex(petid) < 0) {
            return;
        } else if (!chr.getCanTalk()) {
            chr.getClient().sendPacket(MaplePacketCreator.enableActions());
            return;
        }
        chr.getMap().broadcastMessage(chr, PetPacket.petChat(chr.getId(), command, text, chr.getPetIndex(petid)), true);
    }

    public static final void PetCommand(final LittleEndianAccessor slea, final MapleClient c, final MapleCharacter chr) {
        final byte petIndex = chr.getPetIndex(slea.readInt());
        if (petIndex == -1) {
            return;
        }
        MaplePet pet = chr.getPet(petIndex);
        if (pet == null) {
            return;
        }
        slea.skip(5);
        final byte command = slea.readByte();
        final PetCommand petCommand = PetDataFactory.getPetCommand(pet.getPetItemId(), (int) command);

        boolean success = false;
        if (Randomizer.nextInt(99) <= petCommand.getProbability()) {
            success = true;
            if (pet.getCloseness() < 30000) {
                int newCloseness = pet.getCloseness() + petCommand.getIncrease();
                if (newCloseness > 30000) {
                    newCloseness = 30000;
                }
                pet.setCloseness(newCloseness);
                if (newCloseness >= GameConstants.getClosenessNeededForLevel(pet.getLevel() + 1)) {
                    pet.setLevel(pet.getLevel() + 1);
                    c.sendPacket(PetPacket.showOwnPetLevelUp(petIndex));
                    chr.getMap().broadcastMessage(PetPacket.showPetLevelUp(chr, petIndex));
                }
                c.sendPacket(PetPacket.updatePet(pet, chr.getInventory(MapleInventoryType.CASH).getItem((byte) pet.getInventoryPosition())));
            }
        }
        chr.getMap().broadcastMessage(chr, PetPacket.commandResponse(chr.getId(), command, petIndex, success, false), true);
    }

    public static final void PetFood(final LittleEndianAccessor slea, final MapleClient c, final MapleCharacter chr) {
        int previousFullness = 100;
        MaplePet pet = null;
        if (chr == null) {
            return;
        }
        for (final MaplePet pets : chr.getSummonedPets()) {
            if (pets.getSummoned()) {
                if (pets.getFullness() < previousFullness) {
                    previousFullness = pets.getFullness();
                    pet = pets;
                }
            }
        }
        if (pet == null) {
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }

        slea.skip(4);
        short slot = slea.readShort();
        final int itemId = slea.readInt();

        IItem petFood = c.getPlayer().getInventory(MapleInventoryType.USE).getItem(slot);
        if (petFood == null || petFood.getItemId() != itemId || petFood.getQuantity() <= 0 || itemId / 10000 != 212) {
            c.getSession().writeAndFlush(MaplePacketCreator.enableActions());
            return;
        }
        boolean gainCloseness = false;

        if (Randomizer.nextInt(99) <= 50) {
            gainCloseness = true;
        }
        if (pet.getFullness() < 100) {
            int newFullness = pet.getFullness() + 30;
            if (newFullness > 100) {
                newFullness = 100;
            }
            pet.setFullness(newFullness);
            final byte index = chr.getPetIndex(pet);

            if (gainCloseness && pet.getCloseness() < 30000) {
                int newCloseness = pet.getCloseness() + 1;
                if (newCloseness > 30000) {
                    newCloseness = 30000;
                }
                pet.setCloseness(newCloseness);
                if (newCloseness >= GameConstants.getClosenessNeededForLevel(pet.getLevel() + 1)) {
                    pet.setLevel(pet.getLevel() + 1);

                    c.sendPacket(PetPacket.showOwnPetLevelUp(index));
                    chr.getMap().broadcastMessage(PetPacket.showPetLevelUp(chr, index));
                }
            }
            c.sendPacket(PetPacket.updatePet(pet, chr.getInventory(MapleInventoryType.CASH).getItem((byte) pet.getInventoryPosition())));
            chr.getMap().broadcastMessage(c.getPlayer(), PetPacket.commandResponse(chr.getId(), (byte) 1, index, true, true), true);
        } else {
            if (gainCloseness) {
                int newCloseness = pet.getCloseness() - 1;
                if (newCloseness < 0) {
                    newCloseness = 0;
                }
                pet.setCloseness(newCloseness);
                if (newCloseness < GameConstants.getClosenessNeededForLevel(pet.getLevel())) {
                    pet.setLevel(pet.getLevel() - 1);
                }
            }
            c.sendPacket(PetPacket.updatePet(pet, chr.getInventory(MapleInventoryType.CASH).getItem((byte) pet.getInventoryPosition())));
            chr.getMap().broadcastMessage(chr, PetPacket.commandResponse(chr.getId(), (byte) 1, chr.getPetIndex(pet), false, true), true);
        }
        MapleInventoryManipulator.removeById(c, MapleInventoryType.USE, itemId, 1, true, false);
        c.sendPacket(MaplePacketCreator.enableActions());
    }

    public static final void MovePet(final LittleEndianAccessor slea, final MapleCharacter chr) {
        final int petId = slea.readInt();
        slea.skip(8);
        final List<LifeMovementFragment> res = MovementParse.parseMovement(slea, 3);

        if (res != null && chr != null && !res.isEmpty()) { // map crash hack
            final byte slot = chr.getPetIndex(petId);
            if (slot == -1) {
                return;
            }
            final MaplePet pet = chr.getPet(slot);
            if (pet == null) {
                return;
            }
            pet.updatePosition(res);
            chr.getMap().broadcastMessage(chr, PetPacket.movePet(chr.getId(), petId, slot, res), false);
            if (chr.hasBlockedInventory(false)) { //hack
                return;
            }

            //if (chr.getStat().hasVac && (chr.getStat().hasMeso || chr.getStat().hasItem)) {
            if (chr.getStat().hasVac /*&& (chr.getStat().hasMeso || chr.getStat().hasItem)*/) {
                List<MapleMapItem> objects = chr.getMap().getAllItems();
                for (MapleMapItem mapitem : objects) {
                    final Lock lock = mapitem.getLock();
                    lock.lock();
                    try {
                        if (mapitem.isPickedUp()) {
                            continue;
                        }
                        if (mapitem.getOwner() != chr.getId() && mapitem.isPlayerDrop()) {
                            continue;
                        }
                        if (mapitem.getOwner() != chr.getId() && ((!mapitem.isPlayerDrop() && mapitem.getDropType() == 0) || (mapitem.isPlayerDrop() && chr.getMap().getEverlast()))) {
                            continue;
                        }
                        if (!mapitem.isPlayerDrop() && mapitem.getDropType() == 1 && mapitem.getOwner() != chr.getId() && (chr.getParty() == null || chr.getParty().getMemberById(mapitem.getOwner()) == null)) {
                            continue;
                        }
                        //if (mapitem.getMeso() > 0 && chr.getStat().hasMeso) {
                        if (mapitem.getMeso() > 0 && chr.getStat().hasVac) {
                            if (chr.getParty() != null && mapitem.getOwner() != chr.getId()) {
                                final List<MapleCharacter> toGive = new LinkedList<>();

                                for (MaplePartyCharacter mem : chr.getParty().getMembers()) {
                                    MapleCharacter m = chr.getMap().getCharacterById(mem.getId());
                                    if (m != null) {
                                        toGive.add(m);
                                    }
                                }
                                for (final MapleCharacter m : toGive) {
                                    m.gainMeso(mapitem.getMeso() / toGive.size() + (m.getStat().hasPartyBonus ? (int) (mapitem.getMeso() / 20.0) : 0), true, true);
                                }
                            } else {
                                chr.gainMeso(mapitem.getMeso(), true, true);
                            }
                            InventoryHandler.removeItemPet(chr, mapitem, slot);
                            //} else if (chr.getStat().hasItem && MapleItemInformationProvider.getInstance().isPickupBlocked(mapitem.getItem().getItemId())) {
                        } else if (chr.getStat().hasVac && MaplePet.PetFlag.ITEM_PICKUP.check(pet.getFlags())) {
                            boolean exc = false;
                            List excluded = pet.getExcluded();
                            if (excluded.size() > 0) {
                                for (Object excluded1 : excluded) {
                                    if (((Integer) excluded1) == mapitem.getItemId()) {
                                        exc = true;
                                    }
                                }
                            }
                            if (!exc) {
                                if (InventoryHandler.useItem(chr.getClient(), mapitem.getItemId())) {
                                    InventoryHandler.removeItemPet(chr, mapitem, slot);
                                } else if (MapleInventoryManipulator.checkSpace(chr.getClient(), mapitem.getItem().getItemId(), mapitem.getItem().getQuantity(), mapitem.getItem().getOwner())) {
                                    if (mapitem.getItem().getQuantity() >= 50 && GameConstants.isUpgradeScroll(mapitem.getItem().getItemId())) {

                                        //chr.getClient().setMonitored(true); //hack check
                                    }

                                    if (MapleInventoryManipulator.addFromDrop(chr.getClient(), mapitem.getItem(), true, mapitem.getDropper() instanceof MapleMonster, false)) {

                                        InventoryHandler.removeItemPet(chr, mapitem, slot);
                                    }
                                }
                            }
                        }
                    } finally {
                        lock.unlock();
                    }
                }
            }
        }
    }

    public static void PetIgnoreTag(final LittleEndianAccessor slea, final MapleClient c, final MapleCharacter chr) { // 170001
        int petSlot = (int) slea.readLong();
        final MaplePet pet = chr.getPet(chr.getPetIndex(petSlot));
        if ((pet == null) || (!MaplePet.PetFlag.UNPICKABLE.check(pet.getFlags()))) {
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }
        pet.clearExcluded();
        byte amount = slea.readByte();
        for (int i = 0; i < amount; i++) {
            pet.addExcluded(i, slea.readInt());
        }
    }
}
