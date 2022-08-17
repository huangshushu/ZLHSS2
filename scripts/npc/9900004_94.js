/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：空间传送
 */
var pbtimes = 2
var 魔法石 = 4006000;
//传送地点，消耗金币
var maps = Array(
		[702060000, 0],
		[240050400, 0],
		[280030000, 0],
		[912010100, 0],
		[270050100, 0]
		

        );
var status = 0;
var show;
var sCost;
var selectedMap = -1;
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2) {
            cm.说明文字(" 等你想去哪里了，记得找我哦！");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
    } else if (status == 1) {
        var selStr = "  #d#e请选择你要去的地方(请勿恶意捣乱)：#k#n#b\r\n\r\n#r[凯琳的训练场 #b就是新地图扎昆 主体]#n#b";
        for (var i = 0; i < maps.length; i++) {
			 selStr += "\r\n#L" + i + "# #m" + maps[i] + "##l";
        }
        cm.sendSimple(selStr);
    } else if (status == 2) {
        show = maps[selection][1];
        cm.sendYesNo("\t传送目标: #b#m" + maps[selection] + "##k\r\n\t需要 "+cm.显示物品(魔法石)+" x #b" + show + "#k");
        selectedMap = selection;
    } else if (status == 3) {
        if (!cm.判断物品数量(魔法石,0)) {
            cm.sendNext("你没有 "+cm.显示物品(魔法石)+" 无法启动空间传送阵。");
            cm.safeDispose();
        } else {
			if(cm.haveItem(4310003,500)){
				pbtimes++
			}
			if(cm.haveItem(4310003,1000)){
				pbtimes++
			}
			if(selectedMap == 4 && cm.getBossLog("PBboss") >= pbtimes){
				cm.sendOk("一天最多打["+pbtimes+"]次PB(失败不计算次数)")
				cm.dispose();
				return
			}
            cm.收物品(魔法石,1);
            cm.warp(maps[selectedMap][0]);
            cm.dispose();
        }
    }
}