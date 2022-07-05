package client;

import constants.SkillConstants;

public enum MapleJob {

    初心者(0),
    剑士(100),
    狂战士(110),
    十字军(111),
    英雄(112),
    见习骑士(120),
    骑士(121),
    圣骑士(122),
    枪骑兵(130),
    嗜血狂骑(131),
    黑骑士(132),
    法师(200),
    巫师_火毒(210),
    魔导士_火毒(211),
    大魔导士_火毒(212),
    巫师_冰雷(220),
    魔导士_冰雷(221),
    大魔导士_冰雷(222),
    僧侣(230),
    祭司(231),
    主教(232),
    弓箭手(300),
    猎人(310),
    游侠(311),
    箭神(312),
    弩弓手(320),
    狙击手(321),
    神射手(322),
    盗贼(400),
    刺客(410),
    暗杀者(411),
    夜使者(412),
    侠盗(420),
    神偷(421),
    暗影神偷(422),
    海盗(500),
    打手(510),
    格斗家(511),
    拳霸(512),
    枪手(520),
    神枪手(521),
    枪神(522),
    MANAGER(800),
    管理员(900),
    贵族(1000),
    圣魂剑士1转(1100),
    圣魂剑士2转(1110),
    圣魂剑士3转(1111),
    圣魂剑士4转(1112),
    烈焰巫师1转(1200),
    烈焰巫师2转(1210),
    烈焰巫师3转(1211),
    烈焰巫师4转(1212),
    破风使者1转(1300),
    破风使者2转(1310),
    破风使者3转(1311),
    破风使者4转(1312),
    暗夜行者1转(1400),
    暗夜行者2转(1410),
    暗夜行者3转(1411),
    暗夜行者4转(1412),
    闪雷悍将1转(1500),
    闪雷悍将2转(1510),
    闪雷悍将3转(1511),
    闪雷悍将4转(1512),
    传说(2000),
    狂狼勇士1转(2100),
    狂狼勇士2转(2110),
    狂狼勇士3转(2111),
    狂狼勇士4转(2112),
    未知(999999),;
    private final int jobid;

    private MapleJob(int id) {
        this.jobid = id;
    }

    public int getId() {
        return this.jobid;
    }

    public static String getName(MapleJob mjob) {
        return mjob.name();
    }

    public static MapleJob getById(int id) {
        for (MapleJob l : values()) {
            if (l.getId() == id) {
                return l;
            }
        }
        return 未知;
    }

    public static boolean isExist(int id) {
        for (MapleJob job : values()) {
            if (job.getId() == id) {
                return true;
            }
        }
        return false;
    }

    public static boolean is冒险家(final int job) {
        return job / 1000 == 0;
    }

    public static boolean is英雄(final int job) {
        return job / 10 == 11;
    }

    public static boolean is圣骑士(final int job) {
        return job / 10 == 12;
    }

    public static boolean is黑骑士(final int job) {
        return job / 10 == 13;
    }

    public static boolean is大魔导士_火毒(final int job) {
        return job / 10 == 21;
    }

    public static boolean is大魔导士_冰雷(final int job) {
        return job / 10 == 22;
    }

    public static boolean is主教(final int job) {
        return job / 10 == 23;
    }

    public static boolean is箭神(final int job) {
        return job / 10 == 31;
    }

    public static boolean is神射手(final int job) {
        return job / 10 == 32;
    }

    public static boolean is夜使者(final int job) {
        return job / 10 == 41;
    }

    public static boolean is暗影神偷(final int job) {
        return job / 10 == 42;
    }

    public static boolean is影武者(final int job) {
        return job / 10 == 43; // sub == 1 && job == 400
    }

    public static boolean is拳霸(final int job) {
        return job / 10 == 51;
    }

    public static boolean is枪神(final int job) {
        return job / 10 == 52;
    }

    public static boolean is管理员(final int job) {
        return job == 800 || job == 900 || job == 910;
    }

    public static boolean is皇家骑士团(final int job) {
        return job / 1000 == 1;
    }

    public static boolean is圣魂剑士(final int job) {
        return job / 100 == 11;
    }

    public static boolean is烈焰巫师(final int job) {
        return job / 100 == 12;
    }

    public static boolean is破风使者(final int job) {
        return job / 100 == 13;
    }

    public static boolean is暗夜行者(final int job) {
        return job / 100 == 14;
    }

    public static boolean is闪雷悍将(final int job) {
        return job / 100 == 15;
    }

    public static boolean is英雄团(final int job) {
        return job / 1000 == 2;
    }

    public static boolean is狂狼勇士(final int job) {
        return job / 100 == 21 || job == 2000;
    }

    public static boolean is剑士(final int job) {
        return getJobBranch(job) == 1;
    }

    public static boolean is法师(final int job) {
        return getJobBranch(job) == 2;
    }

    public static boolean is弓箭手(final int job) {
        return getJobBranch(job) == 3;
    }

