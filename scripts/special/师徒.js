importPackage(Packages.client);
importPackage(Packages.client.inventory);

var status = -1;
var 木马 = "#fUI/PredictHarmony.img/card/7#"; 
var 皇冠 = "#fUI/GuildMark/Mark/Etc/00009023/1#";
var 黄色小熊 = "#fUI/GuildMark/Mark/Animal/00002013/3#";
var 绿色点 = "#fUI/GuildMark/BackGround/00001024/8#";
var 紫色硬币 = "#fUI/Basic/PQuestRank/A#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/4#";
var 男 = "#fUI/CashShop.img/CSIcon/0#"; 
var 女 = "#fUI/CashShop.img/CSIcon/1#"; 



function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    
    if (mode == 1) {
        status++;
    } else if (mode == 0 && status != 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }

    if (status == 0) {
		    var text = "\t\t\t#e欢迎来到#b乐乐冒险岛#r师徒系统#k!#n\r\n";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "\t\t\t\t你需要建立师徒关系吗？\r\n"
			text += "\t\t\t\t #L6##b师徒系统说明#l#k\r\n\r\n"
			if(cm.getMentorLog("师傅") < 1){
			text += "\t\t\t\t #r#L1#我要建立师门#l#k\r\n\r\n"
			}
			if(cm.getMentorLog("师傅") >= 1){
			text += "\t\t#L2#带徒入门(PS：师傅一定不能是队长)#l#k	\r\n"
            text += "\t\t#L3#带徒出师(PS：师傅一定不能是队长)#l#k\r\n\r\n"
			text += "\t\t\t\t#L8#★查看我的弟子们#l\r\n\r\n"
			}
			//text += "#L4##r明星师傅排行#k#l      #L5#退出师门#l      #L7##r弟子确认师门#l\r\n"
			text += "#L5#退出师门#l      #L7##r弟子确认师门#l\r\n"
            cm.sendSimple(text);
    } else if (status == 1){
		if (selection == 1){
			var id = cm.getPlayer().getId();
			if (cm.getPlayer().getLevel() < 134){
				cm.sendOk("你的等级不够135级");
				cm.dispose();
				return;
			}else if(cm.getMentorLog("师傅") < 1){
				cm.setMentorLog("师傅");
				//cm.师门出师();
				cm.sendOk("你成功建立了师门，赶紧去收徒吧！");
				cm.worldMessage(6,"【师徒系统】[" + cm.getChar().getName() + "]成功建立了师门，要找师傅的赶紧了！");
				cm.dispose();
			} else {
				cm.sendOk("你已经建立过师门了！去收徒吧！");
				cm.dispose();
			}
			
        } else if (selection == 2){
			if (cm.getParty() == null) {
                cm.sendNext("请组队后在来找我！");
                cm.dispose();
                return;
            } else if (cm.allMembersHere() == false){
				cm.sendOk("徒弟或者师傅不在这个地图啊？");
				cm.dispose();
				return;
			} else if (cm.getParty().getMembers().size() != 2){
				cm.sendOk("组队人员不能超过两个人。不是你们两个人师徒吗？");
				cm.dispose();
				return;
			} else if (cm.getMentorLog("师傅") < 1) {
                cm.sendNext("请让师傅找我对话(PS：师傅一定要是队员)");
                cm.dispose();
                return;
			} else if (cm.isLeader()) {
                cm.sendNext("请让师傅找我对话(PS：师傅一定要是队员)");
                cm.dispose();
                return;
			}
var next = true;
var mapId = cm.getPlayer().getMapId();
var party = cm.getPlayer().getParty().getMembers();
var it = party.iterator();
var cPlayer = it.next();
var victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
var TDid = victim.getId();
var a1_1 = cm.getMentorLog(TDid);//自己的收徒记录ID
var shoutu = victim.getMentorLog(TDid);
var chushi = victim.getMentorLog("出师");
var id = cm.getPlayer().getId();
var tcsm = victim.getMentorLog("退出师门");
var jrsm = victim.getMentorLog(TDid);
			if (victim.getLevel() > 120){
				cm.sendOk("徒弟等级是否已经大于120级了？！");
				cm.dispose();
				return;
			} else if (a1_1 - jrsm - tcsm > 0){
				cm.sendOk("你已经收过这个徒弟了");
				cm.dispose();
				return;
			} else if (shoutu - tcsm != 0 ){
				cm.sendOk("你徒弟已经有师门了");
				cm.dispose();
			} else if (cm.getMentorLog("师傅") < 1){
				cm.sendOk("你还没建立师门呢");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getParty().getMembers().size() > 2){
				cm.sendOk("每次只能带一个徒弟入门（请2人组队）");
				cm.dispose();
				return;
			} else if (cm.getMentorLog("收徒") - cm.getMentorLog("出师") - tcsm >= 20){
				cm.sendOk("你的师门已经收过20个徒弟了");
				cm.dispose();
				return;
			} else {
					cm.setMentorLog("收徒");
					cm.givePartyBossLog("收徒");
					cm.setMentorLog(TDid);
					cm.sendOk("你成功收了"+victim.getName()+"为徒弟，请提醒徒弟点我确认关系，之后才能生效！");
					//victim.sendOk("你师傅"+victim.getName()+"成功收你为徒!\r\n请点击确认关系，之后才能生效！");
					cm.worldMessage(11, "『师徒系统』" + " : " + "["+ cm.getPlayer().getName() +"]收了["+victim.getName()+"]为徒弟，请徒弟进行确认！");
					cm.dispose();
					return;
					}
			
		} else if (selection == 3){
			if (cm.getParty() == null) {
                		cm.sendNext("组队后在来找我");
                		cm.dispose();
                		return;
            }else if (cm.getMentorLog("师傅") < 1){
				cm.sendOk("你还没建立师门呢");
				cm.dispose();
				return;
			}
			var next = true;
			var gender = cm.getPlayer().getGender();
			var mapId = cm.getPlayer().getMapId();
			var party = cm.getPlayer().getParty().getMembers();
			var it = party.iterator();
			var cPlayer = it.next();
			var victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			var TDid = victim.getId();
			if (cm.isLeader()) {
                cm.sendNext("请让师傅找我对话(PS：师傅一定要是队员)");
                cm.dispose();
                return;
			} else if (victim.getLevel() < 120){
				cm.sendOk("你的徒弟等级不够120级，不能出师！");
				cm.dispose();
			} else if (cm.getMentorLog("师傅") < 1){
				cm.sendOk("你还没建立师门呢");
				cm.dispose();
				return;
           	} else if (cm.getMentorLog(TDid) == 0){
				cm.sendOk("你确定这是你徒弟吗？？？");
				cm.dispose();
				return;
			} else if (cm.getMentorLog(-TDid) == 1){
				cm.sendOk("这个徒弟已经出师了！");
				cm.dispose();
				return;
			} else {
				cm.setMentorLog("出师");
				cm.setMentorLog(-TDid);
			
				cm.getPlayer().modifyCSPoints(2,18888);
				cm.gainItem(2340000,5);//祝福
				cm.gainItem(2049100,3);//混沌
				victim.modifyCSPoints(2,8888);//队友获得
				//cm.setBossRankCount("徒弟出师数量",1);
				cm.sendOk("你带徒"+victim.getName()+"出师成功!\r\n徒弟获得：8888点卷");
				//victim.sendOk("你师傅"+victim.getName()+"成功带你出师!\r\n获得：5000抵用");
				cm.worldMessage(11, "『师徒系统』" + " : " + "["+ cm.getPlayer().getName() +"]成功带徒出师["+victim.getName()+"]获得重磅礼包！");
				cm.dispose();
			}
		} else if (selection == 4){
			//cm.sendOk("暂不支持此功能");
			cm.dispose();
			cm.openNpc(1002006,1);
		} else if (selection == 8){//查询徒弟
			cm.dispose();
			cm.openNpc(2091005,"徒弟名单");
		} else if (selection == 5){
			var id = cm.getPlayer().getId();
			var tcsm = cm.getMentorLog("退出师门");
			var jrsm = cm.getMentorLog(id);
			if (jrsm == 0){;
				cm.sendOk("退出师门失败！\r\n你没并没有加入过师门!（注：师傅不可以取消师门）");
				cm.dispose();
			} else if (jrsm - tcsm == 0){
				cm.sendOk("你已经没有师门可以退出了 ，不必再次退出！");
				cm.dispose();
			} else {
				cm.setMentorLog("退出师门");
				cm.sendOk("退出师门成功!");
				cm.dispose();
			}
		} else if (selection == 6){
			cm.sendOk("师门系统介绍：\r\n徒弟等级：必须小于70级\r\n师父等于：必须大于120级\r\n\r\n徒弟达到120级即可出师\r\n\r\n");
			cm.dispose();
		} else if (selection == 7){
			var id = cm.getPlayer().getId();
			if (cm.getPlayer().getLevel() > 120){
				cm.sendOk("师傅不需要确认！");
				cm.dispose();
				return;
			} else if (cm.getBossLog("收徒") >= 1 && cm.getMentorLog(id) == 0 && cm.getParty().getMembers().size() == 2){
				cm.setMentorLog(id);
				cm.sendOk("师徒关系确认成功！");
				cm.worldMessage(11, "『师徒系统』" + " : " + "["+ cm.getPlayer().getName() +"]师徒关系确认成功。");
				cm.dispose();
			} else {
				cm.sendOk("你已经确认过了。或者\r\n");
				cm.dispose();
			}
		}
    }
}
