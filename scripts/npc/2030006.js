/*
 
 神圣石头
 */
var status = 0;
var qChars = new Array(
  "第一题: 在魔法密林见不到的NPC是谁？   #鲁尔#易德#妖精#中巴#1",
  "第一题: 在神秘岛(即天空)没有出现的怪物是哪一个？   #黑鳄鱼#星精灵#月精灵#食人花#1",
  "第一题: 绿蘑菇，木妖，蓝水灵，斧木妖，三眼章鱼中级别最高的怪物是哪一个？   #绿蘑菇#木妖#蓝水灵#斧木妖#4",
  "第一题: 在冒险岛中登场的药和功效正确连线的是哪一个？#超级药水 + HP2000#特殊药水 + HP3000#红色药水 + HP50#白色药水 + HP200#3",
  "第一题: 跟宠物有关系NPC是谁？   #鲁尔#易德#妖精#科尔#4"
);
var qItems = new Array(
  "第二题: 下列怪物中，哪组怪物与打倒它所能得到的战利品是正确对应关系的？#大幽灵-幽灵头带#蝙蝠 - 蝙蝠翅膀#煤泥 - 粘糊糊的泡泡#猪 - 丝带#2",
  "第二题: 下列怪物中，哪组怪物与打倒它所能得到的战利品是不正确对应关系的？#缎带肥肥- 蝴蝶结#煤泥 - 煤泥泡沫#绿色蜗牛 - 绿色蜗牛壳#食人花 - 食人花的叶子#1",
  "第二题: 冒险岛中下列药品中，哪组药品与功效是正确对应关系的？#白色药水 - 回复 250 HP#超级药水 — HP400恢复#红色药水 - 回复 100 HP#披萨 — HP400恢复#4",
  "第二题: 冒险岛中下列药品中，哪组药水可以回复HP50%MP50%？#特殊药水#超级药水#大西瓜#矿泉水#1",
  "第二题: 冒险岛中下列药品中，哪组药品与功效是不正确对应关系的？#蓝色药水 - 回复 100 MP#活力药水 - 回复 300 MP#清晨之露——3000MP恢复#红色药水 - 回复 50 HP#3"
);
var qMobs = new Array(
  "第三题: 明珠港没有哪个怪物？#小石球#蜗牛#蓝蜗牛#蘑菇仔#1",
  "第三题: 去天空之城的船上会出现哪个怪物？#扎昆#蝙蝠魔#小石球#海龙王#2",
  "第三题: 在冰封雪域没有哪个怪物？#野狼#雪人#小雪球#黑鳄鱼#4",
  "第三题: 会飞的怪物是什么？#巫婆#天线宝宝#小雪球#小老鼠#1",
  "第三题: 你现在在哪里？#天空之城#冰封雪域#水下世界#射手村#2"
);
var qQuests = new Array(
  "第四题: 扎昆是在哪里被召唤#扎昆祭坛#玩具城#天空之城#2水下世界#1",
  "第四题: 绿蜗牛的战利品为?#绳子#眼珠#绿蜗牛壳#煤炭#3"
);
var qTowns = new Array(
  "第五题: 多少级可以进行3转?#30#40#60#70#4",
  "第五题: 魔法师一转多少级?#8#10#30#70#1",
  "第五题: 多少级可以进行2转?#30#40#60#70#1"
);
var correctAnswer = 0;

function start() {
  if (cm.判断背包其他栏().isFull()) {
    cm.sendNext("其他栏必须有一个空位。");
    cm.对话结束();
    return;
  }
  if (cm.haveItem(4031058, 1)) {
    cm.sendOk("#h #,你已经有了 #b#t4031058##k。");
    cm.dispose();
  }
  if (!cm.haveItem(4031058, 1)) {
    cm.sendNext("看来你已经走了很远的路。");
  }
}

function action(mode, type, selection) {
  if (mode == -1) cm.dispose();
  else {
    if (mode == 0) {
      cm.sendOk("下次再见。");
      cm.dispose();
      return;
    }
    if (mode == 1) status++;
    else status--;
    if (status == 1)
      cm.sendNextPrev(
        "#h #, 如果你给我 #b黑暗水晶#k 我将会让你试着回答5个问题,若您5个问题都答对您将得到 #v4031058# #b#t4031058##k."
      );
    else if (status == 2) {
      if (!cm.haveItem(4005004)) {
        cm.sendOk("#h #, 你没有 #b黑暗水晶#k");
        cm.dispose();
      } else {
        cm.gainItem(4005004, -1);
        cm.sendSimple(
          "" + getQuestion(qChars[Math.floor(Math.random() * qChars.length)])
        );
        status = 2;
      }
    } else if (status == 3) {
      if (selection == correctAnswer)
        cm.sendOk("#h # 你答对了.\n准备答下一题。");
      else {
        cm.sendOk(
          "你答错了的答案!.\r\n很抱歉你必须在给我一个 #b黑暗水晶#k 才可以再挑战!"
        );
        cm.dispose();
      }
    } else if (status == 4)
      cm.sendSimple(
        "" + getQuestion(qItems[Math.floor(Math.random() * qItems.length)])
      );
    else if (status == 5) {
      if (selection == correctAnswer)
        cm.sendOk("#h # 你答对了.\n准备答下一题。");
      else {
        cm.sendOk(
          "你答错了的答案!.\r\n很抱歉你必须在给我一个 #b黑暗水晶#k 才可以再挑战!"
        );
        cm.dispose();
      }
    } else if (status == 6) {
      cm.sendSimple(
        "" + getQuestion(qMobs[Math.floor(Math.random() * qMobs.length)])
      );
      status = 6;
    } else if (status == 7) {
      if (selection == correctAnswer)
        cm.sendOk("#h # 你答对了.\n准备答下一题。");
      else {
        cm.sendOk(
          "你答错了的答案!.\r\n很抱歉你必须在给我一个 #b黑暗水晶#k 才可以再挑战!"
        );
        cm.dispose();
      }
    } else if (status == 8)
      cm.sendSimple(
        "" + getQuestion(qQuests[Math.floor(Math.random() * qQuests.length)])
      );
    else if (status == 9) {
      if (selection == correctAnswer) {
        cm.sendOk("#h # 你答对了.\n准备答下一题。");
        status = 9;
      } else {
        cm.sendOk(
          "你答错了的答案!.\r\n很抱歉你必须在给我一个 #b黑暗水晶#k 才可以再挑战!"
        );
        cm.dispose();
      }
    } else if (status == 10) {
      cm.sendSimple(
        "最\r\n\r\n" +
          getQuestion(qTowns[Math.floor(Math.random() * qTowns.length)])
      );
      status = 10;
    } else if (status == 11) {
      if (selection == correctAnswer) {
        cm.gainItem(4031058, 1);
        //不传送
        //cm.warp(211000001, 0);
        cm.sendOk("恭喜 #h #, \r\n拿着这个 #v4031058# 去找你的转职教官吧!.");
        cm.dispose();
      } else {
        cm.sendOk(
          "太可惜了，很抱歉你必须在给我一个 #b黑暗水晶#k 才可以再挑战!"
        );
        cm.dispose();
      }
    }
  }
}
function getQuestion(qSet) {
  var q = qSet.split("#");
  var qLine =
    q[0] +
    "#b\r\n\r\n#L0#" +
    q[1] +
    "#l\r\n#L1#" +
    q[2] +
    "#l\r\n#L2#" +
    q[3] +
    "#l\r\n#L3#" +
    q[4] +
    "#l";
  correctAnswer = parseInt(q[5], 10);
  correctAnswer--;
  return qLine;
}
