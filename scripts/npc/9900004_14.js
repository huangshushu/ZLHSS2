/*
 
 脚本：爱心使者
 */
//声明 r 的值
var r = "爱心使者";
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
  //开始
  if (status == 0) {
    var 文本 =
      "  Hi~#b#h ##k，你需要在一个城镇签到一定天数，才能获得这个城镇的#r爱心使者#k勋章，但是这个勋章不是永久的哦。\r\n";
    if (cm.判断地图() == 100000000) {
      文本 += "#L100000000##b#m100000000#签到#k#l";
    } else if (cm.判断地图() == 101000000) {
      文本 += "#L101000000##b#m101000000#签到#k#l";
    } else if (cm.判断地图() == 102000000) {
      文本 += "#L102000000##b#m102000000#签到#k#l";
    } else if (cm.判断地图() == 103000000) {
      文本 += "#L103000000##b#m103000000#签到#k#l";
    } else if (cm.判断地图() == 105040300) {
      文本 += "#L105040300##b#m105040300#签到#k#l";
    } else if (cm.判断地图() == 120000000) {
      文本 += "#L120000000##b#m120000000#签到#k#l";
    } else if (cm.判断地图() == 211000000) {
      文本 += "#L211000000##b#m211000000#签到#k#l";
    } else if (cm.判断地图() == 230000000) {
      文本 += "#L230000000##b#m230000000#签到#k#l";
    } else if (cm.判断地图() == 220000000) {
      文本 += "#L220000000##b#m220000000#签到#k#l";
    } else if (cm.判断地图() == 221000000) {
      文本 += "#L221000000##b#m221000000#签到#k#l";
    } else if (cm.判断地图() == 222000000) {
      文本 += "#L222000000##b#m222000000#签到#k#l";
    } else if (cm.判断地图() == 240000000) {
      文本 += "#L240000000##b#m240000000#签到#k#l";
    } else if (cm.判断地图() == 250000000) {
      文本 += "#L250000000##b#m250000000#签到#k#l";
    } else if (cm.判断地图() == 251000000) {
      文本 += "#L251000000##b#m251000000#签到#k#l";
    } else if (cm.判断地图() == 260000000) {
      文本 += "#L260000000##b#m260000000#签到#k#l";
    } else if (cm.判断地图() == 261000000) {
      文本 += "#L261000000##b#m261000000#签到#k#l";
    } else if (cm.判断地图() == 104000000) {
      文本 += "#L104000000##b#m104000000#签到#k#l";
    } else if (cm.判断地图() == 200000000) {
      文本 += "#L200000000##b#m200000000#签到#k#l";
    }

    cm.说明文字(文本);
  } else if (status == 1) {
    switch (selection) {
      case 100000000:
        //设定 b 代表 射手村爱心使者
        var b = "射手村爱心使者";
        //设定 a 代表 cm.getBossRank("射手村爱心使者", 2)；
        var a = cm.getBossRank(b, 2);
        //判断今天是否已经签到了，r 在脚本开头已经声明了一个值
        if (cm.判断每日值(r) <= 0) {
          //数据初始化
          if (a == -1) {
            cm.setBossRankCount(b, 0);
          }
          //如果这个值大于或者等于7，签到7天后，第八天签到就变成领取
          if (a >= 7) {
            //勋章代码
            var 勋章 = 1142014;
            //给勋章
            cm.gainItemPeriod(勋章, 1, 7);
            //清空签到
            cm.setBossRankCount(b, -a);
            //显示说明文字
            cm.说明文字("恭喜你获得 " + cm.显示物品(勋章) + " 。");
          } else {
            //给值为 b 的签到
            cm.setBossRankCount(b, 1);
            //显示签到说明
            cm.说明文字(
              "恭喜你#r(" + b + ")#k签到成功，已经签到 #r" + (a + 1) + "#k 次。"
            );
          }
          //记录今日签到
          cm.增加每日值(r);
        } else {
          //已经签到就不能签
          cm.说明文字("今天已经签到了。你已经签到 #r" + a + "#k 次。");
        }
        //不管怎样，对话结束
        cm.对话结束();
        break;
      case 101000000:
        var b = "魔法密林爱心使者";
        var a = cm.getBossRank(b, 2);
        if (cm.判断每日值(r) <= 0) {
          if (a == -1) {
            cm.setBossRankCount(b, 0);
          }
          if (a >= 7) {
            var 勋章 = 1142015;
            cm.gainItemPeriod(勋章, 1, 7);
            cm.setBossRankCount(b, -a);
            cm.说明文字("恭喜你获得 " + cm.显示物品(勋章) + " 。");
          } else {
            cm.setBossRankCount(b, 1);
            cm.说明文字(
              "恭喜你#r(" + b + ")#k签到成功，已经签到 #r" + (a + 1) + "#k 次。"
            );
          }
          cm.增加每日值(r);
        } else {
          cm.说明文字("今天已经签到了。你已经签到 #r" + a + "#k 次。");
        }
        cm.对话结束();
        break;
      case 102000000:
        var b = "勇士部落爱心使者";
        var a = cm.getBossRank(b, 2);
        if (cm.判断每日值(r) <= 0) {
          if (a == -1) {
            cm.setBossRankCount(b, 0);
          }
          if (a >= 7) {
            var 勋章 = 1142016;
            cm.gainItemPeriod(勋章, 1, 7);
            cm.setBossRankCount(b, -a);
            cm.说明文字("恭喜你获得 " + cm.显示物品(勋章) + " 。");
          } else {
            cm.setBossRankCount(b, 1);
            cm.说明文字(
              "恭喜你#r(" + b + ")#k签到成功，已经签到 #r" + (a + 1) + "#k 次。"
            );
          }
          cm.增加每日值(r);
        } else {
          cm.说明文字("今天已经签到了。你已经签到 #r" + a + "#k 次。");
        }
        cm.对话结束();
        break;
      case 103000000:
        var b = "废弃都市爱心使者";
        var a = cm.getBossRank(b, 2);
        if (cm.判断每日值(r) <= 0) {
          if (a == -1) {
            cm.setBossRankCount(b, 0);
          }
          if (a >= 7) {
            var 勋章 = 1142017;
            cm.gainItemPeriod(勋章, 1, 7);
            cm.setBossRankCount(b, -a);
            cm.说明文字("恭喜你获得 " + cm.显示物品(勋章) + " 。");
          } else {
            cm.setBossRankCount(b, 1);
            cm.说明文字(
              "恭喜你#r(" + b + ")#k签到成功，已经签到 #r" + (a + 1) + "#k 次。"
            );
          }
          cm.增加每日值(r);
        } else {
          cm.说明文字("今天已经签到了。你已经签到 #r" + a + "#k 次。");
        }
        cm.对话结束();
        break;
      case 105040300:
        var b = "林中之城爱心使者";
        var a = cm.getBossRank(b, 2);
        if (cm.判断每日值(r) <= 0) {
          if (a == -1) {
            cm.setBossRankCount(b, 0);
          }
          if (a >= 7) {
            var 勋章 = 1142018;
            cm.gainItemPeriod(勋章, 1, 7);
            cm.setBossRankCount(b, -a);
            cm.说明文字("恭喜你获得 " + cm.显示物品(勋章) + " 。");
          } else {
            cm.setBossRankCount(b, 1);
            cm.说明文字(
              "恭喜你#r(" + b + ")#k签到成功，已经签到 #r" + (a + 1) + "#k 次。"
            );
          }
          cm.增加每日值(r);
        } else {
          cm.说明文字("今天已经签到了。你已经签到 #r" + a + "#k 次。");
        }
        cm.对话结束();
        break;
      case 120000000:
        var b = "诺特勒斯爱心使者";
        var a = cm.getBossRank(b, 2);
        if (cm.判断每日值(r) <= 0) {
          if (a == -1) {
            cm.setBossRankCount(b, 0);
          }
          if (a >= 7) {
            var 勋章 = 1142019;
            cm.gainItemPeriod(勋章, 1, 7);
            cm.setBossRankCount(b, -a);
            cm.说明文字("恭喜你获得 " + cm.显示物品(勋章) + " 。");
          } else {
            cm.setBossRankCount(b, 1);
            cm.说明文字(
              "恭喜你#r(" + b + ")#k签到成功，已经签到 #r" + (a + 1) + "#k 次。"
            );
          }
          cm.增加每日值(r);
        } else {
          cm.说明文字("今天已经签到了。你已经签到 #r" + a + "#k 次。");
        }
        cm.对话结束();
        break;
      case 211000000:
        var b = "冰封雪域爱心使者";
        var a = cm.getBossRank(b, 2);
        if (cm.判断每日值(r) <= 0) {
          if (a == -1) {
            cm.setBossRankCount(b, 0);
          }
          if (a >= 7) {
            var 勋章 = 1142020;
            cm.gainItemPeriod(勋章, 1, 7);
            cm.setBossRankCount(b, -a);
            cm.说明文字("恭喜你获得 " + cm.显示物品(勋章) + " 。");
          } else {
            cm.setBossRankCount(b, 1);
            cm.说明文字(
              "恭喜你#r(" + b + ")#k签到成功，已经签到 #r" + (a + 1) + "#k 次。"
            );
          }
          cm.增加每日值(r);
        } else {
          cm.说明文字("今天已经签到了。你已经签到 #r" + a + "#k 次。");
        }
        cm.对话结束();
        break;
      case 230000000:
        var b = "水下世界爱心使者";
        var a = cm.getBossRank(b, 2);
        if (cm.判断每日值(r) <= 0) {
          if (a == -1) {
            cm.setBossRankCount(b, 0);
          }
          if (a >= 7) {
            var 勋章 = 1142021;
            cm.gainItemPeriod(勋章, 1, 7);
            cm.setBossRankCount(b, -a);
            cm.说明文字("恭喜你获得 " + cm.显示物品(勋章) + " 。");
          } else {
            cm.setBossRankCount(b, 1);
            cm.说明文字(
              "恭喜你#r(" + b + ")#k签到成功，已经签到 #r" + (a + 1) + "#k 次。"
            );
          }
          cm.增加每日值(r);
        } else {
          cm.说明文字("今天已经签到了。你已经签到 #r" + a + "#k 次。");
        }
        cm.对话结束();
        break;
      case 220000000:
        var b = "玩具城爱心使者";
        var a = cm.getBossRank(b, 2);
        if (cm.判断每日值(r) <= 0) {
          if (a == -1) {
            cm.setBossRankCount(b, 0);
          }
          if (a >= 7) {
            var 勋章 = 1142022;
            cm.gainItemPeriod(勋章, 1, 7);
            cm.setBossRankCount(b, -a);
            cm.说明文字("恭喜你获得 " + cm.显示物品(勋章) + " 。");
          } else {
            cm.setBossRankCount(b, 1);
            cm.说明文字(
              "恭喜你#r(" + b + ")#k签到成功，已经签到 #r" + (a + 1) + "#k 次。"
            );
          }
          cm.增加每日值(r);
        } else {
          cm.说明文字("今天已经签到了。你已经签到 #r" + a + "#k 次。");
        }
        cm.对话结束();
        break;
      case 221000000:
        var b = "地球防御本部爱心使者";
        var a = cm.getBossRank(b, 2);
        if (cm.判断每日值(r) <= 0) {
          if (a == -1) {
            cm.setBossRankCount(b, 0);
          }
          if (a >= 7) {
            var 勋章 = 1142023;
            cm.gainItemPeriod(勋章, 1, 7);
            cm.setBossRankCount(b, -a);
            cm.说明文字("恭喜你获得 " + cm.显示物品(勋章) + " 。");
          } else {
            cm.setBossRankCount(b, 1);
            cm.说明文字(
              "恭喜你#r(" + b + ")#k签到成功，已经签到 #r" + (a + 1) + "#k 次。"
            );
          }
          cm.增加每日值(r);
        } else {
          cm.说明文字("今天已经签到了。你已经签到 #r" + a + "#k 次。");
        }
        cm.对话结束();
        break;
      case 222000000:
        var b = "童话村爱心使者";
        var a = cm.getBossRank(b, 2);
        if (cm.判断每日值(r) <= 0) {
          if (a == -1) {
            cm.setBossRankCount(b, 0);
          }
          if (a >= 7) {
            var 勋章 = 1142024;
            cm.gainItemPeriod(勋章, 1, 7);
            cm.setBossRankCount(b, -a);
            cm.说明文字("恭喜你获得 " + cm.显示物品(勋章) + " 。");
          } else {
            cm.setBossRankCount(b, 1);
            cm.说明文字(
              "恭喜你#r(" + b + ")#k签到成功，已经签到 #r" + (a + 1) + "#k 次。"
            );
          }
          cm.增加每日值(r);
        } else {
          cm.说明文字("今天已经签到了。你已经签到 #r" + a + "#k 次。");
        }
        cm.对话结束();
        break;
      case 240000000:
        var b = "神木村爱心使者";
        var a = cm.getBossRank(b, 2);
        if (cm.判断每日值(r) <= 0) {
          if (a == -1) {
            cm.setBossRankCount(b, 0);
          }
          if (a >= 7) {
            var 勋章 = 1142025;
            cm.gainItemPeriod(勋章, 1, 7);
            cm.setBossRankCount(b, -a);
            cm.说明文字("恭喜你获得 " + cm.显示物品(勋章) + " 。");
          } else {
            cm.setBossRankCount(b, 1);
            cm.说明文字(
              "恭喜你#r(" + b + ")#k签到成功，已经签到 #r" + (a + 1) + "#k 次。"
            );
          }
          cm.增加每日值(r);
        } else {
          cm.说明文字("今天已经签到了。你已经签到 #r" + a + "#k 次。");
        }
        cm.对话结束();
        break;
      case 250000000:
        var b = "武陵爱心使者";
        var a = cm.getBossRank(b, 2);
        if (cm.判断每日值(r) <= 0) {
          if (a == -1) {
            cm.setBossRankCount(b, 0);
          }
          if (a >= 7) {
            var 勋章 = 1142026;
            cm.gainItemPeriod(勋章, 1, 7);
            cm.setBossRankCount(b, -a);
            cm.说明文字("恭喜你获得 " + cm.显示物品(勋章) + " 。");
          } else {
            cm.setBossRankCount(b, 1);
            cm.说明文字(
              "恭喜你#r(" + b + ")#k签到成功，已经签到 #r" + (a + 1) + "#k 次。"
            );
          }
          cm.增加每日值(r);
        } else {
          cm.说明文字("今天已经签到了。你已经签到 #r" + a + "#k 次。");
        }
        cm.对话结束();
        break;
      case 251000000:
        var b = "百草堂爱心使者";
        var a = cm.getBossRank(b, 2);
        if (cm.判断每日值(r) <= 0) {
          if (a == -1) {
            cm.setBossRankCount(b, 0);
          }
          if (a >= 7) {
            var 勋章 = 1142027;
            cm.gainItemPeriod(勋章, 1, 7);
            cm.setBossRankCount(b, -a);
            cm.说明文字("恭喜你获得 " + cm.显示物品(勋章) + " 。");
          } else {
            cm.setBossRankCount(b, 1);
            cm.说明文字(
              "恭喜你#r(" + b + ")#k签到成功，已经签到 #r" + (a + 1) + "#k 次。"
            );
          }
          cm.增加每日值(r);
        } else {
          cm.说明文字("今天已经签到了。你已经签到 #r" + a + "#k 次。");
        }
        cm.对话结束();
        break;
      case 260000000:
        var b = "阿里安特爱心使者";
        var a = cm.getBossRank(b, 2);
        if (cm.判断每日值(r) <= 0) {
          if (a == -1) {
            cm.setBossRankCount(b, 0);
          }
          if (a >= 7) {
            var 勋章 = 1142028;
            cm.gainItemPeriod(勋章, 1, 7);
            cm.setBossRankCount(b, -a);
            cm.说明文字("恭喜你获得 " + cm.显示物品(勋章) + " 。");
          } else {
            cm.setBossRankCount(b, 1);
            cm.说明文字(
              "恭喜你#r(" + b + ")#k签到成功，已经签到 #r" + (a + 1) + "#k 次。"
            );
          }
          cm.增加每日值(r);
        } else {
          cm.说明文字("今天已经签到了。你已经签到 #r" + a + "#k 次。");
        }
        cm.对话结束();
        break;
      case 261000000:
        var b = "玛加提亚爱心使者";
        var a = cm.getBossRank(b, 2);
        if (cm.判断每日值(r) <= 0) {
          if (a == -1) {
            cm.setBossRankCount(b, 0);
          }
          if (a >= 7) {
            var 勋章 = 1142029;
            cm.gainItemPeriod(勋章, 1, 7);
            cm.setBossRankCount(b, -a);
            cm.说明文字("恭喜你获得 " + cm.显示物品(勋章) + " 。");
          } else {
            cm.setBossRankCount(b, 1);
            cm.说明文字(
              "恭喜你#r(" + b + ")#k签到成功，已经签到 #r" + (a + 1) + "#k 次。"
            );
          }
          cm.增加每日值(r);
        } else {
          cm.说明文字("今天已经签到了。你已经签到 #r" + a + "#k 次。");
        }
        cm.对话结束();
        break;
      case 104000000:
        var b = "明珠港爱心使者";
        var a = cm.getBossRank(b, 2);
        if (cm.判断每日值(r) <= 0) {
          if (a == -1) {
            cm.setBossRankCount(b, 0);
          }
          if (a >= 7) {
            var 勋章 = 1142030;
            cm.gainItemPeriod(勋章, 1, 7);
            cm.setBossRankCount(b, -a);
            cm.说明文字("恭喜你获得 " + cm.显示物品(勋章) + " 。");
          } else {
            cm.setBossRankCount(b, 1);
            cm.说明文字(
              "恭喜你#r(" + b + ")#k签到成功，已经签到 #r" + (a + 1) + "#k 次。"
            );
          }
          cm.增加每日值(r);
        } else {
          cm.说明文字("今天已经签到了。你已经签到 #r" + a + "#k 次。");
        }
        cm.对话结束();
        break;
      case 200000000:
        var b = "天空之城爱心使者";
        var a = cm.getBossRank(b, 2);
        if (cm.判断每日值(r) <= 0) {
          if (a == -1) {
            cm.setBossRankCount(b, 0);
          }
          if (a >= 7) {
            var 勋章 = 1142031;
            cm.gainItemPeriod(勋章, 1, 7);
            cm.setBossRankCount(b, -a);
            cm.说明文字("恭喜你获得 " + cm.显示物品(勋章) + " 。");
          } else {
            cm.setBossRankCount(b, 1);
            cm.说明文字(
              "恭喜你#r(" + b + ")#k签到成功，已经签到 #r" + (a + 1) + "#k 次。"
            );
          }
          cm.增加每日值(r);
        } else {
          cm.说明文字("今天已经签到了。你已经签到 #r" + a + "#k 次。");
        }
        cm.对话结束();
        break;
      default:
        cm.说明文字("这里不是主城，没有信息。");
        cm.对话结束();
        break;
    }
  }
}
