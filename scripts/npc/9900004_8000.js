
var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
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
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
			text += "             #e#d欢迎来到月月冒险岛在线奖励\r\n\r\n"
			text += "             #r当前在线时间："+cm.getGamePoints()+" 分钟#k#n\r\n"
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
			if(cm.getGamePoints() >= 60 && cm.getBossLog("zxsj") == 0){
					text += "             #L2##r"+小烟花+"在线时间60分钟#l\r\n"
				} else if(cm.getGamePoints() >= 60 && cm.getBossLog("zxsj") > 0){
					text += "              "+小烟花+"#r在线时间60分钟（完成）#l\r\n"//3
				} else {
					text += "             #L2##r"+小烟花+"在线时间60分钟#l\r\n"
					//text += "   奖励：#v4001266#*1，#v4001126#*100，#v2022452#*10万！#l\r\n\r\n"
			}
			
			if(cm.getGamePoints() >= 150 && cm.getBossLog("zxsj") == 1){
					text += "             #L3##r"+小烟花+"在线时间120分钟#l\r\n"
				} else if(cm.getGamePoints() >= 150 && cm.getBossLog("zxsj") > 1){
					text += "              "+小烟花+"#r在线时间120分钟（完成）#l\r\n"//3
				} else {
					text += "             #L3##r"+小烟花+"在线时间120分钟#l\r\n"
					//text += "   奖励：#v4001126#*200，#v5040000#*5，#v4000313#*5，#v2022452#*20万！#l\r\n\r\n"
			}
			
			if(cm.getGamePoints() >= 240 && cm.getBossLog("zxsj") == 2){
					text += "             #L4##r"+小烟花+"在线时间240分钟#l\r\n"
				} else if(cm.getGamePoints() >= 240 && cm.getBossLog("zxsj") > 2){
					text += "              "+小烟花+"#r在线时间240分钟（完成）#l\r\n"//3
				} else {
					text += "             #L4##r"+小烟花+"在线时间240分钟#l\r\n"
					//text += "   奖励：#v4001126#*200，#v4250602#*1，#v4031456#*30，#v5150040#*2！#l\r\n\r\n"
			}
			
			if(cm.getGamePoints() >= 360 && cm.getBossLog("zxsj") == 3){
					text += "             #L5##r"+小烟花+"在线时间360分钟#l\r\n"
				} else if(cm.getGamePoints() >= 360 && cm.getBossLog("zxsj") > 3){
					text += "              "+小烟花+"#r在线时间360分钟（完成）#l\r\n"//3
				} else {
					text += "             #L5##r"+小烟花+"在线时间360分钟#l\r\n"
					//text += "   奖励：#v4001126#*200，#v5390002#*10，#v2049100#*1，#v4005004#*10！#l\r\n\r\n"
			}
			
			if(cm.getGamePoints() >= 480 && cm.getBossLog("zxsj") == 4){
					text += "             #L6##r"+小烟花+"在线时间480分钟#l\r\n"
				} else if(cm.getGamePoints() >= 480 && cm.getBossLog("zxsj") > 4){
					text += "              "+小烟花+"#r在线时间480分钟（完成）#l\r\n"//3
				} else {
					text += "             #L6##r"+小烟花+"在线时间480分钟#l\r\n"
					//text += "   奖励：#v5440000#抵用卷2000，#v2432503#点卷200！#l\r\n\r\n"
			}
			if(cm.getGamePoints() >= 600 && cm.getBossLog("zxsj") == 5){
					text += "             #L7##r"+小烟花+"在线时间600分钟#l\r\n"
				} else if(cm.getGamePoints() >= 600 && cm.getBossLog("zxsj") > 5){
					text += "              "+小烟花+"#r在线时间600分钟（完成）#l\r\n"//3
				} else {
					text += "             #L7##r"+小烟花+"在线时间600分钟#l\r\n"
					//text += "   奖励：#v4001126#*500，#v4001266#*1，#v3992025#*188，#v2022452#*200万！#l\r\n\r\n"
					//text += "         #v2049100#*2，#v4005004#*20！#l\r\n"
			}
            cm.sendSimple(text);
        } else if (selection == 2) {
			if(cm.getGamePoints() >= 60 && cm.getBossLog("zxsj") == 0){
				cm.gainItem(4001266,1);//劳动奖章
				cm.gainItem(2000004,100);//超级药水
				cm.gainItem(4000487,50);//钓鱼币
				cm.setBossLog('zxsj');
				cm.sendOk("成功领取60分钟在线奖励！");
				cm.worldMessage(6,"恭喜玩家：["+cm.getName()+"]领取了60分钟在线奖励！");
				cm.dispose();
			} else if(cm.getGamePoints() >= 60 && cm.getBossLog("zxsj") > 0){
				cm.sendOk("你的账号已经领取过该奖励！");
				cm.dispose();
			} else {
				text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
				text += "      #r"+小烟花+"在线时间达到60分钟可获得以下物品"+小烟花+"\r\n"
				text += "          #v4001266#*1    #v2000004#*100    #v4000487#*50#l#k\r\n\r\n"
				cm.sendSimple(text);
				cm.dispose();
			}
        } else if (selection == 3) {
			if(cm.getGamePoints() >= 150 && cm.getBossLog("zxsj") == 1){
				cm.gainItem(5390000,5);//炽热情景喇叭
				cm.gainItem(4310025,20);//勇闯禁地币
				cm.gainItem(4031456,30);//枫叶珠
				cm.setBossLog('zxsj');
				cm.sendOk("成功领取150分钟在线奖励！");
				cm.worldMessage(6,"恭喜玩家：["+cm.getName()+"]领取了150分钟在线奖励！");
				cm.dispose();
			} else if(cm.getGamePoints() >= 150 && cm.getBossLog("zxsj") > 1){
				cm.sendOk("你的账号已经领取过该奖励！");
				cm.dispose();
			} else {
				text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
				text += "      #r"+小烟花+"在线时间达到150分钟可获得以下物品"+小烟花+"\r\n"
				text += "          #v5390000#*5    #v4310025#*20    #v4031456#*30#l#k\r\n\r\n"
				cm.sendSimple(text);
				cm.dispose();
			}
        } else if (selection == 4) {
			if(cm.getGamePoints() >= 240 && cm.getBossLog("zxsj") == 2){
				cm.gainItem(2049100,1);//混沌卷轴
				cm.gainItem(4005004,10);//黑暗水晶
				cm.gainItem(2028074,2);//每日礼箱
				cm.gainItem(4310143,10);//BOSS币
				cm.setBossLog('zxsj');
				cm.sendOk("成功领取240分钟在线奖励！");
				cm.worldMessage(6,"恭喜玩家：["+cm.getName()+"]领取了240分钟在线奖励！");
				cm.dispose();
			} else if(cm.getGamePoints() >= 240 && cm.getBossLog("zxsj") > 2){
				cm.sendOk("你的账号已经领取过该奖励！");
				cm.dispose();
			} else {
				text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
				text += "      #r"+小烟花+"在线时间达到240分钟可获得以下物品"+小烟花+"\r\n"
				text += "      #v2049100#*1    #v4005004#*10    #v2028074#*2    #v4001129#*10#l#k\r\n\r\n"
				cm.sendSimple(text);
				cm.dispose();
			}
        } else if (selection == 5) {
			if(cm.getGamePoints() >= 360 && cm.getBossLog("zxsj") == 3){
				cm.gainItem(4310057,10);//跑商纪念币
				cm.gainItem(4310143,10);//BOSS币
				cm.gainItem(2022530,1);//迎春花花语
				cm.gainItem(5510000,5);//原地复活术
				cm.setBossLog('zxsj');
				cm.sendOk("成功领取360分钟在线奖励！");
				cm.worldMessage(6,"恭喜玩家：["+cm.getName()+"]领取了360分钟在线奖励！");
				cm.dispose();
			} else if(cm.getGamePoints() >= 360 && cm.getBossLog("zxsj") > 3){
				cm.sendOk("你的账号已经领取过该奖励！");
				cm.dispose();
			} else {
				text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
				text += "      #r"+小烟花+"在线时间达到360分钟可获得以下物品"+小烟花+"\r\n"
				text += "      #v4310057#*10    #v4310143#*10    #v2022530#*1    #v5510000#*5#l#k\r\n\r\n"
				cm.sendSimple(text);
				cm.dispose();
			}
        } else if (selection == 6) {
			if(cm.getGamePoints() >= 480 && cm.getBossLog("zxsj") == 4){
				cm.gainItem(4001165,20);//太阳神的赐福
				cm.gainItem(4001266,1);//劳动奖章
				cm.gainItem(4251202,1);//万能水晶
				cm.gainItem(3992025,128);//圣诞大星
				cm.setBossLog('zxsj');
				cm.sendOk("成功领取480分钟在线奖励！");
				cm.worldMessage(6,"恭喜玩家：["+cm.getName()+"]领取了480分钟在线奖励！");
				cm.dispose();
			} else if(cm.getGamePoints() >= 480 && cm.getBossLog("zxsj") > 4){
				cm.sendOk("你的账号已经领取过该奖励！");
				cm.dispose();
			} else {
				text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
				text += "      #r"+小烟花+"在线时间达到480分钟可获得以下物品"+小烟花+"\r\n"
				text += "      #v4001165#*20    #v4001266#*1    #v4251202#*1    #v3992025#*128#l#k\r\n\r\n"
				cm.sendSimple(text);
				cm.dispose();
			}
		} else if (selection == 7) {
			if(cm.getGamePoints() >= 600 && cm.getBossLog("zxsj") == 5){
				cm.gainItem(2049100,1);//混沌卷轴
				cm.gainItem(4005004,20);//黑暗水晶
				cm.gainItem(4001266,1);//劳动奖章
				cm.gainItem(3992025,198);//圣诞大星
				cm.setBossLog('zxsj');
				cm.sendOk("成功领取600分钟在线奖励！");
				cm.worldMessage(6,"恭喜玩家：["+cm.getName()+"]领取了600分钟在线奖励！");
				cm.dispose();
			} else if(cm.getGamePoints() >= 600 && cm.getBossLog("zxsj") > 5){
				cm.sendOk("你的账号已经领取过该奖励！");
				cm.dispose();
			} else {
				text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
				text += "      #r"+小烟花+"在线时间达到600分钟可获得以下物品"+小烟花+"\r\n"
				text += "      #v2049100#*1    #v4005004#*20    #v4001266#*1    #v3992025#*198#l#k\r\n\r\n"
				cm.sendSimple(text);
				cm.dispose();
			}
		}
    }
}