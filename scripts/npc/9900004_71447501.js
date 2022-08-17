/*
 
 作  者：小z
 联  系：71447500
 */

importPackage(net.sf.odinms.client);
var status = 0;
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var 物理防御;
var 魔法防御;
var fee;
var fee1;
var fee2;
var 百分比;
function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (mode == -1) {
    cm.对话结束();
  } else {
    if (mode == 0) {
      cm.说明文字("你没有卡号？");
      cm.对话结束();
      return;
    }
    if (mode == 1) {
      status++;
    } else {
      status--;
    }
    var 物理破甲 =
      cm.getPlayer().获取角色潜能汇总值(100) +
      cm.getPlayer().获取附魔汇总值(12);
    var 魔法破甲 =
      cm.getPlayer().获取角色潜能汇总值(101) +
      cm.getPlayer().获取附魔汇总值(11);
    var 防御崩坏 = cm.getPlayer().判断个人属性(1111007);
    var 魔法无效 = cm.getPlayer().判断个人属性(1211009);
    var 百分比 = 0;
    var 物理百分比 = 0;
    var 魔法百分比 = 0;
    var 物理防御2 = 0;
    var 魔法防御2 = 0;
    if (status == 0) {
      cm.sendGetText(
        "    Hi~#b#h ##k，这里是#b" +
          cm.开服名称() +
          "#k破甲计算系统，请输入目标防御值，我会根据你的属性来计算你可以造成多少输出。#k\r\n\r\n请输入防御值；"
      );
    } else if (status == 1) {
      fee = cm.getText();
      物理防御 = fee;
      魔法防御 = fee;
      if (fee > 0 && fee < 100000) {
        if (cm.getPlayer().获取附魔汇总值(13) > 0) {
          物理破甲 += (物理破甲 / 100) * cm.getPlayer().获取附魔汇总值(13);
          魔法破甲 += (魔法破甲 / 100) * cm.getPlayer().获取附魔汇总值(13);
        }
        var 文本 =
          "     Hi~#b#h ##k，输入目标防御后，会显示出你对目标造成的伤害占比，提升破甲值可以提升输出比，破甲会优先计算百分比破甲，再计算固定破甲值。\r\n\r\n";
        文本 += "     #d当前的状态 : ";
        if (冒险岛勇士() == 1) {
          百分比 += (冒险岛勇士等级() * 3) / 10;
          文本 += "#s1121000#";
        }
        if (防御崩坏 > 0) {
          物理百分比 += 防御崩坏 * 1;
          文本 += "#s1111007#";
        }
        if (魔法无效 > 0) {
          魔法百分比 += 魔法无效 * 1;
          文本 += "#s1211009#";
        }
        物理防御2 = 物理防御 * ((100 - (百分比 + 物理百分比)) / 100);
        魔法防御2 = 魔法防御 * ((100 - (百分比 + 魔法百分比)) / 100);
        文本 += "\r\n\r\n     #d目标防御值 : #d" + fee + "#k";
        //if(fee1 > 0){
        文本 += " (#r-" + (fee - 物理防御2).toFixed(0) + "#k)";
        文本 += " (#b-" + (fee - 魔法防御2).toFixed(0) + "#k)";
        //}
        文本 += "\r\n";
        文本 += "     #d物理破甲值 : #r" + 物理破甲 + "#k\r\n";
        文本 +=
          "     #d物理输出率 : #d" +
          (100 - cm.防御计算(物理防御2 - 物理破甲)).toFixed(2) +
          "%#k\r\n";
        文本 += "     #d魔法破甲值 : #b" + 魔法破甲 + "#k\r\n";
        文本 +=
          "     #d魔法输出率 : #d" +
          (100 - cm.防御计算(魔法防御2 - 魔法破甲)).toFixed(2) +
          "%#k\r\n";
        cm.说明文字(文本);
        cm.对话结束();
      } else {
        cm.对话结束();
      }
    }
  }
}

function 冒险岛勇士等级() {
  var Level = 0;
  if (cm.判断职业() == 112) {
    var Level = cm.判断技能等级(1121000);
  } else if (cm.判断职业() == 122) {
    var Level = cm.判断技能等级(1221000);
  } else if (cm.判断职业() == 123) {
    var Level = cm.判断技能等级(1321000);
  } else if (cm.判断职业() == 212) {
    var Level = cm.判断技能等级(2121000);
  } else if (cm.判断职业() == 222) {
    var Level = cm.判断技能等级(2221000);
  } else if (cm.判断职业() == 232) {
    var Level = cm.判断技能等级(2321000);
  } else if (cm.判断职业() == 312) {
    var Level = cm.判断技能等级(3121000);
  } else if (cm.判断职业() == 322) {
    var Level = cm.判断技能等级(3221000);
  } else if (cm.判断职业() == 412) {
    var Level = cm.判断技能等级(4121000);
  } else if (cm.判断职业() == 422) {
    var Level = cm.判断技能等级(4221000);
  } else if (cm.判断职业() == 512) {
    var Level = cm.判断技能等级(5121000);
  } else if (cm.判断职业() == 522) {
    var Level = cm.判断技能等级(5221000);
  } else if (cm.判断职业() == 2112) {
    var Level = cm.判断技能等级(21121000);
  }
  return Level;
}

function 冒险岛勇士() {
  if (
    cm.getPlayer().isActiveBuffedValue(1121000) ||
    cm.getPlayer().isActiveBuffedValue(1221000) ||
    cm.getPlayer().isActiveBuffedValue(1321000) ||
    cm.getPlayer().isActiveBuffedValue(2121000) ||
    cm.getPlayer().isActiveBuffedValue(2221000) ||
    cm.getPlayer().isActiveBuffedValue(2321000) ||
    cm.getPlayer().isActiveBuffedValue(3121000) ||
    cm.getPlayer().isActiveBuffedValue(3221000) ||
    cm.getPlayer().isActiveBuffedValue(4121000) ||
    cm.getPlayer().isActiveBuffedValue(4221000) ||
    cm.getPlayer().isActiveBuffedValue(5121000) ||
    cm.getPlayer().isActiveBuffedValue(5221000) ||
    cm.getPlayer().isActiveBuffedValue(21121000)
  ) {
    return 1;
  } else {
    return 0;
  }
}
