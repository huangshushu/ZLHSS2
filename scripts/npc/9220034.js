/*  
 *  
 *  BOSS组队副本通用脚本
 *  
 */

var open = true;//副本开關 开启、true 關闭、false

//var PQLog = ["BossFairyQueen"];//配置文件名称
var startmap = 510100200;//开始的地圖
var PQLog = ["三头犬"];//记录次數名称
var status = -1;
var minPartySize = 1;//限制人數
var maxPartySize = 6;//限制人數
var cishuxianzhi = [3];//次數限制
var minLevel = [150];//等级限制
var maxLevel = [255];//等级限制
var moblevel = 255;//怪物最大等级设置
var chs;


function start() {
    if (cm.getMapId() == startmap) {
        var text = "";
        for (var i = 0; i < PQLog.length; i++) {
            text += "\r\n#b#L" + i + "#挑战" + PQLog[i] + "#l#k         ";
        }
        cm.sendSimple("《Boss - " + PQLog[0] + "》#n\r\n\r\n #b#h0# \n\#k你現在想和队友一起挑战这個BOSS副本嗎?\r\n" + text);
    } else {
        cm.sendYesNo("《Boss - " + PQLog[0] + "》#n\r\n你要离开这里了吗?\r\n");
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
            rwpz += "#d       当前已挑战三头犬[#e#g"+cm.getBossLog('三头犬') + "#b#n#k/#e#r3#n#k]次\r\n";
            rwpz += "\r\n#b推荐人數：" + minPartySize + " - " + maxPartySize + "#n    推荐等级：" + minLevel[selection] + " - " + maxLevel[selection] + "#n#k";
            rwpz += "\r\n当前已進行：#r#e" +cm.getBossLog('三头犬')  + " #n#k次\r\n";
            //rwpz += "\r\n剩餘挑戰次數：#r#e" + cm.getBossLog('三头犬') + "#n#k 次#n#k\r\n\r\n";
            cm.sendYesNo(rwpz + "[#b#h0##n#k] #n#k\n\#k是否現在就進入？#n#k");
        } else if (status == 1) {
            if (cm.getParty() == null) { //判断组队
                cm.sendYesNo("你并沒有组队，請创建组建一個队伍在來吧。");
            } else if (!cm.isLeader()) { // 判断组队隊長
                cm.sendOk("請讓你們的隊長和我對話。");
            } else if ( cm.getBossLog("三头犬") >= 3) {
                cm.sendOk("您好,你当天挑战次数已用完"+ cishuxianzhi +"次！");
                cm.dispose();
                return;
            } else {
            var party = cm.getParty().getMembers();
            var inMap = cm.partyMembersInMap();
            var levelValid = 0;
            for (var i = 0; i < party.size(); i++) {
            if(Packages.client.MapleCharacter.getOnlineCharacterById(party.get(i).getId()).getBossLog("三头犬") >= cishuxianzhi){
            cm.sendOk("您好,你的队员每天只能挑战"+ cishuxianzhi +"次！");
            cm.dispose();
            return; 
        }
        
                
                if (party.get(i).getLevel() >= minLevel && party.get(i).getLevel() <= maxLevel)
                    levelValid++;
            }
            if (inMap < minPartySize || inMap > maxPartySize) {
                cm.sendOk("你的队伍人数不足"+minPartySize+"人.请把你的队伍人员召集到当前地图再进入副本.");
                cm.dispose();
                return;
            } else if (levelValid != inMap) {
                cm.sendOk("请确保你的队伍里所有人员都在本地图，且最小等级在 "+minLevel+" 和 "+maxLevel+"之间.");
                cm.dispose();
                return;
            }  else {
                        if (cm.getPlayerCount(510103700) <= 0 && cm.getPlayerCount(510103700) <= 0 && cm.getPlayerCount(510103700) <= 0 && cm.getPlayerCount(510103700) <= 0 && cm.getPlayerCount(510103700) <= 0) {
                            cm.sendOk("即将传送");
                            cm.warpParty(510103700);
                            cm.getMap(510103700).resetFully();
                           // cm.spawnMob(8220012, 383, 335);
                            cm.getPlayer().setBossLog("三头犬");
                            //cm.serverNotice("『终极BOSS』：【" + cm.getChar().getName() + "】带领他的队伍悍不畏死的去三头犬了");
                    } else {
                        cm.sendOk("已經有队伍在進行了,請換其他频道尝试。");
                    }
                }
            cm.dispose();
        } 
    } else {
        if (status == 0) {
            cm.warp(startmap,0);
        }
        cm.sendOk("如果你想好了可以再来找我。");
        cm.dispose();
    }
}
}