/* 点卷商店 */

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
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
        var selStr = "               #v1114231##e#r玛瑙戒指升级系统#v1114231##l\r\n#v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488##v4000488#             #L0##d玛瑙戒指介绍(推荐)#l#k\r\n             #r#L4#将我的玛瑙戒指升阶#l\r\n             #r#L6#免费领取[1]阶玛瑙#l\r\n \r\n\r\n #v1114219##v1114220##v1114222##v1114223##v1114223##v1114208##v1114210##v1114226##v1114231#";

        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(1500032,"manaojs"); //双倍道具
            break;
        case 4:
            cm.dispose();
            cm.openNpc(1500032,"manaoshengji"); //暴君
            break;
        //case 5:    #b#L5#购买玛瑙升级材料#l\r\n#l\r\n 
            //cm.dispose();
            //cm.openNpc(1500032,"manaojuanzhou"); //各种椅子
            //break;
        case 6:
			//var ii = cm.getItemInfo();
//var ii = Packages.server.MapleItemInformationProvider.getInstance();			
			var equip = cm. getNewEquip(1114219); // 生成一个Equip类      
			//toequip.setEnhance(10)              
			equip.setStr(30); //装备力量
			equip.setDex(30); //装备敏捷
			equip.setInt(30); //装备智力
			equip.setLuk(30); //装备运气
                        equip.setHp(200);
			equip.setMatk(10); //物理攻击
			equip.setWatk(10); //魔法攻击 
			//toequip.setOwner("指北针管理员");
			cm.addFromDrop(equip);
			cm.sendOk("恭喜您获得 #r初遇[1]阶玛瑙戒指#k 。");
        		    cm.dispose();
     			       break;
        case 0:
        case 7:
            cm.dispose();
            cm.openNpc(9310071, 2); //洗点卷轴
            break;
        case 8:
            cm.dispose();
            cm.openNpc(9900002, 24); //玩具商店
            break;
        case 9:
            cm.dispose();
            cm.openNpc(9110103); //骑宠商店
            break;
	case 10:
            cm.dispose();
            cm.openNpc(9110114); //破攻石头
            break;
	case 11:
            cm.dispose();
            cm.openNpc(9900002, 5); //一键潜能
            break;
	case 12:
            cm.dispose();
            cm.openNpc(9900002, 1301); //一键潜能
            break;
	case 13:
            cm.dispose();
            cm.openNpc(9270096, 13); //一键潜能
            break;
	case 14:
            cm.dispose();
            cm.openNpc(9900002, 1301); //一键潜能
            break;
	case 15:
            cm.dispose();
            cm.openNpc(9270096, 15); //一键潜能
            break;
        }
    }
}