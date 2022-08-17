/* 
 *
 *  
 *  功能：起源之塔 第36层 NPC 
 *  
 *
 */

/* global cm */

var status = -1;
var count = 0;
var initialization = false

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case 0://上一步
            status--;
            break;
        case 1://下一步
            status++;
            break;
    }

    var em = cm.getEventManager("LobbyQuest");
    var eim = cm.getEventInstance();
    if (em != null && eim != null) {
        switch (status) {
            case 0:
                var stage = eim.getProperty("s36Stage");
                if (stage == null) {
                    cm.sendNext("准备好的话就和我说话吧。")
                    initialization = true
                } else if ("clear".equals(eim.getProperty("stage36"))) {
                    cm.sendOk("你已经通过了考验，去下一层吧")
                    cm.dispose()
                } else {
                    var answerResult = eim.getProperty("s36StageAnswerResult")
                    if (answerResult != null && answerResult.isEmpty()) {
                        cm.sendNext("你成功输入了密码，不过还有密码。")
                    } else {
                        cm.sendNext("我现在为你重新读出密码")
                        eim.setProperty("s36StageAnswerResult", "")
                    }
                }

                break;
            case 1: //
                if (initialization) {
                    cm.sendNext("那么，我按顺序为你读出密码。")
                    eim.setProperty("s36Stage", "3"); //当前阶段
                } else {
                    cm.sendNextNoESC("我将为你展示需要攻击的怪物的组合，请看清楚，如果你忘记了或答错了，请再次与我对话，将重新开始挑战！准备好了就开始吧！");
                }
                break;
            case 2:
                if (initialization) {
                    cm.broadcastScreenEffect("event/start");
                    initialization = false
                }
                count = eim.getProperty("s36Stage");
                eim.setProperty("s36Now", "0")
                eim.setProperty("s36Check", "")
                // cm.dropMessage(5, "count:" + count)
                //cm.showWeatherEffectNotice("那么请准备好，即将开始！", 149, 3000);
                // cm.getPlayer().showScreenEffect(0x4, "Map/Effect2.img/aquaris/36F_" + count, 0);//显示图案
                cm.setInGameCurNodeEventEnd(true);
                cm.setInGameDirectionMode(true, true, false, false);
                cm.setInGameCurNodeEventEnd(true);

                cm.setDelay(3000);
                break
            default:
                var now = parseInt(eim.getProperty("s36Now"));
                if (now < count) {
                    now += 1; //第几个
                    var rand = parseInt(java.lang.Math.random() * 4) + 1;//第几个图案
                    eim.setProperty("s36Check", eim.getProperty("s36Check") + rand);//写入记录
                    eim.setProperty("s36Now", String(now));//写入记录
                    cm.showWeatherEffectNotice(getMonsterName(rand), 149, 1000);//显示提示
                    cm.getPlayer().showScreenEffect(0x4, "Map/Effect2.img/aquaris/36F_" + rand, 0);//显示图案
                    cm.setDelay(2000);
                } else {
                    cm.setInGameCurNodeEventEnd(true);
                    cm.setInGameDirectionMode(false, false, false, false);
                    if (cm.isAdmin()) {
                        cm.dropMessage(5, "[S36 Check] " + eim.getProperty("s36Check"));//显示提示
                    }

                    cm.sendNext("你每输入一个，我都会提示你正确与否。")
                    cm.showWeatherEffectNotice("请按顺序攻击怪物，并输入密码。你每输入一个，我都会提示你正确与否。", 149, 15000);//显示提示
                    cm.dispose();//这是结束脚本，请按照实际情况使用
                }
                break;
        }
    } else {
        cm.dispose();
    }
}

function getMonsterName(index) {
    switch (index) {
        case 1:
            return "花蘑菇"
        case 2:
            return "蜗牛"
        case 3:
            return "飘飘猪"
        case 4:
            return "绿水灵"
    }
}
