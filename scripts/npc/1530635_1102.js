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
    Array("红心", "#fMap/MapHelper/weather/LoveEffect0/1/2#"),
    Array("取消", "#fUI/CashShop/CSCoupon/BtCancel/normal/0#")
);
var txt;
var 记录组;
var 批量组 = ["漩涡", "战国", "法弗", "真红", "暴君", "超越", "埃苏装备", "高级贝勒", "最高贝勒"];
var 寄存道具组 = [];
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
        cm.worldMessage(cm.getInventory(1).getItem(1).getOwner());
        txt = "　　　　 " + Icon[83][1] + " " + Icon[99][1] + " " + Icon[100][1] + " " + Icon[99][1] + " " + Icon[83][1];
        txt += "\r\n";
        txt += "　　　　#L0#" + Icon[96][1] + " #g分解中心说明 - #r必看#k#l\r\n\r\n";
        txt += "　　　　#L1#" + Icon[96][1] + " #b点卷 - 选择你想分解的道具类型#l\r\n\r\n";
        txt += "　　　　#L2#" + Icon[96][1] + " #r元宝 - 选择你想分解的道具类型#l\r\n\r\n";
        txt += " #b" + Icon[99][1] + "　尊敬的 #r" + cm.getName() + "#b 欢迎光临 - #d分解中心#b -  " + Icon[99][1] + "\r\n";

        if (cm.getPlayerStat("GENDER") == 0) cm.sendSimpleN(txt, 716, 2400009);
        if (cm.getPlayerStat("GENDER") == 1) cm.sendSimpleN(txt, 716, 2400010);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                txt ="\r\n";
                txt += "　　　　　#L0# " + Icon[83][1] + " " + Icon[99][1] + " " + Icon[100][1] + " " + Icon[99][1] + " " + Icon[83][1] + "#l\r\n\r\n";
                txt += "　　" + Icon[93][1] + " #r [ 140 ] #g道具分解给予 点卷 　　　　　　每件 10 - 15#k\r\n";
                txt += "　　" + Icon[93][1] + " #r [ 150 ] #g除了 法弗 道具分解给予 点卷 　每件 50 - 100#k\r\n";
                txt += "　　" + Icon[93][1] + " #r [ 150 ] #b法弗 道具分解给予 元宝 　　　 每件 #r 1 -  2#k\r\n";
                txt += "　　" + Icon[93][1] + " #r [ 160 ] #b埃苏 漩涡 特米 分解给予 元宝  每件 #r10 - 20#k\r\n";
                txt += "　　" + Icon[93][1] + " #r [ 160 ] #b最高贝勒德 分解给予 元宝　 　 每件 #r10 - 20#k\r\n";
                if (cm.getPlayerStat("GENDER") == 0) cm.sendSimpleN(txt, 713, 2400009);
                if (cm.getPlayerStat("GENDER") == 1) cm.sendSimpleN(txt, 713, 2400010);
                status = -1;
                break;

            case 1:
                txt = "\r\n";
                txt += "　　　　　 　" + Icon[83][1] + " " + Icon[99][1] + " " + Icon[100][1] + " " + Icon[99][1] + " " + Icon[83][1] + "\r\n\r\n";
                txt += "\t\t　#L0#" + Icon[99][1] + " #r [ 140 ] #g 道具组分解  " + Icon[99][1] + "#l#k\r\n\r\n";
                txt += "\t\t　#L1#" + Icon[99][1] + " #r [ 150 ] #b 道具组分解  " + Icon[99][1] + "#l#k\r\n\r\n\r\n";
                txt += "\t#r温馨提醒 - 法弗分解不给予点卷 - 请在元宝通道分解法弗 \r\n";
                if (cm.getPlayerStat("GENDER") == 0) cm.sendSimpleN(txt, 716, 2400009);
                if (cm.getPlayerStat("GENDER") == 1) cm.sendSimpleN(txt, 716, 2400010);
                break;

            case 2:
                txt = "\r\n";
                txt += "　　　　　 　 " + Icon[83][1] + " " + Icon[99][1] + " " + Icon[100][1] + " " + Icon[99][1] + " " + Icon[83][1] + "\r\n\r\n";
                txt += "\t　#L2#" + Icon[99][1] + " #r [ 150 ] #g 法弗 法弗 法弗 分解  " + Icon[99][1] + "#l#k\r\n";
                txt += "\t　#L3#" + Icon[99][1] + " #r [ 160 ] #b 埃苏 漩涡 特米 分解  " + Icon[99][1] + "#l#k\r\n"; 
                txt += "\t　#L4#" + Icon[99][1] + " #r [ 160 ] #b　 最高贝勒德　 分解  " + Icon[99][1] + "#l#k\r\n\r\n";
                txt += "\t#r温馨提醒 - 除这些以外的道具分解不给予任何点卷或元宝 \r\n";
                if (cm.getPlayerStat("GENDER") == 0) cm.sendSimpleN(txt, 716, 2400009);
                if (cm.getPlayerStat("GENDER") == 1) cm.sendSimpleN(txt, 716, 2400010);
                break;
        }
    } else if (status == 2) {
        var 背包组 = cm.getInventory(1).list();
        枚举背包组 = 背包组.iterator();
        var 临时查询组 = [];
        txt = "\r\n";
        txt += "　　　　　 　" + Icon[83][1] + " " + Icon[99][1] + " " + Icon[100][1] + " " + Icon[99][1] + " " + Icon[83][1] + "\r\n\r\n";
        switch (selection) {
            
            case 0:                /* 140 点卷 */

                while (枚举背包组.hasNext()) {
                    var 道具 = 枚举背包组.next();
                    /*时装排除*/
                    if (cm.isCash(道具.getItemId())) continue;
                    /*级别限制*/
                    if (cm.getReqLevel(道具.getItemId()) < 140 || cm.getReqLevel(道具.getItemId()) >= 150) continue;
                    /* 128 栏目位置溢出暂时屏蔽 */
                    if (道具.getPosition() == 128) continue;
                    /*结果植入临时组*/
                    临时查询组[道具.getPosition()] = 道具.getItemId();
                }
                /*写入寄存道具组*/
                for (var key in 临时查询组) {
                    寄存道具组.push(parseInt(key)); /*写入取整的道具位置到寄存道具组*/
                    txt += "#r" + 格式效验(" ", 22, cm.getItemName(临时查询组[key]).toString());
                    txt += "#b位置 [ " + 格式效验(" ", 3, parseInt(key).toString()) + " ] ";
                    txt += "#g头衔 [ " + 格式效验(" ", 12, cm.getInventory(1).getItem(key).getOwner().toString()) + " ] ";
                    txt += "#v" + 临时查询组[key] + "#";
                    txt += "\r\n";
                }
                /*没有查询到匹配的道具执行返回并结束*/
                if (key == null) {
                    cm.playerMessage(1, "抱歉 你没有这个类型的道具");
                    cm.dispose();
                    return;
                }
                txt += "\t\t#L88#" + Icon[101][1] + "#l";   /*取消*/
                txt += "\t\t\t#L0   #" + Icon[76][1] + "#l";  /*确认*/
                if (cm.getPlayerStat("GENDER") == 0) cm.sendSimpleN(txt, 713, 2400009);
                if (cm.getPlayerStat("GENDER") == 1) cm.sendSimpleN(txt, 713, 2400010);
                break;

            case 1:                /* 150 点卷 */

                while (枚举背包组.hasNext()) {
                    var 道具 = 枚举背包组.next();
                    /*时装排除*/
                    if (cm.isCash(道具.getItemId())) continue;
                    /*级别限制*/
                    if (cm.getReqLevel(道具.getItemId()) < 150 || cm.getReqLevel(道具.getItemId()) >= 160) continue;
                    /*限制法弗*/
                    if (cm.getItemName(道具.getItemId()).indexOf("法弗") == 0 || cm.getItemName(道具.getItemId()).indexOf("最高级贝勒德") == 0) continue;
                    /* 128 栏目位置溢出暂时屏蔽 */
                    if (道具.getPosition() == 128) continue;
                    /*结果植入临时组*/
                    临时查询组[道具.getPosition()] = 道具.getItemId();
                }
                /*写入寄存道具组*/
                for (var key in 临时查询组) {
                    寄存道具组.push(parseInt(key)); /*写入取整的道具位置到寄存道具组*/
                    txt += "#r" + 格式效验(" ", 22, cm.getItemName(临时查询组[key]).toString());
                    txt += "#b位置 [ " + 格式效验(" ", 3, parseInt(key).toString()) + " ] ";
                    txt += "#g头衔 [ " + 格式效验(" ", 12, cm.getInventory(1).getItem(key).getOwner().toString()) + " ] ";
                    txt += "#v" + 临时查询组[key] + "#";
                    txt += "\r\n";
                }
                /*没有查询到匹配的道具执行返回并结束*/
                if (key == null) {
                    cm.playerMessage(1, "抱歉 你没有这个类型的道具");
                    cm.dispose();
                    return;
                }
                txt += "\t\t#L88#" + Icon[101][1] + "#l";   /*取消*/
                txt += "\t\t\t#L0   #" + Icon[76][1] + "#l";  /*确认*/
                if (cm.getPlayerStat("GENDER") == 0) cm.sendSimpleN(txt, 713, 2400009);
                if (cm.getPlayerStat("GENDER") == 1) cm.sendSimpleN(txt, 713, 2400010);
                break;

                /*元宝*/

            case 2:
                while (枚举背包组.hasNext()) {
                    var 道具 = 枚举背包组.next();
                    /*时装排除*/
                    if (cm.isCash(道具.getItemId())) continue;
                    /*级别限制*/
                    if (cm.getReqLevel(道具.getItemId()) != 150) continue;
                    /*限制法弗*/
                    if (cm.getItemName(道具.getItemId()).indexOf("法弗") != 0) continue;
                    /* 128 栏目位置溢出暂时屏蔽 */
                    if (道具.getPosition() == 128) continue;
                    /*结果植入临时组*/
                    临时查询组[道具.getPosition()] = 道具.getItemId();
                }
                /*写入寄存道具组*/
                for (var key in 临时查询组) {
                    寄存道具组.push(parseInt(key)); /*写入取整的道具位置到寄存道具组*/
                    txt += "#r" + 格式效验(" ", 22, cm.getItemName(临时查询组[key]).toString());
                    txt += "#b位置 [ " + 格式效验(" ", 3, parseInt(key).toString()) + " ] ";
                    txt += "#g头衔 [ " + 格式效验(" ", 12, cm.getInventory(1).getItem(key).getOwner().toString()) + " ] ";
                    txt += "#v" + 临时查询组[key] + "#";
                    txt += "\r\n";
                }
                /*没有查询到匹配的道具执行返回并结束*/
                if (key == null) {
                    cm.playerMessage(1, "抱歉 你没有这个类型的道具");
                    cm.dispose();
                    return;
                }
                txt += "\t\t#L88#" + Icon[101][1] + "#l";   /*取消*/
                txt += "\t\t\t#L1   #" + Icon[76][1] + "#l";  /*确认*/
                if (cm.getPlayerStat("GENDER") == 0) cm.sendSimpleN(txt, 713, 2400009);
                if (cm.getPlayerStat("GENDER") == 1) cm.sendSimpleN(txt, 713, 2400010);
                break;

            case 3:
                while (枚举背包组.hasNext()) {
                    var 道具 = 枚举背包组.next();
                    /*时装排除*/
                    if (cm.isCash(道具.getItemId())) continue;
                    /*级别限制*/
                    if (cm.getReqLevel(道具.getItemId()) != 160) continue;
                    /*限制法弗*/
                    if (cm.getItemName(道具.getItemId()).indexOf("埃苏") != 0 && cm.getItemName(道具.getItemId()).indexOf("漩涡") != 0 && cm.getItemName(道具.getItemId()).indexOf("特米") != 0) continue;
                    /* 128 栏目位置溢出暂时屏蔽 */
                    if (道具.getPosition() == 128) continue;
                    /*结果植入临时组*/
                    临时查询组[道具.getPosition()] = 道具.getItemId();
                }
                /*写入寄存道具组*/
                for (var key in 临时查询组) {
                    寄存道具组.push(parseInt(key)); /*写入取整的道具位置到寄存道具组*/
                    txt += "#r" + 格式效验(" ", 22, cm.getItemName(临时查询组[key]).toString());
                    txt += "#b位置 [ " + 格式效验(" ", 3, parseInt(key).toString()) + " ] ";
                    txt += "#g头衔 [ " + 格式效验(" ", 12, cm.getInventory(1).getItem(key).getOwner().toString()) + " ] ";
                    txt += "#v" + 临时查询组[key] + "#";
                    txt += "\r\n";
                }
                /*没有查询到匹配的道具执行返回并结束*/
                if (key == null) {
                    cm.playerMessage(1, "抱歉 你没有这个类型的道具");
                    cm.dispose();
                    return;
                }
                txt += "\t\t#L88#" + Icon[101][1] + "#l";   /*取消*/
                txt += "\t\t\t#L1   #" + Icon[76][1] + "#l";  /*确认*/
                if (cm.getPlayerStat("GENDER") == 0) cm.sendSimpleN(txt, 713, 2400009);
                if (cm.getPlayerStat("GENDER") == 1) cm.sendSimpleN(txt, 713, 2400010);
                break;

            case 4:
                while (枚举背包组.hasNext()) {
                    var 道具 = 枚举背包组.next();
                    /*时装排除*/
                    if (cm.isCash(道具.getItemId())) continue;
                    /*级别限制*/
                    if (cm.getReqLevel(道具.getItemId()) != 150) continue;
                    /*限制法弗*/
                    if (cm.getItemName(道具.getItemId()).indexOf("最高级贝勒") != 0) continue;
                    /* 128 栏目位置溢出暂时屏蔽 */
                    if (道具.getPosition() == 128) continue;
                    /*结果植入临时组*/
                    临时查询组[道具.getPosition()] = 道具.getItemId();
                }
                /*写入寄存道具组*/
                for (var key in 临时查询组) {
                    寄存道具组.push(parseInt(key)); /*写入取整的道具位置到寄存道具组*/
                    txt += "#r" + 格式效验(" ", 22, cm.getItemName(临时查询组[key]).toString());
                    txt += "#b位置 [ " + 格式效验(" ", 3, parseInt(key).toString()) + " ] ";
                    txt += "#g头衔 [ " + 格式效验(" ", 12, cm.getInventory(1).getItem(key).getOwner().toString()) + " ] ";
                    txt += "#v" + 临时查询组[key] + "#";
                    txt += "\r\n";
                }
                /*没有查询到匹配的道具执行返回并结束*/
                if (key == null) {
                    cm.playerMessage(1, "抱歉 你没有这个类型的道具");
                    cm.dispose();
                    return;
                }
                txt += "\t\t#L88#" + Icon[101][1] + "#l";   /*取消*/
                txt += "\t\t\t#L1   #" + Icon[76][1] + "#l";  /*确认*/
                if (cm.getPlayerStat("GENDER") == 0) cm.sendSimpleN(txt, 713, 2400009);
                if (cm.getPlayerStat("GENDER") == 1) cm.sendSimpleN(txt, 713, 2400010);
                break;

        }
    } else if (status == 3) {
        if (selection == 88) {
            cm.dispose();
            return;
        }
        var 点卷总合 = 0;
        var 元宝总合 = 0;
            switch (selection) {
                case 0:
                    for (var i = 0; i < 寄存道具组.length; i++) {
                        点卷 = 道具点卷(寄存道具组[i]);
                        cm.getPlayer().dropSpouseMessage(1, "分解结果 - " + 格式效验(" ", 25, cm.getItemName(cm.getInventory(1).getItem(寄存道具组[i]).getItemId()).toString()) + "\t" + " 点卷数量 " + 点卷 );
                        点卷总合 = 点卷总合 + 点卷;
                        cm.removeSlot(1, 寄存道具组[i], 1);
                    }
                    cm.gainNX(1, 点卷总合);
                    cm.playerMessage(1, "\r\n\r\n恭喜你 - 分解结束\r\n\r\n　　分解数量 - " + 格式效验(" ", 10, parseInt(i).toString()) + "\r\n\r\n　　点卷总合 - " + 格式效验(" ", 10, parseInt(点卷总合).toString()) + "\r\n\r\n");
                    cm.dispose();
                    break;

                    /*元宝*/
                case 1:
                    for (var i = 0; i < 寄存道具组.length; i++) {
                        元宝 = 道具元宝(cm.getInventory(1).getItem(寄存道具组[i]).getItemId());
                        cm.getPlayer().dropSpouseMessage(1, "分解结果 - " + 格式效验(" ", 25, cm.getItemName(cm.getInventory(1).getItem(寄存道具组[i]).getItemId()).toString()) + "\t" + " 元宝数量 " + 元宝);
                        元宝总合 = 元宝总合 + 元宝;
                        cm.removeSlot(1, 寄存道具组[i], 1);
                    }
                    递增元宝(元宝总合);
                    cm.playerMessage(1, "\r\n\r\n恭喜你 - 分解结束\r\n\r\n　　分解数量 - " + 格式效验(" ", 10, parseInt(i).toString()) + "\r\n\r\n　　元宝总合 - " + 格式效验(" ", 10, parseInt(元宝总合).toString()) + "\r\n\r\n");
                    cm.dispose();
                    break;
            }

        cm.dispose();
    }
}

