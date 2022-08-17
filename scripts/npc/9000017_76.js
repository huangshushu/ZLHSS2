
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
	
    action(1, 0, 0)
}

function action(mode, type, selection) {
    if (status <= 0 && mode <= 0) {
        cm.dispose();
        return
    }
    if (mode == 1) {
        status++
    } else {
        status--
    }	
		if (cm.getMapId() == 108010101 ) {
            cm.dispose();
            return;
		 
    } else if (status <= 0) {
        var 
		selStr = "#b欢迎光临 如果你想升级天使戒指需要准备材料：\r\n#v1112427#1个#v4170001#40个#v4170009#80个\r\n注意【佩戴等级为210级】：普通戒指只能拥有一个，制作完天使戒指再重新制作普通戒指\r\n";

		selStr += "#L1##r升级天使戒指#v1113056#[全属性40攻击20]#l\r\n\r\n"
		   
	

        cm.sendSimple(selStr)
    } else if (status == 1) {
        switch (selection) {
		 case 1:
		 if(cm.haveItem(1112427,1)&& cm.haveItem(4170001,40)&& cm.haveItem(4170009,80)){
				cm.gainItem(1112427, -1);
				cm.gainItem(4170009, -80);
				cm.gainItem(4170001, -40);
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1113056);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1113056)).copy();
				toDrop.setFlag(1)//0可以//1封印//2可以交+滑//3封+防滑//4可以交易+寒冷//5寒+锁//6可以交易+寒+滑//7寒滑//8不可交易//9不可以交易+锁//10不可交换+滑//不可以交易+锁+滑
				toDrop.setStr(40);//力量*
				toDrop.setDex(40);//敏捷
				toDrop.setInt(40);//运气
				toDrop.setLuk(40);//智力
				toDrop.setWatk(20);//物理攻击
				toDrop.setMatk(25);//魔法攻击
				toDrop.setWdef(9999);//物理防御
				toDrop.setMdef(9999);//魔法防御
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
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『装备制作』" + " : " + "[" + cm.getChar().getName() + "]成功制作了天使戒指，实力大幅度提升！"));
				cm.dispose();
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
         break;
		
        }
    }
}
