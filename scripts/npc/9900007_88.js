var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple (""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n\t          "+ 小烟花 +"#r欢迎来到新手福利中心"+ 小烟花 +"\r\n           "+ 小烟花 +"#d本服10级后为5倍经验3倍爆率"+ 小烟花 +"#k\r\n"+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n               萌新#r点击拍卖#k进入#r新手福利#k\r\n\r\n                #b所有功能都可在拍卖找到\r\n\r\n        #d请绿色游戏，切勿作弊，后台捕捉直接封锁！#n#k#l");
        } else if (status == 1) {
            switch(selection) {
			case 0:
				cm.dispose();
				cm.openNpc(9201126,1);
            break;
            }
        }
    }
}