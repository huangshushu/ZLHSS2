/*
	NPC Name: 		Kin
	Map(s): 		Victoria Road : Ellinia (180000000)
	Description: 		Changes your skin, hair, hair color, face and eye color for both male and female
*/

var status = 0;
var beauty = 0;
var facenew;
var colors;
var hairnew;
var haircolor;
var skin = Array(1, 2, 3, 4, 9, 10, 11);
var mface;
var mhair;
var fface;
var fhair;

function start() {
    status = -1;
    action(1, 0, 0);
    fhair = Array(34000, 34010, 34040, 34050, 34060, 34070, 34080, 34090, 34100, 34110, 34120, 34130, 34140, 34150, 34160, 34170, 34180, 34190, 34200, 34210, 34220, 34230, 34240, 34250, 34260, 34270, 34280, 34290, 34300, 34310, 34320, 34330, 34340, 34350, 34360, 34370, 34380, 34400, 34410, 34420, 34430, 34440, 34450, 34470, 34480, 34490, 34510, 34540, 34560, 34590, 34600, 34610, 34620, 34630, 34640, 34650, 34660, 34670, 34680, 34690, 34700, 34710, 34720, 34730, 34740, 34750, 34760, 34770, 34790, 34800, 34830, 34860, 34870, 34880, 34890, 34900, 34910, 34990);
    mhair = Array(33000, 33030, 33040, 33050, 33060, 33070, 33080, 33090, 33100, 33110, 33120, 33130, 33140, 33150, 33160, 33170, 33180, 33190, 33200, 33210, 33220, 33230, 33240, 33250, 33260, 33270, 33280, 33290, 33300, 33310, 33320, 33330, 33340, 33350, 33360, 33370, 33380, 33390, 33400, 33410, 33430, 33440, 33450, 33460, 33470, 33480, 33500, 33510, 33520, 33530, 33540, 33550, 33580, 33590, 33600, 33610, 33620, 33630, 33640, 33650, 33660, 33670, 33680, 33690, 33700, 33710, 33720, 33730, 33740, 33750, 33760, 33770, 33800, 33810, 33960, 33970, 33980, 33990);
    fface = Array(21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21009, 21010, 21011, 21012, 21013, 21014, 21015, 21016, 21017, 21018, 21019, 21020, 21021, 21022, 21023, 21024, 21025, 21026, 21027, 21028, 21029, 21030, 21031, 21033, 21034, 21035, 21036, 21038, 21041, 21042, 21043, 21044, 21045, 21046, 21047, 21048, 21049, 21050, 21052, 21053, 21054, 21055, 21056, 21057, 21058);
    mface = Array(20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 20014, 20015, 20016, 20017, 20018, 20019, 20020, 20021, 20022, 20023, 20024, 20025, 20026, 20027, 20028, 20029, 20030, 20031, 20032, 20033, 20035, 20036, 20037, 20038, 20040, 20043, 20044, 20045, 20046, 20047, 20048, 20049, 20050, 20051, 20052, 20053, 20055, 20056, 20057, 20058, 20059, 20060, 20061);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        if (cm.getChar().getAndroid() != null) {
            cm.sendSimple("你好！我是智能机器人化妆师仙姬。你想重新装扮自己的机器人？那你就找对人了！我可以为你的智能机器人更换一切！\r\n#b#L0#皮肤护理#l\r\n#L1#更换发型#l\r\n#b#L2#头发染色#l\r\n#L3#更换脸型#l\r\n#L4#眼睛换色#l");
        } else {
            cm.sendOk("没有智能机器人的话，我什么都做不了。你能带着智能机器人一起来吗？");
            cm.dispose();
        }
    } else if (status == 1) {
        if (cm.getAndroidStat("GENDER") == 0) {
            if (selection == 0) {
                beauty = 1;
                cm.sendAStyle("您想将安卓更换成什么样的皮肤呢？请挑选一下～", skin, 5153015);
            } else if (selection == 1) {
                beauty = 2;
                hairnew = Array();
                for (var i = 0; i < mhair.length; i++) {
                    if (mhair[i] == 30010 || mhair[i] == 30070 || mhair[i] == 30080 || mhair[i] == 30090 || mhair[i] == 33140 || mhair[i] == 33240 || mhair[i] == 33180) {
                        hairnew.push(mhair[i]);
                    } else {
                        hairnew.push(mhair[i] + parseInt(cm.getChar().getAndroid().getHair() % 10));
                    }
                }
                cm.sendAStyle("我可以帮您的安卓换成全新的发型。您厌倦了现在的安卓发型了吗？只要您有#b万能会员卡#k，我就可以帮您的安卓更换发型。请慢慢挑选自己喜欢的发型～", hairnew, 5150052);
            } else if (selection == 2) {
                beauty = 3;
                haircolor = Array();
                var current = parseInt(cm.getChar().getAndroid().getHair() / 10) * 10;
                if (current == 30010 || current == 30070 || current == 30080 || current == 30090 || current == 33140 || current == 33240) {
                    haircolor.push(current);
                } else {
                    for (var i = 0; i < 8; i++) {
                        haircolor.push(current + i);
                    }
                }
                cm.sendAStyle("我们可以为您的安卓改变头发的颜色。是不是已经厌倦了安卓头发的颜色啊？如果您有#b万能会员卡#k，我就可以给您安卓染发，慢慢挑选您喜欢的颜色吧！", haircolor, 5151036);
            } else if (selection == 3) {
                beauty = 4;
                facenew = Array();
                for (var i = 0; i < mface.length; i++) {
                    if (mface[i] == 20015 || mface[i] == 20025 || mface[i] == 20027 || mface[i] == 20029 || mface[i] == 20030 || mface[i] == 20031 || mface[i] == 20032 || mface[i] == 20056 || mface[i] == 20055 || mface[i] == 20048 || mface[i] == 20049) {
                        facenew.push(mface[i]);
                    } else {
                        facenew.push(mface[i] + cm.getChar().getAndroid().getFace() % 1000 - (cm.getChar().getAndroid().getFace() % 100));
                    }
                }
                cm.sendAStyle("可以让您的安卓面容焕然一新…不想让您的安卓面容变一变吗？ 只需要#b万能会员卡#k就可以给您的安卓做整形手术.怎么样~慢慢挑选一下您想要的面容~", facenew, 5152057);
            } else if (selection == 4) {
                beauty = 5;
                var current = cm.getChar().getAndroid().getFace() % 100 + 20000;
                colors = Array();
                if (current == 20015 || current == 20025 || current == 20027 || current == 20029 || current == 20030 || current == 20031 || current == 20032 || current == 20056 || current == 20055 || current == 20048 || current == 20049) {
                    colors = Array(current, current + 100, current + 200, current + 300, current + 400, current + 500, current + 600, current + 700);
                } else {
                    colors = Array(current, current + 100, current + 200, current + 300, current + 400, current + 500, current + 600, current + 700, current + 800);
                }
                cm.sendAStyle("请选择您喜欢的眼睛颜色吧.", colors, 5152057);
            }
        } else {
            if (selection == 0) {
                beauty = 1;
                cm.sendAStyle("您想将安卓更换成什么样的皮肤呢？请挑选一下～", skin, 5153015);
            } else if (selection == 1) {
                beauty = 2;
                hairnew = Array();
                for (var i = 0; i < fhair.length; i++) {
                    if (fhair[i] == 34160) {
                        hairnew.push(fhair[i]);
                    } else {
                        hairnew.push(fhair[i] + parseInt(cm.getChar().getAndroid().getHair() % 10));
                    }
                }
                cm.sendAStyle("我可以帮您的安卓换成全新的发型。您厌倦了现在的安卓发型了吗？只要您有#b万能会员卡#k，我就可以帮您的安卓更换发型。请慢慢挑选自己喜欢的发型～", hairnew, 5150052);
            } else if (selection == 2) {
                beauty = 3;
                haircolor = Array();
                var current = parseInt(cm.getChar().getAndroid().getHair() / 10) * 10;
                if (current == 34160) {
                    haircolor.push(current);
                } else {
                    for (var i = 0; i < 8; i++) {
                        haircolor.push(current + i);
                    }
                }
                cm.sendAStyle("我们可以为您的安卓改变头发的颜色。是不是已经厌倦了安卓头发的颜色啊？如果您有#b万能会员卡#k，我就可以给您安卓染发，慢慢挑选您喜欢的颜色吧！", haircolor, 5151036);
            } else if (selection == 3) {
                beauty = 4;
                facenew = Array();
                for (var i = 0; i < fface.length; i++) {
                    if (fface[i] == 21027 || fface[i] == 21028 || fface[i] == 21029 || fface[i] == 21030 || fface[i] == 21031 || fface[i] == 21053 || fface[i] == 21054 || fface[i] == 21046 || fface[i] == 21047) {
                        facenew.push(fface[i]);
                    } else {
                        facenew.push(fface[i] + cm.getChar().getAndroid().getFace() % 1000 - (cm.getChar().getAndroid().getFace() % 100));
                    }
                }
                cm.sendAStyle("可以让您的安卓面容焕然一新…不想让您的安卓面容变一变吗？ 只需要#b万能会员卡#k就可以给您的安卓做整形手术.怎么样~慢慢挑选一下您想要的面容~", facenew, 5152057);
            } else if (selection == 4) {
                beauty = 5;
                var current = cm.getChar().getAndroid().getFace() % 100 + 21000;
                colors = Array();
                if (current == 21027 || current == 21028 || current == 21029 || current == 21030 || current == 21031 || current == 21053 || current == 21054 || current == 21046 || current == 21047) {
                    colors = Array(current, current + 100, current + 200, current + 300, current + 400, current + 500, current + 600, current + 700);
                } else {
                    colors = Array(current, current + 100, current + 200, current + 300, current + 400, current + 500, current + 600, current + 700, current + 800);
                }
                cm.sendAStyle("请选择您喜欢的眼睛颜色吧.", colors, 5152057);
            }
        }
    } else if (status == 2) {
        if (cm.getChar().getAndroid() == null) {
            cm.sendOk("你没有智能机器人，我帮不上什么忙。你把智能机器人一起带来吧？");
        } else if (beauty == 1) {
            if (cm.setAvatarA(5153015, skin[selection]) == 1) {
                cm.sendOk("完成了,让朋友们赞叹安卓的新肤色吧!");
            } else {
                cm.sendOk("嗯……您好像没有护肤券啊。对不起，没有护肤券的话，我就不能帮您的安卓护理皮肤。");
            }
        } else if (beauty == 2) {
            if (cm.setAvatarA(5150052, hairnew[selection]) == 1) {
                cm.sendOk("理发好了，怎么样？看看安卓的新发型吧！");
            } else {
                cm.sendOk("嗯……您好像没有美发店专用会员卡啊？不好意思，没有会员卡的话，我就不能帮您的安卓理发。");
            }
        } else if (beauty == 3) {
            if (cm.setAvatarA(5151036, haircolor[selection]) == 1) {
                cm.sendOk("理发好了，怎么样？看看安卓的新发色吧！");
            } else {
                cm.sendOk("嗯……您好像没有美发店专用会员卡啊？不好意思，没有会员卡的话，我就不能帮您的安卓染头发。");
            }
        } else if (beauty == 4) {
            if (cm.setAvatarA(5152057, facenew[selection]) == 1) {
                cm.sendOk("好了,看看您安卓的新面容吧!");
            } else {
                cm.sendOk("嗯。。。您肯定没有我们医院的会员卡。。。不好意思如果您没会员卡，我不能给您的安卓做手术。");
            }
        } else if (beauty == 5) {
            if (cm.setAvatarA(5152057, colors[selection]) == 1) {
                cm.sendOk("好了,看看您安卓的眼睛颜色吧!");
            } else {
                cm.sendOk("嗯。。。您肯定没有我们医院的会员卡。。。不好意思如果您没会员卡，我不能给您的安卓做手术。");
            }
        }
        cm.dispose();
    }
}
