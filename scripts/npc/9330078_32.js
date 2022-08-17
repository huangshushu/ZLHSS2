
var MapleItemInformationProvider = Java.type('server.MapleItemInformationProvider');
var MaplePacketCreator = Java.type('tools.MaplePacketCreator');

var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var 箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "#e#d制作#v1472214#\r\n需要#v1472230# #v4000270#x500#v4000245#x8#v4000244#x8#v4000175#x3#v4001126#x1666，冒险币#r3333W#d\r\n搜集好道具我就可以为您制作了.#l\r\n\r\n"//3
            text += "#L1##r确定制作#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,1)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(1472230,1)&& cm.haveItem(4000270,500) && cm.haveItem(4000245,8)&& cm.haveItem(4000244,8)&& cm.haveItem(4000175,3)&& cm.haveItem(4001126,1666)&& cm.getMeso()>=33333333 ){
				cm.gainMeso(-33333333);
				cm.gainItem(1472230,-1);
				cm.gainItem(4000270,-500);
				cm.gainItem(4000175,-3);
				cm.gainItem(4000245,-8);
				cm.gainItem(4000244,-8);
				cm.gainItem(4001126,-1666);
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1472214);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1472214)).copy();
				toDrop.setFlag(0)//0可以//1封印//2可以交+滑//3封+防滑//4可以交易+寒冷//5寒+锁//6可以交易+寒+滑//7寒滑//8不可交易//9不可以交易+锁//10不可交换+滑//不可以交易+锁+滑
				toDrop.setOwner("");//装备署名
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
          			cm.sendOk("制作成功！");
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『装备制作』" + " : " + "[" + cm.getChar().getName() + "]成功升级获得了法弗纳危险之手"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
		}
 	
    }
}
