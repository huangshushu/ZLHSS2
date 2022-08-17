
 脚本：拍卖主菜单

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
var 音符 = "#fEffect/CharacterEff/1003276/0/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var 最低等级 = 21;
var 最高等级 = 256;


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
	//selStr += " #k" + 闹钟图标 + "时间:#r" + hour + "#k#b:#r" + minute + "#k#b:#r" + second + "#k 疲劳:#B"+(100-进度)+"# ["+(100-进度).toFixed(2)+"%]\r\n";
//巡查管理员可见
selStr += "\r\n" + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + "\r\n";
	selStr += "     #b当前时间:#r" + hour + "#k#b:#r" + minute + "#k#b:#r" + second + "#k  #b点卷：#r" + cm.getPlayer().getCSPoints(1) + "#k#n#b  抵用卷：#r" + cm.getPlayer().getCSPoints(2) + "#k#n\r\n";
	//selStr += "疲劳:#B"+(100-进度)+"# ["+(100-进度).toFixed(2)+"%]\r\n\r\n";
	selStr += "" + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + "\r\n";
		//if (cm.getPlayer().getGMLevel() > 0) {
			//selStr += " #L99999##r巡查面板#k#l\r\n";
		//}
		 
        //selStr += " #L1##b个人信息#k#l #L2##b地图传送#k#l #L3##b在线奖励#k#l#L4##b随身仓库#k#l\r\n";

       // selStr += " #L5##b清理背包#k#l #L6##b每日任务#k#l #L54##b爆物手册#k#l#L8##b推广系统#k#l\r\n";
		
		//selStr += " #L10##b冒险百科#k#l #L11##r自助充值#k#l #L105##r累计充值#k#l#L26##b重返BOSS#k#l\r\n";//#L13##b摄 影 棚#k#l
		
		//selStr += " #L14##b爱心使者#k#l #L15##b音乐点播#k#l #L16##b个人设置#k#l#L53##b怪物数据#l\r\n";
		selStr += " #L3##k拍 卖 行#k#l #L30##k"+金币商行()+"#k#l #L31##k"+点券商行()+"#k#l#L100##k"+自由银行()+"#k#l\r\n\r\n\r\n";
selStr += "\r\n\r\n";
		
		selStr += "\t\t\t\t#L99##d#e玩家指令查看#k#n#l\r\n\r\n";
		
		//selStr += "\t\t\t\t   www.zm8au.cn\r\n";

        cm.是否说明文字(selStr);
               // cm.gainItem(5211047, -1000);
               // cm.gainItem(5360014, -1000);
    } else if (status == 1) {
        switch (selection) {
            case 1:
                cm.对话结束();
                cm.openNpc(9900004, 1);
                break;
            case 2:
            cm.对话结束();
                cm.打开NPC(9900004, 2);
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
            case 111:
              cm.对话结束();
                cm.openNpc(2030013, 100);
                break;
            case 112:
              cm.对话结束();
                cm.openNpc(9900004, 5001);
                break;
            case 113:
              cm.对话结束();
                cm.openNpc(9900004, 502);
                break;
            case 115:
              cm.对话结束();
                cm.openNpc(9900004, 999);
                break;
            case 116:
              cm.对话结束();
                cm.openNpc(9900004, 504);
                break;
            case 117:
              cm.对话结束();
                cm.openNpc(9900004, 505);
                break;
            case 118:
            cm.对话结束();
                cm.openNpc(9900004, 506);

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
           case 106:
                 cm.对话结束();
		   cm.openNpc(9000008);
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
		var result = "#k"+文本+"#k";
	}else{
		var result = "#d"+文本+"#k";
	}
	return result;
}

function 点券商行() {
	var 文本 = "点券商行";
	if(cm.判断地图()>=910000000 && cm.判断地图()<=910000024){
		var result = "#k"+文本+"#k";
	}else{
		var result = "#d"+文本+"#k";
	}
	return result;
}

function 自由银行() {
	var 文本 = "自由银行";
	if(cm.判断地图()>=910000000 && cm.判断地图()<=910000024){
		var result = "#k"+文本+"#k";
	}else{
		var result = "#d"+文本+"#k";
	}
	return result;
}