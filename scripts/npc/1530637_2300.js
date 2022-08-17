var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed = 0;
var rmb = 0;
var weaponId = null;
var weaponList = Array(
        1003797, // 高贵战士头盔, // (无描述)
        1003798, // 高贵流丹维奇帽, // (无描述)
        1003799, // 高贵游侠贝雷帽, // (无描述)
        1003800, // 高贵刺客软帽, // (无描述)
        1003801, // 高贵流浪者帽, // (无描述)
        1042254, // 鹰眼战士盔甲, // (无描述)
        1042255, // 鹰眼丹维奇长袍, // (无描述)
        1042256, // 鹰眼游侠斗篷, // (无描述)
        1042257, // 鹰眼刺客衬衣, // (无描述)
        1042258, // 鹰眼流浪者外衣, // (无描述)
        1062165, // 魔术师战士短裤, // (无描述)
        1062166, // 魔术师丹维奇短裤, // (无描述)
        1062167, // 魔术师游侠短裤, // (无描述)
        1062168, // 魔术师刺客短裤, // (无描述)
        1062169 // 魔术师流浪者短裤, // (无描述)
        );
var needItemList = Array(
        Array(4001126, 8000),
        Array(4310036, 5000),
        Array(4310088, 100),
        Array(4021012, 10),
        Array(4021022, 10),
        Array(4021016, 30),
        Array(4033356, 30),
        Array(4310015, 15),
        Array(4000124, 8),
        Array(4000463, 30)
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
            var selStr = "#d我这里可以制作150级武器，请选择想要制作的装备：#n#k\r\n";
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