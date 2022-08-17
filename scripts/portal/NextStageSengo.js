function enter(pi) {
    if (pi.getPlayer().getMapId() == 744000021 && pi.getPlayer().getParty() != null && pi.haveItem(4033802) && pi.isLeader()) {
        pi.warpParty(744000022); //火炮手班
        pi.gainItem(4033802, -1);
        pi.playPortalSE();
    } else {
        if (pi.getPlayer().getMapId() == 744000021) {
            pi.playerMessage(5, "请确认你是否获取了暗影双刀的胜利证物！");//暗影双刀班
        }
    }
    if (pi.getPlayer().getMapId() == 744000022 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410200) && pi.isLeader()) {
        pi.warpParty(744000023); //米哈尔班
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000023 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410201) && pi.isLeader()) {
        pi.warpParty(744000024); //炎术士班
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000024 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410202) && pi.isLeader()) {
        pi.warpParty(744000025); //校长室
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000025 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410203) && pi.isLeader()) {
        pi.warpParty(744000026); //仓库
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000026 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410204) && pi.isLeader()) {
        pi.warpParty(744000027); //废弃的教室
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000027 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410205) && !pi.haveMonster(9410148) && !pi.haveMonster(9410149) && !pi.haveMonster(9410150) && !pi.haveMonster(9410151) && pi.isLeader()) {
        pi.warpParty(744000028); //前途商谈室
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000028 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410206) && pi.isLeader()) {
        pi.warpParty(744000029); //美术部
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000029 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410207) && pi.isLeader()) {
        pi.warpParty(744000030); //体育部
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000030 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410211) && pi.isLeader()) {
        pi.warpParty(744000031); //家政室
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000031 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410208) && !pi.haveMonster(9410188) && !pi.haveMonster(9410189) && pi.isLeader()) {
        pi.warpParty(744000032); //科学实验室
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000032 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410209) && pi.isLeader()) {
        pi.warpParty(744000033); //图书室
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000033 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410210) && pi.isLeader()) {
        pi.warpParty(744000034); //屋顶
        pi.playPortalSE();

    } else if (pi.getPlayer().getMapId() == 744000034 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410212) && pi.isLeader()) {
        pi.warpParty(744000035); //屋顶
        pi.playPortalSE();

    } else if (pi.getPlayer().getMapId() == 744000035 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410213) && pi.isLeader()) {
        pi.warpParty(744000036); //屋顶
        pi.playPortalSE();

    } else if (pi.getPlayer().getMapId() == 744000036 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410214) && pi.isLeader()) {
        pi.warpParty(744000037); //屋顶
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000037 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410215) && pi.isLeader()) {
        pi.warpParty(744000038); //屋顶
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000038 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410216) && pi.isLeader()) {
        pi.warpParty(744000039); //屋顶
        pi.playPortalSE();

    } else if (pi.getPlayer().getMapId() == 744000039 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410218) && pi.isLeader()) {
        pi.warpParty(744000040); //神娜
        pi.playPortalSE();

    } else if (pi.getPlayer().getMapId() == 744000040 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410219) && pi.isLeader()) {
        pi.warpParty(744000041); //森兰丸之屋顶
        pi.playPortalSE();

    } else {
        if (pi.getPlayer().getMapId() != 744000021) {
            pi.playerMessage(5, "请确认当前地图是否还存在怪物！");
        }
    }
}
