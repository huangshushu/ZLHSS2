/*
SnailMS脚本生成器
*/

var jt = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/13#";
var 心1 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var 心2 = "#fUI/GuildMark.img/Mark/Etc/00009001/15#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			// cm.sendOk("对话结束语");
			cm.dispose();
			return;
		}
		status--;
	}
	var MC = cm.getServerName();
	var 角色 = cm.getPlayer().id;
	var 战斗力 = cm.获取角色战斗力();
	cm.getPlayer().刷新身上装备附魔汇总数据();
	if (status == 0) {
		//在这里编写脚本第一步要做的事
		var selStr = "    \t\t" + 心 + "  " + 心 + " #r#e < 个人中心 > #k#n " + 心 + "  " + 心 + "\r\n\r\n";
		
		selStr += "\t" + 心 + " #d玩家：#k#r" + cm.getChar().getName() + "#k\t";
		if(cm.haveItem(2550001)){
			selStr += 星星 + "#d尊贵月卡会员#k" + 星星 + "\r\n";
		}else{
			selStr += "\r\n";
		}
		var oldname = cm.查询曾用名();
		if(!oldname.isEmpty()){
			selStr += "\t" + 心 + " #d曾用名：#k#r" + oldname + "#k\t\r\n";
		}
		selStr += "\t" + 心 + " #d职业：#k#r" + cm.职业(cm.判断职业()) + "#k\r\n";
		selStr += "\t" + 心 + " #d在线时间：#k( #n#b" + cm.查询今日在线时间() + "#k / #r" + cm.查询总在线时间() + " #k) \r\n";
		selStr += "\t" + 心 + " #d战斗力：#k#r" + 战斗力 + "\r\n#k";
		selStr += "\t" + 心 + " #d开店经验加成：#k#r" + cm.读取开店经验加成() + "%\r\n#k";
		selStr += "\t" + 心 + " #d里程：#k#r" + cm.获得里程() + "\r\n#k";
		selStr += "\t" + 心 + " #d伤害上限：#k#r" + cm.读取伤害上限值() + "\r\n#k";
		selStr += " #L5#" + 心 + " #d屏蔽椅子：";
		if(cm.getPlayer().isShowChair()){
			selStr += "#r[关闭] #k#l\r\n";
		}else{
			selStr += "#g[开启] #k#l\r\n";
		}
		selStr += " #L6#" + 心 + " #d屏蔽装备：";
		if(cm.getPlayer().isShowEquip()){
			selStr += "#r[关闭] #k#l\r\n";
		}else{
			selStr += "#g[开启] #k#l\r\n";
		}
		selStr += " #L8#" + 心 + " #d屏蔽技能：";
		if(cm.getPlayer().isShowSkill()){
			selStr += "#r[关闭] #k#l\r\n";
		}else{
			selStr += "#g[开启] #k#l\r\n";
		}
		selStr += " #L7#" + 心 + " #b【切换骑宠技能】#k#l\r\n\r\n";

		selStr += "\t" + 心 + " #d经验储备量：#k#r" + cm.读取储备经验() + "#k\t#b\r\n#L3#经验储备开关：";
		
		if(cm.是否储备经验()){
			selStr += "#g[开启] #k#l";
		} else {
			selStr += "#r[关闭] #k#l";
		}
		selStr += "\t\t#L4#[查看说明]#l\r\n\r\n"; 
		// selStr += "\t" + 心 + " #d杀怪数量：#k#r" + cm.杀怪数量(角色) + "\r\n#k";
		// selStr += "\t" + 心 + " #d大逃杀：冠军#k#r[" + cm.getBossRank("大逃杀活动冠军",2) + "] #k击杀#k#r[" + cm.getBossRank("大逃杀活动击杀",2) + "] #k被击杀#k#r[" + cm.getBossRank("大逃杀活动被杀",2) + "]\r\n#k";
		
		
		
		selStr += "" + 心2 + " —————————#b[个人财富]——————————" + 心2 + "#k#l\r\n\r\n";
		selStr += "\t" + 心 + " #d累计赞助：#k#r" + cm.读取累计赞助() + "#k\r\n";
		selStr += "\t" + 心 + " #d赞助币#i4310088:#：#k#r" + cm.判断背包其他栏().countById(4310088) + "#k\r\n";
		selStr += "\t" + 心 + " #d礼品币#i4310250:#：#k#r" + cm.判断背包其他栏().countById(4310250) + "#k\r\n";
		selStr += "\t" + 心 + " #d金币：#k#r" + cm.getPlayer().getMeso() + "#k\r\n";
		selStr += "\t" + 心 + " #d点券：#k#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n";
		selStr += "\t" + 心 + " #d抵用：#k#r" + cm.getPlayer().getCSPoints(2) + "#k\r\n";
			
			
		// selStr += "" + 心2 + " #b[附魔潜能]————————————————" + 心2 + "#k#l\r\n\r\n";
		
		// var 一击必杀增加值 = cm.getPlayer().获取附魔汇总值(7);
			// var 一击必杀 = 10000000 + (10000000 / 100 * 一击必杀增加值);
			// selStr += "\t" + 心 + " [#e#b必杀值#k#n]:#r" + 一击必杀.toFixed(1) + "#k\r\n";
			// if (cm.getPlayer().获取附魔汇总值(100) > 0) {
				// selStr += "\t" + 心 + " [#e#b异常抗性#k#n]: 减少 #r" + cm.getPlayer().获取附魔汇总值(100) + " #k% 异常状态持续时间#k\r\n";
			// }
			// if (cm.getPlayer().获取附魔汇总值(1) > 0) {
				// selStr += "\t" + 心 + " [#e#b强攻#k#n]: 增加 #r" + cm.getPlayer().获取附魔汇总值(1) + " #k% 对普通怪物的伤害#k\r\n";
			// }
			// if (cm.getPlayer().获取附魔汇总值(2) > 0) {
				// selStr += "\t" + 心 + " [#e#b超·强攻#k#n]: 增加 #r" + cm.getPlayer().获取附魔汇总值(2) + " #k% 对高级怪物的伤害#k\r\n";
			// }
			// if (cm.getPlayer().获取附魔汇总值(3) > 0) {
				// selStr += "\t" + 心 + " [#e#b战争意志#k#n]: 增加 #r" + cm.getPlayer().获取附魔汇总值(3) + " #k% 对所有怪物的伤害#k\r\n";
			// }
			// if (cm.getPlayer().获取附魔汇总值(4) > 0) {
				// selStr += "\t" + 心 + " [#e#b鹰眼#k#n]: 对普通怪物 #r" + cm.getPlayer().获取附魔汇总值(4) + " #k% 几率一击必杀#k\r\n";
			// }
			// if (cm.getPlayer().获取附魔汇总值(5) > 0) {
				// selStr += "\t" + 心 + " [#e#b锐眼#k#n]: 对高级怪物 #r" + cm.getPlayer().获取附魔汇总值(5) + " #k% 几率一击必杀#k\r\n";
			// }
			// if (cm.getPlayer().获取附魔汇总值(6) > 0) {
				// selStr += "\t" + 心 + " [#e#b谢幕#k#n]: 对所有怪物 #r" + cm.getPlayer().获取附魔汇总值(6) + " #k% 几率一击必杀#k\r\n";
			// }
			// if (cm.getPlayer().获取附魔汇总值(7) > 0) {
				// selStr += "\t" + 心 + " [#e#b兵不血刃#k#n]: 增加 #r" + cm.getPlayer().获取附魔汇总值(7) + " #k% 一击必杀值#k\r\n";
			// }
			// if (cm.getPlayer().获取附魔汇总值(21) > 0) {
				// selStr += "\t" + 心 + " [#e#b坚韧#k#n]: 减少 #r" + cm.getPlayer().获取附魔汇总值(21) + " #k% 受到的伤害#k\r\n";
			// }
			// if (cm.getPlayer().获取附魔汇总值(31) > 0) {
				// selStr += "\t" + 心 + " [#e#b幸运狩猎#k#n]: 增加 #r" + cm.getPlayer().获取附魔汇总值(31) + " #k% 狩猎经验#k\r\n";
			// }
			// if (cm.getPlayer().获取附魔汇总值(32) > 0) {
				// selStr += "\t" + 心 + " [#e#b苦中作乐#k#n]: 被诅咒状态下增加 #r5#k 倍狩猎经验#k\r\n";
			// }
			// if (cm.getPlayer().获取附魔汇总值(33) > 0) {
				// selStr += "\t" + 心 + " [#e#b闲来好运#k#n]: 增加 #r" + cm.getPlayer().获取附魔汇总值(33) + " #k% 泡点经验获取#k\r\n";
			// }
			// if (cm.getPlayer().获取附魔汇总值(34) > 0) {
				// selStr += "\t" + 心 + " [#e#b财源滚滚#k#n]: 增加 #r" + cm.getPlayer().获取附魔汇总值(34) + " #k% 泡点金币获取#k\r\n";
			// }
			// if (cm.getPlayer().获取附魔汇总值(40) > 0) {
				// selStr += "\t" + 心 + " [#e#b愤怒之火#k#n]: 愤怒之火状态下，回复输出 #r" + cm.getPlayer().获取附魔汇总值(40) + " #k% 的伤害值生命，行动时每 #r3#k 秒燃烧 #r20#k% 生命值。#k\r\n";
			// }
			// if (cm.getPlayer().获取附魔汇总值(41) > 0) {
				// selStr += "\t" + 心 + " [#e#b圣骑反弹#k#n]: 伤害反弹状态下，准骑士类职业 #r" + cm.getPlayer().获取附魔汇总值(40) + " #k%  的几率闪避所有伤害，闪避不成功减少 #r" + cm.getPlayer().获取附魔汇总值(41) + " #k% 的伤害#k\r\n";
			// }
			// if (cm.getPlayer().获取附魔汇总值(43) > 0) {
				// selStr += "\t" + 心 + " [#e#b蓄势待发#k#n]: 根据距离上一次攻击的间隔，为下一次攻击提高输出 （ #d"+cm.查看蓄力一击()+"#k ）\r\n\t\t#b[增加比例]: #r" + cm.getPlayer().获取附魔汇总值(43) + " #k%\r\n";
			// }
			// if (cm.getPlayer().获取附魔汇总值(51) > 0) {
				// selStr += "\t" + 心 + " [#e#b稳如泰山#k#n]: 角色受到伤害时 #r" + cm.getPlayer().获取附魔汇总值(42) + " #k% 的几率发动稳如泰山。#k\r\n";
			// }
			
		selStr += "#L1#" + 心2 + "#b [返回界面]" + 心2 + "#l\r\n";
		cm.sendSimple(selStr);
		// cm.dispose();
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection == 1){
			//在这里编写选项1要做的事
			cm.dispose();
			cm.openNpc(9900004);
		}else if (selection == 3) {
			//在这里编写选项2要做的事
			var 经验储备开关状态 = cm.是否储备经验();
			if(经验储备开关状态){
				cm.关闭储备经验();
			} else {
				cm.开启储备经验();
			}
			cm.dispose();
			cm.openNpc(9900004, 1);
		}else if (selection == 4){
			// var message= "《经验储备系统说明》\r\n";
			
			// cm.sendSimple(message);
			cm.dispose();
			cm.openNpc(9900004, 11000);
		}else if (selection == 5){
			var 是否显示椅子 = cm.getPlayer().isShowChair();
			if(是否显示椅子){
				cm.getPlayer().setShowChair(false);
			} else {
				cm.getPlayer().setShowChair(true);
			}
			cm.刷新();
			cm.dispose();
			cm.openNpc(9900004, 1);
		}else if (selection == 6){
			var 是否显示装备 = cm.getPlayer().isShowEquip();
			if(是否显示装备){
				cm.getPlayer().setShowEquip(false);
			} else {
				cm.getPlayer().setShowEquip(true);
			}
			cm.刷新();
			cm.dispose();
			cm.openNpc(9900004, 1);
		}else if (selection == 7){
			cm.openNpc(9900001, 1);
		}else if (selection == 8){
			var 是否显示技能 = cm.getPlayer().isShowSkill();
			if(是否显示技能){
				cm.getPlayer().setShowSkill(false);
			} else {
				cm.getPlayer().setShowSkill(true);
			}
			//cm.刷新();
			cm.dispose();
			cm.openNpc(9900004, 1);
		}
		return;
		
	} else {
		cm.dispose();
		return;
	}
}

