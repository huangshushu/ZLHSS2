/*
  等级礼包 By 大王
 */

var status = 0;

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
		var Editing = false //false 开始
          if(Editing){
          cm.sendOk("维修中");
          cm.dispose();
          return;
        } 
            cm.sendSimple("#b欢迎玩家 #r#h ##k 等级礼包领取。\r\n" +
            "#r\r\n#L1# 30级礼包\r\n"
            +"#r\r\n#L2# 70级礼包\r\n"
            +"#r\r\n#L4# 100级礼包\r\n"
            +"#r\r\n#L5# 120级礼包\r\n"
            +"#r\r\n#L6# 150级礼包\r\n"
            +"#r\r\n#L7# 180级礼包\r\n"
            +"#r\r\n#L8# 新手礼包\r\n"
			);
        } else if (status == 1) {
            
            if (selection == 1) {
                cm.dispose();
                cm.openNpc(9000001,"30级礼包");
            } else if (selection == 2) {
                cm.dispose();
                cm.openNpc(9000001,"70级礼包");
            } else if (selection == 3) {
                cm.dispose();
                cm.openNpc(9000001,"30级主线任务");
            } else if (selection == 4) {
                cm.dispose();
                cm.openNpc(9000001,"100级礼包");
            } else if (selection == 5) {
                cm.dispose();
                cm.openNpc(9000001,"120级礼包");
            }else if (selection == 6) {
                cm.dispose();
                cm.openNpc(9000001,"150级礼包");
            }else if (selection == 7) {
                cm.dispose();
                cm.openNpc(9000001,"180级礼包");
            }else if (selection == 8) {
                cm.dispose();
                cm.openNpc(9000001,"新手礼包");
            }
}
}
}
