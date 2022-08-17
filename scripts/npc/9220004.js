/*
 
 */
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (status == 0 && mode == 0) {
    cm.对话结束();
    return;
  }
  if (mode == 1) {
    status++;
  } else {
    status--;
  }
  var 雪花进度 = cm.GetPiot("雪花进度", "1");
  var 雪花进度条 = (雪花进度 / 3000) * 100;
  if (status == 0) {
    var selStr =
      "	Hi~#b#h ##k嘤嘤嘤嘤嘤嘤，你有 " +
      cm.显示物品(4031311) +
      " 吗？如果你提供给我，我可以造成大大大大的雪人哦。\r\n\r\n";
    selStr +=
      "       推雪人进度: #B" +
      雪花进度条 +
      "# [" +
      雪花进度 +
      "/3000]\r\n\r\n";

    selStr +=
      " #L1##b领取手套#k#l  #L2##b领取雪球#k#l  #L3##b提交雪花#k#l  #L4##b雪花达人#k#l";
    cm.说明文字(selStr);
  } else if (status == 1) {
    switch (selection) {
      case 1:
        cm.gainItem(1472063, 1, 1);
        cm.对话结束();
        break;
      case 2:
        cm.gainItem(2060006, 800);
        cm.对话结束();
        break;
      case 3:
        cm.对话结束();
        cm.打开NPC(2007, 9220004);
        break;
      case 4:
        var text = "   ─────────< #e#r雪花榜#k#n >────────── #n\r\n\r\n";
        text += "    排名        \t玩家         \t\t\t雪花\r\n";
        var rankinfo_list = cm.getBossRankCountTop("雪花");
        if (rankinfo_list != null) {
          for (var i = 0; i < rankinfo_list.size(); i++) {
            if (i == 20) {
              break;
            }
            var info = rankinfo_list.get(i);

            text += i == 0 ? "#r" : i == 1 ? "#b" : i == 2 ? "#b" : "";
            text += "\t" + (i + 1) + "\t\t\t\t";
            text += info.getCname();
            for (var j = 16 - info.getCname().getBytes().length; j > 0; j--) {
              text += " ";
            }
            text += "\t\t#k#n#r" + info.getCount();
            text += "#k#n \t\t#k";
            text += "";
          }
        }
        text += "\r\n\r\n";
        cm.sendOkS(text, 3);
        cm.dispose();
        break;
    }
  }
}
