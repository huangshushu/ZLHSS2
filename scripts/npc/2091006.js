/*
 
 脚本：武陵塔
 */
var status = -1;
var sel;

function action(mode, type, selection) {
  if (mode == 1) {
    status++;
  } else {
    cm.sendNext("你还是没有胆量。");
    cm.dispose();
    return;
  }

  if (status == 0) {
    cm.sendSimple(
      "\r\n   Hi~ #b#h ##k 凡是有勇气挑战武陵道场者，欢迎你前来武陵道场，让我见证一下你的强大。\r\n\r\n#b#L0#进入武陵道场#l\r\n#b#L1#道场排行榜#l"
    );
  } else if (status == 1) {
    sel = selection;
    if (sel == 1) {
      var text = "   ─────────< #e#r武陵榜#k#n >────────── #n\r\n\r\n";
      text += "    排名        \t玩家         \t\t\t修炼点\r\n";
      var rankinfo_list = cm.getBossRankCountTop("武陵塔累计的修炼点");
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
    } else {
      cm.sendYesNo("  很好，你确定你够胆量吗？");
    }
  } else if (status == 2) {
    if (sel == 1) {
      cm.sendNextPrev("欢迎你来挑战。如果没有勇气的话，找其他伙伴一起也无妨。");
    } else {
      //cm.saveLocation("MULUNG_TC");
      //cm.warp(925020000, 0);
      cm.打开NPC(2007, 5);
      cm.dispose();
    }
  } else if (status == 3) {
    cm.dispose();
  }
}
