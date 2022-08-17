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
			text += "\t\t\t\t#e#b  升阶系统中心 #k	#n\r\n"
            text += "#L1##r确定升阶就点我吧！#l\r\n\r\n"//3
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
			}else */if(cm.haveItem(4000464,500) && cm.haveItem(4251202,500) && cm.haveItem(1004811,1)){
				cm.gainItem(4170006, -500);
				cm.gainItem(4170006, -500);
				cm.gainItem(4170006, -500);
				cm.gainItem(1004811, -1);
				cm.setmoneyb(+0);
		        cm.给属性装备(1004811,0, 0, 150, 150, 150, 150, 0, 0, 100, 100, 500, 500, 0, 0, 0, 0, 0);// 神秘防具
          //      cm.sendOk("兑换成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]成功进阶 《神秘防具》 ");
            cm.dispose();
			}else{
            cm.sendOk("无法兑换，请查看背包是否已满，或材料不足");
            cm.dispose();
			}
		}
    }
}