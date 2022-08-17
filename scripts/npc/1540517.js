var status = 0;
var choice;
var aaa = false;
var CashList = [];

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    } 
    if (mode == 1) 
	    status++;
	else
        status--;			
        if (status == 0) {			
            text = "#e#b欢迎来到#r优衣库#b：#n\r\n";
			text+= "在我们这里可以体验到所有的#r现金装备#b，并且#r全部免费#b哦！\r\n";
			text+= "但是时间只有#r5分钟#b哦，喜欢的话请花钱购买正品吧！\r\n";
			text+= "#d请输入你要试穿装备名称的关键字，我们会为您筛选：";
            cm.sendGetText(text);//,1000000,1000000,1999999
 } else if (status == 1) {
	      for (var i = 1000000; i < 1999999; i++) {
		    var Str = cm.getItemName(i);
	        if (Str != null && cm.isCash(i)) {
		      if (Str.indexOf(cm.getText()) >= 0) {
				  CashList.push(i);
			     }
			  }
		  }
		    if (CashList.length == 0) {
				cm.sendOk("#e#b未搜到相关装备，请重新确认输入信息...#k\r\n#r注：搜索的信息不要有间隔，确保装备名称中存在。#k#n");
				status = -1;
				return;
			}
			text = "#e#b为您检索到了已下装备，请选择你需要的吧：#k#n\r\n";
			  for (var i = 0; i < CashList.length; i++) {
				text+= "#L"+ i +"##i"+ CashList[i] +"# #e#r#z"+ CashList[i] +"##k#n\r\n";
			  }
                cm.sendSimple(text);
 } else if (status == 2) {	  
		   cm.sendYesNo("#e#b只要你点击“确认”按键，我就会把\r\n\r\n#i"+ CashList[selection] +"# #r“#z"+ CashList[selection] +"#”#b 发到你的背包里喔！\r\n\r\n如果你的背包满了，装备就会从背包里漏掉的，哈哈！");
		   choice = selection;
 } else if (status == 3) {
	     if (cm.getSpace(1) < 1) {
			cm.sendOk("#r“装备栏”#k似乎堆满了装备呢，请将背包空出来再来找我吧...");
			cm.dispose();
	  } else {
		var toDrop = cm.getNewEquip(CashList[choice]); // 生成一个Equip类
		    toDrop.setExpiration(cm.getCurrentTime() + (5 * 60 * 1000));
		    cm.addFromDrop(toDrop);
			cm.playerMessage(- 5,"获得优衣库赠送装备（"+ cm.getItemName(CashList[choice]) +"）");
		    cm.playerMessage(1, "装备给到你了，欢迎下次再来！");
			cm.dispose();
	        }
        }            
    } 