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
package tools.packet;

import client.*;
import client.inventory.*;
import constants.GameConstants;
import server.MapleItemInformationProvider;
import server.movement.LifeMovementFragment;
import server.shops.AbstractPlayerStore;
import server.shops.IMaplePlayerShop;
import tools.KoreanDateUtil;
import tools.Pair;
import tools.data.MaplePacketLittleEndianWriter;

import java.util.*;
import java.util.Map.Entry;

public class PacketHelper {

    private final static long FT_UT_OFFSET = 116444592000000000L; // EDT
    public final static long MAX_TIME = 150842304000000000L; //00 80 05 BB 46 E6 17 02
    public static final byte[] unk1 = new byte[]{(byte) 0x00, (byte) 0x40, (byte) 0xE0, (byte) 0xFD};
    public static final byte[] unk2 = new byte[]{(byte) 0x3B, (byte) 0x37, (byte) 0x4F, (byte) 0x01};

    public static final long getKoreanTimestamp(final long realTimestamp) {
        if (realTimestamp == -1) {
            return MAX_TIME;
        }
        long time = (realTimestamp / 1000 / 60); // convert to minutes
        return ((time * 600000000) + FT_UT_OFFSET);
    }

    public static final long getTime(long realTimestamp) {
        if (realTimestamp == -1) {
            return MAX_TIME;
        }
        realTimestamp += 12 * 60 * 60 * 1000;
        long time = (realTimestamp / 1000); // convert to seconds
        return ((time * 10000000) + FT_UT_OFFSET);
    }

    public static long getFileTimestamp(long timeStampinMillis, boolean roundToMinutes) {
        if (SimpleTimeZone.getDefault().inDaylightTime(new Date())) {
            timeStampinMillis -= 3600000L;
        }
        long time;
        if (roundToMinutes) {
            time = (timeStampinMillis / 1000 / 60) * 600000000;
        } else {
            time = timeStampinMillis * 10000;
        }
        return time + FT_UT_OFFSET;
    }

    public static void addImageInfo(MaplePacketLittleEndianWriter mplew, byte[] image) {
        mplew.writeInt(image.length);
        mplew.write(image);
    }

    public static void addQuestInfo(final MaplePacketLittleEndianWriter mplew, final MapleCharacter chr) {
        final List<MapleQuestStatus> started = chr.getStartedQuests();
        mplew.writeShort(started.size());

        for (final MapleQuestStatus q : started) {
            mplew.writeShort(q.getQuest().getId());
            mplew.writeMapleAsciiString(q.getCustomData() != null ? q.getCustomData() : "");
        }
        final List<MapleQuestStatus> completed = chr.getCompletedQuests();
        int time;
        mplew.writeShort(completed.size());

        for (final MapleQuestStatus q : completed) {
            mplew.writeShort(q.getQuest().getId());
            time = KoreanDateUtil.getQuestTimestamp(q.getCompletionTime());
            mplew.writeInt(time); // maybe start time? no effect.
            mplew.writeInt(time); // completion time
        }
    }

    public static final void addSkillInfo(final MaplePacketLittleEndianWriter mplew, final MapleCharacter chr) {
        final Map<ISkill, SkillEntry> skills = chr.getSkills();
        mplew.writeShort(skills.size());
        for (final Entry<ISkill, SkillEntry> skill : skills.entrySet()) {
            mplew.writeInt(skill.getKey().getId());
            mplew.writeInt(skill.getValue().skillevel);
            if (skill.getKey().isFourthJob()) {
                mplew.writeInt(skill.getValue().masterlevel);
            }
        }
    }

    public static final void addCoolDownInfo(final MaplePacketLittleEndianWriter mplew, final MapleCharacter chr) {
        final List<MapleCoolDownValueHolder> cd = chr.getCooldowns();
        mplew.writeShort(cd.size());
        for (final MapleCoolDownValueHolder cooling : cd) {
            mplew.writeInt(cooling.skillId);
            mplew.writeShort((int) (cooling.length + cooling.startTime - System.currentTimeMillis()) / 1000);
        }
    }

