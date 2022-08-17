var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var icon0 = "#fUI/UIWindow2/AdditionalOptionTooltip/epic#";//A图标
var icon1 = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"; //开始条件
var icon2 = "#fUI/UIWindow/Quest/icon6/7#"; //红色箭头
var icon3 = "#fUI/UIWindow/Megaphone/2#"; //红色骷髅
var icon4 = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/basic#";//无条件
var A0 = "#fUI/Basic/LevelNo/0#"; //[1]+1
var A1 = "#fUI/Basic/LevelNo/1#"; //[1]+1
var A2 = "#fUI/Basic/LevelNo/2#"; //[1]+1
var A3 = "#fUI/Basic/LevelNo/3#"; //[1]+1
var A4 = "#fUI/Basic/LevelNo/4#"; //[1]+1
var A5 = "#fUI/Basic/LevelNo/5#"; //[1]+1
var A6 = "#fUI/Basic/LevelNo/6#"; //[1]+1
var A7 = "#fUI/Basic/LevelNo/7#"; //[1]+1
var A3 = "#fUI/Basic/LevelNo/3#"; //[1]+1
var A4 = "#fUI/Basic/LevelNo/4#"; //[1]+1
var A5 = "#fUI/Basic/LevelNo/5#"; //[1]+1
var z3 = "#fUI/GuildMark/Mark/Animal/00002006/16#";
var z4 = "#fUI/UIWindow2/MemoInGame/Get/BtClame/pressed/0#";
var z5 = "#fEffect/CharacterEff/1112904/2/1#";//五角花
var z6 = "#fUI/GuildMark/Mark/Etc/00009004/3#";//皇冠
var z7 = "#fUI/GuildMark/Mark/Etc/00009023/10#";//皇冠
var z8 = "#fUI/NameTag/medal/468/c#";
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
    Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/ladder/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/7#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/walk1/3#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/jump/0#")
    );
var caton;

