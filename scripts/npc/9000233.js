/*
 * 
 * 
 * 
 * 跑旗赛副本
 * 
 */

var status = 0;
var maxPlay = 1;
var em;
var Eventstatus;
var GP = Array(0,1,2,3,4,5);//这里设置获得家族点数第一格代表不在前5名获得的点数，之后从第一名到第五名依次类推，如果不给就填0
function start() {
    status = -1;
    em = cm.getEventManager("PQS");
    Eventstatus = "#r关闭状态。#k";
    if (em.getProperty("gate") == "2") {//已经关闭入口了
        Eventstatus = "#e#r正在进行中。#n"
    }
    if (em.getProperty("gate") == "1") {//
        Eventstatus = "#e#r开放入口中。#n"
    }
    if (em.getProperty("gate") == "3") {//已经关闭入口了
        Eventstatus = "#e#r管理员已关闭入口，禁止进入。#n"
    }
	if (em.getProperty("gate") == "4") {//已经关闭入口了
        Eventstatus = "#e#r活动结束了。#n"
    }
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status >= 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (cm.getMap().getId() == 932200002) {
                if (cm.getPlayer().isGM()) {
                    cm.sendSimple("你想做什么呢？\r\n目前的活动状态：" + Eventstatus + "\r\n#e#r←←←←←←←←←←←←←点击左侧NPC领取奖励\r\n#e#r←←←←←←←←←←←←←点击左侧NPC领取奖励\r\n#e#r←←←←←←←←←←←←←点击左侧NPC领取奖励\r\n#L3# 关闭入口！（管理员可见）\r\n#L4# 开启入口！（管理员可见）");
                } else {
                    cm.sendSimple("你想做什么呢？\r\n目前的活动状态：" + Eventstatus + "\r\n#e#r←←←←←←←←←←←←←点击左侧NPC领取奖励\r\n#e#r←←←←←←←←←←←←←点击左侧NPC领取奖励\r\n#e#r←←←←←←←←←←←←←点击左侧NPC领取奖励\r\n");
                }

			} else if(cm.getMap().getId() == 101050000){
				status = 3;
				cm.sendYesNo("这里 可以带你进入跑旗赛等候地图哦，现在进入吗？");
            } else {
                em = cm.getEventManager("PQS");
                if (em.getProperty("gate") == "0") {//已经关闭入口了
                    if (cm.getPlayer().isGM()) {
                        status = 2;
                        cm.sendYesNo("尊敬的管理员，您想开放 跑旗赛 活动的入口吗？");
                    } else {
                        cm.sendOk("已经开始，或现在不是活动时间。\r\n请稍后再试。");
                        cm.dispose();
                    }
                    return;
                }
				if (cm.getPlayer().getClient().getChannel() >= 2 && cm.getPlayer().getClient().getChannel() <= 5) {
                    cm.sendOk("#d跑旗活动仅能在 #r1 #d频道才可以执行。");
                    cm.dispose();
                    return;
                }
                               if (cm.getLevel()==1) {
				//if (cm.getGuild()==null) {
                    cm.sendOk("对不起，你目前没有家族，我不能让你进去");
                    cm.dispose();
                    return;
                }
                if (cm.getEventCount("家族跑旗赛") >= maxPlay) {
                    cm.sendOk("今天你已经参与了" + maxPlay + "次，不能再参与该副本了！请明天赶早~");
                    cm.dispose();
                    return;
                }
                if (em.getProperty("gate") == "2") {//已经关闭入口了
                    cm.sendOk("已经开始了家族跑旗赛活动，请稍后再来。");
                    cm.dispose();
                    return;
                }

                if (em == null) {
                    cm.sendOk("出现错误，请重新进入副本。");
                } else {
                    if (cm.getPlayer().isGM()) {
                        cm.sendSimple("#e#r[提示]"+em.getProperty("gate")+"：#n#b\r\n\t\t\t\t#e<家族活动>#n\r\n\r\n#d跑旗赛就要开始啦！现在还有几分钟的等待时间……\r\n目前的活动状态：" + Eventstatus + "\r\n\r\n\r\n#r#e#L0#我想参加<跑旗赛>。#l#n\r\n#L1##b我想了解一下该活动的说明。#l \r\n#L3# 关闭活动入口！(GM可见)\r\n#L4# 开启入口！（管理员可见）\r\n#L2#我想离开这里。#l")

                    }
                    else if (em.getProperty("gate") == "2" || em.getProperty("gate") == "1") {//等待状态
                        cm.sendSimple("#e#r[提示]：#n#b\r\n\t\t\t\t#e<家族活动>#n\r\n\r\n#d跑旗赛就要开始啦！现在还有几分钟的等待时间……\r\n目前的活动状态：" + Eventstatus + "\r\n\r\n\r\n#b#L0#我想参加<跑旗赛>。#l\r\n#L2#我想离开这里。#l\r\n#L1#我想了解一下该活动的说明。#l")
                    } else {//第一个人进入的
                        cm.sendSimple("#e#r[提示]：#n#b\r\n\t\t\t\t#e<家族活动>#n\r\n\r\n#d跑旗赛就要开始啦！……\r\n目前的活动状态：" + Eventstatus + "\r\n\r\n\r\n#b#L0#我想参加<跑旗赛>。#l\r\n#L2#我想离开这里。#l\r\n#L1#我想了解一下该活动的说明。#l")
                    }
                }
            }
        } else if (status == 1) {
			var em = cm.getEventManager("PQS");
            if (selection == 0) {
                if (em.getProperty("gate") == "1") {
                    cm.warp(932200100, 0);
                    cm.setPQLog("家族跑旗赛");
                    cm.getMap().startMapEffect("现在有3分钟的时间等候其它玩家，请稍后！", 5121052);
					cm.getPlayer().dropMessage(1, "活动马上开始，请等候后面的玩家！");
                    cm.sendOk("[欢迎来到家族跑旗活动！]\r\n大家好，欢迎来到这里！\r\n首先，本次活动会在每晚8点开放入口，开放时间为3分钟。注释：管理员可手动开启，注意群动态）\r\n其次，游戏开始后的5分钟内跑完3圈的前5名有丰富的奖励,之后排名也有少量奖励!。");
				} else {//等待状态
                    cm.sendOk("跑旗赛并没有开启");
                }
				cm.safeDispose();
            } else if (selection == 1) {
                cm.sendOk("[欢迎来到家族跑旗活动！]\r\n大家好，欢迎来到这里！\r\n首先，本次活动会在每晚9点开放入口，开放时间为3分钟。注释：管理员可手动开启，注意群动态）\r\n其次，本活动规则是玩家必须要有家族并且玩家人数要5人及其以上，游戏开始后的8分钟内跑完3圈的前五名有奖励。\r\n最后，前五名跑完后活动结束，后续完成的没有奖励。");
                cm.safeDispose();
            } else if (selection == 2) {
                cm.sendYesNo("真的要离开这里吗？这样就不能和大家一起玩了呢！");
            } else if (selection == 3) {
                em.setProperty("gate", "3");
                cm.sendOk("已经关闭了入口！");
                cm.spouseMessage(0x15, "[家族跑旗赛活动] 现在管理员已经关闭了活动入口。");
                cm.worldBrodcastEffect(5121053, "[家族跑旗赛活动] 现在管理员已经关闭了活动入口。");
                cm.dispose();
            } else if (selection == 4) {
                em.setProperty("gate", "1");
                cm.sendOk("已经开启入口！");
                cm.spouseMessage(0x15, "[家族跑旗赛活动] 现在管理员已经开启了活动入口。");
                cm.worldBrodcastEffect(5121053, "[家族跑旗赛活动] 现在管理员已经开启了活动入口。");
                cm.dispose();
            }
        } else if (status == 2) {
		var em = cm.getEventManager("PQS");
			em.setProperty("Round"+cm.getName(),"0");
			cm.gainGP(GP[0]);
            cm.warp(101050000, 0);
            cm.dispose();
        } else if (status == 3) {
			var em = cm.getEventManager("PQS");
            em.setProperty("gate", "1");
            cm.sendOk("已经开启了入口！");
            cm.spouseMessage(0x15, "[家族跑旗赛活动] 管理员已经开放了活动入口，请大家速度从自由市场中程序猿夏曼进来哦！");
            cm.worldBrodcastEffect(5121053, "[家族跑旗赛活动]管理员已经开放了活动入口，请大家速度从拍卖处的副本入口进来哦！");
            cm.dispose();
        } else if (status == 4) {
			cm.warp(932200001, 0);
			cm.dispose();
		}
    }
}