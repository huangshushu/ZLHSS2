/*
 
 脚本：武陵塔
 */

var 每日可挑战 = 5;
var status = -1;
var sel;
var mapid;

function start() {
  mapid = cm.getMapId();
  if (mapid == 925020001) {
    cm.sendSimple(
      " Hi~ #b#h ##k 你要挑战武陵道场吗？这里每一层武陵塔都是有非常厉害的怪物保守，你确定你有实力来闯关吗？ 每天只能挑战 #r" +
        每日可挑战 +
        "#k 次，你已经挑战 #r" +
        cm.判断每日值("武陵塔") +
        " #k次\r\n#b#L0#我要单人挑战#l \n\r #L1#我要组队进入#l \n\r #L2#我要兑换腰带#l \n\r #L3#我要重置我的点数#l"
    );
  } else if (isRestingSpot(mapid)) {
    cm.sendSimple("你想要坚持下去？#b\r\n#L0#是，我想继续#l\r\n#L1#我想离开#l");
  } else {
    cm.sendYesNo("你想要离开了？？");
  }
}

function action(mode, type, selection) {
  if (mapid == 925020001) {
    if (mode == 1) {
      status++;
    } else {
      cm.对话结束();
      return;
    }
    if (status == 0) {
      sel = selection;
      if (sel == 3) {
        cm.sendYesNo("你是真的要重置！？");
      } else if (sel == 2) {
        cm.sendSimple(
          "现在你的道场点数有 #b" +
            cm.getDojoPoints() +
            "#k. 我们的主人喜欢有才华的人，所以如果你有了足够的道场点数，你就可以根据你的道场点数依序换取腰带。\n\r #L0##i1132000:# #t1132000#(200)#l \n\r #L1##i1132001:# #t1132001#(1800)#l \n\r #L2##i1132002:# #t1132002#(4000)#l \n\r #L3##i1132003:# #t1132003#(9200)#l \n\r #L4##i1132004:# #t1132004#(17000)#l"
        );
      } else if (sel == 1) {
        if (checkLevelsAndMap(30, 255) == 1) {
          cm.sendOk("队伍里有人等级不符合。");
          cm.dispose();
        } else if (checkLevelsAndMap(30, 255) == 2) {
          cm.sendOk("在地图上找不到您的队友。");
          cm.dispose();
        } else if (cm.getParty() != null) {
          if (cm.判断团队每日("武陵塔") >= 每日可挑战) {
            cm.sendOk("队伍里有玩家今日无法继续挑战。");
            cm.对话结束();
            return;
          }
          if (cm.isLeader()) {
            cm.给团队每日("武陵塔");
            cm.sendOk("开始你的挑战。");
          } else {
            cm.sendOk("请找你的队长来找我说话。");
          }
        } else {
          cm.sendOk("你好像没有组队。");
          cm.对话结束();
          return;
        }
      } else if (sel == 0) {
        if (cm.getParty() != null) {
          cm.sendOk("你离开你的组队。");
          cm.对话结束();
          return;
        }
        var record = cm.getQuestRecord(150000);
        var data = record.getCustomData();
        if (data != null) {
          cm.给个人每日("武陵塔");
          cm.warp(get_restinFieldID(parseInt(data)), 0);
          record.setCustomData(null);
        } else {
          cm.start_DojoAgent(true, false);
        }
        cm.对话结束();
      }
    } else if (status == 1) {
      if (sel == 3) {
        cm.setDojoRecord(true);
        cm.sendOk("我已经帮您归零，好运。");
      } else if (sel == 2) {
        var record = cm.getDojoRecord();
        var required = 0;

        switch (record) {
          case 0:
            required = 200;
            break;
          case 1:
            required = 1800;
            break;
          case 2:
            required = 4000;
            break;
          case 3:
            required = 9200;
            break;
          case 4:
            required = 17000;
            break;
        }

        if (record == selection && cm.getDojoPoints() >= required) {
          var item = 1132000 + record;
          if (cm.canHold(item)) {
            cm.gainItem(item, 1);
            cm.setDojoRecord(false);
            cm.sendOk("恭喜兑换成功！！");
          } else {
            cm.sendOk("请确认一下你的背包是否满了.");
          }
        } else if (record != selection) {
          cm.sendOk("请依照顺序兑换腰带！谢谢");
        } else {
          cm.sendOk("你好像没有足够的道场点数可以换....");
        }
        cm.对话结束();
      } else if (sel == 1) {
        cm.start_DojoAgent(true, true);
        cm.对话结束();
      }
    }
  } else if (isRestingSpot(mapid)) {
    if (mode == 1) {
      status++;
    } else {
      cm.对话结束();
      return;
    }

    if (status == 0) {
      sel = selection;

      if (sel == 0) {
        cm.dojoAgent_NextMap(true, true);
        //cm.getQuestRecord(150000).setCustomData(null);
        cm.对话结束();
      } else if (sel == 1) {
        cm.askAcceptDecline("你真的想要离开这里？");
      } else if (sel == 2) {
        if (cm.getParty() == null) {
          var stage = get_stageId(cm.getMapId());

          cm.getQuestRecord(150000).setCustomData(stage);
          cm.sendOk("我刚刚保存你这次的纪录，下次当你返回我就直接送你到这里。");
          cm.对话结束();
        } else {
          cm.sendOk("嘿，小家伙你不能保存..因为这是组队挑战！");
          cm.对话结束();
        }
      }
    } else if (status == 1) {
      if (sel == 1) {
        if (cm.isLeader()) {
          cm.warpParty(925020002);
        } else {
          cm.warp(925020002);
        }
      }
      cm.对话结束();
    }
  } else {
    if (mode == 1) {
      if (cm.isLeader()) {
        cm.warpParty(925020002);
      } else {
        cm.warp(925020002);
      }
    }
    cm.对话结束();
  }
}

