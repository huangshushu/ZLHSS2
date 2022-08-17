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
	var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(803001200);
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
			if (cm.getPlayerCount(803001200) > 0){
	            cm.sendOk("已经有人挑战你无法进入！");
                    cm.dispose();
			}else{
				cm.sendYesNo("绯红BOSS,猎魔人,海之魔女,血焰将军,地狱船长#1\n\r##i3994117#你想挑战它吗？\n\r挑挑战需组队满足140级以上！\n\r有几率获得：稀有装备及专属绯红物品~");
			}
		//}
	}
	else if (status == 1) 
	{ 	
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("你不是队长。请你们队长来说话吧！");
                    cm.dispose();
                }else if (cm.getLevel() < 140){
			cm.sendOk("#r140#k级以下玩家不能挑战!");
			cm.dispose();
			}else if(cm.getBossLog("绯红01") >10) {
	            cm.sendOk("您好,系统限定每天只能挑战10次,如果强行进入,会被系统弹回来的!");
                    cm.dispose();

		}else if(party.getMembers().size() < 1) {
	            cm.sendOk("需要 2 人以上的组队才能进入！!");
                    cm.dispose();
	}else if(cm.itemQuantity(4031497) < 1) 
{ 

	            cm.sendOk("你没有#v4031497##z4031497#！");
                    cm.dispose();
 
		}else{
if(cm.getMonsterCount(803001200) <= 100){
		

	
}			cm.setBossLog("绯红01");
			nextmap.resetReactors();
                        //cm.warpParty(803001200);			
			//cm.getEventManager("siwu").startInstance(cm.getParty(),cm.getMap());
                                cm.gainItem(4031497, -1);
                     var FantMap = cm.getMap(803001200);
                     FantMap.resetFully();


			    cm.spawnMobOnMap(9400592,1,1940,276,803001200);
                            cm.spawnMobOnMap(9400591,1,1640,276,803001200);
                            cm.spawnMobOnMap(9400589,1,1040,276,803001200);
                            cm.spawnMobOnMap(9400590,1,640,276,803001200);
                          cm.warpParty(803001200);

                        
                         
 cm.喇叭(2, "[" + cm.getPlayer().getName() + "]带领队伍挑战绯红大陆！~~");
//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.startMapEffect("【未来新叶城】:[" + cm.getChar().getName() + "]带领队挑战绯红01！！", 512102, true));
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}