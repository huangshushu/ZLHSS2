/* 定制：休彼德蔓
   功能：航海王副本
   qq  ：3409559169
*/


/* 副本基本值 */
var Sel, txt, em, 信息, ri
var status = -1

var xx ="#fMap/MapHelper/weather/WorldRecord2/0#";
var xx1 ="#fEtc/ChatEmoticon/expression/1/0#";
var wi1 = "#fUI/SoulUI.img/DungeonMinimap/BtMaxi/pressed/0#";//绿色圆加号
var ok = "#fUI/UIWindow6.img/limitOverEvent/sub/button/try/normal/0#";  //挑战  104*40
var ss = "#fUI/UIWindowPL.img/PieceReward_Clover/Tab/line#";//

/* 配置文件 */
var EvName = ["sea","sea_BT"]
/* 事件储存 */
var LogName = ["普通 航海王", "困难 航海王"]
/* 副本状态 */
var State = [true, true]
/* 开始地图 */
var starMap = 921174000
/* 等级限制 */
var MinLv = [230, 240]
var MaxLv = [275 ,275]
/* 挑战限制 */
var MaxNumber = [1, 2]

/* 人员限制 */
var MinPlayer = [2,3]
var MaxPlayer = [3,6]
/* 道具限制 */
var ItemLimit = [[4310242, 1],[4310027, 2]]//星缘纪念币
/* 副本等级 */
var Mob = 255
/* 破攻限制 */
var LimitBreak = [2*10000*10000, 10*10000*10000]

/* 副本奖励 */

var reward = [
              [2430471, 2435824, 2614005],//随机枫叶箱子,随机V卷,500W破功
			  [2430471, 2435824,4034983,4000463]////随机枫叶箱子,自选V卷,梦碎片,一组国庆纪念币
			  ]
/* 变量值调用说明 0 = 副本Name  1 = 检测开始地图 2 = 道具限制 3 = 破攻限制 */ 
var Basis = ["航海王", false, true, true]

