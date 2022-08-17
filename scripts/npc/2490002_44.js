var status = 0;
var potList = Array(
Array(40603, "攻击Boss时伤害　[+40%]", 8000),
Array(40292, "无视怪物的防御　[+40%]", 8000),
Array(42051, "角色的自身攻击　[+12%]", 8000),
Array(60001, "角色的汇总伤害　[+12%]", 8000),
Array(40055, "角色的自身暴击　[+12%]", 8000),
Array(60002, "角色的所有属性　[+20%]", 8000),
Array(60007, "角色的自身血量　[+10%]", 8000),
Array(60008, "角色的物攻魔攻　[ 10 ]", 8000));
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
    Array("淘居", "#fEffect/ItemEff/1102877/effect/default/0#"),
    Array("开始", "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"),
    Array("猫咪", "#fUI/NameTag/190/w#"),
    Array("猫咪", "#fUI/NameTag/190/c#"),
    Array("猫咪", "#fUI/NameTag/190/e#"),
    Array("蝗虫", "#fUI/NameTag/188/w#"),
    Array("蝗虫", "#fUI/NameTag/188/c#"),
    Array("蝗虫", "#fUI/NameTag/188/e#")
    );
var potId = -1; //潜能的ID
var depict = ""; //潜能的描述
var points = -1; //每次的价格
var oldEquip;
var newEquip;
var count = 1; //定义洗到那个属性的次数
var slot = 1; //定义需要修改的装备在背包的位置
var Nx = -1;
//---------------------------------------------------------
var random = java.lang.Math.floor(Math.random() * 4);
var random1 = java.lang.Math.floor(Math.random() * 5000 + 1);
var a = "#fEffect/CharacterEff/1082565/0/0#";  //饼干兔子
var b = "#fEffect/CharacterEff/1112904/0/0#"; //彩色星星
var c = "#fEffect/ItemEff/1112811/0/0#";//"+z+"//美化
var d = "#fUI/Basic/LevelNo/0#"; //[1]+1
var e = "#fUI/Basic/LevelNo/1#"; //[1]+1
var f = "#fUI/Basic/LevelNo/2#"; //[1]+1
var j = "#fUI/Basic/LevelNo/3#"; //[1]+1
var h = "#fUI/Basic/LevelNo/4#"; //[1]+1
var i1 = "#fUI/Basic/LevelNo/5#"; //[1]+1
var g = "#fUI/Basic/LevelNo/6#"; //[1]+1
var k = "#fUI/Basic/LevelNo/7#"; //[1]+1
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
var lbtp = 0;
var lb = 0;
var llb = 0;
var txt;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        //cm.openNpc(2490002);
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
        txt = "\t\t　#b " + Icon[73][1] + " #r#e  潜能中心  #n#b " + Icon[75][1] + " #k\r\n";
        txt += Icon[65][1];
        for (var i = 0; i <= 22; i++) {
            txt += Icon[66][1];
        };
        txt += Icon[67][1] + "\r\n\r\n";
        txt += "　　#d尊敬的玩家 [ #r#h ##d ] - 这里是潜能中心#k\r\n"
        txt += "#d　#L0#" + Icon[4][1] + " 潜能中心是什么#l#k\r\n\r\n";

        txt += "#d　#L1#" + Icon[4][1] + " [ #r蜡笔#d ] 一键潜能　　　　模式 [#r 1 #d]#l#k\r\n";
        txt += "#d　#L2#" + Icon[4][1] + " [ #r随机#d ] 一键潜能　　　　模式 [#r 2 #d]#l#k\r\n\r\n";
        txt += Icon[65][1];
        for (var i = 0; i <= 22; i++) {
            txt += Icon[66][1];
        };
        txt += Icon[67][1];
        txt += "\r\n";
        cm.sendSimpleS(txt, 2);
    } else if (status == 1) {
        if (selection == 0) {
            cm.sendOk("#d尊敬的 [ #r#h ##d ]玩家　潜能介绍请阅读\r\n\r\n蜡笔潜能介绍 -\r\n通过蜡笔可修改装备 1 2 3 潜能 及 1 2 3 附加潜能 的属性\r\n系统潜能介绍 -\r\n系统筛选潜能或附加潜能 并且你需支付-5-金额以及筛选费用\r\n#r费用详解：1200点卷*筛选次数=最终费用#n#k");
            status = -1;
        } else if (selection == 1) {
            cm.dispose();
            cm.openNpc(2490002, 441);
            return;
        } else if (selection == 2) {
            cm.dispose();
            cm.openNpc(2490002, 442);
            return;
        }
    }
}