
function start() {
    var Editing = false //false 开始
    if (Editing) {
        cm.sendOk("维修中");
        cm.dispose();
        return;
    }
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        cm.sendSimple("嗨，我是GM派来的礼包发放员:\r\n" +
                "您有赞助积分#r" + cm.getPlayer().getCZJF() + "#k，推广积分#r" + cm.getPlayer().getTGJF() + "#k\r\n这里有 #r赞助礼包GASH#k 跟 #r推广礼包#k! \r\n" +
                "#L10000##d领取赞助礼包\r\n" 
                //+"#L11000##d领取推广礼包"
                );

    } else if (status == 1) {
        if (selection == 10000) {
            //  if (cm.getPlayer().getCZJF() > 0) {
            cm.sendSimple("赞助礼包:\r\n "
                    + "#r1.#i5220000##z5220000#x1#k\r\n "
                    + "#r2.#i4280001##z4280001#x1#k\r\n "
                    + "#r3.#i5490001##z5490001#x1#k\r\n "
                    + "#r4.#i4280000##z4280000#x1#k\r\n "
                    + "#r5.#i5490000##z5490000#x1#k\r\n "
                    + "#r6.#i1142681##z1142681#x1#k\r\n "
                    + "#r7.#i1112659##z1112659#x1#k\r\n "
                    + "#r8.#i1142823##z1142823#x1#k\r\n "
                    + "#r9.#i5220000##z5220000#x50#k\r\n "
                    + "#r10.#i1022117##z1022117#x1#k\r\n "
                    + "#r11.#i1112445##z1112445#x1#k\r\n "
                    + "\r\n#L0##d赞助礼包1（1点赞助积分）#l"
                    + "\r\n#L1##d赞助礼包2（5点赞助积分）#l"
                    + "\r\n#L2##d赞助礼包3（5点赞助积分）#l"
                    + "\r\n#L3##d赞助礼包4（5点赞助积分）#l"
                    + "\r\n#L4##d赞助礼包5（5点赞助积分）#l"
                    + "\r\n#L5##d赞助礼包6（30点赞助积分）#l"
                    + "\r\n#L6##d赞助礼包7（35点赞助积分）#l"
                    + "\r\n#L7##d赞助礼包8（40点赞助积分）#l"
                    + "\r\n#L8##d赞助礼包9（45点赞助积分）#l"
                    + "\r\n#L9##d赞助礼包10（50点赞助积分）#l"
                    + "\r\n#L10##d赞助礼包11（35点赞助积分）#l");

            // } else {
            //    cm.sendOk("#d你的赞助积分不足。");
            //    cm.dispose();
            //   return;
            // }
        } else if (selection == 11000) {
            //   if (cm.getPlayer().getTGJF() > 0) {
            cm.sendSimple("活动礼包:\r\n "
                    + "#rA.紫色苹果*5  转蛋券*8  混沌卷轴60%*1 500枫点。#k\r\n "
                    + "#rB.紫色苹果*10 转蛋券*20 混沌卷轴60%*3 800枫点。#k\r\n "
                    + "#rC.紫色苹果*15 转蛋券*25 混沌卷轴60%*5 1000枫点。#k\r\n "
                    + "#r#z1112127#(80%经验组队戒指)(15天)。#k\r\n "
                    + "\r\n#L100##d活动礼包A（1点推广积分）#l"
                    + "\r\n#L101##d活动礼包B（2点推广积分）#l"
                    + "\r\n#L102##d活动礼包C（3点推广积分）#l");
            // } else {
            //      cm.sendOk("#d你的推广积分不足。");
            //    cm.dispose();
            //    return;
            //  }
        }
    } else if (status == 2) {
        if (selection == 0) {
            if (cm.getPlayer().getCZJF() >= 1) {
                if (cm.canHold()) {
                    cm.getCZLB(1);
                    cm.sendOk("领取成功。");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("请确认背包是否已经满了。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("#d你的赞助积分不足。");
                cm.dispose();
                return;
            }
        }
        if (selection == 1) {
            if (cm.getPlayer().getCZJF() >= 5) {
                if (cm.canHold()) {
                    cm.getCZLB(2);
                    cm.sendOk("领取成功。");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("请确认背包是否已经满了。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("#d你的赞助积分不足。");
                cm.dispose();
                return;
            }
        }
        if (selection == 2) {
            if (cm.getPlayer().getCZJF() >= 5) {
                if (cm.canHold()) {
                    cm.getCZLB(3);
                    cm.sendOk("领取成功。");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("请确认背包是否已经满了。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("#d你的赞助积分不足。");
                cm.dispose();
                return;
            }
        }
        if (selection == 3) {
            if (cm.getPlayer().getCZJF() >= 5) {
                if (cm.canHold()) {
                    cm.getCZLB(4);
                    cm.sendOk("领取成功。");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("请确认背包是否已经满了。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("#d你的赞助积分不足。");
                cm.dispose();
                return;
            }
        }
        if (selection == 4) {
            if (cm.getPlayer().getCZJF() >= 5) {
                if (cm.canHold()) {
                    cm.getCZLB(5);
                    cm.sendOk("领取成功。");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("请确认背包是否已经满了。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("#d你的赞助积分不足。");
                cm.dispose();
                return;
            }
        }
        if (selection == 5) {
            if (cm.getPlayer().getCZJF() >= 30) {
                if (cm.canHold()) {
                    cm.getCZLB(6);
                    cm.sendOk("领取成功。");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("请确认背包是否已经满了。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("#d你的赞助积分不足。");
                cm.dispose();
                return;
            }
        }
        if (selection == 6) {
            if (cm.getPlayer().getCZJF() >= 35) {
                if (cm.canHold()) {
                    cm.getCZLB(7);
                    cm.sendOk("领取成功。");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("请确认背包是否已经满了。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("#d你的赞助积分不足。");
                cm.dispose();
                return;
            }
        }
        if (selection == 7) {
            if (cm.getPlayer().getCZJF() >= 40) {
                if (cm.canHold()) {
                    cm.getCZLB(8);
                    cm.sendOk("领取成功。");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("请确认背包是否已经满了。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("#d你的赞助积分不足。");
                cm.dispose();
                return;
            }
        }
        if (selection == 8) {
            if (cm.getPlayer().getCZJF() >= 45) {
                if (cm.canHold()) {
                    cm.getCZLB(9);
                    cm.sendOk("领取成功。");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("请确认背包是否已经满了。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("#d你的赞助积分不足。");
                cm.dispose();
                return;
            }
        }
        if (selection == 9) {
            if (cm.getPlayer().getCZJF() >= 50) {
                if (cm.canHold()) {
                    cm.getCZLB(10);
                    cm.sendOk("领取成功。");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("请确认背包是否已经满了。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("#d你的赞助积分不足。");
                cm.dispose();
                return;
            }
        }
        if (selection == 10) {
            if (cm.getPlayer().getCZJF() >= 35) {
                if (cm.canHold()) {
                    cm.getCZLB(11);
                    cm.sendOk("领取成功。");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("请确认背包是否已经满了。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("#d你的赞助积分不足。");
                cm.dispose();
                return;
            }
        }
        if (selection == 100) {
            if (cm.getPlayer().getLevel() >= 30) {
                if (cm.getPlayer().getTGJF() >= 1) {
                    if (cm.canHold()) {
                        cm.getTGLB(1);
                        cm.sendOk("领取成功。");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("请确认背包是否已经满了。");
                        cm.dispose();
                        return;
                    }
                } else {
                    cm.sendOk("#d你的推广积分不足。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("#d你的等级不足。");
                cm.dispose();
                return;
            }
        }
        if (selection == 101) {
            if (cm.getPlayer().getLevel() >= 30) {
                if (cm.getPlayer().getTGJF() >= 2) {
                    if (cm.canHold()) {
                        cm.getTGLB(2);
                        cm.sendOk("领取成功。");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("请确认背包是否已经满了。");
                        cm.dispose();
                        return;
                    }
                } else {
                    cm.sendOk("#d你的推广积分不足。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("#d你的等级不足。");
                cm.dispose();
                return;
            }
        }

        if (selection == 102) {
            if (cm.getPlayer().getLevel() >= 30) {
                if (cm.getPlayer().getTGJF() >= 3) {
                    if (cm.canHold()) {
                        cm.getTGLB(3);
                        cm.sendOk("领取成功。");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("请确认背包是否已经满了。");
                        cm.dispose();
                        return;
                    }
                } else {
                    cm.sendOk("#d你的推广积分不足。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("#d你的等级不足。");
                cm.dispose();
                return;
            }
        }
    }
}
