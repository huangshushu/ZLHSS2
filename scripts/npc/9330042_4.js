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
    //Array(4000463,4001126,30, "1"),//暗影
    //Array(2340000,4001126,120, "2"),//兑换 祝福卷轴
	//Array(1112404,4001126,150, "29"),//兑换 极光戒指
	//Array(1112405,4001126,300, "28"),//兑换 利琳的戒指
    //Array(1082149,4001126,300, "3"),//兑换 工地手套(褐）
    //Array(1102041,4001126,3000, "4"),//兑换 浪人披风(粉 )
    //Array(1102042,4001126,3000, "5"),//兑换 浪人披风(紫)
	
	    Array(1462019,4001126,2000,1),//枫叶弩
		Array(1452022,4001126,2000,1),//枫叶弓
		Array(1382012,4001126,2000,1),//枫叶杖
		Array(1472032,4001126,2000,1),//枫叶拳
		Array(1332025,4001126,2000,1),//枫叶刃
		Array(1492020,4001126,2000,1),//枫叶短枪
		Array(1482020,4001126,2000,1),//枫叶指节
		Array(1442024,4001126,2000,1),//枫叶矛
		Array(1302030,4001126,2000,1),//枫叶剑
		Array(1412011,4001126,2000,1),//枫叶斧
		Array(1422014,4001126,2000,1),//枫叶锤	枫叶枪
		Array(1432012,4001126,2000,1)
		//Array(1482097,4001126,5000,1)

		//Array(1122110,4001126,3000,1),//超级枫叶系列
		//Array(1082313,4001126,1000,1),
		//Array(1332143,4001126,5000,1),
		//Array(1342038,4001126,5000,1),
		//Array(1372095,4001126,5000,1),
		//Array(1382119,4001126,5000,1),
		//Array(1402105,4001126,5000,1),
		//Array(1432075,4001126,5000,1),
		//Array(1442131,4001126,5000,1),
		//Array(1452124,4001126,5000,1),
		//Array(1462112,4001126,5000,1),
		//Array(1472135,4001126,5000,1),
		//Array(1482097,4001126,5000,1),
		//Array(1492096,4001126,5000,1)

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
            sl = cm.getPlayer().getItemQuantity(4001126, false);
            StringS = "#b#n   角色剩余:" + sl + " 个#v4001126#（请保证背包有空间，否则会消失）";
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
                    cm.sendOk("#v4001126#不足！");
                    cm.dispose();
                }
            }
        }
    }
}	
