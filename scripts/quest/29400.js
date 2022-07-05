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
        qm.askAcceptDecline("#v1142004# #e#b#t1142004##k\n\r\n\r - 背包金币达到15亿金币以上！\n\r - 无时间限制！");
    } else if (status == 1) {
        qm.sendNext("你确定要挑战吗，冒险家！");
    } else if (status == 2) {
		if (qm.判断金币() >= 1500000000) {	
	    qm.给物品(1142004, 1);		
		qm.sendOk("挑战成功，祝贺你！");
		qm.全服黄色喇叭("[勋章老人] : ["+qm.getName()+"] 成功挑战勤奋冒险家勋章！");//公告
		qm.dispose();
    }else{
		qm.sendOk("你的金币没达到挑战勋章的要求，在努力吧！");
		qm.dispose();
}
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
