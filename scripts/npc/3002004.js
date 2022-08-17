/*
Care - 脚本调整 - 
脚本定制 仿制脚本 
唯一方式 381991414
*/


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
    Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/ladder/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/7#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/walk1/3#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/jump/0#"),
    Array("音符", "#fEffect/ItemEff/1112811/0/0#"),
    Array("十字", "#fUI/GuildMark/Mark/Pattern/00004002/1#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/1#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/2#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/3#"),
    Array("彩虹", "#fEffect/ItemEff/1102877/effect/default/0#"),
    Array("开始", "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"),
    Array("猫咪", "#fUI/NameTag/190/w#"),
    Array("猫咪", "#fUI/NameTag/190/c#"),
    Array("猫咪", "#fUI/NameTag/190/e#"),
    Array("蝗虫", "#fUI/NameTag/188/w#"),
    Array("蝗虫", "#fUI/NameTag/188/c#"),
    Array("蝗虫", "#fUI/NameTag/188/e#"),
    Array("彩虹", "#fEffect/ItemEff/1070069/effect/walk1/0#"),
    Array("彩虹", "#fEffect/ItemEff/1070069/effect/walk1/1#"),
    Array("彩虹", "#fEffect/ItemEff/1070069/effect/walk1/2#"),
    Array("彩虹", "#fEffect/ItemEff/1070069/effect/walk1/3#"),
    Array("彩虹", "#fEffect/ItemEff/1070069/effect/walk1/4#"),
    Array("彩虹", "#fEffect/ItemEff/1070069/effect/walk1/5#"),
    Array("彩虹", "#fEffect/ItemEff/1070069/effect/walk1/6#"),
    Array("彩虹", "#fEffect/ItemEff/1070069/effect/walk1/7#"),
    Array("外星人", "#fEffect/ItemEff/1102875/effect/walk1/3#"),
    Array("翅膀", "#fEffect/ItemEff/1102511/effect/ladder/0#"),
    Array("金人", "#fEffect/ItemEff/1102616/effect/stabO1/5#")
);
var 每日栏目组 = new Array("人长得漂亮不如活得漂亮！", "当裤子失去皮带，才懂得什麽叫做依赖。", "烟不听话，所以我们'抽烟'。", "你发怒一分钟，便失去60秒的幸福。", "当男人皮皮女人，从此只有纪念日，没有独立日。", "路见不平一声吼，吼完继续往前走。", "幸福是个比较级，要有东西垫底才感觉得到。", "知识就像内裤，看不见但很重要", "作为失败的典型，你实在是太成功了", "女人喜欢长得坏坏的男人，不是喜欢长坏了的男人", "跌倒了，爬起来再哭", "你若流泪，先湿的是我的心", "让未来到来，让过去过去", "我自横刀向天笑，笑完之后去睡觉", "别跟我谈感情，谈感情伤钱", "孤单是一个人的狂欢，狂欢是一群人的孤单", "姐不是收破烂的，做不到让你随喊随到", "我不是草船，你的贱别往我这发", "你的矮是终身的，我的胖却是暂时的", "別在无聊的时候來找我，不然显得我是多余的", "姐不是电视机，不要老是盯着姐看", "即使你已名花有主、我也要移花接木", "心里只有你一个频道 最可恨的是还没有广告", "给你最大的报复，就是活的比你幸福", "要不是老师说不能乱扔垃圾，不然我早把你扔出去", "没有癞蛤蟆，天鹅也会寂寞", "我是光棍我可耻，我给国家浪费纸", "人生没有如果，只有后果和结果", "你那么有钱 为什么不让鬼来推磨？", "别把人和狗相提并论，狗最起码忠诚", "生活嘛，就是生下来，活下去", "当你披上了婚纱 我也披上了袈裟", "趁着年轻把能干的坏事都干了吧，没几年了", "我人生只会两件事 1 这也不会 2 那也不会", "出租车司机，司机中的战斗机，噢耶! ", "思想有多远，你就给我滚多远!", "人生最大的悲哀是青春不在,青春痘却还在。", "最梦幻的长寿秘决:保持呼吸，不要断气~", "打死我也不说，你们还没使美人计呢!", "不要和我比懒,我懒得和你比", "我不是个随便的人 我随便起来不是人", "不怕虎一样的敌人，就怕猪一样的队友", "老虎不发威 你当我是HELLO KITTY！", "吃自助最高境界：扶墙进，扶墙出。", "爷爷都是从孙子走过来的……", "夏天就是不好，穷的时候我连西北风都没得喝", "没什么事就不要找我，有事了更不要找我。", "我想早恋，可是已经晚了……", "钱可以解决的问题都不是问题。", "天哪，我的衣服又瘦了！", "不吃饱哪有力气减肥啊？", "连广告也信，读书读傻了吧？", "人怕出名猪怕壮，男怕没钱女怕胖。", "如果有钱也是一种错，我情愿一错再错", "命运负责洗牌，但是玩牌的是我们自己！", "好好活着，因为我们会死很久!", "人又不聪明，还学人家秃顶！", "我总在牛a与牛c之间徘徊。", "不怕被人利用，就怕你没用。", "鄙视我的人这么多，你算老几? ", "秀发去无踪，头屑更出众！", "春色满园关不住，我诱红杏出墙来。", "问世间情为何物？一物降一物", "bmw是别摸我，msn是摸死你", "女为悦己者容,男为悦己者穷！ ", "念了十几年书，还是幼儿园比较好混");

