status = -1;
var itemList = [
    //物品id， 概率范围，1表示宠物2表示普通道具，数量
    
[5000020, 0, 100, 1, 1],
[5000024, 0, 100, 1, 1],
[5000025, 0, 100, 1, 1],
[5000026, 0, 100, 1, 1],
[5000028, 0, 100, 1, 1],
[5000029, 0, 100, 1, 1],
[5000030, 0, 100, 1, 1],
[5000032, 0, 100, 1, 1],
[5000033, 0, 100, 1, 1],
[5000035, 0, 100, 1, 1],
[5000046, 0, 100, 1, 1],
[5000047, 0, 100, 1, 1],
[5000048, 0, 100, 1, 1],
[5000049, 0, 100, 1, 1],
[5000050, 0, 100, 1, 1],
[5000051, 0, 100, 1, 1],
[5000052, 0, 100, 1, 1],
[5000053, 0, 100, 1, 1],
[5000055, 0, 100, 1, 1],
[5000056, 0, 100, 1, 1],
[5000060, 0, 100, 1, 1],
[5000066, 0, 100, 1, 1],
[5000067, 0, 100, 1, 1],
[5000069, 0, 100, 1, 1],
[5000070, 0, 100, 1, 1],
[5000071, 0, 100, 1, 1],
[5000094, 0, 100, 1, 1],
[5000096, 0, 100, 1, 1],
[5000103, 0, 100, 1, 1],
[5000112, 0, 100, 1, 1],
[5000113, 0, 100, 1, 1],
[5000209, 0, 100, 1, 1],
[5000264, 0, 100, 1, 1]

];
var usepoints = 1000;
function action(mode, type, selection) {
    if (mode == 1) {
		/*if (cm.getPlayer().getId() != 16703) {
			cm.sendOk("维修中");
			cm.dispose();
			return;
		}*/
		
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("考虑好了再来吧");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        selStr = "\r\n";
        for (i = 0; i < itemList.length; i++) {
            selStr += "#d#v" + itemList[i][0] + "#";
        }
        if (cm.getPotion(2) >= usepoints) {
            cm.sendYesNo("#e#r开服大福利!!#k#n\r\n只要你有#e#b"+usepoints+"抵用券#k#n就可以从我手中拿走一只宠物(45天)，一人只有一次机会哦！" + selStr);
        } else {
            cm.sendOk("#e#r开服大福利!!#k#n\r\n只要你有#e#b"+usepoints+"抵用券#k#n就可以从我手中拿走一只宠物(45天)，一人只有一次机会哦！" + selStr);
            cm.safeDispose();
        }
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * 100);
        var finalitem = [];
        var txt = chance + "----\r\n";
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] <= chance && itemList[i][2] > chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length > 0) {
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][4];
            var notice = finalitem[finalchance][3];
			var onetimelog = cm.getOneTimeLog("开服福利-宠物抽奖");
			if (onetimelog > 0) {
				cm.sendOk("你已经抽过一次了哦，无法再次抽奖");
				cm.safeDispose();
				return;
			}
            if (cm.canHold() && cm.getPotion(2) >= usepoints) {
			    //if(cm.haveItem(1012076)){
					//cm.sendOk("大兄弟您抽到了重复的固有道具，请重试")；
					//cm.safeDispose();
					//return;
				//}
                if (Packages.constants.GameConstants.isPet(itemId)) {
                    cm.gainPet(itemId, "", 1, 1, 100, 45);
                } else if (itemId == 1122017) {
                    cm.gainItemPeriod(itemId, quantity, 3);
                } else {
                    cm.gainItem(itemId, quantity);
                }		
                cm.sendOk("你得到了 #b#v" + itemId + "##k " + quantity + "个。");
				cm.gainPotion(2, -usepoints);
				cm.setOneTimeLog("开服福利-宠物抽奖");
				if(itemId == 4000463){
					cm.喇叭(1, cm.getPlayer().getName() + "运气爆棚！再来"+quantity+"次！");
				}else if(itemId == 4001126){
					cm.喇叭(1, cm.getPlayer().getName() + "抽奖获得了破叶子"+quantity+"个！");
				}else{
					cm.worldMessage(2, "[开服福利] : 恭喜玩家<"+cm.getPlayer().getName() + ">抽奖获得了宠物<"+ cm.getItemName(itemId) + ">! ");
				}
            } else {
                cm.sendOk("你确实有#b"+usepoints+"抵用券#k吗?如果是,请你确认在背包的装备,消耗,其他窗口中是否有一格以上的空间?");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("今天的运气可真差，什么都没有拿到。");
            if (cm.haveItem(4000463)) {
                cm.gainItem(4000463, -1);
            }
            cm.safeDispose();
        }
    }
}