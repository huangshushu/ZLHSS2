/*
 
 脚本：星缘
 */
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (status == 0 && mode == 0) {
    cm.dispose();
    return;
  }
  if (mode == 1) {
    status++;
  } else {
    status--;
  }
  if (cm.getInventory(1).isFull()) {
    cm.说明文字("请保证 #b装备栏#k 至少有2个位置。");
    cm.对话结束();
    return;
  } else if (cm.getInventory(2).isFull()) {
    cm.说明文字("请保证 #b消耗栏#k 至少有2个位置。");
    cm.对话结束();
    return;
  } else if (cm.getInventory(3).isFull()) {
    cm.说明文字("请保证 #b设置栏#k 至少有2个位置。");
    cm.对话结束();
    return;
  } else if (cm.getInventory(4).isFull()) {
    cm.说明文字("请保证 #b其他栏#k 至少有2个位置。");
    cm.对话结束();
    return;
  } else if (cm.getInventory(5).isFull()) {
    cm.说明文字("请保证 #b特殊栏#k 至少有2个位置。");
    cm.对话结束();
    return;
  }
  if (status == 0) {
    var selStr =
      "	  Hi~#b#h ##k我是星缘，这，是你想要的礼物吗？不过这个礼物，我只能在大年初一至初十才可以送给你哦。记得到时候找我领取。\r\n";
    selStr += " 当前日期:#b" + month + "." + day + "#k\r\n";
    selStr += " 领取日期:#b2.5 ~ 2.14#k\r\n";
    selStr += " 领取条件:#b150级#k\r\n";

    selStr += " #L1##r[新年礼物]#b" + cm.显示物品(3010073) + "#k#l\r\n";

    cm.说明文字(selStr);
  } else if (status == 1) {
    switch (selection) {
      case 1:
        /*if(cm.getChar().getName()!="小z"){
					return;
				}*/
        if (month != 2) {
          cm.说明文字("不是活动时间，无法领取。");
          cm.对话结束();
          return;
        }
        if (day < 5 || day > 14) {
          cm.说明文字("不是活动时间，无法领取。");
          cm.对话结束();
          return;
        }
        if (cm.判断等级() < 150) {
          cm.说明文字("等级不够，无法领取。");
          cm.对话结束();
          return;
        }
        if (cm.getBossRank("新年礼物1", 2) > 0) {
          cm.说明文字("你已经领取了。");
          cm.对话结束();
          return;
        }
        cm.setBossRankCount("新年礼物1", 1);
        cm.给物品(3010073, 1);
        cm.全服黄色喇叭(
          "[新年礼物] : 玩家 " +
            cm.getPlayer().getName() +
            " 在 " +
            cm.getPlayer().getMap().getMapName() +
            " 星缘处领取了新年礼物 baby品克缤。"
        );
        cm.群输出信息(
          "[新年礼物] : 玩家 " +
            cm.getPlayer().getName() +
            " 在 " +
            cm.getPlayer().getMap().getMapName() +
            " 星缘处领取了新年礼物 baby品克缤。"
        );
        cm.对话结束();
        break;
    }
  }
}
