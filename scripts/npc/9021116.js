var ax = "#fEffect/ItemEff/1048000/1/3#";//大爱心
var ttz = "#fUI/GuildMark/Mark/Animal/00002016/15#";//白色兔子
var xxx = "#fEffect/CharacterEff/1032054/0/0#";  //选项两边


status = -1;
var event;

function start() {
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
            cm.sendYesNo("亲爱的#r#h ##k您好，我是盖楼活动员，本次活动时间为10分钟.\r\n活动分一等奖，二等奖和三等奖.\r\n一等奖：第一个到达建楼高度的玩家获得一等奖。\r\n二等奖：一等奖之后后续补楼的5个玩家为二等奖\r\n三等奖：为结束活动奖励只限1人.第一名:3666点卷.第二名:1500.第三名:888\r\n那就看你运气啦 开始吧？");
        } else {
            cm.sendOk("\t\t"+ax+""+ttz+"#e#r盖楼活动"+ttz+""+ax+"#k\r\n\r\n#b#n"+xxx+"活动分一等奖10666点卷,二等奖8888点卷,三等奖4888点卷.\r\n"+xxx+"一等奖：第一个到达建楼高度的玩家获得一等奖。\r\n"+xxx+"二等奖：一等奖之后后续补楼的5个玩家为二等奖\r\n"+xxx+"三等奖：二等奖之后后续补楼的5个玩家为三等奖\r\n"+xxx+"活动开始前会全服喇叭通知 ");
            cm.dispose();
        }
    } else if (status == 1) {
        if (event != null && event.getProperty("state").equals("true")) {
            event.setProperty("check", "" + (parseInt(event.getProperty("check")) + 1)); //设置点击次数+1
            var count = parseInt(event.getProperty("check")); //获得总点击次数
            var max = parseInt(event.getProperty("maxCheck"));
            var dj = rand(600, 8888);
            var dj3 = rand(150, 4888);
            if (count == max) {
                cm.gainNX(1,10666);
                cm.worldSpouseMessage(0x0F0,"[抢楼活动]： 恭喜玩家 " + cm.getName() + " 在抢楼活动中获得一等奖,获得 10666 点券 .真让人羡慕");
                cm.sendOk("[抢楼活动] 恭喜你获得了抢楼活动一等奖。获得 10666 点券奖励");
            } else if (count > max && count <= (max + 5)) {
                cm.gainNX(1,dj);
                cm.worldSpouseMessage(0x0F0,"[抢楼活动]： 恭喜玩家 " + cm.getName() + " 在抢楼活动中获得二等奖,获得 8888 点券 .真让人羡慕");
                cm.sendOk("恭喜你获得了抢楼活动二等奖。获得 8888 点券奖励");
            } else if (count > (max + 5) && count <= (max + 10) ) {
                cm.gainNX(1,dj3);
           
                cm.worldSpouseMessage(0x0F0,"[抢楼活动]： 恭喜玩家 " + cm.getName() + " 在抢楼活动中获得三等奖 " + dj3 + "点卷.本次抢楼活动已经结束...");
                cm.sendOk("恭喜你获得了抢楼活动三等奖. 获得 4888 点券奖励\r\n本次抢楼活动已经结束...");
				 } else if (count > (max + 10)  ) {
					 event.setProperty("state", "false");
                event.setProperty("endEvent", "true");


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