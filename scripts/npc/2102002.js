/*
 
 */
var cost = 6000;
var status = 0;

function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (mode == -1) {
    cm.dispose();
  } else {
    if (mode == 1) {
      status++;
    }
    if (mode == 0) {
      cm.sendNext("你有一些经济的负担而无法搭船对吧?");
      cm.dispose();
      return;
    }
    if (status == 0) {
      cm.sendYesNo(
        "		你好,我是西拉斯。你想离开纳希沙漠到天空之城吗? 需要花费#b " +
          cost +
          " #k金币 购买#b#t4031045##k 才可以启航。"
      );
    } else if (status == 1) {
      if (cm.getMeso() >= cost && cm.canHold(4031045)) {
        cm.gainItem(4031045, 1);
        cm.gainMeso(-cost);
      } else {
        cm.sendOk(
          "请问你有 #b" +
            cost +
            " 金币#k? 如果有的话,我劝您检查下身上其他栏位看是否有没有满了."
        );
      }
      cm.dispose();
    }
  }
}
