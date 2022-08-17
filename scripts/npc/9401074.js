/*  
 *  功能：福利中心
 */

var status = 0;
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var eff1 = "#fEffect/CharacterEff/1112905/0/1#";//小红心
var tz3 = "#fEffect/CharacterEff/1082588/0/0#";  //红点
var tz4 = "#fEffect/CharacterEff/1082588/3/0#";  //蓝点
var wi8 = "#fUI/StarCityUI.img/Board_GameRank/user/myrank#";  //黄色条

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
        var selStr = "  "+wi8+"\r\n";
        selStr += "#L1#" + tz3 + "等级送礼#l";
        selStr += "#L2#" + tz3 + "在线奖励#l";
        selStr += "#L3#" + tz4 + "在线点劵#l";
        selStr += "#L4#" + tz4 + "每日签到#l\r\n\r\n\r\n";

        selStr += "#L5##v3800163# #fn黑体##fs15#全民大乐透 - #d千万点券福利奖池#l\r\n";
		selStr += "#L6##v3800162# #fn黑体##fs15##r超级幸运星 - #d元宝福利你定比例#l";
        //selStr += "#L6#" + eff + "武器破攻#l";
        //selStr += "#L7#" + eff + "喇叭商店#l\r\n\r\n";
        //selStr += "#L8#" + eff + "换放大镜#l\r\n\r\n";
        //selStr += "#L21##b" + eff + "购买251级秘药（#r#z2430979##k）#l\r\n";
        //selStr += "#L22##b" + eff + "趣味问答（8秒限时，速度要快哦）#l\r\n";
        cm.sendSimpleS(selStr, 2);
    } else if (status == 1) {
        switch (selection) {
            case 1:
                cm.dispose();
                cm.openNpc(9001225, "levelreward");
                break;
            case 2:
                cm.dispose();
                cm.openNpc(9001225, "在线奖励");
                break;
            case 3:
                cm.dispose();
                cm.openNpc(9001225, "在线点券");
                break;
            case 4://ExchangeMaple
                cm.dispose();
                cm.openNpc(9001225, "每日签到");
                break;
            case 5:
                cm.dispose();
                cm.openNpc(9001225, "点券赌博");
                break;
			 case 6:
                cm.dispose();
                cm.openNpc(9001225, "超级幸运星");
                break;
            default:
                cm.sendOk("该功能正在紧张进行制作中，请耐心等待。");
                cm.dispose();
                break;
        }
    }
}
