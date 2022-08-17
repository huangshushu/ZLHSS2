var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var typed = 0; // 记录玩家选择的类型
var itemlist = null;
var searchItemList = null;
var lastItemList = null;
var isSearch = false;
var typeList = Array(
	Array(0, "帽子"),
	Array(1, "上衣"),
	Array(2, "套装"),
	Array(3, "裤裙"),
	Array(4, "鞋子"),
	Array(5, "手套"),
	Array(6, "披风"),
	Array(7, "武器"),
	Array(8, "戒指"),
	Array(999, "其他")
);
function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
		} else if (a == 0) {
			text = "#h0#，欢迎来到#e#r绝版点装商城#d<试穿模式>#n#k，您可以按时装的名称进行搜索，或者选择分类进行浏览：\r\n\r\n";
			text += "#d\t- 目前为试穿模式，试穿时间为3分钟。\r\n#k";
			text += "#d#e#L2014#我要进行搜索#l #r#L2015#我要进入购买模式#l#k#n\r\n\r\n"
			for(var i=0; i<typeList.length; i++) {
				text += "#b#L"+i+"#"+typeList[i][1]+"#l\t";
				if (!((i+1)%4))
					text +="\r\n";
			}
			cm.sendSimple(text);
        } else if (a == 1) {
			if (selection == 2014) {
				a = 0;
				cm.sendGetText("请输入您要搜索的点装名称，可以进行模糊查询");
				isSearch=true;
			} else if (selection == 2015) {
				cm.dispose();
				cm.openNpc(2470046, 1055);
			} else {
				typed = selection;
				if (isSearch) {
					searchItemList = getItemListByName(cm.getText());
					typed = 9;
					lastItemList = searchItemList;
					text = "#h0#,您搜索的【#r"+cm.getText()+"#k】物品如下：\r\n\r\n#b";
				} else {
					if (itemlist == null)
						itemlist = getItemList();
					lastItemList = itemlist;
					text = "#h0#,您可以在这里兑换#e#b试穿点装【"+typeList[typed][1]+"】#n#k，请选择你想要试穿的物品：\r\n\r\n#b";
				}
				
				if (lastItemList.length<=0)
				{
					a = -1;
					text+="未找到您要找的物品，请联系管理员进行添加。";
				}
				for (var i=0; i<lastItemList.length; i++) {
					if (getItemType(lastItemList[i][0])!=typeList[typed][0] && !isSearch)
						continue;
					text += "#L" + (i) + "##i" + lastItemList[i] + ":##t" + lastItemList[i] + "# - #r300#b抵用券\r\n";
				}
				isSearch = false;
				cm.sendSimple(text);
			}
        } else if (a == 2) {
			selects = selection;
            buynum = 1;
            cm.sendYesNo("你想购买" + buynum + "个#r#i" + lastItemList[selects][0] + "##k？\r\n你将使用掉300抵用券。\r\n#e#r试穿时间为3分钟#n#k");
        } else if (a == 3) {
			if (cm.getSpace(1)<1) {
				cm.sendOk('背包栏位不足');
				cm.dispose();
				return;
			}
			var itemid = lastItemList[selects][0];
			if (!cm.isCash(itemid)) {
				cm.sendOk("您购买的物品并非现金道具，无法通过试穿模式购买。");
				cm.dispose();
				return;
			}
            if (cm.getPlayer().getCSPoints(2)>=300) {
               	cm.gainNX(2, -300)
				//cm.gainItem(4310014, -buynum * lastItemList[selects][1]);
                cm.gainItemPeriod(lastItemList[selects][0], buynum, 3*60*1000);
                cm.sendOk("购买成功了！");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的抵用券。");
                cm.dispose();
            }
        }
    }//mode
}//f

//获取装备类型
function getItemType(itemid) {
	var type = Math.floor(itemid/10000);
	switch (type) {
		case 100:
			return 0;  //帽子
		case 104:
			return 1;  //上衣
		case 105:
			return 2;  //套装
		case 106:
			return 3;  //裤裙
		case 107:
			return 4;  //鞋子
		case 108: 
			return 5;  //手套
		case 110:
			return 6;  //披风
		case 111:
			return 8;  //戒指
		default:
			if (type==120)
				return 999;
			if (type==135)
				return 999;
			var type=Math.floor(type/10);
			if (type==12 || type==13 || type==14 || type==15 || type==17) {
				return 7;  //武器
			}
			return 999; 
	}
}

//获取商店列表
function getItemList() {
	var conn = cm.getConnection();
	var sql = "select itemid, itemprice from npccashshop where verify >= 1 order by id desc, itemprice asc";
	var pstmt = conn.prepareStatement(sql);
	var rs = pstmt.executeQuery();
	var rsList = Array();
	var discount = 1;
	if (cm.haveItem(1142574) || cm.getPlayer().getMedalText().indexOf("官方认证女生")!=-1) {
		discount=0.9;
	}
	//java.lang.System.out.println(cm.getPlayer().getMedalText());
	while(rs.next())
	{
		rsList.push(Array(rs.getInt("itemid"), Math.floor(rs.getInt("itemprice")*discount)));
	}
	rs.close();
	pstmt.close();
	//conn.close();
	return rsList;
}
function getItemListByName(name) {
	var conn = cm.getConnection();
	name = name.replaceAll(".*([';]+|(--)+).*", " ");
	var sql = "select itemid, itemprice from npccashshop where verify >= 1 and itemname like '%"+name+"%' order by id desc, itemprice asc";
	var pstmt = conn.prepareStatement(sql);
	var rs = pstmt.executeQuery();
	var rsList = Array();
	var discount = 1;
	if (cm.haveItem(1142574) || cm.getPlayer().getMedalText().indexOf("官方认证女生")!=-1) {
		discount=0.9;
	}
	while(rs.next())
	{
		rsList.push(Array(rs.getInt("itemid"), Math.floor(rs.getInt("itemprice")*discount)));
	}
	rs.close();
	pstmt.close();
	//conn.close();
	return rsList;
}

function getNeeds(quantity) {
	var _xq = quantity;
	var _gq = 0;
	if (!cm.haveItem(4310014, quantity)) {
		_xq = cm.getItemQuantity(4310014);
		_gq = quantity-_xq;
	}
	return Array(_xq, _gq);
}
function pay(q) {
	if (q[0]>0)
		cm.gainItem(4310014, -q[0])
	if (q[1]>0)
		cm.gainItem(4000463, -q[1]);
}
function canBuy(q) {
	if (cm.haveItem(4000463, q[1]))
		return true;
	else
		return false;
}