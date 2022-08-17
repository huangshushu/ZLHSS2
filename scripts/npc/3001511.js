
//特别提醒，如果需要扩展以下带*号配置，请联系上面的人协助帮你，请不要自己随意更改，涉及到数据库操作
var status = 0;
var config=new Array(
	Array(
		"猜 #e“单双大小”#n 苹果",//玩法名称
		4031997,////投注用的道具
		2,//奖励倍数
		50,//单次最小投注数量
		10000,//单次最大投注数量
		"单双大小赌博",//LOG名称
		1000,//每日最多投注次数
		Array(//中奖规则 *
			//投注选项 赢的数字（后台随机到该数字，那么数字对应的投注选项就获得胜利）
			Array("单",Array(1,3,5,7,9,11,13,15,17,19,21,23,25)),
			Array("双",Array(2,4,6,8,10,12,14,16,18,20,22,24,26)),
			Array("小",Array(1,2,3,4,5,6,7,8,9,10,11,12,13)),
			Array("大",Array(14,15,16,17,18,19,20,21,22,23,24,25,26))
		)
	),
	Array(
		"猜 #e“尾数”#n 芒果",//玩法名称
		4031997,////投注用的道具
		3,//奖励倍数
		50,//单次最小投注数量
		10000,//单次最大投注数量
		"尾数赌博",//LOG名称
		1000,//每日最多投注次数
		Array(//中奖规则 *
			//投注选项 赢的数字（后台随机到该数字，那么数字对应的投注选项就获得胜利）
			Array("尾号1",Array(1,11,21)),
			Array("尾号2",Array(2,12,22)),
			Array("尾号3",Array(3,13,23)),
			Array("尾号4",Array(4,14,24)),
			Array("尾号5",Array(5,15,25)),
			Array("尾号6",Array(6,16,26))
		)
	)
);
var typea;
var typeb;
var typec;
var typed;
var typee;
var checknum;
var logList=new Array();
var mainList=new Array();
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
	if(status==0)
	{
		var txt="#v3996088# #e勇敢的冒险家，你想来试试运气吗？#n\r\n";
		txt+="#L99##r玩法介绍#k#l\r\n";
		txt+="#L1##b参与投注#k#l\r\n";
		txt+="#L2##r我的水果管理（查看历史记录或者兑奖）#k#l\r\n";
		txt+="#L3##r查看当前实时的投注信息#k#l\r\n";
		cm.sendSimple(txt);
	}
	else if(status==1)
	{
		typea=selection;
		if(typea==-1){cm.dispose();return;}
		switch(typea)
		{
			case 99:
				var txt="#e<果园开场时间>#n\r\n";
				txt+="每个小时的#b0分#k开启投注，#b30分#k关闭投注并开奖。\r\n";
				txt+="#e<投注规则>#n\r\n";
				for(var i in config)
				{
					txt+="#b"+config[i][0]+"#k\r\n";
					txt+="\t投注使用的道具：[#v"+config[i][1]+"#] #b#z"+config[i][1]+"##k\r\n";
					txt+="\t赔率倍数：#b"+config[i][2]+"#k 倍\r\n";
					txt+="\t最小投注：#b"+config[i][3]+"#k 注\r\n";
					txt+="\t最大投注：#b"+config[i][4]+"#k 注\r\n";
					txt+="\t每日最多可投注：#b"+config[i][6]+"#k 注\r\n\r\n";
				}
				txt+="#e<中奖规则>#n\r\n";
				for(var i in config)
				{
					txt+="#b"+config[i][0]+"#k\r\n";
					for(var n in config[i][7])
					{
						txt+="\t猜#b"+config[i][7][n][0]+"#k中奖数字："+config[i][7][n][1]+"\r\n";
					}
					txt+="\r\n";
				}
				cm.sendOk(txt);
				status=-1;
			break;
			case 1:
				var txt="请选择你要参加的猜水果期数：\r\n";
				txt+="#r(最多只显示最近10期的猜水果)#k\r\n";
				var selectSql="select t.* from gambling_main t order by t.create_date desc limit 10";
				var list=cm.sql_Select(selectSql);
				if(list.size()>0)
				{
					mainList=new Array();
					var sort=0;
					for(var i in list)
					{
						txt+="#L"+sort+"#参加第 #e"+list[i].get("id")+"#n 期猜水果";
						switch(list[i].get("state"))
						{
							case 0:
								txt+="#r(作废)#k";
							break;
							case 1:
								txt+="#r(火热投注中)#k";
							break;
							case 2:
								txt+="#r(已开奖)#k";
							break;
						}
						txt+="#l\r\n";
						sort++;
						mainList.push(parseInt(list[i].get("id")));
					}
					cm.sendSimple(txt);
				}
				else
				{
					var txt="亲爱的弟弟，现在还没有猜水果开盘哦~！\r\n";
					txt+="祝你好运~！！！";
					cm.sendOk(txt);
					status=-1;
				}
			break;
			
			case 2:
				var characterId=cm.getPlayer().getId();
				var selectSql="select t.id,t.betting_type,t.state,m.state mstate,m.id mid from gambling_detail t,gambling_main m where t.main_id=m.id and t.characterid="+characterId+" order by t.betting_date desc limit 100";
				var list=cm.sql_Select(selectSql);
				if(list.size()>0)
				{
					logList=new Array();
					var sort=0;
					var txt="以下是您近期的投注记录：\r\n";
					txt+="#r(友情提示：最多展示最近100条信息，请及时兑奖)#k\r\n";
					for(var i in list)
					{
						txt+="#L"+sort+"#第"+list[i].get("mid")+"期：";
						txt+=config[parseInt(list[i].get("betting_type"))][0];
						switch(list[i].get("mstate"))
						{
							case 0:
								txt+="#d（已作废）#k";
							break;
							case 1:
								txt+="#r（未开奖）#k";
							break;
							case 2:
								switch(list[i].get("state"))
								{
									case 0:
										txt+="#b（已开奖，未兑奖）#k";
									break;
									case 1:
										txt+="#g（已兑奖）#k";
									break;
								}
							break;
						}
						txt+="#l\r\n";
						logList.push(parseInt(list[i].get("id")));
						sort++;
					}
					cm.sendSimple(txt);
				}
				else
				{
					cm.sendOk("弟弟，你还没有参与过猜水果哦~！？？");
					status=-1;
					return;
				}
			break;
			
			case 3:
				var txt="#v3996088# #e请选择您要查看的投注信息：#n\r\n";
				txt+="#r(该功能只能查看近期的实时投注信息)#k\r\n";
				txt+="#b子曾经曰过：水果反着买 别墅靠大海#k\r\n";
				for(var i in config)
				{
					txt+="#L"+i+"##b查看"+config[i][0]+"的实时投注信息#k#l\r\n";
				}
				cm.sendSimple(txt);
			break;
			
			default:
				cm.dispose();
			break;
		}
	}
	else if(status==2)
	{
		typeb=selection;
		if(typeb==-1){cm.dispose();return;}
		switch(typea)
		{
			case 1:
				if(!checkOpen(mainList[typeb]))
				{
					cm.sendOk("弟弟，你来晚一步，第 #e"+mainList[typeb]+"#n 期猜水果已经停止投注了。");
					cm.dispose();
					return;
				}
				var txt="欢迎参加第 #e"+mainList[typeb]+"#n 期猜水果，祝你好运。\r\n";
				txt+="#b请选择你要参加的猜水果：#k\r\n";
				for(var i in config)
				{
					txt+="#L"+i+"#"+config[i][0]+"#l\r\n";
				}
				cm.sendSimple(txt);
			break;
			
			case 2:
				var detail_id=logList[typeb];
				var characterId=cm.getPlayer().getId();
				var selectSql="select t.*,m.betting_result main_result,m.state mstate,m.id mid from gambling_detail t,gambling_main m where t.main_id=m.id and t.id="+detail_id;
				var list=cm.sql_Select(selectSql);
				if(list.size()==0)
				{
					cm.sendOk("查询失败，请重试~！");
					cm.dispose();
					return;
				}
				var txt="#e第"+list[0].get("mid")+"期 #n";
				txt+=config[parseInt(list[0].get("betting_type"))][0];
				txt+="投注道具：[#v"+list[0].get("betting_item")+"#] #b#z"+list[0].get("betting_item")+"##k\r\n";
				txt+="投注对象：#e“"+list[0].get("betting")+"”#n\r\n";
				txt+="投注赔率：[ #e"+list[0].get("betting_power")+"#n ] 倍\r\n";
				txt+="投注金额：#e"+list[0].get("betting_amount")+"#n\r\n";
				txt+="投注日期："+list[0].get("betting_date")+"\r\n";
				switch(list[0].get("mstate"))
				{
					case 0:
						txt+="#r本期猜水果已作废。#k";
						cm.sendOk(txt);
						status=-1;
						return;
					break;
					
					case 1:
						txt+="#b本期猜水果还未开奖。#k";
						cm.sendOk(txt);
						status=-1;
						return;
					break;
					
					case 2:
						switch(list[0].get("state"))
						{
							case 0:
								txt+="#L0##b本期猜水果已开奖，点击立即兑奖#k#l";
								cm.sendSimple(txt);
							break;
							
							case 1:
								txt+="本期中奖数字：#e"+list[0].get("main_result")+"#n\r\n";
								txt+="是否中奖："+(list[0].get("betting_result")>0?"#b已中奖(已兑奖)#k":"#r未中奖#k")+"\r\n";
								cm.sendOk(txt);
								status=-1;
								return;
							break;
							
							default:
								cm.dispose();
							break;
						}
					break;
					
					default:
						cm.dispose();
					break;
				}
			break;
			
			case 3:
				var selectDetailSql="select c.name,t.betting,t.betting_amount amount,DATE_FORMAT(t.betting_date,'%m-%d %H:%i:%s') time from gambling_detail t,characters c where t.characterid=c.id and t.betting_type=? order by t.betting_date desc limit 20";
				var detailList=cm.sql_Select(selectDetailSql,typeb);
				if(detailList.size()>0)
				{
					var txt="#v3996088# #e以下是全服所有玩家的近期实时投注通告：#n\r\n";
					txt+="#r(只显示最新的20条投注信息)#k\r\n";
					for(var i in detailList)
					{
						txt+="["+detailList[i].get("name")+"] 投了 #e"+detailList[i].get("amount")+"#n 注 #e“"+detailList[i].get("betting")+"”#n "+detailList[i].get("time")+"\r\n";
					}
					cm.sendOk(txt);
					status=-1;
				}
				else
				{
					var txt="当前还没有任何玩家参与该投注。\r\n";
					txt+="弟弟，祝你好运~！！！";
					cm.sendOk(txt);
					status=-1;
				}
			break;
			
			default:
				cm.dispose();
			break;
		}
	}
	else if(status==3)
	{
		typec=selection;
		if(typec==-1){cm.dispose();return;}
		switch(typea)
		{
			case 1:
				if(!checkOpen(mainList[typeb]))
				{
					cm.sendOk("弟弟，你来晚一步，第 #e"+mainList[typeb]+"#n 期猜水果已经停止投注了。");
					cm.dispose();
					return;
				}
				var txt="<第 #e#r"+mainList[typeb]+"#k#n 期 #b"+config[typec][0]+"#k>\r\n";
				txt+="投注道具：[#v"+config[typec][1]+"#] #b#z"+config[typec][1]+"##k\r\n";
				txt+="投注赔率：[ #e"+config[typec][2]+"#n ] 倍\r\n";
				txt+="最小投注：[ #e"+config[typec][3]+"#n ] 注\r\n";
				txt+="最大投注：[ #e"+config[typec][4]+"#n ] 注\r\n";
				txt+="今日剩余投注次数：[ #e"+(config[typec][6]-cm.getEventCount(config[typec][5]))+"#n ] 次\r\n";
				txt+="#e请选择你的投注对象：#n\r\n";
				for(var i in config[typec][7])
				{
					txt+="#L"+i+"#投注 #b“"+config[typec][7][i][0]+"”#k#l\r\n";
				}
				cm.sendSimple(txt);
			break;
			
			case 2:
				var detail_id=logList[typeb];
				var characterId=cm.getPlayer().getId();
				var selectSql="select t.*,m.betting_result main_result,m.state mstate,m.id mid from gambling_detail t,gambling_main m where t.main_id=m.id and t.id="+detail_id;				var list=cm.sql_Select(selectSql);
				if(list.size()==0)
				{
					cm.sendOk("查询失败，请重试~！");
					cm.dispose();
					return;
				}
				var betting_type=list[0].get("betting_type");
				var betting_item=list[0].get("betting_item");
				var betting=list[0].get("betting");
				var betting_result=list[0].get("main_result");
				var betting_amount=parseInt(list[0].get("betting_amount"));
				var betting_power=parseInt(list[0].get("betting_power"));
				var result=0;
				for(var i in config[betting_type][7])
				{
					if(config[betting_type][7][i][0]==betting)
					{
						if(config[betting_type][7][i][1].indexOf(betting_result)>=0)
						{
							result=1;
							break;
						}
					}
				}
				var updateSql="update gambling_detail t set t.betting_result="+result+",t.state=1 where t.id="+detail_id;
				if(cm.sql_Update(updateSql)>0)
				{
					switch(result)
					{
						case 0:
							var txt="#b本期中奖数字为 #e"+betting_result+"#n，弟弟，你没有中奖，气不气？#k";
							cm.sendOk(txt);
							status=-1;
						break;
						
						case 1:
						case 2:
						case 3:
							var txt="#r本期中奖数字为 #e"+betting_result+"#n，恭喜你中奖了~！！！#k\r\n";
							txt+="你获得了 #b"+(betting_amount*betting_power)+"#k 份 #v"+betting_item+"# #b#z"+betting_item+"##k";
							var itemCount=betting_amount*betting_power;
							while(itemCount>20000)
							{
								cm.gainItem(betting_item,20000);
								itemCount=itemCount-20000;
							}
							cm.gainItem(betting_item,itemCount);
							cm.sendOk(txt);
							cm.worldSpouseMessage(0x27, "[猜猜水果] : 恭喜玩家 " + cm.getChar().getName() + " 中奖了，获得了“"+betting_amount*betting_power+"”份投注奖励！");
							status=-1;
						break;
						default:
							cm.dispose();
						break;
					}
				}
				else
				{
					cm.sendOk("奖励领取异常~请重试~！！！");
					cm.dispose();
					return;
				}
			break;
	
			default:
				cm.dispose();
			break;
		}
	}
	else if(status==4)
	{
		typed=selection;
		if(typed==-1){cm.dispose();return;}
		switch(typea)
		{
			case 1:
				if(!checkOpen(mainList[typeb]))
				{
					cm.sendOk("弟弟，你来晚一步，第 #e"+mainList[typeb]+"#n 期幸运赌博已经停止投注了。");
					cm.dispose();
					return;
				}
				var txt="<第 #e#r"+mainList[typeb]+"#k#n 期 #b"+config[typec][0]+"#k>\r\n";
				txt+="投注道具：[#v"+config[typec][1]+"#] #b#z"+config[typec][1]+"##k\r\n";
				txt+="投注赔率：[ #e"+config[typec][2]+"#n ] 倍\r\n";
				txt+="最小投注：[ #e"+config[typec][3]+"#n ] 注\r\n";
				txt+="最大投注：[ #e"+config[typec][4]+"#n ] 注\r\n";
				txt+="今日剩余投注次数：[ #e"+(config[typec][6]-cm.getEventCount(config[typec][5]))+"#n ] 次\r\n";
				txt+="#e你选择了投注#r“"+config[typec][7][typed][0]+"”#k，请输入你的投注数量：#n\r\n";
				checknum = Math.floor(cm.getItemQuantity(config[typec][1]));
				cm.sendGetNumber(txt, 1, 1, checknum);
			break;
	
			default:
				cm.dispose();
			break;
		}
	}
	else if(status==5)
	{
		typee=selection;
		if(typee==-1){cm.dispose();return;}
		switch(typea)
		{
			case 1:
				if(!checkOpen(mainList[typeb]))
				{
					cm.sendOk("弟弟，你来晚一步，第 #e"+mainList[typeb]+"#n 期幸运赌博已经停止投注了。");
					cm.dispose();
					return;
				}
				if((config[typec][6]-cm.getEventCount(config[typec][5]))<=0)
				{
					cm.sendOk("抱歉，您今日的剩余投注次数不足。");
					cm.dispose();
					return;
				}
				if(typee>checknum||typee<=0)
				{
					cm.worldSpouseMessage(0x15, "检测到玩家" + cm.getChar().getName() + "修改内存！");
					cm.getPlayer().ban("修改内存 - 幸运赌博", false, true, true);
					cm.dispose();
					return;
				}
				if(typee<config[typec][3]||typee>config[typec][4])
				{
					cm.sendOk("抱歉，该投注每次最少可投注 #e"+config[typec][3]+"#n，最多可投注 #e"+config[typec][4]+"#n。");
					cm.dispose();
					return;
				}
				if(!cm.haveItem(config[typec][1],typee))
				{
					cm.sendOk("抱歉，你没有足够的#v"+config[typec][1]+"# #b#z"+config[typec][1]+"##k");
					cm.dispose();
					return;
				}
				var characterId=cm.getPlayer().getId();
				var itemCount=typee;
				var insertSql="insert into gambling_detail(main_id,characterid,betting_type,betting,betting_item,betting_amount,betting_power,betting_date,state) values("+mainList[typeb]+","+characterId+","+typec+",'"+config[typec][7][typed][0]+"',"+config[typec][1]+","+itemCount+","+config[typec][2]+",now(),0)";
				if(cm.sql_Insert(insertSql)>0)
				{
					while(typee>20000)
					{
						cm.removeItem(config[typec][1],20000);
						typee=typee-20000;
					}
					cm.removeItem(config[typec][1],typee);
					cm.setEventCount(config[typec][5]);
					cm.setEventCount("猜水果活跃值");
					cm.sendOk("恭喜你投注成功~！！！\r\n你可以在我的投注管理中查看自己的投注信息或者领取奖励。");
					cm.worldSpouseMessage(0x0F, "[猜猜水果] : " + cm.getChar().getName() + " 投注了 "+itemCount+" 注 “"+config[typec][7][typed][0]+"”！");
					status=-1;
				}
			break;
	
			default:
				cm.dispose();
			break;
		}
	}
	else
	{
		cm.dispose();
		return;
	}
}
//检测赌场是否开启
function checkOpen(mainId)
{
	var selectSql="select t.* from gambling_main t where t.id="+mainId;
	var list=cm.sql_Select(selectSql);
	if(list.size()>0&&list[0].get("state")==1)
	{
		return true;
	}
	else
	{
		return false;
	}
}