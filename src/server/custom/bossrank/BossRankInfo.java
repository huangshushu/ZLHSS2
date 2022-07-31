package server.custom.bossrank;

public class BossRankInfo {
    private int cid;
    private String cname;
    private String bossname;
    private int points;
    private int count;
    private int type;
    private int bossid;
    private int num;// 需要的数量
    private int alnum;// 已完成数量

    public int getAlnum() {
        return alnum;
    }

    public void setAlnum(int alnum) {
        this.alnum = alnum;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public int getBossid() {
        return bossid;
    }

    public void setBossid(int bossid) {
        this.bossid = bossid;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public int getCid() {
        return cid;
    }

    public void setCid(int cid) {
        this.cid = cid;
    }

    public String getCname() {
        return cname;
    }

    public void setCname(String cname) {
        this.cname = cname;
    }

    public String getBossname() {
        return bossname;
    }

    public void setBossname(String bossname) {
        this.bossname = bossname;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

}
