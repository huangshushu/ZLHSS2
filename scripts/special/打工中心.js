var status = 0;
var bossid = -1;
var num = 0;
var times = 12;
var index1 = -1;
var index2 = -1;
var itemlist=[
    //攻击，装备id
	[81 ,1322017],
	[82 ,1432004],
	[92,1432006],
	[97 ,1432007],
	[105 ,1432010],
	[109 ,1432011],
	[115 ,1432030],
	[82 ,1442005],
	[92 ,1442010],
	[99 ,1442008],
	[105 ,1442019],
	[109 ,1442020],
	[113 ,1442044],
	[92 ,1412003],
	[95 ,1412007],
	[99 ,1412008],
	[105 ,1412009],
	[109 ,1412010],
	[112 ,1412021],
	[112 ,1422027],
	[92 ,1422009],
	[99 ,1422010],
	[105 ,1422012],
	[109 ,1422013],
	[82 ,1402003],
	[92 ,1402011],
	[97 ,1402012],
	[102 ,1402004],
	[102 ,1402015],
	[107 ,1402005],
	[107 ,1402016],
	[112 ,1402035],
	[79 ,1302010],
	[95 ,1302012],
	[100 ,1302018],
	[105 ,1302023],
	[110 ,1302056],
	[100 ,1312011],
	[105 ,1312015],
	[110 ,1312030],
	[85 ,1372014],
	[95 ,1372015],
	[115 ,1372009],
	[125 ,1372010],
	[82 ,1382006],
	[92 ,1382007],
	[102 ,1382010],
	[112 ,1382008],
	[122 ,1382035],
	[77 ,1452008],
	[87 ,1452004],
	[92 ,1452009],
	[102,1452017],
	[107 ,1452020],
	[107 ,1452021],
	[107 ,1442010],
	[80 ,1462007],
	[90 ,1462008],
	[95 ,1462009],
	[105 ,1462018],
	[110 ,1462015],
	[110 ,1462016],
	[110 ,1462017],
	[74 ,1332003],
	[77 ,1332016],
	[84 ,1332015],
	[87 ,1332017],
	[89 ,1332018],
	[92 ,1332019],
	[90 ,1332027],
	[102 ,1332026],
	[105 ,1332052],
	[42 ,1472022],
	[46 ,1472027],
	[46 ,1472028],
	[46 ,1472158],
	[46 ,1472029],
	[50 ,1472031],
	[54 ,1472033],
	[58 ,1472053],
	[70 ,1482008],
	[74 ,1482009],
	[78 ,1482010],
	[82 ,1482011],
	[86 ,1482012],
	[61 ,1492007],
	[70 ,1492008],
	[74 ,1492009],
	[78 ,1492010],
	[86 ,1492012],
    [100,1322005]
]
//限制等级
var level = 50;
function start() {
	/*if (!cm.getPlayer().isGM()) {
		cm.sendOk("修复中");
		cm.dispose();
        return;
	}*/
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            var strlen = "#b欢迎来到跑商玩法#k\r\n";
            strlen += "#r玩法详情： #b每次您都会接收到一个任务，您需要将我需要的材料拿来，满足我的条件后，我会给你一个奖品哦，#b每天"+times+"环做完就没有咯！";
            strlen += "\r\n#e#b#L1#领取任务#l\t\t#L2#攻略说明#l"

			cm.sendSimple(strlen);
        } else if (status == 1) {
            if (selection == 1) {
				if (cm.getPlayer().getLevel() < level) {
					cm.playerMessage(1, "[注意]\r\n\r\n 此任务危险，"+level+"级以后再来尝试！");
					cm.dispose();
					return;
				}
				num = cm.getBossLog("跑商");
				if (num >= times) {
					cm.sendOk("#b今日跑商已满"+times+"次！");
					cm.dispose();
					return;
				} else if (num < 0) {
					num = 0;
				}
				bossid = getOneTimeLog(cm.getPlayer().getId());
				if (bossid == -1) {
					var ran = itemlist[Math.floor(Math.random() * itemlist.length)];
				
                    if (ran == null) {
                        cm.sendOk("脚本出错，请联系管理员");
                        cm.dispose();
                        return;
                    }
                    setOneTimeLog(ran[1], cm.getPlayer().getId(), ran[0]);
                    cm.sendOk("跑商任务领取成功，\r\n你需要收集的材料为：#v" + ran[1] + "# #r"+ran[0]+"攻击以上");
                    cm.dispose();
                    return;
				} else {
					index1 = bossid.split(",")[0];
					index2 = bossid.split(",")[1];
					cm.sendSimple(
                        "#d本次你的跑商任务材料为：#v" + index1 + "# #b#z"+index1+"# #r"+index2+"攻击以上，\r\n"
                        + "#d放进装备栏第一格提交任务，将会获得丰厚奖励！\r\n"
                        +"\r\n#b#L1#提交材料#l\t\t#L2#重置本环任务#l"
                        );
				}
			} else if (selection == 2) {
                cm.sendOk(
                    "#r跑环完成奖励 1祝福+1混沌 \r\n"
                    +"#d跑环奖励冒险币10W，每一环增加10W\r\n"
                    +"#d跑环奖励12环增加人物经验10%，每一环增加点券100"
                    );
                cm.dispose();
                return;
            }
        } else if (status == 2) {
            if (selection == 1) {
                var eq = cm.getInventory(1).getItem(1);
                if (eq == null || eq.getItemId() != index1 || (eq.getWatk() < index2 && eq.getMatk() < index2)) {
                    cm.sendOk("装备栏第一格是空的，或者不符合提交要求");
                    cm.dispose();
                    return;
                }
                cm.setBossLog("跑商");
                cm.removeSlot(1,1,1);
                changeOneTimeLog(0, cm.getPlayer().getId(), 2,0);
                var ranNX = 100*(num+1)
                cm.gainPotion(1, ranNX);
                var txt = "恭喜你获得\r\n#r" + ranNX + "点券#k\r\n";
                var getExpNeededForLevel = Packages.constants.GameConstants.getExpNeededForLevel(cm.getPlayer().getLevel());
                // if(cm.getPlayer().getLevel() >= level && cm.getPlayer().getLevel() <= 99){
                //     cm.gainExp(getExpNeededForLevel*0.05);
                //     txt += "#v4000313# *1\r\n5%经验值\r\n";
                // }else if(cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getLevel() <= 119){
                //     cm.gainExp(getExpNeededForLevel*0.04);
                //     txt += "#v4000313# *3\r\n4%经验值\r\n";
                // }else if(cm.getPlayer().getLevel() >= 120 && cm.getPlayer().getLevel() <= 159){
                //     cm.gainExp(getExpNeededForLevel*0.03);
                //     txt += "#v4000313# *5\r\n3%经验值\r\n";
                // }else if(cm.getPlayer().getLevel() >= 160 && cm.getPlayer().getLevel() <= 179){
                //     cm.gainExp(getExpNeededForLevel*0.02);
                //     txt += "#v4000313# *7\r\n2%经验值\r\n";
                // }else if(cm.getPlayer().getLevel() >= 180 && cm.getPlayer().getLevel() <= 200){
                //     cm.gainExp(getExpNeededForLevel*0.01);
                //     txt += "#v4000313# *10\r\n1%经验值\r\n";
                // }
                cm.gainExp(getExpNeededForLevel*0.012);
                txt += "经验值"+Math.floor(getExpNeededForLevel*0.012)+"\r\n";
                var meso = 100000*(num+1)
                cm.gainMeso(meso);
                txt += "冒险币"+meso+"\r\n"
                if ((num+1)%12 == 0) {
                    //满12次，给一张祝福
                    //var x = Math.floor((num+1)/10);
                    cm.gainItem(2340000, 1);
                    cm.gainItem(2340000, 1);
                    txt += "#v2340000# * 1\r\n";
                    txt += "#v2340000# * 1\r\n";
                }
                cm.sendOk(txt);
                cm.dispose();
                return;
            } else if (selection==2) {
                if (!cm.haveItem(4000017,1000)) {
                    cm.sendOk("重置任务需要猪头1000个哦！");
                    cm.dispose();return
                }
                var ran = itemlist[Math.floor(Math.random() * itemlist.length)];
				
                if (ran == null) {
                    cm.sendOk("脚本出错，请联系管理员");
                    cm.dispose();
                    return;
                }
                cm.gainItem(4000017,-1000)
                changeOneTimeLog(ran[1], cm.getPlayer().getId(), 1, ran[0]);
                cm.sendOk("跑商任务已重置，\r\n你需要收集的材料为：#v" + ran[1] + "# #r"+ran[0]+"攻击以上");
                cm.dispose();
                return;
            }
        }
    }
}

function randomRange(min, max) {
    return parseInt(Math.random()*(max-min+1)+min,10);
}

function setOneTimeLog(bossid,id, num) {
	var sql = "insert into onetimelog_copy (characterid, log, num) values (?,?,?)";
	cm.sql_Update(sql, id, bossid, num);
}
function changeOneTimeLog(bossid,id, flag, num) {
    if (flag == 1) {
        //更新
        var sql = "update onetimelog_copy set log = ?, num = ? where characterid = ?";
		cm.sql_Update(sql, bossid, num, id);
    } else {
        //删除
        var sql = "delete from onetimelog_copy where characterid = ?";
        cm.sql_Update(sql, id);
    }
}

function getOneTimeLog(id) {
	var count = -1;
    var rs = cm.sql_Select("SELECT * FROM onetimelog_copy WHERE characterid = ?", id);
    if (rs.length > 0) {
		rs = rs.get(0);
        count = rs.get("log") + "," + rs.get("num");
    } else {
        count = -1;
    }
    return count;
}
