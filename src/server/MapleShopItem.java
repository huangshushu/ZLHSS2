package server;

public class MapleShopItem {

    private final short buyable;
    private final int itemId;
    private final int price;
    private final int reqItem;
    private final int reqItemQ;

    public MapleShopItem(short buyable, int itemId, int price, int reqItem, int reqItemQ) {
        this.buyable = buyable;
        this.itemId = itemId;
        this.price = price;
        this.reqItem = reqItem;
        this.reqItemQ = reqItemQ;
    }

    public short getBuyable() {
        return buyable;
    }

    public int getItemId() {
        return itemId;
    }

    public int getPrice() {
        return price;
    }

    public int getReqItem() {
        return reqItem;
    }

    public int getReqItemQ() {
        return reqItemQ;
    }
}
