/*
 
 海盗二转转职教官
 */

var 返回图 = 120000101;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(mode, type, selection) {
  if (status <= 0 && mode <= 0) {
    cm.dispose();
    return;
  }
  if (mode == 1) {
    status++;
  } else {
    status--;
  }
  if (status <= 0) {
    var selStr = " \r\n";
    if (cm.getMapId() == 108000500) {
      selStr += "你是否已经收集齐了#b15个 #v4031857# #t4031857##k ？\r\n";
    } else if (cm.getMapId() == 108000502) {
      selStr += "你是否已经收集齐了#b15个 #v4031856# #t4031856##k ？\r\n";
    }
    selStr += "  #L3##b我要离开这里#k#l\r\n";
    cm.sendSimple(selStr);
  } else if (status == 1) {
    switch (selection) {
      case 1:
        if (cm.haveItem(4031857, 15)) {
          cm.warp(返回图, 0);
          cm.removeAll(4031857);
          cm.gainItem(4031012, 1);
          cm.对话结束();
        } else {
          cm.sendOk("你收集到了#b15个 #v4031857# #t4031857##k 吗？");
          cm.对话结束();
        }
        break;
      case 2:
        if (cm.haveItem(4031856, 15)) {
          cm.warp(返回图, 0);
          cm.removeAll(4031856);
          cm.gainItem(4031012, 1);
          cm.对话结束();
        } else {
          cm.sendOk("你收集到了#b15个 #v4031856# #t4031856##k 吗？");
          cm.对话结束();
        }
        break;

      case 3:
        cm.warp(返回图, 0);
        cm.对话结束();
        break;
    }
  }
}
