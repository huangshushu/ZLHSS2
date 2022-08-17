/*
 
 脚本：巡查面板
 */

var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var xx;
var xxx;
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
      "    " +
      心 +
      " " +
      心 +
      "  " +
      心 +
      "  " +
      心 +
      " #r#e < 在线玩家 > #k#n " +
      心 +
      "  " +
      心 +
      "  " +
      心 +
      " " +
      心 +
      "\r\n\r\n";
    selStr += "" + cm.显示在线玩家() + " ";
    cm.是否说明文字(selStr);
  } else if (status == 1) {
    xx = selection;
    var selStr2 =
      "    " +
      心 +
      " " +
      心 +
      "  " +
      心 +
      "  " +
      心 +
      " #r#e < 在线玩家 > #k#n " +
      心 +
      "  " +
      心 +
      "  " +
      心 +
      " " +
      心 +
      "\r\n\r\n";
    selStr2 += "" + cm.显示在线玩家详细(xx) + " ";
    cm.是否说明文字(selStr2);
  } else if (status == 2) {
    xxx = selection;
    if (xxx >= 0 && xxx < 1000000) {
      cm.结束对话();
      cm.根据ID跟踪玩家(xxx);
    } else if (xxx < 0) {
      cm.结束对话();
    } else {
      cm.结束对话();
      cm.根据ID封号玩家(xxx - 1000000);
    }
  }
}
