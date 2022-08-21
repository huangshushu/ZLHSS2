package server.quest;

import client.MapleCharacter;
import client.MapleQuestStatus;
import client.inventory.MapleInventoryType;
import database.DBConPool;
import scripting.NPCScriptManager;
import server.MapleInventoryManipulator;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;
import tools.Pair;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

public class MapleQuest implements Serializable {

    private static final long serialVersionUID = 9179541993413738569L;
    private static final Map<Integer, MapleQuest> quests = new LinkedHashMap<Integer, MapleQuest>();
    protected int id;
    protected final List<MapleQuestRequirement> startReqs = new LinkedList<MapleQuestRequirement>();
    protected final List<MapleQuestRequirement> completeReqs = new LinkedList<MapleQuestRequirement>();
    protected final List<MapleQuestAction> startActs = new LinkedList<MapleQuestAction>();
    protected final List<MapleQuestAction> completeActs = new LinkedList<MapleQuestAction>();
    protected final Map<String, List<Pair<String, Pair<String, Integer>>>> partyQuestInfo = new LinkedHashMap<String, List<Pair<String, Pair<String, Integer>>>>(); // [rank,
                                                                                                                                                                    // [more/less/equal,
                                                                                                                                                                    // [property,
                                                                                                                                                                    // value]]]
    protected final Map<Integer, Integer> relevantMobs = new LinkedHashMap<Integer, Integer>();
    private boolean autoStart = false, autoPreComplete = false, repeatable = false, customend = false, blocked = false,
            autoAccept = false, autoComplete = false, scriptedStart = false;
    private int viewMedalItem = 0, selectedSkillID = 0;
    protected String name = "";

    protected MapleQuest(final int id) {
        this.id = id;
    }

    /**
     * Creates a new instance of MapleQuest
     */
    private static MapleQuest loadQuest(ResultSet rs, PreparedStatement psr, PreparedStatement psa,
            PreparedStatement pss, PreparedStatement psq, PreparedStatement psi, PreparedStatement psp)
            throws SQLException {
        final MapleQuest ret = new MapleQuest(rs.getInt("questid"));
        ret.name = rs.getString("name");
        ret.autoStart = rs.getInt("autoStart") > 0;
        ret.autoPreComplete = rs.getInt("autoPreComplete") > 0;
        ret.autoAccept = rs.getInt("autoAccept") > 0;
        ret.autoComplete = rs.getInt("autoComplete") > 0;
        ret.viewMedalItem = rs.getInt("viewMedalItem");
        ret.selectedSkillID = rs.getInt("selectedSkillID");
        ret.blocked = rs.getInt("blocked") > 0; // ult.explorer quests will dc as the item isn't there...

        psr.setInt(1, ret.id);
        ResultSet rse = psr.executeQuery();
        while (rse.next()) {
            final MapleQuestRequirementType type = MapleQuestRequirementType.getByWZName(rse.getString("name"));
            final MapleQuestRequirement req = new MapleQuestRequirement(ret, type, rse);
            if (type.equals(MapleQuestRequirementType.interval)) {
                ret.repeatable = true;
            } else if (type.equals(MapleQuestRequirementType.normalAutoStart)) {
                ret.repeatable = true;
                ret.autoStart = true;
            } else if (type.equals(MapleQuestRequirementType.startscript)) {
                ret.scriptedStart = true;
            } else if (type.equals(MapleQuestRequirementType.endscript)) {
                ret.customend = true;
            } else if (type.equals(MapleQuestRequirementType.mob)) {
                for (Pair<Integer, Integer> mob : req.getDataStore()) {
                    ret.relevantMobs.put(mob.left, mob.right);
                }
            }
            if (rse.getInt("type") == 0) {
                ret.startReqs.add(req);
            } else {
                ret.completeReqs.add(req);
            }
        }
        rse.close();

        psa.setInt(1, ret.id);
        rse = psa.executeQuery();
        while (rse.next()) {
            final MapleQuestActionType ty = MapleQuestActionType.getByWZName(rse.getString("name"));
            if (rse.getInt("type") == 0) { // pass it over so it will set ID + type once done
                if (ty == MapleQuestActionType.item && ret.id == 7103) { // pap glitch
                    continue;
                }
                ret.startActs.add(new MapleQuestAction(ty, rse, ret, pss, psq, psi));
            } else {
                if (ty == MapleQuestActionType.item && ret.id == 7102) { // pap glitch
                    continue;
                }
                ret.completeActs.add(new MapleQuestAction(ty, rse, ret, pss, psq, psi));
            }
        }
        rse.close();

        psp.setInt(1, ret.id);
        rse = psp.executeQuery();
        while (rse.next()) {
            if (!ret.partyQuestInfo.containsKey(rse.getString("rank"))) {
                ret.partyQuestInfo.put(rse.getString("rank"), new ArrayList<Pair<String, Pair<String, Integer>>>());
            }
            ret.partyQuestInfo.get(rse.getString("rank")).add(new Pair<String, Pair<String, Integer>>(
                    rse.getString("mode"), new Pair<String, Integer>(rse.getString("property"), rse.getInt("value"))));
        }
        rse.close();
        return ret;
    }

