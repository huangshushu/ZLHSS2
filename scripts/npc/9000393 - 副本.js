/*
制作：休彼德蔓
功能：创世武器解封和升级
时间：2019年4月3日
说明: 封印的创世武器须积分解封
      解除封印后用出席图章升级或添加潜能
	  所需材料可根据本服情况自行更改

*/
var itemList =  Array(
/*封印的创世武器-解除封印的创世武器*/
Array(1242138,1242139),//	封印的创世聚能锁链剑  	
Array(1472274,1472275),//	封印的创世斗拳 	
Array(1302354,1302355),//	封印的创世军刀 
Array(1402267,1402268),//	封印的创世双手剑 
Array(1312212,1312213),//	封印的创世斧 	
Array(1412188,1412189),//	封印的创世双手战斧 
Array(1442284,1442285),//	封印的创世长戟 
Array(1322263,1322264),//	封印的创世锤 
Array(1422196,1422197),//	封印的创世双手锤 
Array(1432226,1432227),//	封印的创世枪 	
Array(1332288,1332289),//	封印的创世短刀 
Array(1362148,1362149),//	封印的创世手杖 
Array(1372236,1372237),//	封印的创世短杖 
Array(1382273,1382274),//	封印的创世长杖 
Array(1252105,1252106),//	封印的创世权杖 
Array(1212128,1212129),//	封印的创世双头杖 
Array(1452265,1452266),//	封印的创世弓 	
Array(1462251,1462252),//	封印的创世弩  1462252	
Array(1522151,1522152),//	封印的创世双弩枪 	
Array(1542127,1542128),//	封印的创世武士刀 	
Array(1222121,1222122),//	封印的创世灵魂手铳 
Array(1532156,1532157),//	封印的创世攻城炮 
Array(1232121,1232122),//	封印的创世亡命剑 	
Array(1492244,1492245),//	封印的创世手铳  
Array(1482231,1482232),//	封印的创世拳爪 	
Array(1552129,1552130),//	封印的创世扇子 	
Array(1272039,1272040),//	封印的创世锁链 	
Array(1282039,1282040),//	封印的创世魔力手套 
Array(1582043,1582044),//	封印的创世机甲枪 	
Array(1262050,1262051)	//	封印的创世ESP限制器 
);

var qnlist = Array(
/*潜能id-概率*/
Array(40041, 100), // 力量12%
Array(40042, 100), // 
Array(40043, 100), // 
Array(40044, 100), // 
Array(40045, 100), //HP12%
Array(40055, 90), // 暴擊率12%
Array(40051, 20),  // 攻擊力12%
Array(40052, 20),  // 魔法力12%
Array(40603, 40),  // 40%boss
Array(40292, 80),  // 40%無視
Array(42087, 90),  // 9%所有屬性
Array(40057, 70)//8%暴擊傷害
);

