/*
 ZEVMS冒险岛(079)游戏服务端
 随身仓库选择页面
 */
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var a = "#fUI/Basic/BtHide3/mouseOver/0#";
var b = "#fString/ZEVMS.img/素材1/战斗力#";
function start() {
    status = -1;
    action(1, 0, 0)
}

function action(mode, type, selection) {
    if (status <= 0 && mode <= 0) {
        cm.dispose();
        return
    }
    if (mode == 1) {
        status++
    } else {
        status--
    }
    var MC = cm.getServerName();

    if (status <= 0) {
        var selStr = "\r\n   " + 心 + " " + 心 + "  " + 心 + "  " + 心 + " #r#e < 随身仓库 > #k#n " + 心 + "  " + 心 + "  " + 心 + " " + 心 + "\r\n\r\n";
			if(cm.getPlayer().getGuildId() > 0 ){
				selStr += "#r提示：#b随身仓库只能存储#r消耗栏，设置栏，其他#b等等，家族仓库是同一个家族的玩家可以通用的仓库。#k\r\n\r\n\r\n";
			}else{
				
				selStr += "   #r提示：#b随身仓库只能存储#r消耗栏，设置栏，其他#b等等。#k\r\n\r\n\r\n";
			}
			selStr += "\t\t\t\t    #L0##b返回界面#l\r\n";
			selStr += "\t\t\t\t    #L1##b个人仓库#l\r\n";
			selStr += "\t\t\t\t    #L2##b家族仓库#r#r#k#l\r\n";
			if(cm.getPlayer().getGuildId() > 0 ){
		//		selStr += "\t\t\t\t    #L2##b家族仓库#r["+cm.获取家族名称(cm.getPlayer().getGuildId())+"]#k#l\r\n";
			}
		
        cm.sendSimple(selStr)
    } else if (status == 1) {
        switch (selection) {
			case 0:
                cm.dispose();
                cm.openNpc(9900004,0);
                break;
            case 1:
                cm.dispose();
                cm.openNpc(9900004,41);
                break;
			case 2:
                cm.dispose();
                cm.openNpc(9900004,42);
                break;
            case 3:
                cm.dispose();
                cm.openNpc(9900004,20);
                break;

        }
    }
}