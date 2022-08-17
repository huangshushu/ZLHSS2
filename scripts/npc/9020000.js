/*
Lakelis - Victoria Road: Kerning City (103000000)
 **/

var status = -1;
var minMember = 1;
var maxMember = 7;
var 次数限制 = 10;
var 奖励预览 = [

	[4031997, 1, 100],
	[2022468, 1, 100]
];


var eventMaps = Array(103000800, 103000801, 103000802, 103000803, 103000804, 103000805);

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
		var 文本信息 = "";
		文本信息 += "        #b里程x1#k\r\n"
        for (var i = 0; i < 奖励预览.length; i++) {
            文本信息 += "   " + cm.显示物品(奖励预览[i][0]) + "x" + 奖励预览[i][1] +" " + 奖励预览[i][2] +" % #k\r\n";
        }
		cm.sendOk("<组队副本: 第一次同行>#n \r\n汇集大家的力量和智慧,把强大的#b绿水灵王#k打败吧!“获取通行证”“猜猜正确答案的位置”等题目的正确回答数达到一定量的话,绿水灵王就会登场!\r\n通关获得:	" + 文本信息 + " \r\n#r今日已完成" + cm.判断每日值("废弃都市") + "次\r\n#b#L0#挑战副本 ");
	} else if (status == 1) {
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
				if ((cPlayer.getLevel() >= 20 && cPlayer.getLevel() <= 256) || cPlayer.getJobId() == 900) {
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
			// if(cm.判断团队每日("废弃都市", 次数限制) == 0){
				// cm.sendOk("抱歉，今天你的队伍里有人已经做满 " + 次数限制 + " 次了！");
				// cm.dispose();
				// return;
			// }
			if (next) {
				var em = cm.getEventManager("KerningPQ");
				if (em == null) {
					cm.sendOk("找不到脚本，请联系GM！");
					cm.dispose();
					return;
				} else {
					var prop = em.getProperty("state");
					var chrInMap = false;
					for(var i = 0; i < eventMaps.length; i++){
						if(cm.getPlayer().isGM()){
							cm.playerMessage(6, "地图 " + eventMaps[i] + "  玩家数量：" + cm.getC().getChannelServer().getMapFactory().getMap(eventMaps[i]).getCharactersSize());//测试
						}
						if(cm.getC().getChannelServer().getMapFactory().getMap(eventMaps[i]).getCharactersSize() > 0){
							chrInMap = true;
							break;
						}
					}
					if (prop == null || prop.equals("0") || !chrInMap) {
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
				cm.sendOk("你的队伍需要个人,等级必须在21-255之间,请确认你的队友有没有都在这里,或是里面已经有人了!");
			}
		}
		cm.dispose();
	}
}
