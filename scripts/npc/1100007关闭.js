/* ==================
 脚本类型: NPC	    
 脚本版权：云彩团队
 联系扣扣：297870163    609654666
 =====================
 */
function start() {
    cm.sendYesNo("你想要去耶雷佛必须支付#b 500 枫币#k 到那边约一分钟.");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendOk("等你考虑好再来找我吧!");
	cm.dispose();
	} else {
    if(cm.getPlayer().getMeso() >= 500) {
	cm.gainMeso(-500);
	cm.warpBack(200090020,130000210,80);
    }
    cm.dispose();
}
}
