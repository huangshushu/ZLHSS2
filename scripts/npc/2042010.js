/*
 * gm开启红包功能，手速快的前10名领取物品。
 * 更新时间：2015年11月19日 09:41:29
 */
var LuckyMoney = 0;
var LuckMoneyType = 0;
var monArr = new Array();
//        id,luckmoneytype,LuckyMoney,AllowPeople,used
/*
 * 0 - 金币
 * 1 - 点券
 * 2 -  抵用券
 * 3 - 现金
 * 其它 - 物品id（默认数量为1个，你可以弄成礼包道具）
 */
/*var status = -1;
var iconQ = "#fUI/UIWindow2/QuestAlarm/BtQ/normal/0#";
var 空心圆圈1 = "#fUI/UIWindow2/bohabManager/dot/1/dot#";
var 空心圆圈2 = "#fUI/UIWindow2/bohabManager/dot/2/dot#";
var 空心圆圈3 = "#fUI/UIWindow2/bohabManager/dot/3/dot#";
var 空心圆圈4 = "#fUI/UIWindow2/bohabManager/dot/4/dot#";
var 任务简介 = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#"
var Gift = "#fUI/UIWindow2/crossHunterUI/reward/button/normal/0#";

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        cm.sendOk("如果您有需要的话可以再来找我哦~");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var text = 任务简介 + "\r\n #b亲爱的#r" + cm.getPlayer().getName() + "#k,#b欢迎来到#r" + cm.getServerName() + "#k! #b这里是管理员开启红包发放奖励，手速够快的幸运玩家将抢到管理员Gm发放的幸运红包，红包开启后全服有公共提示，请注意查看.\r\n\r\n#b";
        text += "\t\t#L0# " + Gift + "\r\n\r\n"
        if (cm.getPlayer().isGM()) {
            text += "#L1# " + 空心圆圈2 + " #d[管理员选项]#r管理红包设置。"
        }
        cm.sendSimple(text);
    } else if (status == 1) {
        if (selection == 0) {//领取管理员发布的红包
            status = 5;
            var text = findLuckeyMoney(0);
            if (text == "") {
                cm.sendOk("#r目前红包已经被抢完，请期待下一次红包开启吧~");
                cm.dispose();
                return;
            }
            cm.sendSimple(text);
        } else if (selection == 1) {//管理红包设置
            cm.sendSimple("#b#L0# 生成一个红包数据 \r\n#L1# 管理目前的红包。");
        }
    } else if (status == 2) {
        if (selection == 0) {//生成一个红包
            /*
             * 0 - 金币
             * 1 - 点券
             * 2 -  抵用券
             * 3 - 现金
             * 其它 - 物品id（默认数量为1个，你可以弄成礼包道具）
             */
            cm.sendSimple("请选择你想要生成红包的类型！\r\n#L0# 金币 #L1# 点券 #L2# 抵用 #L3# 现金 \r\n#L4# 道具");
        } else if (selection == 1) {//管理目前的红包
            //TODO
            status = 6;
            var text = findLuckeyMoney(1);
            if (text == "") {
                cm.sendOk("#r暂时没有红包数据。");
                cm.dispose();
                return;
            }
            cm.sendSimple(findLuckeyMoney(1));
        }
    } else if (status == 3) {
        switch (selection) {
            case 0://金币
                cm.sendGetNumber("请输入您想要输入的金币数量", 0, 0, 2100000000);
                break;
            case 1://点券
                cm.sendGetNumber("请输入您想要输入的点券数量", 0, 0, 1000000);
                break;
            case 2://抵用
                cm.sendGetNumber("请输入您想要输入的抵用数量", 0, 0, 10000000);
                break;
            case 3://现金
                cm.sendGetNumber("请输入您想要输入的现金数量", 0, 0, 1000000);
                break;
            case 4://道具
                cm.sendGetNumber("请输入道具ID", 0, 0, 9999999);
                break;
        }
        LuckMoneyType = selection; //记录红包内礼物的类别
    } else if (status == 4) {
        LuckyMoney = selection;
        cm.sendGetNumber("请输入该红包最大可供几人领取（1人只能领取一次）", 0, 0, 999);
    } else if (status == 5) {
        //LuckeyMoneyType红包类别，LuckeyMoney红包总额，selection最大领取人数
        setLuckeyMoney(LuckMoneyType, LuckyMoney, selection);
        cm.sendOk("生成红包数据成功！！");
        cm.worldSpouseMessage(0x23, "『拼手速红包』" + " : " + "哇塞， " + cm.getChar().getName() + " 开启了限量抢红包活动。赶紧抓紧时间抢吧，请在自由【休彼德蔓】领取红包");
        cm.worldSpouseMessage(0x23, "『拼手速红包』" + " : " + "哇塞， " + cm.getChar().getName() + " 开启了限量抢红包活动。赶紧抓紧时间抢吧，请在自由【休彼德蔓】领取红包");
        cm.worldSpouseMessage(0x23, "『拼手速红包』" + " : " + "哇塞， " + cm.getChar().getName() + " 开启了限量抢红包活动。赶紧抓紧时间抢吧，请在自由【休彼德蔓】领取红包");
        cm.worldSpouseMessage(0x23, "『拼手速红包』" + " : " + "哇塞， " + cm.getChar().getName() + " 开启了限量抢红包活动。赶紧抓紧时间抢吧，请在自由【休彼德蔓】领取红包");
        cm.worldSpouseMessage(0x23, "『拼手速红包』" + " : " + "哇塞， " + cm.getChar().getName() + " 开启了限量抢红包活动。赶紧抓紧时间抢吧，请在自由【休彼德蔓】领取红包");
        //cm.dispose();
        status = -1;
    } else if (status == 6) {
        getLuckeyMoney(selection);
        cm.dispose();
    } else if (status == 7) {
        delMoney(monArr[selection]);
        cm.sendNext("删除数据成功！");
        status = -1;
    }
}
function getLuckeyMoney(which) {
    if (cm.getBossLog("管理员红包" + monArr[which]) >= 1) {
        cm.sendOk("对不起，一个红包每个角色只能领取一次。");
        cm.dispose();
        return;
    }
    var getMoney = cm.sql_Select("SELECT * FROM LuckMoneyData where id =" + monArr[which] + " and  used < AllowPeople");
    //TODO 再次判断是否已经领取
    var ii = cm.getItemInfo();
    cm.getPlayer().dropMessage(-1, monArr[which]);
    for (var key in getMoney) {
        switch (parseInt(getMoney[key].get("luckmoneytype"))) {
            case 0://金币
                cm.gainMeso(parseInt(getMoney[key].get("LuckyMoney")));
                cm.sendOk("领取成功啦！！！");
                cm.worldSpouseMessage(0x23, "『拼手速红包』" + " : " + "玩家 " + cm.getChar().getName() + " 领取了管理员发放的 " + parseInt(getMoney[key].get("LuckyMoney")) + " 金币红包。");
                break;
            case 1://点券
                cm.gainNX(1, parseInt(getMoney[key].get("LuckyMoney")));
                cm.sendOk("领取成功啦！！！");
                cm.worldSpouseMessage(0x23, "『拼手速红包』" + " : " + "玩家 " + cm.getChar().getName() + " 领取了管理员发放的 " + parseInt(getMoney[key].get("LuckyMoney")) + " 点卷红包。");
                break;
            case 2://抵用
                cm.gainNX(2, parseInt(getMoney[key].get("LuckyMoney")));
                cm.sendOk("领取成功啦！！！");
                cm.worldSpouseMessage(0x23, "『拼手速红包』" + " : " + "玩家 " + cm.getChar().getName() + " 领取了管理员发放的 " + parseInt(getMoney[key].get("LuckyMoney")) + " 抵用卷红包。");
                break;
            case 3://现金
                cm.addHyPay(-parseInt(getMoney[key].get("LuckyMoney")));
                cm.sendOk("领取成功啦！！！");
                cm.worldSpouseMessage(0x23, "『拼手速红包』" + " : " + "玩家 " + cm.getChar().getName() + " 领取了管理员发放的 " + parseInt(getMoney[key].get("LuckyMoney")) + " 现金红包。");
                break;
            case 4://道具
                cm.gainItem(parseInt(getMoney[key].get("LuckyMoney")), 1);
                cm.sendOk("领取成功啦！！！");
                cm.worldSpouseMessage(0x23, "『拼手速红包』" + " : " + "玩家 " + cm.getChar().getName() + " 领取了管理员发放的 " + ii.getName(parseInt(getMoney[key].get("LuckyMoney"))) + " 道具红包。");
                break;
        }
        iUsed(monArr[which], parseInt(getMoney[key].get("used")) + 1);
        cm.setBossLog("管理员红包" + monArr[which]);
    }
}

function iUsed(uid, times) {
    cm.sql_Update("update LuckMoneyData set used = ? where id = ?", time, uid);
}
function findLuckeyMoney(index) {
    var getMoney;
    if (index == 0) {//0显示可用， 1显示所有
        getMoney = cm.sql_Select("SELECT * FROM LuckMoneyData where used < AllowPeople")
    } else if (index == 1) {
        getMoney = cm.sql_Select("SELECT * FROM LuckMoneyData")
    }
    var text = "";
    for (var key in getMoney) {
        text += "#L" + key + "# 第" + (key + 1) + "个神秘哒红包!\r\n";
        monArr.push(getMoney[key].get("id"));
    }
    return text;
}

function setLuckeyMoney(monType, monNumber, monMax) {
    cm.sql_Insert("INSERT INTO LuckMoneyData(id, luckmoneytype, LuckyMoney, AllowPeople, used) value(?,?,?,?,?)", null, monType, monNumber, monMax, 0);
}

function delMoney(uid) {
    cm.sql_Update("delete from LuckMoneyData where id = " + uid + "");

}