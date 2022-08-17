/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Master Sergeant Fox <Orbis Exchange Quest> - Orbis(200000000)
-- By ---------------------------------------------------------------------------------------------
	Sean360
-- Version Info -----------------------------------------------------------------------------------
	1.1 - Official Text [Information]
	1.0 - First Version by Sean360
---------------------------------------------------------------------------------------------------
**/

var status = 0;
var eQuestChoices = new Array (4000073,4000059,4000060,4000061,4000058,
    4000062,4000048,4000049,4000055,4000056,
    4000051,4000052,4000050,4000057,4000053,
    4000054,4000076,4000078,4000081,4000070,
    4000071,4000072,4000069,4000079,4000080);

var eQuestPrizes = new Array();

eQuestPrizes[0] = new Array ([2340000,20],  // Orange Potions
    [2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[1] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[2] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[3] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[4] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[5] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[6] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[7] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[8] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[9] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[10] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[11] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[12] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[13] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[14] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[15] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[16] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[17] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[18] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[19] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[20] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[21] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[22] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[23] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[24] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
var requiredItem  = 0;
var lastSelection = 0;
var prizeItem     = 0;
var prizeQuantity = 0;
var itemSet;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
var 等级 = cm.getPlayer().getLevel();
    if (mode == 0 && (status == 1 || status == 3)) {
	cm.sendNext("需要的时候再来找我吧。");
	cm.dispose();
	return;
    } else if (mode == 0 && status == 3) {
	cm.dispose();
    } else if (mode == 0 && status == 4) {
	cm.sendNext("需要的时候再来找我吧。");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) { // first interaction with NPC
	cm.sendNext("我的工作就是在这里收集物品和其他地方出售，但这些天怪物变得更加敌对的，所以它很难获得良好的道具...你看看兑换奖励？#v2000005##v2340000##v2460005##v4000313##v4310149##v2049124##v4032125#以及大量经验值！");
    } else if (status == 1) {
	cm.sendYesNo("这笔交易很简单，首先你得得到我需要的东西，当然我会给你不错的酬劳。");
    } else if (status == 2) {
	var eQuestChoice = makeChoices(eQuestChoices);
	cm.sendSimple(eQuestChoice);
    } else if (status == 3){
	lastSelection = selection;
	requiredItem = eQuestChoices[selection];
	cm.sendYesNo("让我看看，你想要交换你的 #b100个 #t" + requiredItem + "##k 来换取一些酬劳是吧？ 交易前确保你的道具栏位是否足够吧！！");
    }else if (status == 4){
	itemSet = (Math.floor(Math.random() * eQuestPrizes[lastSelection].length));
	reward = eQuestPrizes[lastSelection];
	prizeItem = reward[itemSet][0];
	prizeQuantity = reward[itemSet][1];
	if(!cm.haveItem(requiredItem,100)){
	    cm.sendOk("嗯... 你确定你有 #b100个 #t" + requiredItem + "##k? 如果有请定你道具拦是不是满了....");
	} else if(!cm.canHold(prizeItem)){
	    cm.sendNext("你的道具拦似乎满了，请清空一些不要的东西再来找我交易一次谢谢。");
	} else {
	    cm.gainItem(requiredItem,-100);
	    cm.gainExp(等级 * 10000);
	    cm.gainItem(prizeItem, prizeQuantity);
	    cm.sendOk("为你的 #b100个 #t"+requiredItem+"##k, 这里是我的奖励 #b"+prizeQuantity+" #t"+prizeItem+"##k. 你怎么看？？ 你是否喜欢我的奖励呢？？ \r\n如果喜欢欢迎下次再来找我交易，我会在这里等着你的！！");
	}
	cm.dispose();
    }
}

function makeChoices(a){
    var result  = "好，首先你需要选择，你手上有的道具，当然更多道具收获更多。\r\n";
    for (var x = 0; x< a.length; x++){
	result += " #L" + x + "##v" + a[x] + "#  #t" + a[x] + "##l\r\n";
    }
    return result;
}