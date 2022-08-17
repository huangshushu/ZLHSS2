
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

fun1ction action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple ("#L1##e#v4000040##d兑换#r100W金币#n#k#l#L2##e#v4000176##d兑换#r100W金币#n#k#l\r\n#L3##e#v4001111##d兑换#r500W金币#n#k#l#L6##e100个#d#v4001126##d兑换#r250W金币#n#k#l\r\n");
        } else if (status == 1) {
            switch(selection) {
        case 0:
            if(cm.getMeso() >= 1000000){
                cm.sendOk("恭喜你，你获得了2OW经验值! .");
                cm.gainMeso(-1000000);
                cm.gainExp(200000);
                cm.dispose();
            }else{
                cm.sendOk("你没有 1000000 金币，我不能给你换购~.");
                cm.dispose();
            }
            break;
        case 1: 
            if(cm.haveItem(4000040,1)){
                cm.gainMeso(1000000);
				cm.gainItem(4000040,-1);
				cm.sendOk("恭喜你，你获得了100W金币! .");
				cm.dispose();
            }else{
                cm.sendOk("你没有足够的道具，我不能给你换购~.");
                cm.dispose();
            }
            break;
         case 2: 
            if(cm.haveItem(4000176,1)){
                cm.gainMeso(1000000);
				cm.gainItem(4000176,-1);
				cm.sendOk("恭喜你，你获得了100W金币! .");
				cm.dispose();
            }else{
                cm.sendOk("你没有足够的道具，我不能给你换购~.");
                cm.dispose();
            }
            break;
            case 3: 
            if(cm.haveItem(4001111,1)){
                cm.gainMeso(5000000);
				cm.gainItem(4001111,-1);
				cm.sendOk("恭喜你，你获得了500W金币! .");
				cm.dispose();
            }else{
                cm.sendOk("你没有 足够的 枫叶，我不能给你换购~.");
                cm.dispose();
            }
            break;
            case 4: 
            if(cm.haveItem(4000313,10)){
                //cm.gainDY(100);
                cm.gainMeso(1000000);
				cm.gainItem(4000313,-10);
				cm.sendOk("恭喜你，你获得了 1000000 金币! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]10张黄金枫叶兑换1000000金币成功！");
				cm.dispose();
            }else{
                cm.sendOk("你没有 足够的 黄金枫叶，我不能给你换购~.");
                cm.dispose();
            }
            break;
            case 5: 
            if(cm.haveItem(4032226,10)){
                //cm.gainDY(100);
                cm.gainMeso(1000000);
				cm.gainItem(4032226,-10);
				cm.sendOk("恭喜你，你获得了 1000000 金币! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]10只黄金猪猪兑换1000000金币成功！");
				cm.dispose();
            }else{
                cm.sendOk("你没有 足够的 黄金猪猪，我不能给你换购~.");
                cm.dispose();
            }
            break;
           case 6: 
            if(cm.haveItem(4001126,100)){
                cm.gainMeso(2500000);
				cm.gainItem(4001126,-100);
				cm.sendOk("恭喜你，你获得了 250W金币! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]100张枫叶兑换250W金币成功！");
				cm.dispose();
            }else{
                cm.sendOk("你没有 足够的 枫叶，我不能给你换购~.");
                cm.dispose();
            }
            break;
            case 7: 
            if(cm.getMeso() >= 10000000){
                cm.sendOk("恭喜你，你获得了 2000000 经验值! .");
                cm.gainMeso(-10000000);
                cm.gainExp(2000000);
                cm.dispose();
            }else{
                cm.sendOk("你没有 10000000 金币，我不能给你换购~.");
                cm.dispose();
            }
            break;
            case 8: 
            if(cm.getMeso() >= 100000000){
                cm.sendOk("恭喜你，你获得了 50000000 经验值! .");
                cm.gainMeso(-100000000);
                cm.gainExp(50000000);
                cm.dispose();
            }else{
                cm.sendOk("你没有 1亿 金币，我不能给你换购~.");
                cm.dispose();
            }
            break;
            case 9: 
                cm.openNpc(9270052, 0);
            break;
            case 10: 
            if(cm.haveItem(4031250,100)){
                cm.gainNX(2000);
				cm.gainItem(4031250,-100);
				cm.sendOk("恭喜你，你获得了 2000点券! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]100个盛大易宝兑换2000点券成功！");
				cm.dispose();
            }else{
                cm.sendOk("你没有 足够的 盛大易宝，我不能给你换购~.");
                cm.dispose();
            }
            break;
            case 11: 
            if(cm.haveItem(4031250,100)){
                cm.gainItem(4000313,10);
				cm.gainItem(4031250,-100);
				cm.sendOk("恭喜你，你获得了 10张黄金枫叶! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]100个盛大易宝兑换10张黄金枫叶成功！");
				cm.dispose();
            }else{
                cm.sendOk("你没有 足够的 盛大易宝，我不能给你换购~.");
                cm.dispose();
            }
            break;
            case 12: 
            if(cm.haveItem(4031250,100)){
                cm.gainItem(4032226,10);
				cm.gainItem(4031250,-100);
				cm.sendOk("恭喜你，你获得了 10只黄金猪猪! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]100个盛大易宝兑换10只黄金猪猪成功！");
				cm.dispose();
            }else{
                cm.sendOk("你没有 足够的 盛大易宝，我不能给你换购~.");
                cm.dispose();
            }
            break;
            }
        }
    }
}