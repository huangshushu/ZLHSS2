var status = -1;
var mobid = 0;
var moblist = null;
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        cm.sendGetText("请输入你想要查询的物品名字（支持模糊查询）：");
    } else if (status == 1) {
        moblist = cm.查爆率(cm.getText());
        if (moblist.length > 0) {
            var txt = "请选择你想要查询的物品：\r\n";
            for (var i in moblist) {
                txt += "#L" + moblist[i] + "##b#z" + moblist[i] + "##k "+moblist[i]+"\r\n";
            }
            cm.sendSimple(txt);
        } else {
            cm.sendOk("没有查询到物品信息");
            cm.dispose();
            return;
        }
    } else if (status == 2) {
        var rs = cm.sql_Select("select * from drop_data where itemid = ?", selection);
        if (rs.length > 0) {
            var txt = "以下怪物存在爆率：\r\n"
            for (var i in rs) {
                txt += "\t#b#o" + rs[i].get("dropperid") + "##k\r\n";
            }
            cm.sendOk(txt);
            cm.dispose();
        } else {
            cm.sendOk("没有查询到爆率信息");
            cm.dispose();
            return;
        }
    }
}