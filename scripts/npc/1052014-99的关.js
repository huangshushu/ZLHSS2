/*合成NPC 作者:bay 廖*/
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
            for (i = 0; i < 60; i++) {
                text += "";
            }
            text +="想拥有戒指吗?可以在我这里合成哦!\r\n";
            text += "#L1##d下等五彩水晶#v4251200##k#l\r\n";
            text += "#L2##d中等五彩水晶#v4251201##k#l\r\n";
            text += "#L3##d高等五彩水晶#v4251202##k#l\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.haveItem(4005000, 5) && cm.haveItem(4005001, 5) && cm.haveItem(4005002, 5) && cm.haveItem(4005003, 5) && cm.haveItem(4005004, 5) && cm.getMeso() >=1000000) {
                cm.gainItem(4005000,-5);
                cm.gainItem(4005001,-5);
				cm.gainItem(4005002,-5);
				cm.gainItem(4005003,-5);
				cm.gainItem(4005004,-5);
                cm.gainMeso(-1000000);
				cm.gainItem(4251200,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
                cm.sendOk("合成#v4251200#成功！");
                cm.dispsoe();
            } else {
                cm.sendOk("合成失败！材料不足！#v4005000#*5个 #v4005001#*5个 #v4005002#*5个 #v4005003#*5个 #v4005004#*5个 100万金币");
                cm.dispsoe();
            }
			} else if (selection == 2) {
            if (cm.haveItem(4251200, 5) && cm.getMeso() >=1000000) {
                cm.gainItem(4251200,-5);
                cm.gainMeso(-1000000);
				cm.gainItem(4251201,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
                cm.sendOk("合成#v4251201#成功！");
                cm.dispsoe();
            } else {
                cm.sendOk("合成失败！材料不足！#v4251200# * 5个 100万金币");
                cm.dispsoe();
			}
			} else if (selection == 3) {
            if (cm.haveItem(4251201, 3) && cm.getMeso() >=1000000) {
                cm.gainItem(4251201,-3);
                cm.gainMeso(-1000000);
				cm.gainItem(4251202,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
                cm.sendOk("合成#v4251202#成功！");
                cm.dispsoe();
            } else {
                cm.sendOk("合成失败！材料不足！#v4251201# * 3个 100万金币");
                cm.dispsoe()
			}
			}
		}
    }


