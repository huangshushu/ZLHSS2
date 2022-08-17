/*
 
 脚本：银行账号取金币
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
  var 余额 = cm.银行金币余额(账号);
  if (status <= 0) {
    cm.sendGetText("请输入你要取出的金币数量；");
  } else if (status == 1) {
    金额 = cm.getText();
    if (isNaN(金额)) {
      cm.说明文字("输入不规范。");
      cm.对话结束();
      return;
    }
    if (金额 < 0 || 金额 > 1000000000) {
      cm.说明文字("请输入正确的金额。");
      cm.对话结束();
      return;
    }
    if (cm.银行金币余额(账号) >= 金额) {
      cm.给金币(金额);
      cm.个人存档();
      cm.变更银行金币(账号, 余额 - parseInt(金额));
      cm.说明文字("取出金币 #b" + 金额 + "#k。");
    } else {
      cm.说明文字("余额不足。");
    }
    cm.对话结束();
  }
}
