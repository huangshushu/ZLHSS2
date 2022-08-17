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
    Array("帽子", "#fUI/NameTag/nick/312/e#")
);
var txt;
var CareId;
var CareBo = new Array("[ 困 难 ] 森 兰 丸", "[ 普 通 ] 暴君领主", "[ 困 难 ] 暴君领主", "[ 困 难 ] 钻机领地", "[ 困 难 ] 贝 勒 德", "[ 困 难 ]  戴米安 ", "[ 困 难 ] 半半领地", "[ 困 难 ] 桃 乐 丝", "[ 困 难 ] 皮 埃 尔", "[ 困 难 ] 贝伦领地", "[ 普 通 ] 斯乌领地", "[ 困 难 ] 斯乌领地", "[ 困 难 ] 浓姬领地", "[ 困 难 ] 龙 虎 蛇", "[ 困 难 ] 乌 鲁 斯", "[ 困 难 ] 血腥女王", "[ 困 难 ] 路 西 德");

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
    if (cm.getMapId() == 180000001) {
        cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
        cm.dispose();
    }
    else if (status == 0) {
        txt = "\t\t　　 　　　#b - #r副本查询中心#b - #k\r\n\r\n";
        txt += Icon[59][1];
        for (var i = 0; i <= 18; i++) {
            txt += Icon[60][1];
        };
        txt += Icon[61][1] + "\r\n\r\n";
        for (var i = 0; i < CareBo.length; i++) {
            txt += "#L" + i + "#" + Icon[4][1] + " " + CareBo[i] + "#l　";
            if (i != 0 && (i + 1) % 2 == 0) {
                txt += "\r\n";
            }
        }
        txt += "\r\n\r\n\r\n" + Icon[59][1];
        for (var i = 0; i <= 18; i++) {
            txt += Icon[60][1];
        };
        txt += Icon[61][1] + "\r\n";
        cm.sendSimpleS(txt, 2);
    } else {
        CareId = selection;
        
		var conn = cm.getConnection();
		var pstmt = conn.prepareStatement("SELECT r.accountid, r.characterid, r.carebosname, r.value, r.time, c.name, r.LimitBreak FROM (SELECT * FROM carebosringk ORDER BY value ASC) r, characters AS c WHERE r.characterid = c.id AND r.carebosname = '" + CareBo[CareId] + "' GROUP BY r.characterid ORDER BY r.value ASC, r.time ASC LIMIT 9;");
		var rs =pstmt.executeQuery();
		
		
		txt = "\t\t　 #e#r" + CareBo[CareId] + " 排名系统#k#n\r\n\r\n";
        txt += Icon[62][1];
        for (var i = 0; i <= 97; i++) {
            txt += Icon[63][1];
        };
        txt += Icon[64][1] + "\r\n\r\n";
        txt += "#d#n\r\n   排名　　玩家名称	     通关时间	     破攻\r\n#k";

		while(rs.next()){
			var name = rs.getString("name");
            var value = rs.getString("value");
			
			if (i == 0) {
                txt += "#r";
            } else if (i == 1) {
                txt += "#g";
            } else if (i == 2) {
                txt += "#b";
            }
            txt += "\t " + i + "\t\t " + name;
            for (var j = 10 - name.getBytes().length; j > 0; j--) {
                txt += " ";
            }
            txt += "\t " + value;
            for (var j = 12 - value.getBytes().length; j > 0; j--) {
                txt += " ";
            }
            txt += "\t " + rs.getInt("LimitBreak");
            txt += "#k";

            txt += "\r\n";
		}
		pstmt.close();
		
        txt += "\r\n" + Icon[62][1];
        for (var i = 0; i <= 97; i++) {
            txt += Icon[63][1];
        };
        txt += Icon[64][1] + "\r\n";
        cm.sendOkS(txt, 2);
        status = -1;
    }
}
