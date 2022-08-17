/*
SnailMS脚本生成器
*/

function start() {
	status = -1;
	action(1, 0, 0);
}
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
		   text += " \t\t\t#e#r #v1702224#  高级装备进阶  #v1702224##k#n              \r\n"
            text += ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n"
            text += "#d\t角色名称：#b" + cm.getName() + "#k#n\t\t  #d剩余金币：#b" + cm.getMeso() + "#k#n\r\n"	
		
		//var tex2 = ""+cm.getHyPay(1)+"";
		    // text += "\t#k将强化的装备放在第一格最高强化至满阶(5次)\r\n"//3\r\n"//3
            text += "#L1##r#v1003439#粉头强化#r#l\t\t#L2##r#v1112446#公婆戒指进阶#r#l\r\n";
			//text += "#L3##r#v1113401#成长戒指觉醒#r#l\r\n";
			//3\r\n"//3
            // text += "#L3##r#v1022048#眼饰进阶#r#l\t\t#L4##r#v1032024#耳环进阶#r#l\r\n"//3
			// text += "#L5##r#v1702224#武器进阶#r#l\t\t#L6##r#v1072153#鞋子进阶#r#l\r\n"//3
			// text += "#L7##r#v1082102#手套进阶#r#l\t\t\r\n"//3
			text += "\r\n";

text += "\r\n"+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n\r\n"
		    cm.sendSimple(text);
        } else if (selection == 1) {//粉色扎头进阶
            cm.dispose();
            cm.openNpc(1061015, 1);
		} else if (selection == 2) {//进阶
            cm.dispose();
            cm.openNpc(1061015, 2);
		} else if (selection == 3) {//进阶
            cm.dispose();
            cm.openNpc(1061015, 3);
		} else if (selection == 4) {//进阶
            cm.dispose();
            cm.openNpc(1061015, 4);
        } else if (selection == 5) {//进阶
            cm.dispose();
            cm.openNpc(1061015, 5);
	    } else if (selection == 6) {//进阶
            cm.dispose();
            cm.openNpc(1061015, 6);
        } else if (selection == 7) {//进阶
            cm.dispose();
            cm.openNpc(1061015, 7);
        } else if (selection == 8) {//戒指
            cm.dispose();
            cm.openNpc(1061015, 8);
		}
		
    }
}


