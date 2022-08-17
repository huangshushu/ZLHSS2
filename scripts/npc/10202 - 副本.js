/*
	NPC Name: 		Dances with Balrog
	Map(s): 		Maple Road : Spilt road of choice
	Description: 		Job tutorial, movie clip
*/

var status = -1;

function start() {
	if (cm.getMapId() != 1020000 && cm.getMapId() != 4000026) {
		cm.dispose();
		return
	}
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
		status++;
    } else {
		if (status == 1) {
			cm.sendNext("你想体验一下战士职业的话，请再来找我吧。");
			cm.dispose();
			return;
		}
		status--;
    }
    if (status == 0) {
		cm.sendNext("战士是具备强大攻击力和体力的职业，战场的最前线是其发挥价值的地方。基本攻击非常强大，通过不断学习各种高级技能，可以发挥出更加强大的力量。");
    } else if (status == 1) {
		cm.sendYesNo("你要体验一下战士职业吗？");
    } else if (status == 2) {
		cm.warp(1020100, 0); // Effect/Direction3.img/swordman/Scene00
		cm.dispose();
    }
}
