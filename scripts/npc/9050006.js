var QuestName = "隐藏任务 -- 通缉铁皮猪";//任务ID
var Meso = 1000000;//奖励金币
var Exp = 1000000;//奖励经验
var ItemID = 4005004;//奖励道具ID
var QuestItemID = 4001343;//任务所需道具ID
var QuestItemNum = 500;//任务所需道具数量

var status = 0;

	function start() {
		status = -1;
		action(1, 0, 0);
		}

	function action(mode, type, selection) {
		if (mode == -1) {
		cm.dispose();
		} else {
		if (status >= 0 && mode == 0) {
		cm.dispose();
		return;
		}
		if (mode == 1)
		status++;
		else
		status--;


	if (status == 0) {
	    var textz = "            "+QuestName+"\r\n";

		textz += " - 任务所需道具：#v"+QuestItemID+"##z"+QuestItemID+"#\r\n\r\n";

		textz += " - 道具所需数量："+QuestItemNum+"\r\n\r\n";
		
		textz += " - 任务奖励经验："+Exp+"\r\n\r\n";
		
		textz += " - 任务奖励道具10个：#v"+ItemID+"##z"+ItemID+"#\r\n\r\n";
		
		textz += " - 任务奖励金币："+Meso+"\r\n\r\n";
		
		cm.sendYesNo (textz);  


             } else if (status == 1) {		
		   if (cm.haveItem(QuestItemID,QuestItemNum) == false) {
		            cm.sendOk("所需任务道具数量不足，请确认后再来。");
				    cm.dispose();					
    } else if (cm.getPlayer().getBossLog(QuestName,1) > 0) {
                    cm.sendOk("此任务只能完成一次。");					
				    cm.dispose();
                    } else{
					cm.gainItem(QuestItemID,-QuestItemNum);	
                    cm.gainItem(ItemID,10);//奖励道具ID，数量
					cm.gainExp(Exp);
					cm.gainMeso(Meso);
					cm.getPlayer().setBossLog(QuestName,1,1);
					cm.getPlayer().setBossLog("隐藏任务成就值",1,1);
		 		    cm.sendOk("任务完成");
		 		    cm.dispose();
					}

    }
   
}
}

