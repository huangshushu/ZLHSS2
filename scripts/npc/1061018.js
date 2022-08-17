/*
 
蝙蝠怪系列
 */
function start() {
  cm.sendYesNo("你确定要离开这个地图嘛？？");
}

function action(mode, type, selection) {
  if (mode == 1) {
    cm.warp(105100100, 5);
  }
  cm.dispose();
}
