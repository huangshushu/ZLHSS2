
var status = -1;
var useItems = [
    [2070001, 3],
    [2070002, 3],
    [2070003, 3],
    [2070004, 3],
    [2070005, 3],
    [2070006, 3],
    [2070007, 3],
    [2070008, 1],
    [2070009, 3],
    [2070010, 3],
    [2070012, 3],
    [2070013, 3],
    [2070019, 3],
    [2070024, 3],
];
var useMeso = 999999999;
var useCL = [4021010, 10]
function start() {
    status = -1;
    action(1,0,0)

}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        var txt = "我这里可以帮你合成#v2070026#，消耗以下道具：\r\n"
        for (var i in useItems) {
            txt += "#v"+useItems[i][0]+"# "+cm.getInventory(2).listById(useItems[i][0]).length+"/"+useItems[i][1]+"组\r\n"
        }
		txt += "同时需要消耗金币"+useMeso+"和"+useCL[1]+"个#v"+useCL[0]+"#"
        txt += "\r\n#e#r你是否要进行合成？"
        cm.sendOk(txt);
    }
    if (status == 1) {
        var list = [];
        if (!cm.canHold()) {
            cm.sendOk("你的背包空间不足");
            cm.dispose();
            return;
        } else if (!cm.haveItem(useCL[0], useCL[1])) {
			cm.sendOk("你没有"+useCL[1]+"个#v"+useCL[0]+"#");
			cm.dispose();
			return;
		} else if (cm.getMeso() < useMeso) {
			cm.sendOk("你没有"+useMeso+"金币");
			cm.dispose();
			return;
		}
        for (var i in useItems) {
            var temp = cm.getInventory(2).listById(useItems[i][0]);
            if (temp.length < useItems[i][1]) {
                cm.sendOk("你的#v"+useItems[i][0]+"# 不足"+useItems[i][1]+"组");
                cm.dispose();
                return;
            } else {
                for (var j in temp) {
                    if (j < useItems[i][1]) {
                        list.push(temp[j].getPosition());
                    }
                }
            }
        }
        for (var i in list) {
            cm.removeSlot(2, list[i], cm.getInventory(2).getItem(list[i]).getQuantity());
        }
		cm.gainItem(useCL[0], -useCL[1]);
		cm.gainMeso(-useMeso);
        cm.gainItem(2070026,9999);
        cm.sendOk("恭喜你合成成功");
        cm.dispose();
    }
}
