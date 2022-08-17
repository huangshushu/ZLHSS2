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
            txt = "福利每天有!就看你做不做!#k\r\n\r\n";

            if (cm.getBossLog("meitianrenwu5") == 1){
				txt += "#r叼毛!24个小时再来!做人不能太贪心!";
                cm.sendOk(txt);
                cm.dispose();

            }else{
                txt += "#L1##b收集50个#v4000269#";
                cm.sendSimple(txt);
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000269,50) ){
		        cm.gainItem(4000269,-50);
                cm.sendOk("恭喜您获得了奖励!");
				cm.gainItem(5072000, 1);//给这个物品1个的意思
				cm.gainItem(5041000, 1);//
				cm.gainItem(5211047, 1, 3);//3小时双倍
				cm.gainMeso(10000);
				cm.gainExpR(10000);
				cm.setBossLog('meitianrenwu5');
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请收集50个#v4000269交给我!");
                cm.dispose();
            }
        }
    }
}
