/*
 ZEVMS冒险岛(079)游戏服务端
 */
var status = -1;

function action(mode, type, selection) {
    if (cm.isQuestActive(3900)) {
		cm.forceCompleteQuest(3900);
		cm.gainExp(300);
		cm.playerMessage(5, "你了解到了阿里安特的文化了吗？");
    }
		cm.dispose();
}