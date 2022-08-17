/*
By Njs
*/
var status = 0;

var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK); //获得星期
var whichweek = 0;

function start(){
	updateDate();
	status = -1;
	action(1,0,0);
}
var cal_xiari = java.util.Calendar.getInstance();
var weekday_xiari = cal_xiari.get(java.util.Calendar.DAY_OF_WEEK);
function updateDate() {
    ca = java.util.Calendar.getInstance();
    year = ca.get(java.util.Calendar.YEAR); //获得年份
    month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
    day = ca.get(java.util.Calendar.DATE);//获取日
    hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
    minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
    second = ca.get(java.util.Calendar.SECOND); //获得秒
	weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
}

		function weekdayC(weekday){
		switch(weekday){
		case 1:
			return "星期日";
		break;
		case 2:
			return "星期一";
		break;
		case 3:
			return "星期二";
		break;
		case 4:
			return "星期三";
		break;
		case 5:
			return "星期四";
		break;
		case 6:
			return "星期五";
		break;
		case 7:
			return "星期六";
		break;
	} 
	
}
		
function action(mode ,type , selection){
	if(mode == 0 || mode == -1){
		cm.dispose();
		return;
	}
	if(mode == 1){
		status ++;
	}
	if(status == 0){
		var str = "";	
		
		
		str +="#e玩家你好,这里是一周的特别任务发布中心！之间都会发布有趣的特别任务\r\n今天是#r#e"+weekdayC(weekday_xiari)+"#k#n 如果你能收集到我需要的物品，那么我将可以给你一些有趣的东西哦！~\r\n";
		str +="#e#r#L0#开始今天的任务#l\r\n";
		str +="#e#b#L1#查看今天任务奖励#l\r\n";
		cm.sendSimple(str);
	}else if(status == 1){
		if(selection == 0){
			var str = "";
			if(weekday_xiari == 2){
				typed = 1;
				str +="#b玩家【#h #】你好，今天是 #r火热的周一 #b，如果你能收集够如下物品指定的数量，那么我讲给予一点小东西给你哦！！\r\n";
				str +="#e#b#i"+4000039+":# #z"+4000039+"# x50个\r\n";
				str +="#e#b#i"+4000068+":# #z"+4000068+"# x50个\r\n";				
				str +="#e#b#i"+4000040+":# #z"+4000040+"# x1个\r\n";		
				//str +="怪物出没地点：【小道1】【小道2】【森林的起点】\r\n";
				str +="当前拥有#i"+4000039+":#数量："+cm.itemQuantity(4000039)+" / 50个\r\n";
				str +="当前拥有#i"+4000068+":#数量："+cm.itemQuantity(4000068)+" / 50个\r\n";				
				str +="当前拥有#i"+4000040+":#数量："+cm.itemQuantity(4000040)+" / 1个\r\n";						
				str +="#e#b你是否要兑换呢？";
			}else if(weekday_xiari == 3){
				typed = 2;
				str +="#b玩家【#h #】你好，今天是 #d清新的周二 #b，如果你能收集够如下物品指定的数量，那么我讲给予一点小东西给你哦！！\r\n";
				str +="#e#b#i"+4000008+":# #z"+4000008+"# x50个\r\n";
				str +="#e#b#i"+4000015+":# #z"+4000015+"# x50个\r\n";				
				str +="#e#b#i"+4000176+":# #z"+4000176+"# x1个\r\n";			

				//str +="怪物出没地点：【小道1】【小道2】【森林的起点】\r\n";
				str +="当前拥有#i"+4000008+":#数量："+cm.itemQuantity(4000008)+" / 50个\r\n";
				str +="当前拥有#i"+4000015+":#数量："+cm.itemQuantity(4000015)+" / 50个\r\n";				
				str +="当前拥有#i"+4000176+":#数量："+cm.itemQuantity(4000176)+" / 1个\r\n";			
				str +="#e#b你是否要兑换呢？";
			}else if(weekday_xiari == 4){
				typed = 3;
				str +="#b玩家【#h #】你好，今天是 #g狩猎的周三 #b，如果你能收集够如下物品指定的数量，那么我讲给予一点小东西给你哦！！\r\n";
				str +="#e#b#i"+4000193+":# #z"+4000193+"# x50个\r\n";
				str +="#e#b#i"+4000190+":# #z"+4000190+"# x50个\r\n";				
				str +="#e#b#i"+4031227+":# #z"+4031227+"# x1个\r\n";		
				//str +="#e#r注意：物品你可以通过怪物：猴子和猪获取：#k\r\n";
				//str +="怪物出没地点：【小道1】【小道2】【森林的起点】\r\n";
				str +="当前拥有#i"+4000193+":#数量："+cm.itemQuantity(4000193)+" / 50个\r\n";
				str +="当前拥有#i"+4000190+":#数量："+cm.itemQuantity(4000190)+" / 50个\r\n";				
				str +="当前拥有#i"+4031227+":#数量："+cm.itemQuantity(4031227)+" / 1个\r\n";		
				str +="#e#b你是否要兑换呢？";
			}else if(weekday_xiari == 5){
				typed = 4;
				str +="#b玩家【#h #】你好，今天是 #r试练的周四 #b，如果你能收集够如下物品指定的数量，那么我讲给予一点小东西给你哦！！\r\n";
				str +="#e#b#i"+4000023+":# #z"+4000023+"# x50个\r\n";
				str +="#e#b#i"+4000027+":# #z"+4000027+"# x50个\r\n";				
		                str +="#e#b#i"+4001111+":# #z"+4001111+"# x1个\r\n";					
				//str +="#e#r注意：物品你可以通过怪物：猴子和猪获取各种BOSS：#k\r\n";
				//str +="【神木村：主巢穴山峰（需要星之力 65星以上）】\r\n";
				str +="当前拥有#i"+4000023+":#数量："+cm.itemQuantity(4000023)+" / 50个\r\n";
				str +="当前拥有#i"+4000027+":#数量："+cm.itemQuantity(4000027)+" / 50个\r\n";				
                                str +="当前拥有#i"+4001111+":#数量："+cm.itemQuantity(4001111)+" / 1个\r\n";				
				str +="#e#b你是否要兑换呢？";
			}else if(weekday_xiari == 6){
				typed = 5;
				str +="#b玩家【#h #】你好，今天是 #k灰色的周五 #b，如果你能收集够如下物品指定的数量，那么我讲给予一点小东西给你哦！！\r\n";
				str +="#e#b#i"+4000034+":# #z"+4000034+"# x50个\r\n";
				str +="#e#b#i"+4000032+":# #z"+4000032+"# x50个\r\n";				
				str +="#e#b#i"+4031164+":# #z"+4031164+"# x1个\r\n";						
				//str +="#e#r注意：物品你可以通过怪物：猴子和猪获取各种BOSS：#k\r\n";
				//str +="【神木村：主巢穴山峰（需要星之力 65星以上）】\r\n";
				str +="当前拥有#i"+4000034+":#数量："+cm.itemQuantity(4000034)+" / 50个\r\n";
				str +="当前拥有#i"+4000032+":#数量："+cm.itemQuantity(4000032)+" / 50个\r\n";				
				str +="当前拥有#i"+4031164+":#数量："+cm.itemQuantity(4031164)+" / 1个\r\n";			
				str +="#e#b你是否要兑换呢？";
			}else if(weekday_xiari == 7){
				typed = 6;
				str +="#b玩家【#h #】你好，今天是 #k酸爽的周六 #b，如果你能收集够如下物品指定的数量，那么我讲给予一点小东西给你哦！！\r\n";
				str +="#e#b#i"+4000076+":# #z"+4000076+"# x50个\r\n";				
				str +="#e#b#i"+4000180+":# #z"+4000180+"# x50个\r\n";
				str +="#e#b#i"+4000175+":# #z"+4000175+"# x1个\r\n";						
				//str +="#e#r注意：物品你可以通过怪物：猴子和猪获取各种BOSS：#k\r\n";
				//str +="【神木村：主巢穴山峰（需要星之力 65星以上）】\r\n";
				str +="当前拥有#i"+4000076+":#数量："+cm.itemQuantity(4000076)+" / 50个\r\n";				
				str +="当前拥有#i"+4000180+":#数量："+cm.itemQuantity(4000180)+" / 50个\r\n";
				str +="当前拥有#i"+4000175+":#数量："+cm.itemQuantity(4000175)+" / 1个\r\n";
			}else if(weekday_xiari == 1){
				typed = 7;
				str +="#b玩家【#h #】你好，今天是 #k合作的周日 #b，如果你能收集够如下物品指定的数量，那么我讲给予一点小东西给你哦！！\r\n";
				str +="#e#b#i"+4000402+":# #z"+4000402+"# x50个\r\n";
				str +="#e#b#i"+4000406+":# #z"+4000406+"# x50个\r\n";				
				str +="#e#b#i"+4000403+":# #z"+4000403+"# x1个\r\n";					
				//str +="#e#r注意：物品你可以通过怪物：猴子和猪获取各种BOSS：#k\r\n";
				//str +="【神木村：主巢穴山峰（需要星之力 65星以上）】\r\n";
				str +="当前拥有#i"+4000402+":#数量："+cm.itemQuantity(4000402)+" / 50个\r\n";
				str +="当前拥有#i"+4000406+":#数量："+cm.itemQuantity(4000406)+" / 50个\r\n";				
				str +="当前拥有#i"+4000403+":#数量："+cm.itemQuantity(4000403)+" / 1个\r\n";					
				str +="#e#b你是否要兑换呢？";
			}
				cm.sendYesNo(str);
		}else if(selection == 1){
			var str1 = "";
			switch (weekday){
				case 2://星期1
					str1 +="#e#r个人任务（周一）\r\n";
					str1 +="#e#b收集指定的物品后，你可以通过兑换来得到：\r\n";
					str1 +="#i"+4000463+":# #z"+4000463+"#x3个  #i"+4310028+":# #z"+4310028+"#x1个       #i"+4001226+":# #z"+4001226+"#x1个  #v2140000#冒险币x1500W               #v4001102#点券1000";
					break;
				case 3:
					str1 +="#e#r个人任务（周二）\r\n";
					str1 +="#e#b收集指定的物品后，你可以通过兑换来得到：\r\n";
					str1 +="#i"+4310174+":# #z"+4310174+"#x2个  #i"+4251200+":# #z"+4251200+"#x3个       #i"+4001227+":# #z"+4001227+"#x1个   #i"+4310028+":# #z"+4310028+"#x1个  #v2140000#冒险币x1500W               #v4001102#点券1000";
					break;
				case 4:
					str1 +="#e#r个人任务（周三）\r\n";
					str1 +="#e#b收集指定的物品后，你可以通过兑换来得到：\r\n";
					str1 +="#i"+4251201+":# #z"+4251201+"#x2个  #i"+4310028+":# #z"+4310028+"#x1个       #i"+4001228+":# #z"+4001228+"#x1个  #v2140000#冒险币x1500W               #v4001102#点券1000";
					break;
				case 5:
					str1 +="#e#r个人任务（周四）\r\n";
					str1 +="#e#b收集指定的物品后，你可以通过兑换来得到：\r\n";
					str1 +="#i"+2022465+":# #z"+2022465+"#x1个  #i"+4310028+":# #z"+4310028+"#x1个       #i"+4001229+":# #z"+4001229+"#x1个  #v2140000#冒险币x1500W               #v4001102#点券1000";
					break;
				case 6:
					str1 +="#e#r个人任务（周五）\r\n";
					str1 +="#e#b收集指定的物品后，你可以通过兑换来得到：\r\n";
					str1 +="#i"+4310028+":# #z"+4310028+"#x1个       #i"+4001230+":# #z"+4001230+"#x1个  #v2140000#冒险币x1500W               #v4001102#点券1000";;
					break;
				case 7:
					str1 +="#e#r个人任务（周六）\r\n";
					str1 +="#i"+4000463+":# #z"+4000463+"#x2个        #i"+4310196+":# #z"+4310196+"#x1个            #i"+4310174+":# #z"+4310174+"#x1个        #i"+4000464+":# #z"+4000464+"#x1个";
					break;
				case 1://星期天
					str1 +="#e#r个人任务（周日）\r\n";
					str1 +="#i"+2022465+":# #z"+2022465+"#x2个         #i"+2140002+":# #z"+2140002+"#x1个        #i"+4310196+":# #z"+4310196+"#x2个            #i"+4310174+":# #z"+4310174+"#x2个";
					break;
			}
			cm.sendOk(str1);
			cm.dispose();
			return;
		}
	}else if(status == 2){
		if(cm.getLevel()<120){
			cm.sendOk("#e#b注意：你的等级不够120，请加油升级后再来提交任务吧！！！");
			cm.dispose();
}
 else if(cm.getPlayer().getGamePoints()< 60) {
					cm.sendOk("#k在线#r60分钟#k以上才可以进行个人任务.");
				cm.dispose();
			return;
		}
		if(cm.getPlayer().判断会员 () > 0){  //cm.getPlayer().getBossLog("yizhou") >= 1
			cm.sendOk("#e#b注意：你今天已经完成过该任务了！！");
			cm.dispose();
			return;
		}

		if(typed == 1){


		if(cm.haveItem(4000039,50)&&cm.haveItem(4000068,50) &&cm.haveItem(4000040,1) ){
				cm.gainItem(4000039,-50);
				cm.gainItem(4000068,-50);	
				cm.gainItem(4000040,-1);						
				cm.gainItem(4000463,5);
				cm.gainItem(4310196,5);
				cm.gainItem(4001226,1);								
                                cm.gainMeso(+10000000);				
				//cm.worldSpouseMessage(0x01, " 公告 : 恭喜玩家[ " + cm.getPlayer().getName() + " ]完成【火热的周一】任务●ω●");
                cm.喇叭(2, "玩家：[" + cm.getPlayer().getName() + "]完成【火热的周一】任务●ω●！");				
				}else{
				cm.sendOk("#e#b注意：收集的物品数量还不够哦！！！");
				cm.dispose();
				return;
				}

		}else if(typed == 2){
		if(cm.haveItem(4000008,50)&&cm.haveItem(4000015,50) &&cm.haveItem(4000176,1) ){
				cm.gainItem(4000008,-50);
				cm.gainItem(4000015,-50);	
				cm.gainItem(4000176,-1);					
				cm.gainItem(4000463,5);
				cm.gainItem(4310028,1);
				cm.gainItem(4001229,1);							
                                cm.gainMeso(+15000000);		
				//cm.worldSpouseMessage(0x01, " 公告 : 恭喜玩家[ " + cm.getPlayer().getName() + " ]完成【活力的周二】任务●ω●");
                cm.喇叭(2, "玩家：[" + cm.getPlayer().getName() + "]完成【活力的周二】任务●ω●");						
			}else{
				cm.sendOk("#e#b注意：收集的物品数量还不够哦！！！");
				cm.dispose();
				return;
			}
		}else if(typed == 3){
		if(cm.haveItem(4000193,50)&&cm.haveItem(4000190,50) &&cm.haveItem(4031227,1) ){
				cm.gainItem(4000193,-50);	
				cm.gainItem(4000190,-50);	
				cm.gainItem(4031227,-1);
				cm.gainItem(4000463,5);
				cm.gainItem(4310196,5);
				cm.gainItem(4001227,1);						
                                cm.gainMeso(+20000000);	
			    cm.gainNX(+1000);					
				//cm.worldSpouseMessage(0x01, " 公告 : 恭喜玩家[ " + cm.getPlayer().getName() + " ]完成【狩猎的周三】任务●ω●");
                cm.喇叭(2, "玩家：[" + cm.getPlayer().getName() + "]完成【狩猎的周三】任务●ω●");				
			}else{
				cm.sendOk("#e#b注意：收集的物品数量还不够哦！！！");
				cm.dispose();
				return;
			}
		}else if(typed == 4){
		if(cm.haveItem(4000023,50)&&cm.haveItem(4000027,50) &&cm.haveItem(4001111,1) ){
				cm.gainItem(4000023,-50);
                                cm.gainItem(4000027,-50);	
				cm.gainItem(4001111,-1);					
				cm.gainItem(4000463,5);	
				cm.gainItem(4310028,1);
				cm.gainItem(4001230,1);							
                                cm.gainMeso(+25000000);			
				//cm.worldSpouseMessage(0x01, " 公告 : 恭喜玩家[ " + cm.getPlayer().getName() + " ]完成【试练的周四】任务●ω●");
                cm.喇叭(2, "玩家：[" + cm.getPlayer().getName() + "]完成【试练的周四】任务●ω●");				
			}else{
				cm.sendOk("#e#b注意：收集的物品数量还不够哦！！！");
				cm.dispose();
				return;
			}
		}else if(typed == 5){
		if(cm.haveItem(4000034,50)&&cm.haveItem(4000032,50) &&cm.haveItem(4031164,1) ){
				cm.gainItem(4000034,-50);
				cm.gainItem(4000032,-50);
				cm.gainItem(4031164,-1);					
				cm.gainItem(4000463,5);
				cm.gainItem(4310196,5);
				cm.gainItem(4001228,1);							
                                cm.gainMeso(+30000000);	
				//cm.worldSpouseMessage(0x01, " 公告 : 恭喜玩家[ " + cm.getPlayer().getName() + " ]完成【灰色的周五】任务●ω●");
                cm.喇叭(2, "玩家：[" + cm.getPlayer().getName() + "]完成【灰色的周五】任务●ω●");			
			}else{
				cm.sendOk("#e#b注意：收集的物品数量还不够哦！！！");
				cm.dispose();
				return;
			}
		}else if(typed == 6){
		if(cm.haveItem(4000076,50)&&cm.haveItem(4000180,50) &&cm.haveItem(4000175,1) ){
				cm.gainItem(4000076,-50);
				cm.gainItem(4000180,-50);	
				cm.gainItem(4000175,-1);
				cm.gainItem(4310088,1);			
				cm.gainItem(4251202,1);
				cm.gainItem(4000463,10);	
                               cm.gainMeso(+35000000);	
				//cm.worldSpouseMessage(0x01, " 公告 : 恭喜玩家[ " + cm.getPlayer().getName() + " ]完成【酸爽的周六】任务●ω●");
                cm.喇叭(2, "玩家：[" + cm.getPlayer().getName() + "]完成【酸爽的周六】任务●ω●");				
			}else{
				cm.sendOk("#e#b注意：收集的物品数量还不够哦！！！");
				cm.dispose();
				return;
				}
		}else if(typed == 7){
		if(cm.haveItem(4000402,50)&&cm.haveItem(4000406,50) &&cm.haveItem(4000403,1) ){
				cm.gainItem(4000402,-50);	
				cm.gainItem(4000406,-50);
				cm.gainItem(4000403,-1);
                                cm.gainMeso(+35000000);	
		                 cm.gainItem(4000463,10);
	                         cm.gainItem(4000186,3);
	                         cm.gainItem(4000464,1);			
				//cm.worldSpouseMessage(0x01, " 公告 : 恭喜玩家[ " + cm.getPlayer().getName() + " ]完成【合作的周日】任务●ω●");
                cm.喇叭(2, "玩家：[" + cm.getPlayer().getName() + "]完成【合作的周日】任务●ω●");				
			}else{
				cm.sendOk("#e#b注意：收集的物品数量还不够哦！！！");
				cm.dispose();
				return;
			}
		}
cm.getChar().给会员(1);
             //cm.setBossLog("yizhou");
		cm.dispose();
	}
}