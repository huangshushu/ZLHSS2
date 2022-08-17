/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：冒险百科
 */
var a = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
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
        var selStr = "┏                                                  ┓";
		selStr += "\r\n\t\t\t\t   #d要相信团队的力量。#k\r\n";
        selStr += "\t\t\t#L1#返回目录#l\r\n\r\n";
		selStr += "\r\n\t\t\t#r[月妙]，#b位于射手村公园。";
		selStr += "\r\n\t\t\t#r[废弃澡泽]，#b位于废弃都市。";
		selStr += "\r\n\t\t\t#r[英语村]，#b位于射手村。";
		selStr += "\r\n\t\t\t#r[玩具塔]，#b玩具塔101层。";
		selStr += "\r\n\t\t\t#r[女神塔]，#b未知之塔。";
		selStr += "\r\n\t\t\t#r[海盗船]，#b海盗船小港口。";
		selStr += "\r\n\t\t\t#r[毒雾森林]，#b很深的妖精森林。";
		selStr += "\r\n\t\t\t#r[罗密欧朱丽叶]，#b蒙特鸠的密室。";
		selStr += "\r\n\t\t\t#r[家族遗迹]，#b遗迹发掘地营地。";
		selStr += "\r\n\t\t\t#r[藏宝城]，#b百草堂。";
		//selStr += "\r\n\t\t\t#r[绯红之地]，#b懒得修了····反正没啥人会玩。";

		
		selStr += "\r\n\r\n\r\n\r\n#k┗                                                  ┛\r\n";
        cm.说明文字(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 1:
                cm.dispose();
                cm.openNpc(9900007, 0);
                break;
            
        }
    }
}