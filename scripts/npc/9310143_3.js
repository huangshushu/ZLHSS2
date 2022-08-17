/* Natalie
	Henesys VIP Hair/Hair Color Change.
*/
var status = -1;
var beauty = 0;
var hair_Colo_new;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
       // cm.sendSimple("我是美发店老板娜塔丽。只要你有皇家理发劵#b射手村美发店高级会员卡#k，就把头发交给我吧。选择你想做的事情吧。\r\n#b#L0#更换发型(使用#v5150001#)#l\r\n#L1#染色(使用#v5151001#)#l");
		
			cm.sendSimple("你好这里是520美发师。\r\n\r\n#L0#更换发型：[#r全部免费#k]#l\r\n#L1#更换颜色：[#r全部免费#k]#l\r\n");
		
    } else if (status == 1) {
        if (selection == 0) {
            var hair = cm.getPlayerStat("HAIR");
            hair_Colo_new = [];
            beauty = 1;
            if (cm.getPlayerStat("GENDER") == 0) {
cm.gainItem(5150001, 1);//获得物品
                hair_Colo_new = [35840,35850,35860,35870,35880,35890,35900,35910,35920,35930,35940,35980,35990,36500,39060,39280,39290,39300,39310,39320,39340,39350,39360,39370,39390,39400,39410,39420,39430,39440,39450,39490,39500,39510,39520,39530,39540,39560,39570,39580,39590,39600,39610,39620,39630,39640,39650];//男
            } else {
cm.gainItem(5150001, 1);//获得物品
                hair_Colo_new = [34390,34460,34550,34570,34580,35140,35370,35580,35590,35610,35670,35740,35810,35970,36610,36870,36960,36970,37150,37160,37390,37470,37480,38140,38820,38830,38950,38960,38970,38980,38990,39000,39010,39020,39030,39040,39050,39060,39070,39330,39460,39480,39550,39660,39670,39680,39690,39700,39710,39720,39730,39740,39750,39760,39770,39780,39790,39800,39810,39820,39830,39840,39850,39860,39870,39880,39890,39900,39910,39920,39930,39940,39960,39970,39980,37170,47450.44510,34730,43160];//女
            }
            for (var i = 0; i < hair_Colo_new.length; i++) {
                hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
            }
            cm.askAvatar("请慢慢挑选自己喜欢的发型！\r\n发现翻页崩溃等问题一定要反馈给GM哦！", 5150001, hair_Colo_new);
        } else if (selection == 1) {
            var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
            hair_Colo_new = [];
            beauty = 2;
            for (var i = 0; i < 8; i++) {
                hair_Colo_new[i] = currenthaircolo + i;
            }
cm.gainItem(5151001, 1);//获得物品
            cm.askAvatar("慢慢挑选你喜欢的颜色！\r\n发现翻页崩溃等问题一定要反馈给GM哦！", 5151001, hair_Colo_new);
        }
    } else if (status == 2) {
        if (beauty == 1) {
            if (cm.setAvatar(5150001 , hair_Colo_new[selection]) == 1) {
                cm.sendOk("理发好了，怎么样？看看你的新发型吧！");
                cm.喇叭(3, "[" + cm.getPlayer().getName() + "]更改了新发型~");
            } else {
                cm.sendOk("嗯……你好像没有美发店专用会员卡啊？不好意思，没有会员卡的话，我就不能帮你理发。");
            }
        } else {
            if (cm.setAvatar(5151001, hair_Colo_new[selection]) == 1) {
                cm.sendOk("好了，让朋友们赞叹你的新发色吧！");
                cm.喇叭(3, "[" + cm.getPlayer().getName() + "]更改了发型颜色看看TA~");
            } else {
                cm.sendOk("嗯… 看来你没有我们美发店的会嘛！不好意思，如果没有会员卡，我们不可以给你染头发。");
            }
        }
        cm.dispose();
    }
}



