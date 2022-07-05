


var status = -1;
var typed = -1;
var sel = -1;


var baoshi = Array(
        //Array(4440300, "Str", 2, 1, 1), //	C级力量宝石
        //Array(4443300, "Dex", 2, 1, 1), //	C级敏捷宝石
        //Array(4442300, "Int", 2, 1, 1), //	C级智慧宝石
        Array(4441300, "Luk", 2, 1, 1), //	C级运气宝石
        //Array(4440200, "Str", 2, 3, 2), //	B级力量宝石
        //Array(4443200, "Dex", 2, 3, 2), //	B级敏捷宝石
        //Array(4442200, "Int", 2, 3, 2), //	B级智慧宝石
        Array(4441200, "Luk", 2, 3, 2), //	B级运气宝石
        //Array(4440101, "Str", 3, 5, 3) //	A级力量宝石
        //Array(4443101, "Dex", 3, 5, 3), //	A级敏捷宝石
        //Array(4442101, "Int", 3, 5, 3), //	A级智慧宝石
        Array(4441101, "Luk", 3, 5, 3) //	A级运气宝石
        //Array(4440001, "Str", 3, 8, 4), //	S级力量宝石
        //Array(4443001, "Dex", 3, 8, 4), //	S级敏捷宝石
        //Array(4442001, "Int", 3, 8, 4), //	S级智慧宝石
        //Array(4441001, "Luk", 3, 8, 4)//	S级运气宝石

        )

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    var item = cm.getInventory(1).getItem(1);
    if (item == null) {
        cm.sendOk("装备栏第一格需要有道具");
        cm.dispose();
        return;
    }
    switch (status) {
        case 0:
            var Text = "#e#r宝石可以为时装附魔,需要附魔的时装请放置装备栏第一格,附魔不可叠加,已附魔的时装再次附魔之前的属性则会消失，附魔每次收取1个金币中介 请选择你要附魔的宝石#d\r\n";
            for (var i = 0; i < baoshi.length; i++) {
                Text += "#L" + i + "# 附魔#v" + baoshi[i][0] + "##z" + baoshi[i][0] + "# 增加" + baoshi[i][1] + "[#r" + baoshi[i][3] + "~" + (baoshi[i][3] + (baoshi[i][2] - 1)) + "#d[#r攻魔+" + baoshi[i][4] + "#d]\r\n";
            }
            cm.sendSimple(Text);
            break;
        case 1:
            sel = selection;
            if (!cm.isCash(item.getItemId())) {
                cm.sendOk("本功能仅时装可用");
                cm.dispose();
                return;
            }
            if (cm.itemQuantity(baoshi[sel][0]) < 1) {
                cm.sendOk("你没有#v" + baoshi[sel][0] + "##z" + baoshi[sel][0] + "#");
                cm.dispose();
                return;
            }
            cm.sendYesNo("你是否要为#v" + item.getItemId() + "##z" + item.getItemId() + "#附魔#v" + baoshi[sel][0] + "##z" + baoshi[sel][0] + "#");
            break;
        case 2:
            if (cm.itemQuantity(baoshi[sel][0]) < 1) {
                cm.sendOk("你没有#v" + baoshi[sel][0] + "##z" + baoshi[sel][0] + "#,我不能为你附魔");
                cm.dispose();
                return;
            }
            if (cm.itemQuantity(4031997) < 1) {
                cm.sendOk("你没有#v" + 4031997 + "##z" + 4031997 + "#我不能为你附魔");
                cm.dispose();
                return;
            }
            cm.gainItem(baoshi[sel][0], -1);
            cm.gainItem(4031997, -1);
            var gailv = (Math.floor(Math.random() * baoshi[sel][2])) + baoshi[sel][3];
            item.setStr(cm.getEquip(item.getItemId()).getStr());// 设置力量
            item.setDex(cm.getEquip(item.getItemId()).getDex());
            item.setInt(cm.getEquip(item.getItemId()).getInt());
            item.setLuk(cm.getEquip(item.getItemId()).getLuk());
            item.setWatk(cm.getEquip(item.getItemId()).getWatk());
            item.setMatk(cm.getEquip(item.getItemId()).getMatk());
            if (baoshi[sel][0] == 4440001 || baoshi[sel][0] == 4440101 || baoshi[sel][0] == 4440200 || baoshi[sel][0] == 4440300) {
                item.setStr(cm.getEquip(item.getItemId()).getStr() + gailv);
                item.setWatk(cm.getEquip(item.getItemId()).getWatk() + baoshi[sel][4]);
                item.setMatk(cm.getEquip(item.getItemId()).getMatk() + baoshi[sel][4]);
            } else if (baoshi[sel][0] == 4443300 || baoshi[sel][0] == 4443200 || baoshi[sel][0] == 4443101 || baoshi[sel][0] == 4443001) {
                item.setDex(cm.getEquip(item.getItemId()).getDex() + gailv);
                item.setWatk(cm.getEquip(item.getItemId()).getWatk() + baoshi[sel][4]);
                item.setMatk(cm.getEquip(item.getItemId()).getMatk() + baoshi[sel][4]);
            } else if (baoshi[sel][0] == 4442300 || baoshi[sel][0] == 4442200 || baoshi[sel][0] == 4442101 || baoshi[sel][0] == 4442001) {
                item.setInt(cm.getEquip(item.getItemId()).getInt() + gailv);
                item.setWatk(cm.getEquip(item.getItemId()).getWatk() + baoshi[sel][4]);
                item.setMatk(cm.getEquip(item.getItemId()).getMatk() + baoshi[sel][4]);
            } else if (baoshi[sel][0] == 4441300 || baoshi[sel][0] == 4441200 || baoshi[sel][0] == 4441101 || baoshi[sel][0] == 4441001) {
                item.setLuk(cm.getEquip(item.getItemId()).getLuk() + gailv);
                item.setWatk(cm.getEquip(item.getItemId()).getWatk() + baoshi[sel][4]);
                item.setMatk(cm.getEquip(item.getItemId()).getMatk() + baoshi[sel][4]);
            }

            cm.forceReAddItem(item, 1); // 实时更新
            cm.sendOk("恭喜你附魔成功，本次为#v" + item.getItemId() + "##z" + item.getItemId() + "#附魔#v" + baoshi[sel][0] + "##z" + baoshi[sel][0] + "#增加了" + gailv + "点" + baoshi[sel][1]);
            cm.worldMessage(11, cm.getChannelNumber(), " [宝石附魔]" + " : " + "玩家【" + cm.getPlayer().getName() + "】使用" + cm.getItemName(baoshi[sel][0]) + "为时装附魔" + gailv + "点" + baoshi[sel][1]);
            break;
        default:
            cm.dispose();//结束当前对话脚本
            break;
    }


}