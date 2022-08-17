/* ==================
 脚本类型:  NPC	    
 脚本作者：月亮     
 联系方式：2412614144
 =====================
 */
var status = 0;
var fbmc = "百草堂-(海盗副本)";//副本名称
var minLevel = 10;//最低等级
var maxLevel = 200;//最高等级
var minPartySize = 1;//最少人数
var maxPartySize = 6;//最多人数
var maxjinbi = 50000;//判断征集令金币
var eventname = "Pirate";//副本配置文件

function checkMap() {
    var map = [925100000, 925100100, 925100200, 925100201, 925100202, 925100300, 925100301, 925100302, 925100400, 925100400, 925100500];
    for(var i = 0 ; i < map.length; i++) {
        if(cm.getPlayerCount(map[i]))
            return false;
    }
    return true;
}


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;
	if (cm.getPlayer().getClient().getChannel() == 1 || cm.getPlayer().getClient().getChannel() == 2 || cm.getPlayer().getClient().getChannel() == 3) {
        if (status == 0) {
	cm.removeAll(4001117);
	cm.removeAll(4031437);
	cm.removeAll(4001120);
	cm.removeAll(4001121);
	cm.removeAll(4001122);
	cm.removeAll(4001260);
            cm.sendSimple("欢迎来到#r" + fbmc + "#k\r\n要求如下：\r\n①人数限制:#r " + minPartySize + " #b- #r" + maxPartySize + "#k队员\t②等级限制：#r " + minLevel + " #b- #r" + maxLevel + "级 #k#b\r\n\r\n#r#L0#进入海盗船\r\n\r\n#L2##r副本征集令#k" + maxjinbi + "金币/次#l");
        } else if (status == 1) {
            if (selection == 0) {
    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
        cm.sendOk("请找队长来找我。");
    } else {
        var party = cm.getPlayer().getParty().getMembers();
        var mapId = cm.getPlayer().getMapId();
        var next = true;
        var size = 0;
        var it = party.iterator();
        while (it.hasNext()) {
            var cPlayer = it.next();
            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
            if (ccPlayer == null || ccPlayer.getLevel() <  minLevel || ccPlayer.getLevel() > maxLevel) {
                next = false;
                break;
            }
            size += (ccPlayer.isGM() ? 2 : 1);
        }
        if (next && size >= minPartySize) {
            if(checkMap()) {
                var em = cm.getEventManager("Pirate");
                if (em == null) {
                    cm.sendOk("找不到脚本，请联系GM！！");
                } else {
                    em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
                }
            } else {
                cm.sendOk("目前有人在打啰～");
            }
        }else {
            cm.sendOk("需要" + minPartySize + "至" + maxPartySize + "个人 等级必须是" + minLevel+ "到" + maxLevel + "级");
        }
    }
    cm.dispose();
}
		 } else {
        		cm.dispose();
        		cm.sendOk("只有在1,2,3频道才可以参加海盗船任务。");
				cm.dispose();
	}
    
           } else if (selection == 1) {
                cm.sendOk("请确认你的组队员：\r\n\r\n#b1、组队员必须要" + minPartySize + "人以上，" + maxPartySize + "人以下。\r\n2、组队员等级必须要在" + minLevel + "级以上。");
                cm.dispose();
            } else if (selection == 2) {
		if (cm.getMeso() >= maxjinbi){//判断多少金币
        cm.gainMeso(- maxjinbi );//扣除多少金币
	    cm.laba(cm.getPlayer().getName() + " [征集令]" + " : " + "["+ fbmc +"]需要勇士一起完成",11);
        cm.dispose();
        }else{
        cm.sendOk("你的冒险币不足" + maxjinbi + "。无法发送征集令");
        cm.dispose();
        }
		}}}  