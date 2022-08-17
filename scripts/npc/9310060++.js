var QuestName = "『 #r每 日 副 本 奖 励#k 』";//任务ID
var Meso = 100000;//奖励金币
var Exp = 10000;//奖励经验
var ItemID = 3991029;//奖励道具ID
var QuestItemID = 4000008;//任务所需道具ID
var QuestItemNum = 100;//任务所需道具数量

var add="";
var zzz = "#fUI/UIWindow.img/Quest/icon9/0#";
var aaa = "#fUI/UIWindow.img/Quest/icon8/0#";
var xm1 = "#fUI/ChatBalloon/pet/1/nw#";
var xm2 = "#fUI/ChatBalloon/pet/1/ne#";
var add1 = "#fEffect/CharacterEff/1112905/0/1#";//红桃心
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";//选择道具
var 音乐 = "#fEffect/CharacterEff/1003249/2/0#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var b = "#fEffect/CharacterEff/1003271/0/0#";//粉心
var c = "#fEffect/CharacterEff/1112905/0/0#"; //红心
var d = "#fEffect/CharacterEff/1002667/0/0#"; //黄星
var e = "#fEffect/CharacterEff/1003252/1/0#"; //音乐
var h = "#fUI/Basic/BtHide3/mouseOver/0#";
var f = "#fEffect/CharacterEff/1003252/0/0#";
var 绿音乐 = "#fEffect/CharacterEff/1112949/1/0#";
var 大音乐 = "#fEffect/CharacterEff/1112949/0/0#";
var 紫音乐 = "#fEffect/CharacterEff/1112949/3/0#";
var 锁 = "#fEffect/CharacterEff/Shaman/modeSelect/lockIcon/3#";
var 蓝色星星 = "#fEffect/CharacterEff/1112925/0/1#";
var 大黄星星 = "#fEffect/CharacterEff/1102232/0/0#";
var 斜黄星星 = "#fEffect/CharacterEff/1102232/1/0#";
var 大堆星星 = "#fEffect/CharacterEff/1051384/0/0#";
var 大堆挂饰 = "#fEffect/CharacterEff/1051384/2/0#";
var 四叶 = "#fEffect/CharacterEff/1050334/1/2#";
var 升级 = "#fEffect/BasicEff/ItemLevelUp/13#";
var 超大翅膀 ="#fEffect/SetEff/100/effect/0#";
var 商品已售空 = "#fUI/CashShop/GuideWords/0#";
var 现在不是购买时间 = "#fUI/CashShop/GuideWords/1#";
var 获取 = "#fUI/UIWindow/QuestIcon/4/0#";
var 经验值 = "#fUI/UIWindow/QuestIcon/8/0#";
var 花草= "#fEffect/SetEff/208/effect/walk2/4#";
var 花草1= "#fEffect/SetEff/208/effect/walk2/3#";
var 可爱幽灵= "#fMap/MapHelper/weather/2011Haloween/2#";

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {
            var textz = "      "+大黄星星+大黄星星+大黄星星+ "#k#e这里是五彩兑换中心"+大黄星星+大黄星星+大黄星星+"\n\r\n";

            textz += "    #L0##d#r"+b+b+b+"兑换1个#v4251202#需要5个#v4251201#"+b+b+b+"#l\r\n\r\n";
			
			textz += "   #L2##d#r"+b+b+b+"兑换10个#v4251202#需要50个#v4251201#"+b+b+b+"#l\r\n\r\n";
			
            textz += "    #L1##d#g"+蓝色星星+蓝色星星+蓝色星星+"兑换1个#v4251201#需要5个#v4251200#"+蓝色星星+蓝色星星+蓝色星星+"#l\r\n\r\n";
			
			textz += "   #L3##d#g"+蓝色星星+蓝色星星+蓝色星星+"兑换10个#v4251201#需要50个#v4251200#"+蓝色星星+蓝色星星+蓝色星星+"#l\r\n\r\n";

            cm.sendNext(textz);

        } else if (status == 1) {
            if (selection == 0) {
                if (cm.haveItem(4251201, 5) == false) {
					cm.sendOk("抱歉,#v4251201#道具数量不足。");
					cm.dispose();
				} else {
					cm.gainItem(4251201, -5);
					cm.gainItem(4251202, 1);
					cm.sendOk("兑换成功。")
					cm.dispose();
				}

            } else if (selection == 1) {
                if (cm.haveItem(4251200, 5) == false) {
					cm.sendOk("抱歉,#v4251200#道具数量不足。");
					cm.dispose();
				} else {
					cm.gainItem(4251200, -5);
					cm.gainItem(4251201, 1);
					cm.sendOk("兑换成功。")
					cm.dispose();
					}
					
				 } else if (selection == 2) {
                if (cm.haveItem(4251201, 50) == false) {
					cm.sendOk("抱歉,#v4251201#道具数量不足。");
					cm.dispose();
				} else {
					cm.gainItem(4251201, -50);
					cm.gainItem(4251202, 10);
					cm.sendOk("兑换成功。")
					cm.dispose();
				}
				            } else if (selection == 3) {
                if (cm.haveItem(4251200, 50) == false) {
					cm.sendOk("抱歉,#v4251200#道具数量不足。");
					cm.dispose();
				} else {
					cm.gainItem(4251200, -50);
					cm.gainItem(4251201, 10);
					cm.sendOk("兑换成功。")
					cm.dispose();
					}
            }
        }
    }
}
