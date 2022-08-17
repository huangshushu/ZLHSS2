var 礼包物品 = "#v1302000#";
var x1 = "1302000,+1";// 物品ID,数量
var x2;
var x3;
var x4;
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
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
			if(cm.getJob() >= 0 && cm.getJob()<= 522 && cm.hasSkill(1017) == false){
			cm.teachSkill(1017,1,1);
			}else if(cm.getJob() >=1000 || cm.getJob() <= 2112 && cm.hasSkill(20001019) == false){
			cm.teachSkill(20001019,1,1);
			}
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
            text += "#b#L0#挑战怀旧boss[可重复 刷钱~]\r\n#b#L2#挑战千年树精[极品眼饰出处]  #b#L3#掉线重返树精#l\r\n#b#L5#120级挑战每日金币福利副本[需三人才可挑战]#l\r\n#L4#150级挑战绯红五大boss[极品项链材料]     #l\r\n#b#L1#150级挑战未来之城三大boss[奖励属性点装]#l\r\n#b#L6#200级挑战冒险骑士团副本[奖励炫酷椅子]#l\r\n\r\n"
            text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
		    cm.sendSimple(text);
        } else if (selection == 0) {//蜈蚣
             cm.dispose();
             cm.openNpc(9900004, 2130);
       } else if (selection == 1) {//未来之城
            cm.openNpc(9310071, 60);
                                cm.removeAll(3991026);
                                cm.removeAll(3991027); 
                                cm.removeAll(3991028); 
        } else if (selection == 2) {//130
            cm.warp(541020700);
        
        } else if (selection == 3) {//140
            cm.warp(541020800);
       
        } else if (selection == 4) {//血衣
            cm.openNpc(9900004, 2320);
        
        } else if (selection == 5) {//血衣
            cm.openNpc(9310071, 80);
        
        } else if (selection == 6) {//血衣
            cm.openNpc(9310071, 90);
        
        } else if (selection == 7) {//血衣
            cm.openNpc(9310071, 56);

        } else if (selection == 8) {//血衣
            cm.openNpc(9310071, 57);

        } else if (selection == 10) {//血衣
            cm.openNpc(9330078, 98);

        } else if (selection == 11) {//血衣
            cm.openNpc(9330078, 99);
        } else if (selection == 20) {//血衣
            cm.openNpc(9310071, 66);
        
        } 

    }
}