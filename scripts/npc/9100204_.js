//importPackage(java.lang);
//importPackage(Packages.tools);
//importPackage(Packages.client);
//importPackage(Packages.server);
var status = 0;
var 黑水晶 = 4021008;
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 忠告 = "#k温馨提示：任何非法程序和外挂封号处理.封杀侥幸心理.";
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            var a1 = "#L1##b" + 正方箭头 + "50 枫叶点数 【大】【小】\r\n";
            var a2 = "#L2##b" + 正方箭头 + "250枫叶点数 【大】【小】\r\n";
            var a3 = "#L3##b" + 正方箭头 + "500枫叶点数 【大】【小】\r\n";


            cm.sendSimple("\r\n#d-来来来，买大买小，买定离手#i3994122# #r【大小赌博机】\r\n#r  【赔率】1:2【概率】5:5\r\n" + a1 + "" + a2 + "" + a3 + "");

        } else if (selection == 1) {
            if (cm.getPlayer().getLevel() < 25) {
                cm.sendOk("必须达到25级才能使用。");
                cm.dispose();
                return;
            } else {
                if (cm.getPotion(2) >= 50) {
                    cm.getPlayer().modifyCSPoints(2, -50, true);
                    var rand = Math.floor(Math.random() * 100);
                    if (rand < 35) {
                        cm.getPlayer().modifyCSPoints(2, 40 * 2, true);
                        cm.sendOk("恭喜你，赢了");
                        cm.dispose();
                        cm.mapMessage("[赌场公告]：玩家 " + cm.getChar().getName() + " ，在赌场选大小点赢了，将筹码x1翻了【两倍】获得80点枫叶点数!");
                        return;
                    } else {
                        cm.sendOk("唉，输了");
                        cm.dispose();
                        return;
                    }
                } else {
                    cm.sendOk("你没有足够的枫叶点数.~");
                    cm.dispose();
                    return;
                }
            }
        } else if (selection == 2) {
            if (cm.getPlayer().getLevel() < 25) {
                cm.sendOk("必须达到25级才能使用。");
                cm.dispose();
                return;
            } else {

                if (cm.getPotion(2) >= 250) {
                    cm.getPlayer().modifyCSPoints(2, -250, true);
                    var rand = Math.floor(Math.random() * 100);
                    if (rand < 35) {
                        cm.getPlayer().modifyCSPoints(2, 40 * 10, true);
                        cm.sendOk("恭喜你，赢了");
                        cm.dispose();
                        cm.mapMessage("[赌场公告]：玩家 " + cm.getChar().getName() + " ，在赌场选大小点赢了，将筹码x5翻了【两倍】获得400点枫叶点数!");
                        return;
                    } else {
                        cm.sendOk("唉，输了");
                        cm.dispose();
                        return;
                    }
                } else {
                    cm.sendOk("你没有足够的枫叶点数.~");
                    cm.dispose();
                    return;
                }
            }
        } else if (selection == 3) {
            if (cm.getPlayer().getLevel() < 25) {
                cm.sendOk("必须达到25级才能使用。");
                cm.dispose();
                return;
            } else {
                if (cm.getPotion(2) >= 500) {
                    cm.getPlayer().modifyCSPoints(2, -500, true);
                    var rand = Math.floor(Math.random() * 100);
                    if (rand < 35) {
                        cm.getPlayer().modifyCSPoints(2, 40 * 20, true);
                        cm.sendOk("恭喜你，赢了");
                        cm.dispose();
                        cm.mapMessage("[赌场公告]：玩家 " + cm.getChar().getName() + " ，在赌场选大小点赢了，将筹码x10翻了【两倍】获得800点枫叶点数!");
                        return;
                    } else {
                        cm.sendOk("唉，输了");
                        cm.dispose();
                        return;
                    }
                } else {
                    cm.sendOk("你没有足够的枫叶点数~");
                    cm.dispose();
                    return;
                }
            }
        }
    }
}
