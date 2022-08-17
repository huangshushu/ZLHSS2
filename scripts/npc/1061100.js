/*
 ZEVMS冒险岛(079)游戏服务端
 */
var JD = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";


function start() {
    status = -1;
    action(1, 0, 0)
}

function action(mode, type, selection) {
    if (status <= 0 && mode <= 0) {
        cm.dispose();
        return
    }
    if (mode == 1) {
        status++
    } else {
        status--
    }	 
		var 一般 = cm.获取指定地图玩家数量(105040401);
		var 豪华 = cm.获取指定地图玩家数量(105040402);
		var 玩具去天空开关 = cm.GetPiot("玩具去天空开关","1");
		var MC = cm.getServerName();
		var r = Math.ceil(Math.random() * 3);  //随机取一个值
				
		if (cm.getPlayer().getGMLevel() == 99) {
            cm.showInstruction("\r\n#e#r"+MC+"\r\n\r\n你无权使用#n#k\r\n ", 200, 3);  
            cm.dispose();
          return;
	 
	    
	 
	    
    } else if (status <= 0) {
        var selStr = "\t\t"+心+" "+心+"   #r"+MC+"林中桑拿房#k   "+心+" "+心+"#e#n\r\n\r\n";
			selStr += "\t\t\t一般桑拿房价目：#r5000#k  金币\r\n";
			selStr += "\t\t\t豪华桑拿房价目：#r10000#k 金币\r\n\r\n";
			
			
			
			selStr += "\t\t\t\t一般桑拿房人数：#r"+一般+"#k 人\r\n";
			selStr += "\t\t\t\t豪华桑拿房人数：#r"+豪华+"#k 人\r\n";
			
			if(cm.getBossRank("对话旅馆老板",2)>0 &&　cm.getBossRank("获取火龙果",2)<=0){
			selStr += " \t\t\t\t#L100##r"+JD+"屈原与雪花#l\r\n";
			}
			selStr += " \t\t\t\t#L1##b"+JD+"去一般桑拿房#l\r\n";
	
			selStr += " \t\t\t\t#L2##r"+JD+"去豪华桑拿房#l\r\n";
	
			
			
			
			/*if ( cm.getPlayer().getGMLevel() == 6 ) {
			if (cm.GetPiot("玩具去天空开关","1") <= 0  ) {
			selStr += "\t\t\t\t#L100##b售票"+打开+"#l\r\n";} 
			if (cm.GetPiot("玩具去天空开关","1") > 0  ) {
			selStr += "\t\t\t\t#L101##b售票"+关闭+"#l\r\n";} }*/
 
 
 
 
 
        cm.sendSimple(selStr)
    } else if (status == 1) {
        switch (selection) {
            case 1:
			if (cm.getMeso() >= 5000 ) {
                cm.gainMeso(-5000);
				cm.warp(105040401,3)
                cm.dispose();
            } else {
                cm.sendOk("你没那么多钱？");
                cm.dispose();
            }
                break;
			case 2:
			if (cm.getMeso() >= 10000 ) {
                cm.gainMeso(-10000);
				cm.warp(105040402,4)
                cm.dispose();
            } else {
                cm.sendOk("你没那么多钱？");
                cm.dispose();
            }
			break;
			case 100:
			
			 cm.gainItem(4031428,r,1);
			 cm.setBossRankCount("获取火龙果",1);
			 cm.sendOk("获得好吃的雪球，请按原路返回吧");
			 cm.dispose();
			 cm.playerMessage(5,"[获得好吃的雪球，请按原路返回吧]");
			// cm.openNpc(1061100,1);
			
            break;
			
			
			
			
			case 100:
			cm.GainPiot("玩具去天空开关","1",-玩具去天空开关);
			cm.GainPiot("玩具去天空开关","1",1);
            cm.dispose();
			cm.openNpc(2040000,0);
            break;
			
			case 101:
			cm.GainPiot("玩具去天空开关","1",-玩具去天空开关);
            cm.dispose();
            cm.openNpc(2040000,0);
            break
        }
    }
}

/*var status = 0;
var regcost = 499;
var vipcost = 999;
var tempvar;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
	status++; if (mode == 0 && status == 1) {
	cm.dispose();
	return;
    } if (mode == 0 && status == 2) {
	cm.sendNext("我们也提供其他服务，决定好之前请仔细想想。");
	cm.dispose();
	return;
    }
    if (status == 0) {
	cm.sendNext("欢迎来到奇幻村旅馆。我们致力为您提供最好的服务。如果您累了，来这里休息一下如何？");
    }
    if (status == 1) {
	cm.sendSimple("我们提供两种房间，请选择你想要的\r\n#b#L0#一般桑拿室 (每次 " + regcost + " 枫币)#l\r\n#L1#高级桑拿室 (每次" + vipcost + " 枫币)#l");
    }
    if (status == 2) {
	tempvar = selection;
	if (tempvar == 0) {
	    cm.sendYesNo("你选择了一般桑拿室，你的HP和MP会回复得很快，你也可以在里面购买商品，你确定要进入吗？");
	}
	if (tempvar == 1) {
		cm.sendYesNo("你选择了高级桑拿室，你的HP和MP会比一般桑拿室回复得更快，也可以在里面找到特殊的物品，你确定要进入吗？");
	}
    }
    if (status == 3) {
	if (tempvar == 0) {
	    if (cm.getMeso() >= regcost) {
		cm.warp(105040401);
		cm.gainMeso(-regcost);
	    } else {
        cm.sendNext("很抱歉，看起来您似乎没有足够的枫币。你至少要有 " + regcost + " 枫币才能待在我们的一般桑拿室。");
	    }
	} if (tempvar == 1) {
	    if (cm.getMeso() >= vipcost) {
		cm.warp(105040402);
		cm.gainMeso(-vipcost);
	    } else {
        cm.sendNext("很抱歉，看起来您似乎没有足够的枫币。你至少要有 " + vipcost + " 枫币才能待在我们的高级桑拿室。");
	    }
	}
	cm.dispose();
    }
}
*/