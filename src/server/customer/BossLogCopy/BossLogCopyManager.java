/**
 * 版权： 北京联众信安成都分公司
 * 描述： bosslog_copy的接口类
 * 创建时间：2020年01月14日
 */
package server.customer.BossLogCopy;

import client.MapleCharacter;
import database.DBConPool;

import java.sql.*;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.*;

/**
 * bosslog_copy的接口类〈功能详细描述〉
 *
 * @author Wei Chunlai
 * @version [v1, 2020年01月14日]
 * @since [1.0]
 */
public class BossLogCopyManager {
    private static class InstanceHolder {

        public static final BossLogCopyManager instance = new BossLogCopyManager();
    }

    public static BossLogCopyManager getInstance() {
        return InstanceHolder.instance;
    }

    private BossLogCopyManager() {
    }

    public Map<String, Integer> getBossLogs(int cid) {
        Map<String, Integer> info_map = new HashMap<>();
        PreparedStatement ps = null;
        ResultSet rs = null;
        try (Connection con1 = DBConPool.getInstance().getDataSource().getConnection()) {

            ps = con1.prepareStatement("SELECT * FROM bosslog_copy WHERE characterid = ? ORDER BY time ASC");
            ps.setInt(1, cid);
            rs = ps.executeQuery();
            while (rs.next()) {
                info_map.put(rs.getString("bossid"), rs.getInt("count"));
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
                System.err.println("Error while read bosslog_copy." + ex);
            }
        }
        return info_map;
    }

