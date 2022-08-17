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
			text += "\t\t\t\t#e#b  初一冒险岛100元赞助礼包 #k	#n\r\n"
            text += "#b\t#v1002186# 全属+#r20#k  #l\r\n"//3
			text += "#b\t#v1142796# 全属+#r20#k HP+#r500#k #l\r\n"//3
           // text += "#b\t#v2022468#[洗血箱子] x10#l\r\n"//3
			text += "#b\t#v2340000#[祝福卷轴] x5#l\r\n"//3
		//	text += "#b\t#v4310014# 雪花币x500#l\r\n"//3
			text += "#b\t#v2049100# [混沌卷轴] x5#l\r\n"//3
			text += "#b\t#v1122017# [经验吊坠] x1 #l\r\n"//3
            text += "#b\t#v4000463# 国庆币 x10#l\r\n"//3
          //  text += "#b\t\额外赠送金币#r 200W  #l\r\n\r\n"//3
            text += "#L1##r确定领取大礼包就点我吧！#l\r\n\r\n"//3
            cm.sendSimple(text);
      } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
		    if(cm.getmoneyb()>100 && cm.getPlayer().getOneTimeLog("100元累计赞助礼包") == 0){
				cm.getPlayer().setOneTimeLog("100元累计赞助礼包");
				cm.给属性装备(1142796, 0, 0, 20, 20, 20, 20, 500, 500, 20, 20, 20, 20, 20, 20, 20, 20);//V2勋章
				cm.给属性装备(1002186, 0, 0, 20, 20, 20, 20, 0, 0, 20, 20, 20, 20, 20, 20, 20, 20);//V2勋章
				cm.gainItem(2340000, 5);//祝福
				cm.gainItem(4000463,10);
				cm.gainItem(1122017,1);//精灵吊坠
				cm.gainItem(2049100,5);//混沌
			//	cm.gainMeso(2000000);
			//	cm.gainNX(5000);
				
		cm.sendOk("领取成功！");
			cm.全服黄色喇叭("[充值] : 恭喜玩家 "+cm.getPlayer().getName()+" 成功领取了100元累充礼包。")
			cm.getPlayer().setOneTimeLog('chongzhi21');
            cm.dispose();
			}else{
            cm.sendOk("#r只能领取一次，或者你的赞助余额不足");
            cm.dispose();
			}
		}
    }
}