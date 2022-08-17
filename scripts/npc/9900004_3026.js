/* global cm */
//var 爱心 = "#fEffect/CharacterEff/1003276/0/0#";
var 音符 = "#fEffect/CharacterEff/1003276/0/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";

function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
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
			if(cm.getJob() >= 0 && cm.getJob()<= 522 && cm.hasSkill(1017) == false){
			cm.teachSkill(1017,1,1);
			}else if(cm.getJob() >=1000 || cm.getJob() <= 2112 && cm.hasSkill(20001019) == false){
			cm.teachSkill(20001019,1,1);
			}
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n"
		   text += " \t\t\t  #e#r #v4000005#  林中小屋  #v4000005##k#n              \r\n"
            text += ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n"
            text += "#d角色名称：#b" + cm.getName() + "#k#n\t\t  #d剩余金币：#b" + cm.getMeso() + "#k#n\r\n"	
		
		var tex2 = ""+cm.getHyPay(1)+"";
           // text += "#L72##r" + 蓝色角点 + "材料合成#r New     #v4251202##z4251202##l#l\r\n\r\n"//3
            text += "#L71##r" + 蓝色角点 + "#v1132212#绿色腰带合成#r New#l\r\n"//3
            text += "#L72##r" + 蓝色角点 + "#v1132213#蓝色腰带合成#r New#l\r\n"//3
			text += "#L73##r" + 蓝色角点 + "#v1132214#红色腰带合成#r New#l\r\n"//3
			text += "#L74##r" + 蓝色角点 + "#v1132215#黑色腰带合成#r New#l\r\n"//3
           // text += "#L9##r" + 蓝色角点 + "#v1112673#快乐戒指合成#r New#l#l\r\n"//3
			//text += "#L6##r" + 蓝色角点 + "#v1102485#暴君防具合成#r New#l#l\r\n"//3
            //text += "#L1##r" + 蓝色角点 + "永恒装备~前期必备#r New     #v1302081##v1052155##l#l\r\n"//3
            //text += "#L8##r" + 蓝色角点 + " 铂金~~ 套装#r New     #v1052358##z1052358##l#l\r\n\r\n"//3
           // text += "#L2##r" + 蓝色角点 + "#r金花戒指~欧皇神器#r New     #v1113226#随机1-100六维#l#l\r\n"//3
           // text += "#L3##r" + 蓝色角点 + "#r十字团戒指~终极神器#r New     #v1112613#160六维#l#l\r\n"//3
           // text += "#L4##r" + 蓝色角点 + "#v1302275#法弗纳武器#r  New    #l#l\r\n"//3
		   // text += "#L5##r" + 蓝色角点 + "#v1042254#法弗纳防具#r   New   #l#l\r\n"//3
            //text += "#L6##r" + 蓝色角点 + "#r 埃苏莱 ~~ 套#r New    #v1452252##z1452252#      #v1052882##z1052882##l#l\r\n\r\n"//3
          //  text += "#L7##r" + 蓝色角点 + "   ~神器~  #r  New     #v01452302##z01452302##l#l\r\n\r\n"//3

