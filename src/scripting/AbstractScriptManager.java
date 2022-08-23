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

import client.MapleClient;
import tools.EncodingDetect;
import tools.FilePrinter;
import tools.MaplePacketCreator;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.io.*;
import java.util.stream.Collectors;

/**
 * @author Matze
 */
public abstract class AbstractScriptManager {

    private static final ScriptEngineManager sem = new ScriptEngineManager();

    protected Invocable getInvocable(String path, MapleClient c) {
        return getInvocable(path, c, false);
    }

    protected Invocable getInvocable(String path, MapleClient c, boolean npc) {
        path = "scripts/" + path;
        ScriptEngine engine = null;

        if (c != null) {
            engine = c.getScriptEngine(path);
        }
        if (engine == null) {
            File scriptFile = new File(path);
            if (!scriptFile.exists()) {
                return null;
            }
            if (c != null && c.getPlayer() != null) {
                if (c.getPlayer().getDebugMessage()) {
                    c.getPlayer().dropMessage("getInvocable - Part1");
                }
            }
            engine = sem.getEngineByName("javascript");
            if (c != null && c.getPlayer() != null) {
                if (c.getPlayer().getDebugMessage()) {
                    c.getPlayer().dropMessage("getInvocable - Part2");
                }
            }
            if (c != null) {
                c.setScriptEngine(path, engine);
                if (c != null && c.getPlayer() != null) {
                    if (c.getPlayer().getDebugMessage()) {
                        c.getPlayer().dropMessage("getInvocable - Part3");
                    }
                }
            }
            InputStream in = null;
            try {
                in = new FileInputStream(scriptFile);
                if (c != null && c.getPlayer() != null) {
                    if (c.getPlayer().getDebugMessage()) {
                        c.getPlayer().dropMessage("getInvocable - Part4");
                    }
                }
                try (BufferedReader bf = new BufferedReader(
                        new InputStreamReader(in, EncodingDetect.getJavaEncode(scriptFile)))) {
                    String lines = "load('nashorn:mozilla_compat.js');"
                            + bf.lines().collect(Collectors.joining(System.lineSeparator()));
                    engine.eval(lines);
                }
                if (c != null && c.getPlayer() != null) {
                    if (c.getPlayer().getDebugMessage()) {
                        c.getPlayer().dropMessage("getInvocable - Part5");
                    }
                }
            } catch (ScriptException | IOException e) {
                FilePrinter.printError("AbstractScriptManager.txt",
                        "Error executing script. Path: " + path + "\nException " + e);
                return null;
            } finally {
                try {
                    if (in != null) {
                        in.close();
                    }
                } catch (IOException ignore) {
                }
            }
        } else if (c != null && npc) {
            // c.getPlayer().dropMessage(5, "你现在不能攻击或不能跟npc对话,请在对话框打 @解卡/@ea 来解除异常状态");
            c.sendPacket(MaplePacketCreator.enableActions());// 解卡
            NPCScriptManager.getInstance().dispose(c);
        }
        return (Invocable) engine;
    }
}
