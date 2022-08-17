/* ==================
 脚本类型: NPC	    
 脚本作者：维多   
 联系方式：297870163
 =====================
 */

importPackage(java.util);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools);
importPackage(Packages.tools.packet);
var SSSR = Math.floor(Math.random() * 150);
var 概率 = Math.floor(Math.random()*100);
var 强化次数 = 1;
var 枫叶 = 2048716;
var 枫叶数量 = 1;
var 力量 = Math.floor(Math.random()*0);
var 敏捷 = Math.floor(Math.random()*0);
var 运气 = Math.floor(Math.random()*0);
var 智力 = Math.floor(Math.random()*0);
var 攻击 = Math.floor(Math.random()*8);
var 魔攻 = Math.floor(Math.random()*8);

function start() {

	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if ((mode == 0 && status == 2) || (mode == 0 && status == 13)) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("欢迎来到#r" + cm.getChannelServer().getServerName() + "#b涅槃火焰强化\r\n\r\n#k#r每次消耗#v2048716#x1 增加第一格装备最高150力量");	
		} else if (status == 1) {	
		   if(cm.getPlayer().getBossLog("qianghua") >= 9999){//判断bosslog记录
		    cm.sendOk("#e每天只能强化#r"+强化次数+"次#k哦!");		
			cm.dispose();
			} else if (cm.getInventory(1).getItem(1) == null) {
					cm.sendOk("请将要强化的装备放置第一格~");
					cm.dispose();
		
	  } else if(cm.getInventory(1).getItem(1).getExpiration() != -1) {
		    cm.sendOk("限时装备不能进行强化.");
			cm.dispose();
      } else if (cm.isCash(cm.getInventory(1).getItem(1).getItemId()) == true) {
					cm.sendOk("当前装备 #b#t" + cm.getInventory(1).getItem(1).getItemId() + "##k 属于#r点装类#k，无法强化。");
					cm.dispose();
	  }
		 else{
			cm.sendNext("你要强化的装备为:\r\n\r\n装备#v"+cm.getInventory(1).getItem(1).getItemId()+"#\r\n\r\n#r#e确定要强化吗?\r\n");
			} 
		} else if (status == 2) {
		if (!cm.haveItem(枫叶, 枫叶数量)) {
			cm.sendOk("#b你没有"+枫叶数量+"个#v"+枫叶+"#.");
		    cm.dispose();					
		} else {
			cm.getPlayer().setBossLog('qianghua');//给bosslog记录
			if (概率 <= -1) {
			cm.gainItem(枫叶,-枫叶数量);//扣除物品
			cm.ShowWZEffect("Effect/BasicEff.img/SkillBook/Failure/0"); //卷轴失败效果
			cm.sendOk("#b强化失败.");
			cm.playerMessage(5, "发出一道暗光，升级次数失败!");	 
		//	cm.全服公告(cm.getPlayer().getName() + "『装备强化』" + " : " + "使用随机强化失败,撒花庆贺！");
		    cm.dispose();
			} else {

		 cm.gainItem(枫叶,-枫叶数量);	//扣除物品
		 var statup = new java.util.ArrayList();
		 var itemId1 = cm.getInventory(1).getItem(1).getItemId();
		 var citem = cm.getInventory(1).getItem(1).copy();
		 var cii = MapleItemInformationProvider.getInstance();
		 var stype =  cii.getInventoryType(itemId1);
		          citem.setStr(citem.getStr() + SSSR);
				//	citem.setInt(citem.getInt() + SSSR);
				//	citem.setLuk(citem.getLuk() + SSSR);
			//		citem.setDex(citem.getDex() + SSSR);
			//		citem.setWatk(citem.getWatk() +SSSR);
			//		citem.setMatk(citem.getMatk() + SSSR);
		MapleInventoryManipulator.removeFromSlot(cm.getC(),stype,1,1, false);//背包第一个装备栏目第一个装备
		MapleInventoryManipulator.addFromDrop(cm.getC(), citem,false);//背包第一个装备栏目第一个装备
		cm.playerMessage(5, "发出一道闪光，在道具上添加了某种神秘的能力!");	 
		cm.全服公告(cm.getPlayer().getName() + "『火焰强化』" + " : " + "使用火焰成功强化装备 恭喜恭喜！");
		cm.ShowWZEffect("Effect/BasicEff.img/SkillBook/Success/0"); //成功效果
		cm.dispose();
		}
		}
	}
}}	
