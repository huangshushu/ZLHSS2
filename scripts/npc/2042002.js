/*
 
 脚本：嘉年华
 */
var status = -1;
var rank = "D";
var exp = 0;
var select = 0;

function start() {
  if (cm.getCarnivalParty() != null) {
    status = 99;
  }
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (mode == 1) {
    status++;
  } else {
    status--;
  }
  if (mode == -1) {
    cm.dispose();
    return;
  }
  if (status == 0) {
    if (cm.getPlayer().getMapId() == 910000000) {
      cm.dispose();
      cm.openNpc(2042002, 1);
      return;
    }
    var msg =
      "    Hi~ #b#h ##k，你是要进入怪物嘉年华擂台吗？准备好了和其他玩家对抗吗？嘉年华在特定的时间内，胜负是会计算天梯分数的哦。\r\n\r\n#b#L0#我要前往怪物擂台#l";
    if (cm.getPlayer().getMapId() == 980000010) {
      msg += "\r\n#d#L1#我要返回废弃都市";
    }
    cm.sendSimple(msg);
  } else if (status == 1) {
    switch (selection) {
      case 0: {
        var level = cm.getPlayerStat("LVL");
        /*if (level >= 30 && level <= 198) {
                 cm.saveLocation("MONSTER_CARNIVAL");
                 cm.warp(980000000, "st00");
                 } else if (level >= 199 && level <= 200) {
                 cm.saveLocation("MONSTER_CARNIVAL");
                 cm.warp(980030000, "st00");
                 cm.dispose();
                 } else {
                 cm.sendOk("你的等级是:"+ level +" 目前没有任何擂台可以参加。");
                 cm.dispose();
                 }*/
        if (level >= 30) {
          cm.打开NPC(2007, 4);
        } else {
          cm.sendOk("#b30#K 级才可以进入嘉年华。");
        }
        cm.dispose();
        break;
      }
      case 1:
        cm.warp(103000000);
        cm.dispose();
        break;
      default:
        {
          cm.dispose();
          break;
        }
        break;
    }
  } else if (status == 100) {
    var carnivalparty = cm.getCarnivalParty();
    if (carnivalparty.getTotalCP() >= 501) {
      rank = "A";
      exp = 450000;
    } else if (carnivalparty.getTotalCP() >= 251) {
      rank = "B";
      exp = 350000;
    } else if (carnivalparty.getTotalCP() >= 101) {
      rank = "C";
      exp = 250000;
    } else if (carnivalparty.getTotalCP() >= 51) {
      rank = "D";
      exp = 150000;
    }
    cm.getPlayer().endPartyQuest(1301);
    if (carnivalparty.isWinner()) {
      cm.sendNext("恭喜你赢了 太神啦\r\n#b怪物擂台赛排行 : " + rank);
    } else {
      cm.sendNext("虽然输了也不要气馁\r\n#b怪物擂台赛排行 : " + rank);
    }
  } else if (status == 101) {
    var carnivalparty = cm.getCarnivalParty();
    var los = parseInt(cm.getPlayer().getOneInfo(1301, "lose"));
    var vic = parseInt(cm.getPlayer().getOneInfo(1301, "vic"));
    if (carnivalparty.isWinner()) {
      vic++;
      cm.getPlayer().updateOneInfo(1301, "vic", "" + vic);
      carnivalparty.removeMember(cm.getChar());
      cm.gainExpR(exp);
    } else {
      los++;
      cm.getPlayer().updateOneInfo(1301, "lose", "" + los);
      carnivalparty.removeMember(cm.getChar());
      cm.gainExpR(exp / 2);
    }
    cm.getPlayer().updateOneInfo(
      1301,
      "VR",
      "" + java.lang.Math.ceil((vic * 100) / los)
    );
    cm.warp(980000000);
    cm.dispose();
  }
}
