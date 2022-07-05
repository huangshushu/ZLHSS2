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
package handling.channel.handler;

import client.MapleCharacter;
import client.MapleClient;
//import net.sf.odinms.server.Randomizer;
import client.MapleDisease;
import java.util.List;
import server.MapleCarnivalFactory;
import server.MapleCarnivalFactory.MCSkill;
import server.Randomizer;
import server.life.MapleLifeFactory;
import server.life.MapleMonster;
import tools.MaplePacketCreator;
import tools.Pair;
import tools.data.LittleEndianAccessor;
import tools.packet.MonsterCarnivalPacket;

public class MonsterCarnivalHandler {

    public static final void MonsterCarnival(final LittleEndianAccessor slea, final MapleClient c) {
        if (c.getPlayer().getCarnivalParty() == null) {
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }
        final int tab = slea.readByte();
        final int num = slea.readInt();

        switch (tab) {
            case 0:
                final List<Pair<Integer, Integer>> mobs = c.getPlayer().getMap().getMobsToSpawn();
                if (num >= mobs.size() || c.getPlayer().getAvailableCP() < mobs.get(num).right) {
                    c.getPlayer().dropMessage(5, "你没有足够的 CP.");
                    c.sendPacket(MaplePacketCreator.enableActions());
                    return;
                }
                final MapleMonster mons = MapleLifeFactory.getMonster(mobs.get(num).left);
                if (mons != null && c.getPlayer().getMap().makeCarnivalSpawn(c.getPlayer().getCarnivalParty().getTeam(), mons, num)) {
                    c.getPlayer().getCarnivalParty().useCP(c.getPlayer(), mobs.get(num).right);
                    c.getPlayer().CPUpdate(false, c.getPlayer().getAvailableCP(), c.getPlayer().getTotalCP(), 0);
                    for (MapleCharacter chr : c.getPlayer().getMap().getCharactersThreadsafe()) {
                        chr.CPUpdate(true, c.getPlayer().getCarnivalParty().getAvailableCP(), c.getPlayer().getCarnivalParty().getTotalCP(), c.getPlayer().getCarnivalParty().getTeam());
                    }
                    c.getPlayer().getMap().broadcastMessage(MonsterCarnivalPacket.playerSummoned(c.getPlayer().getName(), tab, num));
                    c.sendPacket(MaplePacketCreator.enableActions());
                } else {
                    c.getPlayer().dropMessage(5, "你不可以在召唤怪物。");
                    c.sendPacket(MaplePacketCreator.enableActions());
                }
                break;
            case 1: {
                //debuff
                final List<Integer> skillid = c.getPlayer().getMap().getSkillIds();
                if (num >= skillid.size()) {
                    c.getPlayer().dropMessage(5, "未知的错误");
                    c.sendPacket(MaplePacketCreator.enableActions());
                    return;
                }
                final MCSkill skil = MapleCarnivalFactory.getInstance().getSkill(skillid.get(num)); //ugh wtf
                if (skil == null || c.getPlayer().getAvailableCP() < skil.cpLoss) {
                    c.getPlayer().dropMessage(5, "你没有足够的 CP.");
                    c.sendPacket(MaplePacketCreator.enableActions());
                    return;
                }
                final MapleDisease dis = skil.getDisease();
                boolean found = false;
                for (MapleCharacter chr : c.getPlayer().getMap().getCharactersThreadsafe()) {
                    if (chr.getParty() == null || (c.getPlayer().getParty() != null && chr.getParty().getId() != c.getPlayer().getParty().getId())) {
                        if (skil.targetsAll || Randomizer.nextBoolean()) {
                            found = true;
                            if (dis == null) {
                                chr.dispel();
                            } else if (skil.getMobSkill() == null) {
                                chr.getDiseaseBuff(dis, 1, 30000, MapleDisease.getByDisease(dis), 1);
                            } else {
                                chr.getDiseaseBuff(dis, skil.getMobSkill());
                            }
                            if (!skil.targetsAll) {
                                break;
                            }
                        }
                    }
                }
                if (found) {
                    c.getPlayer().getCarnivalParty().useCP(c.getPlayer(), skil.cpLoss);
                    c.getPlayer().CPUpdate(false, c.getPlayer().getAvailableCP(), c.getPlayer().getTotalCP(), 0);
                    for (MapleCharacter chr : c.getPlayer().getMap().getCharactersThreadsafe()) {
                        chr.CPUpdate(true, c.getPlayer().getCarnivalParty().getAvailableCP(), c.getPlayer().getCarnivalParty().getTotalCP(), c.getPlayer().getCarnivalParty().getTeam());
                        //chr.dropMessage(5, "[" + (c.getPlayer().getCarnivalParty().getTeam() == 0 ? "Red" : "Blue") + "] " + c.getPlayer().getName() + " has used a skill. [" + dis.name() + "].");
                    }
                    c.getPlayer().getMap().broadcastMessage(MonsterCarnivalPacket.playerSummoned(c.getPlayer().getName(), tab, num));
                    c.sendPacket(MaplePacketCreator.enableActions());
                } else {
                    c.getPlayer().dropMessage(5, "未知的错误.");
                    c.sendPacket(MaplePacketCreator.enableActions());
                }
                break;
            }
            case 2: {
                //skill
                final MCSkill skil = MapleCarnivalFactory.getInstance().getGuardian(num);
                if (skil == null || c.getPlayer().getAvailableCP() < skil.cpLoss) {
                    c.getPlayer().dropMessage(5, "你没有足够的 CP.");
                    c.sendPacket(MaplePacketCreator.enableActions());
                    return;
                }
                if (c.getPlayer().getMap().makeCarnivalReactor(c.getPlayer().getCarnivalParty().getTeam(), num)) {
                    c.getPlayer().getCarnivalParty().useCP(c.getPlayer(), skil.cpLoss);
                    c.getPlayer().CPUpdate(false, c.getPlayer().getAvailableCP(), c.getPlayer().getTotalCP(), 0);
                    for (MapleCharacter chr : c.getPlayer().getMap().getCharactersThreadsafe()) {
                        chr.CPUpdate(true, c.getPlayer().getCarnivalParty().getAvailableCP(), c.getPlayer().getCarnivalParty().getTotalCP(), c.getPlayer().getCarnivalParty().getTeam());
                    }
                    c.getPlayer().getMap().broadcastMessage(MonsterCarnivalPacket.playerSummoned(c.getPlayer().getName(), tab, num));
                    c.sendPacket(MaplePacketCreator.enableActions());
                } else {
                    c.getPlayer().dropMessage(5, "你不可以在召唤。");
                    c.sendPacket(MaplePacketCreator.enableActions());
                }
                break;
            }
            default:
                break;
        }

    }
}
