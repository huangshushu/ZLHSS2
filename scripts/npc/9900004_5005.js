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
			text += "\t\t\t\t#e#b  中秋称号补发 #k	#n\r\n"
			text += "#v1142655#全属性50，5000HPMP"
            text += "#L1##r确定领取就点我吧！#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {

			if(cm.getPlayer().getOneTimeLog("中秋称号") == 0){
			if(cm.getLevel() <10 ){
				cm.sendOk("达到10级才可以领喔");
				cm.dispose();
				return;
			}
			cm.给属性装备(1142655, 0, 0, 50, 50, 50, 50, 5000, 5000, 50, 50,0, 0, 0, 0, 0, 0, 0);
			cm.sendOk("领取成功！");
			cm.getPlayer().setOneTimeLog("中秋称号");
			cm.全服黄色喇叭("[中秋称号] : 恭喜玩家 "+cm.getPlayer().getName()+" 成功领取了中秋称号。")
			cm.dispose();
			}else{
            cm.sendOk("#e#b一个人只能领取一次\r\n ");
            cm.dispose();
			}
		}
	}
}