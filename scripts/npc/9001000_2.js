
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
            //工资领取NPC 9310057 20  这个NPC请帮我设置  普通玩家 VIP  VIP2  VIP3领取的物品个模版
            var text = "我可以派发工资哦！VIP工资丰厚！#d()#k\r\n\r\n";
            text += "#b#L0#普通玩家工资领取#l\r\n\r\n"
            //text += "#L1#VIP1玩家工资领取#l\r\n\r\n";
            //text += "#L2#VIP2玩家工资领取#l\r\n\r\n";
            text += "#L3#VIP2玩家工资领取\r\n\r\n";
            cm.sendSimple(text)
        } else if (status == 1) {
            if (selection == 0) {//普通玩家工资
                if(cm.getPlayer().getOneTimeLog("VIP") == 0 && cm.getBossLog("gz") == 0){
                     cm.gainItem(4031355,+1);//物品代码自己更改。代码,数量  【装备】
                     cm.gainItem(4031454,+1);//物品代码自己更改。代码,数量  【装备】
                    cm.gainMeso(+1000000);//金币数量自己更改
                    cm.sendOk("HO！你领取成功了！");
                    cm.setBossLog("gz");
                    cm.dispose();
                }else{
                    cm.sendOk("你不符合条件.或者已经领取过了，请明天再来领取");
                    cm.dispose();
                }
            } else if (selection == 1) {//VIP1工资
                    if(cm.getPlayer().getOneTimeLog("VIP") == 1 && cm.getBossLog("gz") == 0){
                     cm.gainItem(2340000,+1);//物品代码自己更改。代码,数量  【装备】
                     cm.gainItem(2049100,+1);//物品代码自己更改。代码,数量  【装备】
					 cm.gainItem(4000463,+10);//物品代码自己更改。代码,数量  【装备】
                     cm.gainItem(4031454,+5);//物品代码自己更改。代码,数量  【装备】
					 cm.gainItem(4250902,+1);//物品代码自己更改。代码,数量  【装备】
                     cm.gainItem(4251102,+1);//物品代码自己更改。代码,数量  【装备】                     cm.gainItem(4001129,+1);//物品代码自己更改。代码,数量  【装备】
                     cm.gainItem(4251402,+1);//物品代码自己更改。代码,数量  【装备】
					 cm.gainItem(4250802,+1);//物品代码自己更改。代码,数量  【装备】
					 cm.gainItem(4031355,+2);//物品代码自己更改。代码,数量  【装备】
					 cm.gainItem(4251002 ,+1);//物品代码自己更改。代码,数量  【装备】
                     //cm.gainItem(5211060,+1);//物品代码自己更改。代码,数量  【装备】
                    cm.gainMeso(+5000000);//金币数量自己更改
                    cm.sendOk("HO！你领取成功了！");
                    cm.setBossLog("gz");
                    cm.dispose();
                }else{
                    cm.sendOk("你不符合条件.或者已经领取过了，请明天再来领取");
                    cm.dispose();
                }
                } else if (selection == 2) {//VIP2
                   if(cm.getPlayer().getOneTimeLog("VIP") == 2 && cm.getBossLog("gz") == 0){
                     cm.gainItem(4250902,+2);//物品代码自己更改。代码,数量  【装备】
                     cm.gainItem(4251102,+2);//物品代码自己更改。代码,数量  【装备】
					 cm.gainItem(4251002,+2);//物品代码自己更改。代码,数量  【装备】
                     cm.gainItem(4251402,+2);//物品代码自己更改。代码,数量  【装备】
					 cm.gainItem(2340000,+5);//物品代码自己更改。代码,数量  【装备】
                     cm.gainItem(2049100,+5);//物品代码自己更改。代码,数量  【装备】
					 cm.gainItem(4031454,+10);//物品代码自己更改。代码,数量  【装备】
                     cm.gainItem(4000463,+20);//物品代码自己更改。代码,数量  【装备】	
                     cm.gainItem(4001003,+1);//物品代码自己更改。代码,数量  【装备】					 
                    cm.gainMeso(+5000000);//金币数量自己更改
                    cm.sendOk("HO！你领取成功了！");
                    cm.setBossLog("gz");
                    cm.dispose();
                }else{
                    cm.sendOk("你不符合条件.或者已经领取过了，请明天再来领取");
                    cm.dispose();
                }
                } else if (selection == 3) {//VIP3
                   if(cm.getPlayer().getOneTimeLog("VIP") == 3 && cm.getBossLog("gz") == 0){
                     cm.gainItem(2049100,+10);//物品代码自己更改。代码,数量  【装备】
                     cm.gainItem(2340000,+10);//物品代码自己更改。代码,数量  【装备】
					 cm.gainItem(4000463,+20);//物品代码自己更改。代码,数量  【装备】
                     cm.gainItem(4250902,+3);//物品代码自己更改。代码,数量  【装备】
				     cm.gainItem(4251102,+3);//物品代码自己更改。代码,数量  【装备】
                     cm.gainItem(4251002,+3);//物品代码自己更改。代码,数量  【装备】
					 cm.gainItem(2022468,+10);//物品代码自己更改。代码,数量  【装备】
					 cm.gainItem(4251402,+3);//物品代码自己更改。代码,数量  【装备】
					 cm.gainItem(4031355,+1);//物品代码自己更改。代码,数量  【装备】
					 cm.gainItem(4250802,+3);//物品代码自己更改。代码,数量  【装备】
                     cm.gainItem(4251202,+1);//物品代码自己更改。代码,数量  【装备】
					 cm.gainItem(4001003,+1);//物品代码自己更改。代码,数量  【装备】
                     cm.gainItem(4031454,+10);//物品代码自己更改。代码,数量  【装备】
					 cm.gainItem(4011008,+1);//物品代码自己更改。代码,数量  【装备】
                    cm.gainMeso(+5000000);//金币数量自己更改
                    cm.sendOk("HO！你领取成功了！");
                    cm.setBossLog("gz");
                        cm.dispose();
                    } else {
                        cm.sendOk("你不符合条件.或者已经领取过了，请明天再来领取");
                        cm.dispose();
                    }
                }
            }
        }
}


