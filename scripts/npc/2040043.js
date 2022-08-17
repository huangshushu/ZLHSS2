/*
 
 脚本：玩具塔经典箱子组合
 */

var 第八关经验 = 10000;
var status;
var partyLdr;
var chatState;
var party;
var preamble;
//箱子组合随机出现的组合位置，0代表没人，1代表有人
/*
var stage8combos = Array(
        Array(0, 0, 0, 0, 1, 1, 1, 1, 1),
        Array(0, 0, 0, 1, 0, 1, 1, 1, 1),
        Array(0, 0, 0, 1, 1, 0, 1, 1, 1),
        Array(0, 0, 0, 1, 1, 1, 0, 1, 1),
        Array(0, 0, 0, 1, 1, 1, 1, 0, 1),
        Array(0, 0, 0, 1, 1, 1, 1, 1, 0),
        Array(0, 0, 1, 0, 0, 1, 1, 1, 1),
        Array(0, 0, 1, 0, 1, 0, 1, 1, 1),
        Array(0, 0, 1, 0, 1, 1, 0, 1, 1),
        Array(0, 0, 1, 0, 1, 1, 1, 0, 1),
        Array(0, 0, 1, 0, 1, 1, 1, 1, 0),
        Array(0, 0, 1, 1, 0, 0, 1, 1, 1),
        Array(0, 0, 1, 1, 0, 1, 0, 1, 1),
        Array(0, 0, 1, 1, 0, 1, 1, 0, 1),
        Array(0, 0, 1, 1, 0, 1, 1, 1, 0),
        Array(0, 0, 1, 1, 1, 0, 0, 1, 1),
        Array(0, 0, 1, 1, 1, 0, 1, 0, 1),
        Array(0, 0, 1, 1, 1, 0, 1, 1, 0),
        Array(0, 0, 1, 1, 1, 1, 0, 0, 1),
        Array(0, 0, 1, 1, 1, 1, 0, 1, 0),
        Array(0, 0, 1, 1, 1, 1, 1, 0, 0),
        Array(0, 1, 0, 0, 0, 1, 1, 1, 1),
        Array(0, 1, 0, 0, 1, 0, 1, 1, 1),
        Array(0, 1, 0, 0, 1, 1, 0, 1, 1),
        Array(0, 1, 0, 0, 1, 1, 1, 0, 1),
        Array(0, 1, 0, 0, 1, 1, 1, 1, 0),
        Array(0, 1, 0, 1, 0, 0, 1, 1, 1),
        Array(0, 1, 0, 1, 0, 1, 0, 1, 1),
        Array(0, 1, 0, 1, 0, 1, 1, 0, 1),
        Array(0, 1, 0, 1, 0, 1, 1, 1, 0),
        Array(0, 1, 0, 1, 1, 0, 0, 1, 1),
        Array(0, 1, 0, 1, 1, 0, 1, 0, 1),
        Array(0, 1, 0, 1, 1, 0, 1, 1, 0),
        Array(0, 1, 0, 1, 1, 1, 0, 0, 1),
        Array(0, 1, 0, 1, 1, 1, 0, 1, 0),
        Array(0, 1, 0, 1, 1, 1, 1, 0, 0),
        Array(0, 1, 1, 0, 0, 0, 1, 1, 1),
        Array(0, 1, 1, 0, 0, 1, 0, 1, 1),
        Array(0, 1, 1, 0, 0, 1, 1, 0, 1),
        Array(0, 1, 1, 0, 0, 1, 1, 1, 0),
        Array(0, 1, 1, 0, 1, 0, 0, 1, 1),
        Array(0, 1, 1, 0, 1, 0, 1, 0, 1),
        Array(0, 1, 1, 0, 1, 0, 1, 1, 0),
        Array(0, 1, 1, 0, 1, 1, 0, 0, 1),
        Array(0, 1, 1, 0, 1, 1, 0, 1, 0),
        Array(0, 1, 1, 0, 1, 1, 1, 0, 0),
        Array(0, 1, 1, 1, 0, 0, 0, 1, 1),
        Array(0, 1, 1, 1, 0, 0, 1, 0, 1),
        Array(0, 1, 1, 1, 0, 0, 1, 1, 0),
        Array(0, 1, 1, 1, 0, 1, 0, 0, 1),
        Array(0, 1, 1, 1, 0, 1, 0, 1, 0),
        Array(0, 1, 1, 1, 0, 1, 1, 0, 0),
        Array(0, 1, 1, 1, 1, 0, 0, 0, 1),
        Array(0, 1, 1, 1, 1, 0, 0, 1, 0),
        Array(0, 1, 1, 1, 1, 0, 1, 0, 0),
        Array(0, 1, 1, 1, 1, 1, 0, 0, 0),
        Array(1, 0, 0, 0, 0, 1, 1, 1, 1),
        Array(1, 0, 0, 0, 1, 0, 1, 1, 1),
        Array(1, 0, 0, 0, 1, 1, 0, 1, 1),
        Array(1, 0, 0, 0, 1, 1, 1, 0, 1),
        Array(1, 0, 0, 0, 1, 1, 1, 1, 0),
        Array(1, 0, 0, 1, 0, 0, 1, 1, 1),
        Array(1, 0, 0, 1, 0, 1, 0, 1, 1),
        Array(1, 0, 0, 1, 0, 1, 1, 0, 1),
        Array(1, 0, 0, 1, 0, 1, 1, 1, 0),
        Array(1, 0, 0, 1, 1, 0, 0, 1, 1),
        Array(1, 0, 0, 1, 1, 0, 1, 0, 1),
        Array(1, 0, 0, 1, 1, 0, 1, 1, 0),
        Array(1, 0, 0, 1, 1, 1, 0, 0, 1),
        Array(1, 0, 0, 1, 1, 1, 0, 1, 0),
        Array(1, 0, 0, 1, 1, 1, 1, 0, 0),
        Array(1, 0, 1, 0, 0, 0, 1, 1, 1),
        Array(1, 0, 1, 0, 0, 1, 0, 1, 1),
        Array(1, 0, 1, 0, 0, 1, 1, 0, 1),
        Array(1, 0, 1, 0, 0, 1, 1, 1, 0),
        Array(1, 0, 1, 0, 1, 0, 0, 1, 1),
        Array(1, 0, 1, 0, 1, 0, 1, 0, 1),
        Array(1, 0, 1, 0, 1, 0, 1, 1, 0),
        Array(1, 0, 1, 0, 1, 1, 0, 0, 1),
        Array(1, 0, 1, 0, 1, 1, 0, 1, 0),
        Array(1, 0, 1, 0, 1, 1, 1, 0, 0),
        Array(1, 0, 1, 1, 0, 0, 0, 1, 1),
        Array(1, 0, 1, 1, 0, 0, 1, 0, 1),
        Array(1, 0, 1, 1, 0, 0, 1, 1, 0),
        Array(1, 0, 1, 1, 0, 1, 0, 0, 1),
        Array(1, 0, 1, 1, 0, 1, 0, 1, 0),
        Array(1, 0, 1, 1, 0, 1, 1, 0, 0),
        Array(1, 0, 1, 1, 1, 0, 0, 0, 1),
        Array(1, 0, 1, 1, 1, 0, 0, 1, 0),
        Array(1, 0, 1, 1, 1, 0, 1, 0, 0),
        Array(1, 0, 1, 1, 1, 1, 0, 0, 0),
        Array(1, 1, 0, 0, 0, 0, 1, 1, 1),
        Array(1, 1, 0, 0, 0, 1, 0, 1, 1),
        Array(1, 1, 0, 0, 0, 1, 1, 0, 1),
        Array(1, 1, 0, 0, 0, 1, 1, 1, 0),
        Array(1, 1, 0, 0, 1, 0, 0, 1, 1),
        Array(1, 1, 0, 0, 1, 0, 1, 0, 1),
        Array(1, 1, 0, 0, 1, 0, 1, 1, 0),
        Array(1, 1, 0, 0, 1, 1, 0, 0, 1),
        Array(1, 1, 0, 0, 1, 1, 0, 1, 0),
        Array(1, 1, 0, 0, 1, 1, 1, 0, 0),
        Array(1, 1, 0, 1, 0, 0, 0, 1, 1),
        Array(1, 1, 0, 1, 0, 0, 1, 0, 1),
        Array(1, 1, 0, 1, 0, 0, 1, 1, 0),
        Array(1, 1, 0, 1, 0, 1, 0, 0, 1),
        Array(1, 1, 0, 1, 0, 1, 0, 1, 0),
        Array(1, 1, 0, 1, 0, 1, 1, 0, 0),
        Array(1, 1, 0, 1, 1, 0, 0, 0, 1),
        Array(1, 1, 0, 1, 1, 0, 0, 1, 0),
        Array(1, 1, 0, 1, 1, 0, 1, 0, 0),
        Array(1, 1, 0, 1, 1, 1, 0, 0, 0),
        Array(1, 1, 1, 0, 0, 0, 0, 1, 1),
        Array(1, 1, 1, 0, 0, 0, 1, 0, 1),
        Array(1, 1, 1, 0, 0, 0, 1, 1, 0),
        Array(1, 1, 1, 0, 0, 1, 0, 0, 1),
        Array(1, 1, 1, 0, 0, 1, 0, 1, 0),
        Array(1, 1, 1, 0, 0, 1, 1, 0, 0),
        Array(1, 1, 1, 0, 1, 0, 0, 0, 1),
        Array(1, 1, 1, 0, 1, 0, 0, 1, 0),
        Array(1, 1, 1, 0, 1, 0, 1, 0, 0),
        Array(1, 1, 1, 0, 1, 1, 0, 0, 0),
        Array(1, 1, 1, 1, 0, 0, 0, 0, 1),
        Array(1, 1, 1, 1, 0, 0, 0, 1, 0),
        Array(1, 1, 1, 1, 0, 0, 1, 0, 0),
        Array(1, 1, 1, 1, 0, 1, 0, 0, 0),
        Array(1, 1, 1, 1, 1, 0, 0, 0, 0)


        );*/