    public int getBossLogC(String boss, MapleCharacter chr) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            int count = 0;
            PreparedStatement ps;
            ps = con.prepareStatement("SELECT * FROM bosslog_copy WHERE characterid = ? AND bossid = ?");
            ps.setInt(1, chr.getId());
            ps.setString(2, boss);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                count = rs.getInt("count");
            }
            rs.close();
            ps.close();
            return count;
        } catch (Exception Ex) {
            System.err.println("Error while read bosslog_copy." + Ex);
            return -1;
        }
    }

    /*
     * 获取挑战BOSS的次数设置
     */
    public int getBossLog(String boss, MapleCharacter chr) {
        return getBossLog(boss, 0, chr);
    }

    public int getBossLog(String boss, int type, MapleCharacter chr) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            int count = 0;
            PreparedStatement ps;
            ps = con.prepareStatement("SELECT * FROM bosslog_copy WHERE characterid = ? AND bossid = ?");
            ps.setInt(1, chr.getId());
            ps.setString(2, boss);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                /*
                 * 年：calendar.get(Calendar.YEAR)
                 * 月：calendar.get(Calendar.MONTH)+1
                 * 日：calendar.get(Calendar.DAY_OF_MONTH)
                 * 星期：calendar.get(Calendar.DAY_OF_WEEK)-1
                 */
                count = rs.getInt("count");
                if (count < 0) {
                    return count;
                }
                Timestamp bossTime = rs.getTimestamp("time");
                rs.close();
                ps.close();
                if (type == 0) {
                    Calendar sqlcal = Calendar.getInstance();
                    if (bossTime != null) {
                        sqlcal.setTimeInMillis(bossTime.getTime());
                    }
                    if (sqlcal.get(Calendar.DAY_OF_MONTH) + 1 <= Calendar.getInstance().get(Calendar.DAY_OF_MONTH)
                            || sqlcal.get(Calendar.MONTH) + 1 <= Calendar.getInstance().get(Calendar.MONTH)
                            || sqlcal.get(Calendar.YEAR) + 1 <= Calendar.getInstance().get(Calendar.YEAR)) {
                        count = 0;
                        ps = con.prepareStatement(
                                "UPDATE bosslog_copy SET count = 0, time = CURRENT_TIMESTAMP() WHERE characterid = ? AND bossid = ?");
                        ps.setInt(1, chr.getId());
                        ps.setString(2, boss);
                        ps.executeUpdate();
                    }
                }
            } else {
                PreparedStatement psu = con.prepareStatement(
                        "INSERT INTO bosslog_copy (characterid, bossid, count, type) VALUES (?, ?, ?, ?)");
                psu.setInt(1, chr.getId());
                psu.setString(2, boss);
                psu.setInt(3, 0);
                psu.setInt(4, type);
                psu.executeUpdate();
                psu.close();
            }
            rs.close();
            ps.close();
            return count;
        } catch (Exception Ex) {
            System.err.println("Error while read bosslog_copy." + Ex);
            return -1;
        }
    }

    // 查当天的记录
    public int getBossLog2(int cid, String boss, int type) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            int count = 0;
            PreparedStatement ps;
            ps = con.prepareStatement(
                    "SELECT * FROM bosslog_copy WHERE characterid = ? AND bossid = ? AND DATE_FORMAT(time, '%Y-%m-%d') = ?");
            ps.setInt(1, cid);
            ps.setString(2, boss);
            ps.setString(3, sdf.format(new Date()));
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                /*
                 * 年：calendar.get(Calendar.YEAR)
                 * 月：calendar.get(Calendar.MONTH)+1
                 * 日：calendar.get(Calendar.DAY_OF_MONTH)
                 * 星期：calendar.get(Calendar.DAY_OF_WEEK)-1
                 */
                count = rs.getInt("count");
                if (count < 0) {
                    return count;
                }
                Timestamp bossTime = rs.getTimestamp("time");
                rs.close();
                ps.close();
                if (type == 0) {
                    Calendar sqlcal = Calendar.getInstance();
                    if (bossTime != null) {
                        sqlcal.setTimeInMillis(bossTime.getTime());
                    }
                    if (sqlcal.get(Calendar.DAY_OF_MONTH) + 1 <= Calendar.getInstance().get(Calendar.DAY_OF_MONTH)
                            || sqlcal.get(Calendar.MONTH) + 1 <= Calendar.getInstance().get(Calendar.MONTH)
                            || sqlcal.get(Calendar.YEAR) + 1 <= Calendar.getInstance().get(Calendar.YEAR)) {
                        count = 0;
                        ps = con.prepareStatement(
                                "UPDATE bosslog_copy SET count = 0, time = CURRENT_TIMESTAMP() WHERE characterid = ? AND bossid = ?");
                        ps.setInt(1, cid);
                        ps.setString(2, boss);
                        ps.executeUpdate();
                    }
                }
            } else {
                PreparedStatement psu = con.prepareStatement(
                        "INSERT INTO bosslog_copy (characterid, bossid, count, type) VALUES (?, ?, ?, ?)");
                psu.setInt(1, cid);
                psu.setString(2, boss);
                psu.setInt(3, 0);
                psu.setInt(4, type);
                psu.executeUpdate();
                psu.close();
            }
            rs.close();
            ps.close();
            return count;
        } catch (Exception Ex) {
            System.err.println("Error while read bosslog_copy." + Ex);
            return -1;
        }
    }

    /*
     * 增加挑战BOSS的次数设置
     */
    public void setBossLog(String boss, MapleCharacter chr) {
        setBossLog(boss, 0, chr);
    }

    public void setBossLog(String boss, int type, MapleCharacter chr) {
        setBossLog(boss, type, 1, chr);
    }

    public void setBossLog(String boss, int type, int count, MapleCharacter chr) {
        int bossCount = getBossLog(boss, type, chr);
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement(
                    "UPDATE bosslog_copy SET count = ?, type = ?, time = CURRENT_TIMESTAMP() WHERE characterid = ? AND bossid = ?");
            ps.setInt(1, bossCount + count);
            ps.setInt(2, type);
            ps.setInt(3, chr.getId());
            ps.setString(4, boss);
            ps.executeUpdate();
            ps.close();
        } catch (Exception Ex) {
            System.err.println("Error while set bosslog_copy." + Ex);
        }
    }

    public void setBossLog2(int cid, String boss, int type, int count) {
        int bossCount = getBossLog2(cid, boss, type);
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement(
                    "UPDATE bosslog_copy SET count = ?, type = ?, time = CURRENT_TIMESTAMP() WHERE characterid = ? AND bossid = ? AND DATE_FORMAT(time, '%Y-%m-%d') >= ?");
            ps.setInt(1, bossCount + count);
            ps.setInt(2, type);
            ps.setInt(3, cid);
            ps.setString(4, boss);
            ps.setString(5, sdf.format(new Date()));
            ps.executeUpdate();
            ps.close();
        } catch (Exception Ex) {
            System.err.println("Error while set bosslog_copy." + Ex);
        }
    }

    public void resetBossLog(String boss, MapleCharacter chr) {
        resetBossLog(boss, 0, chr);
    }

    public void resetBossLog(String boss, int type, MapleCharacter chr) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {

            PreparedStatement ps = con.prepareStatement(
                    "UPDATE bosslog_copy SET count = ?, type = ?, time = CURRENT_TIMESTAMP() WHERE characterid = ? AND bossid = ?");
            ps.setInt(1, 0);
            ps.setInt(2, type);
            ps.setInt(3, chr.getId());
            ps.setString(4, boss);
            ps.executeUpdate();
            ps.close();
        } catch (SQLException Ex) {
            System.err.println("Error while reset bosslog_copy." + Ex);
        }
    }

    public void resetBossLog(String boss, int type, int count, MapleCharacter chr) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {

            PreparedStatement ps = con.prepareStatement(
                    "UPDATE bosslog_copy SET count = ?, type = ?, time = CURRENT_TIMESTAMP() WHERE characterid = ? AND bossid = ?");
            ps.setInt(1, count);
            ps.setInt(2, type);
            ps.setInt(3, chr.getId());
            ps.setString(4, boss);
            ps.executeUpdate();
            ps.close();
        } catch (SQLException Ex) {
            System.err.println("Error while reset bosslog_copy." + Ex);
        }
    }

    private final SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

    /**
     * @Author: weich
     * @Description:根据当前日期获得所在周的日期区间（本周一和下周一日期）
     * @Params: * @param null
     * @Date: 2019/6/3 21:03
     */
    public List<String> getTimeInterval(java.util.Date date) {
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        // 判断要计算的日期是否是周日，如果是则减一天计算周六的，否则会出问题，计算到下一周去了
        int dayWeek = cal.get(Calendar.DAY_OF_WEEK);// 获得当前日期是一个星期的第几天
        if (1 == dayWeek) {
            cal.add(Calendar.DAY_OF_MONTH, -1);
        }
        // System.out.println("要计算日期为:" + sdf.format(cal.getTime())); // 输出要计算日期
        // 设置一个星期的第一天，按中国的习惯一个星期的第一天是星期一
        cal.setFirstDayOfWeek(Calendar.MONDAY);
        // 获得当前日期是一个星期的第几天
        int day = cal.get(Calendar.DAY_OF_WEEK);
        // 根据日历的规则，给当前日期减去星期几与一个星期第一天的差值
        cal.add(Calendar.DATE, cal.getFirstDayOfWeek() - day);
        String imptimeBegin = sdf.format(cal.getTime());
        // System.out.println("所在周星期一的日期：" + imptimeBegin);
        cal.add(Calendar.DATE, 7);
        String imptimeEnd = sdf.format(cal.getTime());
        // System.out.println("所在周星期日的日期：" + imptimeEnd);
        List<String> list = Arrays.asList(imptimeBegin, imptimeEnd);
        return list;
    }

    /**
     * @Author: Wei Chunlai
     * @Description: 按每周计数
     * @Params: * @param null
     * @Date: 2019/11/24 13:35
     */
    public int getBossLogW(String bossid, int type, MapleCharacter chr) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {

            int ret_count;
            PreparedStatement ps;
            ps = con.prepareStatement(
                    "select SUM(count) from bosslog_copy where characterid = ? and bossid = ? and type = ? and time >= ? and time < ?");
            ps.setInt(1, chr.getId());
            ps.setString(2, bossid);
            ps.setInt(3, type);
            List<String> list = getTimeInterval(new java.util.Date());
            ps.setString(4, list.get(0));
            ps.setString(5, list.get(1));
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    ret_count = rs.getInt(1);
                } else {
                    ret_count = -1;
                }
            }
            ps.close();
            return ret_count;
        } catch (SQLException Ex) {
            return -1;
        }
    }

}
