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
            var zak = 3 - cm.getBossLog("ZAK");
            var zyms = "";
            zyms = "#e<#v3991051# #v3991050# #v3991038# #v3991044#-副本重置>#n\r\n选择需要重置的副本吧。\r\n您当前金币额度:" + cm.getMeso() + "。\r\n";
            zyms += "#L0##b#v3010127#普通扎昆 #k已进行" + cm.getBossLog("ZAK") + "次 剩余:" + zak + "次 当前地图:"+ cm.getPlayerCount(280030100) +"人  #l\r\n";
            zyms += "#L1##b#v3010127#进阶扎昆 #k已进行" + cm.getBossLog("ZAK") + "次 剩余:" + zak + "次 当前地图:"+ cm.getPlayerCount(280030001) +"人  #l\r\n";
            zyms += "#L2##b#v3010128#普通黑龙 #k已进行" + cm.getBossLog("ZAK") + "次 剩余:" + zak + "次 当前地图:"+ cm.getPlayerCount(280030100) +"人  #l\r\n";
            zyms += "#L3##b#v3010128#进阶黑龙 #k已进行" + cm.getBossLog("ZAK") + "次 剩余:" + zak + "次 当前地图:"+ cm.getPlayerCount(280030100) +"人  #l\r\n";
            //zyms += "#L3##g金币现金商店#l\r\n";
            //zyms += "#L4##r金币重置组队任务进行次数(New)#l\r\n";
            cm.sendSimple(zyms);
        } else if (status == 1) {

            if (selection == 0) {
                var zak = 3 - cm.getBossLog("ZAK");
                var chaozak = 2 - cm.getBossLog("ChaosZak");
                var heilong = 3 - cm.getBossLog("Horntail");
                var chaoheilong = 2 - cm.getBossLog("ChaosHT");
                var shiziwang = 2 - cm.getBossLog("VonLeon");
                var wangxingren = 2 - cm.getBossLog("alien");
                var pb = 2 - cm.getBossLog("PinkBean");
                var hdpb = 2 - cm.getBossLog("ChaosPinkBean");
                var xila = 2 - cm.getBossLog("希拉远征队");
                var nvhuang = 2 - cm.getBossLog("希纳斯远征队");
                var text = "";
                text = "#e<扎昆远征队>#n\r\n每日可申请:3次  已进行:" + cm.getBossLog("ZAK") + " 次 剩余申请次数:" + zak + " 次\r\n";
                text += "#e<进阶扎昆远征队>#n\r\n每日可申请:2次  已进行:" + cm.getBossLog("ChaosZak") + " 次 剩余申请次数:" + chaozak + " 次\r\n";
                text += "#e<暗黑龙王远征队>#n\r\n每日可申请:3次  已进行:" + cm.getBossLog("Horntail") + " 次 剩余申请次数:" + heilong + " 次\r\n";
                text += "#e<进阶暗黑龙王远征队>#n\r\n每日可申请:2次  已进行:" + cm.getBossLog("ChaosHT") + " 次 剩余申请次数:" + chaoheilong + " 次\r\n";
                text += "#e<狮子王远征队>#n\r\n每日可申请:2次  已进行:" + cm.getBossLog("VonLeon") + " 次 剩余申请次数:" + shiziwang + " 次\r\n";
                text += "#e<外星人钻机远征队>#n\r\n每日可申请:2次  已进行:" + cm.getBossLog("alien") + " 次 剩余申请次数:" + wangxingren + " 次\r\n";
                text += "#e<品客宾远征队>#n\r\n每日可申请:2次  已进行:" + cm.getBossLog("PinkBean") + " 次 剩余申请次数:" + pb + " 次\r\n";
                text += "#e<混沌品客宾远征队>#n\r\n每日可申请:2次  已进行:" + cm.getBossLog("ChaosPinkBean") + " 次 剩余申请次数:" + hdpb + " 次\r\n";
                text += "#e<希拉远征队>#n\r\n每日可申请:2次  已进行:" + cm.getBossLog("希拉远征队") + " 次 剩余申请次数:" + xila + " 次\r\n";
                text += "#e<希纳斯远征队>#n\r\n每日可申请:2次  已进行:" + cm.getBossLog("希拉斯远征队") + " 次 剩余申请次数:" + nvhuang + " 次\r\n";
                cm.sendOk(text);
                status = -1;

            } else if (selection == 1) {
                var zak = 3 - cm.getBossLog("ZAK");
                var zyms = "";
                zyms = "#e<#v3991051# #v3991050# #v3991038# #v3991044#-副本重置>#n\r\n选择需要重置的副本吧。\r\n您当前金币额度:" + cm.getMeso() + "。\r\n";
                zyms += "#L10##b#v3010127#普通扎昆 #k已进行" + cm.getBossLog("ZAK") + "次 #g剩余:" + zak + "次 当前地图:0人  #l\r\n";
                zyms += "#L11##b#v3010127#进阶扎昆 #g剩余挑战次数:" + zak + "  #l\r\n";
                zyms += "#L12##b#v3010128#普通黑龙 #g剩余挑战次数:" + zak + "  #l\r\n";
                zyms += "#L13##b#v3010128#进阶黑龙 #g剩余挑战次数:" + zak + "  #l\r\n";
                cm.sendSimple(zyms);
                //beauty = 1;

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
                cm.openNpc(9010060, 2);

            } else if (selection == 4) {
                cm.dispose();
                cm.sendOk("正在开发此项目。");
            }
        } else if (status == 2) {
            if (beauty == 1) {
                var zak = 3 - cm.getBossLog("ZAK");
                zyms += "#L10##b重置普通扎昆挑战次数#l\r\n";
                zyms += "#L11##b重置进阶扎昆挑战次数#l\r\n";
                zyms += "#L12##b重置普通黑龙挑战次数#l\r\n";
                zyms += "#L13##b重置进阶黑龙挑战次数#l\r\n";
                cm.sendSimple(zyms);


            }
            status = -1;
        } else {
            cm.dispose();
        }

    }
}

