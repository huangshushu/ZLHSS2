var epp = "#fEffect/SetItemInfoEff/33/9#";  //飘带
var ax = "#fEffect/CharacterEff/1112902/0/1#";  //蓝色爱心
var xxx = "#fEffect/CharacterEff/1032054/0/0#";  //选项两边
var aaa = "#fUI/UIWindow4/PQRank/rank/gold#";//hyuangguang

var a = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
    var selStr = "#d#e" + epp + "强化系统" + epp + "#l#k\r\n";
        //selStr += "#b#e\t\t\t#L14#" + aaa + "材料地图传送" + aaa + "#l#k\r\n";
		selStr +="#r#L1#"+xxx+"校长织田徽章"+xxx+"#l    #r#L2#"+xxx+"水晶枫叶徽章"+xxx+"#l \r\n";
		selStr +="#r#L3#"+xxx+"黄金休彼得曼"+xxx+"#l     #r#L51#"+xxx+"女武神心脏"+xxx+"#l \r\n";
		selStr +="#r#L5#"+xxx+"银河副手"+xxx+"#l"+"#r        "
		selStr +=" #r #L4#"+xxx+"神秘徽章"+xxx+"#l"
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 1:
            cm.dispose();
            cm.openNpc(2470018,"校长织田徽章"); //150武器制造
            break;
        case 50:
            cm.dispose();
            cm.openNpc(2470018,"透明披风强化"); //150武器制造
            break;
        case 51:
            cm.dispose();
            cm.openNpc(2470018,"女武神心脏"); //150武器制造
            break;
        case 2:
            cm.dispose();
            cm.openNpc(2470018,"水晶枫叶徽章"); //卷轴商城
            break;
        case 3:
            cm.dispose();
            cm.openNpc(2470018,"黄金休彼得曼徽章"); //卷轴商城
            break;
        case 4:
            cm.dispose();
            cm.openNpc(2470018,"神秘徽章"); //卷轴商城
            break;
        case 5:
            cm.dispose();
            cm.openNpc(2470018,"银河副手"); //140武器制造
            break;
			case 6:
            cm.dispose();
            cm.openNpc(2470018,"制作特米武器"); //强化商城
            break;
			case 7:
            cm.dispose();
            cm.openNpc(2470018,"mfzz"); //强化商城
            break;
			case 8:
            cm.dispose();
            cm.openNpc(2470018,"shehfy"); //强化商城
            break;
			case 9:
            cm.dispose();
            cm.openNpc(2470018,"时装自选"); //结晶合成
            break;
			case 10:
            cm.dispose();
            cm.openNpc(1540008,2); //座椅制造
            break;
			case 11:
            cm.dispose();
            cm.openNpc(2470018,"mxzx"); //强化商城
            break;
			case 12:
            cm.dispose();
            cm.openNpc(2470018,"qcdh"); //强化商城
            break;
			case 13:
            cm.dispose();
            cm.openNpc(2470018,"jjhc"); //强化商城
            break;
			case 14:
            cm.dispose();
            cm.openNpc(2470018,"cldt"); //强化商城
            break;
			case 15:
            cm.dispose();
            cm.openNpc(2470018,"制作神秘防具"); //强化商城
            break;


        }
    }
}

