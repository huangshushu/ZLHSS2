/* 
 *  Dallier - King Medal
 *  Lith Habor = 104000000
 *  Sleepywood = 105040300
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 0) {
        if (status == 0) {
            qm.sendNext("当你觉得你已经做好了充分的准备，就回来找我吧");
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
        qm.askAcceptDecline("#v1142030# #e#b#t1142030##k\n\r\n\r - 请在#r【更多功能】#k挑战此勋章！\n\r - 在冒险岛主城里签到达到一定天数即可获取！");
    } else if (status == 1) {
        qm.sendNext("还请记住，所有记录将在每个月的第一天重置。");
    } else if (status == 2) {
        qm.sendNextPrev("祝你好运，这并没有真正确定的日期，所以如果你觉得你有资格参加，那么请随时来找我！这样我就可以确定你是否有资格参加。记住，除非你放弃或完成挑战，否则你将无法挑战其他勋章。");
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
