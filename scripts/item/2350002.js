/*
 蜗牛冒险岛(079)游戏服务端
 角色改名卡
 */


var status = -1;
var sels;
var oldName = "";
var newName = "";

function start() {
	status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.对话结束();
        return;
    }
    if (status == 0) {
		cm.sendGetText("欢迎使用角色改名券，请输入你想要更改的名字：");
		
	}else if (status == 1) {
		oldName = cm.getPlayer().getName();
		newName = cm.getText();
		//cm.playerMessage(6, "名字长度 = " + 判断字节数(newName));//测试
		if(判断字节数(newName) > 12){
			cm.sendOk("名字长度不能超过 #r6 个中文字符#k或 #r12 个英文字符#k");
			cm.dispose()
			return;
		}
		// cm.getPlayer().dropMessage("newName = " + newName);
		cm.sendYesNo("你确认要把名字更改为 #r" + newName + " #k吗？");
		
	}else if (status == 2) {
		if(newName == ""){
			cm.sendSimpleS("#r错误，角色名为空！", 0, 3003364);
			return;
		}
		if(cm.判断物品数量(2350002,1)){
			cm.gainItem(2350002,-1);
			switch(cm.改角色名(newName)){
				case 1:
					cm.sendSimpleS("你要更改的名字和你原来的一样，你怕不是在逗我吧？", 0, 3003364);
					cm.gainItem(2350002,1);
					return;
					
				case 2:
					cm.sendSimpleS("这个角色名已经有人使用了，换个名字吧", 0, 3003364);
					cm.gainItem(2350002,1);
					return;
				case 3:
					cm.sendSimpleS("名字里包含非法字符，换个名字吧", 0, 3003364);
					cm.gainItem(2350002,1);
					return;
				case 0:
					
			}
			
			var item = cm.getNewEquip(2350002);
			cm.全服道具公告("【角色系统】", "玩家 " + oldName + " 使用改名卡将名字更改为了 " + newName, item);
			cm.safeDispose();
		}else{
			cm.sendSimpleS("抱歉，你没有足够的#v2350002#", 0, 3003364);
			cm.safeDispose();
			return;
		}
	} else {
        cm.safeDispose();
		return;
    }
}

function 判断字节数(str){
	var strlen = str.length; // 字符串长度
		//chrlen = str.replace(/[^\x00-\xff]/g, '**').length // 字节长度

	var j = 0;
	for (var i = 0; i < strlen; i++) {
		var chr = str.charAt(i)
		if (/[\x00-\xff]/.test(chr)) {
			j++ // ascii码为0-255，一个字符就是一个字节的长度
		} else {
			j += 2 // ascii码为0-255以外，一个字符就是两个字节的长度
		}
	}
	return j;
	
}