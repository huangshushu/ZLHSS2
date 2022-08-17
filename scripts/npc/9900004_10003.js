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

            text += "#L1##v1402196##l #L2##v1472214##l #L3##v1452205##l #L4##v1432167##l #L5##v1462193##l #L6##v1492179##l #L7##v1482168##l #L8##v1332225##l  #L10##v1422140##l #L11##v1382208##l #L13##v1302275##l #L14##v1402309##l #L38#单手剑#l #L37#轮回#L22#限时\r\n#L15#公婆Lv.50#L16#项链#L17#天使耳环#L35#独眼#L36#名片#L0#勋章\r\n#L18#海盗暴君披风#L19#暴君手套#L20#暴君鞋子#L21#暴君腰带\r\n#L23#战士暴君披风#L24#暴君手套#L25#暴君鞋子#L26#暴君腰带\r\n#L27#飞侠暴君披风#L28#暴君手套#L29#暴君鞋子#L30#暴君腰带\r\n#L31#弓手暴君披风#L32#暴君手套#L33#暴君鞋子#L34#暴君腰带\r\n#L40#黑龙+必成#L41#100的戒指#L42#300#L43#500"
            cm.sendSimple(text);

        } else if (selection == 37) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1112585,1);//冒险岛收藏家
				cm.gainItem(1112586,1);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 22) {
			if(cm.haveItem(1402214,0) ){

				cm.gainItem(1432214,1);//冒险岛收藏家
				cm.gainItem(1001108,0);//冒险岛收藏家
				cm.gainItem(1002900,0);//冒险岛收藏家
				cm.gainItem(1041198,0);//冒险岛收藏家
				cm.gainItem(1003759,0);//冒险岛收藏家
				cm.gainItem(1040196,0);//冒险岛收藏家
				cm.gainItem(1061213,0);//冒险岛收藏家
				cm.gainItem(1061211,0);//冒险岛收藏家
				cm.gainItem(1051406,0);//冒险岛收藏家
				cm.gainItem(1051487,0);//冒险岛收藏家
				cm.gainItem(2044003,0);//冒险岛收藏家
				cm.gainNX(0);
				cm.gainMeso(0);
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 38) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1302275);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1302275)).copy();
				toDrop.setFlag(1)//0可以//1封印//2可以交+滑//3封+防滑//4可以交易+寒冷//5寒+锁//6可以交易+寒+滑//7寒滑//8不可交易//9不可以交易+锁//10不可交换+滑//不可以交易+锁+滑
				toDrop.setOwner("天使冒险岛");//装备署名
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
          			cm.sendOk("制作成功！");
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 0) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1142654);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1142654)).copy();
				toDrop.setFlag(8)//0可以//1封印//2可以交+滑//3封+防滑//4可以交易+寒冷//5寒+锁//6可以交易+寒+滑//7寒滑//8不可交易//9不可以交易+锁//10不可交换+滑//不可以交易+锁+滑
				toDrop.setStr(138);//力量*
				toDrop.setDex(138);//敏捷
				toDrop.setInt(138);//智力
				toDrop.setLuk(138);//运气
				toDrop.setWatk(138);//物理攻击
				toDrop.setMatk(138);//魔法攻击
				toDrop.setWdef(999);//物理防御
				toDrop.setMdef(999);//魔法防御
				toDrop.setSpeed(999);//移动速度
				toDrop.setAcc(999);//命中
				toDrop.setAvoid(999);//闪避
				toDrop.setJump(999);//跳跃
				toDrop.setHp(2000);//生命
				toDrop.setMp(2000);//魔法
				toDrop.setOwner("神");//装备署名
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
				cm.sendOk("制作完成，请查看背包。");
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 1) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1402196);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1402196)).copy();
				toDrop.setFlag(1)//0可以//1封印//2可以交+滑//3封+防滑//4可以交易+寒冷//5寒+锁//6可以交易+寒+滑//7寒滑//8不可交易//9不可以交易+锁//10不可交换+滑//不可以交易+锁+滑
				toDrop.setOwner("天使冒险岛");//装备署名
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
          			cm.sendOk("制作成功！");
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 2) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1472214);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1472214)).copy();
				toDrop.setFlag(1)//0可以//1封印//2可以交+滑//3封+防滑//4可以交易+寒冷//5寒+锁//6可以交易+寒+滑//7寒滑//8不可交易//9不可以交易+锁//10不可交换+滑//不可以交易+锁+滑
				toDrop.setOwner("天使冒险岛");//装备署名
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
          			cm.sendOk("制作成功！");
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 3) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1452205);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1452205)).copy();
				toDrop.setFlag(1)//0可以//1封印//2可以交+滑//3封+防滑//4可以交易+寒冷//5寒+锁//6可以交易+寒+滑//7寒滑//8不可交易//9不可以交易+锁//10不可交换+滑//不可以交易+锁+滑
				toDrop.setOwner("天使冒险岛");//装备署名
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
          			cm.sendOk("制作成功！");
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 4) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1432167);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1432167)).copy();
				toDrop.setFlag(1)//0可以//1封印//2可以交+滑//3封+防滑//4可以交易+寒冷//5寒+锁//6可以交易+寒+滑//7寒滑//8不可交易//9不可以交易+锁//10不可交换+滑//不可以交易+锁+滑
				toDrop.setOwner("天使冒险岛");//装备署名
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
          			cm.sendOk("制作成功！");
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 5) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1462193);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1462193)).copy();
				toDrop.setFlag(1)//0可以//1封印//2可以交+滑//3封+防滑//4可以交易+寒冷//5寒+锁//6可以交易+寒+滑//7寒滑//8不可交易//9不可以交易+锁//10不可交换+滑//不可以交易+锁+滑
				toDrop.setOwner("天使冒险岛");//装备署名
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
          			cm.sendOk("制作成功！");
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 6) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1492179);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1492179)).copy();
				toDrop.setFlag(1)//0可以//1封印//2可以交+滑//3封+防滑//4可以交易+寒冷//5寒+锁//6可以交易+寒+滑//7寒滑//8不可交易//9不可以交易+锁//10不可交换+滑//不可以交易+锁+滑
				toDrop.setOwner("天使冒险岛");//装备署名
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
          			cm.sendOk("制作成功！");
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 7) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1482168);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1482168)).copy();
				toDrop.setFlag(1)//0可以//1封印//2可以交+滑//3封+防滑//4可以交易+寒冷//5寒+锁//6可以交易+寒+滑//7寒滑//8不可交易//9不可以交易+锁//10不可交换+滑//不可以交易+锁+滑
				toDrop.setOwner("天使冒险岛");//装备署名
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
          			cm.sendOk("制作成功！");
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 8) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1332225);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1332225)).copy();
				toDrop.setFlag(1)//0可以//1封印//2可以交+滑//3封+防滑//4可以交易+寒冷//5寒+锁//6可以交易+寒+滑//7寒滑//8不可交易//9不可以交易+锁//10不可交换+滑//不可以交易+锁+滑
				toDrop.setOwner("天使冒险岛");//装备署名
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
          			cm.sendOk("制作成功！");
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 10) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1422140);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1422140)).copy();
				toDrop.setFlag(1)//0可以//1封印//2可以交+滑//3封+防滑//4可以交易+寒冷//5寒+锁//6可以交易+寒+滑//7寒滑//8不可交易//9不可以交易+锁//10不可交换+滑//不可以交易+锁+滑
				toDrop.setOwner("天使冒险岛");//装备署名
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
          			cm.sendOk("制作成功！");
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 11) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1422140);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1422140)).copy();
				toDrop.setFlag(1)//0可以//1封印//2可以交+滑//3封+防滑//4可以交易+寒冷//5寒+锁//6可以交易+寒+滑//7寒滑//8不可交易//9不可以交易+锁//10不可交换+滑//不可以交易+锁+滑
				toDrop.setOwner("天使冒险岛");//装备署名
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
          			cm.sendOk("制作成功！");
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 13) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1302275);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1302275)).copy();
				toDrop.setFlag(1)//0可以//1封印//2可以交+滑//3封+防滑//4可以交易+寒冷//5寒+锁//6可以交易+寒+滑//7寒滑//8不可交易//9不可以交易+锁//10不可交换+滑//不可以交易+锁+滑
				toDrop.setOwner("天使冒险岛");//装备署名
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
          			cm.sendOk("制作成功！");
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 14) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1402309);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1402309)).copy();
				toDrop.setFlag(1)//0可以//1封印//2可以交+滑//3封+防滑//4可以交易+寒冷//5寒+锁//6可以交易+寒+滑//7寒滑//8不可交易//9不可以交易+锁//10不可交换+滑//不可以交易+锁+滑
				toDrop.setOwner("天使冒险岛");//装备署名
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
          			cm.sendOk("制作成功！");
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 15) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1112495);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1112495)).copy();
				toDrop.setFlag(1)//0可以//1封印//2可以交+滑//3封+防滑//4可以交易+寒冷//5寒+锁//6可以交易+寒+滑//7寒滑//8不可交易//9不可以交易+锁//10不可交换+滑//不可以交易+锁+滑
				toDrop.setStr(80);//力量*
				toDrop.setDex(80);//敏捷
				toDrop.setInt(80);//运气
				toDrop.setLuk(80);//智力
				toDrop.setWatk(30);//物理攻击
				toDrop.setMatk(30);//魔法攻击
				toDrop.setWdef(0);//物理防御
				toDrop.setMdef(0);//魔法防御
				toDrop.setSpeed(10);//移动速度
				toDrop.setAcc(0);//命中
				toDrop.setAvoid(0);//闪避
				toDrop.setJump(10);//跳跃
				toDrop.setHp(500);//生命
				toDrop.setMp(500);//魔法
				toDrop.setOwner("天使冒险岛");//装备署名
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
				cm.sendOk("制作完成，请查看背包。");
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 16) {
			if(cm.haveItem(1402214,0) ){
			var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1122076);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1122076)).copy();
				toDrop.setFlag(1)//0可以//1封印//2可以交+滑//3封+防滑//4可以交易+寒冷//5寒+锁//6可以交易+寒+滑//7寒滑//8不可交易//9不可以交易+锁//10不可交换+滑//不可以交易+锁+滑
				toDrop.setStr(150);//力量*
				toDrop.setDex(150);//敏捷
				toDrop.setInt(150);//运气
				toDrop.setLuk(150);//智力
				toDrop.setWatk(40);//物理攻击
				toDrop.setMatk(40);//魔法攻击
				toDrop.setWdef(0);//物理防御
				toDrop.setMdef(0);//魔法防御
				toDrop.setSpeed(0);//移动速度
				toDrop.setAcc(0);//命中
				toDrop.setAvoid(0);//闪避
				toDrop.setJump(0);//跳跃
				toDrop.setHp(2000);//生命
				toDrop.setMp(2000);//魔法
				toDrop.setOwner("天使冒险岛");//装备署名
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
				cm.sendOk("制作完成，请查看背包。");
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 17) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1032219);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1032219)).copy();
				toDrop.setFlag(1)//0可以//1封印//2可以交+滑//3封+防滑//4可以交易+寒冷//5寒+锁//6可以交易+寒+滑//7寒滑//8不可交易//9不可以交易+锁//10不可交换+滑//不可以交易+锁+滑
				toDrop.setStr(150);//力量*
				toDrop.setDex(150);//敏捷
				toDrop.setInt(150);//运气
				toDrop.setLuk(150);//智力
				toDrop.setWatk(40);//物理攻击
				toDrop.setMatk(40);//魔法攻击
				toDrop.setWdef(0);//物理防御
				toDrop.setMdef(0);//魔法防御
				toDrop.setSpeed(0);//移动速度
				toDrop.setAcc(0);//命中
				toDrop.setAvoid(0);//闪避
				toDrop.setJump(0);//跳跃
				toDrop.setHp(2000);//生命
				toDrop.setMp(2000);//魔法
				toDrop.setOwner("天使冒险岛");//装备署名
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
				cm.sendOk("制作完成，请查看背包。");
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 18) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1102485,1);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 19) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1082547,1);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 20) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1072747,1);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}1482216
        } else if (selection == 21) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1132178,1);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}

        } else if (selection == 23) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1102481,1);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 24) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1082543,1);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 25) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1072743,1);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 26) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1132174,1);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 27) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1102484,1);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 28) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1082546,1);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 29) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1072746,1);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 30) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1132177,1);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 31) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1102483,1);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 32) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1082545,1);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 33) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1072745,1);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 34) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1132176,1);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 35) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1022226);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1022226)).copy();
				toDrop.setFlag(1)//0可以//1封印//2可以交+滑//3封+防滑//4可以交易+寒冷//5寒+锁//6可以交易+寒+滑//7寒滑//8不可交易//9不可以交易+锁//10不可交换+滑//不可以交易+锁+滑
				toDrop.setStr(60);//力量*
				toDrop.setDex(60);//敏捷
				toDrop.setInt(60);//智力
				toDrop.setLuk(60);//运气
				toDrop.setWatk(30);//物理攻击
				toDrop.setMatk(30);//魔法攻击
				toDrop.setWdef(0);//物理防御
				toDrop.setMdef(0);//魔法防御
				toDrop.setSpeed(0);//移动速度
				toDrop.setAcc(0);//命中
				toDrop.setAvoid(0);//闪避
				toDrop.setJump(0);//跳跃
				toDrop.setHp(3000);//生命
				toDrop.setMp(3000);//魔法
				toDrop.setOwner("天使冒险岛");//装备署名
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 36) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1112138,60,60,60,60,5000,5000,60,60,0,0,0,0,30,30);
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 40) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(2041200,25);//冒险岛收藏家
				cm.gainItem(4310038,10);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 41) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1112422);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1112422)).copy();
				toDrop.setFlag(1)//0可以//1封印//2可以交+滑//3封+防滑//4可以交易+寒冷//5寒+锁//6可以交易+寒+滑//7寒滑//8不可交易//9不可以交易+锁//10不可交换+滑//不可以交易+锁+滑
				toDrop.setStr(15);//力量*
				toDrop.setDex(15);//敏捷
				toDrop.setInt(15);//智力
				toDrop.setLuk(15);//运气
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
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
				cm.sendOk("制作完成，请查看背包。");
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 42) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1112434);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1112434)).copy();
				toDrop.setFlag(1)//0可以//1封印//2可以交+滑//3封+防滑//4可以交易+寒冷//5寒+锁//6可以交易+寒+滑//7寒滑//8不可交易//9不可以交易+锁//10不可交换+滑//不可以交易+锁+滑
				toDrop.setStr(30);//力量*
				toDrop.setDex(30);//敏捷
				toDrop.setInt(30);//智力
				toDrop.setLuk(30);//运气
				toDrop.setWatk(30);//物理攻击
				toDrop.setMatk(30);//魔法攻击
				toDrop.setWdef(0);//物理防御
				toDrop.setMdef(0);//魔法防御
				toDrop.setSpeed(0);//移动速度
				toDrop.setAcc(0);//命中
				toDrop.setAvoid(0);//闪避
				toDrop.setJump(0);//跳跃
				toDrop.setHp(0);//生命
				toDrop.setMp(0);//魔法
				toDrop.setOwner("");//装备署名
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
				cm.sendOk("制作完成，请查看背包。");
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 43) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1112727);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1112727)).copy();
				toDrop.setFlag(1)//0可以//1封印//2可以交+滑//3封+防滑//4可以交易+寒冷//5寒+锁//6可以交易+寒+滑//7寒滑//8不可交易//9不可以交易+锁//10不可交换+滑//不可以交易+锁+滑
				toDrop.setStr(66);//力量*
				toDrop.setDex(66);//敏捷
				toDrop.setInt(66);//智力
				toDrop.setLuk(66);//运气
				toDrop.setWatk(66);//物理攻击
				toDrop.setMatk(66);//魔法攻击
				toDrop.setWdef(0);//物理防御
				toDrop.setMdef(0);//魔法防御
				toDrop.setSpeed(0);//移动速度
				toDrop.setAcc(0);//命中
				toDrop.setAvoid(0);//闪避
				toDrop.setJump(0);//跳跃
				toDrop.setHp(0);//生命
				toDrop.setMp(0);//魔法
				toDrop.setOwner("");//装备署名
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
				cm.sendOk("制作完成，请查看背包。");
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
		}
 	
    }
}


