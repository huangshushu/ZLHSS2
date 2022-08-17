/*
 石头剪刀布
 */

var day = 0
var mod = 0
var list1=[
	[0,4032226,20],
	[0,2022613,2],
	[0,4310060,40],
	[0,4310091,5],
	[0,4310097,5],
	[0,4000463,200],
	[100,1142891,1],
]
var list2=[
	[0,4000463,500],
	[0,4032226,200],
	[0,3010070,1],
	[288,1012318,1],
	[0,2022678,50],
	[0,4310058,10],
	[200,1112904,1],
]
var list3=[
	[0,2022613,5],
	[0,4310038,20],
	[0,4310060,100],
	[0,4310091,20],
	[0,4310097,20],
	[0,4310060,150],
	[0,2022466,1],
]
var item=[
	[4000059],
	[4000294],
	[4000172],
	[4000074],
	[4000265],
	[4000064],
	[4000167],
	[4000069],
	[4000197],
	[4000473],
	[4000090],
	[4000118],
	[4000350],
	[4000287],
	[4000018],
	[4000281],
	[4000429],
	[4000371],
	[4000471],
	[4000206],//
	[4000078],
	[4000260],
	[4000453],
	[2022026],
	[4000066],//
	[4000397],
	[4000010],
	[4000330],
	[4000178],
	[4000043],
	[4000405],
	[4000274]
	
]
 function start() {
    status = 0;
    action(1, 0, 0);
}



