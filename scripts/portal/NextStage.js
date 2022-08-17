function enter(pi) {
    if (pi.getPlayer().getMapId() == 744000008 && pi.getPlayer().getParty() != null && pi.haveItem(4001137) && pi.isLeader()) {
        pi.warpParty(744000014); //柔道部
        pi.gainItem(4001137, -1);
        pi.playPortalSE();
    } else {
        if (pi.getPlayer().getMapId() == 744000008) {
            pi.playerMessage(5, "请确认你是否完成考试答题！");
        }
    }
    if (pi.getPlayer().getMapId() == 744000014 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410183) && pi.isLeader()) {
        pi.warpParty(744000013); //空教室
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000013 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410182) && pi.isLeader()) {
        pi.warpParty(744000015); //乐队部
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000015 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410184) && pi.isLeader()) {
        pi.warpParty(744000003); //校长室
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000003 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410178) && pi.isLeader()) {
        pi.warpParty(744000002); //仓库
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000002 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410179) && pi.isLeader()) {
        pi.warpParty(744000006); //废弃的教室
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000006 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410147) && !pi.haveMonster(9410148) && !pi.haveMonster(9410149) && !pi.haveMonster(9410150) && !pi.haveMonster(9410151) && pi.isLeader()) {
        pi.warpParty(744000007); //前途商谈室
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000007 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410171) && pi.isLeader()) {
        pi.warpParty(744000004); //美术部
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000004 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410177) && pi.isLeader()) {
        pi.warpParty(744000010); //体育部
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000010 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410180) && pi.isLeader()) {
        pi.warpParty(744000009); //家政室
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000009 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410187) && !pi.haveMonster(9410188) && !pi.haveMonster(9410189) && pi.isLeader()) {
        pi.warpParty(744000011); //科学实验室
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000011 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410190) && pi.isLeader()) {
        pi.warpParty(744000012); //图书室
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000012 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410181) && pi.isLeader()) {
        pi.warpParty(744000001); //屋顶
        pi.playPortalSE();
    } else {
        if (pi.getPlayer().getMapId() != 744000008) {
            pi.playerMessage(5, "请确认当前地图是否还存在怪物！");
        }
    }
}
