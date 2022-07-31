package server;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import client.MapleCharacter;
import client.MapleClient;
import client.inventory.Equip;
import client.inventory.IItem;
import client.inventory.ItemFlag;
import client.inventory.MapleInventoryIdentifier;
import client.inventory.MapleInventoryType;
import client.inventory.MaplePet;
import client.inventory.MapleWeaponType;
import constants.GameConstants;
import database.DBConPool;
import provider.MapleData;
import provider.MapleDataDirectoryEntry;
import provider.MapleDataEntry;
import provider.MapleDataFileEntry;
import provider.MapleDataProvider;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;
import tools.FileoutputUtil;
import tools.Pair;
import tools.StringUtil;

public class MapleItemInformationProvider {

    private final static MapleItemInformationProvider instance = new MapleItemInformationProvider();
    protected final MapleDataProvider etcData = MapleDataProviderFactory.getDataProvider("Etc.wz");
    protected final MapleDataProvider itemData = MapleDataProviderFactory.getDataProvider("Item.wz");
    protected final MapleDataProvider equipData = MapleDataProviderFactory.getDataProvider("Character.wz");
    protected final MapleDataProvider stringData = MapleDataProviderFactory.getDataProvider("String.wz");
    protected final MapleData cashStringData = stringData.getData("Cash.img");
    protected final MapleData consumeStringData = stringData.getData("Consume.img");
    protected final MapleData eqpStringData = stringData.getData("Eqp.img");
    protected final MapleData etcStringData = stringData.getData("Etc.img");
    protected final MapleData insStringData = stringData.getData("Ins.img");
    protected final MapleData petStringData = stringData.getData("Pet.img");
    protected Map<Integer, Boolean> onEquipUntradableCache = new HashMap<>();
    protected final Map<Integer, List<Integer>> scrollReqCache = new HashMap<>();
    protected final Map<Integer, Short> slotMaxCache = new HashMap<>();
    protected final Map<Integer, List<StructPotentialItem>> potentialCache = new HashMap<>();
    protected final Map<Integer, MapleStatEffect> itemEffects = new HashMap<>();
    protected final Map<Integer, Map<String, Integer>> equipStatsCache = new HashMap<>();
    protected final Map<Integer, Map<String, Byte>> itemMakeStatsCache = new HashMap<>();
    protected final Map<Integer, Short> itemMakeLevel = new HashMap<>();
    protected final Map<Integer, Equip> equipCache = new HashMap<>();
    protected final Map<Integer, Double> priceCache = new HashMap<>();
    protected final Map<Integer, Integer> wholePriceCache = new HashMap<>();
    protected final Map<Integer, Integer> projectileWatkCache = new HashMap<>();
    protected final Map<Integer, Integer> monsterBookID = new HashMap<>();
    protected final Map<Integer, String> nameCache = new HashMap<>();
    protected final Map<Integer, String> descCache = new HashMap<>();
    protected final Map<Integer, Short> petFlagInfo = new HashMap<>();
    protected final Map<Integer, Integer> petLimitLifeInfo = new HashMap<>();
    protected final Map<Integer, Integer> petLifeInfo = new HashMap<>();
    protected final Map<Integer, String> msgCache = new HashMap<>();
    protected final Map<Integer, Map<String, Integer>> SkillStatsCache = new HashMap<>();
    protected final Map<Integer, Byte> consumeOnPickupCache = new HashMap<>();
    protected final Map<Integer, Boolean> dropRestrictionCache = new HashMap<>();
    protected final Map<Integer, Boolean> accCache = new HashMap<>();
    protected final Map<Integer, Boolean> pickupRestrictionCache = new HashMap<>();
    protected final Map<Integer, Integer> stateChangeCache = new HashMap<>();
    protected final Map<Integer, Integer> mesoCache = new HashMap<>();
    protected final Map<Integer, Boolean> notSaleCache = new HashMap<>();
    protected final Map<Integer, Integer> karmaEnabledCache = new HashMap<>();
    protected final Map<Integer, Boolean> isQuestItemCache = new HashMap<>();
    protected final Map<Integer, Boolean> blockPickupCache = new HashMap<>();
    protected final Map<Integer, List<Integer>> petsCanConsumeCache = new HashMap<>();
    protected final Map<Integer, Boolean> logoutExpireCache = new HashMap<>();
    protected final Map<Integer, List<Pair<Integer, Integer>>> summonMobCache = new HashMap<>();
    protected final List<Pair<Integer, String>> itemNameCache = new ArrayList<>();
    protected final Map<Integer, Map<Integer, Map<String, Integer>>> equipIncsCache = new HashMap<>();
    protected final Map<Integer, Map<Integer, List<Integer>>> equipSkillsCache = new HashMap<>();
    protected final Map<Integer, Pair<Integer, List<StructRewardItem>>> RewardItem = new HashMap<>();
    protected final Map<Byte, StructSetItem> setItems = new HashMap<>();
    protected final Map<Integer, Pair<Integer, List<Integer>>> questItems = new HashMap<>();
    protected final Map<Integer, String> faceList = new HashMap<>();
    public static final Map<Integer, String> faceLists = new HashMap<>();
    public static final Map<Integer, String> hairList = new HashMap<>();
    protected Map<Integer, MapleInventoryType> inventoryTypeCache = new HashMap<>();
    protected final Map<Integer, Integer> chairMountId = new HashMap<>();

    protected MapleItemInformationProvider() {
        System.out.println("【读取中】 MapleItemInformationProvider :::");
    }

    public final void load() {
        if (!setItems.isEmpty() || !potentialCache.isEmpty()) {
            return;
        }
        getAllItems();
        loadStringData();
        /*
         * final MapleData setsData = etcData.getData("SetItemInfo.img");
         * StructSetItem itemz;
         * SetItem itez;
         * for (MapleData dat : setsData) {
         * itemz = new StructSetItem();
         * itemz.setItemID = Byte.parseByte(dat.getName());
         * itemz.completeCount = (byte) MapleDataTool.getIntConvert("completeCount",
         * dat, 0);
         * for (MapleData level : dat.getChildByPath("ItemID")) {
         * itemz.itemIDs.add(MapleDataTool.getIntConvert(level));
         * }
         * for (MapleData level : dat.getChildByPath("Effect")) {
         * itez = new SetItem();
         * itez.incPDD = MapleDataTool.getIntConvert("incPDD", level, 0);
         * itez.incMDD = MapleDataTool.getIntConvert("incMDD", level, 0);
         * itez.incSTR = MapleDataTool.getIntConvert("incSTR", level, 0);
         * itez.incDEX = MapleDataTool.getIntConvert("incDEX", level, 0);
         * itez.incINT = MapleDataTool.getIntConvert("incINT", level, 0);
         * itez.incLUK = MapleDataTool.getIntConvert("incLUK", level, 0);
         * itez.incACC = MapleDataTool.getIntConvert("incACC", level, 0);
         * itez.incPAD = MapleDataTool.getIntConvert("incPAD", level, 0);
         * itez.incMAD = MapleDataTool.getIntConvert("incMAD", level, 0);
         * itez.incSpeed = MapleDataTool.getIntConvert("incSpeed", level, 0);
         * itez.incMHP = MapleDataTool.getIntConvert("incMHP", level, 0);
         * itez.incMMP = MapleDataTool.getIntConvert("incMMP", level, 0);
         * itemz.items.put(Integer.parseInt(level.getName()), itez);
         * }
         * setItems.put(itemz.setItemID, itemz);
         * }
         */
        /*
         * final MapleData potsData = itemData.getData("ItemOption.img");
         * StructPotentialItem item;
         * List<StructPotentialItem> items;
         * for (MapleData dat : potsData) {
         * items = new LinkedList<StructPotentialItem>();
         * for (MapleData level : dat.getChildByPath("level")) {
         * item = new StructPotentialItem();
         * item.optionType = MapleDataTool.getIntConvert("info/optionType", dat, 0);
         * item.reqLevel = MapleDataTool.getIntConvert("info/reqLevel", dat, 0);
         * item.face = MapleDataTool.getString("face", level, "");
         * item.boss = MapleDataTool.getIntConvert("boss", level, 0) > 0;
         * item.potentialID = Short.parseShort(dat.getName());
         * item.attackType = (short) MapleDataTool.getIntConvert("attackType", level,
         * 0);
         * item.incMHP = (short) MapleDataTool.getIntConvert("incMHP", level, 0);
         * item.incMMP = (short) MapleDataTool.getIntConvert("incMMP", level, 0);
         * 
         * item.incSTR = (byte) MapleDataTool.getIntConvert("incSTR", level, 0);
         * item.incDEX = (byte) MapleDataTool.getIntConvert("incDEX", level, 0);
         * item.incINT = (byte) MapleDataTool.getIntConvert("incINT", level, 0);
         * item.incLUK = (byte) MapleDataTool.getIntConvert("incLUK", level, 0);
         * item.incACC = (byte) MapleDataTool.getIntConvert("incACC", level, 0);
         * item.incEVA = (byte) MapleDataTool.getIntConvert("incEVA", level, 0);
         * item.incSpeed = (byte) MapleDataTool.getIntConvert("incSpeed", level, 0);
         * item.incJump = (byte) MapleDataTool.getIntConvert("incJump", level, 0);
         * item.incPAD = (byte) MapleDataTool.getIntConvert("incPAD", level, 0);
         * item.incMAD = (byte) MapleDataTool.getIntConvert("incMAD", level, 0);
         * item.incPDD = (byte) MapleDataTool.getIntConvert("incPDD", level, 0);
         * item.incMDD = (byte) MapleDataTool.getIntConvert("incMDD", level, 0);
         * item.prop = (byte) MapleDataTool.getIntConvert("prop", level, 0);
         * item.time = (byte) MapleDataTool.getIntConvert("time", level, 0);
         * item.incSTRr = (byte) MapleDataTool.getIntConvert("incSTRr", level, 0);
         * item.incDEXr = (byte) MapleDataTool.getIntConvert("incDEXr", level, 0);
         * item.incINTr = (byte) MapleDataTool.getIntConvert("incINTr", level, 0);
         * item.incLUKr = (byte) MapleDataTool.getIntConvert("incLUKr", level, 0);
         * item.incMHPr = (byte) MapleDataTool.getIntConvert("incMHPr", level, 0);
         * item.incMMPr = (byte) MapleDataTool.getIntConvert("incMMPr", level, 0);
         * item.incACCr = (byte) MapleDataTool.getIntConvert("incACCr", level, 0);
         * item.incEVAr = (byte) MapleDataTool.getIntConvert("incEVAr", level, 0);
         * item.incPADr = (byte) MapleDataTool.getIntConvert("incPADr", level, 0);
         * item.incMADr = (byte) MapleDataTool.getIntConvert("incMADr", level, 0);
         * item.incPDDr = (byte) MapleDataTool.getIntConvert("incPDDr", level, 0);
         * item.incMDDr = (byte) MapleDataTool.getIntConvert("incMDDr", level, 0);
         * item.incCr = (byte) MapleDataTool.getIntConvert("incCr", level, 0);
         * item.incDAMr = (byte) MapleDataTool.getIntConvert("incDAMr", level, 0);
         * item.RecoveryHP = (byte) MapleDataTool.getIntConvert("RecoveryHP", level, 0);
         * item.RecoveryMP = (byte) MapleDataTool.getIntConvert("RecoveryMP", level, 0);
         * item.HP = (byte) MapleDataTool.getIntConvert("HP", level, 0);
         * item.MP = (byte) MapleDataTool.getIntConvert("MP", level, 0);
         * item.level = (byte) MapleDataTool.getIntConvert("level", level, 0);
         * item.ignoreTargetDEF = (byte) MapleDataTool.getIntConvert("ignoreTargetDEF",
         * level, 0);
         * item.ignoreDAM = (byte) MapleDataTool.getIntConvert("ignoreDAM", level, 0);
         * item.DAMreflect = (byte) MapleDataTool.getIntConvert("DAMreflect", level, 0);
         * item.mpconReduce = (byte) MapleDataTool.getIntConvert("mpconReduce", level,
         * 0);
         * item.mpRestore = (byte) MapleDataTool.getIntConvert("mpRestore", level, 0);
         * item.incMesoProp = (byte) MapleDataTool.getIntConvert("incMesoProp", level,
         * 0);
         * item.incRewardProp = (byte) MapleDataTool.getIntConvert("incRewardProp",
         * level, 0);
         * item.incAllskill = (byte) MapleDataTool.getIntConvert("incAllskill", level,
         * 0);
         * item.ignoreDAMr = (byte) MapleDataTool.getIntConvert("ignoreDAMr", level, 0);
         * item.RecoveryUP = (byte) MapleDataTool.getIntConvert("RecoveryUP", level, 0);
         * switch (item.potentialID) {
         * case 31001:
         * case 31002:
         * case 31003:
         * case 31004:
         * item.skillID = (short) (item.potentialID - 23001);
         * break;
         * default:
         * item.skillID = 0;
         * break;
         * }
         * items.add(item);
         * }
         * potentialCache.put(Integer.parseInt(dat.getName()), items);
         * }
         */
    }

