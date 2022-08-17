/* ==================
 脚本类型: NPC	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
var status = 0;
var timeLevel = 30;
var maxLevel = 250;
var timePlayers = 1; // GMS = 3
var maxPlayers = 6; // GMS = 4 || but 6 makes it better :p
var open = false; //open or not
var PQ = 'coockpq';

function start() {
    status = -1;
    action(1, 0, 0);
}
   function action(mode, type, selection) {
    if (status >= 1 && mode == 0) {
		cm.dispose();
	return;
    }
    if (mode == 0 && status == 0) {
		cm.dispose();
		return;
	}
    if (mode == 1)
	status++;
    else
	status--;

    if (status == 0) {
	if (cm.getPlayer().getMapId() != 910002000) { // not in pq lobby
		cm.sendSimple("你想做一些美味的菜 对于 鹦鹉螺的船员？ 我可以教你怎么样.#b\r\n#L0#Go to the 组队任务 Lobby.")
	} else if (cm.getPlayer().getMapId() == 910002000) { // Normal
		cm.sendSimple("你想做一些美味的菜 对于 鹦鹉螺的船员？ 我可以教你怎么样.\r\n #b#L1# 开始烹饪与Tangyoon.#l \r\n #b#L4# 获取Tangyoon的厨师套装.#l \r\n #L3# 听听关于Tangyoon烹饪的解释.#l \r\n #L5# 检查今天的剩余挑战计数.#l");
	} else {
	    cm.dispose();
	}
    } else if (status == 1) {
	if (selection == 0) {
	    cm.saveLocation("MULUNG_TC"); 
	    cm.warp(910002000,0);
        cm.dispose();
	} else if (selection == 1) {
     if (cm.getParty() == null) { // No Party
     	cm.sendSimple("这个地方被满月的神秘光环包围，所以你不能自己进入。 如果你想进入，你的队长必须跟我说话.");
     	cm.dispose();
    } else if (!cm.isLeader()) { // Not Party Leader
		cm.sendOk("由你的队伍组人决定.");
        cm.dispose();
	} else if (cm.getPQLog(PQ) >= 10){ // Done 对于 today
        cm.sendOk("抱歉。 您已超过今天的最大尝试次数。 请明天回来.");
        cm.dispose();
    } else if (!cm.allMembersHere()) { // Check 对于 members
    	cm.sendSimple("很抱歉，但您是该会员的会员不包含至少2位会员。 请调整您的派对，以确保您的队伍至少包含2名全部为30级或以上的成员。 让我知道你什么时候完成.");
        cm.dispose();
    } else {

	// Check if all 队员 are over correct lvl
	var party = cm.getParty().getMembers();
	var mapId = cm.getMapId();
	var next = true;
	var levelValid = 0;
	var inMap = 0;
	var it = party.iterator();

	while (it.hasNext()) {
	    var cPlayer = it.next();
	if (cPlayer.getLevel() >= timeLevel && cPlayer.getLevel() <= maxLevel) {
		levelValid += 1;
	} else {
        cm.sendOk("你需要在等级大于 " + timeLevel + " 和 " + maxLevel + " 才可以挑战!");
        cm.dispose();
		next = false;
    } 
	if (cPlayer.getMapid() == mapId) {
		inMap += 1; 
	}
	}
	if (party.size() > maxPlayers || inMap < timePlayers) {
	    next = false;
	}//check if all 队员 here i think
	if (next) {
	    var em = cm.getEventManager("CookingPQ");
	if (em == null || open == false) {
		cm.sendSimple("此任务脚本当前未打开.");
        cm.dispose();
	} else {
	var prop = em.getProperty("state");
	if (prop == null || prop.equals("0")) {
		em.startInstance(cm.getParty(),cm.getMap(), 70);
	} else {
		cm.sendSimple("有人正在尝试任务。 请等待他们完成，或找到另一个频道.");
	}
		cm.removeAll(4001453);
        cm.setPQLog(PQ);
        cm.dispose();
	} 
    } else { // Not correct lvl or members
	    cm.sendYesNo("你的队伍不是之间的一方 " + timePlayers + " 和 " + maxPlayers + " 队员。 请回来，当你有之间 " + timePlayers + " 和 " + maxPlayers + " 队员.");
	} 
    }
	} else if (selection == 3) {
        cm.sendOk("#e <组队任务: 月亮兔宝宝的米糕>#n \r\n 只出现在一个神秘的月亮兔子 #b#m910010000##k 在充分的月亮期间. #b#p1012112##k of #b#m100000200##k 正在寻找Maplers寻找 #r月亮兔宝宝的米糕#k 对于 #b#p1012114##k. 如果你想见到月亮兔子，植物月见草种子在指定的地点和召唤对于满月。 保护月亮兔子从野生动物，直到所有 #r10 年糕#k 制成.\r\n #e - Level:#n 10 或以上 #r (推荐的 Level: 10 - 20)#k \r\n #e - 时限:#n 10 time \r\n #e - 参与者人数:#n 3 to 6 \r\n #e - 奖励:#n #i1003266:# 米糕轻便短大衣 #b \r\n(通过给Tory获得 100 年糕)#k \r\n #e - 项目:#n #i1002798:# 在我的头顶部的米糕 #b \r\n(通过给Tory获得 10 年糕).");
        cm.dispose();
	} else if (selection == 4) {
		cm.sendOk("天啊！ 你带来了月亮兔宝宝的米糕s 对于 我？ 好了，我准备了一些礼物给你们表示感谢。 多少 年糕 你想给我?#b\r\n#L10#月亮兔宝宝的米糕 x10 - 在我的头顶部的米糕#l\r\n#L11#月亮兔宝宝的米糕 x100 - 米糕轻便短大衣");
	} else if (selection == 5) {
    var pqtry = 10 - cm.getPQLog(PQ);
    if (pqtry >= 10){
        cm.sendOk("抱歉，您已超过尝试次数上限 对于 今天。 请明天回来.");
        cm.dispose();   
	} else {
        cm.sendOk("你可以做这个任务一天10次。 你做到了 " + pqtry + " 时间今天.");
		cm.dispose();
	}
	}
    } else if (status == 2) { 
	if (selection == 10) {
		if (!cm.canHold(1002798,1)) {
		cm.sendOk("腾出背包空间.");
	}else if (cm.haveItem(4001101,10)) {
		cm.gainItem(1002798, 1);
		cm.gainItem(4001101, -10);
		cm.sendOk("谢谢你。我真的要享受这些蛋糕!");
		cm.dispose();
	}else{
        cm.sendOk("请确保你有足够的蛋糕需要.");
		cm.dispose();
	}  
	} else if (selection == 11) {
	if (!cm.canHold(1003266,1)) {
		cm.sendOk("Make room 对于 this Hat.");
	}else if (cm.haveItem(4001101,100)) {
		cm.gainItem(1003266, 1);
		cm.gainItem(4001101, -100);
		cm.sendOk("谢谢你。我真的要享受这些蛋糕!");
		cm.dispose();
	} else{
        cm.sendOk("请确保你有足够的蛋糕需要.");
		cm.dispose();
	}
	} if (mode == 0) { 
        cm.dispose();
    } 
}
}