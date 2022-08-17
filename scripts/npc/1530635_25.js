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
        var selStr = "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + " #e#r元宝商城#n#k" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "\r\n";
        selStr += "#L0#" + eff + " #b装备会场#l  #L17#" + eff + " #b元宝椅子#l  #L2#" + eff + " 元宝点装#l\r\n";
        selStr += "#L3#" + eff + " #b元宝服饰#l  #L4#" + eff + " 元宝饰品#l\r\n";
        selStr += "\r\n" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "\r\n";
        selStr += "\r\n\t\t\t\t#L6##b" + ttt + " 返回上一页#l#k\r\n";
        cm.sendSimpleN(selStr, 716, 2400010);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(1530637, 1);
                break;
            case 17:
                cm.dispose();
                cm.openNpc(2400009, "ybyz");
                break;
            case 2:
                cm.dispose();
                cm.openNpc(2400010, "ybdz");
                break;
            case 3:
                cm.dispose();
                cm.openNpc(2400010, "ybmz");
                break;
            case 4:
                cm.dispose();
                cm.openNpc(2400010, "ybsp");
                break;
            case 5:
                cm.dispose();
                cm.openNpc(9900004,"yzcj");
                break;
            case 6:
                cm.dispose();
                cm.openNpc(1530635,0);
                break;
            case 7:
                cm.dispose();
                cm.openNpc(9900005, "sbsd");
                break;
            case 8:
                cm.dispose();
                cm.openNpc(9900005, "qtsc");
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
                cm.openNpc(9900005, "mcgm");
                break;
            case 12:
                cm.dispose();
                cm.openNpc(9900005, "dysd");
                break;
            case 13:
                cm.dispose();
                cm.openNpc(9900005, "tszb");
                break;
            case 14:
                cm.dispose();
                cm.openNpc(9900005, "youxibaoku");
                break;
            case 16:
                cm.dispose();
                cm.openNpc(1530637, 6);
                break;
            case 15:
                cm.dispose();
                //cm.openNpc(9900005, "youxibaoku");	
                break;
        }
    }
}
