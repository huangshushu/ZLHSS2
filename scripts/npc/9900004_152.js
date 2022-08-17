/*
 
 */
//BGM路径
var BMG = [
  "BgmUI/Title",
  "BgmUI/WCSelect",
  "BgmTW/CakeMap",
  "Bgm00/FloralLife",
  "Bgm00/GoPicnic",
  "Bgm00/Nightmare",
  "Bgm00/RestNPeace",
  "Bgm00/SleepyWood",
  "Bgm01/BadGuys",
  "Bgm01/CavaBien",
  "Bgm02/AboveTheTreetops",
  "Bgm02/MissingYou",
  "Bgm02/WhenTheMorningComes",
  "Bgm03/Beachway",
  "Bgm03/BlueSky",
  "Bgm03/Elfwood",
  "Bgm03/SnowyVillage",
  "Bgm03/Subway",
  "Bgm04/Shinin'Harbor",
  "Bgm04/WhiteChristmas",
  "Bgm06/FantasticThinking",
  "Bgm07/Fantasia",
  "Bgm07/FunnyTimeMaker",
  "Bgm07/HighEnough",
  "Bgm07/PlotOfPixie",
  "BgmUI/ShopBgm",
];

var 说明文字 = " 	Hi~ #b#h ##k 在这里你可以点播冒险岛所有的BGM哦，";
var 音乐盒 = 5100000;

var sels;
var 脚本执行 = -1;

function start() {
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (mode == 1) {
    脚本执行++;
  } else if (mode == 0) {
    脚本执行--;
  } else {
    cm.对话结束();
    return;
  }
  if (脚本执行 == 0) {
    var 文本信息 = "";
    for (var i = 0; i < BMG.length; i++) {
      文本信息 += "#b#L" + i + "#";
      文本信息 += "" + BMG[i] + "#l#k\r\n";
    }
    cm.sendSimple(
      "" +
        说明文字 +
        "不过需要 " +
        cm.显示物品(音乐盒) +
        " x #b5#k 才可以进行点播，\r\n 	#r全服点播，所有在线玩家可以听到#k。\r\n\r\n" +
        文本信息 +
        ""
    );
  } else if (脚本执行 == 1) {
    sels = selection;
    cm.是否说明文字("确定要点播 #b" + BMG[sels] + "#k 吗 ？ \r\n");
  } else if (脚本执行 == 2) {
    if (!cm.判断物品数量(音乐盒, 5)) {
      cm.说明文字("需要 " + cm.显示物品(音乐盒) + " x 5 ");
      cm.对话结束();
      return;
    }
    cm.个人点歌(BMG[sels]);
    cm.收物品(音乐盒, 5);
    cm.说明文字("点播 #b" + BMG[sels] + "#k 成功。");
    if (cm.getPlayer().getGMLevel() > 0) {
      cm.全服公告("[音乐点播] : 神秘人点播了 " + BMG[sels] + " ");
    } else {
      cm.全服公告(
        "[音乐点播] : 玩家 " +
          cm.getChar().getName() +
          " 点播了 " +
          BMG[sels] +
          " "
      );
    }
    cm.对话结束();
  } else {
    cm.说明文字("#r发生错误: mode : " + mode + " 脚本执行 : " + 脚本执行);
    cm.对话结束();
  }
}
