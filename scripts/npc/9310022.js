var 礼包物品 = "#v1302000#";
var x1 = "1302000,+1";// 物品ID,数量
var x2;
var x3;
var x4;
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 礼包物品 = "#v1302000#";
var add = "#fEffect/CharacterEff/1112903/0/0#";//红桃心
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";//红色右箭头
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";//蓝色右箭头
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";//选择道具
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 红色箭头 = "#fEffect/CharacterEff/1112908/0/1#";  //彩光3
var ttt1 = "#fEffect/CharacterEff/1062114/1/0#";  //爱心
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 粉爱心 = "#fItem/Etc/0427/04270005/Icon8/1#";  //
var 菊花 = "#fUI/PredictHarmony/card/19#";//卡片效果菊花
var 笑 = "#fUI/GuildBBS/GuildBBS/Emoticon/Basic/0#";//笑脸
var 金枫叶 ="#fMap/MapHelper/weather/maple/2#";
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 巫女 ="#fMap/MapHelper/weather/witch/0#";//巫女
var 气球 ="#fMap/MapHelper/weather/balloon/4#";//气球
var 射箭 ="#fMap/MapHelper/weather/LoveEffect2/4/0#";//射箭
var 玫瑰 ="#fMap/MapHelper/weather/rose/0#";//玫瑰花
var 烟花 ="#fMap/MapHelper/weather/squib/squib1/3#";//烟花

var 大粉红爱心 = "#fItem/Etc/0427/04270001/Icon8/4#";  //
var 小粉红爱心 = "#fItem/Etc/0427/04270001/Icon8/5#";  //
var 小黄星 = "#fItem/Etc/0427/04270001/Icon9/0#";  //
var 大黄星 = "#fItem/Etc/0427/04270001/Icon9/1#";  //
var 小水滴 = "#fItem/Etc/0427/04270001/Icon10/5#";  //
var 大水滴 = "#fItem/Etc/0427/04270001/Icon10/4#";  //
var tz = "#fEffect/CharacterEff/1082565/4/0#";  //粉兔子
var tz1 = "#fEffect/CharacterEff/1082565/0/0#";  //橙兔子
var tz2 = "#fEffect/CharacterEff/1082565/2/0#";  //蓝兔子
var 邪恶小兔 = "#fEffect/CharacterEff/1112960/3/0#";  //邪恶小兔 【小】
var 邪恶小兔2 = "#fEffect/CharacterEff/1112960/3/1#";  //邪恶小兔 【大】
var 花草 ="#fEffect/SetEff/208/effect/walk2/4#";
var 花草1 ="#fEffect/SetEff/208/effect/walk2/3#";
var 小花 ="#fMap/MapHelper/weather/birthday/2#";
var 桃花 ="#fMap/MapHelper/weather/rose/4#";
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
var 皇冠 ="#fUI/GuildMark/Mark/Etc/00009004/3#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "\t\t\t\t#e#b" + 桃花 + "十七冒险岛#rvip#b首充礼包" + 桃花 + " #k	#n\r\n"
            text += "#b\t\t\t\t" + 皇冠 + "礼包折扣价格#r100#bRMB!" + 皇冠 + "#k	#n\r\n"
            text += "#r\t\全属188#v1142216#\r\n"//3
            text += "#r\t\工地手套（褐）#v1082149#\r\n"//3
            text += "#r\t\手套攻击必成卷*5#v2040807#"//3
            text += "#r\t\高级装备特许证半个月#v5590001#"//3
            text += "#r\t\送棒棒冰HP 100个#v2001002#"//3
            text += "#r\t\送刨冰  MP 100个#v2001001#\r\n"//3
            text += "#r\t\额外赠送50W冒险币#v4031138#\r\n"//3
            text += "#L1##r" +红枫叶 + "确定购买大礼包就点我吧！\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if (cm.getInventory(1).isFull() || cm.getInventory(5).isFull() || cm.getInventory(4).isFull()) {
                cm.sendSimple("您的装备栏和其他栏和现金栏空间不足。");
		     cm.dispose();
			}else if (cm.getmoneyb()>=100 && cm.getPlayer().getOneTimeLog('chongzhi21')) { 
			    cm.setmoneyb(-100);
				cm.getPlayer().dropMessage(5,"充值积分 - 100");
			cm.gainItem(5590001, 1, 15);//b装备特许证半个月
				cm.gainItem(2001001, 100);
				cm.gainItem(1082149, 1);
				cm.gainItem(2040807, 5);
				cm.gainItem(2001002, 100);
				cm.gainMeso(500000);             
cm.给属性装备(1142216, 0, 0, 50, 50, 50, 50, 5000, 5000, 50, 50,0, 0, 0, 0, 0, 0, 0);

		//cm.gainItem(4000313,30);//黄金枫叶
            cm.sendOk("购买成功！");
	//cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了100元累计赞助礼包");
cm.worldMessage(4,"[赞助礼包] : 恭喜玩家 "+cm.getPlayer().getName()+" 成功购买了100元首充赞助礼包。")
 
            cm.dispose();
			}else{
            cm.sendOk("无法购买，请联系GM");
            cm.dispose();
			}
		}
    }
}