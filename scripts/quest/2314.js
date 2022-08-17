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
			qm.sendNext("请不要失去对我们的信心 蘑菇王国.");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendYesNo("为了拯救公主，你必须先导航蘑菇森林。 皮佩国王设立了一个强大的障碍，禁止任何人进入城堡。 请为我们调查此事.");
	if (status == 1)
		qm.sendNext("你会跑到蘑菇森林的障碍，在你现在站在你的东边。 请小心。 我听说这个地区感染了疯狂的恐惧诱导的怪物.");
	if(status == 2){
		//qm.forceStartQuest();
		//qm.forceStartQuest(2314,"1");
		qm.gainExp(8300);
		qm.sendOk("我看到，所以它确实不是一个常规的障碍以任何手段。 伟大的工作有。 如果不是为了你的帮助，我们不会有一个线索，这是关于什么.");
		qm.forceCompleteQuest(); 
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
		qm.sendOk("我看到你已经彻底调查了蘑菇森林的屏障。 它是什么样子?");
	if (status == 1){
		qm.gainExp(8300);
		qm.sendOk("我看到，所以它确实不是一个常规的障碍以任何手段。 伟大的工作有。 如果不是为了你的帮助，我们不会有一个线索，这是关于什么.");
		qm.forceCompleteQuest(); 
		qm.dispose();
		}
	}
	