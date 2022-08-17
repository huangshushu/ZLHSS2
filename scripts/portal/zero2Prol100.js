var status = 0;
function start() {
var em = cm.getEventManager("xinmo");
    if (em == null) {
        cm.sendOk("请联系管理员开通此副本。");
        cm.dispose;
    } else {
        cm.sendNext("#b#r#e害怕吗恐惧吗梦魇与你相伴#k#n\r\n#e#r任何人心里都有一个梦魇!战胜它你将超越自我\r\n#d梦魇携带大量的宝藏\r\n消灭梦魇随机掉落掉落#r[ 2 ]个到[ 3 ]个#k#v2436262##t2436262#打开可获得神秘道具\r\n请给我2个#v4000385##r#z4000385##k我就可以让你去挑战心魔（隔壁的幽灵船长会掉落）");
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
		if (cm.getParty()==null||cm.getParty()>=2 ) {
			cm.sendOk("请先自己开个组,而且只能自己一个人.完成后再来跟我说话");
			cm.dispose();
			return;
		}else if(!cm.haveItem(4000385,2)){
			cm.sendOk("请带来给我#v4000385##r#z4000385##k #bX2#k");
			cm.dispose();

			} else if (cm.getMap(401100100).getCharactersSize() > 0) {
                        cm.sendOk("副本已经在进行中。请等待或者换线后尝试..");
                        cm.dispose();
			return;
			}else if(cm.getPQLog("xinmo") == 2){
			cm.sendOk("每天只能进入2次哦!!");
			cm.dispose();
			return;
		}else{
		var em = cm.getEventManager("xinmo");
		var prop = em.getProperty("state");
        if  (prop.equals("0") || prop == null) {
            em.startInstance(cm.getPlayer().getParty(), cm.getMap(), 210);
			cm.gainItem(4000385,-2);
			cm.setPQLog("xinmo");
            cm.dispose();
            return;
        } else {
            cm.sendOk("里面已经有人开始战斗了。");

        }
	  }
    }
    cm.dispose();
}
