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
            text += "#L1##r确定制作#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,1)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4000000,200) && cm.haveItem(4000016,200)&& cm.haveItem(4000010,200)&& cm.haveItem(4000037,200)&& cm.haveItem(4001126,500)&& cm.haveItem(4000040,1)&& cm.haveItem(4000176,1)&&  cm.getMeso()>=12000000 ){
				cm.gainMeso(-12000000);
				cm.gainItem(4000000,-200);
				cm.gainItem(4000016,-200);
				cm.gainItem(4000010,-200);
				cm.gainItem(4000037,-200);
				cm.gainItem(4001126,-500);
				cm.gainItem(4000040,-1);
				cm.gainItem(4000176,-1);
				cm.gainItem(1442133,1);
          			cm.sendOk("制作成功！");
cm.worldMessage(5, "恭喜玩家[" + cm.getPlayer().getName() + "]成功制作了红色武器一把");
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
		}
 	
    }
}
