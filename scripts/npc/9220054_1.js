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
			if (cm.getPlayerCount(510102200) > 1){
	            cm.sendOk("已经有人挑战你无法进入！");
                    cm.dispose();
			}else{
				cm.sendYesNo("挑战要求100级以上，每次挑战需要#v4000313#1个每个账号每天有" + 挑战次数 +"次机会，需要挑战三头犬吗？");
			}
		//}
	}
	else if (status == 1) 
	{ 	
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("你不是队长。请你们队长来说话吧！");
                    cm.dispose();

			}else if(cm.getBossLoga("三头犬") >= 挑战次数) {
	            cm.sendOk("您账号今天的挑战次数已经用完了，请明天再来吧..");
                    cm.dispose();

		}else if(party.getMembers().size() < 1) {
	            cm.sendOk("需要 1 人以上的组队才能进入！!");
                    cm.dispose();
	}else if(cm.itemQuantity(4000313) < 1) 
{ 

	            cm.sendOk("你好像没有#v4000313#");
                    cm.dispose();
 
		}else{
if(cm.getMonsterCount(510102200) <= 100){
		

	
}			cm.setBossLoga("三头犬");

			nextmap.resetReactors();			
			//cm.getEventManager("sl").startInstance(cm.getParty(),cm.getMap());
                         cm.spawnMobOnMap(9400897,1,1130,10,510102200);

                                cm.gainItem(4000313, -1);
                                cm.warpParty(510102200);
								cm.getMap().给时钟(90, true, true);
                                //cm.worldSpouseMessage(0x20,"[维拉森特] 玩家 "+ cm.getChar().getName() +" 带领队伍挑战三头犬！");
                                //cm.serverNotice("『藏经阁七层』：【" + cm.getChar().getName() + "】带领队伍挑战妖僧去了！");
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}