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
        var selStr = "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + " #e#d点装会场#n#k" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "\r\n";
        selStr += "#L3#" + eff + " #b帽子类#l  #L4#" + eff + " #b武器类#l  #L2#" + eff + " 戒指类#l\r\n";
         selStr += "#L7#" + eff + " #d上衣类#l  #L8#" + eff + " #r套装类#l  #L12#" + eff + " #d下装类#l\r\n";
         selStr += "#L10#" + eff + " #r脸饰类#l  #L16#" + eff + " #r披风类#l #L11#" + eff + " #b手套类#l";
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
                cm.openNpc(1530637, 15);
                break;
            case 2:
                cm.dispose();
                cm.openNpc(1530637, 11);
                break;
            case 3:
                cm.dispose();
                cm.openNpc(1530637, 9);
                break;
            case 4:
                cm.dispose();
                cm.openNpc(1530637, 10);
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
                cm.openNpc(1530637, 12);
                break;
            case 8:
                cm.dispose();
                cm.openNpc(1530637, 13);
                break;
            case 9:
                cm.dispose();
                cm.openNpc(9900005, "gndj");
                break;
            case 10:
                cm.dispose();
                cm.openNpc(1530637, 15);
                break;
            case 11:
                cm.dispose();
                cm.openNpc(1530637, 17);
                break;
            case 12:
                cm.dispose();
                cm.openNpc(1530637, 14);
                break;
            case 13:
                cm.dispose();
                cm.openNpc(9900005, "tszb");
                break;
            case 14:
                cm.dispose();
                cm.openNpc(1530637, 14);
                break;
            case 16:
                cm.dispose();
                cm.openNpc(1530637, 16);
                break;
            case 15:
                cm.dispose();
                //cm.openNpc(9900005, "youxibaoku");	
                break;
        }
    }
}
