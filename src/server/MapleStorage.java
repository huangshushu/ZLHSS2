package server;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.io.Serializable;

import constants.GameConstants;
import client.inventory.ItemLoader;
import client.inventory.IItem;
import client.MapleClient;
import client.inventory.MapleInventoryType;
import database.DBConPool;
import database.DatabaseException;
import java.sql.Statement;
import java.util.EnumMap;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;
import tools.Pair;

public class MapleStorage implements Serializable {

    private static final long serialVersionUID = 9179541993413738569L;
    private final int id;
    private final int accountId;
    private final List<IItem> items;
    private final Map<MapleInventoryType, List<IItem>> typeItems = new EnumMap<>(MapleInventoryType.class);

    private int meso;
    private byte slots;
    private boolean changed = false;

    private MapleStorage(int id, byte slots, int meso, int accountId) {
        this.id = id;
        this.slots = slots;
        this.items = new LinkedList<>();
        this.meso = meso;
        this.accountId = accountId;
    }

    public static int create(int id) throws SQLException {
        ResultSet rs;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection(); PreparedStatement ps = con.prepareStatement("INSERT INTO storages (accountid, slots, meso) VALUES (?, ?, ?)", Statement.RETURN_GENERATED_KEYS)) {
            ps.setInt(1, id);
            ps.setInt(2, 4);
            ps.setInt(3, 0);
            ps.executeUpdate();
            int storageid;
            rs = ps.getGeneratedKeys();
            if (rs.next()) {
                storageid = rs.getInt(1);
                ps.close();
                rs.close();
                return storageid;
            }
        } catch (SQLException ex) {
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
            throw new DatabaseException("Inserting char failed.");
        }
        rs.close();
        throw new DatabaseException("Inserting char failed.");
    }

    public static MapleStorage loadStorage(int id) {
        MapleStorage ret = null;
        int storeId;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT * FROM storages WHERE accountid = ?");
            ps.setInt(1, id);
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                storeId = rs.getInt("storageid");
                ret = new MapleStorage(storeId, rs.getByte("slots"), rs.getInt("meso"), id);
                rs.close();
                ps.close();

                for (Pair<IItem, MapleInventoryType> mit : ItemLoader.STORAGE.loadItems(false, id).values()) {
                    ret.items.add(mit.getLeft());
                }
            } else {
                storeId = create(id);
                ret = new MapleStorage(storeId, (byte) 4, 0, id);
                rs.close();
                ps.close();
            }
        } catch (SQLException ex) {
            System.err.println("Error loading storage" + ex);
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }
        return ret;
    }

    public void saveToDB() {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            saveToDB(con);
        } catch (SQLException ex) {
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }
    }

    public void saveToDB(Connection con) {
        if (!changed) {
            return;
        }
        try {
            try (PreparedStatement ps = con.prepareStatement("UPDATE storages SET slots = ?, meso = ? WHERE storageid = ?")) {
                ps.setInt(1, slots);
                ps.setInt(2, meso);
                ps.setInt(3, id);
                ps.executeUpdate();
            } catch (SQLException e) {
                System.err.println("Error saving storage" + e);
                FileoutputUtil.outError("logs/资料库异常.txt", e);
            }

            List<Pair<IItem, MapleInventoryType>> listing = new ArrayList<>();
            for (final IItem item : items) {
                listing.add(new Pair<>(item, GameConstants.getInventoryType(item.getItemId())));
            }
            ItemLoader.STORAGE.saveItems(listing, con, accountId);
        } catch (SQLException ex) {
            System.err.println("Error saving storage" + ex);
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }
    }

    public IItem takeOut(byte slot) {
        if (slot >= items.size() || slot < 0) {
            return null;
        }
        changed = true;
        IItem ret = items.remove(slot);
        MapleInventoryType type = GameConstants.getInventoryType(ret.getItemId());
        typeItems.put(type, new ArrayList<>(filterItems(type)));
        return ret;
    }

    public void store(IItem item) {
        changed = true;
        items.add(item);
        MapleInventoryType type = GameConstants.getInventoryType(item.getItemId());
        typeItems.put(type, new ArrayList<>(filterItems(type)));
    }

    public List<IItem> getItems() {
        return Collections.unmodifiableList(items);
    }

    private List<IItem> filterItems(MapleInventoryType type) {
        List<IItem> ret = new LinkedList<>();

        for (IItem item : items) {
            if (GameConstants.getInventoryType(item.getItemId()) == type) {
                ret.add(item);
            }
        }
        return ret;
    }

    public byte getSlot(MapleInventoryType type, byte slot) {
        // MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        byte ret = 0;
        final List<IItem> it = typeItems.get(type);
        if (slot >= it.size() || slot < 0) {
            return -1;
        }
        for (IItem item : items) {
            if (item == it.get(slot)) {
                return ret;
            }
            ret++;
        }
        return -1;
    }

    public void sendStorage(MapleClient c, int npcId) {
        // sort by inventorytype to avoid confusion
        Collections.sort(items, new Comparator<IItem>() {

            @Override
            public int compare(IItem o1, IItem o2) {
                if (GameConstants.getInventoryType(o1.getItemId()).getType() < GameConstants.getInventoryType(o2.getItemId()).getType()) {
                    return -1;
                } else if (GameConstants.getInventoryType(o1.getItemId()) == GameConstants.getInventoryType(o2.getItemId())) {
                    return 0;
                } else {
                    return 1;
                }
            }
        });
        for (MapleInventoryType type : MapleInventoryType.values()) {
            typeItems.put(type, new ArrayList<>(items));
        }
        c.sendPacket(MaplePacketCreator.getStorage(npcId, slots, items, meso));
    }

    public void sendStored(MapleClient c, MapleInventoryType type) {
        c.sendPacket(MaplePacketCreator.storeStorage(slots, type, typeItems.get(type)));
    }

    public void sendTakenOut(MapleClient c, MapleInventoryType type) {
        c.sendPacket(MaplePacketCreator.takeOutStorage(slots, type, typeItems.get(type)));
    }

    public int getMeso() {
        return meso;
    }

    public void arrange() { //i believe gms does by itemID
        Collections.sort(items, new Comparator<IItem>() {

            @Override
            public int compare(IItem o1, IItem o2) {
                if (o1.getItemId() < o2.getItemId()) {
                    return -1;
                } else if (o1.getItemId() == o2.getItemId()) {
                    return 0;
                } else {
                    return 1;
                }
            }
        });
        for (MapleInventoryType type : MapleInventoryType.values()) {
            typeItems.put(type, items);
        }
    }

    public IItem findById(int itemId) {
        for (IItem item : items) {
            if (item.getItemId() == itemId) {
                return item;
            }
        }
        return null;
    }

    public void setMeso(int meso) {
        if (meso < 0) {
            return;
        }
        changed = true;
        this.meso = meso;
    }

    public void sendMeso(MapleClient c) {
        c.sendPacket(MaplePacketCreator.mesoStorage(slots, meso));
    }

    public boolean isFull() {
        return items.size() >= slots;
    }

    public int getSlots() {
        return slots;
    }

    public void increaseSlots(byte gain) {
        changed = true;
        this.slots += gain;
    }

    public void setSlots(byte set) {
        changed = true;
        this.slots = set;
    }

    public void close() {
        typeItems.clear();
    }

    public void update(MapleClient c) {
        c.sendPacket(MaplePacketCreator.arrangeStorage(slots, items, true));
    }

    public boolean removeItemByInventoryItemId(long inventoryitemid) {
        int slot = 0;
        boolean process = false;
        if (getItems() != null) {
            List<IItem> equips = getItems();
            for (IItem equip : equips) {
                slot++;
                if (equip.getInventoryId() == inventoryitemid) {
                    process = true;
                    items.remove(slot);
                    break;
                }
            }
            changed = true;
        }
        return process;
    }
}
