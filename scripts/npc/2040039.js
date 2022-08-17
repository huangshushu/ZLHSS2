/*
 
 脚本：玩具塔第四关
 */

var 收集卡片数量 = 6;
var 第四关经验 = 7500;

function action(mode, type, selection) {
  var eim = cm.getEventInstance();
  var stage4status = eim.getProperty("stage4status");

  if (stage4status == null) {
    if (cm.isLeader()) {
      var stage4leader = eim.getProperty("stage4leader");
      if (stage4leader == "done") {
        if (cm.haveItem(4001022, 收集卡片数量)) {
          cm.gainItem(4001022, -15);
          cm.sendNext("恭喜！你已经通过了第四阶段。快点现在，到第5阶段。");
          //cm.removeAll(4001022);
          clear(4, eim, cm);
          cm.givePartyExp(第四关经验);
        } else {
          cm.sendNext(
            "你确定你有收集了 #r" + 收集卡片数量 + "#k 张 #v4001022# ？？"
          );
        }
        cm.safeDispose();
      } else {
        cm.sendOk(
          "欢迎来到第四阶段。#r" +
            收集卡片数量 +
            "#k 张#v4001022#  来找我即可完成任务。"
        );
        eim.setProperty("stage4leader", "done");
        cm.safeDispose();
      }
    } else {
      cm.sendNext(
        "欢迎来到第四阶段。请收集#v4001022# 交给队长，然后叫队长来找我即可完成任务。"
      );
      cm.safeDispose();
    }
  } else {
    cm.sendNext("恭喜！你已经通过了第四阶段。快点现在，到第5阶段。");
    cm.safeDispose();
  }
}

function clear(stage, eim, cm) {
  eim.setProperty("stage" + stage.toString() + "status", "clear");
  cm.showEffect(true, "quest/party/clear");
  cm.playSound(true, "Party1/Clear");
  cm.environmentChange(true, "gate");
}
