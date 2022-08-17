/*
 
 脚本：枫叶募捐箱
 */
function start() {
  status = -1;
  action(1, 0, 0);
}
/*
 cm.物品兑换1(被兑换物品代码,数量,兑换物品代码,数量);
 枫叶 x 200 = 黄金枫叶 x 10
 */
function action(mode, type, selection) {
  if (status == 0 && mode == 0) {
    cm.对话结束();
    return;
  }
  if (mode == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    var selStr =
      "    Hi~#b#h ##k，你身上有枫叶吗？枫叶可是好东西，他能够做很多事情哦，如果你有" +
      cm.显示物品(1032040) +
      "，我可以帮你升级哦。\r\n\r\n";

    selStr += " #L1##b枫叶兑换黄金枫叶#r(200:10)#k#l\r\n";
    //隐藏着的升级
    if (cm.判断物品数量(1032040, 1) && cm.判断等级() >= 40) {
      selStr += " #L100##r[成长]#b升级枫叶耳环20→40#k#l\r\n";
    } else if (cm.判断物品数量(1032041, 1) && cm.判断等级() >= 70) {
      selStr += " #L101##r[成长]#b升级枫叶耳环40→70#k#l\r\n";
    }

    cm.说明文字(selStr);
  } else if (status == 1) {
    switch (selection) {
      case 1:
        if (cm.判断背包其他栏().isFull()) {
          cm.sendNext("其他栏必须有一个空位。");
          cm.对话结束();
          return;
        }
        cm.物品兑换1(4001126, 200, 4000313, 10);
        cm.对话结束();
        break;
      case 100:
        if (cm.判断背包装备栏().isFull()) {
          cm.sendNext("装备栏必须有一个空位。");
          cm.对话结束();
          return;
        }
        if (cm.判断每日值("升级枫叶耳环") > 0) {
          cm.sendNext("你今天已经无法尝试升级了。");
          cm.对话结束();
          return;
        }
        if (cm.随机数(100) <= 10) {
          cm.物品兑换1(1032040, 1, 1032041, 1);
          cm.sendNext("升级成功。");
        } else {
          cm.sendNext("升级失败。");
        }
        cm.增加每日值("升级枫叶耳环");
        cm.对话结束();
        break;
      case 101:
        if (cm.判断背包装备栏().isFull()) {
          cm.sendNext("装备栏必须有一个空位。");
          cm.对话结束();
          return;
        }
        if (cm.判断每日值("升级枫叶耳环") > 0) {
          cm.sendNext("你今天已经无法尝试升级了。");
          cm.对话结束();
          return;
        }
        if (cm.随机数(100) <= 10) {
          cm.物品兑换1(1032041, 1, 1032042, 1);
          cm.sendNext("升级成功。");
        } else {
          cm.sendNext("升级失败。");
        }
        cm.增加每日值("升级枫叶耳环");
        cm.对话结束();
        break;
    }
  }
}
