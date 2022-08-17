/*
 
 脚本：黑龙挑战
 */
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
  if (status == 0) {
    var selStr = "";
    selStr += "\r\n" + cm.黑龙远征队() + "";
    cm.说明文字(selStr);
  } else if (status == 1) {
    switch (selection) {
    }
  }
}
