var status;
var PQname = "GhostPark";
var maxenter = 5;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == 0) {
        cm.dispose();
        return;
    } else if (mode == 1) {
        status++;
    } else {
        status--;
    }

    switch (status) {
        case 0:
            cm.sendSimpleN("欢迎你来到鬼魂公园! 呵呵, 我是鬼魂公园的主人休彼德蔓, 如果你对这里有什么想知道的, 尽管可以问我. \r\n#L0# #b鬼魂公园是什么? #k#l\r\n#L1# #b请告诉我鬼魂公园的使用方法. #k#l\r\n#L2# #b请告诉我今天可以入场的次数. #k#l\r\n#L3# #b我集齐了7种符咒. #k#l\r\n#L4# #b我不要再听说明了#k#l\r\n#L5# #r开始挑战#l");
            break;
        case 1: //
            switch (selection) {
                case 0:
                    cm.dispose();
                    cm.openNpc(2079000, "GhostParkStated");
                    break;
                case 1:
                    cm.dispose();
                    cm.openNpc(2079000, "GhostParkOperate");
                    break;
                case 2:
                    var c = cm.getPQLog(PQname);
                    cm.sendNextN((c > 0 ? "今天已经进入鬼魂公园" + c + "次," : "今天没有进入鬼魂公园的记录呢,") + "\r\n鬼魂公园#b每天有" + maxenter + "次#k可以进场的机会. ");
                    cm.dispose();
                    break;
                case 3:
                    cm.sendNextN("你的装备背包中只有1种符咒啊, \r\n剩下的符咒可以在#b鬼魂公园#k中猎鬼获得. ");
                    cm.dispose();
                    break;
                case 4:
                    cm.dispose();//这是结束脚本，请按照实际情况使用
                    break;
                case 5:
                    cm.dispose();
                    cm.openNpc(2470018, "guihunrk");
            }
            break;
        case 2:
        case 3:
            cm.dispose();
            break;
    }
}
