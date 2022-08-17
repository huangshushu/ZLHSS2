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
			qm.sendOk("请不要忘记我们的求助.");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendAcceptDecline("强大的魔法障碍，是吗？ 那么我们应该怎么做...？ 如果我们找不到一种方法来打破这个障碍，那么我们不能救救公主。 如果不可能实际突破，如你所提到的，那么如何请求我们的帮助 #b魔法部部长#k?");
	if (status == 1){
		qm.forceStartQuest();
		qm.sendOk("请立刻去看他。该 #b魔法部部长#k似乎在边上一点，但他非常博学，我敢肯定他会知道该怎么做.");
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
		qm.sendOk("什么？你在蘑菇森林调查屏障?");
	if (status == 1){
		qm.gainExp(4000);
		qm.sendOk("嗯...这是有趣的。这是一个屏障设立有人用魔法的强大力量，这意味着有没有办法，我们可以通过它手动突破.");
		qm.forceCompleteQuest(); 
		qm.dispose();
	}
}
	