/*
 
 脚本：传送
 */
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);

var ZEV = 5100000;
var 数量 = 1;
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
      "\r\n   " +
      心 +
      " " +
      心 +
      "  " +
      心 +
      "  " +
      心 +
      " #r#e < 音乐点播 > #k#n " +
      心 +
      "  " +
      心 +
      "  " +
      心 +
      " " +
      心 +
      "\r\n\r\n";
    selStr +=
      "\t\t点播需要消耗:" +
      cm.显示物品(ZEV) +
      " x #r" +
      数量 +
      "#k 背包[#r#c" +
      ZEV +
      "##k]\r\n\r\n";
    selStr += "\t\t\t\t  #L0##b返回界面#k#l\r\n";
    selStr += "\t\t\t\t  #L1##b地图点播#k#l\r\n";
    selStr += "\t\t\t\t  #L2##b全服点播#k#l\r\n";
    cm.说明文字(selStr);
  } else if (status == 1) {
    switch (selection) {
      case 0:
        cm.dispose();
        cm.openNpc(9900004, 0);
        break;
      case 1:
        cm.dispose();
        cm.openNpc(9900004, 151);
        break;
      case 2:
        cm.dispose();
        cm.openNpc(9900004, 152);
        break;
    }
  }
}
