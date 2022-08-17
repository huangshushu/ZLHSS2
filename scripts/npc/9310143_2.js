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
                hair_Colo_new = [30390,30580,30690,30970,30980,31570,31580,31600,31960,31970,32050,32080,32090,32100,32300,32310,32600,32610,32620,32630,32640,32650,32670,32680,32690,32700,32710,32720,33570];//男
            } else {
cm.gainItem(5150001, 1);//获得物品
                hair_Colo_new = [30500,30580,31390,31980,32060,32070,32110,32170,32180,32190,32200,32210,32220,32230,32240,32250,32290,32300,32310,32340,32350,32360,32370,32380,32390,32400,32410,32420,32450,32460,32480,32530,32540,32550,32570,32580,32590,32730,32740,32750,32760,32770,32780,32790,32800,32810,32820,32840,32850,32860,32870,32880,32890,32900,32910,32920,32930,32940,32950,32960,32970,32980,32990,33490,33560,33840,33870,33880,33890,33900,33910,33920,34020,34030];//女
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



