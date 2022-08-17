

/*
星梦冒险岛(079)游戏服务端
 脚本：PB挑战
 */
 var pbtimes = 2
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
    if (cm.getPlayer().getClient().getChannel() == 4) {
        cm.说明文字("品克缤在 #b1、2、3#k 频道挑战。");
        cm.dispose();
    } else if (status == 0) {
		if(cm.haveItem(4310003,500)){
			pbtimes++
		}
		if(cm.haveItem(4310003,1000)){
			pbtimes++
		}
        var selStr = "一天最多打["+pbtimes+"]次PB(失败不计算次数)\r\n";
        if (cm.判断指定地图玩家数量(270050100) == 0) {  
                            selStr += " #L13##r开始远征品克缤#k#l\r\n";             
        }else{
			cm.说明文字("已经有人在远征品克缤，你可以通过重返boss进入\r\n#L21#重返BOSS#l");
		}
        cm.说明文字(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 13:
				if(cm.getBossLog("PBboss") >= pbtimes){
					cm.sendOk("一天最多打["+pbtimes+"]次PB(失败不计算次数)")
					cm.dispose();
					return
				}
                cm.getMap(270050100).resetFully();
				cm.removeNpc(270050100, 2141000);
				cm.warp(270050100, 0);
				cm.forceStartReactor(270050100, 2709000);
				cm.指定地图召唤怪物(8820000, 270050100, 8, -43);
				cm.dispose();
                break;
			case 21:
				if(cm.getBossLog("PBboss") >= pbtimes){
					cm.sendOk("一天最多打["+pbtimes+"]次PB(失败不计算次数)")
					cm.dispose();
					return
				}
                cm.warp(270050100, 0);
                cm.dispose();
                break;
        }
    }
} 

