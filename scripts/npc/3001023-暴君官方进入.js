/*  
 *  
 *  BOSS组队副本通用脚本
 *  
 */

//副本开关 开启、true 关闭、false
var open = true;
//配置文件名称
var PQname = ["BossMagnus_EASY", "BossMagnus_NORMAL", "BossMagnus_HARD"];
//记录次数名称
var PQLog = ["麦格纳斯[普通]", "麦格纳斯[困难]", "麦格纳斯[炼狱]"];
var PQLogName = "麦格纳斯";

var BossDiff = [0, 1, 2];
//开始的地图
var startmap = 401053002;
//等级限制
var minLevel = [230, 230, 240];
var maxLevel = [255, 255, 255];
//次数限制
var maxenter = 3;
var maxenter1 = 3;

var status = -1;
//限制人数
var minPlayers = 1;
var maxPlayers = 6;
//怪物最大等级设置
var moblevel = 255;
var chs;
//副本判断地图  判断有无人
var mapList = Array(
        401060200,
		401060200
        );


function start() {
    if (cm.getMapId() == startmap) {
        var text = "";
        for (var i = 0; i < PQname.length; i++) {
            text += "\r\n#b#L" + i + "#挑战 " + PQLog[i] + "#l#k";
        }
        cm.sendSimple("#e<Boss - 麦格纳斯>#n\r\n\r\n#b#h0# \n\#k你想和队员们一起努力，完成任务吗？\r\n#r注意：入场需要消耗#i4310019# x 1#k.#k\r\n\r\n每日总共可进行#r"+maxenter+"#k次哦！" + text);
    } else {
        cm.sendYesNo("#e<Boss - 麦格纳斯>#n\r\n\r\n你现在确定放弃任务,从这里出去?\r\n");
    }
}
function action(mode, type, selection) {

    if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    if (cm.getMapId() == startmap || cm.getMapId() == 401053002) {
        if (status == 0) {
            var em = cm.getEventManager(PQname[selection]);
            if (em == null || open == false) {
                cm.sendOk("配置文件不存在,请联系管理员。");
                cm.dispose();
                return;
            }
            chs = selection;
            var prop = em.getProperty("state");
            var rwpz = "#e<Boss - " + PQLog[selection] + ">#n\r\n#k\r\n#e";
            rwpz += "\r\n#e推荐人数：" + minPlayers + " - " + maxPlayers + "#n#e    推荐等级：" + minLevel[selection] + " - " + maxLevel[selection] + "#n";
            rwpz += "\r\n当前已进行：#r#e" + cm.getPQLog(PQLogName) + "#n#k 次";
            rwpz += "    剩余挑战次数：#r#e" + (maxenter - cm.getPQLog(PQLogName)) + "#n#k 次#n#k\r\n\r\n";
			var mapState = 0;//用于判断地图中有无人
			for(var i = 0; i<mapList.length ; i++){
				if(cm.getPlayerCount(mapList[i])>0){
					mapState=1;
					break;
				}
			}
				//若要取消只有GM进入 请注释下面5排
				/*mapState=1;
				if(cm.getPlayer().isGM()){
					rwpz += "GM可以进入"
					cm.sendYesNo(rwpz);
				}else*/
				
			if(mapState == 0){
				rwpz += "           #b#h0# \n\#k#e#g当前副本空闲。是否现在就进入？#n"
				cm.sendYesNo(rwpz);
			}else {
				rwpz += "           #b \n\#k#e#r副本里有人啦,您无法进入!#n"
				cm.sendOk(rwpz);
                cm.dispose();
                return;
			}               
			} else if (status == 1) {
            if (cm.getParty() == null) { //判断组队
                cm.sendYesNo("#b你并没有组队，请创建组建一个队伍在来吧。");
            } else if (!cm.isLeader()) { // 判断组队队长
                cm.sendOk("#b请让你们的组队长和我对话。");
            }else if (!cm.isAllPartyMembersHaveItem(4310019, 1)) {
                cm.sendNext("你的队员#r#e \"" + cm.getNotHaveItemMemberName(4310019, 1) + "\" #k#n没有#i4310019##t4310019#,请确认!");
            } else if (!cm.isAllPartyMembersAllowedLevel(minLevel[chs], maxLevel[chs])) {
                cm.sendNext("#b组队成员等级 " + minLevel[chs] + " 以上 " + maxLevel[chs] + " 以下才可以入场。");
            } else if (!cm.isAllPartyMembersAllowedPQ(PQLogName, maxenter)) {
                cm.sendNext("#b你的队员#r#e \"" + cm.getNotAllowedPQMemberName(PQLogName, maxenter1) + "\" #k#n次数已经达到上限了。");
            } else if (!cm.allMembersHere()) {
                cm.sendOk("#b你的组队部分成员不在当前地图,请召集他们过来后在尝试。"); //判断组队成员是否在一张地图..
            } else {
                var em = cm.getEventManager(PQname[chs]);
                if (em == null || open == false) {
                    cm.sendSimple("配置文件不存在,请联系管理员。");
                } else {
                    var prop = em.getProperty("state");
                    if (prop == null || prop.equals("0")) {
						cm.givePartyItems(4310019,-1);
						var size = cm.getPlayer().getParty().getMembers();
						for(var i = 0;i < size.size();i++){
							var memberId = size[i].getId();	
							cm.sql_Update("update bxlog set ids = '' where characterid=?", memberId);
							cm.sql_Update("update pqlog set count = '"+ BossDiff[chs]+"' where characterid = '"+memberId+"'  and pqname = 'BOSSDIFF'");
						}
						
                        em.startInstance(cm.getParty(), cm.getMap(), 255);
                        cm.gainMembersPQ(PQLogName, 1);

                    } else {
                        cm.sendOk("已经有队伍在进行了,请换其他频道尝试。");
                    }
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


/*function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (status == 1 && mode == 0) {
            cm.sendNext("？？？？");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("#e<Boss - 麦格纳斯>#n\r\n\r\n#b#h0# \n\#k你想进入哪里?\r\n#b#L0#暴君模拟战斗[梦幻]#l#k\r\n#b#L1#赫里希安最上层入口#l#k");
        } else if (status == 1) {
            if(selection ==0){
                cm.warp(401060399, 0);
            }else{
                cm.warp(401060000, 0);
            }
            cm.dispose();
        }
    }
}
*/