/*
 ZEVMS冒险岛(079)游戏服务端脚本
 装备增幅
 */
//材料设置
var 材料 = [
    [4260000, 10],
    [4260001, 10],
    [4260002, 10],
    [4260003, 10],
    [4260004, 10],
    [4260005, 10],
    [4260006, 10],
	[4260007, 10],
	[4260008, 10]
];

var 金币 = 0;
var 点券 = 0;


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
    if (cm.getInventory(1).getItem(1) == null) {
        cm.说明文字("你的装备栏第一格没有装备。");
        cm.dispose();
        return
    }
    var 装备 = cm.显示物品(cm.getInventory(1).getItem(1).getItemId());
	if(cm.isCash(cm.getInventory(1).getItem(1).getItemId())){
		cm.说明文字("你的装备栏第一格 "+装备+" 是时装，无法增幅。");
        cm.dispose();
        return
	}
    var 洗练道具 = 0;
    if (status <= 0) {

        var selStr = "    Hi~#b#h ##k 你确定要增幅。" + 装备 + " 吗？ 装备会随机增幅一些属性。#k\r\n\r\n";
        selStr += "#b#e当前属性：#k#n\r\n";

        selStr += "" + cm.显示装备属性() + "\r\n";
        selStr += "#d所需材料；————————————————————#k\r\n";
        for (var ii = 0; ii < 材料.length; ii++) {
            selStr += "    #i" + 材料[ii][0] + "#  #b#t" + 材料[ii][0] + "##k [" + 材料[ii][1] + " / #r#c " + 材料[ii][0] + "##k]\r\n";
            if (ii % 3 == 0) {
                selStr += "";
            }
        }
        selStr += "\r\n";
        if (金币 > 0 || 点券 > 0) {
            selStr += "#d所需费用；————————————————————#k\r\n";
            if (金币 > 0) {
                selStr += "    #v5200000##b  金币 #k[" + 金币 + " / #r" + cm.判断金币() + "#k]\r\n";
            }
            if (点券 > 0) {
                selStr += "    #v5440000##b  点券 #k[" + 点券 + " / #r" + cm.判断点券() + "#k]\r\n";
            }
        }
        selStr += "#d———————————————————————————#k\r\n";
        selStr += "\t\t\t\t\t#L1##b开始增幅#k#l\r\n";


        cm.sendSimple(selStr)
    } else if (status == 1) {
        switch (selection) {
            case 1:
				if (cm.判断金币() < 金币 || cm.判断点券() < 点券) {
                    cm.说明文字("制作费用不够。");
                    cm.对话结束();
                    return;
                }
                for (var i = 0; i < 材料.length; i++) {
                    if (!cm.haveItem(材料[i][0], 材料[i][1])) {
                        cm.说明文字("#i" + 材料[i][0] + "#  #b#t" + 材料[i][0] + "##k 需要 #r" + 材料[i][1] + "#k 个");
                        cm.对话结束();
                        return;
                    }
                }
				for (var i = 0; i < 材料.length; i++) {
					cm.收物品(材料[i][0], 材料[i][1]);
				}
				////<<随机出现的增幅组合区域>>
				//随机加力量 出现机率 10% 范围 0 ~ 5
                if(cm.随机数(100)<=10){
					cm.加力量(cm.随机数(5));
				}
				//随机加敏捷 出现机率 10% 范围 0 ~ 5
                if(cm.随机数(100)<=10){
					cm.加敏捷(cm.随机数(5));
				} 
				//随机加运气 出现机率 10% 范围 0 ~ 5
                if(cm.随机数(100)<=10){
					cm.加运气(cm.随机数(5));
				}
				//随机加智力 出现机率 10% 范围 0 ~ 5
                if(cm.随机数(100)<=10){
					cm.加智力(cm.随机数(5));
				}
				//随机加力量，智力，运气，敏捷 出现机率 5% 范围 0 ~ 10
                if(cm.随机数(100)<=5){
					cm.加力量(cm.随机数(10));
					cm.加敏捷(cm.随机数(10));
					cm.加智力(cm.随机数(10));
					cm.加运气(cm.随机数(10));
				}
				
				
				
                cm.对话结束();
                cm.打开NPC(1032002, 7);
            break;
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
        }
    }
}