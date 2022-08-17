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
			text += "\t\t\t\t#e#b  冒险岛VIP礼包 #k	#n\r\n"
            text += "#b\t#v1402304# * 《 神器任选一把！联系GM获得 》#l\r\n"//3
            text += "#b\t#v1042255# * 《 任选职业一套FFN，武器除外 ！联系GM获得 》#l\r\n"//3
            text += "#b\t#v2044003# * 30《任选 联系GM获得》#l\r\n"//3
            text += "#b\t#v4000313# *3000#l\r\n"//3
            text += "#b\t#v4002000# *600#l\r\n"//3
            text += "#b\t#v4000487# *600#l\r\n"//3
            text += "#b\t#v4000463# *600#l\r\n"//3
            text += "#b\t#v4251202# *100#l\r\n"//3
            text += "#b\t#v4310095# *100#l\r\n"//3
            text += "#b\t盛大点券 #r 300000点#l\r\n"//3
            text += "#b\t\额外赠送冒险币#r 60000000  ~#l\r\n\r\n"//3
            text += "#L1##r确定购买大礼包就点我吧！#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4170015,1)){
				cm.gainItem(4170015, -1);
				cm.gainItem(4002000, 600);//蜗牛邮票
				cm.gainItem(4000487, 600);//暗影币
				cm.gainItem(4000463, 600);//国庆币
				cm.gainItem(4310095, 100);//强化币
				cm.gainItem(4251202, 100);//五彩水晶
				cm.gainMeso(30000000);
				cm.gainNX(300000);
		cm.gainItem(4000313,3000);//黄金枫叶
            cm.sendOk("购买成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]兑换了6000元重返补偿礼包");
            cm.dispose();
			}else{
            cm.sendOk("无法购买，请联系GM微笑");
            cm.dispose();
			}
		}
    }
}