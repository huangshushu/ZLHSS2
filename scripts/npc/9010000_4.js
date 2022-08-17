/*
 
 */
var status = 0;
var 兑换成功率 = 10;
var itemList = Array(
  //必成
  Array(2040006, 500, 1, 1),
  Array(2040007, 500, 1, 1),
  Array(2040303, 500, 1, 1),
  Array(2040403, 500, 1, 1),
  Array(2040506, 500, 1, 1),
  Array(2040507, 500, 1, 1),
  Array(2040603, 500, 1, 1),
  Array(2040709, 500, 1, 1),
  Array(2040710, 500, 1, 1),
  Array(2040711, 500, 1, 1),
  Array(2040806, 500, 1, 1),
  Array(2040903, 500, 1, 1),
  Array(2041024, 500, 1, 1),
  Array(2041025, 500, 1, 1),
  Array(2043003, 500, 1, 1),
  Array(2043103, 500, 1, 1),
  Array(2043203, 500, 1, 1),
  Array(2043303, 500, 1, 1),
  Array(2043703, 500, 1, 1),
  Array(2043803, 500, 1, 1),
  Array(2044003, 500, 1, 1),
  Array(2044019, 500, 1, 1),
  Array(2044103, 500, 1, 1),
  Array(2044203, 500, 1, 1),
  Array(2044303, 500, 1, 1),
  Array(2044403, 500, 1, 1),
  Array(2044503, 500, 1, 1),
  Array(2044603, 500, 1, 1),
  Array(2044703, 500, 1, 1),
  Array(2044815, 500, 1, 1),
  Array(2044908, 500, 1, 1)
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
      cm.sendOk("你没有 " + cm.显示物品(4000464) + " ？");
      cm.dispose();
    }
    status--;
  }
  if (status == 0) {
    if (cm.haveItem(4000464, 1)) {
      var str1 = "";
      for (var i = 0; i < itemList.length; i++) {
        str1 += "" + cm.显示物品(itemList[i][0]) + "\r\n";
      }
      cm.sendYesNo(
        "你好 #b#h ##k 给我 " +
          cm.显示物品(4000464) +
          " 我会#r一定概率#k会随机给你下面这些奖励。\r\n\r\n" +
          str1 +
          ""
      );
    } else {
      var str1 = "\r\n";
      for (var i = 0; i < itemList.length; i++) {
        str1 += "" + cm.显示物品(itemList[i][0]) + "\r\n";
      }
      cm.sendOk(
        "你没有 " +
          cm.显示物品(4000464) +
          " ! 等你有了在来找我把。\r\n\r\n" +
          str1 +
          "\r\n"
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
      item = cm.gainGachaponItem(itemId, quantity, "冒险岛运营员", notice);

      if (item != -1) {
        cm.gainItem(4000464, -1);
        if (cm.百分率(兑换成功率)) {
          cm.sendOk(
            "你获得了 " + cm.显示物品(item) + " x #b" + quantity + "#k"
          );
        } else {
          cm.sendOk("运气可真差，什么都没有拿到。");
        }
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
