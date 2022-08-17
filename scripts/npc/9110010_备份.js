var icon0 = "#fUI/Basic.img/VScr7/enabled/thumb0#";//小图标
var icon1 = "#fUI/ChatBalloon.img/pet/16/nw#";//小黄鸡
var icon2 = "#fUI/ChatBalloon.img/pet/16/ne#";//小黄鸡
var icon3 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/7#";//发呆
var icon4 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/6#";//愤怒
var icon5 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/3#";//大笑
var icon6 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/1#";//大笑
var icon7 = "#fUI/UIWindow2/ToolTip/Equip/Star/Star2#";//星星
var icon8 = "#fUI/UIWindow2/MobGage/Mob/2510200#";//蓝色水晶
var icon9 = "#fUI/UIWindow3/Scenario/list/icon/icon7/11#";
var icon10 = "#fUI/UIWindow3/Study/Fever/1#";//狂热
var icon11 = "#fUI/UIWindowBT/MonsterBattleCollection2/Btstart/normal/0#";//开始战斗
var icon12 = "#fUI/RunnerGame/RunnerGameUI/UI/BtHowto/mouseOver/0#";//任务提示
var IconA = "#fUI/RunnerGame/RunnerGameUI/Effect/ItemEffect_Protect1/3#";//女神
var IconB = "#fUI/UIMiniGame/starPlanetRPS/heart#";//红心桃心
//var random1 = java.lang.Math.floor(Math.random() * 1800000 + 500000);
var status;
var txt;

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
//------------------------------//
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
    }
    if (status == 0) {
        if (hour == 20 && (minute >= 0 || minute <= 10)) {
            cm.sendOk("点卷/抵用突破 - 只有在 20点 ( 0 到 10分 时 ) 才可以使用");
            cm.dispose();
            return;
        }
        txt = "\t\t\t\t　" + IconA + "#k#n\r\n";
        txt += " " + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + "\r\n";
        txt += "#d#L1#" + icon5 + " [  #r※ 点　卷破攻享不停 ※#d 6666点卷 ] " + icon5 + "#l#k\r\n\r\n";
        txt += "#d#L2#" + icon5 + " [  #r※ 金  币破攻享不停 ※#d 888W金币 ] " + icon5 + "#l#k\r\n\r\n";
        txt += " " + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + "\r\n";
        cm.sendSimpleS(txt, 2);
    } else if (status == 1) {

        switch (selection) {
            case 1:
                if (cm.getNX(1) < 6666) {
                    cm.sendOk("抱歉 你没有6666点卷");
                    cm.dispose();
                    return;
                }
                cm.gainNX(1, -6666);
                break;
            case 2:
                if (cm.getNX(2) < 8888) {
                    cm.sendOk("抱歉 你没有8888抵用卷");
                    cm.dispose();
                    return;
                }
                cm.gainNX(2, -8888);
                break;

        }
        var xxx = Math.floor(Math.random() * 2);
        if (xxx = 1) {
            var limit = Math.floor(Math.random() * 8222 + 70000);//
        } else if (xxx >= 2 && xxx <= 7) {
            var limit = Math.floor(Math.random() * 7222 + 40000);//
        } else if (xxx >= 8 && xxx <= 15) {
            var limit = Math.floor(Math.random() * 6222 + 60000);//
        } else if (xxx >= 16 && xxx <= 20) {
            var limit = Math.floor(Math.random() * 5222 + 50000);//
        } else if (xxx >= 21 && xxx <= 35) {
            var limit = Math.floor(Math.random() * 4222 + 40000);//
        } else if (xxx >= 36 && xxx <= 55) {
            var limit = Math.floor(Math.random() * 3222 + 20000);//
        } else if (xxx > 58) {
            var limit = Math.floor(Math.random() * 2222 + 10000);//
        } else if (xxx > 61) {
            cm.sendOk("本次没有获得破功，请继续加油喔！！.");
        }
        if (cm.changeLimitBreak(limit, true)) {
            cm.sendOk("#b伤害上限突破成功.\r\n\r\n本次追加伤害为：#r" + limit + "#b.");
        } else {
            cm.sendOk("请确认是否有佩戴武器或武器已经达到系统限制.");
        }
        cm.dispose();
    }
}