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
var status;
var txt;

//-------------------//
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

        if (status == 0) {
            txt = "\t\t\t\t" + IconA + "#k#n\r\n";
            txt += " " + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + "\r\n";
            txt += "　　　    　#d#L1#" + icon5 + "  [  #r※女※神※#d  ] " + icon5 + "#l#k\r\n\r\n\r\n";
			 txt += "　　　　#d尊敬的 [ #r#h ##d ] 女神 本周福利道具请阅览#k\r\n\r\n";
                            txt += "#r  认证#i1142574#需要视频以及生活照3张,以及语音通话#k\r\n\r\n";
		                    txt += "#r  亲爱的玩家，认证后您将可以每周领取以下奖励#n\r\n\r\n";
		                    txt += "#r点卷 x 20,000   抵用卷 x 50,000  金币 x 20,000,000\r\n\r\n";
							txt += " #i5062009# x50 #i5062500# x50 #i2340000# x30 #i4034999# x5 #i2049122# x3 #i2049323# x10\r\n\r\n";
            txt += " " + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + "\r\n";
            cm.sendSimpleS(txt, 2);
        } else if (status == 1) {
            switch (selection) {
                case 1:
                    if (xq == "星期六") {
                        if (cm.getPlayer().hasEquipped(1142574)) {
                            cm.sendOk("请把 #b#z1142574##k 放到背包再进行操作");
                            cm.dispose();
                        } else {
                            txt = "\r\n\r\n " + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + "\r\n\r\n";
                            txt += "\t\t\t\t\t\t　#i1142574#\r\n";
                            txt += " " + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + IconB + "\r\n\r\n";
                            txt += "#r管理员提示：#b单击 [ #r是#b ] 领认证福利 单击 [ #r否#b ] 返回#k\r\n";
                            cm.sendYesNoS(txt, 2)
                            //cm.dispose();
                        }
                    } else {
                        cm.sendOkS("\r\n\r\n\t\t#b抱歉尊敬的玩家 - 请周六再来领你的福利", 2);
                        cm.dispose();
                    }
                    break;

            }
        } else if (status == 2) {
            if (cm.getEventCount("官方认证女神") < 1) {
                if (cm.haveItem(1142574) || cm.getPlayer().getMedalText().indexOf("官方认证")!=-1) {
                    //---------------------//
					cm.gainNX(2,50000);
					cm.gainNX(1,20000);
					cm.gainMeso(20000000);
                    //---------------------//
                    cm.gainItem(5062009, 50);
                    cm.gainItem(5062500, 50);
                    cm.gainItem(2340000, 30);
                    cm.gainItem(2049122, 3);
                    cm.gainItem(4034999, 5);
					cm.gainItem(2049323, 10);
                    txt = "\r\n\r\n\r\n\t\t#b尊敬的女神 - 你领了本周福利-100000点卷";
                    cm.setEventCount("官方认证女神");
                    cm.worldSpouseMessage(0x13, "[ 官方女神 ] ：尊敬的 " + cm.getChar().getName() + " 女神 领到了每周礼包 - 女神 能聊吗? 可以做朋友?");
                    cm.worldSpouseMessage(0x13, "[ 官方女神 ] ：尊敬的 " + cm.getChar().getName() + " 女神 领到了每周礼包 - 女神 能聊吗? 可以做朋友?");
                    cm.worldSpouseMessage(0x13, "[ 官方女神 ] ：尊敬的 " + cm.getChar().getName() + " 女神 领到了每周礼包 - 女神 能聊吗? 可以做朋友?");
                } else {
                    txt = "#r\r\n\r\n\r\n\t\t抱歉尊敬的玩家 - 你当前并没有认证女神";
                }
                cm.dispose();
                cm.sendOkS(txt, 2);
            } else {
                cm.sendOkS("\r\n\r\n\t\t#r抱歉尊敬的玩家 - 你已领过本周女神福利", 2);
                cm.dispose();
            }
        }
    }
}