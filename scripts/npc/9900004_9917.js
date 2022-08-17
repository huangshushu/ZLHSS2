/*
 星梦冒险岛-万圣节活动
 */
 
 var itemList =
    Array(
		Array(4001126,1000,100,"枫叶x100"),//代码、概率、数量、文本
		Array(4310097,1000,1,"贝勒德币x1"),
		Array(4310058,1000,1,"暴君币x1"),
		Array(4310060,1000,3,"暴君强化币x3"),
		Array(2022466,25,1,"暴君自选箱子x1"),
		Array(4310038,1000,1,"PB币x1"),
		Array(4310091,1000,1,"FFN觉醒币x1"),
		Array(4310014,1000,200,"雪花币x200"),
		Array(2022468,1000,3,"必成自选箱子x3"),
		Array(4032226,1000,5,"黄金猪猪x5"),
		Array(4000463,1000,20,"国庆纪念币x20"),
		Array(2022613,100,1,"PB箱子x1"),
		Array(4031792,100,40,"蘑菇糖x40"),
		Array(5150038,100,1,"超级明星美发卡x1"),
		Array(4430000,100,5,"赞助币x5")
			
)


 function start() {
    status = 0;
    action(1, 0, 0);
}



function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2) {
            cm.sendOk(" 等你想去哪里了，记得找我哦！");
            cm.dispose();
            return;
        }
        status--;
    }
	
    if (status == 0) {
    } else if (status == 1) {
        var selStr = "要有万圣节糖果才能参加万圣节活动哟\r\n在活动地图内召唤鬼怪，然后用鬼怪掉落的蘑菇糖抽取奖励吧！\r\n鬼怪的掉落不受爆率影响~";
        
			selStr += "\r\n#L0#传送至活动地图(需要#v2022256#x20)#l";
			selStr += "\r\n#L1#召唤鬼怪(需要#v2022256#x30)#l\r\n#L3#召唤十次鬼怪(需要#v2022256#x300)#l";;
			selStr += "\r\n#L2#抽取奖励(需要#v4031792#x20)#l";
        
        cm.sendSimple(selStr);
    } else if (status == 2) {
        if(selection == 0){
			if (!cm.haveItem(2022256,20)) {
            cm.sendNext("tui！不给我糖？自己跑过去吧！");
            cm.safeDispose();
        } else {
            cm.gainItem(2022256,-20)
            cm.warp(222010402);
            cm.dispose();
        }
		};
		if(selection == 1){
			if(cm.判断地图()!=222010402){
				cm.sendOk("必须在活动地图内才可以召唤鬼怪")
				cm.dispose();
				return
			}
			if(cm.haveItem(2022256,30)==false){
				cm.sendOk("要用30个#v2022256#做诱饵，鬼怪才会出现")
				cm.dispose();
				return
			}
			var random = Math.floor(Math.random() * +3);
			cm.全服公告("[万圣节活动] : 玩家["+cm.getPlayer().getName()+"]召唤了鬼怪");
			if(random==0){
				cm.gainItem(2022256,-30)
				cm.当前地图召唤怪物(7130400,1,-11,153);
				cm.playerMessage(5, "看，它出来了，噫，黄黄的好恶心，快打败它！");
				cm.dispose();
				return
			}
			if(random==1){
				cm.gainItem(2022256,-30)
				cm.当前地图召唤怪物(7130401,1,-11,153);
				cm.playerMessage(5, "噗，地才色的鬼怪，是淋淋的粉丝吗？小熏不要被它吸入惹。");
				cm.dispose();
				return
			}
			if(random==2){
				cm.gainItem(2022256,-30)
				cm.当前地图召唤怪物(7130402,1,-11,153);
				cm.playerMessage(5, "原谅色，哈哈哈，青青草原鬼怪");
				cm.dispose();
				return
			}
		};
		if(selection == 2){
			if(cm.haveItem(4031792,20)==false){
				cm.sendOk("tui！不给我糖还想抽奖？")
				cm.dispose();
				return
			}
			var sum = 0;
			for (var i = 0; i <itemList.length; i++){
				sum += itemList[i][1]; 
			}
			var chance = Math.floor(Math.random() * +sum);
			for (var i = 0; i <itemList.length; i++){
				chance -= itemList[i][1];
				if(chance <= 0){	
					var finalchance = i;
					break;				
				}
			}
			cm.gainItem(itemList[finalchance][0],itemList[finalchance][2])
			cm.gainItem(4031792,-20)
			cm.全服黄色喇叭("[万圣节活动] : ["+cm.getPlayer().getName()+"]抽取万圣节活动奖励，获得了["+itemList[finalchance][3]+"]")
			return
			
		};
		if(selection == 3){
			if(cm.判断地图()!=222010402){
				cm.sendOk("必须在活动地图内才可以召唤鬼怪")
				cm.dispose();
				return
			}
			if(cm.haveItem(2022256,300)==false){
				cm.sendOk("要用30个#v2022256#做诱饵，鬼怪才会出现")
				cm.dispose();
				return
			}
			cm.全服公告("[万圣节活动] : 玩家["+cm.getPlayer().getName()+"]一次召唤了十只鬼怪");
			cm.gainItem(2022256,-300)
			cm.playerMessage(5, "这么多鬼怪，你顶得住嘛？");
			for(var i =1;i<10;i++){
				var random = Math.floor(Math.random() * +3);
				if(random==0){
					cm.当前地图召唤怪物(7130400,1,-11,153);	
				}
				if(random==1){
					cm.当前地图召唤怪物(7130401,1,-11,153);
				}
				if(random==2){
					cm.当前地图召唤怪物(7130402,1,-11,153);
				}
			}
			cm.dispose();
			return
		};
    } else if (status == 3) {
		cm.sendOk("异常");
        cm.dispose();
    }
}