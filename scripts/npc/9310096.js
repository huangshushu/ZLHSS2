var typea;
var typeb;
var robtQuestList=new Array(
	//自定义工作名称 获得奖励的时间间隔（单位：分钟）
Array("打扫枫树山庄",5,
	Array(
		//奖励ID  时间间隔内可以获得的最小道具数量 时间间隔内可以获得的最大道具数量
		Array(4001126,1000,2000)
	)
),
//自定义工作名称 获得奖励的时间间隔（单位：分钟）
Array("打扫枫树山庄1",10,
	Array(
		//奖励ID  时间间隔内可以获得的最小道具数量 时间间隔内可以获得的最大道具数量
		Array(4001126,1000,2000)
	)
),
//自定义工作名称 获得奖励的时间间隔（单位：分钟）
Array("打扫枫树山庄1",1,
	Array(
		//奖励ID  时间间隔内可以获得的最小道具数量 时间间隔内可以获得的最大道具数量
		Array(4001126,1000,2000)
	)
),
//自定义工作名称 获得奖励的时间间隔（单位：分钟）
Array("打扫枫树山庄1",3,
	Array(
		//奖励ID  时间间隔内可以获得的最小道具数量 时间间隔内可以获得的最大道具数量
		Array(4001126,1000,2000)
	)
)
);

