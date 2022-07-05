var status = 0;
var victim;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    if (status == 1) {
        cm.sendYesNo("你真的确定要结婚吗?");
    } else if (status == 2) {
		if (cm.getParty() == null) {
            cm.sendNext("组队后在来找我");
            cm.dispose();
            return;
        } else if (cm.getParty().getMembers().size() != 2) { //判断组队成员是否达到2人。
            cm.sendNext("组队人员只能是两个人。不是你们两个人结婚吗？");
            cm.dispose();
            return;
        } else if (!cm.isLeader()) { // 不是队长
            cm.sendOk("你想结婚吗？那就请你的组队长和我讲话吧…");
            cm.dispose();
            return;
        } else if (cm.getPlayer().getMarriageId() > 0) { //查看玩家是否已经结婚。
            cm.sendNext("你已经结婚了吧… 结婚的话是不能再结婚的。");
            cm.dispose();
            return;
        } else if (cm.MarrageChecking() == 3) { //检测组队中是否已经结婚
            cm.sendNext("你的组队中，已经有人结过婚了。\r\n请检查后再试。");
            cm.dispose();
            return;
        } else if (!cm.isLeader()) {
            cm.sendNext("请让队长与我对话");
            cm.dispose();
            return;
        } else if (cm.MarrageChecking() == 4) {
            cm.sendNext("我不支持同性结婚。所以不让你们进去");
            cm.dispose();
            return;
        } else if (cm.MarrageChecking() == 5) {
            cm.sendNext("男士:#b#b#t1050121##k或#b#b#t1050122##k或#b#b#t1050113##k，女士:#b#t1051129##k或#b#t1051130##k或#b#t1051114##k。其中#b#t1050121##k，#b#t1051129##k，#b#t1050113##k，#b#t1051114##k,这些道具在冒险商城可以购买，#b#t1050122##k和#b#t1051130##k是在那边那位红线女那里卖。\r\n\r\n#b请穿上礼服后再和我对话。");
            cm.dispose();
            return;
        } 
		else if (cm.MarrageChecking() == 6) {
            cm.sendNext("组队成员中有人没有结婚戒指。");
            cm.dispose();
            return;
        }

        var gender = cm.getPlayer().getGender();
        var mapId = cm.getPlayer().getMapId();
        var next = true;
        var party = cm.getPlayer().getParty().getMembers();
        var it = party.iterator();
        while (it.hasNext()) {
            var cPlayer = it.next();
            victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
            if (victim.getId() != cm.getPlayer().getId() && (party.size() > 2 || victim == null || victim.getMarriageId() > 0 || victim.getMapId() != mapId || victim.getGender() == gender)) {
                next = true;
                break;
            }
        }
        if (!next) {
            cm.sendNext("请确认您跟您的伴侣在这里。");
            cm.dispose();
            return;
        }
		
		if (cm.MarrageChecking()==3) { //检测组队中是否已经结婚
            cm.sendNext("你的组队中，已经有人结过婚了。\r\n请检查后再试。");
            cm.dispose();
			return;
        }
		
		if (cm.getParty().getMembers().size() != 2) { //判断组队成员是否达到2人。
            cm.sendNext("组队人员不能超过两个人。不是你们两个人结婚吗？");
            cm.dispose();
			return;
        }

        if (!cm.canHold(1112804) || !victim.canHold(1112804)) {
            cm.sendNext("您或您的另一半背包空间不足");
            cm.dispose();
            return;
        }

		if (!cm.isLeader()) { // 不是队长
            cm.sendOk("你想结婚吗？那就请你的组队长和我讲话吧…");
            cm.dispose();
			return;
        }
		
		if (cm.MarrageChecking()==4) { 
            cm.sendNext("我不支持同性结婚。所以不让你们进去");
            cm.dispose();
			return;
        }
		
		if (cm.MarrageChecking()==6) { 
            cm.sendNext("组队成员中有人没有结婚戒指。");
            cm.dispose();
			return;
        }
		
        if (cm.getChar().getName() == victim.getName()) {
            cm.sendNext("请解散队伍并且切换对方为队长后再试。");
            cm.dispose();
            return;
        }
		
        cm.getPlayer().setMarriageId(victim.getId());
        victim.setMarriageId(cm.getPlayer().getId());
        cm.makeRing(1112804, victim.getName());
        cm.getPlayer().saveToDB(false, false);
		//cm.ShowMarrageEffect();
        cm.worldMessage(6, "『月下老人』" + " : " + "[" + cm.getChar().getName() + "]和他的伴侣["+victim.getName()+"]结为夫妻。小姐珠圆玉润旺夫之相、宜室宜家,先生才高八斗、学富五车。现福禄鸳鸯缘定三生，佳偶天成，珠联壁合。祝二人：永结同心，百年好合、百子千孙,无论富贵贫穷同德同心、琴瑟合鸣、相敬如宾。结此终身之盟,守此终身之誓,不离不弃、白头偕老。大家祝福他[她]！我们祝他/她们从游戏走到现实婚姻的殿堂。");
        victim.saveToDB(false, false);
        cm.dispose();
    } else {
        cm.dispose();
    }

}
