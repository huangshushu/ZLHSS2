var 礼包物品 = "#v1302000#";
var x1 = "1302000,+1";// 物品ID,数量
var x2;
var x3;
var x4;
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var 粉色礼物盒 = "#fMap/MapHelper.img/weather/lovelypartybear/6#";
var 黄色笑脸气球 = "#fMap/MapHelper.img/weather/birthday/0#";
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
            text += "#r欢迎来到冒险岛Ver.079【感谢经济优越玩家的赞助】\r\n【注 购买礼包②需先购礼包① 礼包③需先购礼包②这样子】 \r\n#v4001465#领下一礼包请脱下勋章#v4001465#您的赞助积分为：#r"+cm.getzb()+"#k#n#d\r\n"
            text += " #L7##v4033613#赞助积分商店#l#L0#  #v4032521#花费88积分购买超值礼包#l\r\n #L1##v4031547#花费100积分购买礼包①#l#L2#花费200积分购买②#l\r\n #L3##v4031548#花费300积分购买礼包③#l#L4#花费400积分购买④#l\r\n #L5##v4031549#花费1000积分购买礼包⑤#l#L6#花费2000积分购买⑥#l\r\n\r\n"


            text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
		    cm.sendSimple(text);
        } else if (selection == 0) {//剑
            cm.openNpc(9900004,107);
        } else if (selection == 1) {//剑
            cm.openNpc(9900004,101);
        
        } else if (selection == 2) {//刀
            cm.openNpc(9900004,102);
        
        } else if (selection == 3) {//长杖
            cm.openNpc(9900004,103);
       
        } else if (selection == 4) {//枪
            cm.openNpc(9900004,104);
        
        } else if (selection == 5) {//矛
            cm.openNpc(9900004,105);
        
        } else if (selection == 6) {//弓
            cm.openNpc(9900004,106);
             } else if (selection == 7) {//弓
            cm.openNpc(9900004,100);
             } else if (selection == 8) {//弓
            cm.openNpc(9900004,109);     
        } 

    }
}

