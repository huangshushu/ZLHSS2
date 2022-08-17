/*
 
 脚本：女神塔
 */

var 最低等级 = 49;
var 最高等级 = 256;
var 最少人数 = 1;
var 最多人数 = 6;
var 第一关经验 = 20000;
var 次数限制 = 10;
var 奖励预览 = [[4031997, 1, 100]];

var status = -1;
function action(mode, type, selection) {
  if (mode == 1) {
    status++;
  } else {
    if (status == 0) {
      cm.对话结束();
      return;
    }
    status--;
  }
  if (cm.getPlayer().getMapId() == 920010000 && cm.isLeader()) {
    if (cm.getPlayer().haveItem(4001063, 15)) {
      cm.givePartyExp(第一关经验);
      cm.gainItem(4001063, -15);
      cm.warpParty(920010100);
      cm.结束对话();
      return;
    } else {
      cm.sendNext("我被远古精灵困在这座塔，快收集15片云朵让我出去。");
      cm.结束对话();
      return;
    }
  }
  if (status == 0) {
    var 文本信息 = "";
    文本信息 += "        #b里程x2#k\r\n";
    for (var i = 0; i < 奖励预览.length; i++) {
      文本信息 +=
        "   " +
        cm.显示物品(奖励预览[i][0]) +
        "x" +
        奖励预览[i][1] +
        " " +
        奖励预览[i][2] +
        " % #k\r\n";
    }
    cm.sendYesNo(
      "\r\n     快来拯救女神吧。副本的要求的人数是#b" +
        最少人数 +
        " - " +
        最多人数 +
        "#k，等级要求#b" +
        最低等级 +
        " - " +
        最高等级 +
        "#k，你要参加副本#b女神塔#k吗？\r\n\r\n #k   今日完成: #r" +
        cm.getBossLog("女神塔") +
        "\r\n\r\n#k#e副本奖励预览:#n\r\n\r\n" +
        文本信息 +
        ""
    );
  } else if (status == 1) {
    if (cm.getParty() == null) {
      cm.sendSimple("请组队再来找我，或者让队长找我。");
    } else {
      var party = cm.getParty().getMembers();
      var mapId = cm.getMapId();
      var next = true;
      var levelValid = 0;
      var inMap = 0;
      var it = party.iterator();
      while (it.hasNext()) {
        var cPlayer = it.next();
        if (cPlayer.getLevel() >= 最低等级 && cPlayer.getLevel() <= 最高等级) {
          levelValid += 1;
        } else {
          next = false;
        }
        if (cPlayer.getMapid() == mapId) {
          inMap += cPlayer.getJobId() == 900 ? 6 : 1;
        }
      }
      if (party.size() > 最多人数 || inMap < 最少人数) {
        next = false;
      }
      // if(cm.判断团队每日("女神塔", 次数限制) == 0){
      // cm.sendOk("抱歉，今天你的队伍里有人已经做满 " + 次数限制 + " 次了！");
      // cm.dispose();
      // return;
      // }
      if (next) {
        var em = cm.getEventManager("OrbisPQ");
        if (em == null) {
          cm.sendSimple("找不到脚本请联络GM");
        } else {
          var prop = em.getProperty("state");
          if (prop.equals("0") || prop == null) {
            removeItemOfParty(cm.getParty(), 4001050);
            removeItemOfParty(cm.getParty(), 4001051);
            removeItemOfParty(cm.getParty(), 4001052);
            em.startInstance(cm.getParty(), cm.getMap());
            cm.结束对话();
            return;
          } else {
            cm.sendSimple(
              "其他队伍已经在里面做 #r组队任务了#k 请尝试换频道或者等其他队伍完成。"
            );
          }
        }
      } else {
        cm.sendSimple(
          "你的队伍貌似没有达到要求...:\r\n\r\n#r要求: " +
            最少人数 +
            " 玩家成员, 每个人的等级必须在 " +
            最低等级 +
            " 到 等级 " +
            最高等级 +
            "."
        );
      }
    }
  } else {
    cm.结束对话();
  }
}

function removeItemOfParty(party, itemId) {
  var pChrList = party.getMembers();
  if (pChrList == null || pChrList.isEmpty()) {
    return false;
  }
  var it = pChrList.iterator();
  while (it.hasNext()) {
    var pChr = it.next();
    if (pChr == null) {
      continue;
    }
    var chr = cm.getPlayer().getMap().getCharacterById(pChr.getId()); //徒弟
    if (chr != null) {
      chr.removeAll(itemId);
    }
  }
}
