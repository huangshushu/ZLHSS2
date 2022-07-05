
/*
  次元之境进入 返回到以前的地图
*/

function enter(pi) {
    var returnMap = pi.getSavedLocation("MULUNG_TC");
    pi.clearSavedLocation("MULUNG_TC");
    if (returnMap <= 0) {
        returnMap = 100000000;
    }
    pi.warp(returnMap);
    pi.playerMessage("通过次元之境移动的玩家将移动到原来的地方。");
}

