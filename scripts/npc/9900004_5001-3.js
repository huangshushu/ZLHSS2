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
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "\t\t\t\t#e#b  冒险岛新人礼包 #k	#n\r\n"
            text += "#b\t#v1142099# * 《 15天梦之勋章！ 攻击力 +#r35 #b左右 》#l\r\n"//3
            text += "#b\t#v1142101# * 《 全属性20 攻击力 +#r15#b》#l\r\n"//3
            text += "#b\t#v2022465# * 《 随机经验金币技能点 》 x #r30#l\r\n"//3
            text += "#b\t#v1932243#[随机皇家坐骑] *1#l\r\n"//3
            text += "#b\t#v2012000##z2012000# *20#l\r\n"//3
            text += "#b\t#v2000019##z2000019# *400#l\r\n"//3
            text += "#b\t#v2340000##z2340000# *5#l\r\n"//3
            text += "#b\t盛大点券 #r 300000点卷#l\r\n"//3
            text += "#b\t\额外赠送金币#r 2000000  #l\r\n\r\n"//3
            text += "#L1##r确定领取大礼包就点我吧！#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			//if(cm.getBossLog("新人礼包") == 0) {
				if(0 == 0) {
					if(cm.getjob() == 100 || cm.getjob() == 110 || cm.getjob() == 111 || cm.getjob() == 120 || cm.getjob() == 121 || cm.getjob() == 122 || cm.getjob() == 130 || cm.getjob() == 131 || cm.getjob() == 132 || cm.getjob() == 1100 || cm.getjob() == 1110 || cm.getjob() == 1111 || cm.getjob() == 1112){
						cm.给属性装备(1402001,0,0,10,10,10,10,1000,1000,85,0,0,0,0,100,23,40,0);
						cm.给属性装备(1432000,0,0,10,10,10,10,1000,1000,87,0,0,0,0,100,23,40,0);
					}else if(cm.getjob() == 2000 || cm.getjob() == 2100 || cm.getjob() == 2110 || cm.getjob() == 2111 || cm.getjob() == 2112){
						cm.给属性装备(1442000,0,0,10,10,10,10,1000,1000,87,0,0,0,0,100,23,40,0);
					}else if(cm.getjob() == 200 || cm.getjob() == 210 || cm.getjob() == 211 || cm.getjob() == 220 || cm.getjob() == 221 || cm.getjob() == 222 || cm.getjob() == 230 || cm.getjob() == 231 || cm.getjob() == 232 || cm.getjob() == 1200 || cm.getjob() == 1210 || cm.getjob() == 1211 || cm.getjob() == 1212){
						cm.给属性装备(1372005,0,0,10,10,10,10,1000,1000,51,83,0,0,0,100,23,40,0);
					}else if(cm.getjob() == 300 || cm.getjob() == 310 || cm.getjob() == 311 || cm.getjob() == 320 || cm.getjob() == 321 || cm.getjob() == 322 || cm.getjob() == 1300 || cm.getjob() == 1310 || cm.getjob() == 1311 || cm.getjob() == 1312){
						cm.给属性装备(1452002,0,0,10,10,10,10,1000,1000,80,0,0,0,0,100,23,40,0);
						cm.给属性装备(1462001,0,0,10,10,10,10,1000,1000,83,0,0,0,0,100,23,40,0);
						cm.gainItem(2060000, 1000);
						cm.gainItem(2061000, 1000);
					}else if(cm.getjob() == 400 || cm.getjob() == 410 || cm.getjob() == 411 || cm.getjob() == 420 || cm.getjob() == 421 || cm.getjob() == 422 || cm.getjob() == 1400 || cm.getjob() == 1410 || cm.getjob() == 1411 || cm.getjob() == 1412){
						cm.给属性装备(1472000,0,0,10,10,10,10,1000,1000,34,0,0,0,0,100,23,40,0);
						cm.给属性装备(1332000,0,0,10,10,10,10,1000,1000,80,0,0,0,0,100,23,40,0);
						cm.gainItem(2070006, 1);
					}else if(cm.getjob() == 500 || cm.getjob() == 510 || cm.getjob() == 511 || cm.getjob() == 520 || cm.getjob() == 521 || cm.getjob() == 522 || cm.getjob() == 1500 cm.getjob() == 1510 || cm.getjob() == 1511 || cm.getjob() == 1512){
						cm.给属性装备(1492000,0,0,10,10,10,10,1000,1000,62,0,0,0,0,100,23,40,0);
						cm.给属性装备(1482000,0,0,10,10,10,10,1000,1000,62,0,0,0,0,100,23,40,0);
						cm.gainItem(2330000, 1);
					}else{
						cm.sendOk("检测职业失败，请转职后再尝试！");
						cm.dispose();
					
					}
				cm.给经验(20000);
				cm.gainItem(2022678, 1);
				cm.gainItem(2012000, 20);
				cm.gainItem(2022465, 30);
                cm.gainItem(2000019, 400);
				cm.gainItem(2340000, 5);
				cm.gainMeso(3000000);
				cm.给属性装备(1142101, 1, 1, 20, 20, 20, 20, 500, 500, 15, 15,0, 0, 0, 0, 40, 40, 0);
				cm.sendOk("购买成功！");
				//cm.setBossLog("新人礼包");
				cm.全服黄色喇叭("[新人礼包] : 恭喜玩家 "+cm.getPlayer().getName()+" 成功领取了新人大礼包。")
				cm.dispose();
				}

				
				cm.dispose();
			}
		}
    }
}