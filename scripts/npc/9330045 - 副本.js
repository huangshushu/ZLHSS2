/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：渔场
 */

var ca = java.util.Calendar.getInstance();
var 箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";//"+箭头+"
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var 入场2 = "#fUI/CN_Chat.img/roomList/BtEnter/mouseOver/0#";
var 蘑菇 = "#fUI/UIWindow.img/Minigame/Common/mark#";
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
	/*if(cm.判断地图()!=100000000){
		cm.说明文字("非常抱歉，目前只有#b射手村#k可以进入渔场。");
		cm.dispose();
		return;
	}*/
	//转化等级
	var 角色 = cm.getPlayer().id;
    var 等于等级 = cm.Getcharactera("" + 角色 + "", 1);
	var 钓鱼经验 = cm.getBossRank1("钓鱼经验", 2);
    if (钓鱼经验 > 8601) {
        cm.Gaincharactera("" + 角色 + "", 1, -等于等级);
        cm.Gaincharactera("" + 角色 + "", 1, 6);
    } else if (钓鱼经验 > 3601) {
        cm.Gaincharactera("" + 角色 + "", 1, -等于等级);
        cm.Gaincharactera("" + 角色 + "", 1, 5);
    } else if (钓鱼经验 >= 1601) {
        cm.Gaincharactera("" + 角色 + "", 1, -等于等级);
        cm.Gaincharactera("" + 角色 + "", 1, 4);
    } else if (钓鱼经验 >= 601) {
        cm.Gaincharactera("" + 角色 + "", 1, -等于等级);
        cm.Gaincharactera("" + 角色 + "", 1, 3);
    } else if (钓鱼经验 >= 101) {
        cm.Gaincharactera("" + 角色 + "", 1, -等于等级);
        cm.Gaincharactera("" + 角色 + "", 1, 2);
    } else {
        cm.Gaincharactera("" + 角色 + "", 1, -等于等级);
        cm.Gaincharactera("" + 角色 + "", 1, 1);
    }
    if (status == 0) {
        var
        selStr = " Hi~ #b#h ##k你是要去渔场吗？在渔场可以钓到很多美味的大鱼哦，想不想一起去试试？\r\n\r\n";
        selStr += "\r\n#L1##b进入渔场#k#l\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 1:
                cm.dispose();
				cm.openNpc(2007,3);
                break;


        }
    }
}