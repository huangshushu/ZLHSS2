/* ==================
 脚本类型: NPC	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    cm.sendNext("我们距离我们的目的地只有几英里。 当我们准备着陆时，与其他乘客聊天.");
            cm.dispose();
        status--;
    }
    if (status == 0) {
	    cm.sendYesNo("您下车？船很快就要离开。如果你离开，你必须等待下一个来.");
	} else if (status == 1) {
	    cm.warp(2000100,0);
		cm.dispose();
    }
  }