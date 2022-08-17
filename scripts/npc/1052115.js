/*
 
 脚本：地铁
 */

var 最低等级 = 20;
var 最高等级 = 200;
var 杀怪数量 = 10000;
var 奖励勋章 = 1142141;
var 执行 = 0;
var section = 0;
importPackage(java.lang);
function action(mode, type, selection) {
  if (执行 == 99 || mode == -1) {
    cm.说明文字("需要的时候可以来找我。");
    cm.对话结束();
  }
  if (mode == 1) {
    执行++;
  } else {
    执行--;
  }
  if (执行 == 1) {
    if (cm.getMapId() == 910320001) {
      cm.warp(910320000, 0);
      cm.对话结束();
    } else if (cm.getMapId() == 910330001) {
      var itemid = 4001321;
      if (!cm.canHold(itemid)) {
        cm.说明文字("请空出一些其他栏。");
      } else {
        cm.gainItem(itemid, 1);
        cm.warp(910320000, 0);
      }
      cm.对话结束();
    } else if (cm.getMapId() >= 910320100 && cm.getMapId() <= 910320304) {
      cm.sendYesNo("你想要离开？？");
      执行 = 99;
    } else {
      cm.sendSimple(
        "   你好 #b#h ##k ，地铁站里遇到一些麻烦，你愿意帮助我吗？如果你愿意帮助我，我可以给予你 #v1142141#  #b#t1142141##k\r\n\r\n#b#L1#进入挑战\r\n#L2#进入列车\r\n#L3#领取勋章#l#k"
      );
    }
  } else if (执行 == 2) {
    section = selection;
    if (selection == 1) {
      if (
        cm.getPlayer().getLevel() < 最低等级 ||
        cm.getPlayer().getLevel() > 最高等级 ||
        !cm.isLeader()
      ) {
        cm.说明文字(
          "你需要等级 #b" +
            最低等级 +
            " - " +
            最高等级 +
            "#k 之内，开启组队后找我。"
        );
      } else {
        if (!cm.start_PyramidSubway(-1)) {
          cm.说明文字("目前是满的。");
        }
      }
    } else if (selection == 2) {
      if (cm.haveItem(4001321)) {
        if (cm.bonus_PyramidSubway(-1)) {
          cm.gainItem(4001321, -1);
        } else {
          cm.说明文字("里面已经满了。");
        }
      } else {
        cm.说明文字("你没有#v4001321# #b#t4001321##k。");
      }
    } else if (selection == 3) {
      var record = cm.getQuestRecord(7662);
      var data = record.getCustomData();
      if (data == null) {
        record.setCustomData("0");
        data = record.getCustomData();
      }
      var mons = parseInt(data);
      if (mons < 杀怪数量) {
        cm.说明文字("至少要杀死 #r" + 杀怪数量 + "#k 只怪物，目前:" + mons);
      } else if (cm.canHold(奖励勋章) && !cm.haveItem(奖励勋章)) {
        cm.gainItem(奖励勋章, 1);
        cm.forceStartQuest(29931);
        cm.forceCompleteQuest(29931);
      } else {
        cm.说明文字("请空出一些空间。");
      }
    }
    cm.对话结束();
  } else if (执行 == 100) {
    cm.warp(910320000, 0);
    cm.对话结束();
  }
}
