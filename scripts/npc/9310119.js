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
	var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(703020101);
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
			if (cm.getPlayerCount(703020101) > 0){
	            cm.sendOk("已经有人挑战你无法进入！");
                    cm.dispose();
			}else{
				cm.sendYesNo("钻机#i3994117#\n你想挑战它吗？\n\r挑挑战需组队满足140级以上！\n\r有几率获得：#v2290023##v2290016##v2290018##v2290021##v2290007##v2290033##v2290049##v2290051##v1432167##v1472214##v4033255##v1412103##v2340000##v4440000#等稀有装备级物品~");
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
			}else if(cm.getBossLog("钻机") >10) {
	            cm.sendOk("您好,系统限定每天只能挑战10次,如果强行进入,会被系统弹回来的!");
                    cm.dispose();

		}else if(party.getMembers().size() < 1) {
	            cm.sendOk("需要 2 人以上的组队才能进入！!");
                    cm.dispose();
	}else if(cm.itemQuantity(4001696) < 1) 
{ 

	            cm.sendOk("你没有#v4001696##z4001696#不能开启原重力之门...去问问金博士吧，他应该知道情况！");
                    cm.dispose();
 
		}else{
if(cm.getMonsterCount(703020101) <= 100){
		

	
}			cm.setBossLog("钻机");
			nextmap.resetFully();
                        //cm.warpParty(703020101);			
			//cm.getEventManager("siwu").startInstance(cm.getParty(),cm.getMap());
                                cm.gainItem(4001696, -1);
                          cm.spawnMobOnMap(9600086,1,578,220,703020101);
                          //cm.spawnMobOnMap(8240096,1,-118,60,350051250);
                          //cm.spawnMobOnMap(8240096,1,279,190,350051250);
                          //cm.spawnMobOnMap(8240096,1,579,362,350051250);
                          //cm.spawnMobOnMap(8240096,1,906,456,350051250);
                          //cm.spawnMobOnMap(8240096,1,1281,456,350051250);
                          //cm.spawnMobOnMap(8240096,1,117,96,350051250);
                          //cm.spawnMobOnMap(8240096,1,435,279,350051250);
                          //cm.spawnMobOnMap(8240096,1,760,456,350051250);
                          //cm.spawnMobOnMap(8240096,1,1145,456,350051250);
                         // cm.spawnMobOnMap(8240097,1,2,-16,703020101);

                                //cm.changeMusic("Bgm48/VerdelDungeon");
                           cm.warpParty(703020101, 0);
 cm.全服喇叭(9, "[" + cm.getPlayer().getName() + "] : 带领队伍挑战钻机！~~");
//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.startMapEffect("【未来新叶城】:[" + cm.getChar().getName() + "]带领队挑战钻机！！", 512102, true));
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}