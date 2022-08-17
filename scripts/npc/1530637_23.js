/*
Care - 脚本调整 - 
脚本定制 仿制脚本 
唯一方式 381991414
*/


var status = 0;
var Icon = Array(
    Array("方框", "#fUI/UIWindow.img/Item/New/inventory/0#"),
    Array("方框", "#fUI/UIWindow.img/Item/activeExpChairIcon#"),
    Array("锤子", "#fUI/Basic.img/Cursor/32/0#"),
    Array("数值", "#fUI/Basic.img/LevelNo/0#"),
    Array("数值", "#fUI/Basic.img/LevelNo/1#"),
    Array("数值", "#fUI/Basic.img/LevelNo/2#"),
    Array("数值", "#fUI/Basic.img/LevelNo/3#"),
    Array("数值", "#fUI/Basic.img/LevelNo/4#"),
    Array("数值", "#fUI/Basic.img/LevelNo/5#"),
    Array("数值", "#fUI/Basic.img/LevelNo/6#"),
    Array("数值", "#fUI/Basic.img/LevelNo/7#"),
    Array("数值", "#fUI/Basic.img/LevelNo/8#"),
    Array("数值", "#fUI/Basic.img/LevelNo/9#"),
    Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/disabled/0#"),
    Array("箭头", "#fUI/Basic.img/icon/arrow#"),
    Array("箭头", "#fUI/UIWindow.img/Quest/icon2/0#"),
    Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/11#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/10#")

);
//装备槽顺序
var selectedPosition = 0;
//被选择的装备列表
var selectedList = Array();
//筛选后的背包装备列表
var newItemList = Array();
//标记位
var step = 0;
//成功率
var successRate = 0;
//默认费用
var cost = 3;
//附加费用
var haveLuck = false;
var useLuck = false;
var sflag = false;
var txt;
var CAP = 0;
var COAT = 1;
var LONGCOAT = 2;
var PANTS = 3;
var SHOES = 4;
var GLOVE = 5;
var CAPE = 6;
var WEAPON = 7;
var ACCESSORY = 8;
var RING = 9;
var OTHERS = -1;

