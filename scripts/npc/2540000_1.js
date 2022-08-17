/* 
 *
 *  
 *  功能：阿丽莎的思念体
 *  
 *
 */

/* global cm */

var status = -1;
var sel = -1;
var index = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case 0://上一步
            status--;
            break;
        case 1://下一步
            status++;
            break;
    }
    switch (status) {
        case 0:
            cm.setInGameCurNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, false, false);
            cm.setInGameCurNodeEventEnd(true);
            cm.sendNextNoESC("莫非......真没想到你会来这里！你真的很了不起！")
            break
        case 1:
            cm.sendNextNoESC("为纪念。。。。")
            break
        case 2:
            cm.sendNextNoESC("你真的完成了。。。。")
            break
        case 3:
            cm.warp(992000000)
            cm.dispose()
            cm.openNpc(2540000, 2)
            break
    }
}
