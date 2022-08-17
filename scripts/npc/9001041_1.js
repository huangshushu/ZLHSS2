var tt = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
// 每个阶段礼包所需的充值数
var condition = new Array(100, 200, 300, 400, 500, 600, 700, 800, 900);
// 礼包内容
var reward = new Array(
// 100次
Array(1, 4034999, 20),      //黑色羽毛
Array(1, 4001006, 20),      //火焰羽毛
Array(1, 4310224, 20),      //组队密友纪念币


// 200
Array(2, 4034999, 40),      //黑色羽毛
Array(2, 4001006, 40),      //火焰羽毛
Array(2, 4310224, 50),      //组队密友纪念币


// 300 
Array(3, 4034999, 60),      //黑色羽毛
Array(3, 4001006, 60),      //火焰羽毛
Array(3, 4310224, 80),      //组队密友纪念币


// 400
Array(4, 4034999, 80),      //黑色羽毛
Array(4, 4001006, 80),      //火焰羽毛
Array(4, 4310224, 120),      //组队密友纪念币


// 500
Array(5, 4034999, 100),      //黑色羽毛
Array(5, 4001006, 100),      //火焰羽毛
Array(5, 4310224, 150),      //组队密友纪念币


// 600
Array(6, 4034999, 130),      //黑色羽毛
Array(6, 4001006, 130),      //火焰羽毛
Array(6, 4310224, 200),      //组队密友纪念币


// 700
Array(7, 4034999, 180),      //黑色羽毛
Array(7, 4001006, 180),      //火焰羽毛
Array(7, 4310224, 250),      //组队密友纪念币


//800
Array(8, 4034999, 220),      //黑色羽毛
Array(8, 4001006, 220),      //火焰羽毛
Array(8, 4310224, 320),      //组队密友纪念币


// 900 
Array(9, 4034999, 260),      //黑色羽毛
Array(9, 4001006, 260),      //火焰羽毛
Array(9, 4310224, 400)      //组队密友纪念币


        );

var sel;
var status = -1;
var text;
var ljname;
var curlevel = -1;
var revenue;
function start() {
    revenue = cm.getHyPay(3);
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

        text = "\t\t\t" + tt + " #e#r通关次数累积礼包#k#n " + tt + "\r\n\r\n";
		//text = "\t\t\t" + tt + " #e#r万元赞助请联系群主#k#n " + tt + "\r\n\r\n";
        text += "#d#e当前通关次数： #r" + cm.getBossLog("组队任务点数",1) + " #d次#k\r\n#e";
        for (var i = 1; i <= condition.length; i++) {
            if (cm.getEventCount("组队任务点数_礼包" + i, 1) == 1) {
                text += "#d#L" + i + "#" + tt + " " + condition[i - 1] + "次通关积分[#r已完成#d]#l\r\n";
                curlevel = curlevel == -1 ? i : curlevel;
            } else {
                text += "#d#L" + i + "#" + tt + " " + condition[i - 1] + "次通关积分[未完成]#l\r\n";
            }
        }
        text += "#k";
        cm.sendSimple(text);
    } else if (status == 1) {
        sel = selection;
        text = "\t\t\t#e#r- 累计通关" + condition[selection - 1] + "次奖励 -#k#n\r\n\r\n";
        for (var i = 0; i < reward.length; i++) {
            if (reward[i][0] == selection) {
                text += "\t\t\t#i" + reward[i][1] + "# #z" + reward[i][1] + "#[" + reward[i][2] + "个]\r\n";
            }
        }
        cm.sendYesNo(text);
    } else if (status == 2) {
        if (cm.getEventCount("组队任务点数_礼包" + sel, 1) == 1) {
            cm.sendOk("#e#r\r\n\r\n\t\t这个礼包您已经领取过了");
            status = -1;
            //cm.dispose();
            return;
        }
        if (cm.getBossLog("组队任务点数",1) < condition[sel - 1]) {
            cm.playerMessage(1, "通关次数未达标！");
            cm.dispose();
            return;
        }

        var rewardlist = new Array();
        for (var i = 0; i < reward.length; i++) {
            if (reward[i][0] == sel) {
                if (reward[i][3] == null)
                    reward[i][3] = -1;
                rewardlist.push(new Array(reward[i][1], reward[i][2], reward[i][3]));
            }
        }
        if (!cm.canHoldSlots(rewardlist.length)) {
            cm.sendOk("包裹空间不足，请确保包裹每个栏位有至少 " + rewardlist.length + " 格空间");
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
        cm.setEventCount("组队任务点数_礼包" + sel, 1);
        cm.playerMessage(1, "领取成功");
		cm.getMap().startMapEffect("≡通关累积≡: 恭喜玩家 "+cm.getChar().getName()+" 领取了累计通关次数 " + condition[sel - 1] + " 次的福利礼包！", 5121027);
        cm.dispose();
    }
}

Number.prototype.formatMoney = function (places, symbol, thousand, decimal) {
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

function getTotalRMB() {
    var acc = cm.getAccountName();
    var ret = cm.sql_Select("SELECT * FROM paylog WHERE account = ?", acc);
    var total = 0;
    for (var key in ret) {
        total += parseInt(ret[key].get("rmb"));
    }
    return total;
}

