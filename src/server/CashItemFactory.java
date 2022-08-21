/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package server;

import database.DBConPool;
import provider.MapleData;
import provider.MapleDataProvider;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;
import server.CashItemInfo.CashModInfo;
import tools.FileoutputUtil;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.*;

/**
 *
 * @author user
 */
public class CashItemFactory {

    private final static CashItemFactory instance = new CashItemFactory();
    private final static int[] bestItems = new int[]{50100010, 50100010, 50100010, 50100010, 50100010};
    private boolean initialized = false;
    private final Map<Integer, List<Integer>> openBox = new HashMap();
    private final Map<Integer, CashItemInfo> itemStats = new HashMap<>();
    private final Map<Integer, List<CashItemInfo>> itemPackage = new HashMap<>();
    private final Map<Integer, CashModInfo> itemMods = new HashMap<>();
    private final Map<Integer, Integer> itemIdToSN = new HashMap<>();
    private final Map<Integer, Integer> itemIdToSn = new HashMap<>();
    private final MapleDataProvider data = MapleDataProviderFactory.getDataProvider("Etc.wz");

    public static final CashItemFactory getInstance() {
        return instance;
    }

    protected CashItemFactory() {
    }

    public void initialize() {

        System.out.println("【读取中】 购物商城物品 :::");

        final List<Integer> itemids = new ArrayList<>();
        for (MapleData field : data.getData("Commodity.img").getChildren()) {
            final int itemId = MapleDataTool.getIntConvert("ItemId", field, 0);
            final int SN = MapleDataTool.getIntConvert("SN", field, 0);

            final CashItemInfo stats = new CashItemInfo(itemId,
                    MapleDataTool.getIntConvert("Count", field, 1),
                    MapleDataTool.getIntConvert("Price", field, 0), SN,
                    MapleDataTool.getIntConvert("Period", field, 0),
                    MapleDataTool.getIntConvert("Gender", field, 2),
                    MapleDataTool.getIntConvert("OnSale", field, 0) > 0,
                    0);

            if (SN > 0) {
                itemStats.put(SN, stats);
                itemIdToSN.put(stats.getId(), SN);
            }

            if (itemId > 0) {
                itemids.add(itemId);
            }
        }
        refreshAllModInfo();
        for (int i : itemids) {
            getPackageItems(i);
        }
        for (int i : itemStats.keySet()) {
            getModInfo(i);
            //init the modinfo's citem
            getItem(i);
        }

        initialized = true;
    }

    public final int getSnByItemItd(int itemid) {
        int sn = itemIdToSN.get(itemid);
        return sn;
    }

    public final int getSnByItemItd2(int itemid) {
        int sn = itemIdToSn.get(itemid);
        return sn;
    }

    public final CashItemInfo getItem(int sn) {
        final CashItemInfo stats = itemStats.get(Integer.valueOf(sn));
        final CashModInfo z = getModInfo(sn);
        if (z != null && z.showUp) {
            return z.toCItem(stats); //null doesnt matter
        }
        if (stats == null || !stats.onSale()) {
            return null;
        }
        //hmm
        return stats;
    }

    public final Set<Integer> getAllItemSNs() {
        return itemStats.keySet();
    }

    public final List<CashItemInfo> getAllItems() {
        return new ArrayList<>(itemStats.values());
    }

    public final List<CashItemInfo> getPackageItems(int itemId) {
        if (itemPackage.get(itemId) != null) {
            return itemPackage.get(itemId);
        }
        final List<CashItemInfo> packageItems = new ArrayList<>();

        final MapleData b = data.getData("CashPackage.img");
        if (b == null || b.getChildByPath(itemId + "/SN") == null) {
            return null;
        }
        for (MapleData d : b.getChildByPath(itemId + "/SN").getChildren()) {
            packageItems.add(itemStats.get(MapleDataTool.getIntConvert(d)));
        }
        itemPackage.put(itemId, packageItems);
        return packageItems;
    }

    public final Map<Integer, List<Integer>> getRandomItemInfo() {
        return this.openBox;
    }

    public final CashModInfo getModInfo(int sn) {
        CashModInfo ret = itemMods.get(sn);

        if (ret == null) {
            if (initialized) {
                return null;
            }
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                try (PreparedStatement ps = con.prepareStatement("SELECT * FROM cashshop_modified_items WHERE serial = ?")) {
                    ps.setInt(1, sn);
                    ResultSet rs = ps.executeQuery();
                    if (rs.next()) {
                        ret = new CashModInfo(sn, rs.getInt("discount_price"), rs.getInt("mark"), rs.getInt("showup") > 0, rs.getInt("itemid"), rs.getInt("priority"), rs.getInt("package") > 0, rs.getInt("period"), rs.getInt("gender"), rs.getInt("count"), rs.getInt("meso"), rs.getInt("unk_1"), rs.getInt("unk_2"), rs.getInt("unk_3"), rs.getInt("extra_flags"), rs.getInt("mod"));
                        itemMods.put(sn, ret);

                    }
                    rs.close();
                }
            } catch (Exception e) {
                FileoutputUtil.outError("logs/资料库异常.txt", e);
                e.printStackTrace();
            }
        }
        return ret;
    }

    private void refreshAllModInfo() {
        itemMods.clear();
        itemIdToSn.clear();
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT * FROM cashshop_modified_items");

            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                Integer sn = rs.getInt("serial");
                CashModInfo ret = new CashModInfo(sn, rs.getInt("discount_price"), rs.getInt("mark"), rs.getInt("showup") > 0, rs.getInt("itemid"), rs.getInt("priority"), rs.getInt("package") > 0, rs.getInt("period"), rs.getInt("gender"), rs.getInt("count"), rs.getInt("meso"), rs.getInt("unk_1"), rs.getInt("unk_2"), rs.getInt("unk_3"), rs.getInt("extra_flags"), rs.getInt("mod"));
                itemMods.put(sn, ret);
                itemIdToSn.put(ret.itemid, sn);
            }
            rs.close();
            ps.close();
        } catch (Exception e) {
            FileoutputUtil.outError("logs/资料库异常.txt", e);
            e.printStackTrace();
        }
    }

    public final Collection<CashModInfo> getAllModInfo() {
        if (itemMods.isEmpty()) {
            refreshAllModInfo();
        }
        return itemMods.values();
    }

    public final int[] getBestItems() {
        return bestItems;
    }

    public void clearItems() {
        refreshAllModInfo();
    }

    public final int getItemSN(int itemid) {
        for (Map.Entry<Integer, CashItemInfo> ci : itemStats.entrySet()) {
            if (ci.getValue().getId() == itemid) {
                return ci.getValue().getSN();
            }
        }
        return 0;
    }
}
