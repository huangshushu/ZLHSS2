/* RED 1st impact
    The New Explorer
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendNextS("你好，我的名字叫麦加。我从来没有见过你哦，看来你是新来的#b冒险家#k吧？",1);
    } else if (status == 1) {	
        qm.sendNextPrevS("#b冒险家？#k",17);	
	} else if (status == 2) {	
        qm.sendNextPrevS("是的，为了在冒险岛世界展开冒险而从其他世界来的人。我们称这种人为“冒险家”。所有冒险家都是从#b冒险岛#k开始冒险的。",1);		
    } else if (status == 3) {	
	    qm.sendNextPrevS("#b冒险岛？#k",17);	
	} else if (status == 4) {	
	    qm.sendNextPrevS("嗯，冒险岛！这里本来只是个无名小岛，但不知从何时起有很多冒险家都纷至沓来。为了他们的到来，这里开始陆陆续续有设施搭建起来，现在这里已经变成了一个不错的村庄。并且由我来为像你一样的新手冒险家提供帮助。",1);		
	} else if (status == 5) {	
	    qm.sendNextPrevS("你是叫……#h0#吧？既然你是第一次来到冒险岛世界，那就多听一下我做的说明吧？通过我的小测试的话，我就会给你对冒险非常有用的礼物哦！",1);		
	} else if (status == 6) {	
	    qm.sendNextPrevS("如果你不想听我的说明，我马上送你去村庄。不过那样一来，你就无法获得礼物。",1);		
	} else if (status == 7) {
	    qm.sendSimpleS("明白了的话，现在开始选择吧。.你要怎么做呢？\r\n#b#L0# 听取麦加的说明，并获得新装备作为礼物。 #l\r\n#L1# 不听说明，立即移动至村庄。#l#k",1);		
    } else if (status == 8) {
        sel = selection;
		if (selection == 0) {		
			qm.sendNextS("不错的选择！如果你按照我的说明去做，以后在冒险岛世界生活不会有任何问题的。",1);	
			qm.forceStartQuest();
			//qm.gainItem(2432824,1);//宋小姐请帮忙
			qm.forceCompleteQuest();
			qm.gainExp(20);
			qm.dispose();
		} else if (selection == 1) {
			qm.sendNextS("好吧，那么我现在立刻送你去皮皮村。",1);
		}
	} else if (status == 9) {
        if (sel == 1) {
		qm.sendNextS("我已经把礼物放到你背包里，是恢复用药水。你待会儿打开消耗栏确认一下吧。",1);
		qm.gainItem(2000013,50);
		qm.gainItem(2000014,50);
		}
    } else if (status == 10) {
        if (sel == 1) {
			qm.sendNextS("你到了皮皮村的话，别忘了去见见#b路卡斯#k村长!他会给你一些建议，让你能刚好地去适应新世界。",1);
	   }
    } else if (status == 11) {
        if (sel == 1) {
			qm.warp(4000020,0);
			qm.gainExp(273);
			qm.forceStartQuest(32210);
		}   
	    qm.dispose();
    }
}
