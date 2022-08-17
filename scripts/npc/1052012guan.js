/*var status = 0;
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
            txt = "我是每日跑商第5环NPC哦！\r\n\r\n";

            if (cm.getPlayer().getBossLog("跑商任务") == 4){// cm.getPS()  的意思是 读取跑商值如果等于1 就得出他跑商已经完成了第一环 就运行他进行第二环跑商!

                txt += "#L1##b收集50个三眼章鱼触角#v4000006#交给我！！#l";
                cm.sendSimple(txt);
            }else{
                txt += "你已经完成过了然后你去找.林中之城-仓库管理员-吴先生!\r\n请第二天再来！";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000006,50)){
                cm.setBossLog("跑商任务");
//cm.gainPS(1);//cm.gainPS(1);  的意思是 你完成跑商第一环的时候给予你 跑商值+1这样你就无法在重复做第二环了。只有凌晨12点刷新才行！
		
                cm.gainItem(4000006, -50);
cm.gainNX(300);
cm.gainExpR(+25000);
                cm.sendOk("跑商第5环完成!恭喜获得300点券\r\n\r\n然后你去找..林中之城-仓库管理员-吴先生.进行下一环！");
                cm.dispose();
            }else{
                cm.sendOk("收集50个三眼章鱼触角#v4000006#交给我!");
                cm.dispose();
            }
        }
    }
}
