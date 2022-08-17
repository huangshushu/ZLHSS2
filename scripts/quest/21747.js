/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.sendNextS("据#m250000000#的封印石所在的#m925040100#的入口，好像就在#m250000100##b#m250020300##k的其中一根柱子里。只要找到#b写着入口两个字的柱子#k，说出暗号，就可以进去。暗号是#b道可道非常道#k。进入#m925040100#，阻止#r#o9300351##k后，在回来找我。。。", 3);
	qm.forceStartQuest(21747);//开始任务
	qm.dispose();
}

function end(mode, type, selection) {
	qm.gainExp(43000);
	qm.forceCompleteQuest(21747);//完成任务
	qm.dispose();
}