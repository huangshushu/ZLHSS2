package client.anticheat;

import client.MapleBuffStat;
import client.MapleCharacter;
import client.MapleCharacterUtil;
import client.SkillFactory;
import constants.GameConstants;
import constants.PiPiConfig;
import constants.WorldConstants;
import handling.world.World;
import server.AutobanManager;
import server.Timer.CheatTimer;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;
import tools.StringUtil;

import java.awt.*;
import java.lang.ref.WeakReference;
import java.util.List;
import java.util.*;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantReadWriteLock;

public class CheatTracker {

    private final ReentrantReadWriteLock lock = new ReentrantReadWriteLock();
    private final Lock rL = lock.readLock(), wL = lock.writeLock();
    private final Map<CheatingOffense, CheatingOffenseEntry> offenses = new LinkedHashMap<>();
    private final WeakReference<MapleCharacter> chr;
    // For keeping track of speed attack hack.
    private long lastAttackTime = 0;
    private int inMapIimeCount = 0;
    private int lastAttackTickCount = 0;
    private byte Attack_tickResetCount = 0;
    private long Server_ClientAtkTickDiff = 0;
    private long lastDamage = 0;
    private long takingDamageSince;
    private int numSequentialDamage = 0;
    private long lastDamageTakenTime = 0;
    private byte numZeroDamageTaken = 0;
    private int numSequentialSummonAttack = 0;
    private long summonSummonTime = 0;
    private int numSameDamage = 0;
    private Point lastMonsterMove;
    private int monsterMoveCount;
    private int attacksWithoutHit = 0;
    private byte dropsPerSecond = 0;
    private long lastDropTime = 0;
    private byte msgsPerSecond = 0;
    private long lastMsgTime = 0;
    private ScheduledFuture<?> invalidationTask;
    private int gm_message = 100;
    private int lastTickCount = 0, tickSame = 0;
    private long lastASmegaTime = 0;
    private long[] lastTime = new long[6];
    private long lastSaveTime = 0;
    private long lastLieDetectorTime = 0;
    private long lastLieTime = 0;
    private long lastPickupkTime = 0, lastPickupkCount = 0;

    public CheatTracker(final MapleCharacter chr) {
        this.chr = new WeakReference<>(chr);
        invalidationTask = CheatTimer.getInstance().register(new InvalidationTask(), 60000);
        takingDamageSince = System.currentTimeMillis();
    }

