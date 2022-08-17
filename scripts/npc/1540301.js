var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var status = -1;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {   
	if (mode == -1) {
		cm.dispose();
	}else {
        if (status >= 0 && mode == 0) {
		   cm.dispose();
		   return;                    
		}
		if (mode == 1) {
		   status++;
		}else {
		   status--;
		}
		if (status == 0) {
			weekday-=1;
			var text = "你好，#r#h ##k，#r周一至周日#k晚上的#b08:10至08:15#k\r\n举行挤猫奶活动，每挤一次即可获得#r10点#k点券~还有几率获得#b封印解除卷、魔方、防爆、祝福卷轴、极品勋章#k哦！";
  if(hour == 20 && (minute >= 10 && minute <= 15) && (weekday == 0 || weekday == 6 || weekday == 5 || weekday == 4 || weekday == 3 || weekday == 2 || weekday == 1)){// || cm.getPlayer().getName() == "管理员哈士奇"){
				var random = Math.floor(Math.random()*4000);
				if (random == 1258)
				{
					cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 额外获得【封印解除卷】一张。", 5120012);
					cm.worldSpouseMessage(0x23, "[猫奶活动] : 恭喜 【" + cm.getChar().getName() + "】 在挤猫奶的时候额外获得【封印解除卷】一张.");
					cm.gainItem(2610001, 1);
				} else if (random >= 1000 && random <= 1050) {
					var itemList = Array(5062000,5062002,5062500,5064000,2430481,2340000,2431893,2430112,2340000,2049100,1142500,1142501,1142502,1142503,1142504,4310030,4310036,1142505);
					var itemIdx = Math.floor(Math.random()*itemList.length);
					cm.worldSpouseMessage(0x15, "[猫奶活动] : 恭喜 【" + cm.getChar().getName() + "】 在挤猫奶的时候额外获得【"+cm.getItemName(itemList[itemIdx])+"】一个.");
					cm.gainItem(itemList[itemIdx], 1);
				}
				cm.gainNX(20);
				cm.dispose();
			} else {
				cm.sendOk(text);
				cm.dispose();
			}
		}
	}
}
