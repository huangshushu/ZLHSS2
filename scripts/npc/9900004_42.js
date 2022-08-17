/*
 ZEVMS冒险岛(079)游戏服务端
 家族随身仓库
 */
var status = -1;
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/13#";
var 装备2 = "#fUI/CashShop.img/Base/Tab2/Enable/0#";
var 消耗2 = "#fUI/CashShop.img/Base/Tab2/Enable/1#";
var 设置2 = "#fUI/CashShop.img/Base/Tab2/Enable/2#";
var 其他2 = "#fUI/CashShop.img/Base/Tab2/Enable/3#";
var 特殊2 = "#fUI/CashShop.img/Base/Tab2/Enable/4#";
var a = "#fUI/Basic/BtHide3/mouseOver/0#";
var sl0items = null;
var bankitems = null;
var sel_0 = 0;
var sel_1 = 0;
var sel_2 = 0;
var sel_3 = 0;
var 选中 = "√";
var 未选 = "×";
var savemax = 500;//仓库上限
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    }
    var MC = cm.getServerName();
    var 家族随身仓库开关 = cm.GetPiot("家族随身仓库开关", "1");
    var MC = cm.getServerName();
	var 家族 =cm.getPlayer().getGuildId();
    var 家族权限1 = cm.Getguildsl(""+家族+"",1);//副族长能否存取
	var 家族权限2 = cm.Getguildsl(""+家族+"",2);//1级
	var 家族权限3 = cm.Getguildsl(""+家族+"",3);//2级
	var 家族权限4 = cm.Getguildsl(""+家族+"",4);//3级
	var 家族权限5 = cm.Getguildsl(""+家族+"",5);//
	if(cm.getPlayer().getGuildRank()==2){
		if(家族权限1>0){
			cm.sendOk("非常抱歉，你目前的家族成员级别不够，无法进入家族仓库。");
			cm.dispose();
        return;
		}
	}
	if(cm.getPlayer().getGuildRank()==3){
		if(家族权限2>0){
			cm.sendOk("非常抱歉，你目前的家族成员级别不够，无法进入家族仓库。");
			cm.dispose();
        return;
		}
	}
	if(cm.getPlayer().getGuildRank()==4){
		if(家族权限3>0){
			cm.sendOk("非常抱歉，你目前的家族成员级别不够，无法进入家族仓库。");
			cm.dispose();
        return;
		}
	}
	if(cm.getPlayer().getGuildRank()==5){
		if(家族权限4>0){
			cm.sendOk("非常抱歉，你目前的家族成员级别不够，无法进入家族仓库。");
			cm.dispose();
        return;
		}
	}
    status++;
    if (status == 0) {
        bankitems = cm.getBankItems1();
        var text = "\t\t\t" + 心 + "  " + 心 + " #r#e < 家族仓库 > #k#n " + 心 + "  " + 心 + "\r\n\r\n";
        
        if (cm.GetPiot("家族随身仓库开关", "1") <= 0) {
            text += "   #d最大存储；500 #r  \r\n";
            text += "   #d已用存储；" + (bankitems == null ? 0 : bankitems.size()) + " \r\n";
			text += "\t\t        #L99##b"+a+" 返回界面#l\r\n";
            if (cm.getPlayer().getGuildId() > 0) {
                text += "\t\t        #L21#"+a+" 存入道具#l\r\n";
                text += "\t\t        #L22#"+a+" 取出道具#l\r\n\r\n";
            }
			//族长操作
			if(cm.getPlayer().getGuildRank()==1){
				text += "\t\t          #r[存取权限设置]#k#b\r\n";
				text += "\t\t        #L10000#"+a+" "+cm.获取家族副族长备注(cm.getPlayer().getGuildId())+"";
				if(家族权限1<=0){
					text += ""+选中+"#l\r\n";
				}else{
					text += ""+未选+"#l\r\n";
					
				}
				text += "\t\t        #L10001#"+a+" "+cm.获取家族一级成员备注(cm.getPlayer().getGuildId())+"";
				if(家族权限2<=0){
					text += ""+选中+"#l\r\n";
				}else{
					text += ""+未选+"#l\r\n";
					
				}
				text += "\t\t        #L10002#"+a+" "+cm.获取家族二级成员备注(cm.getPlayer().getGuildId())+"";
				if(家族权限3<=0){
					text += ""+选中+"#l\r\n";
				}else{
					text += ""+未选+"#l\r\n";
					
				}
				text += "\t\t        #L10003#"+a+" "+cm.获取家族三级成员备注(cm.getPlayer().getGuildId())+"";
				if(家族权限4<=0){
					text += ""+选中+"#l\r\n";
				}else{
					text += ""+未选+"#l\r\n";
					
				}
			}		
        } else {
            text += "\r\n维护中···";
        }
		
        if (cm.getPlayer().getGMLevel() == 6) {
            if (cm.GetPiot("家族随身仓库开关", "1") <= 0) {
                text += "\r\n\t\t\t\t#L1000##b"+a+" 随身仓库#g[开启中]#r[GM]#k#l";
            }
            if (cm.GetPiot("家族随身仓库开关", "1") >= 1) {
                text += "\r\n\t\t\t\t#L1001##b"+a+" 随身仓库#r[关闭中]#r[GM]#k#l";
            }
        }
        cm.sendSimple(text);
    } else if (status == 1) {
        sel_0 = selection;
		//副会长
		if (selection == 10000) {
			if(家族权限1<=0){
				cm.Gainguildsl(""+家族+"",1,1);
			}else{
				cm.Gainguildsl(""+家族+"",1,-家族权限1);
			}
            cm.dispose();
            cm.openNpc(9900004, 42);
            return;
        }
		//一级成员
		if (selection == 10001) {
			if(家族权限2<=0){
				cm.Gainguildsl(""+家族+"",2,1);
			}else{
				cm.Gainguildsl(""+家族+"",2,-家族权限2);
			}
            cm.dispose();
            cm.openNpc(9900004, 42);
            return;
        }
		//二级成员
		if (selection == 10002) {
			if(家族权限3<=0){
				cm.Gainguildsl(""+家族+"",3,1);
			}else{
				cm.Gainguildsl(""+家族+"",3,-家族权限3);
			}
            cm.dispose();
            cm.openNpc(9900004, 42);
            return;
        }
		//三级成员
		if (selection == 10003) {
			if(家族权限4<=0){
				cm.Gainguildsl(""+家族+"",4,1);
			}else{
				cm.Gainguildsl(""+家族+"",4,-家族权限4);
			}
            cm.dispose();
            cm.openNpc(9900004, 42);
            return;
        }
        if (selection == 99) {
            cm.dispose();
            cm.openNpc(9900004, 4);
            return;
        }
        if (selection == 1000) {
            cm.GainPiot("家族随身仓库开关", "1", -家族随身仓库开关);
            cm.GainPiot("家族随身仓库开关", "1", 1);
            cm.dispose();
            cm.openNpc(9900004, 4);
            return;
        }
        if (selection == 1001) {
            cm.GainPiot("家族随身仓库开关", "1", -家族随身仓库开关);
            cm.dispose();
            cm.openNpc(9900004, 4);
            return;
        }
        if (selection == 21) {
            if (bankitems != null) {
                if (bankitems.size() >= 500) {
                    cm.sendOkS("仓库已达上限，不可存储。", 3);
                    cm.dispose();
                    return;
                }
            }
            var text = "\t\t\t\t#e#d★ 选择背 包种类 ★#k\r\n\r\n";
            text += "\t\t\t\t  #b#L2#" + 消耗2 + "#l#k\r\n";
            text += "\t\t\t\t  #b#L3#" + 设置2 + "#l#k\r\n";
            text += "\t\t\t\t  #b#L4#" + 其他2 + "#l#k\r\n";
            cm.sendSimple(text);
        } else if (selection == 22) {
            if (bankitems == null || bankitems.size() < 1) {
                cm.sendOkS("仓库里没有道具", 3);
                cm.dispose();
                return;
            }
            var text = "#e#b请选择你要取的道具;#n#k\r\n\r\n";
            for (var i = 0; i < bankitems.size(); i++) {
                text += "#r#L" + i + "##v" + bankitems.get(i).getItemid() + "# 数量 #r" + bankitems.get(i).getCount() + "#l#k\r\n";
            }
            cm.sendSimple(text);
        }
    } else if (status == 2) {
        sel_1 = selection;
        if (sel_0 == 21) {
            sl0items = cm.getItemsByType(sel_1);
            if (sl0items == null || sl0items.size() < 1) {
                cm.sendOkS("选择的背包里没有道具。", 3);
                cm.dispose();
                return;
            }
            var text = "#e#b请选择你存的道具;#n#k\r\n\r\n";
            for (var i = 0; i < sl0items.size(); i++) {
                text += "#r#L" + i + "##v" + sl0items.get(i).getItemId() + "# 数量 #r" + sl0items.get(i).getQuantity() + "#l#k\r\n";
            }
            cm.sendSimple(text);
        } else if (sel_0 == 22) {
            var takeselitem = bankitems.get(sel_1);
            if (takeselitem == null || takeselitem.getCount() < 1) {
                cm.sendOkS("选择的道具不存在。", 3);
                cm.dispose();
                return;
            }
            cm.sendGetNumber("请输入要取的数量。", takeselitem.getCount(), 1, takeselitem.getCount());
        }
    } else if (status == 3) {
        sel_2 = selection;
        if (sel_0 == 21) {
            var selItem = sl0items.get(sel_2);
            if (selItem == null || selItem.getQuantity() < 1) {
                cm.sendOkS("选择的道具不存在。", 3);
                cm.dispose();
                return;
            }
            cm.sendGetNumber("请输入要存的数量。", selItem.getQuantity(), 1, selItem.getQuantity());
        } else if (sel_0 == 22) {
            var takeselitem = bankitems.get(sel_1);
            if (takeselitem == null || takeselitem.getCount() < 1) {
                cm.sendOkS("选择的道具不存在。", 3);
                cm.dispose();
                return;
            }
            if (sel_2 < 1 || sel_2 > takeselitem.getCount()) {
                cm.sendOkS("要取的道具数量有误。", 3);
                cm.dispose();
                return;
            }
            var takeret = cm.takeBankItem1(takeselitem, sel_2);
            if (takeret == -1) {
                cm.sendOkS("取的对象为空。", 3);
            } else if (takeret == -2) {
                cm.sendOkS("数量不正确。", 3);
            } else if (takeret == -3) {
                cm.sendOkS("背包空间不足。", 3);
            } else {
                if (takeret > 0) {
                    cm.sendOkS("取道具完毕。", 3);
					cm.个人存档();
                } else {
                    cm.sendOkS("取失败，错误代码(" + takeret + ")", 3);
                }
            }
            cm.dispose();
        }
    } else if (status == 4) {
        sel_3 = selection;
        if (sel_0 == 21) {
            var selItem = sl0items.get(sel_2);
            if (selItem == null || selItem.getQuantity() < 1) {
                cm.sendOkS("选择的道具不存在。", 3);
                cm.dispose();
                return;
            }
            if (sel_3 < 1 || sel_3 > selItem.getQuantity()) {
                cm.sendOkS("存的道具数量有误。", 3);
                cm.dispose();
                return;
            }
            var saveret = cm.saveBankItem1(selItem, sel_3);
            if (saveret == -4) {
                cm.sendOkS("存的道具不存在。", 3);
            } else if (saveret == -5) {
                cm.sendOkS("点装或限时道具不能存。", 3);
            } else if (saveret == -6) {
                cm.sendOkS("存的数量大于存在数量。", 3);
            } else if (saveret == -8) {
                cm.sendOkS("锁定道具或一栏多个装备。", 3);
            } else {
                if (saveret > 0) {
                    cm.sendOkS("存储完毕。", 3);
					cm.个人存档();
                } else {
                    cm.sendOkS("存储失败，错误代码(" + saveret + ")", 3);
                }
            }
            cm.dispose();
        } else if (sel_0 == 22) {
            cm.dispose();
        }
    }
}