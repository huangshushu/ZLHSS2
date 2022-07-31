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
package scripting;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.WeakHashMap;
import java.util.concurrent.locks.Lock;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptException;

import client.MapleClient;
import server.quest.MapleQuest;
import tools.FilePrinter;
import tools.MaplePacketCreator;

public class NPCScriptManager extends AbstractScriptManager {

    private final Map<MapleClient, NPCConversationManager> cms = new WeakHashMap<>();
    private static final NPCScriptManager instance = new NPCScriptManager();

    public static final NPCScriptManager getInstance() {
        return instance;
    }

    public final void start(final MapleClient c, final int npc) {
        start(c, npc, null);
    }

    public final void start(final MapleClient c, final int npc, final int mode) {
        start(c, npc, mode, null);
    }

    public final void start(final MapleClient c, final int npc, String script) {
        start(c, npc, 0, script);
    }

    public final void start(final MapleClient c, final int npc, final int mode, String script) {
        final Lock lock = c.getNPCLock();
        lock.lock();
        try {
            if (c.getPlayer().getMapId() == 180000001) {
                return;
            }
            if (c.getPlayer().isGM()) {
                c.getPlayer().dropMessage("[系统提示]您已经建立与NPC:" + npc + (script == null ? "" : ("(" + script + ")"))
                        + (mode == 0 ? "" : "型号: " + mode) + "的对话。");
            }

            if (!cms.containsKey(c) && c.canClickNPC()) {
                if (c.getPlayer() != null && c.getPlayer().getDebugMessage()) {
                    c.getPlayer().dropMessage("start - !cms.containsKey(c) && c.canClickNPC()");
                }
                Invocable iv;
                if (c.getPlayer() != null && c.getPlayer().getDebugMessage()) {
                    c.getPlayer().dropMessage("start - setInvocable");
                }
                if (script == null) {
                    if (mode != 0) {
                        iv = getInvocable("npc/" + npc + "_" + mode + ".js", c, true); // safe disposal
                    } else {
                        iv = getInvocable("npc/" + npc + ".js", c, true); // safe disposal
                    }
                } else {
                    iv = getInvocable("special/" + script + ".js", c, true); // safe disposal
                }

                if (iv == null) {
                    iv = getInvocable("special/notcoded.js", c, true); // safe disposal
                    if (iv == null) {
                        dispose(c);
                        return;
                    }
                }
                final ScriptEngine scriptengine = (ScriptEngine) iv;
                if (c.getPlayer() != null && c.getPlayer().getDebugMessage()) {
                    c.getPlayer().dropMessage("start - iv");
                }
                final NPCConversationManager cm = new NPCConversationManager(c, npc, -1, mode, script, (byte) -1, iv);
                if (c.getPlayer() != null && c.getPlayer().getDebugMessage()) {
                    c.getPlayer().dropMessage("start - cm");
                }
                if (getInstance() == null) {
                    if (c.getPlayer() != null && c.getPlayer().getDebugMessage()) {
                        c.getPlayer().dropMessage("start = null");
                    }
                    dispose(c);
                    return;
                }

                cms.put(c, cm);
                if (c.getPlayer() != null && c.getPlayer().getDebugMessage()) {
                    c.getPlayer().dropMessage("start - cms");
                }
                scriptengine.put("cm", cm);
                if (c.getPlayer() != null) {
                    c.getPlayer().setConversation(1);
                }
                if (c.getPlayer() != null && c.getPlayer().getDebugMessage()) {
                    c.getPlayer().dropMessage("start - setConversation");
                }
                c.setClickedNPC();
                if (c.getPlayer() != null && c.getPlayer().getDebugMessage()) {
                    c.getPlayer().dropMessage("start - setClickNPC");
                }
                try {
                    iv.invokeFunction("start"); // Temporary until I've removed all of start
                    if (c.getPlayer() != null && c.getPlayer().getDebugMessage()) {
                        c.getPlayer().dropMessage("start - cms");
                    }
                } catch (NoSuchMethodException nsme) {
                    iv.invokeFunction("action", (byte) 1, (byte) 0, 0);
                }
            } else if (c.getPlayer() != null) {
                // c.getPlayer().dropMessage(5, "你现在不能攻击或不能跟npc对话,请在对话框打 @解卡/@ea 来解除异常状态");
                c.sendPacket(MaplePacketCreator.enableActions());// 解卡
                NPCScriptManager.getInstance().dispose(c);
                // c.getPlayer().dropMessage(5, "NPC正忙，请稍后再试.");
            }

        } catch (final ScriptException | NoSuchMethodException e) {
            System.err.println("NPC 脚本错误, 它ID为 : " + npc + "." + e);
            if (c.getPlayer() != null) {
                if (c.getPlayer().isGM()) {
                    c.getPlayer().dropMessage("[系统提示] NPC " + npc + "脚本错误 " + e + "");
                }
            }
            FilePrinter.printError("NPCScriptManager.txt", "Error executing NPC script, NPC ID : " + npc + "." + e);
            dispose(c);
        } finally {
            lock.unlock();
        }
    }

