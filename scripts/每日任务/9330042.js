/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：星缘
 */
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
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
	if (cm.getInventory(1).isFull()) {
        cm.说明文字("请保证 #b装备栏#k 至少有2个位置。");
        cm.对话结束();
        return;
    } else if (cm.getInventory(2).isFull()) {
        cm.说明文字("请保证 #b消耗栏#k 至少有2个位置。");
        cm.对话结束();
        return;
    } else if (cm.getInventory(3).isFull()) {
        cm.说明文字("请保证 #b设置栏#k 至少有2个位置。");
        cm.对话结束();
        return;
    } else if (cm.getInventory(4).isFull()) {
        cm.说明文字("请保证 #b其他栏#k 至少有2个位置。");
        cm.对话结束();
        return;
    } else if (cm.getInventory(5).isFull()) {
        cm.说明文字("请保证 #b特殊栏#k 至少有2个位置。");
        cm.对话结束();
        return;
    }
	var 群等级 = cm.getPlayer().群等级;
    if (status == 0) {
        var selStr = "	  Hi~#b#h ##k欢迎来到#r"+cm.开服名称()+"#k完成每日中心的任务可以获得点券和经验。\r\n";
		//selStr += " #L3##b在线奖励#k#l\r\n";
		//selStr += " #L6##r每日任务#k#l\r\n";
		selStr += " #L4##b每日签到#k#l\r\n";
		selStr += " #L5##b每日副本#d(领取副本奖励再签到)#l\r\n";
		//selStr += " #L7##b每日任务#k#l\r\n";
		//selStr += " #L10##r[每日]#b冒险收集(#d药品#b)#k#l\r\n";
		//selStr += " #L11##r[每日]#b拜访星缘#k#l\r\n";
		//selStr += " #L12##r[每日]#b寻找怪物#k#l\r\n";
		//selStr += " #L13##r[每日]#b美味的鱼#k#l\r\n";
		//selStr += " #L14##r[每日]#b游览世界#k#l\r\n";
		//selStr += " #L100##r[群享]#b领取重置卡#k#l\r\n";
		/*selStr += " #L8##r[新年]#bbaby品克缤椅子#k#l\r\n";
		selStr += " #L9##r[情人节]#b巧克力椅子#k#l\r\n";
		selStr += " #L2##b每日签到#k#l\r\n";
		selStr += " #L4##b在线奖励(全服)#k#l\r\n";
		selStr += " #L5##b在线奖励(家族)#k#l\r\n";
        selStr += " #L1##r[鬼屋]#b去闹鬼的宅邸#k#l\r\n";
		if (cm.getPlayer().getGMLevel() > 0) {
		}*/
	
	

        cm.说明文字(selStr);
    } else if (status == 1) {
        switch (selection) {
			case 100:
				if(cm.判断每日("群重置卡福利")<=0){
					if(群等级=="lv.4"){
						cm.setBossRankCount9("重置卡",1);
						cm.给个人每日("群重置卡福利");
						cm.说明文字("恭喜你获取 #r重置卡#k x 1 。");
					}else if(群等级=="lv.5"){
						cm.setBossRankCount9("重置卡",2);
						cm.给个人每日("群重置卡福利");
						cm.说明文字("恭喜你获取 #r重置卡#k x 2 。");
					}else if(群等级=="lv.6"){
						cm.给个人每日("群重置卡福利");
						cm.setBossRankCount9("重置卡",3);
						cm.说明文字("恭喜你获取 #r重置卡#k x 3 。");
					}else{
						cm.说明文字("很遗憾你无法领取。");
					}
				}else{
					cm.说明文字("明天再来吧。");
				}
                cm.dispose();
                break;
			case 10:
                cm.dispose();
				cm.打开NPC(9310060,10);
                break;
			case 7:
                cm.dispose();
				cm.打开NPC(9310060,1);
                break;
			case 13:
                cm.dispose();
				cm.打开NPC(9310060,13);
                break;
			case 11:
                cm.dispose();
				cm.打开NPC(9310060,11);
                break;
			case 12:
                cm.dispose();
				cm.打开NPC(9310060,12);
                break;
			case 14:
                cm.dispose();
				cm.打开NPC(9310060,14);
                break;
			case 9:
                cm.dispose();
				cm.打开NPC(9310060,9);
                break;
			case 8:
                cm.dispose();
				cm.打开NPC(9310060,8);
                break;
			case 7:
                cm.dispose();
				cm.打开NPC(9310060,7);
                break;
			case 6:
                cm.dispose();
				cm.打开NPC(9900004,2005);
                break;
			case 5:
                cm.dispose();
				cm.打开NPC(9010000,7);
                break;
			case 4:
                cm.dispose();
				cm.打开NPC(9900004,10006);
                break;
			case 3:
                cm.dispose();
				cm.打开NPC(9330043,0);
                break;
			case 2:
                cm.dispose();
				cm.打开NPC(9310060,1);
                break;
            case 1:
                cm.dispose();
				cm.打开NPC(2007,6);
                break;
        }
    }
}