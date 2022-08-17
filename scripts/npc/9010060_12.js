
/*      
 
 NPC版权:                追忆冒险岛 	        
 NPC类型: 		        综合NPC
 制作人：故事丶
 
 */

var status = 0;
var typede = 0;


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (status == 0) {
            var zyms = "";
            zyms = "#fMob/1210102.img/move/0##fMob/1210102.img/move/0##b追忆 - MS#fMob/1210102.img/move/0##fMob/1210102.img/move/0#\r\n";
            zyms += "#k账户金币:" + cm.getMeso() + "\r\n\r\n";
            zyms += "#b#v2500000##z2500000##L1#免费领取(1次)#l\r\n";
            zyms += "#b#v5230000##z5230000##L2#免费领取(1次)#l#L3#金币购买(5W)#l\r\n";
            zyms += "#b#v5064000##z5064000##L4#免费领取(1次)#l\r\n";
            cm.sendSimple(zyms);





        } else if (selection == 1) {
            if (cm.getBossLog("sp卷领取") == 0) {
                cm.gainItem(2500000, 1);
                cm.setBossLog("sp卷领取");
                cm.sendOk("领取成功。");
            } else {
                cm.sendOk("你今天已经领取过来,请明天再来。");
            }
            cm.dispose();

        
            
        } else if (selection == 2) {
            if (cm.getBossLog("搜索器领取") == 0) {
                cm.gainItem(5230000, 1);
                cm.setBossLog("搜索器领取");
                cm.sendOk("领取成功。");
            } else {
                cm.sendOk("你今天已经领取过来,请明天再来。");
            }
            cm.dispose();

        } else if (selection == 3) {
            if (cm.getMeso() >= 50000) {
                cm.gainMeso(-50000);
                cm.gainItem(5230000, 1);
                cm.sendOk("恭喜您购买成功!!!");
            } else {
                cm.sendOk("购买失败,你没有足够的金币。\r\n\r\n账户金币:" + cm.getMeso() + "");
            }
            cm.dispose();    
        
        } else if (selection == 4) {
            if (cm.getMeso() < 3000000) {
               cm.sendOk("购买失败,你没有足够的金币。\r\n\r\n领取该免费项目需要支付300W金币。\r\n\r\n账户金币:" + cm.getMeso() + "");
               } else if (cm.getBossLog("免费防爆") == 0) {
                cm.setBossLog("免费防爆");
                cm.gainMeso(-3000000);
                cm.gainItemPeriod(5064000, 1 , 1);
                cm.sendOk("恭喜您领取成功!!!");
            } else {
                cm.sendOk("领取失败。\r\n\r\n你今天已经领取过来,请明天再来。");
            }
            cm.dispose();      







        }
    }
}

