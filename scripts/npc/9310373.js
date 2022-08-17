importPackage(Packages.database);
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 道具 = [2044103,2044503,2043303,2043803,2044203,2040710,2044003,2044815,2044303,2044908,2040303,2044603,2044703,2043003,2043703,2043003,2040711,2044403,2043203];
var 道具1 = [1302063,1402224,1492030,1422039,1472077,1322065,1442071,1462056,1402053,1432050,1332081,1302105,1482029,1452062];
var 道具2 = [1382049,1382050,1382051,1382052];
var 道具3 = [1902007,1902032,1902018,1902042,1902001];
var 坐骑登记 = [2,3,4,5,6,7,8,9,10,10,10,10,10];
var 力量 = [100,150,200,250,300,350,400,450,500,500,500,500,500];
var 敏捷 = [100,150,200,250,300,350,400,450,500,500,500,500,500];
var 智力 = [100,150,200,250,300,350,400,450,500,500,500,500,500];
var 运气 = [100,150,200,250,300,350,400,450,500,500,500,500,500];
var 选项 ;
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
      if(status == 0)
	  {
		  text = "回收机\r\n"
		  text += "#L1#装备回收#l\r\n"
		  text += "#L2#必成回收#l"
		  cm.sendNext(text);
			
	  }
	  else if(status == 1)
	  {
		  选项= selection;
		  if(selection == 1)
		  {
			var text = "装备回收(第一格)\r\n";
		
		        var statup = new java.util.ArrayList();
				 var item = cm.getInventory(1).getItem(1);
				if (item == null) {
                    cm.sendOk("你装备栏第一格没有装备!");
                    cm.dispose();
					 return;
                }
				var itemId1 = cm.getInventory(1).getItem(1).getItemId();
				var item = cm.getInventory(1).getItem(1).copy();
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				var type =  ii.getInventoryType(itemId1);
				var sx0 = item.getStr();//力量0
				var sx1 = item.getDex();//敏捷1
				var sx2 = item.getInt();//智力2
				var sx3 = item.getLuk();//运气3
				var sx4 = item.getWatk();//物攻6
				var sx5 = item.getMatk();//魔攻7
              text +="当前第一格装备为:#v"+itemId1+"#,确定要回收吗?"
			
			cm.sendYesNo(text);
		  }
		  else
		  {
			  var text = "必成回收\r\n";

				for(var ii = 0 ;ii<道具.length;ii++)
				{
					if(cm.haveItem(道具[ii]))
					{
						text += "#L"+ii+"##v"+道具[ii]+"#"
					}
				}
				if(text == "必成回收\r\n")
				{
					text += "没有必成卷"
				}
			}
			cm.sendNext(text);
		  }
			 
	  
	  else if (status == 2)
	  {
		  if(选项 == 1)
		  {
			  text = ""
				var statup = new java.util.ArrayList();
				  var item = cm.getInventory(1).getItem(1);
				if (item == null) {
                    cm.sendOk("你装备栏第一格没有装备!");
                    cm.dispose();
					 return;
                }
				var itemId1 = cm.getInventory(1).getItem(1).getItemId();
				var item = cm.getInventory(1).getItem(1).copy();
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				var type =  ii.getInventoryType(itemId1);
				var sx0 = item.getStr();//力量0
				var sx1 = item.getDex();//敏捷1
				var sx2 = item.getInt();//智力2
				var sx3 = item.getLuk();//运气3
				var sx4 = item.getWatk();//物攻6
				var sx5 = item.getMatk();//魔攻7
				for(var iii = 0; iii<道具3.length;iii++)
				{
					if(itemId1 == 道具3[iii])
					{
						cm.gainItem(itemId1,-1);
						cm.gainItem(4031456,700);
						text +="成功回收700枫叶珠"
						cm.dispose();
						cm.sendOk(text);
						return;
					}
				}
				for(var ii = 0; ii<道具1.length;ii++)
				{
					if(itemId1 == 道具1[ii])
					{
						cm.gainItem(itemId1,-1);
						cm.gainItem(3994731,10);
						text +="成功回收情人币X10"
						cm.dispose();
						cm.sendOk(text);
						return;
					}
				}
				for(var i = 0; i<道具2.length;i++)
				{
					if(itemId1 == 道具2[i])
					{
						cm.gainItem(itemId1,-1);
						cm.gainItem(3994731,6);
						text +="成功回收情人币X6"
						cm.dispose();
						cm.sendOk(text);
						return;
					}
					
				}
				if(itemId1 == 1702150)
				{
					text += "冰刀盾不可回收！"
				}
				else if(sx4 >= 100||sx5 >= 100)
				{
					cm.gainItem(itemId1,-1);
					cm.gainMeso(6666666);
					text += "成功回收666W！"
				}
				else if(sx0>=10&&sx1>=10&&sx2>=10&&sx3>=10)
				{
					cm.gainItem(itemId1,-1);
					cm.gainMeso(6666666);
					text += "成功回收666W！"
				}
				else 
				{
					text += "装备太垃圾,卖商店吧！"
				}
				cm.dispose();
				cm.sendOk(text);
		  }
		  else if(选项 == 2)
		  {
			  text =""
			  cm.gainItem(道具[selection],-1);
			  cm.gainMeso(10000000);
			text +="成功回收1000W"
			cm.dispose();
			cm.sendOk(text);
			return;
			  
		  }
		  
	  }
	  
}
