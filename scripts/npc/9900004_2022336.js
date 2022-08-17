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
			text += "                #d强化礼包#l\r\n"//3
			text += ""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+""+大粉红爱心+"\r\n"
	        text += "        #L0#"+小烟花+"#r我要领取强化礼包#l\r\n\r\n"
			//text += "        #L1#"+小烟花+"#r我要领取浪人披风（紫）#v1102042#\r\n\r\n"
			
            cm.sendSimple(text);
        } else if (selection == 0) {

			if(cm.haveItem(2022336, 1)){
				cm.gainItem(2049100, 500);
				cm.gainItem(4005004, 500);
				cm.gainItem(2022336, -1);
				cm.sendOk("领取成功！");
				cm.dispose();
			}else{
            cm.sendOk("你的包里没有对应的礼包");
            cm.dispose();
			}
		}else if (selection == 1) {

			if(cm.haveItem(2022336, 1)){
				cm.gainItem(1102042, 1);
				cm.gainItem(2022336, -1);
				cm.sendOk("领取成功！");
				cm.dispose();
			}else{
            cm.sendOk("你的包里没有对应的礼包");
            cm.dispose();
			}
		}
    }
}
