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
	var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(240093300);
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
			if (cm.getPlayerCount(240093300) > 0){
	            cm.sendOk("已经有人挑战你无法进入！");
                    cm.dispose();
			}else{
				cm.sendYesNo("蜘蛛女王#i3994117#\n你想挑战它吗？\n\r挑挑战需组队满足155级以上！\n\r 需要#v4033124#x50个！~~");
			}
		//}
	}
	else if (status == 1) 
	{ 	
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("你不是队长。请你们队长来说话吧！");
                    cm.dispose();
                }else if (cm.getLevel() < 155){
			cm.sendOk("#r155#k级以下玩家不能挑战!");
			cm.dispose();
			}else if(cm.getBossLog("蜘蛛女王1") >10) {
	            cm.sendOk("您好,系统限定每天只能挑战10次,如果强行进入,会被系统弹回来的!");
                    cm.dispose();

		}else if(party.getMembers().size() < 1) {
	            cm.sendOk("需要 2 人以上的组队才能进入！!");
                    cm.dispose();
	}else if(cm.itemQuantity(4033124) < 50) 
{ 

	            cm.sendOk("你没有#v4033124#x50...！");
                    cm.dispose();
 
		}else{
if(cm.getMonsterCount(240093300) <= 100){
		

	
}			cm.setBossLog("蜘蛛女王1");

                     var FantMap = cm.getMap(240093300);
                     FantMap.resetFully();

			nextmap.resetReactors();
                        //cm.warpParty(240093300);			
			//cm.getEventManager("siwu").startInstance(cm.getParty(),cm.getMap());
                                cm.gainItem(4033124, -50);
                                cm.spawnMobOnMap(8800400,1,187,97,240093300,6670000000);
                                //cm.changeMusic("Bgm48/VerdelDungeon");
                           cm.warp(240093300, 0);
cm.全服喇叭(2, "[" + cm.getPlayer().getName() + "]带领队伍在岩壁巨人内部挑战【蜘蛛女王】！！");
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}