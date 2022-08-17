/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 2) {
            qm.sendOk("咦？你害怕的猪？他们跳来跳去像疯了似的，但你不应该害怕他们...");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.askAcceptDecline("忘掉狡猾的狐狸。既然你在这里，想再次帮助我吗？我想平息猪的唯一途径是通过管教他们。你为什么不走花几分钟的护理#r猪#k?");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.sendOk("疯狂的猪，可以发现在#b巨大的路径。#k. 头以上，并采取只关心#r20#k 他们的。嘿，老兄，你真成了我的一个巨大的帮助.");
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        qm.sendOk("哦，你的纪律猪。 做得好！ 谢谢.\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i2022621# Declicious Milk 30\r\n#i2022622#Declicious Juice 30\r\n#fUI/UIWindow.img/QuestIcon/8/0#980 exp");
    } else if (status == 1) {
        qm.gainExp(980);
        qm.gainItem(2022621, 30);
        qm.gainItem(2022622, 30);
        qm.sendOk("现在，我就回去工作");
        qm.forceCompleteQuest();
        qm.dispose();
    }
}