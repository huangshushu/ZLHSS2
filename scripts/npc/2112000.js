/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：罗密欧与朱丽叶
 */
 
var status = -1;

function action(mode, type, selection) {
    var em = cm.getEventManager("Romeo");
    if (em == null) {
        cm.sendOk("继续下去吧？");
        cm.dispose();
        return;
    }
    if (em.getProperty("stage").equals("1") && em.getProperty("stage5").equals("0")) {
        cm.sendOk("什么。。。可疑的阴谋？这不可能…");
        em.setProperty("stage", "2");
    } else if (em.getProperty("stage5").equals("1") && cm.getMap().getAllMonstersThreadsafe().size() == 0) {
        cm.sendOk("继续.");
        em.setProperty("stage5", "2");
        cm.getMap().setReactorState();
    } else {
        cm.sendOk("...");
    }
    cm.dispose();
}