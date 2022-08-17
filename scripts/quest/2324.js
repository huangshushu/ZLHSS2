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
			qm.sendOk("这将是你进入城堡的唯一方式。 请想想");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendNext("啊! 可能有一种方法...如果你能利用我们为保护我们的城堡而增长的脊椎藤，那么你只是可以进入前提!");
	if (status == 1)
		qm.sendAcceptDecline("如果你能以某种方式消除脊椎藤蔓的脊椎，那么你将能够爬上的城堡墙上使用葡萄藤。 当然，这也需要一个葡萄树卸妆...");
	if (status == 2)
		qm.sendOk("#b脊柱卸除#k是从在El Naths高地的神秘草本的提取物创造的。 King Pepe使用这些草药来中毒猪，并接管蘑菇森林. #b陶醉猪尾巴#k 在这里你会发现药草提取物。请收集起来 #b100 陶醉猪尾巴s#k 并带他们到 #b魔法部部长.#k");
	if (status == 3){
		//qm.forceStartQuest();
		//qm.forceStartQuest(2324, "1");
		qm.gainExp(11000);
		qm.sendOk("干得好,通过该地区航行.");
		qm.forceCompleteQuest();
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
		qm.sendOk("嗯，我看到了这么全心全意地调用完全关闭入口和一切.");
	if (status == 1){
		qm.gainExp(11000);
		qm.sendOk("干得好 通过该地区航行.");
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
	