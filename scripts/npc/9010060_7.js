/*
 * 名称：金币服务NPC
 * 作者：故事
 * 版本：1.0
 
 
 */

var status = -1;
var beauty = 0;
var tosend = 0;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            if (status == 0) {
                cm.sendOk("欢迎下次在来。");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            var zyms = "";
            zyms = "#fMob/1210102.img/move/0##fMob/1210102.img/move/0##b追忆 - MS#fMob/1210102.img/move/0##fMob/1210102.img/move/0#\r\n#b#h0# #k这里可以使用游戏金币进行特殊项目。\r\n您当前金币额度:" + cm.getMeso() + "。\r\n";
            zyms += "#L0##b购买人气#l\r\n";
            zyms += "#L1##b点播市场音乐#l\r\n";
            zyms += "#L2##b领取暗影双刀面巾#l\r\n";
            zyms += "#L3##r金币现金商店#l\r\n";
            //zyms += "#L4##r金币重置组队任务进行次数(New)#l\r\n";
            cm.sendSimple(zyms);
        } else if (status == 1) {
            if (selection == 0) {

                beauty = 1;
                cm.sendGetNumber("#fMob/1210102.img/move/0##fMob/1210102.img/move/0##b追忆 - MS#fMob/1210102.img/move/0##fMob/1210102.img/move/0##k\r\n购买比例为 #r150万金币 #k: #b1点人气#k\r\n您当前金币额度:#r" + cm.getMeso() + "  #b人气点数:#b" + cm.getFame() + " #b点#k\r\n#k请输入您想要兑换#r人气#b的数量:", 1, 1, cm.getMeso());

            } else if (selection == 1) {
                cm.dispose();
                cm.openNpc(9000100);

            } else if (selection == 2) {
                if (cm.getPlayer().getJob() != 434) {
                    cm.sendOk("只有暗影双刀职业才可以进行此项目。");
                } else if (cm.getMeso() < 1500000) {
                    cm.sendOk("进行当前项目需要支付1500000金币才可以进行，你没有足够的金币。");
                 } else if (cm.getSpace(1) < 2) {
                    cm.sendOk("背包装备栏有2个空间才可以领取。");
                } else if (cm.getBossLog("双刀面巾", 1) < 1) {
                    cm.gainMeso(-1500000);
                    cm.setBossLog("双刀面巾", 1);
                    cm.gainItem(1012191, 1);
                    cm.sendOk("领取成功,祝您游戏愉快。");
                } else {
                    cm.sendOk("您已经领取过了。");
                }
                status = -1;
            } else if (selection == 3) {
                 cm.dispose();
                 cm.openShop(328);

            } else if (selection == 4) {
                cm.dispose();
                cm.sendOk("正在开发此项目。");
            }
        } else if (status == 2) {
            if (beauty == 1) {
                if (cm.getMeso() >= selection * 1500000) {
                    cm.gainMeso(-selection * 1500000);
                    cm.gainFame(1 * selection);
                    cm.sendOk("购买成功,您获得了" + selection + "#k点人气。");
                } else {
                    cm.sendOk("购买" + selection + "点人气需要" + selection * 1500000 + "金币,你没有足够的金币。");

                }

            }
            status = -1;
        } else {
            cm.dispose();
        }
    }
}
