/*
 
 脚本：金字塔
 */
var 最低等级 = 40;
var 最高等级 = 255;
var 杀怪数量 = 50000;
var 奖励勋章 = 1142142;
var status = 0;
var section = 0;
importPackage(java.lang);
function action(mode, type, selection) {
  if (mode == 1) {
    status++;
  } else {
    if (status == 99) {
      cm.dispose();
      return;
    }
    status--;
  }
  if (status == 1) {
    if (cm.getMapId() >= 926020001 && cm.getMapId() <= 926020004) {
      var itemid = 4001321 + (cm.getMapId() % 10);
      if (!cm.canHold(itemid)) {
        cm.说明文字("请空出一些其他栏。");
      } else {
        cm.gainItem(itemid, 1);
        cm.warp(cm.getMapId() - 10000, 0);
      }
      cm.dispose();
    } else if (cm.getMapId() >= 926010001 && cm.getMapId() <= 926010004) {
      cm.warp(926010000, 0);
      cm.dispose();
    } else if (cm.getMapId() >= 926010100 && cm.getMapId() <= 926013504) {
      cm.sendYesNo("你想要离开这里？？");
      status = 99;
    } else {
      cm.sendSimple(
        "   你好 #b#h ##k ，你要去金字塔吗？很危险的，你能力够不够啊？\r\n#b#L1#进入金字塔副本#l\r\n#L2#进入法老副本#l\r\n#L3#兑换腰带#l\r\n#L4#兑换勋章#l#k"
      );
    }
  } else if (status == 2) {
    section = selection;
    if (selection == 1) {
      cm.sendSimple("\r\n#b#L3#我想好了，开始挑战吧#l");
    } else if (selection == 2) {
      cm.sendSimple(
        "给我想要的宝石，我就送你进去。\r\n\r\n#b#L0##i4001322##t4001322##l\r\n#L1##i4001323##t4001323##l\r\n#L2##i4001324##t4001324##l\r\n#L3##i4001325##t4001325##l"
      );
    } else if (selection == 3) {
      cm.sendSimple(
        "实力强大的人，需要好的装备加持。#b\r\n#L0##i1132012##z1132012##l\r\n#L1##i1132013##z1132013##l"
      );
    } else if (selection == 4) {
      var record = cm.getQuestRecord(7760);
      var data = record.getCustomData();
      if (data == null) {
        record.setCustomData("0");
        data = record.getCustomData();
      }
      var mons = parseInt(data);
      if (mons < 杀怪数量) {
        cm.说明文字(
          "请击杀 #b" +
            杀怪数量 +
            "#k 只金字塔副本内的怪物，目前 : #b" +
            mons +
            "#k "
        );
      } else if (cm.canHold(奖励勋章) && !cm.haveItem(奖励勋章)) {
        cm.gainItem(奖励勋章, 1);
        cm.forceStartQuest(29932);
        cm.forceCompleteQuest(29932);
      } else {
        cm.说明文字("请空出一些装备栏空间。");
      }
      cm.dispose();
    }
  } else if (status == 3) {
    if (section == 1) {
      var cont_ = false;
      if (cm.判断等级() < 最低等级) {
        cm.说明文字("你的等级低于 #b" + 最低等级 + "#k 级。");
      } else if (cm.判断等级() > 最高等级) {
        cm.说明文字("你的等级高于 #b" + 最高等级 + "#k 级。");
      } else {
        cont_ = true;
      }
      if (cont_ && cm.isLeader()) {
        if (!cm.start_PyramidSubway(selection)) {
          cm.说明文字("目前金字塔副本满人，请稍后再尝试。");
        }
      } else if (cont_ && !cm.isLeader()) {
        cm.说明文字("请找您的队长来找我说话。");
      }
    } else if (section == 2) {
      var itemid = 4001322 + selection;
      if (!cm.haveItem(itemid, 1)) {
        cm.说明文字("你没有#b#t" + itemid + "##k。");
      } else {
        if (cm.bonus_PyramidSubway(selection)) {
          cm.gainItem(itemid, -1);
        } else {
          cm.说明文字("目前金字塔副本满人，请稍后再尝试。");
        }
      }
    } else if (section == 3) {
      if (selection == 0) {
        if (cm.canHold(1132012)) {
          if (cm.haveItem(2022613, 1000)) {
            cm.gainItem(2022613, -1000);
            cm.gainItem(1132012, 1);
            cm.说明文字("来这是你的奖励。");
          } else {
            cm.说明文字("我需要 #v2022613# #b#t2022613##k #b1000#k 个。");
          }
          cm.说明文字("请空出一些空间。");
        }
      } else if (selection == 1) {
        if (cm.canHold(1132013)) {
          if (cm.haveItem(2022613, 400) && cm.haveItem(1132012)) {
            cm.gainItem(2022613, -400);
            cm.gainItem(1132012, -1);
            cm.gainItem(1132013, 1);
            cm.说明文字("来这是你的奖励。");
          } else {
            cm.说明文字(
              "我需要 #v2022613# #b#t2022613##k 400个 和一条 #b#v1132012##t1132012#。"
            );
          }
          cm.说明文字("请空出一些空间。");
        }
      }
      cm.dispose();
    } else if (status == 100) {
      cm.warp(926010000, 0);
      cm.dispose();
    }
  }
}
