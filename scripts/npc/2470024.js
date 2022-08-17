/*
功能-装备觉醒
脚本定制 技术支持 游戏顾问
唯一作者 - Care - 381991414
2017-5-28 18:33:40
 */


var Icon = Array(
    Array("睡脸", "#fEtc/ItemPotLifeInfo/1000/state/sleep/0#"),
    Array("星星", "#fUI/piggyBarMinigame/crunch/11#")
);
var status = 0;
var txt;

var myHsc;
var lists = null;
var sign = 0;


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
        txt = "\t\t\t\t #b#e" + Icon[1][1] + " 星辉璀璨 " + Icon[1][1] + "#k#n\r\n\r\n"
        //txt += "#L0#" + Icon[0][1] + " #r升华说明与介绍#l\r\n\r\n";
        //txt += "#L1#" + Icon[0][1] + " #b高阶武器分解#l#k\r\n\r\n";
        //txt += "#L7#" + Icon[0][1] + " #b升级银河副手#l#k\r\n\r\n";
		txt += "            #L14#" + Icon[0][1] + " #b法弗纳武器强化#l#k\r\n\r\n";
        txt += "            #L9#" + Icon[0][1] + " #b法弗纳防具强化#l#k\r\n\r\n";
		txt += "            #L13#" + Icon[0][1] + " #b特米武器强化#l#k\r\n\r\n";
		txt += "            #L11#" + Icon[0][1] + " #b漆黑装备强化#l#k\r\n\r\n";
		txt += "            #L12#" + Icon[0][1] + " #b神秘武器强化#l#k\r\n\r\n";
		txt += "            #L10#" + Icon[0][1] + " #b创世武器强化#l#k\r\n\r\n";
        //txt += "#L2#" + Icon[0][1] + " #b升级法弗纳武器#r+100属性#l#k\r\n\r\n";
        //txt += "#L3#" + Icon[0][1] + " #b升级埃苏布莱斯武器#r+150属性#l#k\r\n\r\n";
        //txt += "#L4#" + Icon[0][1] + " #b升级特米纳斯武器#r+180属性#l#k\r\n\r\n";
        //txt += "#L5#" + Icon[0][1] + " #b升级神秘之影武器（月）#r+250属性#l#k\r\n\r\n";
        //txt += "#L6#" + Icon[0][1] + " #b升级神秘之影武器（日）#r+350属性#l#k\r\n\r\n";
        //txt += "#L8#" + Icon[0][1] + " #b升级【男神】【女神】勋章+50属性，40boss,40无视,10总伤,18暴击等#l#k\r\n\r\n";
        cm.sendSimpleS(txt, 2, 2400010);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.sendOk("#b#r这里你可以升级装备！不仅在基础提升数值的程度上还可以通过火花的方式提升最高攻击/魔法，所以说，很强！#k#n");
                break;
            case 1:
                cm.dispose();
                cm.openNpc(2470019, "高阶武器分解");
                break;
                break;
            case 2:
                cm.dispose();
                cm.openNpc(2470019, "升级法弗纳武器");
                break;
            case 3:
                cm.dispose();
                cm.openNpc(2470019, "升级埃苏布莱斯武器");
                break;
            case 4:
                cm.dispose();
                cm.openNpc(2470019, "升级特米纳斯武器");
                break;
            case 5:
                cm.dispose();
                cm.openNpc(2470019, "升级神秘之影（月）");
                break;
            case 6:
                cm.dispose();
                cm.openNpc(2470019, "升级神秘之影（日）");
                break;
            case 7:
                cm.dispose();
                cm.openNpc(2470019, "银河副手升级");
                break;
			case 10:
                cm.dispose();
                cm.openNpc(2470019, "创世武器强化");
                break;
			case 11:
                cm.dispose();
                cm.openNpc(2470019, "漆黑套装强化");
                break;
			case 12:
                cm.dispose();
                cm.openNpc(2470019, "神秘武器强化");
                break;
			case 13:
                cm.dispose();
                cm.openNpc(2470019, "特米武器强化");
                break;
			case 14:
                cm.dispose();
                cm.openNpc(2470019, "法弗纳武器强化");
                break;	
            case 8:
                cm.dispose();
                cm.openNpc(2010003);
                break;
            case 9:
                cm.dispose();
                cm.openNpc(2010004);
                break;
        }
    }
}
