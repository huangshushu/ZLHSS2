/*
 
 魔法师二转转职教官
 */

var 返回图 = 101020000;
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
    var selStr = "你是否已经收集齐了#b30个 #v4031013# #t4031013##k ？\r\n";
    selStr += "  #L1##b我已经收集好了#k#l\r\n";
    selStr += "  #L2##b我要离开这里#k#l\r\n";
    cm.sendSimple(selStr);
  } else if (status == 1) {
    switch (selection) {
      case 1:
        if (cm.haveItem(4031013, 30)) {
          cm.warp(返回图, 0);
          cm.removeAll(4031013);
          cm.gainItem(4031009, -1);
          cm.gainItem(4031012, 1);
          cm.对话结束();
        } else {
          cm.sendOk("你收集到了#b30个 #v4031013# #t4031013##k 吗？");
          cm.对话结束();
        }
        break;
      case 2:
        cm.warp(返回图, 0);
        cm.对话结束();
        break;
    }
  }
}
