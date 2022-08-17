/*
 
 脚本：玩具塔奖励领取
 */

var 通关经验 = 15000;
var 次数限制 = 10;
var status;
var 奖励预览 = [[4031997, 1, 100]];

function start() {
  status = -1;
  action(1, 0, 0);
}
//副本通关奖励区域
/*
cm.概率给物品(物品代码，固定数量，概率,备注)；
cm.概率给物品2(物品代码，随机数量，概率,备注)；
*/
function action(mode, type, selection) {
  if (mode == -1) {
    cm.dispose();
  }
  if (mode == 1) status++;
  else status--;
  if (status == 0) {
    cm.sendNext("请确认你的道具栏有没有满,满了领不到东西喔。");
  } else if (status == 1) {
    //玩具盛产金属，恩
    if (cm.getBossLog("玩具塔") < 次数限制) {
      cm.gainMeso(100000);
      for (var i = 0; i < 奖励预览.length; i++) {
        gainItemPro(奖励预览[i][0], 奖励预览[i][1], 奖励预览[i][2]);
      }
      //cm.增加里程(1);
      cm.gainExp(通关经验);
    }

    //cm.概率给物品2[4170007,1,100,"眼镜"]

    //记录通关信息
    cm.getPlayer().endPartyQuest(1202);
    cm.setBossRankCount("玩具塔", 1);
    cm.setBossLog("玩具塔");
    cm.worldMessage(
      2,
      "[副本-玩具塔] : 恭喜 " + cm.getPlayer().getName() + " 完成玩具塔副本。"
    );
    cm.warp(221024500);
    cm.dispose();
  }
}

function gainItemPro(itemId, count, prop) {
  var number = Math.random() * 100;
  if (number <= prop) {
    cm.gainItem(itemId, count);
  }
}
