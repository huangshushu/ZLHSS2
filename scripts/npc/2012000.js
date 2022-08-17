/*
 
 */

var ticket = new Array(4031047, 4031074, 4031331, 4031576);
var cost = new Array(5000, 6000, 30000, 5000, 6000);
var mapNames = new Array(
  "前往魔法森林",
  "前往玩具城",
  "前往神木村",
  "前往纳西沙漠"
);
var mapName2 = new Array(
  "前往魔法森林",
  "前往玩具城",
  "前往神木村",
  "前往纳西沙漠"
);
var select;
var status = 0;

function start() {
  var where = "请问你要去哪里呢？";
  for (var i = 0; i < ticket.length; i++)
    where += "\r\n#L" + i + "##b" + mapNames[i] + "#k#l";
  cm.sendSimple(where);
}

function action(mode, type, selection) {
  if (mode < 1) {
    cm.dispose();
  } else {
    status++;
    if (status == 1) {
      select = selection;
      cm.sendYesNo(
        "你确定要购买 " +
          mapName2[select] +
          " 需要 " +
          (select == 0 ? 15 : 10) +
          " 小时分钟, 它会花费你 #b" +
          cost[select] +
          " 金币#k. 请问你是否确定要购买 #b#t" +
          ticket[select] +
          "##k?"
      );
    } else if (status == 2) {
      if (cm.getMeso() < cost[select] || !cm.canHold(ticket[select]))
        cm.sendOk(
          "你确定你有 #b" +
            cost[select] +
            " 金币#k? 如果有的话,我劝您检查下身上其他栏位看是否有没有满了."
        );
      else {
        cm.gainMeso(-cost[select]);
        cm.gainItem(ticket[select], 1);
      }
      cm.dispose();
    }
  }
}
