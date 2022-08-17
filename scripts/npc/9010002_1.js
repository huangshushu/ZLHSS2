
var status = 0;
var typede = 0;
var zyms0 = new Array(1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 100, 200, 300, 400, 500, 600, 700, 800, 900, 100, 200, 300, 400, 500, 600, 700, 800, 900);
var zymss0 = Math.floor(Math.random() * zyms0.length);

var zyms1 = new Array(10, 20, 30, 40, 50, 60, 70, 100, 80, 90, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 110, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17);//随机爱心宝石
var zymss1 = Math.floor(Math.random() * zyms1.length);

var zyms2 = new Array(1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);//随机魔方
var zymss2 = Math.floor(Math.random() * zyms2.length);


var zymsvip2 = new Array(1010, 1100, 1210, 1310, 1410, 1510, 1610, 1710, 1810, 1910, 1010, 1110, 1210, 1310, 1410, 1510, 1610, 1710, 1810, 1910, 2010);//VIP2随机点卷
var zymssvip2 = Math.floor(Math.random() * zymsvip2.length);

var zymsvip3 = new Array(1020, 1220, 1220, 1420, 1420, 1520, 1620, 1720, 1820, 1920, 1020, 1120, 1220, 1320, 1420, 1520, 1620, 1720, 1820, 1920, 2020, 3020);//VIP3随机点卷
var zymssvip3 = Math.floor(Math.random() * zymsvip3.length);

var zymsvip4 = new Array(1030, 1130, 1230, 1330, 1430, 1530, 1630, 1730, 1830, 1930, 1060, 1130, 1230, 1330, 1430, 1530, 1630, 1730, 1830, 1930, 2030, 3030, 4030);//VIP4随机点卷
var zymssvip4 = Math.floor(Math.random() * zymsvip4.length);

var zymsvip5 = new Array(1040, 1140, 1240, 1340, 1440, 1540, 1640, 1740, 1840, 1940, 1040, 1140, 1240, 1340, 1440, 1540, 1640, 1740, 1840, 1940, 2040, 3040, 4040, 5040);//VIP5随机点卷
var zymssvip5 = Math.floor(Math.random() * zymsvip5.length);

var zymsvip6 = new Array(1050, 1150, 1250, 1350, 1450, 1550, 1650, 1750, 1850, 1950, 1050, 1150, 1250, 1350, 1450, 1550, 1650, 1750, 1850, 1950, 2050, 3050, 4050, 5050, 6050);//VIP6随机点卷
var zymssvip6 = Math.floor(Math.random() * zymsvip6.length);

var zymsvip7 = new Array(1060, 1160, 1260, 1360, 1460, 1560, 1660, 1760, 1860, 1960, 1060, 1160, 1260, 1360, 1460, 1560, 1660, 1760, 1860, 1960, 2060, 3060, 4060, 5060, 6060, 7060);//VIP7随机点卷
var zymssvip7 = Math.floor(Math.random() * zymsvip7.length);





