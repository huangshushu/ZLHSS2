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
            cm.sendSimple ("                您好，尊敬的#b#h # #k\r\n               欢迎来到#r新人礼包#k领取中心#k\r\n [本服#r10级后为5倍经验3爆率#k，买好双倍经验卡为10倍经验 ]\r\n#L0# 萌新点我领取 请#r绿色游戏 切勿作弊 抓到一视同仁！#n#k#l");
        } else if (status == 1) {
            switch(selection) {
        case 0:
            if(cm.haveItem(4161001,1)){
				cm.gainItem(4161001,-1);
				cm.gainItem(2022613,-1);
				cm.gainItem(5211047,1,1);//双倍
				//cm.gainItem(5211060,1,1);//三倍
                cm.gainItem(5151001,1);//染色
				cm.gainItem(5152001,1);//整形
				cm.gainItem(5153000,1);//护肤
				cm.gainItem(5150040,5);//皇家理发券
				cm.gainItem(2022189,200);//香烤起司
				cm.gainItem(2000004,300);//特殊药水
				cm.gainItem(2000005,100);//超级药水
				cm.gainItem(2450000,5);//狩猎
				cm.gainItem(2022171,10);//草莓
				cm.gainItem(2370009,10);//500经验
				//cm.gainItem(2370005,10);//5000经验
				cm.gainItem(2028179,1);//便携拍卖箱子
				cm.gainItem(2028000,1);//30级武器箱子
				cm.gainItem(2028001,1);//77级武器箱子
				cm.gainItem(2028002,1);//100级武器箱子
				cm.gainItem(1122017,1,7);//精灵吊坠
				cm.gainItem(1112599,5,5,5,5,0,0,5,5,0,0,0,0,0,0);//新手成长戒指
				cm.gainItem(1102039,5,5,5,5,0,0,5,5,0,0,0,0,0,0);//0阶神化之翼
				cm.gainItem(1142358,5,5,5,5,0,0,5,5,0,0,0,0,0,0);//新手勋章
				cm.gainItem(1072005,10,10,10,10,100,100,5,5,10,10,10,10,5,5);//皮制凉鞋
				cm.gainItem(1022138,10,10,10,10,100,100,5,5,10,10,10,10,5,5);//遗物眼镜
				cm.gainItem(1082002,10,10,10,10,100,100,5,5,10,10,10,10,5,5);//工地手套
				cm.gainItem(1003450,10,10,10,10,100,100,5,5,10,10,10,10,5,5);//品克缤帽子
				cm.gainItem(1052434,10,10,10,10,100,100,5,5,10,10,10,10,5,5);//品克缤大衣
                cm.gainItem(1052594,5,5,5,5,100,100,5,5,10,10,10,10,5,5);//小恐龙绿豆套装   
                cm.gainItem(1072791,5,5,5,5,100,100,5,5,10,10,10,10,5,5);//小恐龙绿豆爪爪
                cm.gainItem(1082511,5,5,5,5,100,100,5,5,10,10,10,10,5,5);//小恐龙绿豆手套
                cm.gainItem(1003802,5,5,5,5,100,100,5,5,10,10,10,10,5,5);//小恐龙绿豆帽子			
			    cm.gainMeso(3000000);   //金币
			    cm.gainNX(5000);//1
                cm.gainDY(+20000);
                cm.sendOk("恭喜你，你获得了新人礼包! .");   			
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『萌新福利』" + " : " + "[" + cm.getChar().getName() + "]成功领取了新手礼包,祝所有玩家游戏愉快！"));
                cm.dispose();
            }else{
                cm.sendOk("每人只能领取一次~或者你没有#v4161001#~.");
                cm.dispose();
            }
            break;
        case 1: 
			if(cm.getLevel()>= 100 && cm.getBossLog('PlayQuest1') < 1){
  		cm.gainItem(1113091,6,6,6,6,200,200,6,6,0,0,0,0,0,0);
		cm.setBossLog('PlayQuest1');
                cm.sendOk("恭喜你，你获得了一个很牛逼的飞奔戒指! .");
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『萌新福利』" + " : " + "[" + cm.getChar().getName() + "]成功领取了100级萌新奖励,祝所有玩家游戏愉快！"));
                cm.dispose();
            }else{
                cm.sendOk("你没有达到等级要求，或者已经兑换过~.");
                cm.dispose();
            }
            break;
         case 2: 
			if(cm.getLevel()>= 150 && cm.getBossLog('PlayQuest2') < 1){
  		cm.gainItem(1142650,20,20,20,20,400,400,10,10,40,40,40,40,40,40);
		cm.setBossLog('PlayQuest2');
                cm.sendOk("恭喜你，你获得了一个很牛逼很炫酷的称号! .");
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『萌新福利』" + " : " + "[" + cm.getChar().getName() + "]成功领取了150级萌新奖励,祝所有玩家游戏愉快！"));
                cm.dispose();
            }else{
                cm.sendOk("你没有达到等级要求，或者已经兑换过~.");
                cm.dispose();
            }
            break;
            case 3: 
 if(cm.getLevel()>= 200 && cm.getBossLog('PlayQuest3') < 1){
  		cm.gainItem(1142472,25,25,25,25,600,600,15,15,40,40,40,40,40,40);
		cm.setBossLog('PlayQuest3');
                cm.sendOk("恭喜你，你获得了一个超级牛逼超级炫酷的称号! .");
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『萌新福利』" + " : " + "[" + cm.getChar().getName() + "]成功领取了200级萌新奖励,祝所有玩家游戏愉快！"));
                cm.dispose();
            }else{
                cm.sendOk("你没有达到等级要求，或者已经兑换过~.");
                cm.dispose();
            }
            break;
            case 4: 
			if(cm.getLevel()>= 1 && cm.getBossLog('PlayQuest4') < 1){
  		cm.gainItem(4001126,6666);
		cm.setBossLog('PlayQuest4');
                cm.gainDY(1000000);
                cm.gainNX(1000000);
                cm.gainMeso(2000000000);
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]点券金币 请点拍卖新人礼包领取！");
				cm.dispose();
            }else{
                cm.sendOk("每天只能领取一次~.");
                cm.dispose();
            }
            break;
            case 5: 
		cm.openNpc(9900004, 10000);
            break;
           case 6: 
            if(cm.haveItem(4001126,100)){
                cm.gainItem(4000313,10);
				cm.gainItem(4001126,-100);
				cm.sendOk("恭喜你，你获得了 10张黄金枫叶! .");
			        cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]100张枫叶兑换10张黄金枫叶成功！");
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