

﻿var status = -1;
var ok = "#fUI/UIWindow.img/NewYearsCard/BtClose/normal/0#";  //红白确认  48*22

var chosenRed = {};
var chosenBlue = {};
var redBall = "";
var blueBall = "";
var count = 0;

var TOTAL_RED = 35;//设置红球个数
var TOTAL_BLUE = 12;//设置蓝球个数

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case 0://上一步
            status--;
            break;
        case 1://下一步
            status++;
            break;
    }

    switch (status) {
        case 0:
            var cal = java.util.Calendar.getInstance();
            var min = cal.get(java.util.Calendar.MINUTE);
            if (min >= 00 && min < 50) {
                askChosenBall();
            } else {
                cm.sendOk("当前已经超过出售时间范围，将无法进行购买，请注意出售时间！\r\n\r\n#r注意：开奖为每小时55分。彩票出售时间为每小时0分到50分！请注意出售时间！");
            }
            break;
        case 1: //
            if (selection == 999) {
                clearChosen();
                askChosenBall();
            } else if (selection > 0) {
                if (selection > 100) {
                    //选中的蓝球
                    var blueC = selection - 100;
                    var temp = chosenBlue[blueC];
                    if (temp == null) {
                        //如果没有选择过，就选中
                        chosenBlue[blueC] = blueC;
                    } else {
                        //如果是已经选择过，就取消选中
                        chosenBlue[blueC] = null;
                    }
                } else {
                    //选中红球
                    var temp = chosenRed[selection];
                    if (temp == null) {
                        //如果没有选择过，就选中
                        chosenRed[selection] = selection;
                    } else {
                        //如果是已经选择过，就取消选中
                        chosenRed[selection] = null;
                    }
                }
                askChosenBall();
            } else if (selection == 0) {
                //开始选择蓝色球
                cm.sendSimple("#b您当前选择的号码为：\r\n\r\n#e" + getMyChosen() + "\r\n#n#b需要花费#e#r" + (200 * count) + "点卷#b#n，点击确定购买\r\n\t\t\t#L1#"+ok+"#l\r\n");
            } else {
                cm.dispose();
            }
            break;
        case 2:
            if (selection == 1) {//确认购买此彩票
                var cal = java.util.Calendar.getInstance();
                var min = cal.get(java.util.Calendar.MINUTE);
                if (min >= 00 && min < 50) {//进行时间判断
                    if (cm.getPlayer().getCSPoints(1) >= 200 * count) {//判断是否有足够的点卷
                        //cm.modifyCSPoints(1, -(200 * count));
						cm.gainNX(1,-(200 * count));
                       // writeData();//记录彩票到数据库
						writeData(cm.getPlayer().getId(), getCurentTime(),redBall,blueBall)
                        cm.sendOk("恭喜你购买成功！");
                    } else {
                        cm.sendOk("啊！你没有足够的点卷呀，卖不了这个彩票！");
                    }
                } else {
                    cm.sendOk("当前已经超过出售时间范围，将无法进行购买，请注意出售时间！\r\n\r\n#e#r注意：开奖为每小时55分。怪物乐透出售时间为每小时0分到50分！请注意出售时间！");
                }
            } else {
                cm.sendSimple("那么你想做什么呢？\r\n#b#L0#重新选择号码#l\r\n#L1#不想买了#l");
            }
            break;
        case 3:
            if (selection == 0) {//重新选择号码
                clearChosen();
                askChosenBall();
            } else {
                cm.dispose();
            }
            break;
        default:
            cm.dispose();
            break;
    }
}

function clearChosen() {
    //重新选号码
    count = 0;
    redBall = "";
    blueBall = "";
    for (var i = 1; i <= TOTAL_RED; i++) {
        chosenRed[i] = null;
    }
    for (var i = 1; i <= TOTAL_BLUE; i++) {
        chosenBlue[i] = null;
    }
}

