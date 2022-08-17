load("nashorn:mozilla_compat.js");
importPackage(Packages.client);
importPackage(Packages.client.inventory);
importPackage(Packages.server);
importPackage(Packages.tools);
var date = new Date();
var day = date.getDay();

var status = 0;

	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function action(mode, type, selection) {
	if (mode == -1) {
		cm.sendOk("#b好的,下次再见.");
		cm.dispose();
		} else {
	if (status >= 0 && mode == 0) {
		cm.sendOk("#b好的,下次再见.");
		cm.dispose();
		return;
		}
	if (mode == 1)
		status++;
		else
		status--;


	if (status == 0) {
                var yu = cm.itemQuantity(4010000);
                var hs = yu*2
                var yu1 = cm.itemQuantity(4010001);
                var hs1 = yu1*2
                var yu2 = cm.itemQuantity(4010002);
                var hs2 = yu2*2
                var yu3 = cm.itemQuantity(4010003);
                var hs3 = yu3*2
                var yu4 = cm.itemQuantity(4010004);
                var hs4 = yu4*2
                var yu5 = cm.itemQuantity(4010005);
                var hs5 = yu5*2
                var yu6 = cm.itemQuantity(4010006);
                var hs6 = yu6*2
                var yu7 = cm.itemQuantity(4020000);
                var hs7 = yu7*2
                var yu8 = cm.itemQuantity(4020001);
                var hs8 = yu8*2
                var yu9 = cm.itemQuantity(4020002);
                var hs9 = yu9*2
                var yu11 = cm.itemQuantity(4020004);
                var hs11 = yu11*2
                var yu12 = cm.itemQuantity(4020005);
                var hs12 = yu12*2
                var yu13 = cm.itemQuantity(4020006);
                var hs13 = yu13*2
                var yu14 = cm.itemQuantity(4020007);
                var hs14 = yu14*2
                var yu15 = cm.itemQuantity(4020008);
                var hs15 = yu15*2
var mianfei = cm.getBossLog('huishoumukuang');
var symianfei = 10-mianfei;
   	    var add = "#e#r请问要回收什么母矿(#r注意#b:一键回收)#n#k:\r\n(剩余#r" + symianfei + "#k次#b,#r豪华玩家#k无次数限制#k)\r\n#L0# 您拥有#r"+yu+"#k个#v4010000#(可回收#r" + hs + "#k豆豆)\r\n#L1# 您拥有#r"+yu1+"#k个#v4010001#(可回收#r" + hs1 + "#k豆豆)\r\n#L2# 您拥有#r"+yu2+"#k个#v4010002#(可回收#r" + hs2 + "#k豆豆)\r\n#L3# 您拥有#r"+yu3+"#k个#v4010003#(可回收#r" + hs3 + "#k豆豆)\r\n#L4# 您拥有#r"+yu4+"#k个#v4010004#(可回收#r" + hs4 + "#k豆豆)\r\n#L5# 您拥有#r"+yu5+"#k个#v4010005#(可回收#r" + hs5 + "#k豆豆)\r\n#L6# 您拥有#r"+yu6+"#k个#v4010006#(可回收#r" + hs6 + "#k豆豆)\r\n#L7# 您拥有#r"+yu7+"#k个#v4020000#(可回收#r" + hs7 + "#k豆豆)\r\n#L8# 您拥有#r"+yu8+"#k个#v4020001#(可回收#r" + hs8 + "#k豆豆)\r\n#L9# 您拥有#r"+yu9+"#k个#v4020002#(可回收#r" + hs9 + "#k豆豆)\r\n#L11# 您拥有#r"+yu11+"#k个#v4020004#(可回收#r" + hs11 + "#k豆豆)\r\n#L12# 您拥有#r"+yu12+"#k个#v4020005#(可回收#r" + hs12 + "#k豆豆)\r\n#L13# 您拥有#r"+yu13+"#k个#v4020006#(可回收#r" + hs13 + "#k豆豆)\r\n#L14# 您拥有#r"+yu14+"#k个#v4020007#(可回收#r" + hs14 + "#k豆豆)\r\n#L15# 您拥有#r"+yu15+"#k个#v4020008#(可回收#r" + hs15 + "#k豆豆)\r\n";//

		cm.sendSimple (add);    

	} else if (status == 1) {
                var yu = cm.itemQuantity(4010000);
                var hs = yu*2
                var yu1 = cm.itemQuantity(4010001);
                var hs1 = yu1*2
                var yu2 = cm.itemQuantity(4010002);
                var hs2 = yu2*2
                var yu3 = cm.itemQuantity(4010003);
                var hs3 = yu3*2
                var yu4 = cm.itemQuantity(4010004);
                var hs4 = yu4*2
                var yu5 = cm.itemQuantity(4010005);
                var hs5 = yu5*2
                var yu6 = cm.itemQuantity(4010006);
                var hs6 = yu6*2
                var yu7 = cm.itemQuantity(4020000);
                var hs7 = yu7*2
                var yu8 = cm.itemQuantity(4020001);
                var hs8 = yu8*2
                var yu9 = cm.itemQuantity(4020002);
                var hs9 = yu9*2

                var yu11 = cm.itemQuantity(4020004);
                var hs11 = yu11*2
                var yu12 = cm.itemQuantity(4020005);
                var hs12 = yu12*2
                var yu13 = cm.itemQuantity(4020006);
                var hs13 = yu13*2
                var yu14 = cm.itemQuantity(4020007);
                var hs14 = yu14*2
                var yu15 = cm.itemQuantity(4020008);
                var hs15 = yu15*2
	if (selection == 0) {
if (yu >= 10000){
cm.sendOk ("#e#r检测到您该矿石回收数量大于10000,请把多余的矿石放进仓库");
                  	cm.dispose();
} else if (cm.getChar().判断会员() >= 1){
		cm.gainBeans(hs);
                cm.removeAll(4010000);
		cm.sendOk ("好的，一键回收！获得#r"+ hs +"#k豆豆");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("每天只能回收#r10#k次,#r豪华玩家#k无次数限制#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs);
                cm.removeAll(4010000);
		cm.sendOk ("好的，一键回收！获得#r"+ hs +"#k豆豆");
                  	cm.dispose();
                    }
                    }
	 } else if (selection == 1) {

if (yu1 >= 10000){
cm.sendOk ("#e#r检测到您该矿石回收数量大于10000,请把多余的矿石放进仓库");
                  	cm.dispose();
} else if (cm.getChar().判断会员() >= 1){
		cm.gainBeans(hs1);
                cm.removeAll(4010001);
		cm.sendOk ("好的，一键回收！获得#r"+ hs1 +"#k豆豆");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("每天只能回收#r10#k次,#r豪华玩家#k无次数限制#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs1);
                cm.removeAll(4010001);
		cm.sendOk ("好的，一键回收！获得#r"+ hs1 +"#k豆豆");
                  	cm.dispose();
                    }
                    }

	 } else if (selection == 2) {
if (yu2 >= 10000){
cm.sendOk ("#e#r检测到您该矿石回收数量大于10000,请把多余的矿石放进仓库");
                  	cm.dispose();
} else if (cm.getChar().判断会员() >= 1){
		cm.gainBeans(hs2);
                cm.removeAll(4010002);
		cm.sendOk ("好的，一键回收！获得#r"+ hs2 +"#k豆豆");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("每天只能回收#r10#k次,#r豪华玩家#k无次数限制#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs2);
                cm.removeAll(4010002);
		cm.sendOk ("好的，一键回收！获得#r"+ hs2 +"#k豆豆");
                  	cm.dispose();
                    }
                    }
	 } else if (selection == 3) {
if (yu3 >= 10000){
cm.sendOk ("#e#r检测到您该矿石回收数量大于10000,请把多余的矿石放进仓库");
                  	cm.dispose();
} else if (cm.getChar().判断会员() >= 1){
		cm.gainBeans(hs3);
                cm.removeAll(4010003);
		cm.sendOk ("好的，一键回收！获得#r"+ hs3 +"#k豆豆");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("每天只能回收#r10#k次,#r豪华玩家#k无次数限制#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs3);
                cm.removeAll(4010003);
		cm.sendOk ("好的，一键回收！获得#r"+ hs3 +"#k豆豆");
                  	cm.dispose();
                    }
                    }
	 } else if (selection == 4) {
if (yu4 >= 10000){
cm.sendOk ("#e#r检测到您该矿石回收数量大于10000,请把多余的矿石放进仓库");
                  	cm.dispose();
} else if (cm.getChar().判断会员() >= 1){
		cm.gainBeans(hs4);
                cm.removeAll(4010004);
		cm.sendOk ("好的，一键回收！获得#r"+ hs4 +"#k豆豆");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("每天只能回收#r10#k次,#r豪华玩家#k无次数限制#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs4);
                cm.removeAll(4010004);
		cm.sendOk ("好的，一键回收！获得#r"+ hs4 +"#k豆豆");
                  	cm.dispose();
                    }
                    }
	 } else if (selection == 5) {
if (yu5 >= 10000){
cm.sendOk ("#e#r检测到您该矿石回收数量大于10000,请把多余的矿石放进仓库");
                  	cm.dispose();
} else if (cm.getChar().判断会员() >= 1){
		cm.gainBeans(hs5);
                cm.removeAll(4010005);
		cm.sendOk ("好的，一键回收！获得#r"+ hs5 +"#k豆豆");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("每天只能回收#r10#k次,#r豪华玩家#k无次数限制#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs5);
                cm.removeAll(4010005);
		cm.sendOk ("好的，一键回收！获得#r"+ hs5 +"#k豆豆");
                  	cm.dispose();
                    }
                    }
	 } else if (selection == 6) {
if (yu6 >= 10000){
cm.sendOk ("#e#r检测到您该矿石回收数量大于10000,请把多余的矿石放进仓库");
                  	cm.dispose();
} else if (cm.getChar().判断会员() >= 1){
		cm.gainBeans(hs6);
                cm.removeAll(4010006);
		cm.sendOk ("好的，一键回收！获得#r"+ hs6 +"#k豆豆");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("每天只能回收#r10#k次,#r豪华玩家#k无次数限制#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs6);
                cm.removeAll(4010006);
		cm.sendOk ("好的，一键回收！获得#r"+ hs6 +"#k豆豆");
                  	cm.dispose();
                    }
                    }
	 } else if (selection == 7) {
if (yu7 >= 10000){
cm.sendOk ("#e#r检测到您该矿石回收数量大于10000,请把多余的矿石放进仓库");
                  	cm.dispose();
} else if (cm.getChar().判断会员() >= 1){
		cm.gainBeans(hs7);
                cm.removeAll(4020000);
		cm.sendOk ("好的，一键回收！获得#r"+ hs7 +"#k豆豆");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("每天只能回收#r10#k次,#r豪华玩家#k无次数限制#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs7);
                cm.removeAll(4020000);
		cm.sendOk ("好的，一键回收！获得#r"+ hs7 +"#k豆豆");
                  	cm.dispose();
                    }
                    }
	 } else if (selection == 8) {
if (yu8 >= 10000){
cm.sendOk ("#e#r检测到您该矿石回收数量大于10000,请把多余的矿石放进仓库");
                  	cm.dispose();
} else if (cm.getChar().判断会员() >= 1){
		cm.gainBeans(hs8);
                cm.removeAll(4020001);
		cm.sendOk ("好的，一键回收！获得#r"+ hs8 +"#k豆豆");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("每天只能回收#r10#k次,#r豪华玩家#k无次数限制#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs8);
                cm.removeAll(4020001);
		cm.sendOk ("好的，一键回收！获得#r"+ hs8 +"#k豆豆");
                  	cm.dispose();
                    }
                    }
	 } else if (selection == 9) {
if (yu9 >= 10000){
cm.sendOk ("#e#r检测到您该矿石回收数量大于10000,请把多余的矿石放进仓库");
                  	cm.dispose();
} else if (cm.getChar().判断会员() >= 1){
		cm.gainBeans(hs9);
                cm.removeAll(4020002);
		cm.sendOk ("好的，一键回收！获得#r"+ hs9 +"#k豆豆");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("每天只能回收#r10#k次,#r豪华玩家#k无次数限制#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs9);
                cm.removeAll(4020002);
		cm.sendOk ("好的，一键回收！获得#r"+ hs9 +"#k豆豆");
                  	cm.dispose();
                    }
                    }
	 } else if (selection == 100) {
if (yu10 >= 10000){
cm.sendOk ("#e#r检测到您该矿石回收数量大于10000,请把多余的矿石放进仓库");
                  	cm.dispose();
} else if (cm.getChar().判断会员() >= 1){
		cm.gainBeans(hs10);
                cm.removeAll(4020003);
		cm.sendOk ("好的，一键回收！获得#r"+ hs10 +"#k豆豆");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("每天只能回收#r10#k次,#r豪华玩家#k无次数限制#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs10);
                cm.removeAll(4020003);
		cm.sendOk ("好的，一键回收！获得#r"+ hs10 +"#k豆豆");
                  	cm.dispose();
                    }
                    }
	 } else if (selection == 11) {
if (yu11 >= 10000){
cm.sendOk ("#e#r检测到您该矿石回收数量大于10000,请把多余的矿石放进仓库");
                  	cm.dispose();
} else if (cm.getChar().判断会员() >= 1){
		cm.gainBeans(hs11);
                cm.removeAll(4020004);
		cm.sendOk ("好的，一键回收！获得#r"+ hs11 +"#k豆豆");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("每天只能回收#r10#k次,#r豪华玩家#k无次数限制#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs11);
                cm.removeAll(4020004);
		cm.sendOk ("好的，一键回收！获得#r"+ hs11 +"#k豆豆");
                  	cm.dispose();
                    }
                    }
	 } else if (selection == 12) {
if (yu12 >= 10000){
cm.sendOk ("#e#r检测到您该矿石回收数量大于10000,请把多余的矿石放进仓库");
                  	cm.dispose();
} else if (cm.getChar().判断会员() >= 1){
		cm.gainBeans(hs12);
                cm.removeAll(4020005);
		cm.sendOk ("好的，一键回收！获得#r"+ hs12 +"#k豆豆");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("每天只能回收#r10#k次,#r豪华玩家#k无次数限制#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs12);
                cm.removeAll(4020005);
		cm.sendOk ("好的，一键回收！获得#r"+ hs12 +"#k豆豆");
                  	cm.dispose();
                    }
                    }
	 } else if (selection == 13) {
if (yu13 >= 10000){
cm.sendOk ("#e#r检测到您该矿石回收数量大于10000,请把多余的矿石放进仓库");
                  	cm.dispose();
} else if (cm.getChar().判断会员() >= 1){
		cm.gainBeans(hs13);
                cm.removeAll(4020006);
		cm.sendOk ("好的，一键回收！获得#r"+ hs13 +"#k豆豆");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("每天只能回收#r10#k次,#r豪华玩家#k无次数限制#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs13);
                cm.removeAll(4020006);
		cm.sendOk ("好的，一键回收！获得#r"+ hs13 +"#k豆豆");
                  	cm.dispose();
                    }
                    }
	 } else if (selection == 14) {
if (yu14 >= 10000){
cm.sendOk ("#e#r检测到您该矿石回收数量大于10000,请把多余的矿石放进仓库");
                  	cm.dispose();
} else if (cm.getChar().判断会员() >= 1){
		cm.gainBeans(hs14);
                cm.removeAll(4020007);
		cm.sendOk ("好的，一键回收！获得#r"+ hs14 +"#k豆豆");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("每天只能回收#r10#k次,#r豪华玩家#k无次数限制#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs14);
                cm.removeAll(4020007);
		cm.sendOk ("好的，一键回收！获得#r"+ hs14 +"#k豆豆");
                  	cm.dispose();
                    }
                    }
	 } else if (selection == 15) {
if (yu15 >= 10000){
cm.sendOk ("#e#r检测到您该矿石回收数量大于10000,请把多余的矿石放进仓库");
                  	cm.dispose();
} else if (cm.getChar().判断会员() >= 1){
		cm.gainBeans(hs15);
                cm.removeAll(4020008);
		cm.sendOk ("好的，一键回收！获得#r"+ hs15 +"#k豆豆");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("每天只能回收#r100#k次,#r豪华玩家#k无次数限制#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs15);
                cm.removeAll(4020008);
		cm.sendOk ("好的，一键回收！获得#r"+ hs15 +"#k豆豆");
                  	cm.dispose();
                    }
                    }

                } else if(selection == 54) {
                 cm.openNpc(9900001); 


               
               
                }					
		}
		}
		}

