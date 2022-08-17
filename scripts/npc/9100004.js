/*
SnailMS脚本生成器
*/
importClass(java.util.regex.Pattern);
importClass(java.util.ArrayList);
importClass(java.lang.Integer);

var 音符 = "#fEffect/CharacterEff/1003276/0/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";

function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (mode == 1) {
    status++;
  } else {
    if (status == 0) {
      cm.sendOk("对话结束语");
      cm.dispose();
      return;
    }
    status--;
  }
  //设置区域
  var 是否开启 = false; //关闭脚本是false,开启是true
  var 活动名称 = "端午节活动";
  var 兑换物 = 2022034;
  var 奖品集合 = new ArrayList();
  var 价格集合 = new ArrayList();
  //需要添加奖品和价格，就在下面添加，一个奖品对应一个价格
  奖品集合.add(1053267); //时装上衣
  价格集合.add(666); //时装上衣价格
  奖品集合.add(1053267); //时装裤子
  价格集合.add(666); //时装裤子价格
  奖品集合.add(2022468); //血箱子
  价格集合.add(5); //血箱子价格
  奖品集合.add(2340000); //祝福卷轴
  价格集合.add(100); //祝福卷轴价格
  奖品集合.add(2049100); //混沌卷轴
  价格集合.add(100); //混沌卷轴价格
  奖品集合.add(4310088); //赞助币
  价格集合.add(50); //赞助币价格
  if (status == 0) {
    if (!是否开启) {
      cm.sendOk("抱歉，现在不是活动时期，商店暂不开放~");
      cm.dispose();
      return;
    }
    var tex2 = "";
    var text = "";
    for (i = 0; i < 10; i++) {
      text += "";
    }
    text +=
      "" +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      "\r\n";
    text +=
      " \t\t  #e#r #v" +
      兑换物 +
      "#  " +
      活动名称 +
      "兑换商店  #v" +
      兑换物 +
      "##k#n              \r\n";
    text +=
      "" +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      音符 +
      "\r\n";

    var tex2 = "" + cm.getHyPay(1) + "";

    for (var i = 0; i < 奖品集合.size(); i++) {
      switch (奖品集合.get(i)) {
        case 1053267: //需要特殊描述，就这样写进来
          text +=
            "#L" +
            i +
            "##r" +
            蓝色角点 +
            "#b\t#v" +
            奖品集合.get(i) +
            "# #r15天全属性15 双G15#b [需 #v" +
            兑换物 +
            "# " +
            价格集合.get(i) +
            " 个]  #k  #l\r\n"; //3
          break;
        case 1062045: //需要特殊描述，就这样写进来
          text +=
            "#L" +
            i +
            "##r" +
            蓝色角点 +
            "#b\t#v" +
            奖品集合.get(i) +
            "# #r15天全属性15 双G15#b [需 #v" +
            兑换物 +
            "# " +
            价格集合.get(i) +
            " 个]  #k  #l\r\n"; //3
          break;
        default: //默认的描述，这里别动
          text +=
            "#L" +
            i +
            "##r" +
            蓝色角点 +
            "\t#v" +
            奖品集合.get(i) +
            "##d#z" +
            奖品集合.get(i) +
            "##b [需 #v" +
            兑换物 +
            "# " +
            价格集合.get(i) +
            " 个]  #k  #l\r\n"; //3
      }
    }
    text += "\r\n";
    text +=
      "" +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      "\r\n\r\n";
    text +=
      "" +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      爱心 +
      "\r\n\r\n";
    cm.sendSimple(text);
  } else if (status == 1) {
    if (cm.getInventory(1).isFull(0)) {
      cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
      cm.dispose();
      return;
    } else if (cm.getInventory(2).isFull(0)) {
      cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
      cm.dispose();
      return;
    } else if (cm.getInventory(3).isFull(0)) {
      cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
      cm.dispose();
      return;
    } else if (cm.getInventory(4).isFull(0)) {
      cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
      cm.dispose();
      return;
    } else if (cm.getInventory(5).isFull(0)) {
      cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
      cm.dispose();
      return;
    } else if (cm.haveItem(兑换物, 价格集合.get(selection))) {
      switch (奖品集合.get(selection)) {
        case 1053267: //需要特殊给予方式，就这样写进来
          cm.给属性装备(
            奖品集合.get(selection),
            0,
            0,
            15,
            15,
            15,
            15,
            0,
            0,
            15,
            15,
            0,
            0,
            0,
            0,
            0,
            0,
            360
          );
          break;
        case 2614101: //需要特殊给予方式，就这样写进来
          cm.给属性装备(
            奖品集合.get(selection),
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            360
          );
          break;
        default: //这里就是默认的给予方式，这里别动
          cm.gainItem(奖品集合.get(selection), 1);
      }
      cm.gainItem(兑换物, -价格集合.get(selection));
      cm.sendOk("购买成功！");
      var item = cm.getNewEquip(奖品集合.get(selection));
      //cm.全服道具公告("[" + 活动名称 + "]", "恭喜玩家 "+cm.getPlayer().getName()+" 成功兑换", item);
      cm.dispose();
    } else {
      cm.sendOk("#r你的#v" + 兑换物 + "#不足。");
      cm.dispose();
    }

    return;
  } else {
    cm.dispose();
    return;
  }
}
