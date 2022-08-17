var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
//var tz = "#fEffect/CharacterEff/1082565/4/0#";  //兔子粉

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
            cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.");
            cm.dispose();
        }  
    else if (status == 0) {
        //var selStr = " ┏━━━━【#e#r目前最新更新2016 12 21#n#k】━━━━┓\r\t   亲爱的[#b#e#h ##n#k],欢迎来到回顾冒险岛服务中心\r\n";
		var selStr = " \t#b#v2210000##v2210000##v2210000##v3994064##v3994065##v3994071##v3994082##v2210000##v2210000##v2210000##k\r\n";
		selStr += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
        selStr += "    #e#r【亲爱的[#b#e#h ##n#k],#e#r这里是兑换币兑换中心】\r\n";
		selStr += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
		//selStr += " 点卷：#r"+cm.getPlayer().getCSPoints(1)+"#d\t抵用券：#r"+cm.getPlayer().getCSPoints(2)+"#d\t充值积分:#r"+cm.getmoneyb()+"#k\r\n";
        //selStr += " #v3994929##v4031311##v3994929##L99##e#r点我进入新年活动#l#v3994929##v4031311##v3994929#\r\n\r\n";
        selStr += " #L1##e#r#v4310014#兑换物品#l#L2##b#v4310014#兑换徽章#l\r\n\r\n";
		//selStr += " #L4##e#r#v4310028#天卡购买#l    #L5##b#v4310014#兑换#l\r\n\r\n";
		//selStr += " #L4##e#r#v4310028#天买#l\r\n";
        //selStr += " #L4##e#r#v3991000#每日奖励#l#L6##b#v3994017#游戏商城#l#L7##d#v3991026#点券抽奖#l\r\n\r\n";
        //selStr += " #L10##e#r#v3991015#装备制作#l#L8##b#v3994021#限时商城#l#L9##d#v3991041#点卷兑换#l\r\n\r\n";
        //selStr += " #L15##e#r#v3991015#材料兑换#l#L12##b#v3994021#领取点卷#l#L77##d#v3991041#排行系统#l\r\n\r\n";//
		//selStr += " #L19##e#r#v3991024#副本蛋抽奖#l#L13##b#v3994024#官方网站#l#L11##d#v3991050#箱子兑换#l\r\n\r\n";
		 //selStr += "   #b#L77# 排行系统#l#k #L78# 在线奖励#l\r\n\r\n";
		 //selStr += "  #L17# 充值礼包#l  #L14##e#r#v3991024#充值网站#l\r\n\r\n";

		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.warp(910000000);
            cm.dispose();
            break;
		case 1:
            cm.dispose();
            cm.openNpc(9300000,5);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9300000,6);
            break;
        case 3:
            cm.dispose();
            //cm.openNpc(9310100,0);
	    cm.openShop(103);
            break;
        case 4:
            cm.dispose();
            cm.openNpc(9300000,3);
            break;
        case 5:
            cm.dispose();
            cm.openNpc(9300000,4);
            break;
        case 6:
            cm.dispose();
            cm.openNpc(9900004,9);
            break;
        case 7:
            cm.dispose();
            cm.openNpc(9900004,8);
            break;
        case 8:
            cm.dispose();
           cm.openShop(6);
            break;
        case 9:
            cm.dispose();
            cm.openNpc(9900004,26);
            break;
        case 10:
            cm.dispose();
            cm.openNpc(9310060,0);
            break;
        case 11:
            cm.dispose();
            cm.openNpc(9000017,2);
            break;
		case 14:
            cm.dispose();
            cm.openWeb("http://wpa.qq.com/msgrd?V=1&Uin=1342041396&Site");
			break;
	    case 12:
            cm.dispose();
            cm.openNpc(9900004,20);
			 break;
		case 13:
            cm.dispose();
            cm.openWeb("http://dwz.cn/4Mm3CI");
			 break;
		case 15:
            cm.dispose();
            cm.openNpc(2020000,0);
            break;
		case 16:
            cm.dispose();
            cm.openNpc(9900004,5);
            break;
        case 17:
            cm.dispose();
            cm.openNpc(9050003,0);
            break;
	    case 77:
            cm.dispose();
            cm.openNpc(9040004,0);
            break;
	    case 78:
            cm.dispose();
            cm.openNpc(9900004,9999);
            break;
		case 18:
            cm.dispose();
            cm.openNpc(9050000,0);
            break;
	    case 99:
            cm.dispose();
            cm.openNpc(9250010,0);
            break;
	    case 19:
            cm.dispose();
            cm.openNpc(9310097,0);
            break;
		}
    }
}
