importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
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
            text += "          #e#r#v4001244#这里是女生认证奖品领取处#v4001244#\r\n"
			text += "#b#e认证要求：#k #e私信管理 提供真实照片 + 语言认证 \r\n#r             (如发现假冒者封号处理)\r\n#k"
			text += "#l\r\n#e#b奖品内容：#k #d#v5200002# #v5150040# #v1142574# #v5072000# #v1402014# #v3010131##k\r\n"//3
            text += "#L1##r#v4031539#领取认证奖品#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
             if(cm.haveItem(4031539,1)){
		cm.gainItem(4031539, -1);
	    cm.gainItem(5150040, 2);
		cm.gainItem(5072000, 3);
		cm.gainItem(3010131, 1);		
		cm.gainItem(1402014, 1, 1);
        cm.gainMeso(500000);
		 cm.getPlayer().modifyCSPoints(1, +2000, true);//给点券
		var ii = MapleItemInformationProvider.getInstance();		                
		var type = ii.getInventoryType(1142574); //获得装备的类形
		var toDrop = ii.randomizeStats(ii.getEquipById(1142574)).copy(); // 生成一个Equip类
		//toDrop. setFlag(1);//上锁不能与时间一起，否则会BUG不消失//上锁
		toDrop. setStr(4);//给力量
		toDrop. setDex(4);//给敏捷 
		toDrop. setInt(4);//给智力
		toDrop. setLuk(4);//给运气
		toDrop. setHp(50);//HP
        toDrop. setMp(50);//MP
		toDrop. setWatk(1);//攻击力    
		toDrop. setMatk(1);//魔法力
		toDrop. setAvoid(40);//回避力
		toDrop. setAcc(10);//
		//toDrop. setHands(5);//手技
	    toDrop. setSpeed(5);//速度	
	    toDrop. setJump(5);//跳跃		
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中

            cm.sendOk("恭喜漂亮妹子兑换成功!");
			cm.全服黄色喇叭( "恭喜[" + cm.getPlayer().getName() + "] 通过了女生认证，哇!又一位萌萌哒的妹子,从天而降啦!");
            cm.dispose();
			}else{
            cm.sendOk(" 你没有认证,请去找管理进行女生认证");
            cm.dispose();
			}
		}
    }
}