function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 4) {
            cm.sendOk(" 等你想去哪里了，记得找我哦！");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
    } else if (status == 1) {
		day = cm.判断日()
		buy = cm.getPlayer().getOneTimeLog("活动消费") * 10
		var selStr = "国庆活动10月1日开始，元旦结束";
		if(cm.getPlayer().getOneTimeLog("国庆邀请函")==0){
			selStr += "\r\n邀请点数达到#b20#k时即可领取#b国庆邀请函#k\r\n购买#b国庆盛装邀请函#k或#b国庆耀武邀请函#k可获赠#b国庆邀请函#k\r\n每个#b邀请函售价50赞助币#k，必须持有足够的#v4310003#才可购买，购买时消耗#v4430000#\r\n您已在活动道具消费【"+buy+"】";
			selStr += "\r\n#L101#领取国庆邀请函("+cm.getPlayer().getOneTimeLog("邀请函点数")+"/20)#l";
			selStr += "\r\n#L2#购买国庆盛装邀请函#l";
			selStr += "\r\n#L3#购买国庆耀武邀请函#l";
			selStr += "\r\n#L1#查看奖励列表#l";
			selStr += "\r\n#L102#获取邀请函点数#l";
		}
		if(cm.getPlayer().getOneTimeLog("国庆邀请函")>=1){
			selStr += "\r\n完成任务获得#b庆典点数#k，庆典点数达到指定值即可领取奖励\r\n每个#b邀请函售价50赞助币#k，必须持有足够的#v4310003#才可购买，购买时消耗#v4430000#\r\n您已在活动道具消费【"+buy+"】";
			selStr += "\r\n当前庆典点数["+cm.getPlayer().getOneTimeLog("庆典点数")+"]";
			selStr += "\r\n#L201#领取国庆邀请函奖励#l";
			if(cm.getPlayer().getOneTimeLog("国庆盛装邀请函")>=1){
				selStr += "\r\n#L202#领取国庆盛装邀请函奖励#l";
			}else{
				selStr += "\r\n#L2#购买国庆盛装邀请函#l";
			}
			if(cm.getPlayer().getOneTimeLog("国庆耀武邀请函")>=1){
				selStr += "\r\n#L203#领取国庆耀武邀请函奖励#l";
			}else{
				selStr += "\r\n#L3#购买国庆耀武邀请函#l";
			}
			selStr += "\r\n#L1#查看奖励列表#l";
			selStr += "\r\n#L204#获取庆典点数#l";
			
		}


        
        cm.sendSimple(selStr);
    } else if (status == 2) {
        
		if(selection == 1){
			var day1 = 0
			var string1 = "国庆邀请函奖励：\r\n"
			for(var i = 0;i<list1.length;i++){
				day1 = (i + 1)*10
				string1 += ""+day1+"庆典点数：#v"+list1[i][1]+"#"
				if(list1[i][0]==0){
					string1 += "x"+list1[i][2]+"\r\n"
				}else{
					string1 += "全属性+"+list1[i][0]+"\r\n"
				}
			}
			string1 += "\r\n\r\n国庆盛装邀请函奖励：\r\n"
			for(var i = 0;i<list2.length;i++){
				day1 = (i + 1)*10
				string1 += ""+day1+"庆典点数：#v"+list2[i][1]+"#"
				if(list2[i][0]==0){
					string1 += "x"+list2[i][2]+"\r\n"
				}else{
					string1 += "全属性+"+list2[i][0]+"\r\n"
				}
			}
			string1 += "\r\n\r\n国庆耀武邀请函奖励：\r\n"
			for(var i = 0;i<list3.length;i++){
				day1 = (i + 1)*10
				string1 += ""+day1+"庆典点数：#v"+list3[i][1]+"#"
				if(list3[i][0]==0){
					string1 += "x"+list3[i][2]+"\r\n"
				}else{
					string1 += "全属性+"+list3[i][0]+"\r\n"
				}
			}
			cm.sendOk(string1);
			cm.dispose();
			return;	
		};
		if(selection == 2){
			if(cm.haveItem(4310003,50+buy)==false){
				var buy2 = buy +50
				cm.sendOk("赞助额度不足哦\r\n需要有"+buy2+"#v4310003#才可以继续购买\r\n白嫖的赞助币是不能买的");
				cm.dispose();
				return;	
			}
			if(cm.haveItem(4430000,50)){
			cm.gainItem(4430000,-50)
            cm.getPlayer().setOneTimeLog("国庆盛装邀请函");
			cm.getPlayer().dropMessage(5,"您已获得[国庆盛装邀请函]");
			cm.全服黄色喇叭("[国庆活动] : ["+cm.getPlayer().getName()+"]购买了[国庆盛装邀请函]！")
			cm.getPlayer().setOneTimeLog("活动消费");
			cm.getPlayer().setOneTimeLog("活动消费");
			cm.getPlayer().setOneTimeLog("活动消费");
			cm.getPlayer().setOneTimeLog("活动消费");
			cm.getPlayer().setOneTimeLog("活动消费");
			if(cm.getPlayer().getOneTimeLog("国庆邀请函")==0){
				cm.getPlayer().setOneTimeLog("国庆邀请函");
				cm.getPlayer().dropMessage(5,"您已获得[国庆邀请函]");
			}
			cm.dispose();
            return;	
			}else{
				cm.sendOk("需要#v4430000#x50才可以购买喔");
			}
			cm.dispose();
            return;
		};
		if(selection == 3){
			if(cm.haveItem(4310003,50+buy)==false){
				var buy2 = buy +50
				cm.sendOk("赞助额度不足哦\r\n需要有"+buy2+"#v4310003#才可以继续购买\r\n白嫖的赞助币是不能买的");
				cm.dispose();
				return;	
			}
			if(cm.haveItem(4430000,50)){
			cm.gainItem(4430000,-50)
            cm.getPlayer().setOneTimeLog("国庆耀武邀请函");
			cm.getPlayer().dropMessage(5,"您已获得[国庆耀武邀请函]");
			cm.全服黄色喇叭("[国庆活动] : ["+cm.getPlayer().getName()+"]购买了[国庆耀武邀请函]！")
			cm.getPlayer().setOneTimeLog("活动消费");
			cm.getPlayer().setOneTimeLog("活动消费");
			cm.getPlayer().setOneTimeLog("活动消费");
			cm.getPlayer().setOneTimeLog("活动消费");
			cm.getPlayer().setOneTimeLog("活动消费");
			if(cm.getPlayer().getOneTimeLog("国庆邀请函")==0){
				cm.getPlayer().setOneTimeLog("国庆邀请函");
				cm.getPlayer().dropMessage(5,"您已获得[国庆邀请函]");
			}
			cm.dispose();
            return;	
			}else{
				cm.sendOk("需要#v4430000#x50才可以购买喔");
			}
			cm.dispose();
            return;
		};
		if(selection == 101){
			if(cm.getPlayer().getOneTimeLog("邀请函点数")<20){
				cm.sendOk("邀请函点数不足呢，先做任务吧");
				cm.dispose();
				return
			}
			cm.getPlayer().setOneTimeLog("国庆邀请函");
			cm.getPlayer().dropMessage(5,"您已获得[国庆邀请函]");
			cm.全服黄色喇叭("[国庆活动] : ["+cm.getPlayer().getName()+"]免费领取了[国庆邀请函]！")
			cm.dispose();
			return
		}
		if(selection == 102){
			mod = 1
			var string2 = "请选择交付的材料：\r\n"
			for(var i = 0;i<item.length;i++){
				if(cm.getPlayer().getOneTimeLog("邀请函点数"+i+"")==0){
					string2 += "#L"+i+"##v"+item[i]+"#x30#l  "
				}
			}
			cm.sendOk(string2);
		};
		if(selection == 201 || selection == 202 ||selection == 203){
			var needpoint = 0
			if(selection == 201 && cm.getPlayer().getOneTimeLog("国庆邀请函领取") <= 6){
				needpoint = (cm.getPlayer().getOneTimeLog("国庆邀请函领取")+1)*10
			}else if(selection == 202 && cm.getPlayer().getOneTimeLog("国庆盛装邀请函领取") <= 6){
				needpoint = (cm.getPlayer().getOneTimeLog("国庆盛装邀请函领取")+1)*10
			}else if(selection == 203 && cm.getPlayer().getOneTimeLog("国庆耀武邀请函领取") <= 6){
				needpoint = (cm.getPlayer().getOneTimeLog("国庆耀武邀请函领取")+1)*10
			}else{
				cm.sendOk("你已经全部领取完了呢")
				cm.dispose();
				return
			}
			if(cm.getPlayer().getOneTimeLog("庆典点数") < needpoint){
				cm.sendOk("点数不足("+cm.getPlayer().getOneTimeLog("庆典点数")+"/"+needpoint+")")
				cm.dispose();
				return
			}
			var choose1 = 0
			if(selection == 201){
				choose1 = cm.getPlayer().getOneTimeLog("国庆邀请函领取")
				if(list1[choose1][0]==0){
					cm.gainItem(list1[choose1][1],list1[choose1][2])
				}else{
					cm.给属性装备(list1[choose1][1], 0, 0, list1[choose1][0], list1[choose1][0], list1[choose1][0], list1[choose1][0], list1[choose1][0], list1[choose1][0], list1[choose1][0], list1[choose1][0],0, 0, 0, 0, 0, 0, 0);
				}
				choose1++
				cm.全服黄色喇叭("[国庆活动] : 恭喜玩家 "+cm.getPlayer().getName()+" 领取[国庆邀请函]第["+choose1+"]次奖励成功")
				cm.getPlayer().setOneTimeLog("国庆邀请函领取")
				cm.sendOk("领取成功")
				cm.dispose();
				return
			}else if(selection == 202){
				choose1 = cm.getPlayer().getOneTimeLog("国庆盛装邀请函领取")
				if(list2[choose1][0]==0){
					cm.gainItem(list2[choose1][1],list2[choose1][2])
				}else{
					cm.给属性装备(list2[choose1][1], 0, 0, list2[choose1][0], list2[choose1][0], list2[choose1][0], list2[choose1][0], list2[choose1][0], list2[choose1][0], list2[choose1][0], list2[choose1][0],0, 0, 0, 0, 0, 0, 0);
				}
				choose1++
				cm.全服黄色喇叭("[国庆活动] : 恭喜玩家 "+cm.getPlayer().getName()+" 领取[国庆盛装邀请函]第["+choose1+"]次奖励成功")
				cm.getPlayer().setOneTimeLog("国庆盛装邀请函领取")
				cm.sendOk("领取成功")
				cm.dispose();
				return
			}else if(selection == 203){
				choose1 = cm.getPlayer().getOneTimeLog("国庆耀武邀请函领取")
				if(list3[choose1][0]==0){
					cm.gainItem(list3[choose1][1],list3[choose1][2])
				}else{
					cm.给属性装备(list3[choose1][1], 0, 0, list3[choose1][0], list3[choose1][0], list3[choose1][0], list3[choose1][0], list3[choose1][0], list3[choose1][0], list3[choose1][0], list3[choose1][0],0, 0, 0, 0, 0, 0, 0);
				}
				choose1++
				cm.全服黄色喇叭("[国庆活动] : 恭喜玩家 "+cm.getPlayer().getName()+" 领取[国庆耀武邀请函]第["+choose1+"]次奖励成功")
				cm.getPlayer().setOneTimeLog("国庆耀武邀请函领取")
				cm.sendOk("领取成功")
				cm.dispose();
				return
			}
		};
		if(selection == 204){
			mod = 2
			var string3 = "任务列表：\r\n"
			string3 += "#L101#完成每日boss[3点]\r\n"
			string3 += "#L102#完成每日组队任务[3点]\r\n"
			string3 += "#L103#击杀PB[2点]\r\n"
			string3 += "#L104#提交[#z"+item[day]+"#]x100[2点]\r\n"
			cm.sendOk(string3);
		};
    }else if (status == 3) {
		if(selection >= 0 && selection<=item.length && mod==1){
			if(cm.haveItem(item[selection],30)){
				cm.gainItem(item[selection],-30)
				cm.getPlayer().setOneTimeLog("邀请函点数"+selection+"")
				cm.getPlayer().setOneTimeLog("邀请函点数")
				cm.sendOk("交付成功，当前点数["+cm.getPlayer().getOneTimeLog("邀请函点数")+"]")
				cm.dispose();
				return
			}else{
				cm.sendOk("材料不足")
				cm.dispose();
				return
			}
			
		}
		if(selection == 101){
			if(cm.getBossLog("每日boss兑换")>=1){
				if(cm.getBossLog("庆典每日boss")!=0){
					cm.sendOk("每天只能完成一次");
					cm.dispose();
					return
				}
				cm.getPlayer().setOneTimeLog("庆典点数")
				cm.getPlayer().setOneTimeLog("庆典点数")
				cm.getPlayer().setOneTimeLog("庆典点数")
				cm.sendOk("交付成功，当前点数["+cm.getPlayer().getOneTimeLog("庆典点数")+"]")
				cm.setBossLog("庆典每日boss")
				cm.dispose();
				return
			}else{
				cm.sendOk("你还未完成每日boss");
				cm.dispose();
				return
			}	
		}
		if(selection == 102){
			if(cm.getBossLog("每日组队兑换")>=1){
				if(cm.getBossLog("庆典每日组队")!=0){
					cm.sendOk("每天只能完成一次");
					cm.dispose();
					return
				}
				cm.getPlayer().setOneTimeLog("庆典点数")
				cm.getPlayer().setOneTimeLog("庆典点数")
				cm.getPlayer().setOneTimeLog("庆典点数")
				cm.sendOk("交付成功，当前点数["+cm.getPlayer().getOneTimeLog("庆典点数")+"]")
				cm.setBossLog("庆典每日组队")
				cm.dispose();
				return
			}else{
				cm.sendOk("你还未完成每日组队");
				cm.dispose();
				return
			}	
		}
		if(selection == 103){
			if(cm.getBossLog("开PB箱")>=2){
				if(cm.getBossLog("庆典PB")!=0){
					cm.sendOk("每天只能完成一次");
					cm.dispose();
					return
				}
				cm.getPlayer().setOneTimeLog("庆典点数")
				cm.getPlayer().setOneTimeLog("庆典点数")
				cm.sendOk("交付成功，当前点数["+cm.getPlayer().getOneTimeLog("庆典点数")+"]")
				cm.setBossLog("庆典PB")
				cm.dispose();
				return
			}else{
				cm.sendOk("你今天还未打PB");
				cm.dispose();
				return
			}	
		}
		if(selection == 104){
			if(cm.getBossLog("庆典材料")!=0){
				cm.sendOk("每天只能完成一次");
				cm.dispose();
				return
			}
			if(cm.haveItem(item[day],100)){
				cm.gainItem(item[day],-100)
				cm.getPlayer().setOneTimeLog("庆典点数")
				cm.getPlayer().setOneTimeLog("庆典点数")
				cm.sendOk("交付成功，当前点数["+cm.getPlayer().getOneTimeLog("庆典点数")+"]")
				cm.setBossLog("庆典材料")
				cm.dispose();
				return
			}else{
				cm.sendOk("你材料不够呢");
				cm.dispose();
				return
			}
		}
		cm.sendOk("异常");
        cm.dispose();
    }
}