    public final void checkAttack(final int skillId, final int tickcount) {
        short AtkDelay = GameConstants.getAttackDelay(skillId);
        if (chr.get().getBuffedValue(MapleBuffStat.BODY_PRESSURE) != null) {
            AtkDelay /= 6;// 使用这Buff之后 tickcount - lastAttackTickCount 可以为0...
        }
        // 攻击加速
        if (chr.get().getBuffedValue(MapleBuffStat.BOOSTER) != null) {
            AtkDelay /= 1.5;
        }
        // 最终极速
        if (chr.get().getBuffedValue(MapleBuffStat.SPEED_INFUSION) != null) {
            AtkDelay /= 1.35;
        }
        // 狂郎
        if (GameConstants.isAran(chr.get().getJob())) {
            AtkDelay /= 1.4;// 407
        }
        // 海盗、拳霸
        if (chr.get().getJob() >= 500 && chr.get().getJob() <= 512) {
            AtkDelay = 0;// 407
        }
        // 强化连击
        if (skillId == 21101003 || skillId == 5110001) {
            AtkDelay = 0;
        }
        if ((tickcount - lastAttackTickCount) < AtkDelay && (skillId != 3121004)) {
            if (GameConstants.getWuYanChi(skillId)) {
                FileoutputUtil.logToFile("logs/Hack/攻击速度异常.txt",
                        "\r\n " + FileoutputUtil.NowTime() + " 玩家：" + chr.get().getName() + " 职业:" + chr.get().getJob()
                                + "　技能: " + skillId + "(" + SkillFactory.getSkillName(skillId) + ")" + " check: "
                                + (tickcount - lastAttackTickCount) + " " + "AtkDelay: " + AtkDelay);
                if (WorldConstants.WUYANCHI) {
                    World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6,
                            "[GM密语] " + " ID " + chr.get().getId() + " " + chr.get().getName() + " 攻击速度异常，技能: "
                                    + skillId + "(" + SkillFactory.getSkillName(skillId) + ")"));
                    // chr.get().getClient().getSession().close();//断开攻速异常玩家客户端
                }
            }
        }

        if (chr.get().getDebugMessage()) {
            chr.get().dropMessage("Delay [" + skillId + "] = " + (tickcount - lastAttackTickCount) + ", " + (AtkDelay));
        }

        if (WorldConstants.LieDetector) {
            this.lastAttackTime = System.currentTimeMillis();
            if ((this.chr.get() != null)
                    && (this.lastAttackTime - ((MapleCharacter) this.chr.get()).getChangeTime() > 60000)) {
                ((MapleCharacter) this.chr.get()).setChangeTime(false);

                if ((!GameConstants.isBossMap(chr.get().getMapId()))
                        && (((MapleCharacter) this.chr.get()).getEventInstance() == null)
                        && (((MapleCharacter) this.chr.get()).getMap().getMobsSize() >= 1)) {
                    this.inMapIimeCount += 1;
                    if (this.inMapIimeCount >= 30) {
                        World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM密语] " + " ID "
                                + chr.get().getId() + " " + chr.get().getName() + " 打怪时间超过 30 分钟，该玩家可能在挂机。 "));
                    }
                    if (this.inMapIimeCount >= 30) {
                        this.inMapIimeCount = 0;
                        ((MapleCharacter) this.chr.get()).startLieDetector(false);
                        World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM密语] " + " ID "
                                + chr.get().getId() + " " + chr.get().getName() + " 打怪时间超过 30 分钟，系统启动测谎仪系统。 "));
                    }
                }
            }
        }
        final long STime_TC = System.currentTimeMillis() - tickcount; // hack = - more
        if (Server_ClientAtkTickDiff - STime_TC > 1000) {
            if (GameConstants.getWuYanChi(skillId)) {
                // registerOffense(CheatingOffense.快速攻击2);
                if (WorldConstants.WUYANCHI) {
                    World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6,
                            "[GM密语] " + " ID " + chr.get().getId() + " " + chr.get().getName() + " 攻击速度异常，技能: "
                                    + skillId + "(" + SkillFactory.getSkillName(skillId) + ")"));
                }
            }
        }

        Server_ClientAtkTickDiff = STime_TC;

        // System.out.println("Delay [" + skillId + "] = " + (tickcount -
        // lastAttackTickCount) + ", " + (Server_ClientAtkTickDiff - STime_TC));
        //
        chr.get().updateTick(tickcount);
        lastAttackTickCount = tickcount;
    }

    public final void checkTakeDamage(final int damage) {
        numSequentialDamage++;
        lastDamageTakenTime = System.currentTimeMillis();

        // System.out.println("tb" + timeBetweenDamage);
        // System.out.println("ns" + numSequentialDamage);
        // System.out.println(timeBetweenDamage / 1500 + "(" + timeBetweenDamage /
        // numSequentialDamage + ")");
        if (lastDamageTakenTime - takingDamageSince / 500 < numSequentialDamage) {
            // registerOffense(CheatingOffense.FAST_TAKE_DAMAGE);
        }
        if (lastDamageTakenTime - takingDamageSince > 4500) {
            takingDamageSince = lastDamageTakenTime;
            numSequentialDamage = 0;
        }
        /*
         * (non-thieves)
         * Min Miss Rate: 2%
         * Max Miss Rate: 80%
         * (thieves)
         * Min Miss Rate: 5%
         * Max Miss Rate: 95%
         */
        if (damage == 0) {
            numZeroDamageTaken++;
            if (numZeroDamageTaken >= 35) { // Num count MSEA a/b players
                numZeroDamageTaken = 0;
                registerOffense(CheatingOffense.HIGH_AVOID, "回避率过高 ");
            }
        } else if (damage != -1) {
            numZeroDamageTaken = 0;
        }
    }

    /**
     * 检测攻击伤害是一样的
     */
    public void checkSameDamage(int dmg, double expected) {
        if (dmg > 2000 && lastDamage == dmg && chr.get() != null
                && (chr.get().getLevel() < 190 || dmg > expected * 2)) {
            numSameDamage++;
            if (numSameDamage > 5) {
                registerOffense(CheatingOffense.SAME_DAMAGE, numSameDamage + " times, 攻击伤害 " + dmg + ", 预期伤害 "
                        + expected + " [等级: " + chr.get().getLevel() + ", 职业: " + chr.get().getJob() + "]");
                numSameDamage = 0;
            }
        } else {
            lastDamage = dmg;
            numSameDamage = 0;
        }
    }

    /*
     * 检测攻击伤害过高
     */
    public void checkHighDamage(int eachd, double maxDamagePerHit, int mobId, int skillId) {
        if (eachd > maxDamagePerHit && maxDamagePerHit > 2000 && chr.get() != null) {
            registerOffense(CheatingOffense.HIGH_DAMAGE,
                    "[伤害: " + eachd + ", 预计伤害: " + maxDamagePerHit + ", 怪物ID: " + mobId + "] [职业: " + chr.get().getJob()
                            + ", 等级: " + chr.get().getLevel() + ", 技能: " + skillId + "]");
            if (eachd > maxDamagePerHit * 2) {
                registerOffense(CheatingOffense.HIGH_DAMAGE_2,
                        "[伤害: " + eachd + ", 预计伤害: " + maxDamagePerHit + ", 怪物ID: " + mobId + "] [职业: "
                                + chr.get().getJob() + ", 等级: " + chr.get().getLevel() + ", 技能: " + skillId + "]");
            }
        }
    }

    /**
     * 检测怪物移动
     */
    public void checkMoveMonster(Point pos) {
        if (pos.equals(lastMonsterMove)) {
            monsterMoveCount++;
            if (monsterMoveCount > 10) {
                registerOffense(CheatingOffense.MOVE_MONSTERS, "吸怪 坐标: " + pos.x + ", " + pos.y);
                monsterMoveCount = 0;
            }
        } else {
            lastMonsterMove = pos;
            monsterMoveCount = 1;
        }
    }

    /**
     * 重置召唤兽攻击速度检测
     */
    public void resetSummonAttack() {
        summonSummonTime = System.currentTimeMillis();
        numSequentialSummonAttack = 0;
    }

    /**
     * 检测召唤兽攻击速度
     */
    public boolean checkSummonAttack() {
        numSequentialSummonAttack++;
        if ((System.currentTimeMillis() - summonSummonTime) / (1000 + 1) < numSequentialSummonAttack) {
            registerOffense(CheatingOffense.FAST_SUMMON_ATTACK, "召唤兽攻击速度过快.");
            return false;
        }
        return true;
    }

    public final void checkDrop() {
        checkDrop(false);
    }

    public final void checkDrop(final boolean dc) {
        if ((System.currentTimeMillis() - lastDropTime) < 1000) {
            dropsPerSecond++;
            if (dropsPerSecond >= (dc ? 32 : 16) && chr.get() != null && !chr.get().isGM()) {
                if (dc) {
                    chr.get().getClient().getSession().close();
                } else {
                    chr.get().getClient().setMonitored(true);
                }
            }
        } else {
            dropsPerSecond = 0;
        }
        lastDropTime = System.currentTimeMillis();
    }

    public boolean canAvatarSmega2() {
        long time = 10 * 1000;
        if (chr.get() != null) {
            if (chr.get().getId() == 845 || chr.get().getId() == 5247 || chr.get().getId() == 12048) {
                time = 20 * 1000;
            }
            if (lastASmegaTime + time > System.currentTimeMillis() && !chr.get().isGM()) {
                return false;
            }
        }
        lastASmegaTime = System.currentTimeMillis();
        return true;
    }

    public synchronized boolean GMSpam(int limit, int type) {
        if (type < 0 || lastTime.length < type) {
            type = 1; // default xD
        }
        if (System.currentTimeMillis() < limit + lastTime[type]) {
            return true;
        }
        lastTime[type] = System.currentTimeMillis();
        return false;
    }

    public final void checkMsg() { // ALL types of msg. caution with number of msgsPerSecond
        if ((System.currentTimeMillis() - lastMsgTime) < 1000) { // luckily maplestory has auto-check for too much
                                                                 // msging
            msgsPerSecond++;
            /*
             * if (msgsPerSecond > 10 && chr.get() != null) {
             * chr.get().getClient().getSession().close();
             * }
             */
        } else {
            msgsPerSecond = 0;
        }
        lastMsgTime = System.currentTimeMillis();
    }

    public final int getAttacksWithoutHit() {
        return attacksWithoutHit;
    }

    public final void setAttacksWithoutHit(final boolean increase) {
        if (increase) {
            this.attacksWithoutHit++;
        } else {
            this.attacksWithoutHit = 0;
        }
    }

    public final void registerOffense(final CheatingOffense offense) {
        registerOffense(offense, null);
    }

    public final void registerOffense(final CheatingOffense offense, final String param) {
        final MapleCharacter chrhardref = chr.get();
        if (chrhardref == null || !offense.isEnabled() || chrhardref.isClone()) {
            return;
        }
        if (chr.get().hasGmLevel(5)) {
            chr.get().dropMessage("注册：" + offense + " 原因：" + param);
        }
        CheatingOffenseEntry entry = null;
        rL.lock();
        try {
            entry = offenses.get(offense);
        } finally {
            rL.unlock();
        }
        if (entry != null && entry.isExpired()) {
            expireEntry(entry);
            entry = null;
        }
        if (entry == null) {
            entry = new CheatingOffenseEntry(offense, chrhardref.getId());
        }
        if (param != null) {
            entry.setParam(param);
        }
        entry.incrementCount();
        if (offense.shouldAutoban(entry.getCount())) {
            final byte type = offense.getBanType();
            String outputFileName;
            if (type == 1) {
                AutobanManager.getInstance().autoban(chrhardref.getClient(),
                        StringUtil.makeEnumHumanReadable(offense.name()));
            } else if (type == 2) {
                outputFileName = "断线";
                World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM密语] " + chrhardref.getName()
                        + " 自动断线 类别: " + offense.toString() + " 原因: " + (param == null ? "" : (" - " + param))));
                FileoutputUtil.logToFile("logs/Hack/" + outputFileName + ".txt",
                        "\r\n " + FileoutputUtil.NowTime() + " 玩家：" + chr.get().getName() + " 项目：" + offense.toString()
                                + " 原因： " + (param == null ? "" : (" - " + param)));
                chrhardref.getClient().getSession().close();
            } else if (type == 3) {
                boolean ban = true;
                outputFileName = "封锁";
                String show = "使用违法程式练功";
                String real = "";
                if (offense.toString() == "ITEMVAC_SERVER") {
                    outputFileName = "全图吸物";
                    real = "使用全图吸物";
                    if (!PiPiConfig.getAutoban()) {
                        ban = false;
                    }
                } else if (offense.toString() == "FAST_SUMMON_ATTACK") {
                    outputFileName = "召唤兽无延迟";
                    real = "使用召唤兽无延迟攻击";
                } else if (offense.toString() == "MOB_VAC") {
                    outputFileName = "吸怪";
                    real = "使用吸怪";
                    if (!PiPiConfig.getAutoban()) {
                        ban = false;
                    }
                } else if (offense.toString() == "ATTACK_FARAWAY_MONSTER_BAN") {
                    outputFileName = "全图打";
                    real = "使用全图打";
                    if (!PiPiConfig.getAutoban()) {
                        ban = false;
                    }
                } else {
                    ban = false;
                    World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6,
                            "[GM密语] " + MapleCharacterUtil.makeMapleReadable(chrhardref.getName()) + " (编号: "
                                    + chrhardref.getId() + " )使用外挂! " + StringUtil.makeEnumHumanReadable(offense.name())
                                    + (param == null ? "" : (" - " + param))));
                }

                if (chr.get().hasGmLevel(1)) {
                    chr.get().dropMessage("触发违规: " + real + " param: " + (param == null ? "" : (" - " + param)));
                } else if (false && ban) {
                    FileoutputUtil.logToFile("logs/Hack/Ban/" + outputFileName + ".txt",
                            "\r\n " + FileoutputUtil.NowTime() + " 玩家：" + chr.get().getName() + " 项目："
                                    + offense.toString() + " 原因： " + (param == null ? "" : (" - " + param)));
                    World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(6,
                            "[封锁系统] " + chrhardref.getName() + " 因为" + show + "而被永久停权。"));
                    World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6,
                            "[GM密语] " + chrhardref.getName() + " " + real + "自动封锁! "));
                    chrhardref.ban(chrhardref.getName() + real, true, true, false);
                    chrhardref.getClient().getSession().close();
                } else {
                    FileoutputUtil.logToFile("logs/Hack/" + outputFileName + ".txt",
                            "\r\n " + FileoutputUtil.NowTime() + " 玩家：" + chr.get().getName() + " 项目："
                                    + offense.toString() + " 原因： " + (param == null ? "" : (" - " + param)));
                }
            }
            gm_message = 100;
            return;
        }

        wL.lock();

        try {
            offenses.put(offense, entry);
        } finally {
            wL.unlock();
        }
        switch (offense) {
            case FAST_SUMMON_ATTACK:
            case ITEMVAC_SERVER:
            case MOB_VAC:
            case HIGH_DAMAGE_MAGIC:
            case HIGH_DAMAGE_MAGIC_2:
            case HIGH_DAMAGE:
            case HIGH_DAMAGE_2:
            case ATTACK_FARAWAY_MONSTER:
                // case ATTACK_FARAWAY_MONSTER_SUMMON:
            case SAME_DAMAGE:
                gm_message--;
                boolean log = false;
                String out_log = "";
                String show = offense.name();
                switch (show) {
                    case "ATTACK_FARAWAY_MONSTER":
                        show = "全图打";
                        out_log = "攻击范围异常";
                        log = true;
                        break;
                    case "MOB_VAC":
                        show = "使用吸怪";
                        out_log = "吸怪";
                        log = true;
                        break;
                }
                if (gm_message % 5 == 0) {
                    World.Broadcast.broadcastGMMessage(
                            MaplePacketCreator.serverNotice(6, "[GM密语] " + chrhardref.getName() + " (编号:"
                                    + chrhardref.getId() + ")疑似外挂! " + show + (param == null ? "" : (" - " + param))));
                    if (log) {
                        FileoutputUtil.logToFile("logs/Hack/" + out_log + ".txt",
                                "\r\n" + FileoutputUtil.NowTime() + " " + chrhardref.getName() + " (编号:"
                                        + chrhardref.getId() + ")疑似外挂! " + show
                                        + (param == null ? "" : (" - " + param)));
                    }
                }
                if (gm_message == 0) {
                    World.Broadcast.broadcastGMMessage(
                            MaplePacketCreator.serverNotice(6, "[封号系统] " + chrhardref.getName() + " (编号: "
                                    + chrhardref.getId() + " )疑似外挂！" + show + (param == null ? "" : (" - " + param))));
                    AutobanManager.getInstance().autoban(chrhardref.getClient(),
                            StringUtil.makeEnumHumanReadable(offense.name()));
                    gm_message = 100;
                }
                break;
            default:
                break;
        }
        CheatingOffensePersister.getInstance().persistEntry(entry);
    }

    public void updateTick(int newTick) {
        if (newTick == lastTickCount) { // definitely packet spamming
            /*
             * if (tickSame >= 5) {
             * chr.get().getClient().getSession().close(); //i could also add a check for
             * less than, but i'm not too worried at the moment :)
             * } else {
             */
            tickSame++;
            // }
        } else {
            tickSame = 0;
        }
        lastTickCount = newTick;
    }

    public final void expireEntry(final CheatingOffenseEntry coe) {
        wL.lock();
        try {
            offenses.remove(coe.getOffense());
        } finally {
            wL.unlock();
        }
    }

    public final int getPoints() {
        int ret = 0;
        CheatingOffenseEntry[] offenses_copy;
        rL.lock();
        try {
            offenses_copy = offenses.values().toArray(new CheatingOffenseEntry[offenses.size()]);
        } finally {
            rL.unlock();
        }
        for (final CheatingOffenseEntry entry : offenses_copy) {
            if (entry.isExpired()) {
                expireEntry(entry);
            } else {
                ret += entry.getPoints();
            }
        }
        return ret;
    }

    public final Map<CheatingOffense, CheatingOffenseEntry> getOffenses() {
        return Collections.unmodifiableMap(offenses);
    }

    public final String getSummary() {
        final StringBuilder ret = new StringBuilder();
        final List<CheatingOffenseEntry> offenseList = new ArrayList<>();
        rL.lock();
        try {
            for (final CheatingOffenseEntry entry : offenses.values()) {
                if (!entry.isExpired()) {
                    offenseList.add(entry);
                }
            }
        } finally {
            rL.unlock();
        }
        Collections.sort(offenseList, new Comparator<CheatingOffenseEntry>() {

            @Override
            public final int compare(final CheatingOffenseEntry o1, final CheatingOffenseEntry o2) {
                final int thisVal = o1.getPoints();
                final int anotherVal = o2.getPoints();
                return (thisVal < anotherVal ? 1 : (thisVal == anotherVal ? 0 : -1));
            }
        });
        final int to = Math.min(offenseList.size(), 4);
        for (int x = 0; x < to; x++) {
            ret.append(StringUtil.makeEnumHumanReadable(offenseList.get(x).getOffense().name()));
            ret.append(": ");
            ret.append(offenseList.get(x).getCount());
            if (x != to - 1) {
                ret.append(" ");
            }
        }
        return ret.toString();
    }

    public final void dispose() {
        if (invalidationTask != null) {
            invalidationTask.cancel(false);
        }
        invalidationTask = null;

    }

    private final class InvalidationTask implements Runnable {

        @Override
        public final void run() {
            CheatingOffenseEntry[] offenses_copy;
            rL.lock();
            try {
                offenses_copy = offenses.values().toArray(new CheatingOffenseEntry[offenses.size()]);
            } finally {
                rL.unlock();
            }
            for (CheatingOffenseEntry offense : offenses_copy) {
                if (offense.isExpired()) {
                    expireEntry(offense);
                }
            }
            if (chr.get() == null) {
                dispose();
            }
        }
    }

    /**
     * 检测是否能保存角色数据 只针对 PLAYER_UPDATE 这个封包 设置3分钟保存 以免频繁的保存数据
     */
    public boolean canSaveDB() {
        if (lastSaveTime + 3 * 60 * 1000 > System.currentTimeMillis() && chr.get() != null) {
            return false;
        }
        lastSaveTime = System.currentTimeMillis();
        return true;
    }

    public int getlastSaveTime() {
        if (lastSaveTime <= 0) {
            lastSaveTime = System.currentTimeMillis();
        }
        int seconds = (int) (((lastSaveTime + (3 * 60 * 1000)) - System.currentTimeMillis()) / 1000);
        return seconds;
    }

    public int getlastLieTime() {
        return (int) ((System.currentTimeMillis() - this.lastLieTime) / 1000);
    }

    public boolean canLieDetector() {
        if ((this.lastLieDetectorTime + 300000 > System.currentTimeMillis()) && (this.chr.get() != null)) {
            return false;
        }
        this.lastLieDetectorTime = System.currentTimeMillis();
        return true;
    }

    public void resetInMapIimeCount() {
        this.inMapIimeCount = 0;
    }
}
