var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 大粉红爱心 = "#fItem/Etc/0427/04270001/Icon8/4#";  //
var 小粉红爱心 = "#fItem/Etc/0427/04270001/Icon8/5#";  //
var 小黄星 = "#fItem/Etc/0427/04270001/Icon9/0#";  //
var 大黄星 = "#fItem/Etc/0427/04270001/Icon9/1#";  //
var 小水滴 = "#fItem/Etc/0427/04270001/Icon10/5#";  //
var 大水滴 = "#fItem/Etc/0427/04270001/Icon10/4#";  //
var tz = "#fEffect/CharacterEff/1082565/4/0#";  //粉兔子
var tz1 = "#fEffect/CharacterEff/1082565/0/0#";  //橙兔子
var tz2 = "#fEffect/CharacterEff/1082565/2/0#";  //蓝兔子
var 邪恶小兔 = "#fEffect/CharacterEff/1112960/3/0#";  //邪恶小兔 【小】
var 邪恶小兔2 = "#fEffect/CharacterEff/1112960/3/1#";  //邪恶小兔 【大】
var 花草 ="#fEffect/SetEff/208/effect/walk2/4#";
var 花草1 ="#fEffect/SetEff/208/effect/walk2/3#";
var 小花 ="#fMap/MapHelper/weather/birthday/2#";
var 桃花 ="#fMap/MapHelper/weather/rose/4#";
var 金枫叶 ="#fMap/MapHelper/weather/maple/2#";
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
var 红心= "#fEffect/CharacterEff/1082588/0/0#"; 