function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (status == 0) {
            if (cm.getBossLog("VIP福利") == 1) {
            var vipstr = "#g已领取#k";
        } else {
            var vipstr = "#b未领取#k";
        }
       
            var zyms = "";
            zyms = "#fMob/1210102.img/move/0##fMob/1210102.img/move/0##b追忆 - MS#fMob/1210102.img/move/0##fMob/1210102.img/move/0#\r\n#k办理VIP后, 可以每天找我领取福利。\r\n#rVIP2#k以上有魔方领取哦。\r\n#r注意:领取福利前最好是保持背包每个栏位有2个以上的空间。负责失去物品概不负责。\r\n\r\nVIP等级: #r" + cm.getVipLevel() + "\r\n";
            zyms += "#L1##b领取VIP每日福利  #k状态：" + vipstr + "#l\r\n\r\n";
            zyms += "#L2##b升级#v1112446##z1112446##l\r\n\r\n";
            cm.sendSimple(zyms);

        } else if (selection == 1) { 
            if (cm.getBossLog("VIP福利") >= 1) {
                cm.sendOk("VIP专属福利。\r\n\r\n每天只可以领取一次。");
            } else if (cm.getVipLevel() == 1) {
                cm.setBossLog("VIP福利");
                cm.gainNX(zyms0[zymss0]);
                cm.gainItem(4001465, zyms0[zymss1]);//随机爱心宝石
                cm.sendOk("领取成功, 祝您游戏开心愉快。");
                cm.worldSpouseMessage(0x20, "玩家 " + cm.getChar().getName() + " 领取了VIP1福利, 获得了" + zyms0[zymss0] + "点卷 " + zyms1[zymss1] + "个爱心宝石。");

            } else if (cm.getVipLevel() == 2) {
                cm.setBossLog("VIP福利");
                cm.gainNX(zymsvip2[zymssvip2]);//随机点卷
                cm.gainItem(4001465, zyms1[zymss1]);//随机爱心宝石
                cm.gainItem(5062000, zyms2[zymss2]);//随机神奇魔方
                cm.sendOk("领取成功, 祝您游戏开心愉快。");
                cm.worldSpouseMessage(0x20, "玩家 " + cm.getChar().getName() + " 领取了VIP2福利, 获得了" + zymsvip2[zymssvip2] + "点卷 爱心宝石x" + zyms1[zymss1] + " 神奇魔方x" + zyms2[zymss2] + "。");


            } else if (cm.getVipLevel() == 3) {
                cm.setBossLog("VIP福利");
                cm.gainNX(zymsvip3[zymssvip3]);//随机点卷
                cm.gainItem(4001465, zyms1[zymss1]);//随机爱心宝石
                cm.gainItem(5062000, zyms2[zymss2]);//随机神奇魔方
                cm.gainItem(5062002, zyms2[zymss2]);//随机高级神奇魔方
                cm.sendOk("领取成功, 祝您游戏开心愉快。");
                cm.worldSpouseMessage(0x20, "玩家 " + cm.getChar().getName() + " 领取了VIP3福利, 获得了" + zymsvip3[zymssvip3] + "点卷 爱心宝石x" + zyms1[zymss1] + " 神奇魔方x" + zyms2[zymss2] + " 高级神奇魔方x" + zyms2[zymss2] + "。");

            } else if (cm.getVipLevel() == 4) {
                cm.setBossLog("VIP福利");
                cm.gainNX(zymsvip4[zymssvip4]);//随机点卷
                cm.gainItem(4001465, zyms1[zymss1]);//随机爱心宝石
                cm.gainItem(5062000, zyms2[zymss2]);//随机神奇魔方
                cm.gainItem(5062002, zyms2[zymss2]);//随机高级神奇魔方
                cm.sendOk("领取成功, 祝您游戏开心愉快。");
                cm.worldSpouseMessage(0x20, "玩家 " + cm.getChar().getName() + " 领取了VIP4福利, 获得了" + zymsvip4[zymssvip4] + "点卷 爱心宝石x" + zyms1[zymss1] + " 神奇魔方x" + zyms2[zymss2] + " 高级神奇魔方x" + zyms2[zymss2] + "。");

            } else if (cm.getVipLevel() == 5) {
                cm.setBossLog("VIP福利");
                cm.gainNX(zymsvip5[zymssvip5]);//随机点卷
                cm.gainItem(4001465, zyms1[zymss1]);//随机爱心宝石
                cm.gainItem(5062000, zyms2[zymss2]);//随机神奇魔方
                cm.gainItem(5062002, zyms2[zymss2]);//随机高级神奇魔方
                cm.sendOk("领取成功, 祝您游戏开心愉快。");
                cm.worldSpouseMessage(0x20, "玩家 " + cm.getChar().getName() + " 领取了VIP5福利, 获得了" + zymsvip5[zymssvip5] + "点卷 爱心宝石x" + zyms1[zymss1] + " 神奇魔方x" + zyms2[zymss2] + " 高级神奇魔方x" + zyms2[zymss2] + "。");


            } else if (cm.getVipLevel() == 6) {
                cm.setBossLog("VIP福利");
                cm.gainNX(zymsvip6[zymssvip6]);//随机点卷
                cm.gainItem(4001465, zyms1[zymss1]);//随机爱心宝石
                cm.gainItem(5062000, zyms2[zymss2]);//随机神奇魔方
                cm.gainItem(5062002, zyms2[zymss2]);//随机高级神奇魔方
                cm.sendOk("领取成功, 祝您游戏开心愉快。");
                cm.worldSpouseMessage(0x20, "玩家 " + cm.getChar().getName() + " 领取了VIP6福利, 获得了" + zymsvip6[zymssvip6] + "点卷 爱心宝石x" + zyms1[zymss1] + " 神奇魔方x" + zyms2[zymss2] + " 高级神奇魔方x" + zyms2[zymss2] + "。");

            } else if (cm.getVipLevel() == 7) {
                cm.setBossLog("VIP福利");
                cm.gainNX(2, zymsvip7[zymssvip7]);//随机点卷
                cm.gainItem(4001465, zyms1[zymss1]);//随机爱心宝石
                cm.gainItem(5062000, zyms2[zymss2]);//随机神奇魔方
                cm.gainItem(5062002, zyms2[zymss2]);//随机高级神奇魔方
                cm.gainItem(5062006, zyms2[zymss2]);//随机白金神奇魔方
                cm.sendOk("领取成功, 祝您游戏开心愉快。");
                cm.worldSpouseMessage(0x20, "玩家 " + cm.getChar().getName() + " 领取了VIP7福利, 获得了" + zymsvip7[zymssvip7] + "点卷 爱心宝石x" + zyms1[zymss1] + " 神奇魔方x" + zyms2[zymss2] + " 高级神奇魔方x" + zyms2[zymss2] + " 白金神奇魔方x" + zyms2[zymss2] + "。");







            } else {
                cm.sendOk("你还没有办理VIP。\r\n\r\n请办理VIP后在来领取。");
            }
            cm.dispose();
        
        } else if (selection == 2) { 
           cm.dispose();
           cm.openNpc(9010002, 2);


        }
    }
}
