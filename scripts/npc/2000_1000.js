importPackage(Packages.client);
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日

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
            txt = "欢迎来到每日跑商任务~\r\n\r\n";
			var lv = cm.getPlayer().getLevel();
            if (cm.getPS() == 0){// cm.getPS()  的意思是 读取跑商值如果等于1 就得出他跑商已经完成了第一环 就运行他进行第二环跑商!
				if (cm.haveItem(4000019,50)){
                cm.gainPS(1);//cm.gainPS(1);  的意思是 你完成跑商第一环的时候给予你 跑商值+1这样你就无法在重复做第二环了。只有凌晨12点刷新才行！
		        //cm.gainItem(4000000, -20);
				//cm.gainItem(4000016, -20);
				cm.gainItem(4000019, -50);
				cm.gainExpR(+20000);
				cm.gainMeso(+30000);
                cm.sendOk("跑商完成!恭喜获得金币=30000、经验=20000\r\n\r\n然后进行下一环！");
                cm.dispose();
				}else{
                cm.sendOk("第一环：#b收集50个#v4000019#交给我！！");
                cm.dispose();
				}
            } else if (cm.getPS() == 1){// cm.getPS()  的意思是 读取跑商值如果等于1 就得出他跑商已经完成了第一环 就运行他进行第二环跑商!
				if (cm.haveItem(4000000,50)){
                cm.gainPS(1);//cm.gainPS(1);  的意思是 你完成跑商第一环的时候给予你 跑商值+1这样你就无法在重复做第二环了。只有凌晨12点刷新才行！
		        //cm.gainItem(4000000, -20);
				cm.gainItem(4000000, -50);
				//cm.gainItem(4000019, -20);
				cm.gainExpR(+50000);
				cm.gainMeso(+50000);
                cm.sendOk("跑商完成!恭喜获得金币=50000、经验=50000\r\n\r\n然后进行下一环！");
                cm.dispose();
				}else{
                cm.sendOk("第二环：#b收集50个#v4000000#交给我！！");
                cm.dispose();
				}
            } else if (cm.getPS() == 2){// cm.getPS()  的意思是 读取跑商值如果等于1 就得出他跑商已经完成了第一环 就运行他进行第二环跑商!
				if (cm.haveItem(4000016,50)){
                cm.gainPS(1);//cm.gainPS(1);  的意思是 你完成跑商第一环的时候给予你 跑商值+1这样你就无法在重复做第二环了。只有凌晨12点刷新才行！
		        //cm.gainItem(4000000, -20);
				cm.gainItem(4000016, -50);
				//cm.gainItem(4000019, -20);
				cm.gainExpR(+50000);
				cm.gainMeso(+50000);
                cm.sendOk("跑商完成!恭喜获得金币=50000、经验=50000\r\n\r\n然后进行下一环！");
                cm.dispose();
				}else{
                cm.sendOk("第三环：#b收集50个#v4000016#交给我！！");
                cm.dispose();
				}
			} else if (cm.getPS() == 3){
				if (cm.haveItem(4000003,50)){
                cm.gainPS(1);//cm.gainPS(1);  的意思是 你完成跑商第一环的时候给予你 跑商值+1这样你就无法在重复做第二环了。只有凌晨12点刷新才行！
		        cm.gainItem(4000003, -50);
				cm.gainExpR(+80000);
				cm.gainMeso(+80000);
                cm.sendOk("跑商完成!恭喜获得金币=80000、经验=80000\r\n\r\n然后进行下一环！");
                cm.dispose();
				}else{
                cm.sendOk("第四环：#b收集50个#v4000003#交给我！！");
                cm.dispose();
				}
            } else if (cm.getPS() == 4){// cm.getPS()  的意思是 读取跑商值如果等于1 就得出他跑商已经完成了第一环 就运行他进行第二环跑商!
				if (cm.haveItem(4000004,100)){
                cm.gainPS(1);//cm.gainPS(1);  的意思是 你完成跑商第一环的时候给予你 跑商值+1这样你就无法在重复做第二环了。只有凌晨12点刷新才行！
				cm.gainItem(4000004, -100);
				cm.gainExpR(+100000);
				cm.gainMeso(+100000);
                cm.sendOk("跑商完成!恭喜获得金币=100000、经验=100000\r\n\r\n然后进行下一环！");
                cm.dispose();
				}else{
                cm.sendOk("第五环：#b收集100个#v4000004#交给我！！");
                cm.dispose();
				}
			} else if (cm.getPS() == 5 ){
				if (cm.haveItem(4000012,100)){
                cm.gainPS(1);//cm.gainPS(1);  的意思是 你完成跑商第一环的时候给予你 跑商值+1这样你就无法在重复做第二环了。只有凌晨12点刷新才行！
				cm.gainItem(4000012, -100);
				cm.gainExpR(+150000);
				cm.gainMeso(+120000);
                cm.sendOk("跑商完成!恭喜获得金币=120000、经验=150000\r\n\r\n然后进行下一环！");
                cm.dispose();
				}else{
                cm.sendOk("第六环：#b收集100个#v4000012#交给我！");
                cm.dispose();
				}
			} else if (cm.getPS() == 6 ){
				if (cm.haveItem(4000007,100)){
                cm.gainPS(1);//cm.gainPS(1);  的意思是 你完成跑商第一环的时候给予你 跑商值+1这样你就无法在重复做第二环了。只有凌晨12点刷新才行！
                cm.gainItem(4000007, -100);
				cm.gainExpR(+180000);
				cm.gainMeso(+180000);	
                cm.sendOk("跑商完成!恭喜获得金币=180000、经验=180000\r\n\r\n然后进行下一环！");
                cm.dispose();
				}else{
                cm.sendOk("第七环：收集100个火独眼兽之尾#v4000007#交给我！！");
                cm.dispose();
				}
			} else if (cm.getPS() == 7 ){
				if (cm.haveItem(4000018,100)){
                cm.gainPS(1);//cm.gainPS(1);  的意思是 你完成跑商第一环的时候给予你 跑商值+1这样你就无法在重复做第二环了。只有凌晨12点刷新才行！
                cm.gainItem(4000018, -100);
				cm.gainExpR(+200000);
				cm.gainMeso(+200000);	
                cm.sendOk("跑商完成!恭喜获得金币=200000、经验=200000\r\n\r\n然后进行下一环！");
                cm.dispose();
				}else{
                cm.sendOk("第八环：收集100个木块#v4000018#交给我！！");
                cm.dispose();
				}
			} else if (cm.getPS() == 8 ){
				if (cm.haveItem(4000020,200)){
                cm.gainPS(1);//cm.gainPS(1);  的意思是 你完成跑商第一环的时候给予你 跑商值+1这样你就无法在重复做第二环了。只有凌晨12点刷新才行！
                cm.gainItem(4000020, -200);
				cm.gainExpR(+200000);
				cm.gainMeso(+250000);	
                cm.sendOk("跑商完成!恭喜获得金币=250000、经验=200000\r\n\r\n然后进行下一环！");
                cm.dispose();
				}else{
                cm.sendOk("第九环：收集200个野猪尖牙#v4000020#交给我！！");
                cm.dispose();
				}
			} else if (cm.getPS() == 9 ){
				if (cm.haveItem(4000106,200)){
					if (cm.getInventory(1).isFull() && cm.getInventory(2).isFull() && cm.getInventory(3).isFull()&& cm.getInventory(4).isFull()){
					cm.sendOk("#b请保证每个栏位至少有空格,否则无法领取.");
					cm.dispose();
					return;
					}
                cm.gainPS(1);//cm.gainPS(1);  的意思是 你完成跑商第一环的时候给予你 跑商值+1这样你就无法在重复做第二环了。只有凌晨12点刷新才行！
                //cm.gainItem(4000048, -100);
                cm.gainItem(4000106, -200);
				cm.gainExpR(+200000);
				cm.gainMeso(+280000);
				cm.gainItem(2340000,1);//zhufu
                cm.sendOk("跑商完成!恭喜获得金币=280000、经验=200000\r\n\r\n然后获得了1个#v2340000#！");
                cm.dispose();
				}else{
                cm.sendOk("第十环：#b收集200个#v4000106#交给我！！");
                cm.dispose();
				}
			} else if (cm.getPS() == 10 ){
				cm.sendOk("你已完成今日全部跑商任务");
				cm.dispose();
            }
        }
    }
}
