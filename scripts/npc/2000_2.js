var status = -1;

function action(mode, type, selection) {
  if (mode == 1) {
    status++;
  } else {
    if (status == 0) {
      cm.dispose();
    }
    status--;
  }
  var MC = cm.getServerName();

  if (status == 0) {
    cm.sendNext(cm.checkMapDrop());
    //cm.gainItem(2022524,-1);
    cm.dispose();
  }
}
