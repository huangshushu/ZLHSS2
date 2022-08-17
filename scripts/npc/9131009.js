var status = -1;

function start() {
    if (cm.getMap().getAllMonster().size() == 0) {
        cm.dispelBuff(40011186);
        cm.teachSkill(40011183, -1, 0);
        cm.teachSkill(40011184, -1, 0);
        cm.teachSkill(40011185, -1, 0);
        cm.teachSkill(40011186, -1, 0);
        cm.warp(807100002, 0);
    } else {
        cm.sendOkS("打敗所有的敵人，打開東門吧！", 2);
    }
    cm.dispose();
}