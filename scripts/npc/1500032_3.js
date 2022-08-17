/* 点卷商店 */

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
         var selStr = "         #v4040007##e#r至尊独家军衔勋章系统#v4040007##l\r\n#v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488#\r\n         请把勋章取下来放背包里面在领取\r\n       #L0##d#v1142321#领取每日(团长)奖励#v1142321##l#k\r\n       #r#L1##v1142318#领取每日(旅长)奖励#v1142318##l\r\n       #b#L2##v1142319#领取每日(师长)奖励#v1142319##l\r\n       #b#L3##v1142320#领取每日(军长)奖励#v1142320##l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {

        case 0:
             if (cm.haveItem(1142321)&&cm.getPQLog("军衔") < 1) {
			cm.setPQLog("军衔");
			cm.gainItem(2049130,5);//qian
			cm.gainItem(2340000,5);
			cm.gainItem(5064000,3);
			cm.gainItem(5062500,5);
			cm.gainItem(5062002,10);
			cm.gainNX(2,5000);
			cm.gainMeso(2000000);
                    cm.sendOk("成功领取团长勋章的奖励。");
                    cm.worldSpouseMessage(0x24, "[团长军衔] : 恭喜 " + cm.getChar().getName() + " 领取团长军衔每日工资，5000抵用券.");
					cm.worldSpouseMessage(0x24, "[团长军衔] : 恭喜 " + cm.getChar().getName() + " 领取团长军衔每日工资，5000抵用券.");
			cm.dispose();
                } else {
                    cm.sendOk("军衔都没有或者已经领取过，请明天再来！"); 
                    cm.dispose();
                }
                 break;
        case 1:
            if (cm.haveItem(1142318)&&cm.getPQLog("军衔") < 1) {
                        cm.gainItem(2049135,5);//qian
			cm.gainItem(5064000,5);//qian
			cm.gainItem(2340000,10);
			cm.gainItem(5062500,10);
			cm.gainItem(5062002,20);
                        cm.setPQLog("军衔");
			cm.gainNX(2,10000);
			cm.gainMeso(5000000);
                    cm.sendOk("你成功换取啦。");
                    cm.worldSpouseMessage(0x0A, "[旅长军衔] : 恭喜 " + cm.getChar().getName() + "  领取旅长军衔每日工资，获得10000抵用券.");
					cm.worldSpouseMessage(0x0A, "[旅长军衔] : 恭喜 " + cm.getChar().getName() + "  领取旅长军衔每日工资，10000抵用券.");
					cm.worldSpouseMessage(0x0A, "[旅长军衔] : 恭喜 " + cm.getChar().getName() + "  领取旅长军衔每日工资，10000抵用券.");
			cm.dispose();
                } else {
                     cm.sendOk("军衔都没有或者已经领取过，请明天再来");  
                    cm.dispose();
                }
                 break;
        case 2:
             if (cm.haveItem(1142319)&&cm.getPQLog("军衔") < 1) {
 			cm.gainItem(2049135,10);//qian
			cm.gainItem(2340000,20);
			cm.gainItem(5064000,10);
			cm.gainItem(5062009,10);
			cm.gainItem(5062002,20);
                        cm.setPQLog("军衔");
			cm.gainNX(2,20000);
			cm.gainMeso(10000000);
                    cm.sendOk("你成功换取啦。");
                    cm.worldSpouseMessage(0x0F, "[师长军衔] : 恭喜 " + cm.getChar().getName() + "  领取师长军衔每日工资，获得26666抵用券.");
					cm.worldSpouseMessage(0x0F, "[师长军衔] : 恭喜 " + cm.getChar().getName() + "  领取师长军衔每日工资，20000抵用券.");
					cm.worldSpouseMessage(0x0F, "[师长军衔] : 恭喜 " + cm.getChar().getName() + "  领取师长军衔每日工资，20000抵用券.");
					cm.worldSpouseMessage(0x0F, "[师长军衔] : 恭喜 " + cm.getChar().getName() + "  领取师长军衔每日工资，20000抵用券.");
					cm.worldSpouseMessage(0x0F, "[师长军衔] : 恭喜 " + cm.getChar().getName() + "  领取师长军衔每日工资，20000抵用券.");
			cm.dispose();
                } else {
                     cm.sendOk("军衔都没有或者已经领取过，请明天再来！");  
                    cm.dispose();
                }
                 break;
       case 3:
             if (cm.haveItem(1142320)&&cm.getPQLog("军衔") < 1) {
   			cm.gainItem(2049135,20);//qian
			cm.gainItem(2340000,30);
			cm.gainItem(5064000,20);
			cm.gainItem(5062009,20);
			cm.gainItem(5062002,30);
                        cm.setPQLog("军衔");
			cm.gainNX(2,30000);
			cm.gainMeso(20000000);
                    cm.sendOk("你成功换取啦。");
                    cm.worldSpouseMessage(0x26, "[军长王者] : 恭喜 " + cm.getChar().getName() + "  领取王者军衔每日工资，获得2000W游戏币。30000抵用券.");
					cm.worldSpouseMessage(0x26, "[军长王者] : 恭喜 " + cm.getChar().getName() + "  领取王者军衔每日工资，30000抵用券.");
					cm.worldSpouseMessage(0x26, "[军长王者] : 恭喜 " + cm.getChar().getName() + "  领取王者军衔每日工资，30000抵用券.");
					cm.worldSpouseMessage(0x26, "[军长王者] : 恭喜 " + cm.getChar().getName() + "  领取王者军衔每日工资，30000抵用券.");
					cm.worldSpouseMessage(0x26, "[军长王者] : 恭喜 " + cm.getChar().getName() + "  领取王者军衔每日工资，30000抵用券.");
					cm.worldSpouseMessage(0x26, "[军长王者] : 恭喜 " + cm.getChar().getName() + "  领取王者军衔每日工资，30000抵用券.");
			cm.dispose();
                } else {
                     cm.sendOk("军衔都没有或者已经领取过，请明天再来！"); 
                    cm.dispose();
                }
                 break;
        case 7:
            cm.dispose();
            cm.openNpc(9900002, 16); //洗点卷轴
            break;
        case 8:
            cm.dispose();
            cm.openNpc(9900002, 24); //玩具商店
            break;
        case 9:
            cm.dispose();
            cm.openNpc(9110103); //骑宠商店
            break;
	case 10:
            cm.dispose();
            cm.openNpc(9110114); //破攻石头
            break;
	case 11:
            cm.dispose();
            cm.openNpc(9900002, 5); //一键潜能
            break;
	case 12:
            cm.dispose();
            cm.openNpc(9900002, 1301); //一键潜能
            break;
	case 13:
            cm.dispose();
            cm.openNpc(9270096, 13); //一键潜能
            break;
	case 14:
            cm.dispose();
            cm.openNpc(9900002, 1301); //一键潜能
            break;
	case 15:
            cm.dispose();
            cm.openNpc(9270096, 15); //一键潜能
            break;
        }
    }
}