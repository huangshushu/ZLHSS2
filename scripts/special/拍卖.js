var 礼包物品 = "#v1302000#";
var x1 = "1302000,+1"; // 物品ID,数量
var x2;
var x3;
var x4;
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var FSTZ = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 星星 = "#fEffect/CharacterEff/1003393/0/0#";
var hx = "#fEffect/CharacterEff/1022223/4/0#";
var 警报灯 = "#fUI/StatusBar/BtClaim/normal/0#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 小雪花 = "#fEffect/CharacterEff/1003393/0/0#";
var 音乐 = "#fEffect/CharacterEff/1003249/0/0#"; //浅颜色音乐符号
var 表情高兴 = "#fUI/GuildBBS/GuildBBS/Emoticon/Basic/2#";
var 彩虹 = "#fEffect/ItemEff/1071085/effect/walk1/2#";
var hx = "#fEffect/CharacterEff/1112960/3/0#"; //邪恶小兔 【小】
var FSTZ = "#fEffect/CharacterEff/1082565/4/0#"; //粉兔子
var 邪恶小兔 = "#fEffect/CharacterEff/1112960/3/0#"; //邪恶小兔 【小】
var 红枫叶 = "#fMap/MapHelper/weather/maple/1#";
var 银杏叶 = "#fMap/MapHelper/weather/maple/3#";
var 点券 = "#fUI/CashShop/CashItem/0#";
var M7 = "#fEffect/CharacterEff/1051296/1/0#"; //蓝圆星
var M14 = "#fEffect/CharacterEff/1112925/0/0#"; //蓝星
var H1 = "#fEffect/CharacterEff/1050334/0/1#"; //粉色小花
var FG = "#fEffect/CharacterEff/1051366/1/0#"; // 蓝色蝴蝶
var 热点推荐 = "#fUI/CashShop/CSChar/BtCoordination/mouseOver/0#";
var LJ = "#fEffect/CharacterEff/1082565/2/0#"; //蓝兔子

var maplist = [
  [104000400, 2220000, "红蜗牛王"],
  [240060200, 240060100],
  [270050100, 9400014, "天球"],
];

