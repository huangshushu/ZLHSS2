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
			text += "#r                  属性时装套装激活中心\r\n              #b每激活一套额外奖励100属性点\r\n                #b套装伤害额外显示蓝色数字\r\n\r\n"
            //text += ""\r\n"
            //text += "#L1##r" + 蓝色箭头 + "挑战【高级BOSS】黑魔女#g>>>>>>>>#b需要#v4000463#*1\r\n\r\n"//3
			//text += "#L2##r" + 红色箭头 + "挑战【高级BOSS】天球#g>>>>>>>>>>#b需要#v4000463#*1\r\n\r\n"//3
            //text += "#L3##r" + 蓝色箭头 + "挑战【高级BOSS】扎昆#g>>>>>>>>>>#b需要#v4001126#*200+500万\r\n\r\n"//3
			//text += "#L4##r" + 蓝色箭头 + "挑战【顶级BOSS】巨型蝙蝠魔#g>>>>#b需要#v4000463#*2\r\n\r\n"//3
            //text += "#L6##r" + 红色箭头 + "挑战【顶级BOSS】暗黑龙王#g>>>>>>#b需要#v4000463#*1个\r\n\r\n"//3
			//text += "#L7##r" + 蓝色箭头 + "挑战【终级BOSS】艾里葛斯#g>>>>>>#b需要#v4000463#*5\r\n\r\n"//3
			//text += "#L8##r" + 红色箭头 + "挑战【终级BOSS】品克缤#g>>>>>>#b需要#v4000463#*5\r\n\r\n"//3
			text += " #L1##k激活套装#r(伤害5%)#k合成#v1003900##v1012289##v1022079#单件四维100#l\r\n\r\n"//3透明帽子
			text += " #L2##k激活套装#r(伤害5%)#k合成#v1004974##v1053208##v1702852#单件四维100#l\r\n\r\n"//3透明眼镜
			text += "   #L3##k激活套装#r(伤害4%)#k合成#v1053367##v1702874#单件四维100#l\r\n\r\n"//3透明脸饰
			text += " #L4##k激活套装#r(伤害5%)#k合成#v1004776##v1053049##v1702830#单件四维100#l\r\n\r\n"//3航天帽子
			text += " #L5##k激活套装#r(伤害5%)#k合成#v1702977##v1005318##v1053440#单件四维100#l\r\n\r\n"//3航天帽子
			text += " #L6##k激活套装#r(伤害5%)#k合成#v1702976##v1005320##v1053442#单件四维100#l\r\n\r\n"//3航天帽子
			text += " #L7##k激活套装#r(伤害5%)#k合成#v1702975##v1005319##v1053441#单件四维100#l\r\n\r\n"//3航天帽子
			text += " #L8##k激活套装#r(伤害5%)#k合成#v1005113##v1053285##v1702365#单件四维100#l\r\n\r\n"//3航天帽子
			text += " #L9##k激活套装#r(伤害5%)#k合成#v1062068##v1082312##v1072658#单件四维100#l\r\n\r\n"//3航天帽子
			text += " #L10##k激活套装#r(伤害5%)#k合成#v1062112##v1082231##v1072517#单件四维100#l\r\n\r\n"//3航天帽子
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
        } else if (selection == 1) { //透明
			if( cm.haveItem(1003900,1) &&cm.haveItem(1022079,1) && cm.haveItem(1012289,1)&& cm.getPlayer().getBossLog("透明帽子",1) == 1&& cm.getPlayer().getBossLog("透明眼镜",1) == 1&& cm.getPlayer().getBossLog("透明脸饰",1) == 1 && cm.getMeso()>=50000000) {
            cm.gainItem(1003900,-1);//透明帽子
			cm.gainItem(1022079,-1);//透明眼镜
			cm.gainItem(1012289,-1);//透明脸饰
			cm.gainItem(1003900,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//透明帽子
			cm.gainItem(1022079,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//透明眼镜
			cm.gainItem(1012289,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//透明脸饰
			cm.getPlayer().setBossLog("透明帽子",1,1)
			cm.getPlayer().setBossLog("透明眼镜",1,1)
			cm.getPlayer().setBossLog("透明脸饰",1,1)
			cm.gainAp(100);//获得物品
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"透明套装激活公告" + " : " + cm.getPlayer().getName() +"透明套装激活 3件套全属性100. 额外送100属性点",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("激活失败 材料不足 游戏币5000万");
			cm.dispose();
		   }
        } else if (selection == 2) {  //航天
		
			if( cm.haveItem(1004974,1) &&cm.haveItem(1053208,1) && cm.haveItem(1702852,1)&& cm.getPlayer().getBossLog("航天帽子",1) == 1&& cm.getPlayer().getBossLog("航天服",1) == 1&& cm.getPlayer().getBossLog("航天星航枪",1) == 1 && cm.getMeso()>=50000000) {
            cm.gainItem(1004974,-1);//航天帽子
			cm.gainItem(1053208,-1);//航天眼镜
			cm.gainItem(1702852,-1);//航天脸饰
			cm.gainItem(1004974,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//航天帽子
			cm.gainItem(1053208,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//航天眼镜
			cm.gainItem(1702852,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//航天脸饰
			cm.getPlayer().setBossLog("航天帽子",1,1)
			cm.getPlayer().setBossLog("航天服",1,1)
			cm.getPlayer().setBossLog("航天星航枪",1,1)
			cm.gainAp(100);//获得物品
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"航天套装激活公告" + " : " + cm.getPlayer().getName() +"航天套装激活 3件套全属性100. 额外送100属性点",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("激活失败 材料不足 游戏币5000万");
			cm.dispose();
		   }
		  
        } else if (selection == 3) { //梦境小星
			if( cm.haveItem(1053367,1) &&cm.haveItem(1702874,1) && cm.getPlayer().getBossLog("梦境小星星斗篷",1) == 1&& cm.getPlayer().getBossLog("梦境小星星武器",1) == 1 && cm.getMeso()>=50000000) {
            cm.gainItem(1053367,-1);//梦境小星星斗篷
			cm.gainItem(1702874,-1);//梦境小星星武器
			cm.gainItem(1053367,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//梦境小星星斗篷
			cm.gainItem(1702874,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//梦境小星星武器
			cm.getPlayer().setBossLog("梦境小星星斗篷",1,1)
			cm.getPlayer().setBossLog("梦境小星星武器",1,1)
			cm.gainAp(100);//获得物品
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"梦境套装激活公告" + " : " + cm.getPlayer().getName() +"梦境套装激活 2件套全属性100. 额外送100属性点",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("激活失败 材料不足 游戏币5000万");
			cm.dispose();
		   }
        } else if (selection == 4) {//花栗鼠
		if( cm.haveItem(1004776,1) &&cm.haveItem(1053049,1) && cm.haveItem(1702830,1)&& cm.getPlayer().getBossLog("花栗鼠雨帽",1) == 1&& cm.getPlayer().getBossLog("花栗鼠雨透明伞",1) == 1&& cm.getPlayer().getBossLog("花栗鼠雨衣",1) == 1 && cm.getMeso()>=50000000) {
            cm.gainItem(1004776,-1);//花栗鼠雨帽
			cm.gainItem(1053049,-1);//花栗鼠雨衣
			cm.gainItem(1702830,-1);//花栗鼠雨透明伞
			cm.gainItem(1004776,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//花栗鼠雨帽
			cm.gainItem(1053049,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//花栗鼠雨衣
			cm.gainItem(1702830,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//花栗鼠雨透明伞
			cm.getPlayer().setBossLog("花栗鼠雨帽",1,1)
			cm.getPlayer().setBossLog("花栗鼠雨衣",1,1)
			cm.getPlayer().setBossLog("花栗鼠雨透明伞",1,1)
			cm.gainAp(100);//获得物品
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"花栗鼠套装激活公告" + " : " + cm.getPlayer().getName() +"花栗鼠套装激活 3件套全属性100. 额外送100属性点",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("激活失败 材料不足 游戏币5000万");
			cm.dispose();
		   }
        } else if (selection == 5) { //可妮兔
		if( cm.haveItem(1702977,1) &&cm.haveItem(1005318,1) && cm.haveItem(1053440,1)&& cm.getPlayer().getBossLog("可妮兔武器",1) == 1&& cm.getPlayer().getBossLog("可妮兔帽子",1) == 1&& cm.getPlayer().getBossLog("可妮兔衣服",1) == 1 && cm.getMeso()>=50000000) {
            cm.gainItem(1702977,-1);//可妮兔武器
			cm.gainItem(1005318,-1);//可妮兔帽子
			cm.gainItem(1053440,-1);//可妮兔衣服
			cm.gainItem(1702977,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//可妮兔武器
			cm.gainItem(1005318,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//可妮兔帽子
			cm.gainItem(1053440,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//可妮兔衣服
			cm.getPlayer().setBossLog("可妮兔武器",1,1)
			cm.getPlayer().setBossLog("可妮兔帽子",1,1)
			cm.getPlayer().setBossLog("可妮兔衣服",1,1)
			cm.gainAp(100);//获得物品
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"可妮兔套装激活公告" + " : " + cm.getPlayer().getName() +"可妮兔套装激活 3件套全属性100. 额外送100属性点",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("激活失败 材料不足 游戏币5000万");
			cm.dispose();
		   }
        } else if (selection == 6) { //莎莉
		if( cm.haveItem(1702976,1) &&cm.haveItem(1005320,1) && cm.haveItem(1053442,1)&& cm.getPlayer().getBossLog("莎莉武器",1) == 1&& cm.getPlayer().getBossLog("莎莉衣服",1) == 1&& cm.getPlayer().getBossLog("莎莉帽子",1) == 1 && cm.getMeso()>=50000000) {
            cm.gainItem(1702976,-1);//莎莉武器
			cm.gainItem(1005320,-1);//莎莉帽子
			cm.gainItem(1053442,-1);//莎莉衣服
			cm.gainItem(1702976,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//莎莉武器
			cm.gainItem(1005320,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//莎莉帽子
			cm.gainItem(1053442,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//莎莉衣服
			cm.getPlayer().setBossLog("莎莉武器",1,1)
			cm.getPlayer().setBossLog("莎莉帽子",1,1)
			cm.getPlayer().setBossLog("莎莉衣服",1,1)
			cm.gainAp(100);//获得物品
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"莎莉套装激活公告" + " : " + cm.getPlayer().getName() +"莎莉套装激活 3件套全属性100. 额外送100属性点",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("激活失败 材料不足 游戏币5000万");
			cm.dispose();
		   }
        } else if (selection == 7) { //蛙里奥
		if( cm.haveItem(1702975,1) &&cm.haveItem(1005319,1) && cm.haveItem(1053441,1)&& cm.getPlayer().getBossLog("蛙里奥武器",1) == 1&& cm.getPlayer().getBossLog("蛙里奥帽子",1) == 1&& cm.getPlayer().getBossLog("蛙里奥衣服",1) == 1 && cm.getMeso()>=50000000) {
            cm.gainItem(1702975,-1);//蛙里奥武器
			cm.gainItem(1005319,-1);//蛙里奥帽子
			cm.gainItem(1053441,-1);//蛙里奥衣服
			cm.gainItem(1702975,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//蛙里奥武器
			cm.gainItem(1005319,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//蛙里奥帽子
			cm.gainItem(1053441,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//蛙里奥衣服
			cm.getPlayer().setBossLog("蛙里奥武器",1,1)
			cm.getPlayer().setBossLog("蛙里奥帽子",1,1)
			cm.getPlayer().setBossLog("蛙里奥衣服",1,1)
			cm.gainAp(100);//获得物品
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"蛙里奥套装激活公告" + " : " + cm.getPlayer().getName() +"蛙里奥套装激活 3件套全属性100. 额外送100属性点",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("激活失败 材料不足 游戏币5000万");
			cm.dispose();
		   }
		} else if (selection == 8) { //熊宝宝
		if( cm.haveItem(1053285,1) &&cm.haveItem(1005113,1) && cm.haveItem(1702365,1)&& cm.getPlayer().getBossLog("熊宝宝羽绒服",1) == 1&& cm.getPlayer().getBossLog("熊宝宝暖帽",1) == 1&& cm.getPlayer().getBossLog("熊宝宝武器",1) == 1 && cm.getMeso()>=50000000) {
            cm.gainItem(1053285,-1);//熊宝宝羽绒服
			cm.gainItem(1005113,-1);//熊宝宝暖帽
			cm.gainItem(1702365,-1);//熊宝宝武器
			cm.gainItem(1053285,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//熊宝宝羽绒服
			cm.gainItem(1005113,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//熊宝宝暖帽
			cm.gainItem(1702365,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//熊宝宝武器
			cm.getPlayer().setBossLog("熊宝宝羽绒服",1,1)
			cm.getPlayer().setBossLog("熊宝宝暖帽",1,1)
			cm.getPlayer().setBossLog("熊宝宝武器",1,1)
			cm.gainAp(100);//获得物品
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"熊宝宝套装激活公告" + " : " + cm.getPlayer().getName() +"熊宝宝套装激活 3件套全属性100. 额外送100属性点",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("激活失败 材料不足 游戏币5000万");
			cm.dispose();
		   }
		   } else if (selection == 9) { //彩虹套装
		if( cm.haveItem(1062068,1) &&cm.haveItem(1082312,1) && cm.haveItem(1072658,1)&& cm.getPlayer().getBossLog("彩虹裤子",1) == 1&& cm.getPlayer().getBossLog("彩虹手套",1) == 1&& cm.getPlayer().getBossLog("彩虹鞋子",1) == 1 && cm.getMeso()>=50000000) {
            cm.gainItem(1062068,-1);//彩虹裤子
			cm.gainItem(1082312,-1);//彩虹手套
			cm.gainItem(1072658,-1);//彩虹鞋子
			cm.gainItem(1062068,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//彩虹裤子
			cm.gainItem(1082312,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//彩虹手套
			cm.gainItem(1072658,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//彩虹鞋子
			cm.getPlayer().setBossLog("彩虹裤子",1,1)
			cm.getPlayer().setBossLog("彩虹手套",1,1)
			cm.getPlayer().setBossLog("彩虹鞋子",1,1)
			cm.gainAp(100);//获得物品
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"彩虹套装激活公告" + " : " + cm.getPlayer().getName() +"彩虹套装激活 3件套全属性100. 额外送100属性点",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("激活失败 材料不足 游戏币5000万");
			cm.dispose();
		   }
		   } else if (selection == 10) { //内裤套装
		if( cm.haveItem(1062112,1) &&cm.haveItem(1082231,1) && cm.haveItem(1072517,1)&& cm.getPlayer().getBossLog("内裤",1) == 1&& cm.getPlayer().getBossLog("手表",1) == 1&& cm.getPlayer().getBossLog("羽毛鞋",1) == 1 && cm.getMeso()>=50000000) {
            cm.gainItem(1062112,-1);//内裤
			cm.gainItem(1082231,-1);//手表
			cm.gainItem(1072517,-1);//羽毛鞋
			cm.gainItem(1062112,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//内裤
			cm.gainItem(1082231,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//手表
			cm.gainItem(1072517,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//羽毛鞋
			cm.getPlayer().setBossLog("内裤",1,1)
			cm.getPlayer().setBossLog("手表",1,1)
			cm.getPlayer().setBossLog("羽毛鞋",1,1)
			cm.gainAp(100);//获得物品
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"内裤套装激活公告" + " : " + cm.getPlayer().getName() +"熊宝宝套装激活 3件套全属性100. 额外送100属性点",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("激活失败 材料不足 游戏币5000万");
			cm.dispose();
		   }
		   } else if (selection == 11) { //花栗鼠雨透明伞
		if( cm.haveItem(2510010,1) && cm.haveItem(4000124,10)&& cm.haveItem(4000082,10)&& cm.haveItem(1302017,1) && cm.getMeso()>=50000000) {
            cm.gainItem(2510010,-1);//花栗鼠雨透明伞公式
			cm.gainItem(4000124,-10);//战甲吹泡泡鱼的内存卡
			cm.gainItem(4000082,-10);//僵尸丢失的金齿
			cm.gainItem(1302017,-1);//蓝色雨伞  
			cm.getPlayer().setBossLog("花栗鼠雨透明伞",1,1)
			cm.gainItem(1702830,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//花栗鼠雨透明伞
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"花栗鼠雨透明伞公告" + " : " + cm.getPlayer().getName() +"花栗鼠雨透明伞合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		   } else if (selection == 12) { //可妮兔武器
		if( cm.haveItem(2510011,1) && cm.haveItem(4000169,1000)&& cm.haveItem(4031561,10) && cm.getMeso()>=50000000) {
            cm.gainItem(2510011,-1);//可妮兔武器公式
			cm.gainItem(4000169,-1000);//捣米棒
			cm.gainItem(4031561,-10);//赫丽娜的邮票  
			cm.getPlayer().setBossLog("可妮兔武器",1,1)
			cm.gainItem(1702977,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//可妮兔武器
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"可妮兔武器公告" + " : " + cm.getPlayer().getName() +"可妮兔武器合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		      } else if (selection == 13) { //可妮兔帽子
		if( cm.haveItem(2510012,1) && cm.haveItem(4000445,400)&& cm.haveItem(4000450,400)&& cm.haveItem(4000455,400) && cm.getMeso()>=50000000) {
            cm.gainItem(2510012,-1);//可妮兔帽子公式
			cm.gainItem(4000445,-400);//追忆绿色高帽
			cm.gainItem(4000450,-400);//后悔蓝色高帽 
			cm.gainItem(4000455,-400);//后悔红色高帽  
			cm.getPlayer().setBossLog("可妮兔帽子",1,1)
			cm.gainItem(1005318,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//可妮兔帽子
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"可妮兔帽子公告" + " : " + cm.getPlayer().getName() +"可妮兔帽子合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		   	      } else if (selection == 14) { //可妮兔衣服
		if( cm.haveItem(2510013,1) && cm.haveItem(4009113,10)&& cm.haveItem(4009123,10)&& cm.haveItem(4009118,10) && cm.getMeso()>=50000000) {
            cm.gainItem(2510013,-1);//可妮兔衣服公式
			cm.gainItem(4009113,-10);//多的头盔
			cm.gainItem(4009123,-10);//雷卡的角
			cm.gainItem(4009118,-10);//玄冰独角兽的面具  
			cm.getPlayer().setBossLog("可妮兔衣服",1,1)
			cm.gainItem(1053440,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//可妮兔衣服
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"可妮兔衣服公告" + " : " + cm.getPlayer().getName() +"可妮兔衣服合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		   	      } else if (selection == 15) { //莎莉武器
		if( cm.haveItem(2510014,1) && cm.haveItem(4000109,1000)&& cm.haveItem(4002000,10) &&cm.getMeso()>=50000000) {
            cm.gainItem(2510014,-1);//莎莉武器公式
			cm.gainItem(4000109,-100);//玩具小鸭
			cm.gainItem(4002000,-10);//蜗牛邮票
			cm.getPlayer().setBossLog("莎莉武器",1,1)
			cm.gainItem(1702976,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//莎莉武器
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"莎莉武器公告" + " : " + cm.getPlayer().getName() +"莎莉武器合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		      	      } else if (selection == 16) { //莎莉帽子
		if( cm.haveItem(2510015,1) && cm.haveItem(4000445,400)&& cm.haveItem(4000450,400)&& cm.haveItem(4000455,400) && cm.getMeso()>=50000000) {
            cm.gainItem(2510015,-1);//莎莉帽子公式
			cm.gainItem(4000445,-400);//追忆绿色高帽
			cm.gainItem(4000450,-400);//后悔蓝色高帽
			cm.gainItem(4000455,-400);//后悔红色高帽  
			cm.getPlayer().setBossLog("莎莉帽子",1,1)
			cm.gainItem(1005320,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//莎莉帽子
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"莎莉帽子公告" + " : " + cm.getPlayer().getName() +"莎莉帽子合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		      	      } else if (selection == 17) { //莎莉衣服
		if( cm.haveItem(2510016,1) && cm.haveItem(4000040,20)&& cm.haveItem(4032966,20)&& cm.haveItem(4009118,10) && cm.getMeso()>=50000000) {
            cm.gainItem(2510016,-1);//莎莉衣服公式
			cm.gainItem(4000040,-20);//晴天王芽孢
			cm.gainItem(4032966,-20);//僵尸晴天王的孢子
			  
			cm.getPlayer().setBossLog("莎莉衣服",1,1)
			cm.gainItem(1053440,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//莎莉衣服
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"莎莉衣服公告" + " : " + cm.getPlayer().getName() +"莎莉衣服合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		           } else if (selection == 18) { //蛙里奥武器
		if( cm.haveItem(2510017,1) && cm.haveItem(4002000,10)&& cm.haveItem(4002001,10)&& cm.haveItem(4002002,10) &&cm.haveItem(4002003,10) && cm.getMeso()>=50000000) {
            cm.gainItem(2510017,-1);//蛙里奥武器公式
			cm.gainItem(4002000,-10);//蜗牛邮票
			cm.gainItem(4002001,-10);//蓝蜗牛邮票
			cm.gainItem(4002002,-10);//木妖邮票  
			cm.gainItem(4002003,-10);//绿水灵邮票
			cm.getPlayer().setBossLog("蛙里奥武器",1,1)
			cm.gainItem(1702975,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//蛙里奥武器
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"蛙里奥武器公告" + " : " + cm.getPlayer().getName() +"蛙里奥武器合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		   		      	      } else if (selection == 19) { //蛙里奥帽子
		if( cm.haveItem(2510018,1) && cm.haveItem(4000247,500)&& cm.haveItem(4000041,500)&& cm.getMeso()>=50000000) {
            cm.gainItem(2510018,-1);//蛙里奥帽子公式
			cm.gainItem(4000247,-500);//青蛙的后腿
			cm.gainItem(4000041,-500);//巫婆的试验用青蛙  
			cm.getPlayer().setBossLog("蛙里奥帽子",1,1)
			cm.gainItem(1053440,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//蛙里奥帽子
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"蛙里奥帽子公告" + " : " + cm.getPlayer().getName() +"蛙里奥帽子合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		   		      	      } else if (selection == 20) { //蛙里奥衣服
		if( cm.haveItem(2510019,1) && cm.haveItem(4000247,500)&& cm.haveItem(4000247,500)&& cm.getMeso()>=50000000) {
            cm.gainItem(2510019,-1);//蛙里奥衣服公式
			cm.gainItem(4000247,-500);//青蛙的后腿
			cm.gainItem(4000041,-500);//巫婆的试验用青蛙 
			cm.getPlayer().setBossLog("蛙里奥衣服",1,1)
			cm.gainItem(1053440,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//蛙里奥衣服
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"蛙里奥衣服公告" + " : " + cm.getPlayer().getName() +"蛙里奥衣服合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		   	   		      	      } else if (selection == 21) { //熊宝宝暖帽
		if( cm.haveItem(2510020,1) && cm.haveItem(4009080,500)&& cm.haveItem(4000283,500)&& cm.getMeso()>=50000000) {
            cm.gainItem(2510020,-1);//熊宝宝暖帽公式
			cm.gainItem(4009080,-500);//可爱的熊猫娃娃
			cm.gainItem(4000283,-500);//熊掌 
			cm.getPlayer().setBossLog("熊宝宝暖帽",1,1)
			cm.gainItem(1005113,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//熊宝宝暖帽
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"熊宝宝暖帽公告" + " : " + cm.getPlayer().getName() +"熊宝宝暖帽合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		      	   		      	      } else if (selection == 22) { //熊宝宝羽绒服
		if( cm.haveItem(2510021,1) && cm.haveItem(4009080,500)&& cm.haveItem(4000283,500)&& cm.getMeso()>=50000000) {
            cm.gainItem(2510021,-1);//熊宝宝羽绒服公式
			cm.gainItem(4009080,-500);//可爱的熊猫娃娃
			cm.gainItem(4000283,-500);//熊掌 
			cm.getPlayer().setBossLog("熊宝宝羽绒服",1,1)
			cm.gainItem(1053285,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//熊宝宝羽绒服
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"熊宝宝羽绒服公告" + " : " + cm.getPlayer().getName() +"熊宝宝羽绒服合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		      	   		      	      } else if (selection == 23) { //熊宝宝武器
		if( cm.haveItem(2510022,1) && cm.haveItem(4001241,20)&& cm.haveItem(2591008,2)&& cm.getMeso()>=50000000) {
            cm.gainItem(2510022,-1);//熊宝宝武器公式
			cm.gainItem(4001241,-20);//暴力熊足
			cm.gainItem(2591008,-2);//灵魂宝珠(武公熊猫) 
			cm.getPlayer().setBossLog("熊宝宝武器",1,1)
			cm.gainItem(1702365,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//熊宝宝武器
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"熊宝宝武器公告" + " : " + cm.getPlayer().getName() +"熊宝宝武器合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		      	   		      	      } else if (selection == 24) { //套服
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
		        	   		      	      } else if (selection == 25) { //套服
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


