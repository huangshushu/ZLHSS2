/*
 十字戒指制作
 */

 var ring = [1112599,1112600,1112601,1112602,1112603,1112604,1112605,1112606,1112607,1112608,1112609,1112610,1112611,1112612,1112613]
 var havering = -1;
 var cost = [4000040,4000176,4031789,4031216,4001085,4000235,4000243,4000460,4000461,4000462,4001084,4031740,4031739,4001083,4001430]
 var mobname = ["蘑菇王","僵尸蘑菇王","妖怪禅师","蝙蝠怪","鱼王","喷火龙","天鹰","多多","玄冰独角兽","雷卡","闹钟boss","树精boss","暴力熊或心疤狮王","扎昆boss","黑龙boss"]
 var playercalled = ["哟，新兵","你好，士兵","你好，士兵","你好，士兵","尊敬的战士","尊敬的战士","尊敬的战士","哇，您好，我的勇士","哇，您好，我的勇士","哇，您好，我的勇士","伟大的英雄","伟大的英雄","伟大的英雄","Oh，军团的传奇","伟大的黑龙终结者"]
 var update =[2,5,8,10,15,20,25,30,40,50,60,70,80,110,160]
 var selStr=""
 var next=0
 
 function start() {
    status = 0;
    action(1, 0, 0);
}



function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2) {
            cm.sendOk(" 等你想去哪里了，记得找我哦！");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
    } else if (status == 1) {
		for(var i =0 ; i < ring.length;i++){
			if(cm.haveItem(ring[i],1)){
			havering = i
			next = i + 1
			}
		}
		if(havering >= 0 && havering < 14){
			selStr += ""+playercalled[havering]+"！\r\n接下来的任务是击败#b#e"+mobname[next]+"#n#k\r\n然后把#i"+cost[next]+"#带给我。\r\n如果忘记了规矩，我可以给你再介绍一遍"
		}else if(havering == 14){
			cm.sendOk(""+playercalled[14]+"！您的戒指已经满级了！");
			cm.dispose();
            return;
		}else{
			selStr += "想要伟大的十字军团戒指？必须向我证明你的实力才行\r\n击败#b#e"+mobname[0]+"#n#k，带来#i"+cost[0]+"#，我就让你加入军团。\r\n(如果你已经加入了军团，必须#b#e把戒指放在背包里#n#k才行)\r\n";
		}
			selStr += "\r\n#L0#十字军团戒指介绍#l";
			if(havering == -1){
				selStr += "\r\n#L1##b#e加入军团#n#k#l";
			}else{
				selStr += "\r\n#L1##b#e交付材料，升级戒指#n#k#l";
			}
			//selStr += "\r\n#L2#布#l";
        
        cm.sendSimple(selStr);
    } else if (status == 2) {
        if(selection == 0){
			var string1 = "击败各种boss获得对应的材料即可升级戒指\r\n#b#e升级时戒指必须放在背包里。#n#k\r\n#b#e同等级戒指只能持有一个#n#k，吞掉不补\r\n以下是各等级十字军团戒指需要的材料\r\n"
			for(var i =0 ; i < ring.length;i++){
				string1 += "#i"+ring[i]+"##b#e"+update[i]+"#n#k全属性，需要：#i"+cost[i]+"#，击败#b#e"+mobname[i]+"#n#k可获得材料\r\n"
			}
			cm.sendOk(string1);
		};
		
		if(selection == 1){
			if(havering == -1){
				if(cm.haveItem(cost[0],1)){
					cm.gainItem(cost[0],-1)
					cm.给属性装备(ring[0],0,0,update[0],update[0],update[0],update[0],0,0,update[0],update[0],0,0,0,0,0,0,0);
					cm.sendOk("恭喜你成功加入军团");
					cm.全服黄色喇叭("[十字军团] : 玩家["+cm.getPlayer().getName()+"]成功加入十字军团，成为大佬指日可待")
					cm.dispose();
					return;
				}
				cm.sendOk("你没有#i"+cost[0]+"#！欺骗军团会被砍死的你造吗？");
				cm.dispose();
				return;
			}else if(havering > -1 || havering < 14){
				if(cm.haveItem(cost[next],1)){
					cm.gainItem(ring[havering],-1)
					cm.gainItem(cost[next],-1)
					cm.给属性装备(ring[next],0,0,update[next],update[next],update[next],update[next],0,0,update[next],update[next],0,0,0,0,0,0,0);
					cm.全服黄色喇叭("[十字军团] : 玩家["+cm.getPlayer().getName()+"]使用击败["+mobname[next]+"]的证名提升了十字军团等级，获得了全属性"+update[next]+"的戒指")
					cm.sendOk("你的戒指升级成了#b#e"+update[next]+"#n#k全属性的#i"+ring[next]+"#");
					cm.dispose();
					return;
				}else{
					cm.sendOk("你没有#i"+cost[next]+"#！不要骗我");
					cm.dispose();
					return;
				}
			}
			cm.sendOk("奇怪，没找到你的军团等级呢？联系GM吧。");
			cm.dispose();	
			
		};
		if(selection == 2){
			
		};
    } else if (status == 3) {
		cm.sendOk("异常");
        cm.dispose();
    }
}