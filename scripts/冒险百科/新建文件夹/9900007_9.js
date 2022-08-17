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
        var selStr = "#e冒险百科，助你玩转#b"+cm.开服名称()+"#k#n：\r\n";
		selStr += "首页 → 关于副本奖励\r\n";
        selStr += " #L1##b"+a+"返回上一页#k#l\r\n\r\n";  
		selStr += " 月妙副本，盛产#r枫叶#k\r\n";  
		selStr += " 玩具塔副本，盛产#r晶石母矿#k\r\n"; 
		selStr += " 女神塔副本，盛产#r魔法粉末#k，#r金属母矿石#k\r\n"; 
		selStr += " 海盗船副本，盛产#r橡皮擦#k#k\r\n"; 
		selStr += " 废弃都市副本，盛产#r金属母矿石#k\r\n"; 
		selStr += " 毒雾森林副本，盛产#r邮票#k#k\r\n";
		selStr += " 罗密欧与朱丽叶副本，盛产#r俄罗斯方块#k#k\r\n";
		
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