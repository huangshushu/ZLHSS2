package server;

public class StructRewardItem {

    private int itemid;
    private long period;
    private short prob, quantity;
    private String effect, worldmsg;

    public int getItemid() {
        return itemid;
    }

    public void setItemid(int itemid) {
        this.itemid = itemid;
    }

    public long getPeriod() {
        return period;
    }

    public void setPeriod(long period) {
        this.period = period;
    }

    public short getProb() {
        return prob;
    }

    public void setProb(short prob) {
        this.prob = prob;
    }

    public short getQuantity() {
        return quantity;
    }

    public void setQuantity(short quantity) {
        this.quantity = quantity;
    }

    public String getEffect() {
        return effect;
    }

    public void setEffect(String effect) {
        this.effect = effect;
    }

    public String getWorldmsg() {
        return worldmsg;
    }

    public void setWorldmsg(String worldmsg) {
        this.worldmsg = worldmsg;
    }

}