    public static final void addRocksInfo(final MaplePacketLittleEndianWriter mplew, final MapleCharacter chr) {
        final int[] mapz = chr.getRegRocks();
        for (int i = 0; i < 5; i++) { // VIP teleport map
            mplew.writeInt(mapz[i]);
        }

        final int[] map = chr.getRocks();
        for (int i = 0; i < 10; i++) { // VIP teleport map
            mplew.writeInt(map[i]);
        }
    }

    public static final void addMonsterBookInfo(final MaplePacketLittleEndianWriter mplew, final MapleCharacter chr) {
        mplew.writeInt(chr.getMonsterBookCover());
        mplew.write(0);
        chr.getMonsterBook().addCardPacket(mplew);
    }

    public static final void addRingInfo(final MaplePacketLittleEndianWriter mplew, final MapleCharacter chr) {
        mplew.writeShort(0);
        //01 00 = size
        //01 00 00 00 = gametype?
        //03 00 00 00 = win
        //00 00 00 00 = tie/loss
        //01 00 00 00 = tie/loss
        //16 08 00 00 = points
        Pair<List<MapleRing>, List<MapleRing>> aRing = chr.getRings(true);
        List<MapleRing> cRing = aRing.getLeft();
        mplew.writeShort(cRing.size());
        for (MapleRing ring : cRing) {
            mplew.writeInt(ring.getPartnerChrId());
            mplew.writeAsciiString(ring.getPartnerName(), 13);
            mplew.writeLong(ring.getRingId());
            mplew.writeLong(ring.getPartnerRingId());
        }
        List<MapleRing> fRing = aRing.getRight();
        mplew.writeShort(fRing.size());
        for (MapleRing ring : fRing) {
            mplew.writeInt(ring.getPartnerChrId());
            mplew.writeAsciiString(ring.getPartnerName(), 13);
            mplew.writeLong(ring.getRingId());
            mplew.writeLong(ring.getPartnerRingId());
            mplew.writeInt(ring.getItemId());
        }
        mplew.writeShort((short) (chr.getMarriageRing(false) != null ? 1 : 0));
        int marriageId = 30000;
        if (chr.getMarriageRing(false) != null) {
            mplew.writeInt(0);
            mplew.writeAsciiString("", 13);
            mplew.writeInt(chr.getId());
            mplew.writeInt(chr.getMarriageRing(false).getPartnerRingId());
            /*mplew.writeInt(marriageId);
            mplew.writeInt(chr.getId());
            mplew.writeInt(chr.getMarriageRing(false).getPartnerChrId());
            mplew.writeShort(3);
            mplew.writeInt(chr.getMarriageRing(false).getRingId());
            mplew.writeInt(chr.getMarriageRing(false).getPartnerRingId());
            mplew.writeAsciiString(chr.getName(), 13);
            mplew.writeAsciiString(chr.getMarriageRing(false).getPartnerName(), 13);*/
        }

    }

