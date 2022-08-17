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
			if (cm.getPlayerCount(252030100) > 0){
	            cm.sendOk("已经有人挑战你无法进入！");
                    cm.dispose();
			}else{
				cm.sendYesNo("挑战要求120级以上，每次挑战需要#v4001431#每天有3次机会需要挑战纳瓦拉吗？幸运的话还会遇到黄金宝箱哟！~");
			}
		//}
	}
	else if (status == 1) 
	{ 	
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("你不是队长。请你们队长来说话吧！");
                    cm.dispose();

			}else if(cm.getBossLog("nwn01") >10) {
	            cm.sendOk("您今天的挑战次数已经用完了，请明天再来吧..");
                    cm.dispose();

		}else if(party.getMembers().size() < 1) {
	            cm.sendOk("需要 1 人以上的组队才能进入！!");
                    cm.dispose();
	}else if(cm.itemQuantity(4001431) < 1) 
{ 

	            cm.sendOk("你好像没有#v4001431#");
                    cm.dispose();
 
		}else{
if(cm.getMonsterCount(252030100) <= 100){
		

	
}			cm.setBossLog("nwn01");

			nextmap.resetReactors();			
			//cm.getEventManager("sl").startInstance(cm.getParty(),cm.getMap());
                         cm.spawnMobOnMap(8800200,1,746,512,252030100);

                                cm.gainItem(4001431, -1);
                                cm.warpParty(252030100);
                                cm.全服喇叭(2, "[" + cm.getPlayer().getName() + "]带领队伍挑战【纳瓦拉】！！");
                                //cm.serverNotice("『藏经阁七层』：【" + cm.getChar().getName() + "】带领队伍挑战妖僧去了！");
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}