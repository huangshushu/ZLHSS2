/* 
	NPC Name: 		Peter
	Map(s): 		Maple Road: Entrance - Mushroom Town Training Camp (3)
	Description: 	Takes you out of Entrace of Mushroom Town Training Camp
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	cm.sendNext("你已经完成了所有的培训。做得好。你似乎已经准备好马上开始旅程了! 很好，我将让你转到下一个地方。");
    } else if (status == 1) {
	cm.sendNextPrev("但请记住，一旦你离开这里，你将进入一个充满怪物的村庄。好了，他们，再见了!!");
    } else if (status == 2) {
	cm.warp(40000, 0);
	cm.gainExp(3);
	cm.dispose();
    }
}
