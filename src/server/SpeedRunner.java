package server;

import database.DBConPool;
import server.maps.SpeedRunType;
import tools.FilePrinter;
import tools.FileoutputUtil;
import tools.Pair;
import tools.StringUtil;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.EnumMap;
import java.util.LinkedHashMap;
import java.util.Map;

public class SpeedRunner {

    private static final SpeedRunner instance = new SpeedRunner();
    private final Map<SpeedRunType, Pair<String, Map<Integer, String>>> speedRunData;

    private SpeedRunner() {
        speedRunData = new EnumMap<>(SpeedRunType.class);
    }

    public static final SpeedRunner getInstance() {
        return instance;
    }

    public final Pair<String, Map<Integer, String>> getSpeedRunData(SpeedRunType type) {
        return speedRunData.get(type);
    }

    public final void addSpeedRunData(SpeedRunType type, Pair<StringBuilder, Map<Integer, String>> mib) {
        speedRunData.put(type, new Pair<>(mib.getLeft().toString(), mib.getRight()));
    }

    public final void removeSpeedRunData(SpeedRunType type) {
        speedRunData.remove(type);
    }

    public final void loadSpeedRuns() {
        if (speedRunData.size() > 0) {
            return;
        }
        for (SpeedRunType type : SpeedRunType.values()) {
            try {
                loadSpeedRunData(type);
            } catch (SQLException ex) {
                FilePrinter.printError("loadSpeedRuns.txt", ex);
            }
        }
    }

    public final void loadSpeedRunData(SpeedRunType type) throws SQLException {
        StringBuilder ret;
        Map<Integer, String> rett;
        boolean changed;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection();
                PreparedStatement ps = con
                        .prepareStatement("SELECT * FROM speedruns WHERE type = ? ORDER BY time LIMIT 25")) {
            ps.setString(1, type.name());
            ret = new StringBuilder("#rThese are the speedrun times for "
                    + StringUtil.makeEnumHumanReadable(type.name()) + ".#k\r\n\r\n");
            rett = new LinkedHashMap<>();
            try (ResultSet rs = ps.executeQuery()) {
                int rank = 1;
                boolean cont = rs.first();
                changed = cont;
                while (cont) {
                    addSpeedRunData(ret, rett, rs.getString("members"), rs.getString("leader"), rank,
                            rs.getString("timestring"));
                    rank++;
                    cont = rs.next();
                }
            }
            if (changed) {
                speedRunData.put(type, new Pair<>(ret.toString(), rett));
            }
        } catch (SQLException ex) {
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }
    }

    public final Pair<StringBuilder, Map<Integer, String>> addSpeedRunData(StringBuilder ret, Map<Integer, String> rett,
            String members, String leader, int rank, String timestring) {
        StringBuilder rettt = new StringBuilder();

        String[] membrz = members.split(",");
        rettt.append("#b该远征队 ").append(leader).append("'成功挑战排名为 ").append(rank).append(".#k\r\n\r\n");
        for (int i = 0; i < membrz.length; i++) {
            rettt.append("#r#e");
            rettt.append(i + 1);
            rettt.append(".#n ");
            rettt.append(membrz[i]);
            rettt.append("#k\r\n");
        }
        rett.put(rank, rettt.toString());
        ret.append("#b");
        if (membrz.length > 1) {
            ret.append("#L");
            ret.append(rank);
            ret.append("#");
        }
        ret.append("Rank #e");
        ret.append(rank);
        ret.append("#n#k : ");
        ret.append(leader);
        ret.append(", in ");
        ret.append(timestring);
        if (membrz.length > 1) {
            ret.append("#l");
        }
        ret.append("\r\n");
        return new Pair<>(ret, rett);
    }
}
