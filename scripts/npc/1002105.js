/* ==================
 脚本类型: NPC	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
var status = 0;

function start() {
    cm.sendYesNo("你愿意去神殿?");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(400000001);
	}
    cm.dispose();
}