function get_restinFieldID(id) {
  var idd = 925020002;
  switch (id) {
    case 1:
      idd = 925020600;
    case 2:
      idd = 925021200;
    case 3:
      idd = 925021800;
    case 4:
      idd = 925022400;
    case 5:
      idd = 925023000;
    case 6:
      idd = 925023600;
  }
  for (var i = 0; i < 15; i++) {
    var canenterr = true;
    for (var x = 1; x < 39; x++) {
      var map = cm.getMap(925020000 + 100 * x + i);
      if (map.getCharactersSize() > 0) {
        canenterr = false;
        break;
      }
    }
    if (canenterr) {
      idd += i;
      break;
    }
  }
  return idd;
}

function get_stageId(mapid) {
  if (mapid >= 925020600 && mapid <= 925020614) {
    return 1;
  } else if (mapid >= 925021200 && mapid <= 925021214) {
    return 2;
  } else if (mapid >= 925021800 && mapid <= 925021814) {
    return 3;
  } else if (mapid >= 925022400 && mapid <= 925022414) {
    return 4;
  } else if (mapid >= 925023000 && mapid <= 925023014) {
    return 5;
  } else if (mapid >= 925023600 && mapid <= 925023614) {
    return 6;
  }
  return 0;
}
function checkLevelsAndMap(lowestlevel, highestlevel) {
  var party = cm.getParty().getMembers();
  var mapId = cm.getMapId();
  var valid = 0;
  var inMap = 0;

  var it = party.iterator();
  while (it.hasNext()) {
    var cPlayer = it.next();
    if (
      !(
        cPlayer.getLevel() >= lowestlevel && cPlayer.getLevel() <= highestlevel
      ) &&
      cPlayer.getJobId() != 900
    ) {
      valid = 1;
    }
    if (cPlayer.getMapid() != mapId) {
      valid = 2;
    }
  }
  return valid;
}
function isRestingSpot(id) {
  return get_stageId(id) > 0;
}
