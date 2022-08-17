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
	var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(300010420);
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
			if (cm.getPlayerCount(300010420) > 1){
	            cm.sendOk("已经有人挑战你无法进入！");
                    cm.dispose();
			}else{
				cm.sendYesNo("查乌#i3994116#\n你想挑战它吗？\n\r挑挑战需组队满足100级以上！\n\r~");
			}
		//}
	}
	else if (status == 1) 
	{ 	
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("你不是队长。请你们队长来说话吧！");
                    cm.dispose();
                }else if (cm.getLevel() < 100){
			cm.sendOk("#r100#k级以下玩家不能挑战!");
			cm.dispose();
			}else if(cm.getBossLoga("查乌") >= 挑战次数) {
	            cm.sendOk("您好,系统限定每个账号每天只能挑战" + 挑战次数 + "次,如果强行进入,会被系统弹回来的!");
                    cm.dispose();

		}else if(party.getMembers().size() < 1) {
	            cm.sendOk("需要 2 人以上的组队才能进入！!");
                    cm.dispose();
	}else if(cm.itemQuantity(4000440) < 50) 
{ 

	            cm.sendOk("你没有#z4000440#x50个能够证明你的实力...！");
                    cm.dispose();
 
		}else{
if(cm.getMonsterCount(300010420) <= 100){
		

	
}			
			cm.setBossLoga("查乌");
			nextmap.resetReactors();
                        //cm.warpParty(300010420);			
			//cm.getEventManager("siwu").startInstance(cm.getParty(),cm.getMap());
                                cm.gainItem(4000440, -50);
                                cm.spawnMobOnMap(5250004,1,409,92,300010420);
                                //cm.changeMusic("Bgm48/VerdelDungeon");
                           cm.warp(300010420, 0);
						   cm.getMap().给时钟(120, true, true);
cm.全服喇叭(2, "[" + cm.getPlayer().getName() + "] : 带领队伍挑战艾琳森林【查乌】！！");
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}