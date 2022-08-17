/* 	Engine room, bob
*/
var 挑战次数 = 1;
var 材料次数 = 10;

function start() {
	if(cm.getPlayer().haveItem(4000384, 1)){
		cm.getPlayer().gainItem(4000384, -1);
		if(cm.getPlayerCount(541010060) > 0){
			cm.sendOk("里面有人了，你不能进去!")
			cm.dispose();
			return;
		}else if(cm.getBossLoga("幽灵船船长") >= 挑战次数){
			cm.sendOk("一个账号每天只能挑战 " + 挑战次数 + " 次!")
			cm.dispose();
			return;
		}
		cm.getMap(541010060).resetFully();
		cm.warp(541010060);
		cm.spawnMonster(9700037, -603, 135);
		cm.setBossLoga("幽灵船船长");
		cm.dispose();
	}else{
		cm.sendOk("你没有#v4000384##z4000384#！不能让你进去!")
		if(cm.getBossLoga("幽灵船长") < 材料次数){
			cm.spawnMonster(9420513, -492, 250);
			cm.setBossLoga("幽灵船长");
		}
		cm.dispose();
	}
   
}

function action(mode, type, selection) {
    cm.dispose();
}