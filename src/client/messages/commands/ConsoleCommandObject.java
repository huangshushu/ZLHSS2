/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package client.messages.commands;

/**
 *
 * @author Flower
 */
public class ConsoleCommandObject {

    /**
     * the command
     */
    private final String command;
    /**
     * what {@link MapleCharacter#gm} level is required to use this command
     */

    private final ConsoleCommandExecute exe;

    public ConsoleCommandObject(String com, ConsoleCommandExecute c) {
        command = com;
        exe = c;
    }

    /**
     * Call this to apply this command to the specified {@link MapleClient} with
     * the specified arguments.
     *
     * @param splitted the arguments
     * @return See {@link CommandExecute#execute}
     */
    public int execute(String[] splitted) {
        return exe.execute(splitted);
    }

}
