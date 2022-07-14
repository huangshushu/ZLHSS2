/*
 This file is part of the OdinMS Maple Story Server
 Copyright (C) 2008 ~ 2010 Patrick Huy <patrick.huy@frz.cc> 
 Matthias Butz <matze@odinms.de>
 Jan Christian Meyer <vimes@odinms.de>

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License version 3
 as published by the Free Software Foundation. You may not use, modify
 or distribute this program under any other version of the
 GNU Affero General Public License.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package client.status;

import java.lang.ref.WeakReference;
import java.util.TimerTask;

import client.MapleCharacter;
import server.life.MapleMonster;
import server.life.MobSkill;

public class MonsterStatusEffect {

    private MonsterStatus stati;
    private final int skill;
    private final MobSkill mobskill;
    private final boolean monsterSkill;
    private WeakReference<MapleCharacter> weakChr = null;
    private Integer x;
    private int poisonDamage = 0;
    private boolean reflect = false;
    private long cancelTime = 0;
    private long dotTime = 0;
    private boolean newpoison = true;
    private boolean ignoreBoss = false;

    public MonsterStatusEffect(final MonsterStatus stat, final Integer x, final int skillId, final MobSkill mobskill,
            final boolean monsterSkill) {
        this.stati = stat;
        this.skill = skillId;
        this.monsterSkill = monsterSkill;
        this.mobskill = mobskill;
        this.x = x;
    }

    public MonsterStatusEffect(final MonsterStatus stat, final Integer x, final int skillId, final MobSkill mobskill,
            final boolean monsterSkill, final boolean reflect) {
        this.stati = stat;
        this.skill = skillId;
        this.monsterSkill = monsterSkill;
        this.mobskill = mobskill;
        this.x = x;
        this.reflect = reflect;
    }

    public boolean isIgnoreBoss() {
        return ignoreBoss;
    }

    public void setIgnoreBoss(boolean ignoreBoss) {
        this.ignoreBoss = ignoreBoss;
    }

    public final MonsterStatus getStatus() {
        return stati;
    }

    public WeakReference<MapleCharacter> getchr() {
        return this.weakChr;
    }

    public void setX(int x) {
        this.x = x;
    }

    public final Integer getX() {
        return x;
    }

    public final void setValue(final MonsterStatus status, final Integer newVal) {
        stati = status;
        x = newVal;
    }

    public final int getSkill() {
        return skill;
    }

    public final MobSkill getMobSkill() {
        return mobskill;
    }

    public final boolean isMonsterSkill() {
        return monsterSkill;
    }

    public final void setCancelTask(final long cancelTask) {
        this.cancelTime = System.currentTimeMillis() + cancelTask;
    }

    public final long getCancelTask() {
        return this.cancelTime;
    }

    public void setnewpoison(boolean s) {
        this.newpoison = s;
    }

    public void setDotTime(long duration) {
        this.dotTime = duration;
    }

    public long getDotTime() {
        return this.dotTime;
    }

    public final void setPoisonDamage(final int poisonDamage, MapleCharacter chrr) {
        this.poisonDamage = poisonDamage;
        this.weakChr = new WeakReference<>(chrr);
    }

    public final int getPoisonDamage() {
        return this.poisonDamage;
    }

    public final boolean shouldCancel() {
        return (cancelTime > 0 && cancelTime <= System.currentTimeMillis());
    }

    public final void cancelTask() {
        cancelTime = 0;
    }

    public final boolean isReflect() {
        return reflect;
    }

    public final int getFromID() {
        return weakChr == null || weakChr.get() == null ? 0 : weakChr.get().getId();
    }

    public final void cancelPoisonSchedule(MapleMonster mm) {
        mm.doPoison(this, weakChr);
        this.poisonDamage = 0;
        this.weakChr = null;
    }

    public void scheduledoPoison(final MapleMonster mon) {
        final java.util.Timer timer = new java.util.Timer(true);
        final long time = System.currentTimeMillis();
        final MonsterStatusEffect eff = this;
        if (newpoison) {
            TimerTask task = new TimerTask() {
                @Override
                public void run() {
                    if (time + getDotTime() > System.currentTimeMillis() && mon.isAlive()) {
                        // 每次需要执行的代码放到这里面。
                        // if (weakChr.get().isAdmin()) {
                        // weakChr.get().dropMessage(6, "[持续伤害] 持续伤害");
                        // }
                        setnewpoison(false);
                        mon.doPoison(eff, weakChr);
                    } else {
                        setnewpoison(true);
                        // cancelPoisonSchedule(mon);
                        timer.cancel();
                    }
                }
            };
            timer.schedule(task, 0, 1000);
        }
    }

    public static int genericSkill(MonsterStatus stat) {
        switch (stat) {
            case STUN:
                return 90001001;
            case SPEED:
                return 90001002;
            case POISON:
                return 90001003;
            case DARKNESS:
                return 90001004;
            case SEAL:
                return 90001005;
            case FREEZE:
                return 90001006;
            case MAGIC_CRASH:
                return 1111007;
            case SHOWDOWN:
                return 4121003;
            case IMPRINT:
                return 22161002;
            case SHADOW_WEB:
                return 4111003;
            case VENOMOUS_WEAPON:
                return 5211004;
            case DOOM: // not used
                return 2311005;
            case NINJA_AMBUSH: // not used
                return 4121004;
        }
        return 0;
    }
}
