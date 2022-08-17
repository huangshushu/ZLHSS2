var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
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
		
			text += "#r\r\n\r\n                   #L1#启动宠吸#l\r\n\r\n "
			//text += "#r\r\n                   #L2#关闭宠吸#l\r\n\r\n"
			text += "#b\r\n                若无法使用请私聊管理\r\n\r\n"
			
            cm.sendSimple(text);
        } else if (selection == 1) {

			if( cm.getPlayer().getBossLog("chongxi",1) == 0){
				cm.getPlayer().setBossLog("chongxi",1)
				//cm.getPlayer().setBossLog("chongxi",1,1);
				//cm.getPlayer().setBossLog("chongxi",1)
				//cm.setBossLog("chongxi")
				cm.sendOk("#r恭喜你，已开启宠吸！");
				cm.dispose();
			}else{
				cm.sendOk("#r已经开启宠吸了 不要反复操作！");
				cm.dispose();
			}
		} else if (selection == 2) {

			if( cm.getPlayer().getBossLog("chongxi",1) == 1){
				cm.getPlayer().setBossLog("chongxi",1,-1)
				cm.sendOk("#r恭喜你，关闭宠吸！");
				cm.dispose();
			}else{
				cm.sendOk("#r已经关闭宠吸了 不要反复操作！");
				cm.dispose();
			}
		}
    }
}
