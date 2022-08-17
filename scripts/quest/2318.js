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
			qm.sendOk("我明白这不是一个容易的任务，但我不能做 #b杀手孢菇#k 没有他们。 请重新考虑.");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendAcceptDecline("嗯......我看着你的孢子的制作，而你正在聚集 毒蘑菇帽, 并意识到我们需要更多的材料。 我想让你再收集一组项目。 你可以做到吗?");
	if (status == 1){
		qm.forceStartQuest();
		qm.sendOk("好吧，我要你打败叛徒孢子 并带回 #b50 突变孢子#k 回报.");
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
		qm.sendOk("你收集了它的所有必要的成分?")
	if (status == 1){
		qm.gainExp(11500);
		qm.gainItem(4000499, -50);
		qm.sendNext("好吧，这些应该足够让我做 #b杀手孢菇.#k 请持续一会儿.");
		qm.forceCompleteQuest();
	} if(status == 2){
		qm.sendPrev("好吧，这里是 杀手孢菇. 希望这将是足够你救救我们的公主，帮助重新获得我们的王国。 祝你好运!");
		qm.gainItem(2430014, 1);
		qm.dispose();
	}
}
	