/*
Care - 脚本调整 - 
脚本定制 仿制脚本 
唯一方式 381991414

*/
var txt;
var aaa1 = "#i3801316#"
var aaa2 = "#i3801315#"
var aaa3 = "#i3801314#"
var aaa4 = "#i3801317#"
var aaa5 = "#i3801312#"
var z = "#fEffect/CharacterEff/1112905/0/1#";//"+z+"//美化
var tz12 = "#fEffect/CharacterEff/1112924/0/0#";  //黄星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#";  //蓝星
var tz14 = "#fEffect/CharacterEff/1112926/0/0#";  //红星
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
    Array("黄鸭", "#fEffect/ItemEff/1004122/effect/default/8#")
);
/*------------------------------------------------------------*/
var npcid = Array(1530635, 1530636, 1530637, 1530638);
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
            if (cm.getMapId() == 180000001 || cm.getMapId() == 180000100) {
                cm.playerMessage(1, "很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.");
                cm.dispose();
                return;
            }
            txt = "#fs15##fn宋体#   " + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + cm.getServerName() + "" + tz14 + "" + tz13 + "" + tz12 + "" + tz14 + "" + tz13 + "" + tz12 + "\r\n#fs12##fn宋体#";
            txt += "#d#L0#"+aaa2+"回埃欧蕾#l#L3#"+aaa3+"万能传送#l#L2#"+aaa1+"我的账户#l#L4#"+aaa5+"爆死挑战#l\r\n";
            txt += "#d#L5#"+aaa2+"综合商店#l#L19#"+aaa3+"日常任务#l#L22#"+aaa1+"快速转职#l#L10099#"+aaa5+"爆死次数#l\r\n";
            txt += "#d#L21#"+aaa2+"游戏排行#l#L25#"+aaa3+"师徒系统#l#L100#"+aaa1+"我的仓库#l#L7#"+aaa5+"一键回收#l\r\n";
			txt += "#d#L11#"+aaa2+"查看爆率#l#L8#"+aaa3+"删除物品#l#L24#"+aaa1+"战力系统#l#L12#"+aaa5+"新人中心#l\r\n";
			txt += "#d#L26#"+aaa2+"月光跑环#l#L999#"+aaa3+"破攻中心#l#L1000#"+aaa1+"进入商城#l#L10086#"+aaa5+"赞助礼包#l\r\n";
			txt += "#d#L1001#"+aaa2+"无尽之塔#l#L115#"+aaa3+"点券抽奖#l#L105#"+aaa1+"职业转换#l#L106#"+aaa5+"休闲功能#l\r\n";
			txt += "#d#L107#"+aaa2+"时装升星#l#L108#"+aaa3+"首充礼包#l#L1#"+aaa1+"怪怪系统#l#L116#"+aaa5+"每日任务#l\r\n";
			txt += "#d#L112#"+aaa2+"理财办理#l#L113#"+aaa3+"会员办理#l#L888#"+aaa1+"破攻转移#l#L114#"+aaa5+"每日寻宝#l\r\n";
			txt += "\r\n  " + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "\r\n"
            cm.sendSimpleS(txt, 2);
    } else if (status == 1) {
        switch (selection) {
            case 0: // 返回市场
                if (cm.getPlayer().getMapId() >= 101050000 && cm.getPlayer().getMapId() <= 101050000) {
                    cm.sendOk("#fs28##fn方正舒体##b你难道不在埃欧蕾吗？", npcid[Math.floor(Math.random() * npcid.length)]);
                } else {
                    cm.saveReturnLocation("FREE_MARKET");
                    cm.warp(101050000);
                }
                cm.dispose();
                break;
			case 10086:
				cm.dispose();
				cm.openNpc(9310070,"czjl");
				break;
			case 10099:
				cm.dispose();
				cm.openNpc(9310382);
				break;
			case 888:
				cm.dispose();
				cm.openNpc(9310022,"破攻转移");
				break;
			case 100:
				cm.dispose();
				cm.openNpc(9401159);
				break;
			case 109:
				cm.dispose();
				cm.openNpc(9310022);
				break;
			case 116:
				cm.dispose();
				cm.openNpc(9310382,"终极日常任务");
				break;
			case 106:
				cm.dispose();
				cm.openNpc(9310382,"电影休闲");
				break;
			case 115:
				cm.dispose();
				cm.openNpc(9310472,"点券抽奖");
				break;
			case 112:
				cm.dispose();
				cm.openNpc(9310382,"理财");
				break;
			case 114:
				cm.dispose();
				cm.openNpc(9401082,"每日寻宝");
				break;
			case 113:
				cm.dispose();
				cm.openNpc(9310382,"真牛VIP");
				break;
			case 107:
				cm.dispose();
				cm.openNpc(9310382,"时装升星");
				break;
			case 108:
				cm.dispose();
				cm.openNpc(9310382,"bdsc");
				break;
			case 105:
				cm.dispose();
				cm.openNpc(9310382,"bdzz");
				break;
			case 110:
				cm.dispose();
				cm.openNpc(9310378,"bdpm");
				break;
            case 1: // 怪怪系统
                cm.openUI(0x254);//怪怪卡
                cm.dispose()
				break;
            case 2: // 我的账户
                cm.dispose();
                cm.openNpc(1530635, 2);
                break;
            case 3: // 万能传送
                cm.dispose();
                cm.openNpc(1530635,1);
                break;
            case 4://  BOSS挑战
                cm.dispose();
                cm.openNpc(3003771);
                break;
            case 5: //  杂货店
                cm.dispose();
                cm.openNpc(1530635,"综合商店");
                break;
            case 6: //  福利中心
                cm.dispose();
                cm.openNpc(9900005);
                break;
            case 7: //  商城购物
                cm.dispose();
                cm.openNpc(9401083,"一键回收");
                break;
            case 8: //  物品回收
                cm.dispose();
                cm.openNpc(1530635,"背包清理");
                break;
            case 9:  //  休闲中心
                cm.dispose();
                cm.openNpc(9900005, 7);
                break;
            case 10: //  管理中心
                cm.dispose();
                cm.openNpc(9900003, "guanlizhongxin");
                break;
            case 11: //  爆率查询
                cm.dispose();
                cm.openNpc(1530635, 6);
                break;
            case 12: //  新手必点
				cm.dispose();
                cm.openNpc(1530635 , 13);
                break;
            case 13: //  中介服务
                cm.dispose();
                cm.openNpc(9310362, "41");
                break;
            case 14: //  学习技能
                cm.dispose();
                cm.openNpc(9900003, "xuegoujineng");
                break;
            case 15: //  充值中心
                cm.sendOk(payStr);
                cm.dispose();
                break;
            case 16: //  破功中心
                cm.dispose();
                cm.openNpc(9900005, 11);
                break;
            case 17: //  兑换中心
                cm.dispose();
                cm.openNpc(9000041);
                break;
            case 18:
                cm.dispose();
                cm.openNpc(9401082,"幸运赌博");
                break;
            case 19:
                cm.dispose();
                cm.openNpc(1530635, "日常任务");
                break;
            case 20:
                cm.dispose();
                cm.openNpc(9300011, 1);
                break;
            case 21:
                cm.dispose();
                cm.openNpc(1540008);
                break;
			case 22:
                cm.dispose();
				cm.openNpc(1530635, "changeJob");
                break;	
			case 24:
                cm.dispose();
				cm.openNpc(1530635, "战斗力系统");
                break;
			case 25:
                cm.dispose();
				cm.openNpc(1530635,"bsxt");
                break;
			case 26:
                cm.dispose();
				cm.openNpc(9062130,"月光跑跑乐");
                break;	
			case 27:
                cm.dispose();
				cm.openNpc(2470018, "fbfd");
                break;					
            case 1000:
                cm.dispose();
                cm.enterCS();
                break;
            case 1001:
                cm.dispose();
				cm.warp(800021116);
                break;
            case 999:
				cm.dispose();
                cm.openNpc(9110010,"一键突破");
                break;


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