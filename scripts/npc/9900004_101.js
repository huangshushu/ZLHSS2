/*
 
 脚本：银行主界面
 */

importPackage(net.sf.odinms.client);
var status = 0;
var status1 = 0;
var 账号;
var 密码;
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";

function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (status <= 0 && mode <= 0) {
    cm.对话结束();
    return;
  }
  if (mode == 1) {
    status++;
  } else {
    status--;
  }
  if (status <= 0) {
    cm.sendGetText("请输入银行账号；");
  } else if (status == 1) {
    账号 = cm.getText();
    /*
         判断账号范围
         */
    if (账号 > 9999999 || 账号 < 1000000) {
      cm.说明文字("账号不规范。\r\n请输入 #r9999999 -1000000#k 之间的账号。 ");
      cm.对话结束();
      return;
    }
    /*
         判断账号是否规范
         */
    if (isNaN(账号)) {
      cm.说明文字("请输入数字账号。");
      cm.对话结束();
      return;
    }
    cm.sendGetText("请输入银行密码；");
  } else if (status == 2) {
    密码 = cm.getText();
    /*
         判断密码是否规范
         */
    if (isNaN(密码)) {
      cm.说明文字("请输入数字密码。");
      cm.对话结束();
      return;
    }
    /*
         判断密码范围
         */
    if (密码 > 9999999 || 密码 < 1000000) {
      cm.说明文字("密码不规范。\r\n请输入 #r9999999 -1000000#k 之间的密码。 ");
      cm.对话结束();
      return;
    }
    /*
         判断账号是否存在
         */
    if (cm.银行账号(账号) == 0) {
      cm.说明文字("账号 #r" + 账号 + "#k 不存在。");
      cm.对话结束();
      return;
    }
    /*
         判断账号密码
         */
    if (cm.银行账号密码(账号) != 密码) {
      cm.说明文字("密码不正确。");
      cm.对话结束();
      return;
    }
    cm.getPlayer().银行账号(账号);
    cm.getPlayer().银行密码(密码);
    /*
         显示银行账号内部信息
         */
    var selStr =
      "  " +
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
    selStr += "┏\t\t\t\t\t\t\t\t\t\t\t\t\t┓\r\n";
    selStr +=
      "\t\t#d户主 : #b" + cm.角色ID取名字(cm.银行开户人(账号)) + "#k\r\n";
    selStr += "\t\t#d账号 : #b" + cm.getPlayer().银行账号() + "#k\r\n";
    selStr += "\t\t#d金币 : #r" + cm.银行金币余额(账号) + "#k\r\n";
    selStr += "\t\t#d点券 : #r" + cm.银行点券余额(账号) + "#k\r\n\r\n";
    selStr += "┗\t\t\t\t\t\t\t\t\t\t\t\t\t┛\r\n#b";
    selStr += "\t\t#L6#转账金币#l   #L10#转入记录#l  #L11#转出记录#l\r\n";
    selStr += "\t\t#L5#转账点券#l   #L7#修改密码#l  #L0##r退出银行#k#l\r\n";
    selStr += "\t\t#b#L1#取点券#l #L3#取金币#l #L2#存点券#l #L4#存金币#l\r\n";

    cm.说明文字(selStr);
  } else if (status == 3) {
    switch (selection) {
      /*
			转出记录
			*/
      case 11:
        cm.对话结束();
        cm.打开NPC(9900004, 111);
        break;
      /*
			转入记录
			*/
      case 10:
        cm.对话结束();
        cm.打开NPC(9900004, 110);
        break;
      /*
			修改密码
			*/
      case 7:
        cm.对话结束();
        cm.打开NPC(9900004, 109);
        break;
      /*
			转账金币
			*/
      case 6:
        cm.对话结束();
        cm.打开NPC(9900004, 108);
        break;
      /*
			转账点券
			*/
      case 5:
        cm.对话结束();
        cm.打开NPC(9900004, 107);
        break;
      /*
			存金币
			*/
      case 4:
        cm.对话结束();
        cm.打开NPC(9900004, 106);
        break;
      /*
			取金币
			*/
      case 3:
        cm.对话结束();
        cm.打开NPC(9900004, 105);
        break;
      /*
			退出银行
			*/
      case 0:
        cm.对话结束();
        cm.打开NPC(9900004, 0);
        break;
      /*
			取点券
			*/
      case 1:
        cm.对话结束();
        cm.打开NPC(9900004, 103);
        break;
      /*
			存点券
			*/
      case 2:
        cm.对话结束();
        cm.打开NPC(9900004, 104);
        break;
    }
  }
}
