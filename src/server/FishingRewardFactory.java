/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package server;

import database.DBConPool;
import tools.FileoutputUtil;
import tools.Pair;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Random;

/**
 * @author Flower
 */
public class FishingRewardFactory {

    public class FishingReward {

        private final int itemid;
        private final int expiration;

        public FishingReward(final int itemid, final int expiration) {
            this.expiration = expiration;
            this.itemid = itemid;
        }

        public int getItemId() {
            return this.itemid;
        }

        public int getExpiration() {
            return this.expiration;
        }
    }

    private final List<Pair<Long, FishingReward>> rewards;
    private Long total = 0L;
    private final Random rand;
    private final int[] typesChance = {40, 40, 20};
    private final int[] typesChanceAcc = {40, 80, 100};
    private final int typesChanceTotal = 100;

    private static final FishingRewardFactory instance = new FishingRewardFactory();

    public FishingRewardFactory() {
        System.out.println("【读取中】 FishingRewardFactory :::");
        this.rewards = new LinkedList<>();
        this.rand = new Random(System.currentTimeMillis());
        this.loadItems();
    }

    public static FishingRewardFactory getInstance() {
        return instance;
    }

    public int getNextRewardType() {
        Integer n = rand.nextInt(this.typesChanceTotal);
        for (int i = 0; i < 3; i++) {
            if (n <= this.typesChanceAcc[i]) {
                return i;
            }
        }
        return 0;
    }

    public FishingReward getNextRewardItemId() {
        if (this.rewards.isEmpty()) {
            this.loadItems();
        }
        Iterator<Pair<Long, FishingReward>> iterator = this.rewards.iterator();
        if (total != 0) {
            Long n = Math.abs(rand.nextLong() * System.currentTimeMillis() + 47 * System.currentTimeMillis()) % total;
            while (iterator.hasNext()) {
                Pair<Long, FishingReward> c = iterator.next();
                if (n <= c.left) {
                    return c.right;
                }
            }
        }
        return null;
    }

    public void reloadItems() {
        this.loadItems();
    }

    private void loadItems() {
        rewards.clear();
        Long acc = 0L;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            try (PreparedStatement ps = con.prepareStatement("SELECT * FROM fishing_rewards ORDER BY chance ASC"); ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    int itemid = rs.getInt("itemid");
                    int chance = rs.getInt("chance");
                    int expirtaion = rs.getInt("expiration");
                    acc += chance;
                    rewards.add(new Pair<>(acc, new FishingReward(itemid, expirtaion)));
                }
            }
        } catch (SQLException e) {
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        }
        total = acc;
    }

}
