/*
 ZEVMS冒险岛(079)游戏服务端
 */

var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function 增加生命法力(a) {
	//cm.增加游戏吃鱼冷却();
	var 生命值 = cm.随机数(a);
	var 法力值 = cm.随机数(a);
    cm.增加角色最大生命值(生命值);
	cm.增加角色最大法力值(法力值);
	cm.刷新();
	if(cm.百分率(10)){
	//	cm.收物品(2022468,1);
	//	cm.个人公告("铲子掉了。");
	}
	if(cm.百分率(10)){
	//	cm.收物品(2022468,10);
	//	cm.个人公告("锅子掉了。");
	}
	cm.个人公告("增加HP : "+生命值);
	cm.个人公告("增加MP : "+法力值);
	cm.全服公告("有人偷偷用了洗血箱子")

	
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.对话结束();
        return;u
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

	if(!cm.判断物品数量(2022468,1)){
		cm.说明文字("你没有 "+cm.显示物品(2022468)+" 。");
		cm.对话结束();
        return;
	}
	
	if(cm.getPlayer().getMapId() != 910000000){
		cm.sendOk("抱歉，洗血箱子只能在自由市场使用！");
		cm.dispose();
		return;
	}
	
    if (status == 0) {
        var 文本 = "\r\n  " + 心 + " " + 心 + "  " + 心 + "  " + 心 + " #r#e < 洗血中心 > #k#n " + 心 + "  " + 心 + "  " + 心 + " " + 心 + "\r\n\r\n";
		文本 += "		\r\n";
		
		if(cm.判断物品数量(2022468,1)){
			文本 += "\t\t#L4031648#"+cm.显示物品(2022468)+" x 1（增加HP,MP 0-17）#l \r\n";
		}
    	if(cm.判断物品数量(2022468,10)){
			文本 += "\t\t#L4031647#"+cm.显示物品(2022468)+" x 10（增加HP,MP 0-170）#l \r\n";		
		}
		if(cm.判断物品数量(2022468,50)){
			文本 += "\t\t#L4031646#"+cm.显示物品(2022468)+" x 50（增加HP,MP 0-850）#l \r\n";
		}
		if(cm.判断物品数量(2022468,100)){
			文本 += "\t\t#L4031645#"+cm.显示物品(2022468)+" x 100（增加HP,MP 0-1700）#l \r\n";
		}
		if(cm.判断物品数量(2022468,500)){
			文本 += "\t\t#L4031631#"+cm.显示物品(2022468)+" x 500（增加HP,MP 0-8500）#l \r\n";
		
		}
		
		
        cm.是否说明文字(文本);
    } else if (status == 1) {
        switch (selection) {
			case 4031648:
				cm.收物品(2022468,1);
				增加生命法力(17);
				cm.对话结束();
                break;
			case 4031647:
				cm.收物品(2022468,10);
				增加生命法力(170);
				cm.对话结束();
                break;
			case 4031646:
				cm.收物品(2022468,50);
				增加生命法力(850);
				cm.对话结束();
                break;
			case 4031645:
				cm.收物品(2022468,100);
				增加生命法力(1700);
				cm.对话结束();
                break;
			case 4031631:
				cm.收物品(2022468,500);
				增加生命法力(8500);
				cm.对话结束();
                break;
			case 4031644:
				cm.收物品(4031644,1);
				增加生命法力(12);
				cm.对话结束();
                break;
			case 4031643:
				cm.收物品(4031643,1);
				增加生命法力(12);
				cm.对话结束();
                break;
			case 4031642:
				cm.收物品(4031642,1);
				增加生命法力(12);
				cm.对话结束();
                break;
			case 4031641:
				cm.收物品(4031641,1);
				增加生命法力(12);
				cm.对话结束();
                break;
			case 4031628:
				cm.收物品(4031628,1);
				增加生命法力(12);
				cm.对话结束();
                break;
			case 4031640:
				cm.收物品(4031640,1);
				增加生命法力(7);
				cm.对话结束();
                break;
			case 4031639:
				cm.收物品(4031639,1);
				增加生命法力(7);
				cm.对话结束();
                break;
			case 4031638:
				cm.收物品(4031638,1);
				增加生命法力(7);
				cm.对话结束();
                break;
			case 4031637:
				cm.收物品(4031637,1);
				增加生命法力(7);
				cm.对话结束();
                break;
			case 4031630:
				cm.收物品(4031630,1);
				增加生命法力(7);
				cm.对话结束();
                break;
			case 4031627:
				cm.收物品(4031627,1);
				增加生命法力(3);
				cm.对话结束();
                break;
			case 4031633:
				cm.收物品(4031633,1);
				增加生命法力(3);
				cm.对话结束();
                break;
			case 4031634:
				cm.收物品(4031634,1);
				增加生命法力(3);
				cm.对话结束();
                break;
			case 4031635:
				cm.收物品(4031635,1);
				增加生命法力(3);
				cm.对话结束();
                break;
			case 4031636:
				cm.收物品(4031636,1);
				增加生命法力(3);
				cm.对话结束();
                break;
			default:
                cm.对话结束();
                break;
        }
    }
}