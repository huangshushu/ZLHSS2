/*
 脚本：卷轴回收脚本
 */
 var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
 var 星星 ="#fMap/MapHelper/weather/witch/3#";
 var 奖励物品 = 2430253;
 var 卷轴列表 = Array(
 1113021,
 1102659,
 1003545,
 1004044,
 1003544,
 1102555,
 1070031,
 1112745,
 1004042,
 1002653,
 1082505,
 1072782,
 1052579,
 1112734,
 1082553,
 1702472,
 1702339,
 1003889,
 1102604,
 1049003,
 1049004,
 1049002,
 1032234,
 1003843,
 1005297,
 1005297
 
 );
 

function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

           cm.sendOk("不想回收吗？…找我可以把背包里所有抽奖获得的时装分解获得点券#k哦！\r\n\r\n");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) 

{


            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
        text = "#r找我可以把背包里所有抽奖获得的时装分解获得点券！\r\n#e#d" + 小烟花 + "回收导致损失不予补偿！" + 小烟花 + "#n#k\r\n\r\n";
		text += "" + 小烟花 + "#r可回收以下时装\r\n"
		text += "#v1070031##v1112745##v1004042##v1003544##v1102653##v1004044##v1003545##v1112734##v1113021##v1102555##v1102659##v1082505##v1072782##v1052579##v1702399##v1702472##v1082553##v1049002##v1049004##v1049003##v1102604##v1032234##v1003889##v1003843##l\r\n";
		text += "#r#L1#" + 小烟花 + "一键回收#v1070031#~~#v1102659#所有装备(包括鞋子翅膀)\r\n"
		text += "#r#L2#" + 小烟花 + "一键回收#v1082505#~~#v1702399# 所有装备(包括手套武器)\r\n"
		text += "#r#L3#" + 小烟花 + "一键回收#v1702472#~~#v1032234#所有装备(包括武器耳环)\r\n"
		text += "#r#L4#" + 小烟花 + "一键回收#v1003889#~~#v1003843#\r\n"
        cm.sendSimple(text);
	} else if (selection == 1) {
	    cm.openNpc(9250029,0);
	} else if (selection == 2) {
		cm.openNpc(9270064,0);
    } else if (selection == 3) {
		cm.openNpc(9270048,0);
	} else if (selection == 4) {
		cm.openNpc(9270062,0);
	  }
    }
 }
 
 