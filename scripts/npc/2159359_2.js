/*
	制作：dgms
	功能：BOSS次数重置
	时间：2017年1月18日
*/

//重置副本需要的点券数量
var cash = 20000000;
//每天允许的重置次数
var reset = 1
var bosslist = Array(
    "钻机",
	"武陵图腾",
	"艾菲尼娅",
	"混沌品克缤",
	"班·雷昂",
	"阿卡伊勒",
	"森兰丸",
	"欧碧拉",
	"希纳斯",
	"浓姬",
	"腥血女王",
	"进阶腥血女王",
	"皮埃尔",
	"进阶皮埃尔",
	"半半",
	"进阶半半",
	"贝伦",
	"进阶贝伦",
	"贝勒德",
	"斯乌",
	"斯乌[远征队]",
	"麦格纳斯",
	"麦格纳斯[进阶]",
	"桃乐丝",
	"戴米安",
	"路西德",
	"路西德[进阶]",
	"觉醒希拉",
	"乌鲁斯"

)

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
            cm.sendOk("等你想好了再来吧!");
        }
        status--;
    }
    if (status == 0) {
		if(cm.getBossLog("重置副本")==0){
		cash=20000000;
		}
		if(cm.getBossLog("重置副本")==1){
		cash=20000000;
		}
		if(cm.getBossLog("重置副本")==2){
		cash=50000000;
		}
        cm.sendYesNo("重置所有BOSS副本需要" + cash + "金币,你确定要重置吗?\r\n(每日可以" + reset + "次)");
    } else if (status == 1) {
        if (cm.getPlayer().getMeso() >= cash && cm.getBossLog("重置副本") < reset) {
            cm.gainMeso( -cash)
            for (var i = 0; i < bosslist.length; i++) {
                cm.resetPQLog(bosslist[i])
            }
            cm.setBossLog("重置副本");
            cm.sendOk("恭喜你!成功用" + cash + "金币,重置了所有BOSS副本");
        } else {
            cm.sendOk("很抱歉,您因为一下原因无法重置副本!!!\r\n1.金币元宝不足" + cash + ".\r\n2.已经超过每日重置副本次数.");
        }
        cm.dispose();
    }
}

//resetEventCount