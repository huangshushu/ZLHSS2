var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var icon0 = "#fUI/GuildMark/Mark/Etc/00009001/1#"
var icon1 = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"; //开始条件
var icon2 = "#fUI/UIWindow2/AdditionalOptionTooltip/epic#";//A图标
var icon3 = "#fEffect/ItemEff/1004122/effect/default/8#"
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
    if (cm.getMapId() == 180000001) {
        cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
        cm.dispose();
    } else if (status == 0) {

        var txt = "#d ┏━━━━━━━━━━#b点卷商城#d━━━━━━━━━━┓#k\r\n\r\n";
        txt += "　　 #d" + icon0 + " 点卷：#r" + cm.getPlayer().getCSPoints(1) + "#d　　　　" + icon0 + " 抵用卷：#r" + cm.getPlayer().getCSPoints(2) + "#k\r\n";
        txt += "　#L0##r" + icon2 + " #d购买消耗卷轴#l    #L2##r" + icon2 + " #d购买功能道具#l\r\n\r\n";
        txt += "　#L1##r" + icon2 + " #d购买伤害皮肤#l    #L3##r" + icon2 + " #d购买玩具椅子#l\r\n\r\n";
		txt += "　#L4##r" + icon2 + " #d购买稀有神宠#l    #L6##r" + icon2 + " #d购买稀有点装#l\r\n\r\n";
       // txt += "　\r\n\r\n";
        //txt += "　#l\r\n";
        //txt += "　#L5##b#e" + icon3 + " 购买喇叭#l#L7#" + icon3 + " 购买石头#l#L8#" + icon3 + " 抵用商城#l\r\n";
        //txt += "　#L9##b" + icon3 + " 购买 [ 150 ] 的武器 #r※ 一个帐号限购两个 ※#l#k\r\n\r\n";
        txt += "#d ┗━━━━━━━━━━━━━━━━━━━━━━━━┛#k";
        cm.sendSimpleS(txt, 2);
    } else if (status == 1) {
        switch (selection) {
            case 0://购买时装
                cm.dispose();
                cm.openNpc(9001014);
                break;
            case 1://商城道具
                cm.dispose();
                cm.openNpc(9310475, 10);
                break;
            case 2://商城道具
                cm.dispose();
                cm.openNpc(9001015);
                break;
            case 3://购买椅子
                cm.dispose();
                cm.openNpc(9310475, 12);
                break;
            case 4://购买玩具
                cm.dispose();
                cm.openNpc(9310073,1);//cm.openNpc(9310475, 13);
                break;
            case 5://购买喇叭
                cm.dispose();
                cm.openNpc(9310475, 14);
                break;
            case 6://购买骑宠
                cm.dispose();
                cm.openNpc(9330234);
                break;
            case 7://购买石头
                cm.dispose();
                cm.openNpc(9310475, 16);
                break;
            case 8://抵用商城
                cm.dispose();
                cm.openNpc(9001016);//cm.openNpc(2490002, 45);
                break;
            case 9://购买武器
                cm.dispose();
                cm.openNpc(9310475, 17);
                break;
        }
    }
}