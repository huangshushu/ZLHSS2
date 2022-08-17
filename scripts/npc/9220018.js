/*
 
 */
function action(mode, type, selection) {
  if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
    cm.sendOk("请找队长来找我谈话。");
  } else if (cm.判断团队物品(5252001) != 0) {
    cm.sendOk("你，或者你的队员没有 " + cm.显示物品(5252001) + "。");
  } else {
    var next = true;
    if (
      cm.判断指定地图玩家数量(674030000) > 0 ||
      cm.判断指定地图玩家数量(674030200) > 0 ||
      cm.判断指定地图玩家数量(674030300) > 0
    ) {
      next = false;
    }
    if (next) {
      var em = cm.getEventManager("MV");
      if (em == null) {
        cm.sendOk("目前副本出了一点状况，请稍后再尝试。");
      } else {
        cm.givePartyItems(5252001, -1);
        em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
      }
    } else {
      cm.sendOk("已经有人在挑战了哦。");
    }
  }
  cm.对话结束();
}
