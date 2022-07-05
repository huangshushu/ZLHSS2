/**
 * 版权： 北京联众信安成都分公司
 * 描述： 角色发型
 * 创建时间：2019年06月17日
 */
package server.custom.bossrank;

import java.util.Date;

/**
 * 〈一句话功能简述〉角色发型〈功能详细描述〉
 *
 * @author Wei Chunlai
 * @version [v1, 2019年06月17日]
 * @see [相关类/方法]
 * @since [产品/模块版本]
 */
public class CharacterHair {
    private int cid;
    private int hid;
    private int remove;
    private Date createTime;
    private int type;

    public int getCid() {
        return cid;
    }

    public void setCid(int cid) {
        this.cid = cid;
    }

    public int getHid() {
        return hid;
    }

    public void setHid(int hid) {
        this.hid = hid;
    }

    public int getRemove() {
        return remove;
    }

    public void setRemove(int remove) {
        this.remove = remove;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }
}
