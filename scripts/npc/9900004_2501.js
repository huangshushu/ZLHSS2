/*
SnailMS脚本生成器
*/

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.sendOk("对话结束");
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		
		var text = "请输入你要转职的职业ID\r\n";
		cm.sendGetNumber(text, 0, 0, 10000);
	} else if (status == 1) {
		if(cm.getJob() == selection){
			cm.sendOk("你已经是这个职业了啊！");
			cm.dispose();
			return;
		}else{
			switch(selection){
				case 0:
				case 100:
				case 110:
				case 111:
				case 112:
				case 120:
				case 121:
				case 122:
				case 130:
				case 131:
				case 132:
				case 200:
				case 210:
				case 211:
				case 212:
				case 220:
				case 221:
				case 222:
				case 230:
				case 231:
				case 232:
				case 300:
				case 310:
				case 311:
				case 312:
				case 320:
				case 321:
				case 322:
				case 400:
				case 410:
				case 411:
				case 412:
				case 420:
				case 421:
				case 422:
				case 500:
				case 510:
				case 511:
				case 512:
				case 520:
				case 521:
				case 522:
				case 900:
				case 1000:
				case 1100:
				case 1110:
				case 1111:
				case 1112:
				case 1200:
				case 1210:
				case 1211:
				case 1212:
				case 1300:
				case 1310:
				case 1311:
				case 1312:
				case 1400:
				case 1410:
				case 1411:
				case 1412:
				case 1500:
				case 1510:
				case 1511:
				case 1512:
				case 2000:
				case 2100:
				case 2110:
				case 2111:
				case 2112:
					cm.changeJob(selection);
					cm.sendOk("转职成功！");
					cm.dispose();
					return;
				default:
					cm.sendOk("职业ID输入不合法！");
					cm.dispose();
					return;
			}
		}
		
		return;
		
	} else {
		cm.dispose();
		return;
	}
}

