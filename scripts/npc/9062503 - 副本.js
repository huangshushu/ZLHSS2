

var damageSkinSelection = [2,3,4,5,6];   //CMS175官方所有的伤害皮肤 ，可自行参考此脚本从新编辑为抽奖随机获取，或道具自行兑换，或点券金币购买，自行编辑。

var selectedSkin;
var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        if (mode == 0) { 
            cm.sendNext("再见。");
        }
        cm.dispose();
    } else {
        status++;
        if (status == 0) {
            var message = "请选择要使用的伤害皮肤：\r\n#rps:如果想要更多的伤害皮肤，可使用#v4310250#在<累计赞助→礼品商店>兑换伤害皮肤切换功能，百余款伤害皮肤任您选择。\r\n";

            message += "#L0##fEffect/BasicEff.img/NoRed0/0##l";

            for (var i = 0; i < damageSkinSelection.length; i++) {
                message += "#L" + damageSkinSelection[i] + "##fEffect/DamageSkin.img/" + damageSkinSelection[i] + "/NoRed0/0##l";
            }            
            cm.sendSimple(message);
        } else if (status == 1) {
            selectedSkin = selection;
            cm.sendYesNo("你想换伤害皮肤吗？");
        } else if (status == 2) {
			cm.getPlayer().dropMessage(1,"[MapleHD] [DmgSkin] " + selectedSkin); //dll中处理的特殊文本用来更换伤害皮肤。
			//cm.getPlayer().dropMessage(1,"[MapleHD] [DmgSkin] #fEffect/BasicEff.img/NoRed0/0#");//原始伤害皮肤
			cm.getPlayer().dropMessage(2,"[伤害皮肤系统] : [更换伤害皮肤ID为] : " + selectedSkin);
			cm.sendNext("更换成功！");
            cm.dispose();
        }
    }
}