/*
ZEVMS冒险岛(079)游戏服务端
豆豆机奖励
 */
var status = 0;
var itemList =
        Array(	//60%卷
				Array(2040001, 800, 1, 1),
				Array(2040004, 800, 1, 1),
				Array(2040017, 800, 1, 1),
				Array(2040025, 800, 1, 1),
				Array(2040029, 800, 1, 1),
				Array(2040101, 800, 1, 1),
				Array(2040106, 800, 1, 1),
				Array(2040301, 800, 1, 1),
				Array(2040311, 800, 1, 1),
				Array(2040326, 800, 1, 1),
				Array(2040401, 800, 1, 1),
				Array(2040413, 800, 1, 1),
				Array(2040418, 800, 1, 1),
				Array(2040421, 800, 1, 1),
				Array(2040425, 800, 1, 1),
				Array(2040501, 800, 1, 1),
				Array(2040504, 800, 1, 1),
				Array(2040513, 800, 1, 1),
				Array(2040516, 800, 1, 1),
				Array(2040532, 800, 1, 1),
				Array(2040613, 800, 1, 1),
				Array(2040618, 800, 1, 1),
				Array(2040621, 800, 1, 1),
				Array(2040625, 800, 1, 1),
				Array(2040701, 800, 1, 1),
				Array(2040704, 800, 1, 1),
				Array(2040707, 800, 1, 1),
				Array(2040804, 800, 1, 1),
				Array(2040817, 800, 1, 1),
				Array(2040824, 800, 1, 1),
				Array(2040901, 800, 1, 1),
				Array(2040914, 800, 1, 1),
				Array(2040919, 800, 1, 1),
				Array(2040924, 800, 1, 1),
				Array(2040927, 800, 1, 1),
				Array(2040931, 800, 1, 1),
				Array(2041001, 800, 1, 1),
				Array(2041004, 800, 1, 1),
				Array(2041007, 800, 1, 1),
				Array(2041010, 800, 1, 1),
				Array(2041013, 800, 1, 1),
				Array(2041016, 800, 1, 1),
				Array(2041019, 800, 1, 1),
				Array(2041022, 800, 1, 1),
				Array(2041202, 800, 1, 1),
				Array(2041207, 800, 1, 1),
				Array(2041301, 800, 1, 1),
				Array(2041304, 800, 1, 1),
				Array(2041307, 800, 1, 1),
				Array(2041310, 800, 1, 1),
				Array(2043001, 800, 1, 1),
				Array(2043009, 800, 1, 1),
				Array(2043017, 800, 1, 1),
				Array(2043021, 800, 1, 1),
				Array(2043101, 800, 1, 1),
				Array(2043112, 800, 1, 1),
				Array(2043201, 800, 1, 1),
				Array(2043212, 800, 1, 1),
				Array(2043301, 800, 1, 1),
				Array(2043701, 800, 1, 1),
				Array(2043801, 800, 1, 1),
				Array(2044001, 800, 1, 1),
				Array(2044012, 800, 1, 1),
				Array(2044101, 800, 1, 1),
				Array(2044112, 800, 1, 1),
				Array(2044201, 800, 1, 1),
				Array(2044212, 800, 1, 1),
				Array(2044301, 800, 1, 1),
				Array(2044312, 800, 1, 1),
				Array(2044401, 800, 1, 1),
				Array(2044412, 800, 1, 1),
				Array(2044501, 800, 1, 1),
				Array(2044601, 800, 1, 1),
				Array(2044701, 800, 1, 1),
				Array(2044801, 800, 1, 1),
				Array(2044807, 800, 1, 1),
				Array(2044901, 800, 1, 1),
				
				Array(2049100, 300, 1, 1),

				//椅子
				Array(3010002, 200, 1, 1),
				Array(3010003, 200, 1, 1),
				Array(3010006, 200, 1, 1),
				//药水
				Array(2022017, 1000, 1, 1),
				Array(2022018, 1000, 1, 1),
				Array(2022019, 1000, 1, 1),
                Array(2000000, 1000, 1, 1),
				Array(2000000, 1000, 2, 1),
				Array(2000000, 1000, 3, 1),
				Array(2000000, 1000, 4, 1),
                Array(2000001, 1000, 1, 1),
				Array(2000001, 1000, 2, 1),
				Array(2000001, 1000, 3, 1),
				Array(2000001, 1000, 4, 1),
				Array(2000001, 1000, 5, 1),
                Array(2000002, 1000, 1, 1),
				Array(2000002, 1000, 2, 1),
				Array(2000002, 1000, 3, 1),
				Array(2000002, 1000, 4, 1),
				Array(2000002, 1000, 5, 1),
                Array(2000003, 1000, 1, 1),
				Array(2000003, 1000, 2, 1),
				Array(2000003, 1000, 3, 1),
				Array(2000003, 1000, 4, 1),
				Array(2000003, 1000, 5, 1),
				Array(2000004, 500, 1, 1),
				Array(2000004, 500, 2, 1),
				Array(2000004, 500, 3, 1),
				Array(2000004, 500, 4, 1),
				Array(2000005, 500, 1, 1),
				Array(2000005, 500, 2, 1),
				Array(2000005, 500, 3, 1),
                Array(2000005, 500, 4, 1)
                );

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        
        status--;
    }
	if (status == 0) {
        var chance = Math.floor(Math.random() * +100);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            if (finalitem.length == 0) {
                return 1;
            }
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            if (item != -1) {
				cm.给物品(itemId,quantity);
                cm.getPlayer().dropMessage(1,"恭喜你获得 [ "+cm.getItemName(itemId)+" ]");
            } 
            cm.safeDispose();
        } else {
            cm.safeDispose();
        }
        cm.safeDispose();
    }
}