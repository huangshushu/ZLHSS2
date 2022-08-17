/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            qm.sendOk("啧啧，看你那么胆小！你这样怎么能摆脱外星人的魔掌呢？");
            qm.safeDispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendYesNo("已经没有怪物了吗？");
    } else if (status == 1) {
        qm.PlayerToNpc("这是哪里啊？那些怪物到底是……");
    } else if (status == 2) {
        qm.sendNextPrev("这里是新叶城，你刚才通过的那扇门，就是那些外星人为了回到过去的新叶城，而设置的时间门！");
    } else if (status == 3) {
        qm.PlayerToNpc("那这里就是未来的新叶城？！这到底是怎么回事呢？");
    } else if (status == 4) {
        qm.sendNextPrev("新叶城原来是一个很平静的村庄，可突然有一天，那些外星人闯了进来，村庄就变成了现在这个样子……");
    } else if (status == 5) {
        qm.PlayerToNpc("可恶的外星人……他们到底为什么要这么做……");
    } else if (status == 6) {
        qm.sendNext("外星人知道了新叶城的地下埋藏着它们所需要的矿物，而且埋藏量极大，所以他们就闯进了这里！我们冒险勇者们曾经也为了保护村庄而战斗，但我们的人数太少……以至于变成现在的这个样子");
    } else if (status == 7) {
        qm.sendNext("你看上去很厉害，能不能帮我们");
    } else if (status == 8) {
        qm.forceStartQuest();
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}