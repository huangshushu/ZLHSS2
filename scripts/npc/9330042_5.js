/* ==================
 脚本类型:  NPC	    
 脚本作者：月亮     
 联系方式：2412614144
 =====================
 */
var 红色箭头 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2# ";
var status = 0;
var zones = 0;
var ItemId = Array(
        //物品1         物品2    货币    数量
    //Array(4000463,4031456,30, "1"),//暗影
    //Array(2340000,4031456,120, "2"),//兑换 祝福卷轴
	//Array(1112404,4031456,150, "29"),//兑换 极光戒指
	//Array(1112405,4031456,200, "28"),//兑换 利琳的戒指
    //Array(1082149,4031456,300, "3"),//兑换 工地手套(褐）
    Array(2340000,4031456,150, "4"),//兑换 祝福
    Array(2049100,4031456,100, "5"),//兑换 混沌

		//Array(4310059,4031456,100,1),//超级枫叶系列
		Array(5050000,4031456,12,1),//洗能力
		Array(4000463,4031456,150,1),//国庆币
		Array(1302064,4031456,100, "22"),//周年枫叶
		//Array(1302032,4031456,1200, "22"),
		Array(1402039,4031456,100, "22"),
		Array(1322054,4031456,100, "22"),
		Array(1322055,4031456,100, "22"),
		Array(1332055,4031456,100, "22"),
		Array(1332056,4031456,100, "22"),
        Array(1372034,4031456,100, "22"),
		Array(1382039,4031456,100, "22"),
		Array(1412027,4031456,100, "22"),
		Array(1422029,4031456,100, "22"),
		Array(1432040,4031456,100, "22"),
		Array(1442051,4031456,100, "22"),
		Array(1452045,4031456,100, "22"),
		//Array(1462014,4031456,100, "22"),
		Array(1462040,4031456,100, "22"),
		Array(1472055,4031456,100, "22"),
		Array(1492022,4031456,100, "22"),
		Array(1482022,4031456,100, "22")

        //如需其它道具兑换，请按照此格式自行添置。
        //代码,价格,介绍
        );


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            sl = cm.getPlayer().getItemQuantity(4031456, false);
            StringS = "#b#n   角色剩余:" + sl + " 个#v4031456#（请保证背包有空间，否则会消失）";
            for (var i = 0; i < ItemId.length; i++) {
                StringS += "\r\n#L" + i + "##b" + 红色箭头 + "#b#v " + ItemId[i][1] + " #" + ItemId[i][2] + "#n个#k 兑换 #r#v" + ItemId[i][0] + "##z" + ItemId[i][0] + "##k#l";
            }
            cm.sendSimple(StringS, 2);
            zones == 0;

        } else if (status == 1) {
            if (zones == 0) {
                    if (cm.getInventory(1).isFull(2)){
                        cm.sendOk("#b请保证装备栏位至少有2个空格,否则无法购买.");
                        cm.dispose();
                    } else if (cm.getInventory(2).isFull(2)){
                        cm.sendOk("#b请保证消耗栏位至少有2个空格,否则无法购买.");
                        cm.dispose();
                    } else if (cm.getInventory(3).isFull(2)){
                        cm.sendOk("#b请保证设置栏位至少有2个空格,否则无法购买.");
                        cm.dispose();
                    } else if (cm.getInventory(4).isFull(2)){
                        cm.sendOk("#b请保证其他栏位至少有2个空格,否则无法购买.");
                        cm.dispose();
                } else if (cm.haveItem(ItemId[selection][1], ItemId[selection][2])) {
                    cm.gainItem(ItemId[selection][1], -ItemId[selection][2]);
                    cm.gainItem(ItemId[selection][0], 1);
                    cm.sendOk("兑换成功，请检背包!"); 
                    cm.dispose();
                } else {
                    cm.sendOk("#v4031456#不足！");
                    cm.dispose();
                }
            }
        }
    }
}	
