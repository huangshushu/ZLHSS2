/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	qm.dispose();
	return;
    }
    if (status == 0) {
	qm.sendNext("你好，首席骑士。目前，世界枫是巨大的危险。我们需要一个更大的军队来保护这个地方从黑法师。并建立一个更强大的军队，我决定与Explorer首领结盟。我们创建了终极浏览器与我们的权力相结合.");
    } else if (status == 1) {
	qm.sendYesNo("终极浏览器开始于吕。 50和出生时很特殊技能。你想重生为一个最终的资源管理器?");
    } else if (status == 2) {
	if (!qm.getClient().canMakeCharacter(qm.getPlayer().getWorld())) {
	    qm.sendOk("你不能让一个人物没有性格插槽.");
	} else {
	    qm.sendUltimateExplorer();
	}
	qm.dispose();
    }
}

function end(mode, type, selection) {
}