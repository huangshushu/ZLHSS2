

var status = 0;

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
        else
            status--;
        if (status == 0) {
            cm.sendSimple ("#L0##e10个#d#v4170001##d兑换#r#v4000313#30个#k#n#l#L8##e10个#d#v4170009##d兑换#r#v4000313#20个#k#n#l\r\n#L12##e300个#d#v4000429##d兑换#r#v5520000#【乌鲁城获得】#k#n#l\r\n#L10##e2333个#d#v4001126##d兑换#r#v4310038##k#n#l#L5#100个#r#v4000313#兑换1个#v4251202##n#l#k\r\n#L1##e30个#d#v4000487##d兑换#r#v4310030##k#n#l#L2##e50个#d#v4001465##d兑换#r#v4310030##n#l#k\r\n#L7#600个#v4000273##d兑换#r5个#v4001465##n#l#k#L3#600个#v4000274##d兑换#r5个#v4001465##n#l#k\r\n#L6#20个#v4310030##d兑换1个#r#v4310066##n#l#k\r\n");
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
            if(cm.haveItem(4170001,10)){
                cm.gainItem(4000313,30);
				cm.gainItem(4170001,-10);
				cm.sendOk("恭喜你，你获得了30个黄金枫叶! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]10个毒物蛋兑换30个黄金枫叶成功！");
				cm.dispose();
            }else{
                cm.sendOk("你没有足够的道具，我不能给你换购~.");
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
            if(cm.haveItem(4000487,30)){
                cm.gainItem(4310030,1);
				cm.gainItem(4000487,-30);
				cm.sendOk("恭喜你，你获得了1个极品抽奖币! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]30个暗影币兑换极品抽奖币成功！");
				cm.dispose();
            }else{
                cm.sendOk("你没有足够的道具，我不能给你换购~.");
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
            if(cm.haveItem(4001465,50)){
         cm.gainItem(4310030,1);
				cm.gainItem(4001465,-50);
				cm.sendOk("恭喜你，你获得了1个极品抽奖币! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]50个爱心宝石兑换极品抽奖币成功！");
				cm.dispose();
            }else{
                cm.sendOk("你没有足够的道具，我不能给你换购~.");
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
            if(cm.haveItem(4000274,600)){
  		cm.gainItem(4001465,5);
				cm.gainItem(4000274,-600);
				cm.sendOk("恭喜你，你获得了5个爱心宝石! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]600个断裂的角兑换5个爱心宝石成功！");
				cm.dispose();
            }else{
                cm.sendOk("你没有足够的道具，我不能给你换购~.");
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
            if(cm.haveItem(4001618,600)){
  		cm.gainItem(4000487,4);
				cm.gainItem(4001618,-600);
				cm.sendOk("恭喜你，你获得了4个暗影金币! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]600个传说枫叶兑换4个暗影金币成功！");
				cm.dispose();
            }else{
                cm.sendOk("你没有足够的道具，我不能给你换购~.");
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
            if(cm.haveItem(4000313,100)){
 				cm.gainItem(4000313,-100);
				cm.gainItem(4251202,1);
				cm.sendOk("恭喜你，你获得了1个强化水晶! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]100个黄金枫叶兑换强化水晶成功！【强化装备】");
				cm.dispose();
            }else{
                cm.sendOk("你没有足够的道具，我不能给你换购~.");
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
            if(cm.haveItem(4310030,20)){
                cm.gainItem(4310066,1);
				cm.gainItem(4310030,-20);
				cm.sendOk("恭喜你，你获得了冬季限量币! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]20个运动会币兑换冬季限量币成功【暴君抽奖】！");
				cm.dispose();
            }else{
                cm.sendOk("你没有足够的道具，我不能给你换购~.");
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
            if(cm.haveItem(4000273,600)){
  		cm.gainItem(4001465,5);
				cm.gainItem(4000273,-600);
				cm.sendOk("恭喜你，你获得了5个爱心宝石! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]600个陈年老骨头兑换5个爱心宝石成功！");
				cm.dispose();
            }else{
                cm.sendOk("你没有足够的道具，我不能给你换购~.");
                cm.dispose();
            }
            break;
            case 8: 
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
            if(cm.haveItem(4170009,10)){
                cm.gainItem(4000313,20);
				cm.gainItem(4170009,-10);
				cm.sendOk("恭喜你，你获得了20个黄金枫叶! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]10个海盗蛋兑换20个黄金枫叶成功！");
				cm.dispose();
            }else{
                cm.sendOk("你没有足够的道具，我不能给你换购~.");
                cm.dispose();
            }
            break;
            case 9: 
                cm.openNpc(9270052, 0);
            break;
            case 10: 
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
            if(cm.haveItem(4001126,2333)){
                cm.gainItem(4310038,1);
				cm.gainItem(4001126,-2333);
				cm.sendOk("恭喜你，你获得了必成卷兑换币1个! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]2333个枫叶兑换必成卷兑换币成功！");
				cm.dispose();
            }else{
                cm.sendOk("你没有足够的枫叶，我不能给你换购~.");
                cm.dispose();
            }
            break;
            case 11: 
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
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("特殊栏空余不足1个空格！");
            cm.dispose();

			}else */
            if(cm.haveItem(4000429,300)){
                cm.gainItem(5520000,1);
				cm.gainItem(4000429,-300);
				cm.sendOk("恭喜你，你获得了 1把宿命剪刀! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]300个玻璃汗珠兑换宿命剪刀成功！");
				cm.dispose();
            }else{
                cm.sendOk("你没有足够的道具，我不能给你换购~.");
                cm.dispose();
            }
            break;
            case 13: 
            if(cm.haveItem(4260001,100)){
                cm.gainItem(4033248,100);
				cm.gainItem(4260001,-100);
				cm.sendOk("恭喜你，你获得了100个金色枫叶! .");
				cm.dispose();
            }else{
                cm.sendOk("你没有足够的道具，我不能给你换购~.");
                cm.dispose();
            }
            break;
            }
        }
    }
}