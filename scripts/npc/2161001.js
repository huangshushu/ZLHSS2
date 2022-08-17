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
			if (cm.getPlayerCount(211070200) > 0){
	            cm.sendOk("已经有人挑战你无法进入！");
                    cm.dispose();
			}else{
				cm.sendYesNo("请你们救救被黑化狮子王...但是必须取得他的信任!\r\n\r\n挑战需求：玩家需要达到140级以上，获得#v4032839##z4032839#。\r\n\r\n有几率爆出：#v1302152##v1402095##v1442116##v1332225##v1402196##v1432167##v1072972##v1052808##v1052807##v1052806##v1052805##v1052804##v1082617##v1082616##v1082615##v1082614##v1082613##v1102713##v2041020##v2041014##v2040925##v2040933##v4001608##v1072973#等稀有装备");
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
			}else if(cm.getBossLog("狮子王") >10) {
	            cm.sendOk("您好,系统限定每天只能挑战10次,如果强行进入,会被系统弹回来的!");
                    cm.dispose();

		}else if(party.getMembers().size() < 1) {
	            cm.sendOk("需要 2 人以上的组队才能进入！!");
                    cm.dispose();
	}else if(cm.itemQuantity(4032839) < 1) 
{ 

	            cm.sendOk("你没有#z4032839#...");
                    cm.dispose();
 
		}else{
if(cm.getMonsterCount(211070200) <= 100){
		

	
}			cm.setBossLog("狮子王");
                     var FantMap = cm.getMap(211070200);
                     FantMap.resetFully();

			nextmap.resetReactors();			
			//cm.getEventManager("shiziwang").startInstance(cm.getParty(),cm.getMap());

                          cm.spawnMobOnMap(8840000,1,7,-181,211070200,6300000000);
//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.startMapEffect("【狮子王之城】:[" + cm.getChar().getName() + "]带领队伍挑战班-雷昂！", 5121006, true));
cm.全服喇叭(2, "[" + cm.getPlayer().getName() + "]带领队伍挑战狮子王！~~");
                                cm.gainItem(4032839, -1);
                                cm.warpParty(211070200);
cm.全服喇叭(1, "[" + cm.getPlayer().getName() + "]带领队伍挑战狮子王，希望你们平安归来！~");
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}