/* ==================
 脚本类型:  NPC	    
 脚本作者：月亮     
 联系方式：2412614144
 =====================
 */
var status = -1;
var fbmc = "毒雾森林-(毒雾副本)";//副本名称
var minLevel = 71;
var maxLevel = 200;
var minPartySize = 3;
var maxPartySize = 6;
var maxjinbi = 50000;//判断征集令金币
var eventname = "Ellin";//副本配置文件

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//显示物品ID图片用的代码是  #v这里写入ID#
            text += "#k\t\t\t\t欢迎来到#r" + fbmc + "#k\r\n副本进入要求如下：\r\n①人数限制:#r " + minPartySize + " #b- #r" + maxPartySize + "#k队员\t②等级限制：#r " + minLevel + " #b- #r" + maxLevel + "级 #k\r\n"//3
            text += "#L0##r开始组队副本#l      #L1##r副本征集令#k" + maxjinbi + "金币/次#l  \r\n"//3
            cm.sendSimple(text);
    } else if (status == 1) {
	if (selection == 0) {
	    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
		cm.sendOk("找您的队长来和我谈话。");
	    } else {
		var party = cm.getPlayer().getParty().getMembers();
		var mapId = cm.getPlayer().getMapId();
		var next = true;
		var size = 0;
		var it = party.iterator();
		while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			if (ccPlayer == null || ccPlayer.getLevel() < minLevel || ccPlayer.getJob() > 900 || ccPlayer.getLevel() > maxLevel) {
				next = false;
				break;
			}
			size += (ccPlayer.isGM() ? 4 : 1);
		}	
		if (next && size >= 4) {
			var em = cm.getEventManager("Ellin");
			if (em == null) {
				cm.sendOk("当前副本有问题，请联络管理员....");
			} else {
				var prop = em.getProperty("state");
                if (prop.equals("0") || prop == null) {
					em.startInstance(cm.getParty(), cm.getMap());
					cm.dispose();
					return;
				} else {
					cm.sendOk("里面已经有人了,请你稍后在进入看看,或者是换频");
				}

			}
		} else {
			cm.sendOk("你的队伍" + minPartySize + "个(含)以上" + minLevel + "~" + maxLevel + "的队员才能进入");
		}

	cm.dispose();
    }

	} else if (selection == 1){
            if (cm.getMeso() >= maxjinbi){//判断多少金币
                cm.gainMeso(- maxjinbi );//扣除多少金币
				cm.laba(cm.getPlayer().getName() + " [征集令]" + " : " + "[" + fbmc + "]需要勇士一起完成",11);
                cm.dispose();
                }else{
                    cm.sendOk("你的冒险币不足" + maxjinbi + "。无法发送征集令");
                    cm.dispose();
	    }
		}
			    }
	    }