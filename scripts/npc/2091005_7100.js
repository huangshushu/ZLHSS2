var 箭头 = "#fUI/Basic/icon/arrow#";
var status = 0;
//注魂武器
var weapens1 = [
    4002000,
    4002001,
    4002002,
    4002003,
    4031558,
    4031559,
    4031560,
    4031561,
    4001230
];

//强化突破武器
var weapens2 = [
    1302333,
    1312199,
    1322250,
    1332274,
    1342101,
    1372222,
    1382259,
    1402251,
    1412177,
    1422184,
    1432214,
    1442268,
    1452252,
    1462239,
    1472261,
    1482216,
    1492231
];

//武器之魂
var weapSoul = [
    //武器之魂id，获得几率，增幅进度
    [4031868, 90,  5, "下品"],
    [4031868, 60, 10, "中品"],
    [4031868, 30, 15, "上品"],
    [4031868, 5,  20, "极品"]
];

//武器突破
var tupo = [
    //初始武器，突破后武器，成功率，失败是否进度清零，失败后降级几率，失败后碎武器几率，消耗突破石数量，成功后攻击，成功后全属性，消耗金币，消耗枫叶
    ["普通埃苏武器", "下品埃苏武器", 100, false, 0, 0, 1, 250, 50, 1000000, 100, "下品"],
    ["下品埃苏武器", "中品埃苏武器", 80, true, 0, 0, 1, 300, 100, 1000000, 100, "中品"],
    ["中品埃苏武器", "上品埃苏武器", 60, true, 20, 5, 1, 400, 200, 1000000, 100, "上品"],
    ["上品埃苏武器", "极品埃苏武器", 40, true, 40, 15, 1, 500, 300, 1000000, 100, "极品"],
    ["极品埃苏武器", "圣级埃苏武器", 25, true, 60, 30, 1, 666, 888, 1000000, 100, "圣级"],
    ["圣级埃苏武器", "神级埃苏武器", 10, true, 80, 50, 1, 1111, 2222, 1000000, 100, "神级"]
]

