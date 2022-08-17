/*
武器属性提升范本
制作人: 老虎 
QQ : 648215571
*/


var ax1 ="#fMap/MapHelper.img/minimap/match#";
var ax2 ="#fEffect/CharacterEff/1042176/2/0#";
var hd ="#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#"; 
var zb ="#fMap/MapHelper.img/weather/birthday/2#"; 
var yb ="#fMap/MapHelper.img/weather/birthday/5#"; 


status = -1;
var ItemList1 = Array(
1262017,
1212115,
1222109,
1232109,
1402251,
1242116,
1302333,
1312199,
1322250,
1332274,
1342101,
1362135,
1372222,
1382259,
1412177,
1422184,
1432214,
1442268,
1452252,
1462239,
1472261,
1482216,
1492231,
1522138,
1532144,
1552110,
1252093,
1542108
);
var ItemList = Array(
1099011,
1099012,
1342095,
1352009,
1352109,
1352206,
1352216,
1352226,
1352236,
1352246,
1352256,
1352266,
1352276,
1352286,
1352296,
1352406,
1352506,
1352606,
1352707,
1352815,
1352906,
1352916,
1352928,
1352935,
1352945,
1352957,
1352967,
1352975,
1353006,
1353105,
1353405,
1352807,
1352824,
1098006
);
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
       if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
        status--;
    }
    if (status == 0) {
			if (cm.getInventory(1).getItem(1) == null ){
			cm.sendOk("装备栏第一格连个鬼影都没有喂！");
				cm.dispose();
			} else {
						var item1 = cm.getInventory(1).getItem(1).getItemId()
		var number =  cm.getInventory(1).getItem(1).getLimitBreak()*2+2
		var number1 = 50000+cm.getInventory(1).getItem(1).getLimitBreak()*20000
        var avail = "";
			avail+=""+ax1+"#d0"+ax1+"、您好,我是淘居冒险岛强化专家\r\n"; 
			avail+=""+ax1+"#d1"+ax1+"、专门为您提供银河副手的强化\r\n"; 
			avail+=""+ax1+"#d2"+ax1+"、在我这里,你只需要提交一些我指定的物品#k\r\n";
			avail+=""+ax1+"#d3"+ax1+"、我就能给你的副手随机提升全属性2-10点#k\r\n#k";
			avail+=""+ax2+"4"+ax2+"、#r注意：每提升一次需要的材料都会增加哦\r\n#k";
			avail+=""+ax2+"5"+ax2+"、#r注意：只要你有足够的物品,可以无限次提升哦!\r\n#k";
			avail+=""+ax2+"6"+ax2+"、#r注意：把要提升的银河副手放在装备栏的第一个位置\r\n#k";
			avail+=""+ax2+"7"+ax2+"、#r注意：有时间限制和带锁的装备无法提升！\r\n#k";
			avail+=""+ax2+"8"+ax2+"、#r注意：强化需要的材料数量不要把自己要强化的副手一起算上！\r\n#k";
			avail+="#b"+zb+"本次提升所需要的材料是:#v"+item1+"#x"+number+"个以及点券x"+number1+"点！"+yb+"\r\n#k";
			avail+="   #r目前拥有#z"+item1+"#：[#d"+cm.getItemQuantity(item1)+"#k#r]个  点券: "+cm.getPlayer().getCSPoints(1)+" 点\r\n";
			avail+="            #L1##b"+hd+"提升银河系列副手#l#k\r\n\r\n\r\n";
			avail+="\r\n\r\n";
            cm.sendSimple(avail);
			 } 
    } else if(status == 1) {
		var ii = cm.getInventory(1).getItem(1);
		if(selection==0){
			var itemList  = ItemList1;
			var Str = getMinAndMax(2,10);
			var Dex = getMinAndMax(2,10);
			var Luk = getMinAndMax(2,10);
			var Int = getMinAndMax(2,10);
			var Watk = getMinAndMax(2,10);
			var Matk = getMinAndMax(2,10);
		}else if(selection==1){
			var itemList  = ItemList;
			var Str = getMinAndMax(2,10);
			var Dex = getMinAndMax(2,10);
			var Luk = getMinAndMax(2,10);
			var Int = getMinAndMax(2,10);
			var Watk = getMinAndMax(2,10);
			var Matk = getMinAndMax(2,10);
		}else{
			var itemList  = 0;

		}
			if (itemList==0){
				cm.sendOk("出错了哦,请联系GM处理哟");
				cm.dispose();
				return;
			}
						if(cm.getInventory(1).getItem(1) == null){
				cm.sendOk("#r装备栏第一格连个鬼影都没有喂！");
				cm.dispose();
				return;
			}
			if (cm.getEquipBySlot(1).getFlag() == 1) {
                    cm.sendOk("#r说明不是让你注意了上锁的武器不能提升吗。消失了不要找我~!");
                    cm.dispose();
                    return;
                }
			if (cm.getEquipBySlot(1).getExpiration() > 0) {
                    cm.sendOk("#r说明不是让你注意了有时间限制的武器不能提升吗。消失了不要找我~!");
                    cm.dispose();
                    return;
					 }
		var item1 = cm.getInventory(1).getItem(1).getItemId()
		var number =  cm.getInventory(1).getItem(1).getLimitBreak()*2+3
			if(!cm.haveItem(item1,number)){				
				cm.sendOk("#r你并没有"+number+"个#z"+item1+"#，你并没有"+number+"个#z"+item1+"#，你并没有"+number+"个#z"+item1+"#，重要的事情说三遍");
				cm.dispose();
				return;
			}
		var number1 = 50000+cm.getInventory(1).getItem(1).getLimitBreak()*20000
			if(cm.getPlayer().getCSPoints(1) < number1 ){
				cm.sendOk("#r你并没有足够的点券");
				cm.dispose();
				return;
			}
			var itemid = cm.getInventory(1).getItem(1).getItemId();
			var PD = false;
			for (var i = 0; i < itemList.length; i++) {
                if (itemid==itemList[i]) {
					PD = true;
					break;
                }
            }
			if (PD){
				if(cm.canHold(itemid,1)){
					cm.setPQLog("提升属性",1);
					var STR = ii.getStr();
					var DEX = ii.getDex();
					var INT = ii.getInt();
					var LUK = ii.getLuk();
					var WATK = ii.getWatk();
					var MATK = ii.getMatk();
					var ACC = ii.getAcc();
					var JUMP = ii.getJump();
					var SPEED = ii.getSpeed();
					var MDEF = ii.getMdef();
					var WDEF = ii.getWdef();
					var VOID = ii.getAvoid();
					var EN = ii.getEnhance();
					var HP = ii.getHp();
					var MP = ii.getMp();
					var SJ = ii.getUpgradeSlots();
					var OW = ii.getOwner();
					var TOTALDAMAGE = ii.getTotalDamage();
					var IGNOREPDR = ii.getIgnorePDR();
				    var LIMITBREAK = ii.getLimitBreak();
					var BOSSDAMAGE = ii.getBossDamage();
					var POTENTIAL1 = ii.getPotential(1,false);
					var POTENTIAL2 = ii.getPotential(2,false);
					var POTENTIAL3 = ii.getPotential(3,false);
					var POTENTIAL4 = ii.getPotential(1,true);
					var POTENTIAL5 = ii.getPotential(2,true);
					var POTENTIAL6 = ii.getPotential(3,true);
					 cm.gainItem(item1,-number);
					var toDrop = cm.getNewEquip(itemid);  
					toDrop.setStr(Str+STR);
					toDrop.setDex(Dex+DEX);
					toDrop.setInt(Int+INT); 
					toDrop.setLuk(Luk+LUK); 
					toDrop.setAvoid(VOID);
					toDrop.setWdef(WDEF);
					toDrop.setMdef(MDEF);
					toDrop.setAcc(ACC);
					toDrop.setSpeed(SPEED);
					toDrop.setJump(JUMP);
					toDrop.setWatk(Watk+WATK);
					toDrop.setMatk(Matk+MATK);
					toDrop.setEnhance(EN);
					toDrop.setUpgradeSlots(SJ);
					toDrop.setHp(HP);
					toDrop.setMp(MP);
					toDrop.setOwner(OW);
					toDrop.setBossDamage(BOSSDAMAGE);
					toDrop.setTotalDamage(TOTALDAMAGE);
					toDrop.setIgnorePDR(IGNOREPDR);
					toDrop.setLimitBreak(LIMITBREAK+1);
					cm.changePotential(1,1,POTENTIAL1,false);
					cm.changePotential(1,2,POTENTIAL2,false);
					cm.changePotential(1,3,POTENTIAL3,false);
					cm.changePotential(1,4,POTENTIAL4,false);
					cm.changePotential(1,5,POTENTIAL5,false);
					cm.changePotential(1,6,POTENTIAL6,false);
					cm.addFromDrop(toDrop);
					cm.gainNX(-number1);
					cm.worldSpouseMessage(0x0A,""+ cm.getChar().getName() +" ：我通过提交物品提升了 "+cm.getItemName(itemid)+"的全属性大家一起恭喜我吧!");
					cm.sendOk("#r恭喜您，提升成功啦.快看看你背包里的#b#z"+itemid+"#吧");
					cm.dispose();
			}else{
				cm.sendOk("请检查装备栏是否有位置");
				cm.dispose();
			}
		}else{
			cm.sendOk("请检查装备栏第一个位置是否为银河系列副手！");
			cm.dispose();
		}
	}
}
function getMinAndMax(minVal, maxVal) {
	return Math.floor(Math.random()*(maxVal-minVal+1))+minVal;
}