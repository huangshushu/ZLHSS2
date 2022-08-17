var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed=0;
var RMB = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {

		if(cm.getJob()==122){
			cm.sendOk("对不起，我不想和圣骑士说话");
			cm.dispose();
			return;
		}

            var selStr = "#d欢迎来到皮皮冒险岛爆你肝任务区域（200级方可开爆）；\r\n收集以下物品可以兑换卷轴、点卷、魔方、星星、涅磐火焰等等道具。\r\n\r\n";
            //selStr +="#L1##r"+aaa+" 破攻任务 #b#z4000000#" + cm.getEventCount("爆肝蓝色蜗牛壳") + "/2次#r     [详情点击查看]#l#k\r\n";
            //selStr +="#L2##r"+aaa+" 星星任务 #b#z4000001#" + cm.getEventCount("爆肝花蘑菇盖") + "/2次#r       [详情点击查看]#l#k\r\n";
            selStr +="#L4##r"+aaa+" 火花任务 #b#z4000004#" + cm.getEventCount("爆肝绿液球") + "/3次#r         [详情点击查看]#l#k\r\n";
            //selStr +="#L5##r"+aaa+" 魔方任务 #b#z4000654#" + cm.getEventCount("爆肝黑暗吊坠") + "/2次#r       [详情点击查看]#l#k\r\n";
            //selStr +="#L6##r"+aaa+" 魔方任务 #b#z4000134#" + cm.getEventCount("爆肝大海贼的帆") + "/2次#r     [详情点击查看]#l#k\r\n";
            //selStr +="#L7##r"+aaa+" 卷轴任务 #b收集矿石" + cm.getEventCount("爆肝矿石") + "/2次#r       [详情点击查看]#l#k\r\n";
            //selStr +="#L8##r"+aaa+" 卷轴任务 #b#z4000021#" + cm.getEventCount("爆肝动物皮") + "/2次#r         [详情点击查看]#l#k\r\n";
            //selStr +="#L9##r"+aaa+" 点卷任务 #b#z4021016#" + cm.getEventCount("爆肝最高级物品结晶") + "/10次#r[详情点击查看]#l#k\r\n";
            //selStr +="#L10##r"+aaa+" 金币任务 #b#z4000073#" + cm.getEventCount("爆肝独角狮硬角") + "/10次#r    [详情点击查看]#l#k\r\n";
            //selStr +="#L11##r"+aaa+" VIP理财  #b#z4032521#" + cm.getEventCount("每日兑换") + "/1次#r      [详情点击查看]#l#k\r\n";
            //selStr +="#L12##r"+aaa+" 抵用任务 #b#z4009169#" + cm.getEventCount("爆肝花瓣") + "/2次#r   [详情点击查看]#l#k\r\n";
            selStr +="#L14##r"+aaa+" 铜币任务 #b#z4000002#" + cm.getEventCount("爆肝蝴蝶结") + "/1次#r         [详情点击查看]#l#k\r\n";
            //selStr +="#L15##r"+aaa+" 冬日任务 #b#z4000051#" + cm.getEventCount("爆肝野狼之尾") + "/2次#r         [详情点击查看]#l#k\r\n";
            //selStr +="#L16##r"+aaa+" 整形任务 #b#z4000052#" + cm.getEventCount("爆肝白狼之尾") + "/2次#r         [详情点击查看]#l#k\r\n";
            selStr +="#L17##r"+aaa+" 椅子任务 #b#z4000109#" + cm.getEventCount("爆肝玩具小鸭") + "/1次#r         [详情点击查看]#l#k\r\n";
            //selStr +="#L18##r"+aaa+" 经验任务 #b#z4000756#" + cm.getEventCount("爆肝紫贝壳") + "/2次#r         [详情点击查看]#l#k\r\n";
            //selStr +="#L19##r"+aaa+" 精髓任务 #b#z4000286#" + cm.getEventCount("爆肝稻草玩偶") + "/2次#r         [详情点击查看]#l#k\r\n";
            selStr +="#L20##r"+aaa+" 还原任务 #b#z4000006#" + cm.getEventCount("爆肝三眼章鱼触角") + "/2次#r         [详情点击查看]#l#k\r\n";
            selStr +="#L21##r"+aaa+" 元宝抽奖 #b#z4000622#" + cm.getEventCount("爆肝蓝色蝴蝶结") + "/1次#r         [详情点击查看]#l#k\r\n";
            selStr +=" \r\n\r\n";
            cm.sendSimpleN(selStr, 716, 1540104);
        } else if (status == 1) {
            if (selection == 1) {
                typed=1;
                cm.sendYesNo("- #d#e任务要求：#n#k\r\n\r\n#b当前拥有#z4000000#个数为：         #r" + cm.getItemQuantity(4000000) + " / 200 个\r\n\r\n#b当前任务奖励 #r 破功箱子5个 \r\n\r\n");
            } else if (selection == 2) {
                typed=2;
                cm.sendYesNo("- #d#e任务要求：#n#k\r\n\r\n#b当前拥有#z4000001#个数为：         #r" + cm.getItemQuantity(4000001) + " / 200 个\r\n\r\n#b当前任务奖励 #r 星星500个 \r\n\r\n");
            } else if (selection == 3) {
                typed=3;
                cm.sendYesNo("- #d#e任务要求：#n#k\r\n\r\n#b当前拥有#z4000016#个数为：         #r" + cm.getItemQuantity(4000016) + " / 1000 个\r\n\r\n#b当前任务奖励 #r #v4001006#50个 \r\n\r\n");
            } else if (selection == 4) {
                typed=4;
                cm.sendYesNo("- #d#e任务要求：#n#k\r\n\r\n#b当前拥有#z4000004#个数为：         #r" + cm.getItemQuantity(4000004) + " / 500 个\r\n\r\n#b当前任务奖励 #r 涅槃火焰随机箱10个 \r\n\r\n");
            } else if (selection == 5) {
                typed=5;
                cm.sendYesNo("- #d#e任务要求：#n#k\r\n\r\n#b当前拥有#z4000654#个数为：         #r" + cm.getItemQuantity(4000654) + " / 400 个\r\n\r\n#b当前任务奖励 #r #v5062024#10个 \r\n\r\n");
            } else if (selection == 6) {
                typed=6;
                cm.sendYesNo("- #d#e任务要求：#n#k\r\n\r\n#b当前拥有#z4000134#个数为：         #r" + cm.getItemQuantity(4000134) + " / 300 个\r\n\r\n#b当前任务奖励 #r #v5062500#25个 \r\n\r\n");
            } else if (selection == 7) {
                typed=7;
                cm.sendYesNo("- #d#e任务要求：#n#k\r\n\r\n#b当前拥有\r\n#r#z4004000#个数为：          #r" + cm.getItemQuantity(4004000) + " / 200 个\r\n\r\n#b当前任务奖励 #r #v2049116#3张 #v2049137#5张 \r\n\r\n");
            } else if (selection == 8) {
                typed=8;
                cm.sendYesNo("- #d#e任务要求：#n#k\r\n\r\n#b当前拥有#z4000021#个数为：         #r" + cm.getItemQuantity(4000021) + " / 500 个\r\n\r\n#b当前任务奖励 #r #v2340000#10张 \r\n\r\n");
            } else if (selection == 9) {
                typed=9;
                cm.sendYesNo("- #d#e任务要求：#n#k\r\n\r\n#b当前拥有#z4021016#个数为：         #r" + cm.getItemQuantity(4021016) + " / 100 个\r\n\r\n#b当前任务奖励 #r 10000点券 \r\n\r\n");
            } else if (selection == 10) {
                typed=10;
                cm.sendYesNo("- #d#e任务要求：#n#k\r\n\r\n#b当前拥有#z4000073#个数为：         #r" + cm.getItemQuantity(4000073) + " / 100 个\r\n\r\n#b当前任务奖励 #r #v4001848#3个 \r\n\r\n");
            } else if (selection == 11) {
                typed=11;
                cm.sendYesNo("- #d#e任务要求：#n#k\r\n\r\n#b当前拥有#z4032521#个数为：         #r" + cm.getItemQuantity(4032521) + " / 1 个\r\n\r\n#b当前任务奖励 #r #v2430865#1天权 \r\n\r\n");
            } else if (selection == 12) {
                typed=12;
                cm.sendYesNo("- #d#e任务要求：#n#k\r\n\r\n#b当前拥有#z4009169#个数为：         #r" + cm.getItemQuantity(4009169) + " / 200 个\r\n\r\n#b当前任务奖励 #r #v2431741#10个 \r\n\r\n");
            } else if (selection == 13) {
                typed=13;
                cm.sendYesNo("- #d#e任务要求：#n#k\r\n\r\n#b当前拥有#z4310143#个数为：         #r" + cm.getItemQuantity(4310143) + " / 15 个\r\n\r\n#b当前任务奖励 #r #v2430683#X卷随机箱子2个 \r\n\r\n");
            } else if (selection == 14) {
                typed=14;
                cm.sendYesNo("- #d#e任务要求：#n#k\r\n\r\n#b当前拥有#z4000002#个数为：         #r" + cm.getItemQuantity(4000002) + " / 1000 个\r\n\r\n#b当前任务奖励 #r #v2430207#春节铜币X10个 \r\n\r\n");
            } else if (selection == 15) {
                typed=15;
                cm.sendYesNo("- #d#e任务要求：#n#k\r\n\r\n#b当前拥有#z4000051#个数为：         #r" + cm.getItemQuantity(4000051) + " / 100 个\r\n\r\n#b当前任务奖励 #r #v4310199#冬日币X5个 \r\n\r\n");
            } else if (selection == 16) {
                typed=16;
                cm.sendYesNo("- #d#e任务要求：#n#k\r\n\r\n#b当前拥有#z4000052#个数为：         #r" + cm.getItemQuantity(4000052) + " / 200 个\r\n\r\n#b当前任务奖励 #r #v5152098#整形卡X5个#v5150139#美发卡X5个 \r\n\r\n");
            } else if (selection == 17) {
                typed=17;
                cm.sendYesNo("- #d#e任务要求：#n#k\r\n\r\n#b当前拥有#z4000109#个数为：         #r" + cm.getItemQuantity(4000109) + " / 1000 个\r\n\r\n#b当前任务奖励 #r #v2432971#椅子盒X2个 \r\n\r\n");
            } else if (selection == 18) {
                typed=18;
                cm.sendYesNo("- #d#e任务要求：#n#k\r\n\r\n#b当前拥有#z4000756#个数为：         #r" + cm.getItemQuantity(4000756) + " / 100 个\r\n\r\n#b当前任务奖励 #r #v2435537#经验袋X5个 \r\n\r\n");
            } else if (selection == 19) {
                typed=19;
                cm.sendYesNo("- #d#e任务要求：#n#k\r\n\r\n#b当前拥有#z4000286#个数为：         #r" + cm.getItemQuantity(4000286) + " / 200 个\r\n\r\n#b当前任务奖励 #r #v4009453#经验袋X50个 \r\n\r\n");
            } else if (selection == 20) {
                typed=20;
                cm.sendYesNo("- #d#e任务要求：#n#k\r\n\r\n#b当前拥有#z4000006#个数为：         #r" + cm.getItemQuantity(4000006) + " / 300 个\r\n\r\n#b当前任务奖励 #r #v2049600#还原卷轴X2个 \r\n\r\n");
            } else if (selection == 21) {
                typed=21;
                cm.sendYesNo("- #d#e任务要求：#n#k\r\n\r\n#b当前拥有#z4000622#个数为：         #r" + cm.getItemQuantity(4000622) + " / 1000 个\r\n\r\n#b当前任务奖励 #r #v2436384#X1个 \r\n\r\n");
            }
        } else if (status == 2) {
            if(typed==1){
                if (cm.haveItem(4000000,400) && cm.getEventCount("爆肝蓝色蜗牛壳") <= 1 && cm.getLevel() >= 200) {
                    cm.gainItem(4000000, -200);
                    cm.gainItem(2430402,5);
                    //cm.gainNX(2, 50000);
                    //cm.gainGamePoints(50000);
                    cm.setEventCount("爆肝蓝色蜗牛壳");
                    //cm.gainPlayerPoints(10);
                    cm.sendOk("#b成功获得了 #r破功箱子5个 #b 奖励。");
                    cm.worldSpouseMessage(0xA, "『爆肝任务』 : "+ cm.getChar().getName() +" 完成每日爆肝任务一,获得了破功箱子5个");
                    cm.dispose();;
                } else {
                    cm.sendOk("您的物品不够或者背包空间不足或者完成指定次数或低于200级.");
                    cm.dispose();
                }
            } else if (typed==2){
                if (cm.haveItem(4000001,400) && cm.getSpace(5) >= 1 && cm.getEventCount("爆肝花蘑菇盖") <= 1 && cm.getLevel() >= 200) {
                    cm.gainItem(4000001, -200);
                    cm.gainItem(4001839,500);
                    cm.setEventCount("爆肝花蘑菇盖");
                    cm.sendOk("#b成功获得了 #r星星500个 #b 奖励。");
                    cm.worldSpouseMessage(0xA, "『爆肝任务』 : "+ cm.getChar().getName() +" 完成每日爆肝任务二,获得了星星500个");
                    cm.dispose();;
                } else {
                    cm.sendOk("您的物品不够或者背包空间不足或者完成指定次数或低于200级.");
                    cm.dispose();
                }
            } else if (typed==3){
                if (cm.haveItem(4000016,1000) && cm.getSpace(5) >= 1 && cm.getEventCount("爆肝红色蜗牛壳") <= 1 && cm.getLevel() >= 200) {
                    cm.gainItem(4000016, -1000);
                    cm.gainItem(4001006,50);
                    cm.setEventCount("爆肝红色蜗牛壳");
                    cm.sendOk("#b成功获得了 #r火焰羽毛50个  #b 奖励。");
                    cm.worldSpouseMessage(0xA, "『爆肝任务』 : "+ cm.getChar().getName() +" 完成每日爆肝任务三，获得了火焰羽毛50个");
                    cm.dispose();;
                } else {
                    cm.sendOk("您的物品不够或者背包空间不足或者完成指定次数或低于200级.");
                    cm.dispose();
                }
            } else if (typed==4){
                if (cm.haveItem(4000004,500) && cm.getSpace(2) >= 3 && cm.getEventCount("爆肝绿液球") <= 1 && cm.getLevel() >= 200) {
                    cm.gainItem(4000004, -500);
                    cm.gainItem(2436489,10);
                    cm.setEventCount("爆肝绿液球");
                    cm.sendOk("#b成功获得了 #r涅槃火焰随机箱10个  #b 奖励。");
                    cm.worldSpouseMessage(0xA, "『爆肝任务』 : "+ cm.getChar().getName() +" 完成每日爆肝任务四，获得了涅槃火焰随机箱10个");
                    cm.dispose();;
                } else {
                    cm.sendOk("您的物品不够或者背包空间不足或者完成指定次数或低于200级.");
                    cm.dispose();
                }
            } else if (typed==5){
                if (cm.haveItem(4000654,400) && cm.getSpace(2) >= 3 && cm.getEventCount("爆肝黑暗吊坠") <= 1 && cm.getLevel() >= 200) {
                    cm.gainItem(4000654, -400);
                    cm.gainItem(5062024,10);
                    cm.setEventCount("爆肝黑暗吊坠");
                    cm.sendOk("#b成功获得了 #r闪炫魔方10个  #b 奖励。");
                    cm.worldSpouseMessage(0xA, "『爆肝任务』 : "+ cm.getChar().getName() +" 完成每日爆肝任务五，获得了闪炫魔方10个");
                    cm.dispose();;
                } else {
                    cm.sendOk("您的物品不够或者背包空间不足或者完成指定次数或低于200级.");
                    cm.dispose();
                }
            } else if (typed==6){
                if (cm.haveItem(4000134,400) && cm.getSpace(2) >= 3 && cm.getEventCount("爆肝大海贼的帆") <= 1 && cm.getLevel() >= 200) {
                    cm.gainItem(4000134, -400);
                    cm.gainItem(5062500,25);
                    cm.setEventCount("爆肝大海贼的帆");
                    cm.sendOk("#b成功获得了 #r附加魔方25个  #b 奖励。");
                    cm.worldSpouseMessage(0xA, "『爆肝任务』 : "+ cm.getChar().getName() +" 完成每日爆肝任务六，获得了附加魔方25个");
                    cm.dispose();;
                } else {
                    cm.sendOk("您的物品不够或者背包空间不足或者完成指定次数或低于200级.");
                    cm.dispose();
                }
            } else if (typed==7){
                if (cm.haveItem(4004000,200) && cm.getSpace(2) >= 3 && cm.getEventCount("爆肝矿石") <= 1 && cm.getLevel() >= 200) {
                    cm.gainItem(4004000, -200);
                    cm.gainItem(2049116,5);
                    cm.gainItem(2049137,5);
                    cm.setEventCount("爆肝矿石");
                    cm.sendOk("#b成功获得了 #r#v2049116#3张 #v2049137#5张   #b 奖励。");
                    cm.worldSpouseMessage(0xA, "『爆肝任务』 : "+ cm.getChar().getName() +" 完成每日爆肝任务七，获得了强化混沌卷轴5张  惊人正义5张的奖励");
                    cm.dispose();;
                } else {
                    cm.sendOk("您的物品不够或者背包空间不足或者完成指定次数或低于200级.");
                    cm.dispose();
                }
            } else if (typed==8){
                if (cm.haveItem(4000021,1000) && cm.getSpace(2) >= 3 && cm.getEventCount("爆肝动物皮") <= 1 && cm.getLevel() >= 200) {
                    cm.gainItem(4000021, -500);
                    cm.gainItem(2340000,10);
                    cm.setEventCount("爆肝动物皮");
                    cm.sendOk("#b成功获得了 #r祝福卷轴10张  #b 奖励。");
                    cm.worldSpouseMessage(0xA, "『爆肝任务』 : "+ cm.getChar().getName() +" 完成每日爆肝任务八，获得了祝福卷轴10张");
                    cm.dispose();;
                } else {
                    cm.sendOk("您的物品不够或者背包空间不足或者完成指定次数或低于200级.");
                    cm.dispose();
                }
            } else if (typed==9){
                if (cm.haveItem(4021016,100) && cm.getSpace(2) >= 3 && cm.getEventCount("爆肝最高级物品结晶") <= 9 && cm.getLevel() >= 200) {
                    cm.gainItem(4021016, -100);
                    cm.gainNX(10000);
                    cm.setEventCount("爆肝最高级物品结晶");
                    cm.sendOk("#b成功获得了 #r10000点券  #b 奖励。");
                    cm.worldSpouseMessage(0xA, "『爆肝任务』 : "+ cm.getChar().getName() +" 完成每日爆肝任务九，获得了10000点券");
                    cm.dispose();;
                } else {
                    cm.sendOk("您的物品不够或者背包空间不足或者完成指定次数或低于200级.");
                    cm.dispose();
                }
            } else if (typed==10){
                if (cm.haveItem(4000073,100) && cm.getSpace(2) >= 3 && cm.getEventCount("爆肝独角狮硬角") <= 9 && cm.getLevel() >= 200) {
                    cm.gainItem(4000073, -100);
                    cm.gainItem(4001848,3);
                    cm.setEventCount("爆肝独角狮硬角");
                    cm.sendOk("#b成功获得了 #r支援资金金币3个  #b 奖励。");
                    cm.worldSpouseMessage(0xA, "『爆肝任务』 : "+ cm.getChar().getName() +" 完成每日爆肝任务十，获得了支援资金金币3个");
                    cm.dispose();;
                } else {
                    cm.sendOk("您的物品不够或者背包空间不足或者完成指定次数或低于200级.");
                    cm.dispose();
                }
            } else if (typed==11){
                if (cm.haveItem(4032521,1) && cm.getSpace(2) >= 3 && cm.getEventCount("每日兑换") < 1 && cm.getLevel() >= 200) {
                    cm.gainItem(4032521, -1);
                    cm.gainItemPeriod(2430865, 1, 24 * 60 * 60 * 1000);// 三倍经验
                    cm.setEventCount("每日兑换");
                    cm.sendOk("#b成功获得了 #v2430865#1天权  #b 奖励。");
                    cm.worldSpouseMessage(0xA, "『爆肝任务』 : "+ cm.getChar().getName() +" 完成每日爆肝任务十一，获得了VIP理财盒子1天权");
                    cm.dispose();;
                } else {
                    cm.sendOk("您的物品不够或者背包空间不足或者完成指定次数或低于200级.");
                    cm.dispose();
                }
            } else if (typed==12){
                if (cm.haveItem(4009169,200) && cm.getSpace(2) >= 3 && cm.getEventCount("爆肝花瓣") <= 1 && cm.getLevel() >= 200) {
                    cm.gainItem(4009169, -200);
                    cm.gainItem(2431741,10);
                    cm.setEventCount("爆肝花瓣");
                    cm.sendOk("#b成功获得了 #v2431741#10个  #b 奖励。");
                    cm.worldSpouseMessage(0xA, "『爆肝任务』 : "+ cm.getChar().getName() +" 完成每日爆肝任务十二，获得了抵用券3W");
                    cm.dispose();;
                } else {
                    cm.sendOk("您的物品不够或者背包空间不足或者完成指定次数或低于200级.");
                    cm.dispose();
                }
            } else if (typed==14){
                if (cm.haveItem(4000002,1000) && cm.getSpace(2) >= 3 && cm.getEventCount("爆肝蝴蝶结") <= 1 && cm.getLevel() >= 250) {
                    cm.gainItem(4000002, -1000);
                    cm.gainItem(2430207,5);
                    cm.setEventCount("爆肝蝴蝶结");
                    cm.sendOk("#b成功获得了 #v2430207#10个  #b 奖励。");
                    cm.worldSpouseMessage(0xA, "『爆肝任务』 : "+ cm.getChar().getName() +" 完成每日爆肝任务十四，获得了5个春节铜币");
                    cm.dispose();;
                } else {
                    cm.sendOk("您的物品不够或者背包空间不足或者完成指定次数或低于250级.");
                    cm.dispose();
                }
            } else if (typed==15){
                if (cm.haveItem(4000051,100) && cm.getSpace(2) >= 3 && cm.getEventCount("爆肝野狼之尾") <= 1 && cm.getLevel() >= 200) {
                    cm.gainItem(4000051, -100);
                    cm.gainItem(4310199,5);
                    cm.setEventCount("爆肝野狼之尾");
                    cm.sendOk("#b成功获得了 #v4310199#5个  #b 奖励。");
                    cm.worldSpouseMessage(0xA, "『爆肝任务』 : "+ cm.getChar().getName() +" 完成每日爆肝任务十五，获得了5个冬日币");
                    cm.dispose();;
                } else {
                    cm.sendOk("您的物品不够或者背包空间不足或者完成指定次数或低于200级.");
                    cm.dispose();
                }
            } else if (typed==16){
                if (cm.haveItem(4000052,200) && cm.getSpace(2) >= 3 && cm.getEventCount("爆肝白狼之尾") <= 1 && cm.getLevel() >= 200) {
                    cm.gainItem(4000052, -200);
                    cm.gainItem(5150139,5);
                    cm.gainItem(5152098,5);
                    cm.setEventCount("爆肝白狼之尾");
                    cm.sendOk("#b成功获得了 #v5152098#5个#v5150139#5个  #b 奖励。");
                    cm.worldSpouseMessage(0xA, "『爆肝任务』 : "+ cm.getChar().getName() +" 完成每日爆肝任务十六，获得了美发卡整形卡各5张");
                    cm.dispose();;
                } else {
                    cm.sendOk("您的物品不够或者背包空间不足或者完成指定次数或低于200级.");
                    cm.dispose();
                }
            } else if (typed==17){
                if (cm.haveItem(4000109,1000) && cm.getSpace(2) >= 3 && cm.getEventCount("爆肝玩具小鸭") <= 1 && cm.getLevel() >= 235) {
                    cm.gainItem(4000109, -1000);
                    cm.gainItem(2432971,2);
                    cm.setEventCount("爆肝玩具小鸭");
                    cm.sendOk("#b成功获得了 #v2432971#2个  #b 奖励。");
                    cm.worldSpouseMessage(0xA, "『爆肝任务』 : "+ cm.getChar().getName() +" 完成每日爆肝任务十七，获得了椅子盒2个");
                    cm.dispose();;
                } else {
                    cm.sendOk("您的物品不够或者背包空间不足或者完成指定次数或低于235级.");
                    cm.dispose();
                }
            } else if (typed==18){
                if (cm.haveItem(4000756,100) && cm.getSpace(2) >= 3 && cm.getEventCount("爆肝紫贝壳") <= 1 && cm.getLevel() >= 150) {
                    cm.gainItem(4000756, -100);
                    cm.gainItem(2435537,5);
                    cm.setEventCount("爆肝紫贝壳");
                    cm.sendOk("#b成功获得了 #v2435537#5个  #b 奖励。");
                    cm.worldSpouseMessage(0xA, "『爆肝任务』 : "+ cm.getChar().getName() +" 完成每日爆肝任务十八，获得了经验袋5个");
                    cm.dispose();;
                } else {
                    cm.sendOk("您的物品不够或者背包空间不足或者完成指定次数或低于150级.");
                    cm.dispose();
                }
            } else if (typed==19){
                if (cm.haveItem(4000286,200) && cm.getSpace(2) >= 3 && cm.getEventCount("爆肝稻草玩偶") <= 1 && cm.getLevel() >= 150) {
                    cm.gainItem(4000286, -200);
                    cm.gainItem(4009453,50);
                    cm.setEventCount("爆肝稻草玩偶");
                    cm.sendOk("#b成功获得了 #v4009453#50个  #b 奖励。");
                    cm.worldSpouseMessage(0xA, "『爆肝任务』 : "+ cm.getChar().getName() +" 完成每日爆肝任务十九，获得了魔方精髓50个");
                    cm.dispose();;
                } else {
                    cm.sendOk("您的物品不够或者背包空间不足或者完成指定次数或低于150级.");
                    cm.dispose();
                }
            } else if (typed==20){
                if (cm.haveItem(4000006,400) && cm.getSpace(2) >= 3 && cm.getEventCount("爆肝三眼章鱼触角") <= 1 && cm.getLevel() >= 150) {
                    cm.gainItem(4000006, -300);
                    cm.gainItem(2049600,2);
                    cm.setEventCount("爆肝三眼章鱼触角");
                    cm.sendOk("#b成功获得了 #v2049600#2个  #b 奖励。");
                    cm.worldSpouseMessage(0xA, "『爆肝任务』 : "+ cm.getChar().getName() +" 完成每日爆肝任务二十，获得了还原卷轴2个");
                    cm.dispose();;
                } else {
                    cm.sendOk("您的物品不够或者背包空间不足或者完成指定次数或低于150级.");
                    cm.dispose();
                }
            } else if (typed==21){
                if (cm.haveItem(4000622,1000) && cm.getSpace(2) >= 3 && cm.getEventCount("爆肝蓝色蝴蝶结") <= 1 && cm.getLevel() >= 250) {
                    cm.gainItem(4000622, -1000);
                    cm.gainItem(2436384,1);
                    cm.setEventCount("爆肝蓝色蝴蝶结");
                    cm.sendOk("#b成功获得了 #v2436384#1个  #b 奖励。");
                    cm.worldSpouseMessage(0xA, "『爆肝任务』 : "+ cm.getChar().getName() +" 完成每日爆肝任务二十一，获得了元宝抽奖礼盒1个");
                    cm.dispose();;
                } else {
                    cm.sendOk("您的物品不够或者背包空间不足或者完成指定次数或低于250级.");
                    cm.dispose();
                }
            } else if (typed==13){
                if (cm.haveItem(4310143,15) && cm.getSpace(2) >= 3 && cm.getEventCount("爆肝BOSS币") <= 9 && cm.getLevel() >= 250) {
                    cm.gainItem(4310143, -15);
                    cm.gainItem(2430683,1);
                    cm.setEventCount("爆肝BOSS币");
                    cm.sendOk("#b成功获得了 #v2430683#2个  #b 奖励。");
                    cm.worldSpouseMessage(0xA, "『爆肝任务』 : "+ cm.getChar().getName() +" 完成每日爆肝任务十三，获得了情人节卷轴箱");
                    cm.dispose();;
                } else {
                    cm.sendOk("您的物品不够或者背包空间不足或者完成指定次数或低于200级.");
                    cm.dispose();
                }
            }
        }
    }
}