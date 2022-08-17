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
      "  " +
      心 +
      " " +
      心 +
      "  " +
      心 +
      "  " +
      心 +
      " #r#e < 狩猎记录 > #k#n " +
      心 +
      "  " +
      心 +
      "  " +
      心 +
      " " +
      心 +
      "\r\n\r\n";
    selStr += "" + cm.怪物击杀记录() + "";
    cm.说明文字(selStr);
  } else if (status == 1) {
    switch (selection) {
      default:
        cm.dispose();
        cm.openNpc(2000, 11);
        break;
    }
  }
}
