
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
            txt = "我是每日任务NPC！完成了任务将获得奖励#k\r\n\r\n";

            if (cm.getBossLog("meiriyici") == 1){
                txt += "#r你今天已经完成过了,请明天在来吧!";
                cm.sendOk(txt);
                cm.dispose();
            }else{
				txt += "#L1##b收集50个#v4000014##l";
                cm.sendSimple(txt);
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000014,50)){
				cm.gainItem(4000014, -50);
                cm.sendOk("恭喜您获得了奖励!");
				//cm.gainItem(4031559,1);//给这个物品1个的意思
				//cm.gainItem(4031560,1);//给这个物品1个的意思
				cm.gainMeso(300);
				cm.gainExpR(70000);
				cm.setBossLog('meiriyici');
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请收集50个#v4000014#交给我!");
                cm.dispose();
            }
        }
    }
}
