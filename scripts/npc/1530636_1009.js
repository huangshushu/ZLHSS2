/*
	制作：dgms
	功能：点券洗血洗蓝
	时间：2016年12月22日
*/
var status = -1;
var selected = 0;
var ico = "#fEffect/CharacterEff/1112905/0/1#";	//ICO美化图标
var cash = 10;

function start() {
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1 || mode == 0 && status == 0) {
        cm.dispose();
        return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
    }

    if (status == 0) {
        var I = ico;
        var getmaxhp = cm.getChar().getStat().getMaxHp();
        var getmaxmp = cm.getChar().getStat().getMaxMp();
        text = (I + I + I + I + I + I + I + I + I + I + I + "#e  洗血洗蓝  #n" + I + I + I + I + I + I + I + I + I + I + I);
        text += "\r\n\r\n"
        text += "点券元宝:#r" + cm.getNX(1) + "#k点"
        text += "\r\n"
        text += "#L0#增大HP\t\t\t当前最大HP:#r" + getmaxhp + "#k#l"
        text += "\r\n\r\n"
        text += "#L1#增大MP\t\t\t当前最大MP:#r" + getmaxmp + "#k#l"
        text += ("\r\n\r\n")
        text += (I + I + I + I + I + I + I + I + I + I + I + I + I + I + I + I + I + I + I + I + I + I + I + I + I + I + I + I + I);
        cm.sendNext(text);
    } else if (status == 1) {
        if (selection == 0) {
            if (cm.getChar().getStat().getMaxHp() >= 500000) {
                cm.sendOk("您的HP已最大值,无法继续增加!");
                cm.dispose();
                return;
            } else {
                selected = 1;
                text = "您好,欢迎使用点卷增加HP.每" + cash + "点卷增加1点最大HP值。";
                text += "\r\n目前点卷：#r" + cm.getNX(1) + " #k点";
                text += "\r\n#r注：请输入想增加的#b血量值";

                cm.sendGetNumber(text, 1, 1, 10000);
            }
        } else if (selection == 1) {
            if (cm.getChar().getStat().getMaxMp() >= 500000) {
                cm.sendOk("您的MP已最大值,无法继续增加!");
                cm.dispose();
                return;
            } else {
                selected = 2;
                text = "您好,欢迎使用点卷增加MP.每" + cash + "点卷增加1点最大MP值。";
                text += "\r\n目前点卷：#r" + cm.getNX(1) + " #k点";
                text += "\r\n#r注：请输入想增加的#b蓝量值";

                cm.sendGetNumber(text, 1, 1, 10000);
            }
        } else if (selection == 2) {
            if (cm.getItemQuantity(item) < itemtonx) {
                cm.sendOk("您的#v" + item + "#不足，无法进行兑换！");
                cm.dispose();
                return;
            } else {
                selected = 3;
                text = "\r\n#d剩余点券：#r" + cm.getNX(1) + " 点";
                text += "\r\n#d剩余枫叶：#r" + cm.getItemQuantity(item) + " 个\t\t#b可兑换" + cm.getItemQuantity(item) * tonx2 + "点券";
                text += "\r\n#d兑换比例：#r1个金色枫叶 = 950点券";
                text += "\r\n\r\n#r请输入要兑换成点券的#e枫叶数量："
                cm.sendGetNumber(text, 1, 1, cm.getItemQuantity(item));
            }
        }
    } else if (status == 2) {
        if (selected == 1) {
            var getmaxhp = cm.getChar().getStat().getMaxHp();
            cm.getChar().getStat().setMaxHp(getmaxhp + selection, cm.getChar());
            cm.gainNX(-selection * cash);
            cm.sendOk("#b你成功用#r " + (selection * cash) + " #b点点券增加了#r " + selection + " #b最大HP值\r\n\r\n#r换线或小退一下即可看到");
            cm.dispose();

        } else if (selected == 2) {
            var getmaxmp = cm.getChar().getStat().getMaxMp();
            cm.getChar().getStat().setMaxMp(getmaxmp + selection, cm.getChar());
            cm.gainNX(-selection * cash);
            cm.sendOk("#b你成功用#r " + (selection * cash) + " #b点点券增加了#r " + selection + " #b最大MP值\r\n\r\n#r换线或小退一下即可看到");
            cm.dispose();

        } else if (selected == 3) {
            cm.gainItem(item, -selection);
            cm.gainNX(selection * tonx2);
            cm.sendOk("#b你成功用#r " + selection + " #b个元宝兑换了#r " + (selection * tonx2) + " #b点券");
            cm.dispose();
        } else {
            cm.sendOk("未知错误");
            cm.dispose();
            return;
        }
    }

}