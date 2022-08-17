/*
 
 脚本：扎昆进入
 警告：请勿多频道挑战
 */

var status = -1;
var victim;

function start() {
  if (cm.判断指定地图怪物数量(912010100) > 5) {
    cm.playerMessage(5, "已经开始挑战了。");
    cm.dispose();
    return false;
  }

  var level = cm.getPlayerStat("LVL");

  if (!cm.haveItem(4001017) || level < 50) {
    cm.playerMessage(5, "你身上没有火焰之眼。或者你等级没达到50级。");
    cm.dispose();
  } else {
    if (cm.getPlayerCount(912010100) <= 0) {
      var FantMap = cm.getMap(912010100);
      FantMap.resetFully();
      cm.重置扎昆重回记录(cm.getPlayer().getClient().getChannel());
      cm.warp(912010100, 0);
      cm.gainItem(4001017, -1);
      cm.给物品(5253004, 1);
    } else {
      cm.warp(912010100, 0);
    }
    cm.dispose();
  }
}

function action(mode, type, selection) {
  switch (status) {
    case 1:
      if (mode == 1) {
        cm.warp(211042300, 0);
      }
      cm.dispose();
      break;
  }
}
