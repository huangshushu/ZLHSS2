/**
 * 版权： 北京联众信安成都分公司
 * 描述： 怪物手册
 * 创建时间：2019年06月29日
 */
package server.custom.bossrank;

import java.util.List;

/**
 * 〈一句话功能简述〉怪物手册〈功能详细描述〉
 *
 * @author Wei Chunlai
 * @version [v1, 2019年06月29日]
 * @see [相关类/方法]
 * @since [产品/模块版本]
 */
public class MonsterBooks {
    //怪物id
    private String id;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    //怪物等级
    private int level;

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    //怪物描述
    private String desc;
    //怪物所在地图
    private List<String> maps;
    //怪物掉落
    private List<String> drops;

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public List<String> getMaps() {
        return maps;
    }

    public void setMaps(List<String> maps) {
        this.maps = maps;
    }

    public List<String> getDrops() {
        return drops;
    }

    public void setDrops(List<String> drops) {
        this.drops = drops;
    }
}
