/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：路西德 BlackHeaven
 *  @Author Kent 
 */


//副本开关 开启、true 关闭、false
var open = [true, true];
//配置文件名称
var PQname = ["nskd"];
//记录次数名称
var PQLog = ["年兽副本 - 夕"];
//开始的地图
var startmap = 867136400;
//等级限制
var minLevel = [260, 260];
var maxLevel = [275 ,275];
//次数限制
var maxenter = [2,2];
var interval = [2,2];
var status = -1;
//限制人数
var minPlayers = [1];
var maxPlayers = [2];
/* 道具限制 */
var 道具 = 4310019;//星缘纪念币
//怪物最大等级设置
var moblevel = 255;
var chs;
//破功限制
var limitBreakNeed = [30*10000*10000, 50*10000*10000];
var Basis = ["年兽副本 - 夕副本", true, true, true]

function start() {
    if (cm.getMapId() == startmap) {
        if (cm.getParty() == null) {
            cm.sendOkN("你想和队员们一起努力，完成任务吗？这里面有很多如果不同心协力就无法解决的障碍……。那么要执行这个任务必须先创建一个队伍！");
            cm.dispose();
            return;
        }
        var text = "";
        for (var i = 0; i < PQname.length; i++) {
            text += "\r\n#b#L" + i + "#挑战 " + PQLog[i] + "#l#k";
        }
        cm.sendSimpleN("<Boss - " + PQLog[0] + ">#n\r\n#b#h0# \n\#k你确定要挑战[ #r年兽副本 - 夕#k ]副本……?" + text);
    } else {
        cm.sendYesNoN("<Boss - " + PQLog[0] + ">#n\r\n\r\n你现在确定放弃任务,从这里出去?\r\n");
    }
}
function action(mode, type, selection) {

    if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    if (cm.getMapId() == startmap) {

        if (status == 10 && selection == 10) {
            cm.dispose();
            cm.openNpc(1540496, "BlackHeavenSquad");
        } else if (status == 0) {
            var em = cm.getEventManager(PQname[selection]);
            if (em == null || open == false) {
                cm.sendOk(open ? "配置文件不存在,请联系管理员。" : "目前该副本不开放，有疑问请联系管理员");
                cm.dispose();
                return;
            }
            chs = selection;
            var prop = em.getProperty("state");
            var rwpz = "<Boss - " + PQLog[selection] + ">#n\r\n#k\r\n#r";
            rwpz += "#n#k副本状态：#n" + (prop == null || prop.equals("0") ? "#r空闲#n#k" : "#r开启#n#k") + "";
            rwpz += "\r\n推荐人数：" + minPlayers + " - " + maxPlayers + "#n    推荐等级：" + minLevel[selection] + " - " + maxLevel[selection] + "#n";
            //rwpz += "\r\n当前已进行：#r" + cm.getDaysPQLog(PQLog[selection], interval[chs]) + "#n#k 次";
            rwpz += "\r\n剩余挑战次数：#r" + (maxenter[selection] - cm.getDaysPQLog(PQLog[selection], interval[chs])) + "#k 次#k (重置间隔：" + interval[chs] + "天)#n\r\n\r\n";
            cm.sendYesNoN(rwpz + "           #b#h0# \n\#k是否现在就进入？#n");
        } else if (status == 1) {
            if (!cm.isLeader()) {
                cm.sendOkN("嗯，你已经有自己的队伍。要执行这个任务，请让你们的队长与我对话，才可以申请入场.");
                cm.dispose();
            } else if (!cm.isAllPartyMembersAllowedLevel(minLevel[chs], maxLevel[chs])) {
                cm.sendNextN("组队成员等级 " + minLevel[chs] + " 以上 " + maxLevel[chs] + " 以下才可以入场。");
                cm.dispose();
			/*} else if (!cm.haveItem(道具, 2)) {
                cm.sendNextN("抱歉！。。。。你没有 " + cm.getItemName(道具) + " #b2#k 个不能开启副本\r\n");
                cm.dispose();*/
            } else if (!cm.isAllPartyMembersAllowedPQ(PQLog[chs], maxenter[chs])) {
                cm.sendNextN("你的队员#r \"" + cm.getNotAllowedPQMemberName(PQLog[chs], maxenter[chs]) + "\" #k#n次数已经达到上限了。");
                cm.dispose();
            } else if (!cm.allMembersHere()) {
                cm.sendOkN("你的组队部分成员不在当前地图,请召集他们过来后在尝试。"); //判断组队成员是否在一张地图..
                cm.dispose();
			/*} else if (cm.getLimitBreak() < limitBreakNeed[chs]) {
                cm.sendOkN("你的武器破功值不到"+limitBreakNeed[chs]+"。请提升后再来尝试"); //破功值是否足够
                cm.dispose();*/
            } else {
                var em = cm.getEventManager(PQname[chs]);
                if (em == null || open == false) {
                    cm.sendSimpleN("配置文件不存在,请联系管理员。");
                    cm.dispose();
                } else {
					if (!getGiveItem(4310019, 2)) {
                        cm.dispose();
                        return;
                    }
					if (!getGiveBreak(4000000000)) {
                        cm.dispose();
                        return;
                    }
                    var prop = em.getProperty("state");
                    if (prop == null || prop.equals("0")) {
                        cm.dispose();
                        em.startInstance(cm.getParty(), cm.getMap(), moblevel);
                        cm.gainMembersPQ(PQLog[chs], 1);
						cm.givePartyItems(4310019, -2);
						cm.worldSpouseMessage(0x0F, "[副本挑战] : 恭喜 " + cm.getChar().getName() + " 开始挑战年兽副本 - 夕。祝Ta满载而归！");

                    } else {
                        cm.sendOkN("已经有队伍在进行了,请换其他频道尝试。");
                        cm.dispose();
                    }
                }
            }
        } else {
            cm.dispose();
        }
    } else {
        if (status == 0) {
            cm.warp(startmap, 0);
        }
        cm.dispose();
    }
}

