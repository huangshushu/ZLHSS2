/**
 * 版权： 北京联众信安成都分公司
 * 描述： 角色发型管理
 * 创建时间：2019年06月17日
 */
package server.custom.bossrank;

import database.DBConPool;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * 〈一句话功能简述〉角色发型管理〈功能详细描述〉
 *
 * @author Wei Chunlai
 * @version [v1, 2019年06月17日]
 * @see [相关类/方法]
 * @since [产品/模块版本]
 */
public class CharacterHairManager {
    private static class InstanceHolder {

        public static final CharacterHairManager instance = new CharacterHairManager();
    }

    public static CharacterHairManager getInstance() {
        return InstanceHolder.instance;
    }

    public CharacterHairManager() {
    }

    public List<Integer> getHairmap(int cid, Integer remove, int type) {
        Map<Integer, List<Integer>> info_map = new HashMap<>();
        PreparedStatement ps = null;
        ResultSet rs = null;
        try {
            Connection con1 = DBConPool.getInstance().getDataSource().getConnection();
            String sql = "select * from character_hair where cid = ? AND type = ? ";
            if (remove != null) {
                sql += " and remove = ?";
            }
            sql += " ORDER BY hid ASC ";
            ps = con1.prepareStatement(sql);
            ps.setInt(1, cid);
            ps.setInt(2, type);
            if (remove != null) {
                ps.setInt(3, remove);
            }
            rs = ps.executeQuery();
            while (rs.next()) {
                List<Integer> list = info_map.get(rs.getInt("type"));
                if (list != null) {
                } else {
                    list = new ArrayList<>();
                }
                list.add(rs.getInt("hid"));
                info_map.put(rs.getInt("type"), list);
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
        return info_map.get(type);
    }

    public void addCharacterHair(int cid, int hid, int type) {
        PreparedStatement ps = null;
        ResultSet rs = null;
        try {
            Connection con1 = DBConPool.getInstance().getDataSource().getConnection();
            String sql = "select * from character_hair where cid = ? AND hid = ? AND type = ?";
            ps = con1.prepareStatement(sql);
            ps.setInt(1, cid);
            ps.setInt(2, hid);
            ps.setInt(3, type);
            rs = ps.executeQuery();
            if (!rs.next()) {
                sql = "INSERT INTO character_hair(cid, hid, remove, createTime, type) VALUES (?,?,?,NOW(),?)";
                ps = con1.prepareStatement(sql);
                ps.setInt(1, cid);
                ps.setInt(2, hid);
                ps.setInt(3, 0);
                ps.setInt(4, type);
                ps.executeUpdate();
            }
        } catch (Exception Ex) {
            Ex.printStackTrace();
        } finally {
            try {
                if (ps != null) {
                    ps.close();
                }
            } catch (SQLException ex) {
                Logger.getLogger(BossRankManager.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }

    public void deleteCharacterHair(int cid, int hid, int type) {
        PreparedStatement ps = null;
        try {
            Connection con1 = DBConPool.getInstance().getDataSource().getConnection();
            String sql = "DELETE FROM character_hair WHERE cid = ? AND hid = ? AND type = ?";
            ps = con1.prepareStatement(sql);
            ps.setInt(1, cid);
            ps.setInt(2, hid);
            ps.setInt(3, type);
            ps.executeUpdate();
        } catch (Exception Ex) {
            Ex.printStackTrace();
        } finally {
            try {
                if (ps != null) {
                    ps.close();
                }
            } catch (SQLException ex) {
                Logger.getLogger(BossRankManager.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }
}
