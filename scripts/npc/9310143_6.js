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
                hair_Colo_new = [40390,40510,47150,40040,46490,46410,40810,46450,43600,40540,46660,44800,43580,30040,40670,43140,40640,43820,35580,43900,46000,40050,31900,46460,46590,46340,43810,40800,42040,36310,35500,33690,35650,40820,43660,40990,46010,43670,43340,46600,40490,36980,36730,35010,33670,43760,46730,35970,46620,36920,46980,46970,32500,35590,36640,45150,43890,36110,43240,45120,45000,46480,46520,46560,46080,46230,47700,46860,46400,46900,46720,36180];//男
            } else {
cm.gainItem(5150001, 1);//获得物品
                hair_Colo_new = [47420,37960,44940,41850,44420,48730,41740,48350,43220,47170,48590,48080,47460,47360,47430,32500,47370,43870,44990,38430,41750,44410,41860,47040,41710,44500,47090,41150,44850,48220,42090,48040,44980,43980,38190,44120,44820,48960,48970,47030,35970,47870,48950,37140,37260,38020,47080,48440,37630,47620,47570,46690,43640,41600,41590,37880,35620,34900,34260,48870,48460,47450,44510,44490,44380,44430,34730,43160,45140,47440,47710,47640,46740,48880,38570,41790];//女
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



