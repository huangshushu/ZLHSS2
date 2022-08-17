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
		selStr = "欢迎光临[晚上十二点会删除这个制作]\r\n";
		selStr += "#L1#请收集#v4000016##v4000019##v4000000#各五十个\r\n祝各位天使岛民 元旦快乐 大吉大利！ #l\r\n\r\n"
		selStr += "#L1##r制作#v1115111#限时属性名片戒指\r\n祝各位天使岛民 元旦快乐 大吉大利！ #l\r\n\r\n"


		   
	

        cm.sendSimple(selStr)
    } else if (status == 1) {
        switch (selection) {
		 case 1:
		 if(cm.haveItem(4000016,50)&& cm.haveItem(4000019,50)&& cm.haveItem(4000000,50)&& cm.getBossLog('PlayQuest100') < 1){
				cm.gainItem(4000016, -50);
				cm.gainItem(4000019, -50);
                                cm.gainItem(4000000, -50);
		cm.setBossLog('PlayQuest100');
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1115111);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1115111)).copy();
				toDrop.setFlag(1)//0可以//1封印//2可以交+滑//3封+防滑//4可以交易+寒冷//5寒+锁//6可以交易+寒+滑//7寒滑//8不可交易//9不可以交易+锁//10不可交换+滑//不可以交易+锁+滑
				toDrop.setStr(10);//力量*
				toDrop.setDex(10);//敏捷
				toDrop.setInt(10);//运气
				toDrop.setLuk(10);//智力
				toDrop.setWatk(10);//物理攻击
				toDrop.setMatk(10);//魔法攻击
				toDrop.setWdef(0);//物理防御
				toDrop.setMdef(0);//魔法防御
				toDrop.setSpeed(0);//移动速度
				toDrop.setAcc(0);//命中
				toDrop.setAvoid(0);//闪避
				toDrop.setJump(0);//跳跃
				toDrop.setHp(500);//生命
				toDrop.setMp(0);//魔法
				toDrop.setOwner("天使冒险岛");//装备署名
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
				cm.sendOk("制作完成，请查看背包。");
				cm.worldMessage(6, "恭喜玩家[" + cm.getPlayer().getName() + "]成功制作了[限时属性名片戒指]``祝福各位元旦快乐！");
				cm.dispose();
			}else{
            cm.sendOk("您的材料不足或者已经制作过一次！");
            cm.dispose();
			}
         break;
		 case 2:
		cm.openNpc(9310085,0);
        }
    }
}
