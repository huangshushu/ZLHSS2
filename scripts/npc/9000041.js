var 星星 = "#fEffect/CharacterEff/1114000/2/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#"; //"+圆形+"
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var warp = -1
var status = 0;
var studySkills = [
    [99,4341007],
    [99,4111006],
    //[888,4111002],
    [99,1301007],
    [99,22101001],
    [299,1121000]
    ];
var X;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }



        
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "#e#r#w                -  技能功能  -\r\n"
            text += "#k   现有元宝：#r" + cm.getPlayer().getCSPoints(3) + "#k#l\r\n" //3
            for(var i  in studySkills){
                //text += "#b#L"+ i + "要花费" + studySkills[i][0] + "点#b#l\r\n";
                text += "#b#L" + i + "#花费" + studySkills[i][0] + "元宝[#r购买:#s" + studySkills[i][1] + "#[#b#q" + studySkills[i][1] + "##k]#b]#l\r\n";
                //cm.sendYesNo("#e    确认要花费[#r0元宝#k]购买#s4111006#[#b#q4111006##k]吗\r\n\r\n#r    新技能将覆盖键盘#b 8 #r，请保证此键无技能");
            }
            text += "\r\n#e#r    购买后换线生效!!!(#b温馨提示#r)#l\r\n" //3
            cm.sendSimple(text);
        


        } else if (status = 1) {
            if (warp == 0) {
                if (cm.getPlayer().getOneTimeLog("荆棘") > 0) {
                    cm.teachSkill(4341007, 30);
                    cm.getPlayer().changeKeybinding(11, 1, 4341007);
                    if (cm.getClient().getChannel() == 1) {
                        cm.getPlayer().changeChannel(5);
                    } else {
                        cm.getPlayer().changeChannel(1);
                    }
                    cm.dispose();
                    return;
                }
                if (cm.getPlayer().getCSPoints(3) >= 99) {
                    cm.getPlayer().modifyCSPoints(3, -99, true); //元宝
                    cm.teachSkill(4341007, 30);
                    cm.getPlayer().changeKeybinding(11, 1, 4341007);
                    cm.getPlayer().setOneTimeLog("荆棘");
                    Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9, cm.getC().getChannel(), "赞助商城" + " : " + cm.getPlayer().getName() + "  成功购买了技能  [荆棘],请查看键盘 数字0 处", true)); //黄色
                    if (cm.getClient().getChannel() == 1) {
                        cm.getPlayer().changeChannel(5);
                    } else {
                        cm.getPlayer().changeChannel(1);
                    }
                    //cm.sendOk("购买成功,换线后请查看键盘#r数字0#k处");
                    cm.dispose();
                } else {
                    cm.sendOk("  元宝不足");
                    cm.dispose();
                }
            } else if (warp == 1) {
                if (cm.getPlayer().getOneTimeLog("二段跳") > 0) {
                    cm.teachSkill(4111006, 20);
                    cm.getPlayer().changeKeybinding(9, 1, 4111006);
                    if (cm.getClient().getChannel() == 1) {
                        cm.getPlayer().changeChannel(5);
                    } else {
                        cm.getPlayer().changeChannel(1);
                    }
                    cm.dispose();
                    return;
                }
                if (cm.getPlayer().getCSPoints(3) >= 99) {
                    cm.getPlayer().modifyCSPoints(3, -99, true); //元宝
                    cm.getPlayer().setOneTimeLog("二段跳");
                    cm.teachSkill(4111006, 20);
                    cm.getPlayer().changeKeybinding(9, 1, 4111006);
                    Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9, cm.getC().getChannel(), "赞助商城" + " : " + cm.getPlayer().getName() + "  成功购买了技能  [二段跳],请查看键盘 8 处", true)); //黄色
                    if (cm.getClient().getChannel() == 1) {
                        cm.getPlayer().changeChannel(5);
                    } else {
                        cm.getPlayer().changeChannel(1);
                    }
                    cm.sendOk("购买成功,换线后生效");
                    cm.dispose();
                } else {
                    cm.sendOk("  元宝不足");
                    cm.dispose();
                }

            } else if (warp == 100) {
                if (cm.getPlayer().getOneTimeLog("狂龙斩") > 0) {
                    cm.teachSkill(9001006, 1);
                    cm.getPlayer().changeKeybinding(9, 1, 9001006);
                    if (cm.getClient().getChannel() == 1) {
                        cm.getPlayer().changeChannel(5);
                    } else {
                        cm.getPlayer().changeChannel(1);
                    }
                    cm.dispose();
                    return;
                }
                if (cm.getPlayer().getCSPoints(3) >= 2000) {
                    cm.getPlayer().modifyCSPoints(3, -2000, true); //元宝
                    cm.getPlayer().setOneTimeLog("狂龙斩");
                    cm.teachSkill(9001006, 1);
                    cm.getPlayer().changeKeybinding(9, 1, 9001006);
                    Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9, cm.getC().getChannel(), "赞助商城" + " : " + cm.getPlayer().getName() + "  成功购买了技能  [狂龙斩],请查看键盘 8 处", true)); //黄色
                    if (cm.getClient().getChannel() == 1) {
                        cm.getPlayer().changeChannel(5);
                    } else {
                        cm.getPlayer().changeChannel(1);
                    }
                    cm.sendOk("购买成功,换线后生效");
                    cm.dispose();
                } else {
                    cm.sendOk("  元宝不足");
                    cm.dispose();
                }

            } else if (warp == 2) {
                if (cm.getPlayer().getOneTimeLog("影分身") > 0) {
                    cm.teachSkill(4111002, 30);
                    cm.getPlayer().changeKeybinding(30, 1, 4111002);
                    if (cm.getClient().getChannel() == 1) {
                        cm.getPlayer().changeChannel(5);
                    } else {
                        cm.getPlayer().changeChannel(1);
                    }
                    cm.dispose();
                    return;
                }
                if (cm.getPlayer().getCSPoints(3) >= 888) {
                    cm.getPlayer().modifyCSPoints(3, -888, true); //元宝
                    cm.getPlayer().setOneTimeLog("影分身");
                    cm.teachSkill(4111002, 30);
                    cm.getPlayer().changeKeybinding(30, 1, 4111002);
                    Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9, cm.getC().getChannel(), "赞助商城" + " : " + cm.getPlayer().getName() + "  成功购买了技能  [稳如泰山]", true)); //黄色
                    cm.sendOk("购买成功,换线后请查看键盘#rA#k处");
                    cm.dispose();
                } else {
                    cm.sendOk("  元宝不足");
                    cm.dispose();
                }
            } else if (warp == 3) {
                if (cm.getPlayer().getOneTimeLog("神圣之火") > 0) {
                    cm.teachSkill(1301007, 30);
                    cm.getPlayer().changeKeybinding(8, 1, 1301007);
                    if (cm.getClient().getChannel() == 1) {
                        cm.getPlayer().changeChannel(5);
                    } else {
                        cm.getPlayer().changeChannel(1);
                    }
                    cm.dispose();
                    return;
                }
                if (cm.getPlayer().getCSPoints(3) >= 99) {
                    cm.getPlayer().modifyCSPoints(3, -99, true); //元宝
                    cm.getPlayer().setOneTimeLog("神圣之火");
                    cm.teachSkill(1301007, 30);
                    cm.getPlayer().changeKeybinding(8, 1, 1301007);
                    Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9, cm.getC().getChannel(), "赞助商城" + " : " + cm.getPlayer().getName() + "  成功购买了技能  [神圣之火],请查看键盘 7 处", true)); //黄色
                    if (cm.getClient().getChannel() == 1) {
                        cm.getPlayer().changeChannel(5);
                    } else {
                        cm.getPlayer().changeChannel(1);
                    }
                    //cm.sendOk("购买成功,换线后");
                    cm.dispose();
                } else {
                    cm.sendOk("  元宝不足");
                    cm.dispose();
                }
            } else if (warp == 4) {
                if (cm.getPlayer().getOneTimeLog("快速移动") > 0) {
                    cm.teachSkill(12101003, 20);
                    cm.getPlayer().changeKeybinding(10, 1, 12101003);
                    if (cm.getClient().getChannel() == 1) {
                        cm.getPlayer().changeChannel(5);
                    } else {
                        cm.getPlayer().changeChannel(1);
                    }
                    cm.dispose();
                    return;
                }
                if (cm.getPlayer().getCSPoints(3) >= 99) {
                    cm.getPlayer().modifyCSPoints(3, -99, true); //元宝
                    cm.getPlayer().setOneTimeLog("快速移动");
                    cm.teachSkill(12101003, 20);
                    cm.getPlayer().changeKeybinding(10, 1, 12101003);
                    Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9, cm.getC().getChannel(), "赞助商城" + " : " + cm.getPlayer().getName() + "  成功购买了技能  [快速移动] ,请查看键盘 9 处", true)); //黄色
                    //cm.sendOk("购买成功,换线后请查看键盘#r 9 #k处");
                    if (cm.getClient().getChannel() == 1) {
                        cm.getPlayer().changeChannel(5);
                    } else {
                        cm.getPlayer().changeChannel(1);
                    }
                    cm.dispose();
                } else {
                    cm.sendOk("  元宝不足");
                    cm.dispose();
                }
            } else if (warp == 7) {
                if (cm.getPlayer().getOneTimeLog("冒险岛勇士") > 0) {
                    cm.teachSkill(1121000, 30);
                    cm.getPlayer().changeKeybinding(7, 1, 1121000);
                    if (cm.getClient().getChannel() == 1) {
                        cm.getPlayer().changeChannel(5);
                    } else {
                        cm.getPlayer().changeChannel(1);
                    }
                    cm.dispose();
                    return;
                }
                if (cm.getPlayer().getCSPoints(3) >= 299) {
                    cm.getPlayer().modifyCSPoints(3, -299, true); //元宝
                    cm.getPlayer().setOneTimeLog("冒险岛勇士");
                    cm.teachSkill(1121000, 30);
                    cm.getPlayer().changeKeybinding(7, 1, 1121000);
                    Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9, cm.getC().getChannel(), "赞助商城" + " : " + cm.getPlayer().getName() + "  成功购买了技能  [冒险岛勇士] ,请查看键盘 6 处", true)); //黄色
                    //cm.sendOk("购买成功,换线后请查看键盘#r 9 #k处");
                    if (cm.getClient().getChannel() == 1) {
                        cm.getPlayer().changeChannel(5);
                    } else {
                        cm.getPlayer().changeChannel(1);
                    }
                    cm.dispose();
                } else {
                    cm.sendOk("  元宝不足");
                    cm.dispose();
                }
            } else if (warp == 5) {
                if (cm.getPlayer().getOneTimeLog("急速领域") > 0) {
                    cm.teachSkill(5121009, 20);
                    cm.getPlayer().changeKeybinding(7, 1, 5121009);
                    if (cm.getClient().getChannel() == 1) {
                        cm.getPlayer().changeChannel(5);
                    } else {
                        cm.getPlayer().changeChannel(1);
                    }
                    cm.dispose();
                    return;
                }
                if (cm.getPlayer().getCSPoints(3) >= 99) {
                    cm.getPlayer().modifyCSPoints(3, -99, true); //元宝
                    cm.getPlayer().setOneTimeLog("急速领域");
                    cm.teachSkill(5121009, 20);
                    cm.getPlayer().changeKeybinding(7, 1, 5121009);
                    Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9, cm.getC().getChannel(), "赞助商城" + " : " + cm.getPlayer().getName() + "  成功购买了技能  [急速领域] ,请查看键盘 6 处", true)); //黄色
                    //cm.sendOk("购买成功,换线后请查看键盘#r 9 #k处");
                    if (cm.getClient().getChannel() == 1) {
                        cm.getPlayer().changeChannel(5);
                    } else {
                        cm.getPlayer().changeChannel(1);
                    }
                    cm.dispose();
                } else {
                    cm.sendOk("  元宝不足");
                    cm.dispose();
                }

            } else if (warp == 6) {
                if (cm.getPlayer().getOneTimeLog("稳如泰山") > 0) {
                    cm.teachSkill(1321002, 30);
                    cm.getPlayer().changeKeybinding(7, 1, 1321002);
                    if (cm.getClient().getChannel() == 1) {
                        cm.getPlayer().changeChannel(5);
                    } else {
                        cm.getPlayer().changeChannel(1);
                    }
                    cm.dispose();
                    return;
                }
                if (cm.getPlayer().getCSPoints(3) >= 99) {
                    cm.getPlayer().modifyCSPoints(3, -99, true); //元宝
                    cm.getPlayer().setOneTimeLog("稳如泰山");
                    cm.teachSkill(1321002, 30);
                    cm.getPlayer().changeKeybinding(7, 1, 1321002);
                    Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9, cm.getC().getChannel(), "赞助商城" + " : " + cm.getPlayer().getName() + "  成功购买了技能[稳如泰山],请查看键盘 6 处", true)); //黄色
                    //cm.sendOk("购买成功,换线后请查看键盘#r 6 #k处");
                    if (cm.getClient().getChannel() == 1) {
                        cm.getPlayer().changeChannel(5);
                    } else {
                        cm.getPlayer().changeChannel(1);
                    }
                    cm.dispose();
                } else {
                    cm.sendOk("  元宝不足");
                    cm.dispose();
                }
            }
        }
    }
}