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
			if (cm.getPlayerCount(272030400) > 0){
	            cm.sendOk("已经有人挑战你无法进入！");
                    cm.dispose();
			}else{
				cm.sendYesNo("阻止阿卡伊勒进入时间神殿，你必须先得到在次元缝隙的格莱特的同意！\r\n\r\n挑战需求：组队成员需达到170级以上！并且拿出格莱特所给你证物#v4033117#！\r\n\r\n击败阿卡伊勒有几率获得：\r\n#v1122034##v1122035##v1122036##v1122037##v1122038##v5200002##v4441000#等稀有物品及装备");
			}
		//}
	}
	else if (status == 1) 
	{ 	
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("你不是队长。请你们队长来说话吧！");
                    cm.dispose();
                }else if (cm.getLevel() < 170){
			cm.sendOk("#r170#k级以下玩家不能挑战!");
			cm.dispose();
			}else if(cm.getBossLog("阿卡伊勒") >10) {
	            cm.sendOk("您好,系统限定每天只能挑战10次,如果强行进入,会被系统弹回来的!");
                    cm.dispose();

		}else if(party.getMembers().size() < 1) {
	            cm.sendOk("需要 2 人以上的组队才能进入！!");
                    cm.dispose();
	}else if(cm.itemQuantity(4033117) < 1) 
{ 

	            cm.sendOk("你没有#v4033117##z4033117#能够证明你的实力...");
                    cm.dispose();
 
		}else{
if(cm.getMonsterCount(272030400) <= 100){
		

	
}			cm.setBossLog("阿卡伊勒");
                     var FantMap = cm.getMap(272030400);
                     FantMap.resetFully();

			nextmap.resetReactors();			
			//cm.getEventManager("aka").startInstance(cm.getParty(),cm.getMap());
                             cm.spawnMobOnMap(8860000,1,-12,-181,272030400);
//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.startMapEffect("【次元缝隙】:[" + cm.getChar().getName() + "]带领队伍挑战阿卡伊勒！", 5121006, true));
cm.全服喇叭(2, "[" + cm.getPlayer().getName() + "]带领队伍挑战次元缝隙-阿卡伊勒！~~");
                                cm.gainItem(4033117, -1);
                                cm.warpParty(272030400);
                                //cm.serverNotice("『时间缝隙』：【" + cm.getChar().getName() + "】带领队伍挑战阿卡伊勒去了！");
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}