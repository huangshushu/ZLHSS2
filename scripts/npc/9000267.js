var head = "#fUI/CashShop.img/CSBeauty/hairColor/Enable/2#";
var chance = Math.floor(Math.random() * 2) + 4;
var icon = "#fEffect/CharacterEff.img/111292"+ chance +"/0/0#";
var Accid, Name;

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
        cm.dispose();
	    return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
	if (status == 0) {
		// Npc：9000267 出生地图：922290200
		if (cm.getPQLog("新手驾到", 1) == 0) {
			//UpdatePay();
			text = "\t\t"+ head + "  #r#e猫叔冒险岛邀您一起玩耍咯#n  "+ head +"\r\n\r\n";
			text+= icon+" #d您作为萌新成员，我们为您带来了以下福利：\r\n\r\n";
			text+= "#b\t#v1142950# 萌萌哒的：#z1142950##r（1天权）#k\r\n";
			text+= "#b\t#v3700357# 么么哒的：#z3700357##r（1天权）#k\r\n";
			text+= "#b\t#v1115105# 萌猴名片：#z1115105##r（1天权）#k\r\n";
			text+= "#b\t#v1115018# 萌猴聊天：#z1115018##r（1天权）#k\r\n";
			text+= "#b\t#v3010217# 香橙座椅：#z3010217##r（无限制）#k\r\n";
			text+= "#b\t#v5211060# 升级助手：#z5211060##r（2小时权）#k\r\n";
			text+= "#b\t#v5360015# 爆率担当：#z5360015##r（1天权）#k\r\n";
			text+= "#b\t#v1112918# 基友伴侣：#z1112918##r（3天权）#k\r\n";
			text+= "#b\t#v5000006# 忠诚护航：#z5000006##r（45天权）#k\r\n";
			text+= "#b\t#v2430154# 疑问解惑：#z2430154##r（无限制）#k\r\n";
			text+= "#b\t#v5010083# 雪花特效：#z5010083##r（无限制）#k\r\n";
			text+= "#b\t#v2430191# 七天奖励：#z2430191##r（无限制）#k\r\n\r\n";
			text+= "#b"+icon+" 本岛为仿官方模式：经验 #r20#b 倍，金币 #r3#b 倍！\r\n";
			text+= icon+" 主菜单在拍卖按钮，里头提供各种便捷服务哦！\r\n";
			text+= icon+" 拍卖处的游戏商店分类很多种，详情请看说明！\r\n";
			text+= icon+" 每日福利 独家特色副本 海量点卷 中介币等你来领！\r\n";
		//	text+= icon+" 为帮助您能顺利成长，我们还为您准备了#r七天登录奖励#b！\r\n";
			text+= icon+" 猫叔冒险岛的QQ群：#e#r438413430#n#k #b欢迎你的加入！\r\n";
			text+= icon+" 最后祝您游戏愉快，更多精彩尽在 #r猫叔冒险岛#k#b！\r\n";
			cm.sendOkS(text, 2);
		} else {
			cm.playerMessage(1, "不要冒充萌新");
			cm.dispose();
		}
	} else if (status == 1) {
		cm.setPQLog("新手驾到", 1, 1);
		cm.gainItem(1143027, 1, 1);//2017鸡年勋章
		cm.gainItem(3700241, 1, 1);//  进击完毕的巨人称号	
		//cm.gainItem(2432824, 1);//宋小姐
		cm.gainItem(1115105, 1, 1);//猴子名片戒指
		cm.gainItem(1112918, 1, 3);//回归戒指
		cm.gainItem(1115018, 1, 1);//猴子聊天戒指
		cm.gainItem(3010217, 1);//香橙果冻月光
		cm.gainItem(5211060, 1, 2 * 60 * 60 * 1000);// 三倍经验（2小时）
		cm.gainItem(5360015, 1, 1);//双倍爆率1天权
		cm.gainItem(1142742, 1, 1);//冒险岛奖杯
		cm.gainPetItem(5000006, 1); //雪犬宠物
		cm.gainItem(5010083, 1);//雪花特效
		cm.gainItem(2430191, 1);//可爱的新手礼物（7天奖励箱子）
		cm.gainItem(2432022, 1);//新手帮助书
		cm.gainMeso(1000000);//100W金币
		//cm.gainNX(1,20000);
		//cm.gainNX(2,20000);
		//cm.addHyPay(-50000);
		Operate(cm.getJob());
		cm.warp(50000, 0);
		cm.worldSpouseMessage(0x01,"『新手驾到』：欢迎玩家 "+ cm.getChar().getName() +" 降临猫叔冒险岛，未来他(她)将与我们共同度过美好时光！");
		cm.worldSpouseMessage(0x07,"『新手驾到』：欢迎玩家 "+ cm.getChar().getName() +" 降临猫叔冒险岛，未来他(她)将与我们共同度过美好时光！");
		//cm.worldSpouseMessage(0x15,"『新手驾到』：欢迎玩家 "+ cm.getChar().getName() +" 降临猫叔冒险岛，未来他(她)将与我们共同度过美好时光！");
		cm.dispose();
	}
  }
}

function Operate(job) {
    switch (job) {
        case 6001://爆莉萌天使
            cm.gainExp(100000)
            cm.gainExp(100000)
            cm.gainExp(100000)
            cm.gainExp(100000)
            cm.gainExp(100000)
            cm.gainExp(100000)
            cm.gainExp(100000)
            cm.gainExp(100000)
            cm.gainExp(100000)//升到10级
            cm.gainItem(1222000, -1);//删除原始道具
            cm.changeJob(6500);
			equip(1352601)//佩戴灵魂手镯
            break;
    }
}

function equip(itemId) {
    /*if (!cm.haveItem(itemId, 1, true, true)) {
        cm.gainItem(itemId, 1);
    }*/
    //查找玩家背包有没有这个物品,没有就给玩家
	cm.removeSlot(- 1, - 10, 1);//删除原始道具
    cm.gainItemAndEquip(itemId, -10);
}

