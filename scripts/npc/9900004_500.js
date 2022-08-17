/*
 
 脚本：飞天猪-射手村
 对应的蛋：4170000
 */
var 城镇 = "射手村";
var status = 1;
//物品ID，抽奖概率，物品数量，(0/不广播，1广播)
var itemList = Array(
  //-----椅子-----
  Array(1402214, 100, 1, 1),
  Array(1432182, 100, 1, 1),
  Array(1452220, 100, 1, 1),
  Array(1462208, 100, 1, 1),
  Array(1472230, 200, 1, 1), //
  Array(1482183, 100, 1, 1), //
  Array(1492194, 200, 1, 1), //
  Array(1342087, 200, 1, 1), //
  Array(1332242, 300, 1, 1), //
  Array(1382226, 300, 1, 1), //
  Array(1422156, 100, 1, 1)
);

function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (mode == 1) {
    status++;
  } else {
    if (status == 0) {
      cm.sendOk("你没有 " + cm.显示物品(4310022) + " ？");
      cm.dispose();
    }
    status--;
  }
  if (status == 0) {
    if (cm.haveItem(4310022, 66)) {
      var str1 = "";
      for (var i = 0; i < itemList.length; i++) {
        str1 += "#v" + itemList[i][0] + "#";
      }
      cm.sendYesNo(
        "我是#b红色武器抽奖#kNPC，你好 #b#h ##k 给我 " +
          cm.显示物品(4310022) +
          " 就可以抽奖了。\r\n\r\n#v1402214# #v1432182# #v1452220# #v1462208# #v1472230# #v1482183# #v1492194# #v1342087# #v1332242# #v1382226# #v1422156#"
      );
    } else {
      var str1 = "\r\n";
      for (var i = 0; i < itemList.length; i++) {
        str1 += "#v" + itemList[i][0] + "#";
      }
      cm.sendOk(
        "我是#b红色武器抽奖#kNPC，你没有 " +
          cm.显示物品(4310022) +
          " ! 等你有了在来找我把。\r\n\r\n#v1402214# #v1432182# #v1452220# #v1462208# #v1472230# #v1482183# #v1492194# #v1342087# #v1332242# #v1382226# #v1422156#"
      );
      cm.safeDispose();
    }
  } else if (status == 1) {
    var chance = Math.floor(Math.random() * +100);
    var finalitem = Array();
    for (var i = 0; i < itemList.length; i++) {
      if (itemList[i][1] >= chance) {
        finalitem.push(itemList[i]);
      }
    }
    if (finalitem.length != 0) {
      if (finalitem.length == 0) {
        return 1;
      }
      var item;
      var random = new java.util.Random();
      var finalchance = random.nextInt(finalitem.length);
      var itemId = finalitem[finalchance][0];
      var quantity = finalitem[finalchance][2];
      var notice = finalitem[finalchance][3];
      item = cm.gainGachaponItem(itemId, quantity, "红色武器抽奖", notice);
      if (item != -1) {
        cm.gainItem(4310022, -66);
        cm.sendOk("你获得了 " + cm.显示物品(item) + " x #b" + quantity + "#k");
      } else {
        cm.sendOk(
          "请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。"
        );
      }
      cm.safeDispose();
    } else {
      cm.sendOk("今天的运气可真差，什么都没有拿到。");
      cm.safeDispose();
    }
    cm.safeDispose();
  }
}
