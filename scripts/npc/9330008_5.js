var status = 0;
var itemList = 
Array(     
			Array(2340000,100,1,1), //祝福
			Array(2000005,800,10,1), //超级药水
			Array(1051255,200,1,1), //黄色晚礼服--女款
			Array(1050209,250,1,1), //黄色晚礼服--男款
			Array(1302021,300,1,1), //橡皮榔头
			Array(1432009,300,1,1), //木精灵枪
			Array(1402044,50,1,1), //南瓜灯笼
			Array(1402014,10,1,1), //温度计
			Array(1372035,100,1,1), //火
			Array(1372036,100,1,1), //毒
			Array(2044901,500,1,1), //短枪攻击卷60
Array(2044902,400,1,1), //短枪攻击卷10
Array(2044903,500,1,1), //短枪攻击卷70
Array(2044904,500,1,1), //短枪攻击卷30
Array(2044906,500,1,1), //短枪攻击卷65
Array(2044907,500,1,1), //短枪攻击卷15


			Array(1372037,100,1,1), //冰
			Array(1372038,100,1,1), //雷
			Array(1382045,70,1,1), //火
			Array(1382046,70,1,1), //毒
			Array(1382047,70,1,1), //冰
			Array(1382048,70,1,1), //雷
			Array(1372032,100,1,1), //佘太君
			Array(1432010,120,1,1), //奥丁
			Array(1452017,400,1,1), //魔灵弓
			Array(2070006,80,1,1), //齿轮
			Array(3012001,100,1,1), //篝火
			Array(5150040,300,1,1), //皇家卡
			Array(3010582,80,1,1), //北极熊椅子
			Array(2022178,800,10,1), //万能药
			Array(4001126,600,200,1), //枫叶
			Array(2022118,800,2,1), //管理员的祝福
			Array(5122000,800,3,1), //熊宝宝
			Array(1302013,400,1,1), //红色鞭子
			Array(1302061,300,1,1), //蔓藤鞭子
			Array(1302049,80,1,1), //光线鞭子
			Array(2049100,100,1,1) //混沌
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
        if (cm.haveItem(2022468, 1)) {
				var str1 = "";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendOk("这里是可以抽取许多好东西哦！\r\n\r\n比赛所有奖品如下#r[真实,无欺骗!]:" + str1);
			} else {
            var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendOk("这里是可以抽取许多好东西哦！\r\n\r\n比赛所有奖品如下#r[真实,无欺骗!]:" + str1);
				cm.dispose();
			}
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * +900);
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
                cm.gainItem(2022468, -1);
                cm.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
            } else {
                cm.sendOk("你确实有#b#t2022428##k吗？如果是，请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("今天的运气可真差，什么都没有拿到。但是作为鼓励，送给你5颗#v4001322#作为奖励.");
            cm.gainItem(2022468, -1);
            cm.gainItem(4001322, 5);
            cm.safeDispose();
        }
    }
}