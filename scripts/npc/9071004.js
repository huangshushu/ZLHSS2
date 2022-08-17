var maps = Array(952010000, 952040000, 952030000, 952020000, 953000000, 953010000, 953030000, 953040000, 953050000, 954000000, 954010000, 954020000, 954030000, 954040000, 954050000, 954060000);
var minLevel = Array(45, 60, 70, 80, 85, 90, 120, 130, 150, 160, 175, 180, 185, 190, 195,205);
var maxLevel = Array(55, 90, 110, 130, 150, 170, 180, 200, 200, 200, 200, 200, 220, 240, 245,255);

function start() {
    var selStr = "你要哪一种地牢进入?\r\n\r\n#b";
    for (var i = 0; i < maps.length; i++) {
	selStr += "#L" + i + "##m" + maps[i] + "# (怪兽." + minLevel[i] + " - " + maxLevel[i] + ")#l\r\n";
    }
    cm.sendSimple(selStr);
}

function action(mode, type, selection) {
    if (mode == 1 && selection >= 0 && selection < maps.length) {
        if (cm.getParty() == null || !cm.isLeader()) {
			cm.sendOk("请让队长找我.");
		} else if (cm.itemQuantity(4001516) < 1 ) { 
			cm.sendOk("您没有#v4001516#,不能进入！~");
			cm.dispose();
		} else {

			var party = cm.getParty().getMembers().iterator();
			var next = true;
			while (party.hasNext()) {
				var cPlayer = party.next();
				var chr = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
				if(chr != null && !chr.haveItem(4001516)){
					cm.sendOk("你队伍里的 #r" + chr.getName() + "#k 身上没有#i" + 4001516 + ":#，无法进入~");
					cm.dispose();
				}
				if (cPlayer.getLevel() < minLevel[selection] || cPlayer.getMapid() != cm.getMapId()) {
					cm.playerMessage(5, "要求等级：" + minLevel[selection] + ",当前最低角色等级：" + cPlayer.getLevel());//测试
					next = false;
				} 
			}
			if (!next) {
				cm.sendOk("请确保所有队员都在地图上，并有正确的级别要求.");
			} else {
				var em = cm.getEventManager("MonsterPark");
				cm.dispose();	
				if (em == null || em.getInstance("MonsterPark" + maps[selection]) != null) {
					cm.sendOk("有人已经在挑战中.");
				} else {
					var party = cm.getParty().getMembers().iterator();
					while (party.hasNext()) {
						var cPlayer = party.next();
						var chr = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
						if(chr != null){
							chr.gainItem(4001516, -1);
						}
						
					}
					
					//cm.gainItem(4001516, -1);
					em.startInstance_Party("" + maps[selection], cm.getPlayer());
				}
			}
		}
    }
    cm.dispose();
}

