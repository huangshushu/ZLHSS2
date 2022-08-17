var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";
var 大心 = "#fEffect/CharacterEff/1051295/0/0#";
var 皇冠白 = "#fEffect/CharacterEff/1003252/0/0#";
var 小雪花 = "#fEffect/CharacterEff/1003393/0/0#";
var 音符 = "#fEffect/CharacterEff/1032063/0/0#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 皇冠白 ="#fUI/GuildMark/Mark/Etc/00009004/16#";;
var 香水 ="#fUI/GuildMark/Mark/Pattern/00004008/15#";
var 中条白 ="#fUI/Basic/HScr7/disabled/base#";
var 中条蓝 ="#fUI/ChatBalloon/tutorial/w#";

var 中条猫 ="#fUI/ChatBalloon/169/n#";
var 猫右 =  "#fUI/ChatBalloon/169/ne#";
var 猫左 =  "#fUI/ChatBalloon/169/nw#";
var 右 =    "#fUI/ChatBalloon/169/e#";
var 左 =    "#fUI/ChatBalloon/169/w#";
  
var 下条猫 ="#fUI/ChatBalloon/169/s#";
var 猫下右 ="#fUI/ChatBalloon/169/se#";
var 猫下左 ="#fUI/ChatBalloon/169/sw#";
var 邪恶小兔2 = "#fEffect/CharacterEff/1112960/3/1#";  //邪恶小兔 【大】

var status = 0;
var suiji;
//var suiji2;
var wpid = Array(
  2043003,//单手剑攻击卷轴(必成)
  2044003,//双手剑攻击卷轴(必成)
  2044303,//枪攻击攻击卷轴(必成)
  2044403,//矛攻击攻击卷轴(必成)
  2044503,//弓攻击攻击卷轴(必成)
  2044603,//弩攻击必成卷
  2043703,//短杖攻击必成卷
  2043803,//长杖攻击诅轴(必成)
  2043303,//短剑攻击必成卷
  2044703,//拳套攻击诅轴(必成)
  2044908,//短枪攻击卷轴(必成)
  2044815,//指节攻击必成卷 
  2040807,//手套攻击卷轴(必成)
  2040506,//全身铠甲敏捷卷轴(必成)
  2040710,//鞋子跳跃卷轴(必成)
  4011007,//星石
  4021009,//月石
  4011008,//锂(矿石)
  4000463,//国庆纪念币
  2022428,//材料箱子
  2614000);//破攻石头一万
//cm.gainItem(wpid[suiji],1);
//cm.gainItem(wpid[suiji2],1);