    public static void addInventoryInfo(MaplePacketLittleEndianWriter mplew, MapleCharacter chr) {
        mplew.writeInt(chr.getMeso()); // mesos
        mplew.writeInt(chr.getId());
        mplew.writeInt(chr.getBeans());
        mplew.writeInt(0);
        mplew.write(chr.getInventory(MapleInventoryType.EQUIP).getSlotLimit()); // equip slots
        mplew.write(chr.getInventory(MapleInventoryType.USE).getSlotLimit()); // use slots
        mplew.write(chr.getInventory(MapleInventoryType.SETUP).getSlotLimit()); // set-up slots
        mplew.write(chr.getInventory(MapleInventoryType.ETC).getSlotLimit()); // etc slots
        mplew.write(chr.getInventory(MapleInventoryType.CASH).getSlotLimit()); // cash slots

        mplew.writeLong(getTime(-2));

        MapleInventory iv = chr.getInventory(MapleInventoryType.EQUIPPED);
        Collection<IItem> equippedC = iv.list();
        List<Item> equipped = new ArrayList<>(equippedC.size());

        for (IItem item : equippedC) {
            equipped.add((Item) item);
        }
        Collections.sort(equipped);
        for (Item item : equipped) {
            if (item.getPosition() < 0 && item.getPosition() > -100) {
                addItemInfo(mplew, item, false, false);
            }
        }
        mplew.write(0); // start of equipped nx
        for (Item item : equipped) {
            if (item.getPosition() <= -100 && item.getPosition() > -1000) {
                addItemInfo(mplew, item, false, false);
            }
        }

        mplew.write(0); // start of equip inventory
        iv = chr.getInventory(MapleInventoryType.EQUIP);
        for (IItem item : iv.list()) {
            addItemInfo(mplew, item, false, false);
        }

        mplew.write(0); // start of use inventory
        iv = chr.getInventory(MapleInventoryType.USE);
        for (IItem item : iv.list()) {
            addItemInfo(mplew, item, false, false);
        }
        mplew.write(0); // start of set-up inventory
        iv = chr.getInventory(MapleInventoryType.SETUP);
        for (IItem item : iv.list()) {
            addItemInfo(mplew, item, false, false);
        }
        mplew.write(0); // start of etc inventory
        iv = chr.getInventory(MapleInventoryType.ETC);
        for (IItem item : iv.list()) {
            addItemInfo(mplew, item, false, false);
        }
        mplew.write(0); // start of cash inventory
        iv = chr.getInventory(MapleInventoryType.CASH);
        for (IItem item : iv.list()) {
            addItemInfo(mplew, item, false, false);
        }
        mplew.write(0);
    }

    public static final void addCharStats(final MaplePacketLittleEndianWriter mplew, final MapleCharacter chr) {
        mplew.writeInt(chr.getId()); // character id
        mplew.writeAsciiString(chr.getName(), 13);
        mplew.write(chr.getGender()); // gender (0 = male, 1 = female)
        mplew.write(chr.getSkinColor()); // skin color
        mplew.writeInt(chr.getFace()); // face
        mplew.writeInt(chr.getHair()); // hair
        mplew.writeZeroBytes(24);
        mplew.write(chr.getLevel()); // level
        mplew.writeShort(chr.getJob()); // job
        chr.getStat().connectData(mplew);
        mplew.writeShort(chr.getRemainingAp()); // remaining ap
        mplew.writeShort(chr.getRemainingSp());
        mplew.writeInt(chr.getExp()); // exp
        mplew.writeShort(chr.getFame()); // fame
        mplew.writeInt(0); // Gachapon exp
        mplew.writeLong(PacketHelper.getTime(System.currentTimeMillis()));
        mplew.writeInt(chr.getMapId()); // current map id
        mplew.write(chr.getInitialSpawnpoint()); // spawnpoint
    }

    public static final void addCharLook(final MaplePacketLittleEndianWriter mplew, final MapleCharacter chr, final boolean mega) {
        mplew.write(chr.getGender());
        mplew.write(chr.getSkinColor());
        mplew.writeInt(chr.getFace());
        mplew.write(mega ? 0 : 1);
        mplew.writeInt(chr.getHair());

        final Map<Byte, Integer> myEquip = new LinkedHashMap<>();
        final Map<Byte, Integer> maskedEquip = new LinkedHashMap<>();
        MapleInventory equip = chr.getInventory(MapleInventoryType.EQUIPPED);

        for (final IItem item : equip.list()) {
            if (item.getPosition() < -128) { //not visible
                continue;
            }
            byte pos = (byte) (item.getPosition() * -1);

            if (pos < 100 && myEquip.get(pos) == null) {
                myEquip.put(pos, item.getItemId());
            } else if ((pos > 100 || pos == -128) && pos != 111) {
                pos = (byte) (pos == -128 ? 28 : pos - 100);
                if (myEquip.get(pos) != null) {
                    maskedEquip.put(pos, myEquip.get(pos));
                }
                myEquip.put(pos, item.getItemId());
            } else if (myEquip.get(pos) != null) {
                maskedEquip.put(pos, item.getItemId());
            }
        }
        for (final Entry<Byte, Integer> entry : myEquip.entrySet()) {
            mplew.write(entry.getKey());
            mplew.writeInt(entry.getValue());
        }
        mplew.write(0xFF); // end of visible itens
        // masked itens
        for (final Entry<Byte, Integer> entry : maskedEquip.entrySet()) {
            mplew.write(entry.getKey());
            mplew.writeInt(entry.getValue());
        }
        mplew.write(0xFF); // ending markers

        final IItem cWeapon = equip.getItem((byte) -111);
        mplew.writeInt(cWeapon != null ? cWeapon.getItemId() : 0);
        mplew.writeInt(0);
        mplew.writeLong(0);
    }

