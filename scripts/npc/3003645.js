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
			cm.sendOk("对话结束语");
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		//在这里编写脚本第一步要做的事
		var text = "收礼盒收礼盒，不要的礼盒可以卖给我了啊~价格包你满意！这位冒险家，你有什么礼盒呢？\r\n\r\n";
		text += "#L1##b我有#r#v2430282#神秘礼盒#l\t#L2##b我有#r#v2431046#推广礼盒#l\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection == 1){
			//在这里编写选项1要做的事
			cm.safeDispose();
			cm.openNpc(3003645, 1);
			return;
		}else if (selection == 2) {
			//在这里编写选项2要做的事
			cm.safeDispose();
			cm.openNpc(3003645, 2);
			return;
		} 
		return;
		
	} else {
		cm.dispose();
		return;
	}
}

