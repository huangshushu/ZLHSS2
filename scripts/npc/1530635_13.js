var status = 0;
var typed = 0;
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var monstermaps = Array(
    Array(703002000, "国庆纪念币出处-1"),
    Array(401053001, "国庆纪念币出处-2")
    //Array(450003530, "21E破功后搬砖地图")
);
var startTime = "2016-04-15 21:00:00";
var endTime = "2016-04-15 22:00:00";
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;
        if (status == 0) {
            var text = head + "";
            if (cm.getMapId() != 101050000) {
                //text = head + "\t亲爱的#r#h ##k您好，我是新手引导人，当然，你也可以在#b自由市场#k中找到我。\r\n";
            }

            text += "   " + icon + "#k 点卷：#r" + cm.getPlayer().getCSPoints(1) + "#k 点  " + icon + " 今天在线：#r" + cm.getOnlineTime() + "#k 分钟#b\r\n";//#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0# #n\r\n";

            //text += "#L13#" + icon + " #r[内测]#b【测试金币元宝领取系统】\r\n";
            //text += "#L5#" + icon + " #r[搬砖]#b传送至刷#r破功#b地图#l\r\n";
            //text += "#r#L1#" + icon + " #r[金币]#b【洗血 / 洗蓝】#n#k#l\r\n#b";
            //text += "#L11#" + icon + " #r[口袋]#b【一键开口袋】#b#l\r\n";
            //text += "#L2#" + icon + " #r[搬砖]#b传送至搬砖地图#l\r\n";
            // text += "#L6#" + icon + " #r[福利]#b【每日签到】#n#k#l\r\n";
            text += "#L20#" + icon + " #r[福利]#b【等级奖励】#n#k#l\r\n";
            //text += "#L21#" + icon + " #r[福利]#b【杂货商店】#n#k#l\r\n";
            // text += "#L12#" + icon + " #r[福利]#b【点券商城】#n#k#l\r\n";
            text += "#L4#" + icon + " #r[福利]#b【免费点券】#l\r\n";
			text += "#L666#" + icon + " #r[福利]#b【每日声望】#l\r\n";
            //text += "#L7#" + icon + " #r[技能]#b【学习特殊技能】#n#k#l\r\n";
            //text += "#L9#" + icon + " #r[过渡]#b【补领】\r\n";
            //text += "#L88#" + icon + " #r[过渡]#b【新手符号系统】\r\n";
            //text += "#L3#" + icon + " #r[补领]#b【星之力助力纹章】#v1190400#\r\n";
            text += "#L10#" + icon + " #r[补领]#b【开发者的信】#v2431693#\r\n";
            text += "#L15#" + icon + " #r[补领]#b【13周年盒子】#v2435413#\r\n";
            //text += "#L16#" + icon + " #r[去灯泡]#b【去除讨厌头顶灯泡】";
            //cm.sendSimple(selStr, 0);
            cm.sendSimple(text, 0);
        } else if (status == 1) {
            if (selection == 1) {
                cm.dispose();
                cm.openNpc(1530635, "Care-Gon1");
            } else if (selection == 2) {
                cm.warp(703002000, 0);
                cm.dispose();
            } else if (selection == 88) {
                cm.dispose();
                cm.openNpc(1530635, "dwxt");
            } else if (selection == 3) {
                if (cm.getBossLog("送装备", 1) == 0) {
                    if (!cm.haveItem(1190400)) {
                        var ii = cm.getItemInfo();
                        var toDrop = ii.randomizeStats(ii.getEquipById(1190400)).copy();
                        toDrop.setStr(10); //装备力量
                        toDrop.setDex(10); //装备敏捷
                        toDrop.setInt(10); //装备智力
                        toDrop.setLuk(10); //装备运气
                        toDrop.setMatk(5); //物理攻击
                        toDrop.setWatk(5); //魔法攻击
                        toDrop.setEnhance(25); //强化等级
                        // var timeStamp = java.lang.System.currentTimeMillis();
                        //var expirationDate = timeStamp + 30 * 86400 * 1000;
                        // toDrop.setExpiration(expirationDate);
                        toDrop.setOwner("新手");
                        cm.addFromDrop(cm.getC(), toDrop, false);
                        cm.setBossLog("伴侣冒险岛", 1);
                        cm.sendOk("领取成功！超强装备已经给您发放.感谢您的支持.");
                    } else {
                        cm.sendOk("您身上已经有#v1190400#了");
                    }
                } else {
                    cm.sendOk("您已经领取过该装备，无法重复领取。");
                    cm.dispose();
                }
                cm.dispose();
            } else if (selection == 4) {
                if (cm.getEventCount("每日免费点劵") == 0) {
                    cm.gainNX(5000000);
                    cm.setEventCount("每日免费点劵");
                    cm.sendOk("恭喜你获得了 500W 点劵。");
                    cm.spouseMessage(0x01, "[每日点劵]：玩家“" + cm.getPlayer().getName() + "” 领取了 500W 点劵，还没有领取的玩家快去领取吧！");

                    cm.dispose();
                } else {
                    cm.sendOk("每个账号 1 天只能领取 1 次，请明日再来。");
                    cm.dispose();
                }
            } else if (selection == 5) {
                var text = "请选择你要接连的地方：\r\n#b";
                for (var i = 0; i < monstermaps.length; i++) {
                    text += "#L" + i + "# " + icon + " #m" + monstermaps[i][0] + "##l\r\n\r\n [#r " + monstermaps[i][1] + " #b]\r\n"
                }
                cm.sendSimple(text);
            } else if (selection == 6) {
                cm.dispose();
                cm.openNpc(1530635, 14);
            } else if (selection == 7) {
                cm.dispose();
                cm.openNpc(1530635, 2004);
            } else if (selection == 9) {
                cm.dispose();
                cm.openNpc(1530635, "10year");
            } else if (selection == 11) {
                cm.dispose();
                //cm.openNpc(1530635, 666);
                cm.openNpc(1530635, "一键开口袋");
            } else if (selection == 12) {
                cm.dispose();
                cm.openNpc(1530635, 7766);
            } else if (selection == 12) {
                cm.dispose();
                cm.openNpc(1530635, 7766);
            } else if (selection == 666) {
                if (cm.getEventCount("每日声望") == 0) {
                    cm.getPlayer().gainHonor(2000000);//	声望值
                    cm.setEventCount("每日声望");
                    cm.sendOk("恭喜你获得了 200W 声望。");
                    cm.spouseMessage(0x01, "[每日声望]：玩家“" + cm.getPlayer().getName() + "” 领取了 200W 声望，还没有领取的玩家快去领取吧！");
                    cm.dispose();
                } else {
                    cm.sendOk("每个账号 1 天只能领取 1 次，请明日再来。");
                    cm.dispose();
                }
            } else if (selection == 20) {
                cm.dispose();
                cm.openNpc(1064026, "Levelreward");
            } else if (selection == 21) {
                cm.dispose();
                cm.openShop(1);
            } else if (selection == 13) {
                cm.dispose();
                cm.gainMeso(99999999);
                cm.addHyPay(-9999);
                cm.gainItem(2435824, 100);
                //cm.gainItem(2436249, 100);
                cm.gainItem(2048717, 100);
                cm.sendOk("欢迎您参加淘居冒险岛测试，恭喜您领取了9999w金币和9999元宝以及自选V卷箱子100个和永远的涅磐火花100个！！");
            } else if (selection == 8) {
                var em = getEvent("NewEvent45", 1);
                if (em.getProperty("Caishen_Count") == null) {
                    em.setProperty("Caishen_Count", 0);
                }
                var count = parseInt(em.getProperty("Caishen_Count"));
                if (count == null) {
                    count = 0;
                }

                var currentTimestamp = java.lang.System.currentTimeMillis();
                var startTimestamp = java.sql.Timestamp.valueOf(startTime).getTime();
                var endTimestamp = java.sql.Timestamp.valueOf(endTime).getTime();
                if (currentTimestamp < startTimestamp) {
                    var minute = Math.floor((startTimestamp - currentTimestamp) / 60000);
                    cm.sendOk("距离活动开始还有#r" + minute + "#k分钟");
                    cm.dispose();
                    return;
                }
                if (currentTimestamp > endTimestamp) {
                    cm.sendOk("活动已经结束");
                    cm.dispose();
                    return;
                }


                if (cm.getPlayer().isGM()) {
                    cm.getPlayer().dropMessage(-11, "当前礼包次数：" + count);
                }

                if (count >= 20) {
                    cm.sendOk("礼包已经发放完了！你手慢了！");
                    cm.dispose();
                    return;
                }

                if (cm.getPlayer().getTodayOnlineTime() < 240) {
                    cm.sendOk("在线时间不足240分钟！");
                    cm.dispose();
                    return;
                }

                if (cm.getEventCount("415礼包财神", 1) <= 0) {
                    if (cm.getPlayer().getLevel() >= 120) {
                        var itemList = Array(
                            Array(5062010, 10),
                            Array(5062002, 10),
                            Array(5062500, 10),
                            Array(5062024, 10),
                            Array(5150040, 20),
                            Array(5152053, 20),
                            Array(2431307, 1)
                        );
                        var text = "恭喜您领取了财神礼包！\r\n";
                        for (var i in itemList) {
                            var itemid = itemList[i][0];
                            var quantity = itemList[i][1];
                            cm.gainItem(itemid, quantity);
                            text += "#v" + itemid + "##b#t" + itemid + "# [ #r" + quantity + "#k ] 个\r\n";
                        }
                        cm.gainNX(2, 50000);
                        cm.setEventCount("415礼包财神", 1);
                        count++;
                        em.setProperty("Caishen_Count", count);
                        cm.sendOk(text);
                        cm.worldSpouseMessage(0x23, "[财神送礼] : 恭喜玩家 " + cm.getPlayer().getName() + " 在自由市场财神处领取了20份限量礼包！");
                        cm.dispose();
                    } else {
                        cm.sendOk("您的等级不足！");
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("您已经抢过礼包了！");
                    cm.dispose();
                }
            } else if (selection == 10) {
                if (cm.haveItem(2431693, 1)) {
                    cm.sendOk("抱歉,你当前已经拥有开发者的信，请勿重复领取");
                    cm.dispose();
                } else {
                    cm.gainItem(2431693, 1);
                    cm.sendOk("补领成功");
                    cm.dispose();
                }
            } else if (selection == 15) {
                    if (!cm.haveItem(2435413, 1)) {
                        cm.gainItem(2435413, 1);
                        cm.sendOk("补领成功");
                    } else {
                        cm.sendOk("抱歉,你当前已经拥有13周年盒子，请勿重复领取");
                    }
                cm.dispose();


            }
        } else if (status == 2) {
            var sel = selection;
            cm.warp(monstermaps[sel][0]);
        }
    }
}

function getEvent(name, channel) {
    var cserv = Packages.handling.channel.ChannelServer.getInstance(channel);
    var event = cserv.getEventSM().getEventManager(name);
    return event;
}
