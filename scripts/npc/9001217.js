/*  
 *  
 *  BOSS组队副本通用脚本
 *  
 *

//副本开关 开启、true 关闭、false
var open = true;
//配置文件名称
var PQname = ["Limitless"];
//记录次数名称
var PQLog = ["无限副本"];
//开始的地图
var startmap = 867111044;
//等级限制
var minLevel = [200];
var maxLevel = [255];
//次数限制
var maxenter = [1];
var interval = [1];
var status = -1;
//限制人数
var minPlayers = 1;
var maxPlayers = 6;
//怪物最大等级设置
var moblevel = 255;
var chs;


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
      cm.sendSimple("#e#d   无尽深渊之中，BOSS无限来袭，冒险家们带上您们的勇气去消灭他们吧。为了您今后在冒险岛世界中的强大与否，请在此锻炼您的能力吧。您会明白。勇者之路不仅仅需要实力!也需要运气!#n#k\r\n\r\n#e#d副本介绍：#k#n\r\n\r\n#b进入该副本后，地图会有一个随机BOSS等待着您，消灭一只BOSS后随机召唤下一只BOSS.直至您坚持不住!!每5个关卡BOSS血量将爆发式递增，因此请带足够药水和万能药水，小心不要死亡了。在副本里可以输入 #r@mob#b 来查看怪物剩余HP，当您在副本里不小心死亡后可以使用 #r@fh#b 来复活自己从而战斗，当您消灭BOSS以后会有5秒间隙时间会自动进入下一关，当挑战BOSS时间到了10分钟BOSS还未消灭，则副本失败。每通关1个BOSS则可以获得500点券。想获得巨额点券.那么就努力坚持到海枯石烂吧......#k\r\n\r\n#e#d关卡提示：#n#k#r建议您先达到230级，面板超过500万以上再进入。#k\r\n\r\n#L0# #r我想进行挑战无限挑战副本。")
    } else {
        cm.sendYesNoN("#e<Boss - " + PQLog[0] + ">#n\r\n\r\n你现在确定放弃任务,从这里出去?\r\n");
    }
}
function action(mode, type, selection) {

    if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    if (cm.getMapId() == startmap) {

        if (status == 0) {
            var em = cm.getEventManager(PQname[selection]);
            if (em == null || open == false) {
                cm.sendOk(open ? "配置文件["+ PQname[selection] + "]不存在,请联系管理员。" : "目前该副本不开放，有疑问请联系管理员");
                cm.dispose();
                return;
            }
            chs = selection;
            var prop = em.getProperty("state");
            var rwpz = "#e<Boss - " + PQLog[selection] + ">#n\r\n#k\r\n#e#r";
            rwpz += "#n#k#e副本状态：#n" + (prop == null || prop.equals("0") ? "#e#b空闲#n#k" : "#e#r开启#n#k") + "";
            rwpz += "\r\n#e推荐人数：" + minPlayers + " - " + maxPlayers + "#n#e    推荐等级：" + minLevel[selection] + " - " + maxLevel[selection] + "#n";
            //rwpz += "\r\n当前已进行：#r#e" + cm.getDaysPQLog(PQLog[selection], interval[chs]) + "#n#k 次";
            rwpz += "\r\n#e剩余挑战次数：#r#e" + (maxenter[selection] - cm.getDaysPQLog(PQLog[selection], interval[chs])) + "#k 次#k (重置间隔：" + interval[chs] + "天)#n\r\n\r\n";
            cm.sendYesNoN(rwpz + "           #b#h0# \n\#k#e是否现在就进入？#n");
        } else if (status == 1) {
            if (!cm.isLeader()) {
                cm.sendOkN("嗯，你已经有自己的队伍。要执行这个任务，请让你们的队长与我对话，才可以申请入场.");
                cm.dispose();
            } else if (!cm.isAllPartyMembersAllowedLevel(minLevel[chs], maxLevel[chs])) {
                cm.sendNextN("组队成员等级 " + minLevel[chs] + " 以上 " + maxLevel[chs] + " 以下才可以入场。");
                cm.dispose();
            } else if (!cm.isAllPartyMembersAllowedPQ(PQLog[chs], maxenter[chs])) {
                cm.sendNextN("你的队员#r#e \"" + cm.getNotAllowedPQMemberName(PQLog[chs], maxenter[chs]) + "\" #k#n次数已经达到上限了。");
                cm.dispose();
            } else if (!cm.allMembersHere()) {
                cm.sendOkN("你的组队部分成员不在当前地图,请召集他们过来后在尝试。"); //判断组队成员是否在一张地图..
                cm.dispose();
            } else {
                var em = cm.getEventManager(PQname[chs]);
                if (em == null || open == false) {
                    cm.askMenuE("配置文件["+ PQname[chs] + "]不存在,请联系管理员。");
                    cm.dispose();
                } else {
                    var prop = em.getProperty("state");
                    if (prop == null || prop.equals("0")) {
                        cm.dispose();
                        em.startInstance(cm.getParty(), cm.getMap(), moblevel);
                        cm.gainMembersPQ(PQLog[chs], 1);
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
