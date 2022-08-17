/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */

var status = -1;

function start(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			if(status == 0){
				qm.sendOk("真的？这是一个紧急的问题，所以如果你有一段时间，请看我。");
				qm.dispose();
				return;
			} else if(status == 3){
				qm.sendNext("可以.在这种情况下，我会给你的蘑菇王国的路线。 #b在射手村的西入口 ,#k 你会找到一个  #b空荡荡的房子 #k. 进入房子，然后左转进入 #b<主题地牢：蘑菇城堡>#k. 这是蘑菇城堡的入口。没有太多的时间！");
				qm.forceStartQuest();
				return;
			}
		}
	}
	if(status == 0) 
		qm.sendAcceptDecline("现在，你已经取得了工作的进步，你看起来像你已经准备好了。我有一些东西我想向你寻求帮助。你愿意听吗？ ");
	if(status == 1)
		qm.sendNext("发生的事是  #b蘑菇王国 #k 目前在混乱。蘑菇王国位于射手村附近，是爱好和平的，聪明的女孩。最近，他开始感到不舒服，所以他决定任命他唯一的女儿  #b公主薇奥莱塔 #k. 从那时起，一定发生了一些事情，因为王国处于它的当前状态。");
	if(status == 2)
		qm.sendNext("我不知道确切的细节，但它显然是一件可怕的事情发生了，所以我想它会更好，如果你去那里，并评估自己的伤害。一个像你一样的探险家似乎比拯救蘑菇王国的能力更。我刚刚给你写了一个  #b推荐信#k, 所以我建议你立即去蘑菇王国，寻找  #b巡逻主任 #k.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v4032375# #t4032375#");
	if(status == 3)
		qm.sendYesNo("对了，你知道蘑菇王国在哪里吗？这将是好的，如果你可以找到你的方式，但如果你不介意的话，我可以带你直接到入口处。 ");
	if(status == 4){
		qm.gainItem(4032375, 1);
		qm.forceStartQuest();
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
	if(status == 0)
		qm.sendNext("恩? 那是一个 #b来自工作导师的推荐信 #k??! 这是什么，你是来救我们的，蘑菇王国的人吗？");
	if(status == 1)
		qm.sendNextPrev("恩...可以.既然信是从工作指导，我想你真的是一个。我很抱歉没有向你介绍我自己。我的  #b安全官员 #k 在保护女孩负责。你可以看到，这个临时的藏身之处是由安全和士兵的队伍保障。我们的情况可能是可怕的，但尽管如此，欢迎来到蘑菇王国。 ");
	if(status == 2){
		qm.gainItem(4032375, -1);
		qm.forceCompleteQuest();
		qm.forceStartQuest(2312);
		qm.dispose();
	}
}
