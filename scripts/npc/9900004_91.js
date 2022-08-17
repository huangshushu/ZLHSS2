/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：骑宠，放技能
 */
var a = "#fUI/Basic/BtHide3/mouseOver/0#";
function start() {
    status = -1;
    action(1, 0, 0)
}

function action(mode, type, selection) {
    if (status <= 0 && mode <= 0) {
        cm.dispose();
        return
    }
    if (mode == 1) {
        status++
    } else {
        status--
    }
    var 技能 = 1013;
    var 技能本身最大等级 = 10;
    var 超级技能点 = cm.getBossRank6("超级技能点", 2);
    var 技能等级 = cm.判断技能等级(技能);
    var 角色 = cm.getPlayer().id;
    if (status <= 0) {
        var
        selStr = "\t\t#s" + 技能 + "# #b#q" + 技能 + "#\r\n";
        selStr += "\t\t#L2#" + a + " #b放置键盘#k#l\r\n";
        selStr += "\t\t#L3#" + a + " #b放置说明#k#l\r\n";
        cm.sendSimple(selStr)
    } else if (status == 1) {
        switch (selection) {
            case 2:
                cm.给技能(技能, 技能等级 + 1, 3);
                cm.键盘上技能(角色, 2, 1, 技能, 技能等级, 30);
                break;
            case 3:
                cm.说明文字("技能放置键盘说明;\r\n\r\n将技能放置键盘会默认放在键盘的数字 #r1#k 键，选择放置后，角色会自动下线，#r30#k 秒后登陆游戏即可，如果发现放置失败，空白，再放置一次即可。");
                cm.dispose();
                break;
        }
    }
}