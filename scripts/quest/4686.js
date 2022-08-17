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
        }
        if (status == 0) {
            qm.sendNext("你确定你要离开这里吗？挑战贝尔加莫特是很不容易的，这些需要你和伙伴们的努力奋斗，才能打败他！如果你准备好了，我将送你到贝尔加莫特的基地，准备好了吗？");
        } else if (status == 1) {
            qm.warp(802000209, 0);
            //qm.forceStartQuest();
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
}