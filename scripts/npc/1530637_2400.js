var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed = 0;
var rmb = 0;
var weaponId = null;
var weaponList = Array(
        1402180, // 解放的凯瑟利安, // (无描述)
        1382235, // 阿丽莎之光辉, // (无描述)
        1402224, // 柳德之剑, // (无描述)
        1004075, // 海神王冠, // (无描述)
        1003719, // 进阶精灵帽, // (无描述)
        1003720, // 进阶半半头盔, // (无描述)
        1003721, // 进阶女王王冠, // (无描述)
        1003722, // 进阶贝伦头盔, // (无描述)
        1022226, // 独眼巨人之眼Lv.3, // (无描述)
        1012319 // 8周年点点红, // (无描述)
        );
var needItemList = Array(
        Array(4001126, 3000),
        Array(4310036, 1000),
        Array(4310030, 1000),
        Array(2210006, 10),
        Array(4032966, 10),
        Array(4000040, 10),
        Array(4000313, 30),
        Array(4310015, 3),
        Array(4021019, 1)
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