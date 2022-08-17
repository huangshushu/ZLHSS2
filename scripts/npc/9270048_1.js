var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";

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
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";		
			text += "           "+小烟花 +"#r欢迎来到月月冒险岛中介系统#k"+小烟花 +"\r\n";
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
            text += "   #r#L1#"+小烟花+"#v4310149#兑换时装强化石"+小烟花+"#l   #L2#"+小烟花+"#v4000463#互换点卷"+小烟花+"#l#k\r\n\r\n"//3
            text += "   #b#L3#"+小烟花+"#v4000313#兑换点卷"+小烟花+"#l    #L4#"+小烟花+"#v4001126#互换点卷"+小烟花+"#l#k\r\n\r\n"//3
            
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9270048,5);
        } else if (selection == 2) {
		cm.openNpc(9270048,6);
        } else if (selection == 3) {
		cm.openNpc(9270048,7);
        } else if (selection == 4) {
		cm.openNpc(9270048,8);
        } else if (selection == 5) {
		cm.openNpc(9000018, 65);
        } else if (selection == 6) {
		cm.openNpc(9000018, 66);
        } else if (selection == 7) {
		cm.openNpc(9000018, 67);
        } else if (selection == 8) {
		cm.openNpc(9000018, 68);
        } else if (selection == 9) {
		cm.openNpc(9000018, 69);
        } else if (selection == 10) {
		cm.openNpc(9000018, 610);
	}
    }
}