/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package custom;

/**
 *
 * @author Itzik
 */
public class CustomShop {

    public static final boolean active = true;
    public static final int shopId = 15739;
    public static final int shopNpc = 2159337;

    public static enum CustomShopData {

        I0(0, 2000005, 1, 0, 0, 0),
        //I1(1, 5062000, 1, 1, 0, 0),
        //I2(2, 5062001, 1, 2, 0, 0),
        //I3(3, 5062002, 1, 3, 0, 0),
        //I4(4, 5062003, 1, 4, 0, 0),
        //I5(5, 5062005, 1, 5, 0, 0),
        I6(6, 5062300, 1, 6, 0, 0),
        I7(7, 5072000, 1, 7, 0, 0),
        I8(8, 5076000, 1, 8, 0, 0),
        I9(9, 5220000, 1, 9, 0, 0),
        I10(10, 5220094, 1, 10, 0, 0),
        I11(11, 5750000, 1, 11, 0, 0),
        I12(12, 5750001, 1, 12, 0, 0),
        I13(13, 2460003, 1, 13, 0, 0),
        I14(14, 2049406, 1, 14, 0, 0),
        I15(15, 2049300, 1, 15, 0, 0),
        I16(16, 2531000, 1, 16, 0, 0),
        I17(17, 2049100, 1, 17, 0, 0),
        I18(18, 2049116, 1, 18, 0, 0),
        I19(19, 5570000, 1, 19, 0, 0),
        I20(20, 5530119, 1, 20, 0, 0),
        I21(21, 5530120, 1, 21, 0, 0),
        I22(22, 5534000, 1, 22, 0, 0),
        I23(23, 5640000, 1, 23, 0, 0),
        I24(24, 5040004, 1, 24, 0, 0),
        I25(25, 5030000, 1, 25, 0, 0),
        I26(26, 5060004, 1, 26, 0, 0),
        I27(27, 4170024, 1, 27, 0, 0),
        I28(28, 2930000, 1, 28, 0, 0),
        I29(29, 2028062, 1, 29, 0, 0),
        I30(30, 2070011, 1, 30, 0, 0);

        private final int num, itemid, price, position, reqitem, reqitemq;

        CustomShopData(int num, int itemid, int price, int position, int reqitem, int reqitemq) {
            this.num = num;
            this.itemid = itemid;
            this.price = price;
            this.position = position;
            this.reqitem = reqitem;
            this.reqitemq = reqitemq;
        }

        public int getNum() {
            return num;
        }

        public int getItemId() {
            return itemid;
        }

        public int getPrice() {
            return price;
        }

        public int getPosition() {
            return position;
        }

        public int getReqItem() {
            return reqitem;
        }

        public int getReqItemQ() {
            return reqitemq;
        }
    }
}
