/*
 
 脚本：银行账号注册
 */

importPackage(net.sf.odinms.client);
var status = 0;
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
    cm.sendGetText("请输入要注册的银行账号；");
  } else if (status == 1) {
    账号 = cm.getText();
    /*
         判断账号是否规范
        */
    if (isNaN(账号)) {
      cm.说明文字("请输入数字账号。");
      cm.对话结束();
      return;
    }
    /*
         判断账号范围
        */
    if (账号 > 9999999 || 账号 < 1000000) {
      cm.说明文字("账号不规范。\r\n请输入 #r9999999 - 1000000#k 之间的账号。 ");
      cm.对话结束();
      return;
    }
    cm.sendGetText("请输入要注册的银行密码；");
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
    if (cm.银行账号(账号) != 0) {
      cm.说明文字("账号 #r" + 账号 + "#k 已经存在。");
      cm.对话结束();
      return;
    }
    cm.注册银行账号(账号, 密码, cm.getPlayer().id);
    cm.说明文字(
      "恭喜你注册银行账号成功。\r\n账号:#b" +
        账号 +
        "#k\r\n密码:#b" +
        密码 +
        "#k "
    );
    cm.对话结束();
  }
}
