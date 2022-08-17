/*
 
 脚本：养殖
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
  var record = cm.getQuestRecord(8252);
  var data = record.getCustomData();
  if (status == 0) {
    var selStr =
      "    " +
      心 +
      " " +
      心 +
      "  " +
      心 +
      "  " +
      心 +
      " #r#e < 地图优化 > #k#n " +
      心 +
      "  " +
      心 +
      "  " +
      心 +
      " " +
      心 +
      "\r\n";
    selStr +=
      "		Hi~#b#h ##k，如果你发现地图上掉线频繁，你可以试着使用一下这个功能哦，使用之后地图会在特定延迟之后进行回收在开启，那样的话就会流畅很多。\r\n		#r恶意重复使用地图的玩家将会受到严重的处罚#k\r\n\r\n";
    selStr += "\t\t\t\t#L2#优化黑龙地图#l\r\n";
    selStr += "\t\t\t\t#L3#优化扎昆地图#l\r\n";
    selStr += "\t\t\t\t#L5#优化妖僧地图#l\r\n";
    selStr += "\t\t\t\t#L1#优化当前地图#l\r\n";

    cm.是否说明文字(selStr);
  } else if (status == 1) {
    switch (selection) {
      case 2:
        cm.回收地图(240060200);
        cm.回收地图(240060100);
        cm.回收地图(240060000);
        cm.对话结束();
        break;
      case 3:
        cm.回收地图(280030000);
        cm.对话结束();
        break;
      case 4:
        cm.回收地图(240060200);
        cm.对话结束();
        break;
      case 5:
        cm.回收地图(702060000);
        cm.对话结束();
        break;

      case 1:
        if (
          cm.判断地图() == 104000400 ||
          cm.判断地图() == 101030404 ||
          cm.判断地图() == 110040000 ||
          cm.判断地图() == 250010304 ||
          cm.判断地图() == 200010300 ||
          cm.判断地图() == 250010503 ||
          cm.判断地图() == 222010310 ||
          cm.判断地图() == 107000300 ||
          cm.判断地图() == 100040105 ||
          cm.判断地图() == 220050100 ||
          cm.判断地图() == 221040301 ||
          cm.判断地图() == 240040401 ||
          cm.判断地图() == 260010201 ||
          cm.判断地图() == 261030000 ||
          cm.判断地图() == 230020100 ||
          cm.判断地图() == 910000000 ||
          cm.判断地图() == 910000001 ||
          cm.判断地图() == 910000002 ||
          cm.判断地图() == 910000003 ||
          cm.判断地图() == 910000004 ||
          cm.判断地图() == 910000005 ||
          cm.判断地图() == 910000006 ||
          cm.判断地图() == 910000007 ||
          cm.判断地图() == 910000008 ||
          cm.判断地图() == 910000009 ||
          cm.判断地图() == 910000010 ||
          cm.判断地图() == 910000011 ||
          cm.判断地图() == 910000012 ||
          cm.判断地图() == 910000013 ||
          cm.判断地图() == 910000014 ||
          cm.判断地图() == 910000015 ||
          cm.判断地图() == 910000016 ||
          cm.判断地图() == 910000017 ||
          cm.判断地图() == 910000018 ||
          cm.判断地图() == 910000019 ||
          cm.判断地图() == 910000020 ||
          cm.判断地图() == 910000021 ||
          cm.判断地图() == 910000022 ||
          cm.判断地图() == 910000023 ||
          cm.判断地图() == 910000024 ||
          cm.判断地图() == 230040420
        ) {
          cm.说明文字("无法在本地图使用。");
        } else {
          cm.回收地图();
        }
        cm.对话结束();
        break;
      default:
        cm.对话结束();
        break;
    }
  }
}
