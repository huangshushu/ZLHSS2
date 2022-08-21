package server;

import client.MapleDisease;
import provider.MapleData;
import provider.MapleDataProvider;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;
import server.life.MobSkill;
import server.life.MobSkillFactory;

import java.util.HashMap;
import java.util.Map;

public class MapleCarnivalFactory {

    private final static MapleCarnivalFactory instance = new MapleCarnivalFactory();
    private final Map<Integer, MCSkill> skills = new HashMap<>();
    private final Map<Integer, MCSkill> guardians = new HashMap<>();
    private final MapleDataProvider dataRoot = MapleDataProviderFactory.getDataProvider("Skill.wz");

    public MapleCarnivalFactory() {
        //whoosh
        initialize();
    }

    public static final MapleCarnivalFactory getInstance() {
        return instance;
    }

    private void initialize() {
        if (!skills.isEmpty()) {
            return;
        }

        System.out.println("【读取中】 MapleCarnivalFactory:::");

        for (MapleData z : dataRoot.getData("MCSkill.img")) {
            int MCSkillId = Integer.parseInt(z.getName());
            int spendCP = MapleDataTool.getInt("spendCP", z, 0);
            int mobSkillID = MapleDataTool.getInt("mobSkillID", z, 0);
            int level = MapleDataTool.getInt("level", z, 0);
            boolean target = MapleDataTool.getInt("target", z, 1) > 1;
            skills.put(MCSkillId, new MCSkill(spendCP, mobSkillID, level, target));
        }
        for (MapleData z : dataRoot.getData("MCGuardian.img")) {
            guardians.put(Integer.parseInt(z.getName()), new MCSkill(MapleDataTool.getInt("spendCP", z, 0), MapleDataTool.getInt("mobSkillID", z, 0), MapleDataTool.getInt("level", z, 0), true));
        }
    }

    public MCSkill getSkill(final int id) {
        return skills.get(id);
    }

    public MCSkill getGuardian(final int id) {
        return guardians.get(id);
    }

    public static class MCSkill {

        public int cpLoss, mobSkillId, level;
        public boolean targetsAll;

        public MCSkill(int _cpLoss, int _skillid, int _level, boolean _targetsAll) {
            this.cpLoss = _cpLoss;
            this.mobSkillId = _skillid;
            this.level = _level;
            this.targetsAll = _targetsAll;
        }

        public MobSkill getMobSkill() {
            return MobSkillFactory.getMobSkill(mobSkillId, level);
        }

        public MapleDisease getDisease() {
            if (mobSkillId <= 0) {
                return MapleDisease.getRandom();
            }
            return MapleDisease.getByMobSkill(mobSkillId);
        }
    }
}
