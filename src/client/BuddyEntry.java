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
package client;

import database.DBConPool;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import tools.FileoutputUtil;

/**
 * 储存好友个别的单位
 *
 * @author Flower
 */
public class BuddyEntry {

    /**
     * 好友名称
     */
    private final String name;

    /**
     * 好友所在群组
     */
    private String group;

    /**
     * 好友ID
     */
    private final int characterId;

    /**
     * 好友等级
     */
    private final int level;

    /**
     * 好友职业
     */
    private final int job;

    /**
     * 好友可见度
     */
    private boolean visible;

    /**
     * 好友频道
     */
    private int channel;

    /**
     * 建构子
     *
     * @param name        好友角色名称
     * @param characterId 好友角色ID
     * @param group       好友所在群组
     * @param channel     角色所在频道，离线则 -1
     * @param visible     好友是否可见
     * @param job         好友角色职业
     * @param level       好友角色等级
     */
    public BuddyEntry(String name, int characterId, String group, int channel, boolean visible, int level, int job) {
        super();
        this.name = name;
        this.characterId = characterId;
        this.group = group;
        this.channel = channel;
        this.visible = visible;
        this.level = level;
        this.job = job;
    }

    /**
     * @return 传回好友角色所在的频道，如果离线的话则 -1 returns -1.
     */
    public int getChannel() {
        return channel;
    }

    /**
     * 设定好友所在频道
     *
     * @param channel 想要设定的频道
     */
    public void setChannel(int channel) {
        this.channel = channel;
    }

    /**
     * 好友是否在线上
     *
     * @return 回传好友是不是在线上
     */
    public boolean isOnline() {
        return channel >= 0;
    }

    /**
     * 设定好友已经离线
     */
    public void setOffline() {
        channel = -1;
    }

    /**
     * 取得好友名称
     *
     * @return 好友名称
     */
    public String getName() {
        return name;
    }

    /**
     * 取得好友的角色ID
     *
     * @return 好友角色ID
     */
    public int getCharacterId() {
        return characterId;
    }

    /**
     * 取得好友等级
     *
     * @return 好友的等级
     */
    public int getLevel() {
        return level;
    }

    /**
     * 取得好友的职业
     *
     * @return 好友的职业
     */
    public int getJob() {
        return job;
    }

    /**
     * 设定好友是不是可见的
     *
     * @param visible 可显示上线与否
     */
    public void setVisible(boolean visible) {
        this.visible = visible;
    }

    /**
     * 回传好友是不是可以显示的
     *
     * @return 好友是否可见
     */
    public boolean isVisible() {
        return visible;
    }

    /**
     * 设定好友所在的群组
     *
     * @return 群组名称
     */
    public String getGroup() {
        return group;
    }

    /**
     * 设定好友所在的群组
     *
     * @param newGroup 新群组名称
     */
    public void setGroup(String newGroup) {
        this.group = newGroup;
    }

    public static BuddyEntry getByNameFromDB(String buddyName) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT id, name, level, job FROM characters WHERE name = ?");
            ps.setString(1, buddyName);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                return new BuddyEntry(
                        rs.getString("name"),
                        rs.getInt("id"),
                        BuddyList.DEFAULT_GROUP,
                        -1,
                        false,
                        rs.getInt("level"),
                        rs.getInt("job"));
            } else {
                return null;
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
            return null;
        }
    }

    public static BuddyEntry getByIdfFromDB(int buddyCharId) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT id, name, level, job FROM characters WHERE id = ?");
            ps.setInt(1, buddyCharId);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                return new BuddyEntry(
                        rs.getString("name"),
                        rs.getInt("id"),
                        BuddyList.DEFAULT_GROUP,
                        -1,
                        true,
                        rs.getInt("level"),
                        rs.getInt("job"));
            } else {
                return null;
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
            return null;
        }
    }

    /**
     * 哈希值
     *
     * @return 整数的哈希值
     */
    @Override
    public final int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + characterId;
        return result;
    }

    /**
     * 判断是否为同一个好友
     *
     * @param obj 欲传入的物件
     * @return 是否一样
     */
    @Override
    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        final BuddyEntry other = (BuddyEntry) obj;
        return characterId == other.characterId;
    }
}
