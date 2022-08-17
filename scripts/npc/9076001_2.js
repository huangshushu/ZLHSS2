
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";//"+ttt6+"//美化会员
var status = 0;

var bosslist = Array(
    "废弃组队副本",
    "御龙魔组队副本",
	"逃脱组队副本"
)
var bosslistNum = Array(
    20,
    20
)
var bosslistName = Array(
    "废弃组队副本",
    "御龙魔组队副本",
	"逃脱组队副本"
)

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
			if (cm.getMapId() == 180000001) {
				cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
				cm.dispose();
			} 
			var selStr = "#r                <  月光岛组队任务系统  > \r\n";
			selStr += "                #b#L2#查看组队一条龙奖励！#l\r\n\r\n";
			selStr += "                #b#L1#领取组队一条龙奖励！#l\r\n\r\n";
            cm.sendSimple(selStr, 0);
        } else if (status == 1) {
			 switch (selection) {
				 case 3: 
					cm.dispose();
					cm.openNpc(9001041,1);
						break;
					case 2: 
					cm.sendOk("您好，通关副本达到相应的次数，可以获得以下奖励:\r\n#r#e#i4310195#x20 #i4310242#x5 #i2049618#x10 #i2049116#x10 #i5062024#x30 #i2049397#x2 #i2049323#x20 #i2430683#x20 #i2340000#x10 #i4310224#x100 #i4310176#x50 #i4031997#x30 #i2438084#x1");
					cm.dispose();
						break;
					case 1: 
						var passType = 0;
						var info = "";
						for(var i = 0;i<bosslist.length;i++){
							if(cm.getEventCount(bosslist[i])<bosslistNum[i]){
								passType++;
								info +="\r\n#b"+bosslistName[i]+" 目前通关 #r" + cm.getEventCount(bosslist[i]) + " #b次 需要通关 #r"+bosslistNum[i]+" #b次"
							}
						}
						if(cm.getBossLog("废弃组队副本") < 5 || cm.getBossLog("御龙魔组队副本") < 5 || cm.getBossLog("逃脱组队副本") < 3){
							cm.sendOk("您好，您不满足条件 还需完成以下任务:\r\n#b 废弃都市 目前通关 #r" + cm.getBossLog("废弃组队副本") + " #b次 需要通关 #r5 #b次\r\n#b 组队任务御龙魔 目前通关 #r" + cm.getBossLog("御龙魔组队副本") + " #b次 需要通关 #r5 #b次\r\n#b 组队任务逃脱 目前通关 #r" + cm.getBossLog("逃脱组队副本") + " #b次 需要通关 #r3 #b次");
							cm.dispose();
						}else if(cm.getEventCount("一条龙组队") > 0){
							cm.sendOk("今日此账号已领取过奖励");
							cm.dispose();
						}else {
							cm.setEventCount("一条龙组队");
							cm.gainItem(4310195,20);//英雄币，
							cm.gainItem(4310242,5);//冬日币，
							cm.gainItem(2049618,10);//完美还原卷轴
							cm.gainItem(2049116,10);//强化混沌卷轴
							cm.gainItem(5062024,30);//闪炫魔方
							cm.gainItem(2049397,2);//星之力13星强化券
							cm.gainItem(2049323,20);//高级装备强化卷轴
							cm.gainItem(2430683,20);//情人节礼包
							cm.gainItem(2340000,10);//祝福
							cm.gainItem(4310224,100);//组队密友纪念币
							cm.gainItem(4310176,50);//满月币
							cm.gainItem(4031997,30);//蘑菇金币
							cm.gainItem(2438084,1);//每日红包
							//cm.gainItem(2431028,1,1);//魔法盾
cm.worldSpouseMessage(0x17,"[组队一条龙] 恭喜玩家 "+ cm.getChar().getName() +" 领取了一条龙奖励。");
cm.worldSpouseMessage(0x17,"[组队一条龙] 恭喜玩家 "+ cm.getChar().getName() +" 领取了一条龙奖励。");
cm.worldSpouseMessage(0x17,"[组队一条龙] 恭喜玩家 "+ cm.getChar().getName() +" 领取了一条龙奖励。");
cm.worldSpouseMessage(0x17,"[组队一条龙] 恭喜玩家 "+ cm.getChar().getName() +" 领取了一条龙奖励。");
cm.worldSpouseMessage(0x17,"[组队一条龙] 恭喜玩家 "+ cm.getChar().getName() +" 领取了一条龙奖励。");

							cm.sendOk("领取奖励成功。");
							cm.dispose();
						}
						break;
			 }
        }
    }
}