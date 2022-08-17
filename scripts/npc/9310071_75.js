
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
var textz = ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
textz += " \t\t #e#d欢迎来到#r冒险岛#k#r兑换需要#v4310129#4个\r\n            [以下所有装备全属性为10]   \r\n"              
textz += "#b#L1##v1072278#";
textz += "#L2##v1072325#";
textz += "#L3##v1072326#";
textz += "#L4##v1072515#";
textz += "#L5##v1072482#\r\n";
textz += "#L6##v1072516#";
textz += "#L7##v1072529#";
textz += "#L8##v1072780#";
textz += "#L9##v1072808#";
textz += "#L10##v1072951#";
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1072278,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『副本奖励』" + " : " + "[" + cm.getChar().getName() + "]通过未来之城副本成功兑换了炫酷属性点装！"));
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1072325,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『副本奖励』" + " : " + "[" + cm.getChar().getName() + "]通过未来之城副本成功兑换了炫酷属性点装！"));
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1072326,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『副本奖励』" + " : " + "[" + cm.getChar().getName() + "]通过未来之城副本成功兑换了炫酷属性点装！"));
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1072515,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『副本奖励』" + " : " + "[" + cm.getChar().getName() + "]通过未来之城副本成功兑换了炫酷属性点装！"));
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1072482,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『副本奖励』" + " : " + "[" + cm.getChar().getName() + "]通过未来之城副本成功兑换了炫酷属性点装！"));
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1072516,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『副本奖励』" + " : " + "[" + cm.getChar().getName() + "]通过未来之城副本成功兑换了炫酷属性点装！"));
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1072529,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『副本奖励』" + " : " + "[" + cm.getChar().getName() + "]通过未来之城副本成功兑换了炫酷属性点装！"));
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1072780,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『副本奖励』" + " : " + "[" + cm.getChar().getName() + "]通过未来之城副本成功兑换了炫酷属性点装！"));
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1072808,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『副本奖励』" + " : " + "[" + cm.getChar().getName() + "]通过未来之城副本成功兑换了炫酷属性点装！"));
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1072951,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『副本奖励』" + " : " + "[" + cm.getChar().getName() + "]通过未来之城副本成功兑换了炫酷属性点装！"));
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1002549,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『副本奖励』" + " : " + "[" + cm.getChar().getName() + "]通过未来之城副本成功兑换了炫酷属性点装！"));
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1003860,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『副本奖励』" + " : " + "[" + cm.getChar().getName() + "]通过未来之城副本成功兑换了炫酷属性点装！"));
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1004414,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『副本奖励』" + " : " + "[" + cm.getChar().getName() + "]通过未来之城副本成功兑换了炫酷属性点装！"));
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1004756,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『副本奖励』" + " : " + "[" + cm.getChar().getName() + "]通过未来之城副本成功兑换了炫酷属性点装！"));
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1004597,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("恭喜你换购成功！");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『副本奖励』" + " : " + "[" + cm.getChar().getName() + "]通过未来之城副本成功兑换了炫酷属性点装！"));
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
     } 
       }
         }

