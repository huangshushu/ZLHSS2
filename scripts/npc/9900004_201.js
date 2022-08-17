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
    cm.增加角色最大生命值(生命值);
	cm.刷新();
	if(cm.百分率(10)){
		cm.收物品(4031632,1);
		cm.个人公告("铲子掉了。");
	}
	if(cm.百分率(10)){
		cm.收物品(4031629,1);
		cm.个人公告("锅子掉了。");
	}
	cm.个人公告("增加HP : "+生命值);
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

	if(!cm.判断物品数量(4031632,1)){
		cm.说明文字("你没有 "+cm.显示物品(4031632)+" 。");
		cm.dispose();
        return;
	}else if(!cm.判断物品数量(4031629,1)){
		cm.说明文字("你没有 "+cm.显示物品(4031629)+" 。");
		cm.dispose();
        return;
	}
    if (status == 0) {
        var 文本 = "\r\n  " + 心 + " " + 心 + "  " + 心 + "  " + 心 + " #r#e < 锻炼体力 > #k#n " + 心 + "  " + 心 + "  " + 心 + " " + 心 + "\r\n\r\n";
		文本 += "		玩家食用鱼类会随机增涨生命值，体积较大增加也会较多，每次食用必须要有锅和铲子，食用后一定概率会丢失锅子或者铲子。\r\n";
		
		if(cm.判断物品数量(4031648,1)){
			文本 += "\t\t#L4031648#"+cm.显示物品(4031648)+"（HP 0-17）#l \r\n";
		}
		if(cm.判断物品数量(4031647,1)){
			文本 += "\t\t#L4031647#"+cm.显示物品(4031647)+"（HP 0-17）#l \r\n";
		}
		if(cm.判断物品数量(4031646,1)){
			文本 += "\t\t#L4031646#"+cm.显示物品(4031646)+"（HP 0-17）#l \r\n";
		}
		if(cm.判断物品数量(4031645,1)){
			文本 += "\t\t#L4031645#"+cm.显示物品(4031645)+"（HP 0-17）#l \r\n";
		}
		if(cm.判断物品数量(4031631,1)){
			文本 += "\t\t#L4031631#"+cm.显示物品(4031631)+" （HP 0-17）#l \r\n";
		}

		
		if(cm.判断物品数量(4031644,1)){
			文本 += "\t\t#L4031644#"+cm.显示物品(4031644)+"（HP 0-12）#l \r\n";
		}
		if(cm.判断物品数量(4031643,1)){
			文本 += "\t\t#L4031643#"+cm.显示物品(4031643)+"（HP 0-12）#l \r\n";
		}
		if(cm.判断物品数量(4031642,1)){
			文本 += "\t\t#L4031642#"+cm.显示物品(4031642)+"（HP 0-12）#l \r\n";
		}
		if(cm.判断物品数量(4031641,1)){
			文本 += "\t\t#L4031641#"+cm.显示物品(4031641)+"（HP 0-12）#l \r\n";
		}
		if(cm.判断物品数量(4031628,1)){
			文本 += "\t\t#L4031628#"+cm.显示物品(4031628)+"（HP 0-12）#l \r\n";
		}
		
		if(cm.判断物品数量(4031640,1)){
			文本 += "\t\t#L4031640#"+cm.显示物品(4031640)+"（HP 0-7）#l \r\n";
		}
		if(cm.判断物品数量(4031639,1)){
			文本 += "\t\t#L4031639#"+cm.显示物品(4031639)+"（HP 0-7）#l \r\n";
		}
		if(cm.判断物品数量(4031638,1)){
			文本 += "\t\t#L4031638#"+cm.显示物品(4031638)+"（HP 0-7）#l \r\n";
		}
		if(cm.判断物品数量(4031637,1)){
			文本 += "\t\t#L4031637#"+cm.显示物品(4031637)+"（HP 0-7）#l \r\n";
		}
		if(cm.判断物品数量(4031630,1)){
			文本 += "\t\t#L4031630#"+cm.显示物品(4031630)+"（HP 0-7）#l \r\n";
		}
		
		if(cm.判断物品数量(4031636,1)){
			文本 += "\t\t#L4031636#"+cm.显示物品(4031636)+"（HP 0-3）#l \r\n";
		}
		if(cm.判断物品数量(4031635,1)){
			文本 += "\t\t#L4031635#"+cm.显示物品(4031635)+"（HP 0-3）#l \r\n";
		}
		if(cm.判断物品数量(4031634,1)){
			文本 += "\t\t#L4031634#"+cm.显示物品(4031634)+"（HP 0-3）#l \r\n";
		}
		if(cm.判断物品数量(4031633,1)){
			文本 += "\t\t#L4031633#"+cm.显示物品(4031633)+"（HP 0-3）#l \r\n";
		}
		if(cm.判断物品数量(4031627,1)){
			文本 += "\t\t#L4031627#"+cm.显示物品(4031627)+"（HP 0-3）#l \r\n";
		}
		
		
        cm.是否说明文字(文本);
    } else if (status == 1) {
        switch (selection) {
			case 4031648:
				cm.收物品(4031648,1);
				增加生命法力(17);
				cm.dispose();
                break;
			case 4031647:
				cm.收物品(4031647,1);
				增加生命法力(17);
				cm.dispose();
                break;
			case 4031646:
				cm.收物品(4031646,1);
				增加生命法力(17);
				cm.dispose();
                break;
			case 4031645:
				cm.收物品(4031645,1);
				增加生命法力(17);
				cm.dispose();
                break;
			case 4031631:
				cm.收物品(4031631,1);
				增加生命法力(17);
				cm.dispose();
                break;
			case 4031644:
				cm.收物品(4031644,1);
				增加生命法力(12);
				cm.dispose();
                break;
			case 4031643:
				cm.收物品(4031643,1);
				增加生命法力(12);
				cm.dispose();
                break;
			case 4031642:
				cm.收物品(4031642,1);
				增加生命法力(12);
				cm.dispose();
                break;
			case 4031641:
				cm.收物品(4031641,1);
				增加生命法力(12);
				cm.dispose();
                break;
			case 4031628:
				cm.收物品(4031628,1);
				增加生命法力(12);
				cm.dispose();
                break;
			case 4031640:
				cm.收物品(4031640,1);
				增加生命法力(7);
				cm.dispose();
                break;
			case 4031639:
				cm.收物品(4031639,1);
				增加生命法力(7);
				cm.dispose();
                break;
			case 4031638:
				cm.收物品(4031638,1);
				增加生命法力(7);
				cm.dispose();
                break;
			case 4031637:
				cm.收物品(4031637,1);
				增加生命法力(7);
				cm.dispose();
                break;
			case 4031630:
				cm.收物品(4031630,1);
				增加生命法力(7);
				cm.dispose();
                break;
			case 4031627:
				cm.收物品(4031627,1);
				增加生命法力(3);
				cm.dispose();
                break;
			case 4031633:
				cm.收物品(4031633,1);
				增加生命法力(3);
				cm.dispose();
                break;
			case 4031634:
				cm.收物品(4031634,1);
				增加生命法力(3);
				cm.dispose();
                break;
			case 4031635:
				cm.收物品(4031635,1);
				增加生命法力(3);
				cm.dispose();
                break;
			case 4031636:
				cm.收物品(4031636,1);
				增加生命法力(3);
				cm.dispose();
                break;
			default:
                cm.dispose();
                break;
        }
    }
}