var status = -1;
var text;
var PD = 0;
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
        if (cm.getInventory(1).getItem(1) == null) {
            cm.sendOk("装备栏第一格得放上装备哦.否则无法使用此功能");
            cm.dispose();
        } else {
            var	txt = "\t\t" + ll +ll+ll+ "";
        
		var ii = cm.getInventory(1).getItem(1);
        var itemid = ii.getItemId();
		var dj0 =ii.getEnhance();
		var pg =ii.getLimitBreak();
		var fee = 1000+Math.floor(pg / 100000);//根据破功值所需费用
		var dj =dj0+1;
		var need = getnumber();
        //判定是否解封
        for (var i = 0; i < itemList.length; i++) {
            if (itemid == itemList[i][1]) {
                PD =1;
                break;
            } else if (itemid == itemList[i][0]) {
				PD =2;
				break;
			}
        }
        txt += "\r\n\r\n#fn黑体##fs15#";
            txt += " "+s1+" 您好,这里是#b创世武器升级中心.#k\r\n";
            txt += " "+s2+" 根据强化道具的不同,需要不同数量的#b#z4032398##k进行提升.最高强化等级为#r25级#b.\r\n";
            txt += " "+s3+" 当前选择道具:#k\r\n#k";
			txt += "\t#i"+itemid+"#\t#r"+dj0+"级别#b#z"+itemid+"#\r\n\r\n";
            if (PD==1) {
            txt += " "+s4+"#d本次提升所需要的物品是:\r\n";
            txt += "\t#i4032398# #b#z4032398# #r"+need+" #b个(当前拥有"+cm.getItemQuantity(4032398)+"个)\r\n";
            txt += "\r\n";
			txt += " "+s5+"提升成功后可附加属性:\r\n";
			txt += "\t\t\t\t#d力量:#r+ "+(dj*3)+"\r\n";
			txt += "\t\t\t\t#d智力:#r+ "+(dj*3)+"\r\n";
			txt += "\t\t\t\t#d敏捷:#r+ "+(dj*3)+"\r\n";
			txt += "\t\t\t\t#d运气:#r+ "+(dj*3)+"\r\n";
			txt += "\t\t\t\t#d攻击力:#r+ "+(dj*2)+"\r\n";
			txt += "\t\t\t\t#d魔法力:#r+ "+(dj*2)+"\r\n";
			
			
			if (dj>15) {//15星后增加BOSS伤害
			
			txt += "\t\t\t\t#dBOSS伤害:#r+ "+(dj-10)+"%\r\n";
			txt += " "+s7+"#d选择继续升级或者附加潜能！！\r\n#k\t\t#L1##b" +wi2+ "升级#l\t\t#L3#"+wi2+"潜能#l\r\n\r\n#k";
			} else {
			txt += " "+s7+"#d点击确定，开始强化！！\r\n#k\t\t\t#L1##b" + ok + "#l#k\r\n\r\n#k";
			}
			txt += "";
			txt += "\t" + ll +ll+ll+ "";
            cm.sendSimple(txt);
			} else if (PD==2){//第一格为封印的创世武器时
			txt += " "+s4+"#r该道具无法进行提升,请先解封!#d\r\n";
			txt += " "+s5+"#d武器当前破功值:#r"+pg+"#d\r\n";
			txt += " "+s6+"#d解封需要积分:#r"+fee+"/#d"+cm.getPlayerPoints()+"\r\n";
			txt += " \t\t#L2#点击解封#l\r\n";
			//cm.dispose();
			cm.sendSimple(txt);
			} else {
            txt += "你的装备栏第一格不是创世武器!";		
            cm.dispose();
            cm.sendOk(txt);		  
			}
            
        }
    } else if (status == 1) {
        
        var ii = cm.getInventory(1).getItem(1);
        var itemid = ii.getItemId();
        //var PD = 0;
		var dj0 =ii.getEnhance();
		var pg =ii.getLimitBreak();
		var fee = 1000+Math.floor(pg / 100000);
		var dj =dj0+1;
 
		var need = getnumber();
		if (selection==2) {//解封
		if (cm.getPlayerPoints()>=0){//测试用-使用时改为值改为fee
		var toDrop = cm.getNewEquip(itemid+1);
		toDrop.setLimitBreak(ii.getLimitBreak());
		cm.addFromDrop(toDrop);
		cm.removeItem(1, 1, 1);
		//cm.gainPlayerPoints(-fee);
		cm.sendOk("解封成功!");
		
		cm.worldSpouseMessage(0x25,"[创世武器]:  "+ cm.getChar().getName() +" 成功使用"+fee+"积分解封了"+cm.getItemName(itemid)+" ");//颜色消息
		cm.dispose();
		
		} else {
		cm.sendOk("需要"+fee+"点积分来解封!");
		cm.dispose();
		}	
		
		} else if (selection==3) {
			txt = "#fn黑体##fs15#";
						var txt = "\r\n"
                        txt += "　" + wi2 + " #d当前道具 - #n#b#i" + ii.getItemId() + "##k#n\r\n";
						txt += "　" + wi2 + " #d请务必按照1-6的顺序#r依次#d随机潜能,否则后果自负!!!!#k#n\r\n";
						txt += "　" + wi2 + " #d根据道具等级,随机潜能的等级有所不同#k#n\r\n";
						txt += "　" + wi2 + " #d除普通潜能外,还可以随机出:\r\n#r攻击力%, boss伤%, 无视防御%, 暴击伤害%#b 等强力潜能!#k#n\r\n";
                        txt += "　" + wi2 + " #d每次随机所花费1个#b#z4032398#\r\n";
                        cm.sendSimple(txt);
		} else if (selection==1) {
		
        if (!cm.haveItem(4032398, need)) {//检测材料
                        cm.sendOk("#r你并没有" + need + "个#z4032398#");
                        cm.dispose();
                        return;
         }
		 
		 if(dj==31){
					cm.sendOk("您的武器已经是最高等级了!!");
					cm.dispose();
					return ;
				}
				/*if(ii.getUpgradeSlots()!=0){
					cm.sendOk("还有升级次数的武器无法提升，砸满卷再来！");
					cm.dispose();
					return ;
				}*/
		
			
            var Str = dj*3
            var Dex = dj*3
            var Luk = dj*3
            var Int = dj*3
            var Watk = dj*2
            var Matk = dj*2
            var bossDam = dj-10

        
                var nirvanaFlame = ii.getNirvanaFlame();//火花。
                var STR = ii.getStr()-nirvanaFlame.getNstr();
                var DEX = ii.getDex()-nirvanaFlame.getNdex();
                var INT = ii.getInt()-nirvanaFlame.getNint();
                var LUK = ii.getLuk()-nirvanaFlame.getNluk();
                var WATK = ii.getWatk()-nirvanaFlame.getNwatk();
                var MATK = ii.getMatk()-nirvanaFlame.getNmatk();
                var ACC = ii.getAcc()-nirvanaFlame.getNacc();
                var JUMP = ii.getJump()-nirvanaFlame.getNjump();
                var MDEF = ii.getMdef()-nirvanaFlame.getNmdef();
                var WDEF = ii.getWdef()-nirvanaFlame.getNwdef();
                var VOID = ii.getAvoid()-nirvanaFlame.getNavoid();
                var SP = ii.getSpeed()-nirvanaFlame.getNspeed();
                var HP = ii.getHp()-nirvanaFlame.getNhp();
                var MP = ii.getMp()-nirvanaFlame.getNmp();
                var TOTALDAMAGE = ii.getTotalDamage()-nirvanaFlame.getNtotalDamage();
                var IGNOREPDR = ii.getIgnorePDR()-nirvanaFlame.getNignorePDR();
                var BOSSDAMAGE = ii.getBossDamage()-nirvanaFlame.getNbossDamage();
                var ALLSTAT = ii.getAllStat()-nirvanaFlame.getNallStat();
                var EN = ii.getEnhance();
                var SJ = ii.getUpgradeSlots();
                var toDrop = cm.getNewEquip(itemid);
                toDrop.setState(ii.getState(false), false);
                if (ii.getSocket1() > 0)
                    toDrop.setSocket1(ii.getSocket1());
                if (ii.getSocket2() > 0)
                    toDrop.setSocket2(ii.getSocket2());
                if (ii.getSocket3() > 0)
                    toDrop.setSocket3(ii.getSocket3());
                toDrop.setViciousHammer(ii.getViciousHammer());    //金锤子
                toDrop.setLevel(ii.getLevel()); //这是已经砸卷的次数
				toDrop.setLimitBreak(ii.getLimitBreak());//破功
                toDrop.setPotential(ii.getPotential(1, true), 1, true);
                toDrop.setPotential(ii.getPotential(2, true), 2, true);
                toDrop.setPotential(ii.getPotential(3, true), 3, true);
                toDrop.setPotential(ii.getPotential(1, false), 1, false);
                toDrop.setPotential(ii.getPotential(2, false), 2, false);
                toDrop.setPotential(ii.getPotential(3, false), 3, false);
                toDrop.setSpeed(SP);
				toDrop.setAvoid(VOID);
                toDrop.setWdef(WDEF);
                toDrop.setMdef(MDEF);
                toDrop.setAcc(ACC);
                toDrop.setJump(JUMP);
                
                toDrop.setUpgradeSlots(SJ); //可升级次数
                toDrop.setHp(HP);
                toDrop.setMp(MP);
                toDrop.setBossDamage(BOSSDAMAGE);
                toDrop.setTotalDamage(TOTALDAMAGE);
                toDrop.setIgnorePDR(IGNOREPDR);
                toDrop.setAllStat(ALLSTAT);
				toDrop.setEnhance(EN+1);
                toDrop.setStr(Str + STR);
                toDrop.setDex(Dex + DEX);
                toDrop.setInt(Int + INT);
                toDrop.setLuk(Luk + LUK);
				toDrop.setWatk(Watk + WATK);
                toDrop.setMatk(Matk + MATK);
				if (dj >15){
                        toDrop.setBossDamage(BOSSDAMAGE + bossDam);
                }
				
					
                toDrop.setFire(ii.getFire());   //设置火花状态
               

                cm.removeSlot(1, 1, 1);
                cm.addFromDrop(toDrop);
                cm.gainItem(4032398,-need);
                cm.sendOk("#r恭喜您，提升成功啦.快看看你背包里的#b#z" + itemid + "#吧");
				//cm.worldMessageItem("创世武器升级 :"+ cm.getChar().getName() +"升级成功,一起恭喜他吧!",toDrop);//
                cm.dispose();
		
		}
		
        
    }  else if (status == 2) {
		if (!cm.haveItem(4032398, 1)) {//检测材料
                        cm.sendOk("#r你并没有1个#z4032398#");
                        cm.dispose();
                        return;
         }
                 var Equip = cm.getInventory(1).getItem(1);
                txt = "\r\n";
                txt += "　" + wi2 + " #r当前道具 - #n#b#i" + Equip.getItemId() + "##k#n\r\n";
                txt += "　" + wi2 + " #r#d请选择:#k\r\n";
                for (var i = 1; i < 7; i++) {
                    txt += "#L" + i + "#" + wi2 + "#b 随机重置 第 #r" + i + "#b 行 潜能 #l#k\r\n";
                }
                cm.sendSimple(txt);
		
    } else if (status == 3) {
		 var Equip = cm.getInventory(1).getItem(1);
				if (Equip.getState(false) != 20) {
						var toDrop = cm.getInventory(1).getItem(1).copy();
						toDrop.setState(20,false); /* 默認 SS */
						cm.removeItem(1, 1, 1);
				          cm.addFromDrop(toDrop)
						  cm.sendOk("已将您的装备升级为#bSS#k级,请继续操作.");
						  cm.dispose();
						  return;
					}
                    var chance = Math.floor(Math.random() * 100);
                    var 寄存器 = Array();
                    for (var i = 0; i < qnlist.length; i++) {
                    if (qnlist[i][1] >= chance) {
                        寄存器.push(qnlist[i])
                    }
                }
             
                    var random = new java.util.Random();
                    var Fchance = random.nextInt(寄存器.length);
                    var qnid = 寄存器[Fchance][0];
             
                /////////执行更改
				if (cm.changePotential(1, selection, qnid, false)) { //[装备位置] [潜能位置] [潜能ID] [是否公告] 
                    cm.sendOk("#r\r\n\t\t恭喜您！潜能属性变更成功！！");
		    cm.gainItem(4032398,-1);
                    cm.getPlayer().saveToDB(false, false);
					//cm.worldMessageItem("★★ :"+ cm.getChar().getName() +" 随机修改了它的第"+selection+"条附加潜能",Equip);
                    
                    
                } else {
                    cm.sendOk("\r\n\t\t出现错误!");
                    
                }

                cm.dispose();
				
                
		
    }
}

