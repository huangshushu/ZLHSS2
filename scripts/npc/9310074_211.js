/*
 * 
 * @wnms
 * @大擂台传送副本npc
 */
function start() {
    status = -1;
    action(1, 0, 0);
}
var 冒险币 = 5000;
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
            cm.sendSimple("#r请选择你制作的勋\r\n<勋章分别为以下几种类型>\r\n#d#L0##v1142358#可爱新手勋章制作升级#l\r\n#L1##d#v1142210#赞助王座冒险家勋章制作升级#n#l\r\n#b#L2##r#v1142574#女神勋章制作升级\r\n\r\n");
        } else if (status == 1) {
            if (selection == 0) {//副本传送
             cm.openNpc(9250022,103);
            } else if (selection == 1) {//副本兑换奖励
              cm.openNpc(9000021,160);
            }else if(selection == 2){
                cm.openNpc(9270048,1000);
            }else if(selection == 3){
                cm.openNpc(9000021,130);
            }else if(selection == 4){
                cm.openNpc(9000021,140);
            }else if(selection == 5){
                cm.openNpc(9000021,150);
            }else if(selection == 6){
                cm.openNpc(9000021,160);
            }else if(selection == 8){
                cm.openNpc(9270048,0);
			}else if(selection == 7){
                if (cm.haveItem(4310079,1)){
				cm.gainItem(4310079,-1)
				cm.gainItem(1142070,-1)
			cm.gainItem(1142070,50,50,50,50,0,0,50,50,0,0,0,0,0,0)
			}else{
			 cm.sendOk("恭喜你成为反外挂联盟点一份子，！")
			}
        }
        }
    }
}


