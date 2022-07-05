//importPackage(net.sf.odinms.client);

var status = 0;
var fee;
var chance = Math.floor(Math.random() * 12 + 1);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("#i3994125# - 我会继续在这里等著你。");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendAcceptDecline("#r【十倍赌博机】\r\n#d-看来你的心很大啊，其他赌博机满足不了你了吗？#i3994125# #k\r\n ");
        } else if (status == 1) {
            cm.sendOk("#i3994125#\r\n如果你能赢我，我会将你的筹码数倍奉还，而且还有神秘礼品");
        } else if (status == 2) {
            fee = cm.getText();
            cm.sendYesNo("#i3994125# - 你确认要继续下注吗？一次消耗50GASH。");
        } else if (status == 3) {
            if (cm.getPlayer().getLevel() < 25) {
                cm.sendOk("必须达到25级才能使用。");
                cm.dispose();
            } else if (cm.getPotion(1) < 50) {
                cm.sendOk("你没有50GASH");
                cm.dispose();
            } else {
                if (chance <= 1) {
                    cm.getPlayer().modifyCSPoints(1, -50, true);
                    cm.sendNext("#i3994125# - #r你输了#k");
                   // cm.worldMessage(6, "[赌场公告]：玩家 " + cm.getChar().getName() + " ，在赌场十倍赌博机输了，看来今天并不被女神眷顾!");
                    cm.dispose();
                } else if (chance == 2) {
                    cm.sendNext("#i3994125# - #r这把不算，重新再来，你手不要抖动。#k");
                    //cm.worldMessage(6, "[赌场公告]：玩家 " + cm.getChar().getName() + " ，在赌场十倍赌博机手抖了一下，赌局作废。");
                    cm.dispose();
                } else if (chance == 3) {
                    cm.getPlayer().modifyCSPoints(1, -50, true);
                    cm.sendNext("#i3994125# - #r你输了#k");
                    //cm.worldMessage(6, "[赌场公告]：玩家 " + cm.getChar().getName() + " ，在赌场十倍赌博机输了，看来今天并不被女神眷顾!");
                    cm.dispose();
                } else if (chance == 4) {
                    cm.getPlayer().modifyCSPoints(1, -50, true);
                    cm.sendNext("#i3994125# - #r你输了#k");
                    //cm.worldMessage(6, "[赌场公告]：玩家 " + cm.getChar().getName() + " ，在赌场五倍赌博机输了，看来今天并不被女神眷顾!");
                    cm.dispose();
                } else if (chance == 5) {
                    cm.sendNext("#i3994125# - #r这把不算，重新再来，你手不要抖动。#k");
                    //cm.worldMessage(6, "[赌场公告]：玩家 " + cm.getChar().getName() + " ，在赌场十倍赌博机手抖了一下，赌局作废。");
                    cm.dispose();
                } else if (chance == 6) {
                    cm.getPlayer().modifyCSPoints(1, -50, true);
                    cm.sendNext("#i3994125# - #r你输了#k");
                    //cm.worldMessage(6, "[赌场公告]：玩家 " + cm.getChar().getName() + " ，在赌场十倍赌博机输了，看来今天并不被女神眷顾!");
                    cm.dispose();
                } else if (chance == 7) {
                    cm.sendNext("#i3994125# - #r这把不算，重新再来，你手不要抖动。#k");
                    //cm.worldMessage(6, "[赌场公告]：玩家 " + cm.getChar().getName() + " ，在赌场十倍赌博机手抖了一下，赌局作废。");
                    cm.dispose();
                } else if (chance == 8) {
                    cm.getPlayer().modifyCSPoints(1, -50, true);
                    cm.sendNext("#i3994125# - #r你输了#k");
                    //cm.worldMessage(6, "[赌场公告]：玩家 " + cm.getChar().getName() + " ，在赌场十倍赌博机输了，看来今天并不被女神眷顾!");
                    cm.dispose();
                } else if (chance == 9) {
                    cm.getPlayer().modifyCSPoints(1, -50, true);
                    cm.sendNext("#i3994125# - #r你输了#k");
                    //cm.worldMessage(6, "[赌场公告]：玩家 " + cm.getChar().getName() + " ，在赌场十倍赌博机输了，看来今天并不被女神眷顾!");
                    cm.dispose();
                } else if (chance == 10) {
                    cm.getPlayer().modifyCSPoints(1, -50, true);
                    cm.sendNext("#i3994125# - #r你输了#k");
                    //cm.worldMessage(6, "[赌场公告]：玩家 " + cm.getChar().getName() + " ，在赌场十倍赌博机输了，看来今天并不被女神眷顾!");
                    cm.dispose();
                } else if (chance == 11) {
                    cm.getPlayer().modifyCSPoints(1, -50, true);
                    cm.sendNext("哦··你的运气不怎么好哦··哈哈 再来一把嘛!");
                    //cm.worldMessage(6, "[赌场公告]：玩家 " + cm.getChar().getName() + " ，在赌场十倍赌博机输了，看来今天并不被女神眷顾!");
                    cm.dispose();
                } else if (chance >= 12) {
                    cm.getPlayer().modifyCSPoints(2, 40 * 10, true);
                    cm.sendNext("#i3994125# -#r不错哦，恭喜你赢了，我愿赌服输!获得200点枫叶点数");
                    cm.mapMessage("[赌场公告]：玩家 " + cm.getChar().getName() + " ，在赌场十倍赌博机赢了，将筹码翻了【十倍】获得400点枫叶点数!");
                    cm.dispose();
                }
            }
        }
    }
}
