var chicken=new Array(
Array(5000595,"小鸡仔",100),
Array(5002012,"胡茬鸡",100),
Array(5000686,"萌小鸡",100),
Array(5000653,"神鸡",100),
Array(5000022,"火鸡",100)
);
var typea;
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
		var txt="星缘小姐姐接到女皇的任务，必须赶在圣诞节前准备一只#v5000022# #b火鸡#k 作为平安夜的晚餐，亲爱的冒险家，你能帮帮星缘小姐姐吗？\r\n\r\n";
		txt+="\r\n";
		txt+="#L0##v5000595# 领取小鸡仔#l #L1##v5240008# 喂养小鸡#l\r\n";
		txt+="#L2##v5075001# 火鸡晚餐排行榜#l #L3##v2020030# 火鸡晚餐成就#l\r\n";
		cm.sendSimpleN(txt,708,9400800);
	}
	else if(status==1)
	{
		typea=selection;
		switch(typea)
		{
			case 0:
				if(cm.getEventCount("感恩节小鸡仔",1)>0)
				{
					if(cm.getPQLog("感恩节小鸡仔",1)==0)
					{
						cm.sendOkN("抱歉，小鸡仔已经由该账号的其他角色领养了，请前往该角色培养小鸡！",9400800);
						cm.dispose();
						return;
					}
				}
				var isAdopt=cm.getQuestInfo(1128, "Adopt");
				if(isAdopt==null||isAdopt=="true")
				{
					cm.sendOkN("您当前的小鸡还未成长为火鸡，请前往培养小鸡升级为火鸡后再找我领取新的小鸡仔！",9400800);
					status=-1;
					return;
				}
				var txt="恭喜您成功领取了一个小鸡仔，快去培养它吧！\r\n";
				cm.setEventCount("感恩节小鸡仔",1);
				cm.setPQLog("感恩节小鸡仔",1);
				
				cm.updatePartyOneInfo(1128, "ChickenStep", "0");//小鸡阶段
				cm.updatePartyOneInfo(1128, "Exp", "0");//经验值
				cm.updatePartyOneInfo(1128, "Adopt", "true");//是否领取
				if(cm.getEventCount("感恩节初始记录",1)==0)
				{
					cm.setEventCount("感恩节初始记录",1)
					var ChrId = cm.getPlayer().getId();
					cm.sql_Update("insert into turkey_log(characterid,turkeycount,datetime) values(?,0,now())", ChrId);
				}
				cm.sendOkN(txt,9400800);
				cm.worldSpouseMessage(0x27, "[小鸡仔领养] :恭喜玩家 " + cm.getChar().getName() + " 领养了一只小鸡仔");
				status=-1;
			break;
			
			case 1:
				cm.dispose();
				cm.openNpc(9310374,"感恩节小鸡喂养N");
			break;
			
			case 2:
				cm.dispose();
				cm.openNpc(9310374,"感恩节火鸡排行榜N");
			break;
			
			case 3:
				cm.dispose();
				cm.openNpc(9310374,"感恩节火鸡成就N");
			break;
			
			default:
				cm.dispose();
			break;
		}
		
	}
	
}