    public final List<StructPotentialItem> getPotentialInfo(final int potId) {
        return potentialCache.get(potId);
    }

    public final Map<Integer, List<StructPotentialItem>> getAllPotentialInfo() {
        return potentialCache;
    }

    public static final MapleItemInformationProvider getInstance() {
        return instance;
    }

    public final List<Pair<Integer, String>> getAllItems() {
        if (!itemNameCache.isEmpty()) {
            return itemNameCache;
        }
        final List<Pair<Integer, String>> itemPairs = new ArrayList<>();
        MapleData itemsData;

        itemsData = stringData.getData("Cash.img");
        for (final MapleData itemFolder : itemsData.getChildren()) {
            itemPairs.add(new Pair<>(Integer.parseInt(itemFolder.getName()),
                    MapleDataTool.getString("name", itemFolder, "NO-NAME")));
        }

        itemsData = stringData.getData("Consume.img");
        for (final MapleData itemFolder : itemsData.getChildren()) {
            itemPairs.add(new Pair<>(Integer.parseInt(itemFolder.getName()),
                    MapleDataTool.getString("name", itemFolder, "NO-NAME")));
        }

        itemsData = stringData.getData("Eqp.img").getChildByPath("Eqp");
        for (final MapleData eqpType : itemsData.getChildren()) {
            for (final MapleData itemFolder : eqpType.getChildren()) {
                try {
                    itemPairs.add(new Pair<>(Integer.parseInt(itemFolder.getName()),
                            MapleDataTool.getString("name", itemFolder, "NO-NAME")));
                } catch (Exception Ex) {
                    System.out.println("错误：" + itemFolder.getName());
                }
            }
        }

        itemsData = stringData.getData("Etc.img").getChildByPath("Etc");
        for (final MapleData itemFolder : itemsData.getChildren()) {
            itemPairs.add(new Pair<>(Integer.parseInt(itemFolder.getName()),
                    MapleDataTool.getString("name", itemFolder, "NO-NAME")));
        }

        itemsData = stringData.getData("Ins.img");
        for (final MapleData itemFolder : itemsData.getChildren()) {
            itemPairs.add(new Pair<>(Integer.parseInt(itemFolder.getName()),
                    MapleDataTool.getString("name", itemFolder, "NO-NAME")));
        }

        itemsData = stringData.getData("Pet.img");
        for (final MapleData itemFolder : itemsData.getChildren()) {
            itemPairs.add(new Pair<>(Integer.parseInt(itemFolder.getName()),
                    MapleDataTool.getString("name", itemFolder, "NO-NAME")));
        }
        return itemPairs;
    }

    public final boolean isTwoHanded(int itemId) {
        switch (getWeaponType(itemId)) {
            case 双手斧:
            case 双手棍:
            case 弓:
            case 拳套:
            case 弩:
            case 枪:
            case 矛:
            case 双手剑:
            case 火枪:
            case 指虎:
                return true;
            default:
                return false;
        }
    }

    public boolean isUntradeableOnEquip(int itemId) {
        if (onEquipUntradableCache.containsKey(itemId)) {
            return onEquipUntradableCache.get(itemId);
        }
        boolean untradableOnEquip = MapleDataTool.getIntConvert("info/equipTradeBlock", getItemData(itemId), 0) > 0;
        onEquipUntradableCache.put(itemId, untradableOnEquip);
        return untradableOnEquip;
    }

    public MapleWeaponType getWeaponType(int itemId) {
        int cat = (itemId / 10000) % 100;
        MapleWeaponType[] type = { MapleWeaponType.单手剑, MapleWeaponType.单手斧, MapleWeaponType.单手棍, MapleWeaponType.短剑,
                MapleWeaponType.没有武器, MapleWeaponType.没有武器, MapleWeaponType.没有武器, MapleWeaponType.长杖,
                MapleWeaponType.短杖, MapleWeaponType.没有武器, MapleWeaponType.双手剑, MapleWeaponType.双手斧, MapleWeaponType.双手棍,
                MapleWeaponType.矛, MapleWeaponType.枪, MapleWeaponType.弓, MapleWeaponType.弩, MapleWeaponType.拳套,
                MapleWeaponType.指虎, MapleWeaponType.火枪 };
        if (cat < 30 || cat > 49) {
            return MapleWeaponType.没有武器;
        }
        return type[cat - 30];
    }

    protected final MapleData getStringData(final int itemId) {
        String cat = null;
        MapleData data;

        if (itemId >= 5010000) {
            data = cashStringData;
        } else if (itemId >= 2000000 && itemId < 3000000) {
            data = consumeStringData;
        } else if ((itemId >= 1142000 && itemId < 1143200) || (itemId >= 1010000 && itemId < 1040000)
                || (itemId >= 1122000 && itemId < 1123000)) {
            data = eqpStringData;
            cat = "Accessory";
        } else if (itemId >= 1000000 && itemId < 1010000) {
            data = eqpStringData;
            cat = "Cap";
        } else if (itemId >= 1102000 && itemId < 1103000) {
            data = eqpStringData;
            cat = "Cape";
        } else if (itemId >= 1040000 && itemId < 1050000) {
            data = eqpStringData;
            cat = "Coat";
        } else if (itemId >= 20000 && itemId < 22000) {
            data = eqpStringData;
            cat = "Face";
        } else if (itemId >= 1080000 && itemId < 1090000) {
            data = eqpStringData;
            cat = "Glove";
        } else if (itemId >= 30000 && itemId < 32000) {
            data = eqpStringData;
            cat = "Hair";
        } else if (itemId >= 1050000 && itemId < 1060000) {
            data = eqpStringData;
            cat = "Longcoat";
        } else if (itemId >= 1060000 && itemId < 1070000) {
            data = eqpStringData;
            cat = "Pants";
        } else if (itemId >= 1610000 && itemId < 1660000) {
            data = eqpStringData;
            cat = "Mechanic";
        } else if (itemId >= 1802000 && itemId < 1810000) {
            data = eqpStringData;
            cat = "PetEquip";
        } else if (itemId >= 1920000 && itemId < 2000000) {
            data = eqpStringData;
            cat = "Dragon";
        } else if (itemId >= 1112000 && itemId < 1120000) {
            data = eqpStringData;
            cat = "Ring";
        } else if (itemId >= 1092000 && itemId < 1100000) {
            data = eqpStringData;
            cat = "Shield";
        } else if (itemId >= 1070000 && itemId < 1080000) {
            data = eqpStringData;
            cat = "Shoes";
        } else if (itemId >= 1900000 && itemId < 1920000) {
            data = eqpStringData;
            cat = "Taming";
        } else if (itemId >= 1300000 && itemId < 1800000) {
            data = eqpStringData;
            cat = "Weapon";
        } else if (itemId >= 4000000 && itemId < 5000000) {
            data = etcStringData;
        } else if (itemId >= 3000000 && itemId < 4000000) {
            data = insStringData;
        } else if (itemId >= 5000000 && itemId < 5010000) {
            data = petStringData;
        } else {
            return null;
        }
        if (cat == null) {
            return data.getChildByPath(String.valueOf(itemId));
        } else {
            return data.getChildByPath("Eqp/" + cat + "/" + itemId);
        }
    }

