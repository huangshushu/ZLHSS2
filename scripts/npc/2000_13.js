var status = -1;

function action(mode, type, selection) {
  if (mode == 1) {
    status++;
  } else {
    if (status == 0) {
      cm.dispose();
    }
    status--;
  }
  var MC = cm.getServerName();
  if (status == 0) {
    var selStr = " #e#d选择你要登记的怪物:#k#n\r\n\r\n#b";
    var iz = cm.getMap().getAllUniqueMonsters().iterator();
    while (iz.hasNext()) {
      var zz = iz.next();
      selStr += "#L" + zz + "##o" + zz + "##l\r\n";
    }
    cm.sendSimple(selStr);
  } else if (status == 1) {
    if (selection <= 0) {
      cm.说明文字("登记失败。");
      cm.dispose();
      return;
    }
    if (cm.判断是否已经杀怪记录(selection) == 0) {
      cm.增加怪物击杀记录(selection);
      cm.说明文字("恭喜你登记成功。");
    } else {
      cm.说明文字("已经登记了的怪物。");
    }
    cm.dispose();
  }
}
