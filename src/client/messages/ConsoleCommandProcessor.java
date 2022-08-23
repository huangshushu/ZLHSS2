/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package client.messages;

import client.messages.commands.ConsoleCommand;
import client.messages.commands.ConsoleCommandExecute;
import client.messages.commands.ConsoleCommandObject;
import tools.FilePrinter;

import java.lang.reflect.Modifier;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;


public class ConsoleCommandProcessor {

    private final static HashMap<String, ConsoleCommandObject> commands = new HashMap<>();

    static {

        Class<?>[] CommandFiles = {
                ConsoleCommand.class
        };

        for (Class<?> clasz : CommandFiles) {
            try {
                Class<?>[] a = clasz.getDeclaredClasses();
                ArrayList<String> cL = new ArrayList<>();
                for (Class<?> c : a) {
                    try {
                        if (!Modifier.isAbstract(c.getModifiers()) && !c.isSynthetic()) {
                            Object o = c.newInstance();
                            boolean enabled;
                            try {
                                enabled = c.getDeclaredField("enabled").getBoolean(c.getDeclaredField("enabled"));
                            } catch (NoSuchFieldException ex) {
                                enabled = true; // Enable all coded commands by default.
                            }
                            if (o instanceof ConsoleCommandExecute && enabled) {
                                cL.add(c.getSimpleName().toLowerCase());
                                commands.put(c.getSimpleName().toLowerCase(), new ConsoleCommandObject(
                                        c.getSimpleName().toLowerCase(), (ConsoleCommandExecute) o));
                            }
                        }
                    } catch (InstantiationException | IllegalAccessException | SecurityException
                             | IllegalArgumentException ex) {
                        FilePrinter.printError(FilePrinter.ConsoleCommandProcessor, ex);
                    }
                }
                Collections.sort(cL);
            } catch (Exception ex) {
                FilePrinter.printError(FilePrinter.ConsoleCommandProcessor, ex);
            }
        }
    }

    private static void sendDisplayMessage(String msg) {
        System.err.println("[sendDisplayMessage]错误:" + msg);
    }

    public static boolean processCommand(String line) {
        String[] splitted = line.split(" ");
        splitted[0] = splitted[0].toLowerCase();

        ConsoleCommandObject co = commands.get(splitted[0]);
        if (co == null) {
            sendDisplayMessage("没有这个指令.");
            return true;
        }

        int ret = co.execute(splitted);

        return true;

    }

}
