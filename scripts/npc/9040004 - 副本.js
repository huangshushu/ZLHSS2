/*
 
 脚本：排行榜
 */
importPackage(Packages.database);
var Z = "#fUI/GuildMark.img/Mark/Letter/00005025/1#";
var Y = "#fUI/GuildMark.img/Mark/Letter/00005024/3#";
var X = "#fUI/GuildMark.img/Mark/Letter/00005023/1#";
var D = "#fUI/GuildMark.img/Mark/Letter/00005003/1#";
var M = "#fUI/GuildMark.img/Mark/Letter/00005012/1#";
var A = "#fUI/GuildMark.img/Mark/Letter/00005000/1#";
var P = "#fUI/GuildMark.img/Mark/Letter/00005015/1#";
var Z = "#fUI/GuildMark.img/Mark/Letter/00005025/9#";
var 箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/13#";
var 心1 = "#fUI/GuildMark.img/Mark/Etc/00009001/8#";
var 蘑菇 = "#fUI/UIWindow.img/Minigame/Common/mark#";

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
  cm.个人存档();
  var MC = cm.getServerName();
  var 名人榜开关 = cm.GetPiot("名人榜开关", "1");

  if (status == 0) {
    var selStr = "\t\t\t\t#e#r< 荣 耀 排 行 榜 >#k#n\r\n\r\n";
    if (cm.GetPiot("名人榜开关", "1") <= 0) {
      selStr += "\t\t\t\t#L5##b玩家等级排行榜#l\r\n";
      selStr += "\t\t\t\t#L2##b玩家财富排行榜#l\r\n";
      selStr += "\t\t\t\t#L13##b在线时常排行榜#l\r\n";
      selStr += "\t\t\t\t#L0##b家族势力排行榜#l\r\n";
      selStr += "\t\t\t\t#L19##b人气明星排行榜#l\r\n";
      selStr += "\t\t\t\t#L21##b五子棋积分排行#l\r\n";
      selStr += "\t\t\t\t#L22##b记忆大考验排行#l\r\n\r\n";
    } else {
      selStr += "\r\n维护中···";
      selStr += "\t\t\t\t#L666666##b返回界面#l";
    }
    if (cm.getPlayer().getGMLevel() == 6) {
      if (cm.GetPiot("名人榜开关", "1") <= 0) {
        selStr += "\r\n\t\t\t\t#L1000##b名人榜#g[开启中]#r[GM]#k#l";
      }
      if (cm.GetPiot("名人榜开关", "1") >= 1) {
        selStr += "\r\n\t\t\t\t#L1001##b名人榜#r[关闭中]#r[GM]#k#l";
      }
    }
    cm.sendSimple(selStr);
  } else if (status == 1) {
    switch (selection) {
      //玩家等级排行榜
      case 5111:
        var text = " ┌─────────< #e#r等  级#k#n >──────────┐#n\r\n";
        text +=
          "   #r提示：#b每日凌晨(维护)1:00,刷新等级前20名的玩家。#k\r\n\r\n";
        var rankinfo_list = cm.getBossRankCountTop10("等级排行");
        if (rankinfo_list != null) {
          for (var i = 0; i < rankinfo_list.size(); i++) {
            if (i == 20) {
              break;
            }
            var info = rankinfo_list.get(i);
            //显示名次
            text += i == 0 ? "#r" : i == 1 ? "#b" : i == 2 ? "#d" : "";
            text += "  \t\t\t\t#eTop." + (i + 1) + "#k#n\r\n";
            //t玩家名字
            text +=
              "  \t\t\t\t玩家名字:#b" +
              cm.角色ID取名字(info.getCid()) +
              "#k\r\n";
            //t玩家等级
            text += "  \t\t\t\t玩家等级:#b" + info.getCount() + "#k\r\n";
            //t玩家职业
            text +=
              "  \t\t\t\t玩家职业:#b" + cm.职业(info.getPoints()) + "#k\r\n";
            //t所属家族
            if (info.getCname() == 0) {
              text += "  \t\t\t\t所属家族:#b没有加入家族#k\r\n";
            } else {
              text +=
                "  \t\t\t\t所属家族:#b" +
                cm.获取家族名称(info.getCname()) +
                "#k\r\n";
            }
            text += "\r\n";
          }
        }
        text += " └────────────────────────┘#n\r\n\r\n";
        cm.sendOkS(text, 3);
        cm.dispose();
        break;

      //每日签到排行
      case 1:
        var text = " ┌─────────< #e#r签  到#k#n >──────────┐#n\r\n";
        text += "   #r提示：#b每日在小z签到的记录排行榜。#k\r\n\r\n";
        var rankinfo_list = cm.getBossRankCountTop("签到");
        if (rankinfo_list != null) {
          for (var i = 0; i < rankinfo_list.size(); i++) {
            if (i == 20) {
              break;
            }
            var info = rankinfo_list.get(i);

            text += i == 0 ? "#r" : i == 1 ? "#b" : i == 2 ? "#b" : "";
            text += "\tTop." + (i + 1) + "\t\t";
            // 填充名字空格
            text += info.getCname();
            for (var j = 16 - info.getCname().getBytes().length; j > 0; j--) {
              text += " ";
            }
            text += "\t\t#k#n签到#r #e" + info.getCount();
            text += "#k#n 天\t\t#k";
            text += "";
          }
        }
        text += "\r\n\r\n\r\n\r\n └────────────────────────┘#n\r\n\r\n";
        cm.sendOkS(text, 3);
        cm.dispose();
        break;
      //战斗力排行
      case 20:
        var text = " ┌─────────< #e#r战斗力#k#n >──────────┐#n\r\n";
        text += "   #r提示：#b战斗力是根据玩家自身属性的综合计算的。#k\r\n\r\n";
        var rankinfo_list = cm.getBossRankCountTop("战斗力统计");
        if (rankinfo_list != null) {
          for (var i = 0; i < rankinfo_list.size(); i++) {
            if (i == 20) {
              break;
            }
            var info = rankinfo_list.get(i);
            text += i == 0 ? "#r" : i == 1 ? "#b" : i == 2 ? "#b" : "";
            text += "\tTop." + (i + 1) + ".\t\t";
            // 填充名字空格
            text += info.getCname();
            for (var j = 16 - info.getCname().getBytes().length; j > 0; j--) {
              text += " ";
            }
            text += "\t\t战斗力:" + info.getCount();
            text += "\t#k";
            text += "";
          }
        }
        text += "\r\n\r\n\r\n\r\n └────────────────────────┘#n\r\n\r\n";
        cm.sendOkS(text, 3);
        cm.dispose();
        break;

      case 1000:
        cm.GainPiot("名人榜开关", "1", -名人榜开关);
        cm.GainPiot("名人榜开关", "1", 1);
        cm.dispose();
        cm.openNpc(9900004, 7);
        break;
      case 1001:
        cm.GainPiot("名人榜开关", "1", -名人榜开关);
        cm.dispose();
        cm.openNpc(9900004, 7);
        break;
      case 21:
        cm.dispose();
        cm.openNpc(9040004, 1);
        break;
      case 22:
        cm.dispose();
        cm.openNpc(9040004, 2);
        break;
      case 666666:
        cm.dispose();
        cm.openNpc(9900004, 0);
        break;
      case 0:
        cm.displayGuildRanks();
        cm.dispose();
        break;
      case 9:
        cm.MapleMSpvpdeaths();
        cm.dispose();
        break;
      case 25:
        cm.声望排行榜();
        cm.dispose();
        break;
      case 19:
        cm.人气排行榜();
        cm.dispose();
        break;
      case 23:
        cm.豆豆排行榜();
        cm.dispose();
        break;
      case 13:
        cm.总在线时间排行榜();
        cm.dispose();
        break;
      case 10:
        cm.MapleMSpvpkills();
        cm.dispose();
        break;
      case 5:
        cm.showlvl();
        cm.dispose();
        break;

      case 2:
        cm.showmeso();
        cm.dispose();
        break;
    }
  }
}
function getname(id) {
  var con1 = DatabaseConnection.getConnection();
  ps1 = con1.prepareStatement("SELECT name FROM characters WHERE id = ?");
  ps1.setInt(1, id);
  var rs1 = ps1.executeQuery();
  var name;
  if (rs1.next()) {
    name = rs1.getString("name");
  } else {
    name = "无名";
  }
  rs1.close();
  ps1.close();
  return name;
}
