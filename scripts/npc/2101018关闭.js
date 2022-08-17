var status = -1;
function start() {
    if((cm.getPlayer().getLevel() < 19 || cm.getPlayer().getLevel() > 30) && !cm.getPlayer().isGM()){
        cm.sendNext("你如果要参加阿里安特竞技场，你的等级必须在20级~29级。");
        cm.dispose();
        return;
    }
    action(1,0,0);
}

function action(mode, type, selection){
    status++;
    if (status == 4){
        cm.saveLocation("ARIANT");
        cm.warp(980010000, 3);
        cm.dispose();
    }
    if(mode != 1){
        if(mode == 0 && type == 0)
            status -= 2;
        else{
            cm.dispose();
            return;
        }
    }
    if (status == 0)//
        cm.sendNext("#e<组队副本：阿里安特竞技场>#n\r\n阿里安特举办竞技大会！只要收集王妃所喜爱的灵魂宝石,便可得到极大的奖励与名誉！在比赛开始,便可得到#r#v2270002##k和竞技场用#r#v2100067##k,速成石用来活捉生命力所剩无几的怪物,并得到灵魂宝石,而将竞技场用炸弹丢在地上,便可夺取他人的灵魂宝石。");
    else if (status == 1)
        cm.sendNextPrev("阿里安特竞技场不是虐杀怪物！相反,你需要使用#v2270002#获取怪物身体里的#v4031868##k. #b结束后,依照灵魂宝石排名计算奖励！#k");
    else if (status == 2)
        cm.sendSimple("如果你有一颗勇敢的心,那么我猜你肯定对这感兴趣。\r\n#b#L0#移动到竞技场等候室.#l");
    else if (status == 3)
        cm.sendNext("好吧，现在我要派你去战场。我想看到你的胜利");
}