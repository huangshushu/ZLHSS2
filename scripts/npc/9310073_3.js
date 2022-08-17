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
			selStr += "              #r欢迎来到月月冒险岛神化之翼#k\r\n"; 
			selStr += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
			selStr += "               #L0#"+小烟花+"#r神化之翼说明"+小烟花+"#l\r\n\r\n";
			selStr += "               #L1#"+小烟花+"#b神化之翼进阶"+小烟花+"#l\r\n\r\n";
			selStr += "              #L2#"+小烟花+"#r神化之翼材料图"+小烟花+"#l\r\n\r\n";
			selStr += "             #L3#"+小烟花+"#r武器攻击卷换阳光"+小烟花+"#l\r\n";
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n            #r欢迎来到月月冒险岛神化之翼说明#k\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n     #r神化之翼共分15阶，领取新手礼包将自动获得#v1102039#\r\n\r\n            #b提交足够数量的#v4001165#，可神化进阶\r\n\r\n 进化至15阶#v1102551#，神化之翼总属性：四维666，攻魔450\r\n");
            break;
		case 1:
            if (cm.haveItem(1102039,1)){
				if(cm.haveItem(4001165,98)){
					cm.gainItem(1102039,-1);
					cm.gainItem(4001165,-98);
					cm.gainItem(1102758,15,15,15,15,0,0,15,15,0,0,0,0,0,0);
					cm.sendOk("#r恭喜你，成功将神化之翼进阶至1阶！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "神化之翼" + " : " + "恭喜" + cm.getChar().getName() + "成功将神化之翼进阶至第1阶，战斗力又提升了一个档次！"));
					cm.dispose();
					break;
				}
				else {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b0阶神化之翼#v1102039#进阶：需要#v4001165#*98\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
					cm.dispose();
					break;
				}
			}
			else if (cm.haveItem(1102758,1)){
				if(cm.haveItem(4001165,168)){
					cm.gainItem(1102758,-1);
					cm.gainItem(4001165,-168);
					cm.gainItem(1102729,25,25,25,25,0,0,25,25,0,0,0,0,0,0);
					cm.sendOk("#r恭喜你，成功将神化之翼进阶至2阶！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "神化之翼" + " : " + "恭喜" + cm.getChar().getName() + "成功将神化之翼进阶至第2阶，战斗力又提升了一个档次！"));
					cm.dispose();
					break;
				}
				else {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b1阶神化之翼#v1102758#进阶：需要#v4001165#*168\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
					cm.dispose();
					break;
				}
			}
			else if (cm.haveItem(1102729,1)){
				if(cm.haveItem(4001165,258)){
					cm.gainItem(1102729,-1);
					cm.gainItem(4001165,-258);
					cm.gainItem(1102511,40,40,40,40,0,0,35,35,0,0,0,0,0,0);
					cm.sendOk("#r恭喜你，成功将神化之翼进阶至3阶！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "神化之翼" + " : " + "恭喜" + cm.getChar().getName() + "成功将神化之翼进阶至第3阶，战斗力又提升了一个档次！"));
					cm.dispose();
					break;
				}
				else {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b2阶神化之翼#v1102729#进阶：需要#v4001165#*258\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
					cm.dispose();
					break;
				}
			}
			else if (cm.haveItem(1102511,1)){
				if(cm.haveItem(4001165,378)){
					cm.gainItem(1102511,-1);
					cm.gainItem(4001165,-378);
					cm.gainItem(1102629,60,60,60,60,0,0,45,45,0,0,0,0,0,0);
					cm.sendOk("#r恭喜你，成功将神化之翼进阶至4阶！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "神化之翼" + " : " + "恭喜" + cm.getChar().getName() + "成功将神化之翼进阶至第4阶，战斗力又提升了一个档次！"));
					cm.dispose();
					break;
				}
				else {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b3阶神化之翼#v1102511#进阶：需要#v4001165#*378\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
					cm.dispose();
					break;
				}
			}
			else if (cm.haveItem(1102629,1)){
				if(cm.haveItem(4001165,528)){
					cm.gainItem(1102629,-1);
					cm.gainItem(4001165,-528);
					cm.gainItem(1102730,85,85,85,85,0,0,55,55,0,0,0,0,0,0);
					cm.sendOk("#r恭喜你，成功将神化之翼进阶至5阶！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "神化之翼" + " : " + "恭喜" + cm.getChar().getName() + "成功将神化之翼进阶至第5阶，战斗力又提升了一个档次！"));
					cm.dispose();
					break;
				}
				else {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b4阶神化之翼#v1102629#进阶：需要#v4001165#*528\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
					cm.dispose();
					break;
				}
			}
			else if (cm.haveItem(1102730,1)){
				if(cm.haveItem(4001165,888)){
					cm.gainItem(1102730,-1);
					cm.gainItem(4001165,-888);
					cm.gainItem(1102709,115,115,115,115,0,0,65,65,0,0,0,0,0,0);
					cm.sendOk("#r恭喜你，成功将神化之翼进阶至6阶！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "神化之翼" + " : " + "恭喜" + cm.getChar().getName() + "成功将神化之翼进阶至第6阶，战斗力又提升了一个档次！"));
					cm.dispose();
					break;
				}
				else {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b5阶神化之翼#v1102730#进阶：需要#v4001165#*888\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
					cm.dispose();
					break;
				}
			}
			else if (cm.haveItem(1102709,1)){
				if(cm.haveItem(4001165,1111)){
					cm.gainItem(1102709,-1);
					cm.gainItem(4001165,-1111);
					cm.gainItem(1102378,150,150,150,150,0,0,75,75,0,0,0,0,0,0);
					cm.sendOk("#r恭喜你，成功将神化之翼进阶至7阶！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "神化之翼" + " : " + "恭喜" + cm.getChar().getName() + "成功将神化之翼进阶至第7阶，战斗力又提升了一个档次！"));
					cm.dispose();
					break;
				}
				else {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b6阶神化之翼#v1102709#进阶：需要#v4001165#*1111\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
					cm.dispose();
					break;
				}
			}
			else if (cm.haveItem(1102378,1)){
				if(cm.haveItem(4001165,2222)){
					cm.gainItem(1102378,-1);
					cm.gainItem(4001165,-2222);
					cm.gainItem(1102698,200,200,200,200,0,0,90,90,0,0,0,0,0,0);
					cm.sendOk("#r恭喜你，成功将神化之翼进阶至8阶！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "神化之翼" + " : " + "恭喜" + cm.getChar().getName() + "成功将神化之翼进阶至第8阶，战斗力又提升了一个档次！"));
					cm.dispose();
					break;
				}
				else {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b7阶神化之翼#v1102378#进阶：需要#v4001165#*2222\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
					cm.dispose();
					break;
				}
			}
			else if (cm.haveItem(1102698,1)){
				if(cm.haveItem(4001165,3333)){
					cm.gainItem(1102698,-1);
					cm.gainItem(4001165,-3333);
					cm.gainItem(1102630,250,250,250,250,0,0,110,110,0,0,0,0,0,0);
					cm.sendOk("#r恭喜你，成功将神化之翼进阶至9阶！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "神化之翼" + " : " + "恭喜" + cm.getChar().getName() + "成功将神化之翼进阶至第9阶，战斗力又提升了一个档次！"));
					cm.dispose();
					break;
				}
				else {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b8阶神化之翼#v1102698#进阶：需要#v4001165#*3333\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
					cm.dispose();
					break;
				}
			}
			else if (cm.haveItem(1102630,1)){
				if(cm.haveItem(4001165,4444)){
					cm.gainItem(1102630,-1);
					cm.gainItem(4001165,-4444);
					cm.gainItem(1102450,300,300,300,300,0,0,135,135,0,0,0,0,0,0);
					cm.sendOk("#r恭喜你，成功将神化之翼进阶至10阶！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "神化之翼" + " : " + "恭喜" + cm.getChar().getName() + "成功将神化之翼进阶至第10阶，战斗力又提升了一个档次！"));
					cm.dispose();
					break;
				}
				else {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b9阶神化之翼#v1102630#进阶：需要#v4001165#*4444\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
					cm.dispose();
					break;
				}
			}
			else if (cm.haveItem(1102450,1)){
				if(cm.haveItem(4001165,5555)){
					cm.gainItem(1102450,-1);
					cm.gainItem(4001165,-5555);
					cm.gainItem(1102386,380,380,380,380,0,0,170,170,0,0,0,0,0,0);
					cm.sendOk("#r恭喜你，成功将神化之翼进阶至11阶！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "神化之翼" + " : " + "恭喜" + cm.getChar().getName() + "成功将神化之翼进阶至第11阶，战斗力又提升了一个档次！"));
					cm.dispose();
					break;
				}
				else {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b10阶神化之翼#v1102450#进阶：需要#v4001165#*5555\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
					cm.dispose();
					break;
				}
			}
			else if (cm.haveItem(1102386,1)){
				if(cm.haveItem(4001165,6666)){
					cm.gainItem(1102386,-1);
					cm.gainItem(4001165,-6666);
					cm.gainItem(1102385,450,450,450,450,0,0,210,210,0,0,0,0,0,0);
					cm.sendOk("#r恭喜你，成功将神化之翼进阶至12阶！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "神化之翼" + " : " + "恭喜" + cm.getChar().getName() + "成功将神化之翼进阶至第12阶，战斗力又提升了一个档次！"));
					cm.dispose();
					break;
				}
				else {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b11阶神化之翼#v1102386#进阶：需要#v4001165#*6666\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
					cm.dispose();
					break;
				}
			}
			else if (cm.haveItem(1102385,1)){
				if(cm.haveItem(4001165,7777)){
					cm.gainItem(1102385,-1);
					cm.gainItem(4001165,-7777);
					cm.gainItem(1102487,500,500,500,500,0,0,275,275,0,0,0,0,0,0);
					cm.sendOk("#r恭喜你，成功将神化之翼进阶至13阶！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "神化之翼" + " : " + "恭喜" + cm.getChar().getName() + "成功将神化之翼进阶至第13阶，战斗力又提升了一个档次！"));
					cm.dispose();
					break;
				}
				else {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b12阶神化之翼#v1102385#进阶：需要#v4001165#*7777\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
					cm.dispose();
					break;
				}
			}
			else if (cm.haveItem(1102487,1)){
				if(cm.haveItem(4001165,8888)){
					cm.gainItem(1102487,-1);
					cm.gainItem(4001165,-8888);
					cm.gainItem(1102453,555,555,555,555,0,0,350,350,0,0,0,0,0,0);
					cm.sendOk("#r恭喜你，成功将神化之翼进阶至14阶！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "神化之翼" + " : " + "恭喜" + cm.getChar().getName() + "成功将神化之翼进阶至第14阶，战斗力又提升了一个档次！"));
					cm.dispose();
					break;
				}
				else {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b13阶神化之翼#v1102487#进阶：需要#v4001165#*8888\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
					cm.dispose();
					break;
				}
			}else if (cm.haveItem(1102453,1)){
				if(cm.haveItem(4001165,9999)){
					cm.gainItem(1102453,-1);
					cm.gainItem(4001165,-9999);
					cm.gainItem(1102039,666,666,666,666,0,0,450,450,0,0,0,0,0,0);
					cm.sendOk("#r恭喜你，成功将神化之翼进阶至15阶！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "神化之翼" + " : " + "恭喜" + cm.getChar().getName() + "成功将神化之翼进阶至第15阶，战斗力又提升了一个档次！"));
					cm.dispose();
					break;
				}	
				else {
					cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b14阶神化之翼#v1102453#进阶：需要#v4001165#*9999\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
					cm.dispose();
					break;
				}
			}
			else if (cm.haveItem(1102798,1)){
				cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b你的神化之翼已经进阶至最高阶段！\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
				cm.dispose();
				break;
			}
			else {
				cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n#b你的材料不足，或者你的背包内没有神化之翼！\r\n\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n");
				cm.dispose();
				break;
			}
		case 2:
            cm.warp(541010050);//太阳神的赐福的地图
            cm.dispose();
            break;
		case 3:
            
            cm.openNpc(2010003,0);//9201126

		}
    }
}
