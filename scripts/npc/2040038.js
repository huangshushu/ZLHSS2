/*
 
 脚本：玩具塔第三关
 */

var 收集卡片数量 = 20;
var 第三关经验 = 7500;

var status = -1;

function action(mode, type, selection) {
  var eim = cm.getEventInstance();
  var stage3status = eim.getProperty("stage3status");

  if (stage3status == null) {
    if (cm.isLeader()) {
      var stage3leader = eim.getProperty("stage3leader");
      if (stage3leader == "done") {
        if (cm.haveItem(4001022, 收集卡片数量)) {
          cm.gainItem(4001022, -20);
          cm.sendNext("恭喜！你已经通过了第三阶段。快点现在，到第4阶段。");
          //cm.removeAll(4001022);
          clear(3, eim, cm);
          cm.givePartyExp(第三关经验, eim.getPlayers());
        } else {
          cm.sendNext(
            "你确定你有收集了 #r" + 收集卡片数量 + "#k 张 #v4001022# ？？"
          );
        }
      } else {
        cm.sendOk(
          "欢迎来到第三阶段。请收集 #r" +
            收集卡片数量 +
            "#k 张#v4001022# 来找我即可完成任务。"
        );
        eim.setProperty("stage3leader", "done");
      }
    } else {
      cm.sendNext(
        "欢迎来到第三阶段。请收集#v4001022# 交给队长，然后叫队长来找我即可完成任务。"
      );
    }
  } else {
    cm.sendNext("恭喜！你已经通过了第三阶段。快点现在，到第4阶段。");
  }
  cm.safeDispose();
}

function clear(stage, eim, cm) {
  eim.setProperty("stage" + stage.toString() + "status", "clear");
  cm.showEffect(true, "quest/party/clear");
  cm.playSound(true, "Party1/Clear");
  cm.environmentChange(true, "gate");
}
