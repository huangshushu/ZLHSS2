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
      "\t" +
      心 +
      "  " +
      心 +
      "  " +
      心 +
      "  " +
      心 +
      " #r#e < 转入记录 > #k#n " +
      心 +
      "  " +
      心 +
      "  " +
      心 +
      "  " +
      心 +
      "\r\n\r\n";
    selStr += "\r\n" + cm.显示转账记录(cm.getPlayer().银行账号(), 0, 0) + "";
    //selStr += "\t#e点券转入记录;#n\r\n"+cm.显示转账记录( cm.getPlayer().银行账号(),0,0)+"";
    //selStr += "\t#e金币转入记录;#n\r\n"+cm.显示转账记录( cm.getPlayer().银行账号(),0,1)+"";
    cm.说明文字(selStr);
  } else if (status == 1) {
    switch (selection) {
      case 0:
        cm.dispose();
        cm.openNpc(9900004, 100);
        break;
    }
  }
}
