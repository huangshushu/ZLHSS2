package server.quest;

import client.ISkill;
import java.util.Calendar;
import java.util.List;
import java.util.LinkedList;
import java.io.Serializable;

import client.inventory.IItem;
import client.SkillFactory;
import constants.GameConstants;
import client.MapleCharacter;
import client.inventory.MaplePet;
import client.inventory.MapleInventoryType;
import client.MapleQuestStatus;
import java.sql.ResultSet;
import java.sql.SQLException;
import provider.MapleData;
import provider.MapleDataTool;

import tools.Pair;

public class MapleQuestRequirement implements Serializable {

    private static final long serialVersionUID = 9179541993413738569L;
    private MapleQuest quest;
    private MapleQuestRequirementType type;
    private int intStore;
    private String stringStore;
    private List<Pair<Integer, Integer>> dataStore;

    /**
     * Creates a new instance of MapleQuestRequirement
     */
    public MapleQuestRequirement(MapleQuest quest, MapleQuestRequirementType type, ResultSet rse) throws SQLException {
        this.type = type;
        this.quest = quest;

        switch (type) {
            case pet:
            case mbcard:
            case mob:
            case item:
            case quest:
            case skill:
            case job: {
                dataStore = new LinkedList<Pair<Integer, Integer>>();
                String[] first = rse.getString("intStoresFirst").split(", ");
                String[] second = rse.getString("intStoresSecond").split(", ");
                if (first.length <= 0 && rse.getString("intStoresFirst").length() > 0) {
                    dataStore.add(new Pair<Integer, Integer>(Integer.parseInt(rse.getString("intStoresFirst")), Integer.parseInt(rse.getString("intStoresSecond"))));
                }
                for (int i = 0; i < first.length; i++) {
                    if (first[i].length() > 0 && second[i].length() > 0) {
                        dataStore.add(new Pair<Integer, Integer>(Integer.parseInt(first[i]), Integer.parseInt(second[i])));
                    }
                }
                break;
            }
            case partyQuest_S:
            case dayByDay:
            case normalAutoStart:
            case subJobFlags:
            case fieldEnter:
            case pettamenessmin:
            case npc:
            case questComplete:
            case pop:
            case interval:
            case mbmin:
            case lvmax:
            case lvmin: {
                intStore = Integer.parseInt(rse.getString("stringStore"));
                break;
            }
            case end: {
                stringStore = rse.getString("stringStore");
                break;
            }
        }
    }

    public boolean check(MapleCharacter c, Integer npcid) {
        switch (type) {
            case job:
                for (Pair<Integer, Integer> a : dataStore) {
                    if (a.getRight() == c.getJob() || c.isGM()) {
                        return true;
                    }
                }
                return false;
            case skill: {
                for (Pair<Integer, Integer> a : dataStore) {
                    final boolean acquire = a.getRight() > 0;
                    final int skill = a.getLeft();
                    final ISkill skil = SkillFactory.getSkill(skill);
                    if (acquire) {
                        if (skil.isFourthJob()) {
                            if (c.getMasterLevel(skil) == 0) {
                                return false;
                            }
                        } else if (c.getSkillLevel(skil) == 0) {
                            return false;
                        }
                    } else if (c.getSkillLevel(skil) > 0 || c.getMasterLevel(skil) > 0) {
                        return false;
                    }
                }
                return true;
            }
            case quest:
                for (Pair<Integer, Integer> a : dataStore) {
                    final MapleQuestStatus q = c.getQuest(MapleQuest.getInstance(a.getLeft()));
                    final int state = a.getRight();
                    if (state != 0) {
                        if (q == null && state == 0) {
                            continue;
                        }
                        if (q == null || q.getStatus() != state) {
                            return false;
                        }
                    }
                }
                return true;
            case item:
                MapleInventoryType iType;
                int itemId;
                short quantity;

                for (Pair<Integer, Integer> a : dataStore) {
                    itemId = a.getLeft();
                    quantity = 0;
                    iType = GameConstants.getInventoryType(itemId);
                    for (IItem item : c.getInventory(iType).listById(itemId)) {
                        quantity += item.getQuantity();
                    }
                    final int count = a.getRight();
                    if (quantity < count || (count <= 0 && quantity > 0)) {
                        return false;
                    }
                }
                return true;
            case lvmin:
                return c.getLevel() >= intStore;
            case lvmax:
                return c.getLevel() <= intStore;
            case end:
                final String timeStr = stringStore;
                if (timeStr == null || timeStr.length() <= 0) {
                    return true;
                }
                final Calendar cal = Calendar.getInstance();
                cal.set(Integer.parseInt(timeStr.substring(0, 4)), Integer.parseInt(timeStr.substring(4, 6)), Integer.parseInt(timeStr.substring(6, 8)), Integer.parseInt(timeStr.substring(8, 10)), 0);
                return cal.getTimeInMillis() >= System.currentTimeMillis();
            case mob:
                for (Pair<Integer, Integer> a : dataStore) {
                    final int mobId = a.getLeft();
                    final int killReq = a.getRight();
                    if (c.getQuest(quest).getMobKills(mobId) < killReq) {
                        return false;
                    }
                }
                return true;
            case npc:
                return npcid == null || npcid == intStore;
            case fieldEnter:
                if (intStore > 0) {
                    return intStore == c.getMapId();
                }
                return true;
            case mbmin:
                return c.getMonsterBook().getTotalCards() >= intStore;
            case mbcard:
                for (Pair<Integer, Integer> a : dataStore) {
                    final int cardId = a.getLeft();
                    final int killReq = a.getRight();
                    if (c.getMonsterBook().getLevelByCard(cardId) < killReq) {
                        return false;
                    }
                }
                return true;
            case pop:
                return c.getFame() >= intStore;
            case questComplete:
                return c.getNumQuest() >= intStore;
            case interval:
                return c.getQuest(quest).getStatus() != 2 || c.getQuest(quest).getCompletionTime() <= System.currentTimeMillis() - intStore * 60 * 1000L;
            case pet:
                for (Pair<Integer, Integer> a : dataStore) {
                    if (c.getPetIndex(a.getRight()) != -1) {
                        return true;
                    }
                }
                return false;
            case pettamenessmin:
                for (MaplePet pet : c.getPets()) {
                    if (pet.getSummoned() && pet.getCloseness() >= intStore) {
                        return true;
                    }
                }
                return false;
            case partyQuest_S:
                final int[] partyQuests = new int[]{1200, 1201, 1202, 1203, 1204, 1205, 1206, 1300, 1301, 1302};
                int sRankings = 0;
                for (int i : partyQuests) {
                    final String rank = c.getOneInfo(i, "rank");
                    if (rank != null && rank.equals("S")) {
                        sRankings++;
                    }
                }
                return sRankings >= 5;
            case subJobFlags: // 1 for non-DB, 2 for DB...
                return c.getSubcategory() == (intStore / 2);
            /*case craftMin:
            case willMin:
            case charismaMin:
            case insightMin:
            case charmMin:
            case senseMin:
                return c.getTrait(MapleTraitType.getByQuestName(type.name())).getLevel() >= intStore;*/
            default:
                return true;
        }
    }

    public MapleQuestRequirementType getType() {
        return type;
    }

    @Override
    public String toString() {
        return type.toString();
    }

    public List<Pair<Integer, Integer>> getDataStore() {
        return dataStore;
    }
}
