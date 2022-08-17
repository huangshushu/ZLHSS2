/**
 * @功能:伴侣冒险岛拍卖中心
 * @制作:dgms
 * @日期:2017年1月9日
 */

var status = -1;
var npcid = Array(1530635, 1530636, 1530637, 1530638);
var ico1 = "#fMap/MapHelper.img/weather/loveRain/6#";
var ico2 = "#fEffect/ItemEff/1112312/0/0#";
var ico3 = "#fEffect/ItemEff/1112006/0/0#";
var ico4 = "#fMap/MapHelper.img/weather/lovelypartybear/3#";
var ico5 = "#fEffect/CharacterEff/1112949/1/0#";


function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
    } if (status == 0) {
        text = "\t\t\t"
        //text += "#L0#" + ico1 + ico1 + "#r#e【查看个人信息-技改信息】" + ico1 + ico1 + "#l";
        text += ico1 + ico1 + "#fs18##r#e " + cm.getServerName() + " " + ico1 + ico1 + "#l#fs12#";
        text += "\r\n"
        text += "#L1#" + ico2 + "#d#e新手中心#l"
        text += "#L2#" + ico2 + "#d#e我的账户#l"
        text += "#L3#" + ico2 + "#d#e每日福利#l"
        text += "\r\n\r\n"
        text += "#L4#" + ico3 + "#b#e返回市场" + ico3 + "#l"
        text += "#L5#" + ico3 + "#b#e万能传送" + ico3 + "#l"
        text += "#L6#" + ico3 + "#b#e快速转职" + ico3 + "#l"
        text += "\r\n"
        text += "#L7#" + ico3 + "#b#e最强挑战" + ico3 + "#l"
        text += "#L8#" + ico3 + "#b#e组队副本" + ico3 + "#l"
        text += "#L9#" + ico3 + "#b#e游戏排行" + ico3 + "#l"
        text += "\r\n"
        text += "#L10#" + ico3 + "#b#e金融中心" + ico3 + "#l"
        //text += "#L11#" + ico3 + "#b#e点券市场" + ico3 + "#l"
        text += "#L11#" + ico3 + "#b#e每日活动" + ico3 + "#l"
        text += "#L12#" + ico3 + "#b#e拜师学徒" + ico3 + "#l"
        text += "\r\n"
        text += "#L24#" + ico3 + "#b#e高手进阶" + ico3 + "#l"
        text += "#L25#" + ico3 + "#b#e传奇人物" + ico3 + "#l"
        text += "#L26#" + ico3 + "#b#e查看爆率" + ico3 + "#l"
        text += "\r\n"
        text += "#L13#" + ico3 + "#b#e删除物品" + ico3 + "#l"
        text += "#L14#" + ico3 + "#b#e仓库店铺" + ico3 + "#l"
        text += "#L15#" + ico3 + "#b#e更多功能" + ico3 + "#l"
        text += "\r\n\t\t\t"
        text +="  #L27#" + ico5 + "#r#e充值中心" + ico5 + "#l"
        text += "\r\n   "
        text += "#L16#" + ico4 + "#k#e寄售#l "
        text += "#L17#" + ico4 + "#k#e怪怪#l "
        text += "#L18#" + ico4 + "#k#e官职#l "
        text += "#L19#" + ico4 + "#k#e花园#l "
        text += "\r\n   "
        text += "#L20#" + ico4 + "#k#e杂货#l "
        text += "#L21#" + ico4 + "#k#e武器#l "
        text += "#L22#" + ico4 + "#k#e百货#l "
        text += "#L23#" + ico4 + "#k#e时装#l "


        cm.sendSimple(text, npcid[Math.floor(Math.random() * npcid.length)]);
    } else if (status == 1) {
        if (selection == 0) {
            cm.dispose();
            cm.sendOk("好的");
        } else if (selection == 1) {
            cm.dispose();
            cm.openNpc(1530635, 13);
        } else if (selection == 2) {
            cm.dispose();
            cm.openNpc(1530635, 2);
        } else if (selection == 3) {//每日福利
            cm.dispose();
            cm.openNpc(1530635, 3);
        } else if (selection == 4) {
            if (cm.getPlayer().getMapId() >= 101050000 && cm.getPlayer().getMapId() <= 910000022) {
                cm.sendOk("#fs28##fn方正舒体##b你难道不在自由市场吗？", npcid[Math.floor(Math.random() * npcid.length)]);
            } else {
                cm.saveReturnLocation("FREE_MARKET");
                cm.warp(101050000, "st00");
            }
            cm.dispose();
        } else if (selection == 5) {
            cm.dispose();
            cm.openNpc(1530635, 1);
        } else if (selection == 6) {//职业转职
            cm.dispose();
            cm.openNpc(1530635, "changeJob");
        } else if (selection == 7) {//爆死挑战
            cm.saveLocation("MULUNG_TC");
            cm.warp(932100005, 0);
            cm.dispose();
        } else if (selection == 8) {//组队副本
            cm.dispose();
            cm.warp(910002000);
        } else if (selection == 9) {//游戏排行
            cm.dispose();
            cm.openNpc(1540008);
        } else if (selection == 10) {//金融中心
            cm.dispose();
            cm.openNpc(9300011, 1);
        } else if (selection == 11) {//点券市场
            cm.dispose();
            cm.openNpc(1530635 ,991);
            //cm.openNpc(1530635, 5);
        } else if (selection == 12) {//拜师学徒
            cm.dispose();
            cm.openNpc(1530635, "bsxt");
        } else if (selection == 13) {//删除物品
            cm.dispose();
            cm.openNpc(1530635, 7);
        } else if (selection == 14) {//仓库店铺
            cm.dispose();
            cm.openNpc(1530635, 998);
        } else if (selection == 15) {//更多功能
            cm.dispose();
            cm.openNpc(1530635, 999);
        } else if (selection == 16) {//寄售
            cm.dispose();
            cm.openNpc(1530636, 1002);
        } else if (selection == 17) {//怪怪
            cm.dispose();
            cm.openUI(0x254);
        } else if (selection == 18) {//官职
            cm.dispose();
            cm.sendOk("制作中...");
        } else if (selection == 19) {//花园
            cm.dispose();
            cm.openNpc(1530636, 1001);
        } else if (selection == 20) {//杂货
            cm.dispose();
            cm.openShop(61);
        } else if (selection == 21) {//武器
            cm.dispose();
            cm.openNpc(1530635, 4);
        } else if (selection == 22) {//百货
            cm.dispose();
            cm.openNpc(1530635, 994);
        } else if (selection == 23) {//时装
            cm.dispose();
            cm.openNpc(1530635, 993);
        } else if (selection == 24) {//高手进阶
            cm.dispose();
            cm.openNpc(1530636, 1006);
        } else if (selection == 25) {//建议
            cm.dispose();
            cm.openNpc(1530637, 2010);
        } else if (selection == 26) {//查看爆率
            cm.dispose();
            cm.openNpc(1530635, 6);
        }else if (selection == 27) {//充值中心
            cm.dispose();
            cm.openNpc(1530635, 997);
        }


    } else {
        cm.dispose();
    }
}