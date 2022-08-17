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
        if (status == 0) 

{


            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			
           text += "您好，尊敬的#b#h ##k#b 我是等级成长礼包领取NPC#k\r\n#r萌新务必注意：请绿色游戏 切勿作弊 抓到一视同仁！\r\n"//3
           //text += " \t   #d赞助积分：#r"+cm.getzb()+"#k#n#d\t\t点卷余额：#b" + cm.getPlayer().getCSPoints(1) + "#k#n\t#d\r\n"
           text += " #b务必注意：领取礼包前请先整理背包空间，至少每个栏位保留8个空位，否则后果自负#e\r\n"
	
           text += "     #L1##r5级 成长礼包#l\r\n"//3
           text += "     #L2##r8级 成长礼包#l\r\n"//3
           text += "     #L3##r10级 成长礼包#l\r\n"//3
           text += "     #L4##r20级 成长礼包#l\r\n"//3
           text += "     #L5##r30级 成长礼包#l\r\n"//3
           text += "     #L6##r40级 成长礼包#l\r\n"//3
           text += "     #L7##r50级 成长礼包#l\r\n"//3
           text += "     #L8##r60级 成长礼包#l\r\n"//3
           text += "     #L9##r70级 成长礼包#l\r\n"//3
           text += "     #L10##r80级 成长礼包#l\r\n"//3
           text += "     #L11##r90级 成长礼包#l\r\n"//3
           text += "     #L12##r100级 成长礼包#l\r\n"//3
         

		    cm.sendSimple(text);
        } else if (selection == 1) {//10级成长礼包
	if (cm.getPlayerStat("LVL") >= 5  && cm.getPlayer().getOneTimeLoga("5") <1){
		cm.getPlayer().setOneTimeLoga("5");//给永久记录
		cm.sendOk("恭喜你获得系统奖励！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v2000000# x 50个");
	    cm.gainItem(2000000, 50);
		cm.worldMessage(6,"【萌新成长礼包】恭喜玩家：["+cm.getName()+"] 领取了5级萌新成长礼包！");
		cm.sendOk("领取成功！");
		cm.dispose();
		}else{
            cm.sendOk("你已经领取过了！\r\n您的等级不够5级或者请留出背包空间");
            cm.dispose();
		}
        } else if (selection == 2) {//30级成长礼包
	if(cm.getPlayerStat("LVL") >= 8 && cm.getPlayer().getOneTimeLoga("8") < 1){
			cm.getPlayer().setOneTimeLoga("8");//给永久记录
			cm.sendOk("恭喜你获得系统奖励！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v2000003# x 50个"); 
			cm.gainItem(2000003, 50);//5390003
			cm.worldMessage(6,"【萌新成长礼包】恭喜玩家：["+cm.getName()+"] 领取了8级萌新成长礼包！");
            cm.sendOk("领取成功！");
            cm.dispose();
		}else{
            cm.sendOk("你已经领取过了！\r\n您的等级不够8级或者请留出背包空间");
            cm.dispose();
}
        } else if (selection == 3) {//70级成长礼包
	if(cm.getPlayerStat("LVL")>= 10 && cm.getPlayer().getOneTimeLoga("10") < 1){
			cm.getPlayer().setOneTimeLoga("10");//给永久记录
			cm.gainMeso(1000000 );//给与金币
            cm.gainItem(2000005, 100);//超级药水
			cm.gainDY(5000)//抵用3000点
			cm.gainItem(4001126, 200);//500个枫叶
            //cm.gainItem(1003529, 1);//紫金枫叶帽子
            //cm.gainItem(1052457, 1);//紫金枫叶套服
            //cm.gainItem(1102394, 1);//紫金枫叶披风
            //cm.gainItem(1082430, 1);//紫金枫叶手套
            //cm.gainItem(1072660, 1);//紫金枫叶鞋子
            //cm.gainItem(2022618, 1);//紫金枫叶武器自选
			cm.worldMessage(6,"【萌新成长礼包】恭喜玩家：["+cm.getName()+"] 领取了10级萌新成长礼包！");
            cm.sendOk("领取成功！");
            cm.dispose();
		}else{
            cm.sendOk("你已经领取过了！\r\n您的等级不够10级或者请留出背包空间");
            cm.dispose();
}
        } else if (selection == 4) {//100级成长礼包
	if(cm.getPlayerStat("LVL") >= 20 && cm.getPlayer().getOneTimeLoga("20") < 1){
	cm.getPlayer().setOneTimeLoga("20");//给永久记录
            cm.gainItem(1003946, 1);//革命帽子
            cm.gainItem(1052647, 1);//革命套服
            cm.gainItem(1102612, 1);//革命披风
            cm.gainItem(1082540, 1);//革命手套
            cm.gainItem(1072853, 1);//革命鞋子
            //cm.gainItem(2022613, 1);//革命武器自选
			cm.gainItem(4001126, 200);//500个枫叶
			cm.gainMeso(3000000 );//给与金币
            cm.gainItem(2000005, 100);//超级药水
			cm.gainDY(10000)//抵用3000点
            cm.gainNX(5000);
			cm.worldMessage(6,"【萌新成长礼包】恭喜玩家：["+cm.getName()+"] 领取了20级萌新成长礼包！");
            cm.sendOk("领取成功！");
            cm.dispose();
		}else{
            cm.sendOk("你已经领取过了！\r\n您的等级不够20级或者请留出背包空间");
            cm.dispose();
}
        } else if (selection == 5) {//110级成长礼包
	if(cm.getPlayerStat("LVL") >= 30 && cm.getPlayer().getOneTimeLoga("30") < 1){
			cm.getPlayer().setOneTimeLoga("30");//给永久记录
			cm.gainItem(4001126, 200);//500个枫叶
			cm.gainMeso(5000000 );//给与金币
            cm.gainItem(2000005, 200);//超级药水
			cm.gainDY(10000)//抵用3000点
            cm.gainNX(5000);
  	//cm.gainItem(1113091,6,6,6,6,200,200,6,6,0,0,0,0,0,0);//飞奔截止
			cm.worldMessage(6,"【萌新成长礼包】恭喜玩家：["+cm.getName()+"] 领取了30级萌新成长礼包！");
            cm.sendOk("领取成功！");
            cm.dispose();
		}else{
            cm.sendOk("你已经领取过了！\r\n您的等级不够30级或者请留出背包空间");
            cm.dispose();
}
        } else if (selection == 6) {//120级成长礼包
	if(cm.getPlayerStat("LVL") >= 40 && cm.getPlayer().getOneTimeLoga("40") < 1){
			cm.getPlayer().setOneTimeLoga("40");//给永久记录
			cm.gainItem(4001126, 200);//500个枫叶
			cm.gainMeso(5000000 );//给与金币
            cm.gainItem(2000005, 200);//超级药水
			cm.gainDY(10000)//抵用3000点
            cm.gainNX(5000);
	//cm.gainItem(1012011,5,5,5,5,0,0,5,5,0,0,0,0,0,0);//圣诞鼻子
			cm.worldMessage(6,"【萌新成长礼包】恭喜玩家：["+cm.getName()+"] 领取了40级萌新成长礼包！");
            cm.sendOk("领取成功！");
            cm.dispose();
		}else{
            cm.sendOk("你已经领取过了！\r\n您的等级不够40级或者请留出背包空间");
            cm.dispose();
}
        } else if (selection == 7) {//130级成长礼包
	if(cm.getPlayerStat("LVL") >= 50 && cm.getPlayer().getOneTimeLog("50") < 1){
			cm.getPlayer().setOneTimeLog("50");//给永久记录
			cm.gainItem(4001126, 300);//500个枫叶
			cm.gainMeso(5000000 );//给与金币
            cm.gainItem(2000005, 200);//超级药水
			cm.gainDY(10000)//抵用3000点
            cm.gainNX(5000);

			cm.worldMessage(6,"【萌新成长礼包】恭喜玩家：["+cm.getName()+"] 领取了50级萌新成长礼包！");
            cm.sendOk("领取成功！");
            cm.dispose();
		}else{
            cm.sendOk("你已经领取过了！\r\n您的等级不够50级或者请留出背包空间");
            cm.dispose();
}
        } else if (selection == 8) {//140级成长礼包
	if(cm.getPlayerStat("LVL") >= 60 && cm.getPlayer().getOneTimeLoga("60") < 1){
			cm.getPlayer().setOneTimeLoga("60");//给永久记录
			cm.gainItem(4001126, 300);//500个枫叶
			cm.gainMeso(5000000 );//给与金币
            cm.gainItem(2000005, 200);//超级药水
			cm.gainDY(10000)//抵用3000点
            cm.gainNX(5000);

			cm.worldMessage(6,"【萌新成长礼包】恭喜玩家：["+cm.getName()+"] 领取了60级萌新成长礼包！");
            cm.sendOk("领取成功！");
            cm.dispose();
		}else{
            cm.sendOk("你已经领取过了！\r\n您的等级不够60级或者请留出背包空间");
            cm.dispose();
}
        } else if (selection == 9) {//150级成长礼包
	if(cm.getPlayerStat("LVL") >= 70 && cm.getPlayer().getOneTimeLoga("70") < 1){
			cm.getPlayer().setOneTimeLoga("70");//给永久记录
			cm.gainItem(4001126, 300);//500个枫叶
			cm.gainMeso(10000000 );//给与金币
            cm.gainItem(2000005, 200);//超级药水
			cm.gainDY(10000)//抵用3000点
            cm.gainNX(10000);
  		//cm.gainItem(1142650,15,15,15,15,200,200,10,10,0,0,0,0,0,0);
			cm.worldMessage(6,"【萌新成长礼包】恭喜玩家：["+cm.getName()+"] 领取了70级萌新成长礼包！");
            cm.sendOk("领取成功！");
            cm.dispose();
		}else{
            cm.sendOk("你已经领取过了！\r\n您的等级不够70级或者请留出背包空间");
            cm.dispose();
}
        } else if (selection == 10) {//160级成长礼包
	if(cm.getPlayerStat("LVL") >= 80 && cm.getPlayer().getOneTimeLoga("80") < 1){
			cm.getPlayer().setOneTimeLoga("80");//给永久记录
			cm.gainItem(4001126, 300);//500个枫叶
			cm.gainMeso(10000000 );//给与金币
            cm.gainItem(2000005, 200);//超级药水
			cm.gainDY(10000)//抵用3000点
            cm.gainNX(10000);
			cm.worldMessage(6,"【萌新成长礼包】恭喜玩家：["+cm.getName()+"] 领取了80级萌新成长礼包！");
            cm.sendOk("领取成功！");
            cm.dispose();
		}else{
            cm.sendOk("你已经领取过了！\r\n您的等级不够80级或者请留出背包空间");
            cm.dispose();
}


        } else if (selection == 11) {//170级成长礼包
	if(cm.getPlayerStat("LVL") >= 90 && cm.getPlayer().getOneTimeLoga("90") < 1){
			cm.getPlayer().setOneTimeLoga("90");//给永久记录
			cm.gainItem(4001126, 300);//500个枫叶
			cm.gainMeso(10000000 );//给与金币
            cm.gainItem(2000005, 200);//超级药水
			cm.gainDY(20000)//抵用3000点
            cm.gainNX(20000);
			cm.worldMessage(6,"【萌新成长礼包】恭喜玩家：["+cm.getName()+"] 领取了90级萌新成长礼包！");
            cm.sendOk("领取成功！");
            cm.dispose();
		}else{
            cm.sendOk("你已经领取过了！\r\n您的等级不够90级或者请留出背包空间");
            cm.dispose();
}
        } else if (selection == 12) {//180级成长礼包
	if(cm.getPlayerStat("LVL") >= 100 && cm.getPlayer().getOneTimeLog("100") < 1){
			cm.getPlayer().setOneTimeLog("100");//给永久记录
			cm.gainItem(4001126, 300);//500个枫叶
			cm.gainMeso(10000000 );//给与金币
            cm.gainItem(2000005, 200);//超级药水
			cm.gainDY(20000)//抵用3000点
            cm.gainNX(20000);
			cm.worldMessage(6,"【萌新成长礼包】恭喜玩家：["+cm.getName()+"] 领取了100级萌新成长礼包！");
            cm.sendOk("领取成功！");
            cm.dispose();
		}else{
            cm.sendOk("你已经领取过了！\r\n您的等级不够100级或者请留出背包空间");
            cm.dispose();
}
        } else if (selection == 13) {//190级成长礼包
	if(cm.getPlayerStat("LVL") >= 190 && cm.getPlayer().getOneTimeLog("成长礼包13") < 1){
			cm.getPlayer().setOneTimeLog("成长礼包13");//给永久记录
			cm.gainItem(4001126, 300);//500个枫叶
			cm.gainMeso(10000000 );//给与金币
            cm.gainItem(2000005, 200);//超级药水
			cm.gainDY(20000)//抵用3000点
            cm.gainNX(20000);
			cm.worldMessage(6,"【萌新成长礼包】恭喜玩家：["+cm.getName()+"] 达到190级，领取了190级萌新成长礼包！");
            cm.sendOk("领取成功！");
            cm.dispose();
		}else{
            cm.sendOk("你已经领取过了！\r\n您的等级不够190级或者请留出背包空间");
            cm.dispose();
}
        } else if (selection == 14) {//200级成长礼包
	if(cm.getPlayerStat("LVL") >= 200 && cm.getPlayer().getOneTimeLog("成长礼包14") < 1){
			cm.getPlayer().setOneTimeLog("成长礼包14");//给永久记录
			cm.gainItem(4001126, 500);//500个枫叶
			cm.gainMeso(10000000 );//给与金币
            cm.gainItem(2000005, 200);//超级药水
			cm.gainDY(30000)//抵用3000点
            cm.gainNX(30000);
  	//cm.gainItem(1142472,20,20,20,20,400,400,15,15,0,0,0,0,0,0);
             //cm.gainItem(1142111,10,10,10,10,50,50,10,10,10,10,10,10,10,10);
			cm.worldMessage(6,"【萌新成长礼包】恭喜玩家：["+cm.getName()+"] 达到200级，领取了200级萌新成长礼包！");
            cm.sendOk("领取成功！");
            cm.dispose();
		}else{
            cm.sendOk("你已经领取过了！\r\n您的等级不够200级或者请留出背包空间");
            cm.dispose();
}
        } else if (selection == 15) {//210级成长礼包
	if(cm.getPlayerStat("LVL") >= 210 && cm.getPlayer().getOneTimeLog("成长礼包15") < 1){
			cm.getPlayer().setOneTimeLog("成长礼包15");//给永久记录
			cm.gainItem(4001126, 500);//500个枫叶
			cm.gainMeso(20000000 );//给与金币
            cm.gainItem(2000005, 200);//超级药水
			cm.gainDY(30000)//抵用3000点
            cm.gainNX(30000);
			cm.worldMessage(6,"【萌新成长礼包】恭喜玩家：["+cm.getName()+"] 达到210级，领取了210级萌新成长礼包！");
            cm.sendOk("领取成功！");
            cm.dispose();
		}else{
            cm.sendOk("你已经领取过了！\r\n您的等级不够210级或者请留出背包空间");
            cm.dispose();
}
        } else if (selection == 16) {//220级成长礼包
	if(cm.getPlayerStat("LVL") >= 200 && cm.getPlayer().getOneTimeLog("成长礼包16") < 1){
			cm.getPlayer().setOneTimeLog("成长礼包16");//给永久记录
			cm.gainItem(4001126, 500);//500个枫叶
			cm.gainMeso(10000000 );//给与金币
            cm.gainItem(2000005, 200);//超级药水
			cm.gainDY(30000)//抵用3000点
            cm.gainNX(30000);
			cm.worldMessage(6,"【萌新成长礼包】恭喜玩家：["+cm.getName()+"] 达到220级，领取了220级萌新成长礼包！");
            cm.sendOk("领取成功！");
            cm.dispose();
		}else{
            cm.sendOk("你已经领取过了！\r\n您的等级不够220级或者请留出背包空间");
            cm.dispose();
}
        } else if (selection == 17) {//230级成长礼包
	if(cm.getPlayerStat("LVL") >= 230 && cm.getPlayer().getOneTimeLog("成长礼包17") < 1){
			cm.getPlayer().setOneTimeLog("成长礼包17");//给永久记录
			cm.gainItem(4001126, 1000);//500个枫叶
			cm.gainMeso(10000000 );//给与金币
            cm.gainItem(2000005, 200);//超级药水
			cm.gainDY(30000)//抵用3000点
            cm.gainNX(30000);
			cm.worldMessage(6,"【萌新成长礼包】恭喜玩家：["+cm.getName()+"] 达到230级，领取了230级萌新成长礼包！");
            cm.sendOk("领取成功！");
            cm.dispose();
		}else{
            cm.sendOk("你已经领取过了！\r\n您的等级不够230级或者请留出背包空间");
            cm.dispose();
}
        } else if (selection == 18) {//240级成长礼包
	if(cm.getPlayerStat("LVL") >= 240 && cm.getPlayer().getOneTimeLog("成长礼包18") < 1){
			cm.getPlayer().setOneTimeLog("成长礼包18");//给永久记录
			cm.gainItem(4001126, 1000);//500个枫叶
			cm.gainMeso(10000000 );//给与金币
            cm.gainItem(2000005, 200);//超级药水
			cm.gainDY(30000)//抵用3000点
            cm.gainNX(30000);
			cm.worldMessage(6,"【萌新成长礼包】恭喜玩家：["+cm.getName()+"] 达到240级，领取了240级萌新成长礼包！");
            cm.sendOk("领取成功！");
            cm.dispose();
		}else{
            cm.sendOk("你已经领取过了！\r\n您的等级不够240级或者请留出背包空间");
            cm.dispose();
}
        } else if (selection == 19) {//250级成长礼包
	if(cm.getPlayerStat("LVL") >= 250 && cm.getPlayer().getOneTimeLog("成长礼包19") < 1){
			cm.getPlayer().setOneTimeLog("成长礼包19");//给永久记录
			cm.gainItem(4001126, 1000);//500个枫叶
			cm.gainMeso(10000000 );//给与金币
            cm.gainItem(2000005, 200);//超级药水
			cm.gainDY(100000)//抵用3000点
            cm.gainNX(100000);
			cm.worldMessage(6,"【萌新成长礼包】恭喜玩家：["+cm.getName()+"] 达到250级，领取了250级萌新成长礼包！");
            cm.sendOk("领取成功！");
            cm.dispose();
		}else{
            cm.sendOk("你已经领取过了！\r\n您的等级不够250级或者请留出背包空间");
            cm.dispose();
}

//============================================
		}


		}
    }
//}


