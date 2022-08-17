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
			qm.sendOk("为什么你甚至问，如果你打算说没有这?#");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendAcceptDecline("我想我已经听说了魔药没休息论文种障碍。我想，这就是所谓的 #b杀手孢菇#k? 嗯...外，你会发现蘑菇学者 #b疤痕#k 在外面等候. #b疤痕#k 是香菇的专家，所以去和他谈谈.");
	if (status == 1){
		qm.forceStartQuest();
		qm.sendOk("我有信心 #k疤痕#k 将尽一切努力帮助您.");
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
		qm.sendOk("啊，所以你是人们在说的探险家。 我是 #b疤痕, 皇家蘑菇学者#k 代表 蘑菇王国. 所以你需要一些 #k杀手孢菇#k?");
	if (status == 1){
		qm.gainExp(4200);
		qm.sendOk("#k杀手孢菇#k... 我想我以前听说过他们...");
		qm.forceCompleteQuest(); 
		qm.dispose();
	}
}
	