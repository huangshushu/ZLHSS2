/*
 
 脚本：拍卖主菜单
 */
//时间引用
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
//素材引用
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var r = "#fUI/UIWindow.img/Quest/TimeQuest/AlarmClock/default/0/0#";

function start() {
  status = -1;
  action(1, 0, 0);
}
function 随机潜能() {
  var 随机 = cm.随机数(180);
  if (随机 > 0 && 随机 <= 45) {
    var 值 = 0;
    if (cm.百分率(90)) {
      var 值 = cm.随机数(50);
    } else {
      var 值 = cm.随机数(100);
    }
    cm.getPlayer().增加潜能(100, 值);
    cm.说明文字("恭喜你获取潜能，增加 #b" + 值 + "#k 固定物理伤害破甲值。");
    //cm.全服公告("[角色潜能] : 恭喜 " + cm.getChar().getName() + " 获取潜能 增加 " + 值 + " 固定物理伤害破甲值。");
  } else if (随机 > 45 && 随机 <= 90) {
    var 值 = 0;
    if (cm.百分率(90)) {
      var 值 = cm.随机数(50);
    } else {
      var 值 = cm.随机数(100);
    }
    cm.getPlayer().增加潜能(101, 值);
    cm.说明文字("恭喜你获取潜能，增加 #b" + 值 + "#k 固定魔法伤害破甲值。");
    //cm.全服公告("[角色潜能] : 恭喜 " + cm.getChar().getName() + " 获取潜能 增加 " + 值 + " 固定魔法伤害破甲值。");
  } else if (随机 > 90 && 随机 <= 150) {
    var 值 = 0;
    if (cm.百分率(90)) {
      var 值 = cm.随机数(10000);
    } else {
      var 值 = cm.随机数(50000);
    }
    cm.getPlayer().增加潜能(1, 值);
    cm.说明文字("恭喜你获取潜能，增加 #b" + 值 + "#k 固定基础伤害。");
    //cm.全服公告("[角色潜能] : 恭喜 " + cm.getChar().getName() + " 获取潜能 增加 " + 值 + " 固定基础伤害。");
  } else if (随机 > 150 && 随机 <= 180) {
    var 值 = 0;
    if (cm.百分率(90)) {
      var 值 = cm.随机数(30000);
    } else {
      var 值 = cm.随机数(10000);
    }
    cm.getPlayer().增加潜能(1, 值);
    cm.说明文字("恭喜你获取潜能，增加 #b" + 值 + "#k 固定基础伤害。");
    //cm.全服公告("[角色潜能] : 恭喜 " + cm.getChar().getName() + " 获取潜能 增加 " + 值 + " 固定基础伤害。");
  }
}
function action(mode, type, selection) {
  if (status == 0 && mode == 0) {
    cm.对话结束();
    return;
  }
  if (mode == 1) {
    status++;
  } else {
    status--;
  }

  /*if(day!=2 && day!=3){
     cm.说明文字("不在活动时间内。");
     cm.对话结束();
     return;
     }
     if(day==2 && hour<20){
     cm.说明文字("不在活动时间内。");
     cm.对话结束();
     return;
     }*/
  if (cm.getBossLog("paoshang") >= 10) {
    var 每日收集 = 10;
  } else {
    var 每日收集 = cm.getBossLog("paoshang");
  } //10

  if (cm.getBossLog("钓鱼") >= 10) {
    var 每日钓鱼 = 10;
  } else {
    var 每日钓鱼 = cm.getBossLog("钓鱼");
  } //10

  if (cm.查询今日在线时间() >= 300) {
    var 每日在线 = 300;
  } else {
    var 每日在线 = cm.查询今日在线时间();
  } //10

  if (cm.getBossLog("武陵塔奖励领取") >= 1) {
    var 每日武陵 = 1;
  } else {
    var 每日武陵 = cm.getBossLog("武陵塔奖励领取");
  } //5

  if (每日副本() >= 5) {
    var 每日副本2 = 5;
  } else {
    var 每日副本2 = 每日副本();
  } //5

  if (cm.getBossLog("日常商城购买") >= 1) {
    var 商城购物 = 1;
  } else {
    var 商城购物 = cm.getBossLog("日常商城购买");
  } //1

  if (cm.getBossLog("每日送货") >= 2) {
    var 每日送货 = 2;
  } else {
    var 每日送货 = cm.getBossLog("每日送货");
  } //2

  if (cm.getBossLog("每日答题") >= 5) {
    var 每日答题 = 5;
  } else {
    var 每日答题 = cm.getBossLog("每日答题");
  } //5

  if (cm.getBossLog("每日附魔") >= 2) {
    var 每日附魔 = 2;
  } else {
    var 每日附魔 = cm.getBossLog("每日附魔");
  } //2

  if (cm.getBossLog("每日打孔") >= 1) {
    var 每日打孔 = 1;
  } else {
    var 每日打孔 = cm.getBossLog("每日打孔");
  } //1

  if (cm.getBossLog("每日分解") >= 1) {
    var 每日分解 = 1;
  } else {
    var 每日分解 = cm.getBossLog("每日分解");
  } //1
  if (cm.getBossLog("查看百科") >= 1) {
    var 查看百科 = 1;
  } else {
    var 查看百科 = cm.getBossLog("查看百科");
  } //1
  if (cm.getBossLog("每日通缉") >= 2) {
    var 每日通缉 = 2;
  } else {
    var 每日通缉 = cm.getBossLog("每日通缉");
  } //1

  if (cm.getBossLog("击杀高级怪物") >= 2) {
    var 击杀高级怪物 = 2;
  } else {
    var 击杀高级怪物 = cm.getBossLog("击杀高级怪物");
  } //2
  if (cm.getBossLog("使用红包") >= 1) {
    var 使用红包 = 1;
  } else {
    var 使用红包 = cm.getBossLog("使用红包");
  }
  if (cm.getBossLog("欢乐豆豆") >= 5) {
    var 欢乐豆豆 = 5;
  } else {
    var 欢乐豆豆 = cm.getBossLog("欢乐豆豆");
  }
  if (cm.getBossLog("挖矿") >= 4) {
    var 每日挖矿 = 4;
  } else {
    var 每日挖矿 = cm.getBossLog("挖矿");
  }

  //var 每日活跃 = (每日挖矿 + 欢乐豆豆 + 使用红包 + 每日送货 * 5 + 商城购物 + 每日副本2 + 每日武陵 * 5 + (每日在线 / 30) + 每日钓鱼 + 每日收集 + 每日答题 + 每日打孔 + 每日分解 + 每日附魔 + 查看百科 + 每日通缉 + 击杀高级怪物).toFixed(0);
  var 每日活跃 = 0;
  var 可以潜能 = cm.getPlayer().获取角色可赋潜能数();
  var 潜能层数 = cm.getPlayer().获取角色潜能孔数();
  var 金币 = 100 * 10000;

  var 激活材料 = 4032226;
  var 激活材料数量 = 1;

  var 指定清洗材料 = 4001013;
  var 指定清洗材料数量 = 2;
  var 全部清洗材料 = 4001014;
  var 全部清洗材料数量 = 3;
  if (status == 0) {
    var 文本 =
      "	Hi~#b#h ##k，你是要激发潜能，还是清洗潜能呢？我这里都是一般基础的潜能，你在其他地方可以获取稀有的潜能效果哦。\r\n\r\n";
    文本 += "\t\t\t   #d活跃度#k:( #b" + 每日活跃 + "#k )\r\n";
    if (每日活跃 >= 45) {
      文本 += "\t\t\t   #r[活动]#k活跃度50以上，潜能随机免费\r\n";
    }
    if (每日活跃 >= 55) {
      文本 += "\t\t\t   #r[活动]#k活跃度60以上，潜能全部清洗免费\r\n";
    }
    if (每日活跃 >= 65) {
      文本 += "\t\t\t   #r[活动]#k活跃度70以上，潜能指定清洗免费\r\n";
    }
    文本 +=
      "\t\t\t   #d潜能槽位/可用#k:( #r" +
      潜能层数 +
      " #k/ #b" +
      可以潜能 +
      "#k )\r\n";
    文本 += "\t\t\t   #d费用(金币): #b" + 金币 + "#k\r\n";
    文本 +=
      "\t\t\t   #d激活潜能(#z" + 激活材料 + "#): #b" + 激活材料数量 + "#k\r\n";
    文本 +=
      "\t\t\t   #d指定清洗(#z" +
      指定清洗材料 +
      "#): #b" +
      指定清洗材料数量 +
      "#k\r\n";
    文本 +=
      "\t\t\t   #d全部清洗(#z" +
      全部清洗材料 +
      "#): #b" +
      全部清洗材料数量 +
      "#k\r\n";
    文本 += "\t\t\t\t#b#L0#返回#k#l\r\n";
    文本 += "\t\t\t\t#b#L1#开始激发潜能#k#l\r\n\r\n\r\n";
    文本 += "\t\t\t   #r清洗潜能请往往下拉 ↓ ↓ ↓#k\r\n";
    文本 +=
      "\t\t\t\t#b#L2#清洗 #r" +
      cm.getPlayer().清洗孔() +
      "#k #b槽位能槽#k#l\r\n";
    文本 += "\t\t\t\t#L11##b加槽位#l #L12#减槽位#l#k\r\n\r\n";

    文本 += "\t\t\t\t#b#L3#潜能全部清洗#k#l\r\n";
    cm.是否说明文字(文本);
  } else if (status == 1) {
    switch (selection) {
      //潜能
      case 1:
        if (可以潜能 == 0) {
          cm.说明文字("你没有潜能槽位了。");
          cm.对话结束();
          return;
        }
        //if(每日活跃 < 45){
        if (cm.判断金币() < 金币) {
          cm.说明文字("需要 #b" + 金币 + "#k 金币不够。");
          cm.对话结束();
          return;
        }
        if (!cm.判断物品数量(激活材料, 激活材料数量)) {
          cm.说明文字(
            "需要 " +
              cm.显示物品(激活材料) +
              " x #b" +
              激活材料数量 +
              "#k 的材料不够。"
          );
          cm.对话结束();
          return;
        }

        cm.收金币(金币);
        cm.收物品(激活材料, 激活材料数量);
        //}
        随机潜能();
        cm.对话结束();
        break;
      //指定清洗
      case 2:
        if (cm.getPlayer().清洗孔() == 0) {
          cm.说明文字("选择清洗的位置。");
          cm.对话结束();
          return;
        }
        //if(每日活跃 < 65){
        if (cm.判断金币() < 金币) {
          cm.说明文字("需要 #b" + 金币 + "#k 金币不够。");
          cm.对话结束();
          return;
        }
        if (!cm.判断物品数量(指定清洗材料, 指定清洗材料数量)) {
          cm.说明文字(
            "需要 " +
              cm.显示物品(指定清洗材料) +
              " x #b" +
              指定清洗材料数量 +
              "#k 的材料不够。"
          );
          cm.对话结束();
          return;
        }

        cm.收金币(金币);
        cm.收物品(指定清洗材料, 指定清洗材料数量);
        // }
        cm.getPlayer().清洗指定潜能(cm.getPlayer().清洗孔());
        cm.说明文字(
          "恭喜你，清洗 #b" + cm.getPlayer().清洗孔() + "#k 槽位的潜能成功。"
        );
        cm.对话结束();
        break;
      //清洗所有
      case 3:
        //if(每日活跃 < 55){
        if (cm.判断金币() < 金币) {
          cm.说明文字("需要 #b" + 金币 + "#k 金币不够。");
          cm.对话结束();
          return;
        }
        if (!cm.判断物品数量(全部清洗材料, 全部清洗材料数量)) {
          cm.说明文字(
            "需要 " +
              cm.显示物品(全部清洗材料) +
              " x #b" +
              全部清洗材料数量 +
              "#k 的材料不够。"
          );
          cm.对话结束();
          return;
        }

        cm.收金币(金币);
        cm.收物品(全部清洗材料, 全部清洗材料数量);
        //}
        cm.getPlayer().清洗所有潜能();
        cm.说明文字("恭喜你，清洗所有潜能成功。");
        cm.对话结束();
        break;
      case 0:
        cm.对话结束();
        cm.打开NPC(9300000, 0);
        break;
      case 11:
        if (cm.getPlayer().清洗孔() < 潜能层数) {
          cm.getPlayer().加清洗孔();
        }
        cm.对话结束();
        cm.打开NPC(9300000, 1);
        break;
      case 12:
        if (cm.getPlayer().清洗孔() >= 1) {
          cm.getPlayer().减清洗孔();
        }
        cm.对话结束();
        cm.打开NPC(9300000, 1);
        break;
      default:
        cm.对话结束();
        break;
    }
  }
}
function 每日副本() {
  var result = 0;
  result += cm.getBossLog("废弃都市");
  result += cm.getBossLog("毒雾森林");
  result += cm.getBossLog("月妙");
  result += cm.getBossLog("玩具塔");
  result += cm.getBossLog("女神塔");
  result += cm.getBossLog("海盗船");
  return result;
}
