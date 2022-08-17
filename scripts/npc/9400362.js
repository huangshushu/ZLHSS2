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

        var txt = "#d ┏━━━━━━━━#b币种自助售货机#d━━━━━━━━┓#k\r\n";
		//txt += "　  #L998##r" + icon2 + " #d杂货商店#l   #L997##r" + icon2 + " #d金币商店#l   #L999##r" + icon2 + " #d点劵商店#l\r\n";
        txt += "    #L0##r#d#v4310282#RISE币#l#L1##r#d#v4310209#水波币#l#L2##r#d#v4310199#烙印币#l\r\n\r\n";
        txt += "    #L3##r#d#v4310195#英雄币#l#L4##r#d#v4310218#神秘币#l#L5##r#d#v4310242#冬日币#l\r\n\r\n";
		txt += "    #L6##r#d#v4310097#贝勒币#l#L7##r#d#v4310143#首领币#l#L8##r#d#v4310149#游戏币#l\r\n\r\n";
		txt += "    #L9##r#d#v4310176#满月币#l#L10##r#d#v4310253#坐骑币#l#L11##r#d#v4310043#星岩币#l\r\n\r\n";
		txt += "    #L12##r#d#v4310260#创世精髓#l\r\n\r\n";
       // txt += "　\r\n\r\n";
        //txt += "　#l\r\n";
        //txt += "　#L5##b#e" + icon3 + " 购买喇叭#l#L7#" + icon3 + " 购买石头#l#L8#" + icon3 + " 抵用商城#l\r\n";
        //txt += "　#L9##b" + icon3 + " 购买 [ 150 ] 的武器 #r※ 一个帐号限购两个 ※#l#k\r\n\r\n";

        cm.sendSimpleS(txt, 2);
    } else if (status == 1) {
        switch (selection) {
			case 0:
                cm.dispose();
                cm.openShop(1000);
				break;
			case 1:
                cm.dispose();
                cm.openShop(1110);
				break;
			case 2:
                cm.dispose();
                cm.openShop(1002);
				break;
			case 3:
                cm.dispose();
                cm.openShop(500);
				break;
			case 4:
                cm.dispose();
                cm.openShop(505);
				break;
			case 5:
                cm.dispose();
                cm.openShop(1111);
				break;
			case 6:
                cm.dispose();
                cm.openShop(1006);
				break;
			case 7:
                cm.dispose();
                cm.openShop(1008);
				break;
			case 8:
                cm.dispose();
                cm.openShop(1007);
				break;
			case 9:
                cm.dispose();
                cm.openShop(1009);
				break;
			case 10:
                cm.dispose();
                cm.openShop(9071001);
                break;
			case 11:
                cm.dispose();
                cm.openShop(1011);
                break;
			case 12:
                cm.dispose();
                cm.openShop(1010);
                break;
        }
    }
}