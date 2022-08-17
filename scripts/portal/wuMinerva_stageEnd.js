function enter(pi) {
    var em = pi.getEventManager("OrbisPQ");
    var eim = pi.getEventInstance();
    if (em != null && eim != null && pi.getPlayer().getParty() != null) {
        var warp = false;
        var mapid = 0;
        switch (pi.getMapId()) {
            case 933032000://女神之塔 - &lt;休息室>
                if (eim.getProperty("stage").equals("2")) {
                    warp = true;
                    mapid = 933032300;
                }
                break;
            case 933033000:// 女神之塔 - &lt;仓库>
                if (eim.getProperty("stage2").equals("2")) {
                    warp = true;
                    mapid = 933032400;
                }
                //消灭了所有的独角狮.请队长和帮佣易克对话,执行下一阶段>.
                break;
            case 933034000:// 女神之塔 - &lt;散步路>
                if (eim.getProperty("stage3").equals("2")) {
                    warp = true;
                    mapid = 933032500;
                }
                break;
            case 933035000:// 女神之塔 - &lt;向上通道>
                if (eim.getProperty("stage4").equals("2")) {
                    warp = true;
                    mapid = 933032700;
                }
                break;
            case 933036000://女神之塔 - &lt;中央塔>
                break;
            case 933037000:// 女神之塔 - &lt;庭园>
                if (eim.getProperty("stage5").equals("2")) {
                    warp = true;
                    mapid = 933032600;
                }
                //消灭了远古精灵.请队长去帮佣易克那里领取生命草,移动到中央房间.
                break;
            case 933038000:// 女神之塔 - &lt;女神之祝福>
                break;
        }
        if (warp) {
            pi.warp(mapid, 0);
        } else {
            pi.playerMessage("请先完成当前阶段的任务。");
        }
    }
}