    protected final MapleData getItemData(final int itemId) {
        MapleData ret = null;
        final String idStr = "0" + String.valueOf(itemId);
        MapleDataDirectoryEntry root = itemData.getRoot();
        for (final MapleDataDirectoryEntry topDir : root.getSubdirectories()) {
            // we should have .img files here beginning with the first 4 IID
            for (final MapleDataFileEntry iFile : topDir.getFiles()) {
                if (iFile.getName().equals(idStr.substring(0, 4) + ".img")) {
                    ret = itemData.getData(topDir.getName() + "/" + iFile.getName());
                    if (ret == null) {
                        return null;
                    }
                    ret = ret.getChildByPath(idStr);
                    return ret;
                } else if (iFile.getName().equals(idStr.substring(1) + ".img")) {
                    return itemData.getData(topDir.getName() + "/" + iFile.getName());
                }
            }
        }
        root = equipData.getRoot();
        for (final MapleDataDirectoryEntry topDir : root.getSubdirectories()) {
            for (final MapleDataFileEntry iFile : topDir.getFiles()) {
                if (iFile.getName().equals(idStr + ".img")) {
                    return equipData.getData(topDir.getName() + "/" + iFile.getName());
                }
            }
        }
        return ret;
    }

    /**
     * returns the maximum of items in one slot
     *
     * @param c
     * @param itemId
     * @return
     */
    public final short getSlotMax(final MapleClient c, final int itemId) {
        if (slotMaxCache.containsKey(itemId)) {
            return slotMaxCache.get(itemId);
        }
        short ret = 0;
        final MapleData item = getItemData(itemId);
        if (item != null) {
            final MapleData smEntry = item.getChildByPath("info/slotMax");
            if (smEntry == null) {
                if (GameConstants.getInventoryType(itemId) == MapleInventoryType.EQUIP) {
                    ret = 1;
                } else {
                    ret = 9999;
                }
            } else {
                // ret = (short) MapleDataTool.getInt(smEntry);
                if (GameConstants.getSlotMax(itemId) > 0) {
                    ret = GameConstants.getSlotMax(itemId);
                } else if (itemId / 10000 == 433) {
                    ret = 1;
                } else {
                    ret = 9999;
                }

            }
        }
        slotMaxCache.put(itemId, ret);
        return ret;
    }

    public final int getWholePrice(final int itemId) {
        if (wholePriceCache.containsKey(itemId)) {
            return wholePriceCache.get(itemId);
        }
        final MapleData item = getItemData(itemId);
        if (item == null) {
            return -1;
        }
        int pEntry;
        final MapleData pData = item.getChildByPath("info/price");
        if (pData == null) {
            return -1;
        }
        pEntry = MapleDataTool.getInt(pData);

        wholePriceCache.put(itemId, pEntry);
        return pEntry;
    }

    public final double getPrice(final int itemId) {
        if (priceCache.containsKey(itemId)) {
            return priceCache.get(itemId);
        }
        final MapleData item = getItemData(itemId);
        if (item == null) {
            return -1;
        }
        double pEntry;
        MapleData pData = item.getChildByPath("info/unitPrice");
        if (pData != null) {
            try {
                pEntry = MapleDataTool.getDouble(pData);
            } catch (Exception e) {
                pEntry = (double) MapleDataTool.getIntConvert(pData);
            }
        } else {
            pData = item.getChildByPath("info/price");
            if (pData == null) {
                return -1;
            }
            pEntry = (double) MapleDataTool.getIntConvert(pData);
        }
        if (itemId == 2070019 || itemId == 2330007) {
            pEntry = 1.0;
        }
        priceCache.put(itemId, pEntry);
        return pEntry;
    }

    public final Map<String, Byte> getItemMakeStats(final int itemId) {
        if (itemMakeStatsCache.containsKey(itemId)) {
            return itemMakeStatsCache.get(itemId);
        }
        if (itemId / 10000 != 425) {
            return null;
        }
        final Map<String, Byte> ret = new LinkedHashMap<>();
        final MapleData item = getItemData(itemId);
        if (item == null) {
            return null;
        }
        final MapleData info = item.getChildByPath("info");
        if (info == null) {
            return null;
        }
        ret.put("incPAD", (byte) MapleDataTool.getInt("incPAD", info, 0)); // WATK
        ret.put("incMAD", (byte) MapleDataTool.getInt("incMAD", info, 0)); // MATK
        ret.put("incACC", (byte) MapleDataTool.getInt("incACC", info, 0)); // ACC
        ret.put("incEVA", (byte) MapleDataTool.getInt("incEVA", info, 0)); // AVOID
        ret.put("incSpeed", (byte) MapleDataTool.getInt("incSpeed", info, 0)); // SPEED
        ret.put("incJump", (byte) MapleDataTool.getInt("incJump", info, 0)); // JUMP
        ret.put("incMaxHP", (byte) MapleDataTool.getInt("incMaxHP", info, 0)); // HP
        ret.put("incMaxMP", (byte) MapleDataTool.getInt("incMaxMP", info, 0)); // MP
        ret.put("incSTR", (byte) MapleDataTool.getInt("incSTR", info, 0)); // STR
        ret.put("incINT", (byte) MapleDataTool.getInt("incINT", info, 0)); // INT
        ret.put("incLUK", (byte) MapleDataTool.getInt("incLUK", info, 0)); // LUK
        ret.put("incDEX", (byte) MapleDataTool.getInt("incDEX", info, 0)); // DEX
        // ret.put("incReqLevel", MapleDataTool.getInt("incReqLevel", info, 0)); // IDK!
        ret.put("randOption", (byte) MapleDataTool.getInt("randOption", info, 0)); // Black Crystal Wa/MA
        ret.put("randStat", (byte) MapleDataTool.getInt("randStat", info, 0)); // Dark Crystal - Str/Dex/int/Luk

        itemMakeStatsCache.put(itemId, ret);
        return ret;
    }

    private int rand(int min, int max) {
        return Math.abs((int) Randomizer.rand(min, max));
    }

    public Equip levelUpEquip(Equip equip, Map<String, Integer> sta) {
        Equip nEquip = (Equip) equip.copy();
        // is this all the stats?
        try {
            for (Entry<String, Integer> stat : sta.entrySet()) {
                switch (stat.getKey()) {
                    case "STRMin":
                        nEquip.setStr((short) (nEquip.getStr() + rand(stat.getValue(), sta.get("STRMax"))));
                        break;
                    case "DEXMin":
                        nEquip.setDex((short) (nEquip.getDex() + rand(stat.getValue(), sta.get("DEXMax"))));
                        break;
                    case "INTMin":
                        nEquip.setInt((short) (nEquip.getInt() + rand(stat.getValue(), sta.get("INTMax"))));
                        break;
                    case "LUKMin":
                        nEquip.setLuk((short) (nEquip.getLuk() + rand(stat.getValue(), sta.get("LUKMax"))));
                        break;
                    case "PADMin":
                        nEquip.setWatk((short) (nEquip.getWatk() + rand(stat.getValue(), sta.get("PADMax"))));
                        break;
                    case "PDDMin":
                        nEquip.setWdef((short) (nEquip.getWdef() + rand(stat.getValue(), sta.get("PDDMax"))));
                        break;
                    case "MADMin":
                        nEquip.setMatk((short) (nEquip.getMatk() + rand(stat.getValue(), sta.get("MADMax"))));
                        break;
                    case "MDDMin":
                        nEquip.setMdef((short) (nEquip.getMdef() + rand(stat.getValue(), sta.get("MDDMax"))));
                        break;
                    case "ACCMin":
                        nEquip.setAcc((short) (nEquip.getAcc() + rand(stat.getValue(), sta.get("ACCMax"))));
                        break;
                    case "EVAMin":
                        nEquip.setAvoid((short) (nEquip.getAvoid() + rand(stat.getValue(), sta.get("EVAMax"))));
                        break;
                    case "SpeedMin":
                        nEquip.setSpeed((short) (nEquip.getSpeed() + rand(stat.getValue(), sta.get("SpeedMax"))));
                        break;
                    case "JumpMin":
                        nEquip.setJump((short) (nEquip.getJump() + rand(stat.getValue(), sta.get("JumpMax"))));
                        break;
                    case "MHPMin":
                        nEquip.setHp((short) (nEquip.getHp() + rand(stat.getValue(), sta.get("MHPMax"))));
                        break;
                    case "MMPMin":
                        nEquip.setMp((short) (nEquip.getMp() + rand(stat.getValue(), sta.get("MMPMax"))));
                        break;
                    case "MaxHPMin":
                        nEquip.setHp((short) (nEquip.getHp() + rand(stat.getValue(), sta.get("MaxHPMax"))));
                        break;
                    case "MaxMPMin":
                        nEquip.setMp((short) (nEquip.getMp() + rand(stat.getValue(), sta.get("MaxMPMax"))));
                        break;
                }
            }
        } catch (NullPointerException e) {

        }
        return nEquip;
    }

    public final Map<Integer, Map<String, Integer>> getEquipIncrements(final int itemId) {
        if (equipIncsCache.containsKey(itemId)) {
            return equipIncsCache.get(itemId);
        }
        final Map<Integer, Map<String, Integer>> ret = new LinkedHashMap<>();
        final MapleData item = getItemData(itemId);
        if (item == null) {
            return null;
        }
        final MapleData info = item.getChildByPath("info/level/info");
        if (info == null) {
            return null;
        }
        for (MapleData dat : info.getChildren()) {
            Map<String, Integer> incs = new HashMap<>();
            for (MapleData data : dat.getChildren()) { // why we have to do this? check if number has skills or not
                if (data.getName().length() > 3) {
                    incs.put(data.getName().substring(3), MapleDataTool.getIntConvert(data.getName(), dat, 0));
                }
            }
            ret.put(Integer.parseInt(dat.getName()), incs);
        }
        equipIncsCache.put(itemId, ret);
        return ret;
    }

