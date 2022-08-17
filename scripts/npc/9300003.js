/*
 SnailMS冒险岛(079)游戏服务端
 脚本：结婚殿堂
 */

importClass(Packages.client.inventory.IItem);
 
var jt = "#fUI/Basic/BtHide3/mouseOver/0#";
var 箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var victim;
var ring = 1112001;
function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    if (status <= 0 && mode <= 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    var MC = cm.getServerName();
    var 性别 = cm.getPlayer().getGender();
    var 结婚开关 = cm.GetPiot("结婚开关", "1");
    var 结婚价格 = cm.GetPiot("结婚价格", "1");
	var 离婚价格 = cm.GetPiot("离婚价格", "1");
	var 点券 =cm.getPlayer().getCSPoints(1);
    if (cm.GetPiot("自由传送开关", "2") == 100) {
        cm.showInstruction("", 200, 3);
        cm.dispose();
    } else if (status <= 0) {
        var
        selStr = "我是月老，你需要伴侣吗？我可是专门帮人介绍对象的，看你人不错，要不要介绍一个给你呢？\r\n#b";
		selStr += "#b结婚需要 #r" + 结婚价格 + " #b点券，离婚需要 #r" +  离婚价格 + " #b点券, 单人强行出轨需要 #r" + 离婚价格*2 + " #b点券\r\n";
		
        selStr += "#L3##b我要结婚[#r男女#k]#b#l\r\n";
        selStr += "#L4##b我要离婚[#r双方在场情况#k#b]#l\r\n";
        selStr += "\r\n_________________________________________________\r\n";

        selStr += "#L1##b我要搞基[#r男男#k#b]#l\r\n";
        selStr += "#L2##b我要百合[#r女女#k#b]#l\r\n";


        selStr += "#L5##b我要离婚[#r单人强行出轨#k#b]#l\r\n";
      //  selStr += "#L6##b找[#r男性#k#b]#b小三#l\r\n";
       // selStr += "#L7##b找[#r女性#k#b]#b小三#l\r\n";
       // selStr += "#L8##b找儿子[#r结婚后可领#b]#l\r\n";
        //selStr += "#L9##b找女儿[#r结婚后可领#b]#l\r\n";
		
        if (cm.getPlayer().getGMLevel() == 6) {
            selStr += "\r\n#L100##d" + 箭头 + " 结婚手术费用#r[GM]#k#l";
			selStr += "\r\n#L101##d" + 箭头 + " 离婚手术费用#r[GM]#k#l";
            if (cm.GetPiot("结婚开关", "1") >= 1) {
                selStr += "\r\n#L500#" + 箭头 + " #b结婚#g[开启中]#r[GM]#k#l";
            }
            if (cm.GetPiot("结婚开关", "1") <= 0) {
                selStr += "\r\n#L501#" + 箭头 + " #b结婚#r[关闭中]#r[GM]#k#l";
            }
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
			case 100:
                cm.dispose();
                cm.openNpc(9300003, 1);
                break;
			case 101:
                cm.dispose();
                cm.openNpc(9300003, 2);
                break;
            case 9:
                cm.sendNext("未开放。");
                cm.dispose();
                break;
            case 8:
                cm.sendNext("未开放。");
                cm.dispose();
                break;
            case 7:
                cm.sendNext("未开放。");
                cm.dispose();
                break;
            case 6:
                cm.sendNext("未开放。");
                cm.dispose();
                break;
            case 5:
                if(cm.getPlayer().getCSPoints(1) >= 离婚价格*2){
					if(cm.单人强行出轨()){
						cm.gainNX(-离婚价格*2);
						cm.sendOk("#d你已单方面解除婚姻关系，扣除点券 #r" + 离婚价格*2);
					}else{
						cm.sendOk("#d因不明原因，出轨失败...");
					}
					
				}else{
					cm.sendOk("#d你没有足够的点券...");
				}
                cm.dispose();
                break;
                //离婚
            case 4:
				if(点券<离婚价格){
					cm.sendNext("  #b离婚需要 #r"+离婚价格+"#k#b 点券。" );
                    cm.dispose();
                    return;
				}
				if (cm.GetPiot("变性开关", "1") > 0) {
					cm.sendNext("管理关闭了月老功能。");
                    cm.dispose();
                    return;
				}
                if (cm.getPlayer().getMarriageId() == 0) {
                    cm.sendNext("你还没结婚呢？单身狗");
                    cm.dispose();
                    return;
                }
                if (cm.getParty() == null) {
                    cm.sendNext("请和你的对象组队哦！");
                    cm.dispose();
                    return;
                }
                if (!cm.isLeader()) {
                    cm.sendNext("让队长与我对话。");
                    cm.dispose();
                    return;
                }
                var gender = cm.getPlayer().getGender();
                var mapId = cm.getPlayer().getMapId();
                var next = true;
                var party = cm.getPlayer().getParty().getMembers();
                var it = party.iterator();
                while (it.hasNext()) {
                    var cPlayer = it.next();
                    victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                    if (victim.getId() != cm.getPlayer().getId() && (party.size() > 2 || victim == null || victim.getMarriageId() > 0 || victim.getMapId() != mapId || victim.getGender() == gender)) {
                        next = true;
                        break;
                    }
                }
                if (!next) {
                    cm.sendNext("请确认您跟您的的另外一半在这一张地图、不同性別、并且都在线以及队伍中沒有其他人");
                    cm.dispose();
                    return;
                }
                cm.getPlayer().setMarriageId(0);
                victim.setMarriageId(0);
                cm.getPlayer().saveToDB(false, false);
				cm.gainNX(-离婚价格);
                cm.sendNext("离婚成功，恭喜你回复单身生活。");
                cm.dispose();
                break;
                //男女结婚
            case 3:
				if(点券<结婚价格){
					cm.sendNext("  #b结婚需要 #r"+结婚价格+"#k#b 点券。" );
                    cm.dispose();
                    return;
				}
				if (cm.GetPiot("变性开关", "1") > 0) {
					cm.sendNext("管理关闭了月老功能。");
                    cm.dispose();
                    return;
				}
                if (cm.getPlayer().getMarriageId() > 0) {
                    cm.sendNext("你已经结过婚，想离婚吗？");
                    cm.dispose();
                    return;
                }
                if (cm.getParty() == null) {
                    cm.sendNext("请和你的对象组队哦！");
                    cm.dispose();
                    return;
                }
                if (!cm.isLeader()) {
                    cm.sendNext("让队长与我对话。");
                    cm.dispose();
                    return;
                }
                var gender = cm.getPlayer().getGender();
                var mapId = cm.getPlayer().getMapId();
                var next = true;
                var party = cm.getPlayer().getParty().getMembers();
                var it = party.iterator();
                while (it.hasNext()) {
                    var cPlayer = it.next();
                    victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                    if (victim.getId() != cm.getPlayer().getId() && (party.size() > 2 || victim == null || victim.getMarriageId() > 0 || victim.getMapId() != mapId || victim.getGender() == gender)) {
                        next = true;
                        break;
                    }
                }
                if (!next) {
                    cm.sendNext("请确认您跟您的的另外一半在这一张地图、不同性別、并且都在线以及队伍中沒有其他人");
                    cm.dispose();
                    return;
                }
				var marragecheck = cm.MarrageChecking();
                if (marragecheck != 0) {
                    switch(marragecheck){
						case 1:
							cm.sendOk("组队人员不能超过两个人。不是你们两个人结婚吗？");
							cm.dispose();
							break;
						case 2:
							cm.sendOk("请确保您的伴侣和您在同一地图。");
							cm.dispose();
							break;
						case 3:
							cm.sendOk("你的组队中，已经有人结过婚了。\r\n请检查后再试。");
							cm.dispose();
							break;
						case 4:
							cm.sendOk("我不支持同性结婚。所以请回吧。");
							cm.dispose();
							break;
						case 5:
							cm.sendOk("你们没有穿上要求的结婚礼服。要穿的衣服是这样。男士:#b#b#v1050122##k或#b#b#v1051129##k或#b#b#v1050113##k，女士:#b#v1051130##k或#b#v1051177##k或#b#v1051114##k。其中#b#v1050129##k，#b#v1050113##k，#b#v1051177##k，#b#v1051114##k,这些道具在冒险商城可以购买，#b#v1050122##k和#b#v1051130##k是在那边那位红线女那里卖。");
							cm.dispose();
							break;
						case 6:
							cm.sendOk("你们有人没有戴恋人戒指。");
							cm.dispose();
							break;
						case 7:
							cm.sendOk("你们佩戴的恋人戒指不一样啊。");
							cm.dispose();
							break;
						case 8:
							cm.sendOk("你们戴的恋人戒指虽然一样，但是戒指上为什么出现了第三者的名字？可不要乱搞哦！");
							cm.dispose();
							break;
					}
                    cm.dispose();
                    return;
                }
                if (!cm.canHold(1112446) || !victim.canHold(1112446)) {
                    cm.sendNext("您或您的另一半背包空间不足");
                    cm.dispose();
                    return;
                }
                // if (victim.getGender() == 性别) {
                    // cm.sendNext("你们 2 个性别一样啊？百合还是搞基呢？");
                    // cm.dispose();
                    // return;
                // }
                cm.getPlayer().setMarriageId(victim.getId());
                victim.setMarriageId(cm.getPlayer().getId());
                cm.givePartyItems(1112446, 1, false);
				cm.gainNX(-结婚价格);
                cm.getPlayer().saveToDB(false, false);
				var item = cm.getNewEquip(1112446);
				//cm.全服道具公告("[月老]"," 恭喜 [" + cm.getChar().getName() + "] 和 [" + victim.getName() + "] 结为夫妻。", item);
				cm.发送全服画面特效(5121009, "[月老]" + " : 恭喜" + " [" + cm.getChar().getName() + "] 和 [" + victim.getName() + "] 结为夫妻。");
				cm.发送全服Buff(5121009);
				// cm.全服喇叭(9, "[月老]" + " : " + " [" + cm.getChar().getName() + "] 和 [" + victim.getName() + "] 结为夫妻。");
				cm.dispose();
                // Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "[月老]" + " : " + " [" + cm.getChar().getName() + "] 和 [" + victim.getName() + "] 结为夫妻。"));
                //cm.ShowMarrageEffect();
                break;
                //男男
            case 1:
				if(点券<结婚价格){
					cm.sendNext("  #b结婚需要 #r"+结婚价格+"#k#b 点券。" );
                    cm.dispose();
                    return;
				}
				if (cm.GetPiot("变性开关", "1") > 0) {
					cm.sendNext("管理关闭了月老功能。");
                    cm.dispose();
                    return;
				}
                if (cm.getPlayer().getMarriageId() > 0) {
                    cm.sendNext("你已经结过婚，想离婚吗？");
                    cm.dispose();
                    return;
                }
                if (cm.getParty() == null) {
                    cm.sendNext("请和你的对象组队哦！");
                    cm.dispose();
                    return;
                }
                if (!cm.isLeader()) {
                    cm.sendNext("让队长与我对话。");
                    cm.dispose();
                    return;
                }
                var gender = cm.getPlayer().getGender();
                var mapId = cm.getPlayer().getMapId();
                var next = true;
                var party = cm.getPlayer().getParty().getMembers();
                var it = party.iterator();
                while (it.hasNext()) {
                    var cPlayer = it.next();
                    victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                    if (victim.getId() != cm.getPlayer().getId() && (party.size() > 2 || victim == null || victim.getMarriageId() > 0 || victim.getMapId() != mapId || victim.getGender() == gender)) {
                        next = true;
                        break;
                    }
                }
                if (!next) {
                    cm.sendNext("请确认您跟您的的另外一半都是男性、并且都在线以及队伍中沒有其他人");
                    cm.dispose();
                    return;
                }
				var marragecheck = cm.MarrageChecking();
				switch(marragecheck){
					case 1:
						cm.sendOk("组队人员不能超过两个人。不是你们两个人结婚吗？");
						cm.dispose();
						return;
					case 2:
						cm.sendOk("请确保您的伴侣和您在同一地图。");
						cm.dispose();
						return;
					case 3:
						cm.sendOk("你的组队中，已经有人结过婚了。\r\n请检查后再试。");
						cm.dispose();
						return;
					// case 4:
						// cm.sendOk("我不支持同性结婚。所以请回吧。");
						// cm.dispose();
						// break;
					case 5:
						cm.sendOk("你们没有穿上要求的结婚礼服。要穿的衣服是这样。男士:#b#b#v1050122##k或#b#b#v1051129##k或#b#b#v1050113##k，女士:#b#v1051130##k或#b#v1051177##k或#b#v1051114##k。其中#b#v1050129##k，#b#v1050113##k，#b#v1051177##k，#b#v1051114##k,这些道具在冒险商城可以购买，#b#v1050122##k和#b#v1051130##k是在那边那位红线女那里卖。");
						cm.dispose();
						return;
					case 6:
						cm.sendOk("你们有人没有戴恋人戒指。");
						cm.dispose();
						return;
					case 7:
						cm.sendOk("你们佩戴的恋人戒指不一样啊。");
						cm.dispose();
						return;
					case 8:
						cm.sendOk("你们戴的恋人戒指虽然一样，但是戒指上为什么出现了第三者的名字？可不要乱搞哦！");
						cm.dispose();
						return;
					
				}
                    
                
                if (!cm.canHold(1112446) || !victim.canHold(1112446)) {
                    cm.sendNext("您或您的另一半背包空间不足");
                    cm.dispose();
                    return;
                }
                if (victim.getGender() !== 性别) {
                    cm.sendNext("你们两个性别不一样啊，请选择其他结婚方式！");
                    cm.dispose();
                    return;
                }
				if (性别 == 1) {
                    cm.sendNext("你们俩是百合，请选择百合结婚方式！");
                    cm.dispose();
                    return;
                }
				
                cm.getPlayer().setMarriageId(victim.getId());
                victim.setMarriageId(cm.getPlayer().getId());
                cm.givePartyItems(1112446, 1, false);
				cm.gainNX(-结婚价格);
                cm.getPlayer().saveToDB(false, false);
				var item = cm.getNewEquip(1112446);
				//cm.全服道具公告("[月老]"," 恭喜 [" + cm.getChar().getName() + "] 和 [" + victim.getName() + "] 两位好基友结为夫妻。", item);
				cm.发送全服画面特效(5121009, "[月老]" + " : 恭喜" + " [" + cm.getChar().getName() + "] 和 [" + victim.getName() + "] 两位好基友结为夫妻。");
				cm.发送全服Buff(5121009);
				// cm.全服喇叭(9, "[月老]" + " : " + " [" + cm.getChar().getName() + "] 和 [" + victim.getName() + "] 结为夫妻。");
				cm.dispose();
                // Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "[月老]" + " : " + " [" + cm.getChar().getName() + "] 和 [" + victim.getName() + "] 结为夫妻。"));
                //cm.ShowMarrageEffect();
                break;
                //女女
            case 2:
				if(点券<结婚价格){
					cm.sendNext("  #b结婚需要 #r"+结婚价格+"#k#b 点券。" );
                    cm.dispose();
                    return;
				}
				if (cm.GetPiot("变性开关", "1") > 0) {
					cm.sendNext("管理关闭了月老功能。");
                    cm.dispose();
                    return;
				}
                if (cm.getPlayer().getMarriageId() > 0) {
                    cm.sendNext("你已经结过婚，想离婚吗？");
                    cm.dispose();
                    return;
                }
                if (cm.getParty() == null) {
                    cm.sendNext("请和你的对象组队哦！");
                    cm.dispose();
                    return;
                }
                if (!cm.isLeader()) {
                    cm.sendNext("让队长与我对话。");
                    cm.dispose();
                    return;
                }
                var gender = cm.getPlayer().getGender();
                var mapId = cm.getPlayer().getMapId();
                var next = true;
                var party = cm.getPlayer().getParty().getMembers();
                var it = party.iterator();
                while (it.hasNext()) {
                    var cPlayer = it.next();
                    victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                    if (victim.getId() != cm.getPlayer().getId() && (party.size() > 2 || victim == null || victim.getMarriageId() > 0 || victim.getMapId() != mapId || victim.getGender() == gender)) {
                        next = true;
                        break;
                    }
                }
                if (!next) {
                    cm.sendNext("请确认您跟您的的另外一半都是女性、并且都在线以及队伍中沒有其他人");
                    cm.dispose();
                    return;
                }
				var marragecheck = cm.MarrageChecking();
				switch(marragecheck){
					case 1:
						cm.sendOk("组队人员不能超过两个人。不是你们两个人结婚吗？");
						cm.dispose();
						return;
					case 2:
						cm.sendOk("请确保您的伴侣和您在同一地图。");
						cm.dispose();
						return;
					case 3:
						cm.sendOk("你的组队中，已经有人结过婚了。\r\n请检查后再试。");
						cm.dispose();
						return;
					// case 4:
						// cm.sendOk("我不支持同性结婚。所以请回吧。");
						// cm.dispose();
						// break;
					case 5:
						cm.sendOk("你们没有穿上要求的结婚礼服。要穿的衣服是这样。男士:#b#b#v1050122##k或#b#b#v1051129##k或#b#b#v1050113##k，女士:#b#v1051130##k或#b#v1051177##k或#b#v1051114##k。其中#b#v1050129##k，#b#v1050113##k，#b#v1051177##k，#b#v1051114##k,这些道具在冒险商城可以购买，#b#v1050122##k和#b#v1051130##k是在那边那位红线女那里卖。");
						cm.dispose();
						return;
					case 6:
						cm.sendOk("你们有人没有戴恋人戒指。");
						cm.dispose();
						return;
					case 7:
						cm.sendOk("你们佩戴的恋人戒指不一样啊。");
						cm.dispose();
						return;
					case 8:
						cm.sendOk("你们戴的恋人戒指虽然一样，但是戒指上为什么出现了第三者的名字？可不要乱搞哦！");
						cm.dispose();
						return;
					
				}
                    
                
                if (!cm.canHold(1112446) || !victim.canHold(1112446)) {
                    cm.sendNext("您或您的另一半背包空间不足");
                    cm.dispose();
                    return;
                }
                if (victim.getGender() !== 性别) {
                    cm.sendNext("你们两个性别不一样啊，请选择其他结婚方式！");
                    cm.dispose();
                    return;
                }
				if (性别 == 0) {
                    cm.sendNext("你们俩是好基友吧，请选择基友结婚方式！");
                    cm.dispose();
                    return;
                }
				
                cm.getPlayer().setMarriageId(victim.getId());
                victim.setMarriageId(cm.getPlayer().getId());
                cm.givePartyItems(1112446, 1, false);
				cm.gainNX(-结婚价格);
                cm.getPlayer().saveToDB(false, false);
				var item = cm.getNewEquip(1112446);
				//cm.全服道具公告("[月老]"," 恭喜 [" + cm.getChar().getName() + "] 和 [" + victim.getName() + "] 两位百合结为夫妻，冒险岛的单身男们发出了默默的叹息。", item);
				cm.发送全服画面特效(5121009, "[月老]" + " : 恭喜" + " [" + cm.getChar().getName() + "] 和 [" + victim.getName() + "] 两位百合结为夫妻，冒险岛的单身男们发出了默默的叹息。");
				cm.发送全服Buff(5121009);
				// cm.全服喇叭(9, "[月老]" + " : " + " [" + cm.getChar().getName() + "] 和 [" + victim.getName() + "] 结为夫妻。");
				cm.dispose();
                // Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "[月老]" + " : " + " [" + cm.getChar().getName() + "] 和 [" + victim.getName() + "] 结为夫妻。"));
                //cm.ShowMarrageEffect();
                break;
            case 500:
                cm.GainPiot("结婚开关", "1", -结婚开关);
                cm.GainPiot("结婚开关", "1", 1);
                cm.dispose();
                cm.openNpc(9300003, 0);
                break;
            case 501:
                cm.GainPiot("结婚开关", "1", -结婚开关);
                cm.dispose();
                cm.openNpc(9300003, 0);
                break

        }
    }
}
