/*
SnailMS脚本生成器
*/
importClass(Packages.snail.RedeemCodeUtils);

var mark = 0;

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
		var text = "这里是出师兑换码管理界面\r\n\r\n";
		text += "#L1##b生成新兑换码#k#l\r\n\r\n";
		text += "#L2##b提取兑换码#k#l\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection == 1){
			//在这里编写选项1要做的事
			var text = "请输入你想要#r生成#k的兑换码数量：";
			cm.sendGetNumber(text, 1, 1, 100);
			mark = 1;
		}else if (selection == 2) {
			//在这里编写选项2要做的事
			var count = RedeemCodeUtils.getCodeQuantity("出师", false, false);
			if(count > 0){
				var text = "目前有 #b" + count + "#k 个兑换码可用，请输入你想要#r提取#k的兑换码数量：";
				cm.sendGetNumber(text, 1, 1, count);
				mark = 2;
			}else{
				cm.sendOk("目前没有可用的兑换码，请先生成新的兑换码。");
				cm.dispose();
				return;
			}
		} 
		
	} else if(status == 2){
		switch(mark){
			case 1:
				if(RedeemCodeUtils.newCode(5, "出师", 0, 1, selection)){
					cm.sendOk("已成功生成#b" + selection + "#k个兑换码");
				}else{
					cm.sendOk("生成兑换码失败，请检查输入是否正确。");
					cm.dispose();
					return;
				}
				break;
			case 2:
				var codeList = RedeemCodeUtils.getCode("出师", selection);
				if(codeList != null && !codeList.isEmpty()){
					var text = "已将生成的兑换码文件放置在#b服务端根目录---codes#k文件夹中，生成的兑换码如下：\r\n";
					for(var i = 0; i < codeList.size(); i++){
						text += codeList.get(i) + "\r\n";
					}
					cm.sendSimple(text);
				}else{
					cm.sendOk("目前没有可用的兑换码，请先生成新的兑换码。");
					cm.dispose();
					return;
				}
			default:
				cm.dispose();
				return;
				
		}
	} else {
		cm.openNpc(9900004, 10093);
		cm.safeDispose();
		return;
	}
}

