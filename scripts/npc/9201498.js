var status = 0;
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var cdkey = null;
var itemList = null;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            //初始化对象
            itemList = null;
            cdkey = null;
            cm.sendGetText("#b请输入 16 位 CDKEY 序列号领取奖品：\r\n#d1. 每晚GM会在QQ群中会发放CDKEY，拼拼手速与运气吧！\r\n2. 通过转盘抽奖获得CDKEY进行兑换。\r\n3. 通过各类活动获得CDKEY\r\n");
        } else if (status == 1) {
            var cdkeyCode = cm.getText();
            cdkey = new Cdkey();
            cdkey.initCdkey(cdkeyCode);
            if (cdkey.id == 0) {
                cm.sendOk("CDKEY不存在或已经被人使用！" + cdkey.id);
                cm.dispose();
            } else {
                if (cdkey.isUse()) {
                    cm.sendOk("您输入的CDKEY已经使用过了！");
                    cm.dispose();
                } else {
                    var limit = cdkey.limitCount;
                    //进行次数判断
                    if (limit != -1) {
                        if (cm.getEventCount("CDKEY_ID_" + cdkey.cdkeyid, 1) >= limit) {
                            cm.sendOk("该礼包领取次数已经达到上限！");
                            cm.dispose();
                            return;
                        }
                    }
                    if (itemList == null)
                        itemList = cdkey.getCdkeyGifts();
                    var text = "您可以领取#r#e" + cdkey.name + "#n#k，内含：\r\n";
                    for (var i in itemList) {
                        var itemid = itemList[i]['itemid'];
                        var quantity = itemList[i]['quantity'];
                        var expiration = itemList[i]['expiration'];
                        text += "#i" + itemid + ":##b#z" + itemid + "# #rx" + quantity + "#k\r\n";
                    }
                    text += "是否现在就要领取？";
                    cm.sendYesNo(text);
                }
            }
        } else if (status == 2) {
            //领取过程
            if (!cm.canHoldSlots(itemList.length)) {
                cm.sendOk("请在每个背包栏目预留" + itemList.length + "个格子！");
                cm.dispose();
            } else {
                if (cdkey.use()) {
                    for (var i in itemList) {
                        var itemid = itemList[i]['itemid'];
                        var quantity = itemList[i]['quantity'];
                        var expiration = itemList[i]['expiration'];
                        if (expiration == -1) {
                            cm.gainItem(itemid, quantity);
                        } else {
                            cm.gainItem(itemid, quantity, expiration);
                        }
                    }
                    //CDKEY使用
                    cm.setEventCount("CDKEY_ID_" + cdkey.cdkeyid, 1);
                    cm.worldSpouseMessage(0x13, "[CDK中心] : 玩家 " + cm.getPlayer().getName() + " 使用兑换码领取了 [" + cdkey.name + " ] 一份！");
                    cm.sendOk("领取成功！");
                    cm.dispose();
                } else {
                    cm.sendOk("悲剧！礼包被人抢先使用了！");
                    cm.dispose();
                }
            }
        }
    }
}

var Cdkey = function () {
    this.id = 0;
    this.used = 0;
    this.cdkeyid = 0;
    this.name = '';
    this.owner = '';
    this.time = '';
    this.limitCount = 0;
    this.initCdkey = function (cdkey) {
        var rs = cm.sql_Select("SELECT c1.*, c2.name, c2.limit FROM cdkey c1, cdkey_name c2 WHERE c1.cdkeyid = c2.id AND (c1.owner = ? OR c1.owner = 0) AND c1.cdkey = ?", cm.getPlayer().getAccountID(), cdkey);
        for (var i in rs) {
            this.used = rs[i].get('used');
            this.cdkeyid = rs[i].get('cdkeyid');
            this.name = rs[i].get('name');
            this.owner = rs[i].get('owner');
            this.time = rs[i].get('postedtime');
            this.id = rs[i].get('id');
            this.limitCount = rs[i].get('limit');
        }
    }

    this.isUse = function () {
        return this.used;
    }

    this.use = function () {
        return cm.sql_Update("UPDATE cdkey SET used = 1, owner = ? WHERE id = ? AND used = 0", cm.getPlayer().getAccountID(), this.id);
    }

    this.getCdkeyGifts = function () {
        if (this.id == 0)
            return null;
        var rs = cm.sql_Select("SELECT * FROM cdkey_gifts WHERE cdkeyid = ?", this.cdkeyid);
        var list = [];
        for (var i in rs) {
            var itemid = rs[i].get('itemid');
            var quantity = rs[i].get('quantity');
            var expiration = rs[i].get('expiration');
            var data = new Array();
            data['itemid'] = itemid;
            data['quantity'] = quantity;
            data['expiration'] = expiration;
            list.push(data);
        }
        return list;
    }
}