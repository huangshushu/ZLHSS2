/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            if (status == 0) {
                qm.dispose();
                return;
            } else if (status == 1) {
                qm.sendOk("真的没人来救我了吗？呜呜……");
                qm.dispose();
            }
            status--;
        }
        if (status == 0) {
            qm.sendNext("呜呜……有没有人来救我啊？我是从埃德尔斯坦到新叶城来旅行的，可是突然有一扇奇怪的大门被打开，有很多怪物从那扇门冲出来，抓走了新叶城的市民，占领了新叶城！");
        } else if (status == 1) {
            qm.sendYesNo("冒险家，你可不可以来新叶城救我啊？");
        } else if (status == 2) {
            qm.forceCompleteQuest();
            qm.forceCompleteQuest(56201);
            qm.forceCompleteQuest(56202);
            qm.forceCompleteQuest(56203);
            qm.warp(703000000, 0); //703100010
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    qm.dispose();
}