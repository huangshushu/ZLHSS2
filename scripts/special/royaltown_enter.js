/*  
 *  
 *  BOSS组队副本通用脚本
 *  
 */
//副本开關 开启、true 關闭、false
var open = true;
//配置文件名称
//var PQLog = ["BossFairyQueen"];
//记录次數名称
var PQLog = ["皇帝"];
//开始的地圖
var startmap = 745000001;
//等级限制
var minLevel = [150, 150];
var maxLevel = [255, 255];
//次數限制
var maxenter = [3, 1];

var status = -1;
//限制人數
var minPlayers = 1;
var maxPlayers = 6;
//怪物最大等级设置
var moblevel = 255;
var chs;


function start() {
    if (cm.getMapId() == startmap) {
        var text = "";
        for (var i = 0; i < PQLog.length; i++) {
            text += "\r\n#b#L" + i + "#挑战" + PQLog[i] + "#l#k         ";
        }
        cm.sendSimple("#e<Boss - " + PQLog[0] + ">#n\r\n\r\n#b#h0# \n\#k你現在想和队友一起挑战这個BOSS副本嗎?\r\n" + text);
    } else {
        cm.sendYesNo("#e<Boss - " + PQLog[0] + ">#n\r\n你現在確定放棄任務,從這裡出去?\r\n");
    }

}
function action(mode, type, selection) {
    if (status >= 1 && mode == 0) {
        cm.sendOk("快捷寻找组队按热键“O”赶快加入组队來挑战组队任务吧。");
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;

    if (cm.getMapId() == startmap) {
        if (status == 0) {
            if  (cm.getParty() == null) {
                cm.sendOk("未组队。");
                cm.dispose();
                return;
            }
            chs = selection;
            var rwpz = "#e<Boss - " + PQLog[selection] + ">#n\r\n#k\r\n#e#r";
            rwpz += "#d       当前已挑战皇帝[#g"+cm.getPlayer().getBossLog('皇帝') + "#b/#r3#k]次#n#k\r\n";
            rwpz += "\r\n#e#b推荐人數：" + minPlayers + " - " + maxPlayers + "#n#e    推荐等级：" + minLevel[selection] + " - " + maxLevel[selection] + "#n#k";
            rwpz += "\r\n#e#d当前已進行：#e#g" +cm.getPlayer().getBossLog('皇帝')  + " #n#k次\r\n";
            //rwpz += "    剩餘挑戰次數：#r#e" + cm.getPlayer().setBossLog('艾菲尼娅') + "#n#k 次#n#k\r\n\r\n";
            cm.sendYesNo(rwpz + "#e#r#h0# #n#k\n\#k#e是否現在就進入？#n");
        } else if (status == 1) {
            if (cm.getParty() == null) { //判断组队
                cm.sendYesNo("你并沒有组队，請创建组建一個队伍在來吧。");
            } else if (!cm.isLeader()) { // 判断组队隊長
                cm.sendOk("請讓你們的隊長和我對話。");
            } else if (cm.getLevel() < 150) {//判断玩家角色等级
                cm.sendNext("组队成员等级 " + 150 + " 以上 " + 255 + " 以下才可以入场。");
            } else if (cm.getBossLog('皇帝') > 3) {//判断BOSS每日次数
                cm.sendNext("你和你的队员次數已經達到上限了。");
            } //else if (checklvl(70,120) == 1){
               // cm.sendNext("组队成员等级 " + minLevel[chs] + " 以上 " + maxLevel[chs] + " 以下才可以入场。");
           // } 
            //else if (!cm.isAllPartyMembersAllowedPQ(PQLog[chs], maxenter[chs])) {
                //cm.sendNext("你的队员#r#e \"" + cm.getNotAllowedPQMemberName(PQLog[chs], maxenter[chs]) + "\" #k#n次數已經達到上限了。");
            //} 
            //else if (!cm.allMembersHere()) {
                //cm.sendOk("你的组队部分成员不在当前地圖,請召集他們過來後在尝试。"); //判断组队成员是否在一張地圖..
            //} 
            else {
                  if (cm.getPlayerCount(745010500) <= 0 && cm.getPlayerCount(745010500) <= 0 && cm.getPlayerCount(745010500) <= 0 && cm.getPlayerCount(745010500) <= 0 && cm.getPlayerCount(745010500) <= 0) {
                            cm.sendOk("即将传送");
                            cm.warpParty(745010500);
                            cm.getMap(745010500).resetFully();
                            //cm.spawnMob(8870000, 164, 196);
                            cm.getPlayer().setBossLog('皇帝');
                            cm.喇叭(2,"『终极BOSS』：【" + cm.getChar().getName() + "】带领他的队伍悍不畏死的去皇帝了");
                    } else {
                        cm.sendOk("已經有队伍在進行了,請換其他频道尝试。");
                    }
                }
            cm.dispose();
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
