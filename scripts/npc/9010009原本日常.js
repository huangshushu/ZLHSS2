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
                text += "";
            }
            text += "#e#r邮票是合成高级装备的重要材料之一喔.\r\n"
			text += "#L1##e#d20级+#r 奖励:1万金币 2万经验 1张#v4031559# 1张#v4031560##k\r\n\r\n"//3
			text += "#L2##e#d20-50级#r 奖励:2万金币 4万经验 1张#v4031559# 1张#v4031560##k\r\n\r\n"//3
			text += "#L3##e#d20-50级#r 奖励:2万金币 4万经验 1张#v4031559# 1张#v4031560##k\r\n\r\n"//3
			text += "#L4##e#d51-100级#r 奖励:3万金币 7万经验 1张#v4031559# 1张#v4031560##k\r\n\r\n"//3
			text += "#L5##e#d51-100级#r 奖励:3万金币 7万经验 1张#v4031559# 1张#v4031560##k\r\n\r\n"//3
			text += "#L6##e#d101级+#r 奖励:5万金币 10万经验 1张#v4031559# 1张#v4031560##k\r\n\r\n"//3
			text += "#L7##e#d101级+#r 奖励:5万金币 10万经验 1张#v4031559# 1张#v4031560##k\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			if(cm.getLevel() >= 20){
			cm.openNpc(9010009, 2);
		}else{
				cm.sendOk("你等级未达到20级!");
				cm.dispose();
			}		
        } else if (selection == 2) {
			if(cm.getLevel() >= 20 && cm.getLevel() <= 50){
		cm.openNpc(9010009, 3);
		}else{
				cm.sendOk("你等级未在20级-50级之间!");
				cm.dispose();
			}
		} else if (selection == 3) {
			if(cm.getLevel() >= 20 && cm.getLevel() <= 50){
		cm.openNpc(9010009, 6);
		}else{
				cm.sendOk("你等级未在20级-50级之间!");
				cm.dispose();
			}	
        } else if (selection == 4) {
						if(cm.getLevel() >= 51 && cm.getLevel() <= 100){
		cm.openNpc(9010009, 4);
		}else{			
				cm.sendOk("你等级未在51级-100级之间!");
				cm.dispose();
			}
		} else if (selection == 5) {
						if(cm.getLevel() >= 51 && cm.getLevel() <= 100){
		cm.openNpc(9010009, 9);
		}else{			
				cm.sendOk("你等级未在51级-100级之间!");
				cm.dispose();
			}	
		} else if (selection == 6) {
						if(cm.getLevel() >= 101 && cm.getLevel() <= 200){
		cm.openNpc(9010009, 7);
		}else{
			
				cm.sendOk("你等级未达到100级!");
				cm.dispose();
			}	
		} else if (selection == 7) {
						if(cm.getLevel() >= 101 && cm.getLevel() <= 200){
		cm.openNpc(9010009, 8);
		}else{
			
				cm.sendOk("你等级未达到100级!");
				cm.dispose();
			}
	}
    }
}


