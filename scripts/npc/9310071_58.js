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
            text += "#r欢迎来到天使冒险岛Ver.079【以下装备为全属性10】\r\n "
            text += "#r#L1#帽子#l#L2#套装#l#L3#披风#l#L4#手套#l#L5#鞋子#l#L6#透明#l#L7#武器#l\r\n\r\n"
            text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
		    cm.sendSimple(text);
       } else if (selection == 1) {//未来之城
            cm.openNpc(9310071, 71);
        
        } else if (selection == 2) {//130
            cm.openNpc(9310071, 72);
        
        } else if (selection == 3) {//140
            cm.openNpc(9310071, 73);
       
        } else if (selection == 4) {//血衣
            cm.openNpc(9310071, 74);
        
        } else if (selection == 5) {//血衣
            cm.openNpc(9310071, 75);
        
        } else if (selection == 6) {//血衣
            cm.openNpc(9310071, 76);
        
        } else if (selection == 7) {//血衣
            cm.openNpc(9310071, 78);

        } else if (selection == 8) {//血衣
            cm.openNpc(9310071, 57);

        } else if (selection == 10) {//血衣
            cm.openNpc(9330078, 98);

        } else if (selection == 11) {//血衣
            cm.openNpc(9330078, 99);
        } else if (selection == 20) {//血衣
            cm.openNpc(9310071, 66);
        
        } 

    }
}
