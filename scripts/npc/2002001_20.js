

var wui = 0;
var price = 1000000;
var fame = 1
var qty;


function start() {
	status = -1;
	action(1, 0, 0);
}
function action(mode, type, selection) { 
	if (mode == 1)
		status++;
	else 
		cm.dispose();
if (status == 0 && mode == 1) {
cm.sendYesNo("#d你需要换人气吗？我可以给你加，不过要#r100W#d一点噢！一次最多购买100点\r\n当前人气数值:#r" + cm.getPlayer().getFame() + " #fUI/UIWindow.img/QuestIcon/6/0# ");
}
else if (status == 1 && mode == 1) {
		var prompt = "#b你想换多少人气?";
		cm.sendGetNumber(prompt,1,1,100)
}
else if (status == 2 && mode == 1) {
qty = selection;
cm.sendYesNo("#b你将花费#r"+qty*price+"#b金币兑换#r"+qty+"#b点人气,你确定要兑换？");
}
else if (status == 3 && mode == 1) {
if (cm.getMeso() >= price*qty) 
{
	cm.getPlayer().addFame(+fame*qty);
	cm.gainMeso(-price*qty);
	Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"人气值购买" + " : " + cm.getPlayer().getName() +"玩家成功 人气值购买了"+qty+"点人气。O(∩_∩)O~",true).getBytes());
			
	var say = "#b成功兑换 " +qty+ "点人气?";
	cm.sendOk(say);
	cm.dispose();
	} else {
			cm.sendOk("对不起，你金币不足.");
			cm.dispose();
}
}
else
	cm.dispose();
}