//突破消耗的物品
var useItemid = 4031348;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        var txt = "\t\t\t\t #b欢迎来到-埃苏武器系统#n#k\r\n";
        txt += "  ★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★\r\n";
        txt += "┏━━━━━━━━━━━━━━━━━━━━━━━┓\r\n\r\n\r\n";
        txt += "\t\t\t  #L10##r#e埃苏武器系统说明#l#k\r\n\r\n"
        txt += "  #L1##b#e魂石注魂#l\t#L2##b#e武器强化#l\t#L3##b#e武器突破#l#k\r\n\r\n\r\n\r\n"
        txt += "┗━━━━━━━━━━━━━━━━━━━━━┛\r\n"
        txt += "  ★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★\r\n";
        cm.sendSimple(txt);
    } else if (status == 1) {
        switch (selection) {
            case 1:
                weap = cm.getInventory(4).getItem(1);
                if (weap == null) {
                    cm.dispose();
                    cm.sendOk("其他栏第一格是空的\r\n请将 #b（ #r注魂消耗的道具 #b） #k放在其他栏第一格");
                    return;
                }
                var eq = cm.getInventory(4).getItem(2);
                if (!checkContians(weap.getItemId(), weapens1)) {
                    cm.dispose();
                    cm.sendOk("其他栏第一格不是可以用来注魂的道具哦，请确认");
                    return;
                } else if (eq == null) {
                    cm.dispose();
                    cm.sendOk("其他栏第二格是空的，请将#v4031466#放到其他栏第一格");
                    return;
                } else if (eq.getItemId() != 4031466) {
                    cm.dispose();
                    cm.sendOk("其他栏第二格不是#v4031466#，请将#v4031466#放到其他栏第二格");
                    return;
                }
                var eq2 = eq.copy();
                eq2.setRate((eq2.getRate() + 10)>100?100:(eq2.getRate() + 10));
                eq2.setQuantity(1);
                eq2.setOwner("进度" + eq2.getRate());
                cm.removeSlot(4, 1, 1);
                cm.removeSlot(4, 2, 1);
                if (eq2.getRate() >= 100) {
                    var ran = Math.floor(Math.random() * 100);
                    var finalGift = new Array();
                    var owner = "";
                    for (var i in weapSoul) {
                        if (ran < weapSoul[i][1]) {
                            finalGift.push(weapSoul[i])
                        }
                    }
                    var finalItemid = 0;
                    if (finalGift.length > 0) {
                        var ran2 = Math.floor(Math.random() * finalGift.length);
                        finalItemid = finalGift[ran2][0];
                        owner = finalGift[ran2][3]
                    } else {
                        //保底次品
                        finalItemid = weapSoul[0][0];
                        owner = weapSoul[0][3];
                    }
                    cm.gainItem(finalItemid, 1, false, 0, -1, owner);
                    cm.sendOk(owner+"注魂成功，恭喜你获得#v"+finalItemid+"#");
                } else {
                    cm.addFromDrop(eq2);
                    cm.sendOk("注魂成功，当前进度：#B" + eq2.getRate() + "#（"+eq2.getRate()+"/100）");
                }
                cm.dispose();
                return;
            case 2:
                weap = cm.getInventory(1).getItem(1);
                if (weap == null) {
                    cm.dispose();
                    cm.sendOk("装备栏第一格是空的\r\n请将 #b（ #r注魂消耗的道具 #b） #k放在装备栏第一格");
                    return;
                }
                if (!checkContians(weap.getItemId(), weapens2)) {
                    cm.dispose();
                    cm.sendOk("装备栏第一格不是可以用来强化的武器哦，请确认");
                    return;
                }
                if (weap.getRate() >= 100) {
                    cm.dispose();
                    cm.sendOk("当前强化进度已满100%，赶快去突破吧！");
                    return;
                }
                var eq = cm.getInventory(4).getItem(1);
                if (eq == null) {
                    cm.dispose();
                    cm.sendOk("其他栏第一格是空的，请将要消耗的武器之魂放到消耗栏第一格");
                    return;
                }
                var list = checkContians2(eq, weapSoul);
                if (list == null) {
                    cm.dispose();
                    cm.sendOk("其他栏第一格不是可用来强化的武器之魂，请将要消耗的武器之魂放到其他栏第一格");
                    return;
                }
                var weap2 = weap.copy();
                weap2.setRate((weap2.getRate() + list[2])>100?100:(weap2.getRate() + list[2]));
                var ow = "";
                if (weap2.getGrade() > 0) {
                    ow = tupo[weap2.getGrade() - 1][11]
                }
                weap2.setOwner(ow+"进度"+weap2.getRate());
                cm.removeSlot(1, 1, 1);
                cm.removeSlot(4, 1, 1);
                cm.addFromDrop(weap2);
                cm.sendOk("武器强化成功，强化进度：#B" + weap2.getRate() + "#（"+weap2.getRate()+"/100）");
                cm.喇叭公告(5076000, "恭喜 他/她 武器强化成功", weap2);
                cm.dispose();
                break;
            case 3:
                weap = cm.getInventory(1).getItem(1);
                if (weap == null) {
                    cm.dispose();
                    cm.sendOk("装备栏第一格是空的\r\n请将 #b（ #r注魂消耗的道具 #b） #k放在装备栏第一格");
                    return;
                }
                if (!checkContians(weap.getItemId(), weapens2)) {
                    cm.dispose();
                    cm.sendOk("装备栏第一格不是可以用来突破的武器哦，请确认");
                    return;
                }
                if (weap.getRate() < 100) {
                    cm.dispose();
                    cm.sendOk("当前强化进度未满100%，无法为你突破哦！");
                    return;
                }
                grade = weap.getGrade();
                if (grade < 0 || grade >= tupo.length) {
                    cm.dispose();
                    cm.sendOk("当前武器无法突破或已突破至最高级！");
                    return;
                }
                var txt = "\t\t\t\t\t- #e#r武器突破#n#k -\r\n";
                txt += "\t\t#b" + tupo[grade][0] + " #k"+箭头+箭头+箭头+箭头+"#b " + tupo[grade][1] + "#k\r\n";
                txt += "突破成功后，#r攻击：" + tupo[grade][7] + "，全属性：" + tupo[grade][8] + "#k\r\n";
                txt += "突破成功率：#r" + tupo[grade][2] + "%#k\r\n";
                txt += "突破失败是否进度清零：#r" + (tupo[grade][3]?"是":"否") + "#k\r\n";
                txt += "突破失败降级几率：#r" + tupo[grade][4] + "%#k\r\n";
                txt += "突破失败碎武器几率：#r" + tupo[grade][5] + "%#k\r\n";
                txt += "突破消耗#v"+useItemid+"#数量：#r" + tupo[grade][6] + "#k\r\n";
                txt += "突破消耗#v4000313#数量：#r" + tupo[grade][10] + "#k\r\n";
                txt += "突破消耗金币数量：#r" + tupo[grade][9] + "#k\r\n";
                cm.sendYesNo(txt);
                break;
			case 10:
				cm.dispose();
				var txt = "";
				txt += "#r1、#k为#v4031466#进行注魂，注魂材料有：\r\n";
				for (var i in weapens1) {
					txt += "#v"+weapens1[i]+"#";
				}
				txt += "\r\n#g2、#k注魂进度到达100时，将会获得随机品级的#v4031868#，此物品可以为埃苏武器强化，强化进度如下：\r\n";
				for (var i in weapSoul) {
					txt += weapSoul[i][3]+"#v"+weapSoul[i][0]+"#增加埃苏武器进度 #r"+weapSoul[i][2]+"%#k\r\n";
				}
				txt += "\r\n#b3、#k当武器进度到达100时，可对埃苏武器进行突破，每次突破都是一次大提升。\r\n#r#e注意：突破成功后的埃苏武器属性是固定的！"
				cm.sendOk(txt);
				/*var map = cm.getPlayer().getMap();
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				var eq = ii.randomizeStats(ii.getEquipById(1082003));
				var mob = map.getAllMonster().get(0);
				
				map.spawnMobDrop(eq, cm.getPlayer().getPosition(), mob, cm.getPlayer(), 1, 0);*/
				break;
        }
    } else if (status == 2) {
        if (!cm.haveItem(useItemid, tupo[grade][6])) {
            cm.sendOk("#v"+useItemid+"#数量不足"+tupo[grade][6]+"！");
            cm.dispose();
            return;
        } else if (!cm.haveItem(4000313, tupo[grade][10])) {
            cm.sendOk("#v4000313#数量不足"+tupo[grade][10]+"！");
            cm.dispose();
            return;
        } else if (cm.getPlayer().getMeso() < tupo[grade][9]) {
            cm.sendOk("金币不足！");
            cm.dispose();
            return;
        }
        cm.sendSimple("#r#e是否使用#v5220008# * 1 防止武器降级？\r\n\t\t#L1##b是#l\t#L2#否#l");
    } else if (status == 3) {
        if (!cm.haveItem(5220008, 1) && selection == 1) {
            cm.sendOk("#v5220008#数量不足！");
            cm.dispose();
            return;
        }
        sel_1 = selection;
        cm.sendSimple("#r#e是否使用#v5310000# * 1 防止武器损坏？\r\n\t\t#L1##b是#l\t#L2#否#l");
    } else if (status == 4) {
        if (!cm.haveItem(5310000, 1) && selection == 1) {
            cm.sendOk("#v5310000#数量不足！");
            cm.dispose();
            return;
        }
        sel_2 = selection;
        //成功率
        var success = Math.floor(Math.random() * 100);
        var weap2 = weap.copy();
        weap2.setRate(0);
        cm.gainItem(useItemid, -tupo[grade][6]);
        cm.gainItem(4000313, -tupo[grade][10]);
        cm.gainMeso(-tupo[grade][9]);
        if (sel_1 == 1) {
            cm.gainItem(5220008, -1);
        }
        if (sel_2 == 1) {
            cm.gainItem(5310000, -1);
        }
        if (success < tupo[grade][2]) {
            //成功
            weap2.setGrade(weap2.getGrade() + 1);
            weap2.setWatk(tupo[grade][7]);
            weap2.setMatk(tupo[grade][7]);
            weap2.setStr(tupo[grade][8]);
            weap2.setDex(tupo[grade][8]);
            weap2.setInt(tupo[grade][8]);
            weap2.setLuk(tupo[grade][8]);
            weap2.setOwner(tupo[grade][11]);
            cm.removeSlot(1, 1, 1);
            cm.addFromDrop(weap2);
            cm.sendOk("恭喜你武器突破成功！");
            cm.喇叭公告(5076000, "恭喜 他/她 武器突破成功", weap2);
            cm.dispose();
        } else {
            //失败
            var txt = "";
            var ran1 = Math.floor(Math.random() * 100);
            //武器是否碎掉了
            var b = false;
            if (ran1 < tupo[grade][5] && sel_2 != 1) {
                //碎武器
                cm.removeSlot(1, 1, 1);
                txt += "\r\n#r你的武器在突破过程中碎掉了！";
                b = true;
            }
            if (!b) {
                //武器没有碎
                var ran2 = Math.floor(Math.random() * 100);
                if (ran2 < tupo[grade][4] && sel_1 != 1) {
                    //降级
                    weap2.setGrade(weap2.getGrade() - 1);
                    grade = weap2.getGrade() - 1;
                    weap2.setWatk(tupo[grade][7]);
                    weap2.setMatk(tupo[grade][7]);
                    weap2.setStr(tupo[grade][8]);
                    weap2.setDex(tupo[grade][8]);
                    weap2.setInt(tupo[grade][8]);
                    weap2.setLuk(tupo[grade][8]);
                    weap2.setOwner(tupo[grade][11]);
                    txt += "\r\n#r你的武器在突破过程中降级了！"
                }
                cm.removeSlot(1, 1, 1);
                cm.addFromDrop(weap2);
            }
            cm.sendOk("很遗憾突破失败" + txt);
            cm.喇叭公告(5076000, "很遗憾 他/她 武器突破失败", weap2);
            cm.dispose();
        }
    }
}

function checkContians(itemid, list) {
    for (var i in list) {
        if (itemid == list[i]) {
            return true
        }
    }
    return false;
}

function checkContians2(item, list) {
    for (var i in list) {
        if (item.getItemId() == list[i][0] && item.getOwner() == list[i][3]) {
            return list[i]
        }
    }
    return null;
}
