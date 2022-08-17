/*
 
 道具制作
 */
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
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
    var selStr =
      "Hi #b#h ##k，我是 A 级道具制造者，我擅长制作高等级武器，你有没有什么想要我做的呢？\r\n\r\n";
    selStr += "#b#L1#30级枫叶旗#l#k\r\n";
    selStr += "#b#L3#35级枫叶武器#l#k\r\n";
    selStr += "#b#L2#43级枫叶武器#l#k\r\n";
    selStr += "#b#L4#64级枫叶武器#l#k\r\n";
    selStr += "#b#L5#20级枫叶耳环#l#k\r\n";
    selStr += "#b#L8#20级枫叶披风#l#k\r\n";
    selStr += "#b#L6#30级枫叶围巾#l#k\r\n";
    selStr += "#b#L7#枫叶小饰品#l#k\r\n";
    cm.说明文字(selStr);
  } else if (status == 1) {
    switch (selection) {
      case 8:
        cm.dispose();
        cm.openNpc(1012002, 8);
        break;
      case 7:
        cm.dispose();
        cm.openNpc(1012002, 7);
        break;
      case 6:
        cm.dispose();
        cm.openNpc(1012002, 6);
        break;
      case 5:
        cm.dispose();
        cm.openNpc(1012002, 5);
        break;
      case 4:
        cm.dispose();
        cm.openNpc(1012002, 4);
        break;
      case 3:
        cm.dispose();
        cm.openNpc(1012002, 3);
        break;
      case 2:
        cm.dispose();
        cm.openNpc(1012002, 2);
        break;
      case 1:
        cm.dispose();
        cm.openNpc(1012002, 1);
        break;
    }
  }
}
