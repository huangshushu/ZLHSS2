/*
 * 先代狂龙战士的召唤
 * 狂龙战士4转
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 4) {
            qm.sendOk("看样子你已经准备好了，难道你想违抗命运吗？");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNext("你是#h0#？");
    } else if (status == 1) {
        qm.sendNextPrevS("呃……嗯？是谁？这声音从哪里传来的？", 2);
    } else if (status == 2) {
        qm.sendNextPrev("你别惊讶，好好听我说。我是你的前任，先代狂龙战士。");
    } else if (status == 3) {
        qm.sendNextPrevS("先……先代狂龙战士？", 2);
    } else if (status == 4) {
        qm.askAcceptDeclineNoESC("你做好准备听我说了吗？");
    } else if (status == 5) {
	if (qm.getJob() == 6111) {
	    qm.changeJob(6112);
	}
        if (!qm.haveItem(1142487, 1)) {
            qm.gainItem(1142487, 1);
        }
	qm.forceCompleteQuest();
        qm.sendNext("数十年前，为了防备达勒摩尔的攻击，我出发去保卫赫里希安。但麦格纳斯已经先下手为强，发动突袭并抢占了赫里希安。为了诺巴的难民们能逃往#m400000000#，并阻止麦格纳斯和那些幽灵攻到#m400000000#，我只好在那里阻拦他们的攻势。");
    } else if (status == 6) {
        qm.sendNextPrev("要是我不在那个地方阻挡他们，很快万神殿也会被他们攻陷。那时#m400000000#还没有保护罩。#p3000002#拿着诺巴的圣物，来到#m400000000#设立保护罩这件事可能不太为世人认同，但在当时却是正确的行动。");
    } else if (status == 7) {
        qm.sendNextPrev("在那个地方，我受到麦格纳斯卑劣咒术的影响，中了致命的毒，临终前只能耗尽自己的全部生命力使用了日珥。最后我和麦格纳斯，还有幽灵军队一起同归于尽。");
    } else if (status == 8) {
        qm.sendNextPrevS("可是麦格纳斯活了下来！", 2);
    } else if (status == 9) {
        qm.sendNextPrev("事实上麦格纳斯应该早就死了。但也许是因为达勒摩尔给他的力量太强，让他逃过一劫，后来返回达勒摩尔，在那里接受了治疗。");
    } else if (status == 10) {
        qm.sendNextPrev("我想，虽然麦格纳斯接受了治疗，他的性命肯定被缩短很多。看他现在还活着，应该是从某处摄取了和生命力有关的能量源。");
    } else if (status == 11) {
        qm.sendNextPrevS("我听说冒险岛世界里有生物拥有精灵之力。那生物的名字好像叫“古瓦洛”。总而言之，估计麦格纳斯是获得了那股力量，才得以延续生命。", 2);
    } else if (status == 12) {
        qm.sendNextPrev("过去的事情就说到这儿。事实上我跟你说话是因为你已经做好准备接受我的精髓。");
    } else if (status == 13) {
        qm.sendNextPrevS("嗯？精髓？", 2);
    } else if (status == 14) {
        qm.sendNextPrev("对。狂龙战士会不断转生。修炼到特定阶段时，会继承先代狂龙战士的精髓，成为真正的狂龙战士。我也一样继承了我前任狂龙战士的精髓。");
    } else if (status == 15) {
        qm.sendPrev("看来现在我可以把精髓交给你了。今后狂龙战士的意志将与你同在。希望你能成为优秀的狂龙战士。等你领悟了奥义，我会再和你说话。");
        qm.dispose();
    }
}
