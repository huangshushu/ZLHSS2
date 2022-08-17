importPackage(java.awt);
importPackage(Packages.tools);
importPackage(Packages.server);
importPackage(Packages.handling.world);
var status;
var 最后通关 = 100000;
var 通关时间 = 1000000;
var 次数限制 = 10;
var 奖励预览 = [

	[4031997, 1, 100],
	[2022468, 1, 100]
];


function start() {
    status = -1;
    action(1, 0, 0);
}
var time = 0;
function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.对话结束();
        return;
    } else {
        if (mode == 1){
            status++;
        }else{
            status--;
		}
        var mapId = cm.getMapId();
        if (mapId == 103000890) {
            cm.warp(103000000, "mid00");
            cm.removeAll(4001007);
            cm.removeAll(4001008);
            cm.对话结束();
        } else {
            var outText;
            if (mapId == 103000805) {
                outText = "你确定要离开地图？？";
                time = 1;
            } else {
                outText = "一旦你离开地图，你将不得不重新启动整个任务，如果你想再次尝试。你还是要离开这个地图？";
                time = 0;
            }
            if (status == 0) {
                cm.sendYesNo(outText);
            } else if (mode == 1) {
				cm.warp(103000890, "st00");
				if (time == 1) {
                    getPrize();
                }
                cm.对话结束();
            }
        }
    }
}
//副本通关奖励区域
/*
cm.概率给物品(物品代码，固定数量，概率,备注)；
cm.概率给物品2(物品代码，随机数量，概率,备注)；
*/
function getPrize() {
	var eim = cm.getEventInstance();
	
	if(eim==null){
		var 消耗时间 = 999999999;
	}else{
		var 消耗时间 = (通关时间 - eim.getTimeLeft())/1000;
	}
	var 角色 = cm.getPlayer().id;
	var 总完成 = cm.getBossRank("废弃都市", 2);
	var 神秘粉末获取次数 = 99999;
	//废弃盛产母矿，恩。
	if(cm.判断每日值("废弃都市神秘粉末")<=神秘粉末获取次数){
		//cm.概率给物品2(4000463,10,2,"国庆纪念币");
		//cm.增加每日值("废弃都市国庆纪念币");
	}else{
		//cm.个人公告("今日无法获取国庆纪念币。");
	}
	if(cm.getBossLog("废弃都市") < 次数限制){
		cm.gainMeso(50000);
		for (var i = 0; i < 奖励预览.length; i++) {
			gainItemPro(奖励预览[i][0], 奖励预览[i][1], 奖励预览[i][2]);
		}
		//cm.增加里程(1);
		cm.给经验(最后通关);
	}
	//解锁成就后获取额外的经验。
cm.worldMessage(2, "[副本-废弃都市] : 恭喜 " + cm.getPlayer().getName() + " 完成废弃都市副本，消耗时间 "+formatSeconds(消耗时间)+"。");
	if(总完成>=10){
		cm.给经验(最后通关/2);
	}
	//解锁成就后一定机率获取AP点。
	if(总完成>=9999999){
		if(cm.判断每日值("废弃给AP点")<=2){
			if(cm.百分率(0)){
			//	cm.增加每日值("废弃给AP点");
			}
		}
	}
	//记录通关信息
	cm.getPlayer().endPartyQuest(1201);
	cm.setBossRankCount("废弃都市",1);
	cm.setBossLog("废弃都市");
			if(eim!=null){
				if(cm.取副本通关时间(1,角色) > 消耗时间){
			cm.写记录(1,角色,消耗时间);
			//cm.个人公告("恭喜你刷新个人记录。");
		}else if(cm.取副本通关时间(1,角色) <=0){
			cm.写记录(1,角色,消耗时间);
			//cm.个人公告("恭喜你刷新个人记录。");
		}
	}
}


function formatSeconds(value) {
    var theTime = parseInt(value);
    var theTime1 = 0;
    var theTime2 = 0;
    if (theTime > 60) {
        theTime1 = parseInt(theTime / 60);
        theTime = parseInt(theTime % 60);
        if (theTime1 > 60) {
            theTime2 = parseInt(theTime1 / 60);
            theTime1 = parseInt(theTime1 % 60);
        }
    }
    var result = "" + parseInt(theTime) + " 秒 ";
    if (theTime1 > 0) {
        result = "" + parseInt(theTime1) + " 分 " + result;
    }
    if (theTime2 > 0) {
        result = "" + parseInt(theTime2) + " : " + result;
    }
    return result;
} 

function gainItemPro(itemId, count, prop){
	var number = Math.random()*(100);
	if(number <= prop){
		cm.gainItem(itemId, count);
	}
}
