var status = -1;
var sel;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;

    if (status == 0)
        cm.sendSimple("  Hi~#b#h ##k，你要创建一个家族吗？个人的力量始终是弱小的，只有一群人团结起来，才能变得强大。\r\n\r\n#b#L0#创建家族#l\r\n#L1#解散家族#l\r\n#L2#扩充家族#l#k");
    else if (status == 1) {
        sel = selection;
        if (selection == 0) {
            if (cm.getPlayerStat("GID") > 0) {
                cm.sendOk("你不能创建一个新的工会.");
                cm.dispose();
            } else {
                cm.sendYesNo("开始抒写一段传奇吧。");
            }
        } else if (selection == 1) {
            if (cm.getPlayerStat("GID") <= 0 || cm.getPlayerStat("GRANK") != 1) {
                cm.sendOk("你不是公会会长所以不能解散公会");
                cm.dispose();
            } else
                cm.sendYesNo("你确定要解散你的公会?你将无法恢复并且GP消失.");
        } else if (selection == 2) {
            if (cm.getPlayerStat("GID") <= 0 || cm.getPlayerStat("GRANK") != 1) {
                cm.sendOk("你不是公会会长所以不能扩充人数");
                cm.dispose();
            } else
                cm.sendYesNo("扩充公会人数 #b5#k 要 #b2500000 金币#k, 你确定要扩充吗?");
        }
    } else if (status == 2) {
        if (sel == 0 && cm.getPlayerStat("GID") <= 0) {
            cm.genericGuildMessage(1);
            cm.dispose();
        } else if (sel == 1 && cm.getPlayerStat("GID") > 0 && cm.getPlayerStat("GRANK") == 1) {
            cm.disbandGuild();
            cm.dispose();
        } else if (sel == 2 && cm.getPlayerStat("GID") > 0 && cm.getPlayerStat("GRANK") == 1) {
            cm.increaseGuildCapacity();
            cm.dispose();
        }
    }
}