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
            txt = "国庆福利领取中心#k\r\n\r\n";

            if ( cm.getPlayer().getBossLog("国庆福利") == 1){
				txt += "#r你已经领取过了!";
                cm.sendOk(txt);
                cm.dispose();

            }else{
                txt += "#L1##b点击领取";
                cm.sendSimple(txt);
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000134,0) ){
		        cm.gainItem(4000134, -0);
                cm.sendOk("恭喜您获得了奖励!");
				cm.worldMessage(6,"[国庆福利] : 玩家 "+cm.getPlayer().getName()+"  领取了国庆礼包")
				cm.gainItem(5570000, 30);//给这个物品1个的意思
				cm.gainItem(2022465, 20);//给这个物品1个的意思
				cm.gainItem(2460005,50);
				cm.gainExp(100000);
				cm.getPlayer().setBossLog('国庆福利');
                cm.dispose();
            }else{
                cm.sendOk("r你已经领取过了");
                cm.dispose();
            }
        }
    }
}
