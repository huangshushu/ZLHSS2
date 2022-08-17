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
			text += "           "+小烟花 +"#r欢迎来到月月冒险岛道具兑换#k"+小烟花 +"\r\n";
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
            text += "#r#L1#"+ 小烟花 +"#v4000487#兑换道具#l        #L2#"+ 小烟花 +"#v4170012#兑换必成卷#l\r\n"
            text += "#b#L3#"+ 小烟花 +"#v4032398#兑换道具#l        #L4#"+ 小烟花 +"#v4310143#兑换道具#l\r\n"
            text += "#r#L11#"+ 小烟花 +"#v4310025#兑换装备道具#l    \r\n"//    #L6#"+ 小烟花 +"#v4310149#兑换道具#l
            text += "#b#L7#"+ 小烟花 +"#v4310058#兑换暴君装备#l    #L5#"+ 小烟花 +"#v4170018#兑换装备道具#l  \r\n"//#L5#"+ 小烟花 +"#v4170018#兑换装备道具#l     
            text += "#r#L8#"+ 小烟花 +"#v4310100#兑换漩涡装备#l    #L9#"+ 小烟花 +"#v4310098#兑换贝勒德装备#l\r\n"
			text += "#b#L10#"+ 小烟花 +"#v4310156#兑换埃苏装备#l\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {//钓鱼币
			cm.openNpc(9270048, 9);
			
        } else if (selection == 2) {//必成蛋
			cm.openNpc(9270048, 10);
			
        } else if (selection == 3) {//出席图章
			cm.openNpc(9270048, 11);
			
        } else if (selection == 4) {//BOSS币
			cm.openNpc(9270048, 12);
			
        } else if (selection == 5) {//点卷抽奖蛋
			cm.openNpc(9270048, 13);
			
        } else if (selection == 6) {//真棒
			cm.openNpc(9270048, 14);
			
        } else if (selection == 7) {//暴君币
			cm.openNpc(9270048, 15);
			
        } else if (selection == 8) {//漩涡币
			cm.openNpc(9270048, 16);
			
        } else if (selection == 9) {//贝勒德币
			cm.openNpc(9270048, 17);
			
        } else if (selection == 10) {//埃苏币
			cm.openNpc(9270048, 18);
			
		} else if (selection == 11) {//勇闯禁地币
			cm.openNpc(9270048, 19);
		}
    }
}