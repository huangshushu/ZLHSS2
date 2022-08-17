/*
 
 */
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var 蘑菇 = "#fUI/UIWindow.img/Minigame/Common/mark#";
var Message = new Array(
  "管理员不会向你索要银行账号和密码。",
  "每次转账最大额度为10亿。",
  "将金币存在自由银行比放在背包更安全。",
  "如果没有银行账号，可以自己申请。",
  "转账请确认对方账号，避免转错，造成损失。",
  "银行账号密码只能纯数字，不能英文或者符号等。",
  "请勿将银行账号的密码告诉别人，为了你的财产安全。",
  "银行之间转账只要需要对方银行账号。"
);
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
  cm.getPlayer().银行账号(0);
  cm.getPlayer().银行密码(0);
  if (status == 0) {
    var selStr =
      "   " +
      心 +
      "  " +
      心 +
      "  " +
      心 +
      "  " +
      心 +
      " #r#e < 自由银行 > #k#n " +
      心 +
      "  " +
      心 +
      "  " +
      心 +
      "  " +
      心 +
      "\r\n\r\n";
    selStr +=
      "  " +
      蘑菇 +
      " 银行公告:#r" +
      Message[Math.floor(Math.random() * Message.length)] +
      "#k\r\n\r\n";
    selStr += "\t\t\t\t\t #L0##b返回界面#k#l\r\n";
    selStr += "\t\t\t\t\t #L1##b登陆账号#k#l\r\n";
    selStr += "\t\t\t\t\t #L2##b注册账号#k#l\r\n";

    cm.说明文字(selStr);
  } else if (status == 1) {
    switch (selection) {
      case 0:
        cm.dispose();
        cm.openNpc(9900004, 0);
        break;
      case 1:
        cm.dispose();
        cm.openNpc(9900004, 101);
        break;
      case 2:
        cm.dispose();
        cm.openNpc(9900004, 102);
        break;
    }
  }
}
