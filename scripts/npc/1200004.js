/*
 
 */
function start() {
  cm.sendYesNo("你想要去 #b恩岛#k 吗？到那边约一分钟。");
}

function action(mode, type, selection) {
  if (mode == 0) {
    cm.sendOk("等你考虑好再来找我吧。");
    cm.dispose();
  } else {
    cm.warpBack(200090060, 140020300, 80);
    cm.dispose();
  }
}
