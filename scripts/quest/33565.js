/* 
 * 乌鲁斯
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            qm.dispose();
            return;
        }
        qm.sendNextN("你难道没有挑战乌鲁斯的自信嘛, 我知道了, 等你有了兴趣, 我们再说.");
        qm.dispose();
        return;
    }
    //m.sendSimpleN("#b现在立刻去挑战打败乌鲁斯吗? #k\r\n#L0#快速开始(通过匹配进行18人挑战)#l\r\n#L1#前往乌鲁斯入场地图. #l");
    if (status == 0) {
        qm.sendNextN("你好啊, 我听说你好像很厉害呢. ");
    } else if (status == 1) {
        qm.sendNextN("我来介绍一下, 我叫马修勒, 我是在遥远的地方听说了霸王的传闻才来了这里的.");
    } else if (status == 2) {
        qm.sendNextN("如果你想要了解所有人都很畏惧的霸王, 就来找我.");
    } else if (status == 3) {
        qm.sendNextN("如果你有力量对抗乌鲁斯, 马修勒会让你见识一下什么叫做“真正的财物”的.");
    } else if (status == 4) {
        qm.sendYesNoN("如果你有兴趣了, 我现在就立刻派出专用飞机, 让你可以来我这里, 你过来我们再详谈如何? .");
    } else if (status == 5) {
        qm.sendNextN("好吧, 我现在就立刻派出专用飞机, 如果你有其他事情, 可以日后再通过次元之镜来我这里. ");
        //qm.sendNextN("现在你所在的地方并不是我能派专用飞机的地方呢, 等你到了其他地方之后再联系我吧. ");
    }else if (status == 6) {
        qm.forceCompleteQuest();
        qm.warp(970072200);
        qm.dispose();
    }
}
function end(mode, type, selection) {
    //qm.forceCompleteQuest();
    qm.dispose();
}
