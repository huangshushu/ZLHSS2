/*
*   制作：dgms
*   唯一qq:2310492726
*   功能：每日活动中心
*   时间：2017年1月12日
*/
var tt = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var bb = "#fUI/UIWindow4.img/PQRank/rank/gold#";//皇冠1
var cc = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"//开始条件
var A0 = "#fUI/Basic/LevelNo/0#"; //[1]+1
var A1 = "#fUI/Basic/LevelNo/1#"; //[1]+1
var A2 = "#fUI/Basic/LevelNo/2#"; //[1]+1
var A3 = "#fUI/Basic/LevelNo/3#"; //[1]+1
var A4 = "#fUI/Basic/LevelNo/4#"; //[1]+1
var A5 = "#fUI/Basic/LevelNo/5#"; //[1]+1
var z3 = "#fUI/GuildMark/Mark/Animal/00002006/16#";
var z4 = "#fUI/UIWindow2/MemoInGame/Get/BtClame/pressed/0#";
var z5 = "#fEffect/CharacterEff/1112904/2/1#";//五角花
var z6 = "#fUI/GuildMark/Mark/Etc/00009004/3#";//皇冠
var z7 = "#fUI/UIWindowPL/DuoEvent/Maximum/DuoInfo/icon/GoodF/0#";//皇冠
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
var status = -1;
var ico1 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
    } if (status == 0) {
        text =  "\t\t#b " + Icon[73][1] + " #g#e  娱乐活动中心  #n#b " + Icon[75][1] + " #k\r\n\r\n";
		text += z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 +z6+z6+ "\r\n";
		//text += "\t\t\t  #L9#" + z7 + " 查询日常中心 "+ z7 + "#r#b#l\r\n\r\n"
		//text += z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 + z6 +z6+z6+ "\r\n";
        //text += "#L0#" + bb + " #k猜拳能手#b   <大量点卷>            #r[每日五次]#b#l"
        //text += "\r\n#L1#" + bb + " #k每日寻宝#b   <黄金罗盘>            #r[每日五次]#b#l"
		//text += "\r\n#L14#" + bb + " #k快乐圣诞收集#b   <大量点卷>        #r[每日一次]#b#l"
		text += "\r\n#L15#" + bb + " #k野外BOSS#b        <童年记忆>       #r[经典怀旧]#b#l"
        //text += "\r\n#L2#" + bb + " #k射手跳跳#b        <奖励点卷>       #r[每日一次]#b#l"
		//text += "\r\n#L16#" + bb + " #k废弃跳跳#b        <奖励点卷>       #r[每日一次]#b#l"
		//text += "\r\n#L17#" + bb + " #k火山跳跳#b        <奖励点卷>       #r[每日一次]#b#l"
		//text += "\r\n#L18#" + bb + " #k玩具跳跳#b        <奖励点卷>       #r[每日一次]#b#l"
        //text += "\r\n#L3#" + bb + " #k解锁小游戏#b <抵用券、游戏币>      #r[每日十次]#b#l"
		//text += "\r\n#L4#" + bb + " #k花园中心#b <魔方、突破、箱子>      #r[每日培养]#b#l"
		//text += "\r\n#L5#" + bb + " #k月杪的年糕#b <点卷、箱子、卷轴>    #r[每日三次]#b#l"
		//text += "\r\n#L6#" + bb + " #k女神的痕迹#b <点卷、箱子、卷轴>    #r[每日三次]#b#l"
		text += "\r\n#L10#" + bb + " #k射手村猎场#b      <金币/魔方>      #r[每日一次]#b#l"
		text += "\r\n#L7#" + bb + " #kXO问答活动#b   <突破、箱子、卷轴>  #r[每周开启]#b#l"
		//text += "\r\n#L8#" + bb + " #k每日跑环任务#b <突破、箱子、卷轴>  #r[每日必做]#b#l"
		text += "\r\n#L11#" + bb + " #k家族跑旗#b        <奖励丰富>       #r[活动开启]#b#l"
		text += "\r\n#L12#" + bb + " #k宝物猎人#b        <奖励丰富>       #r[活动开启]#b#l"
		//text += "\r\n#L13#" + bb + " #k手速红包#b <抢夺红包咯>      #r[GM开启]#b#l"
		//text += "\r\n#L12#" + bb + " #k攻城中心#b <徽章、箱子、点卷>      #r[每日开启]#b#l"
        text += "\r\n#L98#" + bb + " #k家族任务#b        <奖励丰富>       #r[无限开启]#b#l"
        text += "\r\n#L88#" + bb + " #k次元之境#b      <次元手套/元宝>    #r[每日十次]#b#l"
        text += "\r\n#L999#" + bb + " #k电影休闲#b      <各种电影/动漫>    #r[休闲时光]#b#l"
        text += "\r\n\r\n\t\t\t\t#L99##r#e返回上一步"

        
        cm.sendSimple(text,0);
    } else if (status == 1) {
        if (selection == 0) {
            cm.dispose();
            cm.openNpc(1530636, 1005);
        }else if (selection == 999) {
            cm.dispose();
            cm.openNpc(1530635, 4567);
        }else if (selection == 98) {
            cm.dispose();
            cm.openNpc(9040000);
        }else if (selection == 88) {
            cm.dispose();
            cm.openNpc(9020009);
        } else if (selection == 1) {
            cm.dispose();
            cm.openNpc(2084001);
        }else if (selection == 12) {
            cm.dispose();
            cm.openNpc(2084001,"宝物猎人");
		}else if (selection == 15) {
            cm.dispose();
            cm.openNpc(2084001,"ywfb");
        } else if (selection == 12) {
            cm.dispose();
            cm.openNpc(2084001,"寻宝");
        } else if (selection == 2) {
            cm.dispose();
            cm.warp(100000202)
		} else if (selection == 16) {
            cm.dispose();
            cm.warp(280020000)
		} else if (selection == 17) {
            cm.dispose();
            cm.warp(280020000)
		} else if (selection == 18) {
            cm.dispose();
            cm.warp(220000006)
        } else if (selection == 3) {
            cm.dispose();
            cm.openNpc(9000132, 1);
		} else if (selection == 4) {
            cm.dispose();
            cm.openNpc(1530636, 1001);
		} else if (selection == 5) {
            cm.dispose();
            cm.openNpc(9076100);
		} else if (selection == 6) {
            cm.dispose();
            cm.openNpc(9076130);
		} else if (selection == 7) {
            cm.dispose();
            cm.openNpc(9000277);
     	} else if (selection == 8) {
            cm.dispose();
            cm.openNpc(1530636,1999);
	    } else if (selection == 9) {
            cm.dispose();
            cm.openNpc(1530635,168);
		} else if (selection == 10) {
            cm.dispose();
            cm.openNpc(9000132);
		} else if (selection == 11) {
            cm.dispose();
            cm.openNpc(9000233);
		} else if (selection == 12) {
            cm.dispose();
            cm.openNpc(1530635,1688);
	    } else if (selection == 14) {
            cm.dispose();
            cm.openNpc(9330013,4);
	    } else if (selection == 13) {
            cm.dispose();
            cm.openNpc(9330013,"红包");
        }else if (selection == 99) {
            cm.dispose();
            cm.openNpc(1530635, 0);
        }
    } else {
        cm.dispose();
    }
}

