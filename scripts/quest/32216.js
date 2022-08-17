/* RED 1st impact
    Job selection
	Sugar
    Made by Daenerys
*/

var status = -1;
var sel = 0;

function start(mode, type, selection) {
    if (mode == 1) {
		status++;
    } else {
		if (status == 7) {
			qm.dispose();
			return;
		}
		status--;
    }
    if (status == 0) {
        qm.sendNextS("你那样帮我，而且刚才还打倒了怪物。看来#h # 你已经是一个像模像样的冒险家了。你决定好选择哪个职业了吗？",1);
	} else if (status == 1) {
	    qm.sendNextPrevS("#b哪个职业？#k",17);
	} else if (status == 2) {
	    qm.sendNextPrevS("恩，现在开始，你要去的金银岛中，有另外五种职业可以进行转职。嗯，我记得是……战士、魔法师、弓箭手、飞侠和海盗。有这五种职业。",1);
	} else if (status == 3) {
		qm.sendNextPrevS("#b那些职业各有什么不同呢？#k",17);
	} else if (status == 4) {
	    qm.sendNextPrevS("首先，战士的力量和体力很强，适合近距离战斗。同时，防御力也相当出色，所以不会轻易倒下。魔法师与战士不同，通过魔法进行战斗，所以相比力量，智力更加重要。因为使用魔法，所以可在远距离一次攻击多个敌人。",1);
	} else if (status == 5) {
	    qm.sendNextPrevS("说到远距离攻击，弓箭手才是最适合的。其可以在远距离使用箭矢，并且控制距离的能力也相当出色。飞侠虽有不亚于战士的近距离战斗能力，但在战斗时往往以速度为主，而非力量。",1);
	} else if (status == 6) {
	    qm.sendNextPrevS("最后一个，海盗……其特征很难用一句话来概括。海盗既能用体术发动近身攻击，又能在远距离用手枪或大炮进行攻击。而且，无论哪种攻击方式，都相当华丽和富有个性。",1);
	} else if (status == 7) {
        qm.sendSimple("船长已经跟转职官联系过了，只要你现在先决定好的话，待会儿一到港口就能立即收到转职官的联系。#h #你要选择什么职业呢？\r\n#b#L1# 具备强大力量和防御力的战士#l\r\n#L2# 利用高超的智力使用魔法的魔法师#l\r\n#L3# 善于远距离攻击和控制距离的弓箭手#l\r\n#L4# 进行快速攻击的飞侠#l \r\n#L5# 战斗风格华丽独特的海盗#l#k");
    } else if (status == 8) {
        sel = selection;
		if (selection == 1) {		
		   qm.sendNextS("嗯！#h #你一定能够成为帅气的战士！",1);
		} else if (selection == 2) {
			qm.sendNextS("嗯！#h #你一定能够成为帅气的魔法师！",1);
		} else if (selection == 3) {
			qm.sendNextS("嗯！#h #你一定能够成为帅气的弓箭手！",1);
		} else if (selection == 4) {
			qm.sendNextS("嗯！#h #你一定能够成为帅气的飞侠！",1);
		} else if (selection == 5) {
			qm.sendNextS("嗯！#h #你一定能够成为帅气的海盗！",1);
		}
	} else if (status == 9) {
		if (sel == 1) {
			qm.sendNextS("#h #成为战士的话，那我要不要成为法师呢？虽然可能还做得不够好，但也许能在远处用魔法帮助别人。",1);
		} else {
			qm.sendNextS("我想成为战士。我不想一味接受别人的帮助，而是想在将来成为能够独当一面的冒险家。当然，如果我的力量可以帮到别人的话，那就更好了。",1);
		}
    } else if (status == 10) {
		qm.forceStartQuest(1406, sel);
		qm.showAdvanturerBoatScene();
		qm.dispose();
    }
}
