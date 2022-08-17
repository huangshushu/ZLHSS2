var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed = 0;
var rmb = 0;
var weaponId = null;
var weaponList = Array(
//战士
        1262015, // chaoneng
        1542015, // 剑豪
        1552015, // 阴阳师
        1432086, // 狮心长枪, // (无描述)
        1442116, // 狮心矛
        1302152, // 狮心弯刀, // (无描述)
        1232014, // 狮心痛苦命运, // (无描述)
        1322096, // 狮心震雷钉, // (无描述)
        1402095, // 狮心战斗弯刀, // (无描述)

//双弩
        1522018, // 龙翼巨弩枪, // (无描述)
//双刀
        1342036, // 精灵角暗影刀, // (无描述)
//法师
        1372084, // 龙尾精灵短杖, // (无描述)
        1382104, // 龙尾战斗长杖, // (无描述)
        1212014, // 龙尾黑甲凶灵, // (无描述)
//弓箭
        1452111, // 鹰翼组合弓, // (无描述)
        1462099, // 鹰翼重弩, // (无描述)

//尖兵
        1242042, // 渡鸦之魂女王意志之剑, // (无描述)
        1332130, // 渡鸦之魂短刀, // (无描述)
        1362019, // 渡鸦之魂真红手杖, // (无描述)
        1472122, // 干贴全套
//船长
        1482084, // 鲨齿巨鹰爪, // (无描述)
        1492085, // 鲨齿锐利手铳, // (无描述)
        1532018, // 鲨齿火焰炮, // (无描述)
        1222014, // 鲨齿灵魂汲取者, // (无描述)
        1242014 // 鲨齿女王意志之剑, // (无描述)
        );
var needItemList = Array(
        Array(4000286, 1111),
        Array(4000361, 1111),
        Array(4021022, 1)
        );
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            var selStr = "#d我这里可以制作140级武器，请选择想要制作的装备：#n#k\r\n";
            for (var key in weaponList) {
                var item = weaponList[key];
                selStr += "#r#L" + key + "#制作 #b#z" + item + "# #r[查看详情]\r\n";
            }
            cm.sendSimple(selStr);
        } else if (status == 1) {
            weaponId = selection;
            var text = "- #e#d#z" + weaponList[weaponId] + "#需要的材料：#n#k\r\n\r\n#b";
            for (var key in needItemList) {
                var itemName = cm.getItemName(needItemList[key][0]);
                text += itemName;
                for (var i = 0; i <= 25 - itemName.getBytes().length; i++)
                {
                    text += " ";
                }
                var currentItemQuantity = cm.getItemQuantity(needItemList[key][0]);
                var color = "#g";
                if (currentItemQuantity < needItemList[key][1])
                    color = "#r";
                text += color + currentItemQuantity + " / " + needItemList[key][1] + " 个#b\r\n";
            }
            text += "#k\r\n\r\n- #e#d管理提示：#n#b点是进行制作。点否返回上一页.#k";
            cm.sendYesNo(text);
        } else if (status == 2) {
            flag = true;
            for (var key in needItemList) {
                var itemId = needItemList[key][0];
                var itemQuantity = needItemList[key][1];
                if (!cm.haveItem(itemId, itemQuantity))
                {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                if (cm.getSpace(1) < 1) {
                    cm.sendOk("装备栏空间不足，请整理后重新制作！");
                    cm.dispose();
                    return;
                }
                for (var key in needItemList) {
                    var itemId = needItemList[key][0];
                    var itemQuantity = needItemList[key][1];
                    cm.gainItem(itemId, -itemQuantity);
                }
                cm.gainItem(weaponList[weaponId], 1);
                cm.sendOk("恭喜您合成#z" + weaponList[weaponId] + "#一把.");
                cm.worldSpouseMessage(0x20, "[任务公告] : 恭喜 " + cm.getChar().getName() + " 制作了一件 <" + cm.getItemName(weaponList[weaponId]) + ">.");
                cm.dispose();
            } else {
                cm.sendOk("材料不足，无法完成制作！");
                cm.dispose();
            }
        }
    }
}