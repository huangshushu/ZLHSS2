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
				qm.sendOk("真？ 这是一件紧急事情，所以如果你有一些时间，请看我.");
				qm.dispose();
				return;
			} else if(status == 3){
				qm.sendNext("好的。 在这种情况下，我只给你通往蘑菇王国的路线. #b蘑菇村的西入口附近,#k 你会发现一个 #b空房子#k. 进入房子，左转进入#b<主题地下城：蘑菇城堡>#k.这是蘑菇王国的入口。 没有太多时间!");
				qm.forceStartQuest();
				return;
			}
		}
	}
	if(status == 0) 
		qm.sendAcceptDecline("现在你已经做了工作进步，你看起来像你准备好了这一点。 我有一些东西，我想请求你的帮助。 你愿意听?");
	if(status == 1)
		qm.sendNext("发生了什么事 #b蘑菇王国#k 目前处于混乱状态。 蘑菇王国 位于Henesys附近，以和平爱好，智能的King Mush为特色。 最近，他开始感到生病，所以他决定任命他唯一的女儿 #b公主Violetta#k. 自那以后必须发生的事情，王国将处于其目前的状态.");
	if(status == 2)
		qm.sendNext("我不知道确切的细节，但它很明显发生了可怕的事情，所以我认为如果你去那里评估损害自己会更好。 像你一样的探险家似乎更有能力储蓄蘑菇王国. 我刚刚写了你一个#b推荐信#k, 所以我建议你去 蘑菇王国 立即寻找#b头部巡逻官#k.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v4032375# #t4032375#");
	if(status == 3)
		qm.sendYesNo("顺便说一句，你知道在哪里蘑菇王国 位于？ 如果你能找到你的方式，这将是好的，但如果你不介意，我可以带你直接到入口.");
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
		qm.sendNext("嗯？ 是的 #b推荐信 从招聘教师#k??! 这是什么，你一个没来拯救我们的， 蘑菇王国?");
	if(status == 1)
		qm.sendNextPrev("嗯...好吧。 由于这封信是来自职业教练，我想你真的是一个。 对于不早点介绍自己，我深表歉意。 我是#b头安全官#k 负责保护王玉米粥。正如你所看到的，这个临时藏身之处是由团队的安全和士兵的保护。我们的情况可能是非常可怕的，但尽管如此，欢迎 蘑菇王国.");
	if(status == 2){
		qm.gainItem(4032375, -1);
		qm.forceCompleteQuest();
		qm.forceStartQuest(2312);
		qm.dispose();
	}
}
