/*
 
 脚本：星缘
 */
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
function start() {
  status = -1;
  action(1, 0, 0);
}

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
  if (cm.getInventory(1).isFull()) {
    cm.说明文字("请保证 #b装备栏#k 至少有2个位置。");
    cm.对话结束();
    return;
  } else if (cm.getInventory(2).isFull()) {
    cm.说明文字("请保证 #b消耗栏#k 至少有2个位置。");
    cm.对话结束();
    return;
  } else if (cm.getInventory(3).isFull()) {
    cm.说明文字("请保证 #b设置栏#k 至少有2个位置。");
    cm.对话结束();
    return;
  } else if (cm.getInventory(4).isFull()) {
    cm.说明文字("请保证 #b其他栏#k 至少有2个位置。");
    cm.对话结束();
    return;
  } else if (cm.getInventory(5).isFull()) {
    cm.说明文字("请保证 #b特殊栏#k 至少有2个位置。");
    cm.对话结束();
    return;
  }
  if (status == 0) {
    var selStr =
      "	  Hi~#b#h ##k我是星缘，你如果能给我足够多我想要的，我就给你兑换不一样的道具哦。\r\n";

    selStr += " #L1##b兑换 " + cm.显示物品(3010037) + "#k#l\r\n";
    selStr += " #L2##b兑换 " + cm.显示物品(4032226) + "#k#l\r\n";
    //selStr += " #L3##b兑换 "+cm.显示物品(2101118)+"#k#l\r\n";
    selStr += " #L4##b兑换 " + cm.显示物品(2370000) + "#k#l\r\n";
    selStr += " #L5##b兑换 " + cm.显示物品(2340000) + "#k#l\r\n";

    cm.说明文字(selStr);
  } else if (status == 1) {
    switch (selection) {
      case 5:
        if (cm.判断物品数量(3994046, 1)) {
          cm.收物品(3994046, 1);
          cm.给物品(2340000, 1);
          cm.个人存档();
          cm.说明文字("恭喜你成功兑换 " + cm.显示物品(2340000) + "");
        } else {
          cm.说明文字(
            "兑换 " +
              cm.显示物品(2340000) +
              " 需要 " +
              cm.显示物品(3994046) +
              " x 1"
          );
        }
        cm.对话结束();
        break;
      case 4:
        if (cm.判断物品数量(3994046, 1)) {
          cm.收物品(3994046, 1);
          cm.给物品(2370000, 10);
          cm.个人存档();
          cm.说明文字("恭喜你成功兑换 " + cm.显示物品(2101118) + " x 10");
        } else {
          cm.说明文字(
            "兑换 " +
              cm.显示物品(2370000) +
              "x 10 需要 " +
              cm.显示物品(3994046) +
              " x 1"
          );
        }
        cm.对话结束();
        break;
      case 3:
        if (cm.判断物品数量(3994046, 50)) {
          cm.收物品(3994046, 50);
          cm.给物品(2101118, 1);
          cm.个人存档();
          cm.说明文字("恭喜你成功兑换 " + cm.显示物品(2101118) + "");
        } else {
          cm.说明文字(
            "兑换 " +
              cm.显示物品(2101118) +
              " 需要 " +
              cm.显示物品(3994046) +
              " x 50"
          );
        }
        cm.对话结束();
        break;
      case 1:
        if (cm.判断物品数量(3994046, 100)) {
          cm.收物品(3994046, 100);
          cm.给物品(3010037, 1);
          cm.个人存档();
          cm.说明文字("恭喜你成功兑换 " + cm.显示物品(3010037) + "");
        } else {
          cm.说明文字(
            "兑换 " +
              cm.显示物品(3010037) +
              " 需要 " +
              cm.显示物品(3994046) +
              " x 100"
          );
        }
        cm.对话结束();
        break;
      case 2:
        if (cm.判断物品数量(3994046, 10)) {
          cm.收物品(3994046, 10);
          cm.给物品(4032226, 1);
          cm.个人存档();
          cm.说明文字("恭喜你成功兑换 " + cm.显示物品(4032226) + "");
        } else {
          cm.说明文字(
            "兑换 " +
              cm.显示物品(4032226) +
              " 需要 " +
              cm.显示物品(3994046) +
              " x 10"
          );
        }
        cm.对话结束();
        break;
    }
  }
}