//装备等级
var grade = Array(
    "☆普通装备☆",
    "☆神秘震冰☆",
    "☆涅槃埃苏☆"
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
        if (mode == 0 && status == -1) {
            cm.dispose();
            return;
        }

        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {
            if (step == 1) {
                //清除副装备
                if (selectedPosition == 0)
                    selectedList.splice(0, 4);
                //加入到被选装备列表
                if (selection != -1)
                    selectedList[selectedPosition] = Array(selection, newItemList[selection]);
                //重置标记
                step = 0;
                //计算成功率
                successRate = getSuccessRate();
                //计算费用
                //cost = getCost();
            }
            txt = "#b┏　　　　　　　　" + Icon[17][1] + "  #r#e破攻传承#b#n  " + Icon[17][1] + "　　　　　　　　┓#k\r\n\r\n";

            var i = 0;
            if (selectedList[0] != null)
                txt += "　　　　　　#L" + i + "##v" + selectedList[0][1] + "##l  ";
            else
                txt += "　　　　　　#L" + 0 + "#" + Icon[1][1] + "#l  ";
            txt += Icon[14][1] + Icon[14][1] + Icon[14][1] + Icon[14][1];
            var i = 1;
            if (selectedList[1] != null)
                txt += "#L" + i + "##v" + selectedList[1][1] + "##l";
            else
                txt += "#L" + i + "#" + Icon[1][1] + "#l";
            txt += "\r\n\r\n";
            txt += "#b┗　　　　　　　　　　　　　　　　　　　　　　　　　┛#k\r\n\r\n";



            /* 显示已选择的道具信息 */
            if (selectedList.length >= 1) {
                txt += "#k\r\n#e┌\t\t     ─ 已经选择的装备信息 ─   \t\t┐#n\r\n\r\n";
                for (var key in selectedList) {
                    var item = cm.getInventory(1).getItem(selectedList[key][0]);
                    var owner = item.getOwner();
                    var flag = 0;
                    for (var i = 0; i < grade.length; i++) {
                        if (owner == grade[i])
                            break;
                        flag++;
                    }
                    if (flag >= grade.length)
                        owner = grade[0];
                    var itemSeq = "1", 标识 = "主";
                    if (key >= 1)
                        itemSeq = "2", 标识 = "副";
                    var itemLevel = item.getLevel();
                    var itemLevelStr = "";
                    if (itemLevel != 0)
                        itemLevelStr = " (+" + itemLevel + ")";
                    txt += "\t#fUI/Basic.img/LevelNo/" + itemSeq + "# #r[ " + 标识 + " ]#n #d#e" + cm.getItemName(item.getItemId()) + "#n" + itemLevelStr + " #b< " + getState(item) + " > #k\r\n";
                    txt += "\t#fUI/Basic.img/LevelNo/" + itemSeq + "# #b[ " + 标识 + " ]#n #b#e破攻信息 #n#r< " + item.getLimitBreak() + " > #k\r\n";
                }
                txt += "#k#e\r\n└\t\t\t\t\t\t\t\t\t\t\t┘#n\r\n\r\n";
            }
            //显示计算后的合成成功率以及所需要的费用
            txt += Icon[15][1] + " #d所需费用: 每 1000万 [#r " + cost + " #d] 元宝 [ 1000万 ] 冒险币\r\n";
            txt += Icon[15][1] + " #d第一个栏放入#r剥离道具#d，第二栏放入#b传承道具#k\r\n";
            txt += Icon[15][1] + " #d已剥离道具减少破攻值 破攻值将传承到新道具中#k\r\n\r\n";
            //显示确定按钮
            var lastBtn = Icon[13][1];
            if (selectedList.length >= 2) {
                lastBtn = Icon[16][1];
            }
            txt += "　　　　　　　　#L999#" + lastBtn + "#l\r\n\r\n\r\n";

            txt += "#b┏　　　　　　　　" + Icon[18][1] + "  #r#e详细介绍#b#n  " + Icon[18][1] + "　　　　　　　　┓#k\r\n";
            txt += "　　#b" + Icon[3][1] + " 传承道具将继承剥离道具的所有属性\r\n";
            txt += "　　#b" + Icon[4][1] + " 传承道具时将按照属性比例计算额外费用\r\n";
            txt += "　　#r" + Icon[5][1] + " 传承系统仅对 150 级以上道具开放#k\r\n";
            txt += "　　#r" + Icon[6][1] + " 传承系统成功率是 100% 且剥离道具消失#k\r\n";
            txt += "#b┗　　　　　　　　　　　　　　　　　　　　　　　　　┛#k\r\n\r\n";
            cm.sendSimpleN(txt, 716, 2400010);
        } else if (status == 1) {
            //装备合成逻辑运算
            if (sflag)
                selection = 999;
            if (selection == 999) {
                sflag = true;
                if (selectedList.length < 2) {
                    cm.sendPrev("无法合成，请至少放入一件副装备");
                } else {
                    if (cm.getRMB() < cost) {
                        cm.sendOk("您的元宝不足请充值");
                        cm.dispose();
                        return;
                    }
                    if (cm.getMeso() < 50000000) {
                        cm.sendOk("抱歉 你没有1000万冒险币");
                        cm.dispose();
                        return;
                    }
                    //主装备信息
                    var masterItemId = selectedList[0][1];
                    var masterItemPosition = selectedList[0][0];
                    var viceItemId = selectedList[1][1];
                    var viceItemPosition = selectedList[1][0];
                    cm.gainRMB(-cost);
                    cm.gainMeso(-50000000);
                    //合成成功部分
                    var masterItem = cm.getInventory(1).getItem(masterItemPosition);
                    var viceItem = cm.getInventory(1).getItem(viceItemPosition);
                    //var toDrop = cm.getNewEquip(viceItem.getItemId());//
                    var toDrop = viceItem.copy();
                    var equip = masterItem.copy();

                    //设置装备属性
                    toDrop.setLimitBreak(toDrop.getLimitBreak() + 10000000);
                    equip.setLimitBreak(equip.getLimitBreak() - 10000000);
                    cm.removeItem(masterItemPosition, 1, 1);
                    cm.removeItem(viceItemPosition, 1, 1);
                    cm.addFromDrop(toDrop);
                    cm.addFromDrop(equip);
                    var txt = "破攻转移成功！\r\n";

                    cm.sendOk(txt);
                    sflag = false;
                    cm.dispose();
                }
            } else {
                //选择装备过程
                selectedPosition = selection;
                if (selectedPosition != 0 && selectedList[0] == null) {
                    cm.sendPrev("请先选择主装备！");
                } else {
                    inventoryType = 1;
                    var list = cm.getInventory(inventoryType).list();
                    var itemList = list.iterator();
                    txt = "#e请选择需要被传承的装备：#n\r\n\r\n#b";
                    if (selectedPosition == 0) {
                        txt = "#e#d请选择主传承品：#n\r\n\r\n#b";
                    }
                    var indexof = 1;
                    newItemList = Array();
                    while (itemList.hasNext()) {
                        var item = itemList.next();
                        //破攻低于1000万过滤
                        if (item.getLimitBreak() < 10000000) continue;
                        //过滤现金装备
                        if (cm.isCash(item.getItemId())) continue;
                        //过滤不能参与合成部位
                        if (getItemType(item.getItemId()) == OTHERS) continue;
                        if (getItemType(item.getItemId()) != 7) continue;
                        //过滤小于50级的装备
                        var getReqLevel = cm.getReqLevel(item.getItemId());
                        if (getReqLevel < 100 && getItemType(item.getItemId()) != RING) continue;
                        //副装备过滤过程
                        if (selectedPosition != 0) {
                            //过滤类型
                            var getMasterItemType = getItemType(selectedList[0][1]);
                            var getViceItemType = getItemType(item.getItemId());
                            //如果属于上衣\裤子\套装
                            if (getMasterItemType == COAT || getMasterItemType == LONGCOAT || getMasterItemType == PANTS) {
                                if (getMasterItemType != getViceItemType && getViceItemType != LONGCOAT) {
                                    continue;
                                }
                            } else {
                                if (getMasterItemType != getViceItemType) continue;
                            }
                        }
                        //过滤已选装备
                        var flag = 0;
                        for (var key in selectedList) {
                            if (item.getPosition() == selectedList[key][0]) {
                                flag = 1;
                                break;
                            }
                        }
                        if (flag == 1) continue;
                        newItemList[item.getPosition()] = item.getItemId();
                    }
                    var xx = 0;
                    for (var key in newItemList) {
                        xx++;
                        txt += "#L" + key + "##v" + newItemList[key] + "#";
                        if (indexof > 1 && indexof % 5 == 0) {
                            txt += "\r\n";
                        }
                        indexof++;
                    }
                    status = -1;
                    step = 1;
                    if (xx <= 0) {
                        cm.playerMessage(1, "抱歉\r\n\r\n没有可以合成的道具");
                        cm.dispose();
                        return;
                    }
                    cm.sendSimple(txt);
                }
            }
        }
    }
}


