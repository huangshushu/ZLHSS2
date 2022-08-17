/*
 
 脚本：去上海
 */

var status = 0;
function start() {
  cm.sendYesNo(
    "    Hi~#b#h ##k，是否要清理掉背包#r装备栏#k所有物品？此次清空后无法恢复。"
  );
}

function action(mode, type, selection) {
  if (mode != 1) {
    if (mode == 0) cm.对话结束();
    cm.打开NPC(9900004, 5);
    return;
  }
  status++;
  if (status == 1) {
    for (var i = 0; i <= 96; i++) {
      if (cm.getInventory(1).getItem(i) != null) {
        cm.removeAll(cm.getInventory(1).getItem(i).getItemId());
      }
    }
    cm.对话结束();
  }
}
