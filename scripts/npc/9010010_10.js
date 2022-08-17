/*
 * 
 * @枫之梦
 * 神器进阶系统 - 魔武双修
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
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
     
            var txt2 = "#d#L2#兑换#v5252001##z5252001#X1\t需#v4001083#x1#v4001085#x1#v2140002#x2500万\r\n";
            var txt3 = "#d#L3#兑换#v5252001##z5252001#X1\t需#v2140002#x3500万#v4001083#x1\r\n";




            cm.sendSimple("您好,#r以下是换取各大BOSS的门票#k\r\n" + txt2 + "" + txt3 + "");
        } else if (status == 1) {
            if (selection == 1) {
                if (cm.haveItem(4002003, 15)) {//判断物品要求
                    cm.gainItem(4002003, -15);//扣除判断物品 

                    cm.gainItem(3994731,1);//给与物品 
                    cm.dispose();
                } else {
                    cm.sendOk("材料不足。无法合成！");
                    cm.dispose();
                }
            } else if (selection == 2) { 
                if (cm.haveItem(4001083, 1) && cm.haveItem(4001085,1) && cm.getMeso() >= 25000000 ){
                    cm.gainItem(4001083, -1);
                    cm.gainItem(4001085, -1);
                    cm.gainMeso(-25000000);
                    cm.gainItem(5252001,1);
                    cm.dispose();
                } else {
                    cm.sendOk("材料不足。无法合成！");
                    cm.dispose();
                }
            } else if (selection == 3) {
                  if (cm.haveItem(4001083, 1) && cm.getMeso() >= 35000000 ) {
                    cm.gainItem(4001083, -1);
                    cm.gainMeso(-35000000);
                    cm.gainItem(5252001,1);
                    cm.dispose();
                } else {
                    cm.sendOk("材料不足。无法合成！");
                    cm.dispose();
                }
            } 
         else if (selection == 4) { 
                 if (cm.haveItem(4000463, 2)) {
                    cm.gainItem(4000463, -2);
                    cm.gainItem(5252001,1);
                    cm.dispose();
                } else {
                    cm.sendOk("材料不足。无法合成！");
                    cm.dispose();
                }
            }    else if (selection == 5) { 
                 if (cm.haveItem(4002003, 120)) {//这是判断物品 
                    cm.gainItem(4002003, -120);//扣除物品
                    cm.gainItem(4000464,1);//给于物品     给于 其实度一样,加个  减法符号就可以了
                    cm.dispose();
                } else {
                    cm.sendOk("材料不足。无法合成！");
                    cm.dispose();
                }
            }  else if (selection == 6) {
                if (cm.haveItem(4002003, 150)) {
                    cm.gainItem(4002003, -150);
                    cm.gainItem(2460005,1);
                    cm.dispose();
                } else {
                    cm.sendOk("材料不足。无法合成！");
                    cm.dispose();
                }
            } else if (selection == 7) {
                if (cm.haveItem(1012011,1) &&cm.haveItem(4310028,10)) {
                    cm.gainItem(4310028, -10);
                    cm.gainItem(1012011, -1);
		    cm.gainItem(1012011,20,20,20,20,100,100,20,20,0,0,0,0,0,0);
                    cm.dispose();
                } else {
                    cm.sendOk("材料不足。无法合成！");
                    cm.dispose();
                }
            } else if (selection == 8) {
                if (cm.haveItem(1122019,1) &&cm.haveItem(4310028,10))  {
                     cm.gainItem(4310028, -10);
                    cm.gainItem(1122019, -1);
		    cm.gainItem(1122019,30,30,30,30,200,200,30,30,0,0,0,0,0,0);
                    cm.dispose();
                } else {
                    cm.sendOk("材料不足。无法合成！");
                    cm.dispose();
                }
            } else if (selection == 9) 
            {
                if (cm.haveItem(1022097,1) &&cm.haveItem(4310028,10))  {
                      cm.gainItem(4310028, -10);
                    cm.gainItem(1022097, -1);
		    cm.gainItem(1022097,40,40,40,40,300,300,40,40,0,0,0,0,0,0);
                    cm.dispose();
                } else {
                    cm.sendOk("材料不足。无法合成！");
                    cm.dispose();
                }
               
                
            } else if (selection == 10) {
               if (cm.haveItem(4170013,3) && cm.haveItem(4170002,3) &&cm.haveItem(4170005,3)) {
                    cm.gainItem(4170013, -3);
                    cm.gainItem(4170002, -3);
                    cm.gainItem(4170005, -3);
                    cm.gainItem(4310028, 1);
                    cm.dispose();
                } else {
                    cm.sendOk("材料不足。无法合成！");
                    cm.dispose();
                }
            } 
              else if (selection == 11) 
            {
                if (cm.haveItem(4170001,3) && cm.haveItem(4170017,3))  {
                     cm.gainItem(4170001, -3);
                    cm.gainItem(4170017, -3);
                    cm.gainItem(4310028, 1);
                    cm.dispose();
                } else {
                    cm.sendOk("材料不足。无法合成！");
                    cm.dispose();
                }
               
                
            } 
else if (selection == 12) 
            {
                if (cm.haveItem(4310028,10) && cm.haveItem(4000463,200))  {
                     cm.gainItem(4310028, -10);
                    cm.gainItem(4000463, -200);
                    cm.gainItem(4310088, 1);
                    cm.dispose();
                } else {
                    cm.sendOk("材料不足。无法合成！");
                    cm.dispose();
                }
               
                
            } 
            }
        }
    }
