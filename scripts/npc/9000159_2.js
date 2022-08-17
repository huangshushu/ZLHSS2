var status = -1;

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {//如果你有#b#t05152053##k 使用皇家整容院优惠券
        cm.sendSimple("欢迎参加活动,接下来的#b2分钟#k你可以随意抽取#b皇家发型#k。免费的哟,千万别错过了!!\r\n#b#L0#立即抽取皇家发型(免费)#l");
    } else if (status == 1) {
        cm.sendYesNo("整容后无法还原,你现在确定要更换脸型吗？");
    } else if (status == 2) {
        var face = cm.getPlayerStat("FACE");
        var facetype;
        if (cm.getPlayerStat("GENDER") == 0) {
            facetype = [20020, 20021, 20022, 20023, 20024, 20025, 20026, 20027, 20028, 20029, 20030, 20031, 20032, 20033, 20035, 20036, 20037, 20038, 20040, 20043, 20044, 20045, 20046, 20047, 20048, 20049, 20050, 20051, 20052, 20055, 20056, 20057];
        } else {
            facetype = [21020, 21021, 21022, 21023, 21024, 21025, 21026, 21027, 21028, 21029, 21030, 21031, 21033, 21034, 21035, 21036, 21038, 21041, 21042, 21043, 21044, 21045, 21046, 21047, 21048, 21049, 21050, 21053, 21054, 21055];
        }
        for (var i = 0; i < facetype.length; i++) {
            facetype[i] = facetype[i] + face % 1000 - (face % 100);
        }
         //if (cm.setRandomAvatar(4001246, hair_Colo_new) == 1) {
         if (cm.setRandomAvatar(4001246, facetype) == 1) {   
         cm.sendOk("好了,你的朋友们一定认不出你了!");
        } else {
            cm.sendOk("你最少需要1个#v4310057#才可以免费抽取。");
        }
        cm.safeDispose();
    }
}
