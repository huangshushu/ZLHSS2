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

    selStr += " #L1##b兑换 " + cm.显示物品(3012011) + "#k#l\r\n";

    cm.说明文字(selStr);
  } else if (status == 1) {
    switch (selection) {
      case 1:
        if (
          cm.判断物品数量(2022028, 100) &&
          cm.判断物品数量(2022029, 100) &&
          cm.判断物品数量(2022030, 100)
        ) {
          cm.收物品(2022028, 100);
          cm.收物品(2022029, 100);
          cm.收物品(2022030, 100);
          cm.给物品(3012011, 1);
          cm.个人存档();
          cm.说明文字("恭喜你成功兑换 " + cm.显示物品(3012011) + "");
        } else {
          cm.说明文字(
            "兑换 " +
              cm.显示物品(3012011) +
              " 需要 \r\n\r\n" +
              cm.显示物品(2022028) +
              " x 100\r\n" +
              cm.显示物品(2022029) +
              " x 100\r\n" +
              cm.显示物品(2022030) +
              " x 100"
          );
        }
        cm.对话结束();
        break;
    }
  }
}
