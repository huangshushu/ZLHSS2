/*
 星梦冒险岛-随机属性金花戒指
 */
var luckmax = 10;//幸运点数上限
var luckcost = 100;//每增加1点幸运点数需要的幸运币
var luckpoint = 0; //幸运点数
var superlucky = 10;//消耗幸运币时额外增加的属性
var superluckycost = 200;//开启超级制作需要花费的幸运币数量
var luckgive = 5;//每次制作赠送的幸运币数量
var costitem = 4310014;//强化消耗的币
var luckitem = 4310027;//幸运币
var str = 0;
var dex = 0;
var luk = 0;
var int1 = 0;	
var ad = 0;
var md = 0;
var random = 0;
var randomtime = 1;
var superlucky1 = 0;

 function start() {
    status = 0;
    action(1, 0, 0);
}



function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2) {
            cm.sendOk(" 等你想制作戒指了，记得找我哦！");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
    } else if (status == 1) {
		for(var i = 0; i < luckmax + 1;i++){
			if(cm.haveItem(luckitem,luckcost * i)){
				luckpoint = i
			}
		}
		if(cm.haveItem(3700101,1)){
			luckpoint++
		}
		randomtime = luckpoint + 1;
        var selStr = "你要制作金花戒指吗？\r\n你的幸运值是#b#e【"+luckpoint+"】#n#k，\r\n每条属性都会随机【#b#e"+randomtime+"#n#k】次，然后取最大值喔#r#e";
			if(cm.haveItem(3700101,1)){
				selStr += "\r\n特权月卡已生效，幸运值+1";
			}
        
			selStr += "\r\n#L0##b#e戒指制作说明#n#k#l";
			selStr += "\r\n#L1##b#e制作金花戒指#n#k#l";
			selStr += "\r\n#L2##b#e强运制作#r#e【慎点】#n#k#l";
			selStr += "\r\n#L3##b#e去您妈的随机，劳资有钱，劳资直接满属性#n#k#l";
        cm.sendSimple(selStr);
    } else if (status == 2) {
        if(selection == 0){
			cm.sendOk("金花戒指随机1-100六维，且每条属性单独随机。\r\n制作金花戒指需要#b#e100#n#k个#v"+costitem+"#\r\n#v"+costitem+"#可以在#b#e玩具塔组队任务#n#k获得。\r\n每次制作金花戒指可以获得#b#e"+luckgive+"#n#k枚#v"+luckitem+"#(非酋双倍)。\r\n每#b#e"+luckcost+"#n#k枚#v"+luckitem+"#可以增加#b#e1#n#k点幸运值\r\n幸运值上限为【#b#e"+luckmax+"#n#k】，您当前是【#b#e"+luckpoint+"#n#k】\r\n【强运】额外消耗#b#e"+superluckycost+"#n#k#v"+luckitem+"#，属性追加#b#e"+superlucky+"#n#k(不能超上限)");
			cm.dispose();
		};
		if(selection == 1){
			if(cm.haveItem(costitem,100)){
				var string = "制作成功，随机次数："+randomtime+"\r\n随机力量："
				for(var i = 0;i < randomtime; i++){
					random = Math.floor(Math.random() * +99) + 1
					string += ""+random+"；";
					if(str < random){
						str = random;
					};
				};
				string += "\r\n随机敏捷："
				for(var i = 0;i < randomtime; i++){
					random = Math.floor(Math.random() * +99) + 1
					string += ""+random+"；";
					if(dex < random){
						dex = random;
					};
				};
				string += "\r\n随机运气："
				for(var i = 0;i < randomtime; i++){
					random = Math.floor(Math.random() * +99) + 1
					string += ""+random+"；";
					if(luk < random){
						luk = random;
					};
				};
				string += "\r\n随机智力："
				for(var i = 0;i < randomtime; i++){
					random = Math.floor(Math.random() * +99) + 1
					string += ""+random+"；";
					if(int1 < random){
						int1 = random;
					};
				};
				string += "\r\n随机物攻："
				for(var i = 0;i < randomtime; i++){
					random = Math.floor(Math.random() * +99) + 1
					string += ""+random+"；";
					if(ad < random){
						ad = random;
					};
				};
				string += "\r\n随机魔攻："
				for(var i = 0;i < randomtime; i++){
					random = Math.floor(Math.random() * +99) + 1
					string += ""+random+"；";
					if(md < random){
						md = random;
					};
				};
				var sum = str + dex + luk + int1 +ad + md;
				string += "\r\n最终属性：力量"+str+"，敏捷"+dex+"，运气"+luk+"，智力"+int1+"，物攻"+ad+"，魔攻"+md+"，总属性"+sum+""
				cm.gainItem(costitem, -100);
				cm.gainItem(luckitem, luckgive);
				cm.给属性装备(1113226,0,0,str,dex,luk,int1,0,0,ad,md,0,0,0,0,0,0,0);
				if(sum < 250){
					cm.gainItem(luckitem, luckgive)
					cm.全服黄色喇叭("[金花戒指] : 我TM差点笑出声，非酋["+cm.getPlayer().getName()+"]制作出了力量"+str+"，敏捷"+dex+"，运气"+luk+"，智力"+int1+"，物攻"+ad+"，魔攻"+md+"的金花戒指，总属性"+sum+"，还不到250")
					cm.getPlayer().setOneTimeLog("金花你马成就");
					cm.getPlayer().dropMessage(5,"金花你马成就进度："+cm.getPlayer().getOneTimeLog("金花你马成就")+"");
				}
				if(sum > 450 && sum != 600){
					cm.全服黄色喇叭("[金花戒指] : ["+cm.getPlayer().getName()+"]制作出了力量"+str+"，敏捷"+dex+"，运气"+luk+"，智力"+int1+"，物攻"+ad+"，魔攻"+md+"的金花戒指，总属性高达"+sum+"/600")
				}
				if(sum == 600){
					cm.全服黄色喇叭("[金花戒指] : 窝！巢！欧皇附体！！！["+cm.getPlayer().getName()+"]制作出了属性全满的金花戒指！简直炸裂！！！真欧皇不需要【强运】")
					cm.getPlayer().setOneTimeLog("完美主义成就");
					cm.getPlayer().dropMessage(5,"完美主义成就进度："+cm.getPlayer().getOneTimeLog("完美主义成就")+"");
				}
				cm.sendOk(string);
				cm.dispose();
				return;
			}
			cm.sendOk("#v"+costitem+"#不足，无法制作");
            cm.dispose();
            return;
		};
		if(selection == 2){
			if(cm.haveItem(costitem,100)){
				if(cm.haveItem(luckitem,superluckycost)){
				superlucky1 = superlucky
				cm.gainItem(luckitem, 0 - superluckycost);
				}else{
					cm.sendOk("需要"+superluckycost+"个#v"+luckitem+"#，#v"+luckitem+"#不足，无法开启【强运】");
					cm.dispose();
					return;
				}
				var string = "制作成功，随机次数："+randomtime+"\r\n随机力量："
				for(var i = 0;i < randomtime; i++){
					random = Math.floor(Math.random() * +99) + 1
					string += ""+random+"；";
					if(str < random){
						str = random;
					};
				};
				str = str +superlucky1;
				if(str > 100){
					str = 100;
				}
				string += "\r\n随机敏捷："
				for(var i = 0;i < randomtime; i++){
					random = Math.floor(Math.random() * +99) + 1
					string += ""+random+"；";
					if(dex < random){
						dex = random;
					};
				};
				dex = dex +superlucky1;
				if(dex > 100){
					dex = 100;
				}
				string += "\r\n随机运气："
				for(var i = 0;i < randomtime; i++){
					random = Math.floor(Math.random() * +99) + 1
					string += ""+random+"；";
					if(luk < random){
						luk = random;
					};
				};
				luk = luk +superlucky1;
				if(luk > 100){
					luk = 100;
				}
				string += "\r\n随机智力："
				for(var i = 0;i < randomtime; i++){
					random = Math.floor(Math.random() * +99) + 1
					string += ""+random+"；";
					if(int1 < random){
						int1 = random;
					};
				};
				int1 = int1 +superlucky1;
				if(int1 > 100){
					int1 = 100;
				}
				string += "\r\n随机物攻："
				for(var i = 0;i < randomtime; i++){
					random = Math.floor(Math.random() * +99) + 1
					string += ""+random+"；";
					if(ad < random){
						ad = random;
					};
				};
				ad = ad +superlucky1;
				if(ad > 100){
					ad = 100;
				}
				string += "\r\n随机魔攻："
				for(var i = 0;i < randomtime; i++){
					random = Math.floor(Math.random() * +99) + 1
					string += ""+random+"；";
					if(md < random){
						md = random;
					};
				};
				md = md +superlucky1;
				if(md > 100){
					md = 100;
				}
				var sum = str + dex + luk + int1 +ad + md;
				string += "\r\n最终属性"
				if(superlucky1 == superlucky){
					string +="(强运追加"+superlucky1+"属性)"
				}
				string += "：力量"+str+"，敏捷"+dex+"，运气"+luk+"，智力"+int1+"，物攻"+ad+"，魔攻"+md+"，总属性"+sum+""
				cm.gainItem(costitem, -100);
				cm.gainItem(luckitem, luckgive);
				cm.给属性装备(1113226,0,0,str,dex,luk,int1,0,0,ad,md,0,0,0,0,0,0,0);
				if(sum < 250){
					cm.gainItem(luckitem, luckgive)
					cm.全服黄色喇叭("[金花戒指] : 你删号吧，强运都救不了你！非酋["+cm.getPlayer().getName()+"]使用【强运】制作出了力量"+str+"，敏捷"+dex+"，运气"+luk+"，智力"+int1+"，物攻"+ad+"，魔攻"+md+"的金花戒指，总属性"+sum+"，还不到250")
					cm.getPlayer().setOneTimeLog("金花你马成就");
					cm.getPlayer().dropMessage(5,"金花你马成就进度："+cm.getPlayer().getOneTimeLog("金花你马成就")+"");
					cm.getPlayer().setOneTimeLog("瓦坎达forever成就");
					cm.getPlayer().dropMessage(5,"瓦坎达forever成就达成");
				}
				if(sum > 450 && sum != 600){
					cm.全服黄色喇叭("[金花戒指] : ["+cm.getPlayer().getName()+"]使用【强运】制作出了力量"+str+"，敏捷"+dex+"，运气"+luk+"，智力"+int1+"，物攻"+ad+"，魔攻"+md+"的金花戒指，总属性高达"+sum+"/600")
				}
				if(sum == 600){
					cm.全服黄色喇叭("[金花戒指] : 窝！巢！欧皇附体！！！["+cm.getPlayer().getName()+"]使用【强运】制作出了属性全满的金花戒指！简直炸裂！！！")
					cm.getPlayer().setOneTimeLog("完美主义成就");
					cm.getPlayer().dropMessage(5,"完美主义成就进度："+cm.getPlayer().getOneTimeLog("完美主义成就")+"");
				}
				cm.sendOk(string);
				cm.dispose();
				return;
			}
			cm.sendOk("#v"+costitem+"#不足，无法制作");
            cm.dispose();
            return;
		};
		if(selection == 3){
			cm.sendOk("给劳资滚，非酋不配玩游戏，删号吧");
			cm.dispose();
			return;
		}
    } else if (status == 3) {
		cm.sendOk("异常");
        cm.dispose();
    }
}