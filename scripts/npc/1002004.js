/*
 
 */
var status = 0;
var cost;

function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (status >= 1 && mode == 0) {
    cm.sendNext("这个镇也有很多提供。找到我们如果当你觉得有必要去到蚂蚁广场");
    cm.dispose();
    return;
  }
  if (mode == 1) status++;
  else status--;
  if (status == 0) {
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
    cm.sendNext(
      "你好！这是出租车只有VIP客户。而不是只带你到不同的城镇，如正规出租车，我们提供一个更好的服务值得贵宾级的。这是一个有点贵，但是对于......只有10,000 金币，我们会带你安全地送到\n #b蚂蚁广场#k."
    );
  } else if (status == 1) {
    var job = cm.getJob();
    if (job == 0 || job == 2000 || job == 1000) {
      cm.sendYesNo(
        "我们有对新手90%的打折 所以你只需要花 #b1,000 金币#k 是否要去了呢??"
      );
      cost = 1000;
    } else {
      cm.sendYesNo("到了那边有个24小时的排档可以购买补品 #b10,000 金币#k?");
      cost = 10000;
    }
  } else if (status == 2) {
    if (cm.getMeso() < cost) {
      cm.sendNext("请确认你是否有足够的金币!");
    } else {
      cm.gainMeso(-cost);
      cm.warp(105070001, 0);
    }
    cm.dispose();
  }
}
