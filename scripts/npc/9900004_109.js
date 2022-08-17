/*
 
 脚本：银行账号修改密码
 */

importPackage(net.sf.odinms.client);
var status = 0;
var 金额;

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
  var 账号 = cm.getPlayer().银行账号();
  if (status <= 0) {
    cm.sendGetText("请输入你要修改的密码；");
  } else if (status == 1) {
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
    cm.变更银行账号密码(账号, 密码);
    cm.说明文字("密码修改成功。");
    cm.对话结束();
  }
}
