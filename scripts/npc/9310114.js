function start() {
    var eim = cm.getEventInstance();
    var NumBer = parseInt(eim.getProperty("Give_sheep"));
    if (parseInt(NumBer / 3) >= 0) {
        cm.gainItem(4001231, parseInt(NumBer / 3));//圣诞拐杖
        cm.gainItem(4001395, parseInt(NumBer / 3));//圣诞节装饰
        cm.gainItem(4001839, parseInt(NumBer / 3));//星星
    }
    cm.dispose();
}