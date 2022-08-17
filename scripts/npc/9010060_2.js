/* NPC版权: 彩云岛
 NPC名称: 		小帮手
 MAP(地图ID):
 NPC类型: 		综合NPC
 制作人：故事丶
 */

var status = 0;
var typede = 0;
var slot = Array();
var dsa = "";
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
        if (status == 0) {
            var text = "";
            text = "#fMob/1210102.img/move/0##fMob/1210102.img/move/0##b追忆 - MS#fMob/1210102.img/move/0##fMob/1210102.img/move/0#\r\n";
            text += "#L1##b超级药水#r(免费)#k#l\r\n";
            text += "#L2##b雇佣商人#r(24小时)#l\r\n";
            text += "#L3##b皇家理发#r(免费)#l\r\n";
            text += "#L4##b管理员的祝福#r(BUFF)#l\r\n";
            cm.sendSimple(text);

        } else if (selection == 1) { //免费福利
            if (cm.getPlayer().getLevel() > 120) {
                cm.sendOk("等级120以下的玩家才可以领取。");
            } else if (cm.getSpace(2) < 1) {
                cm.sendOk("消耗道具栏空间不足,无法领取。");
            } else if (cm.getBossLog("免费药水") == 0) {
                cm.gainItemPeriod(2000005, 100, 1);
                cm.setBossLog("免费药水");
                cm.sendOk("领取成功,祝您游戏愉快");
            } else {
                cm.sendOk("#k今天已经领取了,请明天再来。");

            }
            cm.dispose();
        } else if (selection == 2) { //雇佣商人
            if (cm.getSpace(5) < 1) {
                cm.sendOk("现金道具栏空间不足,无法领取。");
            } else if (cm.getBossLog("每日雇佣") == 0) {
                cm.gainItemPeriod(5030019, 1, 1);
                cm.setBossLog("每日雇佣");
                cm.sendOk("领取成功,祝您游戏愉快");
            } else {
                cm.sendOk("#k今天已经领取了,请明天再来。");

            }
            cm.dispose();

        } else if (selection == 3) { //皇家理发
            if (cm.getPlayer().getLevel() < 150) {
                cm.sendOk("等级150以上的玩家才可以领取。");
            } else if (cm.getSpace(5) < 1) {
                cm.sendOk("特殊道具栏空间不足,无法领取。");
            } else if (cm.getBossLog("皇家理发") == 0) {
                cm.gainItemPeriod(5150040, 1, 1);
                cm.setBossLog("皇家理发");
                cm.sendOk("领取成功,祝您游戏愉快");
            } else {
                cm.sendOk("#k今天已经领取了,请明天再来。");

            }
            cm.dispose();

        } else if (selection == 4) { //BUFF
            cm.sendOk("#k敬请期待。");
            cm.dispose();
        }
    }
}
