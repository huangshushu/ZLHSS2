/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package server.gashapon;

import database.DBConPool;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.locks.ReentrantReadWriteLock;
import tools.FilePrinter;

/**
 *
 * @author TEST
 */
public class GashaponFactory {

    private final Map<Integer, Gashapon> gashapons = new HashMap<>();
    private final ReentrantReadWriteLock lock = new ReentrantReadWriteLock();
    private static GashaponFactory instance = null;

    public static GashaponFactory getInstance() {
        if (instance == null) {
            instance = new GashaponFactory();
            instance.reloadGashapons();
        }
        return instance;
    }

    public void reloadGashapons() {
        gashapons.clear();
        long chanceTotal = 0L;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection(); PreparedStatement ps = con.prepareStatement("SELECT * FROM gashapons;"); ResultSet rs = ps.executeQuery()) {
            while (rs.next()) {
                Gashapon gashapon = new Gashapon(rs.getInt("id"), rs.getInt("npcId"), rs.getString("name"));
                lock.writeLock().lock();
                try {
                    gashapons.put(gashapon.getNpcId(), gashapon);
                } finally {
                    lock.writeLock().unlock();
                }
            }
        } catch (SQLException ex) {
            FilePrinter.printError("GashaponFactory.txt", ex, "reloadGashapons");
        }
    }

    public void reloadGashapons(int npcId) {
        getInstance().gashapons.clear();
        long chanceTotal = 0L;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection(); PreparedStatement ps = con.prepareStatement("SELECT * FROM gashapons WHERE npcId = ?")) {
            ps.setInt(1, npcId);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                Gashapon gashapon = new Gashapon(rs.getInt("gashaponsid"), rs.getInt("npcId"), rs.getString("name"));
                lock.writeLock().lock();
                try {
                    gashapons.remove(gashapon.getNpcId());
                    gashapons.put(gashapon.getNpcId(), gashapon);
                } finally {
                    lock.writeLock().unlock();
                }
            }
        } catch (SQLException ex) {
            FilePrinter.printError("GashaponFactory.txt", ex, "reloadGashapons");
        }
    }

    public Gashapon getGashaponByNpcId(int NpcId) {
        Gashapon ret = null;
        lock.readLock().lock();
        try {
            ret = gashapons.get(NpcId);
        } finally {
            lock.readLock().unlock();
        }
        return ret;
    }

}