function start() {
    var C_State = false
    if (Basis[1]) {
        if (cm.getMapId() != starMap) {
            status = 9
            txt = "#r\t\t\t\t" + xx + " " + Basis[0] + " " + xx + "#k#n\r\n\r\n\r\n";
            txt += "\t　#b你现在确认放弃当前副本 并从这里出去吗 ?\r\n"
        } else {
            C_State = true
        }
    } else {
        C_State = true
    }
    if (C_State) {
        txt = "#fn黑体##fs15##r\t\t\t" + xx + " " + Basis[0] + " " + xx + "#k#n\r\n\r\n";
		txt += "\t "+ss+ss+ss+"\r\n";
        txt += "#d\t\t 请选择你想挑战的副本难度#k#n\r\n\r\n";
		
        for (var i in EvName) {
            txt += "#b#L" + i + "#" + wi1 + " " + format(" ", 20, LogName[i].toString()) + "#r当前状态 : " + (State[i] ? "#g开启" : "#r关闭") + "#l#k\r\n";
        }
    }
    txt += " "
    cm.sendSimple(txt);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    if (status == -2 && selection == -1) { cm.dispose(); return; }
    switch (status) {
        case 0:
            Sel = selection
            em = cm.getEventManager(EvName[Sel])
            if (em == null) {
                cm.sendOk( "抱歉\r\n\r\n当前副本出错 请询问管理员")
                cm.dispose()
                return
            }
            信息 = em.getProperty("leader").equals("true")
		
			
            txt = "#fn黑体##fs15#\r\n";
			txt += "\t "+ss+ss+ss+"\r\n";
            txt += "#d\t" + wi1 + " 当前副本状态 : #b" + (State[Sel] ? "#g开启" : "#r已关闭") + "#k#n\r\n";
            txt += "#d\t" + wi1 + " 当前副本信息 : #b" + (信息 ? "#g空闲" : "#r满载") + "#k#n\r\n";
            txt += "#d\t" + wi1 + " 副本道具限制 : #b" + (Basis[2] ? "#r需要:#b#z" + ItemLimit[Sel][0] + "#×" + ItemLimit[Sel][1] + "" : "#g不限制") + "#k#n\r\n";
            txt += "#d\t" + wi1 + " 副本破攻限制 : #b" + (Basis[3] ? "#r要求:#b" + LimitBreak[Sel] : "#g不限制") + "#k#n\r\n";
            txt += "#d\t" + wi1 + " 副本人数限制 : #b[ " + format(" ", 3, MinPlayer[Sel].toString()) + " ] - [ " + format(" ", 3, MaxPlayer[Sel].toString()) + " ]#k#n\r\n"
            txt += "#d\t" + wi1 + " 副本次数限制 : #b[ " + format(" ", 3, MaxNumber[Sel].toString()) + " ] - [ #r" + format(" ", 3, cm.getPQLog(LogName[Sel]).toString()) + "#b ]#k#n\r\n"
			txt += "#r\t" + wi1 + " 副本奖励信息 : \r\n\t";
			for (var i=0; i<reward[Sel].length; i++) {
				 txt += " #i" + reward[Sel][i] + "# ";
			}
            txt += "\r\n\t\t\t #L1#"+ok+"#l\r\n#k"
            cm.sendSimple(txt);
            break;
        case 1:
            if (!State[Sel]) {
                cm.sendOk( "抱歉\r\n\r\n当前副本没有开启")
                cm.dispose()
                return
            }
            //if (!信息) {
            if (cm.getPlayerCount(865010004) != 0) {
                cm.sendOk( "抱歉\r\n\r\n当前副本已有玩家请变更频道进行")
                cm.dispose()
                return
            }

            if (Basis[3]) {//破功
                
                if (cm.getLimitBreak() < LimitBreak[Sel]) {
                    cm.sendOk( "抱歉\r\n\r\n当前副本有破功限制.\r\n\r\n破攻需达到 " + LimitBreak[Sel])
                    cm.dispose()
                    return
                }
            }
		
            /* 组队信息 */
            if (!cm.isLeader()) {
                cm.sendOk( "抱歉\r\n\r\n请让队长来跟我谈话")
                cm.dispose()
                return
           
            } else if (!cm.allMembersHere()) {
                cm.sendOk( "抱歉\r\n\r\n请将队伍内的玩家召集到当前位置后尝试")
                cm.dispose()
                return
            } else if (!cm.isAllPartyMembersAllowedLevel(MinLv[Sel], MaxLv[Sel])) {
                cm.sendOk( "抱歉\r\n\r\n参与必须 " + MinLv[Sel] + " - " + MaxLv[Sel] + " 级别内")
                cm.dispose()
                return
            } else if (!cm.isAllPartyMembersAllowedPQ(LogName[Sel], MaxNumber[Sel])) {
                cm.sendOk( "抱歉\r\n\r\n你的队员 : " + cm.getNotAllowedPQMemberName(LogName[Sel], MaxNumber[Sel]) + "\r\n\r\n已达到副本上限")
                cm.dispose();
                return
            }
            if (Basis[2]) {
                if (!cm.isAllPartyMembersHaveItem(ItemLimit[Sel][0], ItemLimit[Sel][1])) {//!cm.isAllPartyMembersHaveItem(4310027, 3)
					cm.sendNext("你的队员#r \"" + cm.getNotHaveItemMemberName(ItemLimit[Sel][0], ItemLimit[Sel][1]) + "\" #k缺少入门道具\r\n\r\n" + cm.getItemName(ItemLimit[Sel][0]) + "　▲　数量 " + ItemLimit[Sel][1]);
                    cm.dispose()
                    return
                }
            }
             var party = cm.getParty().getMembers();
                var mapId = cm.getMapId();
                var next = true;
                var levelValid = 0;
                var inMap = 0;

                var it = party.iterator();
                while (it.hasNext()) {
                    var cPlayer = it.next();
                    if (cPlayer.getLevel() >= MinLv[Sel] && cPlayer.getLevel() <= MaxLv[Sel]) {
                        levelValid += 1;
                    } else {
                        //cm.sendOk("组队成员 " + minPlayers + " 人以上 " + maxPlayers + "人 以下 所有成员等级 "+ minLevel +" 以上 "+ maxLevel +" 以下才可以入场。");
                        cm.dispose();
                        next = false;
                    }
                    if (cPlayer.getMapid() == mapId) {
                        inMap += 1;
                    }
                }
                if (party.size() > MaxPlayer[Sel] || inMap < MinPlayer[Sel]) {
                    next = false;
                }
                if (next) {
                    em = cm.getEventManager(EvName[Sel])
                    var prop = em.getProperty("state");
                        if (prop == null || prop.equals("0")) {
                            //cm.setPQLog(LogName[Sel]);
							//cm.gainMembersPQ(LogName[Sel], 1);
							cm.givePartyItems(ItemLimit[Sel][0], -ItemLimit[Sel][1]);
							cm.worldSpouseMessage(0x21,"[副本消息]: "+ cm.getChar().getName() +" 带领他的队伍一起去挑战" + LogName[Sel] + " 了!!! ");//颜色消息
                            em.startInstance(cm.getParty(), cm.getMap(), "+ moblevel +");

                        } else {
                            cm.sendSimple("已经有队伍在进行了,请换其他频道尝试。");
                        }
                        cm.dispose();
                    
                } else {
                    cm.sendOk(" 抱歉\r\n\r\n参与人员 " + MinPlayer[Sel] + " - " + MaxPlayer[Sel] + " 才可以入场。");
                    cm.dispose();
                }
                break;

        case 10:
            cm.warp(starMap, 0)
            cm.dispose();
            break;
    }

}


var format = function FormatString(c, length, content) {
    var str = "";
    var cs = "";
    if (content.length > length) {
        str = content;
    } else {
        for (var j = 0; j < length - content.getBytes("GB2312").length; j++) {
            cs = cs + c;
        }
    }
    str = content + cs;
    return str;
}


