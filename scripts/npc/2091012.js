


var status = 0;
var txt;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
            txt ="请选择你要兑换的物品:\r\n";
			txt +="#L1# #b200个#k #i4001620# #z4001620# 兑换 #i1132308##l\r\n";//腰带
			txt +="#L2# #b300个#k #i4001620# #z4001620# 兑换 #i1012632##l\r\n";//眼罩
			txt +="#L3# #b300个#k #i4001620# #z4001620# 兑换 #i1022278##l\r\n";//脸饰
			txt +="#L4# #b400个#k #i4001620# #z4001620# 兑换 #i1122430##l\r\n";//项链
			txt +="#L5# #b500个#k #i4001620# #z4001620# 兑换 #i1672082##l\r\n";//心脏
			txt +="#L6# #b100个#k  #i4001620# #z4001620# 兑换 #i4036454# #r漆黑套进化材料#l\r\n";//升级材料
			//cm.dispose();
            cm.sendSimple(txt);
            
           
        
        
    } else if (status ==1){
		if (selection==1){
		if (cm.getSpace(1)>1 &&cm.haveItem(4001620, 200)){
			cm.gainItem(4001620,-200);
			cm.gainItem(1132308,1);
			cm.sendOk("领取成功");
		    
		} else{
			cm.sendOk("你没有足够的武公的证物!");
		}
            status =-1;
    }  else if (selection==2){
		if (cm.getSpace(1)>1 &&cm.haveItem(4001620, 300)){
			cm.gainItem(4001620,-300);
			cm.gainItem(1012632,1);
			cm.sendOk("领取成功");
		    
		} else{
			cm.sendOk("你没有足够的武公的证物!");
		}
            cm.dispose();
	}  else if (selection==3){
		if (cm.getSpace(1)>1 &&cm.haveItem(4001620, 300)){
			cm.gainItem(4001620,-300);
			cm.gainItem(1022278,1);
			cm.sendOk("领取成功");
		    
		} else{
			cm.sendOk("你没有足够的武公的证物!");
		}
            cm.dispose();
	}  else if (selection==4){
		if (cm.getSpace(1)>1 &&cm.haveItem(4001620, 400)){
			cm.gainItem(4001620,-400);
			cm.gainItem(1122430,1);
			cm.sendOk("领取成功");
		    
		} else{
			cm.sendOk("你没有足够的武公的证物!");
		}
            cm.dispose();
	}  else if (selection==5){
		if (cm.getSpace(1)>1 &&cm.haveItem(4001620, 500)){
			cm.gainItem(4001620,-500);
			cm.gainItem(1672082,1);
			cm.sendOk("领取成功");
		    
		} else{
			cm.sendOk("你没有足够的武公的证物!");
		}
            cm.dispose();
	}  else if (selection==6){
		if (cm.getSpace(1)>1 &&cm.haveItem(4001620, 100)){
			cm.gainItem(4001620,-100);
			cm.gainItem(4036454,1);
			cm.sendOk("领取成功");
		    
		} else{
			cm.sendOk("你没有足够的武公的证物!");
		}
            status =-1;
}
}
}
