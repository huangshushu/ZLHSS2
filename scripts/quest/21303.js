/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest();//开始任务
	qm.dispose();
}

function end(mode, type, selection) {
	qm.removeAll(4032339);
	qm.sendNextS("制作#v4032312#秘方。\r\n需要材料如下：1个\r\n1个#v4005004#\r\n3个#v4020007#\r\n3个#v4020000#。。。", 3);
	qm.forceCompleteQuest();//完成任务
	qm.dispose();
}