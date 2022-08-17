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
			//显示物品ID图片用的代码是  #v这里写入ID#
            text += "#e#d制作#v1112793#需要#v4031561#x10.#v4031560#x10.#v4031559#x10.#v4031558#x10.#v4002003#x10.#v4002002#x10.#v4031138#1000万搜集好道具我就可以为您制作了.快乐指环可以戴6个#l\r\n\r\n"//3
		    text += "#L1##r制作快乐戒指#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			if (cm.getMeso() < 10000000) { 
				cm.sendOk("#b装备制作需要 1000W金币，您的金币不足#k");
				cm.dispose();
			} else if (cm.itemQuantity(4031561) < 10 ) { 
				cm.sendOk("#b装备制作需要#v4031561#10个，您的物品不足#k");
				cm.dispose();
			} else if (cm.itemQuantity(4031560) < 10 ) { 
				cm.sendOk("#b装备制作需要#v4031560#10个，您的物品不足#k");
				cm.dispose();
			} else if (cm.itemQuantity(4031559) < 10  ) { 
 				cm.sendOk("#b装备制作需要#v4031559#10个，您的物品不足#k");
				cm.dispose();
			} else if (cm.itemQuantity(4031558) < 10  ) { 
 				cm.sendOk("#b装备制作需要#v4031558#10个，您的物品不足#k");
				cm.dispose();
			} else if (cm.itemQuantity(4002003) < 10  ) { 
 				cm.sendOk("#b装备制作需要#v4002003#10个，您的物品不足#k");
				cm.dispose();
			} else if (cm.itemQuantity(4002002) < 10  ) { 
 				cm.sendOk("#b装备制作需要#v4002002#10个，您的物品不足#k");
				cm.dispose();
		    } else if (cm.itemQuantity(4002001) < 10  ) { 
 				cm.sendOk("#b装备制作需要#v4002001#10个，您的物品不足#k");
				cm.dispose();
			
			}else{
				cm.gainItem(4031561, -10);
				cm.gainItem(4031560, -10);
				cm.gainItem(4031559, -10);
				cm.gainItem(4031558, -10);
				cm.gainItem(4002003, -10);
				cm.gainItem(4002002, -10);
				cm.gainItem(4002001, -10);
				cm.gainItem(1112793, 1);
				cm.gainMeso(-10000000);
            cm.sendOk("制作成功！");
			cm.全服公告( "恭喜[" + cm.getPlayer().getName() + "]制作了一枚快乐戒指！！！！！");
            cm.dispose();
			}
		}
    }
}


