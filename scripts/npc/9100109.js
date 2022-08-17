/*

 */

function action(mode, type, selection) {
  if (cm.判断每日值("换豆豆") <= 10) {
    if (cm.判断物品数量(4110010, 1)) {
      var 豆豆 = cm.随机数(100);
      cm.给豆豆(豆豆);
      cm.增加每日值("换豆豆");
      cm.getPlayer().dropMessage(1, "恭喜你获得了 " + 豆豆 + " 颗豆豆。");
    } else {
      cm.getPlayer().dropMessage(1, "你没有豆豆票，我不能给你豆豆。");
    }
  } else {
    cm.getPlayer().dropMessage(1, "一天最多只能兑换 10 次豆豆。");
  }
}
