/* ==================
脚本类型: NPC	    
脚本作者：久久    
联系方式：121418194
=====================
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
		if(cm.getPlayer().getParty() == null || !cm.isLeader()){
			cm.sendOk("请组队后让队长来找我！");
			cm.dispose();
			return;
		}
		if(!cm.getPlayerCount(674030200) <= 0){
			cm.sendOk("里面有人了！");
			cm.dispose();
			return;
		}
		cm.sendNext("你好，这里是噩梦人机，噢不，是怪物公园！目前测试阶段免费开放！\r\n请点击下一步进入怪物公园之无尽挑战！");
	}else if (status == 1){
		var em = cm.getEventManager("MobBattle");
			cm.getMap(674030200).resetFully();
			cm.warpParty(674030200);
		if (cm.getPlayer().getMapId()==674030200){
			em.startInstance(cm.getParty(), cm.getPlayer().getMap());
			cm.playerMessage(5, "[怪物公园] 当前为第1轮怪物");
		}else{
			cm.sendOk("配置文件出错，请联系管理员解决！");
		}
        cm.dispose();
    }
}


