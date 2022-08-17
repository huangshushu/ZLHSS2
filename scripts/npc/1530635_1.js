

var status = 0;
var Icon = Array(
    Array("星星", "#fEtc/ChatEmoticon/expression/1/0#"),
    Array("兔子", "#fEffect/CharacterEff/1112960/0/1#"),
    Array("星空", "#fUI/GuildMark/BackGround/00001013/16#"),
    Array("骷髅", "#fUI/GuildMark/Mark/Etc/00009000/15#"),
    Array("红心", "#fUI/GuildMark/Mark/Etc/00009001/1#"),
    Array("白脸", "#fUI/GuildMark/Mark/Etc/00009002/4#"),
    Array("皇冠", "#fUI/GuildMark/Mark/Etc/00009004/3#"),
    Array("红灯", "#fUI/GuildMark/Mark/Etc/00009020/1#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/11#"),
    Array("水滴", "#fEffect/BasicEff/MainNotice/Gamsper/Notify/4#"),
    Array("红旗", "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"),
    Array("红心", "#fEffect/CharacterEff/1112905/0/0#"),
    Array("云朵", "#fEffect/ItemEff/1102877/effect/default/1#"),
    Array("翅膀", "#fEffect/ItemEff/1102874/effect/ladder/0#"),
    Array("箭矢", "#fEffect/ItemEff/1112003/0/2#"),
    Array("黄鸭", "#fEffect/ItemEff/1004122/effect/default/8#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/10#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/2#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/3#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/4#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/5#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/6#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/7#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/8#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/9#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/10#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/11#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/12#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/13#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/14#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/15#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/16#"),
    Array("条件", "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"),
    Array("信封", "#fUI/GuildMark/BackGround/00001003/5#"),
    Array("信封", "#fUI/GuildMark/BackGround/00001003/12#"),
    Array("钻石", "#fUI/NameTag/medal/556/w#"),
    Array("钻石", "#fUI/NameTag/medal/556/c#"),
    Array("钻石", "#fUI/NameTag/medal/556/e#"),
    Array("三角", "#fUI/piggyBarMinigame/crunch/5#"),
    Array("蓝点", "#fUI/piggyBarMinigame/crunch/1#"),
    Array("女神", "#fUI/RunnerGame/RunnerGameUI/Effect/ItemEffect_Protect1/3#"),
    Array("拇指", "#fUI/NameTag/medal/10/w#"),
    Array("拇指", "#fUI/NameTag/medal/10/c#"),
    Array("拇指", "#fUI/NameTag/medal/10/e#"),
    Array("成功", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/dear/7#"),
    Array("失败", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/fail/7#"),
    Array("星星", "#fUI/UIWindowGL/FeedbackSystem/Star#"),
    Array("蓝星", "#fEffect/CharacterEff/1003393/1/0#"),
    Array("花朵", "#fEffect/CharacterEff/1050334/2/0#"),
    Array("蓝星", "#fEffect/CharacterEff/1003393/0/0#"),
    Array("淡星", "#fEffect/CharacterEff/moveRandomSprayEff/eunwol_seal/effect/0/2#"),
    Array("花朵", "#fEffect/CharacterEff/1051294/1/0#"),
    Array("花朵", "#fEffect/CharacterEff/1051296/1/0#"),
    Array("金菇", "#fUI/NameTag/medal/74/w#"),
    Array("金菇", "#fUI/NameTag/medal/74/c#"),
    Array("金菇", "#fUI/NameTag/medal/74/e#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/w#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/c#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/e#"),
    Array("胡子", "#fUI/NameTag/124/w#"),
    Array("胡子", "#fUI/NameTag/124/c#"),
    Array("胡子", "#fUI/NameTag/124/e#"),
    Array("帽子", "#fUI/NameTag/nick/312/w#"),
    Array("帽子", "#fUI/NameTag/nick/312/c#"),
    Array("帽子", "#fUI/NameTag/nick/312/e#"),
    Array("圣诞", "#fUI/NameTag/medal/728/w#"),
    Array("圣诞", "#fUI/NameTag/medal/728/c#"),
    Array("圣诞", "#fUI/NameTag/medal/728/e#"),
    Array("红钻", "#fUI/UIWindowPL/DuoEvent/Maximum/DuoInfo/icon/GoodF/0#"),
    Array("王冠", "#fUI/NameTag/medal/468/w#"),
    Array("王冠", "#fUI/NameTag/medal/468/c#"),
    Array("王冠", "#fUI/NameTag/medal/468/e#"),
    Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#")
    );
var txt;
var Care;
var Care_Push;
var Care_czq = Array(
    910001000,
    102040200,
	104000000,
	100000000,
	101000000,
	102000000,
	103000000,
	120000000,
	//101050000,
	105000000,
	200000000,
	211000000,
	230000000,
	220000000,
	250000000,
	260000000,
	600000000,
	240000000,
	261000000,
	221000000,
	251000000,
	300000000,
	270000000,
	101050000,
	130000000,
	450003000,
	310000000);

var Care_ljq = Array(
        Array(50000, "[“#g新手运动套潜能地图#k”]"),
        Array(100010100, "适合 3级 ~ 10级 的玩家"),
        Array(120000400, "适合 15级 ~ 20级 的玩家"),
        Array(102030400, "适合 30级 ~ 50级 的玩家"),
		Array(103020310, "适合 20级 ~ 60级 的玩家"),
        Array(200010100, "适合 50级 ~ 70级 的玩家"),
        Array(600020300, "适合 70级 ~ 90级 的玩家"),
        Array(300010400, "适合 80级 ~ 120级 的玩家"),
        Array(220060000, "适合 90级 ~ 100级 的玩家"),
        //Array(541010010, "适合 80级 ~ 90级 的玩家"),
        Array(261010103, "适合 90级 ~ 110级 的玩家"),
        Array(251010402, "适合 110级 ~ 120级 的玩家"),
		//Array(220060201, "适合 110级 ~ 120级 的玩家"),
        //Array(211041400, "僵尸的金牙"),
		Array(240030101, "适合 130级 ~ 140级 的玩家"),
        Array(273010000, "适合 150级以上 的玩家"),
		Array(310070100, "适合 200级以上 的玩家"),
		Array(310070210, "适合 210级以上 的玩家"),
		Array(310070400, "适合 210级以上 的玩家"),
		Array(310070330, "适合 220级以上 的玩家"),
		//Array(310070440, "适合 220级以上 的玩家"),
		Array(450002019, "适合 220级以上 的玩家"),
		Array(450002020, "适合 220级以上 的玩家"),
		Array(450005500, "适合 230级以上 的玩家#k")
		
    );
     
var Care_yeq = Array(
        240020401,
        230040420,
        220080001,
        240020101,
        703011000
    );

var Care_xxq = Array(
        Array(102010000, "刷矿地图           "),
		Array(200010111, "火焰羽毛地图           "),
        //Array(240091400, "定居金10万金钱     "),
        Array(230020300, "蓝泡泡翻车鱼之心   "),
        Array(400010300, "卡卡隆的翅膀       "),
        Array(130010020, "提布的羽毛         "),
        Array(140010100, "雪精灵的毛团       "),
        Array(310020000, "嫩芽               "),
        Array(105030200, "月牙牛魔王的角     "),
        Array(105030100, "怪猫的眼           "),
        Array(271030201, "灵魂之石           "),
        Array(211042100, "火焰猎犬的项圈     "),
        Array(250020300, "木玩偶             "),
        Array(273030300, "燃烧的鬃毛         "),
		Array(271010300, "变异的绿水灵珠     "),
		Array(273020400, "巨大木柴           "),
		Array(273040200, "不详的巨大铁板     "),
        Array(273060300, "黑色古代石块       ")
        /*"------------------------------------",
        Array(240020000, "半人马的火花       "),
        Array(273060300, "黑色古代石块       "),
        Array(273060300, "黑色古代石块       "),
        Array(273060300, "黑色古代石块       "),
        Array(273060300, "黑色古代石块       "),
        Array(273060300, "黑色古代石块       "),
        Array(273060300, "黑色古代石块       "),
        Array(273060300, "黑色古代石块       "),
        Array(273060300, "黑色古代石块       "),
        Array(273060300, "黑色古代石块       "),
        Array(273060300, "黑色古代石块       "),
        Array(273060300, "黑色古代石块       "),
        Array(273060300, "黑色古代石块       "),
        Array(273060300, "黑色古代石块       "),
        Array(273060300, "黑色古代石块       "),
        Array(273060300, "黑色古代石块       "),
        Array(273060300, "黑色古代石块       "),
        Array(273060300, "黑色古代石块       "),
        Array(273060300, "黑色古代石块       "),
        Array(273060300, "黑色古代石块       ")*/
        );

var Care_lxq = Array(
    866000000,
	261000000,
	706042000,
	101050000,
	140010110,
	101071300,
	680000000,
	500000000,
	600000000,
	800000000
    );
function start() {
    status = -1;
    action(1, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose()
    } else {
        if (mode == 1) status++;
        else {
            cm.dispose();
            return;
        }
        if (status == -1) {
            cm.dispose();
        } else if (status == 0) {

            txt = "\t\t          #b " + Icon[8][1] + " #r#e 传送区 #n#b " + Icon[8][1] + " #k\r\n\r\n";
            txt += Icon[62][1];
            for (var i = 0; i <= 95; i++) {
                txt += Icon[63][1];
            };
            txt += Icon[64][1];// + "\r\n";

            txt += "#L0#" + Icon[46][1] + " #b城镇传送#l　#L1#" + Icon[46][1] + " 练级传送#l #L2#" + Icon[46][1] + " 摄影地图#l#k\r\n";
            txt += "#L6#" + Icon[46][1] + " #b测试段数#l　#L4#" + Icon[46][1] + " 旅游传送#l #L10#" + Icon[46][1] + " 家族传送#l#k\r\n\r\n";
           // txt += "#L6#" + Icon[46][1] + " #b测试段数#l　#L7#" + Icon[46][1] + " 美容美发#l #k\r\n";//#L5#" + Icon[46][1] + " 捕捉豹子#l
			//txt += " #L10#" + Icon[68][1] +Icon[68][1] +Icon[68][1] +Icon[68][1] +Icon[68][1] +Icon[68][1] + " #d新手神器戒指材料区 "+Icon[68][1] +Icon[68][1] +Icon[68][1] +Icon[68][1] +Icon[68][1] +Icon[68][1] +"#l\r\n\r\n\r\n";
			//txt += "#L3#" + Icon[51][1] +Icon[51][1] +Icon[51][1] +Icon[51][1] +Icon[51][1] + " #r月光材料---专区 " + Icon[51][1] +Icon[51][1] +Icon[51][1] +Icon[51][1] +Icon[51][1] +"#l\r\n";
			txt += "#L9#" +Icon[52][1] +Icon[52][1] +Icon[52][1] +Icon[52][1] + " #r#e月光专属 - 材料地图 #n" +Icon[52][1] +Icon[52][1] +Icon[52][1] +Icon[52][1] + "#l\r\n\r\n";
            txt += " #b" +"      "+ Icon[8][1] + " 尊敬的 #g" + cm.getName() + "#b 欢迎来到 - #r月光岛#b -  " + Icon[8][1] + "\r\n\r\n";
            txt += Icon[62][1];
            for (var i = 0; i <= 95; i++) {
                txt += Icon[63][1];
            };
            txt += Icon[64][1];// + "\r\n";
            cm.sendSimpleS(txt, 2);
        } else if (status == 1) {
            txt = "\t\t　　#b " + Icon[15][1] + " #r#e 请选择去往的方向 #n#b " + Icon[15][1] + " #k\r\n";
            txt += Icon[65][1];
            for (var i = 0; i <= 22; i++) {
                txt += Icon[66][1];
            };
            txt += Icon[67][1] + "\r\n";

            switch (selection) {
                case 0:
                    Care_Push = 0;
                    for (var i = 0; i < Care_czq.length; i++) {
                        txt += "#b#L" + i + "# " + Icon[15][1] + " [ 金币 500 ]　　　" + "#d#m" + Care_czq[i] + "#\r\n";
                    }

                    cm.sendSimpleS(txt, 2);
                    break;

                case 1:
                    Care_Push = 1;
                    for (var i = 0; i < Care_ljq.length; i++) {
                        txt += "#b#L" + i + "# " + Icon[15][1] + " " + Care_ljq[i][1] + " " + "#d#m" + Care_ljq[i][0] + "#\r\n";
                    }

                    cm.sendSimpleS(txt, 2);
                    break;

                case 2:
					cm.playerMessage(1, "欢迎您来到\r\n\r\n月光摄影棚\r\n\r\n请带上你的小伙伴\r\n\r\n准备好拍摄吧");
                    cm.dispose();
                    cm.warp(970000000);
                    break;

                case 3:
                    Care_Push = 3;
                    for (var i = 0; i < Care_xxq.length; i++) {
                        txt += "#b#L" + i + "# " + Icon[15][1] + " " + Care_xxq[i][1] + "　　　" + "#d#m" + Care_xxq[i][0] + "#\r\n";
                    }

                    cm.sendSimpleS(txt, 2);
                    break;

                case 4:
                    Care_Push = 4;
                    for (var i = 0; i < Care_lxq.length; i++) {
                        txt += "#b#L" + i + "# " + Icon[15][1] + " [ 金币 500 ]　　　" + "#d#m" + Care_lxq[i] + "#\r\n";
                    }

                    cm.sendSimpleS(txt, 2);
                    break;

                case 5:
                    cm.dispose();
                    cm.openNpc(2151008);
                    break;

                case 6:
					cm.playerMessage(1, "欢迎您来到\r\n\r\n【月光】测试段数中心\r\n\r\n请点击 NPC神兽 选择稻草人\r\n\r\n开始为您的心仪职业测试吧");
                    cm.dispose();
                    cm.warp(130000000);
                    break;

                case 7:
					cm.playerMessage(1, "欢迎您来到\r\n\r\n【月光】美容美发中心\r\n\r\n所有美容美发的功能NPC都在这里\r\n\r\n尽情打扮你的美 - 快去体验吧");
                    cm.dispose();
                    cm.warp(100000104);
                    break;

                case 8:
					cm.playerMessage(1, "欢迎您来到\r\n\r\n【月光】兑换中心\r\n\r\n这里是币种兑换中心和抽奖专区\r\n\r\n 抽奖可以获得很多稀有玩具/卷轴哦");
                    cm.dispose();
                    cm.warp(749050400);
                    break;
	           case 9:
     			   cm.dispose();
                    cm.openNpc(9310070,999);
                    break;
			   case 10:
					cm.playerMessage(1, "欢迎您来到\r\n\r\n【月光】家族中心\r\n\r\n请想一个霸气家族名称\r\n\r\n准备好招收你的小弟吧");
                    cm.dispose();
                    cm.warp(200000301);
                    break;
            }
        } else if (status == 2) {
            Care = selection;
            //cm.worldMessage(Care_yeq[2]);
            txt = "\t\t　　　　#b " + Icon[15][1] + " #r#e 询问区 #n#b " + Icon[15][1] + " #k\r\n";
            txt += Icon[65][1];
            for (var i = 0; i <= 22; i++) {
                txt += Icon[66][1];
            };
            txt += Icon[67][1] + "\r\n\r\n\r\n";

            txt += Icon[15][1] + "#r#e 这里的事情都处理了吗? 确认离开当前地区吗 #n#k" + Icon[15][1] + "\r\n\r\n";

            txt += Icon[65][1];
            for (var i = 0; i <= 22; i++) {
                txt += Icon[66][1];
            };
            txt += Icon[67][1] + "\r\n";
            cm.sendYesNoS(txt, 2);
        } else if (status == 3) {
            if (cm.getMeso() < 500) {
                cm.playerMessage(1, "抱歉\r\n\r\n500 金币都没有 你还是自己跑回去吧");
                cm.dispose();
                return;
            }
            cm.gainMeso(-500);

            switch (Care_Push) {
                case 0:
                    cm.warp(Care_czq[Care],0);
                    break;

                case 1:
                    cm.warp(Care_ljq[Care][0]);
                    break;

                case 2:
                    cm.warp(Care_yeq[Care], 0);
                    break;

                case 3:
                    cm.warp(Care_xxq[Care][0]);
                    break;

                case 4:
                    cm.warp(Care_lxq[Care], 0);
                    break;
            }
            cm.dispose();
        }

    }
}


var format = function FormatString(c, length, content) {
    var str = "";
    var cs = "";
    if (content.length > length) {
        str = content;
    } else {
        for (var j = 0; j < length - content.getBytes("GB2312").length; j++) {
            cs = cs + c;
        }
    }
    str = content + cs;
    return str;
}