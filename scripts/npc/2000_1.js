var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var status = -1;

function start() {
  status = -1;
  action(1, 0, 0);
}
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
  if (cm.getMap().getAllUniqueMonsters().size() <= 0) {
    cm.说明文字("该地图没有怪物数据。");
    cm.dispose();
    return;
  }
  if (status == 0) {
    var selStr =
      "\r\n  " +
      心 +
      "  " +
      心 +
      "  " +
      心 +
      " #r#e < " +
      cm.开服名称() +
      "怪物详细 > #k#n " +
      心 +
      "  " +
      心 +
      "  " +
      心 +
      "\r\n\r\n";
    selStr +=
      "#d选择你要查看的怪物，我会给你查看目标的详细属性，和物品掉落信息。#k#n 快捷指令 @怪物详细\r\n#b";
    var iz = cm.getMap().getAllUniqueMonsters().iterator();
    while (iz.hasNext()) {
      var zz = iz.next();
      selStr += "#L" + zz + "##o" + zz + "##l\r\n";
    }
    cm.sendSimple(selStr);
  } else if (status == 1) {
    //cm.sendNext(cm.checkDrop(selection));
    cm.sendNext(cm.checkDrop(selection));
    cm.dispose();
  }
}