function getMyChosen() {
    //获取已选的号码
    var text = "#r红球：\r\n";
    var rCount = 0;
    var bCount = 0;
    for (var i = 1; i <= TOTAL_RED; i++) {
        var temp = chosenRed[i];
        if (temp != null) {
            var numb = String(i < 10 ? "0" + i : i);
            rCount++;
            text += "#r(" + numb + ") ";
            redBall += numb + ",";
            if ((rCount % 6) == 0) {
                text += "\r\n";
            }
        }
    }
    text += "\r\n#b蓝球：\r\n";
    for (var i = 1; i <= TOTAL_BLUE; i++) {
        var temp = chosenBlue[i];
        if (temp != null) {
            var numb = String(i < 10 ? "0" + i : i);
            bCount++
            text += "#b(" + numb + ") ";
            blueBall += numb + ",";
            if ((bCount % 6) == 0) {
                text += "\r\n";
            }
        }
    }
    text += "\r\n";
    count = getCombination(rCount, 5) * getCombination(bCount, 2);
    return text;
}


function askChosenBall() {
    status = 0;
    var text = "#e#r红球：#n\r\n";
    var selR = 0;
    var selB = 0;
    for (var i = 1; i <= TOTAL_RED; i++) {
        var temp = chosenRed[i];
        if (temp != null) {
            selR++;
            text += "#g#L" + i + "#(" + (i < 10 ? "0" + i : i) + ")#l";
        } else {
            text += "#r#L" + i + "#(" + (i < 10 ? "0" + i : i) + ")#l";
        }
        if ((i % 7) == 0) {
            text += "\r\n";
        }
    }
    text += "\r\n#e#b蓝球：#n\r\n";
    for (var i = 1; i <= TOTAL_BLUE; i++) {
        var temp = chosenBlue[i];
        if (temp != null) {
            selB++;
            text += "#g#L" + (100 + i) + "#(" + (i < 10 ? "0" + i : i) + ")#l";
        } else {
            text += "#b#L" + (100 + i) + "#(" + (i < 10 ? "0" + i : i) + ")#l";
        }
        if ((i % 6) == 0) {
            text += "\r\n";
        }
    }

    if (selR >= 5 && selB >= 2) {
        text += "\r\n#b#L999#重新选择#l\t\t\t#L0#选好了#l";
    } else {
        text += "\r\n#b#L999#重新选择#l";
    }
    cm.askMenu(text);
}


function getCombination(n, m) {
    var ab = 1;
    for (var i = 1; i <= n; i++) {
        ab *= i;
    }
    var ac = 1;
    for (var i = 1; i <= (n - m); i++) {
        ac *= i;
    }
    var ad = 1;
    for (var i = 1; i <= m; i++) {
        ad *= i;
    }
    return ab / (ad * ac);
}

/*function writeData() {
    var sql = "INSERT INTO `zcustom_lottery`(`characters_id`, `number`, `redball`, `blueball`) VALUES(?, ?, ? ,?)";
    redBall = redBall.substring(0, redBall.length - 1);
    blueBall = blueBall.substring(0, blueBall.length - 1);
    cm.customSqlInsert(sql, cm.getPlayer().getId(), getCurentTime(), redBall, blueBall);
}*/
function writeData(charId, number,redball,blueball) {
	var db = cm.getConnection();
	var sql = "INSERT INTO zcustom_lottery VALUES(?, ?, ? ,?)";
	var pstmt = db.prepareStatement(sql);
	pstmt.setInt(1, characters_id);
	pstmt.setInt(2, number);
	pstmt.setInt(3, redball);
	pstmt.setInt(4, blueball);
	var flag = pstmt.executeUpdate();
	pstmt.close();
	return flag;
}
function getCurentTime() {
    var now = new Date();

    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日
    var hh = now.getHours();

    var time = year;

    if (month < 10) {
        time += "0";
    }
    time += month;

    if (day < 10) {
        time += "0";
    }
    time += day;
    if (hh < 10) {
        time += "0";
    }
    time += hh;
    return(time);
}