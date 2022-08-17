/* 
 *
 *  
 *  功能：起源之塔 第43层 NPC 
 *  
 *
 */

/* global cm, java */

var status = -1;


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
                var value = parseInt(eim.getProperty("stage43_Value")) + 1;
                var str = "那么,这是第" + value + "次测试。\r\n#h0，这次来到起源之塔探险时，发生的事情中....";

                var sIdx = Math.floor(Math.random() * 4);//取层数
                var type = Math.floor(Math.random() * 4);//根据层数 类型 进行问题处理

                switch (type) {
                    case 0:// 击杀了多少怪物

                        break;
                    case 1:// 拾取了多少物品

                        break;
                    case 2:// 黑暗气息转换了几次

                        break;
                    case 3:// 不存在的职业

                        break;
                    default:// 进入第一层时拥有的起源点数是

                        break;
                }
                if (!"clear".equals(eim.getProperty("stage43"))) {
                    cm.askMenuNoESC(str);
                } else {
                    cm.sendNextNoESC("你已经通过了我的考验！可以进入下一个阶段了！" + eim.getProperty("stage43"));
                }
                break;
            case 1:
                if (selection >= 100) {
                    //回答错误 记录回答错误次数
                    var value = parseInt(eim.getProperty("stage43_killed")) + 1;
                    eim.setProperty("stage43_killed", String(value));
                    if (value >= 2) {
                        eim.setProperty("stage43_Value", String(0));
                    }
                    cm.sendNextNoESC("真可惜，你回答错了！这是你第" + value + "次错误！如果回答错误两次就需要重新挑战！");
                } else if (selection >= 0) {
                    //回答正确
                    var value = parseInt(eim.getProperty("stage43_Value")) + 1;
                    eim.setProperty("stage43_Value", String(value));
                    if (value >= 5 && !"clear".equals(eim.getProperty("stage43"))) {
                        var stage = parseInt(eim.getProperty("stage"));
                        eim.setProperty("stage" + stage, "clear");
                        cm.broadcastScreenEffect("event/clear");
                        eim.broadcastWeatherEffectNotice("你现在可以前往下一层了。", 147, 15000);
                        cm.sendNextNoESC("你已经通过了我的考验！可以进入下一个阶段了！");
                    } else {
                        cm.sendNextNoESC("回答正确！你还需要回答" + (5 - value) + "个问题！");
                    }

                } else {
                    cm.dispose();
                }
                break;
            default:
                cm.dispose();
                break;
        }
    } else {
        cm.dispose();
    }
}
