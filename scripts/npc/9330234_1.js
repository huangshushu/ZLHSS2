var status = 0;

var eff = "#fEffect/CharacterEff/1112905/0/1#"; //
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //彩光
var epp1 = "#fEffect/CharacterEff/1082312/2/0#"; //彩光1
var axx = "#fEffect/CharacterEff/1051294/0/0#";  //爱心
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var ppp = "#fEffect/CharacterEff/1112907/4/0#"; //泡炮 
var epp3 = "#fEffect/CharacterEff/1112908/0/1#";  //彩光3
var axx1 = "#fEffect/CharacterEff/1062114/1/0#";  //爱心
var zs = "#fEffect/CharacterEff/1112946/2/0#";  //砖石粉
var zs1 = "#fEffect/CharacterEff/1112946/1/1#";  //砖石蓝
var dxxx = "#fEffect/CharacterEff/1102232/2/0#"; //星系
var tz = "#fEffect/CharacterEff/1082565/2/0#";  //兔子蓝
var tz1 = "#fEffect/CharacterEff/1082565/4/0#";  //兔子粉
var tz5 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";////美化2
var tz20 = "#fEffect/CharacterEff/1114000/1/0#";  //红星花

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
        } 
    else if (status == 0) {
        var selection = "        #d#e客官里边请~这里是普通服装中心~!#n\r\n#k\r\n"//"#l#L12#"+tz20+"129新时装"+tz20+"#l#L10#"+tz20+"情侣专卖"+tz20+"#l#L8#"+tz20+"稀有效果"+tz20+ 
		    selection += ""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+"";
			selection += "#L1##b"+tz20+"点装帽子"+tz20+"#l#L4##d"+tz20+"点装上衣"+tz20+"#l#L7##r"+tz20+"点装武器"+tz20+ "#l\r\n";
			selection += "#L2##b"+tz20+"点装套服"+tz20+"#l#L5##d"+tz20+"点装裤子"+tz20+"#l#L8##r"+tz20+"点装披风"+tz20+"\r\n";
		    selection += "#L3##b"+tz20+"点装手套"+tz20+"#l#L6##d"+tz20+"点装鞋子"+tz20+"#l#L9##r"+tz20+"点装戒指"+tz20+"#l\r\n\r\n";
			selection += "\t" + "#g 时装推荐#v1115014##v1115102##v1102841##v1102913##v1051410##v1051411#           \r\n";
			selection += ""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+"";
			cm.sendSimple(selection);
    } else if (status == 1) {
        switch (selection) {
			        case 1:
            cm.dispose();
            cm.openNpc(9310376,"点装帽子");
            break;
			        case 2:
            cm.dispose();
            cm.openNpc(9310376,"点装套服");
            break;
			        case 3:
            cm.dispose();
            cm.openNpc(9310376,"点装手套");
            break;
			        case 4:
            cm.dispose();
            cm.openNpc(9310376,"点装上衣");
            break;
			        case 5:
            cm.dispose();
            cm.openNpc(9310376,"点装裤子");
            break;
			        case 6:
            cm.dispose();
            cm.openNpc(9310376,"点装鞋子");
            break;
			        case 7:
            cm.dispose();
            cm.openNpc(9310376,"点装武器");
            break;
			        case 8:
            cm.dispose();
            cm.openNpc(9310376,"点装披风");
            break;
			        case 9:
            cm.dispose();
            cm.openNpc(9310376,"点装戒指");
            break;
			case 10:
            cm.dispose();
            cm.openNpc(9310376,"shizhuangqinglv");
            break;
			case 11:
            cm.dispose();
            cm.openNpc(9310376,"shizhuangxinjia");
            break;
			case 12:
            cm.dispose();
            cm.openNpc(9310376,"shizhuangjueban");
            break;
		}
    }
}