    public static void addExpirationTime(final MaplePacketLittleEndianWriter mplew, long time) {
        mplew.writeLong(getTime(time));
    }

    public static final void addItemInfo(final MaplePacketLittleEndianWriter mplew, final IItem item, final boolean zeroPosition) {
        addItemInfo(mplew, item, zeroPosition);
    }

    public static final void addItemInfo(final MaplePacketLittleEndianWriter mplew, final IItem item, final boolean zeroPosition, final boolean leaveOut) {

        MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        boolean isPet = item.getPet() != null && item.getPet().getUniqueId() > -1;
        boolean isRing = false;
        boolean hasUniqueId = item.getUniqueId() > 0 && !GameConstants.isMarrigeRing(item.getItemId()) && item.getItemId() / 10000 != 166;
        Equip equip = null;
        short pos = item.getPosition();
        if (item.getType() == 1) {
            equip = (Equip) item;
            isRing = equip.getRing() != null && equip.getRing().getRingId() > -1;
        }

        if (!zeroPosition) {
            if (equip != null) {
                if (pos < 0) {
                    pos *= -1;
                }
                mplew.write(pos > 100 ? pos - 100 : pos);
            } else {
                mplew.write(pos);
            }
        }
        mplew.write(item.getPet() != null ? 3 : item.getType());
        mplew.writeInt(item.getItemId());
        if (ii.isCash(item.getItemId()) && (!isPet)) {
            if (item.getUniqueId() < 0) {
                int uniqueid = MapleItemInformationProvider.getUniqueId(item.getItemId(), null);
                item.setUniqueId(uniqueid);
            }
        }
        //marriage rings arent cash items so dont have uniqueids, but we assign them anyway for the sake of rings
        mplew.write(hasUniqueId ? 1 : 0);
        if (hasUniqueId) {
            if (isPet) {
                mplew.writeLong(item.getPet().getUniqueId());
            } else if (isRing) {
                mplew.writeLong(item.getRing().getRingId());
            } else {
                mplew.writeLong(item.getUniqueId());
            }
        }

        if (item.getPet() != null) { // Pet
            addPetItemInfo(mplew, item, item.getPet());
        } else {
            addExpirationTime(mplew, item.getExpiration());
            if (item.getType() == 1 && equip != null) {

                mplew.write(equip.getUpgradeSlots());
                mplew.write(equip.getLevel());
                mplew.writeShort(equip.getStr());
                mplew.writeShort(equip.getDex());
                mplew.writeShort(equip.getInt());
                mplew.writeShort(equip.getLuk());
                mplew.writeShort(equip.getHp());
                mplew.writeShort(equip.getMp());
                mplew.writeShort(equip.getWatk());
                mplew.writeShort(equip.getMatk());
                mplew.writeShort(equip.getWdef());
                mplew.writeShort(equip.getMdef());
                mplew.writeShort(equip.getAcc());
                mplew.writeShort(equip.getAvoid());
                mplew.writeShort(equip.getHands());
                mplew.writeShort(equip.getSpeed());
                mplew.writeShort(equip.getJump());
                mplew.writeMapleAsciiString(equip.getOwner());
                mplew.writeShort(equip.getFlag());
                mplew.write(0);
                mplew.write(Math.max(equip.getBaseLevel(), equip.getEquipLevel())); // Item level
                mplew.writeInt(equip.getExpPercentage() * 100000); // Item Exp... 10000000 = 100%
                mplew.writeInt(equip.getViciousHammer());
                if (!hasUniqueId) {
                    mplew.writeLong(item.getUniqueId()); //some tracking ID
                }
                mplew.writeLong(getTime(-2));
                mplew.writeInt(-1);

            } else {
                mplew.writeShort(item.getQuantity());
                mplew.writeMapleAsciiString(item.getOwner());
                mplew.writeShort(item.getFlag()); // flag

                if (GameConstants.isExpChair(item.getItemId())) {
                    mplew.writeInt(0);
                    mplew.writeInt(0);
                }

                if (GameConstants.isRechargable(item.getItemId())) {
                    mplew.writeInt(2);
                    mplew.writeShort(0x54);
                    mplew.write(0);
                    mplew.write(0x34);
                }
            }
        }
    }

