/*  
 *  
 *  单机测试BOSS通用脚本
 *  
 */

//var PQLog = ["BossFairyQueen"];//配置文件名称
var maxenter = [3];//次數限制
var status = -1;
var minPlayers = 1;//最低限制人數
var maxPlayers = 1;//最高限制人數
var minLevel = [168];//最低等级限制
var maxLevel = [255];//最高等级限制
var PQLog = ["钻机"];//记录次數名称
var moblevel = 255;//怪物最大等级设置
var startmap = 703020000;//开始的地圖
var open = true;//副本开關 开启、true 關闭、false
var chs;


function start() {
    if (cm.getMapId() == startmap) {
        var text = "";
        for (var i = 0; i < PQLog.length; i++) {
            text += "\r\n#b#L" + i + "#挑战" + PQLog[i] + "#l#k         ";
        }
        cm.sendSimple("《Boss - " + PQLog[0] + "》#n\r\n\r\n#b#h0# \n\#k你現在想和队友一起挑战这个BOSS副本嗎?\r\n" + text);
    } else {
        cm.sendYesNo("《Boss - " + PQLog[0] + "》#n\r\n你現在确定放弃任务,从这里出去?\r\n");
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
            var rwpz = "《Boss - " + PQLog[selection] + "》#n\r\n#k\r\n#r";
            rwpz += "#d       当前已挑战钻机[#e#g"+cm.getBossLog("钻机") + "#n#k/#r#e3#n#k]次#n#k\r\n";
            rwpz += "\r\n#b推荐人数：" + minPlayers + " - " + maxPlayers + "#n    推荐等级：" + minLevel[selection] + " - " + maxLevel[selection] + "#n#k";
            rwpz += "\r\n#d当前已进行：#e#r" +cm.getBossLog("钻机")  + " #n#k次\r\n";
            cm.sendYesNo(rwpz + "#r#h0# #n#k\n\#k是否現在就進入？#n");
        } else if (status == 1) {
            if (cm.getParty() == null) { //判断组队
                cm.sendYesNo("你并沒有组队，請创建组建一個队伍在來吧。");
                cm.dispose();
                return;
            } else if (!cm.isLeader()) { // 判断组队隊長
                cm.sendOk("請讓你們的隊長和我對話。");
                cm.dispose();
                return;
            } else if (cm.getPlayer().getLevel() < 168) {//判断玩家角色等级
                cm.sendNext("组队成员等级 " + 168 + " 以上 " + 255 + " 以下才可以入场。");
                cm.dispose();
                return;
            } else if ( cm.getBossLog("钻机") >= 3) {
                cm.sendOk("您好,你当天挑战次数已用完"+ maxenter +"次！");
                cm.dispose();
                return;
            } else if (!cm.allMembersHere()) {
                cm.sendOk("你的组队部分成员不在当前地图,请召集他们过來后在尝试。"); //判断组队成员是否在一張地圖..
                cm.dispose();
                return;
            } 
            else {
                      if (cm.getPlayerCount(703020100) <= 0 && cm.getPlayerCount(703020100) <= 0 && cm.getPlayerCount(703020100) <= 0 && cm.getPlayerCount(703020100) <= 0 && cm.getPlayerCount(703020100) <= 0) {
                            cm.warpParty(703020100);
                            cm.getMap(703020100).resetFully();
                            cm.spawnMob(9600086, 615, 227);
                            cm.getPlayer().setBossLog("钻机");
                            //cm.喇叭(2,"『终极BOSS』：【" + cm.getChar().getName() + "】带领他的队伍悍不畏死的去钻机了");
                    } else {
                        cm.sendOk("已经有队伍在进行了,请换其他频道尝试。");
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
