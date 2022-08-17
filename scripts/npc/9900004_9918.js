/*
 
 脚本：家族申请系统
 */

importPackage(net.sf.odinms.client);
var status = 0;
var fee;
var youjian = 0;
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";

function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (mode == -1) {
    cm.对话结束();
  } else {
    if (mode == 0) {
      status == 0;
    }
    if (mode == 1) {
      status++;
    } else {
      status--;
    }
    //提取角色ID
    var 角色ID = cm.getPlayer().id;
    //显示列表
    if (status == 0) {
      cm.sendYesNo(
        "  \t\t   " +
          心 +
          "  " +
          心 +
          " #r#e < 家族列表 > #k#n " +
          心 +
          "  " +
          心 +
          "\r\n\r\n      Hi~ #b#h ##k这里显示游戏内所有家族，没有家族的玩家可以在这里加入家族。在这里可以找到小伙伴多的家族一起玩耍哦。\r\n" +
          cm.显示所有家族() +
          ""
      );
    } else if (status == 1) {
      cm.sendYesNo(
        "你确定要加入 #r" + cm.获取家族名称(selection) + "#k 家族吗？"
      );
      fee = selection;
    } else if (status == 2) {
      if (cm.Getguildsl("" + fee + "", 1) > 0) {
        cm.说明文字("该家族禁止申请加入。");
        cm.对话结束();
        return;
      }
      if (cm.getPlayer().getGuildId() == 0) {
        cm.说明文字("成功加入家族。");
        cm.加入家族(fee, 角色ID);
      } else {
        cm.说明文字("你已经有家族了，不能重复加入，");
        cm.对话结束();
        return;
      }
    }
  }
}
