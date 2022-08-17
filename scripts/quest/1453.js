/* Gritto
	Leafre : Forest of the Priest (240010501)
	4th Job Advancer/Quests.
        Made by TheGM
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
		qm.dispose();
    } else {
		if (mode == 1) {
			status++;
		} else if (status == 3) {
            qm.sendOk("考虑好后再来找我吧。");
			qm.dispose();
			return;
		} else {
			status--;
		}
		if (status == 0) {
            qm.sendNext("无数个勇者在冒险世界，但只有少数值得和我见面。你已经获得了令人难以置信的力量…但是不把力量与伟大混淆了。");
        }else if(status == 1) {
            qm.sendNextPrev("#b4转#k将给予你更大的威力, 但它也带来了新的责任。你必须用你的力量主持正义。这将是你#b领导冒险世界走向未来#k的职责。");
        }else if(status == 2) {
            qm.sendNextPrev("也许你无忧无虑的周游世界，只是为了乐趣。现在是时候成为一个英雄，并帮助你周围的人。");
        }else if(status == 3) {
            qm.sendYesNo("现在，这对你的考验时间。#r天鹰#k和#r火焰龙#k 有权承认真正的英雄。你的任务是击败他们，获得#b#t4031343##k和#b#t4031344##k。");
        }else if(status == 4) {
            qm.forceStartQuest();
            qm.sendOk("你愿意帮助冒险世界吗?");
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				qm.sendYesNo("干得漂亮, 你确定要进行4转了吗?");
		} else if(status == 1) {
			if (qm.haveItem(4031511, 1) || qm.haveItem(4031512, 1) ) {
				qm.removeAll(4031511);//英雄五角星
				qm.removeAll(4031512);//英雄之星
				qm.gainItem(1142110, 1);//Master Adventure medal
				if (qm.getJob() == 211) {
					qm.changeJob(212);
				} else if (qm.getJob() == 221) {
					qm.changeJob(222);
				} else if (qm.getJob() == 231) {
					qm.changeJob(232);
				} else {
					qm.sendOk("出现未知错误");
					qm.dispose();
				}
				qm.sendNext("你已经成功4转了, 恭喜你！");
				//qm.gainSp(2);
				qm.forceCompleteQuest();
				qm.dispose();
			}
		} else {
			qm.sendOk("嗯, 考虑好后再来找我吧。");
			qm.dispose();
        }
    }
}
