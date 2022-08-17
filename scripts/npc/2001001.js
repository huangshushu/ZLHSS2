/*
 
 */

function start() {
  cm.sendSimple(
    "    Hi~#b#h ##k你要去哪个小房间？你想不想去看这里的风雪呢？这里的雪是冒险岛世界里最纯净的雪哦，还可以推雪人。\r\n\r\n#b#L0#月光森林1#l \n\r #L1#月光森林2#l \n\r #L2#月光森林3#l \n\r #L3#月光森林4#l \n\r #L4#月光森林5#l"
  );
}

function action(mode, type, selection) {
  if (mode == 1) {
    cm.warp(209000001 + selection, 0);
  }
  cm.dispose();
}
