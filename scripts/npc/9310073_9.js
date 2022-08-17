
var status = 0;
var 黑水晶 = 4021008;
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
var 忠告 = "#k温馨提示：任何非法程序和外挂封号处理.封杀侥幸心理.";
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
			var a0 = "               #L0##r"+小烟花+"女神福利说明"+小烟花+"#l\r\n\r\n";
			var a1 = "             #L1##b"+小烟花+"领取女神终生福利"+小烟花+"#l\r\n\r\n";
			var a2 = "             #L2##b"+小烟花+"领取女神每日福利"+小烟花+"#l\r\n";	    
            cm.sendSimple(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n              #r欢迎来到月月冒险岛女神福利#k\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n"+a0+""+a1+""+a2+"");

        } else if (status == 1) {		
			if (selection == 0) {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n            #r欢迎来到月月冒险岛女神福利说明#k\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n             #r欢迎各位女玩家来到月月冒险岛\r\n\r\n        #b本服女玩家可以与#rGM视频私聊#b进行女神认证\r\n\r\n#b认证完成会给予#v1142574#，可领取#r女神终生福利#b及#r女神每日福利\r\n");
					cm.dispose();
					return
			} else if (selection == 1) {
				if (cm.haveItem(1142574,1) && cm.getPlayer().getBossLog("女神终生福利",1) == 0) {
					cm.gainItem(1142574,-1);
					cm.gainItem(3010070,1);
					cm.gainItem(3010416,1);
					cm.gainItem(3010417,1);
					cm.gainItem(3010658,1);
					cm.gainItem(2450000,1);
					cm.gainItem(3010660,1);
					cm.gainItem(4310038,20);
					cm.gainMeso(+52000000);//5200W
					cm.gainDY(+100000);//抵用
					cm.gainNX(+50000);//点卷
					cm.gainItem(1142574,50,50,50,50,0,0,50,50,0,0,0,0,0,0);
					cm.getPlayer().setBossLog("女神终生福利",1,1);
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"女神终生福利" + " : 恭喜女神" + cm.getPlayer().getName() +"成功通过了认证，并领取了终身福利！",true).getBytes());
					cm.sendOk("#r恭喜你，成功领取了女神终生福利！");
					cm.dispose();
					return
				} else {
					cm.sendOk("#r你的背包内没有#v1142574#，或你已领取过该一次性福利！");
					cm.dispose();
					return
				}
			} else if (selection == 2) {
				if (cm.haveItem(1142574,1) && cm.getBossLog("女神每日福利") < 1) {
					cm.gainItem(4005000,5);
					cm.gainItem(4005001,5);
					cm.gainItem(4005002,5);
					cm.gainItem(4005003,5);
					cm.gainItem(4001165,10);
					cm.gainItem(2022530,1);
					cm.gainMeso(+5200000);//520W
					cm.setBossLog("女神每日福利");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"女神每日福利" + " : 恭喜女神" + cm.getPlayer().getName() +"领取了女神每日福利，获得千万爱慕者的追捧！",true).getBytes());
					cm.sendOk("#r恭喜你，成功领取了女神每日福利！");
					cm.dispose();
					return;
				} else {
					cm.sendOk("#r你的背包内没有#v1142574#，或你今天已领取过该福利！");
					cm.dispose();
					return
				} 
			} 
        }
    }
}