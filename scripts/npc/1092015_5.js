/*注
金币
11祝福4==11
12====5==21
点券
21祝福6==12
22====7==22
*/
var sx = Math.floor(Math.random()*14);
var xh1=100;//70%卷消耗星星数量
var xh2=200;//30%卷消耗星星数量
var sj1=Math.floor(Math.random()*7);//0/1/2/3/4/5/6/7/8/9//成功率
var meso=5000000;//这里写钱
var dianquan = 10000;
var sjsx=Math.floor(Math.random()*7)-2;
var sjsx2=Math.floor(Math.random()*10)-2;
var status = 0;
var slot = Array("力量", "敏捷", "智力", "幸运", "HP", "MP", "物理攻击", "魔法攻击", "物理防御", "魔法防御", "命中率", "回避率", "手技", "移动速度", "跳跃力");
var num;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if ((mode == 0 && status == 2) || (mode == 0 && status == 13)) {
			cm.dispose();
			return;
		}else 	
		if (status >= 0 && mode == 0) {
		cm.sendOk("#b好的,下次再见.");
		cm.dispose();
		return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0){
		itemList = cm.getInventory(1).list().iterator();
		text = "\t#e========欢迎来到	#r天使冒险岛岛回忆冒险岛#k========\r\n\#e在我这里可以提高混沌卷轴的强化能力!成功率升至#r70%#k\r\n可调整单项属性#r-2~+8#k\r\n#e#r#b将会消耗强化次数#r1次,#b请选择需要强化的装备!\r\n#k\r\n";
        text += "#e- 首先请选择要强化的道具 -#n\r\n#b";
        var indexof = 1;
        while (itemList.hasNext()) {
            var item = itemList.next();
            text += "#L" + item.getPosition() + "##v" + item.getItemId() + "#";
            if (indexof > 1 && indexof % 5 == 0) {
                text += "\r\n";
            }
            indexof++;
        }
        cm.sendSimple(text);
		} else if (status == 1){
			num = selection;
		text ="您选择的装备是：#v"+cm.getInventory(1).getItem(num).getItemId()+"##t"+cm.getInventory(1).getItem(num).getItemId()+"#\r\n\r\n";
        text += "#e 接下来请选择您使用的卷轴（#r成功率升至90%#k） #n\r\n\r\n#b";
		text += "\r\n#L1##v2049100##z2049100#同时消耗"+meso+"冒险币(-2~5)#b";//70
		text += "\r\n#L2##v2049100##z2049100#同时消耗"+dianquan+"点券#b(-2~8)";//30
        cm.sendSimple(text);
		} else if (status == 2) {
			if (selection == 1){//70
				if(cm.haveItem(2049100)&&cm.getMeso()>meso){
					cm.sendSimple("是否使用祝福卷轴？\r\n#L11##r是#k#l\t\t#L12#否#l");
				}else {
					cm.sendOk("请确认背包中是否有#v2049100##z2049100#或是金币不足");
					cm.dispose();
				}
			}else if (selection == 2){//30
				if(cm.haveItem(2049100)&&cm.getPlayer().getNX()>=dianquan){
					cm.sendSimple("是否使用祝福卷轴？\r\n#L21##r是#k#l\t\t#L22#否#l");
				}else {
					cm.sendOk("请确认背包中是否有#v2049100##z2049100#或是点券不足");
					cm.dispose();
				}
			} else {
				cm.dispose();
			}
		} else if (status == 3) {
			if(selection == 11){//70
				var cc = cm.getInventory(1).getItem(num).getItemId();
					status = 3;
					cm.sendYesNo("你要强化的装备为:\r\n\r\n#v"+cc+"#\r\n\r\n#r#e确定要开始强化吗?");
			}else if(selection == 12) {//70
				var cc = cm.getInventory(1).getItem(num).getItemId();
					status = 4;
					cm.sendYesNo("你要强化的装备为:\r\n\r\n#v"+cc+"#\r\n\r\n#r#e确定要开始强化吗?");
			}else if(selection == 21) {//30
				var cc = cm.getInventory(1).getItem(num).getItemId();
					status = 5;
					cm.sendYesNo("你要强化的装备为:\r\n\r\n#v"+cc+"#\r\n\r\n#r#e确定要开始强化吗?");
			}else if (selection == 22){//30
				var cc = cm.getInventory(1).getItem(num).getItemId();
					status = 6;
					cm.sendYesNo("你要强化的装备为:\r\n\r\n#v"+cc+"#\r\n\r\n#r#e确定要开始强化吗?");
			}
		} else if (status == 4){
			status = 10;
			if(!cm.haveItem(2340000)){
				cm.sendOk("#v2340000#物品数量不足！");
				cm.dispose();
				return;
			}
			var item = cm.getInventory(1).getItem(num).copy();
			if (item.getUpgradeSlots() <= 0){
				cm.sendOk("您选择的装备剩余强化次数不足！");
				cm.dispose();
				return;
			}
		    if(cm.getInventory(1).getItem(num).getExpiration() != -1) {
				cm.sendOk("限时装备不能使用强化卷轴.");
				cm.dispose();
				return;
			}
			if(sj1 == 1){
				cm.gainItem(2049100,-1);
				cm.gainItem(2340000,-1);
				cm.gainMeso(-meso);
				cm.sendOk("强化失败了！");
				cm.dispose();
			}else{
				cm.gainItem(2049100,-1);
				cm.gainItem(2340000,-1);
				cm.gainMeso(-meso);
				cm.sendYesNo("#e#r强化成功！#k\r\n\t您选择的装备#v"+cm.getInventory(1).getItem(num).getItemId()+"#将提升属性如下：\r\n\t"+slot[sx]+"#r "+sjsx+"（HP/MP则*10）#k\r\n\t#e#r是否保留该项加成？\r\n（若装备原始无该属性请点确认，并退回材料！）");
			}
		} else if (status == 5){
			status = 20;
			var item = cm.getInventory(1).getItem(num).copy();
			if (item.getUpgradeSlots() <= 0){
				cm.sendOk("您选择的装备剩余强化次数不足！");
				cm.dispose();
				return;
			}
		    if(cm.getInventory(1).getItem(num).getExpiration() != -1) {
				cm.sendOk("限时装备不能使用强化卷轴.");
				cm.dispose();
				return;
			}
			if(sj1 == 1){
			var statup = new java.util.ArrayList();
			var itemId1 = cm.getInventory(1).getItem(num).getItemId();
			var item = cm.getInventory(1).getItem(num).copy();
			var ii = MapleItemInformationProvider.getInstance();
			var type =  ii.getInventoryType(itemId1);
				cm.gainMeso(-meso);
				cm.gainItem(2049100,-1);
				item.setUpgradeSlots(item.getUpgradeSlots()-1);
				MapleInventoryManipulator.removeFromSlot(cm.getC(),type,num,1, false);
				MapleInventoryManipulator.addFromDrop(cm.getC(), item,false);
				cm.sendOk("强化失败了！");
				cm.dispose();
			}else{
				cm.gainMeso(-meso);
				cm.gainItem(2049100,-1);
				cm.sendYesNo("#e#r强化成功！#k\r\n\t您选择的装备#v"+cm.getInventory(1).getItem(num).getItemId()+"#将提升属性如下：\r\n\t"+slot[sx]+"#r "+sjsx+"（HP/MP则*10）#k\r\n\t#e#r是否保留该项加成？\r\n（若装备原始无该属性请点确认，并退回材料！）");
			}
		} else if (status == 6){
			status = 11;
			if(!cm.haveItem(2340000)){
				cm.sendOk("#v2340000#物品数量不足！");
				cm.dispose();
				return;
			}
			var item = cm.getInventory(1).getItem(num).copy();
			if (item.getUpgradeSlots() <= 0){
				cm.sendOk("您选择的装备剩余强化次数不足！");
				cm.dispose();
				return;
			}
		    if(cm.getInventory(1).getItem(num).getExpiration() != -1) {
				cm.sendOk("限时装备不能使用强化卷轴.");
				cm.dispose();
				return;
			}
			if(sj1 == 1){
				cm.gainItem(2049100,-1);
				cm.gainItem(2340000,-1);
				cm.gainNX(-dianquan);
				cm.sendOk("强化失败了！");
				cm.dispose();
			}else{
				cm.gainItem(2049100,-1);
				cm.gainItem(2340000,-1);
				cm.gainNX(-dianquan);
				cm.sendYesNo("#e#r强化成功！#k\r\n\t您选择的装备#v"+cm.getInventory(1).getItem(num).getItemId()+"#将提升属性如下：\r\n\t"+slot[sx]+"#r "+sjsx2+"（HP/MP则*10）#k\r\n\t#e#r是否保留该项加成？\r\n（若装备原始无该属性请点确认，并退回材料！）");
			}
		} else if (status == 7){
			status = 21;
			var item = cm.getInventory(1).getItem(num).copy();
			if (item.getUpgradeSlots() <= 0){
				cm.sendOk("您选择的装备剩余强化次数不足！");
				cm.dispose();
				return;
			}
		    if(cm.getInventory(1).getItem(num).getExpiration() != -1) {
				cm.sendOk("限时装备不能使用强化卷轴.");
				cm.dispose();
				return;
			}
			if(sj1 == 1){
			var statup = new java.util.ArrayList();
			var itemId1 = cm.getInventory(1).getItem(num).getItemId();
			var item = cm.getInventory(1).getItem(num).copy();
			var ii = MapleItemInformationProvider.getInstance();
			var type =  ii.getInventoryType(itemId1);
				cm.gainItem(2049100,-1);
				cm.gainNX(-dianquan);
				item.setUpgradeSlots(item.getUpgradeSlots()-1);
				MapleInventoryManipulator.removeFromSlot(cm.getC(),type,num,1, false);
				MapleInventoryManipulator.addFromDrop(cm.getC(), item,false);
				cm.sendOk("强化失败了！");
				cm.dispose();
			}else{
				cm.gainItem(2049100,-1);
				cm.gainNX(-dianquan);
				cm.sendYesNo("#e#r强化成功！#k\r\n\t您选择的装备#v"+cm.getInventory(1).getItem(num).getItemId()+"#将提升属性如下：\r\n\t"+slot[sx]+"#r "+sjsx2+"（HP/MP则*10）#k\r\n\t#e#r是否保留该项加成？\r\n（若装备原始无该属性请点确认，并退回材料！）");
			}
		} else if (status == 8){
			cm.dispose();
		} else if (status == 11){//+sjsx
			var statup = new java.util.ArrayList();
			var itemId1 = cm.getInventory(1).getItem(num).getItemId();
			var item = cm.getInventory(1).getItem(num).copy();
			var ii = MapleItemInformationProvider.getInstance();
			var type =  ii.getInventoryType(itemId1);
			var sx0 = item.getStr();//力量0
			var sx1 = item.getDex();//敏捷1
			var sx2 = item.getInt();//智力2
			var sx3 = item.getLuk();//运气3
			var sx4 = item.getHp();//HP4
			var sx5 = item.getMp();//MP5
			var sx6 = item.getWatk();//物攻6
			var sx7 = item.getMatk();//魔攻7
			var sx8 = item.getWdef();//物防8
			var sx9 = item.getMdef();//魔防9
			var sx10= item.getAcc();//命中10
			var sx11= item.getAvoid();//回避11
			var sx12= item.getHands();//手技12
			var sx13= item.getSpeed();//移动速度13
			var sx14= item.getJump();//跳跃力14
			if(sx==0&&sx0!=0){
			item.setStr(sx0+sjsx);
			}else if(sx==1&&sx1!=0){
			item.setDex(sx1+sjsx);
			}else if(sx==2&&sx2!=0){
			item.setInt(sx2+sjsx);
			}else if(sx==3&&sx3!=0){
			item.setLuk(sx3+sjsx);
			}else if(sx==4&&sx4!=0){
			item.setHp(sx4+sjsx*10);
			}else if(sx==5&&sx5!=0){
			item.setMp(sx5+sjsx*10);
			}else if(sx==6&&sx6!=0){
			item.setWatk(sx6+sjsx);
			}else if(sx==7&&sx7!=0){
			item.setMatk(sx7+sjsx);
			}else if(sx==8&&sx8!=0){
			item.setWdef(sx8+sjsx);
			}else if(sx==9&&sx9!=0){
			item.setMdef(sx9+sjsx);
			}else if(sx==10&&sx10!=0){
			item.setAcc(sx10+sjsx);
			}else if(sx==11&&sx11!=0){
			item.setAvoid(sx11+sjsx);
			}else if(sx==12&&sx12!=0){
			item.setHands(sx12+sjsx);
			}else if(sx==13&&sx13!=0){
			item.setSpeed(sx13+sjsx);
			}else if(sx==14&&sx14!=0){
			item.setJump(sx14+sjsx);
			}else {
			cm.sendOk("该装备原始属性没有这条，强化被终止并#r退回材料#k！\r\nTips:请保证混沌得到的属性，原始装备需要有哦！");
			cm.gainItem(2049100,1);
			cm.gainItem(2340000,1);
			item.setUpgradeSlots(item.getUpgradeSlots()+1);
			item.setLevel(item.getLevel()-1);
			cm.gainMeso(meso);
			cm.dispose();
			}
			item.setUpgradeSlots(item.getUpgradeSlots()-1);
			item.setLevel(item.getLevel()+1);
			MapleInventoryManipulator.removeFromSlot(cm.getC(),type,num,1, false);
			MapleInventoryManipulator.addFromDrop(cm.getC(), item,false);
			//替换1
			cm.sendOk("强化成功！");
			cm.dispose();
		} else if (status == 12) {//+sjsx2
			var statup = new java.util.ArrayList();
			var itemId1 = cm.getInventory(1).getItem(num).getItemId();
			var item = cm.getInventory(1).getItem(num).copy();
			var ii = MapleItemInformationProvider.getInstance();
			var type =  ii.getInventoryType(itemId1);
			var sx0 = item.getStr();//力量0
			var sx1 = item.getDex();//敏捷1
			var sx2 = item.getInt();//智力2
			var sx3 = item.getLuk();//运气3
			var sx4 = item.getHp();//HP4
			var sx5 = item.getMp();//MP5
			var sx6 = item.getWatk();//物攻6
			var sx7 = item.getMatk();//魔攻7
			var sx8 = item.getWdef();//物防8
			var sx9 = item.getMdef();//魔防9
			var sx10= item.getAcc();//命中10
			var sx11= item.getAvoid();//回避11
			var sx12= item.getHands();//手技12
			var sx13= item.getSpeed();//移动速度13
			var sx14= item.getJump();//跳跃力14
			if(sx==0&&sx0!=0){
			item.setStr(sx0+sjsx2);
			}else if(sx==1&&sx1!=0){
			item.setDex(sx1+sjsx2);
			}else if(sx==2&&sx2!=0){
			item.setInt(sx2+sjsx2);
			}else if(sx==3&&sx3!=0){
			item.setLuk(sx3+sjsx2);
			}else if(sx==4&&sx4!=0){
			item.setHp(sx4+sjsx2*10);
			}else if(sx==5&&sx5!=0){
			item.setMp(sx5+sjsx2*10);
			}else if(sx==6&&sx6!=0){
			item.setWatk(sx6+sjsx2);
			}else if(sx==7&&sx7!=0){
			item.setMatk(sx7+sjsx2);
			}else if(sx==8&&sx8!=0){
			item.setWdef(sx8+sjsx2);
			}else if(sx==9&&sx9!=0){
			item.setMdef(sx9+sjsx2);
			}else if(sx==10&&sx10!=0){
			item.setAcc(sx10+sjsx2);
			}else if(sx==11&&sx11!=0){
			item.setAvoid(sx11+sjsx2);
			}else if(sx==12&&sx12!=0){
			item.setHands(sx12+sjsx2);
			}else if(sx==13&&sx13!=0){
			item.setSpeed(sx13+sjsx2);
			}else if(sx==14&&sx14!=0){
			item.setJump(sx14+sjsx2);
			}else {
			cm.sendOk("该装备原始属性没有这条，强化被终止并#r退回材料#k！\r\nTips:请保证混沌得到的属性，原始装备需要有哦！");
			cm.gainItem(2049100,1);
			cm.gainItem(2340000,1);
			cm.gainNX(dianquan);
			item.setUpgradeSlots(item.getUpgradeSlots()+1);
			item.setLevel(item.getLevel()-1);
			cm.dispose();
			}
			item.setUpgradeSlots(item.getUpgradeSlots()-1);
			item.setLevel(item.getLevel()+1);
			MapleInventoryManipulator.removeFromSlot(cm.getC(),type,num,1, false);
			MapleInventoryManipulator.addFromDrop(cm.getC(), item,false);
			cm.sendOk("强化成功！");
			//替换1
			cm.dispose();
		} else if (status == 21){//+sjsx
			var statup = new java.util.ArrayList();
			var itemId1 = cm.getInventory(1).getItem(num).getItemId();
			var item = cm.getInventory(1).getItem(num).copy();
			var ii = MapleItemInformationProvider.getInstance();
			var type =  ii.getInventoryType(itemId1);
			var sx0 = item.getStr();//力量0
			var sx1 = item.getDex();//敏捷1
			var sx2 = item.getInt();//智力2
			var sx3 = item.getLuk();//运气3
			var sx4 = item.getHp();//HP4
			var sx5 = item.getMp();//MP5
			var sx6 = item.getWatk();//物攻6
			var sx7 = item.getMatk();//魔攻7
			var sx8 = item.getWdef();//物防8
			var sx9 = item.getMdef();//魔防9
			var sx10= item.getAcc();//命中10
			var sx11= item.getAvoid();//回避11
			var sx12= item.getHands();//手技12
			var sx13= item.getSpeed();//移动速度13
			var sx14= item.getJump();//跳跃力14
			if(sx==0&&sx0!=0){
			item.setStr(sx0+sjsx);
			}else if(sx==1&&sx1!=0){
			item.setDex(sx1+sjsx);
			}else if(sx==2&&sx2!=0){
			item.setInt(sx2+sjsx);
			}else if(sx==3&&sx3!=0){
			item.setLuk(sx3+sjsx);
			}else if(sx==4&&sx4!=0){
			item.setHp(sx4+sjsx*10);
			}else if(sx==5&&sx5!=0){
			item.setMp(sx5+sjsx*10);
			}else if(sx==6&&sx6!=0){
			item.setWatk(sx6+sjsx);
			}else if(sx==7&&sx7!=0){
			item.setMatk(sx7+sjsx);
			}else if(sx==8&&sx8!=0){
			item.setWdef(sx8+sjsx);
			}else if(sx==9&&sx9!=0){
			item.setMdef(sx9+sjsx);
			}else if(sx==10&&sx10!=0){
			item.setAcc(sx10+sjsx);
			}else if(sx==11&&sx11!=0){
			item.setAvoid(sx11+sjsx);
			}else if(sx==12&&sx12!=0){
			item.setHands(sx12+sjsx);
			}else if(sx==13&&sx13!=0){
			item.setSpeed(sx13+sjsx);
			}else if(sx==14&&sx14!=0){
			item.setJump(sx14+sjsx);
			}else {
			cm.sendOk("该装备原始属性没有这条，强化被终止并#r退回材料#k！\r\nTips:请保证混沌得到的属性，原始装备需要有哦！");
			cm.gainItem(2049100,1);
			cm.gainMeso(meso);
			item.setUpgradeSlots(item.getUpgradeSlots()+1);
			item.setLevel(item.getLevel()-1);
			cm.dispose();
			}
			item.setUpgradeSlots(item.getUpgradeSlots()-1);
			item.setLevel(item.getLevel()+1);
			MapleInventoryManipulator.removeFromSlot(cm.getC(),type,num,1, false);
			MapleInventoryManipulator.addFromDrop(cm.getC(), item,false);
			cm.sendOk("强化成功！");
			//替换1
			cm.dispose();
		} else if (status == 22) {//+sjsx2
			var statup = new java.util.ArrayList();
			var itemId1 = cm.getInventory(1).getItem(num).getItemId();
			var item = cm.getInventory(1).getItem(num).copy();
			var ii = MapleItemInformationProvider.getInstance();
			var type =  ii.getInventoryType(itemId1);
			var sx0 = item.getStr();//力量0
			var sx1 = item.getDex();//敏捷1
			var sx2 = item.getInt();//智力2
			var sx3 = item.getLuk();//运气3
			var sx4 = item.getHp();//HP4
			var sx5 = item.getMp();//MP5
			var sx6 = item.getWatk();//物攻6
			var sx7 = item.getMatk();//魔攻7
			var sx8 = item.getWdef();//物防8
			var sx9 = item.getMdef();//魔防9
			var sx10= item.getAcc();//命中10
			var sx11= item.getAvoid();//回避11
			var sx12= item.getHands();//手技12
			var sx13= item.getSpeed();//移动速度13
			var sx14= item.getJump();//跳跃力14
			if(sx==0&&sx0!=0){
			item.setStr(sx0+sjsx2);
			}else if(sx==1&&sx1!=0){
			item.setDex(sx1+sjsx2);
			}else if(sx==2&&sx2!=0){
			item.setInt(sx2+sjsx2);
			}else if(sx==3&&sx3!=0){
			item.setLuk(sx3+sjsx2);
			}else if(sx==4&&sx4!=0){
			item.setHp(sx4+sjsx2*10);
			}else if(sx==5&&sx5!=0){
			item.setMp(sx5+sjsx2*10);
			}else if(sx==6&&sx6!=0){
			item.setWatk(sx6+sjsx2);
			}else if(sx==7&&sx7!=0){
			item.setMatk(sx7+sjsx2);
			}else if(sx==8&&sx8!=0){
			item.setWdef(sx8+sjsx2);
			}else if(sx==9&&sx9!=0){
			item.setMdef(sx9+sjsx2);
			}else if(sx==10&&sx10!=0){
			item.setAcc(sx10+sjsx2);
			}else if(sx==11&&sx11!=0){
			item.setAvoid(sx11+sjsx2);
			}else if(sx==12&&sx12!=0){
			item.setHands(sx12+sjsx2);
			}else if(sx==13&&sx13!=0){
			item.setSpeed(sx13+sjsx2);
			}else if(sx==14&&sx14!=0){
			item.setJump(sx14+sjsx2);
			}else {
			cm.sendOk("该装备原始属性没有这条，强化被终止并#r退回材料#k！\r\nTips:请保证混沌得到的属性，原始装备需要有哦！");
			cm.gainItem(2049100,1);
			cm.gainNX(dianquan);
			item.setUpgradeSlots(item.getUpgradeSlots()+1);
			item.setLevel(item.getLevel()-1);
			cm.dispose();
			}
			item.setUpgradeSlots(item.getUpgradeSlots()-1);
			item.setLevel(item.getLevel()+1);
			MapleInventoryManipulator.removeFromSlot(cm.getC(),type,num,1, false);
			MapleInventoryManipulator.addFromDrop(cm.getC(), item,false);
			cm.sendOk("强化成功！");
			//替换1
			cm.dispose();
		}else if(status == 23){
			cm.dispose();
		}
	}
}
