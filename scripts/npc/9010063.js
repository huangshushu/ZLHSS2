/*
* 联系QQ : 2023995613 ( Hs、) 
* 支持各式脚本、开区策划、脚本优化
*/
/* 箱子归零时 在随便一个地方注解 更换奖品位置 再到数据库 右键清空 hs_lottery 数据表 */
var status = -1;
var txt;
var sel;
var 抽奖道具 = 4310235; var 抽奖消耗 = 1 ; /* 这里为抽奖所需消耗道具和数量 */
var 特奖 = 4031762;   /* 这里为抽到后广播直接条用 */
var 一等 = 4031763;
var 二等 = 4031795;
var 三等 = 4031943;
var 四等 = 4031944;
var 五等 = 4031946;
var 安慰 = 4031947;
var 奖品 = new Array(
/* 排列 道具id 数量 */
    Array(1, 安慰, 1),
	Array(2, 四等, 1),
	Array(3, 三等, 1),
	Array(4, 五等, 1),
	Array(5, 三等, 1),
	Array(6, 安慰, 1),
	Array(7, 四等, 1),
	Array(8, 四等, 1),
	Array(9, 安慰, 1),
	Array(10, 安慰, 1),
	Array(11, 一等, 1),
	Array(12, 安慰, 1),
	Array(13, 五等, 1),
	Array(14, 安慰, 1),
	Array(15, 五等, 1),
	Array(16, 五等, 1),
	Array(17, 特奖, 1),
	Array(18, 二等, 1),
	Array(19, 四等, 1),
	Array(20, 安慰, 1),
	Array(21, 安慰, 1),
	Array(22, 三等, 1),
	Array(23, 安慰, 1),
	Array(24, 三等, 1),
	Array(25, 二等, 1),
	Array(26, 安慰, 1),
	Array(27, 二等, 1),
	Array(28, 安慰, 1),
	Array(29, 五等, 1),
	Array(30, 二等, 1),
	Array(31, 安慰, 1),
	Array(32, 安慰, 1),
	Array(33, 三等, 1),
	Array(34, 安慰, 1),
	Array(35, 四等, 1),
	Array(36, 五等, 1),
	Array(37, 安慰, 1),
	Array(38, 五等, 1),
	Array(39, 一等, 1),
	Array(40, 安慰, 1),
	Array(41, 四等, 1),
	Array(42, 四等, 1),
	Array(43, 五等, 1),
	Array(44, 二等, 1),
	Array(45, 三等, 1),
	Array(46, 安慰, 1),
	Array(47, 一等, 1),
	Array(48, 安慰, 1)
);

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
        txt  = "#fs18#\r\n";
		txt += "           每次抽奖需消耗 #z"+抽奖道具+"# #v"+抽奖道具+"# x "+抽奖消耗+"\r\n\r\n"
		txt += "            特奖 #v"+特奖+"# 一等 #v"+一等+"# 二等 #v"+二等+"#\r\n\r\n"
		txt += "       三等 #v"+三等+"# 四等 #v"+四等+"# 五等 #v"+五等+"# 安慰 #v"+安慰+"#\r\n\r\n"
		txt += "   一共有 48 个箱子 , 抽完后请联系服主进行奖池更新\r\n"
        for (var i = 1; i <= 奖品.length; i++) {
        txt += "#fs14##L" + i + "#" + (查询箱子("奖池 [ " + 奖品[i - 1][0] + " ]") > 0  ? " #v"+奖品[i-1][1]+"#" : " #v2433852#") + "#b";
        if (i%8==0) {
        txt += "\r\n";
         }
        }
        txt += "\r\n";
        cm.sendSimpleN(txt, 716,9310498);
    } else if (status == 1) {
		sel = selection;
		if (!cm.haveItem(抽奖道具,抽奖消耗)){
            cm.sendOk("#fs14##b抽奖需要消耗 #z"+抽奖道具+"# #v"+抽奖道具+"# x "+抽奖消耗+"");
            cm.dispose();
            return;
        }
        if (查询箱子("奖池 [ " + 奖品[sel - 1][0] + " ]") >= 1) {
            cm.playerMessage(1, "\r\n这个奖品已经被抽走了哦...");
            cm.dispose();
            return;
        }
        var rewardlist = new Array();
        for (var i = 0; i < 奖品.length; i++) {
            if (奖品[i][0] == sel) {
                rewardlist.push(new Array(奖品[i][1], 奖品[i][2]));
            }
        }
        if (!cm.canHoldSlots(rewardlist.length)) {
            cm.playerMessage(1, "\r\n请确认你是否有 " + rewardlist.length + " 格栏位");
            cm.dispose();
            return;
        }
        for (var i = 0; i < 奖品.length; i++) {
            if (奖品[i][0] == sel) {
                cm.gainItem(奖品[i][1], 奖品[i][2]);
				if(奖品[i][1]==特奖){
				cm.worldSpouseMessage(0x10, "[ 国庆福袋 ] : "+ cm.getChar().getName() +" 抽到了特等奖 "+cm.getItemName(奖品[i][1])+""); //全服公告
				cm.worldSpouseMessage(0x10, "[ 国庆福袋 ] : "+ cm.getChar().getName() +" 抽到了特等奖 "+cm.getItemName(奖品[i][1])+""); //全服公告
				cm.worldSpouseMessage(0x10, "[ 国庆福袋 ] : "+ cm.getChar().getName() +" 抽到了特等奖 "+cm.getItemName(奖品[i][1])+""); //全服公告
				cm.worldSpouseMessage(0x10, "[ 国庆福袋 ] : "+ cm.getChar().getName() +" 抽到了特等奖 "+cm.getItemName(奖品[i][1])+""); //全服公告
				cm.worldSpouseMessage(0x10, "[ 国庆福袋 ] : "+ cm.getChar().getName() +" 抽到了特等奖 "+cm.getItemName(奖品[i][1])+""); //全服公告
				} else if(奖品[i][1]==一等){
				cm.worldSpouseMessage(0x10, "[ 国庆福袋 ] : "+ cm.getChar().getName() +" 抽到了一等奖 "+cm.getItemName(奖品[i][1])+""); //全服公告
				cm.worldSpouseMessage(0x10, "[ 国庆福袋 ] : "+ cm.getChar().getName() +" 抽到了一等奖 "+cm.getItemName(奖品[i][1])+""); //全服公告
				cm.worldSpouseMessage(0x10, "[ 国庆福袋 ] : "+ cm.getChar().getName() +" 抽到了一等奖 "+cm.getItemName(奖品[i][1])+""); //全服公告
				} else if(奖品[i][1]==二等){
				cm.worldSpouseMessage(0x10, "[ 国庆福袋 ] : "+ cm.getChar().getName() +" 抽到了二等奖 "+cm.getItemName(奖品[i][1])+""); //全服公告
				cm.worldSpouseMessage(0x10, "[ 国庆福袋 ] : "+ cm.getChar().getName() +" 抽到了二等奖 "+cm.getItemName(奖品[i][1])+""); //全服公告
				cm.worldSpouseMessage(0x10, "[ 国庆福袋 ] : "+ cm.getChar().getName() +" 抽到了二等奖 "+cm.getItemName(奖品[i][1])+""); //全服公告
		
				} else if(奖品[i][1]==三等){
				cm.worldSpouseMessage(0x10, "[ 国庆福袋 ] : "+ cm.getChar().getName() +" 抽到了三等奖 "+cm.getItemName(奖品[i][1])+""); //全服公告
				cm.worldSpouseMessage(0x10, "[ 国庆福袋 ] : "+ cm.getChar().getName() +" 抽到了三等奖 "+cm.getItemName(奖品[i][1])+""); //全服公告
				cm.worldSpouseMessage(0x10, "[ 国庆福袋 ] : "+ cm.getChar().getName() +" 抽到了三等奖 "+cm.getItemName(奖品[i][1])+""); //全服公告
	
				} else if(奖品[i][1]==四等){
				cm.worldSpouseMessage(0x10, "[ 国庆福袋 ] : "+ cm.getChar().getName() +" 抽到了四等奖 "+cm.getItemName(奖品[i][1])+""); //全服公告
				cm.worldSpouseMessage(0x10, "[ 国庆福袋 ] : "+ cm.getChar().getName() +" 抽到了四等奖 "+cm.getItemName(奖品[i][1])+""); //全服公告
				cm.worldSpouseMessage(0x10, "[ 国庆福袋 ] : "+ cm.getChar().getName() +" 抽到了四等奖 "+cm.getItemName(奖品[i][1])+""); //全服公告

				} else if(奖品[i][1]==五等){
				cm.worldSpouseMessage(0x10, "[ 国庆福袋 ] : "+ cm.getChar().getName() +" 抽到了五等奖 "+cm.getItemName(奖品[i][1])+""); //全服公告
				cm.worldSpouseMessage(0x10, "[ 国庆福袋 ] : "+ cm.getChar().getName() +" 抽到了五等奖 "+cm.getItemName(奖品[i][1])+""); //全服公告
				cm.worldSpouseMessage(0x10, "[ 国庆福袋 ] : "+ cm.getChar().getName() +" 抽到了五等奖 "+cm.getItemName(奖品[i][1])+""); //全服公告
				} else {
				cm.worldSpouseMessage(0x10, "[ 国庆福袋 ] : "+ cm.getChar().getName() +" 抽到了安慰奖 "+cm.getItemName(奖品[i][1])+""); //全服公告
				cm.worldSpouseMessage(0x10, "[ 国庆福袋 ] : "+ cm.getChar().getName() +" 抽到了安慰奖 "+cm.getItemName(奖品[i][1])+""); //全服公告
				cm.worldSpouseMessage(0x10, "[ 国庆福袋 ] : "+ cm.getChar().getName() +" 抽到了安慰奖 "+cm.getItemName(奖品[i][1])+""); //全服公告
				}
            }
        }
		cm.gainItem(抽奖道具,-抽奖消耗)
        写入数据(1, "奖池 [ " + 奖品[sel - 1][0] + " ]");
        cm.dispose();
    }
}


function 查询箱子(event) {
    i = 0
    var sql = "SELECT * FROM `hs_lottery` WHERE `eventid` = ?;";
    var result = cm.sql_Select(sql, event);
    var count = 0;
    if (result.length > 0) {
        i++;
    }
    if (i == 0) {
        var insert = cm.sql_Insert("INSERT INTO `hs_lottery` (`eventid`, `count`) VALUES ('" + event + "', '0');");
    } else {
        count = result.get(0).get('count');
    }
    return count;
}
function 写入数据(count, id) {
    cm.sql_Update("UPDATE hs_lottery set count = count+?, time = CURRENT_TIMESTAMP() where eventid= ? ;", count, id);
}