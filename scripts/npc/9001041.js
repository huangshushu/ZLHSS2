
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";//"+ttt6+"//美化会员
var status = 0;

var bosslist = Array(
    "haizei",
    "Dragonica",
    "Prison",
	"LudiPQ",
	"OrbisPQ"
    //"废弃都市"
)
var bosslistNum = Array(
    15,
    15,
    15,
	15,
	15
    //15
)
var bosslistName = Array(
    "海盗船组队任务",
    "御龙魔	      ",
    "逃脱          ",
	"玩具          ",
	"女神的痕迹    "
    //"废弃都市      "
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
			var selStr = "#fn华文行楷##fs12##r<" + cm.getServerName() + " 组队任务系统！> \r\n#fs12##fn宋体#";
			selStr += "#b#L2#"+ttt6+"查看组队一条龙奖励！#l\r\n";
			selStr += "\r\n";
			//selStr += "#g是否确定领取组队跑环奖励?\r\n";
			selStr += "#b#L1#"+ttt6+"领取组队一条龙奖励！#l\r\n\r\n";
			selStr += "#b#L3#"+ttt6+"领取组队累积奖励！#l\r\n";
			//cm.sendSimpleN(selStr, 716, 2400010);
            cm.sendSimple(selStr, 0);
        } else if (status == 1) {
			 switch (selection) {
				 case 3: 
					cm.dispose();
					cm.openNpc(9001041,1);
						break;
					case 2: 
					cm.sendOk("您好，奖励为:\r\n #i4310224#x75,#i2049323#x50,#i5062024#x5,#i5750000#x10");
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
						if(passType>0){
							cm.sendOk("您好，您不满足条件 还需完成以下任务:"+info);
							cm.dispose();
						}else if(cm.getEventCount("一条龙组队")>0){
							cm.sendOk("今日此账号已领取过奖励");
							cm.dispose();
						}else {
							cm.setEventCount("一条龙组队");
							cm.gainItem(4310224,75);//4310224 组队密友纪念币，
							cm.gainItem(2049323,50);// 高级装备强化卷轴，
							cm.gainItem(4310224,5);//	闪炫魔方
							cm.gainItem(5750000,10);// 星岩魔方
							cm.sendOk("领取奖励成功#i4310224#x75,#i2430069#x30,#i2049116#x30,#i2049323#x50,#i5062024#x5,#i5750000#x10");
							cm.dispose();
						}
						break;
			 }
        }
    }
}