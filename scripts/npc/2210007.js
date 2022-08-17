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
	var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(910000016);
	if (mode == -1)
	{
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
			if (cm.getPlayerCount(924030300) > 0){
	            cm.sendOk("已经有人挑战你无法进入！");
                    cm.dispose();
			}else{
				cm.sendYesNo("看来你已经知道这里的秘密了？如果不知道的话去问问勘查团长拉比吧，他在勘探本部，如果你已经知道了我就送你一程吧！");
			}
		//}
	}
	else if (status == 1) 
	{ 	
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("你不是队长。请你们队长来说话吧！");
                    cm.dispose();
                }else if (cm.getLevel() < 200){
			cm.sendOk("#r200#k级以下玩家不能挑战!");
			cm.dispose();
			}else if(cm.getBossLog("dahuacao") >10) {
	            cm.sendOk("您好,系统限定每天只能挑战10次,如果强行进入,会被系统弹回来的!");
                    cm.dispose();

		}else if(party.getMembers().size() < 1) {
	            cm.sendOk("需要 1 人以上的组队才能进入！!");
                    cm.dispose();
	}else if(cm.itemQuantity(4001272) < 1) 
{ 

	            cm.sendOk("你好像没有找到真实的秘密不能送你上去!快去问问勘探队长...");
                    cm.dispose();
 
		}else{
if(cm.getMonsterCount(924030300) <= 100){
		

	
}			cm.setBossLog("dahuacao");
                     var FantMap = cm.getMap(924030300);

                     FantMap.resetFully();

			nextmap.resetReactors();			
			//cm.getEventManager("dahuacao").startInstance(cm.getParty(),cm.getMap());

                          cm.spawnMobOnMap(8860001,1,44,335,924030300,10120000000);
//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.startMapEffect("【岩壁巨人】:[" + cm.getChar().getName() + "]带领队伍挑战巨型食人花！", 5121007, true));
cm.全服喇叭(2, "[" + cm.getPlayer().getName() + "]带领队伍挑战克鲁塞思-巨型向日葵！~~");
                                cm.gainItem(4001272, -1);
                                cm.warpParty(924030300);
                                //cm.serverNotice("『岩壁巨人』：【" + cm.getChar().getName() + "】带领队伍挑战岩壁大花草去了！");
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}