    public static final void addItemInfo2(final MaplePacketLittleEndianWriter mplew, final IItem item, final boolean zeroPosition, final boolean leaveOut, final boolean trade) {
        MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        boolean isCash = ii.isCash(item.getItemId());
        boolean isPet = item.getPet() != null && item.getPet().getUniqueId() > -1;
        boolean isRing = false;

        Equip equip = null;
        short pos = item.getPosition();
        if (item.getType() == 1) {
            equip = (Equip) item;
            isRing = equip.getRing() != null && equip.getRing().getRingId() > -1;
        }
        if (!zeroPosition) {
            if (equip != null) {
                if (pos < 0) {
                    pos *= -1;
                }
                mplew.write(pos > 100 ? pos - 100 : pos);
            } else {
                mplew.write(pos);
            }
        }
        mplew.write(item.getType());
        mplew.writeInt(item.getItemId());
        mplew.write(isCash ? 1 : 0);
        if (isCash) {
            mplew.writeLong(isPet ? item.getPet().getUniqueId() : isRing ? equip.getRing().getRingId() : item.getUniqueId());
        }
        if (isPet) {
            addPetItemInfo(mplew, item, item.getPet());
        } else {
            addExpirationTime(mplew, item.getExpiration());

            if (equip == null) {
                mplew.writeShort(item.getQuantity());
                mplew.writeMapleAsciiString(item.getOwner());
                mplew.writeShort(item.getFlag()); // flag

                if (GameConstants.isRechargable(item.getItemId())) {
                    mplew.writeInt(2);
                    mplew.writeShort(0x54);
                    mplew.write(0);
                    mplew.write(0x34);
                }
                return;
            }
            mplew.write(equip.getUpgradeSlots()); // upgrade slots
            mplew.write(equip.getLevel()); // level
            mplew.writeShort(equip.getStr()); // str
            mplew.writeShort(equip.getDex()); // dex
            mplew.writeShort(equip.getInt()); // int
            mplew.writeShort(equip.getLuk()); // luk
            mplew.writeShort(equip.getHp()); // hp
            mplew.writeShort(equip.getMp()); // mp
            mplew.writeShort(equip.getWatk()); // watk
            mplew.writeShort(equip.getMatk()); // matk
            mplew.writeShort(equip.getWdef()); // wdef
            mplew.writeShort(equip.getMdef()); // mdef
            mplew.writeShort(equip.getAcc()); // accuracy 
            mplew.writeShort(equip.getAvoid()); // avoid
            mplew.writeShort(equip.getHands()); // hands
            mplew.writeShort(equip.getSpeed()); // speed
            mplew.writeShort(equip.getJump()); // jump
            mplew.writeMapleAsciiString(equip.getOwner()); // owner name
            mplew.writeShort(equip.getFlag()); //Item Flags
            mplew.write(equip.getLevel());
            mplew.write(equip.getExpPercentage());
            mplew.writeInt(0);
            if (!isCash) {
                mplew.writeLong(item.getUniqueId()); //some tracking ID
            }
            mplew.writeLong(getTime(-2));
            mplew.writeInt(-1);
        }
    }

    public static final void serializeMovementList(final MaplePacketLittleEndianWriter lew, final List<LifeMovementFragment> moves) {
        lew.write(moves.size());
        for (LifeMovementFragment move : moves) {
            move.serialize(lew);
        }
    }

    public static final void addAnnounceBox(final MaplePacketLittleEndianWriter mplew, final MapleCharacter chr) {
        if (chr.getPlayerShop() != null && chr.getPlayerShop().isOwner(chr) && chr.getPlayerShop().getShopType() != 1 && chr.getPlayerShop().isAvailable()) {
            addInteraction(mplew, chr.getPlayerShop());
        } else {
            mplew.write(0);
        }
    }

