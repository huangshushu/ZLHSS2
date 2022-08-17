var 大粉红爱心 = "#fItem/Etc/0427/04270001/Icon8/4#";
var 桃花 ="#fMap/MapHelper/weather/rose/4#";
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
			text += ""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+"\r\n"//3
			text += "                时装赞助盒子#l\r\n"//3
			text += ""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+"\r\n"
	        text += "    #L0#"+小烟花+"#r我要领取全属性100攻魔100专属时装#v1042329##l\r\n\r\n"
			text += "    #L1#"+小烟花+"#r我要领取全属性100攻魔100专属时装#v1032024##l\r\n\r\n"
			text += "    #L2#"+小烟花+"#r我要领取全属性100攻魔100专属时装#v1702486##l\r\n\r\n"//
			//text += "    #L3#"+小烟花+"#r我要领取全属性168攻魔168专属时装#v5010044##l\r\n\r\n"
			//text += "    #L4#"+小烟花+"#r我要领取全属性168攻魔168专属时装#v1032234##l\r\n\r\n"
			//text += "    #L5#"+小烟花+"#r我要领取全属性168攻魔168专属时装#v1082574##l\r\n\r\n"
			//text += "    #L6#"+小烟花+"#r我要领取全属性168攻魔168专属时装#v1702630##l\r\n"
			
            cm.sendSimple(text);
        } else if (selection == 0) {

			if(cm.haveItem(2022428, 1)){
				cm.gainItem(1042329,100,100,100,100,0,0,100,100,0,0,0,0,0,0);
				cm.gainItem(2022428, -1);
				cm.sendOk("领取成功！");
				cm.dispose();
			}else{
            cm.sendOk("你的包里没有对应的礼包");
            cm.dispose();
			}
		}else if (selection == 1) {

			if(cm.haveItem(2022428, 1)){
				cm.gainItem(1032024,100,100,100,100,0,0,100,100,0,0,0,0,0,0);
				cm.gainItem(2022428, -1);
				cm.sendOk("领取成功！");
				cm.dispose();
			}else{
            cm.sendOk("你的包里没有对应的礼包");
            cm.dispose();
			}
		}else if (selection == 2) {

			if(cm.haveItem(2022428, 1)){
				cm.gainItem(1702486,100,100,100,100,0,0,100,100,0,0,0,0,0,0);
				cm.gainItem(2022428, -1);
				cm.sendOk("领取成功！");
				cm.dispose();
			}else{
            cm.sendOk("你的包里没有对应的礼包");
            cm.dispose();
			}
		}else if (selection == 3) {

			if(cm.haveItem(2022428, 1)){
				cm.gainItem(5010044,888,888,888,888,0,0,168,168,0,0,0,0,0,0);
				cm.gainItem(2022428, -1);
				cm.sendOk("领取成功！");
				cm.dispose();
			}else{
            cm.sendOk("你的包里没有对应的礼包");
            cm.dispose();
			}
		}else if (selection == 4) {

			if(cm.haveItem(2022428, 1)){
				cm.gainItem(1032234,168,168,168,168,0,0,168,168,0,0,0,0,0,0);
				cm.gainItem(2022428, -1);
				cm.sendOk("领取成功！");
				cm.dispose();
			}else{
            cm.sendOk("你的包里没有对应的礼包");
            cm.dispose();
			}
		}else if (selection == 5) {

			if(cm.haveItem(2022428, 1)){
				cm.gainItem(1082574,168,168,168,168,0,0,168,168,0,0,0,0,0,0);
				cm.gainItem(2022428, -1);
				cm.sendOk("领取成功！");
				cm.dispose();
			}else{
            cm.sendOk("你的包里没有对应的礼包");
            cm.dispose();
			}
		}else if (selection == 6) {

			if(cm.haveItem(2022428, 1)){
				cm.gainItem(1702630,168,168,168,168,0,0,168,168,0,0,0,0,0,0);
				cm.gainItem(2022428, -1);
				cm.sendOk("领取成功！");
				cm.dispose();
			}else{
            cm.sendOk("你的包里没有对应的礼包");
            cm.dispose();
			}
		}
    }
}
