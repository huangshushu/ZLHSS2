/*
 
 弓箭手转职教官
 */

var status = 0;
var jobId;
var jobName;

function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (mode == 0 && status == 2) {
    cm.sendOk("请重试.");
    cm.dispose();
    return;
  }
  if (cm.判断背包其他栏().isFull()) {
    cm.sendNext("其他栏必须有一个空位。");
    cm.对话结束();
    return;
  }
  if (mode == 1) status++;
  else status--;
  if (status == 0) {
    if (cm.getJob() == 0) {
      if (cm.getPlayer().getLevel() >= 10) {
        cm.是否说明文字("你想要成为一位#b弓箭手#k吗？");
      } else {
        cm.说明文字("等级不够，需要达到 #b10#k 级。");
        cm.dispose();
      }
    } else {
      if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 300) {
        if (cm.haveItem(4031012, 1)) {
          if (cm.haveItem(4031012, 1)) {
            status = 20;
            cm.是否说明文字("我看到你完成了测试。");
          } else {
            if (!cm.haveItem(4031010)) {
              cm.gainItem(4031010, 1);
            }
            cm.sendOk("请去找 #r弓箭手转职教官#k.");
            cm.dispose();
          }
        } else {
          status = 10;
          cm.是否说明文字("你准备好了吗，走向更加强大的道路？");
        }
      } else if (
        (cm.getPlayer().getLevel() >= 70 && cm.getJob() == 310) ||
        cm.getJob() == 320
      ) {
        if (cm.getBossRank7("三转任务1", 2) > 0) {
          if (cm.haveItem(4031059, 1)) {
            cm.gainItem(4031057, 1);
            cm.gainItem(4031059, -1);
            //不传送过去
            //cm.warp(211000001, 0);
            cm.setBossRank7("三转任务", 2, -cm.getBossRank7("三转任务", 2));
            cm.sendOk("你完成了一个考验，现在去找长老公馆找#b蕾妮#k。");
          } else {
            cm.setBossRank7("三转任务", 2, 1);
            cm.sendOk(
              "    hi, #b#h0##k，真没想到你现在变得如此强大，我需要一个 #b#z4031059##k. 快去找#r迷宫 森林迷宫V 异界之门#k拿给我吧。"
            );
          }
        } else {
          cm.sendOk("你似乎可以更加强大。");
        }
        cm.dispose();
      } else {
        cm.sendOk("你好,我是弓箭手转职官。");
        cm.dispose();
      }
    }
  } else if (status == 1) {
    if (cm.getJob() == 0) {
      cm.changeJob(300);
      cm.resetStats(4, 25, 4, 4);
    }
    cm.forceCompleteQuest(6700);
    cm.gainItem(1452002, 1);
    cm.gainItem(2060000, 1000);
    cm.sendOk("转职成功 ! ");
    cm.dispose();
  } else if (status == 11) {
    cm.sendNextPrev("点击下一步接受任务#k.");
  } else if (status == 12) {
    cm.askAcceptDecline("但是我必须先测试你,你准备好了吗 ?");
  } else if (status == 13) {
    cm.gainItem(4031010, 1);
    //不传送过去
    //cm.warp(106010000);
    cm.sendOk("请去找 #b弓箭手转职教官#k，他会帮助你的。");
    cm.dispose();
  } else if (status == 21) {
    cm.sendSimple(
      "选择一条你的道路吧;\r\n\r\n#b\r\n#L0#猎人#l\r\n#L1#弩弓手#l#k"
    );
  } else if (status == 22) {
    var jobName;
    if (selection == 0) {
      jobName = "猎人";
      job = 310;
    } else if (selection == 1) {
      jobName = "弩弓手";
      job = 320;
    }
    cm.sendYesNo("你真的要成为一位 #r" + jobName + "#k ?");
  } else if (status == 23) {
    cm.changeJob(job);
    cm.gainItem(4031012, -1);
    cm.sendOk("转职成功 ! ");
    cm.dispose();
  }
}
