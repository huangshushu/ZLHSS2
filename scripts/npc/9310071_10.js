var 礼包物品 = "#v1302000#";
var x1 = "1302000,+1";// 物品ID,数量
var x2;
var x3;
var x4;
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
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
			if(cm.getJob() >= 0 && cm.getJob()<= 522 && cm.hasSkill(1017) == false){
			cm.teachSkill(1017,1,1);
			}else if(cm.getJob() >=1000 || cm.getJob() <= 2112 && cm.hasSkill(20001019) == false){
			cm.teachSkill(20001019,1,1);
			}
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
            text += "#r欢迎来到冒险岛Ver.079 \r\n『兑换请注意背包空间 避免损失』\r\n "
            text += "#r#L1#兑换经验#l     #L2#兑换金币#l  #L20#购买双倍经验\r\n #L3#兑换点卷#l     #L4#兑换材料#l\r\n #L5#购买材料#l     #L10#兑换剪刀#l\r\n #L7#兑换红色武器#l #L6#兑换必成卷#l \r\n #L9#兑换宝石卷轴#l #L8#兑换酷炫翅膀#l  \r\n #L11#回收暴君装备#l #L12#回收必成小暴君#l  \r\n\r\n "
            text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
		    cm.sendSimple(text);
       } else if (selection == 20) {//水晶合成
            cm.openNpc(9310071, 777);
       } else if (selection == 11) {//水晶合成
            cm.openNpc(9310071, 200);
       } else if (selection == 12) {//水晶合成
            cm.openNpc(9310071, 201);
       } else if (selection == 1) {//水晶合成
            cm.openNpc(9310071, 50);
        
        } else if (selection == 2) {//130
            cm.openNpc(9310071, 51);
        
        } else if (selection == 3) {//140
            cm.openNpc(9310071, 52);
       
        } else if (selection == 4) {//血衣
            cm.openNpc(9310071, 53);
        
        } else if (selection == 5) {//血衣
            cm.openNpc(9310071, 54);
        
        } else if (selection == 6) {//血衣
            cm.openNpc(9310071, 55);
        
        } else if (selection == 7) {//血衣
            cm.openNpc(9310071, 56);

        } else if (selection == 8) {//血衣
            cm.openNpc(9310071, 57);

        } else if (selection == 10) {//血衣
            cm.openNpc(9310071, 53);

        } else if (selection == 9) {//血衣
            cm.openNpc(9310071, 77);
        } else if (selection == 13) {//血衣
            cm.openNpc(9310071, 88);
        } else if (selection == 20) {//血衣
            cm.openNpc(9310071, 66);
        
        } 

    }
}