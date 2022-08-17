
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
text += "回收可获得相对应部位增幅卷轴#v2041035##v2040815##v2040713##v2041315#\r\n法师回收为八个极品抽奖币#v4310030#\r\n"
            text += "#L23#战士暴君披风#L24#暴君手套#L25#暴君鞋子#L26#暴君腰带\r\n#L1#法师暴君披风#L2#暴君手套#L3#暴君鞋子#L4#暴君腰带\r\n#L31#弓手暴君披风#L32#暴君手套#L33#暴君鞋子#L34#暴君腰带\r\n#L27#飞侠暴君披风#L28#暴君手套#L29#暴君鞋子#L30#暴君腰带\r\n#L18#海盗暴君披风#L19#暴君手套#L20#暴君鞋子#L21#暴君腰带\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1102482,1) ){
				cm.gainItem(1102482,-1);//冒险岛收藏家
				cm.gainItem(4310030,8);//冒险岛收藏家
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『暴君回收』" + " : " + "[" + cm.getChar().getName() + "]成功回收法师暴君披风！)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 2) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1082544,1) ){
				cm.gainItem(1082544,-1);//冒险岛收藏家
				cm.gainItem(4310030,8);//冒险岛收藏家
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『暴君回收』" + " : " + "[" + cm.getChar().getName() + "]成功回收法师暴君手套！)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 3) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1072744,1) ){
				cm.gainItem(1072744,-1);//冒险岛收藏家
				cm.gainItem(4310030,8);//冒险岛收藏家
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『暴君回收』" + " : " + "[" + cm.getChar().getName() + "]成功回收法师暴君鞋子！)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 4) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1132175,1) ){
				cm.gainItem(1132175,-1);//冒险岛收藏家
				cm.gainItem(4310030,8);//冒险岛收藏家
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『暴君回收』" + " : " + "[" + cm.getChar().getName() + "]成功回收法师暴君腰带！)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 18) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1102485,1) ){
				cm.gainItem(1102485,-1);//冒险岛收藏家
				cm.gainItem(2041035,1);//冒险岛收藏家
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『暴君回收』" + " : " + "[" + cm.getChar().getName() + "]成功回收海盗暴君披风！)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 19) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1082547,1) ){
				cm.gainItem(1082547,-1);//冒险岛收藏家
				cm.gainItem(2040815,1);//冒险岛收藏家
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『暴君回收』" + " : " + "[" + cm.getChar().getName() + "]成功回收了海盗暴君手套！)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 20) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1072747,1) ){
				cm.gainItem(1072747,-1);//冒险岛收藏家
				cm.gainItem(2040713,1);//冒险岛收藏家
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『暴君回收』" + " : " + "[" + cm.getChar().getName() + "]成功回收了海盗暴君鞋子！)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}1482216
        } else if (selection == 21) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1132178,1) ){
				cm.gainItem(1132178,-1);//冒险岛收藏家
				cm.gainItem(2041315,1);//冒险岛收藏家
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『暴君回收』" + " : " + "[" + cm.getChar().getName() + "]成功回收了海盗暴君腰带！)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 23) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1102481,1) ){
				cm.gainItem(1102481,-1);//冒险岛收藏家
	cm.gainItem(2041035,1);//冒险岛收藏家
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『暴君回收』" + " : " + "[" + cm.getChar().getName() + "]成功回收了战士暴君披风！)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 24) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1082543,1) ){
				cm.gainItem(1082543,-1);//冒险岛收藏家
				cm.gainItem(2040815,1);//冒险岛收藏家
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『暴君回收』" + " : " + "[" + cm.getChar().getName() + "]成功回收了战士暴君手套！)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 25) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1072743,1) ){
				cm.gainItem(1072743,-1);//冒险岛收藏家
				cm.gainItem(2040713,1);//冒险岛收藏家
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『暴君回收』" + " : " + "[" + cm.getChar().getName() + "]成功回收了战士暴君鞋子！)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 26) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1132174,1) ){
				cm.gainItem(1132174,-1);//冒险岛收藏家
				cm.gainItem(2041315,1);//冒险岛收藏家
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『暴君回收』" + " : " + "[" + cm.getChar().getName() + "]成功回收了战士暴君腰带！)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 27) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
					}else */if(cm.haveItem(1102484,1) ){
				cm.gainItem(1102484,-1);//冒险岛收藏家
				cm.gainItem(2041035,1);//冒险岛收藏家
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『暴君回收』" + " : " + "[" + cm.getChar().getName() + "]成功回收飞侠暴君披风！)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 28) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1082546,1) ){
				cm.gainItem(1082546,-1);//冒险岛收藏家
				cm.gainItem(2040815,1);//冒险岛收藏家
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『暴君回收』" + " : " + "[" + cm.getChar().getName() + "]成功回收飞侠暴君手套！)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 29) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1072746,1) ){
				cm.gainItem(1072746,-1);//冒险岛收藏家
				cm.gainItem(2040713,1);//冒险岛收藏家
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『暴君回收』" + " : " + "[" + cm.getChar().getName() + "]成功回收飞侠暴君鞋子！)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 30) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1132177,1) ){
				cm.gainItem(1132177,-1);//冒险岛收藏家
				cm.gainItem(2041315,1);//冒险岛收藏家
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『暴君回收』" + " : " + "[" + cm.getChar().getName() + "]成功回收飞侠暴君腰带！)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 31) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1102483,1) ){
				cm.gainItem(1102483,-1);//冒险岛收藏家
				cm.gainItem(2041035,1);//冒险岛收藏家
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『暴君回收』" + " : " + "[" + cm.getChar().getName() + "]成功回收弓手暴君披风！)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 32) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1082545,1) ){
				cm.gainItem(1082545,-1);//冒险岛收藏家
				cm.gainItem(2040815,1);//冒险岛收藏家
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『暴君回收』" + " : " + "[" + cm.getChar().getName() + "]成功回收弓手暴君手套！)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 33) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1072745,1) ){
				cm.gainItem(1072745,-1);//冒险岛收藏家
				cm.gainItem(2040713,1);//冒险岛收藏家
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『暴君回收』" + " : " + "[" + cm.getChar().getName() + "]成功回收弓手暴君鞋子！)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 34) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1132176,1) ){
				cm.gainItem(1132176,-1);//冒险岛收藏家
				cm.gainItem(2041315,1);//冒险岛收藏家
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『暴君回收』" + " : " + "[" + cm.getChar().getName() + "]成功回收弓手暴君腰带！)"));
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
		}
 	
    }
}


