/*
这是个如来冒险岛私服器的文件的一部分
QQ ：390824898
*/
var status = 0;
var choice;
var scrolls = Array(1912000,1912011,1912005,1912012,1912028,1912025,1912026,1912027,1912024);
/*
*  小 乐制作
*/
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 1 && mode == 0) {
            cm.sendOk("好吧，欢迎下次继续光临！.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {
            var choices = "\r\n以下是你可以选择的购买物品: ";
            for (var i = 0; i < scrolls.length; i++) {
                    choices += "\r\n#L" + i + "##v" + scrolls[i] + "##t" + scrolls[i] + "##l";
            }
            cm.sendSimple("我可以给你打造合适坐骑鞍子 ,看你需要哪一款呢？？请选择吧，每个需要500万金币：." + choices);
        } else if (status == 1) {
            cm.sendYesNo("你确定需要购买这个物品么？这将花费你500万金币！！" +"\r\n#v" + scrolls[selection] + "##t" + scrolls[selection] + "#");
            choice = selection;
        } else if (status == 2) {
            if (cm.getMeso() >= 5000000) {
                cm.gainMeso(-5000000);
                cm.gainItem(scrolls[choice], 1);
                cm.sendOk("谢谢你的光顾，你购买的物品已经放入你的背包！.");
                cm.dispose();
            } else {
                    cm.sendOk("抱歉，你没足够的钱！.");
                    cm.dispose();
            }
        }
    }
}
