importPackage(java.util);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);


var fbmc = "[点装觉醒]-(觉醒系统)";//副本名称
var costitem = [4030002,4030003,4030004,4030005,4030006,4030007,4030008]
var cost = -1
var update = [10,20,30]
var mode = -1
var random = 0
var name = ["普通觉醒","强化觉醒","超级觉醒"]
var haveitem = false
//////////////////////////////////////////////////////////
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
if (mode == 1){
status++;
}else{
status--;
}
if (status == 0) {
	
	textz = "#k\t\t\t #r#v4030001#" + fbmc + "#v4030001##k#l\r\n\r\n";
	textz += "#b   萌新记得好好看说明哦，内含点装觉醒详细介绍#k#n\r\n"
	textz += "#L0##b点装觉醒说明\r\n";
	textz += "#L1##b#e普通觉醒#n#l\r\n";
	textz += "#L2##b#e强化觉醒#n#l\r\n";
	textz += "#L3##b#e超级觉醒#n#l\r\n";
	textz += "#L4##r#e赞助觉醒#n#l\r\n";
	 
	cm.sendSimple (textz);   
	}else if (status == 1) {
		if(selection == 0) {
			var string1 = "请把想要觉醒的装备放在第一格\r\n只可以觉醒点装\r\n觉醒材料是："
			for(var i=0;i<costitem.length;i++){
				string1 += "#v"+costitem[i]+"#"
			}
			string1 += "\r\n它们可以从#b#e罗密欧与朱丽叶#n#k副本获得\r\n#b【普通觉醒】消耗#e任意一种#n材料x#e1#n，六维增加#e0~10#n\r\n【强化觉醒】消耗#e每种材料#nx#e1#n，六维增加#e0~20#n\r\n【超级觉醒】消耗#e每种材料#nx#e3#n，六维增加#e0~30#n\r\n【赞助觉醒】消耗#v4430000#x#e10#n，六维增加#e30#n"
			cm.sendOk(string1);
			cm.dispose();
			return;
		}else if (selection == 1 || selection == 2 || selection == 3 || selection == 4) {
			mode = selection - 1
			if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null){
				cm.sendOk("你的装备栏第一格没有装备，不能进行此操作!..");
				cm.dispose();
				return;
			}
			var ii = Packages.server.MapleItemInformationProvider.getInstance();
			var item = cm.getInventory(1).getItem(1);
			var itemid = item.getItemId();
			if (ii.isCash(item.getItemId()) == false){
				cm.sendOk("#v"+itemid+"#不是点装，无法觉醒");
				cm.dispose();
				return;
			}
			if(mode == 0){
				for(var i = 0; i < costitem.length ; i++){
					if(cm.haveItem(costitem[i],1)){
						cm.gainItem(costitem[i],-1)
						cost = i
						break
					}
				}
			}
			if(mode == 0 && cost ==-1){
				var string2 = "需要任意一种"
				for(var i =0;i < costitem.length;i++){
					string2 += "#v"+costitem[i]+"#"
				}
				string2 += "#才可以觉醒哦"
				cm.sendOk(string2);
				cm.dispose();
				return;
			}
			if(mode == 1){
				for(var i = 0; i < costitem.length ; i++){
					if(cm.haveItem(costitem[i],1)==false){
						cm.sendOk("#v"+costitem[i]+"#数量不足");
						cm.dispose();
						return;
					}
				}
				for(var i = 0; i < costitem.length ; i++){
					cm.gainItem(costitem[i],-1)
				}
			}
			if(mode == 2){
				for(var i = 0; i < costitem.length ; i++){
					if(cm.haveItem(costitem[i],3)==false){
						cm.sendOk("#v"+costitem[i]+"#数量不足");
						cm.dispose();
						return;
					}
				}
				for(var i = 0; i < costitem.length ; i++){
					cm.gainItem(costitem[i],-3)
				}
			}
			if(mode == 3){
				if(cm.haveItem(4430000,10)){
					cm.gainItem(4430000,-10)
					cm.gainItem(itemid,-1)
					cm.给属性装备(itemid,0,0,30,30,30,30,0,0,30,30,0,0,0,0,0,0,0);
					cm.sendOk("#v"+itemid+"#觉醒成功\r\n六维增加【30】");
					cm.dispose();
					return;
				}else{
					cm.sendOk("#v4430000#不足，无法觉醒");
					cm.dispose();
					return;
				}
			}
			random = Math.floor(Math.random() * +update[mode]);
			var str = random
			random = Math.floor(Math.random() * +update[mode]);
			var dex = random
			random = Math.floor(Math.random() * +update[mode]);
			var luk = random
			random = Math.floor(Math.random() * +update[mode]);
			var int1 = random
			random = Math.floor(Math.random() * +update[mode]);
			var matk = random
			random = Math.floor(Math.random() * +update[mode]);
			var watk = random
			cm.gainItem(itemid,-1)
			cm.给属性装备(itemid,0,0,str,dex,luk,int1,0,0,watk,matk,0,0,0,0,0,0,0);
			cm.sendOk("#v"+itemid+"#觉醒成功\r\n力量【"+str+"】\r\n敏捷【"+dex+"】\r\n智力【"+int1+"】\r\n运气【"+luk+"】\r\n物攻【"+watk+"】\r\n魔攻【"+matk+"】\r\n");
			cm.dispose();
			return;
			
				
				
			


		}else if (selection == 2) {


		}else if (selection == 3) {
			
		}else if (selection == 4) {
		}else if (selection == 5) {
		}
		}
    }
}


