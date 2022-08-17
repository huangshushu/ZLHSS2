//*  番茄市场脚本 *//
//* 作者：381991414*//

var aaa = "#fUI/UIWindow/AriantMatch/characterIcon/5#";
var yun = "#fUI/UIWindow/Megaphone/2#";////红沙漏
var yun2 = "#fUI/UIWindow/Quest/icon8/0#";////蓝指标
var yun8 = "#fUI/UIWindow/MonsterBook/arrowLeft/normal/0#";////金左指标
var yun9 = "#fUI/UIWindow/MonsterBook/arrowRight/normal/0#";////金右指标
var yun4 = "#fUI/UIWindow/Quest/reward#";////奖励
var ttt = "#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 = "#fUI/UIWindow/Quest/icon6/7#";////美化2
var ttt3 = "#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 = "#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 = "#fUI/UIWindow/Quest/icon0#";////美化!
var ttt7 = "#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//美化会员
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //彩光
var eff = "#fCharacter/Weapon/01702523.img/48/straight/0/effect#"; //淘居带
var eff = "#fEffect/CharacterEff/1112905/0/1#"; //
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //彩光
var epp1 = "#fEffect/CharacterEff/1082312/2/0#"; //彩光1
var axx = "#fEffect/CharacterEff/1051294/0/0#";  //爱心
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var ppp = "#fEffect/CharacterEff/1112907/4/0#"; //泡炮 
var epp3 = "#fEffect/CharacterEff/1112908/0/1#";  //彩光3
var axx1 = "#fEffect/CharacterEff/1062114/1/0#";  //爱心
var zs = "#fEffect/CharacterEff/1112946/2/0#";  //砖石粉
var zs1 = "#fEffect/CharacterEff/1112946/1/1#";  //砖石蓝
var dxxx = "#fEffect/CharacterEff/1102232/2/0#"; //星系
var tz = "#fEffect/CharacterEff/1082565/2/0#";  //兔子蓝
var tz1 = "#fEffect/CharacterEff/1082565/4/0#";  //兔子粉
var tz7 = "#fEffect/CharacterEff/1112900/3/1#";  //音符红
var tz8 = "#fEffect/CharacterEff/1112900/4/1#";  //音符绿
var tz88 = "#fEffect/CharacterEff/1112900/5/1#";  //音符绿!
var yun1 = "#fUI/UIWindow/Quest/icon7/10#";////红色圆
var tz9 = "#fEffect/CharacterEff/1112902/0/0#";  //蓝心
var tz10 = "#fEffect/CharacterEff/1112903/0/0#";  //红心
var tz11 = "#fEffect/CharacterEff/1112904/0/0#";  //彩心
var tz12 = "#fEffect/CharacterEff/1112924/0/0#";  //黄星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#";  //蓝星
var tz14 = "#fEffect/CharacterEff/1112926/0/0#";  //红星
var tz15 = "#fEffect/CharacterEff/1112949/0/0#";  //花样音符
var tz16 = "#fEffect/CharacterEff/1112949/1/0#";  //花样音符
var tz17 = "#fEffect/CharacterEff/1112949/2/0#";  //花样音符
var tz18 = "#fEffect/CharacterEff/1112949/3/0#";  //花样音符
var tz19 = "#fEffect/CharacterEff/1112949/4/0#";  //花样音符
var tz20 = "#fEffect/CharacterEff/1114000/1/0#";  //红星花
var IconA = "#fUI/UIMiniGame/starPlanetRPS/heart#";//红心桃心
var xx = "#fEffect/CharacterEff/1082565/4/0#";
var status = 0;
var typed=0;
var rmb = 0;

