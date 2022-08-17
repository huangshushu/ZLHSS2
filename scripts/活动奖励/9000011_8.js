/*
 ZEVMS冒险岛(079)游戏服务端
 武陵塔塔通关奖励
 可以根据通缉的怪物所在的地图，分别设置
 */
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
function action() {
	if (cm.判断每日("武陵塔奖励领取")<=0) {
		var 等级 = cm.getPlayer().getLevel();
		if(等级>=150){
			cm.给物品(4006000,50);
			cm.给物品(4006001,50);
			cm.给物品(4032226,5)
		}
		cm.给点券(10*1000);
		cm.给金币(100*1000);
		cm.给经验(100*0000);
		cm.给人气(10);
		cm.给个人每日("武陵塔奖励领取");
	}
	if(cm.任务结束时间2(1) > Date.now()){
		cm.setBossRankCount9("自由币",3);
		cm.getPlayer().dropMessage(5,"自由币 + 3");
		cm.setBossLog("极限挑战1");
	}
    cm.对话结束();
}