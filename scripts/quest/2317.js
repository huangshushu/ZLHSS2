/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */

importPackage(Packages.client);

var status = -1;

function start(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.sendOk("打破障碍将需要毒蘑菇帽。 当你改变主意时，跟我说话.");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendAcceptDecline("啊! 如果我没有错，我看到了#b杀手孢菇#k 当我是一个孩子在一本书的时候。 现在我记得...它是由强大的毒药的提取物 毒蘑菇, 这意味着你会需要一些 毒蘑菇帽. 如果你能给我那些，我想我能够做到.");
	if (status == 1){
		qm.forceStartQuest();
		qm.sendOk("请击败 #b毒蘑菇#k 并带回 #b100 毒蘑菇帽#k 回报.");
		qm.dispose();
	}
}

function end(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendOk("你收集了 100 毒蘑菇帽 像我问你得到?");
	if (status == 1){
		qm.gainExp(13500);
		qm.gainItem(4000500, -100);
		qm.sendOk("我很惊讶你能够收集这100个 毒蘑菇帽, 这被认为是一个艰难的壮举。 我想我会做的 #b杀手孢菇#k 我们的这些.");
		qm.forceCompleteQuest(); 
		qm.dispose();
	}
}
	