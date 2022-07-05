
var status = 0;

var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";



function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendOk("#b好的,下次再见.");
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.sendOk("#b好的,下次再见.");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

//------------------------------------------------------------------------

        if (status == 0) {
   
            var add =  "\r\n       伟大的勇士:#r#h ##k，欢迎来到#r你的冒险岛#k\r\n   每日可挑战欧拉拉三次。\r\n\r\n";

             add +="#d              当前已挑战欧碧拉[#r"+cm.getPlayer().getBossLog('欧碧拉') + "#k/3]次#l\r\n";
             add +="#d              当前已挑战生化魔女欧碧拉[#r"+cm.getPlayer().getBossLog('生化魔女欧碧拉') + "#k/3]次#l\r\n";
             add +="#b#L4#           挑战[欧碧拉]#l\r\n";
             add +="#b#L1#           挑战[生化魔女欧碧拉]#l\r\n";
             add += "#r#L3#          [妈妈叫我回家吃饭了]#l\r\n";



            cm.sendSimple(add);

//------------------------------------------------------------------------

        } else if (status == 1) {


        if (selection == 1) {
        cm.dispose();
                cm.openNpc(9120053,2);
        }

        if (selection == 2) 
            if (cm.getLevel() < 150 ) {  
                    cm.sendOk("本地图限制等级150级。您的能力没有资格重返暴君地图");
                    cm.dispose();
                }else{
                    cm.warp(401060100);  
                    cm.serverNotice("[BOSS传送]：玩家" + cm.getPlayer().getName() + "使用了BOSS重返，坐着时光机回到了年轻肝帝时的样子~");
                    cm.dispose();
                    return;
                } 

        if (selection == 3) {
            cm.dispose();   
            cm.warp(401040000);
            
        }

        if (selection == 4) {
        cm.dispose();
            cm.openNpc(9120053,1);
        }

        if (selection == 5) 
            if (cm.getLevel() < 150 ) {  
                    cm.sendOk("本地图限制等级150级。您的能力没有资格重返进阶暗黑龙王副本");
                    cm.dispose();
                }else{
                    cm.warp(240060201);  
                    cm.serverNotice("[BOSS传送]：玩家" + cm.getPlayer().getName() + "使用了BOSS重返，坐着时光机回到了年轻时的样子~");
                    cm.dispose();
                    return;
                } 

        if (selection == 6) {
        cm.dispose();
                cm.openNpc(9010000, "快速转职");

        
            }
        if (selection == 7) {
        cm.dispose();
                cm.openNpc(9010000, "装备强化");

            }
        if (selection == 8) {
        cm.dispose();
                cm.openNpc(9010000, "师徒系统");
            }
        if (selection == 9) {
        cm.dispose();
                cm.openNpc(9010000, "每日任务");

        
            }
        if (selection == 10) {
        cm.dispose();
                cm.openNpc(9010000, "推广系统");

        
            }
        if (selection == 11) {
        cm.dispose();
                cm.openNpc(9010000, "填推广码");

        
            }
        if (selection == 12) {
        cm.dispose();
                cm.openNpc(9010000, "推广商店");

        
            }
        if (selection == 13) {
        cm.dispose();
                cm.openNpc(9010000, "破攻升级");

        
            }
        if (selection == 14) {
        cm.dispose();
                cm.openNpc(9010000, "BOSS召唤");

        
            }
        if (selection == 15) {
        cm.dispose();
                cm.openNpc(9010000, "勋章强化");


            }
        if (selection == 16) {
        cm.dispose();
                cm.openNpc(9010000, "在线奖励");

            }

                

        
             
        }
    }
}

