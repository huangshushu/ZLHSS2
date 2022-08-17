var MapleInventoryManipulator = Java.type('server.MapleInventoryManipulator');
var MapleItemInformationProvider = Java.type('server.MapleItemInformationProvider');

var xx;//
var xxdj;//
var xxnew;//新星星等级 owner
var shibai;//失败标识
var sj1;//成功率
var sjsx=Math.floor(Math.random()*7)-2;
var sjsx2=Math.floor(Math.random()*10)-2;
var xuqiushuliang;
var status = 0;
var stats = Array("力量", "敏捷", "智力", "幸运", "HP", "MP", "物理攻击", "魔法攻击", "物理防御", "魔法防御", "命中率", "回避率", "灵敏度", "移动速度", "跳跃力", "卷轴数", "黄金铁锤使用数", "使用卷轴数", "星星数", "浅能 1", "浅能 2", "浅能 3", "装备名字");
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
		
		text = "\t#e========欢迎来到	#r天使冒险岛岛#k========\r\n\#e在我这里可以对#r已经上满卷轴#k的装备额外提升属性！\r\n每次使用星之力将提升#r1-10#k的四维和双攻#k\r\n星之力等级越高，失败几率越大，当前满星10星\r\n失败将会下降星之力等级，#r6星之前不会下降#k！\r\n#rPS:仙器-魔器-神器,无法使用星之力\r\n#b";
        text += "#e- 首先请选择要强化星之力的道具 -#n\r\n#b";
        var indexof = 1;
		//遍历装备栏
		itemList = cm.getInventory(1).list().iterator();
        while (itemList.hasNext()) {
            var item = itemList.next();
            text += "#L" + item.getPosition() + "##v" + item.getItemId() + "#";
            if (indexof > 1 && indexof % 5 == 0) {
                text += "\r\n";
            }
            indexof++;
        }
		//遍历结束
        cm.sendSimple(text);
		} else if (status == 1){
			num = selection;
			var xx = cm.getInventory(1).getItem(num).getOwner();
			if(xx == ""){
				sj1 = 0;
				shibai = 0;
				xxnew = "★";
				xxdj = 0;
			}else if (xx == "★"){
				sj1 = Math.floor(Math.random()*1);
				shibai = 0;
				xxnew = "★★";
				xxdj = 1;
			}else if (xx == "★★"){
				sj1 = Math.floor(Math.random()*2);
				shibai = 0;
				xxnew = "★★★";
				xxdj = 2;
			}else if (xx == "★★★"){
				sj1 = Math.floor(Math.random()*3);
				shibai = 0;
				xxnew = "★★★★";
				xxdj = 3;
			}else if (xx == "★★★★"){
				sj1 = Math.floor(Math.random()*4);
				shibai = 0;
				xxnew = "★★★★★";
				xxdj = 4;
			}else if (xx == "★★★★★"){
				sj1 = Math.floor(Math.random()*5);
				shibai = 0;
				xxnew = "★★★★★★";
				xxdj = 5;
			}else if (xx == "★★★★★★"){
				sj1 = Math.floor(Math.random()*6);
				shibai = 0;
				xxnew = "7★";
				xxdj = 6;
			}else if (xx == "7★"){
				sj1 = Math.floor(Math.random()*7);
				shibai = 2;
				xxnew = "8★";
				xxdj = 7;
			}else if (xx == "8★"){
				sj1 = Math.floor(Math.random()*8);
				shibai = 3;
				xxnew = "9★";
				xxdj = 8;
			}else if (xx == "9★"){
				sj1 = Math.floor(Math.random()*9);
				shibai = 4;
				xxnew = "10★";
				xxdj = 9;
			}else { 
				cm.dispose();
			}
			var xuqiushuliang = (xxdj+1)*(xxdj+1)*10+9;
			text ="您选择的装备是：#v"+cm.getInventory(1).getItem(num).getItemId()+"##t"+cm.getInventory(1).getItem(num).getItemId()+"#\r\n\r\n当前星之力等级为：#r"+xx+"#k\r\n您需要#v3992025##r"+xuqiushuliang+"#k个来进行强化，成功率："+Math.floor(100/(xxdj+1))+"%\r\n请点击下一步使用星之力进行强化\r\n\r\n";
			if(xx == ""||xx == "★"||xx == "★★"||xx == "★★★"||xx == "★★★★"||xx == "★★★★★"||xx == "★★★★★★"||xx == "7★"||xx == "8★"||xx == "9★"||xx == "10★"){
				cm.sendNext(text);
			}else {
				cm.sendOk("该装备不可使用星之力强化，请截图并联系管理员！\r\n"+xx+"");
				cm.dispose();
			}
		} else if (status == 2){
			var xuqiushuliang = (xxdj+1)*(xxdj+1)*10+9;
			var item = cm.getInventory(1).getItem(num).copy();
			var xx = cm.getInventory(1).getItem(num).getOwner();
			if (item.getUpgradeSlots() != 0){
				cm.sendOk("您选择的装备仍有剩余强化次数，不能使用星之力！");
				cm.dispose();
				return;
			}
			if(cm.getInventory(1).getItem(num).getExpiration() != -1) {
				cm.sendOk("限时装备不能强化星之力.");
				cm.dispose();
				return;
			}
			if(!cm.haveItem(3992025,xuqiushuliang)){
				cm.sendOk("#v3992025#物品数量不足！");
				cm.dispose();
				return;
			}
			if (cm.isCash(cm.getInventory(1).getItem(num).getItemId())) {
				cm.sendOk("现金道具不能进行");
				cm.dispose();
				return;
			}
			if(sj1==0){
				cm.gainItem(3992025,-xuqiushuliang);
				cm.sendYesNo("#e#r强化成功！请确认！#k\r\n\t您选择的装备#v"+cm.getInventory(1).getItem(num).getItemId()+"#从 "+xx+" 提升至 #r"+xxnew+" #k\r\n\t#e#r！\r\n");
			}else {
				cm.gainItem(3992025,-xuqiushuliang);
				if(shibai == 0){
					cm.sendOk("强化失败了,但是星之力并没有下降！");
					cm.dispose();
				}else {
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
					item.setStr(sx0-(xxdj-5)*2);
					item.setDex(sx1-(xxdj-5)*2);
					item.setInt(sx2-(xxdj-5)*2);
					item.setLuk(sx3-(xxdj-5)*2);
					item.setHp(sx4-(xxdj-5)*2);
					item.setMp(sx5-(xxdj-5)*2);
					item.setWatk(sx6-(xxdj-5)*2);
					item.setMatk(sx7-(xxdj-5)*2);
					//item.setWdef(sx8*0.99);
					//item.setMdef(sx9*0.99);
					//item.setAcc(sx10*0.99);
					//item.setAvoid(sx11*0.99);
					//item.setHands(sx12*0.99);
					//item.setSpeed(sx13*0.99);
					//item.setJump(sx14*0.99);
					item.setOwner("★★★★★★");
					MapleInventoryManipulator.removeFromSlot(cm.getC(),type,num,1, false);
					MapleInventoryManipulator.addFromDrop(cm.getC(), item,false);
					cm.sendOk("强化失败了,星之力被下降到了6！");
					cm.dispose();
				}
			}
		} else if (status == 3){//+sjsx
			var nsx0 = getMinAndMax(1,xxdj+5);
			var nsx1 = getMinAndMax(1,xxdj+5);
			var nsx2 = getMinAndMax(1,xxdj+5);
			var nsx3 = getMinAndMax(1,xxdj+5);
			var nsx4 = getMinAndMax(1,xxdj+5);
			var nsx5 = getMinAndMax(1,xxdj+5);
			var nsx6 = getMinAndMax(1,xxdj+5);
			var nsx7 = getMinAndMax(1,xxdj+5);
			var nsx8 = getMinAndMax(1,xxdj+1);
			var nsx9 = getMinAndMax(1,xxdj+1);
			var nsx10 = getMinAndMax(1,xxdj+1);
			var nsx11 = getMinAndMax(1,xxdj+1);
			var nsx12 = getMinAndMax(1,xxdj+1);
			var nsx13 = getMinAndMax(1,xxdj+1);
			var nsx14 = getMinAndMax(1,xxdj+1);
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
			item.setStr(sx0+nsx0);
			item.setDex(sx1+nsx1);
			item.setInt(sx2+nsx2);
			item.setLuk(sx3+nsx3);
			item.setHp(sx4+nsx4);
			item.setMp(sx5+nsx5);
			item.setWatk(sx6+nsx6);
			item.setMatk(sx7+nsx7);
			//item.setWdef(sx8+nsx8);
			//item.setMdef(sx9+nsx9);
			//item.setAcc(sx10+nsx10);
			//item.setAvoid(sx11+nsx11);
			//item.setHands(sx12+nsx12);
			//item.setSpeed(sx13+nsx13);
			//item.setJump(sx14+nsx14);
			item.setOwner(xxnew);
			MapleInventoryManipulator.removeFromSlot(cm.getC(),type,num,1, false);
			MapleInventoryManipulator.addFromDrop(cm.getC(), item,false);
			cm.sendOk("星之力强化成功！");
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"[星之力]" + " : " + " 玩家 [" + cm.getPlayer().getName() + "]成功强化星之力至"+xxnew+"！大家祝贺他(她)吧！",true).getBytes()); //喇叭  
			cm.dispose();
		}
	}
}

function getMinAndMax(minVal, maxVal) {
	return Math.floor(Math.random()*(maxVal-minVal+1))+minVal;
}
