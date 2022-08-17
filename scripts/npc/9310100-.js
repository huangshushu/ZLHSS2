

var status = -1;



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
        var avail = "你需要建立师门吗\r\n";
    avail += "#L1#建立师门#l\r\n";
	avail += "#L2#带徒入门(PS：师傅一定不能是队长)#l\r\n";
	avail += "#L3#带徒出师(PS：师傅一定不能是队长)#l\r\n";
	avail += "#L4#逐徒出师#l\r\n";
	avail += "#L5#退出师门#l\r\n";
	avail += "#L6#师门系统介绍#l\r\n";
	
        
        cm.sendSimple(avail);
    } else if (status == 1){
		if (selection == 1){
			if (cm.getPlayer().getLevel() < 150){
				cm.sendOk("你的等级不够");
				cm.dispose();
				return;
			}
			if(cm.jianlishimen() < 1){
				cm.jianlishimen2();
				cm.师门出师();
				cm.sendOk("你成功建立师门");
				cm.dispose();
			} else {
				cm.sendOk("你已经建立过师门了");
				cm.dispose();
			}
        } else if (selection == 2){

			
			if (cm.getParty() == null) {
                		cm.sendNext("组队后在来找我");
                		cm.dispose();
                		return;
            } 
var next = true;
var gender = cm.getPlayer().getGender();
var mapId = cm.getPlayer().getMapId();
//var next = true;
var party = cm.getPlayer().getParty().getMembers();
var it = party.iterator();
var cPlayer = it.next();
var victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
var TDid = victim.getId();
			if (cm.getPlayer().getLevel() < 150){
				cm.sendOk("师傅等级不够150级");
				cm.dispose();
				return;
			} 
			if (victim.getLevel() >= 80){
				cm.sendOk("徒弟等级已经大于80级了");
				cm.dispose();
				return;
			}
			if (cm.isLeader()) {
                		cm.sendNext("请让师傅找我对话(PS：师傅一定要是队员)");
                		cm.dispose();
                		return;
			} else if (!(victim.jianlishimen() < 1)){
				cm.sendOk("你徒弟已经有师门了");
				cm.dispose();
			} else if (cm.jianlishimen() < 1){
				cm.sendOk("你还没建立师门呢");
				cm.dispose();
				return;
           	} else if (cm.带徒出师(TDid) != 0 ){
				cm.sendOk("你这个徒弟已经收过了");
				cm.dispose();
				return;
			} else if (cm.get出师(TDid) > 0){
				cm.sendOk("你收的这个徒弟已经出师了");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getParty().getMembers().size() > 2){
				cm.sendOk("每次只能带一个徒弟入门");
				cm.dispose();
				return;
			} else if (cm.shoutu == 0){
				cm.sendOk("你的师门已经有3个徒弟了，等徒弟出师再来吧");
				cm.dispose();
				return;
			} else {
				var a1_1 = cm.收徒检测_0(TDid);
				var a2_2 = cm.收徒检测_1(TDid);
				var a3_3 = cm.收徒检测_2(TDid);
					if (a1_1 - TDid == 0){
						cm.sendOk("你的要收徒弟已经有师傅了");
						cm.dispose();
						
					} else if (a2_2 - TDid == 0){
						cm.sendOk("你的要收徒弟已经有师傅了");
						cm.dispose();
						
					} else if (a3_3 - TDid == 0){
						cm.sendOk("你的要收徒弟已经有师傅了");
						cm.dispose();
						
					} else {
						cm.is带徒入门(TDid);
						cm.sendOk("你成功收了"+victim.getName()+"为徒弟");
						//cm.worldMessage(11, "『师门系统』" + " : " + "[" + cm.getChar().getName() + "]和成功收了["+victim.getName()+"]为徒弟。");
						cm.dispose();
						return;
					}
				
			}
		} else if (selection == 3){

			if (cm.getParty() == null) {
                		cm.sendNext("组队后在来找我");
                		cm.dispose();
                		return;
            }
			var next = true;
			var gender = cm.getPlayer().getGender();
			var mapId = cm.getPlayer().getMapId();
//var next = true;
			var party = cm.getPlayer().getParty().getMembers();
			var it = party.iterator();
			var cPlayer = it.next();
			var victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			var TDid = victim.getId();
			if (cm.isLeader()) {
                		cm.sendNext("请让师傅找我对话(PS：师傅一定要是队员)");
                		cm.dispose();
                		return;
			} else if (victim.getLevel() < 160){
				cm.sendOk("你的徒弟等级不够");
				cm.dispose();
			} else if (cm.jianlishimen < 1){
				cm.sendOk("你还没建立师门呢");
				cm.dispose();
				return;
           	} else if (cm.带徒出师(TDid) == 0){
				cm.sendOk("你确定这是你徒弟吗？？？");
				cm.dispose();
				return;
			} else {
				cm.is带徒出师(TDid);
				cm.set出师(TDid);
				cm.getPlayer().modifyCSPoints(2,5000);
				cm.gainMeso(10000000);
				cm.gainItem(2210003,20);
				victim.modifyCSPoints(2,20000);
				cm.sendOk("你带徒"+victim.getName()+"出师成功!\r\n徒弟获得：2W抵用卷\r\n师傅获得：20瓶#z2210003# + 5000抵用 + 1000W金币");
				cm.dispose();
			}
		} else if (selection == 4){
			cm.dispose();
			cm.openNpc(9900004,153);
			
		} else if (selection == 5){
			var a = cm.hqid();
			var a1_1 = cm.退出师门();
			var a2_2 = cm.退出师门1();
			var a3_3 = cm.退出师门2();
			var SFid;
			if (a1_1 - a == 0){
				SFid = cm.退出师门_0();
				cm.is退出师门(SFid,1);
				cm.sendOk("退出师门成功");
				cm.dispose();
			} else if (a2_2 - a == 0){
				SFid = cm.退出师门_1();
				cm.is退出师门(SFid,2);
				cm.sendOk("退出师门成功");
				cm.dispose();
			} else if (a3_3 - a == 0){
				SFid = cm.退出师门_2();
				cm.is退出师门(SFid,3);
				cm.sendOk("退出师门成功");
				cm.dispose();
			} else {
				cm.sendOk("退出师门失败，你没有师傅");
				cm.dispose();
			}
		} else if (selection == 6ge1ku){
			cm.sendOk("师门系统介绍：\r\n徒弟等级：必须小于80级\r\n师父等于：必须大于150级\r\n\r\n\r\n160级出师\r\n\r\n徒弟出师获得 2W抵用卷\r\n\r\n师父出师获得 20瓶#z2210003# + 5000抵用 + 1000W金币\r\n\r\n\r\n");
			cm.dispose();
		}
    }
	
}