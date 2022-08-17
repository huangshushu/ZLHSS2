/*  
 *  
 *  BOSS组队副本通用脚本
 *  
 */

//副本开关 开启、true 关闭、false
var open = true;
//配置文件名称
var PQname = ["BossLucid_EASY", "BossLucid_NORMAL", "BossLucid_HARD";
//记录次数名称
var PQLog = ["路西德[普通]", "路西德[困难]", "路西德[炼狱]"];
var PQLogName = "路西德";

var BossDiff = [0, 1, 2];
//开始的地图
var startmap = 450004000;
//等级限制
var minLevel = [150, 160, 170];
var maxLevel = [255, 255, 255];
//次数限制
var maxenter = 3;

var status = -1;
//限制人数
var minPlayers = 1;
var maxPlayers = 6;
//怪物最大等级设置
var moblevel = 255;
var chs;

//副本判断地图  判断有无人
var mapList = Array(
        450004150,
        450004550,
        450004500
        );


function start() {
    if (cm.getMapId() == startmap) {
        var text = "";
        for (var i = 0; i < PQname.length; i++) {
            text += "\r\n#b#L" + i + "#挑战 " + PQLog[i] + "#l#k";
        }
        cm.sendSimple("#e<Boss - 路西德>#n\r\n\r\n#b#h0# \n\#k挑战路西德你至少需要360星！\r\n\r\n每日总共可进行#r"+maxenter+"#k次哦！" + text);
    } else {
        cm.sendYesNo("#e<Boss - 路西德>#n\r\n\r\n你现在确定放弃任务,从这里出去?\r\n");
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
			if(selection == 100){
				var baoxiang = cm.sql_Select("SELECT itemid,num,probability,type FROM baoxiang WHERE mapid = ?", 450004500);
				var selStr = "#e<Boss - 路西德>#n\r\n#k\r\n#e";
				selStr += "\r\n#n#r当前位置:路西德 > 查看暴率#n \r\n";
				
				var bx = baoxiang.get(0).get("itemid").split(',');
				var bnum = baoxiang.get(0).get("num").split(',');

				selStr += "\r\n#r#n普通模式:\r\n"
				for(var i=0;i<bx.length;i++){
					if(bx[i] != ""){
						selStr += "#i"+bx[i]+"# x "+ bnum[i] + "、";
					}
				}
				selStr = selStr.substr(0,selStr.length-1);

				bx = baoxiang.get(1).get("itemid").split(',');
				bnum = baoxiang.get(1).get("num").split(',');

				selStr += "\r\n#r#n困难模式:\r\n"
				for(var i=0;i<bx.length;i++){
					if(bx[i] != ""){
						selStr += "#i"+bx[i]+"# x "+ bnum[i] + "、";
					}
				}
				selStr = selStr.substr(0,selStr.length-1);
				
				bx = baoxiang.get(2).get("itemid").split(',');
				bnum = baoxiang.get(2).get("num").split(',');

				selStr += "\r\n#r#n炼狱模式:\r\n"
				for(var i=0;i<bx.length;i++){
					if(bx[i] != ""){
						selStr += "#i"+bx[i]+"# x "+ bnum[i] + "、";
					}
				}
				selStr = selStr.substr(0,selStr.length-1);

				bx = baoxiang.get(3).get("itemid").split(',');
				bnum = baoxiang.get(3).get("num").split(',');

				selStr += "\r\n#r#n进阶模式:\r\n"
				for(var i=0;i<bx.length;i++){
					if(bx[i] != ""){
						selStr += "#i"+bx[i]+"# x "+ bnum[i] + "、";
					}
				}
				selStr = selStr.substr(0,selStr.length-1);

				bx = baoxiang.get(4).get("itemid").split(',');
				bnum = baoxiang.get(4).get("num").split(',');

				selStr += "\r\n#r#n混沌模式:\r\n"
				for(var i=0;i<bx.length;i++){
					if(bx[i] != ""){
						selStr += "#i"+bx[i]+"# x "+ bnum[i] + "、";
					}
				}
				selStr = selStr.substr(0,selStr.length-1);
				cm.sendOk(selStr);
				cm.dispose();
			}else{
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
				for(var i = 0;i<mapList.length;i++){
					if(cm.getPlayerCount(mapList[i])>0){
						mapState=1;
						break;
					}
				}
				//若要取消只有GM进入 请注释下面5排
				mapState=1;
				if(cm.getPlayer().isGM()){
					rwpz += "GM可以进入"
					cm.sendYesNo(rwpz);
				}else
				
				if(mapState == 0){
					rwpz += "           #b#h0# \n\#k#e#g当前副本空闲。是否现在就进入？#n"
					cm.sendYesNo(rwpz);
				}else {
					rwpz += "           #b \n\#k#e副本里有人啦,您无法进入!#n"
					cm.sendOk(rwpz);
					cm.dispose();
					return;
				}
			}

        } else if (status == 1) {
            if (cm.getParty() == null) { //判断组队
                cm.sendYesNo("#b你并没有组队，请创建组建一个队伍在来吧。");
            } else if (!cm.isLeader()) { // 判断组队队长
                cm.sendOk("#b请让你们的组队长和我对话。");
            } else if (!cm.isAllPartyMembersAllowedLevel(minLevel[chs], maxLevel[chs])) {
                cm.sendNext("#b组队成员等级 " + minLevel[chs] + " 以上 " + maxLevel[chs] + " 以下才可以入场。");
            } else if (!cm.isAllPartyMembersAllowedPQ(PQLogName, maxenter)) {
                cm.sendNext("#b你的队员#r#e \"" + cm.getNotAllowedPQMemberName(PQLogName, maxenter) + "\" #k#n次数已经达到上限了。");
            } else if (!cm.allMembersHere()) {
                cm.sendOk("#b你的组队部分成员不在当前地图,请召集他们过来后在尝试。"); //判断组队成员是否在一张地图..
            } else {
                var em = cm.getEventManager(PQname[chs]);
                if (em == null || open == false) {
                    cm.sendSimple("配置文件不存在,请联系管理员。");
                } else {
                    var prop = em.getProperty("state");
                    if (prop == null || prop.equals("0")) {
                        em.startInstance(cm.getParty(), cm.getMap(), 255);
                        cm.gainMembersPQ(PQLogName, 1);
						cm.resetPQLog("BOSSDIFF");
						cm.gainMembersPQ("BOSSDIFF", BossDiff[chs]);
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
