/*
dgms - 脚本调整 -
脚本定制 仿制脚本
唯一方式 381991414
*/
var status = 0;
var txt

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        im.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    switch (status) {
        case 0:
            if (cm.getLevel() <= 200) {
                cm.playerMessage(1, "抱歉..必须大于200级才允许使用");
                cm.dispose();
                return;
            }
            txt = "\r\n\r\n\t\t#e#r一定要看群文件的攻略不然你不会操作!\r\n\t\t#b 你确定要立即满5转的所有技能吗?\r\n ";
            cm.sendSimpleS(txt, 2);
            break;

        case 1:
            cm.sql_Update("UPDATE vcoreskill SET `level` = 50 WHERE characterid = " + cm.getPlayer().getId() + ";");//更新数据
            cm.playerMessage(1, "恭喜已经完成,大退游戏，重新上线即可");
            cm.dispose();
            break;
    }
}