var stage8combos = Array(Array(1, 0, 0, 0, 0, 0, 0, 0, 0));

function start() {
  status = -1;
  preamble = null;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (mode == -1) {
    cm.dispose();
  } else {
    if (mode == 0 && status == 0) {
      cm.dispose();
      return;
    }
    if (mode == 1) {
      status++;
    } else {
      status--;
    }
    boxStage(cm);
  }
}

function clear(stage, eim, cm) {
  eim.setProperty("8stageclear", "true");
  cm.showEffect(true, "quest/party/clear");
  cm.playSound(true, "Party1/Clear");
  cm.environmentChange(true, "gate");
  cm.givePartyExp(第八关经验, eim.getPlayers());
}

function failstage(eim, cm) {
  cm.showEffect(true, "quest/party/wrong_kor");
  cm.playSound(true, "Party1/Failed");
}

function boxStage(cm) {
  var debug = false;
  var eim = cm.getEventInstance();
  var nthtext = "eighth";
  var nthobj = "boxes";
  var nthverb = "stand";
  var nthpos = "stand too close to the edges";
  var curcombo = stage8combos;
  var currect = cm.getMap().getAreas();
  var objset = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  if (eim == null) return;

  if (cm.isLeader()) {
    if (status == 0) {
      party = eim.getPlayers();
      preamble = eim.getProperty("leader" + nthtext + "preamble");
      if (preamble == null) {
        cm.sendNext("你和你的小伙伴必须猜对正确的组合，才能通关。");
        eim.setProperty("leader" + nthtext + "preamble", "done");
        eim.setProperty(
          "stage" + nthtext + "combo",
          Math.floor(Math.random() * curcombo.length).toString()
        );
        cm.dispose();
      } else {
        var complete = eim.getProperty("8stageclear");
        if (0 == 0) {
          var mapClear = "8stageclear";
          eim.setProperty(mapClear, "true");
          cm.sendNext("请赶快到下一个阶段，门已经打开了！");
        } else {
          var totplayers = 0;
          for (i = 0; i < objset.length; i++) {
            for (j = 0; j < party.size(); j++) {
              var present = currect.get(i).contains(party.get(j).getPosition());
              if (present) {
                objset[i] = objset[i] + 1;
                totplayers = totplayers + 1;
              }
            }
          }
          if (totplayers == 5 || debug) {
            var combo =
              curcombo[parseInt(eim.getProperty("stage" + nthtext + "combo"))];
            var testcombo = true;
            for (i = 0; i < objset.length; i++) {
              if (combo[i] != objset[i]) {
                testcombo = false;
              }
            }
            if (testcombo || debug) {
              clear(8, eim, cm);
              if (cm.getEventInstance().getProperty("s8start") != null) {
                var starts4Time = cm.getEventInstance().getProperty("s8start");
                var nowTime = new Date().getTime();
                if (nowTime - starts4Time < 90000)
                  cm.getEventInstance().setProperty("s8achievement", "true");
              }
              cm.dispose();
            } else {
              failstage(eim, cm);
              cm.dispose();
            }
          } else {
            if (debug) {
              var outstring = "Objects contain:";
              for (i = 0; i < objset.length; i++) {
                outstring +=
                  "\r\n" + (i + 1).toString() + ". " + objset[i].toString();
              }
              cm.sendNext(outstring);
              var combo =
                curcombo[
                  parseInt(eim.getProperty("stage" + nthtext + "combo"))
                ];
            } else {
              cm.sendNext("看起来你没有找到正确的组合哦！");
              cm.dispose();
            }
          }
        }
      }
    } else {
      cm.dispose();
    }
  } else {
    if (status == 0) {
      var complete = eim.getProperty("8stageclear");
      if (0 == 0) {
        cm.sendNext("请赶快到下一个阶段，门已经打开了！");
        cm.dispose();
      } else {
        cm.sendNext("请找队长来找我。");
        cm.dispose();
      }
    } else {
      var complete = eim.getProperty("8stageclear");
      if (0 == 0) {
        cm.sendNext("请赶快到下一个阶段，门已经打开了！");
        cm.dispose();
      }
      cm.dispose();
    }
  }
}
