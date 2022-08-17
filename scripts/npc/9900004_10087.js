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
		   text += " \t\t\t#e#r #v1702224#  透明装备进阶  #v1702224##k#n              \r\n"
            text += ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n"
            text += "#d角色名称：#b" + cm.getName() + "#k#n\t\t  #d剩余金币：#b" + cm.getMeso() + "#k#n\r\n"	
		
		var tex2 = ""+cm.getHyPay(1)+"";
					text += "#r强化成功之后，会在装备上显示装备等级\r\n";
            text += "#r#L1##v1072153##d升为1阶#r全属性+2 双攻+1 #d#l\r\n\r\n需要#k#v4310081#x10#v4031997#x20 #d 点券#kx5000 #d抵用#kx5000 #d金币#kx1000万\r\n"//3
			text += "#r#L2##v1072153##d升为2阶#r全属性+2 双攻+1 #d#l\r\n\r\n需要#k#v4310081#x10#v4031997#x30 #d 点券#kx10000 #d抵用#kx5000 #d金币#kx2000万\r\n"//3
			text += "#r#L3##v1072153##d升为3阶#r全属性+2 双攻+1 #d#l\r\n\r\n需要#k#v4310081#x10#v4031997#x40 #d 点券#kx15000 #d抵用#kx5000 #d金币#kx3000万\r\n"//3
			text += "#r#L4##v1072153##d升为满阶#r全属性+2 双攻+1 #d#l\r\n\r\n需要#k#v4310081#x10#v4031997#x50 #d 点券#kx20000 #d抵用#kx5000 #d金币#kx4000万\r\n"//3
			text += "#r#L5##v1072153##d升为史诗#r全属性+5 双攻+4 #d#l\r\n\r\n需要#k#v4310129#x30#v4031997#x60 #d 点券#kx25000 #d抵用#kx5000 #d金币#kx5000万\r\n"//3
			text += "#r#L6##v1072153##d升为传说#r全属性+5 双攻+4 #d#l\r\n\r\n需要#k#v4310129#x30#v4031997#x60 #d 点券#kx25000 #d抵用#kx5000 #d金币#kx5000万\r\n"//3
			// text += "#r#L7##v1072153#升为超越全属性+7需要\r\n#k#v4310081#x30#v4031997#x150+15000点券+30000抵用券+1E金币#l\r\n"//5

		

text += "\r\n"+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n\r\n"
		    cm.sendSimple(text);
        } else if (selection == 1) {//1阶
            cm.openNpc(9900004, 10080);
		} else if (selection == 2) {//2阶
            cm.openNpc(9900004, 10081);
		} else if (selection == 3) {//3阶
            cm.openNpc(9900004, 10082);
		} else if (selection == 4) {//4阶
            cm.openNpc(9900004, 10083);
		} else if (selection == 5) {//史诗
            cm.openNpc(9900004, 100831);
		} else if (selection == 6) {//传送
            cm.openNpc(9900004, 100832);
		} else if (selection == 7) {//超越，未做
            cm.openNpc(9900004, 100633);
        } else if (selection == 72) {//材料制作
            cm.openNpc(1013208, 0);
	    } else if (selection == 74) {//材料制作
            cm.openNpc(1013208, 17);
        } else if (selection == 73) {//戒指制作
            cm.openNpc(9900004, 3025);
        } else if (selection == 75) {//永恒制作
            cm.openNpc(9900004, 3035);
        } else if (selection == 76) {//枫叶合成
            cm.openNpc(2000, 4);
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
        } else if (selection == 77) {//发型脸型
           cm.openNpc(9900004, 3045);
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



 