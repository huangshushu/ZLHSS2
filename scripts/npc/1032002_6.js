/*
 脚本
 */
//材料设置
var 材料 = [
  [4030002, 10],
  [4030003, 10],
  [4030004, 10],
  [4030005, 10],
  [4030006, 10],
  [4030007, 10],
  [4030008, 10],
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
  if (cm.getInventory(1).getItem(1) == null) {
    cm.说明文字("你的装备栏第一格没有装备。");
    cm.dispose();
    return;
  }
  var 装备 = cm.显示物品(cm.getInventory(1).getItem(1).getItemId());
  if (cm.isCash(cm.getInventory(1).getItem(1).getItemId())) {
    cm.说明文字("你的装备栏第一格 " + 装备 + " 是时装，无法洗练。");
    cm.dispose();
    return;
  }
  var 洗练道具 = 0;
  if (status <= 0) {
    var selStr =
      "    Hi~#b#h ##k 你确定要洗练。" +
      装备 +
      " 吗？ 装备洗练之后属性会根据当前属性值发生波动，请问你真的想好了吗？\r\n洗练公式 #r随机属性 = 当前属性 + 当前数值 * 0.5#k\r\n\r\n";
    selStr += "#b#e当前属性：#k#n\r\n";

    selStr += "" + cm.显示装备属性() + "\r\n";
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
    selStr += "\t\t\t\t\t#L1##b开始洗练#k#l\r\n";

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
        cm.装备洗练();
        cm.对话结束();
        cm.打开NPC(1032002, 6);
        break;
    }
  }
}
