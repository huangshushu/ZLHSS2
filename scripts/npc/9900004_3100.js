/*
	脚本名： 飞升系统
	作者： Memory
*/
var status = 0;
var p;
//飞升洗髓所需要的金币
var needMeso = 1;
//飞升洗髓所需要的等级
var needLevel = 1;
//飞升洗髓次数
var maxReborns = 3000;
//飞升洗髓后变化的等级
var targetLevel = 1;
//阿拉伯数字转换
var cn = Array('0','一','二','三','四','五','六','七','八','九','十');

function start() {
  	p = cm.getChar();
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) { //ExitChat
        cm.dispose();
		return;
    } else if (mode == 0) { //No
        cm.sendOk("好的, 若是你准备好要进行飞升洗髓了再来找我吧！");
        cm.dispose();
	}
	if (mode == 1) {
        status++;
    } else {
        status--;
    }
        if (status == 0) {
            //var rebornsNum = maxReborns - cm.getBossLog("飞升");
            var text = "哦，年轻的勇士#b"+cm.getName()+"#k，你是否渴望得到更加强悍的力量！？\r\n";
			//text+="#b#L1#怎么样才能进行飞升？#l\r\n";
			text+="#b#L2#我要转身新手#r(属性全部初始化)#l";
            cm.sendSimple(text);
		} else if (status == 1) {
			if (selection == 1) {
				var text ="#d#e飞升前的准备：#n#k\r\n";
				text+="\t1.需要玩家角色等级达到#r250#k级\r\n";
				text+="\t2.需要在飞升当天击败一次#b进阶扎昆#k\r\n";
				text+="\t3.需要收集#r1#k个RED币\r\n";
				text+="\t4.需要一个#b圣杯#k，通过击败#b进阶扎昆#k有几率获得这件宝物\r\n";
				text+="\t5.需要游戏币 #r"+needMeso+"#k\r\n";
				text+="#d#e飞升后的说明：#n#k\r\n";
				text+="\t飞升后，玩家角色等级将变为"+targetLevel+"级，并且将额外得到10点属性点。\r\n";
				text+="#d#e飞升后的奖励：#n#k\r\n";
				text+="\t飞升后，将获得一个#b蜡笔箱子#k和一个#b150装备随机箱子#k。";
				cm.sendOk(text);
				cm.dispose();
			} else {

				if (cm.getChar().getLevel() < needLevel) {
					cm.sendOk("很抱歉，您需要" + needLevel + "级，才可以进行飞升");
					cm.dispose();
				//} else if (cm.getItemQuantity(4031454) < 1) {
					//cm.sendOk("你没有带来#r圣杯#k[物品ID: 4031454]");
					//cm.dispose();
				//} else if (cm.getItemQuantity(4031454) < 1) {
					//cm.sendOk("你没有带来#r圣杯#k");
					//cm.dispose();
				} else if (cm.getMeso() < needMeso) {
					cm.sendOk("你没有" + needMeso + "金币,我不能帮你的忙哦.");
					cm.dispose();
				//} else if (cm.getBossLog("进阶扎昆") < 1) {
					//cm.sendOk("您今天必须打败一只#r进阶扎昆#k才能进行飞升！")
					//cm.dispose();
				} else {
					cm.sendYesNo("哈哈哈，你果然是万中无一的绝世奇才，所有的条件你都满足了，我现在就为你飞升洗髓，接下来请不要闭眼，因为见证奇迹的时刻就要到了！");
				}
			}
        }else if (status == 2) {
            //var ii = server.MapleItemInformationProvider().getInstance();
            //var toDrop = ii.randomizeStats(ii.getEquipById(4001129));
			/*
            var item = cm.getInventory(-1).getItem(-10);
            if (item != null) {
                if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).isFull() == false) {
                    Packages.server.MapleInventoryManipulator.unequip(cm.getC(), -10, cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNextFreeSlot());
                } else {
                    cm.sendOk("你因为带有副手装备,但是装备栏没有空位,无法为你提供飞升服务!");
                    cm.dispose();
					return;
                }
            }
			*/
			
           // cm.gainMeso(-needMeso);
		//	cm.gainItem(4310088, -1000); 
           // cm.gainItem(2431725, 1); //飞升证明
			cm.gainItem(2431988, 1);
			//cm.gainItem(4031454, -1);
            //cm.gainNX(2, 10000); //抵用点卷
        // cm.clearSkills(); //清理技能
            //cm.unequipEverything(); //脱装备语句，需要的去掉前面的“//”
          cm.getPlayer().changeJob(0);//新手职业
           cm.gainAp(5);
           p.setLevel(targetLevel);
            cm.getPlayer().exp = 0;//经验值0
         //  p.gainReborns(1); //转身次数记录
            //cm.getChar().setBossLog("飞升");
          //  cm.fakeRelog(); //刷新人物数据
               cm.getPlayer().resetAPSP();
 
          //  cm.getPlayer().setMaxHp(50);
           cm.getPlayer().getStat().setDex(10);
           cm.getPlayer().getStat().setStr(10);
           cm.getPlayer().getStat().setInt(10);
           cm.getPlayer().getStat().setLuk(10);
             cm.getPlayer().getStat().setMaxHp(50);
             cm.getPlayer().getStat().setMaxMp(50);
        //player.getStat().setMaxMp((short) 100);
           //    cm.getPlayer().receivePartyMemberHP();
 
          // cm.resetAPSP();
			p.levelUp();
            p.saveToDB(false,false);
 cm.getPlayer().fakeRelog();

            cm.sendOk("哈哈，恭喜你年轻人，你已经完成了#r转新手#k！\r\n\r\n#e#d");
   // cm.channelMessage(0x09, "『轮回系统』" + " : " + "恭喜" + cm.getChar().getName() + ",突破了第" + cn[cm.getChar().getReborns1()] + "次转新手,他又变强大了,大家羡慕嫉妒恨吧!");
            cm.dispose();
    	}
}
