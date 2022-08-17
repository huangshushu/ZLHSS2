load("nashorn:mozilla_compat.js");
portPackage(Packages.tools);

var chance = Math.floor(Math.random() * 10 + 1);
var luk = 0;
var status = 0;
var display;
var jilv;
var needap = 0
var beilv = 0.02;   //副装备属性相加后相乘的倍率

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) == null) {
        // item1.setUniqueId(1);
        cm.sendOk("如果你有开启了星级的装备，请把装备放在装备栏第一格！");
        cm.dispose();
    } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId() == 1702118) {
        cm.sendOk("神器无法强化。请使用#b神器进阶功能#k。");
        cm.dispose();
    } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId() == 1702119) {
        cm.sendOk("神器无法强化。请使用#b神器进阶功能#k。");
        cm.dispose();
    } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId() == 1702120) {
        cm.sendOk("神器无法强化。请使用#b神器进阶功能#k。");
        cm.dispose();
   
    } else {
        var item1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
        var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
        var 武器等级1 = 0;//item1.getLevel() * 2
        var 武器等级上限 = item1.getUpgradeSlots();
        var 冒险币 = 1000;
        var needmon = 冒险币;  //消耗冒险币
        if (mode == -1) {
            cm.dispose();
        } else {
            if (mode == 0) {
                cm.dispose();
                return;
            }
            if (mode == 1)
                status++;
            if (status == 0) {
                cm.sendNext("听……这是一种新的时代，装备其实拥有无尽的力量，可以觉醒出星级的超级属性。");
            } else if (status == 1) {
                if (cm.getMeso() < needmon) {
                    cm.sendOk("#b武器强化需要#r" + needmon + "冒险币#k#b,你没有这么多冒险币！#k");
                    cm.dispose();
                } else if (cm.getChar().getLevel() < 12) {
                    cm.sendOk("#b#十二级才可以使用这个功能!#k");
                    cm.dispose();

                } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUniqueId() > 0) {
                    cm.sendOk("现金装备无法强化。");
                    cm.dispose();
                    
                //      <--------------判断武器是否一致1-3格------------->
                
                } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId()) {
                    
                    //      <-------------判断背包第一格不为空--------------->
                
                    if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) != null) {
                        var item1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
                        var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
                        var newstr = (item1.getStr()) * beilv;
                        var newdex = Math.floor((item1.getDex()) * beilv);
                        var newint = Math.floor((item1.getInt()) * beilv);
                        var newluk = Math.floor((item1.getLuk()) * beilv);
                        var newspeed = Math.floor((item1.getSpeed()) * beilv);
                        var newwatk = Math.floor((item1.getWatk()) * beilv);
                        var newmatk = Math.floor((item1.getMatk()) * beilv);
                        var newwdef = Math.floor((item1.getWdef()) * beilv);
                        var newmdef = Math.floor((item1.getMdef()) * beilv);
                        var newacc = Math.floor((item1.getAcc()) * beilv);
                        var newavoid = Math.floor((item1.getAvoid()) * beilv);
                        var sumstr = Math.floor(item1.getStr());
                        var sumdex = Math.floor(item1.getDex());
                        var sumint = Math.floor(item1.getInt());
                        var sumluk = Math.floor(item1.getLuk());
                        var sumspeed = Math.floor(item1.getSpeed());
                        var sumwatk = Math.floor(item1.getWatk());
                        var summatk = Math.floor(item1.getMatk());
                        var sumwdef = Math.floor(item1.getWdef());
                        var summdef = Math.floor(item1.getMdef());
                        var sumacc = Math.floor(item1.getAcc());
                        var sumavoid = Math.floor(item1.getAvoid() + newavoid);
                        var mek = "";
                        if (item1.getStr() != 0) {
                            mek += "\r\n     >> 力量:" + item1.getStr();
                        }
                        if (item1.getDex() != 0) {
                            mek += "\r\n     >> 敏捷:" + item1.getDex();
                        }
                        if (item1.getInt() != 0) {
                            mek += "\r\n     >> 智力:" + item1.getInt();
                        }
                        if (item1.getLuk() != 0) {
                            mek += "\r\n     >> 运气:" + item1.getLuk();
                        }
                        if (item1.getSpeed() != 0) {
                            mek += "\r\n     >> 移动速度:+" + item1.getSpeed();
                        }
                        if (item1.getAcc() != 0) {
                            mek += "\r\n     >> 命中率:" + item1.getAcc();
                        }
                        if (item1.getAvoid() != 0) {
                            mek += "\r\n     >> 回避率:" + item1.getAvoid();
                        }
                        if (item1.getWatk() != 0) {
                            mek += "\r\n     >> 物理攻击力:" + item1.getWatk();
                        }
                        if (item1.getMatk() != 0) {
                            mek += "\r\n     >> 魔法攻击力:" + item1.getMatk();
                        }
                        if (item1.getWdef() != 0) {
                            mek += "\r\n     >> 物理防御力:" + item1.getWdef();
                        }
                        if (item1.getStr() != 0) {
                            mek += "\r\n魔法防御力:" + item1.getMdef();
                        }
                        var pai = "";
                        if (newstr >= 1) {
                            pai += "\r\n     >> 力量增加:" + newstr;
                        }
                        if (newdex >= 1) {
                            pai += "\r\n     >> 敏捷增加:" + newdex;
                        }
                        if (newint >= 1) {
                            pai += "\r\n     >> 智力增加:" + newint;
                        }
                        if (newluk >= 1) {
                            pai += "\r\n     >> 运气增加:" + newluk;
                        }
                        if (newspeed >= 1) {
                            pai += "\r\n     >> 移动速度增加:" + newspeed;
                        }
                        if (newacc >= 1) {
                            pai += "\r\n     >> 命中率增加:" + newacc;
                        }
                        if (newavoid >= 1) {
                            pai += "\r\n     >> 回避率增加:" + newavoid;
                        }
                        if (newwatk >= 1) {
                            pai += "\r\n     >> 物理攻击力增加:" + newwatk;
                        }
                        if (newmatk >= 1) {
                            pai += "\r\n     >> 魔法攻击力增加:" + newwatk;
                        }
                        if (newwdef >= 1) {
                            pai += "\r\n     >> 物理防御力增加:" + newwdef;
                        }
                        if (newmdef >= 1) {
                            pai += "\r\n     >> 魔法防御力增加:" + newmdef;
                        }
                        var paiid = "";
                        if (sumstr >= 1) {
                            paiid += "\r\n     >> 力量:" + sumstr;
                        }
                        if (sumdex >= 1) {
                            paiid += "\r\n     >> 敏捷:" + sumdex;
                        }
                        if (sumint >= 1) {
                            paiid += "\r\n     >> 智力:" + sumint;
                        }
                        if (sumluk >= 1) {
                            paiid += "\r\n     >> 运气:" + sumluk;
                        }
                        if (sumspeed >= 1) {
                            paiid += "\r\n     >> 移动速度:" + sumspeed;
                        }
                        if (sumacc >= 1) {
                            paiid += "\r\n     >> 命中率:" + sumacc;
                        }
                        if (sumavoid >= 1) {
                            paiid += "\r\n     >> 回避率:" + sumavoid;
                        }
                        if (sumwatk >= 1) {
                            paiid += "\r\n     >> 物理攻击力:" + sumwatk;
                        }
                        if (summatk >= 1) {
                            paiid += "\r\n     >> 魔法攻击力:" + summatk;
                        }
                        if (sumwdef >= 1) {
                            paiid += "\r\n     >> 物理防御力:" + sumwdef;
                        }
                        if (summdef >= 1) {
                            paiid += "\r\n     >> 魔法防御力:" + summdef;
                        }

                        var add = "#r强化前属性：#k" + mek;

                        add += "\r\n#r强化增加属性：攻击力(1~装备追加等级)#k\r\n#g随机增加额外卓越属性值 1-随机值";

                        add += "\r\n#r强化后综合属性：#k" + paiid;
                        cm.sendNext("#b您当前装备#v" + itemId1 + "#的追加次数为：#k#r(" + item1.getLevel() + "次)#k\r\n#b点击下一项,开始激动人心的追加属性！#k\r\n\r\n" + add);
                        if (item1.getUniqueId() == 0)
                            item1.setUniqueId(1);

                    } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) == null) {

                        if (item1.getUniqueId() == 0)
                            item1.setUniqueId(1);
                        cm.sendOk("请将要强化的武器放在第一格才能进行!");
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("强化条件：需要2件相同装备强化第一格装备！\r\n#e#r强化的装备：#v"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId()+"#\r\n#d第二格装备：#v"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(2).getItemId()+"#\r\n第三格装备：#v"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).getItemId()+"#\r\n\r\n#b请确保你的装备是否正确！");
                    cm.dispose();
                }
            } else if (status == 2) {
                var random = (Math.random()*2)+1;//追加率
                var random2 = (Math.random()*10)+1;//追加额外属性率
                var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
                if (item.getLevel() <= 5) {
                    
                    var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
                    var item1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
                    var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
                    var zhuijia = (Math.random()*item1.getLevel())+1;
                    var newstr = (item1.getStr()) * beilv;


                    var newdex = (item1.getDex()) * beilv;
                    var newint = (item1.getInt()) * beilv;
                    var newluk = (item1.getLuk()) * beilv;
                    var newspeed = (item1.getSpeed()) * beilv;
                    var newwatk = (item1.getWatk()) * beilv;
                    var newmatk = (item1.getMatk()) * beilv;
                    var newwdef = (item1.getWdef()) * beilv;
                    var newmdef = (item1.getMdef()) * beilv;
                    var newacc = (item1.getAcc()) * beilv;
                    var newavoid = (item1.getAvoid()) * beilv;
                    var sumstr = item1.getStr() + newstr;
                    var sumdex = item1.getDex() + newdex;
                    var sumint = item1.getInt() + newint;
                    var sumluk = item1.getLuk() + newluk;
                    var sumspeed = item1.getSpeed() + newspeed;
                    var sumwatk = item1.getWatk() + newwatk;
                    var summatk = item1.getMatk() + newmatk;
                    var sumwdef = item1.getWdef() + newwdef;
                    var summdef = item1.getMdef() + newmdef;
                    var sumacc = item1.getAcc() + newacc;
                    var sumavoid = item1.getAvoid() + newavoid;
                    var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
                    /* item.setStr(sumstr + 0.4); // STR     
                 item.setDex(sumdex + 0.4); // DEX     
                 item.setInt(sumint + 0.4); // INT 
                 item.setLuk(sumluk + 0.4); // INT       
                 item.setWatk(sumwatk); //WATK    
                 item.setMatk(summatk); //MATK    
                 item.setWdef(sumwdef); //WDEF    
                 item.setMdef(summdef); //MDEF    
                 item.setAcc(sumacc); // ACC     
                 item.setAvoid(sumavoid); // AVOID 
                 item.setSpeed(item.getSpeed() + 1); // SPEED 
                 item.setJump(item.getJump() + 1); // Jump
                 item.setLevel((item.getLevel() + 1));*/
                    //<----删除背包2个装备---->
                    //                    cm.getChar().getInventory(MapleInventoryType.EQUIP).removeItem(2);
                    //                    cm.getChar().getInventory(MapleInventoryType.EQUIP).removeItem(3);
                    //<----追加失败率设置---->
                    if(random >= 1 && random < 2){
                     //   cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(), cm.getPlayer().getName() + " : " + " +" + (item1.getLevel()) + " 追加失败!", item, true).getBytes());
                        cm.sendOk("#r武器#v" + itemId1 + "#追加失败！！！");
                     //   cm.刷新状态(); 
                        cm.dispose();
                    //<----追加成功率设置---->
                    }else if(random >=2){
                        if(item.getLevel() == 1){
                            item.setOwner("★☆☆☆☆");
                        }else if(item.getLevel() == 2){
                            item.setOwner("★★☆☆☆");
                        }else if(item.getLevel() == 3){
                            item.setOwner("★★★☆☆");
                        }else if(item.getLevel() ==4){
                            item.setOwner("★★★★☆");
                        }else if(item.getLevel() ==5){
                            item.setOwner("★★★★★");
                        }
                        if(random2 >= 1 && random2 < 2){
                            item.setStr(item.getStr()+random); // STR    
                        }else if(random2 >= 2 && random2 < 3){
                            item.setDex(item.getDex()+random); // DEX     
                        }else if(random2 >= 3 && random2 < 4){     
                            item.setInt(item.getInt()+random); // INT 
                        }else if(random2 >= 4 && random2 < 5){
                            item.setLuk(item.getLuk()+random); // INT 
                        }else if(random2 >= 6 && random2 < 7){
                            item.setWatk(item.getWatk()+random); //WATK 
                        }else if(random2 >= 7 && random2 < 8){
                            item.setMatk(item.getMatk()+random); //MATK  
                        }else if(random2 >= 8 && random2 < 9){
                            item.setWdef(item.getWdef()+random); //WDEF  
                        }else if(random2 >= 9 && random2 < 10){
                            item.setMdef(item.getMdef()+random); //MDEF    
                        }else if(random2 >= 10 && random2 < 11){
                            item.setAcc(item.getAcc()+random); // ACC     
                        }
                        item.setLevel(item1.getLevel()+1);
                        item.setWatk(item.getWatk()+zhuijia);
                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
                        cm.sendOk("#r恭喜您，武器#v" + itemId1 + "#成功\r\n成功追加星级!#k");
                     //   cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(), cm.getPlayer().getName() + " : " + " +" + (item1.getLevel() + 1) + " 追加星级成功!", item, true).getBytes());
                        var statup = new java.util.ArrayList();
                        cm.gainMeso(-冒险币);
                        statup.add(new Pair(MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                        cm.刷新状态();
                        cm.dispose();
                    }
                }else{
                    cm.sendOk("该装备已经无法追加。");
                    cm.dispose();
                }
            }
        }
    }
}