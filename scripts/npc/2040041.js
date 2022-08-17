/*
 
 脚本：玩具塔第六关
 */

function start() {
  cm.getPlayer().dropMessage(5, "偷偷告诉你，顺序是：133221333123111");
  cm.sendNext(
    "欢迎来到第六阶段，请顺着箱子进去下一关吧。\r\n偷偷告诉你，顺序是：133221333123111"
  );
}

function action(mode, type, selection) {
  cm.dispose();
}
