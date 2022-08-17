/*
 
 */
var status = -1;
var amount = -1;
var items = [
  [2000002, 310],
  [2022003, 1060],
  [2022000, 1600],
  [2001000, 3120],
];
var item;

function start() {
  if (cm.getQuestStatus(2013))
    cm.sendNext(
      "这是你...谢谢你，我能得到很多完成。现在我已经做了一堆物品。如果你需要什么，让我知道."
    );
  else {
    if (cm.getQuestStatus(2010))
      cm.sendNext("你似乎没有强大到足以能够购买我的药水......");
    else cm.sendOk("需要完成任务才可以跟我买药水喔!");
    cm.dispose();
  }
}

function action(mode, type, selection) {
  status++;
  if (mode != 1) {
    if (mode == 0 && type == 1)
      cm.sendNext(
        "我仍然有不少你以前把我的材料。这些项目都存在这样把你的时间选择..."
      );
    cm.dispose();
    return;
  }
  cm.dispose();
}
