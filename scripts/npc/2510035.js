/*
黑魔法师入场
*/
var status = 0;
var cishuxianzhi = 5;//限制次数
function start() {
	status =0;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (cm.getPlayer().getMapId() == 100000000) {
        if (selection < 100) {
            cm.sendSimpleS("#r#L100#黑魔法师#l\r\n#L101#黑魔法师#l", 0, 3002121);
        } else {
            if (selection == 100) {
                cm.warp(450012500,0);
            } else if (selection == 101) {
                cm.warp(450012500,0);
            }
            cm.dispose();
        }
        return;
    } else if (cm.getPlayer().getMapId() == 450012500) {
        switch (status) {
            case 0:
                if (cm.getPlayer().getLevel() < 200) {
                    cm.sendOkS("你的等级必须达到200级以上.", 0, 3002121);
                    cm.dispose();
                    return;
                }
/*                 if (cm.getPlayer().getClient().getChannel() != 2 && cm.getPlayer().getClient().getChannel() != 3) {
                    cm.sendOk("混乱黑魔法师只能试图在频道（2）（3）挑战.");
                    cm.dispose();
                    return;
                } */
                var em = cm.getEventManager("BlackMageBattle");

                if (em == null) {
                    cm.sendOkS("事件还没有开始，请联系一个通用汽车公司.", 0, 3002121);
                    cm.safeDispose();
                    return;
                }
                var prop = em.getProperty("state");
                var marr = cm.getQuestRecord(160102);
                var data = marr.getCustomData();
                if (data == null) {
                    marr.setCustomData("0");
                    data = "0";
                }
                var time = parseInt(data);
                if (prop == null || prop.equals("0")) {
                    var squadAvailability = cm.getSquadAvailability("blackmage");
                    if (squadAvailability == -1) {
                        status = 1;
                        cm.sendYesNoS("你有兴趣成为远征队的队长吗？", 0, 3002121);

                    } else if (squadAvailability == 1) {
                        // -1 = Cancelled, 0 = not, 1 = true
                        var type = cm.isSquadLeader("blackmage");
                        if (type == -1) {
                            cm.sendOkS("远征队已经结束，请重新注册.", 0, 3002121);
                            cm.safeDispose();
                        } else if (type == 0) {
							
                            var memberType = cm.isSquadMember("blackmage");
                            if (memberType == 2) {
                                cm.sendOkS("你被禁止参加远征队.", 0, 3002121);
                                cm.safeDispose();
                            } else if (memberType == 1) {
                                status = 5;
                                cm.sendSimpleS("你想做什么? \r\n#b#L0#检查成员#l \r\n#b#L1#加入远征队#l \r\n#b#L2#退出小队#l", 0, 3002121);
                            } else if (memberType == -1) {
                                cm.sendOkS("队伍已经结束，请重新注册.", 0, 3002121);
                                cm.safeDispose();
                            } else {
                                status = 5;
                                cm.sendSimpleS("你想做什么? \r\n#b#L0#检查成员#l \r\n#b#L1#加入队伍#l \r\n#b#L2#退出小队#l", 0, 3002121);
                            }
                        } else { // Is leader
                            status = 10;
                            cm.sendSimpleS("你想做什么? \r\n#b#L0#检查成员#l \r\n#b#L1#删除成员#l \r\n#b#L2#编辑限制列表#l \r\n#r#L3#进入地图#l", 0, 3002121);
                        // TODO viewing!
                        }
                    } else {
                        var eim = cm.getDisconnected("BlackMageBattle");
                        if (eim == null) {
                            var squd = cm.getSquad("blackmage");
                            if (squd != null) {
                                cm.sendYesNoS("队伍的对抗黑魔法师的战斗已经开始了.\r\n" + squd.getNextPlayer(), 0, 3002121);
                                status = 3;
                            } else {
                                cm.sendOkS("队伍的对抗黑魔法师的战斗已经开始了.", 0, 3002121);
                                cm.safeDispose();
                            }
                        } else {
                            cm.sendYesNoS("啊，你回来了。你愿意加入你的队伍在战斗中吗?", 0, 3002121);
                            status = 2;
                        }
                    }
                } else {
                    var eim = cm.getDisconnected("BlackMageBattle");
                    if (eim == null) {
                        var squd = cm.getSquad("blackmage");
                        if (squd != null) {
                            cm.sendYesNoS("队伍的对抗黑魔法师的战斗已经开始了.\r\n" + squd.getNextPlayer(), 0, 3002121);
                            status = 3;
                        } else {
                            cm.sendOkS("队伍的对抗黑魔法师的战斗已经开始了.", 0, 3002121);
                            cm.safeDispose();
                        }
                    } else {
                        cm.sendYesNoS("啊，你回来了。你愿意加入你的队伍在战斗中吗?", 0, 3002121);
                        status = 2;
                    }
                }
                break;
            case 1:
                if (mode == 1) {
					var cishu = cm.查询当日BOSS记录("blackmage");
                    if(cishu >= cishuxianzhi){
						cm.sendOkS("抱歉，你今日已参加过 "  + cishu + " 次黑魔法师远征，当日的BOSS次数已达到上限。", 0, 3002121);
					}else{
						if (cm.registerSquad("blackmage", 5, " 已被任命为团长。如果你想加入请在时间段内开启远征队.")) {
							cm.sendOkS("你已经被任命为队伍的领袖。在接下来的5分钟，你可以加入远征队的成员.", 0, 3002121);
							cm.全服喇叭(6, "[BOSS公告] " + cm.getPlayer().getName() + " 在 " + cm.getChannel() + " 频道创建了黑魔法师远征队，请各位玩家尽快备好弹药，来讨伐邪恶的黑魔法师吧！");
						} else {
							cm.sendOkS("添加你的小队时发生了一个错误.", 0, 3002121);
						}
					}
					
                } else {
                    cm.sendOkS("如果你想成为远征队的领队的话，跟我谈谈.", 0, 3002121);
                }
                cm.safeDispose();
                break;
            case 2:
                //BOSS重返
				if(cm.getBossLog("黑魔法师重返") >= 3){
					cm.sendOkS("抱歉，每个BOSS一天最多只能重返3次。", 0, 3002121);
				}else{
					if (!cm.reAdd("BlackMageBattle", "blackmage")) {
						cm.sendOkS("误差…请再试一次.", 0, 3002121);
					}else{
						cm.setBossLog("黑魔法师重返");
					}
				}
				// cm.sendOk("抱歉，BOSS重返功能处于关闭状态。")
                cm.dispose();
                break;
            case 3:
                /* if (mode == 1) {
					// var party = cm.组队成员();
					var party = cm.组队成员();
			//cm.getPlayer().dropMessage(5, "队伍有"+cm.组队人数()+"人");
			cm.dispose();
            for (var i = 0; i < cm.组队人数(); i++) {
			//cm.getPlayer().dropMessage(5, "所在地图代码"+party.get(i).getMapid());
			cm.dispose();
            if (party.get(i).getMapid() == 450013100){//判断队长在不在这个地图,可以重返的地图
            cm.flytoID(party.get(i).getId());
			cm.dispose();
			return;
                } } } */
				cm.dispose();
                break;
            case 5:
                if (selection == 0) {
                    if (!cm.getSquadList("blackmage", 0)) {
                        cm.sendOkS("由于未知的错误，对队伍的要求被拒绝了.", 0, 3002121);
                        cm.safeDispose();
                    } else {
                        cm.dispose();
                    }
                } else if (selection == 1) { // join
					var cishu = cm.查询当日BOSS记录("blackmage");
                    if(cishu >= cishuxianzhi){
						cm.sendOkS("抱歉，你今日已参加过 "  + cishu + " 次黑魔法师远征，当日的BOSS次数已达到上限。", 0, 3002121);
						cm.safeDispose();
					}else{
						var ba = cm.addMember("blackmage", true);
						if (ba == 2) {
							cm.sendOkS("队伍目前已满，请稍后再试。", 0, 3002121);
							cm.safeDispose();
						} else if (ba == 1) {
							cm.sendOkS("你已经成功加入了队伍", 0, 3002121);
							cm.全服喇叭(6, "[BOSS公告] 玩家 " + cm.getPlayer().getName() + " 加入了 " + cm.getChannel() + "频道的黑魔法师讨伐远征队。");
							cm.safeDispose();
						} else {
							cm.sendOkS("你已经是队伍的一部分了.", 0, 3002121);
							cm.safeDispose();
						}
					}
                    
                } else {// withdraw
                    var baa = cm.addMember("blackmage", false);
                    if (baa == 1) {
                        cm.sendOkS("你已经退出了队伍的成功", 0, 3002121);
                        cm.safeDispose();
                    } else {
                        cm.sendOkS("你不是队伍的一部分.", 0, 3002121);
                        cm.safeDispose();
                    }
                }
                break;
            case 10:
                if (selection == 0) {
                    if (!cm.getSquadList("blackmage", 0)) {
                        cm.sendOkS("由于未知的错误，对队伍的要求被拒绝了.", 0, 3002121);
                    }
                    cm.safeDispose();
                } else if (selection == 1) {
                    status = 11;
                    if (!cm.getSquadList("blackmage", 1)) {
                        cm.sendOkS("由于未知的错误，对队伍的要求被拒绝了.", 0, 3002121);
                        cm.safeDispose();
                    }

                } else if (selection == 2) {
                    status = 12;
                    if (!cm.getSquadList("blackmage", 2)) {
                        cm.sendOkS("由于未知的错误，对队伍的要求被拒绝了.", 0, 3002121);
                        cm.safeDispose();
                    }

                } else if (selection == 3) { // get insode
                    if (cm.getSquad("blackmage") != null) {
                        var dd = cm.getEventManager("BlackMageBattle");
                        dd.startInstance(cm.getSquad("blackmage"), cm.getMap(), 160102);
						if(cm.getPlayer().getMapId() == 450013100){
							cm.全服喇叭(6, "[BOSS公告] " + cm.getChannel() + " 频道的远征队长已经入场，黑魔法师的讨伐即将开始，请加入远征队伍的玩家尽快入场！");
							cm.给团队每日("blackmage");//给团队次数
						}
                        cm.dispose();
                    } else {
                        cm.sendOkS("由于未知的错误，对队伍的要求被拒绝了.", 0, 3002121);
                        cm.safeDispose();
                    }
                }
                break;
            case 11:
                cm.banMember("blackmage", selection);
                cm.dispose();
                break;
            case 12:
                if (selection != -1) {
                    cm.acceptMember("blackmage", selection);
                }
                cm.dispose();
                break;
        }
    } else {
        switch (status) {
            case 0:
                if (cm.getPlayer().getLevel() < 50) {
                    cm.sendOkS("有一个50级要求的尝试黑魔法师.", 0, 3002121);
                    cm.dispose();
                    return;
                }
                var em = cm.getEventManager("BlackMageBattle");

                if (em == null) {
                    cm.sendOkS("事件未启动，请联系GM.", 0, 3002121);
                    cm.safeDispose();
                    return;
                }
                var prop = em.getProperty("state");
                var marr = cm.getQuestRecord(160101);
                var data = marr.getCustomData();
                if (data == null) {
                    marr.setCustomData("0");
                    data = "0";
                }
                var time = parseInt(data);
                if (prop == null || prop.equals("0")) {
                    var squadAvailability = cm.getSquadAvailability("blackmage");
                    if (squadAvailability == -1) {
                        status = 1;
                        cm.sendYesNoS("你有兴趣成为远征队的领队吗?", 0, 3002121);

                    } else if (squadAvailability == 1) {

                        // -1 = Cancelled, 0 = not, 1 = true
                        var type = cm.isSquadLeader("blackmage");
                        if (type == -1) {
                            cm.sendOkS("队伍已经结束，请重新注册.", 0, 3002121);
                            cm.safeDispose();
                        } else if (type == 0) {
                            var memberType = cm.isSquadMember("blackmage");
                            if (memberType == 2) {
                                cm.sendOkS("你被禁止参加队伍.", 0, 3002121);
                                cm.safeDispose();
                            } else if (memberType == 1) {
                                status = 5;
                                cm.sendSimpleS("你想做什么? \r\n#b#L0#检查成员#l \r\n#b#L1#加入队伍#l \r\n#b#L2#退出小队#l", 0, 3002121);
                            } else if (memberType == -1) {
                                cm.sendOkS("队伍已经结束，请重新注册.", 0, 3002121);
                                cm.safeDispose();
                            } else {
                                status = 5;
                                cm.sendSimpleS("你想做什么? \r\n#b#L0#检查成员#l \r\n#b#L1#加入队伍#l \r\n#b#L2#退出小队#l", 0, 3002121);
                            }
                        } else { // Is leader
                            status = 10;
                            cm.sendSimpleS("你想做什么啊啊啊啊? \r\n#b#L0#检查成员#l \r\n#b#L1#删除成员#l \r\n#b#L2#编辑限制列表#l \r\n#r#L3#进入地图#l", 0, 3002121);
                        // TODO viewing!
                        }
                    } else {
                        var eim = cm.getDisconnected("BlackMageBattle");
                        if (eim == null) {
                            var squd = cm.getSquad("blackmage");
                            if (squd != null) {
                                cm.sendYesNoS("远征队对抗黑魔法师已经开始了.\r\n" + squd.getNextPlayer(), 0, 3002121);
                                status = 3;
                            } else {
                                cm.sendOkS("远征队对抗黑魔法师已经开始了.", 0, 3002121);
                                cm.safeDispose();
                            }
                        } else {
                            cm.sendYesNoS("啊，你回来了。你愿意加入你的队伍在战斗中吗?", 0, 3002121);
                            status = 2;
                        }
                    }
                } else {
                    var eim = cm.getDisconnected("BlackMageBattle");
                    if (eim == null) {
                        var squd = cm.getSquad("blackmage");
                        if (squd != null) {
                            cm.sendYesNoS("远征队对抗黑魔法师已经开始了.\r\n" + squd.getNextPlayer(), 0, 3002121);
                            status = 3;
                        } else {
                            cm.sendOkS("远征队对抗黑魔法师已经开始了.", 0, 3002121);
                            cm.safeDispose();
                        }
                    } else {
                        cm.sendYesNoS("啊，你回来了。你愿意加入你的队伍在战斗中吗?", 0, 3002121);
                        status = 2;
                    }
                }
                break;
            case 1:
                if (mode == 1) {
					var cishu = cm.查询当日BOSS记录("blackmage");
                    if(cishu >= cishuxianzhi){
						cm.sendOkS("抱歉，你今日已参加过 "  + cishu + " 次黑魔法师远征，当日的BOSS次数已达到上限。", 0, 3002121);
					}else{
						if (cm.registerSquad("blackmage", 5, " 已被任命为班长（定期）。如果你想加入请在时间段内注册的远征队.")) {
							cm.sendOkS("你已经被任命为远征队领袖领袖。在接下来的5分钟，你可以加入远征队的成员。", 0, 3002121);
							cm.全服喇叭(6, "[BOSS公告] " + cm.getPlayer().getName() + " 在 " + cm.getChannel() + " 频道创建了黑魔法师远征队，请各位玩家尽快备好弹药，来讨伐邪恶的黑魔法师吧！");
						} else {
							cm.sendOkS("添加你的小队时发生了一个错误.", 0, 3002121);
						}
					}
                    
                } else {
                    cm.sendOkS("如果你想成为远征队领队的话，跟我谈谈.", 0, 3002121);
                }
                cm.safeDispose();
                break;
            case 2:
				//BOSS重返
				if(cm.getBossLog("黑魔法师重返") >= 3){
					cm.sendOkS("抱歉，每个BOSS一天最多只能重返3次。", 0, 3002121);
				}else{
					if (!cm.reAdd("BlackMageBattle", "blackmage")) {
						cm.sendOkS("误差…请再试一次.", 0, 3002121);
					}else{
						cm.setBossLog("黑魔法师重返");
					}
				}
				// cm.sendOk("抱歉，BOSS重返功能处于关闭状态。")
                cm.safeDispose();
                break;
            case 3:
                /* if (mode == 1) {
					var party = cm.组队成员();
			//cm.getPlayer().dropMessage(5, "队伍有"+cm.组队人数()+"人");
			cm.dispose();
            for (var i = 0; i < cm.组队人数(); i++) {
			//cm.getPlayer().dropMessage(5, "所在地图代码"+party.get(i).getMapid());
			cm.dispose();
            if (party.get(i).getMapid() == 450013100){//判断队长在不在这个地图,可以重返的地图
            cm.flytoID(party.get(i).getId());
			cm.dispose();
			return;
                } } } */
                cm.dispose();
                break;
            case 5:
                if (selection == 0) {
                    if (!cm.getSquadList("blackmage", 0)) {
                        cm.sendOkS("由于未知的错误，对队伍的要求被拒绝了.", 0, 3002121);
                        cm.safeDispose();
                    } else {
                        cm.dispose();
                    }
                } else if (selection == 1) { // join
					var cishu = cm.查询当日BOSS记录("blackmage");
                    if(cishu >= cishuxianzhi){
						cm.sendOkS("抱歉，你今日已参加过 "  + cishu + " 次黑魔法师远征，当日的BOSS次数已达到上限。", 0, 3002121);
						cm.safeDispose();
					}else{
						var ba = cm.addMember("blackmage", true);
						if (ba == 2) {
							cm.sendOkS("队伍目前已满，请稍后再试.", 0, 3002121);
							cm.safeDispose();
						} else if (ba == 1) {
							cm.sendOkS("你已经成功加入了队伍", 0, 3002121);
							cm.全服喇叭(6, "[BOSS公告] 玩家 " + cm.getPlayer().getName() + " 加入了 " + cm.getChannel() + "频道的黑魔法师讨伐远征队。");
							cm.safeDispose();
						} else {
							cm.sendOkS("你已经是队伍的一部分了.", 0, 3002121);
							cm.safeDispose();
						}
					}
                    
                } else {// withdraw
                    var baa = cm.addMember("blackmage", false);
                    if (baa == 1) {
                        cm.sendOkS("你已经退出了队伍的成功", 0, 3002121);
                        cm.safeDispose();
                    } else {
                        cm.sendOkS("你不是队伍的一部分.", 0, 3002121);
                        cm.safeDispose();
                    }
                }
                break;
            case 10:
                if (selection == 0) {
                    if (!cm.getSquadList("blackmage", 0)) {
                        cm.sendOkS("由于未知的错误，对队伍的要求被拒绝了。", 0, 3002121);
                    }
                    cm.safeDispose();
                } else if (selection == 1) {
                    status = 11;
                    if (!cm.getSquadList("blackmage", 1)) {
                        cm.sendOkS("由于未知的错误，对队伍的要求被拒绝了.", 0, 3002121);
                        cm.safeDispose();
                    }

                } else if (selection == 2) {
                    status = 12;
                    if (!cm.getSquadList("blackmage", 2)) {
                        cm.sendOkS("由于未知的错误，对队伍的要求被拒绝了.", 0, 3002121);
                        cm.safeDispose();
                    }

                } else if (selection == 3) { // get insode
                    if (cm.getSquad("blackmage") != null) {
                        var dd = cm.getEventManager("BlackMageBattle");//执行event事件
                        dd.startInstance(cm.getSquad("blackmage"), cm.getMap(), 160101);
						if(cm.getPlayer().getMapId() == 450013100){
							cm.全服喇叭(6, "[BOSS公告] " + cm.getChannel() + " 频道的远征队长已经入场，黑魔法师的讨伐即将开始，请加入远征队伍的玩家尽快入场！");
							cm.给团队每日("blackmage");//给团队次数
						}
						//cm.getPlayer().setBossLog('blackmage');//给bosslog记录
                        cm.dispose();
                    } else {
                        cm.sendOkS("由于未知的错误，对队伍的要求被拒绝了.", 0, 3002121);
                        cm.safeDispose();
                    }
                }
                break;
            case 11:
                cm.banMember("blackmage", selection);
                cm.dispose();
                break;
            case 12:
                if (selection != -1) {
                    cm.acceptMember("blackmage", selection);
                }
                cm.dispose();
                break;
        }
    }
}