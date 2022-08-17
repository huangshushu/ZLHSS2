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
        case 0: {
            cm.setInGameCurNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, false, false);
            cm.setInGameCurNodeEventEnd(true);
            cm.sendNextNoESC("#h #，塔的里面怎么样？")
            break
        }
        case 1:
            cm.sendNextNoESC("作为你努力探险塔的精神，我给你准备了丰厚的奖励")
            break
        case 2:
            cm.setInGameCurNodeEventEnd(true);
            cm.setInGameDirectionMode(false, false, false, false);
            cm.sendNextNoESC("这里是奖励的代码，自由发挥。。。")
            cm.dispose()
            break
    }

}
