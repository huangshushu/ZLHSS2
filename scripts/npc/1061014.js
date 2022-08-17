/*
 *
 *  此脚本由冒险岛制作完成
 * 
 *
 */
var 挑战次数 = 1;

var status = 0;

function start() 
	{
	status = -1;
	action(1, 0, 0);
	}

function action(mode, type, selection)
{
	var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(105100300);
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
			if (cm.getPlayerCount(105100300) > 1){
	            cm.sendOk("已经有人挑战你无法进入！");
                    cm.dispose();
			}else{
				cm.sendYesNo("挑战要求50级以上，每个账号每天有" + 挑战次数 + "次机会，挑战巨魔蝙蝠！");
			}
		//}
	}
	else if (status == 1) 
	{ 	
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("你不是队长。请你们队长来说话吧！");
                    cm.dispose();

			}else if(cm.getBossLoga("jumo01") >= 挑战次数) {
	            cm.sendOk("您账号今天的挑战次数已经用完了，请明天再来吧..");
                    cm.dispose();

		}else if(party.getMembers().size() < 1) {
	            cm.sendOk("需要 1 人以上的组队才能进入！!");
                    cm.dispose();

 
		}else{
if(cm.getMonsterCount(105100300) <= 100){
		

	
}			 cm.setBossLoga('jumo01');
			nextmap.resetReactors();			
			cm.getEventManager("BossBalrog").startInstance(cm.getParty(),cm.getMap());
                          //cm.spawnMobOnMap(8230043,1,78,5,350050300);
                          //cm.spawnMobOnMap(8240096,1,-118,60,350051250);
                          //cm.spawnMobOnMap(8240096,1,279,190,350051250);
                          //cm.spawnMobOnMap(8240096,1,579,362,350051250);
                          //cm.spawnMobOnMap(8240096,1,906,456,350051250);
                          //cm.spawnMobOnMap(8240096,1,1281,456,350051250);

                                //cm.gainItem(4000313, -1);
                                cm.warpParty(105100300);
                               cm.全服喇叭(6, "[" + cm.getPlayer().getName() + "]带领队伍挑战迷宫深处-巨魔蝙蝠怪！~");
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}