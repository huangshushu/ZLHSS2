
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {
if (mode == -1) {
cm.dispose();
} else {
if (status >= 0 && mode == 0) {
cm.dispose();
return;
}
if (mode == 1)
status++;
else
status--;
if (status == 0) {

var textz = " \t\t #e#d 欢迎来到#r天使冒险岛#k#r翅膀兑换系统\r\n    #r兑换需要#v4310027#【抽奖或积分商城购买】全属性30               \r\n             #v3991018##v3991007##v3991012##v3991023##v3991003#\r\n"
textz += "  #e#d 买过一次想换翅膀的话可以花费20积分找群主再购\r\n"
textz += "#L20##v1102349#";
textz += "#L13##v1102798#";
textz += "#L14##v1102589#";
textz += "#L15##v1102378#"; 
textz += "#L16##v1102697#";
textz += "#L17##v1102702#\r\n";          
textz += "#L1##v1102659#";
textz += "#L12##v1102624#";
textz += "#L3##v1102630#";
textz += "#L4##v1102724#";
textz += "#L5##v1102723#";
textz += "#L19##v1102709#\r\n";
textz += "#L6##v1102629#";
textz += "#L10##v1102546#";
textz += "#L11##v1102779#";
textz += "#L9##v1102453#";
textz += "#L7##v1102386#";
textz += "#L8##v1102385#";
textz += "#L2##v1102487#\r\n";
cm.sendSimple (textz);
 } else if (selection == 20) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("消耗栏空余不足2个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4310027,1)){
                                cm.gainItem(4310027, -1);
                                cm.gainItem(1102349,30,30,30,30,30,30,30,30,30,30,30,30,30,30);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "『兑换系统』" + " : " + "[" + cm.getChar().getName() + "]成功兑换了酷炫翅膀！"));
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
cm.sendSimple (textz); 
 } else if (selection == 19) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("消耗栏空余不足2个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4310027,1)){
                                cm.gainItem(4310027, -1);
                                cm.gainItem(1102709,30,30,30,30,30,30,30,30,30,30,30,30,30,30);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "『兑换系统』" + " : " + "[" + cm.getChar().getName() + "]成功兑换了酷炫翅膀！"));
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
cm.sendSimple (textz); 
 } else if (selection == 18) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("消耗栏空余不足2个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4310027,1)){
                                cm.gainItem(4310027, -1);
                                cm.gainItem(1102671,30,30,30,30,30,30,30,30,30,30,30,30,30,30);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "『兑换系统』" + " : " + "[" + cm.getChar().getName() + "]成功兑换了酷炫翅膀！"));
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
cm.sendSimple (textz); 
 } else if (selection == 17) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("消耗栏空余不足2个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4310027,1)){
                                cm.gainItem(4310027, -1);
                                cm.gainItem(1102702,30,30,30,30,30,30,30,30,30,30,30,30,30,30);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "『兑换系统』" + " : " + "[" + cm.getChar().getName() + "]成功兑换了酷炫翅膀！"));
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
cm.sendSimple (textz);  
 } else if (selection == 16) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("消耗栏空余不足2个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4310027,1)){
                                cm.gainItem(4310027, -1);
                                cm.gainItem(1102697,30,30,30,30,30,30,30,30,30,30,30,30,30,30);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "『兑换系统』" + " : " + "[" + cm.getChar().getName() + "]成功兑换了酷炫翅膀！"));
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
cm.sendSimple (textz);  
 } else if (selection == 15) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("消耗栏空余不足2个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4310027,1)){
                                cm.gainItem(4310027, -1);
                                cm.gainItem(1102378,30,30,30,30,30,30,30,30,30,30,30,30,30,30);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "『兑换系统』" + " : " + "[" + cm.getChar().getName() + "]成功兑换了酷炫翅膀！"));
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
cm.sendSimple (textz);   
 } else if (selection == 14) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("消耗栏空余不足2个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4310027,1)){
                                cm.gainItem(4310027, -1);
                                cm.gainItem(1102589,30,30,30,30,30,30,30,30,30,30,30,30,30,30);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "『兑换系统』" + " : " + "[" + cm.getChar().getName() + "]成功兑换了酷炫翅膀！"));
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
cm.sendSimple (textz);    
 } else if (selection == 13) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("消耗栏空余不足2个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4310027,1)){
                                cm.gainItem(4310027, -1);
                                cm.gainItem(1102798,30,30,30,30,30,30,30,30,30,30,30,30,30,30);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "『兑换系统』" + " : " + "[" + cm.getChar().getName() + "]成功兑换了酷炫翅膀！"));
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
cm.sendSimple (textz);      
 } else if (selection == 1) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("消耗栏空余不足2个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4310027,1)){
                                cm.gainItem(4310027, -1);
                                cm.gainItem(1102659,30,30,30,30,30,30,30,30,30,30,30,30,30,30);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "『兑换系统』" + " : " + "[" + cm.getChar().getName() + "]成功兑换了酷炫翅膀！"));
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
cm.sendSimple (textz);    
 } else if (selection == 2) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("消耗栏空余不足2个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4310027,1)){
				cm.gainItem(4310027, -1);
                                cm.gainItem(1102487,30,30,30,30,30,30,30,30,30,30,30,30,30,30);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "『兑换系统』" + " : " + "[" + cm.getChar().getName() + "]成功兑换了酷炫翅膀！"));
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
}


