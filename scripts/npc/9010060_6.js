
/* NPC版权: 彩云岛
 NPC名称: 		小帮手
 MAP(地图ID): 	        (101050000)
 NPC类型: 		综合NPC
 制作人：故事丶
 */

var status = -1;
var sel;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        if (cm.getPlayerStat("GID") < 0) {
            var text = "";
            text = "#e<#v3991051# #v3991050# #v3991038# #v3991044#-家族管理员>#n\r\n你想做什么。\r\n";
            text += "#L0##b增加家族人数#l\r\n";
            text += "#L1##b我想解散家族#l\r\n";
            text += "#L2##b制作家族徽章#l\r\n";
            text += "#L3##b查看家族排行榜#l\r\n";
            //text += "#L4##r参加家族遗迹大会#l\r\n";
            cm.sendSimple(text);
        } else {
            cm.sendOk("你现在还没有家族,无法使用家族管理。");
            cm.dispose();
        }

    } else if (status == 1) {
        sel = selection;
        if (selection == 0) {
            if (cm.getPlayerStat("GID") <= 0 || cm.getPlayerStat("GRANK") != 1) {
                cm.sendOk("你不是族长，因此你将不能增加家族成员的人数上限.");
                cm.dispose();
            } else {
                cm.sendYesNo("家族成员人数每增加#b5人#k，需要的手续费是#b5000万金币#k。怎么样？你想增加家族人数吗？");
            }
        } else if (selection == 1) {
            if (cm.getPlayerStat("GID") <= 0 || cm.getPlayerStat("GRANK") != 1) {
                cm.sendOk("你不是族长，因此你不能解散该家族。");
                cm.dispose();
            } else {
                cm.sendYesNo("你真的要解散家族吗？哎呀……哎呀……解散之后，你的家族就会被永久删除。很多家族特权也会一起消失。你真的要解散吗？");
            }

        } else if (selection == 2) {
            sel = selection;
            if (cm.getPlayerStat("GRANK") == 1) {
                cm.sendYesNo("生成家族徽章需要 #b1,500,000 金币#k的费用。我来跟你说明一下，家族徽章是每个家族特有的纹章，会出现在家族名称的左边。怎么样？你想制作家族徽章吗？");
            } else {
                cm.sendOk("咦？你好像不是家族族长啊？家族徽章相关事务只有#r家族族长#k#r可以#k处理。");
                cm.dispose();
            }

        } else if (selection == 3) {
            if (cm.getPlayerStat("GID") > 0) {
                cm.dispose();
                cm.openNpc(9310153, 14);
            } else {
                cm.sendOk("你现在还没有家族,无法使用家族服务。");
                cm.dispose();
            }
        }

    } else if (selection == 4) {
        cm.warp(102040200, 0);
        cm.dispose();
    } else if (status == 2) {
        if (sel == 0 && cm.getPlayerStat("GID") > 0 && cm.getPlayerStat("GRANK") == 1) {
            cm.increaseGuildCapacity(false);
            cm.dispose();
        } else if (sel == 2) {
            cm.genericGuildMessage(18);
            cm.dispose();
            //}
        } else if (sel == 1 && cm.getPlayerStat("GID") > 0 && cm.getPlayerStat("GRANK") == 1) {
            cm.disbandGuild();
            cm.dispose();
        }


    }
}
//}
