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
			text += "\t\t\t\t#e#b  初一冒险岛300元技能礼包 #k	#n\r\n"
            text += "#b\t#v1142742# 全属+#r15#k HP+#r1000#k #l#b\t#v2022468#[洗血箱子] x10#l\r\n"//3
			text += "#b\t#v4310014# 雪花币装备材料x500#l#b\t#v1122017#经验项链 #l\r\n"//3
			text += "#b\t#v1912303# 全属#r5  #b坐骑x1 #l#b\t#v2340000#[祝福卷轴] x20#l\r\n"//3
			text += "#b\t#v2049100#[混沌卷轴] x20#l#b\t盛大点券 #r 15000 点券#l\r\n"//3
            text += "#b\t\额外赠送金币#r 800W  #l#b\t\领取#s4111006#二段跳(键码6)。\r\n\r\n"
            text += "#L1##r确定领取大礼包就点我吧！#l\r\n\r\n"//3
            cm.sendSimple(text);
			
        } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
		    if (cm.getInventory(1).isFull() || cm.getInventory(5).isFull() || cm.getInventory(4).isFull()) {
                cm.sendSimple("您的装备栏和其他栏和现金栏空间不足。");
		     cm.dispose();
			}else if (cm.getmoneyb()>=300 && cm.getPlayer().getOneTimeLog('chongzhi21')  ) { 
			    cm.setmoneyb(-300);
				cm.getPlayer().dropMessage(5,"充值积分 - 300");
				cm.gainItem(4310014, 1000);//雪花币
				cm.给属性装备(1142742, 0, 0, 15, 15, 15, 15, 1000, 1000, 15, 15, 15, 15, 15, 15, 15, 15);//V2勋章
				cm.给属性装备(1912303, 0, 0, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5);//坐骑
				cm.给属性装备(1902303, 0, 0, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5);//坐骑
				cm.gainItem(2340000, 20);//祝福
				cm.gainItem(2049100, 20);//混沌
				cm.gainItem(2022468,10);//洗血箱子
				cm.gainItem(1122017,1);//精灵吊坠
				cm.teachSkill(4111006,30);
                cm.getPlayer().changeKeybinding(7,1,4111006);
			    cm.sendOk("二段跳#s4111006#领取成功，#b请换【频道】后查看【键码6】");
				
				cm.gainMeso(8000000);
				cm.gainNX(15000);
				
		cm.sendOk("领取成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了300赞助礼包！");
			cm.getPlayer().setOneTimeLog('chongzhi21');
            cm.dispose();
			}else{
            cm.sendOk("无法购买，请联系GM");
            cm.dispose();
			}
		}
    }
}