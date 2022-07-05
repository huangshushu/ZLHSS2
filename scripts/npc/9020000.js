/*
Lakelis - Victoria Road: Kerning City (103000000)
 **/

var status = -1;
var minMember = 3;
var maxMember = 7;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.dispose();
			return;
		}
		status--;
	}
	cm.removeAll(4001007);
	cm.removeAll(4001008);
	if (status == 0) {
		cm.sendOk("#e<组队副本: 第一次同行>#n \r\n汇集大家的力量和智慧,把强大的#b绿水灵王#k打败吧!“获取通行证”“猜猜正确答案的位置”等题目的正确回答数达到一定量的话,绿水灵王就会登场!\r\n您当前累计通关：#r"+cm.getBossRankCount('废弃副本总次数')+"#k次\r\n您当前带新通关：#r"+cm.getBossRankCount('越级废弃副本总次数')+
            "#k次\r\n您当前累计通关点数：#r"+cm.getBossRankPoints('废弃副本总点数')+"#k点\r\n" +
			"#b\r\n\r\n#L0#挑战副本\r\n"
            // + "#b#L1#升级绿黏液鞋子"
        );
	} else if (status == 1) {
		sel_0 = selection;
		if (sel_0 == 1) {//升级绿黏液鞋子
            cm.dispose();
            cm.openNpc(9020000,1);
		} else {
            if (cm.getParty() == null) { // No Party
                cm.sendOk("请创建队伍！");
            } else if (!cm.isLeader()) { // Not Party Leader
                cm.sendOk("请叫你的队长来找我!");
            } else {
                // Check if all party members are within Levels 21-30
                var party = cm.getParty().getMembers();
                var mapId = cm.getMapId();
                var next = true;
                var levelValid = 0;
                var inMap = 0;

                var it = party.iterator();
                while (it.hasNext()) {
                    var cPlayer = it.next();
                    if ((cPlayer.getLevel() >= 21 && cPlayer.getLevel() <= 200) || cPlayer.getJobId() == 900) {
                        levelValid += 1;
                    } else {
                        next = false;
                    }
                    if (cPlayer.getMapid() == mapId) {
                        inMap += (cPlayer.getJobId() == 900 ? 4 : 1);
                    }
                }
                if (party.size() >= maxMember || inMap < minMember) {
                    next = false;
                }
                if (next) {
                    var em = cm.getEventManager("KerningPQ");
                    if (em == null) {
                        cm.sendOk("找不到脚本，请联系GM！");
                        cm.dispose();
                        return;
                    } else {
                        var prop = em.getProperty("state");
                        if (prop == null || prop.equals("0")) {
                            cm.savePartyLocation("DUTY_JOIN");
                            em.startInstance(cm.getParty(), cm.getMap());
                        } else {
                            cm.sendOk("已经有队伍在里面挑战了。");
                            cm.dispose();
                            return;
                        }
                        cm.removeAll(4001008);
                        cm.removeAll(4001007);
                    }
                } else {
                    cm.sendOk("你的队伍最少需要3个人,等级必须在21-200之间,请确认你的队友有没有都在这里,或是里面已经有人了!");
                }
            }
            cm.dispose();
		}

	}
}
