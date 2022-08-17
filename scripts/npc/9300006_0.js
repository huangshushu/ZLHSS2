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
	Array(1302086,4031409,1, "永恒破甲剑"),
    Array(1312038,4031409,1, "1"),//永恒玄冥剑
	Array(1322061,4031409,1, "2"),//永恒显圣枪
	Array(1332075,4031409,1, "3"),//永恒神光戟
	Array(1382059,4031409,1, "4"),//永恒碎鼋斧
    Array(1402047,4031409,1, "4"),//永恒狂鲨锯
    Array(1412034,4031409,1, "5"),//永恒惊电弓
	Array(1422038,4031409,1, "6"),//永恒永恒冥雷弩
	Array(1432049,4031409,1, "7"),//永恒大悲赋
    Array(1452059,4031409,1, "8"),//永恒断首刃
    Array(1462051,4031409,1, "9"),//永恒蝶翼杖
    Array(1472071,4031409,1, "10"),//永恒冰轮杖
	Array(1482024,4031409,1, "11"),//永恒孔雀翎
	Array(1492025,4031409,1, "12")//永恒凤凰铳
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
            sl = cm.getPlayer().getItemQuantity(4031409, false);
            StringS = "#b#n   角色拥有:" + sl + " 把#v4031409#";
            for (var i = 0; i < ItemId.length; i++) {
                StringS += "\r\n#L" + i + "##b" + 红色箭头 + "#b#v " + ItemId[i][1] + " #" + ItemId[i][2] + "#n把#k 兑换 #r#v" + ItemId[i][0] + "##z" + ItemId[i][0] + "##k#l";
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
                    cm.sendOk("#v4031409#不足！");
                    cm.dispose();
                }
            }
        }
    }
}	