var reward = new Array(
                    //50元礼包
                    Array(1, 2049124, 3),//正向
                    Array(1, 2049116, 3),//强混
                    Array(1, 2049752, 5),//S级30
                    Array(1, 2049308, 1),//5星装备
                    Array(1, 2431289, 10),//50箱子周年庆
				
                   //100元礼包
                    Array(2, 2049124, 5),//正向
                    Array(2, 2049116, 5),//强混
                    Array(2, 2049308, 1), //5星强化
                    Array(2, 2049752, 5), //S潜
                    Array(2, 3010659, 1), //椅子
                    Array(2, 3010608, 1), //椅子
                    Array(2, 2431289, 2),//50箱子周年庆

                //500元礼包
                    Array(3, 2049124, 15),
                    Array(3, 2049116, 20),
                    Array(3, 2049308, 2),
                    Array(3, 2049752, 2),
                    Array(3, 3010590, 1), //椅子
                    Array(3, 1142347, 1), //勋章
                    Array(3, 1112915, 1),//蓝调
                    Array(3, 2431296, 1), //戒指随机箱子
                    Array(3, 2431994, 5),//翔龙99%
                    Array(3, 2436245, 1),//防具箱子
					Array(3, 4001006, 100),//火焰羽毛


                //1000元礼包
                    Array(4, 2049124, 35),
                    Array(4, 2049116, 40),
                    Array(4, 2049752, 4),
                    Array(4, 2049308, 4),
                    Array(4, 3015808, 1),//椅子
                    Array(4, 1142216, 1), //勋章
                    Array(4, 1112915, 2),
                    Array(4, 2431296, 1),
                    Array(4, 2431295, 3),//周年庆100%
                    Array(4, 2431991, 1),//冒险之心
                    Array(4, 2436245, 1),//防具箱子
                    Array(4, 2431992, 1),//暴君随机箱子
                    //Array(4, 2436246, 1),//自选蜡笔
                    Array(4, 3015234, 1),//椅子
					Array(4, 4001006, 100),//火焰羽毛


                //3000元礼包
                    Array(5, 2049153, 30),
                    Array(5, 2049119, 30),
                    Array(5, 2049308, 10),
                    Array(5, 2049750, 10),
                    Array(5, 3015836, 1), //椅子
                    Array(5, 3015119, 1), //椅子
                    Array(5, 3015263, 1), //椅子
                    Array(5, 1672027, 1), //极真锂心脏
                    Array(5, 1112915, 2),
                    Array(5, 2023113, 1),
                    Array(5, 1112140, 1),
                    Array(5, 1112247, 1),
                    Array(5, 1112787, 1),
                    Array(5, 1003698, 1),
                    Array(5, 3700071, 1),//
                    Array(5, 2431296, 2),//戒指
                    Array(5, 2431295, 4),//周年庆100%
                    Array(5, 2430289, 1),//冒险之心自选
                    Array(5, 2431992, 1),//暴君箱子
                    Array(5, 2436245, 2),//FF防具箱子
                    Array(5, 2431938, 1),//FFN武器
					Array(5, 2433509, 1), //特米自选
                    Array(5, 2436244, 1),//自选机器人
                    Array(5, 2430096, 1),//灵魂结晶随机箱
					Array(5, 4001006, 400),//火焰羽毛

                    //6000元礼包
                    Array(6, 2049153, 50),
                    Array(6, 2049119, 50),
                    Array(6, 2049308, 18),
                    Array(6, 2049750, 18),
                    Array(6, 3010658, 1),
                    Array(6, 3015609, 1),
                    Array(6, 3015646, 1),
                    Array(6, 1672027, 1),
                    Array(6, 1112915, 5),
                    Array(6, 2023112, 1),
                    Array(6, 1112139, 1),
                    Array(6, 1112246, 1),
                    Array(6, 1112786, 1),
                    Array(6, 1003697, 1),
                    Array(6, 2431295, 8),//周年庆100%
                    Array(6, 2431991, 2),//冒险之心
                    Array(6, 2431992, 2),//暴君箱子
                    Array(6, 2431988, 3),//防具箱子
                    Array(6, 2431989, 2),//FFN武器随机
					Array(6, 2433509, 1), //特米自选
                    Array(6, 2431296, 2),//戒指
                    Array(6, 3700070, 1),// 差1800W点卷 高级贝德首饰随机箱子一个
					Array(6, 4001006, 600),//火焰羽毛
                    //8000礼包
                    Array(7, 2049153, 80),
                    Array(7, 2049119, 80),
                    Array(7, 2049308, 30),
                    Array(7, 2049750, 30),
					Array(7, 2049323, 800),
					Array(7, 3015637, 1),
					Array(7, 3015599, 1),
					Array(7, 3015236, 1),
					Array(7, 3015111, 1),
					Array(7, 3015031, 1),
					Array(7, 1143023, 1),
					Array(7, 1003696, 1),
					Array(7, 3010507, 1),
					Array(7, 1112138, 1),
					Array(7, 1112245, 1),
					Array(7, 1112785, 1),
					Array(7, 3700069, 1),
					Array(7, 1672069, 1), //女武神
					Array(7, 2430675, 1), //银河自选
					Array(7, 2431256, 8), //神秘椅子
					Array(7, 2430096, 2), //灵魂结晶随机
					Array(7, 2433005, 5), //戒指随机
					Array(7, 2436249, 5), //惊人武器卷
					Array(7, 2436244, 1), //机器人自选
					Array(7, 2433444, 1), //贝勒自选
					Array(7, 2432069, 1),  //暴君自选
					Array(7, 2431992, 2), //暴君随机
					Array(7, 2431938, 2), //FFN自选
					Array(7, 2433509, 1), //特米自选
					Array(7, 2435824, 3), //V卷自选
					Array(7, 4001006, 1000),

                    //10000礼包
                    Array(8, 2049153, 120),
                    Array(8, 2049119, 120),
                    Array(8, 2049308, 60),
                    Array(8, 2049750, 60),
					Array(8, 2049323, 500),
					Array(8, 1003696, 1),
					Array(8, 1115014, 1),
					Array(8, 1115102, 1),
					Array(8, 3700347, 1),
					Array(8, 3010507, 1),
					//Array(8, 3700069, 1),
					Array(8, 3015795, 1),
					Array(8, 3015482, 1),
					Array(8, 3015837, 1),
					Array(8, 3015836, 1),
					Array(8, 3010723, 1),
					Array(8, 1142742, 1),
					Array(8, 1143024, 1),
					Array(8, 2028336 , 20),
					Array(8, 1202089, 1),
					Array(8, 1202091, 1),
					Array(8, 1202090, 1),
					Array(8, 2435824, 10), //V卷自选
					Array(8, 2431256, 10),//神秘椅子
					Array(8, 2436243, 1),//心脏自选
					Array(8, 2430675, 2),//银河随机
					Array(8, 2430096, 2),//结晶随机
					Array(8, 2433005, 8),//戒指随机
					Array(8, 2436249, 7),//惊人卷自选
					Array(8, 2436244, 2),//机器人自选
					Array(8, 2432069, 2),//暴君自选
					Array(8, 2431992, 2),//暴君随机
					Array(8, 2434265, 1),//神秘武器自选
					Array(8, 2433444, 2),//贝勒自选
				    Array(8, 2433509, 1),//特米自选
					Array(8, 2436245, 6), //FFN随机
					Array(8, 4001006, 1500)
					);


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
    } else if (status == 0) {
        var Care = cm.getHyPay(1);
		txt = "\t\t　#b " + Icon[73][1] + " #r#e  充值礼包中心  #n#b " + Icon[75][1] + " #k\r\n";
	    txt += z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 +z6+z6+ "\r\n\r\n";
        txt = "尊敬的 [ #r#h # #k ] 玩家\t\t欢迎光临充值中心\r\n";
        txt += "\t\t#d请按照自身累计金额购买相应礼包#k\r\n";
        txt += "\t\t\t当前元宝：#r" + Care.formatMoney(0, "") + " #k元\r\n\r\n";
        txt += "\t\t\t\t\t　" + icon1 + "\r\n";
		txt += z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 +z6+z6+ "\r\n";
        txt += "#b#L0#" + A0 + " 阅 #r50 #k　购买礼包\t   [  　　#r包含大量道具#k　　　 ]#l\r\n";
        txt += "#b#L1#" + A1 + " 阅 #r100#k　购买礼包\t   [ 包含大量道具#r   30万#k点卷 ]#l\r\n";
        txt += "#b#L2#" + A2 + " 阅 #r500#k　购买礼包\t   [ 包含大量道具#r  150万#k点卷 ]#l\r\n";
        txt += "#b#L3#" + A3 + " 阅 #r1000#k 购买礼包\t  [ 包含大量道具#r  300万#k点卷 ]#l\r\n";
        txt += "#b#L4#" + A4 + " 阅 #r3000#k 购买礼包\t  [ 包含大量道具#r  900万#k点卷 ]#l\r\n";
        txt += "#b#L5#" + A5 + " 阅 #r6000#k 购买礼包\t  [ 包含大量道具#r 1800万#k点卷 ]#l\r\n";
	    txt += "#b#L6#" + A6 + " 阅 #r8000#k 购买礼包\t  [ 包含大量道具#r 2400万#k点卷 ]#l\r\n";
	    txt += "#b#L7#" + A7 + " 阅 #r10000#k购买礼包\t [ 包含大量道具#r 3000万#k点卷 ]#l\r\n\r\n";
		txt += z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 +z6+z6+ "\r\n\r\n";
        txt += "#e#r\t 提示：点击购买完毕 将把等值金额转换成点卷#k#n\r\n";
        cm.sendYesNoS(txt, 2);
    } else if (status == 1) {
        switch (selection) {
            case 0:// 50
                caton = 0;
                var Care = cm.getHyPay(1);
				txt += z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 +z6+z6+ "\r\n";
                var txt = "#d" + icon0 + " 尊敬的 [ #r#h ##d ] 玩家 - 欢迎查看 50 礼包#k\r\n";
                txt += "#d" + icon0 + " 当前元宝　 #r" + Care.formatMoney(0, "") + " #d 元#k\r\n";
				txt += z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 +z6+z6+ "\r\n";
                txt += "#r" + icon0 + "　帐号元宝大于 50 元 否则购买失败#k\r\n";
                txt += "　　　　　　　　　　　　　　　　　　　　 " + icon4 + "\r\n";
                for (var i = 0; i < reward.length; i++) {
                    if (reward[i][0] == 1) {
                        txt += "\t\t\t#i" + reward[i][1] + "# #z" + reward[i][1] + "#[" + reward[i][2] + "个]\r\n";
                    }
                }
                cm.sendYesNoS(txt, 2);
                break;
            case 1:// 100
                caton = 1;
                var Care = cm.getHyPay(1);
                var txt = "#d" + icon0 + " 尊敬的 [ #r#h ##d ] 玩家 - 欢迎查看 100 礼包#k\r\n";
                txt += "#d" + icon0 + " 当前元宝　 #r" + Care.formatMoney(0, "") + " #d 元#k\r\n";
                txt += z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 +z6+z6+ "\r\n";
                txt += "#r" + icon0 + "　帐号元宝大于 100 元 否则购买失败#k\r\n";
                txt += "　　　　　　　　　　　　　　　　　　　　 " + icon4 + "\r\n";
                txt += "#b　　　　　　额外赠送玩家点卷　[ #r300000#k ]\r\n";
                for (var i = 0; i < reward.length; i++) {
                    if (reward[i][0] == 2) {
                        txt += "\t\t\t#i" + reward[i][1] + "# #z" + reward[i][1] + "#[" + reward[i][2] + "个]\r\n";
                    }
                }
                cm.sendYesNoS(txt, 2);
                break;
            case 2:// 500
                caton = 2;
                var Care = cm.getHyPay(1);
                var txt = "#d" + icon0 + " 尊敬的 [ #r#h ##d ] 玩家 - 欢迎查看 500 礼包#k\r\n";
                txt += "#d" + icon0 + " 当前元宝　 #r" + Care.formatMoney(0, "") + " #d 元#k\r\n";
                txt += z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 +z6+z6+ "\r\n";
                txt += "#r" + icon0 + "　帐号元宝大于 500 元 否则购买失败#k\r\n";
                txt += "　　　　　　　　　　　　　　　　　　　　 " + icon4 + "\r\n";
                txt += "#b　         额外赠送玩家点卷　[ #r1500000#k ]\r\n";
                for (var i = 0; i < reward.length; i++) {
                    if (reward[i][0] == 3) {
                        txt += "\t\t\t#i" + reward[i][1] + "# #z" + reward[i][1] + "#[" + reward[i][2] + "个]\r\n";
                    }
                }
                cm.sendYesNoS(txt, 2);
                break;
            case 3:// 1000
                caton = 3;
                var Care = cm.getHyPay(1);
                var txt = "#d" + icon0 + " 尊敬的 [ #r#h ##d ] 玩家 - 欢迎查看 1000 礼包#k\r\n";
                txt += "#d" + icon0 + " 当前元宝　 #r" + Care.formatMoney(0, "") + " #d 元#k\r\n";
                txt += z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 +z6+z6+ "\r\n";
                txt += "#r" + icon0 + "　帐号元宝大于 1000 元 否则购买失败#k\r\n";
                txt += "　　　　　　　　　　　　　　　　　　　　 " + icon4 + "\r\n";
                txt += "#b           额外赠送玩家点卷　[ #r3000000#k ]\r\n";
                for (var i = 0; i < reward.length; i++) {
                    if (reward[i][0] == 4) {
                        txt += "\t\t\t#i" + reward[i][1] + "# #z" + reward[i][1] + "#[" + reward[i][2] + "个]\r\n";
                    }
                }
                cm.sendYesNoS(txt, 2);
                break;
            case 4:// 3000
                caton = 4;
                var Care = cm.getHyPay(1);
                var txt = "#d" + icon0 + " 尊敬的 [ #r#h ##d ] 玩家 - 欢迎查看 3000 礼包#k\r\n";
                txt += "#d" + icon0 + " 当前元宝　 #r" + Care.formatMoney(0, "") + " #d 元#k\r\n";
                txt += z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 +z6+z6+ "\r\n";
                txt += "#r" + icon0 + "　帐号元宝大于 3000 元 否则购买失败#k\r\n";
                txt += "　　　　　　　　　　　　　　　　　　　　 " + icon4 + "\r\n";
                txt += "#b　          额外赠送玩家点卷　[ #r9000000#k ]\r\n";
                for (var i = 0; i < reward.length; i++) {
                    if (reward[i][0] == 5) {
                        txt += "\t\t\t#i" + reward[i][1] + "# #z" + reward[i][1] + "#[" + reward[i][2] + "个]\r\n";
                    }
                }
                cm.sendYesNoS(txt, 2);
                break;
            case 5:// 6000
                caton = 5;
                var Care = cm.getHyPay(1);
                var txt = "#d" + icon0 + " 尊敬的 [ #r#h ##d ] 玩家 - 欢迎查看 6000 礼包#k\r\n";
                txt += "#d" + icon0 + " 当前元宝　 #r" + Care.formatMoney(0, "") + " #d 元#k\r\n";
                txt += z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 +z6+z6+ "\r\n";
                txt += "#r" + icon0 + "　帐号元宝大于 6000 元 否则购买失败#k\r\n";
                txt += "　　　　　　　　　　　　　　　　　　　　 " + icon4 + "\r\n";
                txt += "#b　　　　　　额外赠送玩家点卷　[ #r18000000#k ]\r\n";
                for (var i = 0; i < reward.length; i++) {
                    if (reward[i][0] == 6) {
                        txt += "\t\t\t#i" + reward[i][1] + "# #z" + reward[i][1] + "#[" + reward[i][2] + "个]\r\n";
                    }
                }
                cm.sendYesNoS(txt, 2);
                break;
		     case 6:// 8000
                caton = 6;
                var Care = cm.getHyPay(1);
                var txt = "#d" + icon0 + " 尊敬的 [ #r#h ##d ] 玩家 - 欢迎查看 8000 礼包#k\r\n";
                txt += "#d" + icon0 + " 当前元宝　 #r" + Care.formatMoney(0, "") + " #d 元#k\r\n";
                txt += z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 +z6+z6+ "\r\n";
                txt += "#r" + icon0 + "　帐号元宝大于 8000 元 否则购买失败#k\r\n";
                txt += "　　　　　　　　　　　　　　　　　　　　 " + icon4 + "\r\n";
                txt += "#b　　　　　　额外赠送玩家点卷　[ #r2400000#k ]\r\n";
                for (var i = 0; i < reward.length; i++) {
                    if (reward[i][0] == 7) {
                        txt += "\t\t\t#i" + reward[i][1] + "# #z" + reward[i][1] + "#[" + reward[i][2] + "个]\r\n";
                    }
                }
                cm.sendYesNoS(txt, 2);
                break;
		     case 7:// 10000
                caton = 7;
                var Care = cm.getHyPay(1);
                var txt = "#d" + icon0 + " 尊敬的 [ #r#h ##d ] 玩家 - 欢迎查看 10000 礼包#k\r\n";
                txt += "#d" + icon0 + " 当前元宝　 #r" + Care.formatMoney(0, "") + " #d 元#k\r\n";
                txt += z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 +z6+z6+ "\r\n";
                txt += "#r" + icon0 + "　帐号元宝大于 10000 元 否则购买失败#k\r\n";
                txt += "　　　　　　　　　　　　　　　　　　　　 " + icon4 + "\r\n";
                txt += "#b　　　　　　额外赠送玩家点卷　[ #r30000000#k ]\r\n";
                for (var i = 0; i < reward.length; i++) {
                    if (reward[i][0] == 8) {
                        txt += "\t\t\t#i" + reward[i][1] + "# #z" + reward[i][1] + "#[" + reward[i][2] + "个]\r\n";
                    }
                }
                cm.sendYesNoS(txt, 2);
                break;
        }
    } else if (caton == 0) {
        if (cm.getEventCount("购买[50]礼包") == 0) {
            if (cm.getHyPay(1) < 100 && (cm.getSpace(1) < 7 || cm.getSpace(2) < 7 || cm.getSpace(3) < 7 || cm.getSpace(4) < 7)) {
                cm.sendOk("请确认是否有 50 元宝\r\n请确认装备背包栏至少空出7格以上位置\r\n请确认消耗背包栏至少空出7格以上位置\r\n请确认其它背包栏至少空出7格以上位置\r\n请确认设置背包栏至少空出7格以上位置");
                cm.dispose();
            } else if (cm.addHyPay(50) > 0) {
                cm.gainItem(2049124, 3)//正向
                cm.gainItem(2049116, 3)//强化
                cm.gainItem(2049752, 5)//S级30
                cm.gainItem(2049308, 1)//5星装备
                cm.gainItem(2431289, 10)//50箱子周年庆
                cm.setEventCount("购买[50]礼包");
                cm.sendOk("请注意查收。");
                cm.worldSpouseMessage(0x18, "[超值礼包] 玩家 " + cm.getChar().getName() + " 购买了 100 超值礼包　-　礼包内包含大量道具");
                cm.dispose();
            } else {
                cm.sendOk("请确认元宝是否充足");
                cm.dispose();
            }
        } else {
            cm.sendOk("今天已购买过该礼包");
            cm.dispose();
        }
    } else if (caton == 1) {
        if (cm.getEventCount("购买[100]礼包") == 0) {
            if (cm.getHyPay(1) < 100 && (cm.getSpace(1) < 7 || cm.getSpace(2) < 7 || cm.getSpace(3) < 7 || cm.getSpace(4) < 7)) {
                cm.sendOk("请确认是否有 100 元宝\r\n请确认装备背包栏至少空出7格以上位置\r\n请确认消耗背包栏至少空出7格以上位置\r\n请确认其它背包栏至少空出7格以上位置\r\n请确认设置背包栏至少空出7格以上位置");
                cm.dispose();
            } else if (cm.addHyPay(100) > 0) {
                cm.gainItem(2049124, 5)
                cm.gainItem(2049116, 5)
				cm.gainItem(2049323, 10)
                cm.gainItem(2049308, 1)
                cm.gainItem(2049752, 5)
                cm.gainItem(3010659, 1)
                cm.gainItem(3010608, 1)
                cm.gainItem(2431289, 2)
                cm.gainNX(300000);
                cm.setEventCount("购买[100]礼包");
                cm.sendOk("请注意查收。");
                cm.worldSpouseMessage(0x18, "[超值礼包] 玩家 " + cm.getChar().getName() + " 购买了 100 超值礼包　-　礼包内包含大量道具");
                cm.dispose();
            } else {
                cm.sendOk("请确认元宝是否充足");
                cm.dispose();
            }
        } else {
            cm.sendOk("今天已购买过该礼包");
            cm.dispose();
        }
    } else if (caton == 2) {
        if (cm.getEventCount("购买[500]礼包") == 0) {
            if (cm.getHyPay(1) < 500 && (cm.getSpace(1) < 7 || cm.getSpace(2) < 7 || cm.getSpace(3) < 7 || cm.getSpace(4) < 7)) {
                cm.sendOk("请确认是否有 500 元宝\r\n请确认装备背包栏至少空出7格以上位置\r\n请确认消耗背包栏至少空出7格以上位置\r\n请确认其它背包栏至少空出7格以上位置\r\n请确认设置背包栏至少空出7格以上位置");
                cm.dispose();
            } else if (cm.addHyPay(500) > 0) {
                cm.gainItem(2049124, 15)   
                cm.gainItem(2049116, 20)
				cm.gainItem(2049323, 50)
                cm.gainItem(2049308, 2)
                cm.gainItem(2049752, 2)
                cm.gainItem(3010590, 1)
                cm.gainItem(1142347, 1)
                cm.gainItem(1112915, 1)
                cm.gainItem(2431296, 1)
                cm.gainItem(2431994, 5)
                cm.gainItem(2436245, 1)
				cm.gainItem(4001006, 100)
                cm.gainNX(1500000);
                cm.setEventCount("购买[500]礼包");
                cm.sendOk("请注意查收。");
                cm.worldSpouseMessage(0x18, "[超值礼包] 玩家 " + cm.getChar().getName() + " 购买了 500 超值礼包　-　礼包内包含大量道具");
                cm.dispose();
            } else {
                cm.sendOk("请确认元宝是否充足");
                cm.dispose();
            }
        } else {
            cm.sendOk("今天已购买过该礼包");
            cm.dispose();
        }
    } else if (caton == 3) {
        if (cm.getEventCount("购买[1000]礼包") == 0) {
            if (cm.getHyPay(1) < 1000 && (cm.getSpace(1) < 7 || cm.getSpace(2) < 7 || cm.getSpace(3) < 7 || cm.getSpace(4) < 7)) {
                cm.sendOk("请确认是否有 1000 元宝\r\n请确认装备背包栏至少空出7格以上位置\r\n请确认消耗背包栏至少空出7格以上位置\r\n请确认其它背包栏至少空出7格以上位置\r\n请确认设置背包栏至少空出7格以上位置");
                cm.dispose();
            } else if (cm.addHyPay(1000) > 0) {
                cm.gainItem(2049124, 35)
                cm.gainItem(2049116, 40)
				cm.gainItem(2049323, 100)
                cm.gainItem(2049752, 4)
                cm.gainItem(2049308, 4)
				cm.gainItem(3015808, 1)
                cm.gainItem(1142216, 1)
                cm.gainItem(1112915, 2)
                cm.gainItem(2431296, 1)
                cm.gainItem(2431295, 3)//周年庆100%
                cm.gainItem(2431991, 1)//冒险之心
                cm.gainItem(2436245, 1)//防具箱子
                cm.gainItem(2431992, 1)//暴君箱子
                cm.gainItem(3015234, 1)//椅子
				cm.gainItem(4001006, 100)//火焰羽毛
                cm.gainNX(3000000);
                cm.setEventCount("购买[1000]礼包");
                cm.sendOk("请注意查收。");
                cm.worldSpouseMessage(0x18, "[超值礼包] 玩家 " + cm.getChar().getName() + " 购买了 1000 超值礼包　-　礼包内包含大量道具");
                cm.dispose();
            } else {
                cm.sendOk("请确认元宝是否充足");
                cm.dispose();
            }
        } else {
            cm.sendOk("今天已购买过该礼包");
            cm.dispose();
        }
    } else if (caton == 4) {
        if (cm.getEventCount("购买[3000]礼包") == 0) {
            if (cm.getHyPay(1) < 3000 && (cm.getSpace(1) < 7 || cm.getSpace(2) < 7 || cm.getSpace(3) < 7 || cm.getSpace(4) < 7)) {
                cm.sendOk("请确认是否有 3000 元宝\r\n请确认装备背包栏至少空出7格以上位置\r\n请确认消耗背包栏至少空出7格以上位置\r\n请确认其它背包栏至少空出7格以上位置\r\n请确认设置背包栏至少空出7格以上位置");
                cm.dispose();
            } else if (cm.addHyPay(3000) > 0) {
                cm.gainItem(2049153, 30)
                cm.gainItem(2049119, 30)
                cm.gainItem(2049308, 10)
				cm.gainItem(2049750, 10)
                cm.gainItem(3015836, 1)
                cm.gainItem(3015119, 1)
                cm.gainItem(3015263, 1)
                cm.gainItem(1672027, 1)
                cm.gainItem(1112915, 2)
                cm.gainItem(2023113, 1)
                cm.gainItem(1112140, 1)
                cm.gainItem(1112247, 1)
                cm.gainItem(1112787, 1)
                cm.gainItem(1003698, 1)
                cm.gainItem(3700071, 1)
                cm.gainItem(2431296, 2)
				cm.gainItem(2431295, 4)
				cm.gainItem(2430289, 1)
				cm.gainItem(2431992, 1)
				cm.gainItem(2436245, 2)
				cm.gainItem(2431938, 1)
			    cm.gainItem(2430096, 1)
				cm.gainItem(2433509, 1)
				cm.gainItem(2431992, 1)
				cm.gainItem(4001006, 400)//火焰羽毛
                cm.gainNX(9000000);
                cm.setEventCount("购买[3000]礼包");
                cm.sendOk("请注意查收。");
                cm.worldSpouseMessage(0x18, "[超值礼包] 玩家 " + cm.getChar().getName() + " 购买了 3000 超值礼包　-　礼包内包含大量道具");
                cm.dispose();
            } else {
                cm.sendOk("请确认元宝是否充足");
                cm.dispose();
            }
        } else {
            cm.sendOk("今天已购买过该礼包");
            cm.dispose();
        }
    } else if (caton == 5) {
        if (cm.getEventCount("购买[6000]礼包") == 0) {
            if (cm.getHyPay(1) < 6000 && (cm.getSpace(1) < 7 || cm.getSpace(2) < 7 || cm.getSpace(3) < 7 || cm.getSpace(4) < 7)) {
                cm.sendOk("请确认是否有 6000 元宝\r\n请确认装备背包栏至少空出7格以上位置\r\n请确认消耗背包栏至少空出7格以上位置\r\n请确认其它背包栏至少空出7格以上位置\r\n请确认设置背包栏至少空出7格以上位置");
                cm.dispose();
            } else if (cm.addHyPay(6000) > 0) {
                cm.gainItem(2049153, 50)
                cm.gainItem(2049119, 50)
                cm.gainItem(2049308, 18)
                cm.gainItem(2049750, 18)
                cm.gainItem(3010658, 1)
                cm.gainItem(3015609, 1)
                cm.gainItem(3015646, 1)
                cm.gainItem(1672027, 1)
                cm.gainItem(1112915, 5)
                cm.gainItem(2023112, 1)
                cm.gainItem(1112139, 1)
                cm.gainItem(1112246, 1)
                cm.gainItem(1112786, 1)
                cm.gainItem(1003697, 1)
                cm.gainItem(2431295, 8)//周年庆100%
                cm.gainItem(2431991, 2)//冒险之心
                cm.gainItem(2431992, 3)//暴君箱子
                cm.gainItem(2431988, 3)//防具箱子
                cm.gainItem(2431989, 2)//150武器
                cm.gainItem(2431296, 2)//椅子
                cm.gainItem(3700070, 1)//戒指 
				cm.gainItem(2433509, 1)//特米自选
				cm.gainItem(4001006, 600)//火焰羽毛
                cm.gainNX(18000000);
                cm.setEventCount("购买[6000]礼包");
                cm.sendOk("请注意查收。");
                cm.worldSpouseMessage(0x18, "[超值礼包] 玩家 " + cm.getChar().getName() + " 购买了 6000 超值礼包　-　礼包内包含大量道具");
                cm.dispose();
            } else {
                cm.sendOk("请确认元宝是否充足");
                cm.dispose();
            }
        } else {
            cm.sendOk("今天已购买过该礼包");
            cm.dispose();
        }
    } else if (caton == 6) {
        if (cm.getEventCount("购买[8000]礼包") == 0) {
            if (cm.getHyPay(1) < 8000 && (cm.getSpace(1) < 7 || cm.getSpace(2) < 7 || cm.getSpace(3) < 7 || cm.getSpace(4) < 7)) {
                cm.sendOk("请确认是否有 8000 元宝\r\n请确认装备背包栏至少空出7格以上位置\r\n请确认消耗背包栏至少空出7格以上位置\r\n请确认其它背包栏至少空出7格以上位置\r\n请确认设置背包栏至少空出7格以上位置");
                cm.dispose();
            } else if (cm.addHyPay(8000) > 0) {
                cm.gainItem(2049153, 80)
                cm.gainItem(2049119, 80)
                cm.gainItem(2049308, 30)
                cm.gainItem(2049750, 30)
			    cm.gainItem(2049323, 800)
				cm.gainItem(3015637, 1)
				cm.gainItem(3015599, 1)
				cm.gainItem(3015236, 1)
				cm.gainItem(3015111, 1)
				cm.gainItem(3015031, 1)
				cm.gainItem(1003696, 1)
				cm.gainItem(1143023, 1)
				cm.gainItem(3010507, 1)
				cm.gainItem(1112138, 1)
				cm.gainItem(1112245, 1)
				cm.gainItem(1112785, 1)
                cm.gainItem(3700069, 1)
				cm.gainItem(1672069, 1)
				cm.gainItem(2430675, 1)
				cm.gainItem(2431256, 8)
				cm.gainItem(2430096, 2)
				cm.gainItem(2433005, 5)
				cm.gainItem(2436249, 5)
				cm.gainItem(2436244, 1)
				cm.gainItem(2433444, 1)
				cm.gainItem(2432069, 1)
				cm.gainItem(2431992, 2)
				cm.gainItem(2431938, 2)
				cm.gainItem(2433509, 1)
				cm.gainItem(2435824, 3)
				cm.gainItem(4001006, 1000)
                cm.gainNX(24000000);
                cm.setEventCount("购买[8000]礼包");
                cm.sendOk("请注意查收。");
                cm.worldSpouseMessage(0x18, "[超值礼包] 玩家 " + cm.getChar().getName() + " 购买了 8000 超值礼包　-　礼包内包含大量道具");
                cm.dispose();
            } else {
                cm.sendOk("请确认元宝是否充足");
                cm.dispose();
            }
        } else {
            cm.sendOk("今天已购买过该礼包");
            cm.dispose();
        }
    } else if (caton == 7) {
        if (cm.getEventCount("购买[10000]礼包") == 0) {
            if (cm.getHyPay(1) < 10000 && (cm.getSpace(1) < 7 || cm.getSpace(2) < 7 || cm.getSpace(3) < 7 || cm.getSpace(4) < 7)) {
                cm.sendOk("请确认是否有 10000 元宝\r\n请确认装备背包栏至少空出7格以上位置\r\n请确认消耗背包栏至少空出7格以上位置\r\n请确认其它背包栏至少空出7格以上位置\r\n请确认设置背包栏至少空出7格以上位置");
                cm.dispose();
            } else if (cm.addHyPay(10000) > 0) {
                    cm.gainItem(2049153, 120)
                    cm.gainItem(2049119, 120)
                    cm.gainItem(2049308, 60)
                    cm.gainItem(2049750, 60)
				    cm.gainItem(2049323, 500)
					cm.gainItem(1003696, 1)
					cm.gainItem(1115014, 1)
					cm.gainItem(1115102, 1)
					cm.gainItem(3700347, 1)
					cm.gainItem(3010507, 1)
					cm.gainItem(3015795, 1)
					cm.gainItem(3015482, 1)
					cm.gainItem(3015837, 1)
					cm.gainItem(3015836, 1)
					cm.gainItem(3010723, 1)
					cm.gainItem(1142742, 1)
					cm.gainItem(1143024, 1)
					cm.gainItem(2028336 , 20)
					cm.gainItem(1202089, 1)
					cm.gainItem(1202091, 1)
					cm.gainItem(1202090, 1)
					cm.gainItem(2435824, 5)
					cm.gainItem(2431256, 10)
					cm.gainItem(2436243, 2)
					cm.gainItem(2430675, 2)
					cm.gainItem(2430096, 4)
					cm.gainItem(2433005, 8)
					cm.gainItem(2436249, 7)
					cm.gainItem(2436244, 2)
					cm.gainItem(2432069, 3)
				    cm.gainItem(2431992, 3)
					cm.gainItem(2434265, 1)
					cm.gainItem(2433444, 2)
					cm.gainItem(2433509, 1)
					cm.gainItem(2436245, 6)
					cm.gainItem(4001006, 1500)
                cm.gainNX(30000000);
                cm.setEventCount("购买[10000]礼包");
                cm.sendOk("请注意查收。");
                cm.worldSpouseMessage(0x18, "[超值礼包] 玩家 " + cm.getChar().getName() + " 购买了 10000 超值礼包　-　礼包内包含大量道具");
                cm.dispose();
            } else {
                cm.sendOk("请确认元宝是否充足");
                cm.dispose();
            }
        } else {
            cm.sendOk("今天已购买过该礼包");
            cm.dispose();
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