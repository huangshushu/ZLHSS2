/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 //var status = -1;

function start(mode, type, selection) {
	qm.sendNext("好的，请你带着#t1912011#的材料#b50个#t4000048##k和#b1000万金币#k过来找我。有点贵？哈哈哈哈！我是高级人才嘛。");
	qm.forceStartQuest(21606);//开始任务
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceCompleteQuest(21606);//完成任务
	qm.dispose();
}