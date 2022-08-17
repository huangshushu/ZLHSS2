/*
 
 脚本：玩具塔副本
 */

var 最小等级 = 35;
var 最高等级 = 255;
var 最少人数 = 1;
var 最多人数 = 6;
var 次数限制 = 10;
//玩具塔奖励预览
/*


 物品，概率
 */
var 奖励预览 = [[4031997, 1, 100]];
var status = -1;
function action(mode, type, selection) {
  if (mode == 1) {
    status++;
  } else {
    if (status == 0) {
      cm.dispose();
      return;
    }
    status--;
  }
  if (status == 0) {
    var 文本信息 = "";
    文本信息 += "        #b里程x1#k\r\n";
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
      "\r\n     玩具塔101层副本，需要大家齐心协力配合，才能通关，这里是智慧与力量的锻炼。人数要求 #b" +
        最少人数 +
        " - " +
        最多人数 +
        "#k，等级要求#b" +
        最小等级 +
        " - " +
        最高等级 +
        "#k，你要参加副本#b玩具塔#k吗？在这里盛产#r邮票#k哦。\r\n\r\n   今日完成: #r" +
        cm.getBossLog("玩具塔") +
        "\r\n\r\n#k#e副本奖励预览:#n\r\n\r\n" +
        文本信息 +
        ""
    );
  } else if (status == 1) {
    cm.removeAll(4001022);
    cm.removeAll(4001023);
    if (cm.getParty() == null) {
      cm.sendOk("请组队再来找我，或者让队长找我。");
    } else if (cm.getParty() == null) {
      cm.说明文字(
        "你的队伍没有达到要求:\r\n\r\n副本: #b玩具塔#k\r\n人数: #b" +
          最少人数 +
          " - " +
          最多人数 +
          "#k\r\n等级: #b" +
          最小等级 +
          " - " +
          最高等级 +
          "#k"
      );
    } else if (!cm.isLeader()) {
      cm.sendSimple("如果你想做任务，请 #b队长#k 跟我谈.#b\r\n");
    } else {
      var party = cm.getParty().getMembers();
      var mapId = cm.getMapId();
      var next = true;
      var levelValid = 0;
      var inMap = 0;
      var it = party.iterator();

      while (it.hasNext()) {
        var cPlayer = it.next();
        if (cPlayer.getLevel() >= 最小等级 && cPlayer.getLevel() <= 最高等级) {
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
      // if(cm.判断团队每日("玩具塔", 次数限制) == 0){
      // cm.sendOk("抱歉，今天你的队伍里有人已经做满 " + 次数限制 + " 次了！");
      // cm.dispose();
      // return;
      // }
      if (next) {
        var em = cm.getEventManager("LudiPQ");
        if (em == null) {
          cm.sendSimple("找不到脚本请联络GM#b\r\n");
        } else {
          var prop = em.getProperty("state");
          if (prop.equals("0") || prop == null) {
            em.startInstance(cm.getParty(), cm.getMap());
            cm.removeAll(4001022);
            cm.removeAll(4001023);
            cm.dispose();
            return;
          } else {
            cm.sendSimple(
              "其他队伍已经在里面做 #r组队任务了#k 请尝试换频道或者等其他队伍完成。#b\r\n"
            );
          }
        }
      } else {
        cm.sendSimple(
          "你的队伍貌似没有达到要求...:\r\n\r\n#r要求: " +
            最少人数 +
            " 玩家成员, 每个人的等级必须在 " +
            最小等级 +
            " 到 等级 " +
            最高等级 +
            ".#b\r\n#L0#我要兑换有裂痕的眼镜#l"
        );
      }
    }
    cm.对话结束();
  }
}
