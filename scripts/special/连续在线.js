var tt = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
//连续在线分钟数
var condition = 800;
//奖励
var reward = [
	//连续天数，奖励物品id，奖励物品数量
	[1, 4000517, 100],
	[2, 4000517, 100],
	[3, 4000517, 100],
	[4, 4000517, 100],
	[5, 4000517, 100],
	[6, 4000517, 100],
	[7, 4000517, 100],
	[1, 4000517, 100]
];
var sel;
var status = -1;
var rmb = 0;
var text = "";
var time = 0;
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	if (mode == 1) {
		status++;
	} else {
		status--;
	}

	if (status == 0) {
		time = cm.getOnlineTime();
		text = "\t\t\t" + tt + " #e#r"+cm.getServerName()+"连续在线礼包中心#k#n " + tt + "\r\n\r\n";
		text += "#d#e今日在线时长： #r" + rmb + " #d分钟#k\r\n#e";
		text += "连续每日在线#r" + condition + "分钟#k，即可领取额外奖励哦"
		text += "#k";
		cm.sendSimple(text);
	} else if (status == 1) {
		days = getHypayLog2(cm.getPlayer().getId());
		if (days < 1) {
			cm.sendOk("你还不能领取任何连续在线的奖励!");
			cm.dispose();
			return;
		}
		text = "\t\t\t#e#r- 连续在线 " + days + " 天福利 -#k#n\r\n\r\n";
		for (var i = 0; i < reward.length; i++) {
			if (reward[i][0] == days) {
				text += "\t\t\t#i" + reward[i][1] + "# #t" + reward[i][1] + "# [" + reward[i][2] + "个]\r\n";
			}
		}
		cm.sendYesNo(text);
	} else if (status == 2) {
		if (getHypayLog(cm.getPlayer().getId()+"-连续在线福利-" + days) != 0) {
			cm.sendOk("#e#r\r\n\r\n\t\t这个礼包您已经领取过了");
			status = -1;
			//cm.dispose();
			return;
		}
		var rewardlist = new Array();
		for (var i = 0; i < reward.length; i++) {
			if (reward[i][0] == days) {
				rewardlist.push(new Array(reward[i][1], reward[i][2]));
			}
		}
		if (!cm.canHoldSlots(rewardlist.length)) {
			cm.sendOk("包裹空间不足，请确保包裹每个栏位有至少 " + (rewardlist.length+1) + " 格空间");
			cm.dispose();
			return;
		}
		for (var i = 0; i < rewardlist.length; i++) {
			if (rewardlist[i][0] == 2430865) {
				cm.gainItem(rewardlist[i][0], rewardlist[i][1], rewardlist[i][2]);
			} else {
				cm.gainItem(rewardlist[i][0], rewardlist[i][1]);
			}
		}
        insertPaylog(cm.getPlayer().getId()+"-连续在线福利-" + days, 1);
		cm.playerMessage(1, "领取成功");
		cm.dispose();
	}
}

Number.prototype.formatMoney = function(places, symbol, thousand, decimal) {
	places = !isNaN(places = Math.abs(places)) ? places : 2;
	symbol = symbol !== undefined ? symbol : "　";
	thousand = thousand || ",";
	decimal = decimal || ".";
	var number = this,
		negative = number < 0 ? "-" : "",
		i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
		j = (j = i.length) > 3 ? j % 3 : 0;
	return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
};
//当天
function getHypayLog(cid) {
	var cal = java.util.Calendar.getInstance();
	var starttime = "" + cal.get(java.util.Calendar.YEAR) + "-" + (cal.get(java.util.Calendar.MONTH)+1) + "-" + cal.get(java.util.Calendar.DATE);
	var endtime = starttime;
	return getRMB(cid, starttime, endtime);
}
//本周
function getHypayLog2(cid) {
	var cal = java.util.Calendar.getInstance();
	var i = 0;
	for (var j = 0; j < 7; j++) {
		cal.add(java.util.Calendar.DATE, -j);
		var starttime = "" + cal.get(java.util.Calendar.YEAR) + "-" + (cal.get(java.util.Calendar.MONTH)+1) + "-" + cal.get(java.util.Calendar.DATE);
		var endtime = starttime;
		var x = getRMB(cid, starttime, endtime);
		if (x >= condition) {
			++i;
		} else {
			break;
		}
		if (cal.get(java.util.Calendar.DAY_OF_WEEK) == 2) {
			break;
		}
	}
	return i;
}

function getRMB(cid, starttime, endtime) {
	var sql =  cm.sql_Select("select SUM(mi) mi from online_log where cid = ? and time >= ? and time < DATE_ADD(?, INTERVAL 1 DAY)", cid, starttime, endtime);
	if (sql.size() == 0) {
		return 0;
	} else {
		var rmb = sql.iterator().next().get("mi");
		if (rmb == null) {
			rmb = 0;
		}
		return rmb;
	}
}
function insertPaylog(cid, rmb) {
    cm.sql_Insert("insert into online_log (cid, mi, time) values (?,?,NOW())", cid, rmb);
}