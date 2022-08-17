/*极品椅子*/
var status = 0;
        var choice;
        var itemxh = new Array("2431935", "2431936", "2290448", "2290449", "2290450", "2290451", "2290452", "2290453", "2290454", "2290455", "2290456", "2290457", "2290458", "2290459", "2290460", "2290461", "2290462", "2290463", "2290464", "2290465", "2290466", "2290467", "2290468", "2290571", "2290722", "2290723", "2290724", "5220040", "2702000", "5062800", "5530111", "5530268", "2048709", "2048705", "2048706", "5520000", "5520001", "2720001", "5570000", "5062500", "5062000", "5062002", "5750001", "5079001", "5079002", "5074000", "5076000", "1112585", "1112586", "2003566", "2003576", "4001839", "2431738", "2431739", "5511001", "5062400", "5190011");
        var itemxhcost = new Array("8000", "10000", "2000", "2000", "2000", "2000", "2000", "2000", "2000", "2000", "2000", "2000", "2000", "2000", "2000", "2000", "2000", "2000", "2000", "2000", "2000", "2000", "2000", "2000", "2000", "2000", "2000", "300", "500", "500", "1500", "1500", "1500", "3000", "5000", "1000", "1000", "500", "3000", "1200", "600", "1000", "200", "200", "200", "200", "500", "1000", "10000", "20000", "1000", "2000", "300", "500", "1000", "300", "5000", "1000");
        function start() {
        status = - 1;
                action(1, 0, 0);
        }

function action(mode, type, selection) {
if (mode == - 1) cm.dispose();
        else {
        if (status == 0 && mode == 0) {
        cm.dispose();
                return;
        } else if (status >= 1 && mode == 0) {
        cm.sendOk("好吧，欢迎下次继续光临！.");
                cm.dispose();
                return;
        }
        if (mode == 1) status++;
                else status--;
                if (status == 0) {
        choices = "请选择您要购买的道具  #rPS：购买前请确认背包有足够的空间。\r\n#r#e #n#b";
                for (var i = 0; i < itemxh.length; i++) {
        choices += "\r\n#b#L" + i + "##v" + itemxh[i] + "##z" + itemxh[i] + "#　#d需要#r" + itemxhcost[i] + "#d点卷#k#l";
        }
        cm.sendSimpleS("" + choices, 2);
        } else if (status == 1) {
        cm.sendGetNumber("你选择的商品为#b#v" + itemxh[selection] + "#售价为：" + itemxhcost[selection] + "点卷/张\r\n请输入你购买的数量", 1, 1, cm.getPlayer().getCSPoints(1));
                choice = selection;
        } else if (status == 2) {
        fee = selection;
                money = fee * itemxhcost[choice];
                if (fee < 0) {
        cm.sendOk("不能输入0.或者你没有足够的点卷支付你要买的数量.!");
                cm.dispose();
        } else if (cm.getPlayer().getCSPoints(1) < money) {
        cm.sendOk("购买失败，你没有" + money + "点卷");
                cm.dispose();
        } else {
        cm.gainNX( - money);
                cm.gainItem(itemxh[choice], fee);
                // cm.worldSpouseMessage(0x0D, "[功能道具] :  " + cm.getChar().getName() + "  在点卷商店购买了好东西!");
                cm.sendOk("恭喜，购买成功。");
                cm.dispose();
        }
        }
        }
}
