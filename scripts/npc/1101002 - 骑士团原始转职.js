/* ==================
 脚本类型: NPC	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 function start() {
    status = -1;

    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("想好再来找我吧！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            if (cm.getJob() == 1100 || cm.getJob() == 1110|| cm.getJob() == 1111|| cm.getJob() == 1200 || cm.getJob() == 1210 || cm.getJob() == 1211 || cm.getJob() == 1300|| cm.getJob() == 1310|| cm.getJob() == 1311|| cm.getJob() == 1400|| cm.getJob() == 1410|| cm.getJob() == 1411|| cm.getJob() == 1500|| cm.getJob() == 1510|| cm.getJob() == 1511||cm.getJob() == 100||cm.getJob() == 200||cm.getJob() == 300||cm.getJob() == 400||cm.getJob() == 500||cm.getJob() == 0) { // 七七者
                cm.sendOk("你还没有资格能转职成为 #r骑士团的一员#k！");
                cm.dispose();
                return;
            }
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "你想要成为什么 ? #b\r\n#L0#魂骑士#l\r\n#L1#炎术士#l\r\n#L2#风灵使者#l\r\n#L3#夜行者#l\r\n#L4#奇袭者#l\r\n\r\n"
            cm.sendOk(text); 
        } else if (selection == 0) {
            cm.changeJob(1100);
			cm.sendOk("转职成功!");
            cm.dispose();
			
        } else if (selection == 1) {
            cm.changeJob(1200);
			cm.sendOk("转职成功!");
            cm.dispose();	
			
        } else if (selection == 2) {
            cm.changeJob(1300);
			cm.sendOk("转职成功!");
            cm.dispose();
			
        } else if (selection == 3) {
            cm.changeJob(1400);
			cm.sendOk("转职成功!");
            cm.dispose();
			
        } else if (selection == 4) {
            cm.changeJob(1500);
			cm.sendOk("转职成功!");
            cm.dispose();
        }}}
