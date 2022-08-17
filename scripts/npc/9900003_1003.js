/* 洗装备潜能 */

var status = -1;
var potList = Array(
Array(40603, "攻击BOSS时伤害：+40%", 1),
Array(40292, "无视怪物40%的防御率", 1),
Array(42051, "攻击力：+12%", 1),
Array(60001, "总伤害：+12% (不能修改附加潜能)", 1),
Array(60002, "所有属性：+20% (不能修改附加潜能)", 1),
Array(60007, "MaxHP : +10% (不能修改附加潜能)", 1),
Array(60008, "攻击力/魔力：+10% (不能修改附加潜能)", 1),
Array(40055, "爆击率 12%", 1));
var potId = -1; //潜能的ID
var depict = ""; //潜能的描述
var points = -1; //每次的价格
var potline = 2; //修改的潜能是第几条
var oldEquip;
var newEquip;
var count = 1; //定义洗到那个属性的次数
var slot = 1; //定义需要修改的装备在背包的位置
var potline = 2; //定义需要修改的是第几条潜能 [1-3] 为普通 [4-6] 为附加
var Nx = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n\r\n亲爱的#r#h ##k您好!想选择什么样的潜能:\r\n#k拥有橙色蜡笔: #r" + cm.itemQuantity(3994418) + "#v3994418##k\r\n\r\n";
        for (var i = 0; i < potList.length; i++) {
            selStr += "\r\n#L" + i + "##b" + potList[i][1] + "#k  \r\n\t#d(需消耗： #r" + potList[i][2] + "#k #k #d橙色蜡笔)#l\r\n";
        }
        cm.sendSimple(selStr + " \r\n ");
    } else if (status == 1) {
        oldEquip = cm.getEquipBySlot(slot);
        if (oldEquip == null || oldEquip.getState(false) != 0x14) { //oldEquip.getState() != 0x14 检测装备普通潜能是否 SS
            cm.sendOk("出现错误: \r\n背包栏第1个位置的装备为空 或者 装备的潜能等级不为 SS");
            cm.dispose();
            return; //出现错误直接返回 不执行下面的操作 这个必须注意
        }
        var pot = potList[selection];
        if (pot != null) {
            potId = pot[0];
            depict = pot[1];
            points = pot[2];
            cm.sendYesNo("您是否要将#b装备栏第一格装备\r\n第二条潜能属性(不会改变其它潜能属性)#k\r\n一键洗潜能属性为 #b" + depict + "#k？");
        } else {
            cm.sendOk("出现错误...");
            cm.dispose();
        }
    } else if (status == 2) {
	if(cm.itemQuantity(3994418) < 1) {
	    cm.sendOk("请确认背包中是否存在#v3994418##t3994418#");
	    cm.dispose();
	    return;
	}
        if (potId <= 0 || depict == "" || points <= 0) {
            cm.sendOk("购买道具出现错误...");
            cm.dispose();
            return;
        }
            cm.sendYesNo("洗出潜能属性为 #b" + depict + "#k 用了 #b" + count + "#k 次。\r\n本次保留该属性需要:#r 1 #k 橙色蜡笔 是否保留该属性？");
    } else if (status == 3) {
        newEquip = cm.getEquipBySlot(slot);
        if (oldEquip == newEquip) { //这个地方还需要检测点卷数量
                if (cm.changePotential(slot, potline, potId, true)) { //[装备位置] [潜能位置] [潜能ID] [是否公告]
                    //todo 扣点卷
		    cm.gainItem(3994418,-1);
                    cm.sendOk("恭喜您成功洗出潜能属性....");
		    cm.getPlayer().saveToDB(false, false);
		    cm.dispose();
		    return;
                } else {
                    cm.sendOk("出现错误...");
		    cm.dispose();
                }
        } else {
            cm.sendOk("出现错误...");
	    cm.dispose();
        }
    }
}