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
            text += "#e#d制作#v2044908#\r\n需要#v4000313#[#r#c4000313##k/30]#v4001126#[#r#c4001126##k/200]#v4011007#[#r#c4011007##k/2]\r\n#v4021009#[#r#c4021009##k/1]#v4031138#金币[#r"+cm.getPlayer().getMeso()+"#k/10000000]#d.#l\r\n\r\n"//3
            text += "#L1##r确定制作#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足0个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
			}else */
			if(cm.haveItem(4000313,30) && cm.haveItem(4001126,200)&& cm.haveItem(4011007,2)&& cm.haveItem(4021009,1)&&  cm.getMeso()>=10000000 ){
				cm.gainMeso(-10000000);
				cm.gainItem(4000313,-30);
				cm.gainItem(4001126,-200);
				cm.gainItem(4011007,-2);
				cm.gainItem(4021009,-1);
				cm.gainItem(2044908,1);
          			cm.sendOk("制作成功！");
   cm.worldMessage(5, "恭喜玩家[" + cm.getPlayer().getName() + "]在市场飞天猪成功合成了必成卷轴！！！！！！");
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
		}
 	
    }
}
