/* 点卷商店 */

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
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/7#")
    );
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
        txt = "\t\t　 #b " + Icon[1][1] + " #r#e #fs16#军衔中心#fs12# #n#b " + Icon[1][1] + " #k\r\n\r\n";
        txt += Icon[35][1];
        for (var i = 0; i <= 260; i++) {
            txt += Icon[36][1];
        };
        txt += Icon[37][1] + "\r\n";

        //txt += "　　　　　　#L0#" + Icon[68][1] + " #b军衔说明   #r推荐  " + Icon[68][1] + "#l#k\r\n";
		//txt += "　　　　　　#L6#" + Icon[68][1] + " #r基础军衔补领中心 " + Icon[68][1] + "#l#k\r\n\r\n";
		txt += " #L0#" + Icon[8][1] + " #b军衔说明  [#r推荐#b]#l#k  ";
        txt += " #L6#" + Icon[8][1] + " #b基础军衔  [#r补领#b]#l#k\r\n\r\n";
        txt += " #L4#" + Icon[8][1] + " #b军衔勋章  [#r升级#b]#l　#k";
        txt += " #L5#" + Icon[8][1] + " #b军衔福利  [#r领取#b]#l#k\r\n\r\n\r\n";
        

        txt += Icon[35][1];
        for (var i = 0; i <= 260; i++) {
            txt += Icon[36][1];
        };
        txt += Icon[37][1] + "\r\n\r\n";
        txt += "　 #v1142318##v1142318##v1142319##v1142319##v1142320##v1142320##v1142320##v1142321##v1142321#";
        cm.sendSimpleS(txt, 2);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(1500032, "junxianjs"); //双倍道具
                break;
            case 4:
                cm.dispose();
                cm.openNpc(1500032, "shengjijx"); //暴君
                break;
            case 5:
                cm.dispose();
                cm.openNpc(1500032, "junxianfl"); //各种椅子
                break;
            case 6:
                //var ii = cm.getItemInfo();
                //var ii = Packages.server.MapleItemInformationProvider.getInstance();			
                var equip = cm.getNewEquip(1142312); // 生成一个Equip类      
                //toequip.setEnhance(10)              
                equip.setStr(5); //装备力量
                equip.setDex(5); //装备敏捷
                equip.setInt(5); //装备智力
                equip.setLuk(5); //装备运气
                equip.setMatk(1); //物理攻击
                equip.setWatk(1); //魔法攻击 
                //toequip.setOwner("指北针管理员");
                cm.addFromDrop(equip);
                cm.sendOk("恭喜您获得 #r十字旅团高等兵勋章,丢失可以点我补领#k 。");
                cm.dispose();
                break;
            case 0:
            case 7:
                cm.dispose();
                cm.openNpc(9310071, 2); //洗点卷轴
                break;
            case 8:
                cm.dispose();
                cm.openNpc(9900002, 24); //玩具商店
                break;
            case 9:
                cm.dispose();
                cm.openNpc(9110103); //骑宠商店
                break;
            case 10:
                cm.dispose();
                cm.openNpc(9110114); //破攻石头
                break;
            case 11:
                cm.dispose();
                cm.openNpc(9900002, 5); //一键潜能
                break;
            case 12:
                cm.dispose();
                cm.openNpc(9900002, 1301); //一键潜能
                break;
            case 13:
                cm.dispose();
                cm.openNpc(9270096, 13); //一键潜能
                break;
            case 14:
                cm.dispose();
                cm.openNpc(9900002, 1301); //一键潜能
                break;
            case 15:
                cm.dispose();
                cm.openNpc(9270096, 15); //一键潜能
                break;
        }
    }
}