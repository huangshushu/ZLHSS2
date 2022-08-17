var a = 0;
var db;
var time;
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
var Equitype = [
    1032255
];

function start() {
	a = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			a++;
		else
			a--;
			if (a == -1){
				cm.dispose();
			}else if (a == 0) {
				a = 0;
				var Text = "";
					Text += "             "+小烟花 +"#e#r圣诞元旦特别限时活动#k"+小烟花 +"\r\n";
					Text += "              #r#e兑换时间12.25-1.3\r\n";
					Text += "           世界所有怪小几率出收集字母\r\n\r\n              #v3991007##v3991000##v3991015##v3991015##v3991024##l\r\n\r\n";
					Text += "      #v3991002##v3991007##v3991017##v3991008##v3991018##v3991019##v3991012##v3991000##v3991018#\r\n";
					Text += " #L1##k收集一套兑换#g#z1032255##k#v1032255#全属性10-88#l\r\n";
				
				cm.sendSimple(Text);		
			}else if (a == 1){
				if (selection == 1) {
					if ( cm.itemQuantity(3991007) >=2 &&cm.itemQuantity(3991000) >=2 &&cm.itemQuantity(3991015) >=2 &&cm.itemQuantity(3991024) >=1&&cm.itemQuantity(3991018) >=1 &&cm.itemQuantity(3991002) >=1 &&cm.itemQuantity(3991017) >=1 &&cm.itemQuantity(3991008) >=1 &&cm.itemQuantity(3991019) >=1 &&cm.itemQuantity(3991012) >=1  &&cm.itemQuantity(3991018) >=1 && cm.getMeso()>=1000000){
var r = Math.ceil(Math.random() * 70+10);
cm.gainItem(3991007,-2);
cm.gainItem(3991000,-2);
cm.gainItem(3991015,-2);
cm.gainItem(3991024,-1);
cm.gainItem(3991002,-1);
cm.gainItem(3991017,-1);
cm.gainItem(3991008,-1);
cm.gainItem(3991018,-1);
cm.gainItem(3991019,-1);
cm.gainItem(3991012,-1);
cm.gainItem(3991018,-1);
cm.gainItem(1032255,r,r,r,r,1000,1000,r,r,0,0,0,0,0,0);
cm.gainMeso(-1000000);
						cm.sendOk("制作成功！");
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "双旦限时活动" + " : " + "恭喜『" + cm.getChar().getName() + "』玩家成功兑换限时活动耳环！"));

						cm.dispose();
					}else{
						cm.sendOk("材料不足！");
						cm.dispose();
					}
				}else if (selection == 2){
					var xianjin = 0
					var cc = cm.getInventory(1).getItem(1);
					var ii = Packages.server.MapleItemInformationProvider.getInstance();
					var item = cm.getInventory(1).getItem(1);
					var statup = new java.util.ArrayList();
					var bur = 0
            for (var i = 0; i < Equitype.length; i++) {
                if ( item.getItemId() == Equitype[i]){
                	bur = 1
            	}
			} 
			if ( bur == 0 ){
				cm.sendOk("第一个物品不符合要求." );
				cm.dispose()
				
			} else
					if (!cm.haveItem(4001244,1) || !cm.haveItem(1032255,1) )  {
						cm.sendOk("你没有足够的强化材料，或者你还没有#v1032234#");
						cm.dispose();
					
					} else if(cm.getInventory(1).getItem(1).getLevel() > 6) {
				        cm.sendOk("已达到最高上限7次，无法进化。");
				        cm.dispose();
					
					} else {
						var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
						var statup = new java.util.ArrayList();
						var 力量随机=Math.floor(Math.random()*20+1);
						var 敏捷随机=Math.floor(Math.random()*20+1);
						var 运气随机=Math.floor(Math.random()*20+1);
						var 智力随机=Math.floor(Math.random()*20+1);
						var 物攻随机=Math.floor(Math.random()*20+1);
						var 魔攻随机=Math.floor(Math.random()*20+1);
						item.setStr(item.getStr() + 力量随机);
						item.setDex(item.getDex() + 敏捷随机);
						item.setInt(item.getInt() + 智力随机);
						item.setLuk(item.getLuk() + 运气随机);
						item.setWatk(item.getWatk() + 物攻随机);
						item.setMatk(item.getMatk() + 魔攻随机);
						item.setLevel( item.getLevel() + 1);
					    item.setLocked(1);
						cm.gainItem(4001244,-1);
						cm.sendOk("#r#e活动戒指强化成功，祝您游戏愉快！#k");
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"『七夕活动强化』" + " : " + " 玩家 [" + cm.getPlayer().getName() + "]成功地强化七夕活动耳环！大家祝贺他/她吧！",true).getBytes());
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.dispose();
					}		
				}if (selection == 3) {
					var xianjin = 0
					var cc = cm.getInventory(1).getItem(1);
					var ii = Packages.server.MapleItemInformationProvider.getInstance();
					var item = cm.getInventory(1).getItem(1);
					var statup = new java.util.ArrayList();
					var bur = 0
            for (var i = 0; i < Equitype.length; i++) {
                if ( item.getItemId() == Equitype[i]){
                	bur = 1
            	}
			} 
			if ( bur == 0 ){
				cm.sendOk("第一个物品不符合要求." );
				cm.dispose()
				
			} else
					if (!cm.haveItem(1032255,1) )  {
						cm.sendOk("你没有足够的强化材料，或者你还没有#v1032234#");
						cm.dispose();
					
					
					} else {
						var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
						var statup = new java.util.ArrayList();
						var 力量随机=Math.floor(Math.random()*0+0);
						var 敏捷随机=Math.floor(Math.random()*0+0);
						var 运气随机=Math.floor(Math.random()*0+0);
						var 智力随机=Math.floor(Math.random()*0+0);
						var 物攻随机=Math.floor(Math.random()*0+0);
						var 魔攻随机=Math.floor(Math.random()*0+0);
						item.setStr(item.getStr() + 力量随机);
						item.setDex(item.getDex() + 敏捷随机);
						item.setInt(item.getInt() + 智力随机);
						item.setLuk(item.getLuk() + 运气随机);
						item.setWatk(item.getWatk() + 物攻随机);
						item.setMatk(item.getMatk() + 魔攻随机);
						//item.setLevel( item.getLevel() + 1);
					    item.setLocked(0);
						//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"『520活动强化』" + " : " + " 玩家 [" + cm.getPlayer().getName() + "]成功地强化520活动耳环！大家祝贺他/她吧！",true).getBytes());
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.dispose();
					}
				}else if (selection == 4){
					cm.dispose();
                    cm.openNpc(9900004,3222);
					
				}else if (selection == 6){
					var xianjin = 0
					var cc = cm.getInventory(1).getItem(1);
					var ii = Packages.server.MapleItemInformationProvider.getInstance();
					var item = cm.getInventory(1).getItem(1);
					var statup = new java.util.ArrayList();
					if (!cm.haveItem(4170001,5) || !cm.haveItem(1112956,1))  {
						cm.sendOk("你没有足够的强化材料，或者你还没有#v1112956#");
						cm.dispose();
					} else if (cm.getPlayer().getBossLog("蛋蛋强化",1) > 4) {
						cm.sendOk("已经没有强化机会，最多只能强化5次！");
						cm.dispose();
					} else if (!ii.isCash(item.getItemId())==true) {
						cm.sendOk("第一格的装备不符合要求！");
						cm.dispose();
					} else {
						var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
						var statup = new java.util.ArrayList();
						var 力量随机=Math.floor(Math.random()*2+1);
						var 敏捷随机=Math.floor(Math.random()*2+1);
						var 运气随机=Math.floor(Math.random()*2+1);
						var 智力随机=Math.floor(Math.random()*2+1);
						var 物攻随机=Math.floor(Math.random()*2+1);
						var 魔攻随机=Math.floor(Math.random()*2+1);
						item.setStr(item.getStr() + 力量随机);
						item.setDex(item.getDex() + 敏捷随机);
						item.setInt(item.getInt() + 智力随机);
						item.setLuk(item.getLuk() + 运气随机);
						item.setWatk(item.getWatk() + 物攻随机);
						item.setMatk(item.getMatk() + 魔攻随机);
						cm.gainItem(4170001,-5);
						cm.getPlayer().setBossLog("蛋蛋强化",1,1)
						cm.sendOk("#r#e活动戒指强化成功，祝您游戏愉快！#k");
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"『活动戒指强化』" + " : " + " 玩家 [" + cm.getPlayer().getName() + "]成功地强化了活动戒指！大家祝贺他/她吧！",true).getBytes());
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.dispose();
					}		
				}else if (selection == 30){
					if (cm.itemQuantity(4031111) >=2777 && cm.itemQuantity(4031110) >=277&& cm.itemQuantity(1112301) >=1&& cm.getMeso()>=7000000){
						cm.gainItem(1112302,27,27,27,27,27,27,27,27,27,27,27,27,27,27);
						cm.gainItem(4031111,-2777);
						cm.gainItem(4031110,-277);
						cm.gainItem(1112301,-1);
						cm.gainMeso(-7000000);
						cm.sendNext("#b升级提示:#r\r\n七夕月石戒指3克拉了，恭喜你！")
						cm.dispose();
					}else{
						var text = "爱心巧克力 * 1\r\n"
							text += "需要#v4031111# * 2777\r\n"
							text += "需要#v4031110# * 277\r\n"
							text += "需要#v1112301# * 1\r\n"
							text += "需要游戏币# * 700万\r\n"
						cm.sendOk(text)
						cm.dispose();
					}
				}else if (selection == 40){
					if (cm.itemQuantity(1112475) >=1 && cm.itemQuantity(4032398) >=10  && cm.itemQuantity(4000175) >=1 && cm.itemQuantity(4000054) >=100&& cm.itemQuantity(4000053) >=100&& cm.itemQuantity(4000050) >=1000 && cm.itemQuantity(4000052) >=1000 && cm.itemQuantity(4000051) >=1000 && cm.itemQuantity(4000055) >=200  && cm.itemQuantity(4000048) >=200 ){
						cm.gainItem(1112485,20,20,20,20,200,200,15,15,10,10,10,10,10,10);
						cm.gainItem(1112475,-1);
						cm.gainItem(4032398,-10);
						cm.gainItem(4000050,-1000);
						cm.gainItem(4000052,-1000);
						cm.gainItem(4000051,-1000);
						cm.gainItem(4000055,-200);
						cm.gainItem(4000048,-200);
						cm.gainItem(4000053,-100);
						cm.gainItem(4000054,-100);
						cm.gainItem(4000175,-1);
						cm.sendNext("#b升级提示:#r\r\n老公老婆戒指LV40了，恭喜你！")
						cm.dispose();
					}else{
						var text = "呼叫群猪 * 1\r\n"
						cm.sendOk(text)
						cm.dispose();
					}
				}else if (selection == 50){
					if (cm.itemQuantity(1112485) >=1 && cm.itemQuantity(4032398) >=15&& cm.itemQuantity(4000313) >=500 && cm.itemQuantity(4000270) >=1000 && cm.itemQuantity(4000272) >=1000 && cm.itemQuantity(4001084) >=1 && cm.itemQuantity(4000175) >=1 && cm.itemQuantity(4000151) >=200 && cm.itemQuantity(4000152) >=200 && cm.itemQuantity(4000244) >=20&& cm.itemQuantity(4000245) >=20){
						cm.gainItem(1112495,30,30,30,30,300,300,20,20,20,20,20,20,20,20);
						cm.gainItem(1112485,-1);
						cm.gainItem(4032398,-15);
						cm.gainItem(4000313,-500);
						cm.gainItem(4000270,-1000);
						cm.gainItem(4000272,-1000);
						cm.gainItem(4001084,-1);
						cm.gainItem(4000175,-1);
						cm.gainItem(4000151,-200);
						cm.gainItem(4000152,-200);
						cm.gainItem(4000244,-20);
						cm.gainItem(4000245,-20);
						cm.sendNext("#b升级提示:#r\r\n老公老婆戒指LV50了，恭喜你！")
						cm.dispose();
					}else{
						var text = "老公老婆戒指LV40 * 1\r\n"
							text += "需要#v4032398# * 15\r\n"
							text += "需要#v4000313# * 1000\r\n"
							text += "需要#v4000270# * 1000\r\n"
							text += "需要#v4000272# * 500\r\n"
							text += "需要#v4000151# * 200\r\n"
							text += "需要#v4000152# * 200\r\n"
							text += "需要#v4000244# * 20\r\n"
							text += "需要#v4000245# * 20\r\n"
							text += "需要#v4001084# * 1\r\n"
							text += "需要#v4000175# * 1\r\n"
						cm.sendOk(text)
						cm.dispose();
					}
				}
        } 
    } 
}