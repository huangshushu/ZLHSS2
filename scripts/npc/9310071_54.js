/*   By: 天使冒险岛.               
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

funct1ion action(mode, type, selection) {
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
            cm.sendSimple ("#L3##e1000点卷#d购买#r10个#v4000313##k#n#l#L7##e1W点卷#d购买#r100个#v4000313##k#n#l\r\n#L2##e15000点卷#d购买#r1个#v4310030##n#l#k#L6##e15W点卷#d购买#r10个#v4310030##n#l#k\r\n#L4##e10000点卷#d购买#r10个#v4001465##n#k#l#L0##e10W点卷#d购买#r100个#v4001465##n#k#l\r\n#k#L5##e5000点卷#d购买#r10个#v4000487##k#n#l#L1##e5W点卷#d购买#r100个#v4000487##k#n#l\r\n");
        } else if (status == 1) {
            switch(selection) {
        case 0:
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();

			}else */
			if(cm.getPlayer().getCSPoints(1) >= 100000){
                cm.gainNX(-100000);
  		cm.gainItem(4001465,100);
                cm.sendOk("恭喜你，你获得了100个爱心宝石! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]100000点卷兑换100个爱心宝石成功！");
                cm.dispose();
            }else{
                cm.sendOk("你没有100000点卷，我不能给你换购~.");
                cm.dispose();
            }
            break;
        case 1: 
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();

			}else */
			if(cm.getPlayer().getCSPoints(1) >= 50000){
                cm.gainNX(-50000);
  		cm.gainItem(4000487,100);
                cm.sendOk("恭喜你，你获得了100个玩具抽奖币! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]50000点卷兑换100个玩具抽奖币成功！");
                cm.dispose();
            }else{
                cm.sendOk("你没有50000点卷，我不能给你换购~.");
                cm.dispose();
            }
            break;
         case 2: 
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();

			}else */
			if(cm.getPlayer().getCSPoints(1) >= 15000){
                cm.gainNX(-15000);
  		cm.gainItem(4310030,1);
                cm.sendOk("恭喜你，你获得了1个极品抽奖币! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]15000点卷兑换极品抽奖币成功！");
                cm.dispose();
            }else{
                cm.sendOk("你没有10000点卷，我不能给你换购~.");
                cm.dispose();
            }
            break;
            case 3: 
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();

			}else */
			if(cm.getPlayer().getCSPoints(1) >= 1000){
                cm.gainNX(-1000);
  		cm.gainItem(4000313,10);
                cm.sendOk("恭喜你，你获得了10个黄金枫叶! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]1000点卷兑换10个黄金枫叶成功！");
                cm.dispose();
            }else{
                cm.sendOk("你没有1000点卷，我不能给你换购~.");
                cm.dispose();
            }
            break;
        case 4:
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();

			}else */
			if(cm.getPlayer().getCSPoints(1) >= 10000){
                cm.gainNX(-10000);
  		cm.gainItem(4001465,10);
                cm.sendOk("恭喜你，你获得了10个爱心宝石! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]10000点卷兑换10个爱心宝石成功！");
                cm.dispose();
            }else{
                cm.sendOk("你没有10000点卷，我不能给你换购~.");
                cm.dispose();
            }
            break;
        case 5: 
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();

			}else */
			if(cm.getPlayer().getCSPoints(1) >= 5000){
                cm.gainNX(-5000);
  		cm.gainItem(4000487,10);
                cm.sendOk("恭喜你，你获得了10个玩具抽奖币! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]5000点卷兑换10个玩具抽奖币成功！");
                cm.dispose();
            }else{
                cm.sendOk("你没有5000点卷，我不能给你换购~.");
                cm.dispose();
            }
            break;
         case 6: 
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();

			}else */
			if(cm.getPlayer().getCSPoints(1) >= 150000){
                cm.gainNX(-150000);
  		cm.gainItem(4310030,10);
                cm.sendOk("恭喜你，你获得了10个极品抽奖币! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]150000点卷兑换10个极品抽奖币成功！");
                cm.dispose();
            }else{
                cm.sendOk("你没有100000点卷，我不能给你换购~.");
                cm.dispose();
            }
            break;
            case 7: 
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();

			}else */
			if(cm.getPlayer().getCSPoints(1) >= 10000){
                cm.gainNX(-10000);
  		cm.gainItem(4000313,100);
                cm.sendOk("恭喜你，你获得了100个黄金枫叶! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]10000点卷兑换100个黄金枫叶成功！");
                cm.dispose();
            }else{
                cm.sendOk("你没有10000点卷，我不能给你换购~.");
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
