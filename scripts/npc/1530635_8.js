var status;
var text;
var column = new Array("装备", "消耗", "设置", "其他", "商城");
var sel;
var 安全码;

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
        else {
            cm.dispose();
            return;
        }

        if (status == 0) {
            安全码 = generateMixed(4);
            text = "一键清除所有栏目道具#r（注意）#l\r\n\r\n#b"
            for (var i = 1; i <= 5; i++) {
                text += "#L" + i + "#清除" + column[i - 1] + "栏的所有道具#l\r\n";
            }
            cm.sendSimple(text);
        } else if (status == 1) {
            sel = selection;
            cm.sendYesNo("#r是否要清除" + column[sel - 1] + "栏的所有道具？？？此操作不可逆！");
        } else if (status == 2) {
            cm.sendGetText("为了确保您的数据安全，请输入安全码。\r\n #r - 安全码: " + 安全码);
        } else if (status == 3) {
            var pw = 安全码;
            if (pw == cm.getText()) {
                for (var i = 0; i < 96; i++) {
                    if (cm.getInventory(sel).getItem(i) != null) {
                        cm.removeAll(cm.getInventory(sel).getItem(i).getItemId());
                    }
                }
                cm.sendOk("清除完毕");
                cm.dispose();
            } else {
                status = 1;
                cm.sendNext("安全码输入错误，请重新输入！");
            }
        }
    }
}

var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function generateMixed(n) {
    var res = "";
    for (var i = 0; i < n; i++) {
        var id = Math.ceil(Math.random() * 35);
        res += chars[id];
    }
    return res;
}