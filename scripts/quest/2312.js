/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */

importPackage(Packages.client);

var status = -1;

function start(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.sendOk("嗯...你必须不确定你的战斗技能。 我们会在这里等着你，所以当你准备好，来看看我们.");
		    qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendAcceptDecline("我们需要你们的帮助，高贵的探险家。我们的王国目前正面临着一个很大的威胁，我们正处在一个勇敢的探险家愿意为我们而战的迫切需要，这就是你怎么在这里结束了。请理解，不过，确实因为我们需要把我们的信仰你，我们得先测试你的技能，才能够坚定地站在你身后。它会好起来为你做这为我们?");
	if (status == 1){
		qm.forceStartQuest();
		qm.sendOk("继续向前走，你会看到 #b叛徒孢子#k, 孢子并把他们的背部上 蘑菇王国. 我们将不胜感激，如果你可以给他们一个教训或两个，并带回 #b50 突变孢子#k 回报.");
		qm.dispose();
	}
}

function end(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendOk("你教的那些叛徒孢子的教训?");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainExp(11500);
		qm.gainItem(4000499, -50);
		qm.sendOk("这是惊人的。我怀疑为你的能力表示歉意。请救救我们 蘑菇王国 从这次危机!");
		qm.dispose();
		}
	}
	