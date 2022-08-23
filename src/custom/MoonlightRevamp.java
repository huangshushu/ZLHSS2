package custom;

public class MoonlightRevamp {

    public static final boolean MoonlightRevamp = false;
    public static final int Part = 1; // The revamp has two parts.
    // Etc
    public static final int coin = 4310008; // Moonlight Coin
    // Monsters
    public static final byte monsterHpDivision = 1; // mob's hp / 2
    // public static final byte PDRateAddition = 50; // +50% weapon def
    // public static final byte BossPDRateMultipy = 2; //2x weapon def
    // public static final byte MDRateAddition = 50; // +50% magic def
    // public static final byte BossMDRateMultipy = 2; //2x magic def
    public static final int monsterSpawn = 1; // 2 monsters in one spawn point instead of one

    public static byte getPDRateAddition(final byte current) {
        return current <= 10 ? 20 : current <= 30 ? 50 : current;
    }

    public static byte getBossPDRateMultipy(final byte current) {
        return current <= 30 ? 50 : current <= 50 ? 70 : current;
    }

    public static byte getMDRateAddition(final byte current) {
        return current <= 10 ? 20 : current <= 30 ? 50 : current;
    }

    public static byte getBossMDRateMultipy(final byte current) {
        return current <= 30 ? 50 : current <= 50 ? 70 : current;
    }

    // Shop
    public static final int shopNpc = 9010040; // Conor
    public static final int shopId = 12212012; // random id

    public enum MoonlightShop {

        // Example: letter(shopitemid, shopid, itemid, price, position, requiered item,
        // requiered item quantity, rank, how many in a bundle, tab, minimum level to
        // buy, expirates in)
        // ITEM_1(1, shopId, 1003151, 0, coin, 30, (byte) 0, 0, 0, 0, 0),
        // ITEM_2(2, shopId, 1050209, 0, coin, 15, (byte) 0, 0, 0, 0, 0),
        // ITEM_3(3, shopId, 1051255, 0, coin, 15, (byte) 0, 0, 0, 0, 0),
        // ITEM_4(4, shopId, 1102311, 0, coin, 20, (byte) 0, 0, 0, 0, 0),
        // ITEM_5(5, shopId, 1142250, 0, coin, 20, (byte) 0, 0, 0, 0, 0),
        // ITEM_6(6, shopId, 2002039, 0, coin, 2, (byte) 0, 0, 0, 0, 0),
        // ITEM_7(7, shopId, 2002040, 0, coin, 2, (byte) 0, 0, 0, 0, 0),
        // ITEM_8(8, shopId, 2049301, 0, coin, 8, (byte) 0, 0, 0, 0, 0),
        // ITEM_9(9, shopId, 2049300, 0, coin, 12, (byte) 0, 0, 0, 0, 0),
        // ITEM_10(10, shopId, 2049401, 0, coin, 6, (byte) 0, 0, 0, 0, 0),
        // ITEM_11(11, shopId, 2049400, 0, coin, 8, (byte) 0, 0, 0, 0, 0),
        // ITEM_12(12, shopId, 2049100, 0, coin, 6, (byte) 0, 0, 0, 0, 0),
        // ITEM_13(13, shopId, 3700015, 0, coin, 5, (byte) 0, 0, 0, 0, 0),
        // ITEM_14(14, shopId, 4032041, 0, coin, 5, (byte) 0, 0, 0, 0, 0),
        ;
        private final byte rank;
        private final int position, shopid, itemid, price, reqitem, reqitemq, buyable, category, minlevel, expiration;

        MoonlightShop(int position, int shopid, int itemid, int price, int reqitem, int reqitemq, byte rank,
                      int buyable, int category, int minlevel, int expiration) {
            this.shopid = shopid;
            this.itemid = itemid;
            this.price = price;
            this.position = position;
            this.reqitem = reqitem;
            this.reqitemq = reqitemq;
            this.rank = rank;
            this.buyable = buyable;
            this.category = category;
            this.minlevel = minlevel;
            this.expiration = expiration;
        }

        public int getPosition() {
            return position;
        }

        public int getShopId() {
            return shopid;
        }

        public int getItemId() {
            return itemid;
        }

        public int getPrice() {
            return price;
        }

        public int getReqItem() {
            return reqitem;
        }

        public int getReqItemQ() {
            return reqitemq;
        }

        public byte getRank() {
            return rank;
        }

        public int getBuyable() {
            return buyable;
        }

        public int getCategory() {
            return category;
        }

        public int getMinLevel() {
            return minlevel;
        }

        public int getExpiration() {
            return expiration;
        }
    }
}
