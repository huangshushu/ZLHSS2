

var MapleInventoryManipulator = Java.type('server.MapleInventoryManipulator');
var MapleItemInformationProvider = Java.type('server.MapleItemInformationProvider');
var DatabaseConnection = Java.type('database.DatabaseConnection');

//【配置区】-----------------------------------------------------
var itemId = 3994036;
var bossLogName = "FSCS";
var rankMaxCount = 30;


//-----------------------------------------------------
var ul_yStar = "#fItem/Etc/0427/04270003/Icon9/5#";  //
var status = -1;//模组状态
var chr =null;
var say = "";
var tempAllCount = 0;//

function start(){
    chr = cm.getPlayer();
	tempAllCount = QueryAllCount();
    action(1,0,0);
}

function action(mode, type, selection) {
    if(mode == -1){cm.dispose();return;}
    if(status == 0 && mode == 0) {cm.dispose();return;}
    if(mode == 1) {status++;} else {status--;}

    if(status == 0){
		say = _getTitle("飞升排名");
		
		say += "\t\t\t\t\t\t说明： #l\r\n#r活动飞升次数每周日24:00截止清零，排名前三找群主拿奖励\r\n #k#e每周飞升活动奖励\r\n\r\n #r每周飞升榜排名第一奖励#v3992025#*15000\r\n\r\n #d每周飞升榜排名第二奖励 #v3992025#*10000\r\n\r\n #g每周飞升榜排名第三奖励#v3992025#*5000\r\n\r\n"  
		say += "\t\t\t\t\t#L2#查看排名#l"
		
		
        cm.sendSimple(say);
    }else if(status == 1){
		if(selection == 1){
			if(cm.itemQuantity(itemId) > 0){
				say  = "";
				
				cm.sendYesNo(say);
			}else{
				cm.sendOk("你没有#b#v"+itemId+"##z"+itemId+"##k啊！");
				cm.dispose();
				return;
			}
		}else{
			say = _getTitle("飞升排名");
			say += "\r\n";
			var rankList = QueryBossLogs();
			for(var i = 0;i<rankList.length;i++){
			
				say += "\t"+ (i+1)+ "\t#b"+extend(rankList[i].chrName,12)+"    #r"+rankList[i].count+"次\r\n#k";
			}
			cm.sendOk(say);
			cm.dispose();
		}
	}else if(status == 2){
		
		//cm.getPlayer().getBossLog("bossLogName",1)
		var toCount = cm.itemQuantity(itemId);
		chr.setBossLog(bossLogName,1,toCount);
		cm.gainItem(itemId,-toCount);
		
		cm.dispose();
    }else{
        cm.dispose();
    }
}

var ul_cloud = "#fItem/Etc/0403/04031309/info/iconRaw#";  //
function _getTitle(t){
	return " "+ul_cloud+ul_cloud+ul_cloud+ul_cloud +"#r#e『"+ t+"』#k#n"+ul_cloud+ul_cloud+ul_cloud+ul_cloud +"\r\n\r\n";
}


function QueryBossLogs() {
	var con = DatabaseConnection.getConnection();
	
	var ps;
	var sql = "Select  characters.id,characters.`name`,BossLog.count from BossLog  Left Join characters On characters.accountid = BossLog.characterid where BossLog.bossid = 'FSCS' and BossLog.count > 0 group by characters.accountid ORDER BY BossLog.count DESC LIMIT "+rankMaxCount;
	ps = con.prepareStatement(sql);
	
	var res = ps.executeQuery();
    var _result = [];
    while(res.next()){
        _result.push({
            chrId:res.getInt("id"),
            chrName:res.getString("name"),
            count:res.getInt("count"),
        });
    }
	
	res.close();
	ps.close();
	return _result;
}

function QueryAllCount(){
	var con = DatabaseConnection.getConnection();
	var count = 0;
	var ps;
	var sql = "Select sum(count) as `count` from BossLog where BossLog.bossid = 'FSCS'";
	ps = con.prepareStatement(sql);
	var res = ps.executeQuery();

	if (res.next()) {
		count = res.getInt(1);
	} else {
		count = -1;
	}
	res.close();
	ps.close();
	return count;
}


function extend(text,num){//空格

	text = text+"";
	var curLength = text.length;
	var tempText = text.match(/[\u4E00-\u9FA5]/g);
	if(tempText != null){
		curLength += Number(text.match(/[\u4E00-\u9FA5]/g).length);
	}

	if(curLength < num){
		for(var i =0;i<num-curLength;i++){
			text += " ";
		}
	}
	return text;
}