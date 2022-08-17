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
	var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(863000920);
	if (mode == -1)
	{
		cm.dispose();

    }
    if (cm.getPlayer().getClient().getChannel() != 2 ) {
        cm.sendOk("贝勒德仅可在2频道召唤。");
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
 var check1 = cm.getMapFactory().getMap(863010200);
 var check2 = cm.getMapFactory().getMap(863010330);
 var check3 = cm.getMapFactory().getMap(863010210);
 var check4 = cm.getMapFactory().getMap(863010240);
 var check5 = cm.getMapFactory().getMap(863000920);
 var check6 = cm.getMapFactory().getMap(863010500);



            if (check1.playerCount() != 0 || check2.playerCount() != 0 || check3.playerCount() != 0 || check4.playerCount() != 0 || check5.playerCount() != 0 || check6.playerCount() != 0) {
                cm.sendOk("其他远征队正在挑战中！~");
                cm.safeDispose();
			}else{
				cm.sendYesNo("挑战贝勒德#i3994118#\n挑战请做好心理准备！\n\r挑挑战需组队满足180级以上！\n\r组组队满足2人以上！\n\r你确实要挑战我证明你的实力请交给我#v4033982#1个！~\n\r挑战成功有几率获得：#v1132243##v1132244##v1132245##v1132246##v1122264##v1122265##v1122266##v1122267##v1032220##v1032221##v1032222##v1032223##v4440101##v4441000##v4442000##v4310097#");
			}
		//}
	}
	else if (status == 1) 
	{ 	
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("你不是队长。请你们队长来说话吧！");
                    cm.dispose();


                }else if (cm.getLevel() < 180){
			cm.sendOk("#r180#k级以下玩家不能挑战!");
			cm.dispose();
			}else if(cm.getBossLog("贝勒德2") >5) {
	            cm.sendOk("您好,系统限定每天只能挑战5次,如果强行进入,会被系统弹回来的!");
                    cm.dispose();

		}else if(party.getMembers().size() < 1) {
	            cm.sendOk("需要 2 人以上的组队才能进入！!");
                    cm.dispose();
	}else if(cm.itemQuantity(4033982) < 1) 
{ 

	            cm.sendOk("你没有#z4033982#能够证明你的实力...");
                    cm.dispose();
 
		}else{
if(cm.getMonsterCount(863000920) <= 100){
		

	
}			cm.setBossLog("贝勒德2");

                     var FantMap = cm.getMap(863000920);
                     FantMap.resetFully();


			nextmap.resetReactors();
                        //cm.warpParty(863000920);			
			 //cm.getEventManager("beilede").startInstance(cm.getParty(),cm.getMap());
                                cm.gainItem(4033982, -1);
                          cm.spawnMobOnMap(9390633,2,62,129,863010200);
                          cm.spawnMobOnMap(9390636,1,240,129,863010200);
                          cm.spawnMobOnMap(9390633,2,508,129,863010200);
                          cm.spawnMobOnMap(9390636,1,569,-251,863010200);
                          cm.spawnMobOnMap(9390633,2,550,-251,863010200);
                          cm.spawnMobOnMap(9390633,1,55,-251,863010200);
                          cm.spawnMobOnMap(9390633,2,-57,-706,863010200);
                          cm.spawnMobOnMap(9390633,2,219,-706,863010200);
                          cm.spawnMobOnMap(9390641,1,363,-706,863010200);

                          cm.spawnMobOnMap(9390610,1,0,68,863010330,11600062000);

                          cm.spawnMobOnMap(9390635,1,-257,129,863010210);
                          cm.spawnMobOnMap(9390635,2,-34,129,863010210);
                          cm.spawnMobOnMap(9390635,1,373,129,863010210);
                          cm.spawnMobOnMap(9390635,2,528,129,863010210);

                          cm.spawnMobOnMap(9390635,2,67,-251,863010210);
                          cm.spawnMobOnMap(9390635,1,252,-251,863010210);
                          //cm.spawnMobOnMap(9390618,2,433,-251,863010210);

                          cm.spawnMobOnMap(9390635,2,320,-706,863010210);
                          cm.spawnMobOnMap(9390635,2,20,-706,863010210);
                          //cm.spawnMobOnMap(9390618,1,-282,-706,863010210);

                          cm.spawnMobOnMap(9390612,1,0,86,863010240,11860626489);

                          cm.spawnMobOnMap(9390600,1,12,62,863000920,58260000000);



     

                                //cm.changeMusic("Bgm48/VerdelDungeon");
                                cm.warpParty(863010200,"out00");
//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.startMapEffect("【无尽绯红】:[" + cm.getChar().getName() + "]带领队挑战Ⅱ核贝勒德！！", 5121000, true));
cm.全服喇叭(2, "[" + cm.getPlayer().getName() + "]带领队伍挑战贝勒德！~~");
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}