cm.sendSimple (textz);    
 } else if (selection == 3) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("消耗栏空余不足2个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4310027,1)){
				cm.gainItem(4310027, -1);
                                cm.gainItem(1102630,30,30,30,30,30,30,30,30,30,30,30,30,30,30);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "『兑换系统』" + " : " + "[" + cm.getChar().getName() + "]成功兑换了酷炫翅膀！"));
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
}

cm.sendSimple (textz);    
 } else if (selection == 4) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("消耗栏空余不足2个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4310027,1)){
				cm.gainItem(4310027, -1);
                                cm.gainItem(1102724,30,30,30,30,30,30,30,30,30,30,30,30,30,30);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "『兑换系统』" + " : " + "[" + cm.getChar().getName() + "]成功兑换了酷炫翅膀！"));
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
}
 } else if (selection == 5) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("消耗栏空余不足2个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4310027,1)){
				cm.gainItem(4310027, -1);
                                cm.gainItem(1102723,30,30,30,30,30,30,30,30,30,30,30,30,30,30);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "『兑换系统』" + " : " + "[" + cm.getChar().getName() + "]成功兑换了酷炫翅膀！"));
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
}
 } else if (selection == 6) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("消耗栏空余不足2个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4310027,1)){
				cm.gainItem(4310027, -1);
                                cm.gainItem(1102629,30,30,30,30,30,30,30,30,30,30,30,30,30,30);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "『兑换系统』" + " : " + "[" + cm.getChar().getName() + "]成功兑换了酷炫翅膀！"));
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
}
 } else if (selection == 7) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("消耗栏空余不足2个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4310027,1)){
				cm.gainItem(4310027, -1);
                                cm.gainItem(1102386,30,30,30,30,30,30,30,30,30,30,30,30,30,30);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "『兑换系统』" + " : " + "[" + cm.getChar().getName() + "]成功兑换了酷炫翅膀！"));
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
}
 } else if (selection == 8) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("消耗栏空余不足2个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4310027,1)){
				cm.gainItem(4310027, -1);
                                cm.gainItem(1102385,30,30,30,30,30,30,30,30,30,30,30,30,30,30);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "『兑换系统』" + " : " + "[" + cm.getChar().getName() + "]成功兑换了酷炫翅膀！"));
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
}
 } else if (selection == 9) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("消耗栏空余不足2个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4310027,1)){
                                cm.gainItem(4310027, -1);
                                cm.gainItem(1102453,30,30,30,30,30,30,30,30,30,30,30,30,30,30);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "『兑换系统』" + " : " + "[" + cm.getChar().getName() + "]成功兑换了酷炫翅膀！"));
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
 } else if (selection == 10) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("消耗栏空余不足2个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4310027,1)){
                                cm.gainItem(4310027, -1);
                                cm.gainItem(1102546,30,30,30,30,30,30,30,30,30,30,30,30,30,30);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "『兑换系统』" + " : " + "[" + cm.getChar().getName() + "]成功兑换了酷炫翅膀！"));
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
 } else if (selection == 11) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("消耗栏空余不足2个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4310027,1)){
                                cm.gainItem(4310027, -1);
                                cm.gainItem(1102779,30,30,30,30,30,30,30,30,30,30,30,30,30,30);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "『兑换系统』" + " : " + "[" + cm.getChar().getName() + "]成功兑换了酷炫翅膀！"));
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
 } else if (selection == 12) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("消耗栏空余不足2个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4310027,1)){
                                cm.gainItem(4310027, -1);
                                cm.gainItem(1102624,30,30,30,30,30,30,30,30,30,30,30,30,30,30);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "『兑换系统』" + " : " + "[" + cm.getChar().getName() + "]成功兑换了酷炫翅膀！"));
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
     } 
       }
         }

