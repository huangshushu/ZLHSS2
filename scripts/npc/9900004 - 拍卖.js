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

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
		
	
			//if(cm.getPlayer().getMapId() == 10000){
	//cm.sendOk("请点击旁边的npc领取新手奖励后再使用拍卖");
//cm.dispose();
//return;
//}		
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//显示物品ID图片用的代码是  #v这里写入ID#
            //text += "                    #n#d欢迎来到回顾冒险岛\r\n               #v3994071##v3994071##v3994071##v3994082##v3994062#\r\n"//1
            text += "                 #n#d#r当天在线时长：" +cm.getGamePoints()+" 分钟\r\n"//2
			text += "#n#k元宝：#r " + cm.getHyPay(1) + "元#k\t\t修炼点：#r" + cm.getDojoPoints() + " 点#k\t\t豆豆：#r点#k\r\n"//3
			text += "#n#k点券：#r" + cm.getNX(1) + "点#k\t 抵用卷：#r"+cm.getNX(2)+"点#k\r\n"//3
			text += "#L1##e#d回到自由#l       #L2##e#d辅助药水#l       #L3##e#d转职转生#l\r\n\r\n"//3
            text += "#L4##e#d传送服务#l       #L5##e#d常用功能#l       #L6##e#d美容美发#l\r\n\r\n"//3
            text += "#L7##e#d排 行 榜#l       #L8##e#d在线奖励#l       #L9##e#d#r充值领取#l\r\n\r\n\r\n"//3
            //text += "#L4##e#d#回到自由永恒冰轮杖制作#l\r\n"//3
            //text += "#L5##e#d#v1402046#永恒玄冥剑制作#l\r\n"//3
            //text += "#L6##e#d#v1432047#永恒显圣枪制作#l\r\n"//3
            //text += "#L7##e#d#v1442063#永恒神光戟制作#l\r\n"//3
            //text += "#L8##e#d#v1452057#永恒惊电弓制作#l\r\n"//3
            //text += "#L9##e#d#v1462050#永恒冥雷弩制作#l\r\n"//3
            //text += "#L10##e#d#v1472068#永恒大悲赋制作#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
						if(cm.getPlayer().getMapId() == 910000000){
	cm.sendOk("你已经在市场了，别逗了好吗?");
cm.dispose();
return;
}		
		cm.warp(910000000);
		cm.dispose();
        } else if (selection == 2) {
		cm.openNpc(9900004, 1);//辅助药水
        } else if (selection == 3) {
		cm.openNpc(9900005, 0);//转职转生
        } else if (selection == 4) {
		cm.openNpc(9900006, 0);//传送服务
        } else if (selection == 5) {
		cm.openNpc(9900007, 0);//常用功能
        } else if (selection == 6) {
		cm.warp(100000104);
		cm.dispose();//美容美发
        } else if (selection == 7) {
		cm.openNpc(9900004, 6);//排 行 榜
        } else if (selection == 8) {
		cm.openNpc(9900004, 7);//在线奖励
        } else if (selection == 9) {
		cm.openNpc(9900004, 8);//充值领取
        } else if (selection == 10) {
		cm.openNpc(9900004, 9);//
	}
    }
}