    public static final void addInteraction(final MaplePacketLittleEndianWriter mplew, IMaplePlayerShop shop) {
        mplew.write(shop.getGameType());
        mplew.writeInt(((AbstractPlayerStore) shop).getObjectId());
        mplew.writeMapleAsciiString(shop.getDescription());
        if (shop.getShopType() != 1) {
            mplew.write(shop.getPassword().length() > 0 ? 1 : 0); //password = false
        }
        mplew.write(shop.getItemId() % 10);
        mplew.write(shop.getSize()); //current size
        mplew.write(shop.getMaxSize()); //full slots... 4 = 4-1=3 = has slots, 1-1=0 = no slots
        if (shop.getShopType() != 1) {
            mplew.write(shop.isOpen() ? 0 : 1);
        }
    }

    public static final void addCharacterInfo(final MaplePacketLittleEndianWriter mplew, final MapleCharacter chr, boolean isCs) {
        mplew.writeLong(-1);
        mplew.write(0);
        addCharStats(mplew, chr);
        mplew.write(chr.getBuddylist().getCapacity());
        // Bless
        if (!isCs) {
            if (chr.getBlessOfFairyOrigin() != null) {
                mplew.write(1);
                mplew.writeMapleAsciiString(chr.getBlessOfFairyOrigin());
            } else {
                mplew.write(0);
            }
        } else {
            mplew.write(0);
        }

        //mplew.writeLong(PacketHelper.getTime(System.currentTimeMillis()));

        // End
        addInventoryInfo(mplew, chr);
        if (!isCs) {
            addSkillInfo(mplew, chr);
        } else {
            mplew.writeShort(0);
        }
        if (!isCs) {
            addCoolDownInfo(mplew, chr);
        } else {
            mplew.writeShort(0);
        }
        if (!isCs) {
            addQuestInfo(mplew, chr);
        } else {
            mplew.writeShort(0);
            mplew.writeShort(0);
        }
        addRingInfo(mplew, chr);
        addRocksInfo(mplew, chr);
        if (!isCs) {
            addMonsterBookInfo(mplew, chr);
        } else {
            mplew.writeInt(1);
            mplew.write(0);
            mplew.writeShort(0);
        }
        if (!isCs) {
            chr.QuestInfoPacket(mplew); // for every questinfo: int16_t questid, string questdata
        } else {
            mplew.writeShort(0);
        }
        mplew.writeShort(0);
        mplew.writeShort(0);
        mplew.writeShort(0);
    }

    public static final void addPetItemInfo(final MaplePacketLittleEndianWriter mplew, final IItem item, final MaplePet pet) {
        addExpirationTime(mplew, item != null ? item.getExpiration() : -1);
        String petname = pet.getName();
        if (petname == null) {
            petname = "";
        }
        mplew.writeAsciiString(petname, 13);
        mplew.write(pet.getLevel());
        mplew.writeShort(pet.getCloseness());
        mplew.write(pet.getFullness());
        if (item == null) {
            mplew.writeLong(PacketHelper.getKoreanTimestamp((long) (System.currentTimeMillis() * 1.5)));
        } else {
            PacketHelper.addExpirationTime(mplew, item.getExpiration() <= System.currentTimeMillis() ? -1 : item.getExpiration());
        }
        mplew.writeShort(0);
        mplew.writeShort(pet.getFlags());
        mplew.writeShort(0);
        for (int i = 0; i < 4; i++) {
            mplew.write(0); //0x40 before, changed to 0?
        }
        /*        if (pet.getPetItemId() == 5000054) {
         mplew.writeInt(0);
         mplew.writeInt(pet.getSecondsLeft() > 0 ? pet.getSecondsLeft() : 0); //in seconds, 3600 = 1 hr.
         mplew.writeShort(0);
         } else {
         mplew.writeShort(0);
         mplew.writeLong(item != null && item.getExpiration() <= System.currentTimeMillis() ? 0 : 1);
         }*/
//        mplew.writeZeroBytes(5); // 1C 5C 98 C6 0
    }
}
