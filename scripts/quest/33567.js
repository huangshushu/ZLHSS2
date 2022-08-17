/* 
 * 乌鲁斯
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            qm.dispose();
            return;
        }
        qm.dispose();
        return;
    }

    if (qm.getMapId() == 970072200) {
        qm.dispose();
        qm.openNpc(9070100);
    } else {
        if (status == 0) {
            qm.sendSimpleN("#b现在立刻去挑战打败乌鲁斯吗? #k\r\n#L0#快速开始(通过匹配进行18人挑战)#l\r\n#L1#前往乌鲁斯入场地图. #l");
        } else if (status == 1) {
            if (selection == 0) {
                qm.openUI(0x123);
                qm.dispose();
            } else if (selection == 1) {
                qm.warp(970072200);
                qm.dispose();
            }
        }
    }
}
function end(mode, type, selection) {
    qm.dispose();
}
