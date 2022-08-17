var choice;
var a = 0;
var status=-1;
var idList=new Array();

function start() {
    a = -1;
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
			var txt = "#v3801312#请选择您需要购买的商品，每天6点/18点自动刷新商品：\r\n";
			txt+="#r（"+getTime()+"）#k\r\n";
			var selecSql="select * from shop_random";
			var list=cm.sql_Select(selecSql);
			var num=0;
			if(list.size()>0)
			{
				for(var i in list)
				{
					var id=list[i].get("id");
					var itemid=list[i].get("itemid");
					var itemNum=list[i].get("itemnum");
					var itemPrice=list[i].get("price");
					var itemDiscount=list[i].get("discount");
					txt+="#L"+num+"##v"+itemid+"# #b#z"+itemid+"# * "+itemNum+"个#k\r\n";
					txt+="原价 #r"+itemPrice+"#k 元宝 折扣价 #r"+Math.floor(parseInt(itemPrice)*parseInt(itemDiscount)/10)+"#k 元宝（#e#r"+itemDiscount+"#k#n 折）#l\r\n";
					idList.push(id);
					num++;
				}
			}
			else
			{
				cm.sendOk("商品已刷新，请稍后重试~！");
				cm.dispose();
				return;
			}
            cm.sendSimple(txt);
        } else if (status == 1) {
				if(selection==-1){cm.dispose();return;}
				choice = selection;
				var selectSql="select * from shop_random where id="+idList[choice];
				var list=cm.sql_Select(selectSql);
				if(list.size()>0)
				{
					var itemid=list[0].get("itemid");
					var itemNum=list[0].get("itemnum");
					var itemPrice=list[0].get("price");
					var itemDiscount=list[0].get("discount");
					var txt="你选择的商品为：#v" + itemid + "# #b#z"+itemid+"##k\r\n";
					txt+="原价为：#r" + itemPrice+ "#k 元宝/份\r\n";
					txt+="折扣价为：#r"+Math.floor(parseInt(itemPrice)*parseInt(itemDiscount)/10)+"#k 元宝/份（#e#r"+itemDiscount+"#k#n 折）\r\n";
					txt+="每份数量：#r"+itemNum+"#k 个\r\n";
					txt+="剩余元宝：#r"+cm.getRMB()+"#k 点\r\n";
					txt+="#e请确认是否购买？#k";
					cm.sendYesNo(txt);
				}
				else
				{
					cm.sendOk("商品已刷新，请稍后重试~！");
					cm.dispose();
					return;
				}
				
        } else if (status == 2) {
			var selectSql="select * from shop_random where id="+idList[choice];
			var list=cm.sql_Select(selectSql);
			if(list.size()>0)
			{
				var itemid=list[0].get("itemid");
				var itemNum=list[0].get("itemnum");
				var itemPrice=list[0].get("price");
				var itemDiscount=list[0].get("discount");
				var truePrice=Math.floor(parseInt(itemPrice)*parseInt(itemDiscount)/10);
				if (!cm.canHold(itemid,itemNum)){
					cm.sendOk("请保证背包有充足的空间");
					cm.dispose();
					return;
				}
				if (cm.getRMB() < truePrice||truePrice<=0) {
					cm.sendOk("购买失败，你没有" + truePrice + "元宝");
					cm.dispose();
					return;
				} 
				else 
				{
					var characterId=cm.getPlayer().getId();
					var insertSql="insert into shop_random_log(playerid,itemid,itemnum,price,discount,trueprice,date) values("+characterId+","+itemid+","+itemNum+","+itemPrice+","+itemDiscount+","+truePrice+",now())";
					cm.sql_Insert(insertSql);
					cm.gainRMB(-truePrice);
					cm.gainItem(itemid, itemNum);
					var name=cm.getItemName(itemid);
					cm.worldSpouseMessage(0x2A,"[折扣商店] :恭喜玩家 "+ cm.getChar().getName() +" 在折扣商店购买了 "+itemNum+"个"+name);
					cm.sendOk("恭喜，购买成功。");
					status=-1;
				 }
			}
        }
		else
		{
			cm.dispose();
		}
    }
function getTime()
{
	var oDate = new Date();
	var hour = oDate.getHours();
	var minute=oDate.getMinutes();
	if(hour>=6&&hour<18)
	{
		hour=18-hour;
		minute=60-minute;
	}
	else if(hour>=18&&hour<24)
	{
		hour=24-hour+5;
		minute=60-minute;
	}
	else
	{
		hour=6-hour;
		minute=60-minute;
	}
	return hour+" 小时 "+minute+" 分后刷新商品和折扣";
}