    public final Map<Integer, List<Integer>> getEquipSkills(final int itemId) {
        if (equipSkillsCache.containsKey(itemId)) {
            return equipSkillsCache.get(itemId);
        }
        final Map<Integer, List<Integer>> ret = new LinkedHashMap<>();
        final MapleData item = getItemData(itemId);
        if (item == null) {
            return null;
        }
        final MapleData info = item.getChildByPath("info/level/case");
        if (info == null) {
            return null;
        }
        for (MapleData dat : info.getChildren()) {
            for (MapleData data : dat.getChildren()) { // why we have to do this? check if number has skills or not
                if (data.getName().length() == 1) { // the numbers all them are one digit. everything else isnt so we're
                                                    // lucky here..
                    List<Integer> adds = new ArrayList<>();
                    for (MapleData skil : data.getChildByPath("Skill").getChildren()) {
                        adds.add(MapleDataTool.getIntConvert("id", skil, 0));
                    }
                    ret.put(Integer.parseInt(data.getName()), adds);
                }
            }
        }
        equipSkillsCache.put(itemId, ret);
        return ret;
    }

    public final Map<String, Integer> getEquipStats(final int itemId) {
        if (equipStatsCache.containsKey(itemId)) {
            return equipStatsCache.get(itemId);
        }
        final Map<String, Integer> ret = new LinkedHashMap<>();
        final MapleData item = getItemData(itemId);
        if (item == null) {
            return null;
        }
        final MapleData info = item.getChildByPath("info");
        if (info == null) {
            return null;
        }
        for (final MapleData data : info.getChildren()) {
            if (data.getName().startsWith("inc")) {
                ret.put(data.getName().substring(3), MapleDataTool.getIntConvert(data));
            }
        }
        ret.put("tuc", MapleDataTool.getInt("tuc", info, 0));
        ret.put("reqLevel", MapleDataTool.getInt("reqLevel", info, 0));
        ret.put("reqJob", MapleDataTool.getInt("reqJob", info, 0));
        ret.put("reqSTR", MapleDataTool.getInt("reqSTR", info, 0));
        ret.put("reqDEX", MapleDataTool.getInt("reqDEX", info, 0));
        ret.put("reqINT", MapleDataTool.getInt("reqINT", info, 0));
        ret.put("reqLUK", MapleDataTool.getInt("reqLUK", info, 0));
        ret.put("reqPOP", MapleDataTool.getInt("reqPOP", info, 0));
        ret.put("cash", MapleDataTool.getInt("cash", info, 0));
        ret.put("canLevel", info.getChildByPath("level") == null ? 0 : 1);
        ret.put("cursed", MapleDataTool.getInt("cursed", info, 0));
        ret.put("success", MapleDataTool.getInt("success", info, 0));
        ret.put("setItemID", MapleDataTool.getInt("setItemID", info, 0));
        ret.put("equipTradeBlock", MapleDataTool.getInt("equipTradeBlock", info, 0));
        ret.put("durability", MapleDataTool.getInt("durability", info, -1));

        if (GameConstants.isMagicWeapon(itemId)) {
            ret.put("elemDefault", MapleDataTool.getInt("elemDefault", info, 100));
            ret.put("incRMAS", MapleDataTool.getInt("incRMAS", info, 100)); // Poison
            ret.put("incRMAF", MapleDataTool.getInt("incRMAF", info, 100)); // Fire
            ret.put("incRMAL", MapleDataTool.getInt("incRMAL", info, 100)); // Lightning
            ret.put("incRMAI", MapleDataTool.getInt("incRMAI", info, 100)); // Ice
        }

        equipStatsCache.put(itemId, ret);
        return ret;
    }

    public final boolean isCashItem(final int itemId) {
        if (getEquipStats(itemId) == null) {
            return false;
        }
        return getEquipStats(itemId).get("cash") == 1;
    }

    public final boolean canEquip(final Map<String, Integer> stats, final int itemid, final int level, final int job,
            final int fame, final int str, final int dex, final int luk, final int int_, final int supremacy) {
        if ((level + supremacy) >= stats.get("reqLevel") && str >= stats.get("reqSTR") && dex >= stats.get("reqDEX")
                && luk >= stats.get("reqLUK") && int_ >= stats.get("reqINT")) {
            final int fameReq = stats.get("reqPOP");
            return !(fameReq != 0 && fame < fameReq);
        }
        return false;
    }

    public final int getReqLevel(final int itemId) {
        if (getEquipStats(itemId) == null) {
            return 0;
        }
        return getEquipStats(itemId).get("reqLevel");
    }

    public final int getSlots(final int itemId) {
        if (getEquipStats(itemId) == null) {
            return 0;
        }
        return getEquipStats(itemId).get("tuc");
    }

    public final int getSetItemID(final int itemId) {
        if (getEquipStats(itemId) == null) {
            return 0;
        }
        return getEquipStats(itemId).get("setItemID");
    }

    public final StructSetItem getSetItem(final int setItemId) {
        return setItems.get((byte) setItemId);
    }

    public final List<Integer> getScrollReqs(final int itemId) {
        if (scrollReqCache.containsKey(itemId)) {
            return scrollReqCache.get(itemId);
        }
        final List<Integer> ret = new ArrayList<>();
        final MapleData data = getItemData(itemId).getChildByPath("req");

        if (data == null) {
            return ret;
        }
        for (final MapleData req : data.getChildren()) {
            ret.add(MapleDataTool.getInt(req));
        }
        scrollReqCache.put(itemId, ret);
        return ret;
    }

