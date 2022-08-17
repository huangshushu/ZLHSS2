importPackage(net.sf.cherry.client);
var status = 0;
var 黑水晶 = 4021008;
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
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
		if(cm.getPlayer().getGuild() == null){
			cm.sendOk("你还没有家族呢!");
			cm.dispose();
		} else {
			if(cm.getBossLog('家族签到') < 1){
				cm.gainItem(4001266,1);
                 // Packages.handling.world.World.Broadcast.broadcastMessage(Packages.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"[每日签到]" + " : " + " [" + cm.getPlayer().getName() + "]家族签到成功，",true).getBytes()); 

				cm.setBossLog('家族签到');
				cm.sendOk("签到成功，获得#v4001266#一枚!");
				cm.dispose();
			} else {
				cm.sendOk("你已经签到过了!");
				cm.dispose();
			}

		}


        } else if (status == 1) {
			cm.sendOk("今天天气真耶");
			cm.dispose();
			
        }
    }
}
