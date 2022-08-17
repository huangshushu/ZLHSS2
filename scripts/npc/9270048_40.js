var 星星 = "#fEffect/CharacterEff/1114000/2/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
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
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "#e红包兑换积分\r\n"
           // text += "#v1702378##v1702378##v1702378##v1702378##v1702378##v1702378##v1702378##v1702378##v1702378##v1702378#\r\n"
            //text += "#L1##r" + 蓝色箭头 + "挑战【高级BOSS】黑魔女#g>>>>>>>>#b需要#v4000463#*1\r\n\r\n"//3
			//text += "#L2##r" + 红色箭头 + "挑战【高级BOSS】天球#g>>>>>>>>>>#b需要#v4000463#*1\r\n\r\n"//3
            //text += "#L3##r" + 蓝色箭头 + "挑战【高级BOSS】扎昆#g>>>>>>>>>>#b需要#v4001126#*200+500万\r\n\r\n"//3
			//text += "#L4##r" + 蓝色箭头 + "挑战【顶级BOSS】巨型蝙蝠魔#g>>>>#b需要#v4000463#*2\r\n\r\n"//3
            //text += "#L6##r" + 红色箭头 + "挑战【顶级BOSS】暗黑龙王#g>>>>>>#b需要#v4000463#*1个\r\n\r\n"//3
			//text += "#L7##r" + 蓝色箭头 + "挑战【终级BOSS】艾里葛斯#g>>>>>>#b需要#v4000463#*5\r\n\r\n"//3
			//text += "#L8##r" + 红色箭头 + "挑战【终级BOSS】品克缤#g>>>>>>#b需要#v4000463#*5\r\n\r\n"//3
			//text += "#L1##r" + 蓝色箭头 + "#v1112915#兑换 全属性88  #v1112915#\r\n\r\n"//3
			text += "#L2##r" + 红色箭头 + "#v2430209#*1兑换 10积分\r\n\r\n"//3
            text += "#L3##r" + 红色箭头 + "#v2430209#*3兑换 30积分\r\n\r\n"//3
			text += "#L4##r" + 红色箭头 + "#v2430209#*10兑换 100积分\r\n\r\n"//3
			//text += "#L5##r" + 蓝色箭头 + "#v1912339#兑换 一套#v1912339##v1902339#\r\n\r\n"//3
			//text += "#L6##r" + 红色箭头 + "#v1912340#兑换 一套#v1912340##v1902340#\r\n\r\n"//3
			//text += "#L7##r" + 蓝色箭头 + "#v1912341#兑换 一套#v1912341##v1902341#\r\n\r\n"//3
			//text += "#L8##r" + 红色箭头 + "#v1912342#兑换 一套#v1912342##v1902342#\r\n\r\n"//3
			//text += "#L9##r" + 红色箭头 + "#v1912343#兑换 一套#v1912343##v1902343#\r\n\r\n"//3
			//text += "#L10##r" + 红色箭头 + "#v1912344#兑换 一套#v1912344##v1902344#\r\n\r\n"//3
			//text += "#L11##r" + 红色箭头 + "#v1912345#兑换 一套#v1912345##v1902345#\r\n\r\n"//3
			//text += "#L12##r" + 红色箭头 + "#v1912346#兑换 一套#v1912346##v1902346#\r\n\r\n"//3
			//text += "#L13##r" + 红色箭头 + "#v1902401#兑换 一套全属性50#v1902401##v1912401#\r\n\r\n"//3
			//text += "#L14##r" + 红色箭头 + "#v1902402#兑换 一套全属性50#v1902402##v1912402#\r\n\r\n"//3
			//text += "#L15##r" + 红色箭头 + "#v1902403#兑换 一套全属性50#v1902403##v1912403#\r\n\r\n"//3
			//text += "#L16##r" + 红色箭头 + "#v1902405#兑换 一套全属性50#v1902405##v1912405#\r\n\r\n"//3
			//text += "#L17##r" + 红色箭头 + "#v1902311#兑换 一套全属性50#v1902311##v1912311#\r\n\r\n"//3
			//text += "#L18##r" + 红色箭头 + "#v1902350#兑换 一套全属性50#v1902350##v1902350#\r\n\r\n"//3
			//text += "#L19##r" + 红色箭头 + "#v1902407#兑换 一套全属性50#v1902407##v1902407#\r\n\r\n"//3
			//text += "#L20##r" + 红色箭头 + "#v1902404#兑换 一套全属性50#v1902404##v1902404#\r\n\r\n"//3
			//text += "#L21##r" + 红色箭头 + "#v1902411#兑换 一套全属性188#v1902411##v1902411#\r\n\r\n"//3
            //text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
            //text += ""+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+"\r\n"
            //text += "#L21##d" + 红色箭头 + "制作#v3700228#1个\t需要：#v4000000#100个\r\n\r\n"//3
            //text += "#L22##d" + 红色箭头 + "制作#v3700229#1个\t需要：#v4000016#100个\r\n\r\n"//3
            //text += "#L23##d" + 红色箭头 + "制作#v3700230#1个\t需要：#v4000001#100个\r\n\r\n"//3
            //text += "#L24##d" + 红色箭头 + "制作#v3700231#1个\t需要：#v4000012#100个\r\n\r\n"//3
            //text += ""+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+"\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) { //黑魔女
			if(cm.getLevel() >= 10 && cm.haveItem(1112915,1) && cm.getMeso()>=500000) {
            cm.gainItem(1112915,-1);
			cm.gainItem(1112915,88,88,88,88,0,0,88,88,0,0,0,0,0,0);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"蓝调戒指公告" + " : " + cm.getPlayer().getName() +"蓝调戒指兑换成功 全属性88.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
        } else if (selection == 2) {  //1
		
			if(cm.getLevel() >= 10 && cm.haveItem(2430209,1)) {
            cm.gainItem(2430209,-1);
			cm.setmoneyb(+10)
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"红包公告" + " : " + cm.getPlayer().getName() +"红包兑换10积分成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("兑换失败 #v2430209#红包不足1个");
			cm.dispose();
		   }
		  
        } else if (selection == 3) { //3
				if(cm.getLevel() >= 10 && cm.haveItem(2430209,3)) {
            cm.gainItem(2430209,-3);
			cm.setmoneyb(+30)
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"红包公告" + " : " + cm.getPlayer().getName() +"红包兑换30积分成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("兑换失败 #v2430209#红包不足3个");
			cm.dispose();
		   }
        } else if (selection == 4) {//10
		if(cm.getLevel() >= 10 && cm.haveItem(2430209,10)) {
            cm.gainItem(2430209,-10);
			cm.setmoneyb(+100)
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"红包公告" + " : " + cm.getPlayer().getName() +"红包兑换100积分成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("兑换失败 #v2430209#红包不足10个");
			cm.dispose();
		   }
        } else if (selection == 5) { //手套
		if(cm.getLevel() >= 10 && cm.haveItem(1912339,1) && cm.getMeso()>=500000) {
            cm.gainItem(1912339,-1);
			cm.gainItem(1912339,1);
			cm.gainItem(1902339,1);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"星球椅子公告" + " : " + cm.getPlayer().getName() +"星球椅子兑换成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
        } else if (selection == 6) { //披风
		if(cm.getLevel() >= 10 && cm.haveItem(1912340,1) && cm.getMeso()>=500000) {
            cm.gainItem(1912340,-1);
			cm.gainItem(1912340,1);
			cm.gainItem(1902340,1);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"星球椅子公告" + " : " + cm.getPlayer().getName() +"星球椅子兑换成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
        } else if (selection == 7) { //帽子
		if(cm.getLevel() >= 10 && cm.haveItem(1912341,1) && cm.getMeso()>=500000) {
            cm.gainItem(1912341,-1);
			cm.gainItem(1912341,1);
			cm.gainItem(1902341,1);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"星球椅子公告" + " : " + cm.getPlayer().getName() +"星球椅子兑换成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		} else if (selection == 8) { //套服
		if(cm.getLevel() >= 10 && cm.haveItem(1912342,1) && cm.getMeso()>=500000) {
            cm.gainItem(1912342,-1);
			cm.gainItem(1912342,1);
			cm.gainItem(1902342,1);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"星球椅子公告" + " : " + cm.getPlayer().getName() +"星球椅子兑换成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		   } else if (selection == 9) { //套服
		if(cm.getLevel() >= 10 && cm.haveItem(1912343,1) && cm.getMeso()>=500000) {
            cm.gainItem(1912343,-1);
			cm.gainItem(1912343,1);
			cm.gainItem(1902343,1);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"星球椅子公告" + " : " + cm.getPlayer().getName() +"星球椅子兑换成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		   } else if (selection == 10) { //套服
		if(cm.getLevel() >= 10 && cm.haveItem(1912344,1) && cm.getMeso()>=500000) {
            cm.gainItem(1912344,-1);
			cm.gainItem(1912344,1);
			cm.gainItem(1902344,1);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"星球椅子公告" + " : " + cm.getPlayer().getName() +"星球椅子兑换成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		   } else if (selection == 11) { //套服
		if(cm.getLevel() >= 10 && cm.haveItem(1912345,1) && cm.getMeso()>=500000) {
            cm.gainItem(1912345,-1);
			cm.gainItem(1912345,1);
			cm.gainItem(1902345,1);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"星球椅子公告" + " : " + cm.getPlayer().getName() +"星球椅子兑换成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		   } else if (selection == 12) { //套服
		if(cm.getLevel() >= 10 && cm.haveItem(1912346,1) && cm.getMeso()>=500000) {
            cm.gainItem(1912346,-1);
			cm.gainItem(1912346,1);
			cm.gainItem(1902346,1);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"星球椅子公告" + " : " + cm.getPlayer().getName() +"星球椅子兑换成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		      } else if (selection == 13) { //套服
		if(cm.getLevel() >= 10 && cm.haveItem(1902401,1) && cm.getMeso()>=500000) {
            cm.gainItem(1902401,-1);
			cm.gainItem(1902401,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainItem(1912401,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"火鸟椅子公告" + " : " + cm.getPlayer().getName() +"火鸟椅子兑换成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		   	      } else if (selection == 14) { //套服
		if(cm.getLevel() >= 10 && cm.haveItem(1902402,1) && cm.getMeso()>=500000) {
            cm.gainItem(1902402,-1);
			cm.gainItem(1902402,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainItem(1912402,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"星球椅子公告" + " : " + cm.getPlayer().getName() +"星球椅子兑换成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		   	      } else if (selection == 15) { //套服
		if(cm.getLevel() >= 10 && cm.haveItem(1902403,1) && cm.getMeso()>=500000) {
            cm.gainItem(1902403,-1);
			cm.gainItem(1902403,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainItem(1912403,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"星球椅子公告" + " : " + cm.getPlayer().getName() +"星球椅子兑换成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		      	      } else if (selection == 16) { //套服
		if(cm.getLevel() >= 10 && cm.haveItem(1902405,1) && cm.getMeso()>=500000) {
            cm.gainItem(1902405,-1);
			cm.gainItem(1902405,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainItem(1912405,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"星球椅子公告" + " : " + cm.getPlayer().getName() +"星球椅子兑换成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		      	      } else if (selection == 17) { //套服
		if(cm.getLevel() >= 10 && cm.haveItem(1902311,1) && cm.getMeso()>=500000) {
            cm.gainItem(1902311,-1);
			cm.gainItem(1902311,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainItem(1912311,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"星球椅子公告" + " : " + cm.getPlayer().getName() +"星球椅子兑换成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		   		      	      } else if (selection == 18) { //套服
		if(cm.getLevel() >= 10 && cm.haveItem(1902350,1) && cm.getMeso()>=500000) {
            cm.gainItem(1902350,-1);
			cm.gainItem(1902350,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainItem(1912350,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"星球椅子公告" + " : " + cm.getPlayer().getName() +"星球椅子兑换成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		   		      	      } else if (selection == 19) { //套服
		if(cm.getLevel() >= 10 && cm.haveItem(1902407,1) && cm.getMeso()>=500000) {
            cm.gainItem(1902407,-1);
			cm.gainItem(1902407,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainItem(1912407,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"星球椅子公告" + " : " + cm.getPlayer().getName() +"星球椅子兑换成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		   		      	      } else if (selection == 20) { //套服
		if(cm.getLevel() >= 10 && cm.haveItem(1902404,1) && cm.getMeso()>=500000) {
            cm.gainItem(1902404,-1);
			cm.gainItem(1902404,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainItem(1912404,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"星球椅子公告" + " : " + cm.getPlayer().getName() +"星球椅子兑换成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		   	   		      	      } else if (selection == 21) { //套服
		if(cm.getLevel() >= 10 && cm.haveItem(1902411,1) && cm.getMeso()>=500000) {
            cm.gainItem(1902411,-1);
			cm.gainItem(1902411,188,188,188,188,5000,5000,188,188,0,0,0,0,0,0);
			cm.gainItem(1912411,0,0,0,0,5000,5000,0,0,0,0,0,0,0,0);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"星球椅子公告" + " : " + cm.getPlayer().getName() +"星球椅子兑换成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
        }
    }
}


