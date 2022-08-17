/*
 
 脚本：去上海
 */

var status = 0;
function start() {
  cm.sendYesNo("请问是否想去上海滩??");
}

function action(mode, type, selection) {
  if (mode != 1) {
    if (mode == 0) cm.sendOk("既然你不要那就算了。");
    cm.dispose();
    return;
  }
  status++;
  if (status == 1) {
    cm.warp(701000100, 0);
    cm.dispose();
  }
}
