/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package server.gashapon;

/**
 *
 * @author TEST
 */
public class GashaponReward {

    private final int itemid;
    private final int chance;
    private final int quantity;
    private final boolean showMsg;

    public GashaponReward(final int itemid, final int chance, final boolean showMsg, final int quantity) {
        this.itemid = itemid;
        this.chance = chance;
        this.showMsg = showMsg;
        this.quantity = quantity;
    }

    public int getChance() {
        return this.chance;
    }

    public int getItemId() {
        return this.itemid;
    }

    public boolean canShowMsg() {
        return this.showMsg;
    }

    public int getQuantity() {
        return this.quantity;
    }

}
