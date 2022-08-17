var need_startdobleexp, sj_wpsl, progress, s_sel, s_type;
var item_quan;
// importClass(Packages.handling.channel.ChannelServer);
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.sendOk("感谢使用！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
				var text = "#L1##b#i3010048##i3010048##i3010048#今晚全场赵公子买单#i3010048##i3010048##i3010048##l\r\n\r\n";
				cm.sendSimple(text);

		} else if(status == 1){
			s_type = selection;
			if(s_type == 0){
				//cm.sendGetNumber("请输入你要捐赠的数量。\r\n\r\n进度：#B# #g"+sj_wpsl+"#k/#r"+need_startdobleexp+"#k - #r#e%#k#n\r\n目前你有 #b点卷#k × #r#e#n#k\r\n#i3992025#数量: #c3992025# #n#k\r\n",0,1,30000);
			} else {
				cm.sendSimple("\tHi~#b"+cm.getPlayer().getName()+"#l，这里是#b自助双倍经验系统#k，如果你有足够的点卷的话，可以给全服开启双倍经验哦！另外，给全服双开的大佬将获得以下福利：\r\n\r\n#b#i2022030# 人气值+66\r\n#i5360000# 7天权 \r\n#k#L0#给全服开双 3 小时 (需要30万点卷)#l");
			}
		} else if(status == 2){
			if(s_type == 0){
			  s_sel = selection;
				need_startdobleexp = cm.geexprate(5, 1);
				sj_wpsl = cm.geexprate(6, 1) + s_sel;
				progress = (sj_wpsl/need_startdobleexp)*100;
				//cm.sendYesNo("#b你确定要将 #r#e"+s_sel+"#n #i3992025# #b捐赠吗？\r\n\r\n捐赠后进度:#B"+progress+"# #g"+sj_wpsl+"#k/#r"+need_startdobleexp+"#k - #r#e"+progress.toFixed(2)+"%#k#n");
			} else {
				cm.sendYesNo("#b再次确认是否手误,大佬确定要使用30万点卷开启全服双倍经验活动三小时？");
			}
		} else if(status == 3){
			if(s_type == 0){
					
			} else {
				if(cm.getNX(1) >= 300000){
					var em = cm.getEventManager("DoubleRate");
					if (em == null) {
						cm.sendOk("事件为空，请联系GM.");
						cm.safeDispose();
						return;
					}
					cm.gainNX(-300000);
					cm.getPlayer().setFame(cm.getPlayer().getFame() + 66);
					cm.gainItem(5360000,1,7);
					cm.gainExp(180);
					
					
					em.setProperty("expRate", "2");
					em.setProperty("dropRate", "2");
					em.setProperty("mesoRate", "2");
					em.setProperty("duration", "10800000");
                    em.startInstance();
					
					// var cservs = Packages.handling.channel.ChannelServer.getAllInstances();
					// var it = cservs.iterator();
					// while(it.hasNext()){
						// var cserv = it.next();
						// var expRate =  cserv.getExpRate();
						// cserv.setExpRate(expRate * 2);
					// }
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.startMapEffect("〖双倍经验活动〗 本次活动由["+cm.getName()+"]买单，全服开放双倍经验活动三小时并获得双倍爆率卡7天~大家快感谢Ta", 5121002, true));

					cm.dispose();
				} else {
					cm.sendOk("#b 点卷  不足");
					cm.dispose();
				}
			}
		} else {
			cm.dispose();
		}
	}
}