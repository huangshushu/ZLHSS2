
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
v1ar textz = ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
textz += " \t\t #e#d 欢迎来到#r天使冒险岛#k#r必成兑换系统\r\n\t\t#r兑换需要一个#v4310057#【充值获得】               \r\n           #v3991018##v3991007##v3991012##v3991023##v3991003#  #L0##v1442133#\r\n"              
textz += "#L1##v1402214#";
textz += "#L2##v1452220#";
textz += "#L3##v1462208#";
textz += "#L4##v1472230#";
textz += "#L5##v1492194#\r\n";
textz += "#L6##v1432182#";
textz += "#L7##v1332242#";
textz += "#L8##v1482183#";
textz += "#L9##v1422156#";
textz += "#L10##v1382226#\r\n";
cm.sendSimple (textz);
} else if (selection == 0) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,1)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4310057,1)){
                                cm.gainItem(4310057, -1);
                                cm.gainItem(1442133, 1);
cm.sendOk("恭喜你换购成功！");
cm.worldMessage(6, "恭喜玩家[" + cm.getPlayer().getName() + "]成功兑换了红色矛！");
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
			/*if(!cm.beibao(1,1)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4310057,1)){
                                cm.gainItem(4310057, -1);
                                cm.gainItem(1402214, 1);
cm.sendOk("恭喜你换购成功！");
cm.worldMessage(6, "恭喜玩家[" + cm.getPlayer().getName() + "]成功兑换了红色双手剑！");
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
			/*if(!cm.beibao(1,1)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();

			}else */if(cm.haveItem(4310057,1)){
				cm.gainItem(4310057, -1);
                                cm.gainItem(1452220, 1);
cm.sendOk("恭喜你换购成功！");
cm.worldMessage(6, "恭喜玩家[" + cm.getPlayer().getName() + "]成功兑换了红色弓！");
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
			/*if(!cm.beibao(1,1)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();

			}else */if(cm.haveItem(4310057,1)){
				cm.gainItem(4310057, -1);
                                cm.gainItem(1462208, 1);
cm.sendOk("恭喜你换购成功！");
cm.worldMessage(6, "恭喜玩家[" + cm.getPlayer().getName() + "]成功兑换了红色弩！");
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
			/*if(!cm.beibao(1,1)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();

			}else */if(cm.haveItem(4310057,1)){
				cm.gainItem(4310057, -1);
                                cm.gainItem(1472230, 1);
cm.sendOk("恭喜你换购成功！");
cm.worldMessage(6, "恭喜玩家[" + cm.getPlayer().getName() + "]成功兑换了红色拳套！");
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
			/*if(!cm.beibao(1,1)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();

			}else */if(cm.haveItem(4310057,1)){
				cm.gainItem(4310057, -1);
                                cm.gainItem(1492194, 1);
cm.sendOk("恭喜你换购成功！");
cm.worldMessage(6, "恭喜玩家[" + cm.getPlayer().getName() + "]成功兑换了红色短枪！");
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
			/*if(!cm.beibao(1,1)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();

			}else */if(cm.haveItem(4310057,1)){
				cm.gainItem(4310057, -1);
                                cm.gainItem(1432182, 1);
cm.sendOk("恭喜你换购成功！");
cm.worldMessage(6, "恭喜玩家[" + cm.getPlayer().getName() + "]成功兑换了红色枪！");
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
			/*if(!cm.beibao(1,1)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();

			}else */if(cm.haveItem(4310057,1)){
				cm.gainItem(4310057, -1);
                                cm.gainItem(1332242, 1);
cm.sendOk("恭喜你换购成功！");
cm.worldMessage(6, "恭喜玩家[" + cm.getPlayer().getName() + "]成功兑换了红色短刀！");
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
			/*if(!cm.beibao(1,1)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();

			}else */if(cm.haveItem(4310057,1)){
				cm.gainItem(4310057, -1);
                                cm.gainItem(1482183, 1);
cm.sendOk("恭喜你换购成功！");
cm.worldMessage(6, "恭喜玩家[" + cm.getPlayer().getName() + "]成功兑换了红色拳甲！");
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
			/*if(!cm.beibao(1,1)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();

			}else */if(cm.haveItem(4310057,1)){
				cm.gainItem(4310057, -1);
                                cm.gainItem(1422156, 1);
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
			/*if(!cm.beibao(1,1)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();

			}else */if(cm.haveItem(4310057,1)){
				cm.gainItem(4310057, -1);
                                cm.gainItem(1382226, 1);
cm.sendOk("恭喜你换购成功！");
cm.worldMessage(6, "恭喜玩家[" + cm.getPlayer().getName() + "]成功兑换了红色长杖！");
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
}
     } 
       }
         }

