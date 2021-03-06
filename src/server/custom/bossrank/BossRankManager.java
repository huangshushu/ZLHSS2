package server.custom.bossrank;

import client.MapleCharacter;
import database.DBConPool;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.logging.Level;
import java.util.logging.Logger;

public class BossRankManager {
    private static class InstanceHolder {

        public static final BossRankManager instance = new BossRankManager();
    }

    public static BossRankManager getInstance() {
        return InstanceHolder.instance;
    }

    private BossRankManager() {
    }

    public Map<String, BossRankInfo> getInfoMap(int cid) {
        Map<String, BossRankInfo> info_map = new HashMap<>();
        PreparedStatement ps = null;
        ResultSet rs = null;
        try {
            Connection con1 = DBConPool.getInstance().getDataSource().getConnection();
            ps = con1.prepareStatement("select * from bossrank where cid = ?");
            ps.setInt(1, cid);
            rs = ps.executeQuery();
            while (rs.next()) {
                BossRankInfo info = new BossRankInfo();
                info.setCid(rs.getInt("cid"));
                info.setCname(rs.getString("cname"));
                info.setBossname(rs.getString("bossname"));
                info.setPoints(rs.getInt("points"));
                info.setCount(rs.getInt("count"));
                info_map.put(info.getBossname(), info);
            }
        } catch (Exception Ex) {
            Ex.printStackTrace();
        } finally {
            try {
                if (rs != null) {
                    rs.close();
                }
                if (ps != null) {
                    ps.close();
                }
            } catch (SQLException ex) {
                Logger.getLogger(BossRankManager.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        return info_map;
    }

    public Map<String, Integer> getBossRanks(int cid) {
        Map<String, Integer> info_map = new HashMap<>();
        PreparedStatement ps = null;
        ResultSet rs = null;
        try {
            Connection con1 = DBConPool.getInstance().getDataSource().getConnection();
            ps = con1.prepareStatement("select * from bossrank where cid = ?");
            ps.setInt(1, cid);
            rs = ps.executeQuery();
            while (rs.next()) {
                info_map.put(rs.getString("bossname"), rs.getInt("count"));
            }
        } catch (Exception Ex) {
            Ex.printStackTrace();
        } finally {
            try {
                if (rs != null) {
                    rs.close();
                }
                if (ps != null) {
                    ps.close();
                }
            } catch (SQLException ex) {
                Logger.getLogger(BossRankManager.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        return info_map;
    }

    public boolean getInfo(int points, int count, String bossname) {
        PreparedStatement ps = null;
        ResultSet rs = null;
        try {
            Connection con1 = DBConPool.getInstance().getDataSource().getConnection();
            ps = con1.prepareStatement("select * from bossrank where bossname = ? AND points = ? AND count = ?");
            ps.setString(1, bossname);
            ps.setInt(2, points);
            ps.setInt(3, count);
            rs = ps.executeQuery();
            if (rs.next()) {
                return true;
            }else {
                return false;
            }
        } catch (Exception Ex) {
            Ex.printStackTrace();
        } finally {
            try {
                if (rs != null) {
                    rs.close();
                }
                if (ps != null) {
                    ps.close();
                }
            } catch (SQLException ex) {
                Logger.getLogger(BossRankManager.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        return false;
    }

    public BossRankInfo getInfo(int cid, String bossname) {
        BossRankInfo info = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        Connection con1 = null;
        try {
            con1 = DBConPool.getInstance().getDataSource().getConnection();
            ps = con1.prepareStatement("select * from bossrank where cid = ? and bossname = ?");
            ps.setInt(1, cid);
            ps.setString(2, bossname);
            rs = ps.executeQuery();
            if (rs.next()) {
                info = new BossRankInfo();
                info.setCid(rs.getInt("cid"));
                info.setCname(rs.getString("cname"));
                info.setBossname(rs.getString("bossname"));
                info.setPoints(rs.getInt("points"));
                info.setCount(rs.getInt("count"));
            }
        } catch (Exception Ex) {
            Ex.printStackTrace();
        } finally {
            try {
                if (rs != null) {
                    rs.close();
                }
                if (ps != null) {
                    ps.close();
                }
                if (con1 != null) {
                    con1.close();
                }
            } catch (SQLException ex) {
                Logger.getLogger(BossRankManager.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        return info;
    }

    public int setLog(int cid, String cname, String bossname, byte type, int update) {
        int ret=-1;
        BossRankInfo info = getInfo(cid, bossname);
        boolean add = false;
        boolean doUpdate = true;
        if (info == null) {
            doUpdate = false;
            add = true;
            info = new BossRankInfo();
            info.setCid(cid);
            info.setCname(cname);
            info.setBossname(bossname);
        }
        switch (type) {
            case 1://???e??????
                ret=info.getPoints() + update;
                info.setPoints(ret);
                break;
            case 2://????????
                ret=info.getCount() + update;
                info.setCount(ret);
                break;
            default:
                doUpdate = false;
                break;
        }
        if (!doUpdate) {
            if (add) {
                add(info);
            }
            return ret;
        }
        update(info);
        return ret;
    }

    public int setLog2(int cid, String cname, String bossname, byte type, int update) {
        int ret=-1;
        BossRankInfo info = getInfo(cid, bossname);
        boolean add = false;
        boolean doUpdate = true;
        if (info == null) {
            doUpdate = false;
            add = true;
            info = new BossRankInfo();
            info.setCid(cid);
            info.setCname(cname);
            info.setBossname(bossname);
            info.setType(type);
        }
        switch (type) {
            case 1://???e??????
                ret=info.getPoints() + update;
                info.setPoints(ret);
                break;
            case 12://????????
                ret=info.getCount() + update;
                info.setCount(ret);
                break;
            default:
                doUpdate = false;
                break;
        }
        if (!doUpdate) {
            if (add) {
                add(info);
            }
            return ret;
        }
        update(info);
        return ret;
    }

    public int setBossRank(int cid, String cname, String bossname, int points, int count) {
        int ret=-1;
        BossRankInfo info = getInfo(cid, bossname);
        boolean add = false;
        boolean doUpdate = true;
        if (info == null) {
            doUpdate = false;
            add = true;
            info = new BossRankInfo();
            info.setCid(cid);
            info.setCname(cname);
            info.setBossname(bossname);
            info.setPoints(points);
            info.setCount(count);
        }else {
            info.setPoints(info.getPoints() + points);
            info.setCount(info.getCount() + points);
        }

        if (!doUpdate) {
            if (add) {
                add(info);
            }
            return ret;
        }
        update(info);
        return ret;
    }

    public void update(BossRankInfo info) {
        if (info == null) {
            return;
        }
        PreparedStatement ps = null;
        try {
            Connection con1 = DBConPool.getInstance().getDataSource().getConnection();
            ps = con1.prepareStatement("update bossrank set points = ?,count = ?  where cid = ? and bossname = ?");
            ps.setInt(1, info.getPoints());
            ps.setInt(2, info.getCount());
            ps.setInt(3, info.getCid());
            ps.setString(4, info.getBossname());
            ps.executeUpdate();
        } catch (Exception Ex) {
            Ex.printStackTrace();
        } finally {
            if (ps != null) {

                try {
                    ps.close();
                } catch (SQLException ex) {
                    Logger.getLogger(BossRankManager.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
        }
    }

    public void add(BossRankInfo info) {
        if (info == null) {
            return;
        }
        PreparedStatement ps = null;
        try {
            Connection con1 = DBConPool.getInstance().getDataSource().getConnection();
            ps = con1.prepareStatement("insert into bossrank (cid,cname,bossname,points,count) values (?,?,?,?,?)");
            ps.setInt(1, info.getCid());
            ps.setString(2, info.getCname());
            ps.setString(3, info.getBossname());
            ps.setInt(4, info.getPoints());
            ps.setInt(5, info.getCount());
            ps.executeUpdate();
        } catch (Exception Ex) {
            Ex.printStackTrace();

        } finally {
            if (ps != null) {

                try {
                    ps.close();
                } catch (SQLException ex) {
                    Logger.getLogger(BossRankManager.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
        }
    }

    public List<BossRankInfo> getRank(String bossname, int type) {
        List<BossRankInfo> list = new LinkedList<>();
        PreparedStatement ps = null;
        ResultSet rs=null;
        try {
            Connection con = DBConPool.getInstance().getDataSource().getConnection();
            switch (type) {
                case 1://???e??????
                    ps = con.prepareStatement("SELECT * FROM bossrank WHERE bossname = ? ORDER BY points DESC LIMIT 100");
                    break;
                case 2://????????
                    ps = con.prepareStatement("SELECT * FROM bossrank WHERE bossname = ? ORDER BY count DESC LIMIT 100");
                    break;
                default:
                    ps = con.prepareStatement("SELECT * FROM bossrank WHERE bossname = ? ORDER BY points DESC LIMIT 100");
                    break;
            }
            ps.setString(1, bossname);
             rs = ps.executeQuery();
            while (rs.next()) {
               BossRankInfo info = new BossRankInfo();
                info.setCid(rs.getInt("cid"));
                info.setCname(rs.getString("cname"));
                info.setBossname(rs.getString("bossname"));
                info.setPoints(rs.getInt("points"));
                info.setCount(rs.getInt("count"));
                list.add(info);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            try {
                if (rs != null) {
                    rs.close();
                }
                if (ps != null) {
                    ps.close();
                }
            } catch (SQLException ex) {
                Logger.getLogger(BossRankManager.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        return list;
    }

    /**
     * @Author: weich
     * @Description:?????????????????????????????????
     * @Params:  * @param cid ??????id???level ????????????
     * @Date: 2019/6/3 20:18
     */
    public List<BossRankInfo> getQuests(int cid, int level) {
        List<BossRankInfo> infos = new ArrayList<>();
        PreparedStatement ps = null;
        ResultSet rs = null;
        try {
            Connection con1 = DBConPool.getInstance().getDataSource().getConnection();
            ps = con1.prepareStatement("SELECT b.num, b.id, b.note, a.count, b.questType, b.points, " +
                    "(SELECT count FROM bosslog c WHERE c.bossid=b.note AND c.characterid = ?) alnum FROM bosslog a " +
                    "JOIN questparam b ON a.bossid = b.id WHERE a.characterid = ? AND a.type = 11 AND DATE_FORMAT(time,'%Y-%m-%d') = ? ORDER BY a.bossid ASC ");//??????????????????????????????
            ps.setInt(1, cid);
            ps.setInt(2, cid);
            ps.setString(3, sdf.format(new Date()));
            rs = ps.executeQuery();
            if (rs.next()) {
                fixBossRankInfo(infos, rs, cid);
                while (rs.next()) {
                    fixBossRankInfo(infos, rs, cid);
                }
            }else {
                ps = con1.prepareStatement("SELECT num, id, points, questType, 0 count, note, 0 alnum " +
                        "FROM questparam b WHERE b.questType < 4 AND reqLevel <= ?");//??????????????????
                ps.setInt(1, level);
                rs = ps.executeQuery();
                List<BossRankInfo> infoList = new ArrayList<>();
                while (rs.next()) {
                    fixBossRankInfo(infoList, rs, cid);
                }
                infoList = groupRand(infoList);
                infos.addAll(infoList);
                for (BossRankInfo info:infoList) {
                    ps = con1.prepareStatement("INSERT INTO bosslog(characterid,bossid,count,type,time) VALUES(?, ?, ?, ?, CURRENT_TIMESTAMP())");
                    ps.setInt(1, cid);
                    ps.setInt(2, info.getBossid());
                    ps.setInt(3, 0);
                    ps.setInt(4, 11);
                    ps.executeUpdate();
                }
            }
            //?????????
            ps = con1.prepareStatement("SELECT b.num, b.id, b.note, a.count, b.questType, b.points," +
                    "(SELECT count FROM bosslog c WHERE c.bossid=b.note AND c.characterid = ?) alnum FROM bosslog a " +
                    "JOIN questparam b ON a.bossid = b.id WHERE a.characterid = ? AND a.type = 12 " +
                    "AND time >= ? AND time < ? ORDER BY a.bossid ASC");//??????????????????????????????, 12???????????????
            ps.setInt(1, cid);
            ps.setInt(2, cid);
            List<String> list = getTimeInterval(new Date());
            ps.setString(3, list.get(0));
            ps.setString(4, list.get(1));
            rs = ps.executeQuery();
            if (rs.next()) {
                fixBossRankInfo(infos, rs, cid);
                while (rs.next()) {
                    fixBossRankInfo(infos, rs, cid);
                }
            }else {
                ps = con1.prepareStatement("SELECT num, id, points, questType, 0 count, note, 0 alnum " +
                        "FROM questparam b WHERE b.questType = 4 AND reqLevel <= ?");//??????????????????
                ps.setInt(1, level);
                rs = ps.executeQuery();
                while (rs.next()) {
                    fixBossRankInfo(infos, rs, cid);
                    ps = con1.prepareStatement("INSERT INTO bosslog(characterid,bossid,count,type,time) VALUES(?, ?, ?, ?, CURRENT_TIMESTAMP())");
                    ps.setInt(1, cid);
                    ps.setInt(2, rs.getInt("id"));
                    ps.setInt(3, 0);
                    ps.setInt(4, 12);
                    ps.executeUpdate();
                }
            }
        } catch (Exception Ex) {
            Ex.printStackTrace();
        } finally {
            try {
                if (rs != null) {
                    rs.close();
                }
                if (ps != null) {
                    ps.close();
                }
            } catch (SQLException ex) {
                Logger.getLogger(BossRankManager.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        return infos;
    }

    public List<BossRankInfo> groupRand(List<BossRankInfo> list) {
        List<BossRankInfo> result = new ArrayList<>();
        Map<Integer, List<BossRankInfo>> map = new HashMap<>();
        fenZu(list, map);
        for (Integer type:map.keySet()) {
            List<BossRankInfo> infoList = map.get(type);
            Random random = new Random();
            result.add(infoList.get(random.nextInt(infoList.size())));
        }
        return result;
    }

    public static void fenZu(List<BossRankInfo> list, Map<Integer, List<BossRankInfo>> map) {//map??????????????????????????????
        if (null == list || null == map) {
            return;
        }
        int key;
        List<BossRankInfo> listTmp;
        for (BossRankInfo val : list) {
            key = val.getType();//????????????????????????map???Key
            listTmp = map.get(key);
            if (null == listTmp) {
                listTmp = new ArrayList<>();
                map.put(key, listTmp);
            }
            listTmp.add(val);
        }
    }

    /**
     * @Author: weich
     * @Description:?????????/?????????
     * @Params:  * @param null
     * @Date: 2019/6/4 9:14
     */
    public void completeQuest(MapleCharacter player, int bossid, int type, int points, String bossname) {
        if (type == 12 || type == 11) {
            //???????????????????????????bosslog???count+1???bossrank???????????????
            player.setBossLog(String.valueOf(bossid), type, 1);
        }
        setBossRank(player.getId(), player.getName(), bossname, points, 1);
    }

    public void fixBossRankInfo(List<BossRankInfo> infos, ResultSet rs, int cid) throws SQLException {
        BossRankInfo info = new BossRankInfo();
        info.setBossname(rs.getString("note"));
        info.setBossid(rs.getInt("id"));
        info.setCount(rs.getInt("count"));
        info.setPoints(rs.getInt("points"));
        info.setCid(cid);
        info.setType(rs.getInt("questType"));
        info.setNum(rs.getInt("num"));
        info.setAlnum(rs.getInt("alnum"));
        infos.add(info);
    }

    private SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

    /**
     * @Author: weich
     * @Description:?????????????????????????????????????????????????????????????????????????????????
     * @Params:  * @param null
     * @Date: 2019/6/3 21:03
     */
    public List<String> getTimeInterval(Date date) {
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        // ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        int dayWeek = cal.get(Calendar.DAY_OF_WEEK);// ?????????????????????????????????????????????
        if (1 == dayWeek) {
            cal.add(Calendar.DAY_OF_MONTH, -1);
        }
        // System.out.println("??????????????????:" + sdf.format(cal.getTime())); // ?????????????????????
        // ???????????????????????????????????????????????????????????????????????????????????????
        cal.setFirstDayOfWeek(Calendar.MONDAY);
        // ?????????????????????????????????????????????
        int day = cal.get(Calendar.DAY_OF_WEEK);
        // ???????????????????????????????????????????????????????????????????????????????????????
        cal.add(Calendar.DATE, cal.getFirstDayOfWeek() - day);
        String imptimeBegin = sdf.format(cal.getTime());
        // System.out.println("??????????????????????????????" + imptimeBegin);
        cal.add(Calendar.DATE, 7);
        String imptimeEnd = sdf.format(cal.getTime());
        // System.out.println("??????????????????????????????" + imptimeEnd);
        List<String> list = Arrays.asList(imptimeBegin, imptimeEnd);
        return list;
    }
}
