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
			qm.sendNext("你不相信我吗？ Grrrr，你让我疯了!");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendNext("我终于来了！ *吸入*啊，这必须是空气，我呼吸。而这，那一定是太阳！而这，一棵树！而且，植物！而这，一朵花！ Woohahahaha！ 这难以置信！这是比我想象的世界是当我被困在蛋内要好得多。而你......你是我的主人？嗯，我想象你不同.");
	if (status == 1)
		qm.PlayerToNpc("#b什么？它谈论？");
	if (status == 2)
		qm.sendNextPrev("我的主人很奇怪。我想我不能做任何事情，现在，既然协议已经取得进展。 *叹*好，很高兴见到你。我们将看到很多对方的.");
	if (status == 3)
		qm.PlayerToNpc("#b嗯？ 你什么意思？我会看到很多对方的？什么协议?");
	if(status == 4)
		qm.sendNextPrev("你是什么意思这是什么意思？你是从蛋把我吵醒。你是我的主人！所以当然这是你的责任，照顾我，培养我，帮助我成为一个强大的龙。 明显!");
	if (status == 5)
		qm.PlayerToNpc("#b什么？龙？你是龙？我不明白这一点......我为什么你的主人？ 你在说什么？");
	if (status == 6)
		qm.sendNextPrev("你在说什么？你的精神提出一份契约与我的精神！我们几乎是同一个人了。难道我真的要解释一下吗？这样一来，你已经成为我的主人。我们的协议的约束。你不能改变你的想法......该协议不能被打破.");
	if (status == 7)
		qm.PlayerToNpc("#b等待，等待，等待。 让我说清楚。你是说我没有选择，只能帮你?");
	if (status == 8)
		qm.sendNextPrev("Yuuup！ 嘿...！与面部什么？你......不想成为我的主人?");
	if (status == 9)
		qm.PlayerToNpc("#b不......这不是......我只是不知道我是否准备好了宠物.");
	if (status == 10)
		qm.sendNextPrev("应用宠？你刚才叫我的宠物？怎么敢...为什么，我是龙！在世界上最强大的存在!");
	if (status == 11)
		qm.PlayerToNpc("#b...(你瞪了他一眼怀疑。他看起来像一只蜥蜴。瘦弱的小家伙，在那.)#k");
	if (status == 12)
		qm.sendAcceptDecline("你为什么那样看着我吗？！ 只是看！看看我能以我的力量去做。 准备?");
	if (status == 13){
		qm.forceStartQuest();
		qm.sendNext("命令我杀的 #r#o1210100#s#k!现在做！我会告诉你一个龙如何快速打败#o1210100#s!走, 充电!");
	}if (status == 14)
		qm.sendNextPrev("等一下！你发布你的应用程序？我严重地影响到我主人 #bINT和LUK#k! 如果你真的想看看我能做些什么，分发和AP#b装备你的魔法师装备#k 你使用技能之前!");
	if (status == 15){
		qm.evanTutorial("UI/tutorial/evan/11/0", -1);
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
		qm.sendOk("哈!你觉得是什么？我的技能是惊人的，对不对？您可以使用它们只要你想尽可能多。这就是它的意思是在我一个协议。是不是很神奇?");
	if(status == 1){
		qm.forceCompleteQuest();
		qm.gainExp(1270);
		qm.getPlayer().gainSP(1, 0);
		qm.sendOk("噢噢噢......我太饿了。我出生后立即用我的能量...");
		qm.dispose();
	}
}