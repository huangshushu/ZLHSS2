/*
 
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
      "	Hi~#b#h ##k你要回去吗？我看你这么弱小，不一定打得过它吧，去找你的小伙伴们一起来挑战吧。\r\n\r\n";
    selStr += " #L2##b返回自由#k#l\r\n";

    cm.说明文字(selStr);
  } else if (status == 1) {
    switch (selection) {
      case 2:
        cm.warp(910000000, 0);
        cm.dispose();
        break;
    }
  }
}
