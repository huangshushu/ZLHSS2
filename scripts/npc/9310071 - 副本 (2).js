var status = 0;
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var z = "#fEffect/CharacterEff/1112960/3/0#";//"+z+"//美化
var zz = "#fUI/UIPVP.img/ChampionMark/4#";//
var kkk1 = "#fMap/MapHelper.img/weather/thankyou/7#";
var kkk2 = "#fMap/MapHelper.img/weather/starPlanet2/8#";
var kkkk = "#fUI/UIPVP.img/MiniMapIcon/star#";//小黄心
var BOSS = "#fUI/UIWindow2/MobGage/SmartMobnotice/backgrnd#";
var eff1 = "#fEffect/CharacterEff/1112905/0/1#";//小红心
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ttt = "#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 = "#fUI/UIWindow/Quest/icon6/7#";////美化2
var ttt3 = "#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 = "#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 = "#fUI/UIWindow/Quest/icon0#";////美化!
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";//"+ttt6+"//美化会员
var z1 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";//"+z+"//美化
var tt = "#fEffect/ItemEff/1112811/0/0#";//音符
var a = "#fEffect/CharacterEff/1114000/1/0#"; //红色六芒星
var b = "#fEffect/CharacterEff/1003271/0/0#";
var c = "#fEffect/CharacterEff/1112905/0/0#"; //篮心
var d = "#fEffect/CharacterEff/1002667/0/0#"; //黄星
var e = "#fUI/UIPVP.img/MiniMapIcon/star#"; //音乐
var g = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var h = "#fUI/Basic/BtHide3/mouseOver/0#";
var f = "#fUI/UIPVP.img/MiniMapIcon/star#";//彩色五角星
var feng = "#v4032733#"
var sss ="#fEffect/BasicEff.img/JobChangedElf/13#";////双弩女王图标
var bobo1 = "#fUI/GuildBBS.img/GuildBBS/Emoticon/Basic/0#";//迷你笑脸
var bobo2 = "#fUI/GuildBBS.img/GuildBBS/Emoticon/Basic/1#";//迷你愁脸
var bobo3 = "#fUI/GuildBBS.img/GuildBBS/Emoticon/Basic/2#";//迷你开心
var bobo4 = "#fUI/GuildBBS.img/GuildBBS/Emoticon/Cash/0#";//迷你生气
var bobo5 = "#fUI/GuildBBS.img/GuildBBS/Emoticon/Cash/1#";//迷你猥琐笑
var bobo6 = "#fUI/GuildBBS.img/GuildBBS/Emoticon/Cash/2#";//迷你闭嘴
var bobo7 = "#fUI/GuildBBS.img/GuildBBS/Emoticon/Cash/3#";//迷你开怀大笑
var bobo8 = "#fUI/GuildBBS.img/GuildBBS/Emoticon/Cash/4#";//迷你目瞪口呆
var bobo9 = "#fUI/GuildBBS.img/GuildBBS/Emoticon/Cash/5#";//迷你哭泣
var bobo10 = "#fUI/GuildBBS.img/GuildBBS/Emoticon/Cash/6#";//迷你凶恶
var bobo11 = "#fUI/GuildBBS.img/GuildBBS/Emoticon/Cash/7#";//迷你惊吓
var kkk = "#fUI/UIWindow2.img/AttackRangking/1#";//小皇冠
var ob13 = "#fUI/UIWindow2.img/CN_Santa/backgrnd#";//长条
var F118 = "#fUI/UIWindow4.img/bossArena/mainUi/bossIcon/0#";//迷你女皇
var F119 = "#fUI/UIWindow4.img/bossArena/mainUi/bossIcon/1#";//迷你女皇
var F120 = "#fUI/UIWindow4.img/bossArena/mainUi/bossIcon/2#";//迷你女皇
var F121 = "#fUI/UIWindow4.img/bossArena/mainUi/bossIcon/3#";//迷你女皇
var F122= "#fUI/UIWindow4.img/bossArena/mainUi/bossIcon/4#";//迷你女皇
var F123 = "#fUI/UIWindow4.img/bossArena/mainUi/bossIcon/5#";//迷你女皇
var ob6 = "#fEffect/SetEff.img/181/effect/walk1/2#";//狗拉车
var 万能 = "#fItem/Etc/0400.img/04009388/info/iconRaw#";//迷你女皇
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
            cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
            cm.dispose();
    } 
    else if (status == 0) { //
		var selStr = "\r\n#e#r礼包月号晚上结束#b充值额外奖励!\r\n";
		
		selStr += "#r#L6##e#r充值6000元奖励领取#l\r\n\r\n";//4031338
		
		selStr += "#r#L5##e#r充值3000元奖励领取#l\r\n\r\n";//4031337

		selStr += "#r#L4##e#r充值2000元奖励领取#l\r\n\r\n";//4031336

		selStr += "#r#L3##e#r充值1500元奖励领取#l\r\n\r\n";//4031335

		selStr += "#r#L2##e#b充值600元奖励领取#l\r\n\r\n";//4031334

		selStr += "#r#L1##e#b充值300元奖励领取#l\r\n\r\n";//4031333

		selStr += "#r#L0##e#b充值100元奖励领取#l\r\n";//4031339

		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0://100元
                if (cm.haveItem(4031339,1)) {
                    cm.gainItem(4031339, -1);
                cm.gainItem(2431938,1);
                cm.gainItem(2434007,3);
                cm.gainItem(2614067,5);
                cm.gainItem(2049116,50);
                cm.gainItem(2049618,50);
                cm.gainItem(2048723,50);
                cm.gainItem(4001848,20);
                cm.gainItem(5062024,50);
                cm.gainItem(5537000,5);
                cm.gainItem(5743003,30);
cm.worldSpouseMessage(0x17,"[领取100元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得100元大礼包。");
cm.worldSpouseMessage(0x17,"[领取100元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得100元大礼包。");
cm.worldSpouseMessage(0x17,"[领取100元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得100元大礼包。");
cm.worldSpouseMessage(0x17,"[领取100元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得100元大礼包。");
cm.worldSpouseMessage(0x17,"[领取100元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得100元大礼包。");
                    cm.sendOk("领取成功！");
                    cm.dispose();
                } else {
                    cm.sendOk("领取错误,详情查看群文件-充值奖励,或者客服");
                    cm.dispose();
                }
	    break;
            case 1://300元
                if (cm.haveItem(4031333,1)) {
                    cm.gainItem(4031333, -1);
                cm.gainItem(1662072,1);
                cm.gainItem(1162035,1);
                cm.gainItem(2431092,2);
                cm.gainItem(2049116,50);
                cm.gainItem(2049387,5);
                cm.gainItem(2435824,20);
                cm.gainItem(2049618,50);
                cm.gainItem(2048749,50);
                cm.gainItem(2614074,1);
                cm.gainItem(4001715,5);
                cm.gainItem(5062024,100);
                cm.gainItem(5537000,10);
                cm.gainItem(5743003,30);
cm.worldSpouseMessage(0x17,"[领取300元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得300元大礼包。");
cm.worldSpouseMessage(0x17,"[领取300元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得300元大礼包。");
cm.worldSpouseMessage(0x17,"[领取300元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得300元大礼包。");
cm.worldSpouseMessage(0x17,"[领取300元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得300元大礼包。");
cm.worldSpouseMessage(0x17,"[领取300元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得300元大礼包。");
                    cm.sendOk("领取成功！");
                    cm.dispose();
                } else {
                    cm.sendOk("领取错误,详情查看群文件-充值奖励,或者客服");
                    cm.dispose();
                }
	    break;
            case 2://600元
                if (cm.haveItem(4031334,1)) {
                    cm.gainItem(4031334, -1);
                cm.gainItem(1182017,1);
                cm.gainItem(1113075,1);
                cm.gainItem(1122267,1);
                cm.gainItem(1032223,1);
                cm.gainItem(2430746,5);
                cm.gainItem(2049116,50);
                cm.gainItem(2049389,2);
                cm.gainItem(2431092,3);
                cm.gainItem(2049618,50);
                cm.gainItem(2048749,100);
                cm.gainItem(2614074,3);
                cm.gainItem(4001715,5);
                cm.gainItem(5062024,150);
                cm.gainItem(5537000,15);
                cm.gainItem(5743003,50);
cm.worldSpouseMessage(0x17,"[领取600元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得500元大礼包。");
cm.worldSpouseMessage(0x17,"[领取600元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得500元大礼包。");
cm.worldSpouseMessage(0x17,"[领取600元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得500元大礼包。");
cm.worldSpouseMessage(0x17,"[领取600元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得500元大礼包。");
cm.worldSpouseMessage(0x17,"[领取600元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得500元大礼包。");
                    cm.sendOk("领取成功！");
                    cm.dispose();
                } else {
                    cm.sendOk("领取错误,详情查看群文件-充值奖励,或者客服");
                    cm.dispose();
                }
	    break;
            case 3://1500元
                if (cm.haveItem(4031335,1)) {
                    cm.gainItem(4031335, -1);
                cm.gainItem(1113211,1);
                cm.gainItem(1113302,1);
                cm.gainItem(1113055,1);
                cm.gainItem(2430746,10);
                cm.gainItem(2435824,10);
                cm.gainItem(2049116,100);
                cm.gainItem(2049389,3);
                cm.gainItem(2431092,4);
                cm.gainItem(2049618,100);
                cm.gainItem(2048749,100);
                cm.gainItem(2614074,5);
                cm.gainItem(4001715,5);
                cm.gainItem(5062024,150);
                cm.gainItem(5537000,20);
                cm.gainItem(5743003,100);
cm.worldSpouseMessage(0x17,"[领取1500元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得1500元大礼包。");
cm.worldSpouseMessage(0x17,"[领取1500元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得1500元大礼包。");
cm.worldSpouseMessage(0x17,"[领取1500元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得1500元大礼包。");
cm.worldSpouseMessage(0x17,"[领取1500元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得1500元大礼包。");
cm.worldSpouseMessage(0x17,"[领取1500元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得1500元大礼包。");
                    cm.sendOk("领取成功！");
                    cm.dispose();
                } else {
                    cm.sendOk("领取错误,详情查看群文件-充值奖励,或者客服");
                    cm.dispose();
                }
	    break;
            case 4://2000元
                if (cm.haveItem(4031336,1)) {
                    cm.gainItem(4031336, -1);
                cm.gainItem(1004075,1);
                cm.gainItem(2432069,1);
                cm.gainItem(2430746,10);
                cm.gainItem(2431641,1);
                cm.gainItem(2431092,6);
                cm.gainItem(2435824,15);
                cm.gainItem(2049389,5);
                cm.gainItem(2614074,10);
                cm.gainItem(2049116,100);
                cm.gainItem(2048749,100);
                cm.gainItem(2049618,100);
                cm.gainItem(4001715,10);
                cm.gainItem(5062024,200);
                cm.gainItem(5743003,200);
                cm.gainItem(5537000,30);
cm.worldSpouseMessage(0x17,"[领取2000元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得2000大礼包。");
cm.worldSpouseMessage(0x17,"[领取2000元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得2000大礼包。");
cm.worldSpouseMessage(0x17,"[领取2000元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得2000大礼包。");
cm.worldSpouseMessage(0x17,"[领取2000元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得2000大礼包。");
cm.worldSpouseMessage(0x17,"[领取2000元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得2000大礼包。");
                    cm.sendOk("领取成功！");
                    cm.dispose();
                } else {
                    cm.sendOk("领取错误,详情查看群文件-充值奖励,或者客服");
                    cm.dispose();
                }
	    break;
            case 5://3000元
                if (cm.haveItem(4031337,1)) {
                    cm.gainItem(4031337, -1);
                cm.gainItem(1113075,1);//
		               //cm.gainItem(1132246,1);//
	        cm.gainItem(1122267,1);
                cm.gainItem(2433849,1);
                cm.gainItem(1672069,1);
                cm.gainItem(2430746,15);
                cm.gainItem(2435824,20);
                cm.gainItem(2431092,10);
                cm.gainItem(2049389,8);
                cm.gainItem(2614074,15);
                cm.gainItem(2049116,150);
                cm.gainItem(2048749,150);
                cm.gainItem(2049618,150);
                cm.gainItem(4001715,25);
                cm.gainItem(5062024,300);
                cm.gainItem(5743003,200);
                cm.gainItem(5537000,30);
cm.worldSpouseMessage(0x17,"[领取3000元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得3000大礼包。");
cm.worldSpouseMessage(0x17,"[领取3000元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得3000大礼包。");
cm.worldSpouseMessage(0x17,"[领取3000元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得3000大礼包。");
cm.worldSpouseMessage(0x17,"[领取3000元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得3000大礼包。");
cm.worldSpouseMessage(0x17,"[领取3000元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得3000大礼包。");
                    cm.sendOk("领取成功！");
                    cm.dispose();
                } else {
                    cm.sendOk("领取错误,详情查看群文件-充值奖励,或者客服");
                    cm.dispose();
                }
	    break;
           case 6://6000元
                if (cm.haveItem(4031338,1)) {
                cm.gainItem(4031338, -1);
                cm.gainItem(2430483,1);
                cm.gainItem(2049116,300);
                cm.gainItem(2430470,6);
                cm.gainItem(2430746,30);
                cm.gainItem(2435824,30);
                cm.gainItem(2431092,20);
                cm.gainItem(2049389,15);
                cm.gainItem(2614074,30);
                cm.gainItem(2049323,300);
                cm.gainItem(2048749,300);
                cm.gainItem(2049618,300);
                cm.gainItem(4001715,35);
                cm.gainItem(5062024,500);
                cm.gainItem(5743003,300);
                cm.gainItem(5537000,50);
cm.worldSpouseMessage(0x17,"[领取6000元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得6000大礼包。");
cm.worldSpouseMessage(0x17,"[领取6000元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得6000大礼包。");
cm.worldSpouseMessage(0x17,"[领取6000元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得6000大礼包。");
cm.worldSpouseMessage(0x17,"[领取6000元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得6000大礼包。");
cm.worldSpouseMessage(0x17,"[领取6000元礼包] 恭喜玩家 "+ cm.getChar().getName() +" 在充值活动获得6000大礼包。");
                    cm.sendOk("领取成功！");
                    cm.dispose();
                } else {
                    cm.sendOk("领取错误,详情查看群文件-充值奖励,或者客服");
                    cm.dispose();
                }
         }
    }
}