    public List<Pair<String, Pair<String, Integer>>> getInfoByRank(final String rank) {
        return partyQuestInfo.get(rank);
    }

    public final int getSkillID() {
        return selectedSkillID;
    }

    public final String getName() {
        return name;
    }

    public static void initQuests() {

        System.out.println("【读取中】 MapleQuest 读取中:::");

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT * FROM wz_questdata");
            PreparedStatement psr = con.prepareStatement("SELECT * FROM wz_questreqdata WHERE questid = ?");
            PreparedStatement psa = con.prepareStatement("SELECT * FROM wz_questactdata WHERE questid = ?");
            PreparedStatement pss = con.prepareStatement("SELECT * FROM wz_questactskilldata WHERE uniqueid = ?");
            PreparedStatement psq = con.prepareStatement("SELECT * FROM wz_questactquestdata WHERE uniqueid = ?");
            PreparedStatement psi = con.prepareStatement("SELECT * FROM wz_questactitemdata WHERE uniqueid = ?");
            PreparedStatement psp = con.prepareStatement("SELECT * FROM wz_questpartydata WHERE questid = ?");
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                quests.put(rs.getInt("questid"), loadQuest(rs, psr, psa, pss, psq, psi, psp));
            }
            rs.close();
            ps.close();
            psr.close();
            psa.close();
            pss.close();
            psq.close();
            psi.close();
            psp.close();
        } catch (SQLException e) {
            FileoutputUtil.outputFileError("logs/资料库异常.txt", e);
            e.printStackTrace();
        }
    }

    public static void clearQuests() {
        quests.clear();
        initQuests(); // test
    }

    public static Collection<MapleQuest> getAllInstances() {
        return quests.values();
    }

    public static MapleQuest getInstance(int id) {
        MapleQuest ret = quests.get(id);
        if (ret == null) {
            ret = new MapleQuest(id);
            quests.put(id, ret); // by this time we have already initialized
        }
        return ret;
    }

    public boolean canStart(MapleCharacter c, Integer npcid) {
        if (c.getQuest(this).getStatus() != 0 && !(c.getQuest(this).getStatus() == 2 && repeatable)) {
            return false;
        }
        if (blocked && !c.isGM()) {
            return false;
        }
        for (MapleQuestRequirement r : startReqs) {
            if (r.getType() == MapleQuestRequirementType.dayByDay && npcid != null) { // everyday. we don't want ok
                forceComplete(c, npcid);
                return false;
            }
            if (!r.check(c, npcid)) {
                return false;
            }
        }
        return true;
    }

    public boolean canComplete(MapleCharacter c, Integer npcid) {
        if (c.getQuest(this).getStatus() != 1) {
            return false;
        }
        if (blocked && !c.isGM()) {
            return false;
        }
        if (autoComplete && npcid != null && viewMedalItem <= 0) {
            forceComplete(c, npcid);
            return false; // skip script
        }
        for (MapleQuestRequirement r : completeReqs) {
            if (!r.check(c, npcid)) {
                return false;
            }
        }
        return true;
    }

    public final void RestoreLostItem(final MapleCharacter c, final int itemid) {
        if (blocked && !c.isGM()) {
            return;
        }
        for (final MapleQuestAction a : startActs) {
            if (a.RestoreLostItem(c, itemid)) {
                break;
            }
        }
    }

    public void start(MapleCharacter c, int npc) {
        if ((autoStart || checkNPCOnMap(c, npc)) && canStart(c, npc)) {
            for (MapleQuestAction a : startActs) {
                if (!a.checkEnd(c, null)) { // just in case
                    return;
                }
            }
            for (MapleQuestAction a : startActs) {
                a.runStart(c, null);
            }
            if (!customend) {
                forceStart(c, npc, null);
            } else {
                NPCScriptManager.getInstance().endQuest(c.getClient(), npc, getId(), true);
            }
        } else if (autoStart && canStart(c, npc)) {
            for (MapleQuestAction a : startActs) {
                if (!a.checkEnd(c, null)) { // just in case
                    return;
                }
            }
            for (MapleQuestAction a : startActs) {
                a.runStart(c, null);
            }
            if (!customend) {
                forceStart(c, npc, null);
            } else {
                NPCScriptManager.getInstance().endQuest(c.getClient(), npc, getId(), true);
            }
        } else if (id == 8249) {// 修正任务没办法接
            for (MapleQuestAction a : startActs) {
                if (!a.checkEnd(c, null)) { // just in case
                    return;
                }
            }
            for (MapleQuestAction a : startActs) {
                a.runStart(c, null);
            }
            if (!customend) {
                forceStart(c, npc, null);
            } else {
                NPCScriptManager.getInstance().endQuest(c.getClient(), npc, getId(), true);
            }
        }
    }

    public void complete(MapleCharacter c, int npc) {
        complete(c, npc, null);
    }

    public void complete(MapleCharacter c, int npc, Integer selection) {
        if (!canHold(c)) {
            c.dropMessage(1, "您的背包空间不足，无法完成任务。");
            return;
        }
        if (id == 2337) {
            if (canHold(c)) {
                if (!c.haveItem(1142188, 1, false, true)) {
                    MapleInventoryManipulator.addById(c.getClient(), 1142188, (short) 1, "", null, 0);
                }
            } else {
                c.dropMessage(1, "您的背包空间不足，无法完成任务。");
                return;
            }
        }

        if ((autoPreComplete || checkNPCOnMap(c, npc)) && canComplete(c, npc)) {
            for (MapleQuestAction a : completeActs) {
                if (!a.checkEnd(c, selection)) {
                    return;
                }
            }
            forceComplete(c, npc);
            for (MapleQuestAction a : completeActs) {
                a.runEnd(c, selection, id);
            }
            // we save forfeits only for logging purposes, they shouldn't matter anymore
            // completion time is set by the constructor

            c.getClient().sendPacket(MaplePacketCreator.showSpecialEffect(0xA)); // Quest completion
            c.getMap().broadcastMessage(c, MaplePacketCreator.showSpecialEffect(c.getId(), 0xA), false);
        } else if (id == 29507) { // 修正任务没办法完成
            for (MapleQuestAction a : completeActs) {
                if (!a.checkEnd(c, selection)) {
                    return;
                }
            }
            forceComplete(c, npc);
            for (MapleQuestAction a : completeActs) {
                a.runEnd(c, selection, id);
            }
            // we save forfeits only for logging purposes, they shouldn't matter anymore
            // completion time is set by the constructor

            c.getClient().sendPacket(MaplePacketCreator.showSpecialEffect(0xA)); // Quest completion
            c.getMap().broadcastMessage(c, MaplePacketCreator.showSpecialEffect(c.getId(), 0xA), false);
        }

    }

    public void forfeit(MapleCharacter c) {
        if (c.getQuest(this).getStatus() != (byte) 1) {
            return;
        }
        final MapleQuestStatus oldStatus = c.getQuest(this);
        final MapleQuestStatus newStatus = new MapleQuestStatus(this, (byte) 0);
        newStatus.setForfeited(oldStatus.getForfeited() + 1);
        newStatus.setCompletionTime(oldStatus.getCompletionTime());
        c.updateQuest(newStatus);
    }

    public void forceStart(MapleCharacter c, int npc, String customData) {
        final MapleQuestStatus newStatus = new MapleQuestStatus(this, (byte) 1, npc);
        newStatus.setForfeited(c.getQuest(this).getForfeited());
        newStatus.setCompletionTime(c.getQuest(this).getCompletionTime());
        newStatus.setCustomData(customData);
        c.updateQuest(newStatus);
    }

    public void forceComplete(MapleCharacter c, int npc) {
        final MapleQuestStatus newStatus = new MapleQuestStatus(this, (byte) 2, npc);
        newStatus.setForfeited(c.getQuest(this).getForfeited());
        c.updateQuest(newStatus);
    }

    public int getId() {
        return id;
    }

    public Map<Integer, Integer> getRelevantMobs() {
        return relevantMobs;
    }

    private boolean checkNPCOnMap(MapleCharacter player, int npcid) {
        // mir = 1013000
        // return (npcid == 1013000) || (player.getMap() != null &&
        // player.getMap().containsNPC(npcid));
        return (npcid == 1013000) || (player.getMap() != null && player.getMap().containsNPC(npcid)
                || !player.getMap().containsNPC(npcid));
    }

    public int getMedalItem() {
        return viewMedalItem;
    }

    public enum MedalQuest {

        新手冒险家(29005, 29015, 15,
                new int[] { 104000000, 104010001, 100000006, 104020000, 100000000, 100010000, 100040000, 100040100,
                        101010103, 101020000, 101000000, 102000000, 101030104, 101030406, 102020300, 103000000,
                        102050000, 103010001, 103030200, 110000000 }),
        冰原雪域山脉探险家(29006, 29012, 50,
                new int[] { 200000000, 200010100, 200010300, 200080000, 200080100, 211000000, 211030000, 211040300,
                        211041200, 211041800 }),
        路德斯湖探险家(29007, 29012, 40,
                new int[] { 222000000, 222010400, 222020000, 220000000, 220020300, 220040200, 221020701, 221000000,
                        221030600, 221040400 }),
        海底探险家(29008, 29012, 40,
                new int[] { 230000000, 230010400, 230010200, 230010201, 230020000, 230020201, 230030100, 230040000,
                        230040200, 230040400 }),
        武陵桃园探险家(29009, 29012, 50,
                new int[] { 251000000, 251010200, 251010402, 251010500, 250010500, 250010504, 250000000, 250010300,
                        250010304, 250020300 }),
        纳希沙漠探险家(29010, 29012, 70,
                new int[] { 261030000, 261020401, 261020000, 261010100, 261000000, 260020700, 260020300, 260000000,
                        260010600, 260010300 }),
        米纳尔森林探险家(29011, 29012, 70,
                new int[] { 240000000, 240010200, 240010800, 240020401, 240020101, 240030000, 240040400, 240040511,
                        240040521, 240050000 }),
        奇幻村探险家(29014, 29015, 50, new int[] { 105040300, 105070001, 105040305, 105090200, 105090300, 105090301,
                105090312, 105090500, 105090900, 105080000 });

        public int questid, level, lquestid;
        public int[] maps;

        MedalQuest(int questid, int lquestid, int level, int[] maps) {
            this.questid = questid; // infoquest = questid -2005, customdata = questid -1995
            this.level = level;
            this.lquestid = lquestid;
            this.maps = maps; // note # of maps
        }
    }

    public boolean hasStartScript() {
        return this.scriptedStart;
    }

    public final boolean canHold(MapleCharacter chr) {
        for (int i = 1; i <= 5; i++) {
            if (chr.getInventory(MapleInventoryType.getByType((byte) i)).getNextFreeSlot() <= -1) {
                return false;
            }
        }
        return true;
    }
}