function 道具点卷(位置) {
    var 级别 = cm.getReqLevel(cm.getInventory(1).getItem(位置).getItemId());
    switch (级别) {
        case 140: case 141: case 142: case 143: case 144: case 145: case 146: case 147: case 148: case 149:
            return 随机值(10, 15);
            break;
        case 150: case 151: case 152: case 153: case 154: case 155: case 156: case 157: case 158: case 159:
            return 随机值(50, 100);
            break;
    }
}

function 道具元宝(道具) {
    if (cm.getItemName(道具).indexOf("法弗") == 0) var 设置 = 0; 
    if (cm.getItemName(道具).indexOf("埃苏") == 0 || cm.getItemName(道具).indexOf("特米") == 0 || cm.getItemName(道具).indexOf("漩涡") == 0) var 设置 = 1; 
    if (cm.getItemName(道具).indexOf("最高级贝勒") == 0) var 设置 = 2; 
    switch (设置) {
        case 0:
            return 随机值(1, 2);
            break;
        case 1:
            return 随机值(10, 20);
            break;
        case 2:
            return 随机值(10, 20);
            break;
    }
}

function 递增元宝(count) {
    cm.sql_Update("update hypay set pay =? where accname = ?", cm.getHyPay(1) + count, cm.getAccountName());
}

function 随机值(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range);
    return num;
}



var 格式效验 = function FormatString(c, length, content) {
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