    public final IItem scrollEquipWithId(final IItem equip, final IItem scrollId, final boolean ws,
            final MapleCharacter chr, final int vegas) {
        if (equip.getType() == 1) { // See IItem.java
            final Equip nEquip = (Equip) equip;
            final Map<String, Integer> stats = getEquipStats(scrollId.getItemId());
            final Map<String, Integer> eqstats = getEquipStats(equip.getItemId());
            final int succ = (GameConstants
                    .isTablet(scrollId.getItemId())
                            ? GameConstants.getSuccessTablet(scrollId.getItemId(), nEquip.getLevel())
                            : ((GameConstants.isEquipScroll(scrollId.getItemId())
                                    || GameConstants.isPotentialScroll(scrollId.getItemId()) ? 0
                                            : stats.get("success"))));
            final int curse = (GameConstants
                    .isTablet(scrollId.getItemId())
                            ? GameConstants.getCurseTablet(scrollId.getItemId(), nEquip.getLevel())
                            : ((GameConstants.isEquipScroll(scrollId.getItemId())
                                    || GameConstants.isPotentialScroll(scrollId.getItemId()) ? 0
                                            : stats.get("cursed"))));
            int success = succ + (vegas == 5610000 && succ == 10 ? 20 : (vegas == 5610001 && succ == 60 ? 30 : 0));
            if (GameConstants.isPotentialScroll(scrollId.getItemId())
                    || GameConstants.isEquipScroll(scrollId.getItemId()) || Randomizer.nextInt(100) <= success) {
                switch (scrollId.getItemId()) {
                    case 2049000:
                    case 2049001:
                    case 2049002:
                    case 2049003:
                    case 2049004:
                    case 2049005: {
                        if (nEquip.getLevel() + nEquip.getUpgradeSlots() < eqstats.get("tuc")) {
                            nEquip.setUpgradeSlots((byte) (nEquip.getUpgradeSlots() + 1));
                        }
                        break;
                    }
                    case 2049006:
                    case 2049007:
                    case 2049008: {
                        if (nEquip.getLevel() + nEquip.getUpgradeSlots() < eqstats.get("tuc")) {
                            nEquip.setUpgradeSlots((byte) (nEquip.getUpgradeSlots() + 2));
                        }
                        break;
                    }
                    case 2040727: // Spikes on shoe, prevents slip
                    {
                        byte flag = nEquip.getFlag();
                        flag |= ItemFlag.SPIKES.getValue();
                        nEquip.setFlag(flag);
                        break;
                    }
                    case 2041058: // Cape for Cold protection
                    {
                        byte flag = nEquip.getFlag();
                        flag |= ItemFlag.COLD.getValue();
                        nEquip.setFlag(flag);
                        break;
                    }
                    default: {
                        if (GameConstants.isChaosScroll(scrollId.getItemId())) {
                            final int z = GameConstants.getChaosNumber(scrollId.getItemId());
                            if (nEquip.getStr() > 0) {
                                nEquip.setStr((short) (nEquip.getStr()
                                        + Randomizer.nextInt(z) * (Randomizer.nextBoolean() ? 1 : -1)));
                            }
                            if (nEquip.getDex() > 0) {
                                nEquip.setDex((short) (nEquip.getDex()
                                        + Randomizer.nextInt(z) * (Randomizer.nextBoolean() ? 1 : -1)));
                            }
                            if (nEquip.getInt() > 0) {
                                nEquip.setInt((short) (nEquip.getInt()
                                        + Randomizer.nextInt(z) * (Randomizer.nextBoolean() ? 1 : -1)));
                            }
                            if (nEquip.getLuk() > 0) {
                                nEquip.setLuk((short) (nEquip.getLuk()
                                        + Randomizer.nextInt(z) * (Randomizer.nextBoolean() ? 1 : -1)));
                            }
                            if (nEquip.getWatk() > 0) {
                                nEquip.setWatk((short) (nEquip.getWatk()
                                        + Randomizer.nextInt(z) * (Randomizer.nextBoolean() ? 1 : -1)));
                            }
                            if (nEquip.getWdef() > 0) {
                                nEquip.setWdef((short) (nEquip.getWdef()
                                        + Randomizer.nextInt(z) * (Randomizer.nextBoolean() ? 1 : -1)));
                            }
                            if (nEquip.getMatk() > 0) {
                                nEquip.setMatk((short) (nEquip.getMatk()
                                        + Randomizer.nextInt(z) * (Randomizer.nextBoolean() ? 1 : -1)));
                            }
                            if (nEquip.getMdef() > 0) {
                                nEquip.setMdef((short) (nEquip.getMdef()
                                        + Randomizer.nextInt(z) * (Randomizer.nextBoolean() ? 1 : -1)));
                            }
                            if (nEquip.getAcc() > 0) {
                                nEquip.setAcc((short) (nEquip.getAcc()
                                        + Randomizer.nextInt(z) * (Randomizer.nextBoolean() ? 1 : -1)));
                            }
                            if (nEquip.getAvoid() > 0) {
                                nEquip.setAvoid((short) (nEquip.getAvoid()
                                        + Randomizer.nextInt(z) * (Randomizer.nextBoolean() ? 1 : -1)));
                            }
                            if (nEquip.getSpeed() > 0) {
                                nEquip.setSpeed((short) (nEquip.getSpeed()
                                        + Randomizer.nextInt(z) * (Randomizer.nextBoolean() ? 1 : -1)));
                            }
                            if (nEquip.getJump() > 0) {
                                nEquip.setJump((short) (nEquip.getJump()
                                        + Randomizer.nextInt(z) * (Randomizer.nextBoolean() ? 1 : -1)));
                            }
                            if (nEquip.getHp() > 0) {
                                nEquip.setHp((short) (nEquip.getHp()
                                        + Randomizer.nextInt(z) * (Randomizer.nextBoolean() ? 1 : -1)));
                            }
                            if (nEquip.getMp() > 0) {
                                nEquip.setMp((short) (nEquip.getMp()
                                        + Randomizer.nextInt(z) * (Randomizer.nextBoolean() ? 1 : -1)));
                            }
                            break;
                        } else if (GameConstants.isEquipScroll(scrollId.getItemId())) {
                            final int chanc = Math
                                    .max((scrollId.getItemId() == 2049300 ? 100 : 80) - (nEquip.getEnhance() * 10), 10);
                            if (Randomizer.nextInt(100) > chanc) {
                                return null; // destroyed, nib
                            }
                            if (nEquip.getStr() > 0 || Randomizer.nextInt(50) == 1) { // 1/50
                                nEquip.setStr((short) (nEquip.getStr() + Randomizer.nextInt(5)));
                            }
                            if (nEquip.getDex() > 0 || Randomizer.nextInt(50) == 1) { // 1/50
                                nEquip.setDex((short) (nEquip.getDex() + Randomizer.nextInt(5)));
                            }
                            if (nEquip.getInt() > 0 || Randomizer.nextInt(50) == 1) { // 1/50
                                nEquip.setInt((short) (nEquip.getInt() + Randomizer.nextInt(5)));
                            }
                            if (nEquip.getLuk() > 0 || Randomizer.nextInt(50) == 1) { // 1/50
                                nEquip.setLuk((short) (nEquip.getLuk() + Randomizer.nextInt(5)));
                            }
                            if (nEquip.getWatk() > 0 && GameConstants.isWeapon(nEquip.getItemId())) {
                                nEquip.setWatk((short) (nEquip.getWatk() + Randomizer.nextInt(5)));
                            }
                            if (nEquip.getWdef() > 0 || Randomizer.nextInt(40) == 1) { // 1/40
                                nEquip.setWdef((short) (nEquip.getWdef() + Randomizer.nextInt(5)));
                            }
                            if (nEquip.getMatk() > 0 && GameConstants.isWeapon(nEquip.getItemId())) {
                                nEquip.setMatk((short) (nEquip.getMatk() + Randomizer.nextInt(5)));
                            }
                            if (nEquip.getMdef() > 0 || Randomizer.nextInt(40) == 1) { // 1/40
                                nEquip.setMdef((short) (nEquip.getMdef() + Randomizer.nextInt(5)));
                            }
                            if (nEquip.getAcc() > 0 || Randomizer.nextInt(20) == 1) { // 1/20
                                nEquip.setAcc((short) (nEquip.getAcc() + Randomizer.nextInt(5)));
                            }
                            if (nEquip.getAvoid() > 0 || Randomizer.nextInt(20) == 1) { // 1/20
                                nEquip.setAvoid((short) (nEquip.getAvoid() + Randomizer.nextInt(5)));
                            }
                            if (nEquip.getSpeed() > 0 || Randomizer.nextInt(10) == 1) { // 1/10
                                nEquip.setSpeed((short) (nEquip.getSpeed() + Randomizer.nextInt(5)));
                            }
                            if (nEquip.getJump() > 0 || Randomizer.nextInt(10) == 1) { // 1/10
                                nEquip.setJump((short) (nEquip.getJump() + Randomizer.nextInt(5)));
                            }
                            if (nEquip.getHp() > 0 || Randomizer.nextInt(5) == 1) { // 1/5
                                nEquip.setHp((short) (nEquip.getHp() + Randomizer.nextInt(5)));
                            }
                            if (nEquip.getMp() > 0 || Randomizer.nextInt(5) == 1) { // 1/5
                                nEquip.setMp((short) (nEquip.getMp() + Randomizer.nextInt(5)));
                            }
                            nEquip.setEnhance((byte) (nEquip.getEnhance() + 1));
                            break;
                        } else if (GameConstants.isPotentialScroll(scrollId.getItemId())) {
                            if (nEquip.getState() == 0) {
                                final int chanc = scrollId.getItemId() == 2049400 ? 90 : 70;
                                if (Randomizer.nextInt(100) > chanc) {
                                    return null; // destroyed, nib
                                }
                                nEquip.resetPotential();
                            }
                            break;
                        } else {
                            for (Entry<String, Integer> stat : stats.entrySet()) {
                                final String key = stat.getKey();
                                switch (key) {
                                    case "STR":
                                        nEquip.setStr((short) (nEquip.getStr() + stat.getValue()));
                                        break;
                                    case "DEX":
                                        nEquip.setDex((short) (nEquip.getDex() + stat.getValue()));
                                        break;
                                    case "INT":
                                        nEquip.setInt((short) (nEquip.getInt() + stat.getValue()));
                                        break;
                                    case "LUK":
                                        nEquip.setLuk((short) (nEquip.getLuk() + stat.getValue()));
                                        break;
                                    case "PAD":
                                        nEquip.setWatk((short) (nEquip.getWatk() + stat.getValue()));
                                        break;
                                    case "PDD":
                                        nEquip.setWdef((short) (nEquip.getWdef() + stat.getValue()));
                                        break;
                                    case "MAD":
                                        nEquip.setMatk((short) (nEquip.getMatk() + stat.getValue()));
                                        break;
                                    case "MDD":
                                        nEquip.setMdef((short) (nEquip.getMdef() + stat.getValue()));
                                        break;
                                    case "ACC":
                                        nEquip.setAcc((short) (nEquip.getAcc() + stat.getValue()));
                                        break;
                                    case "EVA":
                                        nEquip.setAvoid((short) (nEquip.getAvoid() + stat.getValue()));
                                        break;
                                    case "Speed":
                                        nEquip.setSpeed((short) (nEquip.getSpeed() + stat.getValue()));
                                        break;
                                    case "Jump":
                                        nEquip.setJump((short) (nEquip.getJump() + stat.getValue()));
                                        break;
                                    case "MHP":
                                        nEquip.setHp((short) (nEquip.getHp() + stat.getValue()));
                                        break;
                                    case "MMP":
                                        nEquip.setMp((short) (nEquip.getMp() + stat.getValue()));
                                        break;
                                    case "MHPr":
                                        nEquip.setHpR((short) (nEquip.getHpR() + stat.getValue()));
                                        break;
                                    case "MMPr":
                                        nEquip.setMpR((short) (nEquip.getMpR() + stat.getValue()));
                                        break;
                                }
                            }
                            break;
                        }
                    }
                }
                if (!GameConstants.isCleanSlate(scrollId.getItemId())
                        && !GameConstants.isSpecialScroll(scrollId.getItemId())
                        && !GameConstants.isEquipScroll(scrollId.getItemId())
                        && !GameConstants.isPotentialScroll(scrollId.getItemId())) {
                    nEquip.setUpgradeSlots((byte) (nEquip.getUpgradeSlots() - 1));
                    nEquip.setLevel((byte) (nEquip.getLevel() + 1));
                }
            } else {
                if (!ws && !GameConstants.isCleanSlate(scrollId.getItemId())
                        && !GameConstants.isSpecialScroll(scrollId.getItemId())
                        && !GameConstants.isEquipScroll(scrollId.getItemId())
                        && !GameConstants.isPotentialScroll(scrollId.getItemId())) {
                    if (scrollId.getItemId() != 2040739) {
                        nEquip.setUpgradeSlots((byte) (nEquip.getUpgradeSlots() - 1));
                    }
                }
                if (Randomizer.nextInt(99) < curse) {
                    return null;
                }
            }
        }
        return equip;
    }

    public final IItem getEquipById(final int equipId) {
        return getEquipById(equipId, -1);
    }

