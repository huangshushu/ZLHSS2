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
            text += "#L1##d合成下等五彩水晶#v4251200#1个#k#l\r\n";
            text += "#L2##d合成中等五彩水晶#v4251201#1个#k#l\r\n";
            text += "#L3##d合成上等五彩水晶#v4251202#1个#k#l\r\n";
            text += "#L4##d8色粉末合成中等五彩水晶#v4251201#1个#k#l\r\n";
            //text += "#L5##d四维/攻/魔+10  回避/命中+10  HP/MP +50 #v1112679##k#l\r\n";
            //text += "#L6##d四维/攻/魔+25  回避/命中+25  HP/MP+100 #v1113178##k#l\r\n";
			//text += "#L7##d四维/攻/魔+25  回避/命中+25  HP/MP+100 #v1113037##k#l\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.haveItem(4005000, 1) && cm.haveItem(4005001, 1) && cm.haveItem(4005002, 1) && cm.haveItem(4005003, 1) && cm.haveItem(4005004, 1) && cm.haveItem(4011002, 1) && cm.getMeso() >=10000) {
                cm.gainItem(4005000,-1);
				cm.gainItem(4005001,-1);
                cm.gainItem(4005002,-1);
				cm.gainItem(4005003,-1);
				cm.gainItem(4005004,-1);
				cm.gainItem(4011002,-1);
				//cm.gainItem(4005000,-1);
				//cm.gainItem(4005001,-1);
				//cm.gainItem(4005002,-1);
				//cm.gainItem(4005003,-1);
				//cm.gainItem(4000017,-10);
				//cm.gainItem(4001126,-500);
				//cm.gainItem(4002000,-10);
				//cm.gainItem(4031559,-10);
                cm.gainMeso(-10000);
				//cm.gainItem(1112915,1,1,1,1,10,10,1,1,0,0,1,1,0,0);
				cm.gainItem(4251200,1);
                cm.sendOk("合成#v4251200#1个成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v4005000#*1个  #v4005001#*1个  #v4005002#*1个  #v4005003#*1个  #v4005004#*1个 #v4011002#*1个  1万金币");
                cm.dispose();
            }
                } else if (selection == 2) {
            if (cm.haveItem(4005000, 2) && cm.haveItem(4005001, 2) && cm.haveItem(4005002, 2) && cm.haveItem(4005003, 2) && cm.haveItem(4005004, 2)&& cm.haveItem(4005004, 2) && cm.haveItem(4251200, 2) && cm.getMeso() >=20000) {
                cm.gainItem(4005000,-2);
				cm.gainItem(4005001,-2);
                cm.gainItem(4005002,-2);
				cm.gainItem(4005003,-2);
				cm.gainItem(4005004,-2);
				cm.gainItem(4011002,-2);
				cm.gainItem(4251200,-2);
				//cm.gainItem(4005001,-2);
				//cm.gainItem(4005002,-2);
				//cm.gainItem(4005003,-2);
				//cm.gainItem(4000017,-10);
				//cm.gainItem(4001126,-500);
				//cm.gainItem(4002000,-10);
				//cm.gainItem(4031559,-10);
                cm.gainMeso(-20000);
				//cm.gainItem(1112915,1,1,1,1,10,10,1,1,0,0,1,1,0,0);
				cm.gainItem(4251201,1);
                cm.sendOk("合成#v4251201#1个成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v4005000#*2个  #v4005001#*2个  #v4005002#*2个  #v4005003#*2个  #v4005004#*2个 #v4011002#*2个  #v4251200#*2  2万金币");
                cm.dispose();
            }
                } else if (selection == 3) {
            if (cm.haveItem(4005000, 3) && cm.haveItem(4005001, 3) && cm.haveItem(4005002, 3) && cm.haveItem(4005003, 3) && cm.haveItem(4005004, 3) && cm.haveItem(4011002, 3) && cm.haveItem(4005001, 3) && cm.getMeso() >=30000) {
                cm.gainItem(4005000,-3);
				cm.gainItem(4005001,-3);
                cm.gainItem(4005002,-3);
				cm.gainItem(4005003,-3);
				cm.gainItem(4005004,-3);
				cm.gainItem(4011002,-3);
				cm.gainItem(4251201,-3);
				//cm.gainItem(4005000,-3);
				//cm.gainItem(4005001,-3);
				//cm.gainItem(4005002,-3);
				//cm.gainItem(4005003,-3);
				//cm.gainItem(4000017,-10);
				//cm.gainItem(4001126,-500);
				//cm.gainItem(4002000,-10);
				//cm.gainItem(4031559,-10);
                cm.gainMeso(-30000);
				//cm.gainItem(1112915,1,1,1,1,10,10,1,1,0,0,1,1,0,0);
				cm.gainItem(4251201,1);
                cm.sendOk("合成#v4251202#1个成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v4005000#*3个  #v4005001#*3个  #v4005002#*3个  #v4005003#*3个  #v4005004#*3个 #v4011002#*3个 #v4251201#*3个 3万金币");
                cm.dispose();
            }
        } else if (selection == 4) {
            if (cm.haveItem(4007000, 1000) && cm.haveItem(4007001, 1000) && cm.haveItem(4007002, 1000) && cm.haveItem(4007003, 1000) && cm.haveItem(4007004, 1000) && cm.haveItem(4007005, 1000)&& cm.haveItem(4007006, 1000) && cm.haveItem(4007007, 1000) && cm.getMeso() >=100000) {
                cm.gainItem(4007000,-1000);
				cm.gainItem(4007001,-1000);
                cm.gainItem(4007002,-1000);
				cm.gainItem(4007003,-1000);
				cm.gainItem(4007004,-1000);
				cm.gainItem(4007005,-1000);
				cm.gainItem(4007006,-1000);
				cm.gainItem(4007007,-1000);
				//cm.gainItem(4005002,-1);
				//cm.gainItem(4005003,-1);
				//cm.gainItem(4000017,-10);
				//cm.gainItem(4001126,-500);
				//cm.gainItem(4002000,-10);
				//cm.gainItem(4031559,-10);
                cm.gainMeso(-100000);
				//cm.gainItem(1112915,1,1,1,1,10,10,1,1,0,0,1,1,0,0);
				cm.gainItem(4251201,1);
                cm.sendOk("合成#v4251201#1个成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！   #v4007000#*1000个  #v4007001#*1000个  #v4007002#*1000个  #v4007003#*1000个  #v4007004#*1000个 #v4007005#*1000个 #v4007006#*1000个  #v4007007#*1000个 10万金币");
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


