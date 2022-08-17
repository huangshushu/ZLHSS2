/* 
 * 脚本类型: cm
 * 脚本用途: 点卷中介
 * 脚本作者: 故事丶
 * 制作时间: 2014/12/18
 */

var status = -1;
var beauty = 0;
var tosend = 0;
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var sl;
var mats;
var dds;
function start() {
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
        if (mode == 1) {
            status++;
        } else {
            if (status == 0) {
                cm.sendNext("如果需要点卷中介服务在来找我吧。");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {	
            var gsjb = "";
            gsjb += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";		
			gsjb += "           "+小烟花+"#r欢迎来到月月冒险岛中介系统#k"+小烟花 +"\r\n";
			gsjb += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
            gsjb += "        #L0#"+小烟花+"#b#v4030012#兑换经验#r(#r比例1：20000)#l\r\n\r\n";
			gsjb += "        #L1#"+小烟花+"#b#v4170007#兑换经验#r(#r比例1：20亿)#l\r\n\r\n";
			gsjb += "        #L2#"+小烟花+"#b#v4000031#兑换经验#r(#r比例1：2000)#l\r\n\r\n";
			gsjb += "        #L3#"+小烟花+"#b#v4000106#兑换经验#r(#r比例1：2000)#l\r\n\r\n";
			gsjb += "        #L4#"+小烟花+"#b#v4000107#兑换经验#r(#r比例1：2000)#l\r\n\r\n";
			gsjb += "        #L5#"+小烟花+"#b#v4000036#兑换经验#r(#r比例1：2500)#l\r\n\r\n";
			gsjb += "        #L6#"+小烟花+"#b#v4000025#兑换经验#r(#r比例1：2500)#l\r\n\r\n";
			gsjb += "        #L7#"+小烟花+"#b#v4000379#兑换经验#r(#r比例1：3000)#l\r\n\r\n";
			gsjb += "        #L8#"+小烟花+"#b#v4000477#兑换经验#r(#r比例1：3000)#l\r\n\r\n";
			gsjb += "        #L9#"+小烟花+"#b#v4000478#兑换经验#r(#r比例1：4000)#l\r\n\r\n";
			gsjb += "        #L10#"+小烟花+"#b#v4000135#兑换经验#r(#r比例1：4000)#l\r\n\r\n";
			gsjb += "        #L11#"+小烟花+"#b#v4000266#兑换经验#r(#r比例1：4000)#l\r\n\r\n";
			gsjb += "        #L12#"+小烟花+"#b#v4000267#兑换经验#r(#r比例1：4000)#l\r\n\r\n";
			gsjb += "        #L13#"+小烟花+"#b#v4000271#兑换经验#r(#r比例1：4500)#l\r\n\r\n";
			gsjb += "        #L14#"+小烟花+"#b#v4000273#兑换经验#r(#r比例1：4500)#l\r\n\r\n";
			gsjb += "        #L15#"+小烟花+"#b#v4000458#兑换经验#r(#r比例1：5000)#l\r\n\r\n";
			
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM不能参与兑换。");
                cm.dispose();
            }
            if (selection == 0) {
                if (cm.haveItem(4030012) == 0) {
                    cm.sendNext("你拥有的怪物卡不足，无法兑换！");
                    status = -1;
                } else {
                    beauty = 0;
					cm.sendGetNumber("#r请输入兑换经验需使用的#v4030012#的数量:\r\n#b当前拥有的#v4030012#数量为：#c4030012#\r\n", 1, 1, 10000);
                }
            }else if (selection == 1) {
                if (cm.haveItem(4170007) == 0) {
                    cm.sendNext("您的怪物材料不足兑换.");
                    status = -1;
                } else {
                    beauty = 1;
					cm.sendGetNumber("#r请输入兑换经验需使用的#v4000029#的数量:\r\n#b当前拥有的#v4000029#数量为：#c4000029#\r\n", 1, 1, 10000);
                }
            }else if (selection == 2) {
                if (cm.haveItem(4000031) == 0) {
                    cm.sendNext("您的怪物材料不足兑换.");
                    status = -1;
                } else {
                    beauty = 2;
					cm.sendGetNumber("#r请输入兑换经验需使用的#v4000031#的数量:\r\n#b当前拥有的#v4000031#数量为：#c4000031#\r\n", 1, 1, 10000);
                }
            }else if (selection == 3) {
                if (cm.haveItem(4000106) == 0) {
                    cm.sendNext("您的怪物材料不足兑换.");
                    status = -1;
                } else {
                    beauty = 3;
					cm.sendGetNumber("#r请输入兑换经验需使用的#v4000106#的数量:\r\n#b当前拥有的#v4000106#数量为：#c4000106#\r\n", 1, 1, 10000);
                }
            }else if (selection == 4) {
                if (cm.haveItem(4000107) == 0) {
                    cm.sendNext("您的怪物材料不足兑换.");
                    status = -1;
                } else {
                    beauty = 4;
					cm.sendGetNumber("#r请输入兑换经验需使用的#v4000107#的数量:\r\n#b当前拥有的#v4000107#数量为：#c4000107#\r\n", 1, 1, 10000);
                }
            }else if (selection == 5) {
                if (cm.haveItem(4000036) == 0) {
                    cm.sendNext("您的怪物材料不足兑换.");
                    status = -1;
                } else {
                    beauty = 5;
					cm.sendGetNumber("#r请输入兑换经验需使用的#v4000036#的数量:\r\n#b当前拥有的#v4000036#数量为：#c4000036#\r\n", 1, 1, 10000);
                }
            }else if (selection == 6) {
                if (cm.haveItem(4000025) == 0) {
                    cm.sendNext("您的怪物材料不足兑换.");
                    status = -1;
                } else {
                    beauty = 6;
					cm.sendGetNumber("#r请输入兑换经验需使用的#v4000025#的数量:\r\n#b当前拥有的#v4000025#数量为：#c4000025#\r\n", 1, 1, 10000);
                }
            }else if (selection == 7) {
                if (cm.haveItem(4000379) == 0) {
                    cm.sendNext("您的怪物材料不足兑换.");
                    status = -1;
                } else {
                    beauty = 7;
					cm.sendGetNumber("#r请输入兑换经验需使用的#v4000379#的数量:\r\n#b当前拥有的#v4000379#数量为：#c4000379#\r\n", 1, 1, 10000);
                }
            }else if (selection == 8) {
                if (cm.haveItem(4000477) == 0) {
                    cm.sendNext("您的怪物材料不足兑换.");
                    status = -1;
                } else {
                    beauty = 8;
					cm.sendGetNumber("#r请输入兑换经验需使用的#v4000477#的数量:\r\n#b当前拥有的#v4000477#数量为：#c4000477#\r\n", 1, 1, 10000);
                }
            }else if (selection == 9) {
                if (cm.haveItem(4000478) == 0) {
                    cm.sendNext("您的怪物材料不足兑换.");
                    status = -1;
                } else {
                    beauty = 9;
					cm.sendGetNumber("#r请输入兑换经验需使用的#v4000478#的数量:\r\n#b当前拥有的#v4000478#数量为：#c4000478#\r\n", 1, 1, 10000);
                }
            }else if (selection == 10) {
                if (cm.haveItem(4000135) == 0) {
                    cm.sendNext("您的怪物材料不足兑换.");
                    status = -1;
                } else {
                    beauty = 10;
					cm.sendGetNumber("#r请输入兑换经验需使用的#v4000135#的数量:\r\n#b当前拥有的#v4000135#数量为：#c4000135#\r\n", 1, 1, 10000);
                }
            }else if (selection == 11) {
                if (cm.haveItem(4000266) == 0) {
                    cm.sendNext("您的怪物材料不足兑换.");
                    status = -1;
                } else {
                    beauty = 11;
					cm.sendGetNumber("#r请输入兑换经验需使用的#v4000266#的数量:\r\n#b当前拥有的#v4000266#数量为：#c4000266#\r\n", 1, 1, 10000);
                }
            }else if (selection == 12) {
                if (cm.haveItem(4000267) == 0) {
                    cm.sendNext("您的怪物材料不足兑换.");
                    status = -1;
                } else {
                    beauty = 12;
					cm.sendGetNumber("#r请输入兑换经验需使用的#v4000267#的数量:\r\n#b当前拥有的#v4000267#数量为：#c4000267#\r\n", 1, 1, 10000);
                }
            }else if (selection == 13) {
                if (cm.haveItem(4000271) == 0) {
                    cm.sendNext("您的怪物材料不足兑换.");
                    status = -1;
                } else {
                    beauty = 13;
					cm.sendGetNumber("#r请输入兑换经验需使用的#v4000271#的数量:\r\n#b当前拥有的#v4000271#数量为：#c4000271#\r\n", 1, 1, 10000);
                }
            }else if (selection == 14) {
                if (cm.haveItem(4000273) == 0) {
                    cm.sendNext("您的怪物材料不足兑换.");
                    status = -1;
                } else {
                    beauty = 14;
					cm.sendGetNumber("#r请输入兑换经验需使用的#v4000273#的数量:\r\n#b当前拥有的#v4000273#数量为：#c4000273#\r\n", 1, 1, 10000);
                }
            }else if (selection == 15) {
                if (cm.haveItem(4000458) == 0) {
                    cm.sendNext("您的怪物材料不足兑换.");
                    status = -1;
                } else {
                    beauty = 15;
					cm.sendGetNumber("#r请输入兑换经验需使用的#v4000458#的数量:\r\n#b当前拥有的#v4000458#数量为：#c4000458#\r\n", 1, 1, 10000);
                }
            }
               
															
        } else if (status == 2) {
			if (beauty == 0) {
                 if (cm.haveItem(4030012, selection)) {
                    cm.gainItem(4030012, -selection);
					cm.gainExp(20000*selection);
                    cm.sendOk("#r你成功使用#v4030012##*"+selection+"兑换了#b"+selection*20000+"#r经验！");
					cm.worldMessage(6,"【经验兑换】["+cm.getName()+"]用"+selection+"张怪物卡成功兑换了"+selection*20000+"经验！");
                } else {
                    cm.sendNext("你输入的数量超过了你所拥有，请重新操作！");
                    cm.dispose();
                }
            }else if (beauty == 1) {
                 if (cm.haveItem(4170007, selection)) {
                    cm.gainItem(4170007, -selection);
					cm.gainExp(2000000000*selection);
                    cm.sendOk("#r你成功使用#v4170007#*"+selection+"兑换了#b"+selection*2000000000+"#r经验！");
					cm.worldMessage(6,"【经验兑换】["+cm.getName()+"]用"+selection+"个神秘蛋功兑换了"+selection*2000000000+"经验！");
                } else {
                    cm.sendNext("你输入的数量超过了你所拥有，请重新操作！");
                    cm.dispose();
                }
            }else if (beauty == 2) {
                 if (cm.haveItem(4000031, selection)) {
                    cm.gainItem(4000031, -selection);
					cm.gainExp(2000*selection);
                    cm.sendOk("#r你成功使用#v4000031##*"+selection+"兑换了#b"+selection*2000+"#r经验！");
					cm.worldMessage(6,"【经验兑换】["+cm.getName()+"]用"+selection+"个诅咒娃娃成功兑换了"+selection*2000+"经验！");
                } else {
                    cm.sendNext("你输入的数量超过了你所拥有，请重新操作！");
                    cm.dispose();
                }
            }else if (beauty == 3) {
                 if (cm.haveItem(4000106, selection)) {
                    cm.gainItem(4000106, -selection);
					cm.gainExp(2000*selection);
                    cm.sendOk("#r你成功使用#v4000106##*"+selection+"兑换了#b"+selection*2000+"#r经验！");
					cm.worldMessage(6,"【经验兑换】["+cm.getName()+"]用"+selection+"个玩具熊猫的棉花团成功兑换了"+selection*2000+"经验！");
                } else {
                    cm.sendNext("你输入的数量超过了你所拥有，请重新操作！");
                    cm.dispose();
                }
            }else if (beauty == 4) {
                 if (cm.haveItem(4000107, selection)) {
                    cm.gainItem(4000107, -selection);
					cm.gainExp(2000*selection);
                    cm.sendOk("#r你成功使用#v4000107##*"+selection+"兑换了#b"+selection*2000+"#r经验！");
					cm.worldMessage(6,"【经验兑换】["+cm.getName()+"]用"+selection+"个玩具熊猫的黄色丝带成功兑换了"+selection*2000+"经验！");
                } else {
                    cm.sendNext("你输入的数量超过了你所拥有，请重新操作！");
                    cm.dispose();
                }
            }else if (beauty == 5) {
                 if (cm.haveItem(4000036, selection)) {
                    cm.gainItem(4000036, -selection);
					cm.gainExp(2500*selection);
                    cm.sendOk("#r你成功使用#v4000036##*"+selection+"兑换了#b"+selection*2500+"#r经验！");
					cm.worldMessage(6,"【经验兑换】["+cm.getName()+"]用"+selection+"个奇妙的药成功兑换了"+selection*2500+"经验！");
                } else {
                    cm.sendNext("你输入的数量超过了你所拥有，请重新操作！");
                    cm.dispose();
                }
            }else if (beauty == 6) {
                 if (cm.haveItem(4000025, selection)) {
                    cm.gainItem(4000025, -selection);
					cm.gainExp(2500*selection);
                    cm.sendOk("#r你成功使用#v4000025##*"+selection+"兑换了#b"+selection*2500+"#r经验！");
					cm.worldMessage(6,"【经验兑换】["+cm.getName()+"]用"+selection+"个黑石块成功兑换了"+selection*2500+"经验！");
                } else {
                    cm.sendNext("你输入的数量超过了你所拥有，请重新操作！");
                    cm.dispose();
                }
            }else if (beauty == 7) {
                 if (cm.haveItem(4000379, selection)) {
                    cm.gainItem(4000379, -selection);
					cm.gainExp(3000*selection);
                    cm.sendOk("#r你成功使用#v4000379##*"+selection+"兑换了#b"+selection*3000+"#r经验！");
					cm.worldMessage(6,"【经验兑换】["+cm.getName()+"]用"+selection+"个绿色精华成功兑换了"+selection*3000+"经验！");
                } else {
                    cm.sendNext("你输入的数量超过了你所拥有，请重新操作！");
                    cm.dispose();
                }
            }else if (beauty == 8) {
                 if (cm.haveItem(4000477, selection)) {
                    cm.gainItem(4000477, -selection);
					cm.gainExp(3000*selection);
                    cm.sendOk("#r你成功使用#v4000477##*"+selection+"兑换了#b"+selection*3000+"#r经验！");
					cm.worldMessage(6,"【经验兑换】["+cm.getName()+"]用"+selection+"个海盗头盔成功兑换了"+selection*3000+"经验！");
                } else {
                    cm.sendNext("你输入的数量超过了你所拥有，请重新操作！");
                    cm.dispose();
                }
            }else if (beauty == 9) {
                 if (cm.haveItem(4000478, selection)) {
                    cm.gainItem(4000478, -selection);
					cm.gainExp(4000*selection);
                    cm.sendOk("#r你成功使用#v4000478##*"+selection+"兑换了#b"+selection*4000+"#r经验！");
					cm.worldMessage(6,"【经验兑换】["+cm.getName()+"]用"+selection+"个木制马尾成功兑换了"+selection*4000+"经验！");
                } else {
                    cm.sendNext("你输入的数量超过了你所拥有，请重新操作！");
                    cm.dispose();
                }
            }else if (beauty == 10) {
                 if (cm.haveItem(4000135, selection)) {
                    cm.gainItem(4000135, -selection);
					cm.gainExp(4000*selection);
                    cm.sendOk("#r你成功使用#v4000135##*"+selection+"兑换了#b"+selection*4000+"#r经验！");
					cm.worldMessage(6,"【经验兑换】["+cm.getName()+"]用"+selection+"个大海贼王的帽子成功兑换了"+selection*4000+"经验！");
                } else {
                    cm.sendNext("你输入的数量超过了你所拥有，请重新操作！");
                    cm.dispose();
                }
            }else if (beauty == 11) {
                 if (cm.haveItem(4000266, selection)) {
                    cm.gainItem(4000266, -selection);
					cm.gainExp(4000*selection);
                    cm.sendOk("#r你成功使用#v4000266##*"+selection+"兑换了#b"+selection*4000+"#r经验！");
					cm.worldMessage(6,"【经验兑换】["+cm.getName()+"]用"+selection+"个木头护肩成功兑换了"+selection*4000+"经验！");
                } else {
                    cm.sendNext("你输入的数量超过了你所拥有，请重新操作！");
                    cm.dispose();
                }
            }else if (beauty == 12) {
                 if (cm.haveItem(4000267, selection)) {
                    cm.gainItem(4000267, -selection);
					cm.gainExp(4000*selection);
                    cm.sendOk("#r你成功使用#v4000267##*"+selection+"兑换了#b"+selection*4000+"#r经验！");
					cm.worldMessage(6,"【经验兑换】["+cm.getName()+"]用"+selection+"个骷髅护肩成功兑换了"+selection*4000+"经验！");
                } else {
                    cm.sendNext("你输入的数量超过了你所拥有，请重新操作！");
                    cm.dispose();
                }
            }else if (beauty == 13) {
                 if (cm.haveItem(4000271, selection)) {
                    cm.gainItem(4000271, -selection);
					cm.gainExp(4500*selection);
                    cm.sendOk("#r你成功使用#v4000271##*"+selection+"兑换了#b"+selection*4500+"#r经验！");
					cm.worldMessage(6,"【经验兑换】["+cm.getName()+"]用"+selection+"个破损的巢穴成功兑换了"+selection*4500+"经验！");
                } else {
                    cm.sendNext("你输入的数量超过了你所拥有，请重新操作！");
                    cm.dispose();
                }
            }else if (beauty == 14) {
                 if (cm.haveItem(4000273, selection)) {
                    cm.gainItem(4000273, -selection);
					cm.gainExp(4500*selection);
                    cm.sendOk("#r你成功使用#v4000273##*"+selection+"兑换了#b"+selection*4500+"#r经验！");
					cm.worldMessage(6,"【经验兑换】["+cm.getName()+"]用"+selection+"个陈年老骨头成功兑换了"+selection*4500+"经验！");
                } else {
                    cm.sendNext("你输入的数量超过了你所拥有，请重新操作！");
                    cm.dispose();
                }
            }else if (beauty == 15) {
                 if (cm.haveItem(4000458, selection)) {
                    cm.gainItem(4000458, -selection);
					cm.gainExp(5000*selection);
                    cm.sendOk("#r你成功使用#v4000458##*"+selection+"兑换了#b"+selection*5000+"#r经验！");
					cm.worldMessage(6,"【经验兑换】["+cm.getName()+"]用"+selection+"个红色心脏成功兑换了"+selection*5000+"经验！");
                } else {
                    cm.sendNext("你输入的数量超过了你所拥有，请重新操作！");
                    cm.dispose();
                }
            }
        } else {
            cm.dispose();
        }
    }
}