/*  你这个端没有组队所有人写入不重置的 所以这里是我构造的 不重置写入记录 */
function M_MembersPQ(pqName, num) {
    if (cm.getParty() == null) {
        return;
    }
    var party = cm.getParty().getMembers();
    var it = party.iterator();
    var player = null;
    var Limit = [];
    while (it.hasNext()) {
        player = it.next();
        var curChar = cm.getChannelServer().getPlayerStorage().getCharacterById(player.getId());
        if (curChar == null) continue;
        curChar.setPQLog(pqName, 1, num);
    }
}

function getGiveItem(item, number) {
    var party = cm.getParty().getMembers();
    var it = party.iterator();
    var player = null;
    var Limit = [];
    while (it.hasNext()) {
        player = it.next();
        var curChar = cm.getChannelServer().getPlayerStorage().getCharacterById(player.getId());
        if (curChar.haveItem(item, number) < 1) {
            Limit.push(player.getName());
            break;
        }
    }
    if (Limit.length >= 1) {
        for (var i in Limit) {
            var txt = "\r\n";
            //txt += Limit[i] + "\r\n";
        }
        txt += "抱歉！\r\n\r\n这个 ["+ Limit[i] +"] 队员\r\n\r\n";
        txt += "不足道具 - " + cm.getItemName(item) + " x " + number + "\r\n ";
        var party = cm.getParty().getMembers();
        var it = party.iterator();
        var player = null;
        while (it.hasNext()) {
            player = it.next();
            var curChar = cm.getChannelServer().getPlayerStorage().getCharacterById(player.getId());
            curChar.dropMessage(1, txt)
        }
    } else {
        return true;
    }
}

function getGiveBreak(Break) {
    var party = cm.getParty().getMembers();
    var it = party.iterator();
    var player = null;
    var Limit = [];
    while (it.hasNext()) {
        player = it.next();
        var curChar = cm.getChannelServer().getPlayerStorage().getCharacterById(player.getId());
        Equip = curChar.getInventory(Packages.client.inventory.MapleInventoryType.EQUIPPED).getItem((-11));
        if (Equip == null) {
            Limit.push(player.getName());
            break;
        }
        if (Equip.getLimitBreak() < Break) {
            Limit.push([player.getName(), Equip.getLimitBreak()]);
            break;
        }
    }
    if (Limit.length >= 1) {
        var txt = "\r\n";
        text = "\r\n";
        for (var i in Limit) {
            //txt += Limit[i][0] + "\r\n";
			txt += "抱歉！\r\n\r\n";
            text = Limit[i][0] + " #d玩家 #b破功值 #r - " + Limit[i][1] + "\r\n";
        }
        txt += "这个["+ Limit[i][0] +"] 队员的破攻没有达标  \r\n\r\n需要破功值：" + Break;
        var party = cm.getParty().getMembers();
        var it = party.iterator();
        var player = null;
        while (it.hasNext()) {
            player = it.next();
            var curChar = cm.getChannelServer().getPlayerStorage().getCharacterById(player.getId());
            curChar.dropMessage(1, txt);
        }
        cm.sendOkS(text, 2);
    } else {
        return true;
    }
}