    public final IItem getEquipById(final int equipId, final int ringId) {
        final Equip nEquip = new Equip(equipId, (byte) 0, ringId, (byte) 0);
        nEquip.setQuantity((short) 1);
        final Map<String, Integer> stats = getEquipStats(equipId);
        if (stats != null) {
            for (Entry<String, Integer> stat : stats.entrySet()) {
                final String key = stat.getKey();

                switch (key) {
                    case "STR":
                        nEquip.setStr(stat.getValue().shortValue());
                        break;
                    case "DEX":
                        nEquip.setDex(stat.getValue().shortValue());
                        break;
                    case "INT":
                        nEquip.setInt(stat.getValue().shortValue());
                        break;
                    case "LUK":
                        nEquip.setLuk(stat.getValue().shortValue());
                        break;
                    case "PAD":
                        nEquip.setWatk(stat.getValue().shortValue());
                        break;
                    case "PDD":
                        nEquip.setWdef(stat.getValue().shortValue());
                        break;
                    case "MAD":
                        nEquip.setMatk(stat.getValue().shortValue());
                        break;
                    case "MDD":
                        nEquip.setMdef(stat.getValue().shortValue());
                        break;
                    case "ACC":
                        nEquip.setAcc(stat.getValue().shortValue());
                        break;
                    case "EVA":
                        nEquip.setAvoid(stat.getValue().shortValue());
                        break;
                    case "Speed":
                        nEquip.setSpeed(stat.getValue().shortValue());
                        break;
                    case "Jump":
                        nEquip.setJump(stat.getValue().shortValue());
                        break;
                    case "MHP":
                        nEquip.setHp(stat.getValue().shortValue());
                        break;
                    case "MMP":
                        nEquip.setMp(stat.getValue().shortValue());
                        break;
                    case "MHPr":
                        nEquip.setHpR(stat.getValue().shortValue());
                        break;
                    case "MMPr":
                        nEquip.setMpR(stat.getValue().shortValue());
                        break;
                    case "tuc":
                        nEquip.setUpgradeSlots(stat.getValue().byteValue());
                        break;
                    case "Craft":
                        nEquip.setHands(stat.getValue().shortValue());
                        break;
                    case "durability":
                        nEquip.setDurability(stat.getValue());
                        // } else if (key.equals("afterImage")) {
                        break;
                }
            }
        }
        equipCache.put(equipId, nEquip);
        return nEquip.copy();
    }

    private short getRandStat(final short defaultValue, final int maxRange) {
        if (defaultValue == 0) {
            return 0;
        }
        // vary no more than ceil of 10% of stat
        final int lMaxRange = (int) Math.min(Math.ceil(defaultValue * 0.1), maxRange);

        return (short) ((defaultValue - lMaxRange) + Math.floor(Math.random() * (lMaxRange * 2 + 1)));
    }

    public final Equip randomizeStats(final Equip equip) {
        equip.setStr(getRandStat(equip.getStr(), 5));
        equip.setDex(getRandStat(equip.getDex(), 5));
        equip.setInt(getRandStat(equip.getInt(), 5));
        equip.setLuk(getRandStat(equip.getLuk(), 5));
        equip.setMatk(getRandStat(equip.getMatk(), 5));
        equip.setWatk(getRandStat(equip.getWatk(), 5));
        equip.setAcc(getRandStat(equip.getAcc(), 5));
        equip.setAvoid(getRandStat(equip.getAvoid(), 5));
        equip.setJump(getRandStat(equip.getJump(), 5));
        equip.setHands(getRandStat(equip.getHands(), 5));
        equip.setSpeed(getRandStat(equip.getSpeed(), 5));
        equip.setWdef(getRandStat(equip.getWdef(), 10));
        equip.setMdef(getRandStat(equip.getMdef(), 10));
        equip.setHp(getRandStat(equip.getHp(), 10));
        equip.setMp(getRandStat(equip.getMp(), 10));
        return equip;
    }

    public final Equip randomizeStats(final Equip equip, int id) {
        switch (id) {
            case 1112413:
                equip.setStr((short) 1);
                equip.setDex((short) 1);
                equip.setInt((short) 1);
                equip.setLuk((short) 1);
                equip.setMatk((short) 1);
                equip.setWatk((short) 1);
                equip.setHp((short) 10);
                equip.setMp((short) 10);
                break;
            case 1112414:
                equip.setStr((short) 2);
                equip.setDex((short) 2);
                equip.setInt((short) 2);
                equip.setLuk((short) 2);
                equip.setMatk((short) 2);
                equip.setWatk((short) 2);
                equip.setHp((short) 20);
                equip.setMp((short) 20);
                break;
            case 1112405:
                equip.setStr((short) 3);
                equip.setDex((short) 3);
                equip.setInt((short) 3);
                equip.setLuk((short) 3);
                equip.setMatk((short) 3);
                equip.setWatk((short) 3);
                equip.setHp((short) 30);
                equip.setMp((short) 30);
                break;
            default:
                equip.setStr(getRandStat(equip.getStr(), 5));
                equip.setDex(getRandStat(equip.getDex(), 5));
                equip.setInt(getRandStat(equip.getInt(), 5));
                equip.setLuk(getRandStat(equip.getLuk(), 5));
                equip.setMatk(getRandStat(equip.getMatk(), 5));
                equip.setWatk(getRandStat(equip.getWatk(), 5));
                equip.setAcc(getRandStat(equip.getAcc(), 5));
                equip.setAvoid(getRandStat(equip.getAvoid(), 5));
                equip.setJump(getRandStat(equip.getJump(), 5));
                equip.setHands(getRandStat(equip.getHands(), 5));
                equip.setSpeed(getRandStat(equip.getSpeed(), 5));
                equip.setWdef(getRandStat(equip.getWdef(), 10));
                equip.setMdef(getRandStat(equip.getMdef(), 10));
                equip.setHp(getRandStat(equip.getHp(), 10));
                equip.setMp(getRandStat(equip.getMp(), 10));
                break;
        }
        return equip;
    }

    public final MapleStatEffect getItemEffect(final int itemId) {
        MapleStatEffect ret = itemEffects.get(Integer.valueOf(itemId));
        if (ret == null) {
            final MapleData item = getItemData(itemId);
            if (item == null) {
                return null;
            }
            ret = MapleStatEffect.loadItemEffectFromData(item.getChildByPath("spec"), itemId);
            itemEffects.put(itemId, ret);
        }
        return ret;
    }

    public final List<Pair<Integer, Integer>> getSummonMobs(final int itemId) {
        if (summonMobCache.containsKey(itemId)) {
            return summonMobCache.get(itemId);
        }
        if (!GameConstants.isSummonSack(itemId)) {
            return null;
        }
        final MapleData data = getItemData(itemId).getChildByPath("mob");
        if (data == null) {
            return null;
        }
        final List<Pair<Integer, Integer>> mobPairs = new ArrayList<>();

        for (final MapleData child : data.getChildren()) {
            mobPairs.add(new Pair<>(
                    MapleDataTool.getIntConvert("id", child),
                    MapleDataTool.getIntConvert("prob", child)));
        }
        summonMobCache.put(itemId, mobPairs);
        return mobPairs;
    }

    public final int getCardMobId(final int id) {
        if (id == 0) {
            return 0;
        }
        if (monsterBookID.containsKey(id)) {
            return monsterBookID.get(id);
        }
        final MapleData data = getItemData(id);
        final int monsterid = MapleDataTool.getIntConvert("info/mob", data, 0);

        if (monsterid == 0) { // Hack.
            return 0;
        }
        monsterBookID.put(id, monsterid);
        return monsterBookID.get(id);
    }

    public final int getWatkForProjectile(final int itemId) {
        Integer atk = projectileWatkCache.get(itemId);
        if (atk != null) {
            return atk;
        }
        final MapleData data = getItemData(itemId);
        atk = MapleDataTool.getInt("info/incPAD", data, 0);
        projectileWatkCache.put(itemId, atk);
        return atk;
    }

    public final boolean canScroll(final int scrollid, final int itemid) {
        return (scrollid / 100) % 100 == (itemid / 10000) % 100;
    }

    public final String getName(final int itemId) {
        if (nameCache.containsKey(itemId)) {
            return nameCache.get(itemId);
        }
        final MapleData strings = getStringData(itemId);
        if (strings == null) {
            return null;
        }
        final String ret = MapleDataTool.getString("name", strings, "(null)");
        nameCache.put(itemId, ret);
        return ret;
    }

    public final String getDesc(final int itemId) {
        if (descCache.containsKey(itemId)) {
            return descCache.get(itemId);
        }
        final MapleData strings = getStringData(itemId);
        if (strings == null) {
            return null;
        }
        final String ret = MapleDataTool.getString("desc", strings, null);
        descCache.put(itemId, ret);
        return ret;
    }

    public final String getMsg(final int itemId) {
        if (msgCache.containsKey(itemId)) {
            return msgCache.get(itemId);
        }
        final MapleData strings = getStringData(itemId);
        if (strings == null) {
            return null;
        }
        final String ret = MapleDataTool.getString("msg", strings, null);
        msgCache.put(itemId, ret);
        return ret;
    }

    public final short getItemMakeLevel(final int itemId) {
        if (itemMakeLevel.containsKey(itemId)) {
            return itemMakeLevel.get(itemId);
        }
        if (itemId / 10000 != 400) {
            return 0;
        }
        final short lvl = (short) MapleDataTool.getIntConvert("info/lv", getItemData(itemId), 0);
        itemMakeLevel.put(itemId, lvl);
        return lvl;
    }

    public final byte isConsumeOnPickup(final int itemId) {
        // 0 = not, 1 = consume on pickup, 2 = consume + party
        if (consumeOnPickupCache.containsKey(itemId)) {
            return consumeOnPickupCache.get(itemId);
        }
        final MapleData data = getItemData(itemId);
        byte consume = (byte) MapleDataTool.getIntConvert("spec/consumeOnPickup", data, 0);
        if (consume == 0) {
            consume = (byte) MapleDataTool.getIntConvert("specEx/consumeOnPickup", data, 0);
        }
        if (consume == 1) {
            if (MapleDataTool.getIntConvert("spec/party", getItemData(itemId), 0) > 0) {
                consume = 2;
            }
        }
        consumeOnPickupCache.put(itemId, consume);
        return consume;
    }

