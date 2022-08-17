/*

脚本：明珠港售票处
*/

var status = 0;
var maps = [104000000, 102000000, 101000000, 100000000, 103000000, 120000000];
var cost = [120, 120, 80, 100, 100, 120];
var townText = [
  ["是个很不错的地方"],
  ["是个很不错的地方"],
  ["是个很不错的地方"],
  ["是个很不错的地方"],
  ["是个很不错的地方"],
  ["是个很不错的地方"],
  ["是个很不错的地方"],
];
var selectedMap = -1;
var town = false;

function start() {
  cm.sendNext("你想也要去哪里呢？");
}

function action(mode, type, selection) {
  status++;
  if (mode != 1) {
    if ((mode == 0 && !town) || mode == -1) {
      if (type == 1 && mode != -1)
        cm.sendNext("有很多看在这个小镇，让我知道如果你想要去别的地方。");
      cm.dispose();
      return;
    } else status -= 2;
  }
  if (status == 1)
    cm.sendSimple(
      "如果这是你第一次你可能会感到困惑这个地方，这是可以理解的。请问这个地方的任何问题??.\r\n#L0##b有多少个城市在这个岛上?#l\r\n#L1#我想去别的城市..#k#l"
    );
  else if (status == 2) {
    if (selection == 0) {
      town = true;
      var text = "岛上有7大城市你想了解哪一个城市??#b";
      for (var i = 0; i < maps.length; i++)
        text += "\r\n#L" + i + "##m" + maps[i] + "##l";
      cm.sendSimple(text);
    } else if (selection == 1) {
      var selStr =
        cm.getJob() == 0
          ? "你是新手所以你有90%的折扣\r\n请问你想去哪??#b"
          : "哦，你不是一个新手，是吧？我怕我可能会向您收取全价。你想去哪？#b";
      for (var i = 0; i < maps.length; i++)
        selStr +=
          "\r\n#L" +
          i +
          "##m" +
          maps[i] +
          "# (" +
          cost[i] * (cm.getJob() == 0 ? 1 : 10) +
          "枫币)#l";
      cm.sendSimple(selStr);
    }
  } else if (town) {
    if (selectedMap == -1) selectedMap = selection;
    if (status == 3) cm.sendNext(townText[selectedMap][status - 3]);
    else
      townText[selectedMap][status - 3] == undefined
        ? cm.dispose()
        : cm.sendNextPrev(townText[selectedMap][status - 3]);
  } else if (status == 3) {
    if (
      Packages.snail.Marathon.isBegain() &&
      cm.haveItem(Packages.snail.Marathon.getItemId())
    ) {
      cm.sendOk(
        "#r马拉松比赛正在进行中，检测到你持有 #v" +
          Packages.snail.Marathon.getItemId() +
          "#，无法进行传送！\r\n"
      );
      cm.dispose();
      return;
    }
    selectedMap = selection;
    cm.sendYesNo(
      "我猜你不想待这里。你真的想要移动到 #b#m" +
        maps[selection] +
        "##k? 我将相你收取 #b" +
        cost[selection] * (cm.getJob() == 0 ? 1 : 10) +
        " 枫币#k. 你怎么看??"
    );
  } else if (status == 4) {
    if (cm.getMeso() < cost[selectedMap] * (cm.getJob() == 0 ? 1 : 10))
      cm.sendNext("你没有足够的枫币我不能帮助你!!");
    else {
      cm.gainMeso(-(cost[selectedMap] * (cm.getJob() == 0 ? 1 : 10)));
      cm.warp(maps[selectedMap]);
    }
    cm.dispose();
  }
}
