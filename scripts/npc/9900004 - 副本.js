/*
 
 脚本：拍卖主菜单
 */
//时间引用
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
//素材引用
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var r = "#fUI/UIWindow.img/Quest/TimeQuest/AlarmClock/default/0/0#";
var 闹钟图标 = "#fUI/UIWindow.img/Quest/TimeQuest/AlarmClock/default/0/0#";

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
  if (cm.getPlayer().赌博房间 > 0) {
    cm.对话结束();
    cm.打开NPC(9900004, 303);
    return;
  }
  //冒险求生
  if (cm.getPlayer().getClient().getChannel() == 4) {
    if (cm.冒险求生() > 0) {
      if (活动地图(cm.判断地图())) {
        cm.对话结束();
        cm.打开NPC(9900004, 71447502);
        return;
      }
    }
  }
  if (cm.getPlayer().getGMLevel() > 0) {
    cm.getPlayer().设置师傅(0);
  }
  //摄影棚不可打开拍卖
  if (cm.判断地图() >= 970000000 && cm.判断地图() <= 970000005) {
    cm.个人公告("在这里无法使用。");
    cm.对话结束();
    return;
  }
  var 疲劳值 = cm.getPlayer().判断疲劳值();
  //显示的进度，需要改成和控制台1号的时间一样。分制
  var 疲劳值限制 = 600;
  var 进度 = (疲劳值 / 疲劳值限制) * 100;
  if (疲劳值 > 疲劳值限制) {
    进度 = 100;
  }
  //显示
  if (status == 0) {
    var selStr =
      "\r\n   " +
      心 +
      " " +
      心 +
      "  " +
      心 +
      "  " +
      心 +
      " #r#e < 最新冒险岛 > #k#n " +
      心 +
      "  " +
      心 +
      "  " +
      心 +
      " " +
      心 +
      "\r\n\r\n";
    selStr +=
      " #k" +
      闹钟图标 +
      "时间:#r" +
      hour +
      "#k#b:#r" +
      minute +
      "#k#b:#r" +
      second +
      "#k 疲劳:#B" +
      (100 - 进度) +
      "# [" +
      (100 - 进度).toFixed(2) +
      "%]\r\n";

    selStr +=
      " #L1##b个人信息#k#l #L2##b空间传送#k#l #L3##b拍 卖 行#k#l#L4##b随身仓库#k#l\r\n";

    selStr +=
      " #L5##b清理背包#k#l #L6##b游戏论坛#k#l #L7##b反馈专区#k#l#L8##b推广系统#k#l\r\n";

    selStr +=
      " #L10##b冒险百科#k#l #L11##b自助系统#k#l #L12##b上线提醒#k#l#L13##b摄 影 棚#k#l\r\n";

    selStr +=
      " #L14##b爱心使者#k#l #L15##b音乐点播#k#l #L16##b个人设置#k#l\r\n";

    selStr += "\r\n\r\n";

    selStr += "\t\t\t\t   www.zm8au.cn\r\n";

    cm.是否说明文字(selStr);
  } else if (status == 1) {
    switch (selection) {
      case 1:
        cm.对话结束();
        cm.openNpc(9900004, 1);
        break;
      case 2:
        cm.对话结束();
        cm.openNpc(9900004, 2);
        break;
      case 3:
        cm.对话结束();
        cm.openNpc(9900004, 3);
        break;
      case 4:
        cm.对话结束();
        cm.openNpc(9900004, 4);
        break;
      case 5:
        cm.对话结束();
        cm.openNpc(9900004, 5);
        break;
      case 6:
        cm.对话结束();
        cm.openNpc(9900004, 6);
        break;
      case 7:
        cm.对话结束();
        cm.openNpc(9900004, 7);
        break;
      case 8:
        cm.对话结束();
        cm.openNpc(9900004, 8);
        break;
      case 9:
        cm.对话结束();
        cm.openNpc(9900004, 9);
        break;
      case 10:
        cm.对话结束();
        cm.openNpc(9900007, 0);
        break;
      case 11:
        cm.对话结束();
        cm.openNpc(9900004, 11);
        break;
      case 12:
        cm.对话结束();
        cm.openNpc(9900004, 12);
        break;
      case 13:
        cm.对话结束();
        cm.openNpc(2007, 11);
        break;
      case 14:
        cm.对话结束();
        cm.openNpc(9900004, 14);
        break;
      case 15:
        cm.对话结束();
        cm.openNpc(9900004, 15);
        break;
      case 16:
        cm.对话结束();
        cm.openNpc(2007, 2007);
        break;
      default:
        cm.对话结束();
        break;
    }
  }
}
