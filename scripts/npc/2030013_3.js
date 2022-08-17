/*
 
 脚本：扎昆进入
 警告：请勿多频道挑战
 */

var status = -1;
var victim;

function start() {
  if (cm.判断指定地图玩家数量(209000014) > 0) {
    cm.playerMessage(5, "里面已经有人开始挑战了。");
    cm.dispose();
    return false;
  }

  var level = cm.getPlayerStat("LVL");

  if (!cm.haveItem(5252001) || level < 120) {
    cm.playerMessage(
      5,
      "你身上没有门票，可以在快捷商店购买。或者你等级没达到120级。"
    );
    cm.playerMessage(
      1,
      "你身上没有门票，可以在快捷商店购买。或者你等级没达到120级。"
    );
    cm.dispose();
  } else {
    if (cm.getPlayerCount(209000014) <= 0) {
      var FantMap = cm.getMap(209000014);
      cm.playerMessage(
        6,
        "玩家 [" + cm.getPlayer().getName() + "] 进入了土豪练功房"
      );
      FantMap.resetFully();
      cm.重置扎昆重回记录(cm.getPlayer().getClient().getChannel());
      cm.warp(209000014, 0);
    } else {
      cm.warp(209000014, 0);
    }
    cm.dispose();
  }
}

function action(mode, type, selection) {
  switch (status) {
    case 1:
      if (mode == 1) {
        cm.warp(910000000, 0);
      }
      cm.dispose();
      break;
  }
}
