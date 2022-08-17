/*
 
 */
var status = -1;
var sel;

function start() {
  cm.sendNext("请问你是否有记得购买船票?");
}

function action(mode, type, selection) {
  if (mode < 1) {
    cm.dispose();
    return;
  }
  status++;
  if (status == 0)
    cm.sendSimple(
      "请问你要去哪个站台：#b\r\n\r\n#L0#去魔法森林#l\r\n#L1#去玩具城#l\r\n#L2#去神木村#l\r\n#L3#去桃花仙境#l\r\n#L4#去纳希沙漠#l\r\n#L5#去耶雷弗#l"
    );
  else if (status == 1) {
    sel = selection;
    cm.sendNext("我将带你到 #m" + (200000110 + sel * 10) + "#");
  } else if (status == 2) {
    cm.warp(200000110 + sel * 10);
    cm.dispose();
  }
}
