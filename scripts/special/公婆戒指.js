/* Mr. Smith
 Victoria Road: Perion (102000000)
 
 Refining NPC: 
 * Warrior Gloves - 10-60 + upgrades
 * Processed Wood/Screws
 */

var status = 0;
var selectedType = -1;
var selectedItem = -1;
var item;
var mats;
var matQty;
var cost;
var qty;
var equip;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        cm.dispose();
    if (status == 0 && mode == 1) {
        selectedType = selection;
        if (selectedType == 0) { //glove refine
            var selStr = "在这个世界我做的戒指是最好的！好~你想做什么样的戒指呢？#b\r\n";
            selStr += "   公婆戒指只能穿戴一件。#b";
            var items = new Array("老公老婆戒指LV2#k(等级限制 : 1, 全职业)#b",
                    "老公老婆戒指LV3#k(等级限制 : 1, 全职业)#b", "老公老婆戒指LV4#k(等级限制 : 1, 全职业)#b",
                    "老公老婆戒指LV5#k(等级限制 : 1, 全职业)#b", "老公老婆戒指LV6#k(等级限制 : 1, 全职业)#b",
                    "老公老婆戒指LV7#k(等级限制 : 1, 全职业)#b", "老公老婆戒指LV8#k(等级限制 : 1, 全职业)#b",
                    "老公老婆戒指LV9#k(等级限制 : 1, 全职业)#b", "老公老婆戒指LV10#k(等级限制 : 1, 全职业)#b",
                    "老公老婆戒指LV11#k(等级限制 : 1, 全职业)#b", "老公老婆戒指LV12#k(等级限制 : 1, 全职业)#b",
                    "老公老婆戒指LV13#k(等级限制 : 1, 全职业)#b", "老公老婆戒指LV14#k(等级限制 : 1, 全职业)#b",
                    "老公老婆戒指LV15#k(等级限制 : 1, 全职业)#b", "老公老婆戒指LV16#k(等级限制 : 1, 全职业)#b",
                    "老公老婆戒指LV17#k(等级限制 : 1, 全职业)#b", "老公老婆戒指LV18#k(等级限制 : 1, 全职业)#b",
                    "老公老婆戒指LV19#k(等级限制 : 1, 全职业)#b", "老公老婆戒指LV20#k(等级限制 : 1, 全职业)#b",
                    "老公老婆戒指LV21#k(等级限制 : 1, 全职业)#b", "老公老婆戒指LV22#k(等级限制 : 1, 全职业)#b",
                    "老公老婆戒指LV23#k(等级限制 : 1, 全职业)#b", "老公老婆戒指LV24#k(等级限制 : 1, 全职业)#b",
                    "老公老婆戒指LV25#k(等级限制 : 1, 全职业)#b", "老公老婆戒指LV26#k(等级限制 : 1, 全职业)#b",
                    "老公老婆戒指LV27#k(等级限制 : 1, 全职业)#b", "老公老婆戒指LV28#k(等级限制 : 1, 全职业)#b",
                    "老公老婆戒指LV29#k(等级限制 : 1, 全职业)#b", "老公老婆戒指LV30#k(等级限制 : 1, 全职业)#b",
                    "老公老婆戒指LV31#k(等级限制 : 1, 全职业)#b", "老公老婆戒指LV32#k(等级限制 : 1, 全职业)#b",
                    "老公老婆戒指LV33#k(等级限制 : 1, 全职业)#b", "老公老婆戒指LV34#k(等级限制 : 1, 全职业)#b",
                    "老公老婆戒指LV35#k(等级限制 : 1, 全职业)#b", "老公老婆戒指LV36#k(等级限制 : 1, 全职业)#b",
                    "老公老婆戒指LV37#k(等级限制 : 1, 全职业)#b", "老公老婆戒指LV38#k(等级限制 : 1, 全职业)#b",
                    "老公老婆戒指LV39#k(等级限制 : 1, 全职业)#b", "老公老婆戒指LV40#k(等级限制 : 1, 全职业)#b",
                    "老公老婆戒指LV41#k(等级限制 : 1, 全职业)#b", "老公老婆戒指LV42#k(等级限制 : 1, 全职业)#b",
                    "老公老婆戒指LV43#k(等级限制 : 1, 全职业)#b", "老公老婆戒指LV44#k(等级限制 : 1, 全职业)#b",
                    "老公老婆戒指LV45#k(等级限制 : 1, 全职业)#b", "老公老婆戒指LV46#k(等级限制 : 1, 全职业)#b",
                    "老公老婆戒指LV47#k(等级限制 : 1, 全职业)#b", "老公老婆戒指LV48#k(等级限制 : 1, 全职业)#b",
                    "老公老婆戒指LV49#k(等级限制 : 1, 全职业)#b");//,"老公老婆戒指LV50#k(等级限制 : 1, 全职业)#b");
            for (var i = 0; i < items.length; i++) {
                selStr += "\r\n#L" + i + "# " + items[i] + "#l";
            }
            cm.sendSimple(selStr);
            equip = true;
        } else if (selectedType == 1) { //glove upgrade
            var selStr = "好...你想合成做什么手套？#b";
            var crystals = new Array("腕甲#k(等级限制 : 10, 战士)#b", "钢制短手套#k(等级限制 : 15, 战士)#b", "皮手套#k(等级限制 : 20, 战士)#b", "白纹短手套#k(等级限制 : 25, 战士)#b",
                    "青铜机器手套#k(等级限制 : 30, 战士)#b", "铁制轻便手套#k(等级限制 : 35, 战士)#b", "钢铁指节手套#k(等级限制 : 40, 战士)#b", "钢铁合金手套#k(等级限制 : 50, 战士)#b", "钢铁战斗手套#k(等级限制 : 60, 战士)#b");
            for (var i = 0; i < crystals.length; i++) {
                selStr += "\r\n#L" + i + "# " + crystals[i] + "#l";
            }
            cm.sendSimple(selStr);
            equip = true;
        } else if (selectedType == 2) { //material refine
            var selStr = "你想做材料？好...你想做什么材料？#b";
            var materials = new Array("用树枝做木材", "用木块做木材", "做螺丝钉");
            for (var i = 0; i < materials.length; i++) {
                selStr += "\r\n#L" + i + "# " + materials[i] + "#l";
            }
            cm.sendSimple(selStr);
            equip = false;
        }
        if (equip)
            status++;
    } else if (status == 1 && mode == 1) {
        selectedItem = selection;
        if (selectedType == 2) { //material refine
            var itemSet = new Array(4003001, 4003001, 4003000);
            var matSet = new Array(4000003, 4000018, new Array(4011000, 4011001));
            var matQtySet = new Array(10, 5, new Array(1, 1));
            var costSet = new Array(0, 0, 0)
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        }

        var prompt = "有#b10个材料#k能做一个#t" + item + "#，都是免费的。所以你应该谢谢我。怎么样？你想做几次？";

        cm.sendGetNumber(prompt, 1, 1, 100)
    } else if (status == 2 && mode == 1) {
        if (equip)
        {
            selectedItem = selection;
            qty = 1;
        } else
            qty = selection;

        if (selectedType == 0) { //glove refine
            var itemSet = new Array(1112447, 1112448, 1112449, 1112450, 1112451, 1112452, 1112453, 1112454, 1112455, 1112456,
                    1112457, 1112458, 1112459, 1112460, 1112461, 1112462, 1112463, 1112464, 1112465, 1112466,
                    1112467, 1112468, 1112469, 1112470, 1112471, 1112472, 1112473, 1112474, 1112475, 1112476,
                    1112477, 1112478, 1112479, 1112480, 1112481, 1112482, 1112483, 1112484, 1112485, 1112486,
                    1112487, 1112488, 1112489, 1112490, 1112491, 1112492, 1112493, 1112494, 1112495);
            var matSet = new Array(
                    new Array(1112446, 4000464),
                    new Array(1112447, 4000464),
                    new Array(1112448, 4000464),
                    new Array(1112449, 4000464),
                    new Array(1112450, 4000464),
                    new Array(1112451, 4000464),
                    new Array(1112452, 4000464),
                    new Array(1112453, 4000464),
                    new Array(1112454, 4000464),
                    new Array(1112455, 4000464),
                    new Array(1112456, 4000464),
                    new Array(1112457, 4000464),
                    new Array(1112458, 4000464),
                    new Array(1112459, 4000464),
                    new Array(1112460, 4000464),
                    new Array(1112461, 4000464),
                    new Array(1112462, 4000464),
                    new Array(1112463, 4000464),
                    new Array(1112464, 4000464),
                    new Array(1112465, 4000464),
                    new Array(1112466, 4000464),
                    new Array(1112467, 4000464),
                    new Array(1112468, 4000464),
                    new Array(1112469, 4000464),
                    new Array(1112470, 4000464),
                    new Array(1112471, 4000464),
                    new Array(1112472, 4000464),
                    new Array(1112473, 4000464),
                    new Array(1112474, 4000464),
                    new Array(1112475, 4000464),
                    new Array(1112476, 4000464),
                    new Array(1112477, 4000464),
                    new Array(1112478, 4000464),
                    new Array(1112479, 4000464),
                    new Array(1112480, 4000464),
                    new Array(1112481, 4000464),
                    new Array(1112482, 4000464),
                    new Array(1112483, 4000464),
                    new Array(1112484, 4000464),
                    new Array(1112485, 4000464),
                    new Array(1112486, 4000464),
                    new Array(1112487, 4000464),
                    new Array(1112488, 4000464),
                    new Array(1112489, 4000464),
                    new Array(1112490, 4000464),
                    new Array(1112491, 4000464),
                    new Array(1112492, 4000464),
                    new Array(1112493, 4000464),
                    new Array(1112494, 4000464),
                    new Array(1112485, 4000464));
            var matQtySet = new Array(
                    new Array(1, 10), new Array(1, 10),
                    new Array(1, 10), new Array(1, 10),
                    new Array(1, 10), new Array(1, 10),
                    new Array(1, 10), new Array(1, 10),
                    new Array(1, 10), new Array(1, 20), //11
                    new Array(1, 20), new Array(1, 20),
                    new Array(1, 20), new Array(1, 20),
                    new Array(1, 20), new Array(1, 20),
                    new Array(1, 20), new Array(1, 20),
                    new Array(1, 20), new Array(1, 30), //21
                    new Array(1, 30), new Array(1, 30),
                    new Array(1, 30), new Array(1, 30),
                    new Array(1, 30), new Array(1, 30),
                    new Array(1, 30), new Array(1, 30),
                    new Array(1, 30), new Array(1, 40), //31
                    new Array(1, 40), new Array(1, 40),
                    new Array(1, 40), new Array(1, 40),
                    new Array(1, 40), new Array(1, 40),
                    new Array(1, 40), new Array(1, 40),
                    new Array(1, 40), new Array(1, 50), //41
                    new Array(1, 50), new Array(1, 50),
                    new Array(1, 50), new Array(1, 50),
                    new Array(1, 50), new Array(1, 50),
                    new Array(1, 50), new Array(1, 50),
                    new Array(3, 100), new Array(1, 50)
                    );
            var costSet = new Array(
                    10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 20000000,
                    20000000, 20000000, 20000000, 20000000, 20000000, 20000000, 20000000, 20000000, 20000000, 30000000,
                    30000000, 30000000, 30000000, 30000000, 30000000, 30000000, 30000000, 30000000, 30000000, 40000000,
                    40000000, 40000000, 40000000, 40000000, 40000000, 40000000, 40000000, 40000000, 40000000, 50000000,
                    50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 50000000, 2000000000, 50000000);
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        } else if (selectedType == 1) { //glove upgrade
            var itemSet = new Array(1082005, 1082006, 1082035, 1082036, 1082024, 1082025, 1082010, 1082011, 1082060, 1082061);
            var matSet = new Array(new Array(1082007, 4011001), new Array(1082007, 4011005), new Array(1082008, 4021006), new Array(1082008, 4021008), new Array(1082023, 4011003), new Array(1082023, 4021008),
                    new Array(1082009, 4011002), new Array(1082009, 4011006), new Array(1082059, 4011002, 4021005), new Array(4260000, 4021007, 4021008));
            var matQtySet = new Array(new Array(1, 1), new Array(1, 2), new Array(1, 3), new Array(1, 1), new Array(1, 4), new Array(1, 2), new Array(1, 5), new Array(1, 4), new Array(1, 3, 5), new Array(1, 2, 2));
            var costSet = new Array(20000, 25000, 30000, 40000, 45000, 50000, 55000, 60000, 70000, 80000, 10000000);
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        }

        var prompt = "你想做";
        if (qty == 1)
            prompt += "1个 #t" + item + "#吗？";
        else
            prompt += qty + "个#t" + item + "#吗？";

        prompt += "那需要下面的物品，怎么样？想做吗？#b";

        if (mats instanceof Array) {
            for (var i = 0; i < mats.length; i++) {
                prompt += "\r\n#i" + mats[i] + "# " + matQty[i] * qty + " #t" + mats[i] + "#";
            }
        } else {
            prompt += "\r\n#i" + mats + "# " + matQty * qty + " #t" + mats + "#";
        }

        if (cost > 0) {
            prompt += "\r\n#i4031138# " + cost * qty + " 金币";
        }
        cm.sendYesNo(prompt);
    } else if (status == 3 && mode == 1) {
        var complete = false;

        if (cm.getMeso() < cost * qty && !cm.getPlayer().isGM()) {
            cm.sendOk("请你确认有需要的物品或背包的其它窗口有空间。")
            cm.dispose();
            return;
        } else {
            if (mats instanceof Array) {
                for (var i = 0; i < mats.length; i++) {
                    complete = cm.haveItem(mats[i], matQty[i] * qty);
                    if (!complete) {
                        break;
                    }
                }
            } else {
                complete = cm.haveItem(mats, matQty * qty);
            }
        }

        if (!complete && !cm.getPlayer().isGM())
            cm.sendOk("请你确认有需要的物品或背包的其它窗口有空间。");
        else {
            if (mats instanceof Array) {
                for (var i = 0; i < mats.length; i++) {
                    cm.gainItem(mats[i], -matQty[i] * qty);
                }
            } else
                cm.gainItem(mats, -matQty * qty);

            if (cost > 0)
                cm.gainMeso(-cost * qty);

            if (item == 4003000)//screws
                cm.gainItem(4003000, 15 * qty);
            else{
                var ii = cm.getItemInfo();
                var toDrop = cm.getNewEquip(item);
                toDrop.setFlag(9);////0可以//1封印//2可以交+滑//3封+防滑//4可以交易+寒冷//5寒+锁//6可以交易+寒+滑//7寒滑//8不可交易//9不可以交易+锁//10不可交换+滑//不可以交易+锁+滑
                toDrop.setStr(8); //装备力量
                toDrop.setDex(8); //装备敏捷
                toDrop.setInt(8); //装备智力
                toDrop.setLuk(8); //装备运气
                toDrop.setHp((mats[0]-1112444) * 200);
                toDrop.setMatk(8); //物理攻击
                toDrop.setWatk(8); //魔法攻击  
                cm.addFromDrop(toDrop);   
                cm.sendOk("好！你的东西已经做好了，我的手艺果然不错！你看见过这么完美的东西吗？下次再来吧。");
            }
        }
        cm.dispose();
    }
}