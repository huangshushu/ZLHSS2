/*
SnailMS脚本生成器
*/
importClass(Packages.snail.RedeemCodeUtils);

var mark = 0;
var quantity = -1;
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
		var text = "这里是CDK兑换码管理界面\r\n\r\n";
		text += "#L1##b生成并提取月卡兑换码#k#l\r\n\r\n";
		text += "#L2##b生成并提取赞助币兑换码#k#l\r\n\r\n";
		text += "#L3##b生成并提取累计赞助兑换码#k#l\r\n\r\n";
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
			var text = "请设置每个兑换码可兑换赞助币的数量：";
			cm.sendGetNumber(text, 1, 1, 9999);
			mark = 2;
		} else if (selection == 3) {
			//在这里编写选项2要做的事
			var text = "请设置每个兑换码可兑换累计赞助的数量：";
			cm.sendGetNumber(text, 1, 1, 9999);
			mark = 3;
		} 
		
	} else if(status == 2){
		switch(mark){
			case 1:
				if(RedeemCodeUtils.newCode(5, "月卡", 2022521, 1, selection)){
					var codeList = RedeemCodeUtils.getCode("月卡", selection);
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
				}else{
					cm.sendOk("生成兑换码失败，请检查输入是否正确。");
					cm.dispose();
					return;
				}
				break;
			case 2:
				quantity = selection;
				var text = "请输入你想要#r生成#k的兑换码数量：";
				cm.sendGetNumber(text, 1, 1, 100);
				break;
			case 3:
				quantity = selection;
				var text = "请输入你想要#r生成#k的兑换码数量：";
				cm.sendGetNumber(text, 1, 1, 100);
				break;
			default:
				cm.dispose();
				return;
				
		}
	} else if(status == 3){
		switch(mark){
			case 2:
				if(RedeemCodeUtils.newCode(5, "赞助币", 4310088, quantity, selection)){
					var codeList = RedeemCodeUtils.getCode("赞助币", selection);
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
				}else{
					cm.sendOk("生成兑换码失败，请检查输入是否正确。");
					cm.dispose();
					return;
				}
				break;
			case 3:
				if(RedeemCodeUtils.newCode(5, "累计赞助", 0, quantity, selection)){
					var codeList = RedeemCodeUtils.getCode("累计赞助", selection);
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
				}else{
					cm.sendOk("生成兑换码失败，请检查输入是否正确。");
					cm.dispose();
					return;
				}
				break;
			default:
				cm.dispose();
				return;
		}
	} else {
		cm.openNpc(9900004, 47);
		cm.safeDispose();
		return;
	}
}

