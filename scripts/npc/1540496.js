/*
 *
 *  此脚本由冒险岛制作完成
 * 
 *
 */


var status = 0;

function start() 
	{
	status = -1;
	action(1, 0, 0);
	}

function action(mode, type, selection)
{
	var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(350060160);
	if (mode == -1)
	{
		cm.dispose();

    }
    if (cm.getPlayer().getClient().getChannel() != 4 ) {
        cm.sendOk("斯乌仅可在4频道召唤。");
        cm.dispose();
	}
	else if (mode == 0)
	{
		cm.sendOk("好的如果要挑战随时来找我.");
		cm.dispose();
	} 
	else 
	{
	if (mode == 1)
	status++;
	else
	status--;
		
	if (status == 0)
	{	

			if (cm.getPlayerCount(350050100) > 0){
	            cm.sendOk("已经有人挑战你无法进入！队伍进度阶段1>核心通道1");
                    cm.dispose();

			 }else  if (cm.getPlayerCount(350050200) > 0){
	            cm.sendOk("已经有人挑战你无法进入！队伍进度阶段2>核心通道2");
                    cm.dispose();
			 }else  if (cm.getPlayerCount(350050300) > 0){
	            cm.sendOk("已经有人挑战你无法进入！队伍进度阶段3>升降机！");
                    cm.dispose();
			 }else  if (cm.getPlayerCount(350051000) > 0){
	            cm.sendOk("已经有人挑战你无法进入！队伍进度阶段4>黑色天堂D1地区！");
                    cm.dispose();
			 }else  if (cm.getPlayerCount(350051050) > 0){
	            cm.sendOk("已经有人挑战你无法进入！队伍进度阶段5>黑色天堂D1地区2！");
                    cm.dispose();
			 }else  if (cm.getPlayerCount(350051250) > 0){
	            cm.sendOk("已经有人挑战你无法进入！队伍进度阶段6>排风通道！");
                    cm.dispose();
			 }else  if (cm.getPlayerCount(350060000) > 0){
	            cm.sendOk("已经有人挑战你无法进入！队伍进度阶段7>内部核心入口！");
                    cm.dispose();
			 }else  if (cm.getPlayerCount(350060160) > 0){
	            cm.sendOk("已经有人挑战你无法进入！队伍进度阶段8>黑色天堂内部核心-机械斯乌！");
                    cm.dispose();
			 }else  if (cm.getPlayerCount(350060180) > 0){
	            cm.sendOk("已经有人挑战你无法进入！队伍进度阶段9>内部核心2-斯乌本体1阶段！");
                    cm.dispose();
			 }else  if (cm.getPlayerCount(350060600) > 0){
	            cm.sendOk("已经有人挑战你无法进入！队伍进度阶段10>内部核心3-斯乌本体2阶段！");
                    cm.dispose();
			 }else  if (cm.getPlayerCount(350060201) > 0){
	            cm.sendOk("已经有人挑战你无法进入！队伍进度阶段>重返地图！");
                    cm.dispose();
			}else{
				cm.sendYesNo("乌斯#i3994118#\n挑战请做好心理准备！\n\r挑挑战需组队满足210级以上！\n\r组组队满足3人以上！每次挑战有5次重返机会!消耗栏留出2格以上!\n\r你确实要挑战我证明你的实力请交给我#v4032168#1个！~\r\n");
			}
		//}
	}
	else if (status == 1) 
	{ 	
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("你不是队长。请你们队长来说话吧！");
                    cm.dispose();
                }else if (cm.getLevel() < 210){
			cm.sendOk("#r210#k级以下玩家不能挑战!");
			cm.dispose();
			}else if(cm.getBossLog("乌斯") >5) {
	            cm.sendOk("您好,系统限定每天只能挑战5次,如果强行进入,会被系统弹回来的!");
                    cm.dispose();

		}else if(party.getMembers().size() < 1) {
	            cm.sendOk("需要 2 人以上的组队才能进入！!");
                    cm.dispose();
	}else if(cm.itemQuantity(4032168) < 1) 
{ 

	            cm.sendOk("你没有#z4032168#能够证明你的实力...");
                    cm.dispose();
 
		}else{
if(cm.getMonsterCount(350060160) <= 100){
		

	
}			cm.setBossLog("乌斯");

                     var FantMap = cm.getMap(350060600);
                     FantMap.resetFully();

                     var FantMap = cm.getMap(350060160);
                     FantMap.resetFully();
                     var FantMap = cm.getMap(350060180);
                     FantMap.resetFully();
			nextmap.resetReactors();
                        //cm.warpParty(350060160);			
			//cm.getEventManager("siwu").startInstance(cm.getParty(),cm.getMap());
                                cm.gainItem(4032168, -1);
                          cm.spawnMobOnMap(9300429,1,78,5,350050300);
                          cm.spawnMobOnMap(8240096,1,-118,60,350051250);
                          cm.spawnMobOnMap(8240096,1,279,190,350051250);
                          cm.spawnMobOnMap(8240096,1,579,362,350051250);
                          cm.spawnMobOnMap(8240096,1,906,456,350051250);
                          cm.spawnMobOnMap(8240096,1,1281,456,350051250);
                          cm.spawnMobOnMap(8240096,1,117,96,350051250);
                          cm.spawnMobOnMap(8240096,1,435,279,350051250);
                          cm.spawnMobOnMap(8240096,1,760,456,350051250);
                          cm.spawnMobOnMap(8240096,1,1145,456,350051250);
                          cm.spawnMobOnMap(8240097,1,2,-16,350060160,22636325622);
                          cm.spawnMobOnMap(8240098,1,-174,-16,350060180,33265988000);
                          cm.spawnMobOnMap(8240099,1,-17,-16,350060600,43265988000);

                                //cm.changeMusic("Bgm48/VerdelDungeon");
                                cm.warpParty(350050100);
                                //cm.givePartyItems(2432262, 5);
//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.startMapEffect("【黑色天堂】:[" + cm.getChar().getName() + "]带领队伍向核心进发！！", 5121000, true));
cm.喇叭(2, "[" + cm.getPlayer().getName() + "]带领队伍挑战黑色天堂-斯乌！~~");
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}