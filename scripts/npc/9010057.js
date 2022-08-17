/*
Care - 脚本调整 - 
脚本定制 仿制脚本 
唯一方式 50009219
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
    Array("数值", "#fUI/Basic/LevelNo/1#"),
    Array("数值", "#fUI/Basic/LevelNo/2#"),
    Array("数值", "#fUI/Basic/LevelNo/3#")
);
var txt, 元宝, 级别, 限制, Sel, 数组寄存 = [], 数组检测;
元宝 = 0, 级别 = 1, 限制 = 50;
var 职业群 = [
    //[0, "战士", 112]		//英雄
	//[0, "战士", 122]		//圣骑士
    //[0, "战士", 132]		//黑骑士
	//[0, "战士", 1112]		//魂骑士
	//[0, "战士", 2112]		//战神
	//[0, "战士", 3112]		//恶魔猎手
	//[0, "战士", 3122]		//恶魔复仇者
    //[0, "战士", 3712]		//爆破手
	//[0, "战士", 4112]		//剑豪
	//[0, "战士", 5112]		//米哈尔
	//[0, "战士", 6112]		//狂龙战士
	//[0, "战士", 10112]		//神之子
	//[0, "战士", 15112]		//御剑骑士
    //[0, "法师", 212]		//火毒魔导师
	//[0, "法师", 222]		//冰雷魔导师
	//[0, "法师", 232]		//主教
	//[0, "法师", 1212]		//炎术士
	//[0, "法师", 2217]		//龙神
    //[0, "法师", 2712]		//夜光法师
	//[0, "法师", 3212]		//幻灵斗师
	//[0, "法师", 4212]		//阴阳师
	//[0, "法师", 11212]		//林之灵
	//[0, "弓手", 312]		//神射手
    //[0, "弓手", 322]		//箭神
	//[0, "弓手", 1312]		//风灵使者
	//[0, "弓手", 2312]		//双弩精灵
    //[0, "弓手", 3312]		//豹弩游侠
	//[0, "飞侠", 412]		//隐士
	//[0, "飞侠", 422]		//侠盗
	//[0, "飞侠", 434]		//暗影双刀
	//[0, "飞侠", 1412]		//夜行者
	//[0, "飞侠", 2412]		//幻影
	//[0, "飞侠", 16412]		//虎影
	//[0, "海盗", 512]		//冲锋队长
	//[0, "海盗", 522]		//船长
	//[0, "海盗", 532]		//神炮王
	//[0, "海盗", 572]		//龙的传人
	//[0, "海盗", 1512]		//奇袭者
	//[0, "海盗", 2512]		//隐月
	//[0, "海盗", 3512]		//机械师
	//[0, "海盗", 3612]		//尖兵
	//[0, "海盗", 6512]		//爆莉萌天使
    //[0, "海盗", 15512]		//影魂异人
];
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
        }
        switch (status) {
            case 0:
                txt = "#d\t\t\t\t   " + Icon[8][1] + " 血蓝重置 " + Icon[8][1] + "\r\n\r\n";
                txt += " #b\t\t\t\t    重置说明信息\r\n";
                txt += " 　#d" + Series(1) + "　功能使用后将重置等级 重置为 [ 275级 ]\r\n";
                txt += " 　#d" + Series(2) + "　功能使用后将重置所有技能\r\n";
				txt += " 　#d" + Series(3) + "　请选择当前职业，否则后果自负\r\n";
                txt += " #b\t\t\t\t    重置注意事项\r\n";
                txt += " 　#d" + Series(4) + "　需消耗 #r" + format(" ", 4, (cm.getEventCount("血蓝重置", 1) * 1 > 0 ? cm.getEventCount("血蓝重置", 1) * 1 : "1").toString()) + "#d 金币\r\n";
                txt += " 　#d" + Series(5) + "　需等级 #d" + format(" ", 4, 级别.toString()) + "#d 级别\r\n";
                txt += " #b\t\t\t\t    玩家个人信息\r\n";
                txt += " 　#d" + Series(6) + "　等　级 #b" + format(" ", 4, cm.getLevel().toString()) + "\r\n";
                txt += " 　#d" + Series(7) + "　职　业 #b" + format(" ", 4, cm.getJobName(cm.getJob()).toString()) + "\r\n";
                txt += " 　#d" + Series(8) + "　已重置 #b" + format(" ", 4, cm.getEventCount("血蓝重置", 1).toString()) + "次\r\n\r\n";
                txt += "#b\t 如上列都已满足请选择你当前的职业进行重置血蓝 #k\r\n\r\n";
                for (var i in 职业群) {
                    txt += "#r#L" + i + "# " + Icon[48][1] + "  [ #d" + 职业群[i][1] + "#r ] 选当前职业 否则后果自负 #b" + cm.getJobName(职业群[i][2]) + "#l#k\r\n";
                }
                txt += " ";
                cm.sendSimpleS(txt, 2);
                break;

            case 1:
                Sel = selection;
                txt = "#d\t  如果你选的不是你现在的职业，出错后果自负！\r\n\r\n";
                txt += "#b\t\t 你确定你的当前职业是 #d" + 职业群[Sel][1] + " #r" + cm.getJobName(职业群[Sel][2]) + "#b 吗？#b\r\n\r\n";
                txt += "\r\n#b\t\t\t\t 确认选是，取消选否！\r\n";
                cm.sendYesNoS(txt, 2);
                break;
            case 2:
                if (cm.getPlayer().getLevel() < 级别) {
                    cm.sendOk("抱歉 级别不够 重置需要 " + 级别);
                    cm.dispose();
                    return;
                }
                if (cm.getEventCount("血蓝重置", 1) * 1 > 0) {
                    if (cm.getMeso() < cm.getEventCount("血蓝重置", 1) * 1) {
                        cm.sendOk("抱歉 你没有 " + (cm.getEventCount("血蓝重置", 1) * 1) + " 金币");
                        cm.dispose();
                        return;
                    }
                }
                if (cm.getEventCount("血蓝重置", 1) > 限制) {
                    cm.sendOk("抱歉，重置次数过多");
                    cm.dispose();
                    return;
                }

                if (数组检测 != 0) {
                    cm.getPlayer().setSubcategory(数组检测)
                } else {
                    cm.getPlayer().setSubcategory(数组检测)
                }
                if (cm.getEventCount("血蓝重置", 1) * 1 > 0) {
                    cm.gainMeso(-cm.getEventCount("血蓝重置", 1) * 1);
                }
                ExpUP();
                //cm.worldBrodcastEffect(5121015, "[ 转生中心 ]" + " : " + "恭喜 " + cm.getPlayer().getName() + " 玩家 已进行了 " + cm.getEventCount("血蓝重置", 1) + " 次转生 证明了自己", 10000);
                for (var i = 0; i < 3; i++) {
                    cm.worldSpouseMessage(13, "[ 血蓝重置 ]" + " : " + "玩家 " + cm.getPlayer().getName() + " 进行了血蓝重置！！！");
                }
                cm.dropMessage(1, "恭喜您\r\n\r\n重置成功");
                cm.dispose();
                break;
        }
    }
}

var format = function FormatString(c, length, content) {//符号 位置 代码 - 文本类型 .toString()
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
function ExpUP() {
    var 四维 = cm.getPlayer().getStat();
    cm.getPlayer().setRemainingAp(40);
    四维.setStr(4, cm.getPlayer());
    四维.setDex(4, cm.getPlayer());
    四维.setInt(4, cm.getPlayer());
    四维.setLuk(4, cm.getPlayer());
    四维.recalcLocalStats(cm.getPlayer());
    四维.setMaxHp(100, cm.getPlayer());
    四维.setMaxMp(100, cm.getPlayer());
    cm.clearSkills();
    cm.getPlayer().setLevel(10);
    cm.getPlayer().levelUp();
    cm.gainExp(2000000000000000);
    cm.changeJob(职业群[Sel][2]);
    cm.setEventCount("血蓝重置");
}
function Series(int) {
    return "#fUI/Basic/LevelNo/" + int + "#";
}
