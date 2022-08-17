/*
 
 脚本：蜈蚣
 */
function start() {
  if (
    (cm.getQuestStatus(4103) == 1 && cm.haveItem(4031289, 1)) ||
    cm.getQuestStatus(8510) == 2 ||
    cm.getPlayer().isGM()
  ) {
    cm.warp(701010321);
    cm.dispose();
  } else {
    cm.sendOk("你没有完成农民的#b拜托任务#k。");
    cm.dispose();
  }
}
