/*
抽奖副本
*/
var status = 0;
var psrw = Array(
Array(2431473,1),
Array(2431474,1),
Array(2431765,1),
Array(2431898,1),
Array(2430521,1),
Array(2431915,1),
Array(2432015,1),
Array(2431950,1),
Array(2432007,1),
Array(2432029,1),
Array(2432031,1),
Array(2432078,1),
Array(2432085,1),
Array(2432309,1),
Array(2432347,1),
Array(2432582,1),
Array(2433003,1),
Array(2432291,1),
Array(2432328,1),
Array(2432733,1),
Array(2432806,1),
Array(2432995,1),
Array(2434084,1),
Array(2433735,1),
Array(2433736,1),
Array(2433809,1),
Array(2433811,1),
Array(2434277,1),
Array(2433051,1),
Array(2431393,1),
Array(2432497,1),
Array(2432518,1),
Array(2432552,1),
Array(2433069,1),
Array(2433292,1),
Array(2433293,1),
Array(2433497,1),
Array(2433511,1),
Array(2433707,1),
Array(2433836,1),
Array(2433881,1),
Array(2434037,1),
Array(2434082,1),
Array(2434083,1),
Array(2434142,1),
Array(2434143,1),
Array(2434235,1),
Array(2434236,1),
Array(2430261,1),
Array(2430263,1),
Array(2430534,1),
Array(2431697,1),
Array(2431778,1),
Array(2432295,1),
Array(2432449,1),
Array(2432581,1),
Array(2432724,1),
Array(2432635,1),
Array(2433053,1),
Array(2432996,1),
Array(2433860,1),
Array(2433862,1),
Array(2433864,1),
Array(2433865,1),
Array(2433884,1),
Array(2433946,1),
Array(2434161,1),
Array(2434275,1),
Array(2434515,1),
Array(2434517,1),
Array(2434603,1),
Array(2434618,1),
Array(2434649,1),
Array(2434690,1),
Array(2434737,1),
Array(2435036,1)//金龙鱼骑宠永久使用券
);
var rand = Math.floor(Math.random() * psrw.length);

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
        cm.sendYesNo("你如果拥有5w点券,可以在我这里抽奖,我包包里面有各种炫酷的坐骑是否想要试试手气，看您能获得什么?");
    } else if (status == 1) {
          if (cm.getChar().getCSPoints(1) < 50000) {
		cm.sendOk("穷了");
		cm.dispose();
         } else if (cm.getSpace(1) < 1 && cm.getSpace(2) < 1 && cm.getSpace(3) < 1 && cm.getSpace(4) < 1 && cm.getSpace(5) < 1) {
		cm.sendOk("你保证你背包的每一栏都有空位");
		cm.dispose();
            } else {
	   var ii = cm.getItemInfo();
	   cm.gainItem(psrw[rand][0],+psrw[rand][1]); //随机情迷道具
	   cm.gainNX(1,-50000); //减少1个使用的情迷道具
	   cm.sendOk("获取了 #v"+psrw[rand][0]+"# "+psrw[rand][1]+"个")
	  cm.worldSpouseMessage(0x15,"『坐骑抽奖』" + " : " + "玩家 " + cm.getName() + "获得了一个稀有坐骑,快去试试运气吧");

	   cm.dispose(); 
	}
		}
		}
