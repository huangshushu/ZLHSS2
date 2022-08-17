/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：装备租赁-大姐大
 */

//租凭的道具
var weapon = [1302064, 1402039, 1322054, 1422029, 1432040, 1442051, 1372034, 1382039, 1452045, 1462040, 1472055, 1332055];
//装备租赁券
var req = [
    [5220007, 1]
];
var sels;
var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        var msg = "   小伙子你好啊，我是大姐大，你是要找我租凭装备吗？使用 #b#t5220007##k 可以在我这里租凭道具 #b1#k 天哦。\r\n";
        for (var i = 0; i < weapon.length; i++) {
            msg += "     #b#L" + i + "#";
            msg += "#i" + weapon[i] + "# #t" + weapon[i] + "##l\r\n";
        }
        cm.sendSimple("" + msg + "");
    } else if (status == 1) {
        sels = selection;
        if (!cm.canHold(weapon[sels])) {
            cm.sendNext("#r背包空间不足");
            cm.dispose();
            return;
        }
        for (var i = 0; i < req.length; i++) {
            if (!cm.haveItem(req[i][0], req[i][1])) {
                cm.sendNext("#b身上没有#r#i" + req[i][0] + "#  #t" + req[i][0] + "# x " + req[i][1] + "");
                cm.dispose();
                return;
            }
        }
        cm.sendYesNo("是否要租凭道具 #b#v" + weapon[sels] + "#  #t" + weapon[sels] + "# ? \r\n");
    } else if (status == 2) {
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1]);
        }
        cm.给物品(weapon[sels], 1,24);
        cm.sendNext("#b成功租凭道具  #b#v" + weapon[sels] + "#  #t" + weapon[sels] + "# ?");
        cm.dispose();
    } else {
        cm.sendNext("#r发生错误: mode : " + mode + " status : " + status);
        cm.dispose();
    }
}