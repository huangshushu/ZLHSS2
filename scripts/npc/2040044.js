/*
 
 脚本：玩具塔第九关
 */

var 第九关经验 = 7500;
var status;

function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (status == -1 && cm.isLeader()) {
    var eim = cm.getEventInstance();

    if (eim.getProperty("crackLeaderPreamble") == null) {
      eim.setProperty("crackLeaderPreamble", "done");
      cm.sendNext(
        "欢迎来到 玩具之城 - (#r组队任务#k) #bBoss#k阶段\r\n\r\n请你和你的队员一起打败#r阿丽莎乐#k获得#b#z4001023##k然后交给我……知道阿丽莎乐怎么召唤吗?看到空中哪个老鼠没？消灭它#r阿丽莎乐#k就会出现……"
      );
      cm.dispose();
    } else {
      if (cm.haveItem(4001023)) {
        status = 0;
        cm.sendNext("恭喜完成，想要前往颁奖之地？");
      } else {
        cm.sendNext("请打败#r最终boss#k 给我#v4001023#。");
        cm.dispose();
      }
    }
  } else if (status == -1 && !cm.isLeader()) {
    cm.sendNext(
      "请干掉 窗台上的 #b黑色老鼠#k 然后就会召唤 #b最终boss#k 干掉之后捡到钥匙再来来请队长找我。"
    );
    cm.dispose();
  } else if (status == 0 && cm.isLeader()) {
    var eim = cm.getEventInstance();
    clear(9, eim, cm);
    cm.gainItem(4001023, -1);

    var players = eim.getPlayers();
    cm.givePartyExp(第九关经验, players);
    eim.setProperty("cleared", "true");
    eim.restartEventTimer(10000);
    var bonusmap = cm.getMap(922011100);
    for (var i = 0; i < players.size(); i++) {
      players.get(i).changeMap(bonusmap, bonusmap.getPortal(0));
    }
    cm.dispose();
  } else {
    cm.dispose();
  }
}

function clear(stage, eim) {
  eim.setProperty("stage" + stage.toString() + "status", "clear");

  cm.showEffect(true, "quest/party/clear");
  cm.playSound(true, "Party1/Clear");
}
