package server;

public class CashItem {

    private int ItemId;
    private int Count;
    private int Price;
    private int SN;
    private int Period;
    private int Gender;
    private int Class;
    private boolean OnSale;

    // TODO 商城商品::添加新的商品属性
    public CashItem(int sn, int itemId, int count, int price, int period, int gender, int Class, boolean sale) {
        this.SN = sn;
        this.ItemId = itemId;
        this.Count = count;
        this.Price = price;
        this.Period = period;
        this.Gender = gender;
        this.Class = Class;
        this.OnSale = sale;
    }

    public void setId(int ItemId) {
        this.ItemId = ItemId;
    }

    public int getId() {
        return ItemId;
    }

    public void setCount(int Count) {
        this.Count = Count;
    }

    public int getCount() {
        return Count;
    }

    public void setPrice(int Price) {
        this.Price = Price;
    }

    public int getPrice() {
        return Price;
    }

    public void setSN(int SN) {
        this.SN = SN;
    }

    public int getSN() {
        return SN;
    }

    public void setPeriod(int Period) {
        this.Period = Period;
    }

    public int getPeriod() {
        return Period;
    }

    public void setGender(int Gender) {
        this.Gender = Gender;
    }

    public int getGender() {
        return Gender;
    }

    public void setOnSale(boolean OnSale) {
        this.OnSale = OnSale;
    }

    public void setClass(int Class) {
        this.Class = Class;
    }

    public int getclass() {
        return Class;
    }

    public boolean onSale() {
        return OnSale;
    }

    public boolean genderEquals(int g) {
        return g == this.Gender || this.Gender == 2;
    }
}
