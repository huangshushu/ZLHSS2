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
public abstract class ConsoleCommandExecute {

    /**
     * The method executed when this command is used.
     *
     *
     * @param paramArrayOfString
     * @return 1 if you want to log the command, 0 if not. TODO: USE
     * {@link #ReturnValue}
     */
    public abstract int execute(String[] paramArrayOfString);
    //1 = Success
    //0 = Something Went Wrong

}
