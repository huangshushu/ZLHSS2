/*
 
 脚本：玩具塔第一关
 */

var 收集卡片数量 = 20;
var 第一关经验 = 7500;

var status;

function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (cm == null) return;

  var eim = cm.getEventInstance();

  if (eim == null) return;

  var stage1status = eim.getProperty("stage1status");

  if (stage1status == null) {
    if (cm.isLeader()) {
      var stage1leader = eim.getProperty("stage1leader");
      if (stage1leader == "done") {
        if (cm.haveItem(4001022, 收集卡片数量)) {
          cm.gainItem(4001022, -20);
          cm.sendNext("恭喜！你已经通过了第一阶段。快点现在，到了第二阶段。");
          //cm.removeAll(4001022);
          clear(1, eim, cm);
          cm.givePartyExp(第一关经验, eim.getPlayers());
          cm.dispose();
        } else {
          cm.sendNext(
            "你确定你有收集了 #r" + 收集卡片数量 + "#k张 #v4001022##k？？"
          );
        }
        cm.dispose();
      } else {
        cm.sendOk(
          "欢迎来到第一阶段。请收集 #r" +
            收集卡片数量 +
            "张#k #v4001022##k 来找我即可完成任务。"
        );
        eim.setProperty("stage1leader", "done");
        cm.dispose();
      }
    } else {
      cm.sendNext(
        "欢迎来到第一阶段。请收集#r#v4001022##k 交给队长，然后叫队长来找我即可完成任务。"
      );
      cm.dispose();
    }
  } else {
    cm.sendNext("恭喜！你已经通过了第一阶段。快点现在，到了第二阶段。");
    cm.dispose();
  }
}

function clear(stage, eim, cm) {
  eim.setProperty("stage" + stage.toString() + "status", "clear");
  cm.showEffect(true, "quest/party/clear");
  cm.playSound(true, "Party1/Clear");
  cm.environmentChange(true, "gate");
}
