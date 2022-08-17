/*
 冒险岛(079)游戏服务端
 脚本：黑龙挑战
 */
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
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
        var selStr = "\r\n";
        if (cm.判断指定地图玩家数量(240060200) == 0 && cm.判断指定地图玩家数量(240060100) == 0 && cm.判断指定地图玩家数量(240060000) == 0) {  
                            selStr += " #L13##r开始远征黑龙#k#l\r\n";             
        }else{
			cm.说明文字("已经有人在远征黑龙，你可以通过重返boss进入\r\n#L21#重返BOSS#l");
		}
        cm.说明文字(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 13:
			if(cm.getLevel() <120 ){
				cm.sendOk("达到120级才可以打哦！快去练级吧");
				cm.dispose();
				return;
			};
                cm.getMap(240060200).resetFully();
                //cm.Gaincharacterz("黑龙远征队队长", 202, 1);
                cm.开始黑龙远征(3, 240060200);
				//cm.给物品(5253004, 1);
				cm.warp(240060200, 0);
				cm.对话结束();
                break;
			case 21:
                cm.warp(240060200, 0);
                cm.对话结束();
                break;
        }
    }
} 