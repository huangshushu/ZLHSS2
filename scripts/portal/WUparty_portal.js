function enter(pi) {
    var eim = pi.getPlayer().getEventInstance();
    switch (pi.getMapId()) {
    case 933011000:
        if (eim.getProperty("1stageclear") == null) { // do nothing; send message to player
            pi.playerMessage(5, "请稍等,任务未完成.");
        } else {
            pi.warpParty_Instanced(933012000);
        }
        break;
    case 933012000:
        if (eim.getProperty("2stageclear") == null) { // do nothing; send message to player
            pi.playerMessage(5, "请稍等,任务未完成.");
        } else {
            pi.warpParty_Instanced(933013000);
        }
        break;
    case 933013000:
        if (eim.getProperty("3stageclear") == null) { // do nothing; send message to player
            pi.playerMessage(5, "请稍等,任务未完成.");
        } else {
            pi.warpParty_Instanced(933014000);
        }
        break;
    case 933014000:
        if (eim.getProperty("4stageclear") == null) { // do nothing; send message to player
            pi.playerMessage(5, "请稍等,任务未完成.");
        } else {
            pi.warpParty_Instanced(933015000);
        }
        break;
    }
}
