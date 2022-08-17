status = -1;
var event;
var ca = java.util.Calendar.getInstance();
function start() {
	/*if (ca.get(java.util.Calendar.HOUR_OF_DAY) != 21) {
		cm.sendOk("每晚 9 点开启活动。");
		cm.dispose();
	}else{*/
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    event = cm.getEventManager("Gailou"); //获取活动脚本的名称 test 对应 event 目录里面的 gailou.js 文件
    if (status == 0) {
        if (event == null) {
            cm.sendOk("活动脚本错误...请联系管理员修复！或重新打开。");
            cm.dispose();
        } else if (cm.getPlayer().getClient().getChannel() != 1) {
            cm.sendOk("活动只能在1频道进行！亲！");
	    cm.dispose();
        } else if (event != null && event.getProperty("state").equals("true")) {
            cm.sendYesNo("亲爱的#r#h ##k您好，我是盖楼活动员，本次活动时间为10分钟.\r\n#r#e那就看你运气啦 开始吧？");
        } else {
			var text = "#e#k活动还未开启或者活动已经结束，活动结束后奖励会立即发放   #b活动时间:每晚9点的0-10分钟\r\n#d请关注我们盖楼活动，多多参加。\r\n最快的前10名玩家可获得奖励\r\n"
			text +="在抢楼活动中获得第一名 核心宝石 * 6 | 高级装备强化卷轴 * 20 | 海盗王的金币 * 2 | 星星 * 700\r\n\r\n"
			text +="在抢楼活动中获得第二名 核心宝石 * 5 | 高级装备强化卷轴 * 25 | 定居金500万金币 * 3 | 星星 * 550\r\n\r\n"
			text +="在抢楼活动中获得第三名 核心宝石 * 5 | 高级装备强化卷轴 * 25 | 定居金500万金币 * 3 | 星星 * 550\r\n\r\n"
			text +="在抢楼活动中获得第四名 核心宝石 * 5 | 高级装备强化卷轴 * 20 | 定居金500万金币 * 2 | 星星 * 550\r\n\r\n"
			text +="在抢楼活动中获得第五名 核心宝石 * 5 | 高级装备强化卷轴 * 20 | 定居金500万金币 * 2 | 星星 * 450\r\n\r\n"
			text +="在抢楼活动中获得第六名 核心宝石 * 4 | 高级装备强化卷轴 * 10 | 定居金500万金币 * 2 | 星星 * 450\r\n\r\n"
			text +="在抢楼活动中获得第七名 核心宝石 * 4 | 高级装备强化卷轴 * 10 | 定居金500万金币 * 1 | 星星 * 450\r\n\r\n"
			text +="在抢楼活动中获得第八名 核心宝石 * 3 | 高级装备强化卷轴 * 14 | 定居金100万金币 * 3 | 星星 * 360\r\n\r\n"
			text +="在抢楼活动中获得第九名 核心宝石 * 3 | 高级装备强化卷轴 * 14 | 定居金100万金币 * 3 | 星星 * 360\r\n\r\n"
			text +="在抢楼活动中获得第十名 核心宝石 * 2 | 高级装备强化卷轴 * 10 | 定居金100万金币 * 2 | 星星 * 360\r\n\r\n"
            cm.sendOk(text);
            cm.dispose();
        }
    } else if (status == 1) {
        if (event != null && event.getProperty("state").equals("true")) {
            event.setProperty("check", "" + (parseInt(event.getProperty("check")) + 1)); //设置点击次数+1
            var count = parseInt(event.getProperty("check")); //获得总点击次数
            var max = parseInt(event.getProperty("maxCheck"));
            if (count == max) {
		cm.gainItem(2436324, 12);//核心宝石
		cm.gainItem(2049323, 35);//高级装备强化卷轴
		cm.gainItem(4001551, 2);//海盗王的金币
		cm.gainItem(4001839, 700);//星星
                cm.worldMessage("[抢楼活动]： 恭喜玩家 " + cm.getName() + " 在抢楼活动中获得第一名 核心宝石 * 12 | 高级装备强化卷轴 * 35 | 海盗王的金币 * 2 | 星星 * 700");
                cm.sendOk("恭喜你在抢楼活动中获得第一名 核心宝石 * 12 | 高级装备强化卷轴 * 35 | 海盗王的金币 * 2 | 星星 * 700");
            } else if (count == (max + 1)) {//第二名
		cm.gainItem(2436324, 5);//核心宝石
		cm.gainItem(2049323, 25);//高级装备强化卷轴
		cm.gainItem(4001085, 3);//定居金500万金币
		cm.gainItem(4001839, 550);//星星
                cm.worldMessage("[抢楼活动]： 恭喜玩家 " + cm.getName() + " 在抢楼活动中获得第二名 核心宝石 * 5 | 高级装备强化卷轴 * 25 | 定居金500万金币 * 3 | 星星 * 550");
                cm.sendOk("恭喜你在抢楼活动中获得第二名 核心宝石 * 5 | 高级装备强化卷轴 * 25 | 定居金500万金币 * 3 | 星星 * 550");
            } else if (count == (max + 2)) {// 第三名
		cm.gainItem(2436324, 5);//核心宝石
		cm.gainItem(2049323, 20);//高级装备强化卷轴
		cm.gainItem(4001085, 3);//定居金500万金币
		cm.gainItem(4001839, 550);//星星
                cm.worldMessage("[抢楼活动]： 恭喜玩家 " + cm.getName() + " 在抢楼活动中获得第三名 核心宝石 * 5 | 高级装备强化卷轴 * 20 | 定居金500万金币 * 3 | 星星 * 550");
                cm.sendOk("恭喜你在抢楼活动中获得第三名 核心宝石 * 5 | 高级装备强化卷轴 * 20 | 定居金500万金币 * 3 | 星星 * 550");
            } else if (count > (max + 3)) {//第四名
		cm.gainItem(2436324, 4);//核心宝石
		cm.gainItem(2049323, 20);//高级装备强化卷轴
		cm.gainItem(4001085, 2);//定居金500万金币
		cm.gainItem(4001839, 550);//星星
                cm.worldMessage("[抢楼活动]： 恭喜玩家 " + cm.getName() + " 在抢楼活动中获得第四名 核心宝石 * 4 | 高级装备强化卷轴 * 20 | 定居金500万金币 * 2 | 星星 * 550");
                cm.sendOk("恭喜你在抢楼活动中获得第四名 核心宝石 * 4 | 高级装备强化卷轴 * 20 | 定居金500万金币 * 2 | 星星 * 550");
		} else if (count > (max + 4)) {//第五名
		cm.gainItem(2436324, 4);//核心宝石
		cm.gainItem(2049323, 20);//高级装备强化卷轴
		cm.gainItem(4001085, 2);//定居金500万金币
		cm.gainItem(4001839, 450);//星星
                cm.worldMessage("[抢楼活动]： 恭喜玩家 " + cm.getName() + " 在抢楼活动中获得第五名 核心宝石 * 4 | 高级装备强化卷轴 * 20 | 定居金500万金币 * 2 | 星星 * 450");
                cm.sendOk("恭喜你在抢楼活动中获得第五名 核心宝石 * 4 | 高级装备强化卷轴 * 20 | 定居金500万金币 * 2 | 星星 * 450");
		} else if (count > (max + 5)) {//第六名
		cm.gainItem(2436324, 4);//核心宝石
		cm.gainItem(2049323, 17);//高级装备强化卷轴
		cm.gainItem(4001085, 2);//定居金500万金币
		cm.gainItem(4001839, 450);//星星
                cm.worldMessage("[抢楼活动]： 恭喜玩家 " + cm.getName() + " 在抢楼活动中获得第六名 核心宝石 * 4 | 高级装备强化卷轴 * 17 | 定居金500万金币 * 2 | 星星 * 450");
                cm.sendOk("恭喜你在抢楼活动中获得第六名 核心宝石 * 4 | 高级装备强化卷轴 * 17 | 定居金500万金币 * 2 | 星星 * 450");
		} else if (count > (max + 6)) {//第七名
		cm.gainItem(2436324, 4);//核心宝石
		cm.gainItem(2049323, 17);//高级装备强化卷轴
		cm.gainItem(4001085, 1);//定居金500万金币
		cm.gainItem(4001839, 360);//星星
                cm.worldMessage("[抢楼活动]： 恭喜玩家 " + cm.getName() + " 在抢楼活动中获得第七名 核心宝石 * 4 | 高级装备强化卷轴 * 17 | 定居金500万金币 * 1 | 星星 * 360");
                cm.sendOk("恭喜你在抢楼活动中获得第七名 核心宝石 * 4 | 高级装备强化卷轴 * 17 | 定居金500万金币 * 1 | 星星 * 360");
				} else if (count > (max + 7)) {//第八名
		cm.gainItem(2436324, 3);//核心宝石
		cm.gainItem(2049323, 17);//高级装备强化卷轴
		cm.gainItem(4001014, 3);//定居金100万金钱
		cm.gainItem(4001839, 360);//星星
                cm.worldMessage("[抢楼活动]： 恭喜玩家 " + cm.getName() + " 在抢楼活动中获得第八名 核心宝石 * 3 | 高级装备强化卷轴 * 17 | 定居金100万金币 * 3 | 星星 * 360");
                cm.sendOk("恭喜你在抢楼活动中获得第八名 核心宝石 * 3 | 高级装备强化卷轴 * 17 | 定居金100万金币 * 3 | 星星 * 360");
				} else if (count > (max + 8)) {//第九名
		cm.gainItem(2436324, 3);//核心宝石
		cm.gainItem(2049323, 14);//高级装备强化卷轴
		cm.gainItem(4001014, 3);//定居金100万金钱
		cm.gainItem(4001839, 360);//星星
                cm.worldMessage("[抢楼活动]： 恭喜玩家 " + cm.getName() + " 在抢楼活动中获得第九名 核心宝石 * 3 | 高级装备强化卷轴 * 14 | 定居金100万金币 * 3 | 星星 * 360");
                cm.sendOk("恭喜你在抢楼活动中获得第九名 核心宝石 * 3 | 高级装备强化卷轴 * 14 | 定居金100万金币 * 3 | 星星 * 360");
				} else if (count > (max + 9)) {//第十名
		cm.gainItem(2436324, 3);//核心宝石
		cm.gainItem(2049323, 14);//高级装备强化卷轴
		cm.gainItem(4001014, 2);//定居金100万金钱
		cm.gainItem(4001839, 360);//星星
                cm.worldMessage("[抢楼活动]： 恭喜玩家 " + cm.getName() + " 在抢楼活动中获得第十名 核心宝石 * 3 | 高级装备强化卷轴 * 14 | 定居金100万金币 * 2 | 星星 * 360");
                cm.sendOk("恭喜你在抢楼活动中获得第十名 核心宝石 * 3 | 高级装备强化卷轴 * 14 | 定居金100万金币 * 2 | 星星 * 360");
            } else if (count == (max + 10)) {// 幸运奖
		cm.gainItem(2436324, 2);//核心宝石
		cm.gainItem(2049323, 13);//高级装备强化卷轴
		cm.gainItem(4001014, 1);//定居金100万金钱
		cm.gainItem(4001839, 300);//星星
                event.setProperty("state", "false");
                event.setProperty("endEvent", "true");
                cm.worldMessage("[抢楼活动]： 恭喜玩家 " + cm.getName() + " 在抢楼活动中获得第十名 核心宝石 * 2| 高级装备强化卷轴 * 13 | 定居金100万金币 * 1 | 星星 * 300\r\n本次活动结束。。");
                cm.sendOk("恭喜你在抢楼活动中获得第十名 核心宝石 * 2 | 高级装备强化卷轴 * 13 | 定居金100万金币 * 1 | 星星 * 300\r\n本次活动结束。。");
            } else {
                cm.sendOk("当前楼层: " + parseInt(event.getProperty("check")) + " 楼。");
            }
        } else {
            cm.sendOk("活动还未开启或者活动已经结束，所有奖励均已经发放，请下次在参加。");
        }
        cm.dispose();
    }
}

function rand(lbound, ubound) {
    return Math.floor(Math.random() * (ubound - lbound)) + lbound;
}