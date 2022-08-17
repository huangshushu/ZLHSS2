/*
 *  
 *  功能：冒险联盟帮助
 *  
 */

/* global cm */

var status = -1;
var sel = -1;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case - 1://结束对话
            cm.dispose();
            return;
        case 0://上一步
            status--;
            break;
        case 1://下一步
            status++;
            break;
    }
    switch (status) {
        case 0:
            cm.askMenu("你说想要了解有关#b冒险岛联盟#k的情况？\r\n有什么需要我告诉你的吗？\r\n#L0# #b什么是冒险岛联盟？#k#l\r\n#L1# #b联盟等级#k#l\r\n#L2# #b联盟级别#k#l\r\n#L3# #b攻击队和战斗力#k#l\r\n#L4# #b战斗地图和角色积木#k#l\r\n#L5# #b联盟突袭#k#l\r\n\r\n#L100# #e不再听取说明。#n#l\r\n");
            break;
        case 1:
            sel = selection;
            switch (sel) {
                case 0:
                    cm.sendNext("#e<什么是冒险岛联盟？>#n\r\n\r\n#e冒险岛联盟#n指的是#b同一个世界内角色之间的组织#k。\r\n但并不是所有角色都能隶属于#b冒险岛联盟#k。\r\n#r必须是角色等级在60级以上/完成2转的角色#k才行。\r\n还有，#r相同世界内如果有超出40个角色#k，会以#b角色等级排名为基准，只有前40名#k会被认可为隶属于冒险岛联盟。\r\n\r\n另外#b神之子#k方面，#r只有130级以上等级最高的1个角色#k会被认可为隶属于冒险岛联盟。");
                    break;
                case 1:
                    cm.sendNext("#e<联盟等级>#n\r\n\r\n#e联盟等级#n指的是隶属于#b冒险岛联盟#k角色的\r\n#r等级合计值#k。\r\n\r\n只有联盟等级够高，才能够#r升级#k到更高的#b联盟级别#k，打造更加强大的冒险岛联盟。\r\n\r\n#b联盟等级排名#k也可以在官网主页上查看。");
                    break;
                case 2:
                    cm.askMenu("#e<联盟级别>#n\r\n\r\n#e联盟级别#n是当#b联盟等级#k达到特定数值时，可以提升的一种#b成长尺度#k。\r\n\r\n#b联盟级别#k越高，就能够在#r更为广阔的战斗地图#k上配置#r更多的攻击队队员#k。\r\n将#b联盟等级#k#b升级#k到一定水准时，需要支付#b#i4310229:##t4310229##k。\r\n\r\n#L1# #b查看各级别所需等级/支付联盟币/攻击队队员人数#k#l");
                    break;
                case 3:
                    cm.sendNext("#e<攻击队和战斗力>#n\r\n\r\n所谓#b攻击队#k，指的是联盟角色中，#b分配到战斗地图上的角色组织#k。\r\n\r\n成为#b攻击队队员#k的角色会参加#r联盟突袭#k，与强大的敌人展开战斗，并收集#b联盟币#k。\r\n\r\n另外攻击队队员还会触发角色固定的#b<攻击队队员效果>#k和战斗地图占领状态所产生的#b<攻击队占领效果>#k，对#r世界内所有角色#k带来#b能力值提升效果#k。");
                    break;
                case 4:
                    cm.sendNext("#e<战斗地图和角色积木>#n\r\n\r\n#b战斗地图#k是一种可以分配#r攻击队队员#k占领的地图，#b内部8个#k、#r外部8个#k，#e总共由16个地区#n组成。\r\n每个地区都拥有#b固定的能力值#k，根据各地区的#r占领格数#k，能力值也会有所提升。\r\n\r\n#b内部8个地区的能力值#k可以按照需求#b进行更改#k\r\n#r外部8个地区的能力值#k是固定的。");
                    break;
                case 5:
                    cm.sendNext("#e<联盟突袭>#n\r\n\r\n#b联盟突袭#k是#b攻击队队员#k们进行的一种#r战斗玩法#k。\r\n\r\n隶属于攻击队的角色通过点击联盟UI的#e<参加战斗>按钮#n可以入场。\r\n进入突袭之后，#b攻击队队员#k们就会认真地展开战斗。");
                    break;
                default:
                    cm.dispose();
            }
            break;
        case 2:
            switch (sel) {
                case 0:
                    cm.sendNextPrev("#e<什么是冒险岛联盟？>#n\r\n\r\n隶属于#e冒险岛联盟#n的角色会根据#r等级#k的提升，而提升#b角色级别#k。\r\n\r\n#e<普通角色>#n\r\n#b#eB(60)>A(100)>S(140)>SS(200)>SSS (250)#n#k\r\n#e<神之子>#n\r\n#b#eB(130)>A(160)>S(180)>SS(200)>SSS (250)#n#k");
                    break;
                case 2:
                    cm.sendNextPrev("#e<新手联盟>#n\r\n\r\n  -#e第1阶段#n #bLv.500#k     #r所需联盟币：无#k     #b攻击队队员：9人#k#n\r\n  -#e第2阶段#n #bLv.1000#k   #r所需联盟币：120个#k   #b攻击队队员：10人#k\r\n  -#e第3阶段#n #bLv.1500#k   #r所需联盟币：140个#k   #b攻击队队员：11人#k\r\n  -#e第4阶段#n #bLv.2000#k   #r所需联盟币：150个#k   #b攻击队队员：12人#k\r\n  -#e第5阶段#n #bLv.2500#k   #r所需联盟币：160个#k   #b攻击队队员：13人#k");
                    break;
                case 3:
                    cm.sendNextPrev("#e<攻击队和战斗力>#n\r\n\r\n#b战斗力#k根据角色的#r等级#k和#r星之力数值#k而决定。\r\n\r\n特别是#b攻击队队员#k的战斗力总和就是#b攻击队的战斗力#k，所以#b攻击队战斗力#k越高，才能在#r联盟突袭#k中对敌人带来更大的伤害，并更快地收集联盟币。");
                    break;
                case 4:
                    cm.sendNextPrev("#e<战斗地图和角色积木>#n\r\n\r\n将角色#e拖拽#n至#b战斗地图#k上，角色就会显示为#b积木#k，并占据一部分#b战斗地图#k。\r\n\r\n#e角色积木#n会根据#b等级#k和#b职业种类#k，以#b原有角色积木#k为中心成长，形状也会各不相同。");
                    break;
                case 5:
                    cm.sendNextPrev("#e<联盟突袭>#n\r\n\r\n#b联盟突袭#k中，大体上会出现#b两种怪物#k。\r\n\r\n#e第一种#n是位于战场中央的#b巨龙#k，\r\n#b攻击队队员#k会自动对中央的巨龙发起攻击。\r\n\r\n#r直接参与战斗的角色#k也可以攻击#b巨龙#k。\r\n但是当#r巨龙#kHP中的#b绿色进度条#k为空时，就会形成一道#b保护膜#k，直接参与的角色攻击将不被应用，只会#b应用剩下的攻击队队员的伤害#k。\r\n\r\n即便攻击队队员#b没有直接参加战斗#k，和巨龙的战斗#b依然会持续进行#k，还是可以收集#b联盟币#k的。\r\n\r\n#b联盟币#k会在从突袭中#r离开时进行清算#k，所以最好是#b周期性地进来#k回收攻击队队员收集到的联盟币。");
                    break;
                default:
                    cm.dispose();
            }
            break;
        case 3:
            switch (sel) {
                case 2:
                    cm.sendNextPrev("#e<资深联盟>#n\r\n\r\n  -#e第1阶段#n #bLv.3000#k   #r所需联盟币：170个#k   #b攻击队队员：18人#k#n\r\n  -#e第2阶段#n #bLv.3500#k   #r所需联盟币：430个#k   #b攻击队队员：19人#k\r\n  -#e第3阶段#n #bLv.4000#k   #r所需联盟币：450个#k   #b攻击队队员：20人#k\r\n  -#e第4阶段#n #bLv.4500#k   #r所需联盟币：470个#k   #b攻击队队员：21人#k\r\n  -#e第5阶段#n #bLv.5000#k   #r所需联盟币：490个#k   #b攻击队队员：22人#k");
                    break;
                case 4:
                    cm.sendNextPrev("#e<战斗地图和角色积木>#n\r\n\r\n第一次将角色配置在#b战斗地图#k上时，#r原有的角色积木#k一定要包含在#b中央四个地方之一#k。\r\n\r\n接下来才可以继续配置其他角色，让角色积木互相碰触或重叠，还可以#b翻转或转动#k角色积木，改变成自己想要的形状，#b通过点击鼠标右键还可以解除#k。");
                    break;
                case 5:
                    cm.sendNextPrev("#e<联盟突袭>#n\r\n\r\n#e第二种#n是保护巨龙的#b迷你龙#k。\r\n\r\n这些家伙只会被#r直接参加战斗的角色#k攻击到，可以击败这些家伙，进行#b每日任务#k。\r\n在对付迷你龙的过程中，偶尔还会出现稀有的#b黄金飞龙#k。");
                    break;
                default:
                    cm.dispose();
            }
            break;
        case 4:
            switch (sel) {
                case 2:
                    cm.sendNextPrev("#e<大师联盟>#n\r\n\r\n  -#e第1阶段#n #bLv.5500#k   #r所需联盟币： 510个#k   #b攻击队队员：27人#k#n\r\n  -#e第2阶段#n #bLv.6000#k   #r所需联盟币： 930个#k   #b攻击队队员：28人#k\r\n  -#e第3阶段#n #bLv.6500#k   #r所需联盟币： 960个#k   #b攻击队队员：29人#k\r\n  -#e第4阶段#n #bLv.7000#k   #r所需联盟币：1000个#k   #b攻击队队员：30人#k\r\n  -#e第5阶段#n #bLv.7500#k   #r所需联盟币：1030个#k   #b攻击队队员：31人#k");
                    break;
                case 5:
                    cm.sendNextPrev("#e<联盟突袭>#n\r\n\r\n每当对#b巨龙#k造成的累积伤害达到#e1000亿#n时，就会获得一个#b联盟币#k。\r\n累积伤害会以#b每天为单位进行初始化#k。\r\n\r\n不同联盟级别都存在不同的#r极限值#k，当达到极限时，联盟币就不会再叠加，所以最好还是每天都确认一下吧？");
                    break;
                default:
                    cm.dispose();
            }
            break;
        case 5:
            switch (sel) {
                case 2:
                    cm.sendNextPrev("#e<大宗师联盟>#n\r\n\r\n  -#e第1阶段#n #bLv.8000#k   #r所需联盟币：1060个#k   #b攻击队队员：36人#k#n\r\n  -#e第2阶段#n #bLv.8500#k   #r所需联盟币：2200个#k   #b攻击队队员：37人#k\r\n  -#e第3阶段#n #bLv.9000#k   #r所需联盟币：2300个#k   #b攻击队队员：38人#k\r\n  -#e第4阶段#n #bLv.9500#k   #r所需联盟币：2350个#k   #b攻击队队员：39人#k\r\n  -#e第5阶段#n #bLv.10000#k  #r所需联盟币：2400个#k   #b攻击队队员：40人#k");
                    break;
                default:
                    cm.dispose();
            }
            break;
        default:
            cm.dispose();
            break;
    }
}


