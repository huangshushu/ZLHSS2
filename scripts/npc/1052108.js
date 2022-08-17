/* ==================
 脚本类型: NPC	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
function start(){
	if (cm.getQuestStatus(2214) == 1 && !cm.haveItem(4031894)) { 
		cm.sendOk("你已经找到纸揉成一团片.");
		cm.gainItem(4031894,1);
	} else {
	cm.sendOk("...");
	cm.dispose();
	}
}