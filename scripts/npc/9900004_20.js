/*
 
 脚本：收藏手册页面
 */
//素材引用
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var r = "#fUI/UIWindow.img/Quest/TimeQuest/AlarmClock/default/0/0#";

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
  //开始
  if (status == 0) {
    var selStr =
      "\r\n  " +
      心 +
      " " +
      心 +
      "  " +
      心 +
      "  " +
      心 +
      " #r#e < 卷轴手册 > #k#n " +
      心 +
      "  " +
      心 +
      "  " +
      心 +
      " " +
      心 +
      "\r\n\r\n";
    selStr +=
      "		Hi~#b#h ##k，你背包是不是有很多卷轴啊，卷轴种类繁多太占空间了，你可以把它们放在卷轴手册哦。#k\r\n\r\n";
    selStr += "\t\t\t\t#b#L0#返回#l#k\r\n";
    selStr += "\t\t\t\t#b#L1#取出卷轴#l#k\r\n";
    selStr += "\t\t\t\t#b#L2#存入卷轴[选择]#l#k\r\n";
    selStr += "\t\t\t\t#b#L3#存入卷轴[所有]#l#k\r\n";
    cm.是否说明文字(selStr);
  } else if (status == 1) {
    switch (selection) {
      case 0:
        cm.对话结束();
        cm.openNpc(9900004, 0);
        break;
      case 1:
        cm.对话结束();
        cm.openNpc(9900004, 2001);
        break;
      case 2:
        cm.对话结束();
        cm.openNpc(9900004, 2002);
        break;
      case 3:
        for (var i = 0; i <= 96; i++) {
          if (cm.getInventory(2).getItem(i) != null) {
            if (
              cm.getInventory(2).getItem(i).getItemId() >= 2040000 &&
              cm.getInventory(2).getItem(i).getItemId() < 2050000
            ) {
              cm.新增手册收藏(
                cm.getInventory(2).getItem(i).getItemId(),
                cm
                  .getPlayer()
                  .判断物品数量(cm.getInventory(2).getItem(i).getItemId()),
                cm.getPlayer().id
              );
              cm.收物品(
                cm.getInventory(2).getItem(i).getItemId(),
                cm
                  .getPlayer()
                  .判断物品数量(cm.getInventory(2).getItem(i).getItemId())
              );
            }
          }
        }
        cm.getPlayer().道具存档();
        cm.说明文字("一键存入所有卷轴成功。");
        cm.对话结束();
        break;
    }
  }
}
