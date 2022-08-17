importPackage(Packages.client);
var status = 0;
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
            txt = "我是每日跑商第7环NPC哦！我叫小刘\r\n\r\n";

            if (cm.getPS() == 6){// cm.getPS()  的意思是 读取跑商值如果等于1 就得出他跑商已经完成了第一环 就运行他进行第二环跑商!

                txt += "#L1##b收集星光精灵的星块#v4000059#X50个、月光精灵的月块#v4000060#X50、日光精灵的日块#v4000061#X50个交给我！！#l";
                cm.sendSimple(txt);
            }else{
                txt += "你已经完成过了然后你去找.冰封雪域-仓库管理员-武先生!\r\n请第二天再来！";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000059,50) && cm.haveItem(4000060,50) && cm.haveItem(4000061,50)){
                cm.gainPS(1);//cm.gainPS(1);  的意思是 你完成跑商第一环的时候给予你 跑商值+1这样你就无法在重复做第二环了。只有凌晨12点刷新才行！
		
                cm.gainItem(4000059, -50);
                cm.gainItem(4000060, -50);
                cm.gainItem(4000061, -50);
cm.gainExpR(+300000);
cm.gainMeso(+350000);
                cm.sendOk("跑商第7环完成!恭喜获得金币=350000、经验=300000\r\n\r\n然后你去找..冰封雪域-仓库管理员-武先生.进行下一环！");
                cm.dispose();
            }else{
                cm.sendOk("收集50个星光精灵的星块#v4000059#、50个月光精灵的月块#v4000060#、50个日光精灵的日块#v4000061#、交给我!");
                cm.dispose();
            }
        }
    }
}
