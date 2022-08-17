/*
 脚本
 装备增幅
 */
//材料设置
var 材料 = [
  [4032391, 10],
  [4032392, 10],
  [4032393, 10],
  [4032394, 10],
  [4032395, 10],
  [4032396, 10],
  [4032397, 10],
];

var 金币 = 0;
var 点券 = 0;

function start() {
  status = -1;
  action(1, 0, 0);
}
function action(mode, type, selection) {
  if (status <= 0 && mode <= 0) {
    cm.dispose();
    return;
  }
  if (mode == 1) {
    status++;
  } else {
    status--;
  }

  var 洗练道具 = 0;
  if (status <= 0) {
    var selStr = "";
    selStr += "兑换 " + cm.显示物品(1142227) + " [移除累计，直接生效]\r\n\r\n";
    selStr += "#d所需材料；————————————————————#k\r\n";
    for (var ii = 0; ii < 材料.length; ii++) {
      selStr +=
        "    #i" +
        材料[ii][0] +
        "#  #b#t" +
        材料[ii][0] +
        "##k [" +
        材料[ii][1] +
        " / #r#c " +
        材料[ii][0] +
        "##k]\r\n";
      if (ii % 3 == 0) {
        selStr += "";
      }
    }
    selStr += "\r\n";
    if (金币 > 0 || 点券 > 0) {
      selStr += "#d所需费用；————————————————————#k\r\n";
      if (金币 > 0) {
        selStr +=
          "    #v5200000##b  金币 #k[" +
          金币 +
          " / #r" +
          cm.判断金币() +
          "#k]\r\n";
      }
      if (点券 > 0) {
        selStr +=
          "    #v5440000##b  点券 #k[" +
          点券 +
          " / #r" +
          cm.判断点券() +
          "#k]\r\n";
      }
    }
    selStr += "#d———————————————————————————#k\r\n";
    selStr += "\t\t\t\t\t#L1##b我要兑换#k#l\r\n";

    cm.sendSimple(selStr);
  } else if (status == 1) {
    switch (selection) {
      case 1:
        if (cm.判断金币() < 金币 || cm.判断点券() < 点券) {
          cm.说明文字("制作费用不够。");
          cm.对话结束();
          return;
        }
        for (var i = 0; i < 材料.length; i++) {
          if (!cm.haveItem(材料[i][0], 材料[i][1])) {
            cm.说明文字(
              "#i" +
                材料[i][0] +
                "#  #b#t" +
                材料[i][0] +
                "##k 需要 #r" +
                材料[i][1] +
                "#k 个"
            );
            cm.对话结束();
            return;
          }
        }
        for (var i = 0; i < 材料.length; i++) {
          cm.收物品(材料[i][0], 材料[i][1]);
        }
        cm.gainItem(1142227, 1);
        cm.全服黄色喇叭(
          "[冒险岛运营员] : 恭喜玩家 " +
            cm.getPlayer().getName() +
            " 成功兑换 移动冒险岛勋章。"
        );
        cm.对话结束();
        break;
    }
  }
}
