/*
 
 */
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (status == 0 && mode == 0) {
    cm.dispose();
    return;
  }
  if (mode == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    var selStr = "  Hi~#b#h ##k你喜欢幸福村的雪人吗？\r\n\r\n";
    if (cm.判断地图() == 889100100) {
      selStr += " #L2##b进入活动入口#k#l\r\n";
    }

    cm.说明文字(selStr);
  } else if (status == 1) {
    switch (selection) {
      case 2:
        cm.warp(889100000, 2);
        cm.dispose();
        break;
    }
  }
}
