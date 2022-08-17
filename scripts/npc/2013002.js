/*
 
 脚本：女神塔奖励
 */
var status;
var 次数限制 = 10;
var 奖励预览 = [[4031997, 1, 100]];

function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  var em = cm.getEventManager("OrbisPQ");
  if (em == null) {
    cm.dispose();
    return;
  }
  for (var i = 4001044; i < 4001064; i++) {
    cm.removeAll(i);
  }
  switch (cm.getMapId()) {
    case 920010100:
      cm.showEffect(false, "quest/party/clear");
      cm.playSound(false, "Party1/Clear");
      cm.gainExp(16500);
      cm.getPlayer().endPartyQuest(1203);
      cm.warp(920011300);
      cm.dispose();
      break;
    default:
      if (mode == -1) {
        cm.dispose();
      }
      if (mode == 1) status++;
      else status--;
      if (status == 0) {
        cm.sendNext(
          "请确认你的其他栏有没有空两格,另外栏位空一格就好,确认都有空再来跟我对话"
        );
      } else if (status == 1) {
        //女神塔盛产粉末，恩
        if (cm.getPlayer().getMapId() != 920011300) {
          cm.sendOk("你好啊，冒险家！");
          cm.dispose();
          return;
        }
        if (cm.getBossLog("女神塔") < 次数限制) {
          cm.gainMeso(100000);
          for (var i = 0; i < 奖励预览.length; i++) {
            gainItemPro(奖励预览[i][0], 奖励预览[i][1], 奖励预览[i][2]);
          }
          //cm.gainItem(4002001,1);
          //cm.增加里程(2);
        }

        //记录通关信息
        cm.setBossRankCount("女神塔", 1);
        cm.setBossLog("女神塔");
        cm.worldMessage(
          2,
          "[副本-女神塔] : 恭喜 " +
            cm.getPlayer().getName() +
            " ，完成女神塔副本。"
        );
        //  cm.gainItem(randItem, qty);
        cm.warp(200080101);
        cm.dispose();
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
