/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：养殖
 */
//时间引用
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
//素材引用
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var r = "#fUI/UIWindow.img/Quest/TimeQuest/AlarmClock/default/0/0#";

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
	var record = cm.getQuestRecord(8252);
	var data = record.getCustomData();
    if (status == 0) {
		
        var selStr = "    " + 心 + " " + 心 + "  " + 心 + "  " + 心 + " #r#e < 养殖坊 > #k#n " + 心 + "  " + 心 + "  " + 心 + " " + 心 + "\r\n\r\n";
		 
		selStr += "		Hi~#b#h ##k，你会养殖吗？养什么，你还是先从养小鸡开始把，你可以从我这里领取一枚鸡蛋，然后你就养它就行了。养小鸡孵化他需要 "+cm.显示物品(4032135)+"，然后你养大后，就可以去找#b星缘#k收购了哟，小鸡的价格还是很可观的。\r\n\r\n";
		
        selStr += "       "+cm.显示物品(4220089)+"  当前成长值 [#b1000#k / #r"+data+"#k]\r\n";
		selStr += "\r\n\t\t\t\t\t#L0##b返回#k#l\r\n";
		if(!cm.判断物品数量(4220089,1)){
			 selStr += "\t\t\t\t\t#L1##b领取鸡蛋#k#l\r\n";
		}
        cm.是否说明文字(selStr);
    } else if (status == 1) {
        switch (selection) {
			case 0:
                cm.dispose();
			    cm.openNpc(9900004, 0);
                break;
            case 1:
				cm.开始任务(8252);
				cm.给物品(4220089,1);
				cm.说明文字("恭喜你领取了 "+cm.显示物品(4220089)+" 你需要在背包里双击打开它，然后把 "+cm.显示物品(4032135)+" 撒到鸡蛋身上就可以了。");
                cm.dispose();
                break;
			default:
                cm.dispose();
                break;
        }
    }
}