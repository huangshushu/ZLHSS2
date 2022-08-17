/*
*   制作：dgms
*   官网: http://www.caihongms.com
*   功能：武器商店
*   时间：2017年1月7日
*/
var status = -1;
var ico1 = "#fUI/Basic.img/icon/arrow#";

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
    } if (status == 0) {
        text = "#d#e|----------------- 综合商店 -----------------|#n#l"
		/*text += "#L181#" + ico1 + " #r元宝商店\t"
		text += "#L18#" + ico1 + " #r点卷商店\t"
		text += "#L20#" + ico1 + " #r抵用商店\t\r\n\r\n"
		text += "#L17#" + ico1 + " #r杂货商店#b\t"
		text += "#L21#" + ico1 + " #r货币商店#b\t"
		text += "#L10086#" + ico1 + " #r限购商店#b\t\r\n\r\n"
		text += "#L19#" + ico1 + " #r仓库管理\t"*/
        text += "#L0#" + ico1 + " #r副手商店#b\t\r\n\r\n"
       /* text += "#L1#" + ico1 + " #r弓箭手\t"
        text += "#L2#" + ico1 + " #r尖兵"
        text += "#L3#" + ico1 + " #r战士  "
        text += "#L4#" + ico1 + " #r飞侠(双刀)"
        text+="\r\n\r\n"
        text += "#L5#" + ico1 + " #r冒险家\t"
        text += "#L6#" + ico1 + " #r法师"
        text += "#L7#" + ico1 + " #r海盗  "
        text += "#L8#" + ico1 + " #r幻影"
        text+="\r\n\r\n"
        text += "#L9#" + ico1 + " #r恶魔猎手"
        text += "#L10#" + ico1 + " #r火炮"
        text += "#L11#" + ico1 + " #r夜光  "
        text += "#L12#" + ico1 + " #r双弩"
        text+="\r\n\r\n"
        text += "#L13#" + ico1 + " #r超能力者"
        text += "#L14#" + ico1 + " #r狂龙"
        text += "#L15#" + ico1 + " #r萌天使"
        text += "#L16#" + ico1 + "#r米哈尔#l"*/
        text += "\r\n\r\n\t\t\t\t\t#L99##r#e返回上一步#l"

        cm.sendSimple(text,0);
    } else if (status == 1) {
        if (selection == 0) {
            cm.dispose();
            cm.openShop(63);
        } else if (selection == 1) {
            cm.dispose();
            cm.openShop(7);
        }else if (selection == 2) {
            cm.dispose();
            cm.openShop(325);
        }else if (selection == 3) {
            cm.dispose();
            cm.openShop(10);
        }else if (selection == 4) {
            cm.dispose();
            cm.openShop(16);
        }else if (selection == 181) {
            cm.dispose();
            cm.openNpc(9900000,"jpzb1")
        }else if (selection == 10086) {
            cm.dispose();
            cm.openNpc(9900000,"限购商店")
        }else if (selection == 5) {
            cm.dispose();
            cm.openShop(25);
        }else if (selection == 6) {
            cm.dispose();
            cm.openShop(13);
        }else if (selection == 7) {
            cm.dispose();
            cm.openShop(58);
        }else if (selection == 8) {
            cm.dispose();
            cm.openShop(314);
        }else if (selection == 9) {
            cm.dispose();
            cm.openShop(65);
        }else if (selection == 10) {
            cm.dispose();
            cm.openShop(308);
        }else if (selection == 11) {
            cm.dispose();
            cm.openShop(313);
        }else if (selection == 12) {
            cm.dispose();
            cm.openShop(1033001);
        }else if (selection == 13) {
            cm.dispose();
            cm.openShop(1033001);
        }else if (selection == 14) {
            cm.dispose();
            cm.openShop(323);
        }else if (selection == 15) {
            cm.dispose();
            cm.openShop(324);
        }else if (selection == 16) {
            cm.dispose();
            cm.openShop(321);
        }else if (selection == 17) {
            cm.dispose();
            cm.openShop(41);
        }else if (selection == 18) {
            cm.dispose();
            cm.openNpc(9310475, 8);
        }else if (selection == 19) {
            cm.dispose();
            cm.openNpc(1530635, 998);
        }else if (selection == 20) {
            cm.dispose();
            cm.openNpc(9001016);
        }else if (selection == 21) {
            cm.dispose();
            cm.openNpc(9001016,"货币商店");
        }else if (selection == 99) {
            cm.dispose();
            cm.openNpc(1530635, 0);
        }
    } else {
        cm.dispose();
    }
}