    public final void action(final MapleClient c, final byte mode, final byte type, final int selection) {
        if (mode != -1) {
            final NPCConversationManager cm = cms.get(c);
            if (cm == null || cm.getLastMsg() > -1) {
                return;
            }
            final Lock lock = c.getNPCLock();
            lock.lock();
            try {

                if (cm.pendingDisposal) {
                    dispose(c);
                } else {
                    c.setClickedNPC();
                    cm.getIv().invokeFunction("action", mode, type, selection);
                }
            } catch (final ScriptException | NoSuchMethodException e) {
                if (c.getPlayer() != null) {
                    if (c.getPlayer().isGM()) {
                        c.getPlayer().dropMessage("[系统提示] NPC " + cm.getNpc() + "脚本错误 " + e + "");
                    }
                }
                System.err.println("NPC 脚本错误. 它ID为 : " + cm.getNpc() + ":" + e);
                FilePrinter.printError("NPCScriptManager.txt",
                        "Error executing NPC script, NPC ID : " + cm.getNpc() + "." + e);
                dispose(c);
            } finally {
                lock.unlock();
            }
        }
    }

    public final void startQuest(final MapleClient c, final int npc, final int quest) {
        if (!MapleQuest.getInstance(quest).canStart(c.getPlayer(), null)) {
            return;
        }
        final Lock lock = c.getNPCLock();
        lock.lock();
        try {
            if (!cms.containsKey(c) && c.canClickNPC()) {
                final Invocable iv = getInvocable("quest/" + quest + ".js", c, true);
                if (iv == null) {
                    c.getPlayer().dropMessage(1, "此任务尚未建置，请通知管理员。\r\n任务编号: " + quest);
                    dispose(c);
                    return;
                }
                final ScriptEngine scriptengine = (ScriptEngine) iv;
                final NPCConversationManager cm = new NPCConversationManager(c, npc, quest, 0, null, (byte) 0, iv);
                cms.put(c, cm);
                scriptengine.put("qm", cm);

                c.getPlayer().setConversation(1);
                c.setClickedNPC();
                if (c.getPlayer().isGM()) {
                    c.getPlayer().dropMessage("[系统提示]您已经建立与任务脚本:" + quest + "的往来。");
                }
                // System.out.println("NPCID started: " + npc + " startquest " + quest);
                iv.invokeFunction("start", (byte) 1, (byte) 0, 0); // start it off as something
            } else {
                // c.getPlayer().dropMessage(-1, "You already are talking to an NPC. Use @ea if
                // this is not intended.");
            }
        } catch (final ScriptException | NoSuchMethodException e) {
            System.err.println("Error executing Quest script. (" + quest + ")..NPCID: " + npc + ":" + e);
            FilePrinter.printError("NPCScriptManager.txt",
                    "Error executing Quest script. (" + quest + ")..NPCID: " + npc + ":" + e);
            dispose(c);
        } finally {
            lock.unlock();
        }
    }

    public final void startQuest(final MapleClient c, final byte mode, final byte type, final int selection) {
        final Lock lock = c.getNPCLock();
        final NPCConversationManager cm = cms.get(c);
        if (cm == null || cm.getLastMsg() > -1) {
            return;
        }
        lock.lock();
        try {
            if (cm.pendingDisposal) {
                dispose(c);
            } else {
                c.setClickedNPC();
                cm.getIv().invokeFunction("start", mode, type, selection);
            }
        } catch (ScriptException | NoSuchMethodException e) {
            if (c.getPlayer().isGM()) {
                c.getPlayer().dropMessage("[系统提示]任务脚本:" + cm.getQuest() + "错误...NPC: " + cm.getNpc() + ":" + e);
            }
            System.err.println("Error executing Quest script. (" + cm.getQuest() + ")...NPC: " + cm.getNpc() + ":" + e);
            FilePrinter.printError("NPCScriptManager.txt",
                    "Error executing Quest script. (" + cm.getQuest() + ")..NPCID: " + cm.getNpc() + ":" + e);
            dispose(c);
        } finally {
            lock.unlock();
        }
    }

