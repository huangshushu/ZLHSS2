/*
 
 魔法密林码头去天空之城
 101000300
 */
var status = 0;
var 金币 = 5000;

function start() {
  cm.sendYesNo(
    "      #b#h ##k你好，我是码头服务员乔伊。你想离开金银岛去天空之城吗? 需要花费 #b" +
      金币 +
      " 金币#k 购买#b#z4031045##k 才可以上船哦。"
  );
}

function action(mode, type, selection) {
  if (mode == -1) cm.dispose();
  else {
    if (mode == 0) {
      cm.sendNext("你有一些经济的负担而无法搭船对吧?");
      cm.dispose();
      return;
    }
    status++;
    if (status == 1) {
      if (cm.getMeso() >= 金币 && cm.canHold(4031045)) {
        cm.gainItem(4031045, 1);
        cm.gainMeso(-金币);
        cm.dispose();
      } else {
        cm.sendOk(
          "请问你有 #b" +
            金币 +
            " 金币#k? 如果有的话,我劝您检查下身上其他栏位看是否有没有满了."
        );
        cm.dispose();
      }
    }
  }
}
