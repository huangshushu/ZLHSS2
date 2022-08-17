var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(	
	                Array(1712000, 2000),//神秘徽章
					Array(1712005, 5000),//神秘拉莫斯
					Array(1712002, 5000),//神秘啾啾岛
					Array(1712001, 5000),//神秘消亡旅途
					Array(1712003, 5000),//神秘拉克兰
					//Array(1712006, 300000),//神秘埃斯佩拉
					Array(1712004, 5000),//阿尔卡那神秘徽章
					Array(2070019, 3000),//高科技电光镖
					Array(2070007, 2000),//月牙镖
					Array(2070024, 5000),//无限飞镖
					Array(2330008, 2000),//高科技电光镖
					Array(5211060, 5000),//三倍
					Array(5360015, 5000),//双爆
					Array(5030000, 1000),//精灵商人七日权
					Array(5044011, 5000),//冒险岛任意门
					Array(2049501, 2000),//银色刻印之印50%
                    Array(2049500, 3000),//金色刻印之印80%
					Array(2049506, 5000),//完美刻印之印100%
					Array(2048300, 2000),//银光潜能附加印章60% 
					Array(2048301, 3000),//金光潜能附加印章80%
					Array(2048304, 5000),//完美附加刻印之印100%													
					Array(2702000, 300),//内在能力还原器  
					Array(5062800, 800),//神奇还原器
					Array(5190011, 1500),//宠物训练技能
					Array(5190010, 2200),//宠物自动加BUFF技能
					Array(2590008, 3000),//附魔石
					Array(5520000, 3000),//宿命剪刀
					Array(5520001, 5000),//白金宿命剪刀
					Array(5570000, 3000),//金锤子
					Array(5220040, 300),//转蛋
					//Array(4001839, 15),//星星
					Array(2436324, 1000),//核心宝石
					Array(5062500, 1200),//大师附加神奇魔方
					Array(5062503, 3000),//附加潜能记忆魔方
					Array(5062002, 1000),//高级神奇魔方
					Array(5062009, 1200),//超级神奇魔方 
					Array(5062010, 1500),//终级神奇魔方
					//Array(5062024, 5000),//闪炫魔方
					Array(5537000, 1000),//怪怪卡包
					Array(5743003, 1000),//怪怪魔方
					Array(5750002, 1000),//星岩魔方
					//Array(2610001, 6000),//星岩电钻机
					Array(5062400, 6000),//神奇铁砧
					Array(5021011, 6000),//骷髅飞镖
					Array(5155001, 10000),//龙尾消除器
					Array(5155002, 10000),//生成标记消除器
					Array(5155003, 10000),//魔族之纹消除器
					Array(5390000, 100),//炽热情景喇叭
					Array(5390001, 100),//绚烂情景喇叭
					Array(5390034, 100),//爱心情景喇叭
					Array(5390034, 100),//鸡年情景喇叭
					Array(5390005, 100),//小老虎情景喇叭
					Array(5390006, 100),//咆哮老虎情景喇叭
					Array(5390007, 100),//球进了！情景喇叭
					Array(5390008, 100),//世界杯情景喇叭
					Array(5390019, 100),//新闻主播情景喇叭
					Array(5390020, 100),//我的演唱会情景喇叭
					Array(5390018, 100),//赤兔马情景喇叭
					Array(5390022, 100),//追赶小羊的狼情景喇叭
					Array(5390010, 100)//鬼出没情景喇叭

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
			text = "#r#h0##k,您好，欢迎您光顾点卷商店！\r\n";
			for (var i=0; i<itemlist.length; i++) {
            text+= "#b#L"+i+"##v"+ itemlist[i][0]+"##z"+ itemlist[i][0]+"##d   需点卷 #r"+itemlist[i][1]+"#k\r\n";

			}
            cm.sendSimple(text);
        } else if (a == 1) {
			selects = selection;
            cm.sendGetNumber("请输入你请你输入想要购买的数量\r\n\r\n#r1个需要" + itemlist[selects][1] + "点卷", 0, 0, 999999);
        } else if (a == 2) {
            buynum = selection;
            cm.sendNext("你想购买" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + (buynum * itemlist[selects][1]) + "点卷。");
        } else if (a == 3) {
            if (cm.getChar().getCSPoints(1) >= buynum * itemlist[selects][1]) {
                cm.getChar().modifyCSPoints(1, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
                cm.sendOk("购买成功了！");
				cm.worldSpouseMessage(0x18,"[ 点卷商店 ] ：玩家 "+ cm.getChar().getName() +" 在点卷商店购买"+ cm.getItemName(itemlist[selects][0]) +" " + buynum + "个 ");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的点卷。");
                cm.dispose();
            }
        }
    }//mode
}//f