    public static boolean is盗贼(final int job) {
        return getJobBranch(job) == 4 || getJobBranch(job) == 6;
    }

    public static boolean is海盗(final int job) {
        return getJobBranch(job) == 5 || getJobBranch(job) == 6;
    }

    public static short getBeginner(final short job) {
        if (job % 1000 < 10) {
            return job;
        }
        switch (job / 100) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 8:
            case 9:
                return (short) 初心者.getId();
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
                return (short) 贵族.getId();
            case 20:
                return (short) 传说.getId();
            case 21:
                return (short) 传说.getId();
        }
        return (short) 初心者.getId();
    }

    public static boolean is初心者(int jobid) {
        if (jobid <= 5000) {
            if (jobid != 5000 && (jobid < 2001 || jobid > 2005 && (jobid <= 3000 || jobid > 3002 && (jobid <= 4000 || jobid > 4002)))) {
            } else {
                return true;
            }
        } else if (jobid >= 6000 && (jobid <= 6001 || jobid == 13000)) {
            return true;
        }
        boolean result = isJob12000(jobid);
        if (jobid % 1000 == 0 || jobid / 100 == 8000 || jobid == 8001 || result) {
            result = true;
        }
        return result;
    }

    public static boolean isJob12000(int job) {
        boolean result = isJob12000HighLv(job);
        if (isJob12000LowLv(job) || result) {
            result = true;
        }
        return result;
    }

    public static boolean isJob12000HighLv(int job) {
        return job == 12003 || job == 12004;
    }

    public static boolean isJob12000LowLv(int job) {
        return job == 12000 || job == 12001 || job == 12002;
    }

    public static boolean isJob8000(int job) {
        int v1 = SkillConstants.getJobBySkill(job);
        return v1 >= 800000 && v1 <= 800099 || v1 == 8001;
    }

    public static boolean isJob9500(int job) {
        boolean result;
        if (job >= 0) {
            result = SkillConstants.getJobBySkill(job) == 9500;
        } else {
            result = false;
        }
        return result;
    }

    public static int get转数(int jobid) {
        int result;
        if (is初心者(jobid) || jobid % 100 == 0 || jobid == 501 || jobid == 3101 || jobid == 508) {
            result = 1;
        } else {
            int v1 = jobid % 10;
            int v2;
            if (jobid / 10 == 43) {
                v2 = v1 / 2 + 2;
            } else {
                v2 = v1 + 2;
            }
          //  if (v2 >= 2 && (v2 <= 4 || v2 <= 10 && is龙魔导士(jobid))) {
            //       result = v2;
            //  } else {
            result = 0;
            //  }
        }
        return result;
    }

    public static boolean isBeginner(final int job) {
        return getJobGrade(job) == 0;
    }

    public static boolean isSameJob(int job, int job2) {
        int jobNum = getJobGrade(job);
        int job2Num = getJobGrade(job2);
        // 对初心者判断
        if (jobNum == 0 || job2Num == 0) {
            return getBeginner((short) job) == getBeginner((short) job2);
        }

        // 初心者过滤掉后, 对职业群进行判断
        if (getJobGroup(job) != getJobGroup(job2)) {
            return false;
        }

        // 代码特殊的单独判断
        if (MapleJob.is管理员(job) || MapleJob.is管理员(job)) {
            return MapleJob.is管理员(job2) && MapleJob.is管理员(job2);
        }
//        } else if (MapleJob.is重砲指挥官(job) || MapleJob.is重砲指挥官(job)) {
//            return MapleJob.is重砲指挥官(job2) && MapleJob.is重砲指挥官(job2);
//        } else if (MapleJob.is苍龙侠客(job) || MapleJob.is苍龙侠客(job)) {
//            return MapleJob.is苍龙侠客(job2) && MapleJob.is苍龙侠客(job2);
//        } else if (MapleJob.is恶魔复仇者(job) || MapleJob.is恶魔复仇者(job)) {
//            return MapleJob.is恶魔复仇者(job2) && MapleJob.is恶魔复仇者(job2);
//        }

        // 对一转分支判断(如 剑士 跟 黑骑)
        if (jobNum == 1 || job2Num == 1) {
            return job / 100 == job2 / 100;
        }

        return job / 10 == job2 / 10;
    }

    public static int getJobGroup(int job) {
        return job / 1000;
    }

    public static int getJobBranch(int job) {
        if (job / 100 == 27) {
            return 2;
        } else {
            return job % 1000 / 100;
        }
    }

    public static int getJobBranch2nd(int job) {
        if (job / 100 == 27) {
            return 2;
        } else {
            return job % 1000 / 100;
        }
    }

    public static int getJobGrade(int jobz) {
        int job = (jobz % 1000);
        if (job / 10 == 0) {
            return 0; //beginner
        } else if (job / 10 % 10 == 0) {
            return 1;
        } else {
            return job % 10 + 2;
        }
    }
}