function start() {
  status = -1;

  action(1, 0, 0);
}
function action(mode, type, selection) {
  if (mode == -1) {
    cm.dispose();
  } else {
    if (status >= 0 && mode == 0) {
      cm.sendOk("感谢你的光临！");
      cm.dispose();
      return;
    }
    if (mode == 1) {
      status++;
    } else {
      status--;
    }
    if (status == 0) {
      var tex2 = "";
      var text = "";
      for (i = 0; i < 10; i++) {
        text += "";
      }
      频道 = cm.getPlayer().getClient().getChannel();
      if (cm.getMapId() == 180000002) {
        cm.sendOk(
          "#e#b南山高档监狱#k#n\r\n欢迎您\r\n好好在里面呆着吧！等刑满释放！"
        );
        cm.dispose();
        return;
      }

      text += "     " + 彩虹 + " #e#d大 王 冒 险 岛#k#n " + 彩虹 + "   \r\n ";
      text += "    " + 彩虹 + " #e#r加 急 施 工 中#k#n " + 彩虹 + "   \r\n ";

      text +=
        " \t" +
        M14 +
        "#d豆豆：" +
        cm.getBeans() +
        "             " +
        点券 +
        "#d点卷余额:#r" +
        cm.getPlayer().getCSPoints(1) +
        "#k\r\n";

      text += "#d- - - - - - - - - - - - - - - - - - - - - - - - - - -\r\n";

      //text += "   #d公告："+cm.getqjblname(1)+"#k\r\n"
      //==============================================================================================================================
      text += "\t#L7##r" + FSTZ + "万能传送#l";
      text += "#L1111##d" + FSTZ + "蛋蛋道具#l";
      text += "#L13##d" + FSTZ + "爆率查询#l\r\n";

      //text += "\t#L10##d" + FSTZ + "主线任务#l#L11##d" + FSTZ + "暴君兑换#l#L3#" + FSTZ + "快捷商店#l\r\n";

      //text += "\t#L9##d" + FSTZ + "萌新宠物#l#L14##d" + FSTZ + "兑换中心#l#L15#" + FSTZ + "Boso战利#l\r\n";

      //text += "\t#L17##d" + FSTZ + "每日签到#l#L18##d" + FSTZ + "日常搬砖#l#L19#" + FSTZ + "师徒系统#l\r\n";

      //text += "#L13##d" + FSTZ + "爆率查询#l#L23##d" + FSTZ + "我要吃鱼#l#L24##d" + FSTZ + "推广中心#l#L20#" + FSTZ + "积分商城#l\r\n";

      text +=
        "\t#L23##d" +
        FSTZ +
        "公婆戒指#l#L24##d" +
        FSTZ +
        "材料兑换#l#L10##d" +
        FSTZ +
        "升级礼包#l\r\n";

      text += "\t#L999##d" + FSTZ + "合成飞镖#l#l\r\n";

      //text += "\t#L16##d" + FSTZ + "背包清理#l#L26##d" + FSTZ + "#b打工中心#l#L28##d"  +  FSTZ + "#r#e藏 宝 阁#n#l\r\n";

      //text += "#L16##d" + FSTZ + "背包清理#l#L26##d" + FSTZ + "#b打工中心#l#L27##d" + FSTZ + "#e#r元 宝 阁#l#L28##d" + FSTZ + "#r#e藏 宝 阁#n#l\r\n\r\n";
      //text += "\r\n\r\n";
      //==============================================================================================================================
      for (var i in maplist) {
        if (cm.getMonsterCount(maplist[i][0], maplist[i][1]) >= 1) {
          text +=
            "\r\n\t   #d" +
            FSTZ +
            "BOSS:" +
            maplist[i][2] +
            "已刷新！#l\r\n\r\n";
        }
      }

      text += "\r\n#d- - - - - - - - - - - - - - - - - - - - - - - - - - -\r\n";
      text += "\t   #d" + FSTZ + "怪物收藏手册将额外增加四维、HP、MP#l\r\n\r\n";

      if (cm.getPlayer().isGM()) {
        text += "#d- - - - - - - - - - - - -G M- - - - - - - - - - - - -\r\n";
        //				text += "在线人数："+(cm.getOnline()+0)+"     频道："+频道+"\r\n"
        //text += "#L1000#"+LJ+"万能传送#l#L1001#"+LJ+"属性修改#l#L1002#"+LJ+"装扮中心#l#L1003#"+LJ+"刷出物品#l\r\n"
        //text += "#L1004#"+LJ+"全服信息#l#L1005#"+LJ+"地图测试#l#L1007#"+LJ+"虚拟上线#l#L1008#"+LJ+"修改公告#l\r\n"
        //text += "#L1009#"+LJ+"快速转职#l#L1010#"+LJ+"管理面板#l#L1012#"+LJ+"在线玩家#l#L1013#"+LJ+"虚拟抽奖#l\r\n"
        //text += "#L1014#"+LJ+"全服查物#l\r\n"
        text +=
          "#L1001#" +
          LJ +
          "属性修改#l#L1002#" +
          LJ +
          "装扮中心#L1007#" +
          LJ +
          "虚拟上线#l\r\n";
        text += "#L1009#" + LJ + "快速转职#L1110#" + LJ + "查看传送#L1012#" + LJ + "在线玩家#l\r\n";
      }
      cm.sendSimple(text);
    }
    if (selection == 1) {
      //查看爆率
      cm.dispose();
      //cm.openNpc(9900004, "怪物爆率");
    }
    if (selection == 2) {
      //本服说明
      cm.dispose();
      cm.openNpc(9900004, 2);
    }
    if (selection == 3) {
      //快捷商店
      if (cm.haveItem(5450000, 1)) {
        cm.gainItem(5450000, -1);
        cm.openShop(30);
      } else {
        cm.sendOk("请购买包裹妙妙使用随身包裹。");
      }
      cm.dispose();
    }
    if (selection == 4) {
      //枫叶兑换
      cm.dispose();
      cm.openNpc(9900004, 4);
    }
    if (selection == 5) {
      //删除物品
      cm.dispose();
      cm.openNpc(9900004, 5);
    }
    if (selection == 6) {
      //点卷商场
      cm.dispose();
      cm.openNpc(9900004, 6);
    }
    if (selection == 7) {
      //传送
      cm.dispose();
      //cm.openNpc(9900004, 7);
      cm.openNpc(9900004, "地图传送");
    }
    if (selection == 8) {
      //
      cm.sendOk("暂不开放，请等待功能完成");
      cm.dispose();
    }
    if (selection == 9) {
      //新手礼包
      cm.dispose();
      cm.openNpc(9900004, "等级礼包");
    }
    if (selection == 10) {
      //主线任务
      cm.dispose();
      //cm.openNpc(9900004, 10);
      cm.openNpc(9900004, "主线任务");
    }
    if (selection == 11) {
      //暴君兑换
      cm.dispose();
      cm.openNpc(9900004, "暴君兑换");
    }
    if (selection == 12) {
      //
      cm.dispose();
      cm.openNpc(9900004, 12);
    }
    if (selection == 13) {
      //爆率查询
      cm.dispose();
      //cm.openNpc(9900004, "怪物爆率");
      cm.openNpc(9900004, "爆率查询");
    }
    if (selection == 14) {
      //货币兑换
      cm.dispose();
      cm.openNpc(9900004, 10112);
    }
    if (selection == 15) {
      //BOSS战利品
      cm.dispose();
      cm.openNpc(9900004, 15);
    }
    if (selection == 16) {
      //背包清理
      cm.dispose();
      cm.openNpc(9900004, 16);
    }
    if (selection == 17) {
      //
      cm.dispose();
      cm.openNpc(9900004, 17);
    }
    if (selection == 18) {
      //
      cm.dispose();
      cm.openNpc(9900004, 18);
    }
    if (selection == 19) {
      //师徒系统
      cm.dispose();
      cm.openNpc(9900004, "师徒");
      //cm.openNpc(9900004, 19);
    }
    if (selection == 20) {
      //带人积分商城
      cm.dispose();
      cm.openNpc(9900004, 20);
    }
    if (selection == 21) {
      //彩票中心
      cm.dispose();
      cm.openNpc(9100203, 0);
    }
    if (selection == 22) {
      //排行榜
      cm.dispose();
      cm.openNpc(9040004, 0);
    }
    if (selection == 23) {
      //公婆戒指
      cm.dispose();
      cm.openNpc(9900004, "公婆戒指");
    }
    if (selection == 24) {
      //材料兑换
      cm.dispose();
      cm.openNpc(9900004, "材料兑换");
    }
    if (selection == 25) {
      //快速转职
      cm.dispose();
      cm.openNpc(9900004, 1009);
    }
    if (selection == 26) {
      //
      cm.dispose();
      //cm.openNpc(9310071,1);
      cm.openNpc(9900004, "打工中心");
    }
    if (selection == 27) {
      //
      cm.dispose();
      cm.openNpc(9900004, 27);
    }
    if (selection == 28) {
      //藏宝阁
      cm.dispose();
      cm.openNpc(9900004, 28);
    }
    if (selection == 29) {
      //道具商城
      cm.dispose();
      cm.openNpc(9900004, 29);
    }
    if (selection == 100) {
      //换购
      cm.dispose();
      cm.openNpc(9900004, 100);
    }
    if (selection == 101) {
      //南山银行
      cm.dispose();
      cm.openNpc(9900004, 101);
    }
    if (selection == 102) {
      //赞助福利，暂未启用
      cm.dispose();
      cm.openNpc(9900004, 102);
    }
    if (selection == 103) {
      //点卷商城
      cm.dispose();
      cm.openNpc(9900004, 103);
    }
    if (selection == 1111) {
      //永恒、重生蛋的道具说明
      var txt = "";
      txt += "#r#v4280000##z4280000#专属道具\r\n";
      var arr = Packages.constants.GameConstants.永恒装备;
      for (var i in arr) {
        txt += "#v" + arr[i] + "#";
      }
      txt += "#b\r\n#v4280001##z4280001#专属道具\r\n";
      arr = Packages.constants.GameConstants.重生装备;
      for (var i in arr) {
        txt += "#v" + arr[i] + "#";
      }
      txt += "#g\r\n共用奖池\r\n";
      arr = Packages.constants.GameConstants.迷之蛋随机物品;
      for (var i in arr) {
        txt += "#v" + arr[i] + "#";
      }
      cm.sendOk(txt);
      cm.dispose();
    }

    //以下为管理员专用

    if (selection == 1000) {
      //万能传送
      cm.dispose();
      cm.openNpc(9900004, 1000);
    }
    if (selection == 1001) {
      //属性修改
      cm.dispose();
      cm.openNpc(9900004, 1001);
    }
    if (selection == 1002) {
      //装扮中心
      cm.dispose();
      cm.openNpc(9900004, 1002);
    }
    if (selection == 1003) {
      //刷物品
      cm.dispose();
      cm.openNpc(9900004, 1003);
    }
    if (selection == 1004) {
      //全服信息
      cm.dispose();
      cm.openNpc(9900004, 1004);
    }
    if (selection == 1005) {
      //测试功能2
      cm.dispose();
      cm.openNpc(9900004, 1005);
    }
    if (selection == 1006) {
      //删除物品
      cm.dispose();
      cm.openNpc(9900004, 1006);
    }
    if (selection == 1007) {
      //虚拟上线提示
      cm.dispose();
      cm.openNpc(9900004, 1007);
    }
    if (selection == 1008) {
      //测试功能3
      cm.dispose();
      cm.openNpc(9900004, 1008);
    }
    if (selection == 1009) {
      //快速转职
      cm.dispose();
      cm.openNpc(9900004, 1009);
    }
    if (selection == 1010) {
      //未开发
      cm.dispose();
      cm.openNpc(9900004, 1010);
    }
    if (selection == 1011) {
      //未开发
      cm.dispose();
      cm.openNpc(9900004, 1011);
    }
    if (selection == 1012) {
      //在线玩家
      cm.dispose();
      cm.openNpc(9900004, "巡逻玩家");
    }
    if (selection == 1013) {
      //虚拟抽奖
      cm.dispose();
      cm.openNpc(9900004, 1013);
    }
    if (selection == 1014) {
      //全服查物品
      cm.dispose();
      cm.openNpc(9900004, 1014);
    }
    if (selection == 2000) {
      //
      cm.dispose();
      cm.openNpc(9900004, 2000);
      //以下为临时
    }
    if (selection == 2001) {
      //测试员面板
      cm.dispose();
      cm.openNpc(9900004, 2001);
    }
    if (selection == 2002) {
      //摄影地图
      cm.warp(970000000, 0);
      cm.dispose();
    }
    if (selection == 1110) {
      //全服查物品
      //cm.gainPet(5001005, "皮卡啾", 1, 0, 100, 0, 119);//皮卡啾 90天 (宠物)
      var portals = cm.getPlayer().getMap().getPortals();
      var txt = portals.size() + "我的位置" + cm.getPlayer().getPosition();
      txt +=
        "\r\n" +
        cm
          .getPlayer()
          .getMap()
          .findClosestPortal(cm.getPlayer().getPosition())
          .getName() +
        "位置" +
        cm
          .getPlayer()
          .getMap()
          .findClosestPortal(cm.getPlayer().getPosition())
          .getPosition();
      /*for (var i in portals) {
                txt += "\r\n" + portals[i].getName() + "位置" + portals[i].getPosition()
            }*/
      cm.sendOk(txt);
      cm.dispose();
    }
    if (selection == 999) {
      //新手礼包
      cm.dispose();
      cm.openNpc(9900004, "合成飞镖");
    }
  }
}

function checkMap(lists) {
  for (var i in lists) {
    if (cm.getMonsterCount(lists[i]) > 0) {
      return true;
    }
  }
  return false;
}
