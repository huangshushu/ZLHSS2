/*
SnailMS脚本生成器
*/
var 重返次数 = 3;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.sendOk("对话结束语");
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		//在这里编写脚本第一步要做的事
		var text = "请选择你要重返的BOSS(#r每项每日可重返 " + 重返次数 + " 次#k)：\r\n\r\n";
		
		text += "#L1##b妖僧#k#l\t #L17##b暴力狮熊#k#l  #L2##b扎昆#k#l\t  #L3##b进阶扎昆#k#l\r\n\r\n";
		text += "#L4##b暗黑龙王#k#l #L5##b品客缤#k#l    #L6##b千年树精#k#l  #L7##b希纳斯#k#l  \r\n\r\n";
		text += "#L8##b血腥女王#k#l #L9##b混沌女王#k#l  #L10##b皮埃尔#k#l    #L11##b进阶皮埃尔#k#l\r\n\r\n";
		text += "#L12##b半半#k#l     #L13##b进阶半半#k#l  #L14##b贝伦#k#l      #L15##b进阶贝伦#k#l\r\n\r\n";
		text += "#L16##b麦格纳斯#k#l #L18##b闹钟#k#l #L19##b黑魔法师#k#l\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection == 1){
			//在这里编写选项1要做的事
			var map = cm.getMap(702060000);
			/* var em = cm.getEventManager("shaoling");
			if(em == null){
				cm.sendOk("妖僧事件已结束，地图里已不存在队友，无法重返！");
				cm.dispose();
				return;
			}
			var eim = em.getInstance("shaoling");
			if(eim == null){
				cm.sendOk("妖僧事件已结束，地图里已不存在队友，无法重返！");
				cm.dispose();
				return;
			} */
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("你没有该地图的重返权限！");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(702060000) <= 0){
				cm.sendOk("该地图中的BOSS已死亡，无法重返！");
				cm.dispose();
				return;
			}else if(map.获得剩余时钟时间() <= 0){
				cm.sendOk("该地图倒计时已结束，无法重返！");
				cm.dispose();
				return;
			}

			if(cm.getBossLog("妖僧重返") < 重返次数){
				cm.warp(702060000);
				var em = cm.getEventManager("shaoling");
				if(em != null){
					var eim = em.getInstance("shaoling");
					if(eim != null){
						eim.registerPlayer(cm.getPlayer());
						eim.restartEventTimer(eim.getTimeLeft());
					}
				}

				map.给时钟(map.获得剩余时钟时间()/60/1000, true, true);
				

				cm.setBossLog("妖僧重返");
			}else{
				cm.sendOk("你的该项每日重返次数已达到 #r" + 重返次数 + "#k 次，无法重返！");
				cm.dispose();
				return;
			}
		}else if (selection == 2) {
			//在这里编写选项2要做的事
			var map = cm.getMap(280030000);
			/* var em = cm.getEventManager("ZakumBattle");
			if(em == null){
				cm.sendOk("扎昆事件已结束，地图里已不存在队友，无法重返！");
				cm.dispose();
				return;
			}
			var eim = em.getInstance("ZakumBattle");
			if(eim == null){
				cm.sendOk("扎昆事件已结束，地图里已不存在队友，无法重返！");
				cm.dispose();
				return;
			} */
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("你没有该地图的重返权限！");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(280030000) <= 0){
				cm.sendOk("该地图中的BOSS已死亡，无法重返！");
				cm.dispose();
				return;
			}else if(map.获得剩余时钟时间() <= 0){
				cm.sendOk("该地图倒计时已结束，无法重返！");
				cm.dispose();
				return;
			}

			if(cm.getBossLog("扎昆重返") < 重返次数){
				cm.warp(280030000);
				var em = cm.getEventManager("ZakumBattle");
				if(em != null){
					var eim = em.getInstance("ZakumBattle");
					if(eim != null){
						eim.registerPlayer(cm.getPlayer());
						eim.restartEventTimer(eim.getTimeLeft());
					}
				}
				
				map.给时钟(map.获得剩余时钟时间()/60/1000, true, true);
				cm.setBossLog("扎昆重返");
			}else{
				cm.sendOk("你的该项每日重返次数已达到 #r" + 重返次数 + "#k 次，无法重返！");
				cm.dispose();
				return;
			}
		} else if (selection == 3) {
			//在这里编写选项2要做的事
			var map = cm.getMap(280030002);
			/* var em = cm.getEventManager("ChaosZakum");
			if(em == null){
				cm.sendOk("进阶扎昆事件已结束，地图里已不存在队友，无法重返！");
				cm.dispose();
				return;
			}
			var eim = em.getInstance("ChaosZakum");
			if(eim == null){
				cm.sendOk("进阶扎昆事件已结束，地图里已不存在队友，无法重返！");
				cm.dispose();
				return;
			} */
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("你没有该地图的重返权限！");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(280030002) <= 0){
				cm.sendOk("该地图中的BOSS已死亡，无法重返！");
				cm.dispose();
				return;
			}else if(map.获得剩余时钟时间() <= 0){
				cm.sendOk("该地图倒计时已结束，无法重返！");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("进阶扎昆重返") < 重返次数){
				cm.warp(280030002);
				var em = cm.getEventManager("ChaosZakum");
				if(em != null){
					var eim = em.getInstance("ChaosZakum");
					if(eim != null){
						eim.registerPlayer(cm.getPlayer());
						eim.restartEventTimer(eim.getTimeLeft());
					}
				}
				map.给时钟(map.获得剩余时钟时间()/60/1000, true, true);
				cm.setBossLog("进阶扎昆重返");
			}else{
				cm.sendOk("你的该项每日重返次数已达到 #r" + 重返次数 + "#k 次，无法重返！");
				cm.dispose();
				return;
			}
		} else if (selection == 4) {
			//在这里编写选项2要做的事
			var map = cm.getMap(240060200);
			/* var em = cm.getEventManager("DragonBattle");
			if(em == null){
				cm.sendOk("暗黑龙王事件已结束，地图里已不存在队友，无法重返！");
				cm.dispose();
				return;
			}
			var eim = em.getInstance("DragonBattle");
			if(eim == null){
				cm.sendOk("暗黑龙王事件已结束，地图里已不存在队友，无法重返！");
				cm.dispose();
				return;
			} */
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("你没有该地图的重返权限！");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(240060200) <= 0){
				cm.sendOk("该地图中的BOSS已死亡，无法重返！");
				cm.dispose();
				return;
			}else if(map.获得剩余时钟时间() <= 0){
				cm.sendOk("该地图倒计时已结束，无法重返！");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("黑龙重返") < 重返次数){
				cm.warp(240060200);
				var em = cm.getEventManager("DragonBattle");
				if(em != null){
					var eim = em.getInstance("DragonBattle");
					if(eim != null){
						eim.registerPlayer(cm.getPlayer());
						eim.restartEventTimer(eim.getTimeLeft());
					}
				}
				map.给时钟(map.获得剩余时钟时间()/60/1000, true, true);
				
				cm.setBossLog("黑龙重返");
			}else{
				cm.sendOk("你的该项每日重返次数已达到 #r" + 重返次数 + "#k 次，无法重返！");
				cm.dispose();
				return;
			}
		} else if (selection == 5) {
			//在这里编写选项2要做的事
			var map = cm.getMap(270050100);
			/* var em = cm.getEventManager("PinkBeanBattle");
			if(em == null){
				cm.sendOk("品客缤事件已结束，地图里已不存在队友，无法重返！");
				cm.dispose();
				return;
			}
			var eim = em.getInstance("PinkBeanBattle");
			if(eim == null){
				cm.sendOk("品客缤事件已结束，地图里已不存在队友，无法重返！");
				cm.dispose();
				return;
			} */
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("你没有该地图的重返权限！");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(270050100) <= 0){
				cm.sendOk("该地图中的BOSS已死亡，无法重返！");
				cm.dispose();
				return;
			}else if(map.获得剩余时钟时间() <= 0){
				cm.sendOk("该地图倒计时已结束，无法重返！");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("PB重返") < 重返次数){
				cm.warp(270050100);
				var em = cm.getEventManager("PinkBeanBattle");
				if(em != null){
					var eim = em.getInstance("PinkBeanBattle");
					if(eim != null){
						eim.registerPlayer(cm.getPlayer());
						eim.restartEventTimer(eim.getTimeLeft());
					}
				}
				map.给时钟(map.获得剩余时钟时间()/60/1000, true, true);
				
				cm.setBossLog("PB重返");
			}else{
				cm.sendOk("你的该项每日重返次数已达到 #r" + 重返次数 + "#k 次，无法重返！");
				cm.dispose();
				return;
			}
		} else if (selection == 6) {
			//在这里编写选项2要做的事
			var map = cm.getMap(541020800);
			
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("你没有该地图的重返权限！");
				cm.dispose();
				return;
			}else if(!map.haveMonster(9420521) && !map.haveMonster(9420522)){
				cm.sendOk("该地图中的BOSS已死亡，无法重返！");
				cm.dispose();
				return;
			}else if(map.获得剩余时钟时间() <= 0){
				cm.sendOk("该地图倒计时已结束，无法重返！");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("千年树精重返") < 重返次数){
				cm.warp(541020800);
				map.给时钟(map.获得剩余时钟时间()/60/1000, true, true);
				
				cm.setBossLog("千年树精重返");
			}else{
				cm.sendOk("你的该项每日重返次数已达到 #r" + 重返次数 + "#k 次，无法重返！");
				cm.dispose();
				return;
			}
		} else if (selection == 7) {
			//在这里编写选项2要做的事
			var map = cm.getMap(271040100);
			
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("你没有该地图的重返权限！");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(271040100) <= 0){
				cm.sendOk("该地图中的BOSS已死亡，无法重返！");
				cm.dispose();
				return;
			}else if(map.获得剩余时钟时间() <= 0){
				cm.sendOk("该地图倒计时已结束，无法重返！");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("希纳斯重返") < 重返次数){
				cm.warp(271040100);
				map.给时钟(map.获得剩余时钟时间()/60/1000, true, true);
				
				cm.setBossLog("希纳斯重返");
			}else{
				cm.sendOk("你的该项每日重返次数已达到 #r" + 重返次数 + "#k 次，无法重返！");
				cm.dispose();
				return;
			}
		} else if (selection == 8) {
			//在这里编写选项2要做的事
			var map = cm.getMap(105200310);
			
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("你没有该地图的重返权限！");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(105200310) <= 0){
				cm.sendOk("该地图中的BOSS已死亡，无法重返！");
				cm.dispose();
				return;
			}else if(map.获得剩余时钟时间() <= 0){
				cm.sendOk("该地图倒计时已结束，无法重返！");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("血腥女王重返") < 重返次数){
				cm.warp(105200310);
				map.给时钟(map.获得剩余时钟时间()/60/1000, true, true);
				
				cm.setBossLog("血腥女王重返");
			}else{
				cm.sendOk("你的该项每日重返次数已达到 #r" + 重返次数 + "#k 次，无法重返！");
				cm.dispose();
				return;
			}
		} else if (selection == 9) {
			//在这里编写选项2要做的事
			var map = cm.getMap(105200710);
			
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("你没有该地图的重返权限！");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(105200710) <= 0){
				cm.sendOk("该地图中的BOSS已死亡，无法重返！");
				cm.dispose();
				return;
			}else if(map.获得剩余时钟时间() <= 0){
				cm.sendOk("该地图倒计时已结束，无法重返！");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("混沌血腥女王重返") < 重返次数){
				cm.warp(105200710);
				map.给时钟(map.获得剩余时钟时间()/60/1000, true, true);
				
				cm.setBossLog("混沌血腥女王重返");
			}else{
				cm.sendOk("你的该项每日重返次数已达到 #r" + 重返次数 + "#k 次，无法重返！");
				cm.dispose();
				return;
			}
		} else if (selection == 10) {
			//在这里编写选项2要做的事
			var map = cm.getMap(105200210);
			
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("你没有该地图的重返权限！");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(105200210) <= 0){
				cm.sendOk("该地图中的BOSS已死亡，无法重返！");
				cm.dispose();
				return;
			}else if(map.获得剩余时钟时间() <= 0){
				cm.sendOk("该地图倒计时已结束，无法重返！");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("皮埃尔重返") < 重返次数){
				cm.warp(105200210);
				map.给时钟(map.获得剩余时钟时间()/60/1000, true, true);
				
				cm.setBossLog("皮埃尔重返");
			}else{
				cm.sendOk("你的该项每日重返次数已达到 #r" + 重返次数 + "#k 次，无法重返！");
				cm.dispose();
				return;
			}
		} else if (selection == 11) {
			//在这里编写选项2要做的事
			var map = cm.getMap(105200610);
			
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("你没有该地图的重返权限！");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(105200610) <= 0){
				cm.sendOk("该地图中的BOSS已死亡，无法重返！");
				cm.dispose();
				return;
			}else if(map.获得剩余时钟时间() <= 0){
				cm.sendOk("该地图倒计时已结束，无法重返！");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("进阶皮埃尔重返") < 重返次数){
				cm.warp(105200610);
				map.给时钟(map.获得剩余时钟时间()/60/1000, true, true);
				
				cm.setBossLog("进阶皮埃尔重返");
			}else{
				cm.sendOk("你的该项每日重返次数已达到 #r" + 重返次数 + "#k 次，无法重返！");
				cm.dispose();
				return;
			}
		} else if (selection == 12) {
			//在这里编写选项2要做的事
			var map = cm.getMap(105200110);
			
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("你没有该地图的重返权限！");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(105200110) <= 0){
				cm.sendOk("该地图中的BOSS已死亡，无法重返！");
				cm.dispose();
				return;
			}else if(map.获得剩余时钟时间() <= 0){
				cm.sendOk("该地图倒计时已结束，无法重返！");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("半半重返") < 重返次数){
				cm.warp(105200110);
				map.给时钟(map.获得剩余时钟时间()/60/1000, true, true);
				
				cm.setBossLog("半半重返");
			}else{
				cm.sendOk("你的该项每日重返次数已达到 #r" + 重返次数 + "#k 次，无法重返！");
				cm.dispose();
				return;
			}
		} else if (selection == 13) {
			//在这里编写选项2要做的事
			var map = cm.getMap(105200510);
			
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("你没有该地图的重返权限！");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(105200510) <= 0){
				cm.sendOk("该地图中的BOSS已死亡，无法重返！");
				cm.dispose();
				return;
			}else if(map.获得剩余时钟时间() <= 0){
				cm.sendOk("该地图倒计时已结束，无法重返！");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("进阶半半重返") < 重返次数){
				cm.warp(105200510);
				map.给时钟(map.获得剩余时钟时间()/60/1000, true, true);
				
				cm.setBossLog("进阶半半重返");
			}else{
				cm.sendOk("你的该项每日重返次数已达到 #r" + 重返次数 + "#k 次，无法重返！");
				cm.dispose();
				return;
			}
		} else if (selection == 14) {
			//在这里编写选项2要做的事
			var map = cm.getMap(105200410);
			
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("你没有该地图的重返权限！");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(105200410) <= 0){
				cm.sendOk("该地图中的BOSS已死亡，无法重返！");
				cm.dispose();
				return;
			}else if(map.获得剩余时钟时间() <= 0){
				cm.sendOk("该地图倒计时已结束，无法重返！");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("贝伦重返") < 重返次数){
				cm.warp(105200410);
				map.给时钟(map.获得剩余时钟时间()/60/1000, true, true);
				
				cm.setBossLog("贝伦重返");
			}else{
				cm.sendOk("你的该项每日重返次数已达到 #r" + 重返次数 + "#k 次，无法重返！");
				cm.dispose();
				return;
			}
		} else if (selection == 15) {
			//在这里编写选项2要做的事
			var map = cm.getMap(105200810);
			
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("你没有该地图的重返权限！");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(105200810) <= 0){
				cm.sendOk("该地图中的BOSS已死亡，无法重返！");
				cm.dispose();
				return;
			}else if(map.获得剩余时钟时间() <= 0){
				cm.sendOk("该地图倒计时已结束，无法重返！");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("进阶贝伦重返") < 重返次数){
				cm.warp(105200810);
				map.给时钟(map.获得剩余时钟时间()/60/1000, true, true);
				
				cm.setBossLog("进阶贝伦重返");
			}else{
				cm.sendOk("你的该项每日重返次数已达到 #r" + 重返次数 + "#k 次，无法重返！");
				cm.dispose();
				return;
			}
		} else if (selection == 16) {
			//在这里编写选项2要做的事
			var map = cm.getMap(401060300);
			
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("你没有该地图的重返权限！");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(401060300) <= 0){
				cm.sendOk("该地图中的BOSS已死亡，无法重返！");
				cm.dispose();
				return;
			}else if(map.获得剩余时钟时间() <= 0){
				cm.sendOk("该地图倒计时已结束，无法重返！");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("麦格纳斯重返") < 重返次数){
				cm.warp(401060300);
				map.给时钟(map.获得剩余时钟时间()/60/1000, true, true);
				
				cm.setBossLog("麦格纳斯重返");
			}else{
				cm.sendOk("你的该项每日重返次数已达到 #r" + 重返次数 + "#k 次，无法重返！");
				cm.dispose();
				return;
			}
		} else if (selection == 17) {
			//在这里编写选项2要做的事
			var map = cm.getMap(551030200);
			
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("你没有该地图的重返权限！");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(551030200) <= 0){
				cm.sendOk("该地图中的BOSS已死亡，无法重返！");
				cm.dispose();
				return;
			}else if(map.获得剩余时钟时间() <= 0){
				cm.sendOk("该地图倒计时已结束，无法重返！");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("暴力狮熊重返") < 重返次数){
				cm.warp(551030200);
				map.给时钟(map.获得剩余时钟时间()/60/1000, true, true);
				
				cm.setBossLog("暴力狮熊重返");
			}else{
				cm.sendOk("你的该项每日重返次数已达到 #r" + 重返次数 + "#k 次，无法重返！");
				cm.dispose();
				return;
			}
		} else if (selection == 18) {
			//在这里编写选项2要做的事
			var map = cm.getMap(220080001);
			
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("你没有该地图的重返权限！");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(220080001) <= 0){
				cm.sendOk("该地图中的BOSS已死亡，无法重返！");
				cm.dispose();
				return;
			}else if(map.获得剩余时钟时间() <= 0){
				cm.sendOk("该地图倒计时已结束，无法重返！");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("闹钟重返") < 重返次数){
				cm.warp(220080001);
				map.给时钟(map.获得剩余时钟时间()/60/1000, true, true);
				
				cm.setBossLog("闹钟重返");
			}else{
				cm.sendOk("你的该项每日重返次数已达到 #r" + 重返次数 + "#k 次，无法重返！");
				cm.dispose();
				return;
			}
		} else if (selection == 19) {
			//在这里编写选项2要做的事
			var map1 = cm.getMap(450013100);
			var map2 = cm.getMap(450013300);
			var map3 = cm.getMap(450013500);
			var map4 = cm.getMap(450013700);
			/* var em = cm.getEventManager("ZakumBattle");
			if(em == null){
				cm.sendOk("扎昆事件已结束，地图里已不存在队友，无法重返！");
				cm.dispose();
				return;
			}
			var eim = em.getInstance("ZakumBattle");
			if(eim == null){
				cm.sendOk("扎昆事件已结束，地图里已不存在队友，无法重返！");
				cm.dispose();
				return;
			} */
			if(!map1.isOwner(cm.getPlayer().getId()) && !map2.isOwner(cm.getPlayer().getId()) && !map3.isOwner(cm.getPlayer().getId()) && !map4.isOwner(cm.getPlayer().getId())){
				cm.sendOk("你没有该地图的重返权限！");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(450013100) <= 0 && cm.getMonsterCount(450013300) <= 0 && cm.getMonsterCount(450013500) <= 0 && cm.getMonsterCount(450013700) <= 0){
				cm.sendOk("该地图中的BOSS已死亡，无法重返！");
				cm.dispose();
				return;
			}else if(map1.获得剩余时钟时间() <= 0 && map2.获得剩余时钟时间() <= 0 && map3.获得剩余时钟时间() <= 0 && map4.获得剩余时钟时间() <= 0){
				cm.sendOk("该地图倒计时已结束，无法重返！");
				cm.dispose();
				return;
			}

			if(cm.getBossLog("黑魔法师重返") < 重返次数){
				var em = cm.getEventManager("BlackMageBattle");
				var eim;
				if(em != null){
					eim = em.getInstance("BlackMageBattle");
				}
				 
				if(em != null && eim != null){
					cm.playerMessage(6, "事件存在");//测试
					eim.registerPlayer(cm.getPlayer());
					eim.restartEventTimer(eim.getTimeLeft());
					if(em.getProperty("stage").equals("1")){
						cm.playerMessage(6, "map1 ");//测试
						Packages.java.lang.Thread.sleep(500);
						cm.warp(450013100);
						map1.给时钟(map1.获得剩余时钟时间()/60/1000, true, true);
					}else if(em.getProperty("stage").equals("2")){
						cm.playerMessage(6, "map2 ");//测试
						Packages.java.lang.Thread.sleep(500);
						cm.warp(450013300);
						map2.给时钟(map2.获得剩余时钟时间()/60/1000, true, true);
					}else if(em.getProperty("stage").equals("3")){
						cm.playerMessage(6, "map3 ");//测试
						Packages.java.lang.Thread.sleep(500);
						cm.warp(450013500);
						map3.给时钟(map3.获得剩余时钟时间()/60/1000, true, true);
					}else if(em.getProperty("stage").equals("4")){
						cm.playerMessage(6, "map4 ");//测试
						Packages.java.lang.Thread.sleep(500);
						cm.warp(450013700);
						map4.给时钟(map4.获得剩余时钟时间()/60/1000, true, true);
					}
					
					cm.setBossLog("黑魔法师重返");
				}else{
					cm.playerMessage(6, "事件不存在");//测试
					//cm.warp(450012500);
					//Packages.java.lang.Thread.sleep(500);
					cm.registerSquad("blackmage", 5, " 已被任命为团长。如果你想加入请在时间段内开启远征队.");
					if (cm.getSquad("blackmage") != null) {
						var em = cm.getEventManager("BlackMageBattle");
						em.setProperty("leader", "true");
						var eim = em.newInstance("BlackMageBattle");
						
						var map = eim.setInstanceMap(450013100);
						map = eim.setInstanceMap(450013300);
						map = eim.setInstanceMap(450013500);
						map = eim.setInstanceMap(450013700);
						em.setProperty("state", "1");
						eim.registerSquad(cm.getSquad("blackmage"), cm.getMap(), 160102);
						Packages.java.lang.Thread.sleep(500);
                        if(cm.getMonsterCount(450013100) > 0){
							em.setProperty("stage", "1");
							var mobList = map1.getAllMonstersThreadsafe();
							cm.playerMessage(6, "mobList = " + mobList.size());//测试
							if(mobList != null){
								for(var i in mobList){
									eim.registerMonster(mobList[i]);
									cm.playerMessage(6, "i = " + i);//测试
								}
							}
							cm.warp(450013100);
							map1.给时钟(map1.获得剩余时钟时间()/60/1000, true, true);
							eim.startEventTimer(map1.获得剩余时钟时间());
						}else if(cm.getMonsterCount(450013300) > 0){
							em.setProperty("stage", "2");
							var mobList = map2.getAllMonstersThreadsafe();
							if(mobList != null){
								for(var i in mobList){
									eim.registerMonster(mobList[i]);
									cm.playerMessage(6, "i = " + i);//测试
								}
							}
							cm.warp(450013300);
							map2.给时钟(map2.获得剩余时钟时间()/60/1000, true, true);
							eim.startEventTimer(map2.获得剩余时钟时间());
						}else if(cm.getMonsterCount(450013500) > 0){
							em.setProperty("stage", "3");
							var mobList = map3.getAllMonstersThreadsafe();
							if(mobList != null){
								for(var i in mobList){
									eim.registerMonster(mobList[i]);
									cm.playerMessage(6, "i = " + i);//测试
								}
							}
							cm.warp(450013500);
							map3.给时钟(map3.获得剩余时钟时间()/60/1000, true, true);
							eim.startEventTimer(map3.获得剩余时钟时间());
						}else if(cm.getMonsterCount(450013700) > 0){
							em.setProperty("stage", "4");
							var mobList = map4.getAllMonstersThreadsafe();
							if(mobList != null){
								for(var i in mobList){
									eim.registerMonster(mobList[i]);
									cm.playerMessage(6, "i = " + i);//测试
								}
							}
							cm.warp(450013700);
							map4.给时钟(map4.获得剩余时钟时间()/60/1000, true, true);
							eim.startEventTimer(map4.获得剩余时钟时间());
						}
					}
					cm.setBossLog("黑魔法师重返");
				}

				
			}else{
				cm.sendOk("你的该项每日重返次数已达到 #r" + 重返次数 + "#k 次，无法重返！");
				cm.dispose();
				return;
			}
		} 

		
	} else {
		cm.dispose();
		return;
	}
}

