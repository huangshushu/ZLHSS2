var status = 0;
var beauty = 0;
var mface = Array(20000, 20001, 20003, 20004, 20005, 20006, 20007, 20008, 20018, 20019);
var fface = Array(21018, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21012, 21019);
var facenew = Array();

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("嗨，我是#p9201018# 如果您有一张 #b#t5152022##k, 您就可以挑选想要的脸型~\r\n\#L2#我已经做好准备了。#l");
        } else if (status == 1) {
            if (selection == 2) {
                facenew = Array();
                if (cm.getPlayer().getGender() == 0) {
                    for(var i = 0; i < mface.length; i++) {
                        facenew.push(mface[i] + cm.getPlayer().getFace() % 1000 - (cm.getPlayer().getFace() % 100));
                    }
                }
                if (cm.getPlayer().getGender() == 1) {
                    for(var i = 0; i < fface.length; i++) {
                        facenew.push(fface[i] + cm.getPlayer().getFace() % 1000 - (cm.getPlayer().getFace() % 100));
                    }
                }
                cm.sendStyle("选择一个您想要的。", facenew);
            }
        }
        else if (status == 2){			
            if (cm.haveItem(5152022) == true){
                cm.gainItem(5152022, -1);
                cm.setFace(facenew[selection]);
                cm.sendOk("享受！！");
            } else {
                cm.sendOk("疴...您好像没有#b#i5152022##t5152022##k呢??");
                cm.dispose();
            }
        }
    }
}
