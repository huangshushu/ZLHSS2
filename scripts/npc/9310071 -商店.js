var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
            			
            //text += "" + 蓝色箭头 + "#L1##b#e网吧经验增加30% (12小时)#v1142145#需要：点卷=1200点#l \r\n\r\n"//3
            //text += "" + 蓝色箭头 + "#L13##r#e扩充#r角色位一个需要：充值币30个#l \r\n\r\n"//3
			
            text += "" + 蓝色箭头 + "暂未开放!!!#l \r\n\r\n"//3			
		    //text += "" + 蓝色箭头 + "#L13##r#e扩充#r角色位一个需要：充值币30个#l \r\n\r\n"//3
			cm.sendSimple(text);
            }
			
			
			} else if (selection == 13) {
                if(cm.getmoneyb() < 30){
				cm.sendOk("充值币不足无法换购！");
                cm.dispose();
				} else if (cm.getPlayer().getNX() >= 0) {
					//cm.gainNX(-5500);
				cm.increaseCharacterSlots(0);//
				 cm.setmoneyb(-30);	
				 cm.gainjf(+30);
cm.全服公告( "[" + cm.getPlayer().getName() + "]成功购买[角色位1个]");
            cm.dispose();
			}else{
            cm.sendOk("点券不足无法换购！");
            cm.dispose();
               }
			   
			   } else if (selection == 11) {
               // if (cm.getPlayer().getNX() >= 5000) {
				   if(cm.getmoneyb() >= 20){
				cm.setmoneyb(-20);	
				cm.gainItem(5520000,1,1);
				cm.gainjf(+20);
cm.全服公告( "[" + cm.getPlayer().getName() + "]成功购买[宿命剪刀]，爆肝愉快~");
            cm.dispose();
			}else{
            cm.sendOk("点卷不足无法换购！");
            cm.dispose();
			}
			   
        } else if (selection == 1) {
                if (cm.getPlayer().getCSPoints(1) >= 1200) {
				cm.gainNX(-1200);
				cm.gainItem(1142145,1,12);
cm.全服公告( "[" + cm.getPlayer().getName() + "]成功购买[网吧勋章经验增加30%（12小时）]，爆肝愉快~");
            cm.dispose();
			}else{
            cm.sendOk("点卷不足无法换购！");
            cm.dispose();
			}
        } else if (selection == 2) {
                if (cm.getPlayer().getCSPoints(2) >= 300) {
				cm.gainNX(-300);
				cm.gainItem(5211047,1);
cm.全服公告(  "[" + cm.getPlayer().getName() + "]成功购买[双倍经验卡（3小时权）]，爆肝愉快~");
            cm.dispose();
			}else{
            cm.sendOk("抵用券不足无法换购！");
            cm.dispose();
			}
        } else if (selection == 3) {
                if (cm.getPlayer().getCSPoints(1) >= 1200) {
				cm.gainNX(-1200);
				cm.gainItem(5210002,1,1);
cm.全服公告( "[" + cm.getPlayer().getName() + "]成功购买[双倍经验卡（1天权）]，爆肝愉快~");
            cm.dispose();
			}else{
            cm.sendOk("点卷不足无法换购！");
            cm.dispose();
			}
        } else if (selection == 4) {
               if (cm.getPlayer().getCSPoints(2) >= 3000) {
				cm.gainNX(-3000);
				cm.gainItem(5210001,1,7);
cm.全服公告( "[" + cm.getPlayer().getName() + "]成功购买[双倍经验卡（7天权）]，爆肝愉快~");
            cm.dispose();
			}else{
            cm.sendOk("充值币不足无法换购！");
            cm.dispose();
			}
        } else if (selection == 5) {
                if (cm.getPlayer().getCSPoints(1) >= 1200) {
				cm.gainNX(-1200);
				cm.gainItem(5360015,1,1);
cm.全服公告( "[" + cm.getPlayer().getName() + "]成功购买[双倍爆率卡（一天权）]，爆肝愉快~");
            cm.dispose();
			}else{
            cm.sendOk("充值币不足无法换购！");
            cm.dispose();
			}
			
			} else if (selection == 14) {
                if(cm.getmoneyb() >= 10){
				 cm.setmoneyb(-10);	
				cm.gainItem(5211060,1,7);
cm.全服公告( "[" + cm.getPlayer().getName() + "]成功购买[三倍经验卡（168小时权）]，爆肝愉快~");
            cm.dispose();
			}else{
            cm.sendOk("点卷不足无法换购！");
            cm.dispose();
			}
        } else if (selection == 6) {
                if (cm.getPlayer().getCSPoints(1) >= 3000) {
				cm.gainNX(-3000);
				cm.gainItem(5360016,1,7);
cm.全服公告( "[" + cm.getPlayer().getName() + "]成功购买[双倍爆率卡（7天权）]，爆肝愉快~");
            cm.dispose();
			}else{
            cm.sendOk("点卷不足无法换购！");
            cm.dispose();
			}
        } else if (selection == 7) {
                if (cm.getPlayer().getCSPoints(1) >= 1500) {
				cm.gainNX(-1500);
				cm.gainItem(5211060,1);
cm.全服公告( "[" + cm.getPlayer().getName() + "]成功购买[三倍经验卡（2小时权）]，爆肝愉快~");
            cm.dispose();
			}else{
            cm.sendOk("点卷不足无法换购！");
            cm.dispose();
			}
        } else if (selection == 8) {
                if (cm.getPlayer().getCSPoints(1) >= 1500) {
				cm.gainNX(-1500);
				cm.gainItem(1122017,1,1);
cm.全服公告( "[" + cm.getPlayer().getName() + "]成功购买[精灵吊坠（1天权）]，爆肝愉快~");
            cm.dispose();
			}else{
            cm.sendOk("点卷不足无法换购！");
            cm.dispose();
			}
        } else if (selection == 9) {
                if (cm.getPlayer().getCSPoints(1) >= 900) {
				cm.gainNX(-300);
				cm.gainItem(5360014,1);
cm.全服公告( "[" + cm.getPlayer().getName() + "]成功购买[双倍爆率卡（3小时权）]，爆肝愉快~");
            cm.dispose();
			}else{
            cm.sendOk("抵用卷不足无法换购！");
            cm.dispose();
			}
        } else if (selection == 10) {
                if (cm.getPlayer().getCSPoints(2) >= 600) {
				cm.gainDY(-600);
				cm.gainItem(5360014,1,3);
cm.全服公告( "[" + cm.getPlayer().getName() + "]成功购买[双倍爆率卡（3小时权）]，爆肝愉快~");
            cm.dispose();
			}else{
            cm.sendOk("抵用卷不足无法换购！");
            cm.dispose();
			}
		}
    }
}


