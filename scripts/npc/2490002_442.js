var status = 0;
var potList = Array(
Array(40603, "攻击Boss时伤害　[+40%]", 8000),
Array(40292, "无视怪物的防御　[+40%]", 8000),
Array(42051, "角色的自身攻击　[+12%]", 8000),
Array(60001, "角色的汇总伤害　[+12%]", 8000),
Array(40055, "角色的自身暴击　[+12%]", 8000),
Array(60002, "角色的所有属性　[+20%]", 8000),
Array(60007, "角色的自身血量　[+10%]", 8000),
Array(60008, "角色的物攻魔攻　[ 10 ]", 8000));
var potId = -1; //潜能的ID
var depict = ""; //潜能的描述
var points = -1; //每次的价格
var oldEquip;
var newEquip;
var count = 1; //定义洗到那个属性的次数
var slot = 1; //定义需要修改的装备在背包的位置
var Nx = -1;
//---------------------------------------------------------
var random = java.lang.Math.floor(Math.random() * 4);
var random1 = java.lang.Math.floor(Math.random() * 5000 + 1);
var a = "#fEffect/CharacterEff/1082565/0/0#";  //饼干兔子
var b = "#fEffect/CharacterEff/1112904/0/0#"; //彩色星星
var c = "#fEffect/ItemEff/1112811/0/0#";//"+z+"//美化
var d = "#fUI/Basic/LevelNo/0#"; //[1]+1
var e = "#fUI/Basic/LevelNo/1#"; //[1]+1
var f = "#fUI/Basic/LevelNo/2#"; //[1]+1
var j = "#fUI/Basic/LevelNo/3#"; //[1]+1
var h = "#fUI/Basic/LevelNo/4#"; //[1]+1
var i1 = "#fUI/Basic/LevelNo/5#"; //[1]+1
var g = "#fUI/Basic/LevelNo/6#"; //[1]+1
var k = "#fUI/Basic/LevelNo/7#"; //[1]+1
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK); //获得星期
var time = new Date();
var sjr = time.getDay();
switch (sjr) {
    case 0:
        var xq = "星期日";
        break;
    case 1:
        var xq = "星期一";
        break;
    case 2:
        var xq = "星期二";
        break;
    case 3:
        var xq = "星期三";
        break;
    case 4:
        var xq = "星期四";
        break;
    case 5:
        var xq = "星期五";
        break;
    case 6:
        var xq = "星期六";
        break;
    default:
}
var llb = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        //cm.openNpc(2490002);
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
        cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
        cm.dispose();
    } else if (status == 0) {
        cm.sendNext("#d尊敬的 [#r#h ##d] 玩家请选择潜能类型 -\r\n\r\n当前玩家拥有点卷数量：" + cm.getNX(1) + "\r\n当前玩家拥有抵用卷量：" + cm.getNX(2) + "\r\n======================================================\r\n#L0##r" + e + " [时代洗潜] 装备潜能第[1]行属性　　　[全天开放]#l\r\n#L1#" + f + " [时代洗潜] 装备潜能第[2]行属性　　　[全天开放]#l\r\n#L2#" + j + " [时代洗潜] 装备潜能第[3]行属性　　　[全天开放]#l\r\n#d#L3#" + h + " [时代洗潜] 附加潜能第[1]行属性　　　[全天开放]#l\r\n#L4#" + i1 + " [时代洗潜] 附加潜能第[2]行属性　　　[全天开放]#l\r\n#L5#" + g + " [时代洗潜] 附加潜能第[3]行属性　　　[全天开放]#l\r\n　");
    } else if (status == 1) {
        if (selection == 0) {
            llb = 1;
            cm.sendNext("\r\n#d尊敬的[ #r#h ##d ] 玩家请选择潜能 时代帮你洗 -\r\n玩家拥有点卷数量：#r" + cm.getNX(1) + "#d\r\n玩家拥有抵用卷量：#r" + cm.getNX(2) + "#d\r\n======================================================\r\n#L0#攻击Boss时伤害　[+40%]　　　　　　-[12000-抽一回]-#l\r\n#L1#无视怪物的防御　[+40%]　　　　　　-[12000-抽一回]-#l\r\n#L2#角色的自身攻击　[+12%]　　　　　　-[12000-抽一回]-#l\r\n#L3#角色的汇总伤害　[+12%]#r附加不能修整#d-[12000-抽一回]-#l\r\n#L4#角色的自身暴击　[+12%]#r附加不能修整#d-[12000-抽一回]-#l\r\n#L5#角色的所有属性　[+20%]#r附加不能修整#d-[12000-抽一回]-#l\r\n#L6#角色的自身血量　[+10%]#r附加不能修整#d-[12000-抽一回]-#l\r\n#L7#角色的物攻魔攻　[ 10 ]#r附加不能修整#d-[12000-抽一回]-#l\r\n　");
            //cm.dispose();
        } else if (selection == 1) {
            llb = 2;
            cm.sendNext("\r\n#d尊敬的[ #r#h ##d ] 玩家请选择潜能 时代帮你洗 -\r\n玩家拥有点卷数量：#r" + cm.getNX(1) + "#d\r\n玩家拥有抵用卷量：#r" + cm.getNX(2) + "#d\r\n======================================================\r\n#L0#攻击Boss时伤害　[+40%]　　　　　　-[12000-抽一回]-#l\r\n#L1#无视怪物的防御　[+40%]　　　　　　-[12000-抽一回]-#l\r\n#L2#角色的自身攻击　[+12%]　　　　　　-[12000-抽一回]-#l\r\n#L3#角色的汇总伤害　[+12%]#r附加不能修整#d-[12000-抽一回]-#l\r\n#L4#角色的自身暴击　[+12%]#r附加不能修整#d-[12000-抽一回]-#l\r\n#L5#角色的所有属性　[+20%]#r附加不能修整#d-[12000-抽一回]-#l\r\n#L6#角色的自身血量　[+10%]#r附加不能修整#d-[12000-抽一回]-#l\r\n#L7#角色的物攻魔攻　[ 10 ]#r附加不能修整#d-[12000-抽一回]-#l\r\n　");
            //cm.dispose();
        } else if (selection == 2) {
            llb = 3;
            cm.sendNext("\r\n#d尊敬的[ #r#h ##d ] 玩家请选择潜能 时代帮你洗 -\r\n玩家拥有点卷数量：#r" + cm.getNX(1) + "#d\r\n玩家拥有抵用卷量：#r" + cm.getNX(2) + "#d\r\n======================================================\r\n#L0#攻击Boss时伤害　[+40%]　　　　　　-[12000-抽一回]-#l\r\n#L1#无视怪物的防御　[+40%]　　　　　　-[12000-抽一回]-#l\r\n#L2#角色的自身攻击　[+12%]　　　　　　-[12000-抽一回]-#l\r\n#L3#角色的汇总伤害　[+12%]#r附加不能修整#d-[12000-抽一回]-#l\r\n#L4#角色的自身暴击　[+12%]#r附加不能修整#d-[12000-抽一回]-#l\r\n#L5#角色的所有属性　[+20%]#r附加不能修整#d-[12000-抽一回]-#l\r\n#L6#角色的自身血量　[+10%]#r附加不能修整#d-[12000-抽一回]-#l\r\n#L7#角色的物攻魔攻　[ 10 ]#r附加不能修整#d-[12000-抽一回]-#l\r\n　");
            //cm.dispose();
        } else if (selection == 3) {
            llb = 4;
            cm.sendNext("\r\n#d尊敬的[ #r#h ##d ] 玩家请选择潜能 时代帮你洗 -\r\n玩家拥有点卷数量：#r" + cm.getNX(1) + "#d\r\n玩家拥有抵用卷量：#r" + cm.getNX(2) + "#d\r\n======================================================\r\n#L0#攻击Boss时伤害　[+40%]　　　　　　-[12000-抽一回]-#l\r\n#L1#无视怪物的防御　[+40%]　　　　　　-[12000-抽一回]-#l\r\n#L2#角色的自身攻击　[+12%]　　　　　　-[12000-抽一回]-#l\r\n#L3#角色的汇总伤害　[+12%]#r附加不能修整#d-[12000-抽一回]-#l\r\n#L4#角色的自身暴击　[+12%]#r附加不能修整#d-[12000-抽一回]-#l\r\n#L5#角色的所有属性　[+20%]#r附加不能修整#d-[12000-抽一回]-#l\r\n#L6#角色的自身血量　[+10%]#r附加不能修整#d-[12000-抽一回]-#l\r\n#L7#角色的物攻魔攻　[ 10 ]#r附加不能修整#d-[12000-抽一回]-#l\r\n　");
            //cm.dispose();
        } else if (selection == 4) {
            llb = 5;
            cm.sendNext("\r\n#d尊敬的[ #r#h ##d ] 玩家请选择潜能 时代帮你洗 -\r\n玩家拥有点卷数量：#r" + cm.getNX(1) + "#d\r\n玩家拥有抵用卷量：#r" + cm.getNX(2) + "#d\r\n======================================================\r\n#L0#攻击Boss时伤害　[+40%]　　　　　　-[12000-抽一回]-#l\r\n#L1#无视怪物的防御　[+40%]　　　　　　-[12000-抽一回]-#l\r\n#L2#角色的自身攻击　[+12%]　　　　　　-[12000-抽一回]-#l\r\n#L3#角色的汇总伤害　[+12%]#r附加不能修整#d-[12000-抽一回]-#l\r\n#L4#角色的自身暴击　[+12%]#r附加不能修整#d-[12000-抽一回]-#l\r\n#L5#角色的所有属性　[+20%]#r附加不能修整#d-[12000-抽一回]-#l\r\n#L6#角色的自身血量　[+10%]#r附加不能修整#d-[12000-抽一回]-#l\r\n#L7#角色的物攻魔攻　[ 10 ]#r附加不能修整#d-[12000-抽一回]-#l\r\n　");
            //cm.dispose();
        } else if (selection == 5) {
            llb = 6;
            cm.sendNext("\r\n#d尊敬的[ #r#h ##d ] 玩家请选择潜能 时代帮你洗 -\r\n玩家拥有点卷数量：#r" + cm.getNX(1) + "#d\r\n玩家拥有抵用卷量：#r" + cm.getNX(2) + "#d\r\n======================================================\r\n#L0#攻击Boss时伤害　[+40%]　　　　　　-[12000-抽一回]-#l\r\n#L1#无视怪物的防御　[+40%]　　　　　　-[12000-抽一回]-#l\r\n#L2#角色的自身攻击　[+12%]　　　　　　-[12000-抽一回]-#l\r\n#L3#角色的汇总伤害　[+12%]#r附加不能修整#d-[12000-抽一回]-#l\r\n#L4#角色的自身暴击　[+12%]#r附加不能修整#d-[12000-抽一回]-#l\r\n#L5#角色的所有属性　[+20%]#r附加不能修整#d-[12000-抽一回]-#l\r\n#L6#角色的自身血量　[+10%]#r附加不能修整#d-[12000-抽一回]-#l\r\n#L7#角色的物攻魔攻　[ 10 ]#r附加不能修整#d-[12000-抽一回]-#l\r\n　");
            //cm.dispose();
        }
    } else if (status == 2) {
        if (llb == 1) {
            oldEquip = cm.getEquipBySlot(slot);
            if (oldEquip == null || oldEquip.getState(false) != 20) { //oldEquip.getState(false) != 20 检测装备普通潜能是否 SS
                cm.sendOk("出现错误: \r\n背包栏第1个位置的装备为空 或者 装备的潜能等级不为 SS");
                cm.dispose();
                return; //出现错误直接返回 不执行下面的操作 这个必须注意
            }
            var pot = potList[selection];
            if (pot != null) {
                potId = pot[0];
                depict = pot[1];
                points = pot[2];
                cm.sendNext("#d尊敬的 [ #r#h # #d] 玩家　　是否将装备窗位置[ 1 ]\r\n第一行的潜能属性 - #r不会变更其他行的属性 #d  \r\n时代管家设置属性 -#r " + depict + " #d\r\n注明：本次操作需消费 [ 5 ] 充值金额 \r\n\r\n#e#r　确认无误请单击 [ 下一步 ] 否则 [ 停止对话 ]#n#k\r\n");
            } else {
                cm.sendOk("\r\n\r\n\r\n\t\t\t#r#e抱歉！未知错误！！");
                cm.dispose();
            }
        } if (llb == 2) {
            oldEquip = cm.getEquipBySlot(slot);
            if (oldEquip == null || oldEquip.getState(false) != 20) { //oldEquip.getState(false) != 20 检测装备普通潜能是否 SS
                cm.sendOk("出现错误: \r\n背包栏第1个位置的装备为空 或者 装备的潜能等级不为 SS");
                cm.dispose();
                return; //出现错误直接返回 不执行下面的操作 这个必须注意
            }
            var pot = potList[selection];
            if (pot != null) {
                potId = pot[0];
                depict = pot[1];
                points = pot[2];
                cm.sendNext("#d尊敬的 [ #r#h # #d] 玩家　　是否将装备窗位置[ 1 ]\r\n第一行的潜能属性 - #r不会变更其他行的属性 #d  \r\n时代管家设置属性 -#r " + depict + " #d\r\n注明：本次操作需消费 [ 5 ] 充值金额 \r\n\r\n#e#r　确认无误请单击 [ 下一步 ] 否则 [ 停止对话 ]#n#k\r\n");
            } else {
                cm.sendOk("\r\n\r\n\r\n\t\t\t#r#e抱歉！未知错误！！");
                cm.dispose();
            }
        } if (llb == 3) {
            oldEquip = cm.getEquipBySlot(slot);
            if (oldEquip == null || oldEquip.getState(false) != 20) { //oldEquip.getState(false) != 20 检测装备普通潜能是否 SS
                cm.sendOk("出现错误: \r\n背包栏第1个位置的装备为空 或者 装备的潜能等级不为 SS");
                cm.dispose();
                return; //出现错误直接返回 不执行下面的操作 这个必须注意
            }
            var pot = potList[selection];
            if (pot != null) {
                potId = pot[0];
                depict = pot[1];
                points = pot[2];
                cm.sendNext("#d尊敬的 [ #r#h # #d] 玩家　　是否将装备窗位置[ 1 ]\r\n第一行的潜能属性 - #r不会变更其他行的属性 #d  \r\n时代管家设置属性 -#r " + depict + " #d\r\n注明：本次操作需消费 [ 5 ] 充值金额 \r\n\r\n#e#r　确认无误请单击 [ 下一步 ] 否则 [ 停止对话 ]#n#k\r\n");
            } else {
                cm.sendOk("\r\n\r\n\r\n\t\t\t#r#e抱歉！未知错误！！");
                cm.dispose();
            }
        } if (llb == 4) {
            oldEquip = cm.getEquipBySlot(slot);
            if (oldEquip == null || oldEquip.getState(false) != 20) { //oldEquip.getState(false) != 20 检测装备普通潜能是否 SS
                cm.sendOk("出现错误: \r\n背包栏第1个位置的装备为空 或者 装备的潜能等级不为 SS");
                cm.dispose();
                return; //出现错误直接返回 不执行下面的操作 这个必须注意
            }
            var pot = potList[selection];
            if (pot != null) {
                potId = pot[0];
                depict = pot[1];
                points = pot[2];
                cm.sendNext("#d尊敬的 [ #r#h # #d] 玩家　　是否将装备窗位置[ 1 ]\r\n第一行的潜能属性 - #r不会变更其他行的属性 #d  \r\n时代管家设置属性 -#r " + depict + " #d\r\n注明：本次操作需消费 [ 5 ] 充值金额 \r\n\r\n#e#r　确认无误请单击 [ 下一步 ] 否则 [ 停止对话 ]#n#k\r\n");
            } else {
                cm.sendOk("\r\n\r\n\r\n\t\t\t#r#e抱歉！未知错误！！");
                cm.dispose();
            }
        } if (llb == 5) {
            oldEquip = cm.getEquipBySlot(slot);
            if (oldEquip == null || oldEquip.getState(false) != 20) { //oldEquip.getState(false) != 20 检测装备普通潜能是否 SS
                cm.sendOk("出现错误: \r\n背包栏第1个位置的装备为空 或者 装备的潜能等级不为 SS");
                cm.dispose();
                return; //出现错误直接返回 不执行下面的操作 这个必须注意
            }
            var pot = potList[selection];
            if (pot != null) {
                potId = pot[0];
                depict = pot[1];
                points = pot[2];
                cm.sendNext("#d尊敬的 [ #r#h # #d] 玩家　　是否将装备窗位置[ 1 ]\r\n第一行的潜能属性 - #r不会变更其他行的属性 #d  \r\n时代管家设置属性 -#r " + depict + " #d\r\n注明：本次操作需消费 [ 5 ] 充值金额 \r\n\r\n#e#r　确认无误请单击 [ 下一步 ] 否则 [ 停止对话 ]#n#k\r\n");
            } else {
                cm.sendOk("\r\n\r\n\r\n\t\t\t#r#e抱歉！未知错误！！");
                cm.dispose();
            }
        } if (llb == 6) {
            oldEquip = cm.getEquipBySlot(slot);
            if (oldEquip == null || oldEquip.getState(false) != 20) { //oldEquip.getState(false) != 20 检测装备普通潜能是否 SS
                cm.sendOk("出现错误: \r\n背包栏第1个位置的装备为空 或者 装备的潜能等级不为 SS");
                cm.dispose();
                return; //出现错误直接返回 不执行下面的操作 这个必须注意
            }
            var pot = potList[selection];
            if (pot != null) {
                potId = pot[0];
                depict = pot[1];
                points = pot[2];
                cm.sendNext("#d尊敬的 [ #r#h # #d] 玩家　　是否将装备窗位置[ 1 ]\r\n第一行的潜能属性 - #r不会变更其他行的属性 #d  \r\n时代管家设置属性 -#r " + depict + " #d\r\n注明：本次操作需消费 [ 5 ] 充值金额 \r\n\r\n#e#r　确认无误请单击 [ 下一步 ] 否则 [ 停止对话 ]#n#k\r\n");
            } else {
                cm.sendOk("\r\n\r\n\r\n\t\t\t#r#e抱歉！未知错误！！");
                cm.dispose();
            }
        }
    } else if (status == 3) {
        if (llb == 1) {
            if (cm.getHyPay(1) < 5) {
                cm.sendOk("#e#r\r\n\r\n\t\t抱歉玩家！您当前金额不足！请充值！！");
                cm.dispose();
                return;
            } else {
                if (cm.addHyPay(5) > 0) {
                    cm.addHyPay(5);
                } else {
                    cm.sendOk("#e#r\r\n\r\n\t\t抱歉！未知错误！！！");
                }
            }
            if (potId <= 0 || depict == "" || points <= 0) {
                cm.sendOk("\r\n\r\n\t\t\t#e#r抱歉！购买失败！！");
                cm.dispose();
                return;
            }
            count = cm.getRandomPotential(slot, potId);
            count = count + Math.floor(Math.random() * 40) + 60;
            if (count > 0) {
                Nx = points * count;
                cm.sendNext("#d恭喜 [ #r#h # #d] 玩家\r\n\r\n用了 [ " + count + " ] 次洗出潜能 -#r" + depict + "#d\r\n\r\n保留潜能属性需 [ #r" + Nx + "#d ] 点卷 \r\n\r\n#r#e提示：确认保留请单击 [ 下一步 ] 否则 [ 停止对话 ]");
            } else {
                cm.sendOk("出现错误...");
                cm.dispose();
            }
        }
        if (llb == 2) {
            if (cm.getHyPay(1) < 5) {
                cm.sendOk("#e#r\r\n\r\n\t\t抱歉玩家！您当前金额不足！请充值！！");
                cm.dispose();
                return;
            } else {
                if (cm.addHyPay(5) > 0) {
                    cm.addHyPay(5);
                } else {
                    cm.sendOk("#e#r\r\n\r\n\t\t抱歉！未知错误！！！");
                }
            }
            if (potId <= 0 || depict == "" || points <= 0) {
                cm.sendOk("\r\n\r\n\t\t\t#e#r抱歉！购买失败！！");
                cm.dispose();
                return;
            }
            count = cm.getRandomPotential(slot, potId);
            count = count + Math.floor(Math.random() * 40) + 60;
            if (count > 0) {
                Nx = points * count;
                cm.sendNext("#d恭喜 [ #r#h # #d] 玩家\r\n\r\n用了 [ " + count + " ] 次洗出潜能 -#r" + depict + "#d\r\n\r\n保留潜能属性需 [ #r" + Nx + "#d ] 点卷 \r\n\r\n#r#e提示：确认保留请单击 [ 下一步 ] 否则 [ 停止对话 ]");
            } else {
                cm.sendOk("出现错误...");
                cm.dispose();
            }
        }
        if (llb == 3) {
            if (cm.getHyPay(1) < 5) {
                cm.sendOk("#e#r\r\n\r\n\t\t抱歉玩家！您当前金额不足！请充值！！");
                cm.dispose();
                return;
            } else {
                if (cm.addHyPay(5) > 0) {
                    cm.addHyPay(5);
                } else {
                    cm.sendOk("#e#r\r\n\r\n\t\t抱歉！未知错误！！！");
                }
            }
            if (potId <= 0 || depict == "" || points <= 0) {
                cm.sendOk("\r\n\r\n\t\t\t#e#r抱歉！购买失败！！");
                cm.dispose();
                return;
            }
            count = cm.getRandomPotential(slot, potId);
            count = count + Math.floor(Math.random() * 40) + 60;
            if (count > 0) {
                Nx = points * count;
                cm.sendNext("#d恭喜 [ #r#h # #d] 玩家\r\n\r\n用了 [ " + count + " ] 次洗出潜能 -#r" + depict + "#d\r\n\r\n保留潜能属性需 [ #r" + Nx + "#d ] 点卷 \r\n\r\n#r#e提示：确认保留请单击 [ 下一步 ] 否则 [ 停止对话 ]");
            } else {
                cm.sendOk("出现错误...");
                cm.dispose();
            }
        }
        if (llb == 4) {
            if (cm.getHyPay(1) < 5) {
                cm.sendOk("#e#r\r\n\r\n\t\t抱歉玩家！您当前金额不足！请充值！！");
                cm.dispose();
                return;
            } else {
                if (cm.addHyPay(5) > 0) {
                    cm.addHyPay(5);
                } else {
                    cm.sendOk("#e#r\r\n\r\n\t\t抱歉！未知错误！！！");
                }
            }
            if (potId <= 0 || depict == "" || points <= 0) {
                cm.sendOk("\r\n\r\n\t\t\t#e#r抱歉！购买失败！！");
                cm.dispose();
                return;
            }
            count = cm.getRandomPotential(slot, potId);
            count = count + Math.floor(Math.random() * 40) + 60;
            if (count > 0) {
                Nx = points * count;
                cm.sendNext("#d恭喜 [ #r#h # #d] 玩家\r\n\r\n用了 [ " + count + " ] 次洗出潜能 -#r" + depict + "#d\r\n\r\n保留潜能属性需 [ #r" + Nx + "#d ] 点卷 \r\n\r\n#r#e提示：确认保留请单击 [ 下一步 ] 否则 [ 停止对话 ]");
            } else {
                cm.sendOk("出现错误...");
                cm.dispose();
            }
        }
        if (llb == 5) {
            if (cm.getHyPay(1) < 5) {
                cm.sendOk("#e#r\r\n\r\n\t\t抱歉玩家！您当前金额不足！请充值！！");
                cm.dispose();
                return;
            } else {
                if (cm.addHyPay(5) > 0) {
                    cm.addHyPay(5);
                } else {
                    cm.sendOk("#e#r\r\n\r\n\t\t抱歉！未知错误！！！");
                }
            }
            if (potId <= 0 || depict == "" || points <= 0) {
                cm.sendOk("\r\n\r\n\t\t\t#e#r抱歉！购买失败！！");
                cm.dispose();
                return;
            }
            count = cm.getRandomPotential(slot, potId);
            count = count + Math.floor(Math.random() * 40) + 60;
            if (count > 0) {
                Nx = points * count;
                cm.sendNext("#d恭喜 [ #r#h # #d] 玩家\r\n\r\n用了 [ " + count + " ] 次洗出潜能 -#r" + depict + "#d\r\n\r\n保留潜能属性需 [ #r" + Nx + "#d ] 点卷 \r\n\r\n#r#e提示：确认保留请单击 [ 下一步 ] 否则 [ 停止对话 ]");
            } else {
                cm.sendOk("出现错误...");
                cm.dispose();
            }
        }
        if (llb == 6) {
            if (cm.getHyPay(1) < 5) {
                cm.sendOk("#e#r\r\n\r\n\t\t抱歉玩家！您当前金额不足！请充值！！");
                cm.dispose();
                return;
            } else {
                if (cm.addHyPay(5) > 0) {
                    cm.addHyPay(5);
                } else {
                    cm.sendOk("#e#r\r\n\r\n\t\t抱歉！未知错误！！！");
                }
            }
            if (potId <= 0 || depict == "" || points <= 0) {
                cm.sendOk("\r\n\r\n\t\t\t#e#r抱歉！购买失败！！");
                cm.dispose();
                return;
            }
            count = cm.getRandomPotential(slot, potId);
            count = count + Math.floor(Math.random() * 40) + 60;
            if (count > 0) {
                Nx = points * count;
                cm.sendNext("#d恭喜 [ #r#h # #d] 玩家\r\n\r\n用了 [ " + count + " ] 次洗出潜能 -#r" + depict + "#d\r\n\r\n保留潜能属性需 [ #r" + Nx + "#d ] 点卷 \r\n\r\n#r#e提示：确认保留请单击 [ 下一步 ] 否则 [ 停止对话 ]");
            } else {
                cm.sendOk("出现错误...");
                cm.dispose();
            }
        }
    } else if (status == 4) {
        if (llb == 1) {
            newEquip = cm.getEquipBySlot(slot);
            if (oldEquip == newEquip) { //这个地方还需要检测点卷数量
                if (cm.getPlayer().getCSPoints(1) >= Nx) {
                    if (cm.changePotential(slot, 1, potId, true)) { //[装备位置] [潜能位置] [潜能ID] [是否公告]
                        //todo 扣点卷
                        cm.gainNX(-Nx);
                        cm.sendOk("#r#e\r\n\r\n\t\t恭喜您！潜能属性变更成功！！");
                        cm.getPlayer().saveToDB(false, false);
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("#r#e\r\n\r\n\t\t\t出现错误！");
                        cm.dispose();
                    }
                } else {
                    cm.sendYesNo("\r\n\r\n\t　#e#r抱歉！点卷数量不充足！是否充值？");
                }
            } else {
                cm.sendOk("#r#e\r\n\r\n\t\t\t出现错误！");
                cm.dispose();
            }
        }
        if (llb == 2) {
            newEquip = cm.getEquipBySlot(slot);
            if (oldEquip == newEquip) { //这个地方还需要检测点卷数量
                if (cm.getPlayer().getCSPoints(1) >= Nx) {
                    if (cm.changePotential(slot, 2, potId, true)) { //[装备位置] [潜能位置] [潜能ID] [是否公告]
                        //todo 扣点卷
                        cm.gainNX(-Nx);
                        cm.sendOk("#r#e\r\n\r\n\t\t恭喜您！潜能属性变更成功！！");
                        cm.getPlayer().saveToDB(false, false);
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("#r#e\r\n\r\n\t\t\t出现错误！");
                        cm.dispose();
                    }
                } else {
                    cm.sendYesNo("\r\n\r\n\t　#e#r抱歉！点卷数量不充足！是否充值？");
                }
            } else {
                cm.sendOk("#r#e\r\n\r\n\t\t\t出现错误！");
                cm.dispose();
            }
        }
        if (llb == 3) {
            newEquip = cm.getEquipBySlot(slot);
            if (oldEquip == newEquip) { //这个地方还需要检测点卷数量
                if (cm.getPlayer().getCSPoints(1) >= Nx) {
                    if (cm.changePotential(slot, 3, potId, true)) { //[装备位置] [潜能位置] [潜能ID] [是否公告]
                        //todo 扣点卷
                        cm.gainNX(-Nx);
                        cm.sendOk("#r#e\r\n\r\n\t\t恭喜您！潜能属性变更成功！！");
                        cm.getPlayer().saveToDB(false, false);
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("#r#e\r\n\r\n\t\t\t出现错误！");
                        cm.dispose();
                    }
                } else {
                    cm.sendYesNo("\r\n\r\n\t　#e#r抱歉！点卷数量不充足！是否充值？");
                }
            } else {
                cm.sendOk("#r#e\r\n\r\n\t\t\t出现错误！");
                cm.dispose();
            }
        }
        if (llb == 4) {
            newEquip = cm.getEquipBySlot(slot);
            if (oldEquip == newEquip) { //这个地方还需要检测点卷数量
                if (cm.getPlayer().getCSPoints(1) >= Nx) {
                    if (cm.changePotential(slot, 4, potId, true)) { //[装备位置] [潜能位置] [潜能ID] [是否公告]
                        //todo 扣点卷
                        cm.gainNX(-Nx);
                        cm.sendOk("#r#e\r\n\r\n\t\t恭喜您！潜能属性变更成功！！");
                        cm.getPlayer().saveToDB(false, false);
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("#r#e\r\n\r\n\t\t\t出现错误！");
                        cm.dispose();
                    }
                } else {
                    cm.sendYesNo("\r\n\r\n\t　#e#r抱歉！点卷数量不充足！是否充值？");
                }
            } else {
                cm.sendOk("#r#e\r\n\r\n\t\t\t出现错误！");
                cm.dispose();
            }
        }
        if (llb == 5) {
            newEquip = cm.getEquipBySlot(slot);
            if (oldEquip == newEquip) { //这个地方还需要检测点卷数量
                if (cm.getPlayer().getCSPoints(1) >= Nx) {
                    if (cm.changePotential(slot, 5, potId, true)) { //[装备位置] [潜能位置] [潜能ID] [是否公告]
                        //todo 扣点卷
                        cm.gainNX(-Nx);
                        cm.sendOk("#r#e\r\n\r\n\t\t恭喜您！潜能属性变更成功！！");
                        cm.getPlayer().saveToDB(false, false);
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("#r#e\r\n\r\n\t\t\t出现错误！");
                        cm.dispose();
                    }
                } else {
                    cm.sendYesNo("\r\n\r\n\t　#e#r抱歉！点卷数量不充足！是否充值？");
                }
            } else {
                cm.sendOk("#r#e\r\n\r\n\t\t\t出现错误！");
                cm.dispose();
            }
        }
        if (llb == 6) {
            newEquip = cm.getEquipBySlot(slot);
            if (oldEquip == newEquip) { //这个地方还需要检测点卷数量
                if (cm.getPlayer().getCSPoints(1) >= Nx) {
                    if (cm.changePotential(slot, 6, potId, true)) { //[装备位置] [潜能位置] [潜能ID] [是否公告]
                        //todo 扣点卷
                        cm.gainNX(-Nx);
                        cm.sendOk("#r#e\r\n\r\n\t\t恭喜您！潜能属性变更成功！！");
                        cm.getPlayer().saveToDB(false, false);
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("#r#e\r\n\r\n\t\t\t出现错误！");
                        cm.dispose();
                    }
                } else {
                    cm.sendYesNo("\r\n\r\n#e#r\t　抱歉！点卷数量不充足！是否充值？");
                }
            } else {
                cm.sendOk("#r#e\r\n\r\n\t\t\t出现错误！");
                cm.dispose();
            }
        }
    } else if (status == 5) {
        if (llb == 1) {
            if (cm.getHyPay(1) * 3000 >= Nx) {
                var pay = Nx / 3000 + ((Nx % 3000 > 0) ? 1 : 0);
                var temp = ((pay * 10 % 10 > 0) ? (pay * 10 % 10) : 0);
                pay = pay - temp / 10;
                if (cm.addHyPay(pay) > 0) {
                    cm.gainNX(+pay * 3000);
                    if (cm.getPlayer().getCSPoints(1) >= Nx && cm.changePotential(slot, 1, potId, true)) {
                        cm.gainNX(-Nx);
                        cm.sendOk("#r#e\r\n\r\n\t\t恭喜您！潜能属性变更成功！！");
                        cm.getPlayer().saveToDB(false, false);
                        cm.dispose();
                    } else {
                        cm.sendOk("#r#e\r\n\r\n\t\t\t出现错误！");
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("#r#e\r\n\r\n\t\t\t出现错误！请联系管理员");
                    cm.dispose();
                }
            } else {
                cm.sendYesNo("\r\n\r\n#r#e\t　抱歉！您的充值金额不足！是否充值？");
            }
        }
        if (llb == 2) {
            if (cm.getHyPay(1) * 3000 >= Nx) {
                var pay = Nx / 3000 + ((Nx % 3000 > 0) ? 1 : 0);
                var temp = ((pay * 10 % 10 > 0) ? (pay * 10 % 10) : 0);
                pay = pay - temp / 10;
                if (cm.addHyPay(pay) > 0) {
                    cm.gainNX(+pay * 3000);
                    if (cm.getPlayer().getCSPoints(1) >= Nx && cm.changePotential(slot, 2, potId, true)) {
                        cm.gainNX(-Nx);
                        cm.sendOk("#r#e\r\n\r\n\t\t恭喜您！潜能属性变更成功！！");
                        cm.getPlayer().saveToDB(false, false);
                        cm.dispose();
                    } else {
                        cm.sendOk("#r#e\r\n\r\n\t\t\t出现错误！");
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("#r#e\r\n\r\n\t\t\t出现错误！请联系管理员");
                    cm.dispose();
                }
            } else {
                cm.sendYesNo("\r\n\r\n#r#e\t　抱歉！您的充值金额不足！是否充值？");
            }
        }
        if (llb == 3) {
            if (cm.getHyPay(1) * 3000 >= Nx) {
                var pay = Nx / 3000 + ((Nx % 3000 > 0) ? 1 : 0);
                var temp = ((pay * 10 % 10 > 0) ? (pay * 10 % 10) : 0);
                pay = pay - temp / 10;
                if (cm.addHyPay(pay) > 0) {
                    cm.gainNX(+pay * 3000);
                    if (cm.getPlayer().getCSPoints(1) >= Nx && cm.changePotential(slot, 3, potId, true)) {
                        cm.gainNX(-Nx);
                        cm.sendOk("#r#e\r\n\r\n\t\t恭喜您！潜能属性变更成功！！");
                        cm.getPlayer().saveToDB(false, false);
                        cm.dispose();
                    } else {
                        cm.sendOk("#r#e\r\n\r\n\t\t\t出现错误！");
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("#r#e\r\n\r\n\t\t\t出现错误！请联系管理员");
                    cm.dispose();
                }
            } else {
                cm.sendYesNo("\r\n\r\n#r#e\t　抱歉！您的充值金额不足！是否充值？");
            }
        }
        if (llb == 4) {
            if (cm.getHyPay(1) * 3000 >= Nx) {
                var pay = Nx / 3000 + ((Nx % 3000 > 0) ? 1 : 0);
                var temp = ((pay * 10 % 10 > 0) ? (pay * 10 % 10) : 0);
                pay = pay - temp / 10;
                if (cm.addHyPay(pay) > 0) {
                    cm.gainNX(+pay * 3000);
                    if (cm.getPlayer().getCSPoints(1) >= Nx && cm.changePotential(slot, 4, potId, true)) {
                        cm.gainNX(-Nx);
                        cm.sendOk("#r#e\r\n\r\n\t\t恭喜您！潜能属性变更成功！！");
                        cm.getPlayer().saveToDB(false, false);
                        cm.dispose();
                    } else {
                        cm.sendOk("#r#e\r\n\r\n\t\t\t出现错误！");
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("#r#e\r\n\r\n\t\t\t出现错误！请联系管理员");
                    cm.dispose();
                }
            } else {
                cm.sendYesNo("\r\n\r\n#r#e\t　抱歉！您的充值金额不足！是否充值？");
            }
        }
        if (llb == 5) {
            if (cm.getHyPay(1) * 3000 >= Nx) {
                var pay = Nx / 3000 + ((Nx % 3000 > 0) ? 1 : 0);
                var temp = ((pay * 10 % 10 > 0) ? (pay * 10 % 10) : 0);
                pay = pay - temp / 10;
                if (cm.addHyPay(pay) > 0) {
                    cm.gainNX(+pay * 3000);
                    if (cm.getPlayer().getCSPoints(1) >= Nx && cm.changePotential(slot, 5, potId, true)) {
                        cm.gainNX(-Nx);
                        cm.sendOk("#r#e\r\n\r\n\t\t恭喜您！潜能属性变更成功！！");
                        cm.getPlayer().saveToDB(false, false);
                        cm.dispose();
                    } else {
                        cm.sendOk("#r#e\r\n\r\n\t\t\t出现错误！");
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("#r#e\r\n\r\n\t\t\t出现错误！请联系管理员");
                    cm.dispose();
                }
            } else {
                cm.sendYesNo("\r\n\r\n#r#e\t　抱歉！您的充值金额不足！是否充值？");
            }
        }
        if (llb == 6) {
            if (cm.getHyPay(1) * 3000 >= Nx) {
                var pay = Nx / 3000 + ((Nx % 3000 > 0) ? 1 : 0);
                var temp = ((pay * 10 % 10 > 0) ? (pay * 10 % 10) : 0);
                pay = pay - temp / 10;
                if (cm.addHyPay(pay) > 0) {
                    cm.gainNX(+pay * 3000);
                    if (cm.getPlayer().getCSPoints(1) >= Nx && cm.changePotential(slot, 6, potId, true)) {
                        cm.gainNX(-Nx);
                        cm.sendOk("#r#e\r\n\r\n\t\t恭喜您！潜能属性变更成功！！");
                        cm.getPlayer().saveToDB(false, false);
                        cm.dispose();
                    } else {
                        cm.sendOk("#r#e\r\n\r\n\t\t\t出现错误！");
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("#r#e\r\n\r\n\t\t\t出现错误！请联系管理员");
                    cm.dispose();
                }
            } else {
                cm.sendYesNo("\r\n\r\n#r#e\t　抱歉！您的充值金额不足！是否充值？");
            }
        }
    } else if (status == 6) {
        cm.openWeb("http://www.baidu.com");
        cm.sendYesNo("\r\n\r\n#e#r\t\t充值完成请点击是!\r\n\t\t　　退出请点击否!");
        status = 3;
    }
}