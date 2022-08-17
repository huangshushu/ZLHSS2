/*
 
 脚本：清理背包
 */
var 图标1 = "#fUI/UIWindow.img/FadeYesNo/icon7#";
var 图标2 = "#fUI/StatusBar.img/BtClaim/mouseOver/0#";
var 关闭 = "#fUI/UIWindow.img/CashGachapon/BtOpen/mouseOver/0#";
var 打开 = "#fUI/UIWindow.img/CashGachapon/BtOpen/disabled/0#";
var JD = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var 装备2 = "#fUI/CashShop.img/Base/Tab2/Enable/0#";
var 消耗2 = "#fUI/CashShop.img/Base/Tab2/Enable/1#";
var 设置2 = "#fUI/CashShop.img/Base/Tab2/Enable/2#";
var 其他2 = "#fUI/CashShop.img/Base/Tab2/Enable/3#";
var 特殊2 = "#fUI/CashShop.img/Base/Tab2/Enable/4#";
var a = "#fEffect/CharacterEff.img/1112926/0/1#";
function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (status <= 0 && mode <= 0) {
    cm.dispose();
    return;
  }
  if (mode == 1) {
    status++;
  } else {
    status--;
  }
  if (status <= 0) {
    var selStr =
      "\r\n   " +
      心 +
      " " +
      心 +
      "  " +
      心 +
      "  " +
      心 +
      " #r#e < 清理背包 > #k#n " +
      心 +
      "  " +
      心 +
      "  " +
      心 +
      " " +
      心 +
      "\r\n\r\n";

    selStr +=
      "		Hi~#b#h ##k，选择你要清理的物品类型吧，我可以帮你清除掉背包的物品哦，比如那些丢弃不掉的物品。#k\r\n\r\n";
    selStr += "#L0##b返回#l\r\n\r\n";
    selStr += "#d#e单件选择删除(图标);#k#n\r\n";
    selStr +=
      "#L1#" +
      装备2 +
      "#l\t#L2#" +
      消耗2 +
      "#l\t#L3#" +
      设置2 +
      "#l\t#L4#" +
      其他2 +
      "#l\t#L5#" +
      特殊2 +
      "#l\r\n\r\n";
    selStr += "#d#e单件选择删除(文字);#k#n\r\n";
    selStr +=
      "#L11#" +
      装备2 +
      "#l\t#L12#" +
      消耗2 +
      "#l\t#L13#" +
      设置2 +
      "#l\t#L14#" +
      其他2 +
      "#l\t#L15#" +
      特殊2 +
      "#l\r\n\r\n";
    selStr += "#d#e指定背包全部删除;#k#n\r\n";
    selStr +=
      "#L21#" +
      装备2 +
      "#l\t#L22#" +
      消耗2 +
      "#l\t#L23#" +
      设置2 +
      "#l\t#L24#" +
      其他2 +
      "#l\t#L25#" +
      特殊2 +
      "#l\r\n\r\n";
    selStr += "#d#e指定背包位置删除;#k#n\r\n";
    selStr += "#L20##b输入位置删除#l#k\r\n";

    cm.sendSimple(selStr);
  } else if (status == 1) {
    switch (selection) {
      case 25:
        cm.dispose();
        cm.openNpc(9900004, 66);
        break;
      case 24:
        cm.dispose();
        cm.openNpc(9900004, 65);
        break;
      case 23:
        cm.dispose();
        cm.openNpc(9900004, 64);
        break;
      case 22:
        cm.dispose();
        cm.openNpc(9900004, 63);
        break;
      case 21:
        cm.dispose();
        cm.openNpc(9900004, 62);
        break;
      case 20:
        cm.dispose();
        cm.openNpc(9900004, 61);
        break;
      case 0:
        cm.dispose();
        cm.openNpc(9900004, 0);
        break;
      case 1:
        cm.dispose();
        cm.openNpc(9900004, 51);
        break;
      case 2:
        cm.dispose();
        cm.openNpc(9900004, 52);
        break;
      case 3:
        cm.dispose();
        cm.openNpc(9900004, 53);
        break;
      case 4:
        cm.dispose();
        cm.openNpc(9900004, 54);
        break;
      case 5:
        cm.dispose();
        cm.openNpc(9900004, 55);
        break;
      case 11:
        cm.dispose();
        cm.openNpc(9900004, 56);
        break;
      case 12:
        cm.dispose();
        cm.openNpc(9900004, 57);
        break;
      case 13:
        cm.dispose();
        cm.openNpc(9900004, 58);
        break;
      case 14:
        cm.dispose();
        cm.openNpc(9900004, 59);
        break;
      case 15:
        cm.dispose();
        cm.openNpc(9900004, 60);
        break;
    }
  }
}
