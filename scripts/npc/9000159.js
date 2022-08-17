
/*      
 
 NPC版权:                追忆冒险岛 	        
 NPC类型: 		        综合NPC
 制作人：故事丶
 
 */
var hour;
var status = 0;
var typede = 0;

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

            var zyms = "";
            zyms = "#fMob/1210102.img/move/0##fMob/1210102.img/move/0##b追忆 - MS#fMob/1210102.img/move/0##fMob/1210102.img/move/0#\r\n#e#k服务器时间：#b" + cm.getHour() + ":" + cm.getMin() + ":" + cm.getSec() + "#n\r\n";
            zyms += "#L1##b离线挂机#r (独家特色系统)#k#l\r\n";
            zyms += "#L2##b2014夏季运动会火爆开幕#r (各种道具等着你来拿)#k#l\r\n";
            zyms += "#L3##b免费皇家理发随意抽#r (活动每日晚: 20 ：00进行)#k#l\r\n";
            zyms += "#L4##b免费皇家整容随意抽#r (活动每日晚: 21 ：00进行)#k#l\r\n";
            zyms += "#L5##b每晚转点活动进行中#r (活动每日晚: 00 ：00进行)#k#l\r\n";
            zyms += "#L6##b管理员的邀请#g (参与活动随机可获得1000-5000点卷)#k#l\r\n";
            cm.sendSimple(zyms);




        } else if (selection == 1) { //签到
            cm.dispose();
            cm.sendOk("预计13日晚上系统正式开启。");
            //cm.openNpc(9010060, 1);

        } else if (selection == 2) { //免费福利
            cm.dispose();
            cm.sendOk("即将开启。");

        } else if (selection == 3) { //免费福利
            if (cm.getHour() == 20 && cm.getMin() < 2) {
                cm.dispose();
                cm.openNpc(9000159, 1);
            } else {
                cm.sendOk("#fMob/1210102.img/move/0##fMob/1210102.img/move/0##b追忆 - MS#fMob/1210102.img/move/0##fMob/1210102.img/move/0#\r\n#k\r\n现在还没有到活动时间,你还不能参加。\r\n参加#b活动#k时间每天\r\n#b晚上20：00开始 20：02结束\r\n#k每次你有#b2分钟#k的时间可以免费抽取#b皇家发型#k,不要错过了哦。#k\r\n当前服务器时间：#e" + cm.getHour() + "点" + cm.getMin() + "分" + cm.getSec() + "秒 #n");
                cm.dispose();
            }

        } else if (selection == 4) { //免费福利
            if (cm.getHour() == 21 && cm.getMin() < 2) {
                cm.dispose();
                cm.openNpc(9000159, 2);
            } else {
                cm.sendOk("#fMob/1210102.img/move/0##fMob/1210102.img/move/0##b追忆 - MS#fMob/1210102.img/move/0##fMob/1210102.img/move/0#\r\n#k\r\n现在还没有到活动时间,你还不能参加。\r\n参加#b活动#k时间每天\r\n#b晚上21：00开始 21：02结束\r\n#k每次你有#b2分钟#k的时间可以免费抽取#b皇家脸型#k,不要错过了哦。#k\r\n当前服务器时间：#e" + cm.getHour() + "点" + cm.getMin() + "分" + cm.getSec() + "秒 #n");
                cm.dispose();
            }

        } else if (selection == 5) { //免费福利
            cm.dispose();
            cm.sendOk("活动内容：\r\n\r\n每晚整点00 : 00只要上线游戏就有机会获得管理员赠送的礼物。#b活动地图：1频道自由市场#k\r\n\r\n装备、道具、金卷、点卷统统都有。\r\n\r\n当然这得看你的人品,不是人人都有的哦~~");

        } else if (selection == 6) { //管理员的邀请
            cm.dispose();
            cm.sendOk("即将开启。");




        }
    }
}

