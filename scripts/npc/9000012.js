/*
 
 脚本：活动
 */
var status = 0;

function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (mode == -1 || mode == 0) {
    cm.dispose();
  } else {
    status++;
    if (status == 0) {
      var text =
        "有什么可以帮助的？？#b\r\n#L0#带我离开这里#l\r\n#L1#买一把活动武器#l#k\r\n\r\n";
      if (cm.getPlayer().getGMLevel() >= 30) {
        text += "------------------以下为GM功能------------------\r\n";
        text += "#r#L2#开启活动#l\r\n";
      }
      cm.sendSimple(text);
    } else if (status == 1) {
      if (selection == 0) {
        cm.sendYesNo("你的想要离开？？");
      } else if (selection == 1) {
        if (cm.getPlayer().getMeso() < 1 || !cm.canHold(1322005)) {
          cm.sendOk("很抱歉，你没有足够的金币或者装备栏满了！");
        } else {
          cm.gainItem(1322005, 1);
          cm.gainMeso(-1);
        }
        cm.dispose();
      } else if (selection == 2) {
        cm.startCoconut(cm.getChannel());
        cm.全服喇叭(6, "[打椰子比赛]打椰子比赛已经开始。");
        cm.sendOk("活动已开启！");
        cm.dispose();
        return;
      }
    } else if (status == 2) {
      var map = cm.getSavedLocation("EVENT");
      if (map > -1) {
        cm.warp(map, 0);
      } else {
        cm.warp(910000000, 0);
      }
      cm.dispose();
    }
  }
}

function getEimForGuild(em, id) {
  var stringId = "" + id;
  return em.getInstance(stringId);
}
