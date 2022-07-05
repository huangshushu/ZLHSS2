var 星星 = "#fEffect/CharacterEff/1003393/0/0#";
var 蓝加 = "#fUI/Basic.img/BtMax/mouseOver/0#";
var 蓝杠 = "#fUI/Basic.img/BtMin/mouseOver/0#";
var 表情高兴 = "#fUI/GuildBBS/GuildBBS/Emoticon/Basic/2#";
var 专用刻印印章 = "#fItem/Consume/0259.img/02590004/info/icon#";
var 普及型灵魂附魔石 = "#fItem/Consume/0259.img/02590004/info/icon#";
var status = -1;
var selection;
var 临时1;
var 临时2;
var 金币 = "#fItem/Special/0900.img/09000001/iconRaw/1#";
var 警报灯 = "#fUI/StatusBar/BtClaim/normal/0#";
var 蓝加 = "#fUI/Basic.img/BtMax/mouseOver/0#";
var 钞票 = "#fItem/Special/0900.img/09000002/iconRaw/0#";
var keyongzb = new Array(
  //革命装备
  /*
  1102612,
  1072853,
  1082540,
  1003946,
  1132242,
  1052647,
  */
  //革命武器
  1442234,
  1402210,
  1432178,
  1382222,
  1372188,
  1452216,
  1462204,
  1332238,
  1472226,
  1482179,
  1492190,
  1302289,
  //1072743,
  //1082543,
  //1102481,
  //1132174,
  //1072744,
  //1082544,
  //1102482,
  //1132175,
  //1072745,
  //1082545,
  //1102483,
  //1132176,
  //1072746,
  //1082546,
  //1102484,
  //1132177,
  //1072747,
  //1082547,
  //1102485,
  //1132178,
  //1003797,
  //1042254,
  //1062165,
  //1003798,
  //1042255,
  //1062166,
  //1003799,
  //1042256,
  //1062167,
  //1003800,
  //1042257,
  //1062168,
  //1003801,
  //1042258,
  //1062169,
  //   /*蒲公英*/ 1112426,
  /*进阶黑龙吊坠*/ //1122076,
  //   /*神秘武器*/ 1432218,
  //   1402259,
  //   1302343,
  //   1422189,
  //   1412181,
  //   1322255,
  //   1312203,
  //   1492235,
  //   1482221,
  //   1472265,
  //   1332279,
  //   1382265,
  //   1372228,
  //   1462243,
  //   1452257,
  //   1092113,
  //   1112915,
  //   /*轩辕7剑*/ 1402910,
  //   1402911,
  //   1402912,
  //   1402913,
  //   1402914,
  //   1402915,
  //   1402916,
  //   /*圣灵剑23*/ 1302922,
  //   1302923,
  //   1302926,
  //   1302929,
  //   1302930,
  //   1302931,
  //   1302932,
  //   1302933,
  //   1302934,
  //   1302935,
  //   1302936,
  //   1302938,
  //   1302939,
  //   1302941,
  //   1302942,
  //   1302943,
  //   1302944,
  //   1302945,
  //   1302946,
  //   1302947,
  //   1302948,
  //   1302949,
  //   1302950,
  //   1302951,
  //   1302952,
  //   1302953,
  //   1302954,
  //   1302955,
  //   1302956,
  //   1302957,
  //   1302958,
  //   1302959,
  //   1302960,
  //   /*觉醒冒险之心*/ 1122038,
  //   1122037,
  //   1122036,
  //   1122035,
  //   1122034,
  //   /*蓝色*/ 1402917,
  //   1432311,
  //   1382288,
  //   1452306,
  //   1462253,
  //   1472802,
  //   1332290,
  //   1492246,
  //   1482233,
  //   1099015,
  //   1432312
  //   /*红武*/ 
  //   1442285,
  //   1442078,
  //   1492194,
  //   1482183,
  //   1472230,
  //   1462208,
  //   1452220,
  //   1432182,
  //   1422156,
  //   1402214,
  //   1382226,
  //   1332242,
  1302000//新手单手剑
);

//true 开启
//false 关闭