//获取装备类型
function getItemType(itemid) {
    var type = Math.floor(itemid / 10000);
    switch (type) {
        case 100:
            return 0; //帽子
        case 104:
            return 1; //上衣
        case 105:
            return 2; //套装
        case 106:
            return 3; //裤裙
        case 107:
            return 4; //鞋子
        case 108:
            return 5; //手套
        case 110:
            return 6; //披风
        case 115:
            return 8; //护肩
        case 111:
            return 9; //ring
        default:
            if (type == 120) return -1; //图腾
            if (type == 135) return -1; //副手
            var type = Math.floor(type / 10);
            if (type == 12 || type == 13 || type == 14 || type == 15 || type == 17) {
                return 7; //武器
            }
            return -1;
    }
}
//计算成功率
function getSuccessRate() {
    var count = 0;
    for (var key in selectedList) {
        if (selectedList[key] != null && selectedList[key] != "") count++;
    }
    switch (count) {
        case 2:
            return 24;
        case 3:
            return 36;
        case 4:
            return 58;
        case 5:
            return 85;
        default:
            return 0;
    }
}
//计算费用
function getCost() {
    var item = cm.getInventory(1).getItem(selectedList[0][0]);
    var limitBreak = item.getLimitBreak();
    var lbCost = Math.floor(limitBreak / 1000000);
    var baseCost = 150 + lbCost;
    return baseCost;
}
//获取装备品级
function getGrade(equipPosition) {
    if (equipPosition != null) {
        var item = cm.getInventory(1).getItem(equipPosition);
        var itemGrade = item.getOwner();
        if (itemGrade == null || itemGrade == "")
            return 0;
        for (var k in grade) {
            if (itemGrade == grade[k])
                return k;
        }
    }
    return 0;
}

function getState(item) {
    var state = item.getState(false);
    // 16以下20以上都是未鉴定 16= C级 17=B级 18=A级 19=S级 20=SS级
    if (state < 16 || state > 20) {
        return "未鉴定";
    } else if (state == 16) {
        return "C级";
    } else if (state == 17) {
        return "B级";
    } else if (state == 18) {
        return "A级";
    } else if (state == 19) {
        return "S级";
    } else if (state == 20) {
        return "SS级";
    } else {
        return "无潜能";
    }
}