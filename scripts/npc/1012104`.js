/*
 *  @名称：    伯丽特
 *  @地图：    射手村美发店
 *  @功能：    美发
 *  @作者：    dgms
 *  @时间：    2016年12月30日
 */
var status = -1;
var beauty = 0;
var hair_Colo_new;
var isSecond = false;

function start() {
   /* isAngel = cm.getBeginner() == 6001;
    if (isAngel) {
        cm.sendChoiceAngle();
        return;
    } else {*/
        action(1, 0, 0);
    }

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }

    if (status == 0) {
        if (isAngel) {
            isSecond = selection != 0;
        }
        cm.sendSimple("我是美发店助手伯丽特。如果你有#b#t5150053##k，在我这里做个头发吧？\r\n#b#L0#更换发型（使用普通理发券）#l\r\n#L1#染色（使用普通染色卡）#l");
    } else if (status == 1) {
        if (selection == 0) {
            var hair = cm.getPlayerStat("HAIR");
            hair_Colo_new = [];
            beauty = 1;

            if (cm.getPlayerStat("GENDER") == 0) {
                hair_Colo_new = [30310, 30330, 30060, 30150, 30410, 30210, 30140, 30120, 30200, 30560, 30510, 30610, 30470];
            } else {
                hair_Colo_new = [31150, 31310, 31300, 31160, 31100, 31410, 31030, 31080, 31070, 31610, 31350, 31510, 31740];
            }
            for (var i = 0; i < hair_Colo_new.length; i++) {
                hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
            }
            hair_Colo_new = cm.getCanHair(hair_Colo_new);
            cm.sendYesNo("使用普通理发券可以随机更换发型。你确定要使用#b#t5150053##k更换发型吗？");

        } else if (selection == 1) {
            var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
            hair_Colo_new = [];
            beauty = 2;

            for (var i = 0; i < 8; i++) {
                hair_Colo_new[i] = currenthaircolo + i;
            }
            hair_Colo_new = cm.getCanHair(hair_Colo_new);
            cm.sendYesNo("使用普通染色卡可以随机更换头发颜色。你确定要使用#b#t5151035##k更换发色吗？");
        }
    } else if (status == 2) {
        if (hair_Colo_new.length == 0) {
            cm.sendOk("出现未知错误。");
        } else if (beauty == 1) {
            if (cm.setRandomAvatar(5150053, hair_Colo_new, isSecond) == 1) {
                cm.sendNext("享受你的新发型吧!");
            } else {
                cm.sendNext("额……你是不是没带我们美发店的专用理发券呢？很抱歉，没有理发券的话，我不能给你做头发。");
            }
        } else {
            if (cm.setRandomAvatar(5151035, hair_Colo_new, isSecond) == 1) {
                cm.sendNext("享受你的新发色吧!");
            } else {
                cm.sendNext("额……你是不是没带我们美发店的专用染色卡呢？很抱歉，没有染色卡的话，我不能给你做头发。");
            }
        }
        cm.safeDispose();
    }
}

