/*
SnailMS脚本生成器
*/
var mobList = Array(9600037, 9600038, 9600039, 9600040, 9600041, 9600042, 9600043, 9600044, 9600045, 9600046, 9600047, 9600048, 9600049, 9600050, 9600051, 9600052, 9600053, 9600054, 9600055, 9600056, 9600057, 9600058, 9600059, 9600060, 9600061, 9600062);//英语字母的

//var mobList = Array(9600037, 9600038, 9600039, 9600040, 9600041, 9600042, 9600043, 9600044, 9600045, 9600046, 9600047, 9600048, 9600049, 9600050, 9600051, 9600052, 9600053, 9600054, 9600055, 9600056, 9600057, 9600058, 9600059, 9600060, 9600061, 9600062);备用的

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.sendOk("对话结束语");
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		//在这里编写脚本第一步要做的事
		var text = "请输入你要召唤的字母数量（从A~Z随机召唤）\r\n\r\n";
		cm.sendGetNumber(text, 1, 1, 1000);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection > 0 && selection <= 1000){
			//在这里编写选项1要做的事
			var map = cm.getPlayer().getMap();
			if(map != null){
				var count = 0;
				var check = 0;
				var chrList = map.getAllPlayersThreadsafe();
				//cm.playerMessage(6, "chrList数量 = " + chrList.size());//测试
				if(chrList != null && chrList.size() > 0){
					while(count < selection){
						check++;
						if(check > 2 * selection){
							cm.sendOk("陷入死循环，强制退出。");
							cm.dispose();
							return;
						}
						//cm.playerMessage(6, "进入第一个循环，count = " + count);//测试
						var it = chrList.iterator();
						while(it.hasNext()){
							check++;
							if(count >= selection){
								break;
							}
							//cm.playerMessage(6, "开始召唤");//测试
							var i = parseInt(Math.random() * mobList.length - 1);
							//cm.playerMessage(6, "i为" + i);//测试
							var chr = it.next();
							if(chr != null){
								var x = chr.getPosition().x;
								//cm.playerMessage(6, "x为" + x);//测试
								var y = chr.getPosition().y;
								//cm.playerMessage(6, "y为" + y);//测试
								cm.spawnMob_map(mobList[i], map.getId(), x, y);
								count++;
								//cm.playerMessage(6, "召唤第" + count + "只");//测试
							}else{
								cm.sendOk("错误，读取的角色为空。");
								cm.dispose();
								return;
							}
							
						}
					}
				}else{
					cm.sendOk("错误，找不到地图上的角色列表。");
					cm.dispose();
					return;
				}
			}else{
				cm.sendOk("错误，读取地图为空值。");
				cm.dispose();
				return;
			}
			cm.sendOk("召唤成功。");
			cm.dispose();
			return;
		}else if (selection == 2) {
			//在这里编写选项2要做的事
			cm.sendOk("只能输入1~1000。");
			cm.dispose();
			return;
		} 
		cm.dispose();
		
	} else {
		cm.dispose();
		return;
	}
}

