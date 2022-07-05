/* global cm */

function start() {
    var info = "对不起，我并没有被管理员设置可使用，如果您觉得我应该工作的，那就请您回报给管理员.\r\n";
    if (cm.getPlayerStat("GM") > 0) {
        info += "我的ID编号: #r" + cm.getNpc() + "#k ";
    }
    cm.sendOk(info);
    cm.dispose();
}
