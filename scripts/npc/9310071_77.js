
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
textz += "#L1#50个#v4001465#兑换50个#v4033248##L2#50个#v4033248#兑换50个#v4001465#\r\n";
textz += "#L3#2个#v4310029#兑换3个#v2340000#  #L4#2个#v4310029#兑换3个#v2049100#\r\n";
textz += "#L5#10个#v4310029#兑换15个#v2340000##L6#10个#v4310029#兑换15个#v2049100#\r\n";
cm.sendSimple (textz);   
 } else if (selection == 1) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();

			}else */if(cm.haveItem(4001465,50)){
                                cm.gainItem(4001465, -50);
                                cm.gainItem(4033248,50);
cm.sendOk("恭喜你换购成功！");
			   				        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]使用50个爱心宝石兑换50个金色枫叶成功！");		
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
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4033248,50)){
				cm.gainItem(4033248, -50);
                                cm.gainItem(4001465,50);
cm.sendOk("恭喜你换购成功！");
			   				        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]使用50个金色枫叶兑换50个爱心宝石成功！");
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
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4310029,2)){
				cm.gainItem(4310029, -2);
                                cm.gainItem(2340000,3);
cm.sendOk("恭喜你换购成功！");
			   				        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]使用2个飞升突破币兑换3个祝福卷轴成功！");
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
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4310029,2)){
				cm.gainItem(4310029, -2);
                                cm.gainItem(2049100,3);
cm.sendOk("恭喜你换购成功！");
			   				        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]使用2个飞升突破币兑换3个混沌卷轴成功！");
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
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4310029,10)){
				cm.gainItem(4310029, -10);
                                cm.gainItem(2340000,15);
cm.sendOk("恭喜你换购成功！");
			   				        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]使用10个飞升突破币兑换15个祝福卷轴成功！");
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
}

cm.sendSimple (textz);    
 } else if (selection == 6) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4310029,10)){
				cm.gainItem(4310029, -10);
                                cm.gainItem(2049100,15);
cm.sendOk("恭喜你换购成功！");
			   				        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]使用10个飞升突破币兑换15个混沌卷轴成功！");
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
                                cm.gainItem(1102386,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
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
                                cm.gainItem(1102385,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
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
                                cm.gainItem(1102659,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("恭喜你换购成功！");
cm.worldMessage(6, "恭喜玩家[" + cm.getPlayer().getName() + "]成功兑换了红色巨锤！");
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
                                cm.gainItem(1102659,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("恭喜你换购成功！");
cm.worldMessage(6, "恭喜玩家[" + cm.getPlayer().getName() + "]成功兑换了红色长杖！");
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
}
     } 
       }
         }

