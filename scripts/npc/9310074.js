var status = 0;
var itemid = 4001126;
var itemid2 = 4000313;
var sel_0 = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}
function getme(cla) {
    var methods = cla.class.getDeclaredMethods();
    var text = "";
    for (var i in methods) {
		if (methods[i].getName().startsWith("mo")) {
			text += "\r\n\t"+methods[i].getName() + " ";
        var types = methods[i].getParameterTypes();
        for (var j in types) {
            text += types[j] + ",";
        }
		}
        
    }
    return text;
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
		cm.sendSimple("你想要兑换什么呢？\r\n#L1##b使用#v" + itemid + "#兑换抵用券#r(1:1)#k#l\r\n"+
		"#L2##b使用#v" + itemid2 + "#兑换点券#r(1:5)#l"
		+"\r\n#L3#使用#v"  + itemid + "#兑换枫叶武器#l"
		+"\r\n#L4#使用#v"  + itemid2 + "#兑换#v2340000##r(100:1)#l"
		+ "\r\n" + (cm.getPlayer().isGM()? "#L33#随机传送#l":"")
		);
	} else if (status == 1) {
		sel_0 = selection;
        if (selection == 1) {
			cm.sendGetNumber("如果你有#v"+itemid+"#的话，我可以帮你兑换成抵用券哦，你想兑换多少呢？\r\n当前拥有#v"+itemid+"#数量：" + cm.getPlayer().getItemQuantity(itemid, false), 1, 1, 5000);
		} else if (selection == 2) {
			cm.sendGetNumber("如果你有#v"+itemid2+"#的话，我可以帮你兑换成点券哦，你想兑换多少呢？\r\n当前拥有#v"+itemid2+"#数量：" + cm.getPlayer().getItemQuantity(itemid2, false), 1, 1, 2000);
		} else if (selection == 3) {
			cm.dispose();
			cm.openNpc(9000018, "枫叶兑换");
		} else if (selection == 4) {
			cm.sendGetNumber("如果你有#v"+itemid2+"#的话，我可以帮你兑换成#v2340000#哦，你想兑换多少呢？\r\n当前拥有#v"+itemid2+"#数量：" + cm.getPlayer().getItemQuantity(itemid2, false), 1, 1, 100);
		} else if (selection == 5) {
			if (cm.getPlayer().isGM()) {
				var eq = cm.getEquip(1112446);
				eq.setOwner("力量系");
				cm.addFromDrop(eq);
			}
			cm.dispose();
			return;
		} else if (selection == 33) {
			var maps = Packages.handling.channel.ChannelServer.getInstance(1).getMapFactory().getAllMaps()
			var ran = Math.floor(Math.random() * maps.size());
			var it = maps.iterator();
			var i = 0;
			var txt = "";
			while (it.hasNext()) {
				var map = it.next();
				if (i == ran) {
					cm.warp(map.getId());
					//txt += map.getId();
					break;
				}
				++i;
			}
			//cm.sendOk(txt);
			cm.dispose();
		}
    } else if (status == 2) {
		if (sel_0 == 1) {
			if (!cm.haveItem(itemid, selection)) {
				cm.sendOk("你的#v"+itemid+"#数量不足#r"+selection+"#k哦！");
				cm.dispose();
				return;
			}
			cm.gainItem(itemid, -selection);
			cm.getPlayer().modifyCSPoints(2, selection, true);
			cm.sendOk("恭喜你兑换成功，获得了#r" + selection + "#k抵用券");
		} else if (sel_0 == 2) {
			if (!cm.haveItem(itemid2, selection)) {
				cm.sendOk("你的#v"+itemid2+"#数量不足#r"+selection+"#k哦！");
				cm.dispose();
				return;
			}
			cm.gainItem(itemid2, -selection);
			cm.gainNX(selection * 5);
			cm.sendOk("恭喜你兑换成功，获得了#r" + (selection*5) + "#k点券");
			
		} else if (sel_0 == 4) {
			if (!cm.haveItem(itemid2, selection*100)) {
				cm.sendOk("你的#v"+itemid2+"#数量不足#r"+(selection*100)+"#k哦！");
				cm.dispose();
				return;
			}
			cm.gainItem(2340000, selection);
			cm.gainItem(itemid2, -(selection*100));
			cm.sendOk("恭喜你兑换成功，获得了#r" + selection + "个#k #v2340000#");
		}
		cm.dispose();
	}
}