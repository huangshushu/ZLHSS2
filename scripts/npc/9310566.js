var status;

function start() {
    status = -1;
    cm.sendYesNo("是否要移动到六叉路口?");
    //cm.sendSlideMenu(6, "#0#六岔路口#1#射手村#2#魔法密林#3#勇士部落#4#废弃都市#5#明珠港#6#林中之城#7#诺特勒斯号#8#圣地#9#蛋壳#10#天空之城#11# 冰峰雪域#12#玩具城#15#水下世界#16#神木村#17#武陵#18#百草堂#19# 阿里安特#20#马加提亚#21#埃德尔斯坦#22#埃欧雷#23# 克里蒂亚斯#24# 避风港");
}

function action(mode, type, selection) {

    if (mode == 0) {
        cm.dispose();
        return;
    } else if (mode == 1) {
        status++;
    } else {
        status--;
    }

    switch (status) {
        case 0:
            cm.warp(104020000, 4);
            cm.dispose();
            break;
        case 1: //
        case 2:
        case 3:
            cm.dispose();
            break;
    }
}
