/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package server;

import java.lang.ref.WeakReference;
import client.MapleCharacter;
import handling.world.MaplePartyCharacter;

/**
 * TODO : Make this a function for NPC instead.. cleaner
 *
 * @author Rob
 */
public class MapleCarnivalChallenge {

    WeakReference<MapleCharacter> challenger;
    String challengeinfo = "";

    public MapleCarnivalChallenge(MapleCharacter challenger) {
        this.challenger = new WeakReference<>(challenger);
        challengeinfo += "#b";
        for (MaplePartyCharacter pc : challenger.getParty().getMembers()) {
            MapleCharacter c = challenger.getMap().getCharacterById(pc.getId());
            if (c != null) {
                challengeinfo += (c.getName() + " / 等级" + c.getLevel() + " / " + getJobNameById(c.getJob()) + "\r\n");
            }
        }
        challengeinfo += "#k";
    }

    public MapleCharacter getChallenger() {
        return challenger.get();
    }

    public String getChallengeInfo() {
        return challengeinfo;
    }

    public static final String getJobNameById(int job) {
        switch (job) {
            case 0:
                return "初心者";
            case 1000:
                return "贵族";
            case 2000:
                return "传说";
            case 2001:
                return "龙魔岛";
            case 3000:
                return "市民";

            case 100:
                return "剑士";// Warrior
            case 110:
                return "狂战士";
            case 111:
                return "狂战士";
            case 112:
                return "英雄";
            case 120:
                return "见习骑士";
            case 121:
                return "骑士";
            case 122:
                return "圣战士";
            case 130:
                return "枪骑兵";
            case 131:
                return "龙骑士";
            case 132:
                return "黑骑士";

            case 200:
                return "法师";
            case 210:
                return "巫师(火,毒)";
            case 211:
                return "魔导士(火,毒)";
            case 212:
                return "大魔导士(火,毒)";
            case 220:
                return "巫师(冰,雷)";
            case 221:
                return "魔导士(冰,雷)";
            case 222:
                return "大魔导士(冰,雷)";
            case 230:
                return "僧侣";
            case 231:
                return "祭司";
            case 232:
                return "主教";

            case 300:
                return "弓箭手";
            case 310:
                return "猎人";
            case 311:
                return "游侠";
            case 312:
                return "箭神";
            case 320:
                return "弩弓手";
            case 321:
                return "狙击手";
            case 322:
                return "神射手";

            case 400:
                return "盗贼";
            case 410:
                return "刺客";
            case 411:
                return "暗杀者";
            case 412:
                return "夜使者";
            case 420:
                return "侠盗";
            case 421:
                return "神偷";
            case 422:
                return "暗影神偷";
            case 430:
                return "下忍";
            case 431:
                return "中忍";
            case 432:
                return "上忍";
            case 433:
                return "隐忍";
            case 434:
                return "影武者";

            case 500:
                return "海盗";
            case 510:
                return "打手";
            case 511:
                return "格斗家";
            case 512:
                return "拳霸";
            case 520:
                return "枪手";
            case 521:
                return "神枪手";
            case 522:
                return "枪神";

            case 1100:
            case 1110:
            case 1111:
            case 1112:
                return "圣魂骑士";

            case 1200:
            case 1210:
            case 1211:
            case 1212:
                return "烈焰巫师";

            case 1300:
            case 1310:
            case 1311:
            case 1312:
                return "破风使者";

            case 1400:
            case 1410:
            case 1411:
            case 1412:
                return "暗夜行者";

            case 1500:
            case 1510:
            case 1511:
            case 1512:
                return "闪雷悍将";

            case 2100:
            case 2110:
            case 2111:
            case 2112:
                return "狂狼勇士";

            case 2200:
            case 2210:
            case 2211:
            case 2212:
            case 2213:
            case 2214:
            case 2215:
            case 2216:
            case 2217:
            case 2218:
                return "龙魔导士";

            case 3200:
            case 3210:
            case 3211:
            case 3212:
                return "炼狱巫师";

            case 3300:
            case 3310:
            case 3311:
            case 3312:
                return "狂暴猎人";

            case 3500:
            case 3510:
            case 3511:
            case 3512:
                return "机甲战神";

            default:
                return "未知";
        }
    }

    public static final String getJobBasicNameById(int job) {
        switch (job) {
            case 0:
            case 1000:
            case 2000:
            case 2001:
            case 3000:
                return "初心者";

            case 2100:
            case 2110:
            case 2111:
            case 2112:
            case 1100:
            case 1110:
            case 1111:
            case 1112:
            case 100:
            case 110:
            case 111:
            case 112:
            case 120:
            case 121:
            case 122:
            case 130:
            case 131:
            case 132:
                return "剑士";

            case 2200:
            case 2210:
            case 2211:
            case 2212:
            case 2213:
            case 2214:
            case 2215:
            case 2216:
            case 2217:
            case 2218:
            case 3200:
            case 3210:
            case 3211:
            case 3212:
            case 1200:
            case 1210:
            case 1211:
            case 1212:
            case 200:
            case 210:
            case 211:
            case 212:
            case 220:
            case 221:
            case 222:
            case 230:
            case 231:
            case 232:
                return "法师";

            case 3300:
            case 3310:
            case 3311:
            case 3312:
            case 1300:
            case 1310:
            case 1311:
            case 1312:
            case 300:
            case 310:
            case 311:
            case 312:
            case 320:
            case 321:
            case 322:
                return "弓箭手";

            case 1400:
            case 1410:
            case 1411:
            case 1412:
            case 400:
            case 410:
            case 411:
            case 412:
            case 420:
            case 421:
            case 422:
            case 430:
            case 431:
            case 432:
            case 433:
            case 434:
                return "盗贼";

            case 3500:
            case 3510:
            case 3511:
            case 3512:
            case 1500:
            case 1510:
            case 1511:
            case 1512:
            case 500:
            case 510:
            case 511:
            case 512:
            case 520:
            case 521:
            case 522:
                return "海盗";

            default:
                return "未知";
        }
    }
}
