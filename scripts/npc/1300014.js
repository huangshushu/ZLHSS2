/*
 
 */

function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (mode == -1) {
    cm.dispose();
  } else {
    if (mode == 1) status++;
    else status--;
  }
  if (status == 0) {
    if (cm.isQuestActive(2314)) {
      cm.PlayerToNpc("这是一个#b巨大的魔法屏障#k ...");
    } else if (cm.isQuestActive(2322)) {
      cm.PlayerToNpc("这个地方还是先报告给 #b#p1300003##k 知道吧！");
    } else {
      cm.PlayerToNpc("我是否该使用 #b#v2430014# #t2430014#？？");
    }
  } else if (status == 1) {
    if (cm.isQuestActive(2314)) {
      cm.forceCompleteQuest(2314);
      cm.dispose();
    } else {
      if (cm.haveItem(2430014, 1)) {
        cm.gainItem(2430014, -1);
        cm.开始任务(2314);
        cm.playerMessage("你可以进去了。");
      } else {
        cm.sendOk(
          "你没有#v2430014##r#z2430014##k，无法进入，不知道在哪里获得的话，可以通过快捷商店购买"
        );
        cm.dispose();
      }
    }
  }
}