var txt;

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
    if (status == 0) {
        txt = "　" + Icon[96][1] + Icon[92][1] + Icon[93][1] + Icon[94][1] + Icon[96][1] + "\r\n\r\n";
        txt += "　" + Icon[96][1] + "#b#e　　 欢迎光临翅膀进化中心#k#n　　" + Icon[96][1] + "\r\n\r\n";
        txt += "　" + Icon[96][1] + Icon[92][1] + Icon[93][1] + Icon[94][1] + Icon[96][1] + "\r\n\r\n";
        txt += "\t\t\t　" + Icon[100][1] + "\r\n";
        txt += "#L1##b" + Icon[4][1] + " 翅膀进化 " + Icon[4][1] + "#l";
        txt += "#L0##r" + Icon[4][1] + " 初始翅膀 " + Icon[4][1] + "#l";
        txt += "#L2##d" + Icon[4][1] + " 说明介绍 " + Icon[4][1] + "#l";
        if (cm.getPlayerStat("GENDER") == 0) cm.sendSimpleS(txt, 2, 2400009);
        if (cm.getPlayerStat("GENDER") == 1) cm.sendSimpleS(txt, 2, 2400010);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                if (cm.getPQLog("初始翅膀", 1) == 0 && cm.getSpace(1) > 1) {
                    cm.gainItem(1102729, 1);
                    cm.setPQLog("初始翅膀", 1);
                    cm.setPQLog("初阶段翅膀领取", 1);
                    cm.worldSpouseMessage(0x13, "『 翅膀中心 』 : 玩家 " + cm.getChar().getName() + " 领取了初阶段翅膀开启了进阶之路。");
                    cm.sendOk(" #b成功领取了初阶段翅膀一个。请妥善保管每次进阶的翅膀。下次再无法从我这里领取初级翅膀了。");
                    cm.dispose();
                }
                else {
                    cm.sendOk("#b您已经领取过。或者背包已满。#k\r\n\r\n" + Icon[101][1] + "\r\n- #d#e进阶翅膀说明#k#n\r\n\r\n#b1). 请点击领取翅膀领取初阶翅膀。\r\n#r2). 请把要进阶的翅膀放在背包第一格。");
                    cm.dispose();
                }
                break;

            case 1:
                if (cm.getPQLog("初阶段翅膀领取", 1) >= 1) {
                    cm.dispose();
                    cm.openNpc(9310144, "cbjj");
                } else {
                    cm.sendOk("#b未查询到您有初阶段翅膀,无法让您使用翅膀进阶功能#k\r\n\r\n\r\n- #d#e进阶翅膀说明#k#n\r\n\r\n#b1). 请点击领取翅膀领取初阶翅膀。\r\n#r2). 请把要进阶的翅膀放在背包第一格。");
                    cm.dispose();

                }
                break;

            case 2:
                cm.sendOk("#b您当前一共有黑暗羽毛： #r" + cm.getItemQuantity("4034999") + " #b个#k\r\n\r\n" + Icon[101][1] + "\r\n- #d#e火焰羽毛获得方式#k#n\r\n\r\n#b1). 通过副本、Boss及怪物掉落。\r\n#r2). 通过充值消费金额进行购买。\r\n#b3). 通过Gm举办在线活动时候获得。");
                cm.dispose();
                break;
        }
    }
}