text += "\r\n"+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n\r\n"
 if (cm.getPlayer().isGM()) {
                text += " \t\t#r以下功能，仅管理员可见，普通玩家看不见\r\n"
                text += "#L1000#快捷传送#l\t#L1001#快速转职#l\t#L1002#刷物品#l\t#L1003#满技能#l\r\n#L1004#刷点卷金币#l\r\n"

            
  }
		    cm.sendSimple(text);
        } else if (selection == 71) {//贝勒制作
            cm.openNpc(9900004, 3027);
       } else if (selection == 72) {//材料制作
            cm.openNpc(9900004, 3028);
       } else if (selection == 73) {//戒指制作
            cm.openNpc(9900004, 3029);
        } else if (selection == 74) {//永恒制作
            cm.openNpc(9900004, 3030);
        } else if (selection == 9) {//枫叶合成
            cm.openNpc(9900004, 1822);
        } else if (selection == 2) {//金花戒指
            cm.openNpc(9900004, 9893);
        } else if (selection == 8) {//皇家班
            cm.openNpc(9900004, 9006);
        } else if (selection == 3) { //十字团戒指
            cm.openNpc(9900004, 9894);
		} else if (selection == 4) {//法服呐
            cm.openNpc(9900004, 2003);
        } else if (selection == 5) {//法服呐
            cm.openNpc(9900004, 2004);
        } else if (selection == 6) {//暴君
            cm.openNpc(9000037, 0);
        } else if (selection == 6) {//埃苏
            cm.openNpc(9900004, 2005);
        } else if (selection == 7) {//神器
            cm.openNpc(9900004, 2006);
        } else if (selection == 9) {//发型脸型
           cm.openNpc(9900004, 77);
        } else if (selection == 10) {//快速升级
            cm.openNpc(9900004, 78);
        } else if (selection == 9) {//跑商送货
            cm.openNpc(9010009, 0);
        } else if (selection == 10) {//免费点装
            cm.openNpc(9310071, 0);
        } else if (selection == 11) {//坐骑补给
            cm.openNpc(9900004, 68);
        } else if (selection == 12) {//豆豆兑换
            cm.openNpc(2000, 22);
        } else if (selection == 13) {//勋章领取
            cm.openNpc(9900004, 7);
        } else if (selection == 14) {//本服介绍
            cm.openNpc(9310033, 0);
        } else if (selection == 15) {//充值介绍
            cm.openNpc(9900004, 81);
        } else if (selection == 2999) {//每日任务
            cm.openNpc(9900004, 2);
        } else if (selection == 3999) {//每日签到
            cm.openNpc(9010010, 0);
        } else if (selection == 4999) {//流浪商人
            cm.openNpc(9310057, 0);
        } else if (selection == 5999) {//血衣制作
            cm.openNpc(2100007, 0);
        } else if (selection == 6999) {//抽奖
            cm.openNpc(9050007, 0);
        } else if (selection == 7999) {//觉醒
            cm.openNpc(9000021, 0);
        } else if (selection == 999) {//21点
            cm.openNpc(9900004, 932);
        } else if (selection == 9999) {//开锁
            cm.openNpc(9000008, 0);
        } else if (selection == 10999) {//
            cm.openNpc(2000, 0);
     } else if (selection == 1000) {//
            cm.openNpc(9900004, 1004);
        } else if (selection == 6666) {//
            cm.openNpc(9900004, 16);
        } else if (selection == 7777) {//
            cm.openNpc(9900004, 7);
        } else if (selection == 8888) {//
            cm.openNpc(9900004, 6);
        } else if (selection == 1002) {//
           cm.openNpc(9900004, 1002);
            cm.dispose();
        } else if (selection == 1003) {//
            cm.dispose();
          cm.openNpc(9100200, 0);
        } else if (selection == 111999) {//
            cm.dispose();
          cm.openNpc(9270050, 0);
        } else if (selection == 1111999) {//
            cm.dispose();
          cm.openNpc(9310071, 0);
        } else if (selection == 1004) {//
            cm.gainNX(999999);;
            cm.gainMeso(210000000);
              cm.sendOk("\r\n\r\n\t\t\t#e#r恭喜你获得了99999点卷!\r\n\r\n\t\t\t#e#r恭喜你获得了2E金币!");
            cm.dispose();
        } else if (selection == 9999) {//
		if(cm.getBossLog("2016活动") <= 0 && cm.canHold(4001215,3) && cm.getLevel() >= 8){
			cm.setBossLog("2016活动");
            cm.gainItem(4001215, 3);
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了2016-04-10晚上活动集体奖励坐骑卷x3！");
            cm.sendOk("领取成功！");
            cm.dispose();
		}else{
            cm.sendOk("你已经领取过了！\r\n或者请留出背包空间");
            cm.dispose();
		}
		}
    }
}


