/* NPC版权: 彩云岛
 NPC名称: 		小帮手
 MAP(地图ID):
 NPC类型: 		综合NPC
 制作人：故事丶
 */

var status = 0;
var typede = 0;
var slot = Array();
var dsa = "";
function start() {

    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (status == 0) {
            var text = "";
            text = "#b不可用双倍药水的职业:\r\n#r恶魔复仇者,黑骑士,狂龙战士,米哈尔,火毒,主教,阴阳师, 炎术士,夜光,刀飞,标飞,双刀,夜行,神射,风灵,火炮手,机械师,尖兵,天使\r\n#k";
            text += "#L1##b领取双倍段数药水(试运营阶段,随时可能更改)#k#l\r\n";//双倍
            //text += "#L2##b2#k#l\r\n";//三倍
            cm.sendSimple(text);

        } else if (selection == 1) { //免费福利
            if (cm.getJob() == 900) {//cm.getJob() == 132 || cm.getJob() == 3122 || cm.getJob() == 6112 ||  cm.getJob() == 5112 || cm.getJob() == 212 || cm.getJob() == 232 || cm.getJob() == 4212 || cm.getJob() == 1212 || cm.getJob() == 2712 || cm.getJob() == 422 || cm.getJob() == 412 || cm.getJob() == 434 || cm.getJob() == 1412 || cm.getJob() == 312 || cm.getJob() == 1312 || cm.getJob() == 532 || cm.getJob() == 3512 || cm.getJob() == 3612 || cm.getJob() == 6512
                cm.sendOk("该职业不能领取段数药水。");
            } else if (cm.getPlayer().getLevel() <= 121) {
                cm.sendOk("等级121以上的玩家才可以领取。");
            } else if (cm.itemQuantity(2431397) == 0) {
                cm.gainItemPeriod(2431397, 1, 1);
                cm.sendOk("领取成功,祝您游戏愉快");
            } else {
                cm.sendOk("#k你身上已经有段数药水了。");

            }
            cm.dispose();
        } else if (selection == 2) { //雇佣商人
            if (cm.getSpace(5) < 1) {
                cm.sendOk("现金道具栏空间不足,无法领取。");
            } else if (cm.itemQuantity(5030019) == 1) {
                cm.gainItemPeriod(5030019, 1, 1);
                cm.setBossLog("每日雇佣");
                cm.sendOk("领取成功,祝您游戏愉快");
            } else {
                cm.sendOk("#k今天已经领取了,请明天再来。");

            }
            cm.dispose();

        } else if (selection == 3) { //皇家理发
            if (cm.getPlayer().getLevel() < 150) {
                cm.sendOk("等级150以上的玩家才可以领取。");
            } else if (cm.getSpace(5) < 1) {
                cm.sendOk("特殊道具栏空间不足,无法领取。");
            } else if (cm.getBossLog("皇家理发") == 0) {
                cm.gainItemPeriod(5150040, 1, 1);
                cm.setBossLog("皇家理发");
                cm.sendOk("领取成功,祝您游戏愉快");
            } else {
                cm.sendOk("#k今天已经领取了,请明天再来。");

            }
            cm.dispose();

        } else if (selection == 4) { //BUFF
            cm.sendOk("#k敬请期待。");
            cm.dispose();
        }
    }
}
