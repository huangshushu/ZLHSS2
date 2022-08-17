/*
 
 弓箭手二转转职教官
 */
var 介绍物件 = 4031010;
var 介绍人 = "赫丽娜";
var 收集物品 = 4031013;
var 收集数量 = 30;
var 试炼地图 = 108000100;
var status;

function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (mode == -1) cm.对话结束();
  else {
    if (mode == 1) status++;
    else status--;
    if (cm.haveItem(介绍物件)) {
      if (status == 0)
        cm.是否说明文字("Hi #b#h ##k，你是#b" + 介绍人 + "#k介绍来的吗？");
      else if (status == 1) cm.是否说明文字("所以你要证明你的实力吗? ");
      else if (status == 2) cm.是否说明文字("我可以给你一次机会,请你把握。");
      else if (status == 3)
        cm.是否说明文字(
          "请给我#b" +
            收集数量 +
            "个 #v" +
            收集物品 +
            "# #t" +
            收集物品 +
            "##k，祝你好运。"
        );
      else if (status == 4) {
        cm.warp(试炼地图, 0);
        cm.对话结束();
      }
    } else {
      cm.说明文字(
        "很抱歉,我需要#b#v" +
          介绍物件 +
          "# #t" +
          介绍物件 +
          "##k请去找" +
          介绍人 +
          "拿取谢谢。"
      );
      cm.对话结束();
    }
  }
}
