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
		    cm.sendNext("看起来你现在真的很忙。如果你在路上找到了一些空闲时间，那么请找我！你会体验到一个不像其他地方的圣诞小镇!");
            cm.dispose();
        status--;
    }
    if (status == 0) {
	    cm.sendYesNo("你想看到很多冒险来到幸福村吗？那我们走吧 !");
    } else if (status == 1) {	
	    cm.warp(209000000);
        cm.dispose();
    }
}