function start() {
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (mode == 1) {
    status++;
  } else if (mode == 0) {
    status--;
  } else {
    cm.dispose();
    return;
  }
  if (status == 0) {
    if (cm.getInventory(1).getItem(1) == null) {
      cm.sendOk("如果要强化，请吧物品放在背包第一格!");
      cm.dispose();
      return;
    }

    s1 = Math.floor(Math.random() * (0 - 0) + 5);
    s2 = Math.floor(Math.random() * (0 - 0) + 5);
    s3 = Math.floor(Math.random() * (0 - 0) + 5);
    s4 = Math.floor(Math.random() * (0 - 0) + 5);
    s5 = Math.floor(Math.random() * (0 - 0) + 5);
    s6 = Math.floor(Math.random() * (0 - 0) + 5);
    s7 = Math.floor(Math.random() * (0 - 0) + 5);
    s8 = Math.floor(Math.random() * (0 - 0) + 5);
    s9 = Math.floor(Math.random() * (0 - 0) + 5);
    s10 = Math.floor(Math.random() * (0 - 0) + 5);

    item = cm
      .getChar()
      .getInventory(Packages.client.inventory.MapleInventoryType.EQUIP)
      .getItem(1)
      .copy();

    装备星级 = Number(item.getOwner().substring(4, 6));

    当前等级 = cm.getInventory(1).getItem(1).getLevel();

    可升次数 = cm.getInventory(1).getItem(1).getUpgradeSlots();

    总次数 = 可升次数 + 当前等级;

    最高级 = 20;

    剩余次数 = 最高级 - 总次数;

    当前装备 = cm.getInventory(1).getItem(1).getItemId();

    进阶附魔 = 25;
    需要数量 = 1;
    需要材料1 = 4031997;

    需要金币 = (装备星级 + 1) * 5000000 + 20000000;

    //cm.changeMusic("Bgm14/DragonNest");

    //cm.changeMusic("UI/productFail");
    tongguo = false;
    for (var i = 0; i < keyongzb.length; i++) {
      if (当前装备 == keyongzb[i]) {
        tongguo = true;
      }
    }

    if (tongguo) {
      sftgxs = "";
    } else {
      sftgxs = "#r此件装备无法升级！";
    }

    if (装备星级 == 0) {
      dqgl = 100;
    } else if (装备星级 <= 5) {
      dqgl = 110 - 装备星级 * 20;
    } else if (装备星级 < 11) {
      dqgl = 10;
    } else {
      dqgl = 5;
    }

    cggl = Math.floor(Math.random() * 100) <= dqgl;

    var text = "";
    text +=
      "\t\t#v" +
      需要材料1 +
      "# #e#b★★★装备星级强化★★★#k#n #v" +
      需要材料1 +
      "#\r\n";

    text +=
      "#e#b#v" + 当前装备 + "##t" + 当前装备 + "#  " + sftgxs + "#n#b\r\n";

    text += "" + 蓝加 + "#d装备星级:Lv." + 装备星级 + "\r\n";

    text += "" + 蓝加 + "#d当前成功率:" + dqgl + "% #r \r\n";

    text += "" + 蓝加 + "#d四维+攻击+防御+命中 同时提升[5~15]属性\r\n";

    text += "#b需要物品：\r\n";

    text += "#v" + 需要材料1 + "##t" + 需要材料1 + "# X 1\r\n";

    text += "" + 钞票 + "冒险币 " + 需要金币 + "\r\n";

    text += "#d介绍：强化失败不加次数,失败不爆装备,祝君好运\r\n";

    text += "支持装备：\r\n";
    for (var i = 0; i < keyongzb.length; i++) {
      text += "#i" + keyongzb[i] + ":#";
    }

    text += "\r\n----------------------------------------是否开始强化？\r\n";

    //text += "          #L1##b#e"+蓝加+"<<<开始星级强化>>>"+蓝加+"#l\r\n"

    cm.sendYesNo(text);
  } else if (status == 1) {
    item = cm
      .getChar()
      .getInventory(Packages.client.inventory.MapleInventoryType.EQUIP)
      .getItem(1)
      .copy();

    if (!tongguo) {
      var text = "#e#r当前装备无法升星！\r\n\r\n#b只支持以下装备升星\r\n";
      for (var i = 0; i < keyongzb.length; i++) {
        text += "#i" + keyongzb[i] + ":#";
      }

      cm.sendOk(text);
      cm.dispose();
      return;
    }

    // if (item.getPotential2() < 18) {
    //   cm.sendOk("#e#b需要进阶附魔18次以上允许升级！");
    //   cm.dispose();
    //   return;
    // }

    if (item.getPotential3() >= 进阶附魔) {
      cm.sendOk("#e#b抱歉当前装备已经强化到顶级！");
      cm.dispose();
      return;
    }
    if (cm.getMeso() < 需要金币) {
      cm.sendOk("#e#b金币不足,我无法为你升级...");
      cm.dispose();
      return;
    }
    if (cm.haveItem(需要材料1, 需要数量)) {
      cm.gainItem(需要材料1, -需要数量);
      //cm.gainItem(4000463,-需要数量);
      cm.gainMeso(-需要金币);
      if (cggl) {
        //item.setUpgradeSlots((item.getUpgradeSlots() + 1));
        item.setOwner("★Lv." + (装备星级 + 1));

        item.setStr(item.getStr() + s1);

        item.setDex(item.getDex() + s2);

        item.setInt(item.getInt() + s3);

        item.setLuk(item.getLuk() + s4);

        item.setWatk(item.getWatk() + s5);

        item.setMatk(item.getMatk() + s6);

        item.setWdef(item.getWdef() + s7); //物理防御

        item.setMdef(item.getMdef() + s8); //魔法防御

        item.setAcc(item.getAcc() + s9); //命中率

        item.setAvoid(item.getAvoid() + s10); //回避率

        //item.setHp(item.getAvoid() + s10); //setMaxHp

        cm.setLock(item);

        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);

        cm.sendOk("#e#b恭喜你！成功升星一次\r\n");
        //cm.道具喇叭("【★星级装备★】 "+cm.getName(),"★星级强化★,装备得到了升星！",1,item.getPosition());
        cm.worldMessage(6, "【★星级装备★】[" + cm.getName() + "]装备升星" + 装备星级 + "→" + (装备星级 + 1) + "成功。");
        cm.worldMessage(6, "【★星级装备★】[" + cm.getItemName(当前装备) + "]力量      +" + s1 + "");
        cm.worldMessage(6, "【★星级装备★】[" + cm.getItemName(当前装备) + "]敏捷      +" + s2 + "");
        cm.worldMessage(6, "【★星级装备★】[" + cm.getItemName(当前装备) + "]智力      +" + s3 + "");
        cm.worldMessage(6, "【★星级装备★】[" + cm.getItemName(当前装备) + "]运气      +" + s4 + "");
        cm.worldMessage(6, "【★星级装备★】[" + cm.getItemName(当前装备) + "]攻击力    +" + s5 + "");
        cm.worldMessage(6, "【★星级装备★】[" + cm.getItemName(当前装备) + "]魔法力    +" + s6 + "");
        cm.worldMessage(6, "【★星级装备★】[" + cm.getItemName(当前装备) + "]防御力    +" + s7 + "");
        cm.worldMessage(6, "【★星级装备★】[" + cm.getItemName(当前装备) + "]魔法防御  +" + s8 + "");
        cm.worldMessage(6, "【★星级装备★】[" + cm.getItemName(当前装备) + "]命中      +" + s9 + "");
        cm.worldMessage(6, "【★星级装备★】[" + cm.getItemName(当前装备) + "]回避      +" + s10 + "");
        //cm.worldMessage(6,"【★星级装备★】[" + cm.getItemName(当前装备) + "]生命值    +"+ s10 +"");
        cm.playerMessage(5, "恭喜你，装备升星成功！");
        cm.dispose();
      } else {
        cm.sendOk(
          "星级装备能量太过于强大，无法压制住！\r\n#e#b抱歉！升级失败！"
        );
        cm.worldMessage(
          6,
          "【★星级装备★】[" + cm.getName() + "]装备升星" + 装备星级 + "→" + (装备星级 + 1) + "失败。"
        );
        cm.playerMessage(5, "卷轴发出一道光，装备并没有任何变化！");
        cm.dispose();
      }
    } else {
      cm.sendOk("您的#v" + 需要材料1 + "##t" + 需要材料1 + "#不足！");
      cm.dispose();
    }
  }
} //结束大入口
