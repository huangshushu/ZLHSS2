/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */

var status = -1;
var beauty = 0;
var next = true;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            qm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            qm.sendNext("虽然被希拉抢走了很多东西，但是在阿斯旺还是能获得很多东西。如果你能为我们而战，我就告诉你可以获得哪些东西。");
        } else if (status == 1) {
            qm.sendSimple("你想知道什么呢？\r\n\r\n\r\n#b#L0#我想知道个人奖励有哪些。#k#l");
        } else if (status == 2) {
            qm.sendSimple("有以下个人奖励。说说你想知道什么。\r\n\r\n\r\n#b#L0#请介绍一下内在能力。#k#l\r\n#b#L1#怎样可以获得购买物品时所需的纪念币？#k#l");
        } else if (status == 3) {
            if (selection == 0) {
                beauty = 1;
                qm.sendNext("#b内在能力#k是指隐藏在体内的力量。#b每日最多可进行5次#k，只要帮助消灭阿斯旺里剩余的希拉的余党，就能获得名声值。");
            } else if (selection == 1) {
                beauty = 2;
                qm.sendNext("#b每日可进行5次#k，在消灭阿斯旺里残余的希拉的余党的过程中，消灭血牙或猫头鹰塔、守护塔后，有一定概率可获得纪念币。");
            }
        } else if (status == 4) {
            if (beauty == 1) {
                qm.sendNextPrev("通过积累名声值，提升名誉等级后，每达到#b2级、30级、70级#k时各可以获得一种内在能力。#b用于更改内在能力的还原器#k可以在每次名誉等级提升的时候获得，也可以使用在解放战中获得的纪念币进行购买。");
            } else if (beauty == 2) {
                qm.sendNextPrev("还有，每次完成消灭余党时，扎比埃尔那里会有新的物品出现。可能是阿斯旺的珍奇卷轴，也可能是可以改变内在力量的各种等级的还原器。此外，还有药水或阿斯旺装备，以及可以制作装备的配方等各种物品。所以#r收到扎比埃尔的悄悄话时#k，一定要去看一看。");
            }
            if (!next) {
                status = 5;
            }
        } else if (status == 5) {
            var selStr = "有关个人奖励的说明还没有结束，想知道什么的话，就跟我说。\r\n\r\n\r\n#b"
            if (beauty == 1) {
                selStr += "#L1#怎样可以获得购买物品时所需的纪念币？#k#l";
            } else if (beauty == 2) {
                selStr += "#L0#请介绍一下内在能力。#k#l";
            }
            status = 2;
            next = false;
            qm.sendSimple(selStr);
        } else if (status == 6) {
            qm.sendYesNo("希望我的说明已经足够详细了。我要送你几件礼物。做好领取的准备了吗？");
        } else if (status == 7) {
            qm.gainItem(2700000, 1);
            qm.gainItem(4310036, 1);
            qm.forceforceCompleteQuest(3975);
            qm.sendOk("我送了你10品还原器和1个征服者币。如果记不住可以获得哪些东西的话，可以再去问右边的#b财务大臣伍德万#k，他会一一跟你说明。好了，祝你好运。");
            qm.dispose();
        }
    }
}
