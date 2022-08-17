/* ==================
 脚本类型: NPC	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	//qm.sendNext("#p1201002#说自己很痛苦。到底是怎么回事呢？");
	cm.forceStartQuest(20201);
	cm.dispose();
}
/*
function end(mode, type, selection) {
	qm.sendNext("#p1201000#说#p1201002#又出现了奇怪的反应，让我快点去#b#m140000000##k。她说这次的反应和以前不太一样，好像有点不太寻常…");
	qm.forceStartQuest(21400);
	qm.dispose();
}*/