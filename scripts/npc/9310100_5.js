
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
            //text += "   #n#k此店铺是积分商店\r\n"
			//text += "		#d\t累计额度：#r"+cm.getzb()+"#d\t赞助积分:#r"+cm.getmoneyb()+"#k\r\n#e#d             \t\r\n"//当前拥有抵用券：#r"+cm.getNX(2)+"点
			text += "   #d\t积分:#r"+cm.getmoneyb()+"     #d点券:#r"+cm.getPlayer().getCSPoints(1)+"     #d抵用:#r"+cm.getPlayer().getCSPoints(2)+"#d \r\n";
            text += "#L1##e1积分   兑换 1000点卷#l #L2##e10积分  兑换 1万点卷#l\r\n"//
			text += "#L3##e1百积分 兑换 10万点卷#l #L4##e1千积分 兑换 100万点卷#l\r\n\r\n"
			text += "#L17##b#e800积分  兑换 随机进阶技能书#v2028009#*1#l\r\n"
			text += "#L26##b#e1500积分  兑换 自选进阶技能书#v2028175#*1#l\r\n"
			text += "#L5##b#e10积分  兑换 星火随机强化卷#v2613000#*1#l\r\n"
			text += "#L27##b#e100积分  兑换 星火随机强化卷#v2613000#*10#l\r\n"
			text += "#L6##b#e10积分  兑换 BUFF经验卷#v2450000#*1#l\r\n"
			text += "#L30##b#e30积分  兑换 三倍经验卷#v5211060#*1#l\r\n"
			text += "#L7##b#e80积分  兑换 宿命武器强化卷#v2046913#*1#l\r\n"
			text += "#L28##b#e800积分  兑换 宿命武器强化卷#v2046913#*10#l\r\n"
			//text += "#L17##b#e50积分  兑换 #z2040815##v2040815#*1#l\r\n"
			//text += "#L18##b#e50积分  兑换 #z2041315##v2041315#*1#l\r\n"
			text += "#L10##b#e80积分  兑换 月石#v4011007#*1#l\r\n"
			text += "#L11##b#e80积分  兑换 锂#v4011008#*1#l\r\n"
			text += "#L25##b#e200积分  兑换 时装戒指进化币#v4310060#*1#l\r\n"
			//text += "#L26##b#e2000积分  兑换 时装戒指进化币#v4310060#*10#l\r\n"
			text += "#L19##b#e20积分  兑换 UR时装附魔币#v4310108#*1#l\r\n"
			text += "#L29##b#e200积分  兑换 UR时装附魔币#v4310108#*10#l\r\n"
			text += "#L24##b#e10积分  兑换 经验门票#v5252001#*1#l\r\n"
			text += "#L18##b#e500积分  兑换 15星必成币#v4001255#*1#l\r\n"
			text += "#L20##b#e100积分  兑换 太阳神的赐福#v4001165#*1000#l\r\n"
			text += "#L21##b#e100积分  兑换 圣诞大星#v3992025#*5000#l\r\n"
			//text += "#L22##b#e200积分  兑换 精灵吊坠#v1122017#*1打怪经验增加30%#l\r\n"
			//text += "#L23##b#e100积分  兑换 土豪专属勋章#v1142210#*1#l\r\n"
			//text += "#L24##b#e200积分  兑换 随机时装公式#v2028158#*1#l\r\n"
			//text += "#L13##b#e100积分 兑换 #z2591008##v2591008#*1#l\r\n"
			//text += "#L14##b#e80积分 兑换 #z2591003##v2591003#*1#l\r\n"
			//text += "#L15##b#e60积分 兑换 #z2591004##v2591004#*1#l\r\n"
			//text += "#L16##b#e50积分 兑换 #z2591006##v2591006#*1#l\r\n"
			//text += "#L8##b#e100积分 兑换 #z2048717##v2048717#*1#l\r\n"
			//text += "#L12##b#e100积分 兑换 #z2048716##v2048716#*1#l\r\n"
			//text += "#L9##b#e888积分 兑换 暴君自选箱子#v2022662##l\r\n"
			//text += "#L5##e#d2000点卷兑换#v5050000#20个#l\r\n#L7##e#d1000点卷#v5072000#10个 #l\r\n\r\n"// #L6##e#d800点券购买#v5360014#
            cm.sendSimple(text);
        } else if (selection == 1) {
           if (cm.getmoneyb() >= 1) {
               cm.setmoneyb(-1)
               cm.gainNX(1000);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功兑换1积分  1000点卷！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }
        } else if (selection == 2) {
		if (cm.getmoneyb() >= 10) {
               cm.setmoneyb(-10)
               cm.gainNX(10000);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功兑换10积分  10000点卷！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }
        } else if (selection == 3) {
           if (cm.getmoneyb() >= 100) {
               cm.setmoneyb(-100)
               cm.gainNX(100000);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功兑换100积分  100000点卷！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }
        } else if (selection == 4) {
           if (cm.getmoneyb() >= 1000) {
               cm.setmoneyb(-1000)
               cm.gainNX(1000000);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功兑换1000积分  1000000点卷！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }
        } else if (selection == 5) {
		   if (cm.getmoneyb() >= 10) {
		       cm.setmoneyb(-10)
		       cm.gainItem(2613000,1);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个星火随机强化卷！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }
		} else if (selection == 6) {
		   if (cm.getmoneyb() >= 10) {
		       cm.setmoneyb(-10)
		       cm.gainItem(2450000,1);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个BUFF经验卷30分钟！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }
	    } else if (selection == 7) {
		   if (cm.getmoneyb() >= 80) {
		       cm.setmoneyb(-80)
		       cm.gainItem(2046913,1);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个宿命武器强化卷轴！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }
		} else if (selection == 8) {
		   if (cm.getmoneyb() >= 100) {
		       cm.setmoneyb(-100)
		       cm.gainItem(2048717,1);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个永远涅槃火焰！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }
		} else if (selection == 9) {
		   if (cm.getmoneyb() >= 888) {
		       cm.setmoneyb(-888)
		       cm.gainItem(2022662,1);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个暴君自选箱子！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }
		} else if (selection == 10) {
		   if (cm.getmoneyb() >= 80) {
		       cm.setmoneyb(-80)
		       cm.gainItem(4011007,1);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个月石！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }
		} else if (selection == 11) {
		   if (cm.getmoneyb() >= 80) {
		       cm.setmoneyb(-80)
		       cm.gainItem(4011008,1);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个锂！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }
	    } else if (selection == 12) {
		   if (cm.getmoneyb() >= 100) {
		       cm.setmoneyb(-100)
		       cm.gainItem(2048716,1);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个强大涅槃火焰！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }
		} else if (selection == 13) {
		   if (cm.getmoneyb() >= 100) {
		       cm.setmoneyb(-100)
		       cm.gainItem(2591008,1);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个武公灵魂宝珠！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }
	    } else if (selection == 14) {
		   if (cm.getmoneyb() >= 80) {
		       cm.setmoneyb(-80)
		       cm.gainItem(2591003,1);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个品克宾灵魂宝珠！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }
		} else if (selection == 15) {
		   if (cm.getmoneyb() >= 60) {
		       cm.setmoneyb(-60)
		       cm.gainItem(2591004,1);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个暗黑龙王灵魂宝珠！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }
		} else if (selection == 16) {
		   if (cm.getmoneyb() >= 50) {
		       cm.setmoneyb(-50)
		       cm.gainItem(2591006,1);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个扎昆灵魂宝珠！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }
		} else if (selection == 17) {
		   if (cm.getmoneyb() >=800) {
		       cm.setmoneyb(-800)
		       cm.gainItem(2028009,1);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个随机进阶技能书！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }
	    } else if (selection == 18) {
		   if (cm.getmoneyb() >= 500) {
		       cm.setmoneyb(-500)
		       cm.gainItem(4001255,1);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个15星必成！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }
		} else if (selection == 19) {
		   if (cm.getmoneyb() >= 20) {
		       cm.setmoneyb(-20)
		       cm.gainItem(4310108,1);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个UR时装附魔币！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }
		} else if (selection == 20) {
		   if (cm.getmoneyb() >= 100) {
		       cm.setmoneyb(-100)
		       cm.gainItem(4001165,1000);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1000个太阳神的赐福！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }	
		} else if (selection == 21) {
		   if (cm.getmoneyb() >= 100) {
		       cm.setmoneyb(-100)
		       cm.gainItem(3992025,5000);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买5000个圣诞大星！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }
		} else if (selection == 22) {
		   if (cm.getmoneyb() >= 200) {
		       cm.setmoneyb(-200)
			   cm.gainItem(1122017,50,50,50,50,200,200,50,50,0,0,0,0,0,0);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个精灵吊坠！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }	
		} else if (selection == 23) {
		   if (cm.getmoneyb() >= 100) {
		       cm.setmoneyb(-100)
			   cm.gainItem(1142210,30,30,30,30,200,200,10,10,0,0,0,0,0,0);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个土豪专属勋章！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }
		} else if (selection == 24) {
		   if (cm.getmoneyb() >= 10) {
		       cm.setmoneyb(-10)
			   cm.gainItem(5252001,1);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个经验门票！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }	
		} else if (selection == 25) {
		   if (cm.getmoneyb() >= 200) {
		       cm.setmoneyb(-200)
			   cm.gainItem(4310060,1);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个时装戒指进化币！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }	
        } else if (selection == 26) {
		   if (cm.getmoneyb() >= 1500) {
		       cm.setmoneyb(-1500)
			   cm.gainItem(2028175,1);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个自选进阶技能书！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }
        } else if (selection == 27) {
		   if (cm.getmoneyb() >= 100) {
		       cm.setmoneyb(-100)
			   cm.gainItem(2613000,10);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买10个星火随机强化卷！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }	
        } else if (selection == 28) {
		   if (cm.getmoneyb() >= 800) {
		       cm.setmoneyb(-800)
			   cm.gainItem(2046913,10);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买10个宿命武器强化卷！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }	
        } else if (selection == 29) {
		   if (cm.getmoneyb() >= 200) {
		       cm.setmoneyb(-200)
			   cm.gainItem(4310108,10);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买10个UR时装附魔币！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }	
        } else if (selection == 30) {
		   if (cm.getmoneyb() >= 30) {
		       cm.setmoneyb(-30)
			   cm.gainItem(5211060,1,1);
               cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买1个三倍经验卷！");
               cm.dispose();
               }else{
               cm.sendOk("积分不足无法换购！");
               cm.dispose();
               }			   
        } else if (selection == 71) {
		if (cm.getPlayer().getCSPoints(1) >= 800 && cm.getPlayer().getLevel() <= 60 && cm.getPlayer().getBossLog("sanbei") == 0 ) {
		cm.gainNX(-800);
		//cm.setBossLog("sanbei");
		                var ii = MapleItemInformationProvider.getInstance();
                        var type = ii.getInventoryType(5211060);
                        var toDrop = ii.randomizeStats(ii.getEquipById(5211060)).copy();
                        var temptime = cm.setzbsj(2*60*60*1000); 
                        toDrop.setExpiration(temptime);
						MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop,false);
                        cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); 
                        cm.sendOk("#b购买成功,请查看背包.");
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"点券商城" + " : " + cm.getPlayer().getName() +"  玩家在倍率商店中购买了VIP特权!~",true).getBytes());
                        cm.dispose();
		cm.sendOk("#b购买成功,请查看背包.");
		cm.setBossLog("sanbei");
        cm.dispose();
		 } else {
        cm.sendOk("你的点券不足800点！一天只能购买一次！或者等级过高!");
        cm.dispose();
		}}
}}
