var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var eff = "#fEffect/CharacterEff/1051296/1/0#";
var eff1 = "#fEffect/CharacterEff/1112905/0/1#";
var ttt = "#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1

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
    if (cm.getMapId() == 180000001 || cm.getMapId() == 910340100 || cm.getMapId() == 910340200 || cm.getMapId() == 910340300 || cm.getMapId() == 910340400 || cm.getMapId() == 910340500 || cm.getMapId() == 910340000) {
        cm.sendOk("很遗憾，您因为在特殊地图无法使用此功能.")
        cm.dispose();
    } else if (status == 0) {
        var selStr = "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + " #e#d点卷市场#n#k" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "\r\n";
        selStr += "#L0#" + eff + " #b元宝购物#l  #L9#" + eff + " 功能道具#l  #L2#" + eff + " 购买点券#l\r\n";
        selStr += "#L3#" + eff + " #r稀有时装#l  #L4#" + eff + " 坐骑商店#l  #L5#" + eff + " 霸气椅子#l\r\n";
         selStr += "#L7#" + eff + " #d双倍经验#l  #L8#" + eff + " 道具卷轴#l  #L13#" + eff + " #r特殊商店#l\r\n";
         selStr += "#L10#" + eff + " #b伤害皮肤#l  #L11#" + eff + " 稀有宠物#l  #L12#" + eff + " 抵用商店#l\r\n";
        selStr += "\r\n" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "\r\n";
        selStr += "\r\n\t\t\t\t#L6##b" + ttt + " 返回上一页#l#k\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(1530637, 1);
                break;
            case 9:
                cm.dispose();
                cm.openNpc(1530637, 2);
                break;
            case 2:
                cm.dispose();
                cm.openNpc(9300011, 1);
                break;
            case 3:
                cm.sendOk("暂未开放！")
                cm.dispose();
                //cm.openNpc(1530637, 4);
                break;
            case 4:
                cm.dispose();
                cm.openNpc(1530637, 5);
                break;
            case 5:
                cm.dispose();
                //cm.openNpc(9900004);
                break;
            case 6:
                cm.dispose();
                cm.openNpc(1530635,0);
                break;
            case 7:
                cm.dispose();
                cm.openNpc(9900005, "shuangbei");
                break;
            case 8:
                cm.dispose();
                cm.openNpc(9900005, "daojujuanzhou");
                break;
            case 9:
                cm.dispose();
                cm.openNpc(9900005, "gndj");
                break;
            case 10:
                cm.dispose();
                cm.openNpc(1530635, 2003);
                break;
            case 11:
                cm.dispose();
                cm.openNpc(9900005, "0");
                break;
            case 12:
                cm.dispose();
                cm.openNpc(9900005, "16");
                break;
            case 13:
                cm.dispose();
                cm.openNpc(9900005, "qitashangdian");
                break;
            case 14:
                cm.dispose();
                cm.openNpc(9900005, "youxibaoku");
                break;
            case 15:
                cm.dispose();
                //cm.openNpc(9900005, "youxibaoku");	
                break;
        }
    }
}