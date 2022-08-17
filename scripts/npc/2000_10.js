function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (status == 0 && mode == 0) {
    cm.dispose();
    return;
  }
  if (mode == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    var selStr = "";
    switch (cm.判断地图()) {
      case 280030000:
        selStr = cm.显示扎昆伤害();
        break;
      case 240060200:
        selStr = cm.显示黑龙伤害();
        break;
      case 270050100:
        selStr = cm.显示品克缤伤害();
        break;
      case 104000400:
        selStr = cm.显示进阶蜗牛长老伤害();
        break;
      default:
        selStr =
          "挑战 #b扎昆#k，#b黑龙#k，#b品克缤#k，#b进阶蜗牛长老#k 时才能使用。";
        cm.dispose();
        break;
    }
    cm.说明文字(selStr);
  } else if (status == 1) {
    switch (selection) {
      default:
        cm.dispose();
        break;
    }
  }
}
