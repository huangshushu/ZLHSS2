var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var icon0 = "#fUI/UIWindow2/AdditionalOptionTooltip/epic#";//A图标
var icon1 = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"; //开始条件

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
        cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
        cm.dispose();
    } else if (status == 0) {

        var txt = "\r\n#d ┏━━━━━━━━━━#b积分抵用卷#d━━━━━━━━━┓#k\r\n\r\n";
        txt += "\t\t\t\t\t　" + icon1 + "\r\n\r\n";
        txt += "　　" + icon0 + "#d 当前共有积分：#r" + cm.getPlayerPoints() + "#k\r\n";
        txt += "　　" + icon0 + "#d [ #r1#d ] 积分 = [ #r10#d ] 抵用卷#k\r\n";
        txt += "　　" + icon0 + "#r 管理员提示：请输入兑换的抵用卷数量#k\r\n\r\n";
        txt += "#d ┗━━━━━━━━━━━━━━━━━━━━━━━━┛#k";
        txt += "\t\t\t\t"+cm.sendGetText(txt);
    } else if (status == 1) {
        if (cm.getText() < 1) {
            cm.playerMessage(1, "最小值不可是 [ 0 ] 请注意！！");
            cm.dispose();
        } else {
            cm.sendYesNo("#b　　　　　尊敬的 [ #r#h # #b ] 玩家 你好 \r\n\r\n　　　　欢迎使用 积分兑抵用卷功能\r\n\r\n　　　　购买抵用卷数量：#r" + cm.getText() + " #b\r\n　　　　消耗 积分 数量：#r" + parseInt(cm.getText() / 10) + " #b\r\n\r\n　　　　　　请确认是否正确？");
        }
    } else if (status == 2) {
        if (cm.getPlayer().getPlayerPoints() >= cm.getText() / 10) {
            cm.gainPlayerPoints(parseInt(-cm.getText() / 10));
            cm.gainNX(2, cm.getText());
            cm.worldSpouseMessage(0x20, "※ 公告提示 ※：恭喜玩家 " + cm.getChar().getName() + " 使用 " + parseInt(cm.getText() / 10) + " 积分购买了 " + cm.getText() + " 抵用卷");
            cm.sendOk("成功增加了 " + cm.getText() + " 抵用卷");
            cm.dispose();
        } else {
            cm.sendOk("您没有足够的积分！请充值");
            cm.dispose();
        }
    }
}