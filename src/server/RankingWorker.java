/*
 This file is part of the OdinMS Maple Story Server
 Copyright (C) 2008 ~ 2010 Patrick Huy <patrick.huy@frz.cc> 
 Matthias Butz <matze@odinms.de>
 Jan Christian Meyer <vimes@odinms.de>

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License version 3
 as published by the Free Software Foundation. You may not use, modify
 or distribute this program under any other version of the
 GNU Affero General Public License.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package server;

import database.DBConPool;
import tools.FileoutputUtil;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.*;

public class RankingWorker {

    private final Map<Integer, List<RankingInformation>> rankings = new HashMap<>();
    private final Map<String, Integer> jobCommands = new HashMap<>();
    private static RankingWorker instance;
    private Connection con;

    public static final RankingWorker getInstance() {
        if (instance == null) {
            instance = new RankingWorker();
        }
        return instance;
    }

    public final Integer getJobCommand(final String job) {
        return jobCommands.get(job);
    }

    public final Map<String, Integer> getJobCommands() {
        return jobCommands;
    }

    public final List<RankingInformation> getRankingInfo(final int job) {
        return rankings.get(job);
    }

    public final void run() {
        System.out.println("【读取中】 Ranking Server :::");
        loadJobCommands();
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            updateRanking(con);
        } catch (Exception ex) {
            System.err.println("Could not update rankings");
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }
        //System.out.println("排行启动完成 :::"); //keep
    }

    private void updateRanking(Connection con) throws Exception {
        String sb = "SELECT c.id, c.job, c.exp, c.level, c.name, c.jobRank, c.jobRankMove, c.rank, c.rankMove" + ", a.lastlogin AS lastlogin, a.loggedin FROM characters AS c LEFT JOIN accounts AS a ON c.accountid = a.id WHERE c.gm = 0 AND a.banned = 0 " +
                "ORDER BY c.level DESC , c.exp DESC , c.fame DESC , c.meso DESC , c.rank ASC";

        PreparedStatement ps;
        try (PreparedStatement charSelect = con.prepareStatement(sb); ResultSet rs = charSelect.executeQuery()) {
            ps = con.prepareStatement("UPDATE characters SET jobRank = ?, jobRankMove = ?, rank = ?, rankMove = ? WHERE id = ?");
            int rank = 0; //for "all"
            final Map<Integer, Integer> rankMap = new LinkedHashMap<>();
            for (int i : jobCommands.values()) {
                rankMap.put(i, 0); //job to rank
                rankings.put(i, new ArrayList<>());
            }
            while (rs.next()) {
                int job = rs.getInt("job");
                if (!rankMap.containsKey(job / 100)) { //not supported.
                    continue;
                }
                int jobRank = rankMap.get(job / 100) + 1;
                rankMap.put(job / 100, jobRank);
                rank++;
                rankings.get(-1).add(new RankingInformation(rs.getString("name"), job, rs.getInt("level"), rs.getInt("exp"), rank));
                rankings.get(job / 100).add(new RankingInformation(rs.getString("name"), job, rs.getInt("level"), rs.getInt("exp"), jobRank));
                ps.setInt(1, jobRank);
                ps.setInt(2, rs.getInt("jobRank") - jobRank);
                ps.setInt(3, rank);
                ps.setInt(4, rs.getInt("rank") - rank);
                ps.setInt(5, rs.getInt("id"));
                ps.addBatch();
            }
            ps.executeBatch(); //Batch update should be faster.
        }
        ps.close();
    }

    public final void loadJobCommands() {
        //messy, cleanup
        jobCommands.put("all", -1);
        jobCommands.put("beginner", 0);
        jobCommands.put("warrior", 1);
        jobCommands.put("magician", 2);
        jobCommands.put("bowman", 3);
        jobCommands.put("thief", 4);
        jobCommands.put("pirate", 5);
//        jobCommands.put("nobless", 10);
//        jobCommands.put("soulmaster", 11);
//        jobCommands.put("flamewizard", 12);
//        jobCommands.put("windbreaker", 13);
//        jobCommands.put("nightwalker", 14);
//        jobCommands.put("striker", 15);
//        jobCommands.put("legend", 20);
//        jobCommands.put("aran", 21);
//        jobCommands.put("evan", 22);
        //taking out resistance from here for now
    }

    public static class RankingInformation {

        public int job, level, exp, rank;
        public String name, toString;

        public RankingInformation(String name, int job, int level, int exp, int rank) {
            this.name = name;
            this.job = job;
            this.level = level;
            this.exp = exp;
            this.rank = rank;
            loadToString();
        }

        public final void loadToString() {
            String builder = "Rank " + rank +
                    " : " +
                    name +
                    " - Level " +
                    level +
                    " " +
                    MapleCarnivalChallenge.getJobNameById(job) +
                    " | " +
                    exp +
                    " EXP";
            this.toString = builder; //Rank 1 : KiDALex - Level 200 Blade Master | 0 EXP
        }

        @Override
        public String toString() {
            return toString;
        }
    }
}
