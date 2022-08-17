/*
Papulatus Reactor: Performs the Papulatus commands
*/

function act(){
    rm.mapMessage(5, "借由<时空裂缝的碎片>填补了时空的裂缝。");
    rm.changeMusic("Bgm09/TimeAttack");
    rm.spawnMonster(8500000, -410, -400);
    rm.getMap(220080000).setReactorState();
	rm.全服公告("[BOSS公告] 随着时间裂缝被补上，座钟中逐渐浮现出一个金黄色的光球，时间塔本源的守护者<帕普拉图斯>出现了。")
}