/*
*/


var ax1 ="#fMap/MapHelper.img/minimap/match#";
var ax2 ="#fEffect/CharacterEff/1042176/2/0#";
var hd ="#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#"; 
var zb ="#fMap/MapHelper.img/weather/birthday/2#"; 
var yb ="#fMap/MapHelper.img/weather/birthday/5#"; 
var wi8 = "#fUI/StarCityUI.img/Board_GameRank/user/myrank#";  //黄色条
var ok2 = "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#";
var ItemList = Array(
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

status = -1;
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
		
		    var item1 =cm.getInventory(1).getItem(1).getItemId();
			var yh = cm.getInventory(1).getItem(1);
			var dj = yh.getEnhance();
			var have =cm.getItemQuantity(item1)-1;
			var num =0;
			if (dj<5) {
			num = 1;
			} else if (dj>=5 && dj <10) {
			num =2;
            } else if (dj>=10 && dj <15) {
			num =3;
			} else if (dj>=15 && dj <20) {
			num =4;
			} else if (dj>=20 && dj <25) {
			num =5;
			}
            var txt = " "+wi8+"\r\n\r\n";
			//txt+="#fn黑体##fs15#你好飞龙在天派门徒 ！\r\n"; 
			//txt+=""+ax1+"#d2"+ax1+"、在我这里,你只需要提交一些我指定的物品#k\r\n";
			txt+="根据法弗纳#r星级#k的不同,强化数值也会不同。#k\r\n#k";
			txt+="#r注意：把要提升的装备放在装备栏的第一个格\r\n#k";
			txt+="当前道具: #i"+item1+"# #z"+item1+"# \r\n";
			txt+="提升至下一阶段需要: #r"+have+" #d/ "+num+"#k个\r\n";
            txt+="点击确定，开始提升。\r\n\r\n#k";
			txt+="\t\t\#L0##b"+ok2+"#l#k\r\n#k";
            cm.sendSimple(txt);
			
    } else if(status == 1) {
		    var item1 =cm.getInventory(1).getItem(1).getItemId();
			var yh = cm.getInventory(1).getItem(1);
			var dj = yh.getEnhance();
			var ie = Packages.server.MapleItemInformationProvider.getInstance();
			var num =0;
			if (dj<5) {
			num = 1;
			} else if (dj>=5 && dj <10) {
			num =2;
            } else if (dj>=10 && dj <15) {
			num =3;
			 } else if (dj>=15 && dj <20) {
			num =4;
			 } else if (dj>=20 && dj <25) {
			num =5;
			}
			var need =num +1;
			var List = cm.getInventory(1).list();
            var ItemList = List.iterator();
            var 位置組 = [];
            while (ItemList.hasNext()) {
                var 銀河 = ItemList.next();
                if (銀河.getItemId() != yh.getItemId()) continue;
                if (銀河.getPosition() == 1) continue;
                if (位置組.length < num) {
                    位置組.push(銀河.getPosition())
                }
            }
	          var all =(dj+1)*5;
	          var atk =(dj+1)*2;
			  var boss = num;
			if(ie.getName(item1).contains("法弗纳")==false)
			{
				cm.sendOk("只能对法弗纳系列的装备进行升级提升！！");
				cm.dispose();
				return;
			}
			
			if(dj==25){
				cm.sendOk("已经是最高等级了,无法继续强化了!");
				cm.dispose();
				return;
			}
	    	if(!cm.haveItem(item1,need)){
				cm.sendOk("你一共需要 "+need+" 个 #v"+item1+"#" );
				cm.dispose();
				return;
			}
			    var ii = cm.getItemInfo();
				weaponItem = cm.getInventory(1).getItem((1));
			    var toDrop = weaponItem.copy();
				toDrop.setStr(toDrop.getStr() + all);
				toDrop.setDex(toDrop.getDex() + all);
				toDrop.setInt(toDrop.getInt() + all);
				toDrop.setLuk(toDrop.getLuk() + all);
				toDrop.setWatk(toDrop.getWatk() + atk);
				toDrop.setMatk(toDrop.getMatk() + atk);
				toDrop.setEnhance(toDrop.getEnhance()+1);//星星
				toDrop.setBossDamage(toDrop.getBossDamage()+boss);
				cm.removeItem(1, 1, 1);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, false);
				for (var i in 位置組) {
                cm.removeSlot(1,位置組[i],1);
                 }
					cm.worldMessageItem("★★ :"+ cm.getChar().getName() +" 神装备觉醒完毕",toDrop);//物品信息
					cm.sendOk("恭喜您，提升成功啦.快看看你背包里的#b#z"+item1+"##k吧");
					cm.dispose();


	}
}
function getMinAndMax(minVal, maxVal) {
	return Math.floor(Math.random()*(maxVal-minVal+1))+minVal;
}