function getMinAndMax(minVal, maxVal) {
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}

function getnumber(){
	var ii = cm.getInventory(1).getItem(1);
	var dj =ii.getEnhance()+1;
	switch (dj) {
        case 1:case 2:case 3:case 4:case 5:
            return 1;
        case 6: case 7: case 8: case 9: case 10:
            return 2;
        case 11:case 12:case 13:case 14:case 15:
            return 3;
        case 16:case 17:case 18:case 19:case 20:
            return 4;
		case 21:case 22:case 23:case 24:case 25:
            return 5;
		case 26:case 27:case 28:case 29:case 30:
            return 6;
        default:
            return 0;
	}
	
	
	
	
}
var s0 = "#fUI/UIWindowString.img/Scenario/quest_info/clear/number/1#";//
var s1 = "#fUI/UIWindowString.img/Scenario/quest_info/clear/number/1#";//
var s2 = "#fUI/UIWindowString.img/Scenario/quest_info/clear/number/2#";//
var s3 = "#fUI/UIWindowString.img/Scenario/quest_info/clear/number/3#";//
var s4 = "#fUI/UIWindowString.img/Scenario/quest_info/clear/number/4#";//
var s5 = "#fUI/UIWindowString.img/Scenario/quest_info/clear/number/5#";//
var s6 = "#fUI/UIWindowString.img/Scenario/quest_info/clear/number/6#";//
var s7 = "#fUI/UIWindowString.img/Scenario/quest_info/clear/number/7#";//
var s8 = "#fUI/UIWindowString.img/Scenario/quest_info/clear/number/8#";//
var ll = "#fUI/UIWindowPL.img/PieceReward_Clover/Tab/line#";//
var ax1 = "#fMap/MapHelper.img/minimap/match#";
var ax2 = "#fEffect/CharacterEff/1042176/2/0#";
var hd = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#";
var zb = "#fMap/MapHelper.img/weather/birthday/2#";
var yb = "#fMap/MapHelper.img/weather/birthday/5#";
var ok = "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#";
var ok1 = "#fUI/UISpinOff.img/spinOFF_Guitar/Guage/normal/0#";
var ok2 = "#fUI/UISpinOff.img/spinOFF_Guitar/Guage/normal/1#";
var ok3 = "#fUI/UISpinOff.img/spinOFF_Guitar/Guage/normal/2#";
var wi2 = "#fUI/piggyBarMinigame.img/crunch/1#";//
