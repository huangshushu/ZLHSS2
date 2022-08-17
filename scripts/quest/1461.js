/* 
 5th Job Quests.
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
         qm.sendOk("考虑好后再来找我吧。");
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            qm.sendNext("据说，在太初的黑暗时期，女神们借助艾尔达创造了现在的世界。\r\n\r\n而且，听说无论是人类，还是精灵、魔族和龙族，其中都有极少数人获得了女神所传授的#b控制艾尔达的能力#k。");
        } else if (status == 1) {
            qm.sendYesNo("#fUI/tutorial.img/5skill/0/0#\r\n\r\n冒险岛的女神位于#b射手村的弓箭手培训中心#k，格兰蒂斯的女神位于#b万神殿的大神殿内部#k，绯红的女神位于#b堕落世界树的废弃营地#k。我想你肯定能找到女神的所在地。");
        } else if (status == 2) {
            qm.sendNext("如果你迷路了，可以随时来找我。\r\n\r\n#b(去见见分散在冒险岛各处的女神，然后再回来吧。)#k");
            qm.forceStartQuest();
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {
            qm.sendNext("你已经去见过女神啦。我就知道你能通过女神的考验。");
        } else {
            qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}
