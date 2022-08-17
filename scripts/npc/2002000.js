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
    var selStr =
      "	Hi~#b#h ##k你是回去了吗？你觉得这里怎样，是不是很漂亮的小村庄，欢迎你再来哦。\r\n\r\n";
    if (cm.判断地图() == 209000000) {
      selStr += " #L1##b我要回去了#k#l\r\n";
      //selStr += " #L2##b去活动入口#k#l\r\n";
      selStr += " #L3##b进入组队室#k#l\r\n";
    }

    cm.说明文字(selStr);
  } else if (status == 1) {
    switch (selection) {
      case 1:
        cm.dispose();
        cm.warp(910000000, 0);
        break;
      case 2:
        cm.warp(889100100, 1);
        cm.dispose();
        break;
      case 3:
        cm.warp(209080100, 2);
        cm.dispose();
        break;
    }
  }
}
