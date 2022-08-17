var status = -1;
var ItemListA = Array(
    /*道具代碼 , 數量 , 關卡前獲得  EX 20 就是20關以前就是這個獎勵*/
    Array(4031997, 2, 20),
    Array(4031997, 3, 20),
	Array(4031997, 4, 50),
    Array(2439517, 2, 50),
	Array(4001244, 50, 50),
	Array(2614078, 2, 100),
	Array(2614078, 2, 299)
);
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        var em = cm.getEventManager("Limitless");
        var Times = em.getProperty("Times");
        var charid = cm.getChar().getId();
        if (Times != null) {
            cm.sql_Update("update limitlessEvent set times=? where charid = " + charid, parseInt(Times) + 1);
            cm.playerMessage(5, "闯关成功！3 秒后将进入下一关，请做好准备！");
            var Lv = parseInt(em.getProperty("Times"))
            for (var i = 0; i < ItemListA.length; i++) {
			 if (Lv < 20 && ItemListA[i][2] == 20) {
                    cm.gainItem(ItemListA[i][0], ItemListA[i][1]);
                    cm.playerMessage(3, "[ 无尽之塔] : 恭喜通过第[ " + em.getProperty("Times") + " ] 层获得" + cm.getItemName(ItemListA[i][0]) + " X " + ItemListA[i][1] + "个");
			    } else if (Lv > 20 && ItemListA[i][2] == 50) {
                    cm.gainItem(ItemListA[i][0], ItemListA[i][1]);
                    cm.playerMessage(3, "[ 无尽之塔] : 恭喜通过第[ " + em.getProperty("Times") + " ] 层获得" + cm.getItemName(ItemListA[i][0]) + " X " + ItemListA[i][1] + "个");
                } else if (Lv > 50 && ItemListA[i][2] == 100) {
                    cm.gainItem(ItemListA[i][0], ItemListA[i][1]);
                    cm.playerMessage(3, "[ 无尽之塔] : 恭喜通过第[ " + em.getProperty("Times") + " ] 层获得" + cm.getItemName(ItemListA[i][0]) + " X " + ItemListA[i][1] + "个");
                } else if (Lv > 100 && ItemListA[i][2] == 199) {
					cm.gainItem(ItemListA[i][0], ItemListA[i][1]);
                    cm.playerMessage(3, "[ 无尽之塔] : 恭喜通过第[ " + em.getProperty("Times") + " ] 层获得" + cm.getItemName(ItemListA[i][0]) + " X " + ItemListA[i][1] + "个");
				}
            }
        }
    }
}