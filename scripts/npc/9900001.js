var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
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
			if(cm.getPlayer().getMapId() == 925020003){
				cm.dispose();
				return;
			}
            for (i = 0; i < 10; i++) {
                text += "#b恭喜您终于完成了武陵大闯关挑战领取！您将获得如下奖励：#r\r\n#v4011003#*2，#v4021004#*2,#v4001016#钥匙*2，#v#*1，#v4021008#*1，#v4021001#*1，#v4011001#*1,#v4021006#*1,#v4011004#*1,#v4021007#钻石*5，点券+33333\r\n"//3！#k\r\n\r\n";
                text += "" + 蓝色箭头 + " #g#L1#领取奖励\r\n\r\n"//3
            cm.sendSimple(text);
           }
        } else if (selection == 1) {
if(cm.getBossLoga('TT11') > 0)
{
cm.sendOk("你今天已经领取过1次了");
cm.dispose();

}
          else {
cm.gainNX(33333);
cm.setBossLoga('TT11');
				cm.gainItem(4011003, 2);
				cm.gainItem(4021004, 2);
				cm.gainItem(4001016, 2);
                                cm.gainItem(4021008, 1);
                                cm.gainItem(4021001, 1);
                                cm.gainItem(4011001, 1);
                                cm.gainItem(4021006, 1);
                                cm.gainItem(4011004, 1);
                                cm.gainItem(4021007, 1);
                                cm.gainItem(3994731, 5);
cm.warp(910000000);

cm.全服喇叭(2, "恭喜玩家[" + cm.getPlayer().getName() + "]大佬，成功通关武陵副本，打败了武公大BOSS");
            cm.dispose();
			}
        } 
		
    }
}