//var tz = "#fEffect/CharacterEff/1082565/4/0#";  //兔子粉

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
    if (cm.getLevel() <= 0) {
			cm.openNpc(9900004,1);
    }else if (status == 0) {
		var selStr = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
			selStr += "              #r欢迎来到月月冒险岛成长戒指#k\r\n"; 
			selStr += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
			selStr += "               #L0#"+小烟花+"#r成长戒指说明"+小烟花+"#l\r\n\r\n";
			selStr += "               #L1#"+小烟花+"#b成长戒指进化"+小烟花+"#l\r\n\r\n";
			selStr += "               #L2#"+小烟花+"#r成长每日工资"+小烟花+"#l\r\n";
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n            #r欢迎来到月月冒险岛成长戒指说明#k\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n     #r成长戒指共分15阶，领取新手礼包将自动获得#v1112599#\r\n\r\n       #b提交足够数量的指定材料，可进化至下一阶段\r\n\r\n 进化至15阶#v1112613#，可提升戒指属性至：四维518，攻魔198\r\n\r\n#r成长戒指达到12阶，可领取成长每日工资，阶数越高工资越多\r\n");
            break;
		case 1:
            if (cm.haveItem(1112599,1)){
				if(cm.haveItem(4000019,88) && cm.haveItem(4000000,88) && cm.haveItem(4000016,88)){
					cm.gainItem(1112599,-1);
					cm.gainItem(4000019,-88);
					cm.gainItem(4000000,-88);
					cm.gainItem(4000016,-88);
					cm.gainItem(1112600,18,18,18,18,0,0,8,8,0,0,0,0,0,0);
					cm.sendOk("#r恭喜你，成功将成长戒指进化至2阶！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成长戒指" + " : " + "恭喜" + cm.getChar().getName() + "成功将成长戒指进化至第2阶，战斗力又提升了一个档次！"));
					cm.dispose();
					break;
				}
				else {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b1阶戒指#v1112599#进化：需要#v4000019#*88，#v4000000#*88，#v4000016#*88\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
					cm.dispose();
					break;
				}
			}
			else if (cm.haveItem(1112600,1)){
				if(cm.haveItem(4000019,288) && cm.haveItem(4000000,288) && cm.haveItem(4000016,288)){
					cm.gainItem(1112600,-1);
					cm.gainItem(4000019,-288);
					cm.gainItem(4000000,-288);
					cm.gainItem(4000016,-288);
					cm.gainItem(1112601,38,38,38,38,0,0,18,18,0,0,0,0,0,0);
					cm.sendOk("#r恭喜你，成功将成长戒指进化至3阶！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成长戒指" + " : " + "恭喜" + cm.getChar().getName() + "成功将成长戒指进化至第3阶，战斗力又提升了一个档次！"));
					cm.dispose();
					break;
				}
				else {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b2阶戒指#v1112600#进化：需要#v4000019#*288，#v4000000#*288，#v4000016#*288\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
					cm.dispose();
					break;
				}
			}
			else if (cm.haveItem(1112601,1)){
				if(cm.haveItem(4000019,488) && cm.haveItem(4000000,488) && cm.haveItem(4000016,488) && cm.haveItem(4000040,8)){
					cm.gainItem(1112601,-1);
					cm.gainItem(4000019,-488);
					cm.gainItem(4000000,-488);
					cm.gainItem(4000016,-488);
					cm.gainItem(4000040,-8);
					cm.gainItem(1112602,58,58,58,58,0,0,28,28,0,0,0,0,0,0);
					cm.sendOk("#r恭喜你，成功将成长戒指进化至4阶！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成长戒指" + " : " + "恭喜" + cm.getChar().getName() + "成功将成长戒指进化至第4阶，战斗力又提升了一个档次！"));
					cm.dispose();
					break;
				}
				else {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b3阶戒指#v1112601#进化：需要#v4000019#*488，#v4000000#*488，#v4000016#*488，#v4000040#*8\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
					cm.dispose();
					break;
				}
			}
			else if (cm.haveItem(1112602,1)){
				if(cm.haveItem(4000019,688) && cm.haveItem(4000000,688) && cm.haveItem(4000016,688) && cm.haveItem(4000176,8)){
					cm.gainItem(1112602,-1);
					cm.gainItem(4000019,-688);
					cm.gainItem(4000000,-688);
					cm.gainItem(4000016,-688);
					cm.gainItem(4000176,-8);
					cm.gainItem(1112603,78,78,78,78,0,0,38,38,0,0,0,0,0,0);
					cm.sendOk("#r恭喜你，成功将成长戒指进化至5阶！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成长戒指" + " : " + "恭喜" + cm.getChar().getName() + "成功将成长戒指进化至第5阶，战斗力又提升了一个档次！"));
					cm.dispose();
					break;
				}
				else {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b4阶戒指#v1112602#进化：需要#v4000019#*688，#v4000000#*688，#v4000016#*688，#v4000176#*8\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
					cm.dispose();
					break;
				}
			}
			else if (cm.haveItem(1112603,1)){
				if(cm.haveItem(4000019,988) && cm.haveItem(4000000,988) && cm.haveItem(4000016,988) && cm.haveItem(4031227,8)){
					cm.gainItem(1112603,-1);
					cm.gainItem(4000019,-988);
					cm.gainItem(4000000,-988);
					cm.gainItem(4000016,-988);
					cm.gainItem(4031227,-8);
					cm.gainItem(1112604,108,108,108,108,0,0,48,48,0,0,0,0,0,0);
					cm.sendOk("#r恭喜你，成功将成长戒指进化至6阶！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成长戒指" + " : " + "恭喜" + cm.getChar().getName() + "成功将成长戒指进化至第6阶，战斗力又提升了一个档次！"));
					cm.dispose();
					break;
				}
				else {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b5阶戒指#v1112603#进化：需要#v4000019#*988，#v4000000#*988，#v4000016#*988，#v4031227#*8\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
					cm.dispose();
					break;
				}
			}
			else if (cm.haveItem(1112604,1)){
				if(cm.haveItem(4000019,1288) && cm.haveItem(4000000,1288) && cm.haveItem(4000016,1288) && cm.haveItem(4001341,8)){
					cm.gainItem(1112604,-1);
					cm.gainItem(4000019,-1288);
					cm.gainItem(4000000,-1288);
					cm.gainItem(4000016,-1288);
					cm.gainItem(4001341,-8);
					cm.gainItem(1112605,138,138,138,138,0,0,58,58,0,0,0,0,0,0);
					cm.sendOk("#r恭喜你，成功将成长戒指进化至7阶！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成长戒指" + " : " + "恭喜" + cm.getChar().getName() + "成功将成长戒指进化至第7阶，战斗力又提升了一个档次！"));
					cm.dispose();
					break;
				}
				else {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b6阶戒指#v1112604#进化：需要#v4000019#*1288，#v4000000#*1288，#v4000016#*1288，#v4001341#*8\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
					cm.dispose();
					break;
				}
			}
			else if (cm.haveItem(1112605,1)){
				if(cm.haveItem(4000019,1588) && cm.haveItem(4000000,1588) && cm.haveItem(4000016,1588) && cm.haveItem(4001241,8) && cm.haveItem(4001242,8)){
					cm.gainItem(1112605,-1);
					cm.gainItem(4000019,-1588);
					cm.gainItem(4000000,-1588);
					cm.gainItem(4000016,-1588);
					cm.gainItem(4001241,-8);
					cm.gainItem(4001242,-8);
					cm.gainItem(1112606,168,168,168,168,0,0,68,68,0,0,0,0,0,0);
					cm.sendOk("#r恭喜你，成功将成长戒指进化至8阶！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成长戒指" + " : " + "恭喜" + cm.getChar().getName() + "成功将成长戒指进化至第8阶，战斗力又提升了一个档次！"));
					cm.dispose();
					break;
				}
				else {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b7阶戒指#v1112605#进化：需要#v4000019#*1588，#v4000000#*1588，#v4000016#*1588，#v4001241#*8，#v4001242#*8\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
					cm.dispose();
					break;
				}
			}
			else if (cm.haveItem(1112606,1)){
				if(cm.haveItem(4000019,1888) && cm.haveItem(4000000,1888) && cm.haveItem(4000016,1888) && cm.haveItem(4000082,8)){
					cm.gainItem(1112606,-1);
					cm.gainItem(4000019,-1888);
					cm.gainItem(4000000,-1888);
					cm.gainItem(4000016,-1888);
					cm.gainItem(4000082,-8);
					cm.gainItem(1112607,208,208,208,208,0,0,78,78,0,0,0,0,0,0);
					cm.sendOk("#r恭喜你，成功将成长戒指进化至9阶！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成长戒指" + " : " + "恭喜" + cm.getChar().getName() + "成功将成长戒指进化至第9阶，战斗力又提升了一个档次！"));
					cm.dispose();
					break;
				}
				else {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b8阶戒指#v1112606#进化：需要#v4000019#*1888，#v4000000#*1888，#v4000016#*1888，#v4000082#*8\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
					cm.dispose();
					break;
				}
			}
			else if (cm.haveItem(1112607,1)){
				if(cm.haveItem(4000019,2088) && cm.haveItem(4000000,2088) && cm.haveItem(4000016,2088) && cm.haveItem(4000082,18)){
					cm.gainItem(1112607,-1);
					cm.gainItem(4000019,-2088);
					cm.gainItem(4000000,-2088);
					cm.gainItem(4000016,-2088);
					cm.gainItem(4000082,-18);
					cm.gainItem(1112608,248,248,248,248,0,0,88,88,0,0,0,0,0,0);
					cm.sendOk("#r恭喜你，成功将成长戒指进化至10阶！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成长戒指" + " : " + "恭喜" + cm.getChar().getName() + "成功将成长戒指进化至第10阶，战斗力又提升了一个档次！"));
					cm.dispose();
					break;
				}
				else {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b9阶戒指#v1112607#进化：需要#v4000019#*2088，#v4000000#*2088，#v4000016#*2088，#v4000082#*18\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
					cm.dispose();
					break;
				}
			}
			else if (cm.haveItem(1112608,1)){
				if(cm.haveItem(4000019,2388) && cm.haveItem(4000000,2388) && cm.haveItem(4000016,2388) && cm.haveItem(4000082,38)){
					cm.gainItem(1112608,-1);
					cm.gainItem(4000019,-2388);
					cm.gainItem(4000000,-2388);
					cm.gainItem(4000016,-2388);
					cm.gainItem(4000082,-38);
					cm.gainItem(1112609,288,288,288,288,0,0,98,98,0,0,0,0,0,0);
					cm.sendOk("#r恭喜你，成功将成长戒指进化至11阶！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成长戒指" + " : " + "恭喜" + cm.getChar().getName() + "成功将成长戒指进化至第11阶，战斗力又提升了一个档次！"));
					cm.dispose();
					break;
				}
				else {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b10阶戒指#v1112608#进化：需要#v4000019#*2388，#v4000000#*2388，#v4000016#*2388，#v4000082#*38\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
					cm.dispose();
					break;
				}
			}
			else if (cm.haveItem(1112609,1)){
				if(cm.haveItem(4000019,2688) && cm.haveItem(4000000,2688) && cm.haveItem(4000016,2688) && cm.haveItem(4000082,58)){
					cm.gainItem(1112609,-1);
					cm.gainItem(4000019,-2688);
					cm.gainItem(4000000,-2688);
					cm.gainItem(4000016,-2688);
					cm.gainItem(4000082,-58);
					cm.gainItem(1112610,338,338,338,338,0,0,108,108,0,0,0,0,0,0);
					cm.sendOk("#r恭喜你，成功将成长戒指进化至12阶！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成长戒指" + " : " + "恭喜" + cm.getChar().getName() + "成功将成长戒指进化至第12阶，战斗力又提升了一个档次！"));
					cm.dispose();
					break;
				}
				else {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b11阶戒指#v1112609#进化：需要#v4000019#*2688，#v4000000#*2688，#v4000016#*2688，#v4000082#*58\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
					cm.dispose();
					break;
				}
			}
			else if (cm.haveItem(1112610,1)){
				if(cm.haveItem(4000019,2988) && cm.haveItem(4000000,2988) && cm.haveItem(4000016,2988) && cm.haveItem(4000082,88)){
					cm.gainItem(1112610,-1);
					cm.gainItem(4000019,-2988);
					cm.gainItem(4000000,-2988);
					cm.gainItem(4000016,-2988);
					cm.gainItem(4000082,-88);
					cm.gainItem(1112611,388,388,388,388,0,0,128,128,0,0,0,0,0,0);
					cm.sendOk("#r恭喜你，成功将成长戒指进化至13阶！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成长戒指" + " : " + "恭喜" + cm.getChar().getName() + "成功将成长戒指进化至第13阶，战斗力又提升了一个档次！"));
					cm.dispose();
					break;
				}
				else {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b12阶戒指#v1112610#进化：需要#v4000019#*2988，#v4000000#*2988，#v4000016#*2988，#v4000082#*88\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
					cm.dispose();
					break;
				}
			}
			else if (cm.haveItem(1112611,1)){
				if(cm.haveItem(4000019,3288) && cm.haveItem(4000000,3288) && cm.haveItem(4000016,3288) && cm.haveItem(4000082,108)){
					cm.gainItem(1112611,-1);
					cm.gainItem(4000019,-3288);
					cm.gainItem(4000000,-3288);
					cm.gainItem(4000016,-3288);
					cm.gainItem(4000082,-108);
					cm.gainItem(1112612,448,448,448,448,0,0,158,158,0,0,0,0,0,0);
					cm.sendOk("#r恭喜你，成功将成长戒指进化至14阶！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成长戒指" + " : " + "恭喜" + cm.getChar().getName() + "成功将成长戒指进化至第14阶，战斗力又提升了一个档次！"));
					cm.dispose();
					break;
				}
				else {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b13阶戒指#v1112611#进化：需要#v4000019#*3288，#v4000000#*3288，#v4000016#*3288，#v4000082#*108\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
					cm.dispose();
					break;
				}
			}
			else if (cm.haveItem(1112612,1)){
				if(cm.haveItem(4000019,3888) && cm.haveItem(4000000,3888) && cm.haveItem(4000016,3888) && cm.haveItem(4000082,128)){
					cm.gainItem(1112612,-1);
					cm.gainItem(4000019,-3888);
					cm.gainItem(4000000,-3888);
					cm.gainItem(4000016,-3888);
					cm.gainItem(4000082,-128);
					cm.gainItem(1112613,518,518,518,518,0,0,198,198,0,0,0,0,0,0);
					cm.sendOk("#r恭喜你，成功将成长戒指进化至15阶！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成长戒指" + " : " + "恭喜" + cm.getChar().getName() + "成功将成长戒指进化至第15阶，战斗力又提升了一个档次！"));
					cm.dispose();
					break;
				}
				else {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b14阶戒指#v1112612#进化：需要#v4000019#*3888，#v4000000#*3888，#v4000016#*3888，#v4000082#*128\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
					cm.dispose();
					break;
				}
			}
			else if (cm.haveItem(1112613,1)){
				cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b你的成长戒指已经进化至最高阶段！\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
				cm.dispose();
				break;
			}
			else {
				cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b你的材料不足，或者你的背包内没有成长戒指！\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
				cm.dispose();
				break;
			}
		case 2:
            if (cm.haveItem(1112610,1) && cm.getBossLog("成长每日工资") < 1){
				cm.gainItem(4005004,10);//黑暗水晶
				cm.gainItem(2049100,1);//混沌卷轴
				cm.gainItem(3992025,300);//圣诞大星
				cm.gainMeso(+5000000);//500W
				cm.gainNX(1000);
				cm.setBossLog("成长每日工资");
				cm.sendOk("#r恭喜你，成功领取了12阶成长每日工资！");
				cm.dispose();
				return;
			}
			else if (cm.haveItem(1112611,1) && cm.getBossLog("成长每日工资") < 1){
				cm.gainItem(4005004,20);//黑暗水晶
				cm.gainItem(2049100,2);//混沌卷轴
				cm.gainItem(3992025,400);//圣诞大星
				cm.gainMeso(+7500000);//750W
				cm.gainNX(2000);
				cm.setBossLog("成长每日工资");
				cm.sendOk("#r恭喜你，成功领取了13阶成长每日工资！");
				cm.dispose();
				return;
			}
			else if (cm.haveItem(1112612,1) && cm.getBossLog("成长每日工资") < 1){
				cm.gainItem(4005004,30);//黑暗水晶
				cm.gainItem(2049100,3);//混沌卷轴
				cm.gainItem(3992025,500);//圣诞大星
				cm.gainMeso(+10000000);//1000W
				cm.gainNX(3000);
				cm.setBossLog("成长每日工资");
				cm.sendOk("#r恭喜你，成功领取了14阶成长每日工资！");
				cm.dispose();
				return;
			}
			else if (cm.haveItem(1112613,1) && cm.getBossLog("成长每日工资") < 1){
				cm.gainItem(4005004,40);//黑暗水晶
				cm.gainItem(2049100,4);//混沌卷轴
				cm.gainItem(4251202,2);//万能水晶
				cm.gainItem(3992025,800);//圣诞大星
				cm.gainMeso(+15000000);//1500W
				cm.gainNX(5000);
				cm.setBossLog("成长每日工资");
				cm.sendOk("#r恭喜你，成功领取了15阶成长每日工资！");
				cm.dispose();
				return;
			}
			else {
				cm.sendOk("#r你的成长戒指尚未达到12阶，或你今天已经领取过成长每日工资！");
				cm.dispose();
				return;
			}
		case 36:
            cm.dispose();
            cm.openNpc(9201126,0);
			break;
		}
    }
}
