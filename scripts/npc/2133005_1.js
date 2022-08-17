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
	var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(300030310);
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
			if (cm.getPlayerCount(300030310) > 1){
	            cm.sendOk("已经有人挑战你无法进入！");
                    cm.dispose();
			}else{
				cm.sendYesNo("妖精女王#i3994117#\n你想挑战它吗？\n\r挑挑战需组队满足120级以上！\n\r 需要#v4000676#x50个！~~");
			}
		//}
	}
	else if (status == 1) 
	{ 	
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("你不是队长。请你们队长来说话吧！");
                    cm.dispose();
                }else if (cm.getLevel() < 120){
			cm.sendOk("#r110#k级以下玩家不能挑战!");
			cm.dispose();
			}else if(cm.getBossLoga("妖精女王") >= 挑战次数) {
	            cm.sendOk("您好,系统限定每个账号每天只能挑战" + 挑战次数 + "次,如果强行进入,会被系统弹回来的!");
                    cm.dispose();

		}else if(party.getMembers().size() < 1) {
	            cm.sendOk("需要 2 人以上的组队才能进入！!");
                    cm.dispose();
	}else if(cm.itemQuantity(4000676) < 50) 
{ 

	            cm.sendOk("你没有#v4000676#x50...！");
                    cm.dispose();
 
		}else{
if(cm.getMonsterCount(300030310) <= 100){
		

	
}			cm.setBossLoga("妖精女王");
			nextmap.resetReactors();
                        //cm.warpParty(300030310);			
			//cm.getEventManager("siwu").startInstance(cm.getParty(),cm.getMap());
                                cm.gainItem(4000676, -50);
                                cm.spawnMobOnMap(5250007,1,-19,150,300030310);
                                //cm.changeMusic("Bgm48/VerdelDungeon");
                           cm.warp(300030310, 0);
						   cm.getMap().给时钟(45, true, true);
cm.全服喇叭(2, "[" + cm.getPlayer().getName() + "] : 带领队伍在艾琳森林挑战【蝴蝶女王】！！");
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}