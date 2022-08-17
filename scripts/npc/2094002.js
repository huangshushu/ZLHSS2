/*
 
 脚本：海盗船
 */

var 海盗通关经验 = 25000;
var 次数限制 = 10;
var 奖励预览 = [[4031997, 1, 100]];

var 箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";

function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (status == 0 && mode == 0) {
    cm.dispose();
    return;
  }
  if (mode == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    var selStr = "你要放弃吗？你打不过了?#k\r\n";
    if (cm.getMapId() == 925100000) {
      selStr =
        "#r海盗副本，第一关#k\r\n\r\n你要收集 #b6 #k个 #v4001117#才可以通关\r\n\r\n";
    }
    if (cm.getMapId() == 925100100) {
      selStr =
        "#r海盗副本，第二关#k\r\n\r\n你要收集 #b50#k个 #v4001120# #v4001121# #v4001122#才可以通关\r\n";
    }

    if (cm.getMapId() == 925100300) {
      selStr =
        "#r海盗副本，第三关#k\r\n\r\n你需要杀掉这里所有的怪物，才可以通关\r\n";
    }
    if (cm.getMapId() == 925100500) {
      selStr = "#r海盗副本，第四关#k\r\n\r\n你挑战完BOSS了没？？\r\n";
      if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
        selStr += "#L2##b领取奖励#l#k\r\n";
      }
    }
    selStr += "#L1##b放弃，退出副本#l#k\r\n";
    cm.sendSimple(selStr);
  } else if (status == 1) {
    switch (selection) {
      case 10:
        var FantMap = cm.getMap(925100000);
        FantMap.resetFully();
        cm.warpParty(925100000, 0);
        cm.dispose();
        break;
      case 1:
        cm.warpParty(251010404, 0);
        cm.dispose();
        break;
      case 2:
        if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
          //海盗船盛产橡皮擦，恩
          //cm.gainItem(4031559, 1);
          if (cm.getBossLog("海盗船") < 次数限制) {
            for (var i = 0; i < 奖励预览.length; i++) {
              gainItemPro(奖励预览[i][0], 奖励预览[i][1], 奖励预览[i][2]);
            }
            //cm.增加里程(1);
            cm.gainExp(海盗通关经验);
          }
          //记录信息
          cm.setBossRankCount("海盗船", 1);
          cm.setBossLog("海盗船");
          cm.worldMessage(
            2,
            "[副本-海盗船] : 恭喜 " +
              cm.getPlayer().getName() +
              " 完成海盗船副本。"
          );
          cm.warp(251010404, 0);
          cm.dispose();
        } else {
          cm.sendOk("清理当前地图怪物");
          cm.dispose();
        }
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
