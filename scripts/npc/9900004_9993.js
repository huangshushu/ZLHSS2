/*
 星梦冒险岛(079)游戏服务端
 道具购买
 */
 
//道具id，单次购买数量，消耗材料数量	
var itemlist = [
[2022428,1,30,"赞助"],
];

var costitem = 4031862

//说明文字
var 说明文字 = "兑换商店：";


var sels;
var 脚本执行 = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        脚本执行++;
    } else if (mode == 0) {
        脚本执行--;
    } else {
        cm.dispose();
        return;
    }
    if (脚本执行 == 0) {
        var 文本信息 = "";
        for (var i = 0; i < itemlist.length; i++) {
            文本信息 += "#b#L" + i + "#";
            文本信息 += "#i" + itemlist[i][0] + "#x#r"+itemlist[i][1]+"#b，需要#i"+costitem+"#x#r"+itemlist[i][2]+"#b("+itemlist[i][3]+")#l#k\r\n";
        }

        cm.sendSimple("" + 说明文字 + "\r\n" + 文本信息 + "");
    } else if (脚本执行 == 1) {
		 if (cm.getInventory(1).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(2).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(3).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(4).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(5).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
		sels = selection;
		
		if(cm.haveItem(costitem, itemlist[sels][2])){
		
        
        cm.gainItem(itemlist[sels][0], itemlist[sels][1]);
		cm.gainItem(costitem, -itemlist[sels][2]);
        cm.说明文字("购买成功");
		cm.setBossLog("证明赞助")
		cm.全服黄色喇叭("[兑换商店] : 绝世大佬 "+cm.getPlayer().getName()+" 从麦格纳斯兑换专区兑换了100赞助")
        cm.dispose();
		}
		cm.说明文字("你东西不够啊,弟弟快去打BOSS吧");
    } else {
        cm.dispose();
    }
}