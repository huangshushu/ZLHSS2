var status = 0;
var suiji;
var suiji2;
var wpid = Array(
  2043003,//单手剑攻击卷轴(必成)
  2044003,//双手剑攻击卷轴(必成)
  2044303,//枪攻击攻击卷轴(必成)
  2044403,//矛攻击攻击卷轴(必成)
  2044503,//弓攻击攻击卷轴(必成)
  2044603,//弩攻击必成卷
  2043703,//短杖攻击必成卷
  2043803,//长杖攻击诅轴(必成)
  2043303,//短剑攻击必成卷
  2044703,//拳套攻击诅轴(必成)
  2044908,//短枪攻击卷轴(必成)
  2044815,//指节攻击必成卷 
  2040807,//手套攻击卷轴(必成)
  2040506,//全身铠甲敏捷卷轴(必成)
  2040710 //鞋子跳跃卷轴(必成)
);
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (status == 0) {
            var txt = "";
            txt = "我是每日跑商最后一轮第10环NPC哦！我叫寇斯裤\r\n\r\n";

            if (cm.getPlayer().getBossLog("跑商任务") == 9){// cm.getPS()  的意思是 读取跑商值如果等于1 就得出他跑商已经完成了第一环 就运行他进行第二环跑商!

                txt += "#L1##b半人马的火花#v4000232#X60个、半人马的净水#v4000233#X60个、半人马的骨头#v4000234#X60个交给我！！#l";
                cm.sendSimple(txt);
            }else{
                txt += "你已经完成过了然后你去找.神木村-仓库管理员-寇斯裤!\r\n请第二天再来！";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
			var suiji = Math.floor(Math.random() * wpid.length);
			var suiji2= Math.floor(Math.random() * wpid.length);
            if (cm.haveItem(4000232,60) && cm.haveItem(4000233,60) && cm.haveItem(4000234,60)){
                cm.setBossLog("跑商任务");
//cm.gainPS(1);//cm.gainPS(1);  的意思是 你完成跑商第一环的时候给予你 跑商值+1这样你就无法在重复做第二环了。只有凌晨12点刷新才行！
		
                cm.gainItem(4000232, -60);
                cm.gainItem(4000233, -60);
                cm.gainItem(4000234, -60);
				cm.gainNX(30000);
				cm.gainItem(4001003, 1);
				cm.gainItem(4011008, 2);
			    //cm.gainItem(4011008, 2);
				//cm.gainItem(2022468, 5);
				cm.gainMeso(5000000);
				cm.setmoneyb(30);//奖励元宝
				cm.gainItem(wpid[suiji],1);
				cm.gainItem(wpid[suiji2],1);
                cm.sendOk("跑商最后一环第10环完成!恭喜获得30000点券获得怀表1个获得锂2个随机必成2个30充值币\r\n\r\n你已经完成了所有的跑商任务，请你明天再来吧！");
                cm.dispose();
            }else{
                cm.sendOk("半人马的火花#v4000232#X60个、半人马的净水#v4000233#X60个、半人马的骨头#v4000234#X60个交给我!");
                cm.dispose();
            }
        }
    }
}