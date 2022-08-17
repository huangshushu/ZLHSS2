/*
 
 脚本：银行转账金币
 */

importPackage(net.sf.odinms.client);
var status = 0;
var 金额;
var 账号;

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
  var 我的账号 = cm.getPlayer().银行账号();
  var 我的余额 = cm.银行金币余额(我的账号);
  if (status <= 0) {
    cm.sendGetText("请输入要转账的账号；");
  } else if (status == 1) {
    账号 = cm.getText();
    /*
         判断账号是否存在
         */
    if (cm.银行账号(账号) == 0) {
      cm.说明文字("转账账号 #r" + 账号 + "#k 不存在。");
      cm.对话结束();
      return;
    }
    /*
         判断账号是否存在
         */
    if (账号 == 我的账号) {
      cm.说明文字("你不能给自己当前账号转账。");
      cm.对话结束();
      return;
    }
    cm.sendGetText("请输入你要转入的金币金额；");
  } else if (status == 2) {
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
    var 余额 = cm.银行金币余额(账号);
    if (我的余额 >= 金额) {
      cm.变更银行金币(我的账号, 我的余额 - parseInt(金额));
      cm.转账记录(我的账号, 1, 0, "账号: " + 账号 + " 金币: " + 金额 + "");
      cm.变更银行金币(账号, 余额 + parseInt(金额));
      cm.转账记录(账号, 0, 0, "账号: " + 我的账号 + " 金币: " + 金额 + "");
      cm.说明文字(
        "#r转账成功~#k\r\n\r\n\r\n转账账号 : #b" +
          账号 +
          "#k\r\n金币金额 : #b" +
          金额 +
          "#k"
      );
      cm.私聊输出信息(
        "您的银行账号 " +
          我的账号 +
          " 于 " +
          cm.时间() +
          " 转出 " +
          金额 +
          " 金币，目前该银行账号余额为 " +
          (我的余额 - parseInt(金额)) +
          " 金币。（来自" +
          cm.开服名称() +
          "自由银行游戏转账）",
        "" + cm.账号ID取绑定QQ(cm.getPlayer().getClient().getAccID()) + ""
      );
      cm.私聊输出信息(
        "您的银行账号 " +
          账号 +
          " 于 " +
          cm.时间() +
          " 转入 " +
          金额 +
          " 金币，目前该银行账号余额为 " +
          (余额 + parseInt(金额)) +
          " 金币。（来自" +
          cm.开服名称() +
          "自由银行游戏转账）",
        "" + cm.账号ID取绑定QQ(cm.角色ID取账号ID(cm.银行开户人(账号))) + ""
      );
    } else {
      cm.说明文字("你银行账号没有那么多金币。");
    }
    cm.对话结束();
  }
}
