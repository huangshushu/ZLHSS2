/*
Care - 脚本调整 - 
脚本定制 仿制脚本 
唯一方式 381991414
*/
var Iname;
var itemid;
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
/*------------------------------------------------------------*/
var A, B, C;
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
            if (cm.getNX(1) < 100000) {
                cm.playerMessage(1, "抱歉\r\n\r\n点卷拥有 100000 才可以使用");
                cm.dispose();
                return;
            }

            txt = "\t\t\t\t　　#d 角色清理中心 #k\r\n\r\n";
            txt += Icon[59][1];
            for (var i = 0; i <= 18; i++) {
                txt += Icon[60][1];
            };
            txt += Icon[61][1] + "\r\n\\r\n";
            txt += "#b　友情提示 - \r\n#d　　　\t\t请选择你需清理的角色#r一旦清理不可恢复#k\r\n\r\n";
            txt += Icon[59][1];
            for (var i = 0; i <= 18; i++) {
                txt += Icon[60][1];
            };
            txt += Icon[61][1] + "\r\n\r\n";

            var i = 0;
            var ii = 1;
			var conn = cm.getConnection();
            var pstmt = conn.prepareStatement("SELECT id,accountid,name FROM characters");
            var rs = pstmt.executeQuery();
			while (rs.next()) {
				if (rs.getInt("accountid") == cm.getPlayer().getAccountID() && rs.getInt("id") != cm.getPlayer().getId()) {
                    txt += "#d#L" + rs.getInt("id") + "" + "# " + Icon[4][1] + " [ #r" + format(" ", 2, ii.toString()) + "#d ] 　#r" + format(" ", 12, rs.getString("name").toString()) + " #b〓 清除当前角色 〓 " + Icon[4][1] + "#l#k#n\r\n";
                    ii++;
                }
				i++;
			}
			rs.close();
            if (ii == 1) {
                cm.playerMessage(1, "抱歉\r\n\r\n当前账号没有多余的角色");
                cm.dispose();
                return;
            }
            cm.sendSimpleS(txt, 2);
        } else if (status == 1) {
            var i = 0;
			var conn = cm.getConnection();
            var pstmt = conn.prepareStatement("SELECT * FROM characters");
            var rs = pstmt.executeQuery();
            txt = "\t\t\t\t　　#d 请查阅确认信息 #k\r\n\r\n";
            txt += Icon[62][1];
            for (var i = 0; i <= 97; i++) {
                txt += Icon[63][1];
            };
            txt += Icon[64][1] + "\r\n\\r\n";
			while (rs.next()) {
				if (signle.get("id") == selection) {
                    B = signle.get("name");
                    C = signle.get("id");
                }
			}
			

            txt += "　　　 \t#d你是否清除 [ #r" + B + "#d ] 这个角色#k\r\n\r\n";
            txt += Icon[62][1];
            for (var i = 0; i <= 97; i++) {
                txt += Icon[63][1];
            };
            txt += Icon[64][1] + "\r\n\r\n";
            cm.sendYesNoS(txt, 2);
        } else if (status == 2) {
            DeleteCharacters(C);
         /   cm.gainNX(1, -100000);
            cm.playerMessage(1, "恭喜你\r\n\r\n该角色清理完毕");
            cm.dispose();

        }
    }
}
//cm.showEffect(true, "killing/fail");
//cm.showEffect(true, "killing/first/stage");
//cm.showEffect(true, "killing/first/start");
// cm.playSound(true, "Coconut/Failed");

function DeleteCharacters(id) {//删除数据
		var conn = cm.getConnection();
        var pstmt  = conn.prepareStatement("delete from characters where id = " + id);
		pstmt.executeUpdate();
		pstmt.close();
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