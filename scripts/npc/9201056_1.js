/*
Care - 脚本调整 - 
脚本定制 仿制脚本 
唯一方式 381991414
*/
var txt;
var status = 0;
/*------------------------------------------------------------*/
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
    Array("方框", "#fUI/UIWindow.img/Item/New/inventory/0#"),
    Array("方框", "#fUI/UIWindow.img/Item/activeExpChairIcon#"),
    Array("箭头", "#fUI/Basic.img/icon/arrow#"),
    Array("笑脸", "#fEtc/ItemPotLifeInfo/1000/state/good/0#"),
    Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#"),
    Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/disabled/0#"),
    Array("睡脸", "#fEtc/ItemPotLifeInfo/1000/state/sleep/0#"),
    Array("铃铛", "#fMap/MapHelper/weather/tree/9#"),
    Array("雪花", "#fMap/MapHelper/weather/snowmanSnow/0#"),
    Array("咖啡", "#fMap/MapHelper/weather/sweetHeart/0#"),
    Array("天使", "#fMap/MapHelper/weather/starPlanet2/3#"),
    Array("蘑菇", "#fMap/MapHelper/weather/dia/0#"),
    Array("蘑菇", "#fMap/MapHelper/weather/5000days/3#"),
    Array("红心", "#fMap/MapHelper/weather/LoveEffect0/2/1#"),
    Array("红心", "#fMap/MapHelper/weather/LoveEffect0/3/0#"),
    Array("黄星", "#fMap/MapHelper/weather/WorldRecord2/0#"),
    Array("黄菇", "#fMap/MapHelper/weather/mush2/2#"),
    Array("黄菇", "#fMap/MapHelper/weather/mush1/6#"),
    Array("射心", "#fMap/MapHelper/weather/LoveEffect2/0/0#"),
    Array("射心", "#fMap/MapHelper/weather/LoveEffect1/2/0#"),
    Array("射心", "#fMap/MapHelper/weather/LoveEffect1/1/0#"),
    Array("红心", "#fMap/MapHelper/weather/LoveEffect1/1/1#"),
    Array("袜子", "#fMap/MapHelper/weather/christmas/11#"),
    Array("小心", "#fMap/MapHelper/weather/apple/4#"),
    Array("树木", "#fMap/MapHelper/weather/2011Xmas/5#"),
    Array("小心", "#fMap/MapHelper/weather/2011Xmas/6#"),
    Array("可爱", "#fMap/MapHelper/weather/2011Xmas/3#"),
    Array("天使", "#fMap/MapHelper/weather/starPlanet2/2#"),
    Array("红心", "#fMap/MapHelper/weather/LoveEffect0/1/2#")
    );

var txt;
var 价位 = 1000;
var 限制职业 = [["隐", 312, 211,512, 4112, 5112, 1312, 2312, 3312, 1512, 3612, 6412,532]];//允许的职业
var 道具 = [2438618];
var 检测 = false;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;
        if (status == 0) {
            txt = "　　 " + Icon[83][1] + " " + Icon[99][1] + " " + Icon[100][1] + " " + Icon[99][1] + " " + Icon[83][1];
            txt += "\r\n\r\n";
            //txt += "\t\t #L0#" + Icon[97][1] + " #r#e#n#b   说明中心 " + Icon[97][1] + "#l#k\r\n\r\n";
            txt += "\t\t #L1#" + Icon[97][1] + " #n#b 隐身BUFF药水" + Icon[97][1] + "#l#k\r\n\r\n";
            //txt += "\t\t #L2#" + Icon[97][1] + " #n#d 隐身BUFF药水" + Icon[97][1] + "#l#k\r\n";
            txt += "\r\n\r\n";
            txt += "　　 " + Icon[83][1] + " " + Icon[99][1] + " " + Icon[100][1] + " " + Icon[99][1] + " " + Icon[83][1];
            if (cm.getPlayerStat("GENDER") == 0) cm.sendSimpleS(txt, 2, 2400009);
            if (cm.getPlayerStat("GENDER") == 1) cm.sendSimpleS(txt, 2, 2400010);
        } else if (status == 1) {
            switch (selection) {
                case 0:
                    txt = "\t\t\t\t" + Icon[85][1] + "#r#e 说明中心 #k#n" + Icon[85][1] + "\r\n";
                    txt += "\t" + Icon[86][1] + " #g功能说明\r\n\r\n";
                    txt += "\t" + Icon[86][1] + " #b将某些技能伤害达到 15 段伤害值\r\n";
                    txt += "\t" + Icon[86][1] + " #r智能判断可以购买的职业 防止购买不能用\r\n";
                    txt += "\t" + Icon[86][1] + " #b平衡所有职业的输出环境 药品限制时间 #r[ 15 ] 分钟\r\n";
                    txt += "\t\t\t\t\t　#L999#" + Icon[76][1] + "\r\n";
                    if (cm.getPlayerStat("GENDER") == 0) cm.sendSimpleN(txt, 713, 2400009);
                    if (cm.getPlayerStat("GENDER") == 1) cm.sendSimpleN(txt, 713, 2400010);
                    status = -1;
                    break;
                case 1:
                    if (cm.getNX(1) < 价位) { cm.playerMessage(1, "抱歉 - 你没有 " + 价位 + " 点卷 不能购买这个药品r\n\r\n"); cm.dispose(); return; };
                    if (cm.getLevel() < 180) { cm.playerMessage(1, "抱歉 - 只有 180 级才可以使用这个功能r\n\r\n"); cm.dispose(); return; }

                    for (var i = 1; i < 限制职业[0].length; i++) {
                        if (限制职业[0][i] == cm.getJob()) 检测 = true;
                    }
                    if (检测) {
                        cm.gainNX(1, -价位);
                        cm.gainItem(道具[0], 1);
                        cm.playerMessage(1, "\r\n\r\n恭喜 - 你购买了这个药品 祝您游戏愉快\r\n\r\n");
                        cm.dispose();
                    } else {
                        txt = "";
                        for (var i = 1; i < 限制职业[0].length; i++) {
                            txt += "职业 - " + format(" ", 10, cm.getJobName(限制职业[0][i]).toString()) + " 必须 [ 4 ] 转\r\n";
                        }
                        cm.playerMessage(1, "\r\n\r\n抱歉 - 你的职业目前不支持这个药品\r\n\r\n支持的职业群体有\r\n\r\n" + txt + "\r\n\r\n" + 检测 + " " + cm.getJobName(cm.getJob()));
                        cm.dispose();
                        return;
                    }
                    break;
                //case 2:
				//cm.dispose();
				//cm.openNpc(9201056,ysys);
                    //return;
                    //break;
            }
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

