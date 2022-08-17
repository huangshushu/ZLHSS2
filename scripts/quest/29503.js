/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 0) {
        if (status == 0) {
            qm.sendNext("回来的时候，你觉得你是为这个做好了充分准备.");
            qm.dispose();
            return;
        } else if (status == 2) {
            status--;
        } else {
            qm.dispose();
            return;
        }
    } else {
        status++;
    }

    if (status == 0) {
        qm.askAcceptDecline("#v1142030# #e#b#t1142030##k\n\r\n\r - 时限: 1 hr\n\r - 捐赠最让这个小镇....#n你想检验一下自己，看看这个勋章是为你?");
    } else if (status == 1) {
        qm.sendNext("当前排名 \n\r\n\r1. #b正如佩普爱#k : ???,???,??? 金币\n\r2. #b开#k : 68,000,000 金币\n\r3. #bxBabyRence#k : 49,999,999 金币\n\r4. #bXxTrIStaArxx#k : 29,999,999 金币\n\r5. #bxBabyRence#k : 14,000,000 金币\n\r\n\r要知道，我们不能透露受捐赠的现任国王捐赠的确切人数. \n\r还记得，所有记录都将被重置每月的第一天的...");
    } else if (status == 2) {
        qm.sendNextPrev("祝您好运给你。有这个没有真正的设定的日期，所以如果你觉得你有资格获得这个，然后随时来见我，所以我能确定你是否有资格获得它。请记住，你将不能够挑战其他标题，除非你要么放弃这一挑战或完成它...");
        qm.dispose();
    }
}

function end(mode, type, selection) {}

/*function getMedalType(ids) {
    var thestring = "#b";
    var extra;
    for (x = 0; x < ids.length; x++) {
	extra = "#L" + x + "##t" + ids[x] + "##l\r\n";
	thestring += extra;
    }
    thestring += "#k";
    return thestring;
}*/
