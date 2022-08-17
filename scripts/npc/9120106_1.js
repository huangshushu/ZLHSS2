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

            cm.sendOk("欢迎光临！");
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
            text +="    合成之前,请先检查 包包 每一个栏目 是否有两个空位以上? 再进行合成, 否则合成后不见,别哭哦!\r\n";
            text += "#L1##d四维/攻/魔 +1  回避/命中 +1  HP/MP +10 #v1112915##k#l\r\n";
            text += "#L2##d四维/攻/魔 +2  回避/命中 +2  HP/MP +20 #v1112793##k#l\r\n";
            text += "#L3##d四维/攻/魔 +3  回避/命中 +3  HP/MP +30 #v1112677##k#l\r\n";
            text += "#L4##d四维/攻/魔 +6  回避/命中 +6  HP/MP +40 #v1112678##k#l\r\n";
            text += "#L5##d四维/攻/魔+10  回避/命中+10  HP/MP +50 #v1112679##k#l\r\n";
            text += "#L6##d四维/攻/魔+25  回避/命中+25  HP/MP+100 #v1113178##k#l\r\n";
			text += "#L7##d四维/攻/魔+25  回避/命中+25  HP/MP+100 #v1113037##k#l\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.haveItem(4011004, 1) && cm.haveItem(4000313, 50) && cm.haveItem(4021007, 1) && cm.haveItem(4011006, 1) && cm.haveItem(4021005, 1) && cm.haveItem(4021002, 1) && cm.haveItem(4005000, 1) && cm.haveItem(4005001, 1) && cm.haveItem(4005002, 1) && cm.haveItem(4005003, 1) && cm.haveItem(4000017, 10) && cm.haveItem(4001126, 500) && cm.haveItem(4002000, 10) && cm.haveItem(4031559, 10) && cm.getMeso() >=1000000) {
                cm.gainItem(4000313,-50);
				cm.gainItem(4011004,-1);
                cm.gainItem(4021007,-1);
				cm.gainItem(4011006,-1);
				cm.gainItem(4021005,-1);
				cm.gainItem(4021002,-1);
				cm.gainItem(4005000,-1);
				cm.gainItem(4005001,-1);
				cm.gainItem(4005002,-1);
				cm.gainItem(4005003,-1);
				
				
				cm.gainItem(4000017,-10);
				cm.gainItem(4001126,-500);
				cm.gainItem(4002000,-10);
				cm.gainItem(4031559,-10);
                cm.gainMeso(-1000000);
				cm.gainItem(1112915,1,1,1,1,10,10,1,1,0,0,1,1,0,0);
                cm.sendOk("合成#v1112915#成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v4000313#*50个  #v4011004#*1个  #v4021007#*1个  #v4011006#*1个  #v4021005#*1个  #v4021002#*1个 #v4005000#*1个 #v4005001#*1个 #v4005002#*1个 #v4005003#*1个 #v4000017#*10个 #v4001126#*500个 #v4002000#*10个 #v4031559#*10个 100万金币");
                cm.dispose();
            }
        } else if (selection == 2) {
            if (cm.haveItem(1112915, 1) && cm.haveItem(4000313, 100) && cm.haveItem(4011004, 3) && cm.haveItem(4021007, 3) && cm.haveItem(4011006, 3) && cm.haveItem(4021005, 3) && cm.haveItem(4021002, 3) && cm.haveItem(4005000, 3) && cm.haveItem(4005001, 3) && cm.haveItem(4005002, 3) && cm.haveItem(4005003, 3) && cm.haveItem(4011004, 3) && cm.haveItem(4000029, 100) && cm.haveItem(4001126, 1000) && cm.haveItem(4002000, 30) && cm.haveItem(4002001, 10) && cm.haveItem(4031559, 15) && cm.getMeso() >=5000000) {
                cm.gainItem(1112915,-1);
				cm.gainItem(4000313,-100);
				cm.gainItem(4011004,-3);
                cm.gainItem(4021007,-3);
				cm.gainItem(4011006,-3);
				cm.gainItem(4021005,-3);
				cm.gainItem(4021002,-3);
				cm.gainItem(4005000,-3);
				cm.gainItem(4005001,-3);
				cm.gainItem(4005002,-3);
				cm.gainItem(4005003,-3);
				cm.gainItem(4005004,-3);
				cm.gainItem(4000029,-100);
				cm.gainItem(4001126,-1000);
				cm.gainItem(4002000,-30);
				cm.gainItem(4002001,-10);
				cm.gainItem(4031559,-15);
                cm.gainMeso(-5000000);
				cm.gainItem(1112793,2,2,2,2,20,20,2,2,0,0,2,2,0,0);
                cm.sendOk("合成#v1112793#成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v4000313#*100个  #v1112915#*1个  #v4011004#*3个  #v4021007#*3个  #v4011006#*3个 #v4021005#*3个 #v4021002#*3个 #v4005000#*3个 #v4005001#*3个 #v4005002#*3个 #v4005003#*3个 #v4005004#*3个 #v4000029#*100个 #v4001126#*1000个 #v4002000#*30个 #v4002001#*10个 #v4031559#*15个 500万金币");
                cm.dispose();
            }
        } else if (selection == 3) {
            if (cm.haveItem(1112793, 1) && cm.haveItem(4000313, 150) && cm.haveItem(4011004, 5) && cm.haveItem(4021007, 5) && cm.haveItem(4011006, 5) && cm.haveItem(4021005, 5) && cm.haveItem(4021002, 5) && cm.haveItem(4251200, 1) && cm.haveItem(4000040, 20) && cm.haveItem(4000176, 20) && cm.haveItem(4000027, 100) && cm.haveItem(4000036, 100) && cm.haveItem(4001126, 1500) && cm.haveItem(4000463, 10) && cm.haveItem(4002000, 60) && cm.haveItem(4002001, 15) && cm.haveItem(4002002 , 1) && cm.haveItem(4031559, 20) && cm.getMeso() >=10000000) {
                cm.gainItem(1112793,-1);
				cm.gainItem(4000313,-150);
				cm.gainItem(4011004,-5);
                cm.gainItem(4021007,-5);
				cm.gainItem(4011006,-5);
				cm.gainItem(4021005,-5);
				cm.gainItem(4021002,-5);
				cm.gainItem(4251200,-1);
				cm.gainItem(4000040,-20);
				cm.gainItem(4000176,-20);
				cm.gainItem(4000027,-100);
				cm.gainItem(4000036,-100);
				cm.gainItem(4001126,-1500);
				cm.gainItem(4000463,-10);
				cm.gainItem(4002000,-60);
				cm.gainItem(4002001,-15);
				cm.gainItem(4002002,-1);
				cm.gainItem(4031559,-20);
                cm.gainMeso(-10000000);
				cm.gainItem(1112677,3,3,3,3,30,30,3,3,0,0,3,3,0,0);
                cm.sendOk("合成#v1112677#成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v4000313#*150个 #v1112793#*1个 #v4011004#*5个 #v4021007#*5个 #v4011006#*5个 #v4021005#*5个 #v4021002#*5个 #v4251200#*1个 #v4000040#*20   #v4000176#*20个 #v4000027#*100个 #v4000036#*100个 #v4001126#*1500个     #v4000463#*10个 #v4002000#*60个 #v4002001#*15个 #v4002002#*1个 #v4031559#*20个         1000万金币");
                cm.dispose();
            }
        } else if (selection == 4) {
            if (cm.haveItem(1112677, 1) && cm.haveItem(4000313, 200) && cm.haveItem(4011004, 7) && cm.haveItem(4021007, 7) && cm.haveItem(4011006, 7) && cm.haveItem(4021005, 7) && cm.haveItem(4021002, 7) && cm.haveItem(4251201, 1) && cm.haveItem(4001111, 10) && cm.haveItem(4000152, 10) && cm.haveItem(4000074, 100) && cm.haveItem(4000057, 100) && cm.haveItem(4001126, 2000) && cm.haveItem(4000463, 20) && cm.haveItem(4002000, 80) && cm.haveItem(4002001, 20) && cm.haveItem(4002002, 3) && cm.haveItem(4002003, 15) && cm.haveItem(4031559, 25) && cm.getMeso() >=20000000) {
                cm.gainItem(1112677,-1);
				cm.gainItem(4000313,-200);
				cm.gainItem(4011004,-7);
                cm.gainItem(4021007,-7);
				cm.gainItem(4011006,-7);
				cm.gainItem(4021005,-7);
				cm.gainItem(4021002,-7);
				cm.gainItem(4251201,-1);
				cm.gainItem(4001111,-10);
				cm.gainItem(4000152,-10);
				cm.gainItem(4000074,-100);
				cm.gainItem(4000057,-100);
				cm.gainItem(4001126,-2000);
				cm.gainItem(4000463,-10);
				cm.gainItem(4002000,-80);
				cm.gainItem(4002001,-10);
				cm.gainItem(4002002,-3);
				cm.gainItem(4002003,-15);
				cm.gainItem(4031559,-25);
                cm.gainMeso(-20000000);
				cm.gainItem(1112678,6,6,6,6,40,40,6,6,0,0,6,6,0,0);
                cm.sendOk("合成#v1112678#成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v4000313#*200个 #v1112677#*1个 #v4011004#7个  #v4021007#7个  #v4011006#*7个  #v4021005#*7个  #v4021002#*7个  #v4251201#*1个 #v4001111#*10个  #v4000152#*10个   #v4000074#*100个   #v4000057#*100个  #v4001126#*2000个 #v4000463#*10个 #v4002000#*80个 #v4002001#*20个 #v4002002#*3个 #v4002003#*15个 #v4031559#*25个 2000万金币");
                cm.dispose();
            }
        } else if (selection == 5) {
            if (cm.haveItem(1112678, 1) && cm.haveItem(4000313, 250) && cm.haveItem(4011004, 10) && cm.haveItem(4021007, 10) && cm.haveItem(4011006, 10) && cm.haveItem(4021005, 10) && cm.haveItem(4021002, 10) && cm.haveItem(4251202, 1) && cm.haveItem(4001083, 1) && cm.haveItem(4001084, 3) && cm.haveItem(4001085, 3) && cm.haveItem(4000175, 3) && cm.haveItem(4001126, 2500) && cm.haveItem(4000463, 30) && cm.haveItem(4002000, 100) && cm.haveItem(4002001, 25) && cm.haveItem(4002002, 5) && cm.haveItem(4002003, 30) && cm.haveItem(4031559, 30) && cm.getMeso() >=30000000) {
                cm.gainItem(1112678,-1);
				cm.gainItem(4000313,-250);
				cm.gainItem(4011004,-10);
                cm.gainItem(4021007,-10);
				cm.gainItem(4011006,-10);
				cm.gainItem(4021005,-10);
				cm.gainItem(4021002,-10);
				cm.gainItem(4251202,-1);
				cm.gainItem(4001083,-1);
				cm.gainItem(4001084,-3);
				cm.gainItem(4001085,-3);
				cm.gainItem(4000175,-3);
				cm.gainItem(4001126,-2500);
				cm.gainItem(4000463,-10);
				cm.gainItem(4002000,-100);
				cm.gainItem(4002001,-25);
				cm.gainItem(4002002,-5);
				cm.gainItem(4002003,-30);
				cm.gainItem(4031559,-30);
                cm.gainMeso(-30000000);
				cm.gainItem(1112679,10,10,10,10,50,50,10,10,0,0,10,10,0,0);
                cm.sendOk("合成#v1112679#成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v4000313#*250个 #v1112678#*1个 #v4011004#*10个 #v4021007#*10个 #v4011006#*10个 #v4021005#*10个 #v4021002#*10个 #v4251202#*1个 #v4001083#*1个 #v4001084#*3个 #v4001085#*3个 #v4000175#*3个 #v4001126#*2500个 #v4000463#*10个 #v4002000#*100个 #v4002001#*25个 #v4002002#*5个 #v4002003#*30个 #v4031559#*30个 3000万金币");
                cm.dispose();
            }
        } else if (selection == 6) {
			
            if (cm.haveItem(1112679, 3) && cm.haveItem(4000313, 1250) && cm.haveItem(4011004, 50) && cm.haveItem(4021007, 50) && cm.haveItem(4011006, 50) && cm.haveItem(4021005, 50) && cm.haveItem(4021002, 50) && cm.haveItem(4251202, 5) && cm.haveItem(4001083, 5) && cm.haveItem(4001084, 15) && cm.haveItem(4001085, 15) && cm.haveItem(4000175, 15) && cm.haveItem(4001126, 5000) && cm.haveItem(4000463, 100) && cm.haveItem(4002000, 500) && cm.haveItem(4002001, 75) && cm.haveItem(4002002, 25) && cm.haveItem(4002003, 90) && cm.haveItem(4031559, 50) && cm.getMeso() >=50000000) {
                cm.gainItem(1112679,-3);
				cm.gainItem(4000313,-1250);
				cm.gainItem(4011004,-50);
                cm.gainItem(4021007,-50);
				cm.gainItem(4011006,-50);
				cm.gainItem(4021005,-50);
				cm.gainItem(4021002,-50);
				cm.gainItem(4251202,-5);
				cm.gainItem(4001083,-5);
				cm.gainItem(4001084,-15);
				cm.gainItem(4001085,-15);
				cm.gainItem(4000175,-15);
				cm.gainItem(4001126,-5000);
				cm.gainItem(4000463,-10);
				cm.gainItem(4002000,-500);
				cm.gainItem(4002001,-100);
				cm.gainItem(4002002,-25);
				cm.gainItem(4002003,-90);
				cm.gainItem(4031559,-50);
                cm.gainMeso(-50000000);
				cm.gainItem(1113178,25,25,25,25,100,100,25,25,0,0,25,25,0,0);
                cm.sendOk("合成#v1113178#成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v4000313#*1250个 #v1112679#*3个 #v4011004#*50个  #v4021007#*50个   #v4011006#*50个   #v4021005#*50个  #v4021002#*50个   #v4251202#*5个 #v4001083#*5个 #v4001084#*15个 #v4001085#*15个 #v4000175#*15个  #v4001126#*5000个   #v4000463#*10个  #v4002000#*500个  #v4002001#*100个 #v4002002#*25个 #v4002003#*90个 #v4031559#*50个 5000万金币");
                cm.dispose();
            }
			        } else if (selection == 7) {
            if (cm.haveItem(1112679, 3) && cm.haveItem(4000313, 1250) && cm.haveItem(4011004, 50) && cm.haveItem(4021007, 50) && cm.haveItem(4011006, 50) && cm.haveItem(4021005, 50) && cm.haveItem(4021002, 50) && cm.haveItem(4251202, 5) && cm.haveItem(4001083, 5) && cm.haveItem(4001084, 15) && cm.haveItem(4001085, 15) && cm.haveItem(4000175, 15) && cm.haveItem(4001126, 5000) && cm.haveItem(4000463, 100) && cm.haveItem(4002000, 500) && cm.haveItem(4002001, 75) && cm.haveItem(4002002, 25) && cm.haveItem(4002003, 90) && cm.haveItem(4031559, 50) && cm.getMeso() >=50000000) {
                cm.gainItem(1112679,-3);
				cm.gainItem(4000313,-1250);
				cm.gainItem(4011004,-50);
                cm.gainItem(4021007,-50);
				cm.gainItem(4011006,-50);
				cm.gainItem(4021005,-50);
				cm.gainItem(4021002,-50);
				cm.gainItem(4251202,-5);
				cm.gainItem(4001083,-5);
				cm.gainItem(4001084,-15);
				cm.gainItem(4001085,-15);
				cm.gainItem(4000175,-15);
				cm.gainItem(4001126,-500);
				cm.gainItem(4000463,-10);
				cm.gainItem(4002000,-500);
				cm.gainItem(4002001,-100);
				cm.gainItem(4002002,-25);
				cm.gainItem(4002003,-90);
				cm.gainItem(4031559,-50);
                cm.gainMeso(-50000000);
				cm.gainItem(1113037,25,25,25,25,100,100,25,25,0,0,25,25,0,0);
                cm.sendOk("合成#v1113037#成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v4000313#*1250个 #v1112679#*3个 #v4011004#*50个 #v4021007#*50个 #v4011006#*50个 #v4021005#*50个 #v4021002#*50个 #v4251202#*5个  #v4001083#*5个   #v4001084#*15个   #v4001085#*15个   #v4000175#*15个  #v4001126#*500个  #v4000463#*10个  #v4002000#*500个  #v4002001#*10个  #v4002002#*25个 #v4002003#*90个 #v4031559#*50个 5000万金币");
                cm.dispose();
            }
			}
		}
    }


