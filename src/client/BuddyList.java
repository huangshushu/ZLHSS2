package client;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collection;
import java.util.Deque;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.Map;

import database.DBConPool;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;

public class BuddyList implements Serializable {

    /**
     * 预设的好友群组
     */
    public static final String DEFAULT_GROUP = "其他";

    /**
     * 好友名单操作
     *
     */
    public static enum BuddyOperation {

        ADDED, DELETED
    }

    /**
     * 好友名单操作结果
     */
    public static enum BuddyAddResult {

        BUDDYLIST_FULL, ALREADY_ON_LIST, OK
    }

    /**
     * 储存的好友
     */
    private final Map<Integer, BuddyEntry> buddies;

    /**
     * 好友清单的容量
     */
    private byte capacity;

    /**
     * 待处理的好友请求
     */
    private final Deque<BuddyEntry> pendingReqs = new LinkedList<>();

    /**
     * 好友清单建构子
     *
     * @param capacity 好友容量
     */
    public BuddyList(byte capacity) {
        super();
        this.buddies = new LinkedHashMap<>();
        this.capacity = capacity;
    }

    /**
     * 好友清单建构子
     *
     * @param capacity 好友容量
     */
    public BuddyList(int capacity) {
        super();
        this.buddies = new LinkedHashMap<>();
        this.capacity = (byte) capacity;
    }

    public boolean contains(int characterId) {
        return buddies.containsKey(characterId);
    }

    /**
     * 确认有这个好友且是不是在线上
     *
     * @param charId 好友ID
     * @return 是否再现上
     */
    public boolean containsVisible(int charId) {
        BuddyEntry ble = buddies.get(charId);
        if (ble == null) {
            return false;
        }
        return ble.isVisible();
    }

    /**
     * 取得好友清单的容量
     *
     * @return 目前好友清单容量
     */
    public byte getCapacity() {
        return capacity;
    }

    /**
     * 设定好友清单容量
     *
     * @param newCapacity 新的容量
     */
    public void setCapacity(byte newCapacity) {
        this.capacity = newCapacity;
    }

    /**
     * 由好友ID取得好友
     *
     * @param characterId
     * @return 传回要找的好友，没有则null
     */
    public BuddyEntry get(int characterId) {
        return buddies.get(characterId);
    }

    /**
     * 由好友名称取得好友
     *
     * @param characterName 角色名称
     * @return 传回要找的好友，没有则null
     */
    public BuddyEntry get(String characterName) {
        String searchName = characterName.toLowerCase();
        for (BuddyEntry ble : buddies.values()) {
            if (ble.getName().toLowerCase().equals(searchName)) {
                return ble;
            }
        }
        return null;
    }

    /**
     * 新增好友
     *
     * @param newEntry 新增的好友
     */
    public void put(BuddyEntry newEntry) {
        buddies.put(newEntry.getCharacterId(), newEntry);
    }

    /**
     * 由角色ID从清单中删除好友
     *
     * @param characterId 角色ID
     */
    public void remove(int characterId) {
        buddies.remove(characterId);
    }

    /**
     * 回传好友清单
     *
     * @return 好友清单集合
     */
    public Collection<BuddyEntry> getBuddies() {
        return buddies.values();
    }

    /**
     * 取得好友名单是否满
     *
     * @return 好友名单是否已经满了
     */
    public boolean isFull() {
        return buddies.size() >= capacity;
    }

    /**
     * 取得所有好友的ID
     *
     * @return 好友清单的ID集合
     */
    public Collection<Integer> getBuddiesIds() {
        return buddies.keySet();
    }

    /**
     *
     * @param data
     */
    public void loadFromTransfer(final Map<BuddyEntry, Boolean> data) {
        BuddyEntry buddyid;
        boolean pair;
        for (final Map.Entry<BuddyEntry, Boolean> qs : data.entrySet()) {
            buddyid = qs.getKey();
            pair = qs.getValue();
            if (!pair) {
                pendingReqs.push(buddyid);
            } else {
                put(new BuddyEntry(buddyid.getName(), buddyid.getCharacterId(), buddyid.getGroup(), -1, true,
                        buddyid.getLevel(), buddyid.getJob()));
            }
        }
    }

