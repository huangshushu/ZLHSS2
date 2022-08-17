/*
 
 脚本：彩虹岛去明珠港
 */

var 金币 = 150;
var status = 0;

function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (status >= 1 && mode == 0) {
    cm.sendNext("你是否要传送到明珠港呢");
    cm.dispose();
    return;
  }
  if (mode == 1) status++;
  else status--;
  if (status == 0) {
    cm.sendNext("你好！你是要去#b明珠港#k吗？");
  } else if (status == 1) {
    var job = cm.getJob();
    cm.sendYesNo("支付我 #v5200000# #b150#k 金币我就送你过去。");
    金币 = 150;
  } else if (status == 2) {
    if (cm.getMeso() < 金币) {
      cm.sendNext("你金币不够。!");
    } else {
      cm.gainMeso(-金币);
      cm.warp(2010000, 0);
    }
    cm.dispose();
  }
}
