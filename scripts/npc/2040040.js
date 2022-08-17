/*
 
 脚本：玩具塔第五关
 */
var 收集卡片数量 = 20;
var 第五关经验 = 7500;

function action(mode, type, selection) {
  var eim = cm.getEventInstance();

  var stage5status = eim != null ? eim.getProperty("stage5status") : null;

  if (stage5status == null) {
    if (cm.isLeader()) {
      var stage5leader = eim.getProperty("stage5leader");
      if (stage5leader == "done") {
        if (cm.haveItem(4001022, 收集卡片数量)) {
          cm.gainItem(4001022, -20);
          cm.sendNext("恭喜！你已经通过了第五阶段。快点现在，到第6阶段。");
          //cm.removeAll(4001022);
          clear(5, eim, cm);
          cm.givePartyExp(第五关经验, eim.getPlayers());
        } else {
          cm.sendNext(
            "你确定你有收集了 #r" + 收集卡片数量 + "#k 张 #v4001022# ？？"
          );
        }
        cm.safeDispose();
      } else {
        cm.sendOk(
          "欢迎来到第五阶段。#r" +
            收集卡片数量 +
            "#k 张#v4001022#  来找我即可完成任务。"
        );
        eim.setProperty("stage5leader", "done");
        cm.safeDispose();
      }
    } else {
      cm.sendNext(
        "欢迎来到第五阶段。请收集#v4001022# 交给队长，然后叫队长来找我即可完成任务。"
      );
      cm.safeDispose();
    }
  } else {
    cm.sendNext("恭喜！你已经通过了第五阶段。快点现在，到第6阶段。");
    cm.safeDispose();
  }
}

function clear(stage, eim, cm) {
  eim.setProperty("stage" + stage.toString() + "status", "clear");
  cm.showEffect(true, "quest/party/clear");
  cm.playSound(true, "Party1/Clear");
  cm.environmentChange(true, "gate");
}
