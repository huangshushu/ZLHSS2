/* 乐章编写,转载请注明*/

importPackage(net.sf.odinms.server);
importPackage(java.util);
importPackage(net.sf.odinms.client);

var needap = 0; //需要AP的数量[设置为0]
var needdz = 0;//需要袋子的数量[设置为0]
var needzsb = 0;//需要转身币的数量[设置为0]
var needsj = 18000;//升级次数需要点卷的数量[全部都是这个]
var slot;
var item;
var qty;
var display;

function start() {
    status = -1;
    action(1, 0, -1);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else if (mode == 0 && type == 0) {
        status--;
        
    } else {
        cm.sendOk("好的,如果你想好了要做什么,我会很乐意的为你服务的.");
        cm.dispose();
        return;
    }
if (status == 0) {
 if(cm.getChar().isGM()){
var text = "#fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1#\r\n你好,我的朋友#h #.我的ID:"+cm.getNpc()+"\r\n";
text += "我是本服强化装备使者,有什么需要我效劳吗?#r\r\n";
text += "#b#L1#★增加装备 物理攻击力 ★#l  \r\n#L2#★增加装备 魔法攻击力 ★#l  #l\r\n";
text += "#b#L3#★增加装备 力量属性值 ★#l  #L10#★一键清理[免费]★#l\r\n#L4#★增加装备 敏捷属性值 ★#l\r\n";
text += "#b#L5#★增加装备 智力属性值 ★#l     #r请保证第一格有装备\r\n#b#L6#★增加装备 运气属性值 ★#l     #r否则无法打开!\r\n\r\n\r\n";
text += "#k#n点卷:#r" + cm.getPlayer().getCSPoints(1) + "#k个\r\n#fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1##fEffect/CharacterEff/1112905/0/1#";
cm.sendSimple(text);
  }else {
var text = "你好,我的朋友#h #.我的ID:"+cm.getNpc()+"\r\n";
text += "我是本服强化装备使者,有什么需要我效劳吗?#r\r\n";
text += "#b#L1#★增加装备 物理攻击力 ★#l  #L2#★增加装备 魔法攻击力 ★#l\r\n";
text += "#b#L3#★增加装备 力量属性值 ★#l  #L10#★一键清理[免费]★#l\r\n#L4#★增加装备 敏捷属性值 ★#l\r\n";
text += "#b#L5#★增加装备 智力属性值 ★#l     #r更多内容,待添加\r\n#b#L6#★增加装备 运气属性值 ★#l \r\n";
text += "#k#n点卷:#r" + cm.getPlayer().getCSPoints(1) + "#k个";
cm.sendSimple(text);
}
//==========================
} else if (status == 1) {
if (selection == 1) {
if(cm.getInventory(1).getItem(1) ==null) {
cm.sendOk("第一格没有装备,无法使用.");cm.dispose();
} else{
var text = "";
text += "您要升级的装备为:#v"+cm.getInventory(1).getItem(1).getItemId()+"#,可升级次数为：#r"+cm.getInventory(1).getItem(1).getUpgradeSlots()+"次#k\r\n进行#r增加装备物理攻击力#k强化需要如下要求：\r\n★消耗★："+needsj+" 点卷\r\n\r\n★效果★：装备#r物理攻击力增加:#b20#r.加卷次数:#b-1#r.\r\n\r\n#k★注意★：①该强化需保证可升级次数>0,方可进行.\r\n";
text += "       ②#b#e装备栏第一个物品为强化物品#n#K.\r\n#k若不遵守上面的注意事项,造成损失由玩家自行负责.\r\n";
text += "#L0#★★★★★开始强化装备★★★★★#l";
text += "\r\n\r\n";
text += "";
cm.sendSimple(text);  
}
} else if (status == 1) {
if (selection == 2) {
if(cm.getInventory(1).getItem(1) ==null) {
cm.sendOk("第一格没有装备,无法使用.");cm.dispose();
} else{
var text = "";
text += "您要升级的装备为:#v"+cm.getInventory(1).getItem(1).getItemId()+"#,可升级次数为：#r"+cm.getInventory(1).getItem(1).getUpgradeSlots()+"次#k\r\n进行#r增加装备魔法攻击力#k强化需要如下要求：\r\n★消耗★："+needsj+" 点卷\r\n\r\n★效果★：装备#r魔法攻击力增加:#b20#r.加卷次数:#b-1#r.\r\n\r\n#k★注意★：①该强化需保证可升级次数>0,方可进行.\r\n";
text += "       ②#b#e装备栏第一个物品为强化物品#n#K.\r\n#k若不遵守上面的注意事项,造成损失由玩家自行负责.\r\n";
text += "#r#L1#★★★★★开始强化装备★★★★★#l";
text += "\r\n\r\n";
text += "";
cm.sendSimple(text);
} 
} else if (status == 1) {
if (selection == 3) {
if(cm.getInventory(1).getItem(1) ==null) {
cm.sendOk("第一格没有装备,无法使用.");cm.dispose();
} else{
var text = "";
text += "您要升级的装备为:#v"+cm.getInventory(1).getItem(1).getItemId()+"#,可升级次数为：#r"+cm.getInventory(1).getItem(1).getUpgradeSlots()+"次#k\r\n进行#r增加装备力量属性值#k强化需要如下要求：\r\n★消耗★："+needsj+" 点卷\r\n\r\n★效果★：装备#r力量属性值增加:#b40#r.加卷次数:#b-1#r.\r\n\r\n#k★注意★：①该强化需保证可升级次数>0,方可进行.\r\n";
text += "       ②#b#e装备栏第一个物品为强化物品#n#K.\r\n#k若不遵守上面的注意事项,造成损失由玩家自行负责.\r\n";
text += "#r#L2#★★★★★开始强化装备★★★★★#l";
text += "\r\n\r\n";
text += "";
cm.sendSimple(text);  
}
} else if (status == 1) {
if (selection == 4) {
if(cm.getInventory(1).getItem(1) ==null) {
cm.sendOk("第一格没有装备,无法使用.");cm.dispose();
} else{
var text = "";
text += "您要升级的装备为:#v"+cm.getInventory(1).getItem(1).getItemId()+"#,可升级次数为：#r"+cm.getInventory(1).getItem(1).getUpgradeSlots()+"次#k\r\n进行#r增加装备敏捷属性值#k强化需要如下要求：\r\n★消耗★："+needsj+" 点卷\r\n\r\n★效果★：装备#r敏捷属性值增加:#b40#r.加卷次数:#b-1#r.\r\n\r\n#k★注意★：①该强化需保证可升级次数>0,方可进行.\r\n";
text += "       ②#b#e装备栏第一个物品为强化物品#n#K.\r\n#k若不遵守上面的注意事项,造成损失由玩家自行负责.\r\n";
text += "#r#L3#★★★★★开始强化装备★★★★★#l";
text += "\r\n\r\n";
text += "";
cm.sendSimple(text);  
}
} else if (status == 1) {
if (selection == 5) {
if(cm.getInventory(1).getItem(1) ==null) {
cm.sendOk("第一格没有装备,无法使用.");cm.dispose();
} else{
var text = "";
text += "您要升级的装备为:#v"+cm.getInventory(1).getItem(1).getItemId()+"#,可升级次数为：#r"+cm.getInventory(1).getItem(1).getUpgradeSlots()+"次#k\r\n进行#r增加装备智力属性值#k强化需要如下要求：\r\n★消耗★："+needsj+" 点卷\r\n\r\n★效果★：装备#r智力属性值增加:#b40#r.加卷次数:#b-1#r.\r\n\r\n#k★注意★：①该强化需保证可升级次数>0,方可进行.\r\n";
text += "       ②#b#e装备栏第一个物品为强化物品#n#K.\r\n#k若不遵守上面的注意事项,造成损失由玩家自行负责.\r\n";
text += "#r#L4#★★★★★开始强化装备★★★★★#l";
text += "\r\n\r\n";
text += "";
cm.sendSimple(text);  
}
} else if (status == 1) {
if (selection == 6) {
if(cm.getInventory(1).getItem(1) ==null) {
cm.sendOk("第一格没有装备,无法使用.");cm.dispose();
} else{
var text = "";
text += "您要升级的装备为:#v"+cm.getInventory(1).getItem(1).getItemId()+"#,可升级次数为：#r"+cm.getInventory(1).getItem(1).getUpgradeSlots()+"次#k\r\n进行#r增加装备运气属性值#k强化需要如下要求：\r\n★消耗★："+needsj+" 点卷\r\n\r\n★效果★：装备#r运气属性值增加:#b40#r.加卷次数:#b-1#r.\r\n\r\n#k★注意★：①该强化需保证可升级次数>0,方可进行.\r\n";
text += "       ②#b#e装备栏第一个物品为强化物品#n#K.\r\n#k若不遵守上面的注意事项,造成损失由玩家自行负责.\r\n";
text += "#r#L5#★★★★★开始强化装备★★★★★#l";
text += "\r\n\r\n";
text += "";
cm.sendSimple(text);  
}
} else if (status == 1) {
if (selection == 7) {
if(cm.getInventory(1).getItem(1) ==null) {
cm.sendOk("第一格没有装备,无法使用.");cm.dispose();
} else{
var text = "";
text += "您要升级的装备为:#v"+cm.getInventory(1).getItem(1).getItemId()+"#,可升级次数为：#r"+cm.getInventory(1).getItem(1).getUpgradeSlots()+"次#k\r\n进行#r增加装备可升级次数#k强化需要如下要求：\r\n★消耗★："+needdz+" 个 金袋子#v5200002#\r\n\r\n★效果★：装备#r可升级次数增加:#b1#r.\r\n\r\n#k★注意★：";
text += "①#b#e装备栏第一个物品为强化物品#n#K.\r\n#k若不遵守上面的注意事项,造成损失由玩家自行负责.\r\n";
text += "#r#L6#★★★★★开始强化装备★★★★★#l";
text += "\r\n\r\n";
text += "";
cm.sendSimple(text);  
}
} else if (status == 1) {
if (selection == 8) {
cm.openNpc( 1063004);
} else if (status == 1) {
if (selection == 9) {
cm.openNpc( 1063005);
} else if (status == 1) {
if (selection == 10) {
var a ="#r请注意:此功能清理垃圾为不可挽回清理,所以请在清理前把重要的东西保存在仓库里:\r\n#k有些特殊物品是不会删除的哦~\r\n#b";
a+= "\r\n#L7#↖(^ω^)↗装备栏"; 
a+= "\r\n#L8#↖(^ω^)↗消耗栏"; 
a+= "\r\n#L9#↖(^ω^)↗设置栏"; 
a+= "\r\n#L10#↖(^ω^)↗其他栏"; 
a+= "\r\n#L11#↖(^ω^)↗特殊栏"; 
} 
cm.sendSimple(a);
} else if (status == 1) {

//请在之前插入
}}}
}
}
}
}
}
}
//结束status == 1
} else if (status == 2) {
if (selection == 0) {
var item = cm.getInventory(1).getItem(1);
if (cm.getPlayer().getCSPoints(1) < needsj) {
cm.sendOk("#b升级砸卷次数需要#r"+needsj+"#b个,你的点卷不足!");
cm.dispose(); 
}
else if (cm.getPlayer().getCSPoints(1) < needsj) {
cm.sendOk("#b升级砸卷次数需要#r"+needsj+"#b个,你的点卷不足!");
cm.dispose(); 
}
else if (cm.getPlayer().getCSPoints(1) < needsj) {
cm.sendOk("#b升级砸卷次数需要#r"+needsj+"#b个,你的点卷不足!");
cm.dispose(); 
}
else if (cm.getPlayer().getCSPoints(1) < needsj) {
cm.sendOk("#b升级砸卷次数需要#r"+needsj+"#b个,你的点卷不足!");
cm.dispose(); 
}else if (cm.getInventory(1).getItem(1).getUpgradeSlots() >=1) {

var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                   
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainNX(-needsj);
var item = cm.getInventory(1).getItem(1);
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setWatk(item.getWatk() + 20);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
cm.sendOk("恭喜你,增加物理攻击成功.\r\n砸卷次数-1,物理攻击加20!");
cm.dispose();
}
else{
cm.sendOk("强化要求不足.");
cm.dispose();
}


} else if (status == 2) {
if (selection == 1) {
var item = cm.getInventory(1).getItem(1);
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b增加装备魔法攻击力需要#r"+needap+"#b点属性值,你剩余的属性值不足!");
cm.dispose();
}
else if (!cm.haveItem(5200002,needdz)) {
cm.sendOk("你的背包里没有"+needdz+"个金袋子#v5200002#");
cm.dispose();
}
else if (!cm.haveItem(4001129)) {
cm.sendOk("你的背包里没有转生币#v4001129#");
cm.dispose();
}
else if (cm.getPlayer().getCSPoints(1) < needsj) {
cm.sendOk("#b升级砸卷次数需要#r"+needsj+"#b个点卷,你的点卷不足!");
cm.dispose(); 
}else if (cm.getInventory(1).getItem(1).getUpgradeSlots() >=1) {

var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                   
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainNX(-needsj);
var item = cm.getInventory(1).getItem(1);
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setMatk(item.getMatk() + 20);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
cm.sendOk("恭喜你,增加魔法攻击成功.\r\n砸卷次数-1,魔法攻击加20!");
cm.dispose();
}
else{
cm.sendOk("强化要求不足.");
cm.dispose();
}

} else if (status == 2) {
if (selection == 2) {
var item = cm.getInventory(1).getItem(1);
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b增加装备力量属性值需要#r"+needap+"#b点属性值,你剩余的属性值不足!");
cm.dispose();
}
else if (!cm.haveItem(5200002,needdz)) {
cm.sendOk("你的背包里没有"+needdz+"个金袋子#v5200002#");
cm.dispose();
}
else if (!cm.haveItem(4001129)) {
cm.sendOk("你的背包里没有转生币#v4001129#");
cm.dispose();
}
else if (cm.getPlayer().getCSPoints(1) < needsj) {
cm.sendOk("#b升级砸卷次数需要#r"+needsj+"#b个点卷,你的点卷不足!");
cm.dispose(); 
}else if (cm.getInventory(1).getItem(1).getUpgradeSlots() >=1) {

var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainNX(-needsj);
var item = cm.getInventory(1).getItem(1);
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setStr(item.getStr()+40);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
cm.sendOk("恭喜你,增加力量成功.\r\n砸卷次数-1,力量加40!");
cm.dispose();
}
else{
cm.sendOk("强化要求不足.");
cm.dispose();
}

} else if (status == 2) {
if (selection == 3) {
var item = cm.getInventory(1).getItem(1);
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b增加装备敏捷属性值需要#r"+needap+"#b点属性值,你剩余的属性值不足!");
cm.dispose();
}
else if (!cm.haveItem(5200002,needdz)) {
cm.sendOk("你的背包里没有"+needdz+"个金袋子#v5200002#");
cm.dispose();
}
else if (!cm.haveItem(4001129)) {
cm.sendOk("你的背包里没有转生币#v4001129#");
cm.dispose();
}
else if (cm.getPlayer().getCSPoints(1) < needsj) {
cm.sendOk("#b升级砸卷次数需要#r"+needsj+"#b个点卷,你的点卷不足!");
cm.dispose();  
}else if (cm.getInventory(1).getItem(1).getUpgradeSlots() >=1) {

var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainNX(-needsj);
var item = cm.getInventory(1).getItem(1);
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setDex(item.getDex() + 40);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
cm.sendOk("恭喜你,增加敏捷属性值成功.\r\n砸卷次数-1,敏捷属性值加40!");
cm.dispose();
}
else{
cm.sendOk("强化要求不足.");
cm.dispose();
}
} else if (status == 2) {
if (selection == 4) {
var item = cm.getInventory(1).getItem(1);
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b增加装备智力属性值需要#r"+needap+"#b点属性值,你剩余的属性值不足!");
cm.dispose();
}
else if (!cm.haveItem(5200002,needdz)) {
cm.sendOk("你的背包里没有"+needdz+"个金袋子#v5200002#");
cm.dispose();
}
else if (!cm.haveItem(4001129)) {
cm.sendOk("你的背包里没有转生币#v4001129#");
cm.dispose();
}
else if (cm.getPlayer().getCSPoints(1) < needsj) {
cm.sendOk("#b升级砸卷次数需要#r"+needsj+"#b个点卷,你的点卷不足!");
cm.dispose(); 
}else if (cm.getInventory(1).getItem(1).getUpgradeSlots() >=1) {

var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainNX(-needsj);
var item = cm.getInventory(1).getItem(1);
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setInt(item.getInt() + 40);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
cm.sendOk("恭喜你,增加智力属性值成功.\r\n砸卷次数-1,智力属性值加40!");
cm.dispose();
}
else{
cm.sendOk("强化要求不足.");
cm.dispose();
}
} else if (status == 2) {
if (selection == 5) {
var item = cm.getInventory(1).getItem(1);
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b增加装备运气属性值需要#r"+needap+"#b点属性值,你剩余的属性值不足!");
cm.dispose();
}
else if (!cm.haveItem(5200002,needdz)) {
cm.sendOk("你的背包里没有"+needdz+"个金袋子#v5200002#");
cm.dispose();
}
else if (!cm.haveItem(4001129)) {
cm.sendOk("你的背包里没有转生币#v4001129#");
cm.dispose();
}
else if (cm.getPlayer().getCSPoints(1) < needsj) {
cm.sendOk("#b升级砸卷次数需要#r"+needsj+"#b个点卷,你的点卷不足!");
cm.dispose(); 

}else if (cm.getInventory(1).getItem(1).getUpgradeSlots() >=1) {

var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                   
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainNX(-needsj);
var item = cm.getInventory(1).getItem(1);
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setLuk(item.getLuk() + 40);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
cm.sendOk("恭喜你,增加运气属性值成功.\r\n砸卷次数-1,运气属性值加40!");
cm.dispose();
}
else{
cm.sendOk("强化要求不足.");
cm.dispose();
}

} else if (status == 2) {
if (selection == 6) {
if (!cm.haveItem(5200002,needdz)) {
cm.sendOk("#b升级砸卷次数需要#r"+needdz+"#b个金袋子#v5200002#,你的金袋子不足!");
cm.dispose();
}else {
var item = cm.getInventory(1).getItem(1);
var statup = new java.util.ArrayList();
cm.gainItem(5200002,-needdz);
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
item.setUpgradeSlots((item.getUpgradeSlots() + 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
cm.sendOk("恭喜你,增加可升级次数成功.\r\n可升级次数+1!");
cm.dispose();
}
} else if (status == 2) {
if (selection == 7) {
cm.deleteItem(1);
cm.sendOk("恭喜,已经为你清理完毕!");  
cm.dispose();
} else if (status == 2) {
if (selection == 8) {
cm.deleteItem(2);
cm.sendOk("恭喜,已经为你清理完毕!");  
cm.dispose();
} else if (status == 2) {
if (selection == 9) {
cm.deleteItem(3);
cm.sendOk("恭喜,已经为你清理完毕!");  
cm.dispose();
} else if (status == 2) {
if (selection == 10) {
cm.deleteItem(4);
cm.sendOk("恭喜,已经为你清理完毕!");  
cm.dispose();
} else if (status == 2) {
if (selection == 11) {
cm.deleteItem(5);
cm.sendOk("恭喜,已经为你清理完毕!");  
cm.dispose();
}}}}}}}}}}}}

//结束status == 2
}
}
