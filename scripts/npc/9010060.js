
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
            zyms += "    #L100##e#r>>>>>>追忆冒险岛新手指导员<<<<<<#k#n#l\r\n\r\n";
            zyms += "#L2##b每日签到#l #L3#福利项目#l #L4#学习技能#l #L5##r金卷中介#k#l\r\n";
            zyms += "#L6##b等级突破#l                         #L9##b家族管理#l\r\n";
            zyms += "#L7##r终冒险家#l     #L1##g职业武器商店#k#l     #L8##b道具删除#k#l\r\n";
            zyms += "#L10##r金币服务#l     #L18##g金卷现金商店#k#l     #L13##b追忆银行#l\r\n";
            zyms += "#L11##r副本重置#l                         #L12##r会员系统#l\r\n";
            zyms += "#L14##r终极无限#l #L15##r免费道具#l #L16##b活跃系统#l #L17##b在线奖励#l";
            cm.sendSimple(zyms);



        } else if (selection == 18) { //金卷商店
            cm.dispose();
            cm.openNpc(2140005);

        } else if (selection == 1) { //集市
            cm.dispose();
            cm.openNpc(1012121);
            //cm.sendOk("集市的商店应有尽有,慢慢逛吧~总有你喜欢的。");

        } else if (selection == 2) { //签到
            cm.dispose();
            cm.openNpc(9010060, 1);

        } else if (selection == 3) { //免费福利
            cm.dispose();
            cm.openNpc(9010060, 2);

        } else if (selection == 4) { //技能学习
            cm.dispose();
            cm.openNpc(9010060, 3);

        } else if (selection == 5) { //金卷中介
            cm.dispose();
            cm.openNpc(9010060, 4);

        } else if (selection == 6) { //突破等级限制
            if (cm.getPlayer().getLevel() < 199) {
                cm.sendOk("突破等级限制等级200才可以进行,请200级后在来找我。");
            } else if (cm.getBossLog("等级突破", 1) > 1) {
                cm.sendOk("你已经完成了等级突破。");
            } else if (cm.getMeso() > 49999999) {
                cm.setBossLog("等级突破");
                cm.gainMeso(-50000000);
                cm.sendOk("等级突破成功,您现在最高可升至255级。");
            } else {
                cm.sendOk("突破等级限制需要收取5000W金币,你没有足够的金币。");
            }
            status = -1;

        } else if (selection == 7) { //终极冒险家
            cm.dispose();
            cm.openNpc(1105000, 1);



        } else if (selection == 8) { //道具删除
            cm.dispose();
            cm.openNpc(9010060, 5);

        } else if (selection == 9) { //家族管理
            cm.dispose();
            cm.openNpc(9010060, 6);

        } else if (selection == 10) { //金币服务
            cm.dispose();
            cm.openNpc(9010060, 7);

        } else if (selection == 11) { //副本管理
            cm.dispose();
            cm.openNpc(9010060, 8);


        } else if (selection == 12) { //开通周卡
            cm.dispose();
            cm.openNpc(9010060, 9);

        } else if (selection == 13) { //银行系统
            cm.dispose();
            cm.openNpc(9010060, 10);
        
        } else if (selection == 14) { //终极无限
            cm.dispose();
            cm.openNpc(9010060, 11);
        
        
        } else if (selection == 15) { //组队点数
            cm.dispose();
            //cm.sendOk("添加中。");
            cm.openNpc(9010060, 12);
        
        } else if (selection == 16) { //活跃系统
            cm.dispose();
            cm.sendOk("紧急添加中。");
            //cm.openNpc(9010060, 13);
        
        
        } else if (selection == 17) { //在线奖励
            cm.dispose();
            //cm.sendOk("紧急添加中。");
            cm.openNpc(9000030, 1);
        
        
        } else if (selection == 100) { //新手向导
            cm.dispose();
            cm.openNpc(9062004);






        }
    }
}

