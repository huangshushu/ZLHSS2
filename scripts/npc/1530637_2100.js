var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed = 0;
var rmb = 0;
var weaponId = null;
var weaponList = Array(
        1052314, // 狮心战斗锁子甲, // (无描述)
        1052315, // 龙尾法师长袍, // (无描述)
        1052316, // 鹰翼哨兵服, // (无描述)
        1052317, // 渡鸦之魂追踪者盔甲, // (无描述)
        1052318, // 鲨齿船长外套, // (无描述)
        1082296, // 龙尾法师手套, // (无描述)
        1082297, // 鹰翼哨兵手套, // (无描述)
        1082298, // 渡鸦之魂追踪者手套, // (无描述)
        1082299, // 鲨齿船长手套, // (无描述)
        1082295, // 狮心战斗护腕, // (无描述)
        1152110, // 龙尾法师护肩, // (无描述)
        1152111, // 鹰翼哨兵护肩, // (无描述)
        1152112, // 渡鸦之魂猎人护肩, // (无描述)
        1152113, // 鲨齿船长护肩, // (无描述)
        1152108, // 狮心战斗护肩, // (无描述)
        1102275, // 狮心战斗披风, // (无描述)
        1102276, // 龙尾法师披风, // (无描述)
        1102277, // 鹰翼哨兵披风, // (无描述)
        1102278, // 渡鸦之魂猎人披风, // (无描述)
        1102279, // 鲨齿船长披风, // (无描述)
        1003172, // 狮心战斗头盔, // (无描述)
        1003173, // 龙尾法师帽子, // (无描述)
        1003174, // 鹰翼哨兵便帽, // (无描述)
        1003175, // 渡鸦之魂追踪者帽, // (无描述)
        1003176, // 鲨齿船长帽, // (无描述)
        1072485, // 狮心战斗鞋, // (无描述)
        1072486, // 龙尾法师鞋, // (无描述)
        1072487, // 鹰翼哨兵鞋, // (无描述)
        1072488, // 渡鸦之魂追踪者鞋, // (无描述)
        1072489 // 鲨齿船长鞋, // (无描述)
        );
var needItemList = Array(
        Array(4000286, 888),
        Array(4000361, 888),
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
            var selStr = "#d我这里可以制作140级防具，请选择想要制作的装备：#n#k\r\n";
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