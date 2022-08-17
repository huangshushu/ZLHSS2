importPackage(Packages.client);
importPackage(Packages.database);
importPackage(Packages.java.math);

var status = 0;
var ringnum = 0;
var id = 0;
var itemIndex;
var 是否开放 = false;
var itemList = Array(//Array(id,Num)
	Array(4000000, 50),
	Array(4000016, 50),
	Array(4000019, 50),
	Array(4000003, 50),
	Array(4000010, 50),
	Array(4000001, 50),
	Array(4031631, 50),
	Array(4031641, 50)
	
);

var giftList = Array(//Array(id,Num)
	Array(0,0)
);
var finalGiftList = Array(//Array(id,Num)
	Array(4000005,10)
);
function start() {
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
			if(!是否开放){
				cm.sendOk("你是来自彩虹岛的冒险家吗？");
				cm.dispose();
				return;
			}
        	id = cm.getPlayer().getId();
        	ringnum = getBossLog("paoshang",id);
        	var strlen = "欢迎来到#r★草莓冒险岛★#跑商玩法\r\n\r\n";
        	if(ringnum == 0)
            	strlen += "#r玩法详情： #b每次您都会接收到一个任务，您需要将我需要的材料拿来，满足我的条件后，我会给你一个巨大的奖品哦，每天我都会提供给你20次任务，做完就没有咯！";
            else{
            	strlen += "您已经完成我这次的委托了么？";
            }
            cm.sendYesNo(strlen);
        }else if(status == 1){
			cm.getPlayer().dropMessage("第1步");
			id = cm.getPlayer().getId();
			var ran = Math.floor(Math.random() * itemList.length);
        	itemIndex = getOneTimeLog(ran, id);
			cm.getPlayer().dropMessage("itemIndex =" + itemIndex);
        	if(ringnum > 0 && ringnum < 20){//每轮奖励
        		if(cm.haveItem(itemList[itemIndex][0],itemList[itemIndex][1])){
        			cm.gainItem(itemList[itemIndex][0],-itemList[itemIndex][1]);
        			for(var i = 0; i < giftList.length;i++){
        				cm.gainItem(giftList[i][0].giftList[i][1]);
        			}
        			cm.sendNext("恭喜您完成了这次跑商，请继续！");
        		}else{
        			cm.sendOk("对不起，您还没有拿来我需要的材料，加油哦！");
        		}
        	}else if(ringnum == 20){//最终奖励
        		if(cm.haveItem(itemList[itemIndex][0],itemList[itemIndex][1])){
        			cm.gainItem(itemList[itemIndex][0],-itemList[itemIndex][1]);
        			for(var i = 0; i < finalGiftList.length;i++){
        				cm.gainItem(finalGiftList[i][0].finalGiftList[i][1]);
        			}
        			cm.sendNext("恭喜您完成了这次跑商，请继续！");
        		}else{
        			cm.sendOk("对不起，您还没有拿来我需要的材料，加油哦！");
        		}
        	}else{
				cm.getPlayer().dropMessage("第2步");
        		if(itemIndex = -1){
        			setOneTimeLog(ran,id);
					itemIndex = getOneTimeLog(ran, id);
        		}else{
        			changeOneTimeLog(ran,id);
        		}
				
				var itmeid = itemList[itemIndex][0];
        		var itemnum = itemList[itemIndex][1];
        		var strlen = "您当前跑环环数为： "+ ringnum+1 +"\r\n\r\n";
        		strlen += " 这次您需要帮我搜集"+ itemnum +"个#v" + itemid + "#\r\n期待您的好消息";
        		cm.setBossLog("paoshang");
        		cm.sendOk(strlen);
        		cm.dispose();
        	}
        }else if(status == 2){
        	if(ringnum < 20){
	        	var ran = Math.floor(Math.random() * itemList.length);
	        	var itmeid = itemList[itemIndex][0];
	        	var itemnum = itemList[itemIndex][1];
	        	if(itemIndex = -1){
	        		setOneTimeLog(ran,id);
	        	}else{
	        		changeOneTimeLog(ran,id);
	        	}
	        	var strlen = "您当前跑环环数为： "+ ringnum+1 +"\r\n\r\n";
	        	strlen += " 这次您需要帮我搜集"+ itemnum +"个#v" + itemid + "#\r\n期待您的好消息";
	        	cm.setBossLog("paoshang");
	        	cm.sendOk(strlen);
	        	cm.dispose();
	        }else{
	        	cm.sendOK("您已经完成了跑商！");
	        	cm.dispose();
	        }
	    }
    }          
}
function getBossLog(boss,id) {
        var con = DBConPool.getConnection();
        var count = 0;
        var ps;
        ps = con.prepareStatement("SELECT COUNT(*) FROM bosslog WHERE characterid = ? AND bossid = ? AND lastattempt >= subtime(CURRENT_TIMESTAMP, '23:0:0.0')");
        ps.setInt(1, id);
        ps.setString(2, boss);
        var rs = ps.executeQuery();
        if (rs.next()) {
            count = rs.getInt(1);
        } else {
            count = -1;
        }
        rs.close();
        ps.close();
        return count;
}

function setOneTimeLog(bossid,id) {
    var con1 = DBConPool.getConnection();
    var ps = con1.prepareStatement("insert into onetimelog (characterid, log) values (?,?)");
    ps.setInt(1, id);
    ps.setString(2, bossid);
    ps.executeUpdate();
    ps.close();
}

function changeOneTimeLog(bossid,id) {
    var con1 = DBConPool.getConnection();
    var ps = con1.prepareStatement("update onetimelog set log = ? where characterid = ?");
    ps.setString(1, bossid);
    ps.setInt(2, id);
    ps.executeUpdate();
    ps.close();
}

function getOneTimeLog(bossid,id) {
        var con = DBConPool.getConnection();
        var count = 0;
        var ps;
        ps = con.prepareStatement("SELECT log FROM onetimelog WHERE characterid = ?  AND log = ?");
        ps.setInt(1, id);
        ps.setString(2, bossid);
        var rs = ps.executeQuery();
        if (rs.next()) {
            count = rs.getString("log");
        } else {
            count = -1;
        }
        rs.close();
        ps.close();
        return count;
}