    public final boolean isDropRestricted(final int itemId) {
        if (dropRestrictionCache.containsKey(itemId)) {
            return dropRestrictionCache.get(itemId);
        }
        final MapleData data = getItemData(itemId);

        boolean trade = false;
        if (MapleDataTool.getIntConvert("info/tradeBlock", data, 0) == 1
                || MapleDataTool.getIntConvert("info/quest", data, 0) == 1) {
            trade = true;
        }
        dropRestrictionCache.put(itemId, trade);
        return trade;
    }

    public final boolean isPickupRestricted(final int itemId) {
        if (pickupRestrictionCache.containsKey(itemId)) {
            return pickupRestrictionCache.get(itemId);
        }
        final boolean bRestricted = MapleDataTool.getIntConvert("info/only", getItemData(itemId), 0) == 1;

        pickupRestrictionCache.put(itemId, bRestricted);
        return bRestricted;
    }

    public final boolean isAccountShared(final int itemId) {
        if (accCache.containsKey(itemId)) {
            return accCache.get(itemId);
        }
        final boolean bRestricted = MapleDataTool.getIntConvert("info/accountSharable", getItemData(itemId), 0) == 1;

        accCache.put(itemId, bRestricted);
        return bRestricted;
    }

    public final int getStateChangeItem(final int itemId) {
        if (stateChangeCache.containsKey(itemId)) {
            return stateChangeCache.get(itemId);
        }
        final int triggerItem = MapleDataTool.getIntConvert("info/stateChangeItem", getItemData(itemId), 0);
        stateChangeCache.put(itemId, triggerItem);
        return triggerItem;
    }

    public final int getMeso(final int itemId) {
        if (mesoCache.containsKey(itemId)) {
            return mesoCache.get(itemId);
        }
        final int triggerItem = MapleDataTool.getIntConvert("info/meso", getItemData(itemId), 0);
        mesoCache.put(itemId, triggerItem);
        return triggerItem;
    }

    public final boolean isKarmaEnabled(final int itemId) {
        if (karmaEnabledCache.containsKey(itemId)) {
            return karmaEnabledCache.get(itemId) == 1;
        }
        final int iRestricted = MapleDataTool.getIntConvert("info/tradeAvailable", getItemData(itemId), 0);

        karmaEnabledCache.put(itemId, iRestricted);
        return iRestricted == 1;
    }

    public final boolean isPKarmaEnabled(final int itemId) {
        if (karmaEnabledCache.containsKey(itemId)) {
            return karmaEnabledCache.get(itemId) == 2;
        }
        final int iRestricted = MapleDataTool.getIntConvert("info/tradeAvailable", getItemData(itemId), 0);

        karmaEnabledCache.put(itemId, iRestricted);
        return iRestricted == 2;
    }

    public final boolean isPickupBlocked(final int itemId) {
        if (blockPickupCache.containsKey(itemId)) {
            return blockPickupCache.get(itemId);
        }
        final boolean iRestricted = MapleDataTool.getIntConvert("info/pickUpBlock", getItemData(itemId), 0) == 1;

        blockPickupCache.put(itemId, iRestricted);
        return iRestricted;
    }

    public final boolean isLogoutExpire(final int itemId) {
        if (logoutExpireCache.containsKey(itemId)) {
            return logoutExpireCache.get(itemId);
        }
        final boolean iRestricted = MapleDataTool.getIntConvert("info/expireOnLogout", getItemData(itemId), 0) == 1;

        logoutExpireCache.put(itemId, iRestricted);
        return iRestricted;
    }

    public final boolean cantSell(final int itemId) { // true = cant sell, false = can sell
        if (notSaleCache.containsKey(itemId)) {
            return notSaleCache.get(itemId);
        }
        final boolean bRestricted = MapleDataTool.getIntConvert("info/notSale", getItemData(itemId), 0) == 1;

        notSaleCache.put(itemId, bRestricted);
        return bRestricted;
    }

    public final void loadStyles(boolean reload) {
        if (reload) {
            faceList.clear();
        }
        if (!faceList.isEmpty()) {
            return;
        }
        String[] types = { "Face" };
        for (String type : types) {
            for (MapleData c : stringData.getData("Eqp.img").getChildByPath("Eqp/" + type)) {
                if (equipData
                        .getData(type + "/" + StringUtil.getLeftPaddedStr(c.getName() + ".img", '0', 12)) != null) {
                    int dataid = Integer.parseInt(c.getName());
                    String name = MapleDataTool.getString("name", c, "无名称");
                    if (type.equals("Face")) {
                        faceList.put(dataid, name);
                    }
                }
            }
        }
    }

    public boolean faceExists(int face) {
        return faceList.containsKey(face);
    }

    public final Map<Integer, String> getFaceList() {
        Map<Integer, String> list = new HashMap<>();
        list.putAll(faceList);
        return list;
    }

    public final Pair<Integer, List<StructRewardItem>> getRewardItem(final int itemid) {
        if (RewardItem.containsKey(itemid)) {
            return RewardItem.get(itemid);
        }
        final MapleData data = getItemData(itemid);
        if (data == null) {
            return null;
        }
        final MapleData rewards = data.getChildByPath("reward");
        if (rewards == null) {
            return null;
        }
        int totalprob = 0; // As there are some rewards with prob above 2000, we can't assume it's always
                           // 100
        List<StructRewardItem> all = new ArrayList<>();

        for (final MapleData reward : rewards) {
            StructRewardItem struct = new StructRewardItem();

            struct.setItemid(MapleDataTool.getInt("item", reward, 0));
            struct.setProb((short) MapleDataTool.getInt("prob", reward, 0));
            struct.setQuantity((short) MapleDataTool.getInt("count", reward, 0));
            struct.setEffect(MapleDataTool.getString("Effect", reward, ""));
            struct.setWorldmsg(MapleDataTool.getString("worldMsg", reward, null));
            struct.setPeriod(MapleDataTool.getInt("period", reward, -1));

            totalprob += struct.getProb();

            all.add(struct);
        }
        Pair<Integer, List<StructRewardItem>> toreturn = new Pair<>(totalprob, all);
        RewardItem.put(itemid, toreturn);
        return toreturn;
    }

    public final Map<String, Integer> getSkillStats(final int itemId) {
        if (SkillStatsCache.containsKey(itemId)) {
            return SkillStatsCache.get(itemId);
        }
        if (!(itemId / 10000 == 228 || itemId / 10000 == 229 || itemId / 10000 == 562)) { // Skillbook and mastery book
            return null;
        }
        final MapleData item = getItemData(itemId);
        if (item == null) {
            return null;
        }
        final MapleData info = item.getChildByPath("info");
        if (info == null) {
            return null;
        }
        final Map<String, Integer> ret = new LinkedHashMap<>();
        for (final MapleData data : info.getChildren()) {
            if (data.getName().startsWith("inc")) {
                ret.put(data.getName().substring(3), MapleDataTool.getIntConvert(data));
            }
        }
        ret.put("masterLevel", MapleDataTool.getInt("masterLevel", info, 0));
        ret.put("reqSkillLevel", MapleDataTool.getInt("reqSkillLevel", info, 0));
        ret.put("success", MapleDataTool.getInt("success", info, 0));

        final MapleData skill = info.getChildByPath("skill");

        for (int i = 0; i < skill.getChildren().size(); i++) { // List of allowed skillIds
            ret.put("skillid" + i, MapleDataTool.getInt(Integer.toString(i), skill, 0));
        }
        SkillStatsCache.put(itemId, ret);
        return ret;
    }

    public final List<Integer> petsCanConsume(final int itemId) {
        if (petsCanConsumeCache.get(itemId) != null) {
            return petsCanConsumeCache.get(itemId);
        }
        final List<Integer> ret = new ArrayList<>();
        final MapleData data = getItemData(itemId);
        if (data == null || data.getChildByPath("spec") == null) {
            return ret;
        }
        int curPetId;
        for (MapleData c : data.getChildByPath("spec")) {
            try {
                Integer.parseInt(c.getName());
            } catch (NumberFormatException e) {
                continue;
            }
            curPetId = MapleDataTool.getInt(c, 0);
            if (curPetId == 0) {
                break;
            }
            ret.add(curPetId);
        }
        petsCanConsumeCache.put(itemId, ret);
        return ret;
    }

    public final boolean isQuestItem(final int itemId) {
        if (isQuestItemCache.containsKey(itemId)) {
            return isQuestItemCache.get(itemId);
        }
        final boolean questItem = MapleDataTool.getIntConvert("info/quest", getItemData(itemId), 0) == 1;
        isQuestItemCache.put(itemId, questItem);
        return questItem;
    }

    public final Pair<Integer, List<Integer>> questItemInfo(final int itemId) {
        if (questItems.containsKey(itemId)) {
            return questItems.get(itemId);
        }
        if (itemId / 10000 != 422 || getItemData(itemId) == null) {
            return null;
        }
        final MapleData itemD = getItemData(itemId).getChildByPath("info");
        if (itemD == null || itemD.getChildByPath("consumeItem") == null) {
            return null;
        }
        final List<Integer> consumeItems = new ArrayList<>();
        for (MapleData consume : itemD.getChildByPath("consumeItem")) {
            consumeItems.add(MapleDataTool.getInt(consume, 0));
        }
        final Pair<Integer, List<Integer>> questItem = new Pair<>(MapleDataTool.getIntConvert("questId", itemD, 0),
                consumeItems);
        questItems.put(itemId, questItem);
        return questItem;
    }

    public final boolean itemExists(final int itemId) {
        if (GameConstants.getInventoryType(itemId) == MapleInventoryType.UNDEFINED) {
            return false;
        }
        return getItemData(itemId) != null;
    }

    public final boolean isCash(final int itemId) {
        if (getEquipStats(itemId) == null) {
            return GameConstants.getInventoryType(itemId) == MapleInventoryType.CASH;
        }
        return GameConstants.getInventoryType(itemId) == MapleInventoryType.CASH
                || getEquipStats(itemId).get("cash") > 0;
    }

