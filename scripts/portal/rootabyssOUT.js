/*
  鲁塔比斯地图返回到以前的地图
*/

function enter(pi) {
    var returnMap = pi.getSavedLocation("ROOT");
    pi.clearSavedLocation("ROOT");
    if (returnMap < 0) {
        returnMap = 105000000;;
    }
    pi.warp(returnMap);
    pi.playerMessage("从鲁塔比斯回到原来所在的地方。");
}
