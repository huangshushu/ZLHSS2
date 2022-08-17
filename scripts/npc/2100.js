/* ==================
 脚本类型: NPC	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
importPackage(Packages.client);

var status = 0;
var yes = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (cm.getChar().getMapId() == 0 || cm.getChar().getMapId() == 3) {
        if (mode == -1) {
            cm.dispose();
        } else {
            if (status == -1 && mode == 0) {
                cm.sendNext("当你终于做出决定的时候，请再和我说话.");
                cm.dispose();
                return;
            } else if (status >= 0 && mode == 0) {
                yes = 1;
                cm.sendYesNo("你真的想马上开始你的旅程吗?");
            }
            if (mode == 1)
                status++;
            else
                status--;
            if (status == 0) {
                if (yes == 1) {
                    status = 2;
                    cm.sendNext("似乎你想开始你的旅程，而不采取培训计划。然后，我会让你进入训练场。小心.");
                } else
                    cm.sendYesNo("欢迎来到冒险岛世界,这个训练营的目的是帮助新手.你想参加这个训练营吗?有些人开始他们的旅程,而不采取培训计划,但我强烈建议你先参加培训计划");
            } else if (status == 1) {
                cm.sendNext("好吧，那么，我会让你进入训练营.");
            } else if (status == 2) {
                cm.warp(1, 0);
                cm.dispose();
            } else if (status == 3) {
                cm.warp(40000);
                cm.dispose();
            }
        }
    } else {
        if (mode < 1) {
            cm.dispose();
        } else {
            status++;
            if (status == 0) 
                cm.sendNext("这是你的第一个培训计划开始的图像室。在这个房间里，你将能看到整个冒险岛世界的景观.");
            else if (status == 1)
                cm.sendPrev("一旦你训练不够努力，你将有权获得一个职业。你可以成为射手村的弓箭手，在魔法密林的魔法师，在勇士部落的战士，在废弃都市的飞侠，和诺特勒斯的海盗.");
            else
                cm.dispose();
        }
    }
}