function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//text += "   "+猫左+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+猫右+"\r\n";
                        text += "           #K"+皇冠白+" #e冒险岛每日收集任务#n "+皇冠白+"#k\r\n"
						//text += "          #r每日收集任务开启条件:完成主线任务!!#k\r\n"
			//text += "   "+猫下左+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+猫下右+"\r\n";
			if(cm.getPlayer().getBossLog("每日跑商1") == 0  ){
					text += "             #L1#"+爱心+"#e#w每日跑商01(#r可开始#k)#n#l\r\n\r\n"//3
				} else if(cm.getPlayer().getBossLog("每日跑商1") > 0){
					text += "             "+爱心+"#r#e每日跑商任务01"+爱心+"#n#l"+完成+"#k\r\n"//3
			}
			
			if(cm.getPlayer().getBossLog("每日跑商") == 1){
					text += "             #L2#"+爱心+"#e每日跑商任务02(#r可开始#k)#n#l\r\n\r\n"//3
				} else if(cm.getPlayer().getBossLog("每日跑商") > 1){
					text += "             "+爱心+"#r#e每日跑商任务02"+爱心+"#n#l"+完成+"#k\r\n"//3
				} else {
					text += "	          "+皇冠白+"#e 每日跑商任务02#l\r\n"//3
			}
			
			if(cm.getPlayer().getBossLog("每日跑商") == 2){
					text += "             #L3#"+爱心+"#e每日跑商任务03(#r可开始#k)#n#l\r\n\r\n"//3
				} else if(cm.getPlayer().getBossLog("每日跑商") > 2){
					text += "             "+爱心+"#r#e每日跑商任务03"+爱心+"#n#l"+完成+"#k\r\n"//3
				} else {
					text += "	          "+皇冠白+"#e 每日跑商任务03#l\r\n"//3
			}
			if(cm.getPlayer().getBossLog("每日跑商") == 3){
					text += "             #L4#"+爱心+"#e每日跑商任务04(#r可开始#k)#n#l\r\n\r\n"//3
				} else if(cm.getPlayer().getBossLog("每日跑商") > 3){
					text += "             "+爱心+"#r#e每日跑商任务04"+爱心+"#n#l"+完成+"#k\r\n"//3
				} else {
					text += "	          "+皇冠白+"#e 每日跑商任务04#l\r\n"//3
			}
			if(cm.getPlayer().getBossLog("每日跑商") == 4){
					text += "             #L5#"+爱心+"#e每日跑商任务05(#r可开始#k)#n#l\r\n\r\n"//3
				} else if(cm.getPlayer().getBossLog("每日跑商") > 4){
					text += "             "+爱心+"#r#e每日跑商任务05"+爱心+"#n#l"+完成+"#k\r\n"//3
				} else {
					text += "	          "+皇冠白+"#e 每日跑商任务05#l\r\n"//3
			}
			if(cm.getPlayer().getBossLog("每日跑商") == 5){
					text += "             #L6#"+爱心+"#e每日跑商任务06(#r可开始#k)#n#l\r\n\r\n"//3
				} else if(cm.getPlayer().getBossLog("每日跑商") > 5){
					text += "             "+爱心+"#r#e每日跑商任务06"+爱心+"#n#l"+完成+"#k\r\n"//3
				} else {
					text += "	          "+皇冠白+"#e 每日跑商任务06#l\r\n"//3
			}
			if(cm.getPlayer().getBossLog("每日跑商") == 6){
					text += "             #L7#"+爱心+"#e每日跑商任务07(#r可开始#k)#n#l\r\n\r\n"//3
				} else if(cm.getPlayer().getBossLog("每日跑商") > 6){
					text += "             "+爱心+"#r#e每日跑商任务07"+爱心+"#n#l"+完成+"#k\r\n"//3
				} else {
					text += "	          "+皇冠白+"#e 每日跑商任务07#l\r\n"//3
			}
			if(cm.getPlayer().getBossLog("每日跑商") == 7){
					text += "             #L8#"+爱心+"#e每日跑商任务08(#r可开始#k)#n#l\r\n\r\n"//3
				} else if(cm.getPlayer().getBossLog("每日跑商") > 7){
					text += "             "+爱心+"#r#e每日跑商任务08"+爱心+"#n#l"+完成+"#k\r\n"//3
				} else {
					text += "	          "+皇冠白+"#e 每日跑商任务08#l\r\n"//3
			}
							
            cm.sendSimple(text);
		} else if (cm.getInventory(1).isFull(2)){//判断第一个也就是装备栏的装备栏是否有一个空格
			cm.sendOk("#b装备栏空间不足3格.");	
			cm.dispose();		
		} else if (cm.getInventory(2).isFull(2)){//判断第二个也就是消耗栏的装备栏是否有一个空格	
			cm.sendOk("#b消耗栏空间不足3格.");	
			cm.dispose();	
		} else if (cm.getInventory(3).isFull(2)){//判断第三个也就是设置栏的装备栏是否有一个空格	
			cm.sendOk("#b设置栏空间不足3格.");	
			cm.dispose();
		} else if (cm.getInventory(4).isFull(2)){//判断第四个也就是其它栏的装备栏是否有一个空格
			cm.sendOk("#b其它栏空间不足3格.");	
			cm.dispose();
		} else if (selection == 1) {
		if (cm.haveItem(4000002,50) && cm.haveItem(4000017,10)){
			cm.gainItem(4000002, -50);//获得物品
			cm.gainItem(4000017, -10);//获得物品
			cm.gainExp(10000);//个人给经验
			//cm.gainExp(10000);//个人给经验
			//cm.gainExp(10000);//个人给经验
			cm.gainMeso(+100000); //加减金币
			cm.gainNX(100);//点卷
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了每日收集任务1，获得：100点卷，10W游戏币！");
			cm.getPlayer().setBossLog("每日跑商1");
			cm.getPlayer().setBossLog("每日跑商");
			
			cm.sendOk("完成了每日收集任务1，获得150点卷，10W游戏币！！！");
			cm.dispose();
		}else{

			cm.sendOk(感叹号+"#r欢迎进入每日收集任务1。收集50个#v4000002#10个#v4000017#。\r\n#r奖励150点卷，10W游戏币！");
			cm.dispose();
	    }
        } else if (selection == 2) {
		if (cm.haveItem(4000013,50) ){
			cm.gainItem(4000013, -50);//获得物品
			//cm.gainItem(4000008, -100);//获得物品
			cm.gainMeso(+100000); //加减金币
			cm.gainNX(150);//点卷
			cm.gainExp(10000);//个人给经验
			//cm.gainExp(10000);//个人给经验
			//cm.gainExp(10000);//个人给经验
			//cm.gainExp(10000);//个人给经验
			//cm.gainExp(10000);//个人给经验
			//cm.gainItem(1102828,10,10,10,10,10,10,10,10,1,1,1,10,10,10);//新人戒指
			cm.getPlayer().setBossLog("每日跑商");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了每日收集任务2，获得：150点卷，10W游戏币！！！");
			cm.sendOk("完成了每日收集任务2，获得：50W游戏币！！！！");
			cm.dispose();
		}else{

			cm.sendOk(感叹号+"#r欢迎进入每日收集任务1。收集#v4000013#50个。\r\n#r奖励：150点卷，10W游戏币！");
			cm.dispose();
	    }
        } else if (selection == 3) {
		if (cm.haveItem(4000190,30) && cm.haveItem(4000191,30) ){
			cm.gainItem(4000190,-30);
			cm.gainItem(4000191,-30);
			//cm.gainItem(4000215,-100);
			cm.gainMeso(+100000); //加减金币
			cm.gainNX(200);//点卷
			cm.gainDY(200)
			cm.getPlayer().setBossLog("每日跑商");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了每日收集任务3，获得：200点卷，10W游戏币！！！");
			cm.sendOk("完成了每日收集任务3，获得：50W游戏币！！！！");
			cm.dispose();	
		}else{
		 cm.sendOk(感叹号+"#r欢迎进入每日收集任务3。收集#v4000190#  #v4000191#各30个。\r\n#r奖励：200点卷，10W游戏币！");
		 cm.dispose();
		
	    }
        } else if (selection == 4) {
			
		if (cm.haveItem(4000043,50) ){
			cm.gainItem(4000043, -50);//获得物品
			cm.gainMeso(+100000); //加减金币
			cm.gainNX(250);//点卷
			cm.getPlayer().setBossLog("每日跑商");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了每日收集任务4，获得：250点卷，10W游戏币！！！");
			cm.sendOk("完成了每日收集任务4，获得：50W游戏币！！！！");
			cm.dispose();	
		}else{
		 cm.sendOk(感叹号+"#r欢迎进入每日收集任务4。收集#v4000043#50个。\r\n#r奖励：250点卷，10W游戏币！");
		 cm.dispose();
	    }
		
        } else if (selection == 5) {			
		if (cm.haveItem(4000165,20) && cm.haveItem(4000164,20)){
			cm.gainItem(4000165, -20);//扣
			cm.gainItem(4000164, -20);//扣
			cm.gainMeso(+100000);
			cm.gainNX(300);
			cm.getPlayer().setBossLog("每日跑商");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了每日收集任务5，获得：300点卷，10w游戏币！！");
			cm.sendOk("完成了每日收集任务5，获得：100点卷！！！！");
			cm.dispose();	
		}else{
		 cm.sendOk(感叹号+"#r欢迎进入每日收集任务5。收集#v4000165#  #v4000164#各20个。\r\n#r奖励：300点卷，10w游戏币！");
		 cm.dispose();
	    }
		
        } else if (selection == 6) {
			if (cm.haveItem(4000173,50)){
			cm.gainItem(4000173, -50);//获得物品
			cm.gainMeso(+100000);
			cm.gainNX(350);
			cm.getPlayer().setBossLog("每日跑商");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了每日收集任务6，获得：350点卷，10w游戏币！！");
			cm.sendOk("完成了每日收集任务6，获得：50w游戏币！！！！");
			cm.dispose();	
		}else{
		 cm.sendOk(感叹号+"#r欢迎进入每日收集任务6。收集#v4000173#50个。\r\n#r奖励：350点卷，10w游戏币！");
		 cm.dispose();
	    }
        } else if (selection == 7) {
			if (cm.haveItem(2020015,30)&& cm.haveItem(2020014,30)){
			cm.gainItem(2020015, -30);//获得物品
			cm.gainItem(2020014, -30);//获得物品
			cm.getPlayer().setBossLog("每日跑商");
			cm.gainMeso(+100000);
			cm.gainNX(400);
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了每日收集任务7，获得：400点卷，10w游戏币！");
			cm.sendOk("完成了每日收集任务7，获得：50w游戏币！！");
			cm.dispose();	
		}else{
		 cm.sendOk(感叹号+"#r欢迎进入每日收集任务7。收集#v2020015#  #v2020014#各30个。\r\n#r奖励：400点卷，10w游戏币！！");
		 cm.dispose();

	    }
        } else if (selection == 8) {
			if (cm.haveItem(4000040,1)&& cm.haveItem(4000176,1)){
			cm.gainItem(4000040, -1);//获得物品
			cm.gainItem(4000176, -1);//获得物品
			cm.getPlayer().setBossLog("每日跑商");
			cm.gainItem(4032398, 1); //加减金币
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了每日收集任务8，获得：出席图章！");
			cm.sendOk("完成了每日收集任务8，获得： 出席图章！");
			cm.dispose();	
		}else{
		 cm.sendOk(感叹号+"#r欢迎进入每日收集任务8。收集#v4000040#  #v4000176#各1个。\r\n#r奖励：出席图章！！");
		 cm.dispose();
	    }
		} 
    }
}