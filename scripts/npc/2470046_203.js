var status = 0;

var eff = "#fEffect/CharacterEff/1112905/0/1#"; //
var reward = Array(
					Array(2431966, 1, 1),	 //
					//Array(2432084, 1, 1),	//
					//Array(2433104, 1, 1),	//
					Array(2431967, 1, 1),   //    
					Array(2432131, 1, 1),    //
					//Array(2432153, 1, 1),	//	
					//Array(2432603, 1, 1),	//
					//Array(2432638, 1, 1),	//
					Array(2432659, 1, 1),	//
					//Array(2432154, 1, 1),	//
					//Array(2432637, 1, 1),	//
					//Array(2432658, 1, 1),	//
					Array(2433106, 1, 1),	//
					Array(2432207, 1, 1),	//
					Array(2432354, 1, 1),	//
					Array(2432355, 1, 1),	//
					Array(2432465, 1, 1),	//
					Array(2433199, 1, 1),	//
					Array(2432479, 1, 1),	//
					Array(2432526, 1, 1),	//
					Array(2432532, 1, 1),	//
					Array(2432592, 1, 1),	//
					Array(2432640, 1, 1),	//
					Array(2432710, 1, 1),	//
					Array(2432836, 1, 1),	
					Array(2432973, 1, 1),	//
					Array(2433063, 1, 1),	//
					Array(2432591, 1, 1),	//
					Array(2432695, 1, 1),	//
					Array(2432748, 1, 1),	//
					Array(2432749, 1, 1),	//
					Array(2432804, 1, 1),	//
					Array(2433112, 1, 1),	//
					Array(2433113, 1, 1),	//
					Array(2433038, 1, 1),	//
					Array(2433197, 1, 1),	//
					Array(2433182, 1, 1),	//
					Array(2433183, 1, 1)	//
					);
var sel= 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "#e#b#L1#独特烟花皮肤15万点卷#l  #e#b#L3#独特棉花皮肤30万点卷#l\r\n\t\t\t   #e#d#L2#还原为默认皮肤#l\r\n\r\n"+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+"\r\n#k#r\t\t   选择一个你喜欢的伤害皮肤吧~#k\r\n"+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+"\r\n";
      //  var selStr = "";
		var i = 0;
		for(var key in reward) {
			i++;
			selStr +="#L"+reward[key][0]+"##i"+reward[key][0]+":##l";
			if (i%6==0)
				selStr+="\r\n\r\n";
		}
		cm.sendSimple(selStr);
    } else if (status == 1) {
        sel = selection ;
		if (sel == 1) {
			cm.sendYesNo("是否要花费15万点卷购买一个独特烟花皮肤？");
		} else if (sel == 3) {
			cm.sendYesNo("是否要花费30万点卷购买一个独特棉花皮肤？");
		} else if (sel == 2) {
			cm.sendYesNo("是否要还原成默认皮肤？还原不收取费用，并且还原之后无法撤销。");
		} else {
			cm.sendYesNo("是否要花费30万点卷购买一个#i"+sel+":##t"+sel+"#？");
		}
        //cm.dispose();
    } else if (status == 2) {
		if (sel <=0)
			return;
		switch (sel) {
        case 1:
            if (cm.getPlayer().getCSPoints(1) >= 300000) {
		cm.gainNX(1, -300000);
                cm.changeDamageSkin(1023);
                cm.sendOk("购买成功,已应用到你的伤害皮肤,打怪可看到\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有点卷或不足,我不能与你兑换");
            }
            break;
			case 2:
				cm.changeDamageSkin(0);
                cm.sendOk("还原默认皮肤成功！");
			break;
			case 3:
            if (cm.getPlayer().getCSPoints(1) >= 300000) {
		cm.gainNX(1, -300000);
                cm.changeDamageSkin(1022);
                cm.sendOk("购买成功,已应用到你的伤害皮肤,打怪可看到\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有点卷或不足,我不能与你兑换");
            }
            break;
			default :
			  if (cm.getPlayer().getCSPoints(1) >= 150000) {
				cm.gainNX(1, -150000);
                cm.gainItem(sel,1);
                cm.sendOk("购买成功\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有点卷或不足,我不能与你兑换");
            }
        }
		cm.dispose();
	}
}