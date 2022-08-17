/*
 蜗牛冒险岛(079)游戏服务端
 脚本：游戏CDK兑换系统
 */

importPackage(net.sf.odinms.client);
var status = 0;
var fee;
var chance = Math.floor(Math.random() * 1);
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("你没有？");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendGetText("请输入提交的数量；");
        } else if (status == 1) {
            fee = cm.getText();
			if(fee<0){
				cm.playerMessage(1, "请输入正确的数量。");
                cm.dispose();
                return;
			}
			if(fee>200){
				cm.playerMessage(1, "一次最多提交 200 片。");
                cm.dispose();
                return;
			}
            if (!cm.判断物品数量(4031311, fee)) {
                cm.playerMessage(1, "你没有这么多片雪花。");
                cm.dispose();
                return;
            }
            var 雪花进度 = cm.GetPiot("雪花进度", "1");
            cm.GainPiot("雪花进度", "1", fee);
			cm.setBossRank("雪花",2,fee);
            cm.收物品(4031311, fee);
            if (雪花进度 >= 3000 && !cm.haveMonster(9400724)) {
                cm.召唤怪物(9400724, 1, 1450, 140);
                cm.清怪();
                cm.召唤怪物(9500317, 1, 494, 140);
                cm.GainPiot("雪花进度", "1", -雪花进度);
                cm.全服黄色喇叭("[辛福村] : 哇，幸福村堆砌起来好大的雪人啊。");
            } else if (雪花进度 >= 2700 && !cm.haveMonster(9400723)) {
                cm.召唤怪物(9400723, 1, 1450, 140);

            } else if (雪花进度 >= 2400 && !cm.haveMonster(9400722)) {
                cm.召唤怪物(9400722, 1, 1450, 140);

            } else if (雪花进度 >= 2100 && !cm.haveMonster(9400721)) {
                cm.召唤怪物(9400721, 1, 1450, 140);

            } else if (雪花进度 >= 1800 && !cm.haveMonster(9400720)) {
                cm.召唤怪物(9400720, 1, 1450, 140);

            } else if (雪花进度 >= 1500 && !cm.haveMonster(9400719)) {
                cm.召唤怪物(9400719, 1, 1450, 140);

            } else if (雪花进度 >= 1200 && !cm.haveMonster(9400718)) {
                cm.召唤怪物(9400718, 1, 1450, 140);

            } else if (雪花进度 >= 900 && !cm.haveMonster(9400717)) {
                cm.召唤怪物(9400717, 1, 1450, 140);
				
            } else if (雪花进度 >= 600 && !cm.haveMonster(9400716)) {
                cm.召唤怪物(9400716, 1, 1450, 140);
				
            } else if (雪花进度 >= 300 && !cm.haveMonster(9400715)) {
                cm.召唤怪物(9400715, 1, 1450, 140);
            }
            cm.dispose();
        }
    }
}