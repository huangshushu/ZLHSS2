/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package client;

import database.DBConPool;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.concurrent.atomic.AtomicLong;
import tools.FileoutputUtil;

/**
 *
 * @author XiaoMaDengDengWo
 */
public class MapleEquipOnlyId {

    private final AtomicLong runningId;

    public static MapleEquipOnlyId getInstance() {
        return SingletonHolder.instance;
    }

    private MapleEquipOnlyId() {
        this.runningId = new AtomicLong(0);
    }

    public long getNextEquipOnlyId() {
        if (this.runningId.get() <= 0) {
            this.runningId.set(initOnlyId());
        } else {
            this.runningId.set(this.runningId.get() + 1);
        }
        return this.runningId.get();
    }

    public long initOnlyId() {
        long ret = 0;

        try (PreparedStatement ps = DBConPool.getInstance().getDataSource().getConnection()
                .prepareStatement("SELECT MAX(equipOnlyId) FROM inventoryitems WHERE equipOnlyId > 0");
                ResultSet rs = ps.executeQuery()) {
            if (rs.next()) {
                ret = rs.getInt(1) + 1;
            }
            ps.close();
        } catch (SQLException e) {
            FileoutputUtil.outError("logs/资料库异常.txt", e);
            e.printStackTrace();
        }
        return ret;
    }

    private static class SingletonHolder {

        protected static final MapleEquipOnlyId instance = new MapleEquipOnlyId();
    }
}
