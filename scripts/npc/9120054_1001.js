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
			text += "\r\n"
            //text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
            //text += "#L1##r" + 蓝色箭头 + "挑战【高级BOSS】黑魔女#g>>>>>>>>#b需要#v4000463#*1\r\n\r\n"//3
			//text += "#L2##r" + 红色箭头 + "挑战【高级BOSS】天球#g>>>>>>>>>>#b需要#v4000463#*1\r\n\r\n"//3
            //text += "#L3##r" + 蓝色箭头 + "挑战【高级BOSS】扎昆#g>>>>>>>>>>#b需要#v4001126#*200+500万\r\n\r\n"//3
			//text += "#L4##r" + 蓝色箭头 + "挑战【顶级BOSS】巨型蝙蝠魔#g>>>>#b需要#v4000463#*2\r\n\r\n"//3
            //text += "#L6##r" + 红色箭头 + "挑战【顶级BOSS】暗黑龙王#g>>>>>>#b需要#v4000463#*1个\r\n\r\n"//3
			//text += "#L7##r" + 蓝色箭头 + "挑战【终级BOSS】艾里葛斯#g>>>>>>#b需要#v4000463#*5\r\n\r\n"//3
			//text += "#L8##r" + 红色箭头 + "挑战【终级BOSS】品克缤#g>>>>>>#b需要#v4000463#*5\r\n\r\n"//3
			text += "#L1##k#v2510000#根据制作公式说明合成#v1003900#四维50\r\n\r\n"//3透明帽子
			text += "#L2##k#v2510001#根据制作公式说明合成#v1022079#四维50\r\n\r\n"//3透明眼镜
			text += "#L3##k#v2510002#根据制作公式说明合成#v1012289#四维50\r\n\r\n"//3透明脸饰
			text += "#L4##k#v2510003#根据制作公式说明合成#v1004974#四维50\r\n\r\n"//3航天帽子
			text += "#L5##k#v2510004#根据制作公式说明合成#v1053208#四维50\r\n\r\n"//3航天服
			text += "#L6##k#v2510005#根据制作公式说明合成#v1702852#四维50\r\n\r\n"//3航天星航枪
			text += "#L7##k#v2510006#根据制作公式说明合成#v1053367#四维50\r\n\r\n"//3梦境小星星斗篷
			text += "#L8##k#v2510007#根据制作公式说明合成#v1702874#四维50\r\n\r\n"//3梦境小星星武器
			text += "#L9##k#v2510008#根据制作公式说明合成#v1004776#四维50\r\n\r\n"//3花栗鼠雨帽
			text += "#L10##k#v2510009#根据制作公式说明合成#v1053049#四维50\r\n\r\n"//3花栗鼠雨衣
			text += "#L11##k#v2510010#根据制作公式说明合成#v1702830#四维50\r\n\r\n"//3花栗鼠雨透明伞
			text += "#L12##k#v2510011#根据制作公式说明合成#v1702977#四维50\r\n\r\n"//3可妮兔武器
			text += "#L13##k#v2510012#根据制作公式说明合成#v1005318#四维50\r\n\r\n"//3可妮兔帽子
			text += "#L14##k#v2510013#根据制作公式说明合成#v1053440#四维50\r\n\r\n"//3可妮兔衣服
			text += "#L15##k#v2510014#根据制作公式说明合成#v1702976#四维50\r\n\r\n"//3莎莉武器
			text += "#L16##k#v2510015#根据制作公式说明合成#v1005320#四维50\r\n\r\n"//3莎莉帽子
			text += "#L17##k#v2510016#根据制作公式说明合成#v1053442#四维50\r\n\r\n"//3莎莉衣服
			text += "#L18##k#v2510017#根据制作公式说明合成#v1702975#四维50\r\n\r\n"//3蛙里奥武器
			text += "#L19##k#v2510018#根据制作公式说明合成#v1005319#四维50\r\n\r\n"//3蛙里奥帽子
			text += "#L20##k#v2510019#根据制作公式说明合成#v1053441#四维50\r\n\r\n"//3蛙里奥衣服
			text += "#L21##k#v2510020#根据制作公式说明合成#v1005113#四维50\r\n\r\n"//3熊宝宝暖帽
			text += "#L22##k#v2510021#根据制作公式说明合成#v1053285#四维50\r\n\r\n"//3熊宝宝羽绒服
			text += "#L23##k#v2510022#根据制作公式说明合成#v1702365#四维50\r\n\r\n"//3熊宝宝武器
			
			text += "#L24##k#v2510060#根据制作公式说明合成#v1062068#四维50\r\n\r\n"//3熊宝宝武器
			text += "#L25##k#v2510061#根据制作公式说明合成#v1082312#四维50\r\n\r\n"//3熊宝宝武器
			text += "#L26##k#v2510062#根据制作公式说明合成#v1072658#四维50\r\n\r\n"//3熊宝宝武器
			
			//text += "#L27##k#v2510063#根据制作公式说明合成#v1062112#四维50\r\n\r\n"//3熊宝宝武器
			//text += "#L28##k#v2510064#根据制作公式说明合成#v1082231#四维50\r\n\r\n"//3熊宝宝武器
			//text += "#L29##k#v2510065#根据制作公式说明合成#v1072517#四维50\r\n\r\n"//3熊宝宝武器
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
        } else if (selection == 1) { //透明帽子
			if( cm.haveItem(2510000,1) &&cm.haveItem(2210006,10) && cm.haveItem(4000040,10)&& cm.haveItem(4000176,10)&& cm.haveItem(1002019,1) && cm.getMeso()>=50000000) {
            cm.gainItem(2510000,-1);//透明帽子合成公式
			cm.gainItem(2210006,-10);//七七色蜗牛壳儿
			cm.gainItem(4000040,-10);//蘑菇王芽孢
			cm.gainItem(4000176,-10);//僵尸蘑菇王的孢子
			cm.gainItem(1002019,-1);//白色头巾
			cm.getPlayer().setBossLog("透明帽子",1,1)
			cm.gainItem(1003900,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//透明帽子
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"透明帽子合成公告" + " : " + cm.getPlayer().getName() +"透明帽子合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
        } else if (selection == 2) {  //透明眼镜
		
			if( cm.haveItem(2510001,1) && cm.haveItem(4000082,10)&& cm.haveItem(4000124,10)&& cm.haveItem(1022060,1) && cm.getMeso()>=50000000) {
            cm.gainItem(2510001,-1);//透明眼镜合成公式
			cm.gainItem(4000082,-10);//僵尸丢失的金齿
			cm.gainItem(4000124,-10);//战甲吹泡泡鱼的内存卡
			cm.gainItem(1022060,-1);//狐猴
			cm.getPlayer().setBossLog("透明眼镜",1,1)
			cm.gainItem(1022079,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//透明眼镜
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"透明眼镜合成公告" + " : " + cm.getPlayer().getName() +"透明眼镜合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		  
        } else if (selection == 3) { //透明脸饰
			if( cm.haveItem(2510002,1) && cm.haveItem(4000460,10)&& cm.haveItem(4000461,10)&& cm.haveItem(4000462,10)&& cm.haveItem(1012307,1) && cm.getMeso()>=50000000) {
            cm.gainItem(2510002,-1);//透明脸饰合成公式
			cm.gainItem(4000460,-10);//多多的头盔
			cm.gainItem(4000461,-10);//雷卡的角
			cm.gainItem(4000462,-10);//玄冰独角兽的面具
			cm.gainItem(1012307,-1);//冰晶脸饰  
			cm.getPlayer().setBossLog("透明脸饰",1,1)
			cm.gainItem(1012289,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//透明脸饰
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"透明脸饰合成公告" + " : " + cm.getPlayer().getName() +"透明脸饰合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
        } else if (selection == 4) {//航天帽子
		if( cm.haveItem(2510003,1) && cm.haveItem(4011007,1)&& cm.haveItem(4011008,1)&& cm.haveItem(1002357,1) && cm.getMeso()>=50000000) {
            cm.gainItem(2510003,-1);//航天帽子合成公式
			cm.gainItem(4011007,-1);//月石
			cm.gainItem(4011008,-1);//锂
			cm.gainItem(1002357,-1);//扎昆头盔  
			cm.getPlayer().setBossLog("航天帽子",1,1)
			cm.gainItem(1004974,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//航天帽子
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"航天帽子合成公告" + " : " + cm.getPlayer().getName() +"航天帽子合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
        } else if (selection == 5) { //航天服
		if( cm.haveItem(2510004,1) && cm.haveItem(4000082,5)&& cm.haveItem(4000021,200)&& cm.haveItem(1042027,1) && cm.getMeso()>=50000000) {
            cm.gainItem(2510004,-1);//航天帽子合成公式
			cm.gainItem(4000082,-1);//僵尸丢失的金齿 
			cm.gainItem(4000021,-200);//动物皮
			cm.gainItem(1042027,-1);//蓝色篮球衫   
			cm.getPlayer().setBossLog("航天服",1,1)
			cm.gainItem(1053208,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//航天服
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"航天服合成公告" + " : " + cm.getPlayer().getName() +"航天服合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
        } else if (selection == 6) { //航天星航枪
		if( cm.haveItem(2510005,1) && cm.haveItem(4000040,20)&& cm.haveItem(4000176,20)&& cm.haveItem(1492012,1) && cm.getMeso()>=50000000) {
            cm.gainItem(2510005,-1);//航天星航枪合成公式
			cm.gainItem(4000040,-20);//蘑菇王芽孢
			cm.gainItem(4000176,-20);//僵尸蘑菇王的孢子
			cm.gainItem(1492012,-1);//金枪  
			cm.getPlayer().setBossLog("航天星航枪",1,1)
			cm.gainItem(1702852,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//航天星航枪
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"航天星航枪合成公告" + " : " + cm.getPlayer().getName() +"航天星航枪合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
        } else if (selection == 7) { //梦境小星星斗篷
		if( cm.haveItem(2510006,1) && cm.haveItem(2210006,10)&& cm.haveItem(4000067,10)&& cm.haveItem(1042027,1) && cm.getMeso()>=50000000) {
            cm.gainItem(2510006,-1);//梦境小星星斗篷合成公式
			cm.gainItem(2210006,-10);//七七色蜗牛壳儿
			cm.gainItem(4000067,-10);//幼魔精灵的角
			cm.gainItem(1042027,-1);//蓝色篮球衫  
			cm.getPlayer().setBossLog("梦境小星星斗篷",1,1)
			cm.gainItem(1053367,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//梦境小星星斗篷
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"梦境斗篷合成公告" + " : " + cm.getPlayer().getName() +"梦境小星星斗篷合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		} else if (selection == 8) { //梦境小星星武器
		if( cm.haveItem(2510007,1) && cm.haveItem(4000067,10)&& cm.haveItem(4000124,10)&& cm.haveItem(1402016,1) && cm.getMeso()>=50000000) {
            cm.gainItem(2510007,-1);//梦境小星星武器公式
			cm.gainItem(4000067,-10);//魔精灵的角
			cm.gainItem(4000124,-10);//战甲吹泡泡鱼的内存卡
			cm.gainItem(1402016,-1);//所罗门  
			cm.getPlayer().setBossLog("梦境小星星武器",1,1)
			cm.gainItem(1702874,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//梦境小星星武器
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"梦境武器合成公告" + " : " + cm.getPlayer().getName() +"梦境小星星武器合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		   } else if (selection == 9) { //花栗鼠雨帽
		if( cm.haveItem(2510008,1) && cm.haveItem(4000123,100)&& cm.haveItem(4000128,100)&& cm.haveItem(1002357,1) && cm.getMeso()>=50000000) {
            cm.gainItem(2510008,-1);//花栗鼠雨帽公式
			cm.gainItem(4000123,-10);//旧运动眼镜
			cm.gainItem(4000128,-10);//黄小丑戴的帽子
			cm.gainItem(1002357,-1);//所罗门  
			cm.getPlayer().setBossLog("花栗鼠雨帽",1,1)
			cm.gainItem(1004776,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//花栗鼠雨帽
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"花栗鼠雨帽合成公告" + " : " + cm.getPlayer().getName() +"花栗鼠雨帽合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		   } else if (selection == 10) { //花栗鼠雨衣
		if( cm.haveItem(2510009,1) && cm.haveItem(4000444,200)&& cm.haveItem(4000449,200)&& cm.haveItem(4000454,200) && cm.getMeso()>=50000000) {
            cm.gainItem(2510009,-1);//花栗鼠雨衣公式
			cm.gainItem(4000444,-200);//绿色衣襟
			cm.gainItem(4000449,-200);//蓝色衣襟
			cm.gainItem(4000454,-200);//红色衣襟
			 
			cm.getPlayer().setBossLog("花栗鼠雨衣",1,1)
			cm.gainItem(1053049,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//花栗鼠雨衣
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"花栗鼠雨衣合成公告" + " : " + cm.getPlayer().getName() +"花栗鼠雨衣合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
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
		if( cm.haveItem(2510013,1) && cm.haveItem(4000460,10)&& cm.haveItem(4000461,10)&& cm.haveItem(4000462,10) && cm.getMeso()>=50000000) {
            cm.gainItem(2510013,-1);//可妮兔衣服公式
			cm.gainItem(4000460,-10);//多的头盔
			cm.gainItem(4000461,-10);//雷卡的角
			cm.gainItem(4000462,-10);//玄冰独角兽的面具  
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
		if( cm.haveItem(2510016,1) && cm.haveItem(4000040,20)&& cm.haveItem(4000176,20) && cm.getMeso()>=50000000) {
            cm.gainItem(2510016,-1);//莎莉衣服公式
			cm.gainItem(4000040,-20);//蘑菇王芽孢
			cm.gainItem(4000176,-20);//僵尸蘑菇王的孢子
			  
			cm.getPlayer().setBossLog("莎莉衣服",1,1)
			cm.gainItem(1053442,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//莎莉衣服
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
			cm.gainItem(1005319,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//蛙里奥帽子
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
			cm.gainItem(1053441,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//蛙里奥衣服
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"蛙里奥衣服公告" + " : " + cm.getPlayer().getName() +"蛙里奥衣服合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		   	   		      	      } else if (selection == 21) { //熊宝宝暖帽
		if( cm.haveItem(2510020,1) && cm.haveItem(4000108,500)&& cm.haveItem(4000283,500)&& cm.getMeso()>=50000000) {
            cm.gainItem(2510020,-1);//熊宝宝暖帽公式
			cm.gainItem(4000108,-500);//可爱的熊猫娃娃
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
		if( cm.haveItem(2510021,1) && cm.haveItem(4000108,500)&& cm.haveItem(4000283,500)&& cm.getMeso()>=50000000) {
            cm.gainItem(2510021,-1);//熊宝宝羽绒服公式
			cm.gainItem(4000108,-500);//可爱的熊猫娃娃
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
		if( cm.haveItem(2510022,1) && cm.haveItem(4001241,20)&& cm.haveItem(2210006,20)&& cm.getMeso()>=50000000) {
            cm.gainItem(2510022,-1);//熊宝宝武器公式
			cm.gainItem(4001241,-20);//暴力熊足
			cm.gainItem(2210006,-20);//彩色蜗牛壳
			cm.getPlayer().setBossLog("熊宝宝武器",1,1)
			cm.gainItem(1702365,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//熊宝宝武器
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"熊宝宝武器公告" + " : " + cm.getPlayer().getName() +"熊宝宝武器合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		      	   		      	      } else if (selection == 24) { //彩虹裤子
		if( cm.haveItem(2510060,1) && cm.haveItem(4000233,500)&& cm.haveItem(4000234,500)&& cm.haveItem(4000232,500)&& cm.haveItem(1060007,1)&& cm.haveItem(4002001,20)&& cm.haveItem(4000463,50)&& cm.haveItem(2210006,10)) {
            cm.gainItem(2510060,-1);//彩虹裤子公式
			cm.gainItem(4000233,-500);//半人马净水
			cm.gainItem(4000234,-500);//半人马的骨头
			cm.gainItem(4000232,-500);//半人马的火花
			cm.gainItem(1060007,-1);//蓝马裤
			cm.gainItem(4002001,-20);//蓝蜗牛票
			cm.gainItem(4000463,-50);//中介币
			cm.gainItem(2210006,-10);//彩色蜗牛壳
			cm.getPlayer().setBossLog("彩虹裤子",1,1)
			cm.gainItem(1062068,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//彩虹裤子
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"彩虹裤子公告" + " : " + cm.getPlayer().getName() +"彩虹裤子合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		        	   		      	      } else if (selection == 25) { //彩虹手套
		if( cm.haveItem(2510061,1) && cm.haveItem(4000233,500)&& cm.haveItem(4000234,500)&& cm.haveItem(4000232,500)&& cm.haveItem(4002001,20)&& cm.haveItem(4000463,50)&& cm.haveItem(2210006,20)) {
            cm.gainItem(2510061,-1);//彩虹手套公式
			cm.gainItem(4000233,-500);//半人马净水
			cm.gainItem(4000234,-500);//半人马的骨头
			cm.gainItem(4000232,-500);//半人马的火花
			cm.gainItem(4002001,-20);//蓝蜗牛票
			cm.gainItem(4000463,-50);//中介币
			cm.gainItem(2210006,-20);//彩色蜗牛壳
			cm.getPlayer().setBossLog("彩虹手套",1,1)
			cm.gainItem(1082312,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//彩虹裤子
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"彩虹手套公告" + " : " + cm.getPlayer().getName() +"彩虹手套合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
			}
		        	   		      	      } else if (selection == 26) { //彩虹鞋子
		if( cm.haveItem(2510062,1) && cm.haveItem(4000233,500)&& cm.haveItem(4000234,500)&& cm.haveItem(4000232,500)&& cm.haveItem(4002001,20)&& cm.haveItem(4000463,50)&& cm.haveItem(1072005,1)&& cm.haveItem(2210006,10)) {
            cm.gainItem(2510062,-1);//彩虹鞋子公式
			cm.gainItem(4000233,-500);//半人马净水
			cm.gainItem(4000234,-500);//半人马的骨头
			cm.gainItem(4000232,-500);//半人马的火花
			cm.gainItem(4002001,-20);//蓝蜗牛票
			cm.gainItem(4000463,-50);//中介币
			cm.gainItem(2210006,-10);//彩色蜗牛壳
			cm.getPlayer().setBossLog("彩虹鞋子",1,1)
			cm.gainItem(1072658,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//彩虹鞋子
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"彩虹鞋子公告" + " : " + cm.getPlayer().getName() +"彩虹鞋子合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
			}
			        	   		      	      } else if (selection == 27) { //内裤
		if( cm.haveItem(2510063,1) && cm.haveItem(4002001,20)&& cm.haveItem(4000463,50)&& cm.haveItem(1060007,1)&& cm.haveItem(4000205,300)&& cm.haveItem(4000106,500)&& cm.haveItem(4000171,100)) {
            cm.gainItem(2510063,-1);//内裤公式
			cm.gainItem(4002001,-20);//蓝蜗牛票
			cm.gainItem(4000463,-50);//中介币
			cm.gainItem(1060007,-1);//蓝马裤
			cm.gainItem(4000205,-300);// 绷带
			cm.gainItem(4000106,-500);//玩具熊猫的棉花团
			cm.gainItem(4000171,-100);//虎皮
			cm.getPlayer().setBossLog("内裤",1,1)
			cm.gainItem(1062112,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//内裤
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"内裤公告" + " : " + cm.getPlayer().getName() +"内裤合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
			}
				        	   		      	      } else if (selection == 28) { //手表 
		if( cm.haveItem(2510064,1) && cm.haveItem(4002001,20)&& cm.haveItem(4000463,50)&& cm.haveItem(4000115,200)&& cm.haveItem(4000111,200)&& cm.haveItem(4000435,10)&& cm.haveItem(4000114,200)) {
            cm.gainItem(2510064,-1);//手表公式
			cm.gainItem(4002001,-20);//蓝蜗牛票
			cm.gainItem(4000463,-50);//中介币
			cm.gainItem(4000115,-200);//齿轮
			cm.gainItem(4000111,-200);//便宜的电池
			cm.gainItem(4000435,-10);//联盟的钥匙
			cm.gainItem(4000114,-200);//小桌表
			cm.getPlayer().setBossLog("手表",1,1)
			cm.gainItem(1082231,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//手表
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"手表公告" + " : " + cm.getPlayer().getName() +"手表合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
			}
							        	   		      	      } else if (selection == 29) { //羽毛鞋 
		if( cm.haveItem(2510065,1) && cm.haveItem(4002001,20)&& cm.haveItem(4000463,50)&& cm.haveItem(4003004,300)&& cm.haveItem(4000269,100)&& cm.haveItem(4000268,200)&& cm.haveItem(1072005,1)) {
            cm.gainItem(2510065,-1);//羽毛鞋公式
			cm.gainItem(4002001,-20);//蓝蜗牛票
			cm.gainItem(4000463,-50);//中介币
			cm.gainItem(4003004,-300);//粗羽毛
			cm.gainItem(4000269,-100);//蓝飞龙的鳃
			cm.gainItem(4000268,-200);//红飞龙的翅膀
			cm.gainItem(1072005,-1);//皮制凉鞋
			cm.getPlayer().setBossLog("羽毛鞋",1,1)
			cm.gainItem(1072517,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//羽毛鞋
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"手表公告" + " : " + cm.getPlayer().getName() +"手表合成 全属性50. 收集套装可升级属性",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
			}
        }
    }
}


