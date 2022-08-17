/*
 
 脚本：毒雾森林
 */

var 毒雾通关经验 = 50000;
var 次数限制 = 10;
var 奖励预览 = [[4031997, 1, 100]];

function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (status <= 0 && mode <= 0) {
    cm.dispose();
    return;
  }
  if (mode == 1) {
    status++;
  } else {
    status--;
  }
  if (status <= 0) {
    var selStr = "\r\n";
    if (cm.getMapId() == 930000000) {
      selStr += "\t从这里进去，开始冒险吧！\r\n";
    }
    if (cm.getMapId() == 930000100) {
      selStr += "\t和队友合作，清空当前地图怪物即可通关。\r\n";
    }
    if (cm.getMapId() == 930000200) {
      selStr += "\t把感染的怪物引导到桥上击杀，净化一下把。\r\n";
    }

    if (cm.getMapId() == 930000300) {
      selStr += "\r\n\r\n   #L2##b你绕过来了？#l\r\n";
    }
    if (cm.getMapId() == 930000600) {
      selStr +=
        "\t拿着#b#v4001163##t4001163##k向右边石像召唤出巫毒巨人，并且战胜它吧。\r\n";
    }

    if (cm.getMapId() == 930000700) {
      selStr += "\r\n\r\n   #L3##b勇士你真厉害，通关了#l\r\n";
    }

    if (cm.getMapId() != 930000700) {
      selStr += "\r\n\r\n   #L1##b退出副本#l\r\n";
    }
    cm.sendSimple(selStr);
  } else if (status == 1) {
    switch (selection) {
      case 1:
        cm.warp(300030100, 0);
        cm.dispose();
        break;
      case 2:
        cm.warpParty(930000500);
        cm.dispose();
        break;
      case 3:
        //毒雾盛产邮票，恩
        //cm.gainItem(4002002, 1);
        if (cm.getBossLog("毒雾森林") < 次数限制) {
          //cm.gainItem(4031997, 1);
          for (var i = 0; i < 奖励预览.length; i++) {
            gainItemPro(奖励预览[i][0], 奖励预览[i][1], 奖励预览[i][2]);
          }
          //cm.增加里程(1);
          //记录通关信息
          cm.gainExp(毒雾通关经验);
          cm.gainExp(毒雾通关经验);
          cm.gainExp(毒雾通关经验);
          cm.gainExp(毒雾通关经验);
          cm.gainExp(毒雾通关经验);
        }
        cm.getPlayer().endPartyQuest(1206);
        cm.removeAll(4001161);
        cm.removeAll(4001162);
        cm.removeAll(4001163);
        cm.removeAll(4001164);
        cm.removeAll(4001169);
        cm.removeAll(2270004);
        cm.warp(930000800, 0);
        cm.setBossRankCount("毒雾森林", 1);
        cm.setBossLog("毒雾森林");
        cm.worldMessage(
          2,
          "[副本-毒雾森林] : 恭喜 " +
            cm.getPlayer().getName() +
            " 完成毒雾森林副本。"
        );
        cm.结束对话();
        break;
    }
  }
}

function gainItemPro(itemId, count, prop) {
  var number = Math.random() * 100;
  if (number <= prop) {
    cm.gainItem(itemId, count);
  }
}
