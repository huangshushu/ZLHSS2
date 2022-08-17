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

            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n"
		   text += " \t\t\t  #e#r #v4000005#  林中小屋  #v4000005##k#n              \r\n"
            text += ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n"
            text += "#d\t角色名称：#b" + cm.getName() + "#k#n\t\t  #d剩余金币：#b" + cm.getMeso() + "#k#n\r\n"	
		

		    // text += "\t#k将强化的装备放在第一格最高强化至满阶(5次)\r\n"//3\r\n"//3
            text += "#L14##r#v1003982#助力成长装备#r#l\t #L6##r#v1142358#勋章强化#l\r\n"//3\r\n"//3
            text += "#L2##r#v1113090#宝石戒指#r#l\t\t#L3##r#v1112444#枫叶戒指#r#l\r\n"//3
			text += "#L4##r#v1114303#邮票戒指#r#l\t\t#L5##r#v1114226#矿石戒指#r#l\r\n"//3
			text += "#L1##r#v1112907#小鱼戒指#r#l\t\t#L8##r#v1113219#成长戒指#r#l\r\n"//3
			text += "#L12##r#v1114401#黑暗之力戒指#r#l\t#L10##r#v1114403#烈焰戒指#r#l\r\n"//3
			text += "#L9##r#v1142788#勋章合成#r#l\t\t#L13##r#v1115400#怪物卡片戒指#r#l\r\n"//3
			text += "#L15##r#v1102109#披风制作#r#l\t\t#L16##r#v1052202#套服制作#r#l\r\n"//3
			text += "#L17##r#v1072447#鞋子制作#r#l\t\t#L18##r#v1132298#腰带制作#r#l\r\n"//3
			// text += "#L11##r#v2070024#飞镖兑换#r#l\r\n"//3
			// text += "#L7#\t\t\t#r#v1102039#披风中心#r#l\r\n"//3

