/* ==================
 脚本类型: NPC	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 || mode == -1 && status == 0) {
        cm.sendNextS("这一定是盒子...", 2);
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    if (status == 0) {
        if (cm.itemQuantity(4033194) || cm.itemQuantity(4033195) >= 1) {
            cm.sendOk("我得回去楼下先老人Limber'ts心脏终于愤怒爆药水箱.");
            cm.dispose();
        }
        if (cm.isQuestActive(20031))
            cm.sendYesNo("所有这些药水是恶心！ 我们甚至应该卖他们?\r\n拿药水箱?");
        else {
            cm.sendOk("它看起来不像你需要我的药水!");
            cm.dispose();
        }
    } else if (status == 1) {
        cm.gainItem(4033194,1);
        cm.gainItem(4033195,1);
        cm.sendPlayerToNpc("这是一封信吗？ 必须由所有的灰尘保持在一起...\r\n从“铬铬”...它不说谁是谁。.. 也许林伯特会希望它.");
        cm.dispose();
    }
}