var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK); //获得星期
var time = new Date();
var sjr = time.getDay();
var pdtp = 0;
switch (sjr) {
    case 0:
        var xq = "星期日";
        break;
    case 1:
        var xq = "星期一";
        break;
    case 2:
        var xq = "星期二";
        break;
    case 3:
        var xq = "星期三";
        break;
    case 4:
        var xq = "星期四";
        break;
    case 5:
        var xq = "星期五";
        break;
    case 6:
        var xq = "星期六";
        break;
    default:
}
if (hour > 12) {
    hour -= 12;
    var apm = "下午好";
} else {
    var apm = "上午好";
}
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (cm.haveItem(2430865)) {
        var gbtp = "#r贵宾玩家#k";
    } else {
        var gbtp = "普通玩家";
    }
    if (status == 0 && mode == 0) {
        //cm.sendOk("#e#r　本商铺欢迎您的再次光临!我们竭诚为你服务!!");
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
    } else if (status == 0) {
         var 
        selStr = "#e#d              " + xx + " 防 具 觉 醒 " + xx + "\r\n";
		selStr += "" + epp + "" + epp + "" + epp + "" + epp + "\r\n";
            var x = 0;
        //str += "#r#L1#"+xxx+"#v1112676#升级成#v1112677##r#l\r\n";
        //selStr += "             #L1#"+xx+"#e#r法 弗 纳 觉 醒#b#l \r\n\r\n";//#r#e#L98#"+xx+" 戒指淬炼系统 \r\n
		//selStr += "             #L2#"+xx+"#r#e暴 君 防 具 觉 醒#b#l \r\n\r\n";
		selStr += "           #L4#"+xx+"#r#e埃 苏 防 具 觉 醒#b#l \r\n\r\n";
		selStr += "           #L3#"+xx+"#r#e神 秘 之 影 觉 醒#b#l \r\n";
		selStr +="\r\n";
        selStr +="\r\n";;
		selStr += "\r\n" + epp + "" + epp + "" + epp + "" + epp + ""
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 1://能力
                cm.dispose();
				cm.openNpc(2470024);//cm.openNpc(9105003,"戒指强化");
				break;
            case 2://充值
                cm.dispose();
				cm.openNpc(2470025);//160juexing
                break;
            case 3://充值
                cm.dispose();
				cm.openNpc(2470026);//160juexing
                break;
            case 4://充值
                cm.dispose();
				cm.openNpc(2470028);//160juexing
                break;
            case 25://综合
                if (cm.getLevel() >= 10) {
                    if (cm.getPQLog("内测点卷") < 1) {
                       cm.gainNX(100000000);
                        cm.setPQLog("内测点卷");
                        cm.sendOk("恭喜你领了1e点卷");
						cm.worldSpouseMessage(0x20, "[内测福利] 玩家 " + cm.getChar().getName() + " 领取了一亿点卷，挥霍去吧。");
						cm.worldSpouseMessage(0x20, "[内测福利] 玩家 " + cm.getChar().getName() + " 领取了一亿点卷，挥霍去吧。");
						cm.worldSpouseMessage(0x20, "[内测福利] 玩家 " + cm.getChar().getName() + " 领取了一亿点卷，挥霍去吧。");
						cm.worldSpouseMessage(0x20, "[内测福利] 玩家 " + cm.getChar().getName() + " 领取了一亿点卷，挥霍去吧。");
						cm.worldSpouseMessage(0x20, "[内测福利] 玩家 " + cm.getChar().getName() + " 领取了一亿点卷，挥霍去吧。");
                        cm.dispose();
					} else {
                        cm.sendOk("角色等级小于10级或者该帐号以领取过一次");
                        cm.dispose();
					   }
                    } else {
                        cm.sendOk("角色等级小于10级或者今日以领取过一次");
                        cm.dispose();
                    }
            break;
            case 20://综合
                cm.dispose();
                cm.openNpc(9900003, "fubenmenpiao");
            break;
            case 17://综合
                //cm.dispose();
                //cm.openNpc(9900003, "xxjn");
                //cm.gainItem(5220001, 100, 1);
				//cm.sendOk("#r玩法简介:\r\n#k1).新人出生之后可在市场财神处领取出生装备,财神有很多功能哦,要仔细看哦.\r\n2).新手升级到10级可以在等级奖励里面领取#r#z1122296##k哦，不过是封印的，要你自己努力解封哦\r\n3).新手可以打低级装备回收金币，80-100级可以直接一键回收，一天下来收入也很可观。有点装备了可以去刷天空庭院，出破攻和金币的副本哦。\r\n4).技能书可以去怪物公园刷，或者去打闹钟左右两边的地图，都可以刷技能书。\r\n5）100级以上装备需要大副本了，基本上中等副本都出140装备，森兰丸出吊丝套，前期过度必备。\r\n6).每日任务的跑环和圣诞点卷任务一定要做，一定要做，平民点卷和抵用的位移来源。\r\n7).旅行者纪念币#v4310019#和中国心#v4000858#都三虐心任务的必须物品，没事想感受下虐心的，可以去刷刷。\r\n8).200级可在财神处加入门派，一定要加入哦，神器，卷轴，金币，特殊币，都可以购买哦");
                //break;
                if (cm.getLevel() >= 10) {
                    if (cm.getPQLog("万能npc箱子1") < 1) {
					    cm.gainItem(2430686, 1);
                        cm.setPQLog("万能npc箱子1");
                        cm.sendOk("恭喜你领了万能npc箱子");
						cm.worldSpouseMessage(0x20, "[万能npc箱子] 玩家 " + cm.getChar().getName() + " 领取了万能npc箱子");
                        cm.dispose();
					} else {
                        cm.sendOk("角色等级小于10级");
                        cm.dispose();
					   }
                    } else {
                        cm.sendOk("角色等级小于10级");
                        cm.dispose();
                    }
            break;
            case 18://商城系统
            cm.dispose();//这是结束脚本，请按照实际情况使用
            cm.enterCS();
            break;
        }
    } 
}


Number.prototype.formatMoney = function (places, symbol, thousand, decimal) {
    places = !isNaN(places = Math.abs(places)) ? places : 2;
    symbol = symbol !== undefined ? symbol : "　";
    thousand = thousand || ",";
    decimal = decimal || ".";
    var number = this,
        negative = number < 0 ? "-" : "",
        i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
};