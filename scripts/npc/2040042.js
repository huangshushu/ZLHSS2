/*
 
 脚本：玩具塔第七关
 */
var 收集卡片数量 = 3;
var 第七关经验 = 7500;

var status;

function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  var eim = cm.getEventInstance();
  var stage7status = eim.getProperty("stage7status");

  if (stage7status == null) {
    if (cm.isLeader()) {
      var stage7leader = eim.getProperty("stage7leader");
      if (stage7leader == "done") {
        if (cm.haveItem(4001022, 收集卡片数量)) {
          cm.gainItem(4001022, -3);
          cm.sendNext("恭喜！你已经通过了第七阶段。快点现在，到第8阶段。");
          //cm.removeAll(4001022);
          clear(7, eim, cm);
          cm.givePartyExp(第七关经验, eim.getPlayers());
          cm.dispose();
        } else {
          cm.sendNext(
            "你确定你有收集了 #r" + 收集卡片数量 + "#k 张 #v4001022# ？？"
          );
        }
        cm.dispose();
      } else {
        cm.sendOk(
          "欢迎来到第七阶段。#r" +
            收集卡片数量 +
            "#k 张#v4001022#  来找我即可完成任务。"
        );
        eim.setProperty("stage7leader", "done");
        cm.dispose();
      }
    } else {
      cm.sendNext(
        "欢迎来到第七阶段。请收集#v4001022# 交给队长，然后叫队长来找我即可完成任务。"
      );
      cm.dispose();
    }
  } else {
    cm.sendNext("恭喜！你已经通过了第七阶段。快点现在，到第8阶段。");
    cm.dispose();
  }
}

function clear(stage, eim, cm) {
  eim.setProperty("stage" + stage.toString() + "status", "clear");
  cm.showEffect(true, "quest/party/clear");
  cm.playSound(true, "Party1/Clear");
  cm.environmentChange(true, "gate");
}
