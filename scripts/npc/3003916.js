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
    Array("红心", "#fEffect/CharacterEff/1112905/0/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/1#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/2#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/3#"),
    Array("淘居", "#fEffect/ItemEff/1102877/effect/default/0#")
    );

/*var Care = [75, 75, 76, 79, 80, 81, 82];
var Push;
var txt;

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
            txt = "\t\t　#b " + Icon[73][1] + " #r#e  我要变强  #n#b " + Icon[Care[Math.floor(Math.random() * Care.length)]][1] + " #k\r\n";
            txt += Icon[65][1];
            for (var i = 0; i <= 22; i++) {
                txt += Icon[66][1];
            };
            txt += Icon[67][1] + "\r\n"; */

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

            txt = "\t\t 	   #b  #r#e ☆☆装备进阶☆☆ #n#b  #k\r\n";
            txt += Icon[62][1];
            for (var i = 0; i <= 95; i++) {
                txt += Icon[63][1];
            };
            txt += Icon[64][1];// + "\r\n";
			
            //txt += "\t\t\t#r#e#L99#" + Icon[15][1] + " 新 手 神 器 戒 指 #l#k#n　\r\n\r\n";
		/*
            txt += "#b#L0#" + Icon[15][1] + " 军衔系统#l　#L1#" + Icon[15][1] + " 时装升星#l  #L2#" + Icon[15][1] + " 强化系统#l\r\n";//　
            txt += "#b#L15#" + Icon[15][1] + " 图腾合成#l　#L10#" + Icon[15][1] + " 星岩镶嵌#l　#L11#" + Icon[15][1] + " 翅膀进化#l\r\n";
            //txt += "#b#L6#" + Icon[15][1] + " 神秘徽章#l　#L14#" + Icon[15][1] + " 道具清理#l　#L8#" + Icon[15][1] + " 银河强化#l\r\n";
			txt += "#b#L13#" + Icon[15][1] + " 意志盒子#l　#L91#" + Icon[15][1] + " 装备制作#l　#L5#" + Icon[15][1] + " 装备分解#l\r\n";
			txt += "#b#L90#" + Icon[15][1] + " 段数药水#l　#L9#" + Icon[15][1] + " 联盟任务#l　#L92#" + Icon[15][1] + " 解锁口袋#l\r\n";
			//txt += "#b#L15#" + Icon[15][1] + " 图腾合成#l　#L13#" + Icon[15][1] + " 意志盒子#l　#L14#" + Icon[15][1] + " 道具清理#l\r\n";
			//txt += "\t\t\t\t#r#e#L70#" + Icon[15][1] + "透明披风强化 #l　\r\n";
			txt +="#L100#" + Icon[15][1] + " 分解魔方#l　#L7#" + Icon[15][1] + " 洗血洗蓝 #l　　#L711#" + Icon[15][1] + " 武器强化 #l　\r\n\r\n";
            //txt += "\t\t#r#L12#" + Icon[78][1] + "#i1202023##i1202027##i1202031#装备传承中心 " + Icon[78][1] + "#l#k\r\n";
			*/
			txt +="\r\n"
			txt +="#L10#" + Icon[52][1] + " 星岩镶嵌#l #L11#" + Icon[52][1] + " 翅膀进阶#l #L6#" + Icon[52][1] + " 银河强化#l\r\n\r\n";
			//txt +="#L0#" + Icon[52][1] + " 戒指强化#l #L1#" + Icon[52][1] + " 徽章强化#l #L2#" + Icon[52][1] + " 神秘强化#l\r\n\r\n";
			txt +="#L101#" + Icon[52][1] + " 名聊戒指#l #L0#" + Icon[52][1] + " 戒指强化#l #L2#" + Icon[52][1] + " 神秘强化#l\r\n\r\n";
		    txt +="#L4#" + Icon[52][1] + " 纹章强化#l #L5#" + Icon[52][1] + " 勋章强化#l #L7#" + Icon[52][1] + " 时装觉醒#l\r\n\r\n";
			//txt +="#L6#" + Icon[52][1] + " 银河强化#l #L7#" + Icon[52][1] + " 时装觉醒#l\r\n\r\n";
			txt +="\r\n"
            txt += Icon[62][1];
            for (var i = 0; i <= 95; i++) {
                txt += Icon[63][1];
            };
            txt += Icon[64][1];// + "\r\n";
			
			/*txt += Icon[65][1];
            for (var i = 0; i <= 22; i++) {
                txt += Icon[66][1];
            };
            txt += Icon[67][1];*/
            cm.sendSimpleS(txt, 2);
        } else if (status == 1) {
            switch (selection) {
                case 0:
                    cm.dispose();
                    cm.openNpc(2012012);
                    break;
                case 111:
                    cm.dispose();
                    cm.openNpc(3003366);
                    break;
                case 711:
                    cm.dispose();
                    cm.openNpc(9900000,"武器强化");
                    break;
                case 100:
                    cm.dispose();
                    cm.openNpc(9201083);
                    break;
                case 70:
                    cm.dispose();
                    cm.openNpc(1500032,"透明披风强化");
                    break;
                case 90:
                    cm.dispose();
                    //cm.openNpc(1540429);
                    cm.openNpc(3002114);
                    break;
                case 91:
                    cm.dispose();
                    cm.openNpc(9390463);
                    break;
                case 92:
                    cm.dispose();    cm.openNpc(9900000,"一键开口袋");
                    break;
                case 99:
                    cm.dispose();
                    cm.openNpc(9201324,"jiezhishengji");
                    break;
                case 1:
                    cm.dispose();
                    cm.openNpc(9001212,"徽章强化");
                    break;
                case 2:
                    cm.dispose();
                    cm.openNpc(9330235,"神秘强化");
                    break;
                case 3:
                    cm.dispose();
                    cm.openNpc(9330235,"防具强化");//cm.openNpc(1530635, 2002); 装备合成
                    break;
                case 4:
                    cm.dispose();
                    cm.openNpc(9330235,"纹章强化");//cm.openNpc(1530635,"zhizuozhongxin");
                    break;
                case 5:
                    cm.dispose();
                    cm.openNpc(9000050,"奖牌强化");//cm.openNpc(1530635, 1102);
                    return;
                    break;
                case 6:
                    cm.dispose();
                    cm.openNpc(9330235,"银河强化");
                    break;
                case 101:
                    cm.dispose();
                    cm.openNpc(9390210);
                    break;
                case 7:
                    cm.dispose();
                    cm.openNpc(9330235,"时装觉醒");
                    break;
                case 8:
                    cm.dispose();
                    cm.openNpc(9330235,"解除封印");
                    break;
                case 9:
                    cm.dispose();
                    cm.openNpc(9201358,"冒险岛联盟1");//cm.openNpc(2490002, 44);
                    break;
               case 10:
                    cm.dispose();
                    cm.openNpc(1540008, 4);
                    break;
               case 11:
                    cm.dispose();
                    cm.openNpc(9330127);//cm.openNpc(1540008, 5); 口袋潜能
                    break;
	     	   case 12:
                    cm.dispose();
                    cm.openNpc(1530635,3366);
                    break;
			   case 13:
                    cm.dispose();
                    cm.openNpc(9310060);
                    break;
			   case 14:
                    cm.dispose();
                    cm.openNpc(1530635, 7);
                    break;
			   case 15:
                    cm.dispose();
                    cm.openNpc(1530635, 766);
                    break;
			   case 16:
                    cm.dispose();
                    cm.openNpc(9900004, 27);
                    break;
            }
        } else if (status == 2) {
            if (cm.getJob() == 3100 ||cm.getJob() == 3111 ||cm.getJob() == 3110 ||cm.getJob() == 3101 || cm.getJob() == 3120 || cm.getJob() == 3121 || cm.getJob() == 3122 || cm.getJob() == 3001|| cm.getJob() == 3000) {
                if (selection == 0) {
                    cm.dispose();
                    cm.openNpc(2490002, 8);
                } else if (selection == 1) {
                    cm.dispose();
                    cm.sendOkS("\r\n\r\n#r#e\t\t\t温馨提示：该职业不能洗蓝", 2);
                }
            } else {
                if (selection == 0) {
                    cm.dispose();
                    cm.openNpc(2490002, 6);
                } else if (selection == 1) {
                    cm.dispose();
                    cm.openNpc(2490002, 7);
                }
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

