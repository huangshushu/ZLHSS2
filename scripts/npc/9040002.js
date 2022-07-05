/* 
 * Shawn, Victoria Road: Excavation Site<Camp> (101030104)
 * Guild Quest Info
 */

var status;
var selectedOption;

function start() {
    selectedOption = -1;
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (mode == 1 && status == 3) {
	status = 0;
    }
    if (status == 0) {
	if (cm.getQuestStatus(6201) == 1) {
	    var dd = cm.getEventManager("Relic");
	    if (dd != null) {
		dd.startInstance(cm.getPlayer());
	    } else {
                cm.sendOk("未知的错误。");
	    }
	    cm.dispose();
	} else {
            var prompt = "\r\n#b#L0#威廉的古堡是什么地方?#l\r\n#b#L1##t4001024#?#l\r\n#b#L2#公会战守护战?#l\r\n#b#L3#已经没有问题了。#l";
	    if (selectedOption == -1) {
                prompt = "\r\n我们公会联盟是从很久以前就开始，一直在努力解读古代的遗迹'祖母绿碑'。得到结果是发现祖母绿碑记载者这里其实就是枫之谷古文明的发源处'威廉的古堡'。而且还了解到传说中的宝石鲁碧安就在'威廉的古堡'的遗迹中，但由于宝石鲁碧安拥有神秘的力量﹐因此被'恶灵13'所霸占了。为了夺回鲁碧安公会联盟开始了公会守护战。" + prompt;
	    } else {
                prompt = "还有要问的嘛?" + prompt;
	    }
	    cm.sendSimple(prompt);
	}
    } else if (status == 1) {
	selectedOption = selection;
	if (selectedOption == 0) {
            cm.sendNext("'威廉的古堡'是曾经统治维多利亚岛全境的古代文明发源地。在石人寺院或森林深处的神殿之类的古代建筑物都是'威廉的古堡'的遗址。");
        } else if (selectedOption == 1) {
            cm.sendNext("#t4001024#是传说中的能够使人永远年轻的宝石。听说拥有#t4001024#的人都灭亡了﹐也许'威廉的古堡'的灭亡也于此有关。");
	    status = -1;
        } else if (selectedOption == 2) {
            cm.sendNext("过去多次派勘到'威廉的古堡'。但是无人归还。所以我们这次决定集结众人之力展开公会守护战。我相信你们这些一直在努力增强力量的公会。");
        } else if (selectedOption == 3) {
            cm.sendOk("是吗？若有什么问题，请随时提出。");
	    cm.dispose();
        } else {
	    cm.dispose();
	}
    } else if (status == 2) {
	if (selectedOption == 0) {
            cm.sendNextPrev("'威廉的古堡'最后的王室威廉公爵﹐据说他非常聪明而又仁慈。但是在某一天突然灭亡了﹐其原因还没弄清楚。");
        } else if (selectedOption == 2) {
            cm.sendNextPrev("这次公会守护战的目的是到'威廉的古堡'探险﹐并夺回#t4001024#。这个任务并不是靠强大的力量就能完成的。最重要的是要与同伴合作。");
        } else {
	    cm.dispose();
	}
    }
}