text += "\r\n"+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n\r\n"
		    cm.sendSimple(text);
        } else if (selection == 1) {//小鱼戒指
            cm.dispose();
            cm.openNpc(9900004, 10011);
		} else if (selection == 2) {//宝石戒指
            cm.dispose();
            cm.openNpc(9900004, 10014);
		} else if (selection == 3) {//枫叶戒指
            cm.dispose();
            cm.openNpc(9900004, 10017);
		} else if (selection == 4) {//邮票戒指
            cm.dispose();
            cm.openNpc(9900004, 10020);
        } else if (selection == 5) {//矿石戒指
            cm.dispose();
            cm.openNpc(9900004, 10023);
	    } else if (selection == 6) {//勋章强化
            cm.dispose();
            cm.openNpc(9000038, 4);
        } else if (selection == 7) {//披风制作
            cm.dispose();
            cm.openNpc(9900004, 10028);
        } else if (selection == 8) {//成长戒指
            cm.dispose();
            cm.openNpc(9900004, 10075);
		} else if (selection == 9) {//勋章合成
            cm.dispose();
            cm.openNpc(9900004, 10090);
		} else if (selection == 10) {//烈焰戒指
            cm.dispose();
            cm.openNpc(9000038, 1);
		} else if (selection == 11) {//飞镖兑换
            cm.dispose();
            cm.openNpc(9000038, 2);
		} else if (selection == 12) {//飞镖兑换
            cm.dispose();
            cm.openNpc(9000038, 3);
		} else if (selection == 13) {//飞镖兑换
            cm.dispose();
            cm.openNpc(9000038, 5);
		} else if (selection == 14) {//助力成长装备
            cm.dispose();
            cm.openNpc(9000038, 6);
		} else if (selection == 15) {//助力成长装备
            cm.dispose();
            cm.openNpc(9000038, 8);
		} else if (selection == 16) {//助力成长装备
            cm.dispose();
            cm.openNpc(9000038, 9);
		} else if (selection == 17) {//助力成长装备
            cm.dispose();
            cm.openNpc(9000038, 10);
		} else if (selection == 18) {//助力成长装备
            cm.dispose();
            cm.openNpc(9000038, 11);
		}
        // else if (selection == 76) {//枫叶合成
            // cm.openNpc(2000, 4);
        // } else if (selection == 2) {//金花戒指
            // cm.openNpc(9900004, 9893);
        // } else if (selection == 8) {//皇家班
            // cm.openNpc(9900004, 10075);
        // } else if (selection == 3) { //十字团戒指
            // cm.openNpc(9900004, 9894);
		// } else if (selection == 4) {//法服呐
            // cm.openNpc(9900004, 2003);
        // } else if (selection == 5) {//法服呐
            // cm.openNpc(9900004, 2004);
        // } else if (selection == 6) {//暴君
            // cm.openNpc(9000037, 0);
        // } else if (selection == 6) {//埃苏
            // cm.openNpc(9900004, 2005);
        // } else if (selection == 7) {//神器
            // cm.openNpc(9900004, 2006);
        // } else if (selection == 77) {//发型脸型
           // cm.openNpc(9900004, 3045);
        // } else if (selection == 10) {//快速升级
            // cm.openNpc(9900004, 78);
        // } else if (selection == 9) {//跑商送货
            // cm.openNpc(9010009, 0);
        // } else if (selection == 10) {//免费点装
            // cm.openNpc(9310071, 0);
        // } else if (selection == 11) {//坐骑补给
            // cm.openNpc(9900004, 68);
        // } else if (selection == 12) {//豆豆兑换
            // cm.openNpc(2000, 22);
        // } else if (selection == 13) {//勋章领取
            // cm.openNpc(9900004, 7);
        // } else if (selection == 14) {//本服介绍
            // cm.openNpc(9310033, 0);
        // } else if (selection == 15) {//充值介绍
            // cm.openNpc(9900004, 81);
        // } else if (selection == 2999) {//每日任务
            // cm.openNpc(9900004, 2);
        // } else if (selection == 3999) {//每日签到
            // cm.openNpc(9010010, 0);
        // } else if (selection == 4999) {//流浪商人
            // cm.openNpc(9310057, 0);
        // } else if (selection == 5999) {//血衣制作
            // cm.openNpc(2100007, 0);
        // } else if (selection == 6999) {//抽奖
            // cm.openNpc(9050007, 0);
        // } else if (selection == 7999) {//觉醒
            // cm.openNpc(9000021, 0);
        // } else if (selection == 999) {//21点
            // cm.openNpc(9900004, 932);
        // } else if (selection == 9999) {//开锁
            // cm.openNpc(9000008, 0);
        // } else if (selection == 10999) {//
            // cm.openNpc(2000, 0);
     // } else if (selection == 1000) {//
            // cm.openNpc(9900004, 1004);
        // } else if (selection == 6666) {//
            // cm.openNpc(9900004, 16);
        // } else if (selection == 7777) {//
            // cm.openNpc(9900004, 7);
        // } else if (selection == 8888) {//
            // cm.openNpc(9900004, 6);
        // } else if (selection == 1002) {//
           // cm.openNpc(9900004, 1002);
            // cm.dispose();
        // } else if (selection == 1003) {//
            // cm.dispose();
          // cm.openNpc(9100200, 0);
        // } else if (selection == 111999) {//
            // cm.dispose();
          // cm.openNpc(9270050, 0);
        // } else if (selection == 1111999) {//
            // cm.dispose();
          // cm.openNpc(9310071, 0);
        // } else if (selection == 1004) {//
            // cm.gainNX(999999);;
            // cm.gainMeso(210000000);
              // cm.sendOk("\r\n\r\n\t\t\t#e#r恭喜你获得了99999点卷!\r\n\r\n\t\t\t#e#r恭喜你获得了2E金币!");
            // cm.dispose();
        // } else if (selection == 9999) {//
		// if(cm.getBossLog("2016活动") <= 0 && cm.canHold(4001215,3) && cm.getLevel() >= 8){
			// cm.setBossLog("2016活动");
            // cm.gainItem(4001215, 3);
			// cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了2016-04-10晚上活动集体奖励坐骑卷x3！");
            // cm.sendOk("领取成功！");
            // cm.dispose();
		// }else{
            // cm.sendOk("你已经领取过了！\r\n或者请留出背包空间");
            // cm.dispose();
		// }
		// }
    }
}


