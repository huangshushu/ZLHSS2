var status = 0;
var itemList = 
Array(     
			Array(2043303,700,1,1), //短剑
			Array(2043703,700,1,1), //短杖
			Array(2043803,700,1,1), //长杖
			Array(2044003,700,1,1), //双手剑
			Array(2044303,700,1,1), //枪 
			Array(2044403,700,1,1), //矛
			Array(2044503,700,1,1), //弓
			Array(2044603,700,1,1), //弩
			Array(2044703,700,1,1), //拳套
			Array(2044815,700,1,1), //指节
			Array(2044908,700,1,1), //短枪
			Array(2043003,700,1,1), //单手剑
			Array(2043103,700,1,1), //单手斧 
			Array(2043203,700,1,1), //单手钝器
			Array(2044103,700,1,1), //双手斧
			Array(2044203,700,1,1), //双手钝器
			Array(2044019,700,1,1), //双手魔力
			Array(2040303,700,1,1), //耳环智力 
			Array(2040506,700,1,1), //全身敏捷
			Array(2040710,700,1,1), //鞋子跳跃
			Array(2040007,700,1,1), //头盔体力 
			Array(2040006,700,1,1), //头盔防御   
			Array(2040403,700,1,1), //上衣防御  
			Array(2040507,700,1,1), //全身防御
			Array(2040603,700,1,1), //裤裙防御
			Array(2040709,700,1,1), //鞋子敏捷
			Array(2040806,700,1,1), //手套敏捷 
			Array(2040711,700,1,1), //鞋子速度
			Array(2040903,700,1,1), //盾牌防御
			Array(2041024,700,1,1), //披风魔防
			Array(2041025,700,1,1), //披风防御  
			Array(2040807,100,1,1) //手套攻击
			//-------第一个是物品ID，第二个是抽奖概率，第三个是抽奖数量,第四个是是否提示抽奖广播(大于1就会广播)
);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("箱子抽奖：#v2049100#混沌卷轴/#v2340000#祝福卷轴/#v2000005#超级药水x50.随机抽取其一.");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.haveItem(2022465, 1)) {
				var str1 = "";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendOk("这里是可以抽取许多好东西哦！.\r\n\r\n比赛所有奖品如下#r[真实,无欺骗!]:" + str1);
			} else {
            var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendOk("这里是可以抽取许多好东西哦！\r\n\r\n比赛所有奖品如下#r[真实,无欺骗!]:" + str1);
				cm.dispose();
			}
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * +700);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = cm.gainGachaponItem(itemId, quantity, "箱子福利抽奖", notice);
            if (item != -1) {
                cm.gainItem(2022465, -1);
                cm.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
            } else {
                cm.sendOk("你确实有#b#t2022428##k吗？如果是，请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("今天的运气可真差，什么都没有拿到。但是作为鼓励，送给你5颗#v4001322#作为奖励.");
            cm.gainItem(2022465, -1);
            cm.gainItem(4001322, 5);
            cm.safeDispose();
        }
    }
}