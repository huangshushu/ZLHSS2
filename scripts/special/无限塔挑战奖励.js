var status = 0;
//每5层的奖励
var itemList = [
    [[4002000,2],    [4001006,50  ],  [2614064,1]],// 5
    [[4002000,2],    [4001006,100 ],  [2614064,2]],// 10
    [[4002000,2],    [4001006,150 ],  [2614064,1]],// 15
    [[4002000,2],    [4001006,200 ],  [2614064,1]],
    [[4002000,2],    [4001006,350 ],  [2614064,1]],
    [[4002000,2],    [4001006,400 ],  [2614064,1]],
    [[4002000,2],    [4001006,450 ],  [2614064,1]],
    [[4002000,2],    [4001006,500 ],  [2614064,1]],
    [[4002000,2],    [4001006,550 ],  [2614064,1]],
    [[4002000,2],    [4001006,600 ],  [2614064,1],   [4031250,1 ]],
    [[4002000,2],    [4001006,650 ],  [2614064,1],   [4031250,2 ]],
    [[4002000,2],    [4001006,700 ],  [2614064,1],   [4031250,4 ]],
    [[4002000,2],    [4001006,750 ],  [2614064,1],   [4031250,6 ]],
    [[4002000,2],    [4001006,800 ],  [2614064,1],   [4031250,8 ]],
    [[4002000,2],    [4001006,850 ],  [2614064,1],   [4031250,10]],
    [[4002000,2],    [4001006,900 ],  [2614064,1],   [4031250,12]],
    [[4002000,2],    [4001006,950 ],  [2614064,1],   [4031250,14]],
    [[4002000,2],    [4001006,100 ],  [2614064,1],   [4031250,16]],
    [[4002000,2],    [4001006,1100],  [2614064,1],   [4031250,18]],// 95
    [[4002000,2],    [4001006,1200],  [2614064,1],   [4031250,20]] // 100
];

//每一层的奖励
var gifts = [
    //id， 破功，属性，类型（1力量2敏捷3智力4运气5物攻6魔攻）
    [4002000, 100000, 2, 6],
    [4002001, 100000, 2, 5],
    [4002002, 100000, 5, 3],
    [4002003, 100000, 5, 4],
    [4031558, 100000, 5, 1],
    [4031559, 100000, 5, 2],
    [4031560, 150000, 5, 5],
    [4031561, 150000, 5, 6]
];

var weapens2 = [
    1302333,
    1312199,
    1322250,
    1332274,
    1342101,
    1372222,
    1382259,
    1402251,
    1412177,
    1422184,
    1432214,
    1442268,
    1452252,
    1462239,
    1472261,
    1482216,
    1492231
];
var eim = null;
var instanceName = "无限塔";
function start() {
    status = -1;
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
        eim = cm.getEventInstance();
        if (eim == null) {
            cm.sendOk("副本出错，请联系管理员");
            cm.dispose();
            return;
        }
        var num = parseInt(eim.getProperty("monster_number"));
        //领取奖励
        var b = false;
        if (num%5 == 0) {
            //每5层必定获得一个石头
            b = true;
			gainItemRan(50, 5220008);
			gainItemRan(50, 5220008);
			
        } else if (Math.floor(Math.random()*100 < num)) {
            //层数对应的几率获得
            b = true;
        }
        if (b) {
            //获得石头
            var ran = Math.floor(Math.random() * gifts.length);
            if (!cm.canHold(gifts[ran][0])) {
                cm.sendOk("背包空间不足");
                cm.dispose();
                return;
            }
            cm.sendOk("恭喜你获得#v" + gifts[ran][0] + "#");
			cm.gainItem(gifts[ran][0], 1)
        } else {
            //没有获得
            cm.playerMessage(1, "没有获得随机奖励");
        }
        //记录通关层数
        insertMoshenlog("魔神塔今日通关层数-"+cm.getPlayer().getId(), num, 0);
        insertMoshenlog("魔神塔累计通关层数-"+cm.getPlayer().getId(), num, 1);
        cm.dispose();
    }
}


function insertMoshenlog(cid, count, type) {
    var x = [];
    if (type == 1) {
        x = cm.sql_Select("select * from moshen_log where cid = ? and type = ?", cid, type);
    } else if (type == 0) {
        x = cm.sql_Select("select * from moshen_log where cid = ? and type = ? and DATE_FORMAT(time, '%Y-%m-%d') = DATE_FORMAT(NOW(), '%Y-%m-%d')", cid, type);
    }
    if (x.length > 0) {
        if (x.get(0).get("count") <= count) {
            cm.sql_Update("update moshen_log set count = ?, time = NOW() where cid = ? and type = ? and DATE_FORMAT(time, '%Y-%m-%d') = DATE_FORMAT(NOW(), '%Y-%m-%d')", count, cid, type);
        }
    } else {
        cm.sql_Update("insert into moshen_log (cid, count, time, type) values (?,?,NOW(),?)", cid, count, type);
    }
}

function gainItemRan(ranNum, id) {
	var ran = Math.floor(Math.random() * 1000);
	if (ran < ranNum) {
		x = true;
		cm.gainItem(id, 1)
	}
}