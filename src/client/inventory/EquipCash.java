 package client.inventory;

 import client.MapleCharacter;
 import com.alibaba.druid.pool.DruidPooledConnection;
 import database.DBConPool;
 import java.sql.Connection;
import java.sql.PreparedStatement;
 import java.sql.ResultSet;
 import java.util.Collection;
 import java.util.HashMap;
 import java.util.Map;
 import tools.FileoutputUtil;






 public class EquipCash
         {
       private short id;
       private short zsx;
       private short fsx;
       private short hp;
       private short mp;
       private short acc;
       private short avoid;
       private short jump;
       private short speed;
       private short wmatk;
       private short wdef;
       private short mdef;
       private short wmatkr;
       private short level;

       public EquipCash() {
           this.id = 0;
           this.zsx = 0;
           this.fsx = 0;
           this.hp = 0;
           this.mp = 0;
           this.acc = 0;
           this.avoid = 0;
           this.jump = 0;
           this.speed = 0;
           this.wmatk = 0;
           this.wdef = 0;
           this.mdef = 0;
           this.wmatkr = 0;
           this.level = 0;
           }


       public EquipCash(short id, short zsx, short fsx, short hp, short mp, short acc, short avoid, short jump, short speed, short wmatk, short wdef, short mdef, short wmatkr, short level) {
             this.id = id;
             this.fsx = fsx;
             this.zsx = zsx;
             this.hp = hp;
             this.mp = mp;
             this.acc = acc;
             this.avoid = avoid;
             this.jump = jump;
             this.speed = speed;
             this.wmatk = wmatk;
             this.wdef = wdef;
             this.mdef = mdef;
             this.wmatkr = wmatkr;
             this.level = level;
           }


       public short getLevel() {
             return this.level;
           }


       public short getId() {
             return this.id;
           }


       public short getZsx() {
             return this.zsx;
           }


       public short getFsx() {
             return this.fsx;
           }


       public short getHp() {
             return this.hp;
           }


       public short getMp() {
             return this.mp;
           }



       public short getWMatk() {
             return this.wmatk;
           }


       public short getWdef() {
             return this.wdef;
           }


       public short getMdef() {
             return this.mdef;
           }


       public short getAcc() {
             return this.acc;
           }


       public short getAvoid() {
             return this.avoid;
           }


       public short getSpeed() {
             return this.speed;
           }


       public short getJump() {
             return this.jump;
           }



       public short getWMatkr() {
             return this.wmatkr;
           }


       public void setId(short id) {
             this.id = id;
           }


       public void setZsx(short zsx) {
             if (0 > zsx) {
                   zsx = 0;
                 }
             this.zsx = zsx;
           }


       public void setFsx(short dex) {
             if (0 > dex) {
                   dex = 0;
                 }
           this.fsx = dex;
           }


       public void setHp(short hp) {
             if (0 > hp) {
                   hp = 0;
                 }
             this.hp = hp;
           }

       public void setMp(short mp) {
             if (0 > mp) {
                   mp = 0;
                 }
             this.mp = mp;
           }

       public void setWMatk(short matk) {
             if (0 > matk) {
                   matk = 0;
                 }
           this.wmatk = matk;
           }


       public void setWdef(short wdef) {
             if (0 > wdef) {
                   wdef = 0;
                 }
             this.wdef = wdef;
           }


       public void setMdef(short mdef) {
             if (0 > mdef) {
                   mdef = 0;
                 }
             this.mdef = mdef;
           }


       public void setAcc(short acc) {
             if (0 > acc) {
                   acc = 0;
                 }
             this.acc = acc;
           }


       public void setAvoid(short avoid) {
             if (0 > avoid) {
                   avoid = 0;
                 }
             this.avoid = avoid;
           }


       public void setWMatkr(short matkr) {
             if (0 > matkr) {
                   matkr = 0;
                 }
           this.wmatkr = matkr;
           }


       public void setLevel(short level) {
             if (0 > level) {
                   level = 0;
                 }
             this.level = level;
           }

       public void setJump(short jump) {
             if (0 > jump) {
                   jump = 0;
                 }
             this.jump = jump;
           }

       public void setSpeed(short speed) {
             if (0 > speed) {
                   speed = 0;
                 }
             this.speed = speed;
           }


       public static Item getEquipCashItem(MapleCharacter mc, short id, Item item, boolean num) {
             Map<Integer, EquipCash> ecs = mc.getEqueipCashs();
             if (null != ecs.get(Integer.valueOf(id))) {
                   return getEquipCashItem(mc, item, ecs.get(Integer.valueOf(id)), num);
                 }
             return item;
           }


       public static Item getEquipCashItem(MapleCharacter mc, Item item, EquipCash ec, boolean num) {
             short c = (short) (num ? 1 : -1);
             Equip equip = (Equip)item.copy();

             int job = mc.getJob();

             if (0 < ec.zsx) {
                   if ((100 <= job && 132 >= job) || (510 <= job && 512 >= job) || (1100 <= job && 1112 >= job) || (1500 <= job && 1512 > job) || (2100 <= job && 2112 >= job)) {
                         equip.setStr((short)(equip.getStr() + ec.zsx * c));
                       } else if ((200 <= job && 232 >= job) || (2200 <= job && 2218 >= job) || (1200 <= job && 1212 >= job)) {
                         equip.setInt((short)(equip.getInt() + ec.zsx * c));
                       } else if ((300 <= job && 322 > job) || (520 <= job && 522 >= job) || (1300 <= job && 1312 >= job)) {
                         equip.setDex((short)(equip.getDex() + ec.zsx * c));
                       } else if ((400 <= job && 434 >= job) || (1400 <= job && 1412 >= job)) {
                         equip.setLuk((short)(equip.getLuk() + ec.zsx * c));
                       }
                 }
             if (0 < ec.fsx) {
                   if ((100 <= job && 132 >= job) || (510 <= job && 512 >= job) || (1100 <= job && 1112 >= job) || (1500 <= job && 1512 > job) || (2100 <= job && 2112 >= job)) {
                         equip.setDex((short)(equip.getDex() + ec.fsx * c));
                       } else if ((200 <= job && 232 >= job) || (2200 <= job && 2218 >= job) || (1200 <= job && 1212 >= job)) {
                         equip.setLuk((short)(equip.getLuk() + ec.fsx * c));
                       } else if ((300 <= job && 322 >= job) || (520 <= job && 522 >= job) || (1300 <= job && 1312 >= job)) {
                         equip.setStr((short)(equip.getStr() + ec.fsx * c));
                       } else if ((400 <= job && 434 >= job) || (1400 <= job && 1412 >= job)) {
                         equip.setDex((short)(equip.getDex() + ec.fsx * c));
                       }
                 }
             if ((200 <= job && 232 > job) || (2200 <= job && 2218 >= job) || (1200 <= job && 1212 >= job)) {
                   equip.setMatk((short)(equip.getMatk() + ec.wmatk * c));
                 } else {
                   equip.setWatk((short)(equip.getWatk() + ec.wmatk * c));
                 }

             equip.setAcc((short)(equip.getAcc() + ec.acc * c));
             equip.setAvoid((short)(equip.getAvoid() + ec.avoid * c));
             equip.setJump((short)(equip.getJump() + ec.jump * c));
             equip.setSpeed((short)(equip.getSpeed() + ec.speed * c));
             equip.setHp((short)(equip.getHp() + ec.hp * c));
             equip.setMp((short)(equip.getMp() + ec.mp * c));
             equip.setMdef((short)(equip.getMdef() + ec.mdef * c));
             equip.setWdef((short)(equip.getWdef() + ec.wdef * c));
             equip.setLevel((byte)(equip.getLevel() + ec.level * c));
             if (0 < ec.wmatkr) {
                   if ((200 <= job && 232 > job) || (2200 <= job && 2218 >= job) || (1200 <= job && 1212 >= job)) {
                         equip.setWatk((short)(ec.wmatkr * mc.getStat().getTotalMagic() / 100 * c));
                       } else {
                         equip.setMatk((short)(ec.wmatkr * mc.getStat().getTotalMagic() / 100 * c));
                       }
                 }

             return equip;
           }


       public static Map<Integer, EquipCash> loadEquipCash(int cid) {
             Map<Integer, EquipCash> equipCashs = null;
             try(Connection con = DBConPool.getInstance().getDataSource().getConnection(); PreparedStatement ps = con.prepareStatement("select * from equipCash where cid = ?")) {
                   ps.setInt(1, cid);
                   try (ResultSet rs = ps.executeQuery()) {
                         equipCashs = new HashMap<>();
                         while (rs.next()) {
                               EquipCash ec = new EquipCash(rs.getShort("dst"), rs.getShort("zsx"), rs.getShort("fsx"), rs.getShort("hp"), rs.getShort("mp"), rs.getShort("acc"), rs.getShort("avoid"), rs.getShort("jump"), rs.getShort("speed"), rs.getShort("watk"), rs.getShort("wdef"), rs.getShort("mdef"), rs.getShort("watkr"), rs.getShort("level"));
                               equipCashs.put(Integer.valueOf(ec.id), ec);
                             }

                       }
                 } catch (Exception e) {
                   System.out.println("加载部位时装属性失败" + e);
                   FileoutputUtil.outError("logs/数据库异常.txt", e);
                 }
             return equipCashs;
           }


       public static void saveToDB(Collection<EquipCash> ecs, int id) {
             if (ecs.isEmpty()) {
                   return;
                 }
             try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                   PreparedStatement ps = con.prepareStatement("delete from equipCash where cid = ?");
                   ps.setInt(1, id);
                   ps.execute();
                   ps.close();

                   PreparedStatement pse = con.prepareStatement("insert into equipcash (`id`,`cid`,`dst`,`zsx`,`fsx`,`hp`,`mp`,`watk`,`acc`,`avoid`,`jump`,`speed`,`mdef`,`wdef`,`watkr`,`level`) values (DEFAULT,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
                   pse.setInt(1, id);
                   for (EquipCash ec : ecs) {
                         int index = 2;
                         pse.setShort(index, ec.id);
                index++;
                         pse.setShort(index, ec.zsx);
                index++;
                         pse.setShort(index, ec.fsx);
                index++;
                         pse.setShort(index, ec.hp);
                index++;
                         pse.setShort(index, ec.mp);
                index++;
                         pse.setShort(index, ec.wmatk);
                index++;
                         pse.setShort(index, ec.acc);
                index++;
                         pse.setShort(index, ec.avoid);
                index++;
                         pse.setShort(index, ec.jump);
                index++;
                         pse.setShort(index, ec.speed);
                index++;
                         pse.setShort(index, ec.mdef);
                index++;
                         pse.setShort(index, ec.wdef);
                index++;
                         pse.setShort(index, ec.wmatkr);
                index++;
                         pse.setShort(index, ec.level);
                index++;
                         pse.execute();
                       }
                   pse.close();
                 } catch (Exception e) {
                   System.out.println(e);
                   FileoutputUtil.outError("logs/保存时装部位信息失败.txt", e);
                 }
           }
     }
