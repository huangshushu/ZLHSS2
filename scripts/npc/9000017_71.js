
importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var 箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
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
			//显示物品ID图片用的代码是  #v这里写入ID#
            text += "#e#d#l这里是[天使手套]锻造处！【玩具组队任务获得】\r\n"//3
            text += "" + 红色箭头 + "#L1##e#d制作#v1082175#（4维+5、攻击+2） 需要：  #v4001325#x10个#l\r\n\r\n"//3
            text += "" + 蓝色箭头 + "#L2##e#d#v4001325#x20 + #v1082175# 升级至 #v1082176#（4维+10、攻击+4）#l\r\n"//3
            text += "" + 蓝色箭头 + "#L3##e#d#v4001325#x30 + #v1082176# 升级至 #v1082177#（4维+15、攻击+6）#l\r\n"//3
            text += "" + 蓝色箭头 + "#L4##e#d#v4001325#x66 + #v1082177# 升级至 #v1082178#（4维+22、攻击+15）#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		         if(cm.haveItem(4001325,10)){
				cm.gainItem(4001325, -10);
				cm.gainItem(1082175,5,5,5,5,0,0,2,4,0,0,0,0,0,0);

            cm.sendOk("换购成功！");
			cm.worldMessage(6,"恭喜玩家：["+cm.getName()+"]制作了[初级天使手套]，继续加油将它打造到极致吧！");
            cm.dispose();
			}else{
            cm.sendOk("您的材料不足！制作需要\r\n#v4001325#x10个");
            cm.dispose();
			}
        } else if (selection == 2) {
                     if(cm.haveItem(4001325,20)&& cm.haveItem(1082175,1)){
				cm.gainItem(4001325, -20);
				cm.gainItem(1082175, -1);
				cm.gainItem(1082176,10,10,10,10,0,0,4,6,0,0,0,0,0,0);

            cm.sendOk("换购成功！");
			cm.worldMessage(6,"恭喜玩家：["+cm.getName()+"]制作了[中级天使手套]，继续加油将它打造到极致吧！");
            cm.dispose();
			}else{
            cm.sendOk("您的材料不足！制作需要\r\n#v4001325#x20个");
            cm.dispose();
			}
        } else if (selection == 3) {
		         if(cm.haveItem(4001325,30)&& cm.haveItem(1082176,1)){
				cm.gainItem(4001325, -30);
				cm.gainItem(1082176, -1);
				cm.gainItem(1082177,15,15,15,15,0,0,6,8,0,0,0,0,0,0);

            cm.sendOk("换购成功！");
			cm.worldMessage(6,"恭喜玩家：["+cm.getName()+"]制作了[高级天使手套]，继续加油将它打造到极致吧！");
            cm.dispose();
			}else{
            cm.sendOk("您的材料不足！制作需要\r\n#v4001325#x30个");
            cm.dispose();
			}
        } else if (selection == 4) {
		         if(cm.haveItem(4001325,66)&& cm.haveItem(1082177,1)){
				cm.gainItem(4001325, -66);
				cm.gainItem(1082177, -1);


				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1082178);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1082178)).copy();
				toDrop.setFlag(1)//0可以//1封印//2可以交+滑//3封+防滑//4可以交易+寒冷//5寒+锁//6可以交易+寒+滑//7寒滑//8不可交易//9不可以交易+锁//10不可交换+滑//不可以交易+锁+滑
				toDrop.setStr(22);//力量*
				toDrop.setDex(22);//敏捷
				toDrop.setInt(22);//运气
				toDrop.setLuk(22);//智力
				toDrop.setWatk(15);//物理攻击
				toDrop.setMatk(15);//魔法攻击
				toDrop.setWdef(0);//物理防御
				toDrop.setMdef(0);//魔法防御
				toDrop.setSpeed(0);//移动速度
				toDrop.setAcc(0);//命中
				toDrop.setAvoid(0);//闪避
				toDrop.setJump(0);//跳跃
				toDrop.setHp(0);//生命
				toDrop.setMp(0);//魔法
				toDrop.setOwner("天使冒险岛");//装备署名
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
				cm.sendOk("制作完成，请查看背包。");
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『装备制作』" + " : " + "[" + cm.getChar().getName() + "]成功合成了【超神】天使手套"));
            cm.dispose();
			}else{
            cm.sendOk("您的材料不足！制作需要\r\n#v4001325#x66个");
            cm.dispose();
			}
        } else if (selection == 5) {
		cm.openNpc(9000017, 33);
        } else if (selection == 6) {
		cm.openNpc(9270045, 8);
	}
    }
}