    /**
     * 从资料库读取好友清单
     *
     * @param characterId 要读取的角色ID
     * @throws SQLException
     */
    public void loadFromDb(int characterId) throws SQLException {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement(
                    "SELECT b.buddyid, b.pending, c.name as buddyname, c.job as buddyjob, c.level as buddylevel, b.groupname FROM buddies as b, characters as c WHERE c.id = b.buddyid AND b.characterid = ?");
            ps.setInt(1, characterId);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                int buddyid = rs.getInt("buddyid");
                String buddyname = rs.getString("buddyname");
                if (rs.getInt("pending") == 1) {
                    pendingReqs.push(new BuddyEntry(buddyname, buddyid, rs.getString("groupname"), -1, false,
                            rs.getInt("buddylevel"), rs.getInt("buddyjob")));
                } else {
                    put(new BuddyEntry(buddyname, buddyid, rs.getString("groupname"), -1, true, rs.getInt("buddylevel"),
                            rs.getInt("buddyjob")));
                }
            }
            rs.close();
            ps.close();
            ps = con.prepareStatement("DELETE FROM buddies WHERE pending = 1 AND characterid = ?");
            ps.setInt(1, characterId);
            ps.executeUpdate();
            ps.close();
        } catch (SQLException ex) {
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }
    }

    /**
     * 取得并移除最后的好友请求
     *
     * @return 最后一个好友请求
     */
    public BuddyEntry pollPendingRequest() {
        return pendingReqs.pollLast();
    }

    /**
     * 新增好友请求
     *
     * @param client       欲增加好友的角色客户端
     * @param buddyId      新增的好友ID
     * @param buddyName    新增的好友名称
     * @param buddyChannel 新增的好友频道
     * @param buddyLevel   新增的好友的等级
     * @param buddyJob     新增的好友的职业
     */
    public void addBuddyRequest(MapleClient client, int buddyId, String buddyName, int buddyChannel, int buddyLevel,
            int buddyJob) {

        this.put(
                new BuddyEntry(buddyName, buddyId, BuddyList.DEFAULT_GROUP, buddyChannel, false, buddyLevel, buddyJob));

        if (pendingReqs.isEmpty()) {

            client.sendPacket(MaplePacketCreator.requestBuddylistAdd(buddyId, buddyName, buddyLevel, buddyJob));

        } else {

            BuddyEntry newPair = new BuddyEntry(buddyName, buddyId, BuddyList.DEFAULT_GROUP, -1, false, buddyJob,
                    buddyLevel);
            pendingReqs.push(newPair);

        }
    }

    public static int getBuddyCount(int chrId, int pending) {
        int count = 0;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection();
                PreparedStatement ps = con.prepareStatement(
                        "SELECT COUNT(*) as buddyCount FROM buddies WHERE characterid = ? AND pending = ?")) {
            ps.setInt(1, chrId);
            ps.setInt(2, pending);
            try (ResultSet rs = ps.executeQuery()) {
                if (!rs.next()) {
                    throw new RuntimeException("BuddyListHandler: getBuudyCount From DB is Error.");
                } else {
                    count = rs.getInt("buddyCount");
                }
            }

        } catch (SQLException ex) {
            ex.printStackTrace();
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }
        return count;
    }

    public static int getBuddyCapacity(int charId) {
        int capacity = -1;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection();
                PreparedStatement ps = con.prepareStatement("SELECT buddyCapacity FROM characters WHERE id = ?")) {
            ps.setInt(1, charId);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    capacity = rs.getInt("buddyCapacity");
                }
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }

        return capacity;
    }

    public static int getBuddyPending(int chrId, int buddyId) {
        int pending = -1;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection();
                PreparedStatement ps = con
                        .prepareStatement("SELECT pending FROM buddies WHERE characterid = ? AND buddyid = ?")) {
            ps.setInt(1, chrId);
            ps.setInt(2, buddyId);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    pending = rs.getInt("pending");
                }
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }

        return pending;
    }

    public static void addBuddyToDB(MapleCharacter player, BuddyEntry buddy) {
        try {
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection();
                    PreparedStatement ps = con.prepareStatement(
                            "INSERT INTO buddies (`characterid`, `buddyid`, `groupname`, `pending`) VALUES (?, ?, ?, 1)")) {
                ps.setInt(1, buddy.getCharacterId());
                ps.setInt(2, player.getId());
                ps.setString(3, buddy.getGroup());
                ps.executeUpdate();
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }
    }
}
