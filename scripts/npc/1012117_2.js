/* Dr. Feeble
	Henesys Random Eye Change.
*/
var status = 0;
var beauty = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("嗨，我是爱德华如果你有 #b#t5150040##k, 我就可以施展我的技术为了打造属于您的发型。 \r\n#L2#使用: #i5150040##t5150040#随机换理发#l\r\n\r\n#b");
    } else if (status == 1) {
	cm.sendYesNo("如果你有#b#i5150040##t5150040##k,那么我将帮你随机改变一种脸型,你确定要改变脸型吗？");
    } else if (status == 2){
	var face = cm.getPlayerStat("FACE");
	var facetype;

	if (cm.getPlayerStat("GENDER") == 0) {
	    facetype = [20046, 20030, 20033, 20036, 20037, 20043, 20047, 20050, 20051, 20052,23008,20164,23010,23011,23012,23016,23018,23024,23021,23020,23015,23032,23033,23038,23058,23044,23059,23056,23055,23053,20561];
	} else {
	    facetype = [21044, 21016, 21029, 21031, 21033, 21036, 21041, 21045, 21048, 21049,23877,21072,21088,21089,21096,21095,21094,21093,24001,21160,24007,24008,24016,24011,24019,24012,24020,24013,24015];//女脸
	}
	for (var i = 0; i < facetype.length; i++) {
	    facetype[i] = facetype[i] + face % 1000 - (face % 100);
	}

	if (cm.setRandomAvatar(5150040, facetype) == 1) {
	    cm.sendOk("#e好了,你的朋友们一定认不出你了!");
	} else {
	    cm.sendOk("看起来你并没有我们的会员卡,我恐怕不能给你理发,我很抱歉.请你先购买吧。");
	}
	cm.dispose();
    }
}
