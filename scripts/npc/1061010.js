/*
 戏服务端
 */
function start() {
  cm.sendYesNo("请问你是否要离开呢？");
}

function action(mode, type, selection) {
  if (mode == 1) {
    var map = cm.getMapId();
    var kill = cm.getMap().killAllMonsters(true);
    var tomap;
    //弓箭手 森林迷宫
    if (map == 108010101) {
      kill;
      tomap = 105040305;
      //魔法师 巫婆森林II
    } else if (map == 108010201) {
      kill;
      tomap = 100040106;
      //战士 蚂蚁广场
    } else if (map == 108010301) {
      kill;
      tomap = 105070001;
      //飞侠 猴子沼泽
    } else if (map == 108010401) {
      kill;
      tomap = 107000402;
      //海盗 火独眼兽洞穴
    } else if (map == 108010501) {
      kill;
      tomap = 105070200;
    }
    cm.warp(tomap);
  }
  cm.dispose();
}
