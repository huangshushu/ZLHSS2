/*
 * 
 * @枫之梦
 * 神器进阶系统 - 魔武双修
 */

var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0){ 
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {

           var txt4 = "#d#L4##k"+蓝色角点+"完成任务领取:#v2140001#x3000万    #z4251202##v4251202#x1   #v4001102#点卷X8500   #z4310174##v4310174#x2   #z4000186##v4000186#x1\r\n\r\n";

 
            cm.sendSimple("请#r收集5个#z4031456##v4031456##k来领取每日个人任务奖励                                      "+ txt4 + "");
        } else if (status == 1) {
            if (selection == 1) {
              
          if (cm.haveItem(4031013,1)){
                  cm.removeAll(4031013);
                     cm.gainItem(4310174, 2);
                     cm.gainMeso(+5000000);//读取变量

                     cm.dispose();
                     cm.喇叭(20, "【" + cm.getPlayer().getName() + "】制作了一把红色武器,大家快恭喜他(她)!!!");
                } else {
                    cm.sendOk("请确认将物品都放入背包");
                    cm.dispose();
                }
            } else if (selection == 2) { 
          if (cm.haveItem(4031156,1)){
                  cm.removeAll(4031156);
                     cm.gainItem(4310196, 2);
                     cm.gainMeso(+10000000);//读取变量

                     cm.dispose();
                     cm.dispose();
                     cm.喇叭(20, "【" + cm.getPlayer().getName() + "】制作了一把红色武器,大家快恭喜他(她)!!!");
                } else {
                    cm.sendOk("请确认将物品都放入背包");
                    cm.dispose();
                }
            } else if (selection == 3) {
          if (cm.haveItem(4000429,1)){
                  cm.removeAll(4000429);
                     cm.gainItem(4000463, 3);
                     cm.gainMeso(+20000000);//读取变量


                     cm.喇叭(20, "【" + cm.getPlayer().getName() + "】制作了一把红色武器,大家快恭喜他(她)!!!");
                } else {
                    cm.sendOk("材料不足。无法合成！");
                    cm.dispose();
                }
            } 
         else if (selection == 4) { 
          if (cm.haveItem(4031456,5)){
                     cm.gainItem(4031456, -5)
                     cm.gainItem(4251202, 1);
                     cm.gainItem(4310174, 2);
                     cm.gainItem(4000186, 1);
                     cm.gainMeso(+30000000);//读取变量
                       cm.gainNX(8500)
 
                    cm.dispose();
                     cm.喇叭(20, "【" + cm.getPlayer().getName() + "】制作了一把红色武器,大家快恭喜他(她)!!!");
                } else {
                    cm.sendOk("材料不足。无法完成，请继续收集吧！");
                    cm.dispose();
                }
            }  else if (selection == 5) {
          if (cm.haveItem(1382265,1)){
                     cm.gainItem(1382265, -1);
                     cm.gainMeso(+1200000000);//读取变量

                    cm.dispose();
                     cm.喇叭(20, "【" + cm.getPlayer().getName() + "】制作了一把红色武器,大家快恭喜他(她)!!!");
                } else {
                    cm.sendOk("材料不足。无法合成！");
                    cm.dispose();
                }
            } else if (selection == 6) {
          if (cm.haveItem(1472265,1)){
                     cm.gainItem(1472265, -1);
                     cm.gainMeso(+1200000000);//读取变量

                    cm.dispose();
                     cm.喇叭(20, "【" + cm.getPlayer().getName() + "】制作了一把红色武器,大家快恭喜他(她)!!!");
                } else {
                    cm.sendOk("材料不足。无法合成！");
                    cm.dispose();
                }
            } else if (selection == 7) {
          if (cm.haveItem(1462243,1)){
                     cm.gainItem(1462243, -1);
                     cm.gainMeso(+1200000000);//读取变量

                    cm.dispose();
                     cm.喇叭(20, "【" + cm.getPlayer().getName() + "】制作了一把红色武器,大家快恭喜他(她)!!!");
                } else {
                    cm.sendOk("材料不足。无法合成！");
                    cm.dispose();
                }
            } else if (selection == 8) {
          if (cm.haveItem(1332279,1)){
                     cm.gainItem(1332279, -1);
                     cm.gainMeso(+1200000000);//读取变量

                    cm.dispose();
                     cm.喇叭(20, "【" + cm.getPlayer().getName() + "】制作了一把红色武器,大家快恭喜他(她)!!!");
                } else {
                    cm.sendOk("材料不足。无法合成！");
                    cm.dispose();
                }
            } else if (selection == 9) 
            {
          if (cm.haveItem(1412181,1)){
                     cm.gainItem(1412181, -1);
                     cm.gainMeso(+1200000000);//读取变量

                    cm.dispose();
                     cm.喇叭(20, "【" + cm.getPlayer().getName() + "】制作了一把红色武器,大家快恭喜他(她)!!!");
                } else {
                    cm.sendOk("材料不足。无法合成！");
                    cm.dispose();
                }
               
                
            } else if (selection == 10) {
          if (cm.haveItem(1492235,1)){
                     cm.gainItem(1492235, -1);
                     cm.gainMeso(+1200000000);//读取变量

                    cm.dispose();
                     cm.喇叭(20, "【" + cm.getPlayer().getName() + "】制作了一把红色武器,大家快恭喜他(她)!!!");
                } else {
                    cm.sendOk("材料不足。无法合成！");
                    cm.dispose();
                }
            } 
              else if (selection == 11) 
            {
          if (cm.haveItem(1482221,1)){
                     cm.gainItem(1482221, -1);
                     cm.gainMeso(+1200000000);//读取变量

                    cm.dispose();
                     cm.喇叭(20, "【" + cm.getPlayer().getName() + "】制作了一把红色武器,大家快恭喜他(她)!!!");
                } else {
                    cm.sendOk("材料不足。无法合成！");
                    cm.dispose();
                }       
                
            } 
else if (selection == 12) 
            {
          if (cm.haveItem(1422189,1)){
                     cm.gainItem(1422189, -1);
                     cm.gainMeso(+1200000000);//读取变量

                    cm.dispose();
                } else {
                    cm.sendOk("材料不足。无法合成！");
                    cm.dispose();
                }
               
                
            } 
            }
        }
    }
