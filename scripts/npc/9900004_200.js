var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var ca = java.util.Calendar.getInstance();
var JD = "#fUI/Basic/BtHide3/mouseOver/0#";//"+箭头+"
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
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
    var MC = cm.getServerName();
    if (status == 0) {



		var selStr = "\r\n  " + 心 + " " + 心 + "  " + 心 + "  " + 心 + " #r#e < 锻炼体能 > #k#n " + 心 + "  " + 心 + "  " + 心 + " " + 心 + "\r\n\r\n\r\n";

        selStr += "\t\t\t\t  #b#L0#返回#k#n#l\r\n";
        selStr += "\t\t\t\t  #b#L1#锻炼体力#k#n#l\r\n";
		selStr += "\t\t\t\t  #b#L2#锻炼精神#k#n#l\r\n";

        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
			case 1:
                cm.dispose();
                cm.openNpc(9900004, 201);
                break;
			case 2:
                cm.dispose();
                cm.openNpc(9900004, 202);
                break;
			
            case 0:
                cm.dispose();
                cm.openNpc(9900004, 0);
                break;


        }
    }
}