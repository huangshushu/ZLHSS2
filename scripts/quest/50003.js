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
        qm.sendNext("...它是什么？啊，我看到他的到来非常接近!");
        qm.dispose();
        return;
    }
    if (status == 0) {
        qm.askAcceptDecline("当心，因为他似乎......比以前更加强大。不要低估他!");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.forceCompleteQuest();
    qm.dispose();
}