    public int getPetLimitLife(int itemid) {
        if (this.petLimitLifeInfo.containsKey(itemid)) {
            return (this.petLimitLifeInfo.get(itemid));
        }
        if (!GameConstants.isPet(itemid)) {
            return 0;
        }
        MapleData item = getItemData(itemid);
        int limitLife = MapleDataTool.getIntConvert("info/limitedLife", item, 0);
        this.petLimitLifeInfo.put(itemid, limitLife);
        return limitLife;
    }

    public int getPetLife(int itemid) {
        if (this.petLifeInfo.containsKey(itemid)) {
            return (this.petLifeInfo.get(itemid));
        }
        if (!GameConstants.isPet(itemid)) {
            return 0;
        }
        MapleData item = getItemData(itemid);
        int life = MapleDataTool.getIntConvert("info/life", item, 0);
        this.petLifeInfo.put(itemid, life);
        return life;
    }

    public short getPetFlagInfo(int itemId) {
        if (this.petFlagInfo.containsKey(itemId)) {
            return (this.petFlagInfo.get(itemId));
        }
        short flag = 0;
        if (!GameConstants.isPet(itemId)) {
            return flag;
        }
        MapleData item = getItemData(itemId);
        if (item == null) {
            return flag;
        }
        if (MapleDataTool.getIntConvert("info/pickupItem", item, 0) > 0) {
            flag = (short) (flag | MaplePet.PetFlag.ITEM_PICKUP.getValue());
        }
        if (MapleDataTool.getIntConvert("info/longRange", item, 0) > 0) {
            flag = (short) (flag | MaplePet.PetFlag.EXPAND_PICKUP.getValue());
        }
        if (MapleDataTool.getIntConvert("info/pickupAll", item, 0) > 0) {
            flag = (short) (flag | MaplePet.PetFlag.AUTO_PICKUP.getValue());
        }
        if (MapleDataTool.getIntConvert("info/sweepForDrop", item, 0) > 0) {
            flag = (short) (flag | MaplePet.PetFlag.LEFTOVER_PICKUP.getValue());
        }
        if (MapleDataTool.getIntConvert("info/consumeHP", item, 0) > 0) {
            flag = (short) (flag | MaplePet.PetFlag.HP_CHARGE.getValue());
        }
        if (MapleDataTool.getIntConvert("info/consumeMP", item, 0) > 0) {
            flag = (short) (flag | MaplePet.PetFlag.MP_CHARGE.getValue());
        }
        this.petFlagInfo.put(itemId, flag);
        return flag;
    }

    public final boolean isOnlyTradeBlock(final int itemId) {
        final MapleData data = getItemData(itemId);
        boolean tradeblock = false;
        if (MapleDataTool.getIntConvert("info/tradeBlock", data, 0) == 1) {
            tradeblock = true;
        }
        return tradeblock;
    }

    public static void loadFaceHair() {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            try {
                try (PreparedStatement ps = con.prepareStatement("SELECT * FROM wz_hairdata ORDER BY `hairid`");
                        ResultSet rs = ps.executeQuery()) {
                    while (rs.next()) {
                        hairList.put(rs.getInt("hairid"), rs.getString("name"));
                    }
                    ps.close();
                }
            } catch (SQLException ex) {
                System.out.println("读取发型数据失败：" + ex);
                FileoutputUtil.outError("logs/资料库异常.txt", ex);
            }
            try {
                try (PreparedStatement ps = con.prepareStatement("SELECT * FROM wz_facedata ORDER BY `faceid`");
                        ResultSet rs = ps.executeQuery()) {
                    while (rs.next()) {
                        faceLists.put(rs.getInt("faceid"), rs.getString("name"));
                    }
                    ps.close();
                }
            } catch (SQLException ex) {
                System.out.println("读取脸型数据失败：" + ex);
                FileoutputUtil.outError("logs/资料库异常.txt", ex);
            }
        } catch (SQLException ex) {
            System.out.println("读取脸型数据失败：" + ex);
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }
    }

    public MapleInventoryType getInventoryTypeCS(int itemId) {
        if (inventoryTypeCache.containsKey(itemId)) {
            return inventoryTypeCache.get(itemId);
        }
        MapleInventoryType ret;
        String idStr = "0" + String.valueOf(itemId);
        MapleDataDirectoryEntry root = itemData.getRoot();
        for (MapleDataDirectoryEntry topDir : root.getSubdirectories()) {
            for (MapleDataFileEntry iFile : topDir.getFiles()) {
                if (iFile.getName().equals(idStr.substring(0, 4) + ".img")) {
                    ret = MapleInventoryType.getByWZName(topDir.getName());
                    inventoryTypeCache.put(itemId, ret);
                    return ret;
                } else if (iFile.getName().equals(idStr.substring(1) + ".img")) {
                    ret = MapleInventoryType.getByWZName(topDir.getName());
                    inventoryTypeCache.put(itemId, ret);
                    return ret;
                }
            }
        }
        root = equipData.getRoot();
        for (MapleDataDirectoryEntry topDir : root.getSubdirectories()) {
            for (MapleDataFileEntry iFile : topDir.getFiles()) {
                if (iFile.getName().equals(idStr + ".img")) {
                    ret = MapleInventoryType.EQUIP;
                    inventoryTypeCache.put(itemId, ret);
                    return ret;
                }
            }
        }
        ret = MapleInventoryType.UNDEFINED;
        inventoryTypeCache.put(itemId, ret);
        return ret;
    }

    public static int getUniqueId(int itemId, MaplePet pet) {
        int uniqueid = -1;
        if (GameConstants.isPet(itemId)) {
            if (pet != null) {
                uniqueid = pet.getUniqueId();
            } else {
                uniqueid = MapleInventoryIdentifier.getInstance();
            }
        } else if (GameConstants.getInventoryType(itemId) == MapleInventoryType.CASH
                || MapleItemInformationProvider.getInstance().isCash(itemId)) { // less work to do
            uniqueid = MapleInventoryIdentifier.getInstance(); // shouldnt be generated yet, so put it here
        }
        return uniqueid;
    }

    public final int getChairMountId(final int itemId) {
        if (chairMountId.containsKey(itemId)) {
            return chairMountId.get(itemId);
        }
        int ret = 0;
        final MapleData item = getItemData(itemId);
        if (item != null) {
            final MapleData smEntry = item.getChildByPath("info/tamingMob");
            if (smEntry == null) {
                ret = 0;
            } else {
                ret = (int) MapleDataTool.getInt(smEntry);
            }
        }
        chairMountId.put(itemId, ret);
        return ret;
    }

    public List<Integer> printHairs(String node) {
        int div = 1;
        if ("Face".equals(node)) {
            div = 100;
        } else if ("Hair".equals(node)) {
            div = 10;
        }
        // 记录出现次数
        Map<Integer, Integer> map = new HashMap<>();
        List<Integer> list = new ArrayList<>();
        for (final MapleDataDirectoryEntry topDir : equipData.getRoot().getSubdirectories()) {
            if (topDir.getName().equals(node)) {
                for (MapleDataEntry entry : topDir.getFiles()) {
                    int i = 0;
                    try {
                        i = Integer.parseInt(entry.getName().substring(0, entry.getName().indexOf(".")));
                    } catch (Exception e) {
                        // e.printStackTrace();
                    }
                    if (i == 0) {
                        continue;
                    }
                    if (div == 10) {
                        if (map.get((i / div) * div) == null) {
                            // 一次都没有
                            map.put((i / div) * div, 1);
                        } else {
                            map.put((i / div) * div, map.get((i / div) * div) + 1);
                        }
                    } else if (div == 100) {
                        if (map.get((i / (div * 10)) * (div * 10) + (i % div)) == null) {
                            // 一次都没有
                            map.put((i / (div * 10)) * (div * 10) + (i % div), 1);
                        } else {
                            map.put((i / (div * 10)) * (div * 10) + (i % div),
                                    map.get((i / (div * 10)) * (div * 10) + (i % div)) + 1);
                        }
                    }

                }
            }
        }
        for (Integer key : map.keySet()) {
            list.add(key);
        }
        return list;
    }

    public Map<Integer, String> getNameCache() {
        return nameCache;
    }

    public final void loadStringData() {
        loadItemName(cashStringData, null);
        loadItemName(consumeStringData, null);
        loadItemName(eqpStringData, "Accessory");
        loadItemName(eqpStringData, "Cap");
        loadItemName(eqpStringData, "Cape");
        loadItemName(eqpStringData, "Coat");
        loadItemName(eqpStringData, "Face");
        loadItemName(eqpStringData, "Glove");
        loadItemName(eqpStringData, "Hair");
        loadItemName(eqpStringData, "Longcoat");
        loadItemName(eqpStringData, "Pants");
        loadItemName(eqpStringData, "PetEquip");
        loadItemName(eqpStringData, "Ring");
        loadItemName(eqpStringData, "Shield");
        loadItemName(eqpStringData, "Shoes");
        loadItemName(eqpStringData, "Taming");
        loadItemName(eqpStringData, "Weapon");
        loadItemName(etcStringData.getChildByPath("Etc/"), null);
        loadItemName(insStringData, null);
        loadItemName(petStringData, null);
    }

    public void loadItemName(MapleData mapleData, String cat) {
        if (cat != null) {
            mapleData = mapleData.getChildByPath("Eqp/" + cat + "/");
        }
        List<MapleData> children = mapleData.getChildren();
        for (MapleData data : children) {
            int itemId = Integer.parseInt(data.getName());
            final String ret = MapleDataTool.getString("name", data, "(null)");
            nameCache.put(itemId, ret);
        }
    }

    /*
     * 武器突破极限的攻击上限
     */
    public int getLimitBreak(int itemId) {
        if (getEquipStats(itemId) == null)
            return 2100000000;
        if (getEquipStats(itemId).containsKey("limitBreak")) {
            return getEquipStats(itemId).get("limitBreak");
        }
        if (getEquipStats(itemId).containsKey("inclimitBreak")) {
            return getEquipStats(itemId).get("inclimitBreak");
        }
        return 2100000000;
    }

}
