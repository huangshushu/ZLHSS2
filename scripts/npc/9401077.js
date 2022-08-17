/*芬芬时尚潮流  在线时间兑换东西*/
var status = 0;
var eff = "#fEffect/CharacterEff/1112904/0/0#"
var wi8 = "#fUI/StarCityUI.img/Board_GameRank/user/myrank#";  //黄色条
var wi2 = "#fUI/piggyBarMinigame.img/crunch/9#";//
var wi1 = "#fUI/piggyBarMinigame.img/crunch/1#";//
var xx = "#fUI/piggyBarMinigame.img/crunch/1#";//
var yy = "#fUI/UIWindowBT.img/WorldMap/BtNext/normal/0#";//
var jj = "#fUI/SoulUI.img/DungeonMinimap/BtMaxi/pressed/0#";//


var sel;
var les;


var reward =  Array(
					Array(1,  300,   1190400, 60, 20, 1, 10), //A级
					Array(2,  300,   1190405, 80, 40, 1, 10), //A级
					Array(3,  600,   1190403, 100, 60, 3, 20),//B级
					Array(4,  1200,  1190407, 120, 80, 5, 30),	//			 
					Array(5,  2000,  1190601, 150, 100, 7, 40), //       
					Array(6,  3000,  1191001, 200, 120, 9, 50),  //
					Array(7,  4500,  1190800, 300, 130, 12, 60), 
					Array(8,  7000,  1190302, 400, 150, 14, 70),
					Array(8,  10000,  1190801, 500, 200, 15, 100)
				
					);
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
		if (status == 0) {
        var txt =" "+wi8+"\r\n\r\n";
		txt += "#fs16##fn黑体#"+wi1+" 你当前的活跃度为：" + cm.getPlayerPoints() + "。#fs14##k\r\n\r\n";
		txt +=""+wi1+" 升级时，请#r取下#k口袋装备，放在背包内。\r\n";
		for (var i=1; i<reward.length; i++) {
		if (cm.getPQLog("符号" + i,1) == 0) {

	    txt += "#d#L" + i + "# "+wi2+" #i" + reward[i][2] + "# #z" + reward[i][2] + "#  #g[未完成]#l\r\n";
        } else {
	    txt += "#d#L" + i + "# "+wi2+" #i" + reward[i][2] + "# #z" + reward[i][2] + "#  #r[已完成]#l\r\n";
		}
		}

        cm.sendSimple(txt);
    } else if (status == 1) {
		
          sel = selection;
		  var txt ="#fn黑体#";
		  
		   txt +="#fs17##d"+yy+" 升级可获得: \r\n#i" + reward[sel][2] + "##b #z" + reward[sel][2] + "#\r\n\r\n#fs15#";
		   txt +="#d"+jj+" 四维属性: + #r" + reward[sel][3] + "\r\n";
		   txt +="#d"+jj+" 攻击力: + #r" + reward[sel][4] + "\r\n";
		   txt +="#d"+jj+" 魔法力: + #r" + reward[sel][4] + "\r\n";
		   txt +="#d"+jj+" 星之力: + #r" + reward[sel][5] + "\r\n";
		   txt +="#d"+jj+" BOSS伤: + #r" + reward[sel][6] + "%\r\n\r\n";
		   txt +=""+yy+" #d升级所需活跃度 #r"+ reward[sel][1] +"";

		   
		cm.sendSimple(txt);
	 } else if (status ==2)  {
		les = sel;
		var itemID = reward[les][2]
		var itemID1 = reward[les-1][2];
		var all = reward[les][3];
		var atk = reward[les][4];
		var boss = reward[les][6];
		var Enh= reward[les][5];
		var cost = reward[les][1];
		if (!cm.haveItem(itemID1 , 1)) {
            cm.sendOk("请将 #i"+itemID1+"# #z"+itemID1+"# 放在背包内!");
            cm.dispose();
            return;
        }
		

		if (cm.getPlayerPoints() >= reward[les][1]) {
			   cm.gainItem(itemID1,-1);
                var ii = cm.getItemInfo();
                var toDrop = cm.getNewEquip(itemID) ; // 生成一个Equip类
                toDrop.setStr(all); //装备力量
                toDrop.setDex(all); //装备敏捷
                toDrop.setInt(all); //装备智力
                toDrop.setLuk(all); //装备运气
                toDrop.setMatk(atk); //物理攻击
                toDrop.setWatk(atk); //魔法攻击
				toDrop.setEnhance(Enh);//
				toDrop.setBossDamage(boss);
                cm.addFromDrop(toDrop);
                cm.setPQLog("符号" + les,1);
                cm.gainPlayerPoints(-cost);
                cm.worldSpouseMessage(0x1F,  "『符号升级』" + " : " + "恭喜" + cm.getChar().getName() + " 将口袋升级为第"+reward[les][0]+"阶了!");
                cm.startMapEffect("恭喜" + cm.getChar().getName() + " 将符号升级为第"+reward[les][0]+"阶了!",5120026);
				cm.sendOk("恭喜你升级成功!");
				cm.dispose();
            } else {
                cm.sendOk("对不起,你的活跃度不足 "+reward[les][1]+" !");
				status=-1;
            }
            
    }
}
function FormatString(c, length, content) {
    var str = "";
    var cs = "";
    if (content.length > length) {
        str = content;
    } else {
        for (var j = 0; j < length - content.getBytes("GB2312").length; j++) {
            cs = cs + c;
        }
    }
    str = content + cs;
    return str;
}


