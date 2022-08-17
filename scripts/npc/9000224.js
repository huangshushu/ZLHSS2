/*var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var a = "#fEffect/CharacterEff/1082565/0/0#";  //饼干兔子
var b = "#fEffect/CharacterEff/1112904/0/0#"; //彩色星星
var c = "#fEffect/CharacterEff/1003271/0/0#";  //红色心心
var d = "#fEffect/CharacterEff/1112946/4/1#";  //钻石
var e = "#fEffect/CharacterEff/1082229/0/0#";  //红心
var yun8 = "#fUI/UIWindow/MonsterBook/arrowLeft/normal/0#";////金左指标
var yun9 = "#fUI/UIWindow/MonsterBook/arrowRight/normal/0#";////金右指标
var d10 = "#fUI/UIWindow.img/Shop/meso#";//金币图标
var f = "#fUI/Basic/LevelNo/0#"; //[1]+1
var j = "#fUI/Basic/LevelNo/1#"; //[1]+1
var h = "#fUI/Basic/LevelNo/2#"; //[1]+1
var i1 = "#fUI/Basic/LevelNo/3#"; //[1]+1
var g = "#fUI/Basic/LevelNo/4#"; //[1]+1
var k = "#fUI/Basic/LevelNo/5#"; //[1]+1
var l1 = "#fUI/Basic/LevelNo/6#"; //[1]+1
var hhtp = 0;
//---------------------------
var minLevel = 200;
var maxLevel = 250;
var minPartySize = 2;
var maxPartySize = 6;
var pthhpl = "";
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (cm.getEventCount("航海旅途") == 0) {
        pthhpl = "#d0#k";
    } else {
        pthhpl = "" + cm.getEventCount("航海旅途") + "";
    }
    if (status == 0 && mode == 0) {
        cm.dispose();
        //cm.openNpc(2470018);
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
        cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
        cm.dispose();
    } else if (status == 0) {
        var selStr = "#d无尽的大海中有数之不尽的宝藏及深海巨妖！\r\n你确定要乘坐达尼尔拉战航去冒险吗\r\n";
        selStr += "#e#r可敬的勇士 [ #h # ] 期待你回归 \r\n#k等级：200 人数：2以上 #d今日已出海[#b" + pthhpl + "#d]次\r\n#k#n";
        selStr += "         #b#L0#" + yun8 + "平民达尼尔拉战航#d" + yun9 + "#l\r\n";
        selStr += "         #r#L1#" + yun8 + "土豪达尼尔拉战航#d" + yun9 + "#l\r\n";
        selStr += "\r\n         #r展示：#v1302333##b#z1302333#\r\n";
        // selStr += "#r#L2#"+yun9+"土豪达尼尔拉战航#d [#r需2人以上组队#k]　　[" + pthhpl + "] - #d无限#l\r\n\r\n";
        selStr += "\r\n\r\n#d#e#L3#海盗英雄的宝箱里都有些什么？#l#n#k\r\n";
        selStr += "#d#e#L3#副本介绍#l#n#k\r\n";
        //selStr += "#d#e#L4#"+d10+"打开航海商店#l#n#k\r\n";
        cm.askMenu(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0://乘坐达尼尔拉
                hhtp = 1;
                cm.askMenu("\r\n\r\n#r#e深海中危险众多!深海巨妖数不胜数，需要3000W\r\n\r\n您确定要与您的伙伴去深海探险吗？");
                break;
            case 1://会员乘坐达尼尔拉
                hhtp = 2;
                cm.askMenu("\r\n\r\n#r#e这里是土豪模式。进入价格需要5000点卷，并且只能重置2次。\r\n\r\n您确定要与您的伙伴去深海探险吗？");
                break;
            case 2://土豪
                hhtp = 3;
                cm.askMenu("\r\n\r\n#r#e哇，到我这里进入价格可不菲噢。需要5000点卷\r\n\r\n您确定要与您的伙伴去深海探险吗？");
                // status=-1;
                break;
            case 3://海盗宝箱
                cm.dispose();
                cm.sendOk("介绍：请先挑战平民模式(每日2次，3000W一次)，2次后如果还需要挑战可以花5000点卷继续挑战(土豪模式，每日可重置2次) 如果在里面掉线，将不扣除副本进入次数！\r\n---------------------------------------------------\r\n宝箱：#d#e#v1122265##v5010136##v5010100##v5010105##v5010106##v5010107##v5010108##v5010109##v5010111##v5010112##v5010122##v5010123##v5010124##v5010127##v5010128##v5010132##v5010132##v5010122##v5010141##v5010044##v2431988##v2431992##v2431989##v2432669##v2431991##v2431995##v2431938##v1113075#(最高级饰品系列，星火，惊人，冒险心，FFN，150防具，暴君防具，祥龙)#v1302333##b#z1302333##k(该系列：新出160装备，目前最好套装)#n#k");
                break;
            case 4://回自由
                //cm.warp(101050000, 0)
                cm.dispose();
                cm.openShop(9390219);
                //cm.sendOk("#r#e　勇士 ！期待您更强大了再来航海中称霸！！");
                break;
        }
    } else if (status == 2) {
        if (hhtp == 1) {
            if (cm.getEventCount("航海旅途") >= 2 || cm.getMeso() < 30000000) {
                cm.sendOk("尊敬的玩家 今天乘坐达尼尔拉船已到上限或你没有足够金币\r\n\r\n请明日再光临 或 其他模式继续挑战");
                cm.dispose();
            } else if (cm.getPlayer().getParty() == null || cm.getPlayer().getParty() < 2) {
                cm.sendOkS("#d#e抱歉!请组队并且保持两人以上！！#k#n", 0, 9390474);
            } else if (!cm.isLeader()) {
                cm.sendOkS("\r\n\r\n\t#e#d请确认您是否是此队伍的队长！如若不是,请喊队长来对话！#k#n", 0, 9390474);
            } else {
                var party = cm.getPlayer().getParty().getMembers();
                var mapId = cm.getPlayer().getMapId();
                var next = true;
                var levelValid = 0;
                var inMap = 0;
                var it = party.iterator();
                while (it.hasNext()) {
                    var cPlayer = it.next();
                    var bosslog = cm.getMap().getCharacterById(cPlayer.getId()).getBossLog("航海旅途");
                    if (bosslog >= 2) {
                        cm.sendOk("对不起，玩家 #r" + cPlayer.getName() + "#k 今天进入次数已超过2次。");
                        cm.dispose();
                        return;
                    }
                    var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                    if (ccPlayer != null) {
                        if (ccPlayer.getLevel() >= minLevel && ccPlayer.getLevel() <= maxLevel) {
                            levelValid += 1;
                        }
                        if (ccPlayer.getMapId() == mapId) {
                            inMap += (ccPlayer.isGM() ? 3 : 1);
                        }
                        if (cPlayer.getChannel() != cm.getPlayer().getClient().getChannel() || cPlayer.getMapid() != cm.getMapId() || cm.getPlayer().getClient().getChannel() != 1) {
                            next = false;
                        }
                    } else {
                        next = false;
                    }
                }
                if (party.size() > maxPartySize || inMap < minPartySize) {
                    next = false;
                }
                if (next) {
                    var em = cm.getEventManager("hhzdwj");
                    if (em == null) {
                        cm.sendOkS("脚本错误，请联系管理员", 0, 9390474);
                        cm.dispose();
                        return;
                    }
                    var prop = em.getProperty("state");
                    if (prop == null || prop.equals("0")) {
                        em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
                        cm.worldSpouseMessage(0xA, "≡时代怪兽新闻≡　　玩家 " + cm.getChar().getName() + " 等级 " + cm.getChar().getLevel() + "　挑战航海中的危机[ 平民模式 ]");
                        cm.getMap().startMapEffect("玩家 " + cm.getChar().getName() + " 带领TA的远征队 征伐 航海中的危机 危险星：★★★★★★★", 5121000);//火影窗口
                        cm.gainMeso(-30000000);
                    } else {
                        cm.sendOkS("\r\n\r\n\r\n\t\t#d#e当前频道已有人正在征伐海兽!!请等待或变更频道！！#k#n", 0, 9390474);
                    }
                } else {
                    cm.sendOkS("你所属的组队人数在" + minPartySize + "人以下，没办法进去。必须有" + minLevel + "级以上的角色" + minPartySize + "个以上才能进去。并且队员要在相同频道和地图,并且该怪物只能在1频道挑战！\r\n请确认一下，然后再来找我。", 0, 9390474);
                }
            }
            cm.dispose();
        } else if (hhtp == 2) {
            if (cm.getPlayer().getCSPoints(1) < 5000 || cm.getEventCount("航海旅途") >= 4) {
                cm.sendOk("抱歉尊敬的玩家\r\n\r\n土豪模式需缴纳 5000 点卷 才可挑战");
                cm.dispose();
            } else if (cm.getPlayer().getParty() == null || cm.getPlayer().getParty() < 2) {
                cm.sendOkS("#d#e抱歉!请组队并且保持两人以上！！#k#n", 0, 9390474);
            } else if (!cm.isLeader()) {
                cm.sendOkS("\r\n\r\n\t#e#d请确认您是否是此队伍的队长！如若不是,请喊队长来对话！#k#n", 0, 9390474);
            } else {
                var party = cm.getPlayer().getParty().getMembers();
                var mapId = cm.getPlayer().getMapId();
                var next = true;
                var levelValid = 0;
                var inMap = 0;
                var it = party.iterator();
                while (it.hasNext()) {
                    var cPlayer = it.next();
                    var bosslog = cm.getMap().getCharacterById(cPlayer.getId()).getBossLog("航海旅途");
                    if (bosslog >= 4) {
                        cm.sendOk("对不起，玩家 #r" + cPlayer.getName() + "#k 今天进入次数已超过4次。");
                        cm.dispose();
                        return;
                    }
                    var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                    if (ccPlayer != null) {
                        if (ccPlayer.getLevel() >= minLevel && ccPlayer.getLevel() <= maxLevel) {
                            levelValid += 1;
                        }
                        if (ccPlayer.getMapId() == mapId) {
                            inMap += (ccPlayer.isGM() ? 3 : 1);
                        }
                        if (cPlayer.getChannel() != cm.getPlayer().getClient().getChannel() || cPlayer.getMapid() != cm.getMapId() || cm.getPlayer().getClient().getChannel() != 1) {
                            next = false;
                        }
                    } else {
                        next = false;
                    }
                }
                if (party.size() > maxPartySize || inMap < minPartySize) {
                    next = false;
                }
                if (next) {
                    var em = cm.getEventManager("hhzdwj");
                    if (em == null) {
                        cm.sendOkS("脚本错误，请联系管理员", 0, 9390474);
                        cm.dispose();
                        return;
                    }
                    var prop = em.getProperty("state");
                    if (prop == null || prop.equals("0")) {
                        em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
                        cm.worldSpouseMessage(0xA, "≡时代怪兽新闻≡　　玩家 " + cm.getChar().getName() + " 等级 " + cm.getChar().getLevel() + "　挑战航海中的危机[ 土豪模式 ]");
                        cm.getMap().startMapEffect("玩家 " + cm.getChar().getName() + " 带领TA的远征队 征伐 航海中的危机 危险星：★★★★★★★", 5121000);//火影窗口
                        cm.gainNX(1, -5000);
                    } else {
                        cm.sendOkS("\r\n\r\n\r\n\t\t#d#e当前频道已有人正在征伐海兽!!请等待或变更频道！！#k#n", 0, 9390474);
                    }
                } else {
                    cm.sendOkS("你所属的组队人数在" + minPartySize + "人以下，没办法进去。必须有" + minLevel + "级以上的角色" + minPartySize + "个以上才能进去。并且队员要在相同频道和地图,并且该怪物只能在1频道挑战！\r\n请确认一下，然后再来找我。", 0, 9390474);
                }
            }
            cm.dispose();
        } else if (hhtp == 3) {
            if (cm.getPlayer().getCSPoints(1) < 5000) {
                cm.sendOk("抱歉尊敬的玩家\r\n\r\n土豪模式需缴纳 5000 点卷 才可挑战");
                cm.dispose();
            } else if (cm.getPlayer().getParty() == null || cm.getPlayer().getParty() < 2) {
                cm.sendOkS("#d#e抱歉!请组队并且保持两人以上！！#k#n", 0, 9390474);
            } else if (!cm.isLeader()) {
                cm.sendOkS("\r\n\r\n\t#e#d请确认您是否是此队伍的队长！如若不是,请喊队长来对话！#k#n", 0, 9390474);
            } else {
                var party = cm.getPlayer().getParty().getMembers();
                var mapId = cm.getPlayer().getMapId();
                var next = true;
                var levelValid = 0;
                var inMap = 0;
                var it = party.iterator();
                while (it.hasNext()) {
                    var cPlayer = it.next();
                    var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                    if (ccPlayer != null) {
                        if (ccPlayer.getLevel() >= minLevel && ccPlayer.getLevel() <= maxLevel) {
                            levelValid += 1;
                        }
                        if (ccPlayer.getMapId() == mapId) {
                            inMap += (ccPlayer.isGM() ? 3 : 1);
                        }
                        if (cPlayer.getChannel() != cm.getPlayer().getClient().getChannel() || cPlayer.getMapid() != cm.getMapId() || cm.getPlayer().getClient().getChannel() != 1) {
                            next = false;
                        }
                    } else {
                        next = false;
                    }
                }
                if (party.size() > maxPartySize || inMap < minPartySize) {
                    next = false;
                }
                if (next) {
                    var em = cm.getEventManager("hhzdwj");
                    if (em == null) {
                        cm.sendOkS("脚本错误，请联系管理员", 0, 9390474);
                        cm.dispose();
                        return;
                    }
                    var prop = em.getProperty("state");
                    if (prop == null || prop.equals("0")) {
                        em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
                        cm.worldSpouseMessage(0xA, "≡时代怪兽新闻≡　　玩家 " + cm.getChar().getName() + " 等级 " + cm.getChar().getLevel() + "　挑战航海中的危机[ 土豪模式 ]");
                        cm.getMap().startMapEffect("玩家 " + cm.getChar().getName() + " 带领TA的远征队 征伐 航海中的危机 危险星：★★★★★★★", 5121000);//火影窗口
                        cm.gainNX(1, -5000);
                    } else {
                        cm.sendOkS("\r\n\r\n\r\n\t\t#d#e当前频道已有人正在征伐海兽!!请等待或变更频道！！#k#n", 0, 9390474);
                    }
                } else {
                    cm.sendOkS("你所属的组队人数在" + minPartySize + "人以下，没办法进去。必须有" + minLevel + "级以上的角色" + minPartySize + "个以上才能进去。并且队员要在相同频道和地图,并且该怪物只能在1频道挑战！\r\n请确认一下，然后再来找我。", 0, 9390474);
                }
            }
            cm.dispose();
        }

    }
}