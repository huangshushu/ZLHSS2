/*
  主线任务 By 大王
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
            cm.sendSimple("#b欢迎玩家 #r#h ##k 跑环功能。\r\n" +
            "#r\r\n#L1# 每日1环\r\n"
            +"#r\r\n#L2# 每日2环\r\n"
            +"#r\r\n#L3# 每日3环\r\n"
            +"#r\r\n#L4# 每日4环\r\n"
            +"#r\r\n#L5# 每日5环\r\n"
            +"#r\r\n#L6# 每日6环\r\n"
            +"#r\r\n#L7# 每日7环\r\n"
            +"#r\r\n#L8# 每日8环\r\n"
            +"#r\r\n#L9# 每日9环\r\n"
            +"#r\r\n#L10# 每日10环\r\n"
            +"#r\r\n#L11# 每日11环\r\n"
            +"#r\r\n#L12# 每日12环\r\n"
            //+"#r\r\n#L13# 每日1环\r\n"
            //+"#r\r\n#L14# 每日1环\r\n"
            //+"#r\r\n#L15# 每日1环\r\n"
            //+"#r\r\n#L16# 每日1环\r\n"
			);
        } else if (status == 1) {
            
            if (selection == 1) {
                cm.dispose();
                cm.openNpc(9000001,"每日第一环");
            } else if (selection == 2) {
                cm.dispose();
                cm.openNpc(9000001,"每日第二环");
            } else if (selection == 3) {
                cm.dispose();
                cm.openNpc(9000001,"每日第三环");
            } else if (selection == 4) {
                cm.dispose();
                cm.openNpc(9000001,"每日第四环");
            } else if (selection == 5) {
                cm.dispose();
                cm.openNpc(9000001,"每日第五环");
            }else if (selection == 6) {
                cm.dispose();
                cm.openNpc(9000001,"每日第六环");
            }else if (selection == 7) {
                cm.dispose();
                cm.openNpc(9000001,"每日第七环");
            }else if (selection == 8) {
                cm.dispose();
                cm.openNpc(9000001,"每日第八环");
            }else if (selection == 9) {
                cm.dispose();
                cm.openNpc(9000001,"每日第九环");
            }else if (selection == 10) {
                cm.dispose();
                cm.openNpc(9000001,"每日第十环");
            }else if (selection == 11) {
                cm.dispose();
                cm.openNpc(9000001,"每日第十一环");
            }else if (selection == 12) {
                cm.dispose();
                cm.openNpc(9000001,"每日第十二环");
            }else if (selection == 13) {
                cm.dispose();
                cm.openNpc(9000001,"130级主线任务");
            }else if (selection == 14) {
                cm.dispose();
                cm.openNpc(9000001,"140级主线任务");
            }else if (selection == 15) {
                cm.dispose();
                cm.openNpc(9000001,"150级主线任务");
            }else if (selection == 16) {
                cm.dispose();
                cm.openNpc(9000001,"160级主线任务");
            }else if (selection == 17) {
                cm.dispose();
                cm.openNpc(9000001,"170级主线任务");
            }else if (selection == 18) {
                cm.dispose();
                cm.openNpc(9000001,"180级主线任务");
            }else if (selection == 19) {
                cm.dispose();
                cm.openNpc(9000001,"190级主线任务");
            }else if (selection == 20) {
                cm.dispose();
                cm.openNpc(9000001,"200级主线任务");
            }
}
}
}