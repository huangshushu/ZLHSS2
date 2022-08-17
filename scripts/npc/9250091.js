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
            text += "#r欢迎来到天使冒险岛Ver.079【感谢经济优越玩家的赞助】 "
            text += "#r\r\n请选择您的赞助礼包【本服平民耐玩同样超神】 \r\n"
            text += "#L0#  #v4032521#66元VIP礼包【单独购买】#l\r\n #L1# #v4031546#一百元赞助礼包#l\r\n #L2##v4031547#三百元赞助礼包#l\r\n #L3##v4031548#五百元赞助礼包#l\r\n #L4##v4031549#一千元赞助礼包#l\r\n #L5##v4300000#两千元赞助礼包#l\r\n #L6##v4301000#四千元赞助礼包#l\r\n\r\n"


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
        
        } 

    }
}

