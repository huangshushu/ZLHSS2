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
var gggg = "#i3801312#";
var aaaa = "#i3801316#";
var bbbb = "#i3801315#";
var cccc = "#i3801314#";
var dddd = "#i3801313#";

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
		var selStr = "";
		selStr += "\r\n     #b#L0#"+gggg+" #e挑战月光无尽之塔100 - 120层 "+gggg+"#l\r\n";	
		selStr += "\r\n    #b#L1#"+aaaa+" #e挑战月光无尽之塔120 - 140层 "+aaaa+"#l\r\n";
		selStr += "\r\n    #d#L2#"+bbbb+" #e挑战月光无尽之塔140 - 160层 "+bbbb+"#l\r\n";
		selStr += "\r\n    #d#L3#"+cccc+" #e挑战月光无尽之塔160 - 180层 "+cccc+"#l\r\n";
		selStr += "\r\n    #r#L4#"+dddd+" #e挑战月光无尽之塔180 - 200层 "+dddd+"#l\r\n";
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(9062140, "无尽挑战6入口")
				break;
			case 1:
                cm.dispose();
                cm.openNpc(9062140, "无尽挑战7入口")
				break;
            case 2:
                cm.dispose();
                cm.openNpc(9062140, "无尽挑战8入口")
				break;
            case 3:
                cm.dispose();
                cm.openNpc(9062140, "无尽挑战9入口")
				break;
			case 4:
                cm.dispose();
                cm.openNpc(9062140, "无尽挑战10入口")
				break;
         }
    }
}
