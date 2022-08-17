
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var 箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";

function start() {
    status = -1;
	
    action(1, 0, 0)
}

function action(mode, type, selection) {
    if (status <= 0 && mode <= 0) {
        cm.dispose();
        return
    }
    if (mode == 1) {
        status++
    } else {
        status--
    }	
		if (cm.getMapId() == 108010101 ) {
            cm.dispose();
            return;
		 
    } else if (status <= 0) {
        var 
		selStr = "欢迎光临》#v5211047#双倍经验卡一天需要6666点券\r\n";
		selStr += "#L0##r点券获取途径可泡点 任务 福利#l\r\n\r\n"
		selStr += "#L1##r我要购买一天双倍经验卡#l\r\n\r\n"


		   
	

        cm.sendSimple(selStr)
    } else if (status == 1) {
        switch (selection) {
		 case 1:
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,1)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
		 }else */if(cm.getPlayer().getCSPoints(1) >= 6666){
                cm.gainNX(-6666);
                cm.gainItem(5211047,1,1);
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『兑换系统』" + " : " + "[" + cm.getChar().getName() + "]在拍卖兑换系统成功购买了双倍经验卡！"));
				cm.dispose();
			}else{
            cm.sendOk("您的点券不足");
            cm.dispose();
			}
         break;
		 case 2:
		cm.openNpc(9310085,0);
        }
    }
}