    public final void endQuest(final MapleClient c, final int npc, final int quest, final boolean customEnd) {
        if (!customEnd && !MapleQuest.getInstance(quest).canComplete(c.getPlayer(), null)) {
            return;
        }
        final Lock lock = c.getNPCLock();
        // final NPCConversationManager cm = cms.get(c);
        lock.lock();
        try {
            if (!cms.containsKey(c) && c.canClickNPC()) {
                final Invocable iv = getInvocable("quest/" + quest + ".js", c, true);
                if (iv == null) {
                    dispose(c);
                    return;
                }
                final ScriptEngine scriptengine = (ScriptEngine) iv;
                final NPCConversationManager cm = new NPCConversationManager(c, npc, quest, 0, null, (byte) 1, iv);
                cms.put(c, cm);
                scriptengine.put("qm", cm);

                c.getPlayer().setConversation(1);
                c.setClickedNPC();
                // System.out.println("NPCID started: " + npc + " endquest " + quest);
                iv.invokeFunction("end", (byte) 1, (byte) 0, 0); // start it off as something
            } else {
                // c.getPlayer().dropMessage(-1, "You already are talking to an NPC. Use @ea if
                // this is not intended.");
            }
        } catch (ScriptException | NoSuchMethodException e) {
            if (c.getPlayer().isGM()) {
                c.getPlayer().dropMessage("[系统提示]任务脚本:" + quest + "错误...NPC: " + quest + ":" + e);
            }
            System.err.println("Error executing Quest script. (" + quest + ")..NPCID: " + npc + ":" + e);
            FilePrinter.printError("NPCScriptManager.txt",
                    "Error executing Quest script. (" + quest + ")..NPCID: " + npc + ":" + e);
            dispose(c);
        } finally {
            lock.unlock();
        }
    }

    public final void endQuest(final MapleClient c, final byte mode, final byte type, final int selection) {
        final Lock lock = c.getNPCLock();
        final NPCConversationManager cm = cms.get(c);
        if (cm == null || cm.getLastMsg() > -1) {
            return;
        }
        lock.lock();
        try {
            if (cm.pendingDisposal) {
                dispose(c);
            } else {
                c.setClickedNPC();
                cm.getIv().invokeFunction("end", mode, type, selection);
            }
        } catch (ScriptException | NoSuchMethodException e) {
            if (c.getPlayer().isGM()) {
                c.getPlayer().dropMessage("[系统提示]任务脚本:" + cm.getQuest() + "错误...NPC: " + cm.getNpc() + ":" + e);
            }
            System.err.println("Error executing Quest script. (" + cm.getQuest() + ")...NPC: " + cm.getNpc() + ":" + e);
            FilePrinter.printError("NPCScriptManager.txt",
                    "Error executing Quest script. (" + cm.getQuest() + ")..NPCID: " + cm.getNpc() + ":" + e);
            dispose(c);
        } finally {
            lock.unlock();
        }
    }

    public final void dispose(final MapleClient c) {
        final NPCConversationManager npccm = cms.get(c);
        if (npccm != null) {
            cms.remove(c);
            if (npccm.getType() == -1) {
                c.removeScriptEngine("scripts/npc/" + npccm.getNpc() + ".js");
                if (npccm.getMode() != 0) {
                    c.removeScriptEngine("scripts/npc/" + npccm.getNpc() + "_" + npccm.getMode() + ".js");
                }
                c.removeScriptEngine("scripts/special/" + npccm.getScript() + ".js");
                c.removeScriptEngine("scripts/special/notcoded.js");
            } else {
                c.removeScriptEngine("scripts/quest/" + npccm.getQuest() + ".js");
            }
        }
        if (c.getPlayer() != null && c.getPlayer().getConversation() == 1) {
            c.getPlayer().setConversation(0);
        }
    }

    public final NPCConversationManager getCM(final MapleClient c) {
        return cms.get(c);
    }

    public final void cleanCMS() {
        List<MapleClient> clients = new ArrayList();
        for (MapleClient c : cms.keySet()) {
            if (c == null || c.getSession() == null || !c.getSession().isActive()) {
                clients.add(c);
            }
        }
        for (MapleClient c : clients) {
            cms.remove(c);
        }
    }
}
