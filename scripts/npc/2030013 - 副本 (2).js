/*
 脚本：拍卖主菜单
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
var 闹钟图标 = "#fUI/UIWindow.img/Quest/TimeQuest/AlarmClock/default/0/0#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.对话结束();
        return;
    }
     if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if(cm.getPlayer().赌博房间>0){
		cm.对话结束();
		cm.打开NPC(9900004,303);
		return;
	}


	//摄影棚不可打开拍卖
	if(cm.判断地图()>=970000000 && cm.判断地图()<=970000005){
		cm.个人公告("在这里无法使用。");
		cm.对话结束();
		return;
	}
	var 疲劳值 = cm.getPlayer().判断疲劳值();
	//显示的进度，需要改成和控制台1号的时间一样。分制
	var 疲劳值限制 = 600;
	var 进度 = 疲劳值/疲劳值限制*100;
	if(疲劳值>疲劳值限制){
		进度=100;
	}
	//显示
    if (status == 0) {
		
     //  var selStr = "\r\n    " + 心 + " " + 心 + "  " + 心 + "  " + 心 + "#r#e < 最新冒险岛 > #k#n " + 心 + "  " + 心 + "  " + 心 + " " + 心 + "\r\n\r\n";
var selStr = "";
	selStr += " #b#e[开放两个扎昆地图，选择扎昆地图]\r\n#d     新地图不容易掉线\r\n\r\n\r\n#n#k";
//巡查管理员可见
		//if (cm.getPlayer().getGMLevel() > 0) {
			//selStr += " #L99999##r巡查面板#k#l\r\n";
		//}
		 
        selStr += " #L1##r扎昆#b（正常地图#b）#k#l\r\n";

        selStr += " #L2##r扎昆#b（新地图扎昆主体，一个人需要一个#v4001017##b）#k#l\r\n";
		

	

        cm.是否说明文字(selStr);
               // cm.gainItem(5211047, -1000);
               // cm.gainItem(5360014, -1000);
    } else if (status == 1) {
        switch (selection) {
            case 1:
}else */if(cm.haveItem(4031506,1)){
                cm.对话结束();
               cm.gainItem(5010020, 1);
                break;
            case 2:
            cm.对话结束();
                cm.打开NPC(2030013, 2);
 //cm.gainItem(5211047, -1000);
             //cm.gainItem(5360014, -1000);
                break;
			//自由银行
			case 100:
				if(cm.判断地图()>=910000000 && cm.判断地图()<=910000024){
					cm.对话结束();
					cm.打开NPC(9900004, 100);
				}else{
					cm.说明文字("请在市场内使用该功能。");
					cm.对话结束();
				}
                break;
			//金币商行
            case 3:
                cm.对话结束();
                cm.openNpc(9900004, 3);
                break;
            case 101:
                cm.对话结束();
                cm.openNpc(9900004, 99);
                break;
            case 102:
                cm.对话结束();
                cm.openNpc(9900004, 98);
                break;
            case 103:
                cm.对话结束();
                cm.openNpc(9900004, 97);
                break;
            case 104:
                cm.对话结束();
                cm.openNpc(9900004, 95);
                break;
           case 105:
                 cm.对话结束();
		   cm.openNpc(9900004, 93);
                break;
            case 4:
                cm.对话结束();
                cm.openNpc(9900004, 4);
                break;
            case 5:
                cm.对话结束();
                cm.openNpc(9900004, 5);
                break;
			case 99:
			//	cm.getPlayer().懒人捡物=0;
				cm.说明文字("\t\t聊天窗口输入  #r@帮助#k   即可查看所有指令！\r\n\r\n#d\t\t已添加玩家封号指令，互相监督，绿色游戏！！！\r\n\r\n\t\t#d有证据截图封号后，你将获得他所有财产！！！\r\n\r\n#e#r\t\t截图为证，恶意封号删号处理！！！");
                cm.对话结束();
			    //cm.打开NPC(9900004, 99999);
                break;
            case 6:
     			cm.对话结束();
                //cm.打开NPC(9900004, 22);
				cm.打开NPC(9330042, 0);
                break;
            case 7:
                cm.对话结束();
                cm.openNpc(9900004, 7);
                break;
            case 8:
                cm.对话结束();
            cm.openNpc(9900004, 8);
                
                break;
			case 9:
                cm.对话结束();
                cm.openNpc(9900004, 9);
                break;
			case 10:
                cm.对话结束();
                cm.openNpc(9900007, 0);
                break;
			case 11:
                cm.对话结束();
           cm.openNpc(9900004, 11);
          
                break;
			case 26:
                cm.对话结束();
           cm.openNpc(9900004, 94);
          
                break;
			case 53:
                cm.对话结束();
			    cm.打开NPC(2000, 1);
                break;
			case 12:
                cm.对话结束();
                cm.openNpc(9900004, 12);
                break;
			case 13:
                cm.对话结束();
                cm.openNpc(2007, 11);
                break;
			case 14:
                cm.对话结束();
                cm.openNpc(9900004, 14);
                break;
			case 15:
                cm.对话结束();
                cm.openNpc(9900004, 15);
                break;
			case 54:
                cm.对话结束();
			    cm.openNpc(9900004, 21);
                break;
			case 25:
                cm.对话结束();
                cm.打开NPC(9900004, 25);
                break;
            case 30:
                if(cm.判断地图()>=910000000 && cm.判断地图()<=910000024){
					cm.对话结束();
					cm.打开NPC(9900004, 3);
				}else{
					cm.说明文字("请在市场内使用该功能。");
					cm.对话结束();
				}
                break;
			case 31:
				if(cm.判断地图()>=910000000 && cm.判断地图()<=910000024){
					cm.对话结束();
					cm.打开NPC(9900004, 30);
				}else{
					cm.说明文字("请在市场内使用该功能。");
					cm.对话结束();
				}
                break;
			case 100:
				if(cm.判断地图()>=910000000 && cm.判断地图()<=910000024){
					cm.对话结束();
					cm.打开NPC(9900004, 100);
				}else{
					cm.说明文字("请在市场内使用该功能。");
					cm.对话结束();
				}
                break;
			case 16:
                cm.对话结束();
                cm.openNpc(2007, 2007);
                break;
			default:
                cm.对话结束();
                break;
        }
    }
}

function 金币商行() {
	var 文本 = "金币商行";
	if(cm.判断地图()>=910000000 && cm.判断地图()<=910000024){
		var result = "#b"+文本+"#k";
	}else{
		var result = "#d"+文本+"#k";
	}
	return result;
}

function 点券商行() {
	var 文本 = "点券商行";
	if(cm.判断地图()>=910000000 && cm.判断地图()<=910000024){
		var result = "#b"+文本+"#k";
	}else{
		var result = "#d"+文本+"#k";
	}
	return result;
}

function 自由银行() {
	var 文本 = "自由银行";
	if(cm.判断地图()>=910000000 && cm.判断地图()<=910000024){
		var result = "#b"+文本+"#k";
	}else{
		var result = "#d"+文本+"#k";
	}
	return result;
}