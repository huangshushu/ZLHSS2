
var status = 0;
var fee;
var chance = Math.floor(Math.random()*5+1);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("很好下次再见");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("嗨。！ #h #! 我是 #b~冒险岛赌博机#k!想参与金钱娱乐的游戏吗？哈哈 你先下注吧! ");
        } else if (status == 1) {
            cm.sendGetText("你想下注多少金额呢?如果赢了的话可以获得3倍的收益和GM送的丰厚礼品,呵呵,话不多说啦!快输入你想要赌博的金额吧,输了别哭喔!");
        } else if (status == 2) {
            fee = cm.getText();
            cm.sendYesNo("你确定要下注 #r" + fee + "#k 冒险币吗?请先检查你有没有那么多钱哦!");
        } else if (status == 3) {
            if (cm.getMeso() < fee) {
                cm.sendOk("哦呵，不好意思你没那么多钱了，去赚点钱再来吧，这可不是免费的,快去当掉一些东西再来吧!");
                cm.dispose();
            } else if (cm.getMeso() > 1000000000) {
                cm.sendOk("请先确定包里的金币不能超过10亿!");
                cm.dispose();
            } else if (cm.getMeso() < 100000) {
                cm.sendOk("对不起,你的金币不足100000,所以不能参于此次下注!");
                cm.dispose();
            } else if (cm.getText() > 1000000) {
                cm.sendOk("哦不好意思哦!这里最大赌注不能超过100万!");
                cm.dispose();
            } else if (cm.getText() < 100000) {
                cm.sendOk("亏你想得出来，居然想敲诈，快滚一边去,找死啊!");
                cm.dispose();
            } else {
                 if (chance <= 1) { 
	                    cm.gainMeso(-fee); 
	                    cm.sendNext("哦··你的运气不怎么好哦··哈哈 再来一把嘛!"); 
cm.serverNotice("『赌场公告』：哇.可怜的"+ cm.getChar().getName() +"，在小赌场输的只剩下内裤，珍爱生命 远离赌博!"); 
	                    cm.dispose(); 
	                } 
	                else if (chance == 2) { 
	                    cm.gainMeso(-fee); 
	                    cm.sendNext("哦··你的运气不怎么好哦··哈哈 再来一把嘛!"); 
                            cm.serverNotice("『赌场公告』：哇.可怜的"+ cm.getChar().getName() +"，在小赌场输的只剩下内裤，珍爱生命 远离赌博!"); 
	                    cm.dispose(); 
	                } 
	                else if (chance == 3) { 
	                    cm.gainMeso(-fee); 
	                    cm.sendNext("哦··你的运气不怎么好哦··哈哈 再来一把嘛!"); 
                            cm.serverNotice("『赌场公告』：哇.可怜的"+ cm.getChar().getName() +"，在小赌场输的只剩下内裤，珍爱生命 远离赌博!"); 
	                    cm.dispose(); 
	                } 
	                else if (chance == 4) { 
	                    cm.gainMeso(-fee); 
	                    cm.sendNext("哦··你的运气不怎么好哦··哈哈 再来一把嘛!"); 
                            cm.serverNotice("『赌场公告』：哇.可怜的"+ cm.getChar().getName() +"，在小赌场输的只剩下内裤，珍爱生命 远离赌博!"); 
	                    cm.dispose(); 
	                } 
                else if (chance >= 5) {
                    cm.gainMeso(fee * 3);
                    cm.gainExp(+50000);                
                    cm.sendNext("#r哈哈，恭喜你#k! 你赢了! 获得3倍的金币赔偿!");
                    cm.serverNotice("『小赌场公告』：恭喜"+ cm.getChar().getName() +"，在小赌场赢得3倍的金币，大家一起为他祝贺吧!");
                    cm.dispose();
                }
            }
        }
    }
}
