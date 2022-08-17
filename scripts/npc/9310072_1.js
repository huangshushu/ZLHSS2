var Equitype = [
    1142574,
    1142541,
    1142573
];
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
var sd = 0;

var xnew0="";
var xnew1="1★";
var xnew2="2★";
var xnew3="3★";
var xnew4="4★";
var xnew5="5★";
var xnew6="6★";
var xnew7="7★";
var xnew8="8★";
var xnew9="9★";
var xnew10="10★";
var xnew11="11★";
var xnew12="12★";
var xnew13="13★";
var xnew14="14★";
var xnew15="15★";
var xnew16="16★";
var xnew17="17★";
var xnew18="18★";
var xnew19="19★";
var xnew20="20★";
var xnew21="21★";
var xnew22="22★";
var xnew23="23★";
var xnew24="24★";
var xnew25="25★";

var rand=Math.floor(Math.random()*100);
var rand1=Math.floor(Math.random()*100);

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
			var textz = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
				textz += "             #r欢迎来到月月冒险岛星之力强化#k\r\n";
				textz += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
				textz += "#L0##r"+小烟花 +"星之力强化说明"+小烟花 +"#l      #L1##r"+小烟花 +"星级必成币强化"+小烟花 +"#l\r\n\r\n\r\n";
				textz += "#r      星级数       成功率  失败时降星率    消耗\r\n";
				textz += "#L2#"+小烟花 +"#e#r1★#b强化     100%      0%      #v3992025#*100#l\r\n";
				textz += "#L3#"+小烟花 +"#r2★#b强化     100%      0%      #v3992025#*200#l\r\n";
				textz += "#L4#"+小烟花 +"#r3★#b强化     100%      0%      #v3992025#*300#l\r\n";
				textz += "#L5#"+小烟花 +"#r4★#b强化     100%      0%      #v3992025#*400#l\r\n";
				textz += "#L6#"+小烟花 +"#r5★#b强化     100%      0%      #v3992025#*500#l\r\n";
				textz += "#L7#"+小烟花 +"#r6★#b强化     100%      0%      #v3992025#*600#l\r\n";
				textz += "#L8#"+小烟花 +"#r7★#b强化     100%      0%      #v3992025#*700#l\r\n";
				textz += "#L9#"+小烟花 +"#r8★#b强化     90%       0%      #v3992025#*800#l\r\n";
				textz += "#L10#"+小烟花 +"#r9★#b强化     80%       0%      #v3992025#*900#l\r\n";
				textz += "#L11#"+小烟花 +"#r10★#b强化    70%       0%      #v3992025#*1000#l\r\n";
				textz += "#L12#"+小烟花 +"#r11★#b强化    60%       0%      #v3992025#*1100#l\r\n";
				textz += "#L13#"+小烟花 +"#r12★#b强化    55%       10%     #v3992025#*1200#l\r\n";
				textz += "#L14#"+小烟花 +"#r13★#b强化    50%       15%     #v3992025#*1300#l\r\n";
				textz += "#L15#"+小烟花 +"#r14★#b强化    45%       20%     #v3992025#*1400#l\r\n";
				textz += "#L16#"+小烟花 +"#r15★#b强化    40%       25%     #v3992025#*1500#l\r\n";
				//textz += "#L17#"+小烟花 +"#r16★#b强化    40%       25%      #v3992025#*3000#l\r\n";
				//textz += "#L18#"+小烟花 +"#r17★#b强化    40%       20%     #v3992025#*3000#l\r\n";
				//textz += "#L19#"+小烟花 +"#r18★#b强化    35%       25%     #v3992025#*3000#l\r\n";
				//textz += "#L20#"+小烟花 +"#r19★#b强化    35%       30%     #v3992025#*3000#l\r\n";
				//textz += "#L21#"+小烟花 +"#r20★#b强化    30%       30%     #v3992025#*3000#l\r\n";
				//textz += "#L22#"+小烟花 +"#r21★#b强化    30%       30%      #v3992025#*3500#l\r\n";
				//textz += "#L23#"+小烟花 +"#r22★#b强化    30%       30%     #v3992025#*3500#l\r\n";
				//textz += "#L24#"+小烟花 +"#r23★#b强化    25%       35%     #v3992025#*3500#l\r\n";				
				//textz += "#L25#"+小烟花 +"#r24★#b强化    20%       40%     #v3992025#*3500#l\r\n";
				//textz += "#L26#"+小烟花 +"#r25★#b强化    15%       45%     #v3992025#*3500#l\r\n";
			cm.sendSimple (textz);   
		}
		else if (status == 1) {
			var ii = Packages.server.MapleItemInformationProvider.getInstance();
			var item = cm.getInventory(1).getItem(1);
			if (selection == 0) {
				var texts = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
				texts += "           #r欢迎来到月月冒险岛星之力强化说明#k\r\n";
				texts += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
				texts += "     #r需要星之力强化的装备必须放在背包装备栏第一格！\r\n\r\n";
				texts += " #b正常强化需将装备强化至#r1★#b后才可继续强化#r2★#b，依次类推\r\n\r\n";
				texts += "     #b星级必成币强化可将装备从#r0★#b直接强化至对应星级\r\n\r\n";
				texts += " #r1★#b到#r7★#b100%成功，#r7★#b后有失败率，失败时小概率降低#r1★\r\n\r\n";
				texts += " #b每成功强化#r1★#b，装备都会获得相应的属性提升，具体如下\r\n\r\n";
				texts += "      #r强化满#b15★#r一共可获得属性：四维120，攻魔120\r\n\r\n";
				texts += "#r1★#b强化（四维1，攻魔1），#r2★#b强化（四维2，攻魔2）\r\n\r\n";
				texts += "#r3★#b强化（四维3，攻魔3），#r4★#b强化（四维4，攻魔4）\r\n\r\n";
				texts += "#r5★#b强化（四维5，攻魔5），#r6★#b强化（四维6，攻魔6）\r\n\r\n";
				texts += "#r7★#b强化（四维7，攻魔7），#r8★#b强化（四维8，攻魔8）\r\n\r\n";
				texts += "#r9★#b强化（四维9，攻魔9），#r10★#b强化（四维10，攻魔10）\r\n\r\n";
				texts += "#r11★#b强化（四维11，攻魔1），#r12★#b强化（四维12，攻魔12）\r\n\r\n";
				texts += "#r13★#b强化（四维13，攻魔13），#r14★#b强化（四维14，攻魔14）\r\n\r\n";
				texts += "#r15★#b强化（四维15，攻魔15）\r\n\r\n";
				//texts += "#r17★#b强化（四维23，攻魔14），#r18★#b强化（四维26，攻魔16）\r\n\r\n";
				//texts += "#r19★#b强化（四维29，攻魔18），#r20★#b强化（四维32，攻魔20）\r\n\r\n";
				//texts += "#r21★#b强化（四维36，攻魔24），#r22★#b强化（四维40，攻魔28）\r\n\r\n";
				//texts += "#r23★#b强化（四维44，攻魔32），#r24★#b强化（四维48，攻魔36）\r\n\r\n";
				//texts += "#r25★#b强化（四维52，攻魔40）\r\n\r\n";
				cm.sendOk(texts);
				cm.dispose();
			}
			else if (selection == 1){
				cm.openNpc(9310072,11);		
			}
			else if (selection == 2) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#b装备#r第1格#b没有装备，或装备栏#r第1格#b为#r时装#b，不能进行星之力强化！");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew0){//检查物品的星级
					cm.sendOk("#e#b你的#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b的星之力级别为#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b因此不能进行#r1★#b强化！");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 100)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew1);
					cm.gainItem(3992025,-100);
					if(rand>=0){
							item.setStr(item.getStr()*1+1);
							item.setDex(item.getDex()*1+1);
							item.setInt(item.getInt()*1+1);
							item.setLuk(item.getLuk()*1+1);
							item.setMatk(item.getMatk()*1+1);
							item.setWatk(item.getWatk()*1+1);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "恭喜"+ cm.getChar().getName() +"成功将装备星之力强化至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，他/她的战斗力获得大幅提升！"));
						cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b的星之力强化至#r"+xnew1+"！");
						cm.dispose();
					}else{
						cm.sendOk("#b虽然强化失败，但你运气爆棚，不会降星！");
						cm.dispose();
					}
				}else{
					cm.sendOk("#b你的背包内没有足够的#v3992025##r#z3992025##b，不能进行星之力强化！");
					cm.dispose();
				}
			}
			else if (selection == 3) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#b装备#r第1格#b没有装备，或装备栏#r第1格#b为#r时装#b，不能进行星之力强化！");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew1){//检查物品的星级
					cm.sendOk("#e#b你的#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b的星之力级别为#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b因此不能进行#r2★#b强化！");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 200)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew2);
					cm.gainItem(3992025,-200);
					if(rand>=0){
							item.setStr(item.getStr()*1+2);
							item.setDex(item.getDex()*1+2);
							item.setInt(item.getInt()*1+2);
							item.setLuk(item.getLuk()*1+2);
							item.setMatk(item.getMatk()*1+2);
							item.setWatk(item.getWatk()*1+2);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "恭喜"+ cm.getChar().getName() +"成功将装备星之力强化至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，他/她的战斗力获得大幅提升！"));
						cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b的星之力强化至#r"+xnew2+"！");
						cm.dispose();
					}else{
						cm.sendOk("#b虽然强化失败，但你运气爆棚，不会降星！");
						cm.dispose();
					}
				}else{
					cm.sendOk("#b你的背包内没有足够的#v3992025##r#z3992025##b，不能进行星之力强化！");
					cm.dispose();
				}
			}
			else if (selection == 4) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#b装备#r第1格#b没有装备，或装备栏#r第1格#b为#r时装#b，不能进行星之力强化！");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew2){//检查物品的星级
					cm.sendOk("#e#b你的#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b的星之力级别为#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b因此不能进行#r3★#b强化！");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 300)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew3);
					cm.gainItem(3992025,-300);
					if(rand>=0){
							item.setStr(item.getStr()*1+3);
							item.setDex(item.getDex()*1+3);
							item.setInt(item.getInt()*1+3);
							item.setLuk(item.getLuk()*1+3);
							item.setMatk(item.getMatk()*1+3);
							item.setWatk(item.getWatk()*1+3);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "恭喜"+ cm.getChar().getName() +"成功将装备星之力强化至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，他/她的战斗力获得大幅提升！"));
						cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b的星之力强化至#r"+xnew3+"！");
						cm.dispose();
					}else{
						cm.sendOk("#b虽然强化失败，但你运气爆棚，不会降星！");
						cm.dispose();
					}
				}else{
					cm.sendOk("#b你的背包内没有足够的#v3992025##r#z3992025##b，不能进行星之力强化！");
					cm.dispose();
				}
			}
			else if (selection == 5) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#b装备#r第1格#b没有装备，或装备栏#r第1格#b为#r时装#b，不能进行星之力强化！");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew3){//检查物品的星级
					cm.sendOk("#e#b你的#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b的星之力级别为#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b因此不能进行#r4★#b强化！");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 400)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew4);
					cm.gainItem(3992025,-400);
					if(rand>=0){
							item.setStr(item.getStr()*1+4);
							item.setDex(item.getDex()*1+4);
							item.setInt(item.getInt()*1+4);
							item.setLuk(item.getLuk()*1+4);
							item.setMatk(item.getMatk()*1+4);
							item.setWatk(item.getWatk()*1+4);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "恭喜"+ cm.getChar().getName() +"成功将装备星之力强化至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，他/她的战斗力获得大幅提升！"));
						cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b的星之力强化至#r"+xnew4+"！");
						cm.dispose();
					}else{
						cm.sendOk("#b虽然强化失败，但你运气爆棚，不会降星！");
						cm.dispose();
					}
				}else{
					cm.sendOk("#b你的背包内没有足够的#v3992025##r#z3992025##b，不能进行星之力强化！");
					cm.dispose();
				}
			}
			else if (selection == 6) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#b装备#r第1格#b没有装备，或装备栏#r第1格#b为#r时装#b，不能进行星之力强化！");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew4){//检查物品的星级
					cm.sendOk("#e#b你的#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b的星之力级别为#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b因此不能进行#r5★#b强化！");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 500)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew5);
					cm.gainItem(3992025,-500);
					if(rand>=0){
							item.setStr(item.getStr()*1+5);
							item.setDex(item.getDex()*1+5);
							item.setInt(item.getInt()*1+5);
							item.setLuk(item.getLuk()*1+5);
							item.setMatk(item.getMatk()*1+5);
							item.setWatk(item.getWatk()*1+5);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "恭喜"+ cm.getChar().getName() +"成功将装备星之力强化至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，他/她的战斗力获得大幅提升！"));
						cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b的星之力强化至#r"+xnew5+"！");
						cm.dispose();
					}else{
						cm.sendOk("#b虽然强化失败，但你运气爆棚，不会降星！");
						cm.dispose();
					}
				}else{
					cm.sendOk("#b你的背包内没有足够的#v3992025##r#z3992025##b，不能进行星之力强化！");
					cm.dispose();
				}
			}
			else if (selection == 7) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#b装备#r第1格#b没有装备，或装备栏#r第1格#b为#r时装#b，不能进行星之力强化！");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew5){//检查物品的星级
					cm.sendOk("#e#b你的#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b的星之力级别为#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b因此不能进行#r6★#b强化！");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 600)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew6);
					cm.gainItem(3992025,-600);
					if(rand>=0){
							item.setStr(item.getStr()*1+6);
							item.setDex(item.getDex()*1+6);
							item.setInt(item.getInt()*1+6);
							item.setLuk(item.getLuk()*1+6);
							item.setMatk(item.getMatk()*1+6);
							item.setWatk(item.getWatk()*1+6);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "恭喜"+ cm.getChar().getName() +"成功将装备星之力强化至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，他/她的战斗力获得大幅提升！"));
						cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b的星之力强化至#r"+xnew6+"！");
						cm.dispose();
					}else{
						cm.sendOk("#b虽然强化失败，但你运气爆棚，不会降星！");
						cm.dispose();
					}
				}else{
					cm.sendOk("#b你的背包内没有足够的#v3992025##r#z3992025##b，不能进行星之力强化！");
					cm.dispose();
				}
			}
			else if (selection == 8) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#b装备#r第1格#b没有装备，或装备栏#r第1格#b为#r时装#b，不能进行星之力强化！");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew6){//检查物品的星级
					cm.sendOk("#e#b你的#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b的星之力级别为#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b因此不能进行#r7★#b强化！");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 700)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew7);
					cm.gainItem(3992025,-700);
					if(rand>=0){
							item.setStr(item.getStr()*1+7);
							item.setDex(item.getDex()*1+7);
							item.setInt(item.getInt()*1+7);
							item.setLuk(item.getLuk()*1+7);
							item.setMatk(item.getMatk()*1+7);
							item.setWatk(item.getWatk()*1+7);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "恭喜"+ cm.getChar().getName() +"成功将装备星之力强化至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，他/她的战斗力获得大幅提升！"));
						cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b的星之力强化至#r"+xnew7+"！");
						cm.dispose();
					}else{
						cm.sendOk("#b虽然强化失败，但你运气爆棚，不会降星！");
						cm.dispose();
					}
				}else{
					cm.sendOk("#b你的背包内没有足够的#v3992025##r#z3992025##b，不能进行星之力强化！");
					cm.dispose();
				}
			}
			else if (selection == 9) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#b装备#r第1格#b没有装备，或装备栏#r第1格#b为#r时装#b，不能进行星之力强化！");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew7){//检查物品的星级
					cm.sendOk("#e#b你的#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b的星之力级别为#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b因此不能进行#r8★#b强化！");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 800)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew8);
					cm.gainItem(3992025,-800);
					if(rand>=30){
							item.setStr(item.getStr()*1+8);
							item.setDex(item.getDex()*1+8);
							item.setInt(item.getInt()*1+8);
							item.setLuk(item.getLuk()*1+8);
							item.setMatk(item.getMatk()*1+8);
							item.setWatk(item.getWatk()*1+8);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "恭喜"+ cm.getChar().getName() +"成功将装备星之力强化至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，他/她的战斗力获得大幅提升！"));
						cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b的星之力强化至#r"+xnew8+"！");
						cm.dispose();
					}else{
						item.setOwner(xnew7);
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，"+ cm.getChar().getName() +"使用星之力强化失败，但运气爆棚，装备星之力保持"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
						cm.sendOk("#b虽然强化失败，但你运气爆棚，不会降星！");
						cm.dispose();
					}
				}else{
					cm.sendOk("#b你的背包内没有足够的#v3992025##r#z3992025##b，不能进行星之力强化！");
					cm.dispose();
				}
			}
			else if (selection == 10) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#b装备#r第1格#b没有装备，或装备栏#r第1格#b为#r时装#b，不能进行星之力强化！");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew8){//检查物品的星级
					cm.sendOk("#e#b你的#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b的星之力级别为#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b因此不能进行#r9★#b强化！");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 900)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew9);
					cm.gainItem(3992025,-900);
					if(rand>=40){
							item.setStr(item.getStr()*1+9);
							item.setDex(item.getDex()*1+9);
							item.setInt(item.getInt()*1+9);
							item.setLuk(item.getLuk()*1+9);
							item.setMatk(item.getMatk()*1+9);
							item.setWatk(item.getWatk()*1+9);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "恭喜"+ cm.getChar().getName() +"成功将装备星之力强化至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，他/她的战斗力获得大幅提升！"));
						cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b的星之力强化至#r"+xnew9+"！");
						cm.dispose();
					}else{
						item.setOwner(xnew8);
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，"+ cm.getChar().getName() +"使用星之力强化失败，但运气爆棚，装备星之力保持"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
						cm.sendOk("#b虽然强化失败，但你运气爆棚，不会降星！");
						cm.dispose();
					}
				}else{
					cm.sendOk("#b你的背包内没有足够的#v3992025##r#z3992025##b，不能进行星之力强化！");
					cm.dispose();
				}
			}
			else if (selection ==11) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#b装备#r第1格#b没有装备，或装备栏#r第1格#b为#r时装#b，不能进行星之力强化！");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew9){//检查物品的星级
					cm.sendOk("#e#b你的#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b的星之力级别为#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b因此不能进行#r10★#b强化！");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 1000)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew10);
					cm.gainItem(3992025,-1000);
					if(rand>=35){
							item.setStr(item.getStr()*1+10);
							item.setDex(item.getDex()*1+10);
							item.setInt(item.getInt()*1+10);
							item.setLuk(item.getLuk()*1+10);
							item.setMatk(item.getMatk()*1+10);
							item.setWatk(item.getWatk()*1+10);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "恭喜"+ cm.getChar().getName() +"成功将装备星之力强化至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，他/她的战斗力获得大幅提升！"));
						cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b的星之力强化至#r"+xnew10+"！");
						cm.dispose();
					}else{
						item.setOwner(xnew9);
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，"+ cm.getChar().getName() +"使用星之力强化失败，但运气爆棚，装备星之力保持"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
						cm.sendOk("#b虽然强化失败，但你运气爆棚，不会降星！");
						cm.dispose();
					}
				}else{
					cm.sendOk("#b你的背包内没有足够的#v3992025##r#z3992025##b，不能进行星之力强化！");
					cm.dispose();
				}
			}
			else if (selection ==12) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#b装备#r第1格#b没有装备，或装备栏#r第1格#b为#r时装#b，不能进行星之力强化！");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew10){//检查物品的星级
					cm.sendOk("#e#b你的#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b的星之力级别为#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b因此不能进行#r11★#b强化！");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 1100)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew11);
					cm.gainItem(3992025,-1100);
					if(rand>=45){
							item.setStr(item.getStr()*1+11);
							item.setDex(item.getDex()*1+11);
							item.setInt(item.getInt()*1+11);
							item.setLuk(item.getLuk()*1+11);
							item.setMatk(item.getMatk()*1+11);
							item.setWatk(item.getWatk()*1+11);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "恭喜"+ cm.getChar().getName() +"成功将装备星之力强化至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，他/她的战斗力获得大幅提升！"));
						cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b的星之力强化至#r"+xnew11+"！");
						cm.dispose();
					}else{
						item.setOwner(xnew10);
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，"+ cm.getChar().getName() +"使用星之力强化失败，但运气爆棚，装备星之力保持"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
						cm.sendOk("#b虽然强化失败，但你运气爆棚，不会降星！");
						cm.dispose();
					}
				}else{
					cm.sendOk("#b你的背包内没有足够的#v3992025##r#z3992025##b，不能进行星之力强化！");
					cm.dispose();
				}
			}
			else if (selection ==13) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#b装备#r第1格#b没有装备，或装备栏#r第1格#b为#r时装#b，不能进行星之力强化！");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew11){//检查物品的星级
					cm.sendOk("#e#b你的#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b的星之力级别为#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b因此不能进行#r12★#b强化！");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 1200)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew12);
					cm.gainItem(3992025,-1200);
					if(rand>=50){
							item.setStr(item.getStr()*1+12);
							item.setDex(item.getDex()*1+12);
							item.setInt(item.getInt()*1+12);
							item.setLuk(item.getLuk()*1+12);
							item.setMatk(item.getMatk()*1+12);
							item.setWatk(item.getWatk()*1+12);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "恭喜"+ cm.getChar().getName() +"成功将装备星之力强化至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，他/她的战斗力获得大幅提升！"));
						cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b的星之力强化至#r"+xnew12+"！");
						cm.dispose();
					}else{
						if(rand1>=90){
							item.setOwner(xnew10);
							item.setStr(item.getStr()*1-11);
							item.setDex(item.getDex()*1-11);
							item.setInt(item.getInt()*1-11);
							item.setLuk(item.getLuk()*1-11);
							item.setMatk(item.getMatk()*1-11);
							item.setWatk(item.getWatk()*1-11);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							var a=item.getItemId();
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，由于星之力强化失败，"+ cm.getChar().getName() +"的装备星之力降低至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
							cm.sendOk("#b很遗憾，由于星之力强化失败，#v"+a+"##r#z"+a+"##b的星之力降低至#r"+xnew10+"！");
							cm.dispose();
						}	
						else{
							item.setOwner(xnew11);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，"+ cm.getChar().getName() +"使用星之力强化失败，但运气爆棚，装备星之力保持"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
							cm.sendOk("#b虽然强化失败，但你运气爆棚，不会降星！");
							cm.dispose();
						}	
					}
				}else{
					cm.sendOk("#b你的背包内没有足够的#v3992025##r#z3992025##b，不能进行星之力强化！");
					cm.dispose();
				}
			}
			else if (selection ==14) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#b装备#r第1格#b没有装备，或装备栏#r第1格#b为#r时装#b，不能进行星之力强化！");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew12){//检查物品的星级
					cm.sendOk("#e#b你的#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b的星之力级别为#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b因此不能进行#r13★#b强化！");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 1300)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew13);
					cm.gainItem(3992025,-1300);
					if(rand>=55){
							item.setStr(item.getStr()*1+13);
							item.setDex(item.getDex()*1+13);
							item.setInt(item.getInt()*1+13);
							item.setLuk(item.getLuk()*1+13);
							item.setMatk(item.getMatk()*1+13);
							item.setWatk(item.getWatk()*1+13);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "恭喜"+ cm.getChar().getName() +"成功将装备星之力强化至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，他/她的战斗力获得大幅提升！"));
						cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b的星之力强化至#r"+xnew13+"！");
						cm.dispose();
					}else{
						if(rand1>=65){
							item.setOwner(xnew11);
							item.setStr(item.getStr()*1-12);
							item.setDex(item.getDex()*1-12);
							item.setInt(item.getInt()*1-12);
							item.setLuk(item.getLuk()*1-12);
							item.setMatk(item.getMatk()*1-12);
							item.setWatk(item.getWatk()*1-12);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							var a=item.getItemId();
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，由于星之力强化失败，"+ cm.getChar().getName() +"的装备星之力降低至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
							cm.sendOk("#b很遗憾，由于星之力强化失败，#v"+a+"##r#z"+a+"##b的星之力降低至#r"+xnew11+"！");
							cm.dispose();
						}	
						else{
							item.setOwner(xnew12);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，"+ cm.getChar().getName() +"使用星之力强化失败，但运气爆棚，装备星之力保持"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
							cm.sendOk("#b虽然强化失败，但你运气爆棚，不会降星！");
							cm.dispose();
						}	
					}
				}else{
					cm.sendOk("#b你的背包内没有足够的#v3992025##r#z3992025##b，不能进行星之力强化！");
					cm.dispose();
				}
			}
			else if (selection ==15) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#b装备#r第1格#b没有装备，或装备栏#r第1格#b为#r时装#b，不能进行星之力强化！");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew13){//检查物品的星级
					cm.sendOk("#e#b你的#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b的星之力级别为#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b因此不能进行#r14★#b强化！");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 1400)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew14);
					cm.gainItem(3992025,-1400);
					if(rand>=60){
							item.setStr(item.getStr()*1+14);
							item.setDex(item.getDex()*1+14);
							item.setInt(item.getInt()*1+14);
							item.setLuk(item.getLuk()*1+14);
							item.setMatk(item.getMatk()*1+14);
							item.setWatk(item.getWatk()*1+14);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "恭喜"+ cm.getChar().getName() +"成功将装备星之力强化至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，他/她的战斗力获得大幅提升！"));
						cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b的星之力强化至#r"+xnew14+"！");
						cm.dispose();
					}else{
						if(rand1>=40){
							item.setOwner(xnew12);
							item.setStr(item.getStr()*1-13);
							item.setDex(item.getDex()*1-13);
							item.setInt(item.getInt()*1-13);
							item.setLuk(item.getLuk()*1-13);
							item.setMatk(item.getMatk()*1-13);
							item.setWatk(item.getWatk()*1-13);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							var a=item.getItemId();
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，由于星之力强化失败，"+ cm.getChar().getName() +"的装备星之力降低至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
							cm.sendOk("#b很遗憾，由于星之力强化失败，#v"+a+"##r#z"+a+"##b的星之力降低至#r"+xnew12+"！");
							cm.dispose();
						}	
						else{
							item.setOwner(xnew13);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，"+ cm.getChar().getName() +"使用星之力强化失败，但运气爆棚，装备星之力保持"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
							cm.sendOk("#b虽然强化失败，但你运气爆棚，不会降星！");
							cm.dispose();
						}	
					}
				}else{
					cm.sendOk("#b你的背包内没有足够的#v3992025##r#z3992025##b，不能进行星之力强化！");
					cm.dispose();
				}
			}else if (selection ==16) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#b装备#r第1格#b没有装备，或装备栏#r第1格#b为#r时装#b，不能进行星之力强化！");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew14){//检查物品的星级
					cm.sendOk("#e#b你的#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b的星之力级别为#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b因此不能进行#r15★#b强化！");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 1500)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew15);
					cm.gainItem(3992025,-1500);
					if(rand>=65){
							item.setStr(item.getStr()*1+15);
							item.setDex(item.getDex()*1+15);
							item.setInt(item.getInt()*1+15);
							item.setLuk(item.getLuk()*1+15);
							item.setMatk(item.getMatk()*1+15);
							item.setWatk(item.getWatk()*1+15);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "恭喜"+ cm.getChar().getName() +"成功将装备星之力强化至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，他/她的战斗力获得大幅提升！"));
						cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b的星之力强化至#r"+xnew15+"！");
						cm.dispose();
					}else{
						if(rand1>=60){
							item.setOwner(xnew13);
							item.setStr(item.getStr()*1-14);
							item.setDex(item.getDex()*1-14);
							item.setInt(item.getInt()*1-14);
							item.setLuk(item.getLuk()*1-14);
							item.setMatk(item.getMatk()*1-14);
							item.setWatk(item.getWatk()*1-14);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							var a=item.getItemId();
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，由于星之力强化失败，"+ cm.getChar().getName() +"的装备星之力降低至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
							cm.sendOk("#b很遗憾，由于星之力强化失败，#v"+a+"##r#z"+a+"##b的星之力降低至#r"+xnew13+"！");
							cm.dispose();
						}	
						else{
							item.setOwner(xnew14);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，"+ cm.getChar().getName() +"使用星之力强化失败，但运气爆棚，装备星之力保持"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
							cm.sendOk("#b虽然强化失败，但你运气爆棚，不会降星！");
							cm.dispose();
						}	
					}
				}else{
					cm.sendOk("#b你的背包内没有足够的#v3992025##r#z3992025##b，不能进行星之力强化！");
					cm.dispose();
				}
			}
			else if (selection ==17) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#b装备#r第1格#b没有装备，或装备栏#r第1格#b为#r时装#b，不能进行星之力强化！");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew15){//检查物品的星级
					cm.sendOk("#e#b你的#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b的星之力级别为#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b因此不能进行#r16★#b强化！");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 3000)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew16);
					cm.gainItem(3992025,-3000);
					if(rand>=85){
							item.setStr(item.getStr()*1+16);
							item.setDex(item.getDex()*1+16);
							item.setInt(item.getInt()*1+16);
							item.setLuk(item.getLuk()*1+16);
							item.setMatk(item.getMatk()*1+16);
							item.setWatk(item.getWatk()*1+16);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "恭喜"+ cm.getChar().getName() +"成功将装备星之力强化至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，他/她的战斗力获得大幅提升！"));
						cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b的星之力强化至#r"+xnew16+"！");
						cm.dispose();
					}else{
						if(rand1>=70){
							item.setOwner(xnew14);
							item.setStr(item.getStr()*1-15);
							item.setDex(item.getDex()*1-15);
							item.setInt(item.getInt()*1-15);
							item.setLuk(item.getLuk()*1-15);
							item.setMatk(item.getMatk()*1-15);
							item.setWatk(item.getWatk()*1-15);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							var a=item.getItemId();
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，由于星之力强化失败，"+ cm.getChar().getName() +"的装备星之力降低至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
							cm.sendOk("#b很遗憾，由于星之力强化失败，#v"+a+"##r#z"+a+"##b的星之力降低至#r"+xnew14+"！");
							cm.dispose();
						}	
						else{
							item.setOwner(xnew15);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，"+ cm.getChar().getName() +"使用星之力强化失败，但运气爆棚，装备星之力保持"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
							cm.sendOk("#b虽然强化失败，但你运气爆棚，不会降星！");
							cm.dispose();
						}	
					}
				}else{
					cm.sendOk("#b你的背包内没有足够的#v3992025##r#z3992025##b，不能进行星之力强化！");
					cm.dispose();
				}
			}
			else if (selection ==18) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#b装备#r第1格#b没有装备，或装备栏#r第1格#b为#r时装#b，不能进行星之力强化！");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew16){//检查物品的星级
					cm.sendOk("#e#b你的#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b的星之力级别为#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b因此不能进行#r17★#b强化！");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 3000)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew17);
					cm.gainItem(3992025,-3000);
					if(rand>=85){
							item.setStr(item.getStr()*1+17);
							item.setDex(item.getDex()*1+17);
							item.setInt(item.getInt()*1+17);
							item.setLuk(item.getLuk()*1+17);
							item.setMatk(item.getMatk()*1+17);
							item.setWatk(item.getWatk()*1+17);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "恭喜"+ cm.getChar().getName() +"成功将装备星之力强化至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，他/她的战斗力获得大幅提升！"));
						cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b的星之力强化至#r"+xnew17+"！");
						cm.dispose();
					}else{
						if(rand1>=70){
							item.setOwner(xnew15);
							item.setStr(item.getStr()*1-16);
							item.setDex(item.getDex()*1-16);
							item.setInt(item.getInt()*1-16);
							item.setLuk(item.getLuk()*1-16);
							item.setMatk(item.getMatk()*1-16);
							item.setWatk(item.getWatk()*1-16);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							var a=item.getItemId();
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，由于星之力强化失败，"+ cm.getChar().getName() +"的装备星之力降低至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
							cm.sendOk("#b很遗憾，由于星之力强化失败，#v"+a+"##r#z"+a+"##b的星之力降低至#r"+xnew15+"！");
							cm.dispose();
						}	
						else{
							item.setOwner(xnew16);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，"+ cm.getChar().getName() +"使用星之力强化失败，但运气爆棚，装备星之力保持"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
							cm.sendOk("#b虽然强化失败，但你运气爆棚，不会降星！");
							cm.dispose();
						}	
					}
				}else{
					cm.sendOk("#b你的背包内没有足够的#v3992025##r#z3992025##b，不能进行星之力强化！");
					cm.dispose();
				}
			}
			else if (selection ==19) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#b装备#r第1格#b没有装备，或装备栏#r第1格#b为#r时装#b，不能进行星之力强化！");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew17){//检查物品的星级
					cm.sendOk("#e#b你的#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b的星之力级别为#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b因此不能进行#r18★#b强化！");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 3000)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew18);
					cm.gainItem(3992025,-3000);
					if(rand>=90){
							item.setStr(item.getStr()*1+18);
							item.setDex(item.getDex()*1+18);
							item.setInt(item.getInt()*1+18);
							item.setLuk(item.getLuk()*1+18);
							item.setMatk(item.getMatk()*1+18);
							item.setWatk(item.getWatk()*1+18);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "恭喜"+ cm.getChar().getName() +"成功将装备星之力强化至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，他/她的战斗力获得大幅提升！"));
						cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b的星之力强化至#r"+xnew18+"！");
						cm.dispose();
					}else{
						if(rand1>=70){
							item.setOwner(xnew16);
							item.setStr(item.getStr()*1-17);
							item.setDex(item.getDex()*1-17);
							item.setInt(item.getInt()*1-17);
							item.setLuk(item.getLuk()*1-17);
							item.setMatk(item.getMatk()*1-17);
							item.setWatk(item.getWatk()*1-17);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							var a=item.getItemId();
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，由于星之力强化失败，"+ cm.getChar().getName() +"的装备星之力降低至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
							cm.sendOk("#b很遗憾，由于星之力强化失败，#v"+a+"##r#z"+a+"##b的星之力降低至#r"+xnew16+"！");
							cm.dispose();
						}	
						else{
							item.setOwner(xnew17);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，"+ cm.getChar().getName() +"使用星之力强化失败，但运气爆棚，装备星之力保持"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
							cm.sendOk("#b虽然强化失败，但你运气爆棚，不会降星！");
							cm.dispose();
						}	
					}
				}else{
					cm.sendOk("#b你的背包内没有足够的#v3992025##r#z3992025##b，不能进行星之力强化！");
					cm.dispose();
				}
			}
			else if (selection ==20) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#b装备#r第1格#b没有装备，或装备栏#r第1格#b为#r时装#b，不能进行星之力强化！");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew18){//检查物品的星级
					cm.sendOk("#e#b你的#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b的星之力级别为#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b因此不能进行#r19★#b强化！");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 3000)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew19);
					cm.gainItem(3992025,-3000);
					if(rand>=90){
							item.setStr(item.getStr()*1+19);
							item.setDex(item.getDex()*1+19);
							item.setInt(item.getInt()*1+19);
							item.setLuk(item.getLuk()*1+19);
							item.setMatk(item.getMatk()*1+19);
							item.setWatk(item.getWatk()*1+19);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "恭喜"+ cm.getChar().getName() +"成功将装备星之力强化至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，他/她的战斗力获得大幅提升！"));
						cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b的星之力强化至#r"+xnew19+"！");
						cm.dispose();
					}else{
						if(rand1>=70){
							item.setOwner(xnew17);
							item.setStr(item.getStr()*1-18);
							item.setDex(item.getDex()*1-18);
							item.setInt(item.getInt()*1-18);
							item.setLuk(item.getLuk()*1-18);
							item.setMatk(item.getMatk()*1-18);
							item.setWatk(item.getWatk()*1-18);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							var a=item.getItemId();
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，由于星之力强化失败，"+ cm.getChar().getName() +"的装备星之力降低至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
							cm.sendOk("#b很遗憾，由于星之力强化失败，#v"+a+"##r#z"+a+"##b的星之力降低至#r"+xnew17+"！");
							cm.dispose();
						}	
						else{
							item.setOwner(xnew18);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，"+ cm.getChar().getName() +"使用星之力强化失败，但运气爆棚，装备星之力保持"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
							cm.sendOk("#b虽然强化失败，但你运气爆棚，不会降星！");
							cm.dispose();
						}	
					}
				}else{
					cm.sendOk("#b你的背包内没有足够的#v3992025##r#z3992025##b，不能进行星之力强化！");
					cm.dispose();
				}
			}
			else if (selection ==21) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#b装备#r第1格#b没有装备，或装备栏#r第1格#b为#r时装#b，不能进行星之力强化！");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew19){//检查物品的星级
					cm.sendOk("#e#b你的#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b的星之力级别为#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b因此不能进行#r20★#b强化！");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 3000)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew20);
					cm.gainItem(3992025,-3000);
					if(rand>=95){
							item.setStr(item.getStr()*1+20);
							item.setDex(item.getDex()*1+20);
							item.setInt(item.getInt()*1+20);
							item.setLuk(item.getLuk()*1+20);
							item.setMatk(item.getMatk()*1+20);
							item.setWatk(item.getWatk()*1+20);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "恭喜"+ cm.getChar().getName() +"成功将装备星之力强化至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，他/她的战斗力获得大幅提升！"));
						cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b的星之力强化至#r"+xnew20+"！");
						cm.dispose();
					}else{
						if(rand1>=60){
							item.setOwner(xnew18);
							item.setStr(item.getStr()*1-19);
							item.setDex(item.getDex()*1-19);
							item.setInt(item.getInt()*1-19);
							item.setLuk(item.getLuk()*1-19);
							item.setMatk(item.getMatk()*1-19);
							item.setWatk(item.getWatk()*1-19);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							var a=item.getItemId();
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，由于星之力强化失败，"+ cm.getChar().getName() +"的装备星之力降低至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
							cm.sendOk("#b很遗憾，由于星之力强化失败，#v"+a+"##r#z"+a+"##b的星之力降低至#r"+xnew18+"！");
							cm.dispose();
						}	
						else{
							item.setOwner(xnew19);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，"+ cm.getChar().getName() +"使用星之力强化失败，但运气爆棚，装备星之力保持"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
							cm.sendOk("#b虽然强化失败，但你运气爆棚，不会降星！");
							cm.dispose();
						}	
					}
				}else{
					cm.sendOk("#b你的背包内没有足够的#v3992025##r#z3992025##b，不能进行星之力强化！");
					cm.dispose();
				}
			}
			else if (selection ==22) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#b装备#r第1格#b没有装备，或装备栏#r第1格#b为#r时装#b，不能进行星之力强化！");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew20){//检查物品的星级
					cm.sendOk("#e#b你的#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b的星之力级别为#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b因此不能进行#r21★#b强化！");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 3500)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew21);
					cm.gainItem(3992025,-3500);
					if(rand>=80){
							item.setStr(item.getStr()*1+21);
							item.setDex(item.getDex()*1+21);
							item.setInt(item.getInt()*1+21);
							item.setLuk(item.getLuk()*1+21);
							item.setMatk(item.getMatk()*1+21);
							item.setWatk(item.getWatk()*1+21);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "恭喜"+ cm.getChar().getName() +"成功将装备星之力强化至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，他/她的战斗力获得大幅提升！"));
						cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b的星之力强化至#r"+xnew21+"！");
						cm.dispose();
					}else{
						if(rand1>=75){
							item.setOwner(xnew19);
							item.setStr(item.getStr()*1-20);
							item.setDex(item.getDex()*1-20);
							item.setInt(item.getInt()*1-20);
							item.setLuk(item.getLuk()*1-20);
							item.setMatk(item.getMatk()*1-20);
							item.setWatk(item.getWatk()*1-20);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							var a=item.getItemId();
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，由于星之力强化失败，"+ cm.getChar().getName() +"的装备星之力降低至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
							cm.sendOk("#b很遗憾，由于星之力强化失败，#v"+a+"##r#z"+a+"##b的星之力降低至#r"+xnew19+"！");
							cm.dispose();
						}	
						else{
							item.setOwner(xnew20);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，"+ cm.getChar().getName() +"使用星之力强化失败，但运气爆棚，装备星之力保持"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
							cm.sendOk("#b虽然强化失败，但你运气爆棚，不会降星！");
							cm.dispose();
						}	
					}
				}else{
					cm.sendOk("#b你的背包内没有足够的#v3992025##r#z3992025##b，不能进行星之力强化！");
					cm.dispose();
				}
			}
			else if (selection ==23) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#b装备#r第1格#b没有装备，或装备栏#r第1格#b为#r时装#b，不能进行星之力强化！");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew21){//检查物品的星级
					cm.sendOk("#e#b你的#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b的星之力级别为#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b因此不能进行#r22★#b强化！");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 3500)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew22);
					cm.gainItem(3992025,-3500);
					if(rand>=90){
							item.setStr(item.getStr()*1+22);
							item.setDex(item.getDex()*1+22);
							item.setInt(item.getInt()*1+22);
							item.setLuk(item.getLuk()*1+22);
							item.setMatk(item.getMatk()*1+22);
							item.setWatk(item.getWatk()*1+22);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "恭喜"+ cm.getChar().getName() +"成功将装备星之力强化至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，他/她的战斗力获得大幅提升！"));
						cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b的星之力强化至#r"+xnew22+"！");
						cm.dispose();
					}else{
						if(rand1>=70){
							item.setOwner(xnew20);
							item.setStr(item.getStr()*1-21);
							item.setDex(item.getDex()*1-21);
							item.setInt(item.getInt()*1-21);
							item.setLuk(item.getLuk()*1-21);
							item.setMatk(item.getMatk()*1-21);
							item.setWatk(item.getWatk()*1-21);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							var a=item.getItemId();
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，由于星之力强化失败，"+ cm.getChar().getName() +"的装备星之力降低至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
							cm.sendOk("#b很遗憾，由于星之力强化失败，#v"+a+"##r#z"+a+"##b的星之力降低至#r"+xnew20+"！");
							cm.dispose();
						}	
						else{
							item.setOwner(xnew21);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，"+ cm.getChar().getName() +"使用星之力强化失败，但运气爆棚，装备星之力保持"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
							cm.sendOk("#b虽然强化失败，但你运气爆棚，不会降星！");
							cm.dispose();
						}	
					}
				}else{
					cm.sendOk("#b你的背包内没有足够的#v3992025##r#z3992025##b，不能进行星之力强化！");
					cm.dispose();
				}
			}
			else if (selection ==24) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#b装备#r第1格#b没有装备，或装备栏#r第1格#b为#r时装#b，不能进行星之力强化！");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew22){//检查物品的星级
					cm.sendOk("#e#b你的#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b的星之力级别为#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b因此不能进行#r23★#b强化！");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 3500)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew23);
					cm.gainItem(3992025,-3500);
					if(rand>=80){
							item.setStr(item.getStr()*1+23);
							item.setDex(item.getDex()*1+23);
							item.setInt(item.getInt()*1+23);
							item.setLuk(item.getLuk()*1+23);
							item.setMatk(item.getMatk()*1+23);
							item.setWatk(item.getWatk()*1+23);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "恭喜"+ cm.getChar().getName() +"成功将装备星之力强化至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，他/她的战斗力获得大幅提升！"));
						cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b的星之力强化至#r"+xnew23+"！");
						cm.dispose();
					}else{
						if(rand1>=65){
							item.setOwner(xnew21);
							item.setStr(item.getStr()*1-22);
							item.setDex(item.getDex()*1-22);
							item.setInt(item.getInt()*1-22);
							item.setLuk(item.getLuk()*1-22);
							item.setMatk(item.getMatk()*1-22);
							item.setWatk(item.getWatk()*1-22);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							var a=item.getItemId();
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，由于星之力强化失败，"+ cm.getChar().getName() +"的装备星之力降低至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
							cm.sendOk("#b很遗憾，由于星之力强化失败，#v"+a+"##r#z"+a+"##b的星之力降低至#r"+xnew21+"！");
							cm.dispose();
						}	
						else{
							item.setOwner(xnew22);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，"+ cm.getChar().getName() +"使用星之力强化失败，但运气爆棚，装备星之力保持"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
							cm.sendOk("#b虽然强化失败，但你运气爆棚，不会降星！");
							cm.dispose();
						}	
					}
				}else{
					cm.sendOk("#b你的背包内没有足够的#v3992025##r#z3992025##b，不能进行星之力强化！");
					cm.dispose();
				}
			}
			else if (selection ==25) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#b装备#r第1格#b没有装备，或装备栏#r第1格#b为#r时装#b，不能进行星之力强化！");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew23){//检查物品的星级
					cm.sendOk("#e#b你的#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b的星之力级别为#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b因此不能进行#r24★#b强化！");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 3500)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew24);
					cm.gainItem(3992025,-3500);
					if(rand>=90){
							item.setStr(item.getStr()*1+24);
							item.setDex(item.getDex()*1+24);
							item.setInt(item.getInt()*1+24);
							item.setLuk(item.getLuk()*1+24);
							item.setMatk(item.getMatk()*1+24);
							item.setWatk(item.getWatk()*1+24);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "恭喜"+ cm.getChar().getName() +"成功将装备星之力强化至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，他/她的战斗力获得大幅提升！"));
						cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b的星之力强化至#r"+xnew24+"！");
						cm.dispose();
					}else{
						if(rand1>=60){
							item.setOwner(xnew22);
							item.setStr(item.getStr()*1-23);
							item.setDex(item.getDex()*1-23);
							item.setInt(item.getInt()*1-23);
							item.setLuk(item.getLuk()*1-23);
							item.setMatk(item.getMatk()*1-23);
							item.setWatk(item.getWatk()*1-23);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							var a=item.getItemId();
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，由于星之力强化失败，"+ cm.getChar().getName() +"的装备星之力降低至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
							cm.sendOk("#b很遗憾，由于星之力强化失败，#v"+a+"##r#z"+a+"##b的星之力降低至#r"+xnew22+"！");
							cm.dispose();
						}	
						else{
							item.setOwner(xnew23);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，"+ cm.getChar().getName() +"使用星之力强化失败，但运气爆棚，装备星之力保持"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
							cm.sendOk("#b虽然强化失败，但你运气爆棚，不会降星！");
							cm.dispose();
						}	
					}
				}else{
					cm.sendOk("#b你的背包内没有足够的#v3992025##r#z3992025##b，不能进行星之力强化！");
					cm.dispose();
				}
			}
			else if (selection ==26) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#b装备#r第1格#b没有装备，或装备栏#r第1格#b为#r时装#b，不能进行星之力强化！");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew24){//检查物品的星级
					cm.sendOk("#e#b你的#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b的星之力级别为#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b因此不能进行#r25★#b强化！");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 3500)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew25);
					cm.gainItem(3992025,-3500);
					if(rand>=95){
							item.setStr(item.getStr()*1+25);
							item.setDex(item.getDex()*1+25);
							item.setInt(item.getInt()*1+25);
							item.setLuk(item.getLuk()*1+25);
							item.setMatk(item.getMatk()*1+25);
							item.setWatk(item.getWatk()*1+25);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "恭喜"+ cm.getChar().getName() +"成功将装备星之力强化至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，他/她的战斗力获得大幅提升！"));
						cm.sendOk("#b恭喜你，成功将#v"+a+"##r#z"+a+"##b的星之力强化至#r"+xnew25+"！");
						cm.dispose();
					}else{
						if(rand1>=55){
							item.setOwner(xnew23);
							item.setStr(item.getStr()*1-24);
							item.setDex(item.getDex()*1-24);
							item.setInt(item.getInt()*1-24);
							item.setLuk(item.getLuk()*1-24);
							item.setMatk(item.getMatk()*1-24);
							item.setWatk(item.getWatk()*1-24);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							var a=item.getItemId();
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，由于星之力强化失败，"+ cm.getChar().getName() +"的装备星之力降低至"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
							cm.sendOk("#b很遗憾，由于星之力强化失败，#v"+a+"##r#z"+a+"##b的星之力降低至#r"+xnew23+"！");
							cm.dispose();
						}	
						else{
							item.setOwner(xnew24);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "星之力强化" + " : " + "很遗憾，"+ cm.getChar().getName() +"使用星之力强化失败，但运气爆棚，装备星之力保持"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"，大家祝他/她再接再厉！"));
							cm.sendOk("#b虽然强化失败，但你运气爆棚，不会降星！");
							cm.dispose();
						}	
					}
				}else{
					cm.sendOk("#b你的背包内没有足够的#v3992025##r#z3992025##b，不能进行星之力强化！");
					cm.dispose();
				}
			}
		}	
    }
}