var jhCost=600;//激活需要的元宝
var upCost=300;//升级需要的元宝
var fixCost=30000000;//每修理1点耐久值需要的金币
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
    if (status == 0) 
	{
		var txt="#v4310215# 欢迎使用打工机器人 #e工具人#n 系统，她可以帮你完成各种各样的打工任务，帮你赚取丰厚的奖励。\r\n\r\n";
		var accountId=cm.getPlayer().getAccountID();//账号ID
		var selectSql="select * from working_robot_config t where t.accountid="+accountId;
		var list=cm.sql_Select(selectSql);
		if(list.size()>0)
		{
			txt+="#L0#查看我的 #e工具人#n#l\r\n";
			txt+="#L1#升级我的 #e工具人#n#l\r\n";
			txt+="#L2#修理我的 #e工具人#n#l\r\n";
			if(parseInt(list[0].get("state"))==0)
			{
				txt+="#L3#派遣 #e工具人#n 打工#l\r\n";
			}
			else
			{
				txt+="#L4#领取 #e工具人#n 的打工报酬（可提前召回）#l\r\n";
			}
		}
		else
		{
			txt+="#L99#是否花费 #r#e"+jhCost+"#n#k 元宝永久激活#e工具人#n?\r\n#r(要想完整体验工具人功能，当前角色需达到230级)#k#l\r\n";
		}
		cm.sendSimple(txt);
    }
	else if(status == 1)
	{
		typea=selection;
		switch(typea)
		{
			case 99:
				if(cm.getRMB()<jhCost)
				{
					cm.sendOk("您的元宝不足，无法激活#e工具人#n。");
					cm.dispose();
					return;
				}
				var accountId=cm.getPlayer().getAccountID();//账号ID
				var insertSql="insert into working_robot_config(accountid,level,maxdurable,durable,state) values("+accountId+",1,100,100,0)";
				if(cm.sql_Insert(insertSql)>0)
				{
					cm.setRMB(cm.getRMB()-jhCost);
					cm.sendOk("激活成功，点击确定返回主菜单。");
					cm.worldSpouseMessage(0x2A,"[月光工具人] :恭喜玩家 "+ cm.getChar().getName() +" 成功激活月光工具人！");
					status=-1;
				}
				else
				{
					cm.sendOk("激活失败，请稍后重试，如果反复激活失败，请联系管理员。");
					cm.dispose();
					return;
				}
			break;
			case 0:
				var accountId=cm.getPlayer().getAccountID();//账号ID
				var selectSql="select * from working_robot_config t where t.accountid="+accountId;
				var list=cm.sql_Select(selectSql);
				var txt="#v4310215# 我的#e工具人#n：\r\n";
				txt+="等级：#e"+list[0].get("level")+"#n 级（获得 #b#e"+list[0].get("level")+"%#n#k 额外打工奖励）\r\n";
				txt+="剩余耐久值：#e"+list[0].get("durable")+"#n 点\r\n";
				if(parseInt(list[0].get("state"))==0)
				{
					txt+="打工状态：#g#e休息中#n#k\r\n";
				}
				else
				{
					txt+="打工状态：#r#e工作中#n#k\r\n";
					txt+="工作任务：#e"+robtQuestList[parseInt(list[0].get("questid"))][0]+"#n\r\n";
					var nowMillis = java.lang.System.currentTimeMillis();
					var lostTime=parseInt(list[0].get("overtime"))-nowMillis;
					txt+="剩余工作时长：#e"+(lostTime>0?Math.floor(lostTime/60000):0)+"分钟#n\r\n";
				}
				cm.sendOk(txt);
				status=-1;
			break;
			case 1:
				var accountId=cm.getPlayer().getAccountID();//账号ID
				var selectSql="select * from working_robot_config t where t.accountid="+accountId;
				var list=cm.sql_Select(selectSql);
				var txt="#v4310215# 是否需要升级#e工具人#n？\r\n";
				var nowLevel=parseInt(list[0].get("level"));
				txt+="当前等级：#e"+nowLevel+"#n 级\r\n";
				txt+="升级后等级：#e"+(nowLevel+1)+"#n 级\r\n";
				txt+="当前可获得： #b#e"+nowLevel+"%#n#k 额外打工奖励\r\n";
				txt+="升级后可获得： #b#e"+(nowLevel+1)+"%#n#k 额外打工奖励\r\n";
				txt+="本次升级需要花费 #r#e"+upCost+"#n#k 元宝";
				cm.sendYesNo(txt);
			break;
			case 2:
				var accountId=cm.getPlayer().getAccountID();//账号ID
				var selectSql="select * from working_robot_config t where t.accountid="+accountId;
				var list=cm.sql_Select(selectSql);
				if(parseInt(list[0].get("state"))==1)
				{
					cm.sendOk("#e工具人#n正在工作中，无法进行维修。");
					status=-1;
					return;
				}
				var nowFix=parseInt(list[0].get("durable"));
				var maxFix=parseInt(list[0].get("maxdurable"));
				if(nowFix>=maxFix)
				{
					cm.sendOk("你的#e工具人#n是满耐久值，无需修理。");
					status=-1;
					return;
				}
				var txt="#v4310215# #e工具人#n剩余耐久值：#e"+list[0].get("durable")+"#n 点(MAX：#e"+maxFix+"#n点)\r\n";
				txt+="是否花费 #e"+((maxFix-nowFix)*fixCost)+"#n 金币恢复耐久值(#e"+(maxFix-nowFix)+"#n点)\r\n";
				txt+="#r(每1点耐久值需要花费 #e"+fixCost+"#n 金币)#k\r\n";
				cm.sendYesNo(txt);
			break;
			case 3:
				if(cm.getLevel()<230)
				{
					cm.sendOk("派遣失败，您的等级不足#r 230 #k级，为避免玩家前期过度消耗金币资源，工具人暂时不能为你服务！");
					cm.dispose();
					return;
				}
				var accountId=cm.getPlayer().getAccountID();//账号ID
				var selectSql="select * from working_robot_config t where t.accountid="+accountId;
				var list=cm.sql_Select(selectSql);
				var txt="#v4310215# 请选择需要让#e工具人#n进行的工作：\r\n";
				for(var i in robtQuestList)
				{
					txt+="#L"+i+"##b"+robtQuestList[i][0]+"#k#l\r\n";
				}
				cm.sendSimple(txt);
			break;
			case 4:
				var accountId=cm.getPlayer().getAccountID();//账号ID
				var selectSql="select * from working_robot_config t where t.accountid="+accountId;
				var list=cm.sql_Select(selectSql);
				var begintime=parseInt(list[0].get("begintime"));
				var overtime=parseInt(list[0].get("overtime"));
				var questNum=parseInt(list[0].get("questid"));
				var nowMillis = java.lang.System.currentTimeMillis();
				if(overtime-nowMillis>0)
				{
					var workingTime=Math.floor((nowMillis/60000)-Math.floor(begintime/60000));
					var txt="#e工具人#n已经工作了#e"+workingTime+"#n分钟，是否立即召回并领取奖励？\r\n";
					txt+="#e工具人#n目前进行的工作为：#e"+robtQuestList[questNum][0]+"#n，该工作，每#e"+robtQuestList[questNum][1]+"#n分钟消耗#e1#n点耐久值，同时，每工作满#e"+robtQuestList[questNum][1]+"#n分钟可以获得以下报酬：\r\n";
					txt+="#r(如果不满#e"+robtQuestList[questNum][1]+"#n分钟就召回，不会获得任何奖励)#k\r\n";
					for(var i in robtQuestList[questNum][2])
					{
						txt+="#v"+robtQuestList[questNum][2][i][0]+"# #b#z"+robtQuestList[questNum][2][i][0]+"# * "+robtQuestList[questNum][2][i][1]+" ~ "+robtQuestList[questNum][2][i][2]+"#k\r\n";
					}
					cm.sendYesNo(txt);
				}
				else
				{
					var txt="#e工具人#n已经完成了工作，是否立即领取报酬？";
					cm.sendYesNo(txt);
				}
			break;
			default:
				cm.dispose();
			break;
		}
	}
	else if(status == 2)
	{
		typeb=selection;
		switch(typea)
		{
			case 1:
				if(cm.getRMB()<upCost)
				{
					cm.sendOk("您的元宝不足，无法升级#e工具人#n。");
					cm.dispose();
					return;
				}
				var accountId=cm.getPlayer().getAccountID();//账号ID
				var updateSql="update working_robot_config t set t.level=t.level+1 where accountid="+accountId;
				if(cm.sql_Update(updateSql)>0)
				{
					cm.setRMB(cm.getRMB()-upCost);
					cm.sendOk("恭喜，你的#e工具人#n升级啦~！！");
					cm.worldSpouseMessage(0x2A,"[月光工具人] :恭喜玩家 "+ cm.getChar().getName() +" 成功提升了工具人的等级！");
					status=-1;
				}
				else
				{
					cm.sendOk("抱歉，升级失败，请稍后重试，如果反复失败，请联系管理员。");
					cm.dispose();
					return;
				}
			break;
			case 2:
				var accountId=cm.getPlayer().getAccountID();//账号ID
				var selectSql="select * from working_robot_config t where t.accountid="+accountId;
				var list=cm.sql_Select(selectSql);
				var maxFix=parseInt(list[0].get("maxdurable"));
				var nowFix=parseInt(list[0].get("durable"));
				var allFixCost=(maxFix-nowFix)*fixCost;
				if(cm.getMeso()<allFixCost)
				{
					cm.sendOk("你的金币不足 #e"+allFixCost+"#n，无法修理#e工具人#n。");
					cm.dispose();
					return;
				}
				var updateSql="update working_robot_config t set t.durable=t.durable+"+(maxFix-nowFix)+" where accountid="+accountId;
				if(cm.sql_Update(updateSql)>0)
				{
					cm.gainMeso(-1*allFixCost);
					cm.sendOk("恭喜，你的#e工具人#n成功恢复了 #e"+(maxFix-nowFix)+"#n 点耐久值~！！");
					cm.worldSpouseMessage(0x2A,"[月光工具人] :恭喜玩家 "+ cm.getChar().getName() +" 成功为工具人恢复了 "+(maxFix-nowFix)+" 点耐久值！");
					status=-1;
				}
				else
				{
					cm.sendOk("抱歉，恢复失败，请稍后重试，如果反复失败，请联系管理员。");
					cm.dispose();
					return;
				}
			break;
			case 3:
				var accountId=cm.getPlayer().getAccountID();//账号ID
				var selectSql="select * from working_robot_config t where t.accountid="+accountId;
				var list=cm.sql_Select(selectSql);
				var nowFix=parseInt(list[0].get("durable"));
				if(nowFix<=0)
				{
					cm.sendOk("#e工具人#n耐久值不足，无法进行工作。");
					cm.dispose();
					return;
				}
				var txt="是否让 #e工具人#n #e"+robtQuestList[typeb][0]+"#n?\r\n";
				txt+="该工作，每#e"+robtQuestList[typeb][1]+"#n分钟消耗#e1#n点耐久值，并且每工作满#e"+robtQuestList[typeb][1]+"#n分钟就可以获得以下报酬：\r\n";
				for(var i in robtQuestList[typeb][2])
				{
					txt+="#v"+robtQuestList[typeb][2][i][0]+"# #b#z"+robtQuestList[typeb][2][i][0]+"# * "+robtQuestList[typeb][2][i][1]+" ~ "+robtQuestList[typeb][2][i][2]+"#k\r\n";
				}
				txt+="当前#e工具人#n的耐久值，可以工作#e"+(nowFix*robtQuestList[typeb][1])+"#n分钟，如果你提前召回#e工具人#n，系统会根据#e工具人#n的工作时长返还剩余耐久值。";
				cm.sendYesNo(txt);
			break;
			case 4:
				var accountId=cm.getPlayer().getAccountID();//账号ID
				var selectSql="select * from working_robot_config t where t.accountid="+accountId;
				var list=cm.sql_Select(selectSql);
				var begintime=parseInt(list[0].get("begintime"));
				var overtime=parseInt(list[0].get("overtime"));
				var questNum=parseInt(list[0].get("questid"));
				var nowMillis = java.lang.System.currentTimeMillis();
				var updateSql="update working_robot_config t set t.state=0 where t.accountid="+accountId;
				var allGifts=new Array();
				if(cm.sql_Update(updateSql))
				{
					var workingTime=0;
					if(nowMillis>overtime)
					{
						workingTime=Math.floor((overtime/60000)-Math.floor(begintime/60000));
					}
					else
					{
						workingTime=Math.floor((nowMillis/60000)-Math.floor(begintime/60000));
					}
					var giftCount=Math.floor(workingTime/robtQuestList[questNum][1]);
					var num=0;
					for(var i=0;i<giftCount;i++)
					{
						for(var n in robtQuestList[questNum][2])
						{
							var itemCount=Math.floor(Math.random()*(robtQuestList[questNum][2][n][2]-robtQuestList[questNum][2][n][1]))+robtQuestList[questNum][2][n][1];
							var resultCount=itemCount+Math.floor(Math.floor(itemCount*parseInt(list[0].get("level")*100/100))/100);
							cm.gainItem(robtQuestList[questNum][2][n][0],resultCount);
							var isNew=true;
							for(var m in allGifts)
							{
								if(allGifts[m][0]==robtQuestList[questNum][2][n][0])
								{
									allGifts[m]=new Array(robtQuestList[questNum][2][n][0],allGifts[m][1]+resultCount);
									isNew=false;
									break;
								}
							}
							if(isNew)
							{
								allGifts.push(new Array(robtQuestList[questNum][2][n][0],resultCount));
							}
							num++;
						}
					}
					if(overtime-nowMillis>0)
					{
						var overDurable=Math.floor(((overtime-nowMillis)/60000)/5);
						var updateDurableSql="update working_robot_config t set t.durable="+overDurable+" where t.accountid="+accountId;
						cm.sql_Update(updateDurableSql);
						if(num<=0)
						{
							cm.sendOk("#r您未获得任何奖励#k，但是由于你提前召回了#e工具人#n，系统已自动为你返还了 #e“"+overDurable+"”#k 点耐久值。");
							cm.worldSpouseMessage(0x2A,"[月光工具人] :恭喜玩家 "+ cm.getChar().getName() +" 成功召回工具人获得了丰厚的奖励！");
							cm.dispose();
							return;
						}
						else
						{
							var txt="恭喜你提前召回了#e工具人#n，获得了#e工具人#n打工获得的报酬(包含#e"+parseInt(list[0].get("level"))+"#n%的额外奖励)，并返还了 #e“"+overDurable+"”#n 点耐久值。\r\n";
							txt+="本次工具人获得的打工报酬如下(共 #e"+num+"#n 轮奖励)：\r\n";
							for(var x in allGifts)
							{
								txt+="#v"+allGifts[x][0]+"# #b#z"+allGifts[x][0]+"# * "+allGifts[x][1]+" 份#k\r\n";
							}
							cm.sendOk(txt);
							cm.worldSpouseMessage(0x2A,"[月光工具人] :恭喜玩家 "+ cm.getChar().getName() +" 成功召回工具人获得了丰厚的奖励！");
							cm.dispose();
							return;
						}
					}
					else
					{
						var txt="恭喜你获得了#e工具人#n打工获得的报酬(包含#e"+parseInt(list[0].get("level"))+"#n%的额外奖励)。\r\n#r(此次打工消耗了#e工具人#n所有的耐久值)#k\r\n";
						txt+="本次工具人获得的打工报酬如下(共 #e"+num+"#n 轮奖励)：\r\n";
						for(var x in allGifts)
						{
							txt+="#v"+allGifts[x][0]+"# #b#z"+allGifts[x][0]+"# * "+allGifts[x][1]+" 份#k\r\n";
						}
						cm.sendOk(txt);
						cm.worldSpouseMessage(0x2A,"[月光工具人] :恭喜玩家 "+ cm.getChar().getName() +" 成功召回工具人获得了丰厚的奖励！");
						cm.dispose();
						return;
					}
				}
				else
				{
					cm.sendOk("奖励领取失败，请重试。");
					cm.dispose();
					return;
				}
			break;
			default:
				cm.dispose();
			break;
		}
	}
	else if(status == 3)
	{
		switch(typea)
		{
			case 3:
				var accountId=cm.getPlayer().getAccountID();//账号ID
				var nowMillis = java.lang.System.currentTimeMillis();
				var selectSql="select * from working_robot_config t where t.accountid="+accountId;
				var list=cm.sql_Select(selectSql);
				var nowFix=parseInt(list[0].get("durable"));
				var workingtime=nowMillis+1000*60*nowFix*robtQuestList[typeb][1];
				var updateSql="update working_robot_config t set t.durable=0,t.questid="+typeb+",t.begintime="+nowMillis+",t.overtime="+workingtime+",t.state=1 where t.accountid="+accountId;
				if(cm.sql_Update(updateSql)>0)
				{
					cm.sendOk("你的#e工具人#n屁颠屁颠的去打工啦~！！！");
					cm.worldSpouseMessage(0x2A,"[月光工具人] :恭喜玩家 "+ cm.getChar().getName() +" 成功派遣工具人 "+robtQuestList[typeb][0]+"！");
					cm.dispose();
					return;
				}
				else
				{
					cm.sendOk("抱歉，#e工具人#n出现异常了，请稍后重试，如果反复失败，请联系管理员。");
					cm.dispose();
					return;
				}
			break;
			default:
				cm.dispose();
			break;
		}
	}
}

